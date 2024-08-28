// 定义图像路径的宏
const imageBasePath = "mat/imgs/";
const imageCount = 34;
const switchInterval = 100; // 切换间隔时间（毫秒）
const audiopath = "D:/KH_music";

// 动态生成图像元素
// window.onload = () => {
//     const container = document.getElementById("image-container");

//     for (let i = 1; i <= imageCount; i++) {
//         // 创建一个 img 元素用于显示图像
//         const img = document.createElement("img");
//         // 用于格式化数字，使其始终为 4 位数
//         const paddedIndex = String(i).padStart(4, "0");

//         // 尝试加载 .PNG 文件
//         img.src = `${imageBasePath}${paddedIndex}.PNG`;
//         img.alt = `画像${i}`;
//         img.style.width = "300px";
//         img.style.height = "300px";

//         container.appendChild(img);
//     }
// };

// 快速随机切换图像
// 动态生成图像元素
window.onload = () => {
    const container = document.getElementById("image-container");

    // 创建一个 img 元素用于显示随机图像
    const img = document.createElement("img");
    img.style.width = "300px";
    img.style.height = "300px";
    container.appendChild(img);

    // 定时器函数，用于随机切换图像
    function switchImage() {
        const randomIndex = Math.floor(Math.random() * imageCount) + 1;
        const paddedIndex = String(randomIndex).padStart(4, "0");

        // 尝试加载 .PNG 文件，如果失败则加载 .jpg 文件
        img.src = `${imageBasePath}${paddedIndex}.PNG`;
        img.alt = `画像${randomIndex}`;
    }

    // 设置定时器，定期切换图像
    setInterval(switchImage, switchInterval);

    // 初始调用一次以显示第一张图像
    switchImage();
};

//
