//  SHOWMENU
header = document.querySelector('header')
header.classList.add('header')
header.innerHTML=`
<div class="container">
	<button class="nav-trigger">
		<i class="fa-solid fa-bars"></i>
		<span>Menu</span>
	</button>
	<a href="./index.html" class="logo"><img src="./image/logo-donggia-gold.png"></a>
	<button class="projects">
		<span><a href="./duan/duan.html">Dự án</a></span>
	</button>
</div>

<nav class="main-menu">
	<div class="image"></div>
	<ul>
		<li>
			<a href="./duan/duan.html">Dự án</a>
		</li> 
		<li>
			<a href="./bietthu/TKbietthu.html">Thiết kế</a>
		</li>
		<li>
			<a href="./kientrucsu/Kientrusu.html">Kiến trúc sư</a>
		</li>
		
		<li>
			<a href="../gioithieu/gioithieu.html">Liên hệ</a>
		</li>
	</ul>
</nav>
`
let page_header = document.querySelector('.header'),
				main_menu = page_header.querySelector('.main-menu')
		page_header.querySelector('.nav-trigger').addEventListener('click', function(e) {
			if (!main_menu.classList.contains('show')) {
				// page_header.querySelector('.main-menu').classList.add('show', 'fadeInLeft');
				page_header.querySelector('.main-menu').className = 'main-menu show fadeInLeft';
				document.querySelector('body').classList.add('overflow')
				e.currentTarget.innerHTML = `
				<i class="fa-solid fa-xmark"></i>
				<span>Menu</span>
				`;
			}
			else {
				// page_header.querySelector('.main-menu').classList.add('fadeOutLeft');
				e.currentTarget.innerHTML = `
				<i class="fa-solid fa-bars"></i>
				<span>Menu</span>
				`;
				page_header.querySelector('.main-menu').className = 'main-menu show fadeOutLeft';
				document.querySelector('body').classList.remove('overflow')
				setTimeout(function() {
					page_header.querySelector('.main-menu').className = 'main-menu';
				}, 300)
			}
		});




  



