const removeproduto = document.getElementsByClassName("remove-product-button")
console.log(removeproduto)
for (let i = 0; i < removeproduto.length; i++) {
    removeproduto[i].addEventListener("click", removeProduct)}

    function removeProduct (event) {
    event.target.parentElement.parentElement.remove()
        updateTotal()
}
function updateTotal() {
let totalAmount = 0
const produtoCarrinho = document.getElementsByClassName("cart-product")
for (let i = 0; i < produtoCarrinho.length; i++) {
const precoProduto = produtoCarrinho[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
const qtdProduto = produtoCarrinho[i].getElementsByClassName("product-qtd-input")[0].value

totalAmount += precoProduto * qtdProduto
}
totalAmount = totalAmount.toFixed(2)
totalAmount = totalAmount.replace(".", ",")
document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
}
