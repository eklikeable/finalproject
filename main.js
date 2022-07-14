var header = document.querySelector('header'),
nav = document.querySelector('nav');

mainMenuList = document.querySelector('.mainmenu > li'),
subMenu = document.querySelector('.submenu'),
headerHeight = header.offsetHeight,
subMenuHeight = 0;

/* 
Var B = A.offsetHeight; // border 까지의 높이
Var B = A.clientHeight; // padding 까지의 높이

변수명 subMenuHeight에 subMenu중에서 가장 높이가 큰 요소의 높이를 구해서 저장

*/


for(var i=0; i<subMenu.length; i++){
    if(subMenu[i].offsetHeight > subMenuHeight){
        subMenuHeight = subMenu[i].offsetHeight;
    }
}
console.log(subMenuHeight);
/*
mainMenuList에 마우스를 올리면 header의 높이를 headerHeight와 subMenuHeight를 더한 최종 크기로 변경
mainMenuList에서 마우스를 나가면 다시 headerHeight로 변경
*/

for(var i=0; i < mainMenuList.length; i++){
    mainMenuList[i].addEventListener('mouseover', function() {
        header.style.height = headerHeight + subMenuHeight + 'px';
    });
}