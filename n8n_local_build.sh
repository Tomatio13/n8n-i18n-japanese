#!/bin/bash

# n8n editor-ui 言語ファイルのパッケージ化スクリプト
# GitHub Actionワークフローをシェルスクリプトに変換

set -e  # エラー時に終了

# 色付きログ出力用の関数
log_info() {
    echo -e "\033[32m[INFO]\033[0m $1"
}

log_error() {
    echo -e "\033[31m[ERROR]\033[0m $1"
}

log_warn() {
    echo -e "\033[33m[WARN]\033[0m $1"
}

# 変数設定
WORK_DIR=$(pwd)
N8N_I18N_DIR="$WORK_DIR"
N8N_DIR="$WORK_DIR/n8n"
LANGUAGES_DIR="$WORK_DIR/languages"

# n8nバージョン指定（2.5.0）
N8N_VERSION="n8n@2.5.0"
LATEST_VERSION="$N8N_VERSION"
log_info "Using n8n version: $LATEST_VERSION"

# 2. 言語ファイルの確認
log_info "Checking language files..."
if [ ! -d "$LANGUAGES_DIR" ] || [ ! -f "$LANGUAGES_DIR/ja.json" ]; then
    log_error "Language files not found in $LANGUAGES_DIR"
    log_error "Please ensure ja.json exists in the languages directory"
    exit 1
fi
log_info "Found language files in $LANGUAGES_DIR"

# 4. n8nリポジトリをチェックアウト
log_info "Checking out n8n repository..."
if [ -d "$N8N_DIR" ]; then
    rm -rf "$N8N_DIR"
fi
git clone --branch "$LATEST_VERSION" https://github.com/n8n-io/n8n.git "$N8N_DIR"

# 5. Node.jsのセットアップ確認
log_info "Checking Node.js setup..."
if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed. Please install Node.js 20.x or later."
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'.' -f1 | cut -d'v' -f2)
if [ "$NODE_VERSION" -lt 20 ]; then
    log_error "Node.js version 20 or later is required. Current version: $(node --version)"
    exit 1
fi

# 7. 依存関係のインストール
log_info "Installing dependencies..."
cd "$N8N_DIR"

# pnpmのバージョン確認と最適化設定
log_info "Configuring pnpm for optimal performance..."
if command -v pnpm &> /dev/null; then
    PNPM_VERSION=$(pnpm --version)
    log_info "Using pnpm version: $PNPM_VERSION"
    
    # pnpmの設定最適化
    pnpm config set auto-install-peers true
    pnpm config set strict-peer-dependencies false
    pnpm config set shamefully-hoist true
    pnpm config set prefer-workspace-packages true
else
    log_error "pnpm not found. Please install pnpm first."
    exit 1
fi

# 依存関係インストール（リトライ機能付き）
log_info "Installing dependencies with retry mechanism..."
for i in {1..3}; do
    if pnpm install --frozen-lockfile --prefer-offline; then
        log_info "Dependencies installed successfully on attempt $i"
        break
    else
        log_warn "Dependency installation failed on attempt $i"
        if [ $i -eq 3 ]; then
            log_error "Failed to install dependencies after 3 attempts"
            exit 1
        fi
        sleep 5
    fi
done

# n8nワークスペースの確認
log_info "Verifying n8n workspace configuration..."
if [ -f "pnpm-workspace.yaml" ]; then
    log_info "Found pnpm workspace configuration"
else
    log_warn "No pnpm workspace found - this may cause build issues"
fi

# 7.5. 依存関係順序でのパッケージビルド（@n8n/di → @n8n/config → n8n-workflowの順）
log_info "Building packages in correct dependency order..."
cd "$N8N_DIR"

