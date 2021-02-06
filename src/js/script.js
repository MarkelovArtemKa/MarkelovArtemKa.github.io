$(document).ready(function(){
    $('button.dropbtn').on('hover', function(){
        $('.dropdown-content')
        .toggleClass('dropdown-content_active')
    });
    $('.dropdown-content').on('hover', function(){
        $('.dropdown-content')
        .toggleClass('dropdown-content_active')
    });
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal_close').on('click', function() {
          $('.overlay, #consultation, #thanks').fadeOut('slow')
      });
      $('.contact_us').each(function(i){
        $(this).on('click', function(){
          $('#consultation .modal_descr');
            $('.overlay, #consultation').fadeIn('slow');
        });
    });
    $('.elos_money').each(function(i){
        $(this).on('click', function(){
          $('#consultation .modal_descr');
            $('.overlay, #consultation').fadeIn('slow');
        });
    });
    $('.nails_price').each(function(i){
        $(this).on('click', function(){
          $('#consultation .modal_descr');
            $('.overlay, #consultation').fadeIn('slow');
        });
    });
    $('.hair_price').each(function(i){
        $(this).on('click', function(){
          $('#consultation .modal_descr');
            $('.overlay, #consultation').fadeIn('slow');
        });
    });
    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
          $('form').trigger('reset');
      });
      return false;
  });
});