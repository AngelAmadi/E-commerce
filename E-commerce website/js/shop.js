document.getElementById('formID').addEventListener('submit',(e)=> {
    e.preventDefault();

    alert("Thanks "+ name.value + " for your order.");
    location.reload();
})

let name = document.getElementById('firstname')

/*********   adheres to quantity user needs ***************/
let quantityvalue = document.getElementsByClassName('Userquantity-input') /* take user quatity value  */
for (let i = 0 ;i < quantityvalue.length; i++){ /* as it increases */
    let input = quantityvalue[i] /*let the input store in a variable */

    input.addEventListener('change', function(event) { /* listen to the value change */
      let input = event.target /* now input will store the event being changed */
      if (isNaN(input.value) || input.value <=0 || input.value >10 ){ /* no value, minus or > 10 */
          input.value = 0 /*set value as 0 */
      }
      totalupdate() /* after the evet go to update */
    })
}

/*********   updates ***************/
function  totalupdate() { 
    let  itemincart = document.getElementsByClassName('products')[0] /* set the variable for the entire products container and then select first item FROM ARAY */
    let cartrows = itemincart.getElementsByClassName('PurchaseRow') /* set the variable for the all items in cart */

    let total = 0;  /* counter for total */ 
    for (let i = 0 ;i < cartrows.length; i++){ /* as items in cart increases*/
        let cart = cartrows[i]  /* get the current cart item from the current array of carts*/
        let price = cart.getElementsByClassName('Productprice')[0] /* select the first price from array */
        let quantity= cart.getElementsByClassName('Userquantity-input')[0] /* select the first input from input  */

        /* we seperate the pound sign in other that we calculate the total */
        let money = parseFloat(price.innerText.replace('£',''))  /* string  to number  */
        let amount = quantity.value  /* get the value of the quatity input */
        total = total + (money * amount)     /* get the total, currently a counter at 0 so add that to the multiplication */   
    }
   document.getElementsByClassName('totalPrice')[0].innerText = '£ ' + total /* total price will now be assigned to total *//* over prices are being calulate to me need the first one which is the onw we're on right now  */
}
/****************************************************/


document.getElementById('buyy').addEventListener('click', function() {
    document.getElementById('formName').style.display = 'block';
});


