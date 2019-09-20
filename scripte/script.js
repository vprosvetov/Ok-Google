$( function() {
        $( "#moving" ).sortable();
        $( "#moving" ).disableSelection();
      } );
      $('.block').click(function(){
        console.log(this);
        $(this).toggleClass('enable');
      });