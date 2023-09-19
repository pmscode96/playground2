let title = document.querySelectorAll(".tit_info");
let content = document.querySelectorAll(".item_info");
let deleteButton = document.querySelector("")

for (let i = 0; i < title.length; i++) {

    let item = title.item(i);
    let contents = content.item(i);

    item.addEventListener("click", e =>{
        if(contents.classList.contains('on')){
            contents.classList.remove('on');

        }else{
            contents.classList.add('on');

            // contents.siblings().classList.remove('on');
        }
    })
}
