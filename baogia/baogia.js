
let product_id = ''
let product_infomation = ''
if (localStorage.getItem('product-id')) {
  product_id = localStorage.getItem('product-id')
  console.log(product_id)

}

template = document.createElement('div')

if (product_id == 1) {

  product_infomation = JSON.parse(localStorage.getItem('product')) 
  item_Product =  product_infomation.Dichvu
  console.log(item_Product)

  template.innerHTML =
    `
     <section>
    <div class="header">
        <div class="container">
            <a href="../duan/duan.html">Back</a>
        </div>
    </div>
    <div class="project_name_id">
    <h1>THIẾT KẾ BIỆT THỰ CAO CẤP</h1>
        <i class="fa-thin fa-cart-shopping-fast"></i>
    </div>
</section>
<section>
    <div class="infomation_product">
        <div class="infomation_product-from">
            
          
        </div>
        <div class="infomation_product-content">
              <h2>BÁO GIÁ</h2>
              <div class="total">
              <p>Total <span style="font-size: 32px; color: antiquewhite;" class="total">0</span></p>
               </div>
            <section class="btn" style="text-align: center;">
                <button>Lên  đơn </button>
            </section>
        </div>
    </div>
</section> 
    `
  document.querySelector('main').appendChild(template)
  let item = document.querySelector('.infomation_product-from')
  for(let product of item_Product ){
    let div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML=`
    <div class="item_head">
    <h2>${product.nameD}</h2>
    <p>${product.combo}</p>
  </div>
  <p claas ="item_price">Giá full dịch vụ: 
    <span style = "font-size: 32px; color: antiquewhite;"> ${product.price.toLocaleString()} Đ</span>
  </p>
  <p>Bao gồm:</p>
  <ul>
    <li>
       ${product.Pylons}
    </li>
    <li>
       ${product.bed}
    </li>
    <li>
      ${product.bedflap}
    </li>
    <li>
      ${product.table}
    </li>
    <li>
    ${product.wardrobe}
    </li>
    <li>
    ${product.tableTea}
    </li>
    <li>
    ${product.sofa}
    </li>
  </ul>
  <div class="Add_Cart">
  <button class = "add">Lên đơn hàng</button>
  </div>
    `
    let und = div.querySelector('ul li')
    if(und.innerHTML == undefined ){
      console.log(und.innerHTML)  
    }
    
    item.appendChild(div)
    let Cart = div.querySelector('.Add_Cart button').addEventListener('click', function(){
      let Price_Cart = product.price
      let Name_Cart = product.nameD
      let Name_combo = product.combo
      renderCart(Price_Cart, Name_Cart, Name_combo)
      const priceCart = document.querySelectorAll('.cart_infomation');
       totalPrice(priceCart) 
     }) 

  }
}
if (product_id == 2) {

  product_infomation = JSON.parse(localStorage.getItem('product')) 
  item_Product =  product_infomation.Dichvu
  console.log(item_Product)

  template.innerHTML =
    `
     <section>
    <div class="header">
        <div class="container">
            <a href="/duan/duan.html">Back</a>
        </div>
    </div>
    <div class="project_name_id">
    <h1>THIẾT KẾ CHUNG CƯ CAO CẤP</h1>
        <i class="fa-thin fa-cart-shopping-fast"></i>
    </div>
</section>
<section>
    <div class="infomation_product">
        <div class="infomation_product-from">
            
          
        </div>
        <div class="infomation_product-content">
              <h2>BÁO GIÁ</h2>
              <div class="total">
              <p>Total <span style="font-size: 32px; color: antiquewhite;" class="total">0</span></p>
               </div>
            <section class="btn" style="text-align: center;">
                <button>Lên  đơn </button>
            </section>
        </div>
    </div>
</section> 
    `
  document.querySelector('main').appendChild(template)
  let item = document.querySelector('.infomation_product-from')
  for(let product of item_Product ){
    let div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML=`
    <div class="item_head">
    <h2>${product.nameD}</h2>
    <p>${product.combo}</p>
  </div>
  <p claas ="item_price">Giá full dịch vụ: 
    <span style = "font-size: 32px; color: antiquewhite;"> ${product.price.toLocaleString()} Đ</span>
  </p>
  <p>Bao gồm:</p>
  <ul>
    <li>
       ${product.Pylons}
    </li>
    <li>
       ${product.bed}
    </li>
    <li>
      ${product.bedflap}
    </li>
    <li>
      ${product.table}
    </li>
    <li>
    ${product.wardrobe}
    </li>
    <li>
    ${product.tableTea}
    </li>
    <li>
    ${product.sofa}
    </li>
  </ul>
  <div class="Add_Cart">
  <button class = "add">Lên đơn hàng</button>
  </div>
    `
    
    item.appendChild(div)
    let Cart = div.querySelector('.Add_Cart button').addEventListener('click', function(){
      let Price_Cart = product.price
      let Name_Cart = product.nameD
      let Name_combo = product.combo
      renderCart(Price_Cart, Name_Cart, Name_combo)
      const priceCart = document.querySelectorAll('.cart_infomation');
       totalPrice(priceCart) 
     }) 

  }
}
if (product_id == 3) {

  product_infomation = JSON.parse(localStorage.getItem('product')) 
  item_Product =  product_infomation.Dichvu
  console.log(item_Product)

  template.innerHTML =
    `
     <section>
    <div class="header">
        <div class="container">
            <a href="../duan/duan.html">Back</a>
        </div>
    </div>
    <div class="project_name_id">
    <h1>THIẾT KẾ KHÁC</h1>
        <i class="fa-thin fa-cart-shopping-fast"></i>
    </div>
</section>
<section>
    <div class="infomation_product">
        <div class="infomation_product-from">
            
          
        </div>
        <div class="infomation_product-content">
              <h2>BÁO GIÁ</h2>
              <div class="total">
              <p>Total <span style="font-size: 32px; color: antiquewhite;" class="total">0</span></p>
               </div>
            <section class="btn" style="text-align: center;">
                <button>Lên  đơn </button>
            </section>
        </div>
    </div>
</section> 
    `
  document.querySelector('main').appendChild(template)
  let item = document.querySelector('.infomation_product-from')
  for(let product of item_Product ){
    let div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML=`
    <div class="item_head">
    <h2>${product.nameD}</h2>
    <p>${product.combo}</p>
  </div>
  <p claas ="item_price">Giá full dịch vụ: 
    <span style = "font-size: 32px; color: antiquewhite;"> ${product.price.toLocaleString()} Đ</span>
  </p>
  <p>Bao gồm:</p>
  <ul>
    <li>
       ${product.kitchen}
    </li>
    <li>
       ${product.dishwasher}
    </li>
    <li>
      ${product.dishes}
    </li>
  </ul>
  <div class="Add_Cart">
  <button class = "add">Lên đơn hàng</button>
  </div>
    `
    
    item.appendChild(div)
    let Cart = div.querySelector('.Add_Cart button').addEventListener('click', function(){
      let Price_Cart = product.price
      let Name_Cart = product.nameD
      let Name_combo = product.combo
      renderCart(Price_Cart, Name_Cart, Name_combo)
      const priceCart = document.querySelectorAll('.cart_infomation');
       totalPrice(priceCart) 
     }) 

  }
}
function renderCart(Price_Cart, Name_Cart, Name_combo){
  let Cart_conten = document.querySelector('.infomation_product-content')
  let div_card = document.createElement("div")
  div_card.classList.add("cart_infomation")
  div_card.innerHTML = ``
  div_card.innerHTML =  `
  <div class="cart_name dis-flex">
  <h2 style =" font-size: 24px;">${Name_Cart}</h2>
  <p>${Name_combo}</p>
</div>
<div class="cart_price dis-flex">
  <div class="cart_input">
      <button class= "minus">-</button>
      <input type="number" class="Input_card" style="width: 30px; background-color: antiquewhite; color: black" value="1" min="1">
      <button class = "total">+</button> 
  </div>
  <div class="price dis-flex">
      <p class="Totalprice ">${Price_Cart}</p> 
      <button class = "del">X</button> 
  </div>
</div>
  `
  const priceCart = document.querySelectorAll('.cart_infomation');
  console.log(priceCart)
  for(let item of priceCart){
    let productN =  item.querySelector(".cart_name h2")
    let coutInput = item.querySelector(".Input_card")
    if(productN.innerHTML == Name_Cart){
        coutInput.value = parseInt(coutInput.value) + 1
        return
    }
}
const cart = document.querySelector(".total span")
cart.innerHTML = `${Price_Cart}`
Cart_conten.appendChild(div_card)
  
  changePrice(div_card)
  totalPrice(priceCart)
  deleteCard(div_card)

}

