//-------------------Our--Services------------------------------------//

let blockW=document.getElementById('WebDesign3');
let sub=document.getElementsByClassName('subitem')[0];
sub.style.display = 'flex';
let isPull=false;

blockW.onmousedown=function () {
    CloseItemsTabs();
    this.classList.add('speech-bubble');
}
blockW.onclick=function (event) {
    const target=event.target;
    if((!isPull)&&(target.id==='WebDesign3')) {
        isPull = true;
        console.log('Hello!!!');
        CloseMenu();
        sub=document.getElementsByClassName('subitem')[0];
        sub.style.display = 'flex';
    }}
//------------------------------------------------------------------------
let blockGraph=document.getElementById('GraphicDesign3');
blockGraph.onmousedown=function () {
    CloseItemsTabs();
    this.classList.add('speech-bubble');
}
blockGraph.onclick=function (event) {
    const target=event.target;
    if((!isPull)&&(target.id==='GraphicDesign3')) {
        isPull = true;
        console.log('Hello!!!');
        CloseMenu();
        sub = document.getElementsByClassName('subitem')[1];
        sub.style.display = 'flex';
    }}
//------------------------------------------------------------------------
let blockSupport=document.getElementById('OnlineSupport');
blockSupport.onmousedown=function () {
    CloseItemsTabs();
    this.classList.add('speech-bubble');
}
blockSupport.onclick=function (event) {
    const target=event.target;
    if((!isPull)&&(target.id==='OnlineSupport')) {
        isPull = true;
        console.log('Hello!!!');
        CloseMenu();
        sub = document.getElementsByClassName('subitem')[2];
        sub.style.display = 'flex';
    }}
//------------------------------------------------------------------------
let blockApp=document.getElementById('AppDesign');
blockApp.onmousedown=function () {
    CloseItemsTabs();
    this.classList.add('speech-bubble');
}
blockApp.onclick=function (event) {
    const target=event.target;
    if((!isPull)&&(target.id==='AppDesign')) {
        isPull = true;
        console.log('Hello!!!');
        CloseMenu();
        sub = document.getElementsByClassName('subitem')[3];
        sub.style.display = 'flex';
    }}
//------------------------------------------------------------------------
let blockMarketing=document.getElementById('OnlineMarketing');
blockMarketing.onmousedown=function () {
    CloseItemsTabs();
    this.classList.add('speech-bubble');
}
blockMarketing.onclick=function (event) {
    const target=event.target;
    if((!isPull)&&(target.id==='OnlineMarketing')) {
        isPull = true;
        console.log('Hello!!!');
        CloseMenu();
        sub = document.getElementsByClassName('subitem')[4];
        sub.style.display = 'flex';
    }}
//------------------------------------------------------------------------
let blockSeo=document.getElementById('SeoService');
blockSeo.onmousedown=function () {
    CloseItemsTabs();
    this.classList.add('speech-bubble');
}
blockSeo.onclick=function (event) {
    const target=event.target;
    if((!isPull)&&(target.id==='SeoService')) {
        isPull = true;
        console.log('Hello!!!');
        CloseMenu();
        sub = document.getElementsByClassName('subitem')[5];
        sub.style.display = 'flex';
    }}
//--------functions--------------------------------------------------------//
function CloseMenu() {
    sub = document.getElementsByClassName('subitem');
    for (let i=0; i<sub.length; i++) {
        sub[i].style.display="none";
    }
    isPull=false;
};
function CloseItemsTabs() {
    itemsTab = document.getElementsByClassName('itemsTab');
    for (let i=0; i<itemsTab.length; i++) {
        itemsTab[i].classList.remove('speech-bubble');
    }}
