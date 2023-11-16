const removeproduto = document.getElementsByClassName("remove-product-button")
console.log(removeproduto)
for (let i = 0; i < removeproduto.length; i++) {
    removeproduto[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.remove()
    })
}
