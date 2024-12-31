const express = require('express');
const app = express();

// ポート番号
const PORT = process.env.PORT || 3000;

// ルートハンドラー
app.get('/', (req, res) => {
  res.send('Hello, Kazuma!');
});

// サーバーの起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
