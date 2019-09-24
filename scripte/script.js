$('.block').click(function () {
  $(this).toggleClass('enable');
  var items = $('.enable');

  if (items.length > 0) {
    $('.button').attr('disabled', false);
  } else {
    $('.button').attr('disabled', true);
  }

});
$('.button').click(function () {
  $('.enable').remove();
});

$('.button2').click(function () {
  $('.block').addClass('bigsize');
});

$('.button3').click(function () {
  $('.block').removeClass('bigsize');
});

$(function () {
  $("#moving").sortable({
    placeholder: "holder"
  });
  $("#moving").disableSelection();
});

$('.span1').click(function () {
  var $elements = $('.block');
  var $target = $('#moving');

  $elements.sort(function (a, b) {
    var an = $(a).text(),
      bn = $(b).text();

    if (an && bn) {
      return an.toUpperCase().localeCompare(bn.toUpperCase());
    }

    return 0;
  });
  $elements.appendTo($target);  
});

$('.span2').click(function () {
  var $elements = $('.block');
  var $target = $('#moving');
  var sort = $elements.sort(function (a, b) {
    var an = $(a).text(),
      bn = $(b).text();
    if (an && bn) {
      return bn.toUpperCase().localeCompare(an.toUpperCase());
    }
    return 0;
  });
  $target.append(sort);
});
