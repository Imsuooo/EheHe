//햄버거 메뉴
$('.bar').click(()=>{
    $('.navRightM').css("transform", "translateX(0%)");
})

$('.close').click(()=>{
    $('.navRightM').css("transform", "translateX(100%)");
})
