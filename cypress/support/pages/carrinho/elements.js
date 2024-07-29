export const ELEMENTS = {
    primeiroProduto: '(//div[@data-test="inventory-item-name"])[1]',
    btnAddtoCartTelaProduto: '//div[@data-test="inventory-item-name"]/following::button[@name="add-to-cart"]',
    numeroElementosCarrinho: '//span[@data-test="shopping-cart-badge"][. = "1"]',
    btnBackToProducts: '//button[@data-test="back-to-products"]',
    btnAddToCartTelaProdutos: '(//button[.="Add to cart"])[1]',
    btnRemove: '(//button[.="Remove"])[1]'
}