// THAY DOI SO LUONG


function changePrice(div_card){
  let Card_minus = div_card.querySelector(".minus")
  let Card_total = div_card.querySelector(".total")
  let Card_input =  div_card.querySelector(".Input_card")

  Card_minus.addEventListener('click',function(){
      if(Card_input.value >= 1) {
          Card_input.value = parseInt(Card_input.value) - 1
          console.log(Card_input)
          totalPrice(document.querySelectorAll('.cart_infomation'))
          
      }
  });
  
  Card_total.addEventListener('click',function(){
      Card_input.value = parseInt(Card_input.value) + 1
      totalPrice(document.querySelectorAll('.cart_infomation'))
      
     
  });
}

// TONG TIEN SAN PHAM


function totalPrice(priceCart) {
  let productPrice = 0;
  for (let item of priceCart) {    
      const value_Input = item.querySelector('.Input_card').value
      const value_Price = item.querySelector('.Totalprice').innerHTML
      tProduct = value_Input * value_Price;
      productPrice += tProduct;
  }
  const cart = document.querySelector(".total span")
  cart.innerHTML = productPrice.toLocaleString();
}

 // XOA SAN PHAM

 function deleteCard(div_card) {
  const remove = div_card.querySelector('.del') 
  remove.addEventListener('click', () => { 
      div_card.remove()
      totalPrice(document.querySelectorAll('.cart_infomation'))
  })
}


let showMain = document.querySelector('.btn button')
let from = document.querySelector('.form')
showMain.addEventListener('click', function(){
  console.log('avc')
  from.classList.add('show')
  
})
let delCard =  document.querySelector('.delete').addEventListener('click', function(){
  from.classList.remove('show')
})
let sendCard =  document.querySelector('.send').addEventListener('click', function(){
  from.classList.remove('show')
})