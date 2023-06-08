//  SHOWMENU

header = document.querySelector('header')
let divH = document.createElement('div')
divH.classList.add('container')
divH.innerHTML = `
<div class="head color-bg">
<div class="menu">
	<span>
		<button class=" cursor btn fo-s m-l color-text color-bg Menu"> <i class="fa-solid fa-bars"></i>
			&nbsp;Menu</button>
	</span>
</div>
<div class="home">
	<div class="logo img" style="background-image: url(/image/logo-donggia-gold.png);"></div>
</div>
<div class="project">
	<a href="/duan.html">
		<span><button class="btn fo-s m-r color-text color-bg Project"> <a class="color-text" href="/duan/duan.html">Dự Án</a>  &nbsp;<i
					class="fa-solid fa-ellipsis-vertical"></i></button></span>
	</a>
</div>
</div> 
<div class="modal">
<div class="Show-menu">
   <div class="flex">
	   <div class="Background">
		   <div class="logo img" style="background-image: url(/image/backMenu.jpg);"></div>
		   <div class="Trang chủ">
			   <span class="icon-home p-d color-bg"><a href="index.html"><i
						   class="fa-solid fa-house"></i></a></span>
		   </div>
	   </div>
	   <div class="List color-bg">
		   <div class="container-list">
			   <div class="del">
				   <span class=" cursor delete color-text"><i class="fa-solid fa-times"></i></span>
			   </div>
			 
			   <div class="list-ul">
				   <ul>
					   <a class="color-text" href="/duan/duan.html">
						   <li class="p-d">Dự Án </li>
					   </a>
					   <a class="color-text" href="/bietthu/TKbietthu.html">
						   <li class="p-d">Thiết Kế Biệt Thự</li>
					   </a>
					   <a class="color-text" href="/kientrucsu/Kientrusu.html">
						   <li class="p-d">Kiến Trúc Sư</li>
					   </a>
					   <a class="color-text" href="/gioithieu/gioithieu.html">
						   <li class="p-d">Liên Hệ</li>
					   </a>
				   </ul>
			   </div>

		   </div>
	   </div>
   </div>
</div>
</div> 
`
  header.appendChild(divH)



  function show_Menu (){
	menu = document.querySelector('.Menu')
	if(!menu) return false;
	Main = document.querySelector('main')
	ShowMenu = document.querySelector('.modal')
	menu.addEventListener('click', function () {
		ShowMenu.classList.add('show')
		ShowMenu.classList.add('fadeInLeft')
		document.body.classList.add('overflow')
	});
	del = document.querySelector('.del span')
	del.addEventListener('click', function () {
		// ShowMenu.classList.remove('show')
		document.body.classList.remove('overflow')
		ShowMenu.classList.remove('show')
	});
}
show_Menu();