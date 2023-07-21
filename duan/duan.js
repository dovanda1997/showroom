let product = [
  {
    id: 1,
    name: "Thiết kế biệt thự",
    img:'../image/BTgirl1.jpg',
    Dichvu:[
       {
        nameD:"Dịch vụ 1",
        combo: "Full nội thất phòng ngủ",
        price: 73000000,
        bed: "Giường nằm",
        bedflap: "Táp giường",
        wardrobe: " Tủ quần áo",
        table: "Bàn phấn",
        Pylons: "Gía treo quần áo",
        tableTea: "",
        sofa: "",
      },
       {
        nameD:"Dịch vụ 2",
        combo: "Full nội thất phòng khách và phòng ngủ",
        price: 95000000,
        bed: "Giường nằm",
        bedflap: "Táp giường",
        wardrobe: " Tủ quần áo",
        table: "Bàn phấn",
        Pylons: "Gía treo quần áo",
        sofa: "Bộ sofa",
        tableTea: "Bàn trà",
  
      },
      {
        nameD:"Dịch vụ 3",
        combo: "Full nội thất phòng khách và phòng ngủ",
        price: 105000000,
        bed: "Giường nằm",
        bedflap: "Táp giường",
        wardrobe: " Tủ quần áo",
        table: "Bàn phấn",
        Pylons: "Gía treo quần áo",
        sofa: "Bộ sofa",
        tableTea: "Bàn trà",
      }
    ],
   },

  
  {
    id: 2,
    name: "Thiết kế chung cư",
    img:'../image/BTgirl2.jpg',
    Dichvu:[
      {
        nameD:"Dịch vụ 1",
        combo: "Full nội thất phòng ngủ",
        price: 53000000,
        bed: "Giường nằm",
        bedflap: "Táp giường",
        wardrobe: " Tủ quần áo",
        table: "Bàn phấn",
        Pylons: "Gía treo quần áo",
        tableTea: "",
        sofa: "",
      },
       {
        nameD:"Dịch vụ 2",
        combo: "Full nội thất phòng khách và phòng ngủ",
        price: 65000000,
        bed: "Giường nằm",
        bedflap: "Táp giường",
        wardrobe: " Tủ quần áo",
        table: "Bàn phấn",
        Pylons: "Gía treo quần áo",
        sofa: "Bộ sofa",
        tableTea: "Bàn trà",
      },
       {
        nameD:"Dịch vụ 3",
        combo: "Full nội thất phòng khách và phòng ngủ",
        price: 85000000,
        bed: "Giường nằm",
        bedflap: "Táp giường",
        wardrobe: " Tủ quần áo",
        table: "Bàn phấn",
        Pylons: "Gía treo quần áo",
        sofa: "Bộ sofa",
        tableTea: "Bàn trà",
      }

    ]
  },
  {
    id: 3,
    name: "Thiết kế biệt khác",
    img:'../image/BTgirl3.jpg',
    Dichvu:[
      {
        nameD:"Dịch vụ 1",
        combo: "Full nội thất phòng bếp",
        price: 30000000,
        kitchen:"Tủ bếp"
        
      },
       {
        nameD:"Dịch vụ 2",
        combo: "Full nội thất phòng bếp với bàn ăn",
        price: 65000000,
        kitchen:"Tủ bếp",
        dishwasher:"Máy rửa bát",
        dishes:"Gía đựng bát đĩa"
        
      },
       {
        nameD:"Dịch vụ 3",
        combo: "Full nội thất phòng khách và phòng ngủ",
        price: 45000000,
        kitchen:"Tủ bếp",
        dishwasher:"Máy rửa bát",
        dishes:"Gía đựng bát đĩa"
      
      }

    ]

  }

]

function render_produt(param) {
  for (let  product of param) {
    let div = document.createElement('a')
    div.setAttribute('href', '../baogia/baogia.html')
    div.classList.add('item')
    div.style.cssText = `background-image: url(${product.img})`
    div.innerHTML = `
    <p>${product.name}</p>
    <div class="overlay"></div>   
    `
    div.addEventListener('click', function () {
      localStorage.setItem('product',JSON.stringify(product))
      localStorage.setItem('product-id',product.id)
    })
    document.querySelector('.project-page .grid-templateIMG').appendChild(div)
  }
}
render_produt(product)
