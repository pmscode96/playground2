let title = document.querySelectorAll(".info_tit");
let content = document.querySelector(".info_cont");


title[1].addEventListener("click", (e)=>{
    console.log(e);
})

content.addEventListener("click", evt => {
    console.log(evt);
})
