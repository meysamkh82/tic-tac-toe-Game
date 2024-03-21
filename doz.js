let divs = document.querySelectorAll('.di');
let container =document.getElementById('container')
let di =true;
let cl =0;
let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d3 = document.querySelector('.d3');
let d4 = document.querySelector('.d4');
let d5 = document.querySelector('.d5');
let d6 = document.querySelector('.d6');
let d7 = document.querySelector('.d7');
let d8 = document.querySelector('.d8');
let d9 = document.querySelector('.d9');
for(d of divs){
    d.addEventListener('click',function(){
        if(this.classList.contains('cl')){
            alert('این قسمت قبلا انتخاب شده است')
            return;
        }
        if(di){
            this.innerHTML = '<img src="./image/circle.png"/>';
            this.classList.add('cl');
            this.classList.add('circle')
            di = false;
            cl +=1;
        }else{
            this.innerHTML = '<img src="./image/zarbdar.png"/ style="width:200px;margin-left:-35px;" class="zarb">';
            this.classList.add('cl');
            this.classList.add('zarbdar');
            di =true;
            cl+=1;

        }
    })
}
let result;
let index = 'index.html';
let s = setInterval(function(){
    if(cl === 9){
        
        clearInterval(s);
        result = 'equal'
    }if(d1.classList.contains('circle')&&d2.classList.contains('circle')&&d3.classList.contains('circle')){
    
        clearInterval(s);
        result = 'circle';
    }
    else if(d7.classList.contains('circle')&&d8.classList.contains('circle')&&d9.classList.contains('circle')){

        clearInterval(s);
        result = 'circle';
    }
    else if(d1.classList.contains('circle')&&d4.classList.contains('circle')&&d7.classList.contains('circle')){

        clearInterval(s);
        result = 'circle';
    }
    else if(d3.classList.contains('circle')&&d6.classList.contains('circle')&&d9.classList.contains('circle')){
    
        clearInterval(s);
        result = 'circle';
    }
    else if(d1.classList.contains('circle')&&d5.classList.contains('circle')&&d9.classList.contains('circle')){

        clearInterval(s);
        result = 'circle';
    }
    else if(d3.classList.contains('circle')&&d5.classList.contains('circle')&&d7.classList.contains('circle')){

        clearInterval(s);
        result = 'circle';
    }
    else if(d2.classList.contains('circle')&&d5.classList.contains('circle')&&d8.classList.contains('circle')){
    
        clearInterval(s);
        result = 'circle';
    }
    else if(d4.classList.contains('circle')&&d5.classList.contains('circle')&&d6.classList.contains('circle')){
 
        clearInterval(s);
        result = 'circle';
    }
    else if(d3.classList.contains('zarbdar')&&d5.classList.contains('zarbdar')&&d7.classList.contains('zarbdar')){

        clearInterval(s);
        result = 'zarbdar';
    }
    else if(d1.classList.contains('zarbdar')&&d5.classList.contains('zarbdar')&&d9.classList.contains('zarbdar')){

        clearInterval(s);
        result = 'zarbdar';
    }
    else if(d7.classList.contains('zarbdar')&&d8.classList.contains('zarbdar')&&d9.classList.contains('zarbdar')){
   
        clearInterval(s);
        result = 'zarbdar';
    }
    else if(d1.classList.contains('zarbdar')&&d2.classList.contains('zarbdar')&&d3.classList.contains('zarbdar')){
     
        clearInterval(s);
        result = 'zarbdar';
    }
    else if(d3.classList.contains('zarbdar')&&d6.classList.contains('zarbdar')&&d9.classList.contains('zarbdar')){
    
        clearInterval(s);
        result = 'zarbdar';
    }
    else if(d1.classList.contains('zarbdar')&&d4.classList.contains('zarbdar')&&d7.classList.contains('zarbdar')){
       
        clearInterval(s);
        result = 'zarbdar';
    }    
    else if(d2.classList.contains('zarbdar')&&d5.classList.contains('zarbdar')&&d8.classList.contains('zarbdar')){
       
        clearInterval(s);
        result = 'zarbdar';
    }    
    else if(d4.classList.contains('zarbdar')&&d5.classList.contains('zarbdar')&&d6.classList.contains('zarbdar')){
      
        clearInterval(s);
        result = 'zarbdar';
    }
    let result2 = document.getElementById('result');
    
    if(result === 'equal'){
        container.style.display = "none";
        result2.style.display = 'block';
        result2.innerHTML = '<p style="color:cyan;">بازی مساوی شد</p><div class="btn"><button onclick="location.reload(true)">بازی دوباره</button><button onclick="window.open('+index+')">صفحه اصلی</button></div>'
    }else if(result === 'circle'){
        container.style.display = "none";
        result2.style.display = 'block';
        result2.innerHTML = '<p style="color:green;font-size:4rem;">بازیکن دایره برنده بازی شد</p><div class="btn"><button onclick="location.reload(true)">بازی دوباره</button><button onclick="window.open('+index+')">صفحه اصلی</button></div>'
    }else if(result === 'zarbdar'){
        container.style.display = "none";
        result2.style.display = 'block';
        result2.innerHTML = '<p style="color:red;font-size:4rem">بازیکن ضربدر برنده بازی شد</p><div class="btn"><button onclick="location.reload(true)">بازی دوباره</button><button onclick="window.open('+index+')">صفحه اصلی</button></div>'
    }
},500)