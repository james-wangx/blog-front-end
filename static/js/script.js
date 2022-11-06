// noinspection HtmlUnknownTarget

let itemLogin = localStorage.getItem("login");
let divLogin = document.querySelector(".login");
if (itemLogin === "true") {
    divLogin.innerHTML = `<select>
                              <option value="1">Admin</option>
                              <option value="2">退出登录</option>
                          </select>
    `;
    // 点击选项退出登录
    let select = divLogin.querySelector("select");
    select.onchange = function () {
        if (select.value === '2') {
            if (window.confirm("确认退出登录？")) {
                localStorage.removeItem("login");
                location.reload();
            } else {
                select.value = '1';
            }
        }
    }
} else {
    divLogin.innerHTML = "<a href='login.html'>登录/注册</a>"
}


/**
 * 为标签生成随机颜色
 */
function randomColor() {
    const colorList = ["#f7c7c7", "#f7dfc7", "#f7f7c7", "#dff7c7", "#c7f7c7", "#c7f7df", "#c7f7f7", "#c7dff7",
        "#c7c7f7", "#dfc7f7", "#f7c7f7", "#f7c7df"];
    let labelList = document.querySelectorAll(".article-label  span");
    for (let label of labelList) {
        label.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
    }
}


/**
 * 控制返回顶部按钮的显示
 */
function show() {
    let buttonTop = document.getElementById("back-top");
    let visibility = false;

    // 监听滚动条
    window.addEventListener('scroll', () => {
        if (!visibility) {
            if (document.documentElement.scrollTop > 500) {
                buttonTop.style.opacity = "1";
                buttonTop.style.visibility = "visible";
                visibility = true;
            }
        } else {
            if (document.documentElement.scrollTop < 500) {
                buttonTop.style.opacity = "0";
                buttonTop.style.visibility = "hidden";
                visibility = false;
            }
        }
    });
}

/**
 * 单击按钮返回顶部
 */
function backTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

/**
 * 验证是否已登录
 */
function verifyLogin() {
    if (localStorage.getItem("login") === "true") {
        window.alert("你已经登录了，请先退出登录！");
        location.href = "index.html";
    }
}

/**
 * 点击按钮登录
 */
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== "admin@codelife.top" || password !== "admin") {
        window.alert("用户名或密码错误！");
    } else {
        localStorage.setItem("login", "true");
        window.alert("登录成功！");
        window.location.href = "index.html";
    }
}
