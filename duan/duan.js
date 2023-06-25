let product = [
   {
    id:1,
    name:"Thiết kế biệt thự",
    combo1:{
      combo:"Full nội thất phòng ngủ",
      price:11,
      bed:"Giường nằm",
      bedflap:"Táp giường",
      wardrobe:" Tủ quần áo",
      table: "Bàn phấn",
      Pylons:"Gía treo quần áo"
    },
    combo2:{
      combo:"Full nội thất phòng khách và phòng ngủ",
      price:15,
      bed:"Giường nằm",
      bedflap:"Táp giường",
      wardrobe:" Tủ quần áo",
      table: "Bàn phấn",
      Pylons:"Gía treo quần áo",
      sofa:"Bộ sofa",
      tableTea:"Bàn trà",

    },
    combo3:{
      combo:"Full nội thất phòng khách và phòng ngủ",
      price:15,
      bed:"Giường nằm",
      bedflap:"Táp giường",
      wardrobe:" Tủ quần áo",
      table: "Bàn phấn",
      Pylons:"Gía treo quần áo",
      sofa:"Bộ sofa",
      tableTea:"Bàn trà",
    }
    
   },
   {
    id:2,
    name:"Thiết kế chung cư",
    combo1:{

    },
    combo2:{

    },
    combo3:{
      
    }
   },
   {
    id:3,
    name:"Thiết kế biệt khác",
    combo1:{

    },
    combo2:{

    },
    combo3:{
      
    }

   }

]
localStorage.setItem('duan', JSON.stringify( baogia) );
function render_produt(param){
  for(){
    
  }
  let div = document.createElement('div')
  div.addEventListener('click', function(){

  })
  document.querySelector('.project-page .grid-templateIMG').appendChild(div)
}
