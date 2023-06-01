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
    prevArrow: '<span class="fa fa-angle-left prev"></span>',
    nextArrow: '<span class="fa fa-angle-right next"></span>'
    
  });
 
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 1500,
  prevArrow: '<span class="fa fa-angle-left prev"></span>',
  nextArrow: '<span class="fa fa-angle-right next"></span>'
});


/////////////////  TKbietthu //////////////////
 Question =  document.querySelectorAll('li.question')
 
 
 Question.forEach(e => {
   e.addEventListener('click',function(){
    show = e.querySelector('.reply')
    quesI = e.querySelector('i')
    show.classList.toggle('showR')
    quesI.classList.toggle('rotate')
  })
});


//SHOW IMG

showIMG = document.querySelectorAll('.itemK')
showItemK = document.querySelector('.itemK-show')
showIMG.forEach(e =>{
  e.addEventListener('click',function(){
    showimage = e.querySelector('.itemK-show')
    showimage.classList.add('showK')
  })
})

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

 