# 1. @n8n/diパッケージのビルド（@n8n/configの依存関係）
log_info "🔧 Building @n8n/di package (required for @n8n/config)..."
DI_DIR="$N8N_DIR/packages/@n8n/di"
if [ -d "$DI_DIR" ]; then
    cd "$DI_DIR"
    
    log_info "📝 Using existing tsconfig.json for @n8n/di (no modifications needed)..."
    
    log_info "🏗️ Building @n8n/di package..."
    pnpm install --frozen-lockfile
    
    if [ -f "tsconfig.build.json" ]; then
        if command -v npx &> /dev/null; then
            npx tsc -p tsconfig.build.json
        else
            pnpm build
        fi
    else
        pnpm build
    fi
    
    if [ -d "dist" ]; then
        log_info "✅ @n8n/di build completed successfully"
    else
        log_error "❌ @n8n/di build failed - dist directory not found"
        exit 1
    fi
    cd "$N8N_DIR"
else
    log_warn "⚠️ @n8n/di directory not found, skipping..."
fi

# 2. @n8n/configパッケージのビルド（n8n-workflowの依存関係）
log_info "🔧 Building @n8n/config package (required for n8n-workflow)..."
CONFIG_DIR="$N8N_DIR/packages/@n8n/config"
if [ -d "$CONFIG_DIR" ]; then
    cd "$CONFIG_DIR"
    
    log_info "📝 Using existing tsconfig.json for @n8n/config (no modifications needed)..."
    
    log_info "🏗️ Building @n8n/config package..."
    pnpm install --frozen-lockfile
    
    if [ -f "tsconfig.build.json" ]; then
        if command -v npx &> /dev/null; then
            npx tsc -p tsconfig.build.json
        else
            pnpm build
        fi
    else
        pnpm build
    fi
    
    if [ -d "dist" ]; then
        log_info "✅ @n8n/config build completed successfully"
    else
        log_error "❌ @n8n/config build failed - dist directory not found"
        exit 1
    fi
    cd "$N8N_DIR"
else
    log_error "❌ @n8n/config directory not found: $CONFIG_DIR"
    exit 1
fi

# 3. @n8n/errors パッケージのビルド（n8n-workflow が依存）
log_info "🔧 Building @n8n/errors package (required for n8n-workflow)..."
ERRORS_DIR="$N8N_DIR/packages/@n8n/errors"
if [ -d "$ERRORS_DIR" ]; then
    cd "$ERRORS_DIR"
    
    log_info "📝 Using existing tsconfig for @n8n/errors (no modifications needed)..."
    
    log_info "🏗️ Building @n8n/errors package..."
    pnpm install --frozen-lockfile
    
    if [ -f "tsconfig.build.json" ]; then
        if command -v npx &> /dev/null; then
            npx tsc -p tsconfig.build.json
        else
            pnpm build
        fi
    else
        pnpm build
    fi
    
    if [ -d "dist" ]; then
        log_info "✅ @n8n/errors build completed successfully"
    else
        log_error "❌ @n8n/errors build failed - dist directory not found"
        exit 1
    fi
    cd "$N8N_DIR"
else
    log_error "❌ @n8n/errors directory not found: $ERRORS_DIR"
    exit 1
fi

# 4. @n8n/expression-runtimeパッケージのビルド（n8n-workflowの依存関係）
log_info "🔧 Building @n8n/expression-runtime package (required for n8n-workflow)..."
EXPRESSION_RUNTIME_DIR="$N8N_DIR/packages/@n8n/expression-runtime"
if [ -d "$EXPRESSION_RUNTIME_DIR" ]; then
    cd "$EXPRESSION_RUNTIME_DIR"

    log_info "📝 Using existing tsconfig.json for @n8n/expression-runtime..."

    log_info "🏗️ Building @n8n/expression-runtime package..."
    pnpm install --frozen-lockfile

    if [ -f "tsconfig.build.json" ]; then
        pnpm exec tsc -p tsconfig.build.json
    else
        pnpm build
    fi

    if [ -d "dist" ]; then
        log_info "✅ @n8n/expression-runtime build completed successfully"
    else
        log_error "❌ @n8n/expression-runtime build failed - dist directory not found"
        exit 1
    fi
    cd "$N8N_DIR"
else
    log_warn "⚠️ @n8n/expression-runtime directory not found, skipping (may not be needed for this version)..."
fi

