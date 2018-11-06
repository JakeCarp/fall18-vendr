import VendService from "./VendService.js";
//PRIVATE

//Instatiates an instance of the VendService to be used for this controller
let vendService = new VendService()

//Updates the total on the page
function drawTotal(val) {
  console.log(4)
  document.getElementById('change').innerText = val
}

//at the start of the application, draws all products
function drawProducts() {
  //gets products from the vend service
  let products = vendService.getProducts()
  let template = ''
  //builds template from each prodcut into template string
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.quantity > 0) {
      template += `
        <div class="col-6">
        <img class="image" src="${product.img}">
          <p class="content">${product.name} - $${product.price}</p>
          <button class="buy-button" onclick="app.controllers.vendController.vendItem(${i})">BUY</button>
        </div>
      `
    }
  }
  //adds template string to table
  document.getElementById('products').innerHTML += template
}
function drawToInv(snack) {
  document.getElementById('inventory').innerHTML += `
  <p class="content">${snack.name}</p>`
}
//PUBLIC
export default class VendController {
  constructor() {
    //calls the draw products at the start of the application
    drawProducts()
  }
  addQuarter() {
    console.log(1)
    //adds quarter to vending machine and returns the total
    let total = vendService.addQuarter()
    console.log(3)
    //after adding quarter re-draws total
    drawTotal(total)
  }
  vendItem(productIndex) {
    //attempts to process the vend item
    let item = vendService.vendItem(productIndex)
    if (item) {
      drawTotal(item.currentTransaction)
      //you will want to check that item exists and then draw it to the screen
      drawToInv(item)
    }
  }
  return() {
    let total = vendService.return()
    drawTotal(total)
  }
}