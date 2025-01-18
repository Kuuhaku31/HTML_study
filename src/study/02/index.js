// index.js

// 位置，速度，加速度
let player_px = 0;
let player_py = 0;

let area_hight = 0;
let area_width = 0;

class Position {
  constructor(px, py) {
    this.px = px;
    this.py = py;
  }
}

class Velocity {
  constructor(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }
}

class Acceleration {
  constructor(ax, ay) {
    this.ax = ax;
    this.ay = ay;
  }
}

class Player {
  constructor(label, pos = Position(0, 0)) {
    this.#movement_positon = pos;
    this.#player_label = label;
  }

  #movement_positon;
  #movement_velocity = Velocity(0, 0);
  #movement_acceleration = Acceleration(0, 0);

  #mass = 1;

  #player_label; // 玩家标签

  get movement_positon() {
    return this.#movement_positon;
  }

  get movement_velocity() {
    return this.#movement_velocity;
  }

  get movement_acceleration() {
    return this.#movement_acceleration;
  }

  get player_label() {
    return this.#player_label;
  }

  OnUpdate(delta_time) {
    this.#movement_positon.px += this.#movement_velocity.vx * delta_time;
    this.#movement_positon.py += this.#movement_velocity.vy * delta_time;

    this.#movement_velocity.vx += this.#movement_acceleration.ax * delta_time;
    this.#movement_velocity.vy += this.#movement_acceleration.ay * delta_time;

    this.#movement_acceleration.ax = 0;
    this.#movement_acceleration.ay = 0;

    if (this.#movement_positon.px < 0) this.#movement_positon.px = 0;
    if (this.#movement_positon.py < 0) this.#movement_positon.py = 0;
    if (this.#movement_positon.px > area_width) this.#movement_positon.px = area_width;
    if (this.#movement_positon.py > area_hight) this.#movement_positon.py = area_hight;
  }
}

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
