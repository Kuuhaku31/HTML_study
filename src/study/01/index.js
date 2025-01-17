// index.js

const anime_pictures_path = "../../../resources/anime_pictures/";

const user = {
  name: "John",
  age: 25,
  email_address: "aaaa",
  phone_number: "123456789",
  skills: ["JavaScript", "HTML", "CSS"],

  SayHello: function () {
    alert("Hello From User");
  },

  PrintSkills: function () {
    str = "";
    for (i = 0; i < this.skills.length; i++) {
      str += this.skills[i] + ", ";
    }
    return str;
  },

  PrintInfo: function () {
    str = "";
    str += "Name: " + this.name + "<br>";
    str += "Age: " + this.age + "<br>";
    str += "Email Address: " + this.email_address + "<br>";
    str += "Phone Number: " + this.phone_number + "<br>";
    str += "Skills: " + this.PrintSkills() + "<br>";
    return str;
  },
};

function UserSayHello() {
  user.SayHello();
}

function DisplayUserInfo() {
  x = document.getElementById("demo");
  x.innerHTML = user.PrintInfo();
}

function reset() {
  x = document.getElementById("demo");
  x.innerHTML = "这是一个段落";
}

function displayDate() {
  x = document.getElementById("demo");
  x.innerHTML = Date();
}

// 实时更新时间戳的函数
function updateTimestamp() {
  const timestampElement = document.getElementById("timestamp");

  function getDayStr(day) {
    switch (day) {
      case 0:
        return "星期日";
      case 1:
        return "星期一";
      case 2:
        return "星期二";
      case 3:
        return "星期三";
      case 4:
        return "星期四";
      case 5:
        return "星期五";
      case 6:
        return "星期六";
      default:
        return "UNKNOW";
    }
  }

  function updateStr() {
    const d = new Date();
    var str = "";

    str += "当前时间：";
    str += d.getFullYear() + "-";
    str += d.getMonth() + 1 + "-";
    str += d.getDate() + " ";
    str += d.getHours() + ":";
    str += d.getMinutes() + ":";
    str += d.getSeconds() + " &lt;";
    str += getDayStr(d.getDay()) + "&gt;";
    str += "<br>";
    str += "时间戳：";
    str += Date.now();

    timestampElement.innerHTML = str;
  }

  // 获取今年剩余秒数
  function GetRemainingSeconds() {
    const now = new Date();
    const end = new Date(now.getFullYear() + 1, 0, 1);
    const diff = end - now;

    const str = "There are " + Math.floor(diff / 1000) + " seconds left in this year.";
    document.getElementById("remain_second").innerHTML = str;
  }

  setInterval(() => {
    updateStr();
    GetRemainingSeconds();
  }, 1); // 每 1 毫秒更新一次时间戳
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

function PrintSh() {
  var str = "";

  const buttons = document.getElementsByTagName("button");

  for (i = 0; i < buttons.length; i++) {
    str += buttons[i].innerHTML + "<br>";
  }

  document.getElementById("printout").innerHTML = str;
}

// 在网站加载时执行一次的函数
function onLoadFunction() {
  ChangeImage();
  updateTimestamp();
  PrintSh();
}

// 使用 DOMContentLoaded 事件确保函数仅在网站加载时执行一次
document.addEventListener("DOMContentLoaded", onLoadFunction);
