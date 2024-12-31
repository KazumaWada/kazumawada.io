# ベースイメージとして公式のNode.jsイメージを使用
FROM node:14

# 作業ディレクトリを /app に設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY app/package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY app/ .

# ポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
