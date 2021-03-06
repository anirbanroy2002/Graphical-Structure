
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

var ii=0 , data;


data = {"0":{"top":138,"left":643},"1":{"top":247,"left":326},"2":{"top":247,"left":992},"3":{"top":406,"left":166},"4":{"top":406,"left":484.8125},"5":{"top":406,"left":815.8250122070312},"6":{"top":406,"left":1124},"7":{"top":538,"left":87},"8":{"top":538,"left":245.83750915527344},"9":{"top":541,"left":399},"10":{"top":538,"left":573},"11":{"top":538,"left":744.1124877929688},"12":{"top":538,"left":900.4125366210938},"13":{"top":538,"left":1052},"14":{"top":538,"left":1192},"15":{"top":703,"left":24},"16":{"top":805,"left":139},"17":{"top":682,"left":200},"18":{"top":804,"left":291},"19":{"top":675,"left":359},"20":{"top":808,"left":447},"21":{"top":666,"left":527},"22":{"top":803,"left":612},"23":{"top":665,"left":696},"24":{"top":799,"left":795},"25":{"top":663,"left":860},"26":{"top":792,"left":950},"27":{"top":664,"left":1009},"28":{"top":784,"left":1090},"29":{"top":666,"left":1149},"30":{"top":781,"left":1240}}




  function arraynodes() 
  { 
  
      if ( ii == length ) {
          counttreenodes = length;
          count =length;
          return;
      
    
       }
  
      var newnode = '<div id="'+ii+'"  class="dragg" > <div class="treenode" id="'+ ii+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ ii+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ ii+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ ii+"bottom" +'">'+ii +'</p>    <p  id="'+ ii+"treeval" +'" class="t">'+storedarray[ii]+'</p>   </div>';
  
      $("body").prepend(newnode)
        $("#"+ii).draggable();
      
  
        tree[ii+"treeleft"] = "null"
        tree[ii+"treeright"] = "null"
    ii = ii + 1
        rootoftree = newnode
        arraynodes()
  
  } 
  
  
  
  function build() 
  { 
  
     
  
      for (var  i =0 ;  i < counttreenodes ; i++)  {
  
  
  if ( (2*(i))+1 >= counttreenodes ) {
      break;
  }
  
  else {
  
      var leftc = (2*(i))+1;
  
      treefy(i+"treeleft" , leftc)
  
  }
  
  if ( (2*(i))+2 >= counttreenodes ) {
      break;
  }
  
  else {
  
      var rightc = (2*(i))+2;
  
      treefy(i+"treeright" , rightc)
  
  }
  
  
  
      }
  
  
  
  
  }  
  
  function buildheap()  {
  
      arraynodes();
  
      build();
  
  }
  
  
  async function gottopoint (i,j)   {
  
    if (stats == 1  ) await pauser();
  
      return new Promise(resolve => {
  
  
      var element1 = $("#"+i);
      var top1 = element1.position().top;
      var left1 = element1.position().left;
  
  
      var  element2 = $("#"+j);
      var top2 = element2.position().top;
      var left2 = element2.position().left;
  
      var  element1text = $("#"+i+"treeval").text();
      var  element2text = $("#"+j+"treeval").text();
  
      element1.css({ "top": (top2)+"px", "left": (left2)+"px" ,"transition" : speed+"ms linear" },3500, function() {
  
  
      })
  
      element2.css({ "top": (top1)+"px", "left": (left1)+"px","transition" :speed+"ms linear" } , 3500, function() {
  
  
      })
     
  
      setTimeout(function() {
  
        element1.css({"position" : "absolute" , "top": (top1)+"px", "left": (left1)+"px" ,"transition-duration" :"0ms"})
  
         element2.css({"position" : "absolute" , "top": (top2)+"px", "left": (left2)+"px" ,"transition-duration" :"0ms"})
  
         $("#"+j+"treeval").text(element1text)
         $("#"+i+"treeval").text(element2text);
  
         resolve('resolved')
  
      },speed+80)
  
  
  
  
  
      })
  
  
  
  
  }
  
  
    
  
  
  
  
  
  
  // Heapsort
  
  
  async function heapify( len,  ind) 
  { 
      ind = Math.floor(ind)
      var largest = ind; // Initialize largest as root 
      var l = 2*ind + 1; // left = 2*i + 1 
      var r = 2*ind + 2; // right = 2*i + 2 
    
      
      // If left child is larger than root 
      if (l < len && storedarray[l] > storedarray[largest]) 
          largest = l; 
    
      // If right child is larger than largest so far 
      if (r < len && storedarray[r] > storedarray[largest]) 
          largest = r; 
    
      // If largest is not root 
      if (largest != ind) 
      { 
           hilight(ind , "red" , "1s" ,1100)
        //  swap(st[ind], st[largest]); 
        await hilight(largest , "red" , "1s" ,1100)
          var te = storedarray[ind];
          storedarray[ind] = storedarray[largest];
          storedarray[largest] = te;
  
       await   gottopoint(ind ,largest)

       await swapp(ind,largest)

        hilight(ind , defaultcolor , "1s" ,1100)
       await hilight(largest , defaultcolor , "1s" ,1100)
    
          // Recursively heapify the affected sub-tree 
      await    heapify(len, largest); 
      } 
  } 
    
  // main function to do heap sort 
  async function HeapSort() 
  { 
     await arraynodes()
      await doalign("2000ms",0)
      await waitforme(2000);
     await build()
      // Build heap (rearrange array) 
      await display('Building Heap')
      for (var ind = length / 2 - 1; ind >= 0; ind--) 
      await   heapify(length, ind); 
    
      await display('Heap Built')
      // One by one extract an element from heap 
      for (var ind=length-1; ind>0; ind--) 
      { 
          // Move current root to end 
       //   swap(st[0], st[ind]); 
  
          var te = storedarray[0];
          storedarray[0] = storedarray[ind];
          storedarray[ind] = te;
          await display('Swap last element with root node')
          await  gottopoint(0 ,ind)
          await swapp(0,ind)
          await turnred(ind)
          await hilight(ind, "purple" ,"1s" ,1100)
    
          // call max heapify on the reduced heap 
          await display('Building Heap')
          await   heapify( ind, 0); 
      } 
  } 
  
  
  
  var t , l
  var el_pos = { }
  
  var posar = {}
  

  function alignanimate(d , duration_ , timeout_)  {
  
  
      var tt = data[d]["top"];
      var ll = data[d]["left"];
  
  var ff = $("#"+d)
  
      ff.css({"transition-duration" : "2000ms" , "left" :"0px" ,"top" :"0px"})
  
      ff.offset({top:tt , left :ll})
      
  
  
  return new Promise (resolve => {
  
    
      
      setTimeout(function() {
        
  resolve('resolved')
      },timeout_)
  
  
  
  
  })
  
  }
  
  
   async function doalign(duration_="3000ms" , timeout_=200)  {
  
    
  for ( var d=0 ; d < counttreenodes ; d++ ) {
  
     
  
    await   alignanimate(d , duration_ , timeout_);
  }
  
  
  
  
  
  }
