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
N8N_I18N_DIR="$WORK_DIR/n8n-i18n-japanese"
N8N_DIR="$WORK_DIR/n8n"

# 1. 最新のGitHubリリースバージョンを取得
log_info "Getting latest GitHub release version..."
LATEST_VERSION=$(curl -s https://api.github.com/repos/n8n-io/n8n/releases/latest | jq -r '.tag_name')
log_info "Latest release tag: $LATEST_VERSION"

# 2. ローカルリポジトリをチェックアウト（既存の場合は更新）
log_info "Checking out local repository..."
if [ ! -d "$N8N_I18N_DIR" ]; then
    git clone https://github.com/Tomatio13/n8n-i18n-japanese.git "$N8N_I18N_DIR"
else
    cd "$N8N_I18N_DIR"
    git pull origin main
    cd "$WORK_DIR"
fi

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
pnpm install --frozen-lockfile

# 8. @n8n/storesパッケージのTypeScript設定修正とビルド
log_info "Fixing @n8n/stores TypeScript configuration and building..."
STORES_DIR="$N8N_DIR/packages/frontend/@n8n/stores"
if [ -d "$STORES_DIR" ]; then
    cd "$STORES_DIR"
    
    # TypeScript設定にmoduleResolutionを追加
    log_info "Updating tsconfig.json for @n8n/stores..."
    if ! grep -q '"moduleResolution"' tsconfig.json; then
        sed -i 's/"isolatedModules": true/"isolatedModules": true,/' tsconfig.json
        sed -i '/\"isolatedModules\": true,/a\\t\t\"moduleResolution\": \"bundler\"' tsconfig.json
        log_info "Added moduleResolution: bundler to tsconfig.json"
    fi
    
    # @n8n/storesパッケージをビルド
    log_info "Building @n8n/stores package..."
    if command -v npx &> /dev/null; then
        npx tsup
    else
        log_warn "npx not found, trying with pnpm..."
        pnpm run build --skip-typecheck || {
            log_warn "Build with typecheck failed, trying tsup directly..."
            pnpm exec tsup
        }
    fi
    
    # distディレクトリの存在確認
    if [ -d "dist" ]; then
        log_info "@n8n/stores build completed successfully"
    else
        log_error "@n8n/stores build failed - dist directory not found"
        exit 1
    fi
    
    cd "$N8N_DIR"
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
log_info "Moving editor-ui i18n language files..."
cp -r "$N8N_I18N_DIR/languages/"* "$EDITOR_UI_DIR/src/plugins/i18n/locales/"

# 11. パッチの適用
log_info "Applying patches..."
cd "$N8N_DIR"
if [ "$EDITOR_UI_FLAG" = "new" ]; then
    if [ -f "$N8N_I18N_DIR/fix_editor-ui.patch" ]; then
        git apply "$N8N_I18N_DIR/fix_editor-ui.patch"
        log_info "Applied new editor-ui patch"
    fi
else
    if [ -f "$N8N_I18N_DIR/fix_editor-ui.old.patch" ]; then
        git apply "$N8N_I18N_DIR/fix_editor-ui.old.patch"
        log_info "Applied old editor-ui patch"
    fi
fi

# 12. editor-uiのビルド
log_info "Building editor-ui..."
cd "$EDITOR_UI_DIR"
pnpm build

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