# 5. n8n-workflowパッケージのビルド（他のパッケージの依存関係として必要）
log_info "🔧 Building n8n-workflow package (required for all other packages)..."
WORKFLOW_DIR="$N8N_DIR/packages/workflow"
if [ -d "$WORKFLOW_DIR" ]; then
    cd "$WORKFLOW_DIR"
    
    log_info "📝 Using existing tsconfig.json for n8n-workflow (no modifications needed)..."
    
    log_info "🏗️ Building n8n-workflow package..."
    # 依存関係の再確認
    pnpm install --frozen-lockfile
    
    # 複数のビルド方法を試行
    if [ -f "tsconfig.build.json" ]; then
        log_info "📝 Building with tsconfig.build.json..."
        if command -v npx &> /dev/null; then
            npx tsc -p tsconfig.build.json
        else
            pnpm exec tsc -p tsconfig.build.json
        fi
    elif [ -f "package.json" ] && grep -q '"build"' package.json; then
        log_info "📝 Building with pnpm build..."
        pnpm build
    else
        log_info "📝 Building with direct TypeScript compilation..."
        if command -v npx &> /dev/null; then
            npx tsc
        else
            pnpm exec tsc
        fi
    fi
    
    if [ -d "dist" ]; then
        log_info "✅ n8n-workflow build completed successfully"
    else
        log_error "❌ n8n-workflow build failed - dist directory not found"
        exit 1
    fi
    cd "$N8N_DIR"
else
    log_error "❌ n8n-workflow directory not found: $WORKFLOW_DIR"
    exit 1
fi

# 4. 他の基本パッケージも事前ビルド
log_info "Pre-building other essential packages (non-fatal)..."
ESSENTIAL_PACKAGES=("packages/core" "packages/cli")
for pkg in "${ESSENTIAL_PACKAGES[@]}"; do
    if [ -d "$pkg" ]; then
        cd "$pkg"
        pkg_name=$(basename "$pkg")
        log_info "Building $pkg_name package (will not fail build on error)..."

        if [ -f "tsconfig.build.json" ]; then
            pnpm exec tsc -p tsconfig.build.json 2>/dev/null || log_warn "$pkg_name tsc had errors, skipping..."
        elif grep -q '"build"' package.json 2>/dev/null; then
            pnpm build 2>/dev/null || log_warn "$pkg_name build had warnings, continuing..."
        else
            log_warn "No build script for $pkg_name, skipping..."
        fi

        cd "$N8N_DIR"
    fi
done

# 8. @n8n/storesパッケージのTypeScript設定修正とビルド
log_info "Fixing @n8n/stores TypeScript configuration and building..."
STORES_DIR="$N8N_DIR/packages/frontend/@n8n/stores"
if [ -d "$STORES_DIR" ]; then
    cd "$STORES_DIR"
    
    # TypeScript設定にmoduleResolutionを追加
    log_info "Updating tsconfig.json for @n8n/stores..."
    if ! grep -q '"moduleResolution"' tsconfig.json; then
        # isolatedModulesの行を見つけて、カンマが無い場合のみ追加
        if grep -q '"isolatedModules": true[^,]' tsconfig.json; then
            sed -i 's/"isolatedModules": true/"isolatedModules": true,/' tsconfig.json
        fi
        # moduleResolutionを追加（カンマ付きで）
        sed -i '/\"isolatedModules\": true,/a\\t\t\"moduleResolution\": \"bundler\",' tsconfig.json
        log_info "Added moduleResolution: bundler to tsconfig.json"
    fi
    
    # @n8n/storesパッケージをビルド
    log_info "Building @n8n/stores package..."
    
    # まずpackage.jsonのbuildスクリプトを確認
    if [ -f "package.json" ] && grep -q '"build"' package.json; then
        log_info "Using pnpm build from package.json..."
        pnpm build 2>/dev/null || {
            log_warn "pnpm build failed, trying alternative methods..."
            # tsup.config.tsが存在する場合
            if [ -f "tsup.config.ts" ] || [ -f "tsup.config.js" ]; then
                if command -v npx &> /dev/null; then
                    npx tsup --no-dts 2>/dev/null || log_warn "tsup also failed, but continuing..."
                else
                    pnpm exec tsup --no-dts 2>/dev/null || log_warn "tsup also failed, but continuing..."
                fi
            else
                log_warn "No tsup config found, skipping @n8n/stores build (may not be required)"
            fi
        }
    else
        log_warn "No build script in package.json, trying tsup directly..."
        if [ -f "tsup.config.ts" ] || [ -f "tsup.config.js" ]; then
            if command -v npx &> /dev/null; then
                npx tsup --no-dts 2>/dev/null || log_warn "tsup failed, but continuing..."
            else
                pnpm exec tsup --no-dts 2>/dev/null || log_warn "tsup failed, but continuing..."
            fi
        else
            log_warn "No tsup config found, @n8n/stores may not need building"
        fi
    fi
    
    # distディレクトリの存在確認（警告のみ、エラーで停止しない）
    if [ -d "dist" ]; then
        log_info "✅ @n8n/stores build completed successfully"
    else
        log_warn "⚠️ @n8n/stores dist directory not found, but continuing (may not be required for editor-ui)"
    fi
