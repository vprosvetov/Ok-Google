  $('.block').click(function(){
        $(this).toggleClass('enable');
      });

      $('.button').click(function(){
        $('.block').remove('.enable');
      });

      $('.button2').click(function(){
        $('.block').addClass('bigsize');
      });

      $('.button3').click(function(){
        $('.block').removeClass('bigsize');
      });

      $('.span1').click(function(){
        var $elements = $('.block');
        var $target = $('#moving');
        
        var sort = $elements.sort(function (a, b) {
        var an = $(a).text(),
        bn = $(b).text();
        
        if (an && bn) {
        return an.toUpperCase().localeCompare(bn.toUpperCase());
        }
        
        return 0;
        });
        $target.html('');
        $target.append(sort);
        });
        
        $('.span2').click(function(){
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
        $target.html('');
        $target.append(sort);
        });

        $( function(){
          $( '[#moving]' ).sortable({
            placeholder: "holder"
          });
              $( ".block" ).disableSelection();
            } );
            
      