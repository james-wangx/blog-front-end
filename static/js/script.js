let login = localStorage.getItem("login");
let divLogin = document.querySelector(".login");
if (login === "true") {
    divLogin.innerHTML = `<select>
                              <option value="1">Admin</option>
                              <option value="2">退出登录</option>
                          </select>
    `;
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

randomColor();