else
    log_warn "@n8n/stores directory not found, skipping stores build"
fi

# 9. editor-uiディレクトリの確認
log_info "Checking editor-ui directory structure..."
NEW_DIR_PATH="$N8N_DIR/packages/frontend/editor-ui"
OLD_DIR_PATH="$N8N_DIR/packages/editor-ui"

if [ -d "$NEW_DIR_PATH" ]; then
    EDITOR_UI_FLAG="new"
    EDITOR_UI_DIR="$NEW_DIR_PATH"
    log_info "Using new editor-ui structure: $EDITOR_UI_DIR"
else
    EDITOR_UI_FLAG="old"
    EDITOR_UI_DIR="$OLD_DIR_PATH"
    log_info "Using old editor-ui structure: $EDITOR_UI_DIR"
fi

# 10. 言語ファイルのコピー
log_info "Moving i18n language files..."
I18N_LOCALES_DIR="$N8N_DIR/packages/frontend/@n8n/i18n/src/locales"
if [ -d "$I18N_LOCALES_DIR" ]; then
    cp -r "$LANGUAGES_DIR/"* "$I18N_LOCALES_DIR/"
    log_info "Copied language files from $LANGUAGES_DIR to $I18N_LOCALES_DIR"
    
    # コピーされたファイルを確認
    if [ -f "$I18N_LOCALES_DIR/ja.json" ]; then
        JA_FILE_SIZE=$(wc -c < "$I18N_LOCALES_DIR/ja.json")
        log_info "✅ ja.json copied successfully (size: $JA_FILE_SIZE bytes)"
    else
        log_error "❌ ja.json not found after copy operation"
        exit 1
    fi
    
    # @n8n/i18nパッケージのビルド
    log_info "Building @n8n/i18n package..."
    cd "$N8N_DIR/packages/frontend/@n8n/i18n"
    
    # TypeScript設定の更新
    if ! grep -q '"moduleResolution"' tsconfig.json; then
        # resolveJsonModuleの行を見つけて、カンマが無い場合のみ追加
        if grep -q '"resolveJsonModule": true[^,]' tsconfig.json; then
            sed -i 's/"resolveJsonModule": true/"resolveJsonModule": true,/' tsconfig.json
        fi
        # moduleResolutionを追加（カンマ付きで）
        sed -i '/\"resolveJsonModule\": true,/a\\t\t\"moduleResolution\": \"bundler\",' tsconfig.json
        log_info "Added moduleResolution: bundler to @n8n/i18n tsconfig.json"
    fi
    
    # 依存関係の確認とインストール
    pnpm install --frozen-lockfile
    
    # ビルド実行（tsdownを使用）
    log_info "Running tsdown build..."
    pnpm build
    
    if [ -d "dist" ]; then
        log_info "@n8n/i18n build completed successfully"
    else
        log_error "@n8n/i18n build failed - dist directory not found"
        exit 1
    fi
    
    cd "$N8N_DIR"
else
    log_error "i18n locales directory not found: $I18N_LOCALES_DIR"
    exit 1
fi

# 11. パッチの適用（必要な場合のみ）
log_info "Checking if patches are needed..."
cd "$N8N_DIR"

