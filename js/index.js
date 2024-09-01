let visual = $('.visual');

//페이지 높이
imgsize()
function imgsize(){
    setInterval(function(){
        let heightl = $('.visualImgLarge').height();
        let heights = $('.visualImgSmall').height();
        let htmlWidth = $('html').width();
        if(htmlWidth<=900){
            $('.visualArea').css('height',heights);
            $('.visual>a>img').css({width:'100%', height : 'auto'})
        }
        else{
            $('.visualArea').css('height',heightl);
            $('.visual>a>img').css({height:'auto', width : '100%'})
        }
    },100)
}

//자동슬라이드
let slideinterval;
let current = 0;
let leftbtn =$('.controlLeft');
let rightbtn =$('.controlRight');

autoslide()
function autoslide(){
    slideinterval=setInterval(function(){
        let prev = visual.eq(current);
        move(prev, 0, '-100%');
        current++;
        if(current==visual.size()){
            current=0;
        }
        let next = visual.eq(current);
        move(next,'100%', 0);
    },3000)
}

function move(tg, start, end){
    if(htmlWidth<=600){
        tg.css('left',start).stop().animate({left:end},1300)
    }
    else{
        tg.css('left',start).stop().animate({left:end},1300)
    }
}


 //슬라이드 버튼
 rightbtn.click(function(){
    let prev = visual.eq(current);
        move(prev, 0, '-100%');
        current++;
    if(current==visual.size()){
        current=0
    }

    let next = visual.eq(current);
    move(next, '100%', 0);
    clearInterval(slideinterval);
    autoslide()
});

leftbtn.click(function(){
    let prev = visual.eq(current);
        move(prev, 0, '100%');
        current--;
    if(current==-visual.size()){
        current=0
    }

    let next = visual.eq(current);
    move(next, '-100%', 0);
    clearInterval(slideinterval);
    autoslide()
});


//모바일 슬라이드
let curPos = 0;
let postion = 0;
let start, end;
let images = document.querySelector(".visuals") 
let htmlWidth = $('html').width();
images.addEventListener('touchstart', touch_start);
images.addEventListener('touchend', touch_end);

function prev(){
    if(curPos > 0){
      let prev = visual.eq(current);
      move(prev, 0, '100%');
      current--;
        if(current==-visual.size()){
      current=0
    }
  let next = visual.eq(current);
  move(next, '-100%', 0);
  clearInterval(slideinterval);
  autoslide()
      curPos = curPos - 1;
    }
  }

  function next(){
    if(curPos < 3){
      let prev = visual.eq(current);
      move(prev, 0, '-100%');
      current++;
      if(current==visual.size()){
      current=0
  }
    let next = visual.eq(current);
    move(next, '100%', 0);
    clearInterval(slideinterval);
    autoslide()
    curPos = curPos + 1;
    }
  }
   
  function touch_start(event) {
    start = event.touches[0].pageX
  }
   
  function touch_end(event) {
    end = event.changedTouches[0].pageX;
    if(start > end){
      next();
    }else{
      prev();
    }
  }

//제품 이미지 높이
let productinterval;
productH()
function productH(){
    productinterval=setInterval(function(){
        let itemW = $('.products>.item').width();
        if(itemW<=1024){
            $('.nail').css('height',itemW);
        }
    },100)
}
    
//텍스트 슬라이드
function spaceTextTransform(){
  const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
  const offset1 = (scrollTop-document.querySelector('.textArea').offsetTop) *0.1;
  
  document.querySelector('.textArea').style.transform = "translateX("+ -offset1+"px)";
  };
  window.addEventListener('scroll',spaceTextTransform);