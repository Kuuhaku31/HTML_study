// index.js

// 位置，速度，加速度
player_px = 60;
player_py = 30;

player_vx = 0;
player_vy = 0;

player_ax = 0;
player_ay = 0;

area_hight = 600;

// 画玩家
function drawPlayer() {
  drawContent(player_px, player_py, "player");
}

// 在 (x, y) 位置绘制内容
function drawContent(x, y, content) {
  const element = document.createElement("div");
  element.className = "content";
  element.style.left = x + "px";
  element.style.top = y + "px";
  element.innerText = content;

  const displayArea = document.getElementById("display_area");
  displayArea.appendChild(element);
}
