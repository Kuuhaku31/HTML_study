// index.js

// 位置，速度，加速度
player_px = 0;
player_py = 0;

area_hight = 0;
area_width = 0;

// 画玩家
function drawPlayer() {
  player = document.getElementById("player");
  if (player) {
    player.remove();
  }
  drawContent("player", player_px, player_py, "Player");
}

function PlayerToLeft() {
  player_px += -10;
  if (player_px < 0) {
    player_px = 0;
  }
}

function PlayerToRight() {
  player_px += 10;
  if (player_px > area_width) {
    player_px = area_width;
  }
}

// 在 (x, y) 位置绘制内容
function drawContent(id, x, y, content) {
  const element = document.createElement("div");
  element.id = id;
  element.className = "content";
  element.style.left = x + "px";
  element.style.top = y + "px";
  element.innerText = content;

  const displayArea = document.getElementById("display_area");
  displayArea.appendChild(element);
}

function DisplayDatas() {
  GetAreaSize();
  const str = "Area size: " + area_width + "x" + area_hight;
  const p = document.getElementById("data_area");
  p.innerHTML = str;
}

function OnRenderer() {
  setInterval(() => {
    drawPlayer();
    DisplayDatas();
  }, 1000 / 60);
}

// 获取区域大小
function GetAreaSize() {
  const p = document.getElementById("display_area");
  area_hight = p.clientHeight;
  area_width = p.clientWidth;
}

// 使用 DOMContentLoaded 事件确保函数仅在网站加载时执行一次
document.addEventListener("DOMContentLoaded", function () {
  OnRenderer();
});
