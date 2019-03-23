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
    console.log('Mousedown on items All');
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    ShowImages();
}
items=document.getElementById('Graphicdesign');
items.onmousedown=function (){
    console.log('Mousedown on items GraphicDesign');
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    ShowImages();
}
items=document.getElementById('Webdesign');
items.onmousedown=function (){
    console.log('Mousedown on items Web Design');
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    ShowImages();

}
items=document.getElementById('Landingpages');
items.onmousedown=function (){
    console.log('Mousedown on items Landing pages');
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    ShowImages();
}
items=document.getElementById('Wordpress');
items.onmousedown=function (){
    console.log('Mousedown on items Wordpress');
    CloseItems();
    this.classList.add('active-items');
    Tubname=this.id;
    HideImages();
    ShowImages();

}
function ShowImages() {
    let contentNew=document.body.getElementsByClassName("Webdesign");
    for(var i =0;i<contentNew.length;i++){
        //contentNew[i].classList.add("active-image");
        contentNew[i].style.display="flex";
    }return false;
}
function HideImages() {
    let content=document.body.getElementsByClassName("picture");
    for(var i =0;i<content.length;i++){
    //content[i].classList.add("image-off");
    content[i].style.display="none";
}}
function CloseItems() {
    items = document.getElementsByClassName('items');
    for (var i=0; i<items.length; i++) {
        items[i].classList.remove('active-items');
    }}

//-------------Our--Amazing--Work-end------------------------------------//
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


var container = document.querySelector('#galleryContainer');
var msnry = new Masonry( container, {
    columnWidth: 370,
    itemSelector: '.galItem',
    gutter:17
});

//var containerRctngl=document.querySelector('#rectangle');
//var msnty1=new Masonry( container, {
  //  columnWidth: 180,
    //itemSelector: '.rectangleItem',
    //gutter:3
//});
//let containerSquare=document.querySelector('#square');
//let msnty2=new Masonry( container, {
  //  columnWidth: 120,
    //itemSelector: '.item-inside',
    //gutter:3
//});
//let gallery3=document.querySelector('#containerGallery3');
//let msnty3=new Masonry( container, {
  //  stamp:"#rectangle",
    //columnWidth: 120,
    //itemSelector: '.item-inside',
    //gutter:3
//});