//-------------------Our--Services----End---------------------------------//
//-------------Our--Amazing--Work-----------------------------------------//
let itemAll=document.getElementById('All');
itemAll.onmousedown=function (){
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    All();
}
   items=document.getElementById('Graphicdesign');
    items.onmousedown=function (){
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    Graphicdesign();
}
items=document.getElementById('Webdesign');
items.onmousedown=function (){
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    Webdesign();

}
items=document.getElementById('Landingpages');
items.onmousedown=function (){
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    Landingpages();
}
items=document.getElementById('Wordpress');
items.onmousedown=function (){
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    Wordpress();
}
function All() {
    let contentNew=document.body.getElementsByClassName("All");
    for(var i =0;i<contentNew.length;i++){
        contentNew[i].style.display="flex";
    }return false;
}
function Graphicdesign() {
    let contentNew=document.body.getElementsByClassName("Graphicdesign");
    for(var i =0;i<contentNew.length;i++){
        contentNew[i].style.display="flex";
    }return false;
}
function Landingpages() {
    let contentNew=document.body.getElementsByClassName("Landingpages");
    for(var i =0;i<contentNew.length;i++){
        contentNew[i].style.display="flex";
    }return false;
}
function Webdesign() {
    let contentNew=document.body.getElementsByClassName("Webdesign");
    for(var i =0;i<contentNew.length;i++){
        contentNew[i].style.display="flex";
    }return false;
}
function Wordpress() {
    let contentNew=document.body.getElementsByClassName("Wordpress");
    for(var i =0;i<contentNew.length;i++){
        contentNew[i].style.display="flex";
    }return false;
}
function HideImages() {
    let content=document.getElementById("wrapp").children;
    for(var i =0;i<content.length;i++){
    content[i].style.display="none";
}}
function CloseItems() {
    items = document.getElementsByClassName('items');
    for (var i=0; i<items.length; i++) {
        items[i].classList.remove('active-items');
    }}

//-------------Our--Amazing--Work-Add more-----------------------------------//
$(document).ready(function(){
    $('.load').click(function () {
    let load=$("#load-img .image-off");
console.log(load);
    $('.ourAmazingWork').css({'height':'+=618'});
    load.slice(0,12).removeClass('image-off').addClass('active-image');//поменяли класс для 12 изображений
console.log(load);
    load=$("#load-img .image-off");
    if(load.length==0){
    $('.ourAmazingWork').css({'height':'2436px'});
    $('.load').fadeOut('slow');
    }
    })
});
//-------------Our--Amazing--Work---hover-img---------------------------------//
$(function() {
    $('#wrapp > img').hover(
        function() {
            var currentSrc = $( this ).attr('src');
            var scrToStorage=localStorage.setItem('keySrc',currentSrc);
            $( this ).attr('src','css/img/web%20design/HoverRectangle.png');
        }, function() {
            var prevSrc=localStorage.getItem('keySrc');
            $( this ).attr('src', prevSrc);
            localStorage.clear();
        }
    );
});

//---------------------------Slick--Slider-------------------------------//
$(document).ready(function(){
    $('.slider-for').slick({
        slidesToScroll: 1,
        rows:3,
        slidesPerRow:1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        centerMode:true,
        slidesToScroll: 1,
        arrows:true,
        centerPadding:'13px',
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true

    });
});
//---------------------------Masonry-------------------------------//


$(document).ready(function(){
$(".item-masonry").hover(
    function () {
        $(this).find(".cover-item-gallery").fadeIn();
    },
    function f() {
        $(this).find(".cover-item-gallery").fadeOut();
    })
});
var container = document.querySelector('#galleryContainer');
var msnry = new Masonry( container, {
columnWidth: 370,
temSelector: '.item-masonry',
gutter:17
});
//---------------------------Masonry-hover img------------------------------//
$(document).ready(function(){
    $(".top .left,.top .right").hover(
        function () {
            $(this).find(".cover-top").fadeIn();
        },
        function f() {
            $(this).find(".cover-top").fadeOut();
        })
});
$(document).ready(function(){
    $(".inside-cub .inside").hover(
        function () {
            $(this).find(".cover-cub").fadeIn();
        },
        function f() {
            $(this).find(".cover-cub").fadeOut();
        })
});




