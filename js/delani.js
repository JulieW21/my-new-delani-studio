$(document).ready(function(){
    $(".development").click(function(){
      $(".development").slideDown('1500').hide('1000');
      $(".development-content").show('1500');
    });
    $(".development-content").click(function(){
      $(".development-content").slideUp('1500');
      $(".development").slideDown('1500');
    });
  });
  
  $(document).ready(function() {
    $(".design").click(function() {
      $(".design").slideDown('1500').hide('1000');
      $(".design-content").show('1500');
    });

    $(".design-content").click(function() {
      $(".design-content").slideUp('1500');
      $(".design").slideDown('1500');
    });
  });

  $(document).ready(function() {
    $(".managment").click(function() {
      $(".managment").slideDown('1500').hide('1000');
      $(".managment-content").show('1500');
    });
    $(".managment-content").click(function() {
      $(".managment-content").slideUp('1500');
      $(".managment").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $(".work_1").mouseover(function(){
      $(".portfolio").show();
    }).mouseout(function(){
      $(".portfolio").hide();
    });
  });
  $(document).ready(function(){
    $(".work_2").mouseover(function(){
      $(".portfolio2").show();
    }).mouseout(function(){
      $(".portfolio2").hide();
    });
  });
  $(document).ready(function(){
    $(".work_3").mouseover(function(){
      $(".portfolio3").show();
    }).mouseout(function(){
      $(".portfolio3").hide();
    });
  });
  $(document).ready(function(){
    $(".work_4").mouseover(function(){
      $(".portfolio4").show();
    }).mouseout(function(){
      $(".portfolio4").hide();
    });
  });
  
  $(document).ready(function(){
    $(".work_5").mouseover(function(){
      $(".portfolio5").show();
    }).mouseout(function(){
      $(".portfolio5").hide();
    });
    $(".work_6").mouseover(function(){
      $(".portfolio6").show();
    }).mouseout(function(){
      $(".portfolio6").hide();
    });
    $(".work_7").mouseover(function(){
      $(".portfolio7").show();
    }).mouseout(function(){
      $(".portfolio7").hide();
    });
    $(".work_8").mouseover(function(){
      $(".portfolio8").show();
    }).mouseout(function(){
      $(".portfolio8").hide();
    });
  });
  
  $(document).ready(function(){
    $("form#contact_us_form_id").submit(function(event){
       event.preventDefault();
      var firtname = $("input#first_name_id").val();
      var email = $("input#last_name_id").val();
      var message = $("textarea#message_id").val();
      if ($("input#first_name_id").val() && $("input#last_name_id").val()){
        alert ("Hi " + firtname + ", your messeges has been received successfully. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your first, last name and message!");
      }
      
    });
  
  });