# パッチが必要かどうかをチェック
CREDENTIAL_CONFIG_FILE="$EDITOR_UI_DIR/src/components/CredentialEdit/CredentialConfig.vue"
PATCH_NEEDED=false

if [ -f "$CREDENTIAL_CONFIG_FILE" ]; then
    # credTranslationのnullチェックが既に存在するかチェック
    if ! grep -q "if (!credTranslation) return;" "$CREDENTIAL_CONFIG_FILE"; then
        PATCH_NEEDED=true
        log_info "Null check for credTranslation not found - patch is needed"
    else
        log_info "Null check for credTranslation already exists - patch not needed"
    fi
else
    log_warn "CredentialConfig.vue not found at expected location"
fi

# パッチが必要な場合のみ適用
if [ "$PATCH_NEEDED" = true ]; then
    log_info "Applying patches..."
    if [ "$EDITOR_UI_FLAG" = "new" ]; then
        if [ -f "$N8N_I18N_DIR/fix_editor-ui.patch" ]; then
            # パッチファイルが実際のパッチ内容を含んでいるかチェック
            if grep -q "diff --git" "$N8N_I18N_DIR/fix_editor-ui.patch"; then
                git apply "$N8N_I18N_DIR/fix_editor-ui.patch"
                log_info "Applied new editor-ui patch"
            else
                log_info "Patch file contains no diff content - skipping"
            fi
        fi
    else
        if [ -f "$N8N_I18N_DIR/fix_editor-ui.old.patch" ]; then
            git apply "$N8N_I18N_DIR/fix_editor-ui.old.patch"
            log_info "Applied old editor-ui patch"
        fi
    fi
else
    log_info "Patches not needed for this n8n version - skipping patch application"
fi

# 11.1. editor-uiの言語読み込みパッチ適用
log_info "Ensuring editor-ui dynamically loads locale bundles..."
APP_LOCALE_SCRIPT="$N8N_I18N_DIR/script/ensure_app_locale_loader.py"
APP_VUE_PATH="$EDITOR_UI_DIR/src/app/App.vue"
if [ -f "$APP_LOCALE_SCRIPT" ]; then
    if grep -q "runtimeLoadedLocales" "$APP_VUE_PATH"; then
        log_info "Locale loader patch already applied - skipping"
    else
        if python3 "$APP_LOCALE_SCRIPT" "$APP_VUE_PATH"; then
            log_info "Applied locale loader updates to App.vue"
        else
            log_warn "Failed to update App.vue locale loader (App.vue may have changed upstream)"
        fi
    fi
else
    log_warn "Locale loader script not found in repository root - skipping locale update"
fi

# 11.5. @n8n/rest-api-clientのビルド（editor-uiビルドに必要）
log_info "Building @n8n/rest-api-client (required for editor-ui)..."
REST_API_CLIENT_DIR="$N8N_DIR/packages/frontend/@n8n/rest-api-client"
if [ -d "$REST_API_CLIENT_DIR" ]; then
    cd "$REST_API_CLIENT_DIR"
    
    # TypeScript設定にmoduleResolutionを追加（既存設定の最小変更）
    if ! grep -q '"moduleResolution"' tsconfig.json; then
        # isolatedModulesの行を見つけて、カンマが無い場合のみ追加
        if grep -q '"isolatedModules": true[^,]' tsconfig.json; then
            sed -i 's/"isolatedModules": true/"isolatedModules": true,/' tsconfig.json
        fi
        # moduleResolutionを追加（カンマ付きで）
        sed -i '/\"isolatedModules\": true,/a\\t\t\"moduleResolution\": \"bundler\",' tsconfig.json
        log_info "Added moduleResolution: bundler to @n8n/rest-api-client tsconfig.json"
    fi
    
    # tsdownを使用してビルド
    log_info "Running tsdown build for rest-api-client..."
    pnpm build
    
    # distディレクトリの存在確認
    if [ -d "dist" ]; then
        log_info "@n8n/rest-api-client build completed successfully"
    else
        log_error "@n8n/rest-api-client build failed - dist directory not found"
        exit 1
    fi
    
    cd "$N8N_DIR"
