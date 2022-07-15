var header = document.querySelector('header'),
    mainMenuList = document.querySelectorAll('#mainmenu > li'),
    subMenu = document.querySelectorAll('.submenu'),
    headerHeight = header.offsetHeight;
    subMenuHeight = 0;

/* 
Var B = A.offsetHeight; // border 까지의 높이
Var B = A.clientHeight; // padding 까지의 높이

변수명 subMenuHeight에 subMenu중에서 가장 높이가 큰 요소의 높이를 구해서 저장

*/

for(var i=0; i<subMenu.length; i++){
    if(subMenu[i].offsetHeight > subMenuHeight) {
        subMenuHeight = subMenu[i].offsetHeight;
        console.log(subMenu[i]);
    }
}

for(var i=0; i<mainMenuList.length; i++){
    mainMenuList[i].addEventListener('mouseover', function() {
        header.style.height = headerHeight + subMenuHeight + 'px';
    });
    mainMenuList[i].addEventListener('mouseout', function() {
        header.style.height = headerHeight + subMenuHeight + 'px';
    });
}