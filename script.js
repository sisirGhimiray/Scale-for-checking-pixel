const scaleContainer=document.querySelector(".scale-container");
const arrowKey=document.querySelector(".arrow-key-container");
const showPixelDiv=document.querySelector(".showPixel");
const scale=document.querySelector(".scale");
const pixelData=document.querySelector(".pixelData");
const leftBtn=document.querySelector(".left-arrow");
const righttBtn=document.querySelector(".right-arrow");
const upBtn=document.querySelector(".up-arrow");
const downBtn=document.querySelector(".down-arrow");
const movingPixel=document.querySelector("#movingPixel")
const moveByPixelValue=document.querySelector(".moveByPixelValue")
const pixelOk=document.querySelector(".pixel-move-inc-ok");
const onOffBtn=document.querySelector(".on-off-btn");
const scale_container_aux=document.querySelector(".scale-container-aux");
const body=document.querySelector("body");
scaleContainer.style.left=`${0}px`;
scaleContainer.style.top=`${0}px`;


// const addPixelDivToScale=function(){
//   for(let i=1;i<=500;i++){
//     let span=document.createElement("div");
//     span.setAttribute("class","div-markup");
//     span.setAttribute("data-pixel-num",`${i}`)
//     if(i%5==0){
//       span.setAttribute("data-pixel-num",`${i}`)
//       span.classList.add("div-markUp-ten-px");
//     }
//     scale.appendChild(span);
//   }
// }
// document.addEventListener("DOMContentLoaded",function(e){
//   addPixelDivToScale();
// })







const scalePixel=document.querySelectorAll(".div-markup");
for(let i=0;i<scalePixel.length;i++){
  scalePixel[i].addEventListener("mouseenter",function(e){
    pixelData.textContent=Number(scalePixel[i].dataset.pixelNum)*2;
   scalePixel[i].style.transform=`scale(${1},${5})`;
  })
  scalePixel[i].addEventListener("mouseleave",function(){
    scalePixel[i].style.transform=`scale(${1},${1})`;
   document.querySelector(".pixelData").textContent=0  
   
   })

  }





// const moveScaleByMouse=function(y_n){
//    document.addEventListener("click",function(e){
    
//         scaleContainer.style.left=`${e.pageX}px`;
//         scaleContainer.style.top=`${e.pageY}px`;
      
  
//     });
// }
let moveValueInPixel=1;
document.addEventListener("keydown",function(e){
  if(e.key==="Enter"){
    if(movingPixel.value){
      moveValueInPixel=parseInt(movingPixel.value);
      moveByPixelValue.textContent=parseInt(movingPixel.value);
      console.log(moveValueInPixel);
    }
  }
})

document.addEventListener("keydown",function(e){
  if(e.key==="m"){
    onOffBtn.style.backgroundColor="#19ed19c5"
    onOffBtn.textContent="on";
    document.addEventListener("click",function(e){
      scaleContainer.style.left=`${e.pageX}px`;
       scaleContainer.style.top=`${e.pageY}px`;
     
   });
   
  }else if(e.key==="n"){
    console.log("hello world why this not working");
    onOffBtn.style.backgroundColor="red";
    onOffBtn.textContent="off";
    
  }
})
console.log(onOffBtn.textContent);
const moveScaleWithButton=function(){
  document.addEventListener("keydown",function(e){
    if(e.key==="ArrowLeft"){
      scaleContainer.style.left= `${parseInt(scaleContainer.style.left)-moveValueInPixel}px`;
      leftBtn.style.backgroundColor="#d0bfff";
      document.addEventListener("keyup",function(e){
        leftBtn.style.backgroundColor="#32f3f3be"
      })
    }else if(e.key==="ArrowRight"){
      scaleContainer.style.left= `${parseInt(scaleContainer.style.left)+moveValueInPixel}px`;
      righttBtn.style.backgroundColor="#d0bfff";
      document.addEventListener("keyup",function(e){
        righttBtn.style.backgroundColor="#32f3f3be"
     

      })
    }else if(e.key==="ArrowUp"){
      scaleContainer.style.top= `${parseInt(scaleContainer.style.top)-moveValueInPixel}px`;
      upBtn.style.backgroundColor="#d0bfff";
      document.addEventListener("keyup",function(e){
        upBtn.style.backgroundColor="#32f3f3be"
      })
    }else if(e.key==="ArrowDown"){
      scaleContainer.style.top= `${parseInt(scaleContainer.style.top)+moveValueInPixel}px`;
      downBtn.style.backgroundColor="#d0bfff";
      document.addEventListener("keyup",function(e){
        downBtn.style.backgroundColor="#32f3f3be"
      })
      
    }
  })
}


document.addEventListener("keypress",function(e){
if(e.key===" "){
  console.log("hello");
  scaleContainer.style.transform=`rotate(-90deg)`;
  showPixelDiv.style.transform=`rotate(90deg)`;
  // arrowKey.style.transform=`rotate(90deg)`;
}
})
document.addEventListener("keypress",function(e){
  if(e.key==="v"){
    console.log("hello");
    scaleContainer.style.transform=`rotate(0deg)`;
    showPixelDiv.style.transform=`rotate(0deg)`;
  arrowKey.style.transform=`rotate(0deg)`;

  }
  })




moveScaleWithButton();

if(onOffBtn.textContent==="off"){

document.removeEventListener("click",function(e){
  scaleContainer.style.left=`${e.pageX}px`;
  scaleContainer.style.top=`${e.pageY}px`;
})

}