else
    log_warn "@n8n/rest-api-client directory not found, skipping rest-api-client build"
fi

# 11.6. @n8n/utilsパッケージのビルド（editor-uiの依存関係）
log_info "Building @n8n/utils package (required for editor-ui)..."
UTILS_DIR="$N8N_DIR/packages/@n8n/utils"
if [ -d "$UTILS_DIR" ]; then
    cd "$UTILS_DIR"
    
    # TypeScript設定の修正
    if [ -f "tsconfig.json" ] && ! grep -q '"moduleResolution"' tsconfig.json; then
        if grep -q '"isolatedModules": true[^,]' tsconfig.json; then
            sed -i 's/"isolatedModules": true/"isolatedModules": true,/' tsconfig.json
        fi
        sed -i '/\"isolatedModules\": true,/a\\t\t\"moduleResolution\": \"bundler\",' tsconfig.json
        log_info "Added moduleResolution: bundler to @n8n/utils tsconfig.json"
    fi
    
    # 依存関係の確認とインストール
    pnpm install --frozen-lockfile
    
    # ビルド実行
    if [ -f "tsconfig.build.json" ]; then
        pnpm exec tsc -p tsconfig.build.json || pnpm build || log_warn "@n8n/utils build had warnings"
    else
        pnpm build || log_warn "@n8n/utils build had warnings"
    fi
    
    if [ -d "dist" ]; then
        log_info "✅ @n8n/utils build completed successfully"
    else
        log_warn "⚠️ @n8n/utils dist directory not found, but continuing..."
    fi
    
    cd "$N8N_DIR"
else
    log_warn "⚠️ @n8n/utils directory not found, skipping..."
fi

# 11.7. @n8n/codemirror-lang-htmlパッケージのビルド（editor-uiの依存関係）
log_info "Building @n8n/codemirror-lang-html package (required for editor-ui)..."
CODEMIRROR_HTML_DIR="$N8N_DIR/packages/@n8n/codemirror-lang-html"
if [ -d "$CODEMIRROR_HTML_DIR" ]; then
    cd "$CODEMIRROR_HTML_DIR"
    
    pnpm install --frozen-lockfile
    pnpm build
    
    if [ -d "dist" ]; then
        log_info "✅ @n8n/codemirror-lang-html build completed successfully"
    else
        log_error "@n8n/codemirror-lang-html build failed - dist directory not found"
        exit 1
    fi
    
    cd "$N8N_DIR"
else
    log_warn "@n8n/codemirror-lang-html directory not found, skipping"
fi

# 11.7. @n8n/vitest-configのビルド（editor-uiビルドに必要）
log_info "Building @n8n/vitest-config (required for editor-ui)..."
VITEST_CONFIG_DIR="$N8N_DIR/packages/@n8n/vitest-config"
if [ -d "$VITEST_CONFIG_DIR" ]; then
    cd "$VITEST_CONFIG_DIR"
    
    # TypeScriptビルドを実行
    log_info "Building @n8n/vitest-config package..."
    if command -v npx &> /dev/null; then
        npx tsc -p tsconfig.build.json
    else
        log_warn "npx not found, trying with pnpm..."
        pnpm build
    fi
    
    # distディレクトリの存在確認
    if [ -d "dist" ]; then
        log_info "@n8n/vitest-config build completed successfully"
    else
        log_error "@n8n/vitest-config build failed - dist directory not found"
        exit 1
    fi
    
    cd "$N8N_DIR"
else
    log_warn "@n8n/vitest-config directory not found, skipping vitest-config build"
fi

# 11.8. n8n-workflowパッケージは既にビルド済み（7.5で実行済み）
log_info "n8n-workflow package already built in dependency order section (7.5)"

# 11.9. n8n-coreパッケージのビルド（editor-uiビルドに必要）
log_warn "Skipping n8n-core build (not required for editor-ui packaging)"

# 12. editor-uiのビルド
log_info "Building editor-ui..."
cd "$EDITOR_UI_DIR"

