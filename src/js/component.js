$(document).ready(function () {
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

  });

  $('#cpu').ionRangeSlider({
    skin: "big",
    grid: true,
    hide_min_max: true,
    hide_from_to: true,
    min: 0,
    max: 16,
    from: 1,
    step: 2,
    /*        prettify_enabled: true,
            prettify_separator: ","*/
  });

  $('#ram').ionRangeSlider({
    skin: "big",
    grid: true,
    hide_min_max: true,
    hide_from_to: true,
    min: 0,
    max: 64,
    from: 1,
    step: 2,
    /*        prettify_enabled: true,
            prettify_separator: ","*/
  });

  $('#memory').ionRangeSlider({
    skin: "big",
    grid: true,
    hide_min_max: true,
    hide_from_to: true,
    min: 0,
    max: 384,
    from: 4,
    step: 2,
    /*        prettify_enabled: true,
            prettify_separator: ","*/
  });

  $('.server-ion input').change(function () {
    $(this).parents('.content').find('.title .count').text($(this).val());
  })



  $('.reviews-slider').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    responsive: {
      600: {
        items: 2
      }
    }
  });

  var observer = lozad();
  observer.observe();

});
