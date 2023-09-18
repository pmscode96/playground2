let title = document.querySelectorAll(".item_info");
let content = document.querySelector(".info_cont");


for (let i = 0; i < title.length; i++) {

    let item = title.item(i);


    item.addEventListener("click", e =>{
        if(item.classList.contains('on')){
            item.classList.remove('on');
        }else{
            item.classList.add('on');
        }
    })
}
