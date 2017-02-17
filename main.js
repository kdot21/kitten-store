$(function() {
  $('.top-bar input').on('focus', function() {
    $(this).css('width', '460px');
    $(this).addClass('expanded');
  });
  $('.top-bar input').on('blur', function() {
    $(this).css('width', '240px');
    $(this).removeClass('expanded');
  });
  
  $('#thumbnails').find('.column').on('focus', function() {
    $('#mainPreview').attr('src', $(this).find('img').attr('src'));
  });
  
  $('.tabs li a').on('focus', function(e) {
    e.preventDefault();
    
    var linkSrc = $(this).attr('href');
    
    $('.tabs li').removeClass('is-active');
    $('.tabs li a').removeAttr('aria-selected');
    
    $(this).parent().addClass('is-active');
    $(this).attr('aria-selected', 'true');
    
    $('.tabs-content .tabs-panel').removeClass('is-active');
    $(linkSrc).addClass('is-active');
  });
});