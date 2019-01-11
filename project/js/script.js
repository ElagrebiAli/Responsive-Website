$(document).ready(function() {
    /*add autofocus*/
    $('.js--add-attr').waypoint(function(direction){
    if(direction=="down"){
        console.log('hello')
        $('.js--autofocus').focus() ;
    }  
},{offset:'60%'});
    
/* sticky the navigation*/    
   $('.js--section-features').waypoint(function(direction){
    if (direction=="down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    };
    
},{
offset:'30%'});    
    
 /*scroll on buttons*/   
$('.js--scroll-to-plan').click(function() {
    $('html,body').animate({scrollTop: $('.js--section-sign-up').offset().top},1000)
})
$('.js--scroll-to-section-1').click(function() {
    $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000)                                    
})
    
/*navigation scroll*/
    

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]').click(function(event) {
         console.log(location.pathname.replace(/^\//,''))
        if(location.pathname.replace(/^\//,'')== this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
            
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
          event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false ;  
    }
}
});

var i=1;   
/*animation on scroll*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp')
    },{offset:'60%'});
    
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated slideInLeft')
        
        if(i===1){
           $('.count').each(function(){
        
            $(this).prop('Counter',0).animate({
                Counter:$(this).text()
            },{
                duration:4000,
                easing:'swing',
                step:function(now){
                    $(this).text(Math.ceil(now))
                }
            })
        })
         i++;
        }
        
    },{offset:'100%'})
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated slideInDown ')
    },{offset:'700px'})
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated shake')
    },{offset:'50%'})
    
    
/*responsive nav bar */
 $('.js--nav-icon').click(function(){
     console.log('he')
     var nav=$('.js--main-nav');
     var icon=$('.js--nav-icon-ion')
     nav.slideToggle(200);
     if(icon.attr('name')=='menu'){
         icon.attr('name','close')
     }else{
         icon.attr('name','menu')
     }
 })
    
})


