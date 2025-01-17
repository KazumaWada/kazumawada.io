const express = require('express');
const path = require('path');
const app = express();

// 通信入口 (環境変数 otherwise 3000)
const PORT = process.env.PORT || 3000;

//ブラウザからpublic内をアクセス可能にする
app.use(express.static(path.join(__dirname, "public")));

// router

// root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "profile.html"));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "blog.html"));
});

app.get('/blog/:postId', (req, res) => {
  const postId = req.params.postId; // "post1" など
  res.sendFile(path.join(__dirname, "public", "blog", `${postId}.html`));
});


// /eigopencil
app.get('/eigopencil', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "eigopencil.html"));
});

// /travelpackhub
app.get('/travelpackhub', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "travelpackhub.html"));
});

// 通信入口を開けて待っている。 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



