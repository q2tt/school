// $('.header-btn').click(function(){
//     console.log ('click');
//     window.scroll({
//     top: 900,
//     behavior: 'smooth' })
// })
// $('.top-btn').click(function(){
//     // console.log ('click');
//     // window.scroll({
//     // top: 900,
//     // behavior: 'smooth' })
//     document.getElementsByClassName('.form').scrollIntoView({behavior: 'smooth'})
// })
// document.getElementsByClassName('.top-btn').addEventListener('click',() =>{
//     document.getElementsByClassName('.form').scrollIntoView({behavior: 'smooth'})
// })

// $('.header-btn').on('click', function(e) {
//     console.log ('scriol')
//     e.preventDefault();
//     let href = document.getElementsByClassName('.form');

//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 370,   // по умолчанию «400» 
//         easing: "linear" // по умолчанию «swing» 
//     });

//     // return false;
// });
$('.top-btn').click(function(){
    console.log ('scriol')
    //let href = document.getElementsByClassName('.form');
    $('body').scrollTo('.form'); 

})