//  SHOWMENU
menu = document.querySelector('.Menu')
Main = document.querySelector('main')
 ShowMenu = document.querySelector('.modal')
 menu.addEventListener('click',function(){
    ShowMenu.classList.add('show')
 });
 del =  document.querySelectorAll('.del span')
  for(item of del){
    item.addEventListener('click', function(){
        ShowMenu.classList.remove('show')
    });
  }

  // SLICK js
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: '<span class="cursor fa fa-angle-left prev"></span>',
    nextArrow: '<span class="cursor fa fa-angle-right next"></span>'
    
  });
 
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 1500,
  prevArrow: '<span class="cursor fa fa-angle-left prev"></span>',
  nextArrow: '<span class="cursor fa fa-angle-right next"></span>'
});
//  let sdile_item = [
//   {img: '/image/sdile1.jpg'},
//   {img: '/image/sdile2.jpg'},
//   {img: '/image/sdile3.jpg'},
//   {img: '/image/sdile4.jpg'},
//   {img: '/image/sdile5.jpg'},
//   {img: '/image/sdile6.jpg'}
//  ];
//  let sdile = document.querySelector('.multiple-items')

//  function render_sdile(param){
//   for(let item of param){
//     let div = document.createElement('div');
//     div.classList.add('itemK')
//     div.innerHTML=`
//     <div class="item" style="background-image: url(${item.img});" ></div>
//     `
//     sdile.appendChild(div)
//   }
//  }
//  render_sdile(sdile_item);




/////////////////  TKbietthu //////////////////
 Question =  document.querySelectorAll('li.question')
 
 
 Question.forEach(e => {
   e.addEventListener('click',function(){
    show = e.querySelector('.reply')
    quesI = e.querySelector('i')
    show.classList.toggle('showR')
    e.classList.toggle('back')
    quesI.classList.toggle('rotate')
  })
});


// show IMG


showIMG = document.querySelectorAll('.itemK')

showIMG.forEach(e =>{
  e.addEventListener('click',function(){
    a = e.querySelector('.item')  
    img_popup()
  })
})

function img_popup(){
  let popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML =`
  <div class="overlay"></div>
  <div class="content" style="background-image: url(/image/sdile1.jpg);"> 
  
  </div>
  `;
  popup.querySelector('.overlay').addEventListener('click', function() {
    popup.remove();
  });

  document.body.appendChild(popup)
}

//ShowVideo TK biet thu


showVideoTK = document.querySelectorAll('.showVideoTK')
showF =  document.querySelector('.showTK')
console.log(showF)
showVideoTK.forEach(e=>{
  e.addEventListener('click', function(){
    del = e.querySelector('button')  
    s = e.querySelector('.showTK')  
    s.classList.add('showT')
    del.addEventListener('click', function(){
      s.classList.add('remove')
    })
  })
})

// slickTK BIET THƯ 

$('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<span class="fa fa-angle-left prev"></span>',
  nextArrow: '<span class="fa fa-angle-right next"></span>'
});

// remoTK = document.querySelectorAll('.showVideoTK button')
// remoTK.forEach(e=>{
//   e.addEventListener('click', function(){
//     showF.classList.remove('showT')
//   })
// })


// SHOW VIDEO

videoS = document.querySelector('.video')
showVideo =  document.querySelector('.showVideo')
videoS.addEventListener('click', function(){
  showVideo.classList.add('showV')
} )
Videoremove = document.querySelector('.Videoremove')
Videoremove.addEventListener('click', function(){
  showVideo.classList.remove('showV')
})

 

// apen chill vafo body 
// slick-track class clone
