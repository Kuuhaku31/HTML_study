// 定义图像路径的宏
const imageBasePath = "resources/anime_pictures/"; // 图像基础路径
const imageCount = 34;
const switchInterval = 100; // 切换间隔时间（毫秒）
const audiopath = "D:/KH_music";

// 快速随机切换图像
// 动态生成图像元素
window.onload = () =>
{
    // 获取图像容器元素
    const container = document.getElementById("image-container");

    // 创建一个 img 元素用于显示随机图像
    const img = document.createElement("img");
    img.style.width = "300px";
    img.style.height = "300px";
    container.appendChild(img);

    // 定时器函数，用于随机切换图像
    function switchImage()
    {
        const randomIndex = Math.floor(Math.random() * imageCount) + 1;
        const paddedIndex = String(randomIndex).padStart(4, "0");

        // 尝试加载 .PNG 文件，如果失败则加载 .jpg 文件
        let src = `${imageBasePath}${paddedIndex}.png`;
        img.src = src;
        img.alt = `画像${randomIndex}`;
    }

    // 设置定时器，定期切换图像
    setInterval(switchImage, switchInterval);

    // 初始调用一次以显示第一张图像
    switchImage();
};
