$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     url = 
     $.getJSON('https://api.jsonbin.io/v3/b/638b7617a3c728450ede8f78?meta=false', function(data) {
      $.each(data, function(key, value){
       if (value.title.search(expression) != -1 || value.description.search(expression) != -1)
       {
        $('#result').append('<li class="list-group-item link-class"><img src="'+ value.images +'" height="80" width="80" class="img-thumbnail" /> '+'&nbsp'+'&nbsp'+'&nbsp'+value.title+'  <span class="text-muted"></span></li>');
       }
      });   
     });
    });
  
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');
    });
   });