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