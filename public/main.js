window.onload = function () {
  getImage();
};

function getImage() {
  axios
    .post("/image", null, { responseType: "arraybuffer" })
    .then(function (response) {
      var contentType = response.headers["content-type"];
      var arraybuffer = response.data;
      var blob = new Blob([arraybuffer], { type: contentType });
      var url = URL.createObjectURL(blob);
      var img = document.getElementsByTagName("img")[0];
      img.src = url;
      img.onload = function () {
        URL.revokeObjectURL(url);
      };
    })
    .catch(function (error) {
      console.error("请求发生错误:", error);
    });
}
