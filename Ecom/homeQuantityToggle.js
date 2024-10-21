export const homeQuantityToggle = (event, id,stock) =>{
    const currentCardElement = document.querySelector(`#card${id}`);

    const productQuantity = currentCardElement.querySelector(".productQuantity");
    
    let quantity = parseInt(productQuantity.getAttribute("date-quantity")) || 1;

    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity  += 1;

        }else if (quantity === stock){
            quantity = stock
        }
    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute("date-quantity", quantity.toString())
    return quantity;
};