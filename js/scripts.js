$(function() {

  $("#hello").click(function(){
    $("#statements").prepend("<li>Hello!</li>");
    $("#responses").prepend("<li>Wuz up!</li>");
    $("#statements").children().first().click(function(){
      // $(this).addClass("bkgreen");
      $(this).remove();
    })
  });

 $("#how").click(function(){
   $("#statements").prepend("<li>How ya doin?</li>");
   $("#responses").prepend("<li>I'm swell.</li>");

 });

 $("#who").click(function(){
   $("#statements").prepend("<li>Who are you?</li>");
   $("#responses").prepend("<li>My name is HAL.</li>");

 });

 $("#goodbye").click(function(){
   $("#statements").prepend("<li>Goodbye!</li>");
   $("#responses").prepend("<li>Cya later!</li>");

 });

});
