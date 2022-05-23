// Btn See All

jQuery(document).ready(function() {
    jQuery('#toshow').hide();
    jQuery('.seemore').click(function(e){
    e.preventDefault();jQuery("#toshow").slideToggle();
    jQuery('.seemore').toggleClass('opened closed');
});
});