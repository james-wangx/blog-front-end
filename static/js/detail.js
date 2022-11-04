let buttonTop = document.getElementById("back-top");
let visibility = false;

function backTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

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
