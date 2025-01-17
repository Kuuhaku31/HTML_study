// index.js

var anime_pictures_path = "../../../resources/anime_pictures/";

function reset() {
  x = document.getElementById("demo");
  x.innerHTML = "这是一个段落";
}

function displayDate() {
  x = document.getElementById("demo");
  x.innerHTML = Date();
}

function showText() {
  x = document.getElementById("demo"); // 找到元素
  x.innerHTML = "Hello JavaScript!"; // 改变内容
}

function ChangeImage() {
  element = document.getElementById("myimage");

  // 判断图片是否亮着
  if (element.src.match("0002")) {
    element.src = anime_pictures_path + "0001.png";
  } else {
    element.src = anime_pictures_path + "0002.png";
  }
}

// 在网站加载时执行一次的函数
function onLoadFunction() {
  ChangeImage();
}

// 使用 DOMContentLoaded 事件确保函数仅在网站加载时执行一次
document.addEventListener("DOMContentLoaded", onLoadFunction);
