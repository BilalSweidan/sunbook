let headerList = document.querySelectorAll('.list')
for(let i=0;i<headerList.length;i++){
    headerList[i].addEventListener('click',() => {
        if(headerList[i].getAttribute('state') === 'open'){
            headerList[i].setAttribute('state','close')
        }else{
            headerList[i].setAttribute('state','open')
        }
        for(let j=0;j<headerList.length;j++){
            if(j !== i){
                headerList[j].setAttribute('state','close')
            }
        }
    })
}


// user cart
let cart_button = document.querySelector(".cart")
let cart_div = document.querySelector(".cart_div")
cart_button.addEventListener('click',() => {
    if(cart_div.getAttribute('state') === "close"){
        cart_div.setAttribute('state','open')
    }else{
        cart_div.setAttribute('state','close')
    }
})

// book setting list
let book_list_button = document.querySelectorAll(".book-list")
let book_list = document.querySelectorAll(".book-setting-list")
for(let i = 0 ; i < book_list_button.length;i++){
    book_list_button[i].addEventListener('click',() => {
        if(book_list[i].style.display == "none"){
            book_list[i].style.display = 'block'
        }else{
            book_list[i].style.display = 'none'
        }
    })
}
