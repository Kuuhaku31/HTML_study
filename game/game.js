// 定义图像路径的宏
const imageBasePath = "../mat/imgs/";
const imageCount = 34;
const switchInterval = 100; // 切换间隔时间（毫秒）

// 定义一个变量来跟踪按钮的状态
let isPaused = false;
let img = document.createElement("img");
let intervalId; // 用于存储定时器的 ID

// 获取按钮元素
const button01 = document.getElementById('but');

// 定时器函数，用于随机切换图像
function switchImage() {
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    const paddedIndex = String(randomIndex).padStart(4, "0");

    // 尝试加载 .PNG 文件，如果失败则加载 .jpg 文件
    img.src = `${imageBasePath}${paddedIndex}.PNG`;
    img.alt = `画像${randomIndex}`;
}

function onclick() {
    if (isPaused) {
        button01.textContent = 'STOP';
        console.log("Started");
        // 重新启动定时器
        intervalId = setInterval(switchImage, switchInterval);
    } else {
        button01.textContent = 'START';
        console.log("Stopped");
        // 停止定时器
        clearInterval(intervalId);
    }
    isPaused = !isPaused;
}

// 添加点击事件监听器
button01.addEventListener('click', onclick);

// 更新图像
function onImgsUpdate() {
    const container = document.getElementById("image-container");

    img.style.width = "300px";
    img.style.height = "300px";
    container.appendChild(img);

    // 设置定时器，定期切换图像
    intervalId = setInterval(switchImage, switchInterval);

    // 初始调用一次以显示第一张图像
    switchImage();
}

window.onload = onImgsUpdate;