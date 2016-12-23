/* © 2009 ROBO Design
 * http://www.robodesign.ro
 */
 $(document).ready(function() {
       $("#catagory").hide()
       $("#downloadLnk").hide()
       $("#refresh-page-button").hide()
   //array would be response from server
var catagory=
["Being in Fire", "A Tiny Horse", "Barack Obama","Patrick (From DBC)",
 "Darth Vader", "An Amish Woman", "Angry Fruit", "The Muscles of Brussels",
"Sunny's New Glasses","Black Christmas", "Roman from Ukraine",
"Alex After 3.5 Drinks at White Horse","The Coach", "You as a Super Villian",
 "Nickelback", "First Pump", "Phil From DBC Wearing an Orange Yamaka", "Steve Jobs",
"Alex From DBC Crying For Joy","Alex From DBC Proposing to Joy",
 "Alexandra reading off racist tweets", "Alex with a three colored mustache" ]

$("#catagory").html(catagory[Math.floor(Math.random()*catagory.length)])

//when start gaem button is pressed clock is displayed
  var clock;
  $("#start-button").on("click",function() {
    $("#start-button").hide()
    $("#catagory").show()
    clock = $('.clock').FlipClock({
          clockFace: 'MinuteCounter'
        });
  });

  $("#downloadLnk").on("click",function(){
    var getImageSrc =$("#imgCopy").attr("src");
      var openNewWindow =window.open('about:blank','image from canvas');
      openNewWindow.document.write("<p>Catagory: " +$("#catagory").text()+"</p>")
      openNewWindow.document.write("<img border='2' src="+getImageSrc+">")
  })

  $('#refresh-page-button').click(function() {
    location.reload();
    });
//ends $(document).ready
});

 function download() {
    var imageSrc= $("#imgCopy").attr("src")
     this.href = imageSrc;
 };
 downloadLnk.addEventListener('click', download, false);



// Keep everything in anonymous function, called on window load.
if(window.addEventListener) {
window.addEventListener('load', function () {
  var canvas, context, tool;

  function init () {
    // Find the canvas element.
    canvas = document.getElementById('imageView');
    if (!canvas) {
      alert('Error: I cannot find the canvas element!');
      return;
    }

    if (!canvas.getContext) {
      alert('Error: no canvas.getContext!');
      return;
    }

    // Get the 2D canvas context.
    context = canvas.getContext('2d');
    if (!context) {
      alert('Error: failed to getContext!');
      return;
    }

    //changes color of stroke
    $("#change-color").on("click",function(){
      event.preventDefault();
      var tableColor = $(event.target)
      if (tableColor.attr("id") === "color-black"){
              context.strokeStyle ='black'}
      else if (tableColor.attr("id") === "color-red"){
              context.strokeStyle ='red'}
      else if (tableColor.attr("id") === "color-purple"){
              context.strokeStyle ='purple'}
      else if (tableColor.attr("id") === "color-blue"){
              context.strokeStyle ='blue'}
      else if (tableColor.attr("id") === "color-green"){
              context.strokeStyle ='green'}
      else if (tableColor.attr("id") === "color-light-blue"){
              context.strokeStyle = "#43E9FD"}
      else if (tableColor.attr("id") === "color-yellow"){
              context.strokeStyle ='yellow'}
      else if (tableColor.attr("id") === "color-orange"){
              context.strokeStyle ='orange'}
      else if (tableColor.attr("id") === "erase"){
              context.strokeStyle ='white'}
    })

    // Pencil tool instance.
    tool = new tool_pencil();


    // Attach the mousedown, mousemove and mouseup event listeners.
    canvas.addEventListener('mousedown', ev_canvas, false);
    canvas.addEventListener('mousemove', ev_canvas, false);
    canvas.addEventListener('mouseup',   ev_canvas, false);
  }

  // This painting tool works like a drawing pencil which tracks the mouse
  // movements.
  function tool_pencil () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only
    // draws if the tool.started state is set to true (when you are holding down
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
        context.lineWidth = 5;
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
      }
    };
  }

  // The general-purpose event handler. This function just determines the mouse
  // position relative to the canvas element.
  function ev_canvas (ev) {
    if (ev.layerX || ev.layerX == 0) { // Firefox
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }

    // Call the event handler of the tool.
    var func = tool[ev.type];
    if (func) {
      func(ev);
    }
  }

  init();

}, false); }


// vim:set spell spl=en fo=wan1croql tw=80 ts=2 sw=2 sts=2 sta et ai cin fenc=utf-8 ff=unix:
