let dt = document.getElementsByTagName("dt");
let dd = document.getElementsByTagName("dd");

for (let i = 0; i < dt.length; i++) {
    dt[i].addEventListener("click", (x) => {
        let curEle = x.target;
        // removeActiveClass(i);
        curEle.classList.add("active");
        let subContent = dd[i];
        let icon = curEle.getElementsByTagName("span")[0];
        subContent.style.position = "relative";
        subContent.style.display = "block";
        icon.style.transform = "rotate(180deg)";
        // console.log(subContent);
    });
}

for (let i = 0; i < dt.length; i++) {
    dt[i].addEventListener("mouseout", (x) => {
        let curEle = x.target;
        let subContent = dd[i];
        let icon = dt[i].getElementsByTagName("span")[0];
        subContent.style.position = "absolute";
        subContent.style.display = "none";
        icon.style.transform = "rotate(0deg)";
        curEle.classList.remove("active");
        // console.log("mouse is out");
    })

}
