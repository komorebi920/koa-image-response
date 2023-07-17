const Koa = require("koa");
const fs = require("fs");
const Router = require("koa-router");
const static = require("koa-static");
const router = new Router();
const app = new Koa();

// 指定了静态文件的根目录
app.use(static(__dirname + "/public"));

router.post("/image", async (ctx) => {
  // 读取图片数据
  const imagePath = `${__dirname}/images/202208272010391.png`;
  const imageBuffer = fs.readFileSync(imagePath);

  // 完成响应
  ctx.response.status = 200;
  ctx.response.type = "image/png";
  ctx.response.body = imageBuffer;
});

// 将路由注册到应用
app.use(router.routes()).use(router.allowedMethods());

// 启动服务器
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
