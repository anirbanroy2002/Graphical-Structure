
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
var arrayflag = 0;
async function HEAPIFY2( n,  i) 
{ 
    
    let parent = Math.floor( (i - 1) / 2); 
  
    if (storedarray[parent] > 0) { 
        // For Max-Heap 
        // If current node is greater than its parent 
        // Swap both of them and call heapify again 
        // for the parent 
        if (storedarray[i] > storedarray[parent]) { 
         //   swap(arr[i], arr[parent]);
            let tt = storedarray[i]
            storedarray[i] = storedarray[parent];
            storedarray[parent] = tt;
            
            hilight(i , "red" ,"1s" ,1100)
            //  swap(st[ind], st[largest]); 
            await hilight(parent , "red" ,"1s" ,1100)            


            await gottopoint(i ,parent)

             await swapp(parent, i)

         await   waitforme(500);

       hilight(i , defaultcolor ,"1s" ,1100)
       await hilight(parent , defaultcolor ,"1s" ,1100)

            // Recursively heapify the parent node 
            await HEAPIFY2( n, parent); 

        } 


    } 

    
} 

/*

async function heapify1( len,  ind) 
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

       await   waitforme(500);
       
        hilight(ind , defaultcolor , "1s" ,1100)
       await hilight(largest , defaultcolor , "1s" ,1100)
    
          // Recursively heapify the affected sub-tree 
      await    heapify1(len, largest); 
      } 
  } 

*/
async function insertheap(value)   {

leaf(value);
storedarray[count-1] = value;

await doalign();

if (arrayflag == 0)  {

    let h = []
    for (let c = 0 ;c <31 ; c++) h[c] = 0

    array(h);

    arrayflag =1 ;
}
await insert(value , count-1)


if (count != 0)  {

    let parent = Math.floor((count - 1) / 2); 

    if (count % 2 == 1  )  {

        treefy(`${parent}treeleft` , count )
    }

    if (count % 2 == 0  )  {

        treefy(`${parent}treeright` , count )
    }

    
}


await waitforme(1500);
mySVG.redrawLines();
await waitforme(500);
await HEAPIFY2(count, count-1)

}



async function deleteheap() 
{ 
    let result = storedarray[0];
    // Get the last element 
    let lastElement = storedarray[count-1]; 
  
    // Replace root with first element 
    storedarray[0] = lastElement; 

   
     hilight((count-1) , "red" ,"1s" ,1100)  
     await hilight(0 , "red" ,"1s" ,1100) 
     
     await   gottopoint((count-1) ,0)
     await swapp(0,count-1)

     await   waitforme(500);

     hilight((count-1) , defaultcolor ,"1s" ,1100)  
     await hilight(0 , defaultcolor ,"1s" ,1100) 

     $("#"+(count-1)).remove();

     mySVG.redrawLines();
  
 
     count = count - 1; 
  
    // heapify the root node 
  await  heapify(count, 0); 

  return result;

} 


async function createheap(elements)  {
    arrayflag = 1;
    array(elements);
    arraynodes()
    await doalign("2000ms",0)
    await waitforme(2000);
    build()
    // Build heap (rearrange array) 
    await display('Building Heap')
    for (var ind = length / 2 - 1; ind >= 0; ind--) 
    await   heapify(length, ind); 


}