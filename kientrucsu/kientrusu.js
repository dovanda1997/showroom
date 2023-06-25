
let data = [
    {
        img:'',
        name: '',
        work: 'Tổng giám đốc'
    },
    {
        img:'',
        name: '',
        work: 'Kiến trúc sư'
    },
    {
        img:'',
        name: '',
        work: 'Kiến trúc sư'
    },
    {
        img:'',
        name: '',
        work: 'Kiến trúc sư'
    }

]

 function render (param){
     for(let item of param){
          let imgf = document.querySelector('.KT-item .media')
        let div = document.createElement('div')
        div.classList.add('KT-item-use') 
        div.innerHTML =`
        
        <div class="KT-img" >
            <div class="img_profile" style="  background-image: url(/image/chandung2.jpg);"></div>
        </div>
        <div class="KT-heading">
            <p style="padding-top: 10px;" >KTS:${item.name}</p>
            <P>${item.work}</P>
        </div>
         
        `
        console.log(div)
        imgf.appendChild(div)
      }
 }
 render(data)
