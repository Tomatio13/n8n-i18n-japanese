# n8n 日本語化プロジェクト

このプロジェクトは、n8n のユーザーインターフェース (UI) を日本語で利用可能にすることを目的としています。

**多くのユーザーにとって最も簡単な方法は、GitHub Releases からビルド済みの日本語化パッケージをダウンロードすることです。**

[**最新の日本語化パッケージはこちらからダウンロード (GitHub Releases)**](https://github.com/Tomatio13/n8n-i18n-japanese/releases)

このリリースには、特定の n8n バージョンに対応した翻訳済み `editor-ui` が `editor-ui.tar.gz` として含まれています。
これを利用することで、煩雑なビルド作業なしに n8n を日本語で利用開始できます。

## 主な機能

*   **翻訳済み `editor-ui` の配布 (推奨)**: 最新の n8n リリースに対応した、日本語化済みの `editor-ui` ビルド成果物を [GitHub Releases](https://github.com/Tomatio13/n8n-i18n-japanese/releases) で公開しています。
*   **日本語翻訳ファイルの提供**: n8n の UI テキストに対応する日本語の翻訳ファイル ([`languages/ja.json`](languages/ja.json:0)) を提供します。これは主に開発者や、自身でビルドを行いたい方向けです。
*   **Docker イメージでの簡易利用**: `docker-compose` を使用して、日本語化された n8n 環境を簡単に起動できます。

## 利用方法

### 1. GitHub Releases からパッケージを取得して利用する (推奨)

1.  **パッケージのダウンロード**:
    [GitHub Releases ページ](https://github.com/Tomatio13/n8n-i18n-japanese/releases) から、利用したい n8n のバージョンに対応する `editor-ui.tar.gz` をダウンロードします。
2.  **パッケージの展開**:
    ダウンロードした `editor-ui.tar.gz` を展開し、`editor-ui-dist` ディレクトリを取得します。
3.  **Docker で n8n を起動**:
    以下のいずれかの方法で Docker を利用して n8n を起動します。

    *   **`docker-compose.yml` を利用する場合 (簡単):**
        1.  このリポジトリをクローンまたはダウンロードします。
            ```shell
            git clone https://github.com/Tomatio13/n8n-i18n-japanese.git # またはあなたのフォーク
            cd n8n-i18n-japanese
            ```
        2.  取得した `editor-ui-dist` ディレクトリを、クローンしたリポジトリのルート (`docker-compose.yml` と同じ階層) に配置します。
        3.  `docker-compose.yml` 内の `image: n8nio/n8n:{version}` の `{version}` を、ダウンロードしたパッケージが対応する n8n のバージョンに合わせてください (例: `n8nio/n8n:1.23.0`)。
        4.  Docker Compose を起動します。
            ```shell
            docker-compose up
            ```
            これにより、配置した `editor-ui-dist` がコンテナにマウントされ、n8n が日本語 UI で起動します。

    *   **`docker run` コマンドを利用する場合:**
        ```shell
        # 【】内はご自身の環境に合わせて変更してください
        docker run -it --rm --name n8n-japanese-test \
        -p 15678:5678 \
        -v 【ローカルの editor-ui-dist ディレクトリのパス】:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist \
        -e N8N_DEFAULT_LOCALE=ja \
        -e N8N_SECURE_COOKIE=false \
        n8nio/n8n:【n8nのバージョン】
        ```
        【n8nのバージョン】には、ダウンロードしたパッケージが対応するバージョンを指定してください。

### 2. 手動で翻訳とビルドを行う場合 (開発者向け)

最新の翻訳を自分で生成したり、開発目的で利用したりする場合は、以下の手順で手動実行できます。

1.  **環境変数の設定**:
    *   n8n のデフォルト言語を日本語に設定します。プロジェクトルートに `.env` ファイルを作成し、以下を記述するか、環境変数として設定してください。
        ```
        N8N_DEFAULT_LOCALE=ja
        ```
    *   翻訳スクリプトは Gemini API を利用します。プロジェクトルートに `.env` ファイルを作成 (または `.env.example` をコピーして編集) し、以下の環境変数を設定してください。
        ```dotenv
        # Gemini API Key (必須)
        GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"

        # Gemini Model (任意、デフォルト: gemini-pro)
        # 例: GEMINI_MODEL="gemini-1.5-flash-latest"
        GEMINI_MODEL="gemini-pro"

        # 翻訳プロンプト (任意、未設定の場合はスクリプト内のデフォルトプロンプトを使用)
        # LLMに翻訳方法を指示するプロンプトです。
        # カスタマイズする場合は、スクリプトが期待するプレースホルダー (${language}, ${uniqueSeparator}, ${textsToTranslate}) を含める必要があります。
        # 詳細は .env.example ファイルおよび script/translate.js 内のデフォルトプロンプトを参照してください。
        # TRANSLATION_PROMPT="ここにカスタムプロンプトを記述..."
        #
        # 翻訳対象言語 (任意、未設定の場合は日本語のみを対象とします)
        # JSON形式の文字列で、オブジェクトの配列として指定します。
        # 各オブジェクトは "name" (言語コード) と "label" (言語名) を持つ必要があります。
        # 例: TARGET_LANGUAGES='[{"name":"ja","label":"日本語"},{"name":"en","label":"English"}]'
        # TARGET_LANGUAGES='[{"name":"ja","label":"日本語"}]'
        ```
2.  **依存関係のインストール**:
    ```shell
    npm install
    ```
3.  **翻訳スクリプトの実行**:
    以下のコマンドで、最新の英語ロケールファイルを取得し、日本語に翻訳して [`languages/ja.json`](languages/ja.json:0) を更新します。
    ```shell
    npm run i18n:translate
    ```
    このスクリプトは、[`script/en.json`](script/en.json:0) (前回取得した英語ロケール) と比較し、差分のみを翻訳します。
4.  **ビルド済み `editor-ui` の配置**:
    上記スクリプトは翻訳ファイルを作成するのみです。n8n 本体に日本語 UI を適用するには、n8n のソースコードを取得し、`languages/ja.json` を配置した上で `editor-ui` パッケージをビルドし、生成された `dist` ディレクトリを n8n のインストール先に配置する必要があります。
    このリポジトリの GitHub Actions では、このビルドプロセスを自動化し、`editor-ui-dist` ディレクトリを生成して GitHub Releases に公開しています。

## 翻訳の仕組み

1.  **英語ロケールファイルの取得**: n8n の公式リポジトリから最新の英語ロケールファイル (`en.json`) を取得します。
2.  **差分翻訳**: ローカルに保存されている前回の英語ロケールファイル ([`script/en.json`](script/en.json:0)) と比較し、新規追加または変更されたテキストのみを抽出します。
3.  **自動翻訳**: 抽出されたテキストを、[`script/translate.js`](script/translate.js:0) スクリプトが Gemini API を利用して日本語に翻訳します。
4.  **翻訳ファイルの保存**: 翻訳結果を既存の日本語翻訳ファイル ([`languages/ja.json`](languages/ja.json:0)) にマージ・更新します。
5.  **UI への適用**: 更新された `ja.json` を含む `editor-ui` パッケージをビルドし、n8n 環境に配置します。環境変数 `N8N_DEFAULT_LOCALE=ja` を設定することで、n8n の UI が日本語で表示されます。

## GitHub Actions による自動化

このリポジトリでは、GitHub Actions ([`.github/workflows/node.js.yml`](.github/workflows/node.js.yml:0)) を利用して、以下の処理を自動化し、[GitHub Releases](https://github.com/Tomatio13/n8n-i18n-japanese/releases) に日本語化パッケージを公開しています。

*   **定期的な n8n リリースチェック**: 毎日定時に n8n の GitHub リポジトリを監視し、新しいリリースがないか確認します。
*   **自動ビルドとパッケージ化**:
    *   新しい n8n のリリースが検出されると、そのバージョンの n8n ソースコードをチェックアウトします。
    *   [`languages/ja.json`](languages/ja.json:0) を n8n のソースツリー内の適切な位置にコピーします。
    *   n8n のバージョンに応じて、適切なパッチファイル ([`fix_editor-ui.patch`](fix_editor-ui.patch:0) または [`fix_editor-ui.old.patch`](fix_editor-ui.old.patch:0)) を適用します。これらのパッチは、翻訳表示に関する軽微な不具合を修正します。
    *   日本語化された `editor-ui` パッケージをビルドします。
    *   ビルドされた `dist` ディレクトリを `editor-ui-dist` としてリポジトリにコミットし、さらに `editor-ui.tar.gz` としてアーカイブします。
    *   `docker-compose.yml` 内の n8n バージョンを、処理対象の n8n バージョンに更新します。
*   **GitHub Release の作成**:
    *   ビルドされた `editor-ui.tar.gz` を添付ファイルとして、新しい GitHub Release を作成します。
    *   リリースには、対応する n8n のバージョンを示すタグ (例: `n8n@1.86.1`) が付けられます。このタグはリポジトリにもプッシュされます。

この自動化により、ユーザーは常に最新の n8n バージョンに対応した日本語化パッケージを容易に入手できます。

## コントリビューション

翻訳の改善や、他の言語パックの追加、機能改善に関するプルリクエストを歓迎します。

*   **他の言語パックの追加**:
    1.  [`languages/`](languages/) ディレクトリに `{言語コード}.json` (例: `ko.json`) の形式でファイルを作成します。
    2.  [`script/translate.js`](script/translate.js:0) の `targetLanguages` 配列に新しい言語の情報を追加します。
    3.  プルリクエストを送信してください。可能であれば、翻訳スクリプトが新しい言語に対応できるように修正を加えてください。
*   **不具合報告・改善提案**: Issues にてご報告ください。
