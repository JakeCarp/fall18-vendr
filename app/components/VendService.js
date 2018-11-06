//PRIVATE
import VendingMachine from "../models/VendMachine.js";
import product from "../models/product.js";

let items = [
  new product('Fritos', 1.00, 3, 'https://www.fritolay.com/images/default-source/blue-bag-image/fritos-lightly-salted.png?sfvrsn=bb04563a_2'),

  new product('Doritos', 1.00, 8, 'https://www.fritolay.com/images/default-source/blue-bag-image/doritos-nacho-cheese.png?sfvrsn=b64e563a_2'),

  new product('Lays', 1.00, 2, 'https://www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=bd1e563a_2'),
  new product('Cheetos', 1.00, 10, 'https://www.fritolay.com/images/default-source/blue-bag-image/cheetos-crunchy-cheese.png?sfvrsn=5951573a_2'),
  new product('Twix', 1.25, 3, 'https://png2.kisspng.com/20180501/zxw/kisspng-twix-chocolate-bar-gummi-candy-giant-landover-mars-double-cake-5ae83b3f213026.085354541525168959136.png'),

  new product('3 Musketeers', 1.25, 12, 'http://www.3musketeers.com/Content/images/homepage/im_bucket_1.png'),


  new product('Crunch', 1.25, 9, 'https://ubisafe.org/images/candy-transparent-crunch-2.png'),


  new product('Snickers', 1.25, 7, 'https://ubisafe.org/images/candy-transparent-snicker-5.png'),


  new product('5 Gum', .75, 11, 'https://mbtskoudsalg.com/images/5-gum-logo-png-5.png'),

  new product('Juicy Fruit', .75, 2, 'https://mbtskoudsalg.com/images/fruits-transparent-gum-3.png')
]

//instatiates an instance of the vending machine class

let vm = new VendingMachine(100, items)

//PUBLIC
export default class VendService {
  //increases currentTransaction and returns new total
  addQuarter() {
    console.log(2)
    vm.currentTransaction += .25
    return vm.currentTransaction
  }
  //attempts to get the item requested from its index
  vendItem(productIndex) {
    //check if valid
    let product = vm.products[productIndex]
    // IF Exists    we have some            you have enough money
    if (product && product.quantity > 0 && vm.currentTransaction >= product.price) {
      product.quantity--
      vm.totalMoney += product.price
      vm.currentTransaction -= product.price
      let vended = JSON.parse(JSON.stringify(product))
      vended.currentTransaction = vm.currentTransaction
      return vended
    }
    return false
  }
  //returns all products from the vending machine
  getProducts() {
    //breaks refrence in memory to protect code
    return JSON.parse(JSON.stringify(vm.products))
  }
  return() {
    vm.currentTransaction = 0
    return vm.currentTransaction
  }
}