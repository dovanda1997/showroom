
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

  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });
 
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});
