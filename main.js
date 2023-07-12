



/* ---------------------------------------------------- */
/* start new code */
/* ---------------------------------------------------- */

let slide_item = {
	0: {
		img: './image/sdile1.jpg'
	},
	1: {
		img: './image/sdile2.jpg'
	},
	2: {
		img: './image/sdile3.jpg'
	},
	3: {
		img: './image/sdile4.jpg'
	},
	4: {
		img: './image/sdile5.jpg'
	},
	5: {
		img: './image/sdile6.jpg'
	}
};

function create_popup_home_slider() {
	let slide = document.querySelector('.multiple-items');
	if (!slide) return false;

	function render_slide(param) {
		for (let [k, item] of Object.entries(param)) {
			let div = document.createElement('div');
			div.classList.add('itemK');
			div.setAttribute('data-id', k);
			div.innerHTML = `
		 <div class="item" style="background-image: url(${item.img});" ></div>
		 `;

			slide.appendChild(div)
		}
	}
	render_slide(slide_item);

	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 1500,
		prevArrow: '<span class="cursor fa fa-angle-left prev"></span>',
		nextArrow: '<span class="cursor fa fa-angle-right next"></span>',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			  }
		}
		]
	});

	document.querySelectorAll('.multiple-items .itemK').forEach(function (item) {
		item.addEventListener('click', function () {
			let key = item.getAttribute('data-id');
			img_popup(slide_item[key]['img']);
		});
	});

	// show IMG

	function img_popup(img) {
		let popup = document.createElement('div');
		popup.classList.add('popup');
		popup.innerHTML = `
		<div class="overlay"></div>
		<div class="content" style="background-image: url(${img});"> 

		</div>
		`;
		popup.querySelector('.overlay').addEventListener('click', function () {
			popup.remove();
		});

		document.body.appendChild(popup);
	}
}
create_popup_home_slider();
/* ---------------------------------------------------- */
/* end new code */
/* ---------------------------------------------------- */


// slickTK BIET THƯ 

$('.single-item').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<span class="fa fa-angle-left prev"></span>',
	nextArrow: '<span class="fa fa-angle-right next"></span>'
});


// SHOW VIDEO

function hander_video() {
	videoS = document.querySelector('.video')
	if (!videoS) return false;
	showVideo = document.querySelector('.showVideo')
	videoS.addEventListener('click', function () {
		showVideo.classList.add('showV')
	})
	Videoremove = document.querySelector('.Videoremove')
	Videoremove.addEventListener('click', function () {
		showVideo.classList.remove('showV')
	})
}
hander_video()

// apen chill vafo body
// slick-track class clone
// SLICK js
$('.autoplay').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1000,
	prevArrow: '<span class="cursor fa fa-angle-left prev"></span>',
	nextArrow: '<span class="cursor fa fa-angle-right next"></span>'

});