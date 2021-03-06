
/*

Copyright 2020 Anoop Singh, Graphical Structure

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.



*/

var displaysignal="slow";

var top = 0
var max = 0
var table = 0
var elements = []
var counttreenodes = 0
var command = ""

var terminate = "no"
var count =0

var head =""
var stats= 0;
var divbyelement = { }

var next = { }
var prev = { }

var tree = { }
var parent = {}

var variables ={}

var sequence =[]

var mapping = { "0" : "print(value)" ,  "1" : "preorder(left)" , "2" : "preorder(right)" , "3" : "return"}

var steps = {}
var newnode;
var drawflag = false;
variables['head'] = 0
variables['root'] = 0

var head = variables['head']

var CurrentNode = variables['root']

var value="";
var log = $("#log1")
var output = $("#out1")

$('body').append(`<img id="pointerarrow" src="pointer.png" style="height: 70px; width: 70px; position: absolute; top: 135px;transition-duration:500ms;">`)
var pointerarrow = $("#pointerarrow")
pointerarrow.hide();

$('#anislow').css({"background-image" : "linear-gradient(to right , #ff512f , #dd2476)"});



$("#log1").append('<p style="font-size:x-large; margin-top:-5px;  color:rgb(255,0,0, 0.7);font-family:Segoe UI;">'+ "Happenings.." +'</p>')


$("body").append(`<p id="iindex" style="position:absolute; transition-duration : 500ms; top:0px; font-size:150%; font-family:'segoe ui'; ">i</p>`)
$("body").append(`<p id="jindex" style="position:absolute; transition-duration  :500ms; top:0px; font-size:150%; font-family:'segoe ui'; ">j</p>`)
$("body").append(`<p id="kindex" style="position:absolute; transition-duration  :500ms; top:0px; font-size:150%; font-family:'segoe ui'; ">k</p>`)

$("#iindex").hide()
$("#jindex").hide()
$("#kindex").hide()

var speed =0; 

var mySVG = $('body').connect();

if (!isMobile){

  var script = document.createElement('script');
  script.src = "Scripts/Algorithm/lineshandle.js";
document.head.appendChild(script)

}
     
function del (one ,two)  {

  mySVG.dl(one , two)
          
}




var slider = document.getElementById("animation-speed");
var slowsymbol = document.getElementById("slowiden");
var fastsymbol = document.getElementById("fastiden");

speed = 2020- 2000*(slider.value/100);


slider.oninput = function() {

  speed = 2020- 2000*(this.value/100);

  fastsymbol.style.opacity = this.value+"%"
  slowsymbol.style.opacity = (100 - this.value)+"%"

}
     

function pauser ()  {



  return new Promise( resolve => {
              
    $("#pl").click(function() {
    
      $("#pa").css('filter' , 'blur(0px)');
      $("#pl").css('filter' , 'blur(5px)');
        $("#pl").off("click");
    
    
    stats = 0 ;
    resolve("reolved");
    
    
    })
    
    
    
    })


}


$("#pa").click(function()  {


  stats =1;
  
  $("#pa").css('filter' , 'blur(5px)');
  $("#pl").css('filter' , 'blur(0px)');
  
  
  })




var defaultcolor = "argb(0,0,0,0.842)";

async function hilight (acc , color="rgb(0,0,0,0.842)" , duration = "4000ms" , timeout = 4100) {


  $("#"+acc).css({"background-color" : color , "transition" :speed+"ms linear" })
  if (stats == 1  ) await pauser();

  
  return new Promise(resolve => {
  

setTimeout(function()  {

  resolve('')

},speed+80)
   

})

}





function normalize()  {


$(".dragg,.arrayd").css({"background-color" : "rgb(0,0,0,0.842)" , "transition-duration" : "500ms"})

}





        function set(value , elementid )  {

     
     variables[value] = elementid;

     head = variables['head']


     $("#feed").text("ID "+elementid+ " had set to "+value);

  $("#feed").delay('fast').fadeIn(1000 , function()  {

    $("#feed").delay(4000).fadeOut(1000);


  });


         }

     






    function removebyid(getid) {

$("#"+getid).remove();

dragit();


    }






    function dragit ()  {


      var tar = $(".dragg ")

      tar.simulate("drag", {
        dx: 1
    });

   

    }
    



 





  
 

var clicktimes =0 , first="" , second=""



$(document).on("mouseenter","div.nodeleft" , function (e)  {

  $(this).animate({"background-color" : "yellow"})

})

$(document).on("mouseleave","div.nodeleft" , function (e)  {

  $(this).animate({"background-color" : "white"})

})



    $(document).on("mouseenter","div.node, div.treenode" , function (e)  {

      $(this).animate({"background-color" : "red"})

    })



    $(document).on("mouseleave","div.node, div.treenode" , function (e)  {

      $(this).animate({"background-color" : "white"})

    })


    
    $(document).on('mouseenter' ,'div.dragg,div.vert' ,function(e) {


      $("#"+e.target.id).css({ "transition-duration" : "100ms"})

   
    })



    $("#anislow ").on("mouseenter" , function() {

      $("#anislow").css({"left":"250px", "transition-duration" : "300ms"})
  
  
    })
  
    $("#anislow").on("mouseleave" , function() {
  
      $("#anislow").css({"left":"0px", "transition-duration" : "300ms"})
  
  
    })
  
  
    $("#aniquick ").on("mouseenter" , function() {
  
      $("#aniquick").css({"left":"250px", "transition-duration" : "300ms"})
  
  
    })
  
    $("#aniquick").on("mouseleave" , function() {
  
      $("#aniquick").css({"left":"0px", "transition-duration" : "300ms"})
  
  
    })




    $("#anislow").on("click" , function() {

      $("#anislow").css({"background-image" : "linear-gradient(to right , #ff512f , #dd2476)", "transition-duration" : "300ms"})
  
      $("#aniquick").css({"background-image" : "linear-gradient(to right , #000 , #fff)", "transition-duration" : "300ms"})
  
      displaysignal = "slow"
  
    })
  
    $("#aniquick").on("click" , function() {
  
      $("#aniquick").css({"background-image" : "linear-gradient(to right, #ff9966, #ff5e62)", "transition-duration" : "300ms"})
  
      $("#anislow").css({"background-image" : "linear-gradient(to right , #000 , #fff)", "transition-duration" : "300ms"})
  
  displaysignal = "quick"
    })
  

 



function translation(r)  {


$(`#${r}`).css({"transform":"translate(50px,50px)"});


}
  

function open(link)  {


  window.location.replace(link);


}

function waitforme(ms) {

return new Promise( resolve =>  {

setTimeout(()=>{ resolve('')},ms)

})

}




async function executejs(scriptname)  {

  
$.getScript(scriptname)

await display("Script Loaded.")

}


$("#codetype").keypress(async function(e) {

  

if (e.which == 13) {

  command = $("#codetype").val();

  $("#log1").append('<p style="font-size:large;  color:rgb(255,0,0, 0.7);font-family:Segoe UI;">'+command+'</p>')
  logscreen.scrollTop = logscreen.scrollHeight;
  
  await eval(command)

  
  
}

})


/*
addnode(123);
addnode(1);
addnode(45);
addnode(34);

nodify("0list" , "1list")
nodify("1list" , "2list")
nodify("2list" , "3list")
*/



