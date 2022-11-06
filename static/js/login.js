if (localStorage.getItem("login") === "true") {
    window.alert("你已经登录了，请先退出登录！");
    location.href = "index.html";
}

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