# TypeScript設定の確認と修正（Vite 6.x対応）
log_info "Checking editor-ui TypeScript configuration..."
if [ -f "tsconfig.json" ]; then
    if ! grep -q '"moduleResolution"' tsconfig.json; then
        # compilerOptionsセクション内の適切な位置にmoduleResolutionを追加
        if grep -q '"strict": true[^,]' tsconfig.json; then
            sed -i 's/"strict": true/"strict": true,/' tsconfig.json
        fi
        # moduleResolutionを追加（カンマ付きで）
        sed -i '/\"strict\": true,/a\\t\t\"moduleResolution\": \"bundler\",' tsconfig.json
        log_info "Added moduleResolution: bundler to editor-ui tsconfig.json"
    fi
fi

# Vite設定の確認と修正
log_info "Checking editor-ui Vite configuration..."
VITE_CONFIG="vite.config.mts"
if [ -f "$VITE_CONFIG" ]; then
    # optimizeDeps.esbuildOptionsの非推奨警告を修正
    if grep -q "optimizeDeps:" "$VITE_CONFIG" && grep -q "esbuildOptions:" "$VITE_CONFIG"; then
        # esbuildOptionsをrollupOptionsに置き換え
        sed -i 's/esbuildOptions:/rollupOptions:/g' "$VITE_CONFIG"
        log_info "✅ Updated optimizeDeps.esbuildOptions to optimizeDeps.rollupOptions"
    fi
fi

# editor-ui互換性パッチ（codemirror html / i18n HMR）
COMPAT_SCRIPT="$N8N_I18N_DIR/script/ensure_editor_ui_build_compat.py"
if [ -f "$COMPAT_SCRIPT" ]; then
    log_info "Applying editor-ui compatibility updates..."
    python3 "$COMPAT_SCRIPT" "$EDITOR_UI_DIR"
else
    log_warn "Compatibility script not found - skipping editor-ui compatibility updates"
fi

# 依存関係の再確認とインストール
log_info "Installing editor-ui dependencies..."
pnpm install --frozen-lockfile

# ビルド実行
log_info "Building editor-ui..."
if ! pnpm build; then
    log_warn "⚠️ Initial build failed, trying with error recovery..."
    
    # TypeScript設定の最終確認
    if [ -f "tsconfig.json" ] && ! grep -q '"moduleResolution"' tsconfig.json; then
        log_info "📝 Adding final TypeScript fixes..."
        sed -i '/\"compilerOptions\": {/a\\t\t\"moduleResolution\": \"bundler\",' tsconfig.json
    fi
    
    # 再試行
    log_info "🔄 Retrying editor-ui build..."
    pnpm build || {
        log_error "❌ Editor-ui build failed after retry"
        exit 1
    }
fi

