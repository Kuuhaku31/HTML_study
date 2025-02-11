// index.js

class Player {
  constructor(label, x, y) {
    this.label = label;
    this.x = x;
    this.y = y;
  }

  // 初始化玩家
  InitPlayer() {
    const element = document.createElement("div"); // 创建一个div元素

    element.className = "content player_label"; // 设置div元素的class属性
    element.style.left = this.x + "px"; // 设置div元素的left属性
    element.style.top = this.y + "px"; // 设置div元素的top属性
    element.innerText = this.label; // 设置div元素的文本内容

    const displayArea = document.getElementById("display_area"); // 获取显示区域

    displayArea.appendChild(element); // 将div元素添加到显示区域
  }

  // 移动玩家
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    this.updatePosition();
  }

  // 更新玩家位置
  updatePosition() {
    const playerElement = document.querySelector(".player_label"); // 获取玩家元素
    if (playerElement) {
      playerElement.style.left = this.x + "px";
      playerElement.style.top = this.y + "px";
    }
  }
}

let player;

// 初始化
function initialize() {
  player = new Player("小宝  🔪", 20, 10);
  player.InitPlayer();
}

function movePlayerLeft() {
  player.move(-10, 0);
}

function movePlayerRight() {
  player.move(10, 0);
}

function movePlayerUp() {
  player.move(0, -10);
}

function movePlayerDown() {
  player.move(0, 10);
}

// 监听页面加载事件
document.addEventListener("DOMContentLoaded", function () {
  initialize();
});
