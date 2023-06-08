/////////////////  TKbietthu //////////////////



Question = document.querySelectorAll('li.question')
Question.forEach(e => {
    e.addEventListener('click', function () {  
        show = e.querySelector('.reply')
        quesI = e.querySelector('i')
        show.classList.toggle('showR')
        e.classList.toggle('back')
        quesI.classList.toggle('rotate')
    })
});


//ShowVideo TK biet thu


showVideoTK = document.querySelectorAll('.showVideoTK')
showF = document.querySelector('.showTK')
showVideoTK.forEach(e => {
    e.addEventListener('click', function () {
        del = e.querySelector('button')
        s = e.querySelector('.showTK')
        s.classList.add('showT')
        del.addEventListener('click', function () {
            s.classList.add('remove')
        })
    })
})


let itemtk = [
    {
        img: '/image/BTmodel1.jpg',
        heading: 'THIẾT KẾ NỘI THẤT BIỆT THỰ VINHOMES RIVERSIDE'
    },
    {
        img: '/image/BTmodel2.jpg',
        heading: 'THIẾT KẾ NỘI THẤT BIỆT THỰ VINHOMES GREEN BAY'
    },
    {
        img: '/image/BTmodel3.jpg',
        heading: 'THIẾT KẾ NỘI THẤT BIỆT THỰ TẠI HẢI PHÒNG'
    },
    {
        img: '/image/BTmodel4.jpg',
        heading: 'THIẾT KẾ NỘI THẤT BIỆT THỰ TẠI THÁI NGUYÊN'
    }
]

function popup_slider() {
    let slideTK = document.querySelector('.position');
    if (!slideTK) return false;

    function render_slide(param) {
        for (item of param) {
            let div = document.createElement('div');
            div.classList.add('showVideoTK');
            div.innerHTML = `
            <div>
            <div class="model" style="background-image: url(${item.img});"></div>
            <p class="modelHeading">${item.heading}</p>
        </div>
		 `;

            slideTK.appendChild(div)
        }

        tk = document.querySelectorAll('.showVideoTK .model')
       for (item of tk ){
        item.addEventListener('click', function(){
            console.log(item)
        })
       }
    }
    render_slide(itemtk);



    // function img_popup() {
    //     let popup = document.createElement('div');
    //     popup.classList.add('popup');
    //     popup.innerHTML = `
	// 	<div class="overlay"></div>
	// 	<div class="content"> 
    //         f
	// 	</div>
	// 	`;
    //     popup.querySelector('.overlay').addEventListener('click', function () {
    //         popup.remove();
    //     });

    //     document.body.appendChild(popup);
    // }
}
popup_slider();


let iteS = [
    {
        img: '/image/BTphongkhach.jpg',
        heading: 'NỘI THẤT PHÒNG KHÁCH'
    },
    {
        img: '/image/BTphongbep.jpg',
        heading: 'NỘI THẤT PHÒNG BẾP'
    },
    {
        img: '/image/BTphongan.jpg',
        heading: 'NỘI THẤT PHÒNG ĂN'
    },
    {
        img: '/image/BTphongngu.jpg',
        heading: 'NỘI THẤT PHÒNG NGỦ'
    }
]

function showNoiThat() {
    let sVIDEO = document.querySelector('.sVIDEO');
    if (!sVIDEO) return false;

    function render_slide(param) {
        for (item of param) {
            let div = document.createElement('div');
            div.classList.add('txt-center');
            div.innerHTML = `
            <div>
                <div class="model" style="background-image: url(${item.img});"></div>
                <p class="modelHeading">${item.heading}</p>
            </div>
		 `;

            sVIDEO.appendChild(div)
        }

    }
    render_slide(iteS)
}
showNoiThat()