# ビルド成果物の確認
if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
    log_info "✅ Editor-ui build completed successfully"
    log_info "📁 Dist directory contents:"
    ls -la dist/ | head -10
    
    # localesディレクトリの確認とコピー
    log_info "🔍 Checking for locales directory in dist..."
    
    # まず、distディレクトリの構造を確認
    log_info "📋 Dist directory structure:"
    find dist -type d -name "locales" 2>/dev/null | head -5
    find dist -name "ja.json" 2>/dev/null | head -5
    
    # 複数の可能性のあるパスをチェック
    LOCALES_PATHS=(
        "dist/locales"
        "dist/static/locales"
        "dist/assets/locales"
    )
    
    LOCALES_FOUND=false
    for LOCALES_PATH in "${LOCALES_PATHS[@]}"; do
        if [ -d "$LOCALES_PATH" ]; then
            log_info "✅ Found locales directory at: $LOCALES_PATH"
            if [ -f "$LOCALES_PATH/ja.json" ]; then
                JA_DIST_SIZE=$(wc -c < "$LOCALES_PATH/ja.json")
                log_info "✅ Found ja.json in $LOCALES_PATH (size: $JA_DIST_SIZE bytes)"
                LOCALES_FOUND=true
                break
            else
                log_warn "⚠️ ja.json not found in $LOCALES_PATH"
                log_info "📋 Files in $LOCALES_PATH:"
                ls -la "$LOCALES_PATH/" 2>/dev/null | head -10
            fi
        fi
    done
    
    # localesが見つからない場合、手動でコピーを試みる
    if [ "$LOCALES_FOUND" = false ]; then
        log_warn "⚠️ locales directory not found in expected locations"
        log_info "🔄 Attempting to copy locales manually..."
        
        # ソースディレクトリを確認（複数の可能性）
        SOURCE_PATHS=(
            "$I18N_LOCALES_DIR"
            "$N8N_DIR/packages/frontend/@n8n/i18n/src/locales"
            "$N8N_DIR/packages/frontend/@n8n/i18n/dist/locales"
        )
        
        SOURCE_FOUND=false
        for SOURCE_PATH in "${SOURCE_PATHS[@]}"; do
            if [ -d "$SOURCE_PATH" ] && [ -f "$SOURCE_PATH/ja.json" ]; then
                log_info "✅ Found source locales at: $SOURCE_PATH"
                mkdir -p dist/locales
                cp -r "$SOURCE_PATH/"* dist/locales/
                if [ -f "dist/locales/ja.json" ]; then
                    JA_DIST_SIZE=$(wc -c < "dist/locales/ja.json")
                    log_info "✅ Successfully copied locales to dist/locales (size: $JA_DIST_SIZE bytes)"
                    LOCALES_FOUND=true
                    SOURCE_FOUND=true
                    break
                fi
            fi
        done
        
        if [ "$SOURCE_FOUND" = false ]; then
            log_error "❌ Source locales directory not found in any expected location"
            log_info "📋 Checking available paths:"
            for SOURCE_PATH in "${SOURCE_PATHS[@]}"; do
                if [ -d "$SOURCE_PATH" ]; then
                    log_info "  - $SOURCE_PATH exists"
                    ls -la "$SOURCE_PATH/" 2>/dev/null | head -5
                else
                    log_info "  - $SOURCE_PATH does not exist"
                fi
            done
        fi
    fi
    
    # 最終確認（複数のパスをチェック）
    JA_JSON_FOUND=false
    FINAL_PATHS=(
        "dist/locales/ja.json"
        "dist/static/locales/ja.json"
        "dist/assets/locales/ja.json"
    )
    
    for FINAL_PATH in "${FINAL_PATHS[@]}"; do
        if [ -f "$FINAL_PATH" ]; then
            JA_DIST_SIZE=$(wc -c < "$FINAL_PATH")
            log_info "✅✅✅ Japanese localization file confirmed at: $FINAL_PATH (size: $JA_DIST_SIZE bytes) ✅✅✅"
            JA_JSON_FOUND=true
            break
        fi
    done
    
    if [ "$JA_JSON_FOUND" = false ]; then
        log_error "❌❌❌ CRITICAL: ja.json not found in dist after all attempts ❌❌❌"
        log_error "Please check the build process and ensure locales are copied correctly"
        log_info "📋 Full dist directory structure:"
        find dist -type f -name "*.json" 2>/dev/null | head -20
        exit 1
    fi
else
    log_error "❌ Editor-ui build failed - dist directory is empty or missing"
    exit 1
fi

# 13. 成果物のパッケージ化
log_info "Packaging build artifacts..."
tar -czvf editor-ui.tar.gz dist

# tar.gzをWORKにこぴー
cp -p editor-ui.tar.gz "$WORK_DIR"

# 17. GitHub Releaseの作成（手動で行う場合の指示）
log_info "Build completed successfully!"
log_info "To create a GitHub Release:"
log_info "1. Go to your repository on GitHub"
log_info "2. Navigate to Releases"
log_info "3. Click 'Create a new release'"
log_info "4. Use tag: $LATEST_VERSION"
log_info "5. Build file: $EDITOR_UI_DIR/editor-ui.tar.gz"
log_info "6. Use title: Release editor-ui (ja) to $LATEST_VERSION"
log_info "7. Use description: 自動公開される日本語の言語パックバージョンです。 (Automated release of Japanese language pack.)"

log_info "以下のディレクトリ配下でeditor-ui.tar.gzを解凍してください"
log_info "/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/"

log_info "Script completed successfully!"
