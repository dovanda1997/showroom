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
function render_slideeee(param) {
    let slideTK = document.querySelector('.position');
    if (!slideTK) return false;
    for (let item of param) {
        let div = document.createElement('div');
        div.classList.add('showVideoTK');
        div.innerHTML = `
        <div>
            <div class="model" style="background-image: url(${item.img});"></div>
            <p class="modelHeading">${item.heading}</p>
            </div>  
        `;
        div.addEventListener('click', function(){
            img_popup(item)
            
        })
        slideTK.appendChild(div)
    }

}
render_slideeee(itemtk);
  
    function img_popup(item) {
        let popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
		<div class="overlay"></div>
		<div class="sdile"> 
        <h2>${item.heading}</h2>
        <img src="${item.img}" alt="">   

        </div>	
		`;
        $('.single-item').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<span class="fa fa-angle-left prev"></span>',
            nextArrow: '<span class="fa fa-angle-right next"></span>'
          
          });

       
       
    //    let sdile = popup.querySelector('.sdile')
    //   let divSdile = document.createElement('div')
    //   divSdile.classList.add('single-item')
    //   divSdile.innerHTML = `
    //   <div>1</div>
    //   <div>2</div>
    //   <div>3</div>
    //   <div>4</div>
    //   `
    //   sdile.appendChild(divSdile)
    
    
    
    popup.querySelector('.overlay').addEventListener('click', function () {
        popup.remove();
    });
    
    document.body.appendChild(popup);
}






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
        for (let item of param) {
            let div = document.createElement('div');
            div.classList.add('txt-center');
            div.innerHTML = `
            <div>
                <div class="model" style="background-image: url(${item.img});"></div>
                <p class="modelHeading">${item.heading}</p>
            </div>
		 `;

         div.addEventListener('click', function(){
          
             img_popup(item)
             
           
         })
            sVIDEO.appendChild(div)
        }
       
    }
    render_slide(iteS)
}
showNoiThat()


