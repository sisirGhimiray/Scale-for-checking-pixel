// const scaleContainer=document.querySelector(".scale-container");
// const arrowKey=document.querySelector(".arrow-key-container");
// const showPixelDiv=document.querySelector(".showPixel");
// const scale=document.querySelector(".scale");
// const pixelData=document.querySelector(".pixelData");
// const leftBtn=document.querySelector(".left-arrow");
// const righttBtn=document.querySelector(".right-arrow");
// const upBtn=document.querySelector(".up-arrow");
// const downBtn=document.querySelector(".down-arrow");
// const movingPixel=document.querySelector("#movingPixel")
// const moveByPixelValue=document.querySelector(".moveByPixelValue")
// const pixelOk=document.querySelector(".pixel-move-inc-ok");
// const onOffBtn=document.querySelector(".on-off-btn");
// const scale_container_aux=document.querySelector(".scale-container-aux");
// const body=document.querySelector("body");
// const pixels=document.querySelectorAll(".div-markup");
// const verticalScale=document.querySelector(".vertical-scale");
// const move_scale_container=document.querySelector(".move-scale-container");
// const horizontalValue=document.querySelector(".horizontal-value");
// const verticalValue=document.querySelector(".vertical-value");
// for(const p of pixels){
//   p.addEventListener("pointerover",function(e){
//   p.style.transform=`scaleY(10)`;
//   horizontalValue.textContent=p.dataset.pixelNum*2;
//   verticalValue.textContent=p.dataset.pixelNum*2;
  
//   })
//   p.addEventListener("pointerout",function(e){
//     p.style.transform=`scaleY(1)`;
//     horizontalValue.textContent=0;
//     verticalValue.textContent=0;
//     })
// }


// document.addEventListener("click",function(e){
//   move_scale_container.style.left=`${e.pageX}px`;
//   move_scale_container.style.top=`${e.pageY}px`
//   console.log(e.pageY);
// })

let scaleTwo=document.querySelector(".scale--2");
let rotation_scale=document.querySelector(".rotation-scale");
let pixels2=document.querySelectorAll(".scale2--pixel");
const changeScale_hr_vr=function(){
  scaleTwo.addEventListener("click",function(e){
    scaleTwo.classList.toggle("transform-h-w");
    if(scaleTwo.classList.contains("transform-h-w")){
      for(let p of scaleTwo.querySelector(".rotation-scale").querySelectorAll(".scale2--pixel") ){
        p.style.width=`${50}px`;
        p.style.height=`${1}px`;
        document.querySelector(".pixel-value").closest("div").setAttribute("class","pixle-value-closest-div");
      }
      rotation_scale.style.flexDirection="column";
    }else{
      for(let p of scaleTwo.querySelector(".rotation-scale").querySelectorAll(".scale2--pixel") ){
        p.style.width=`${1}px`;
        p.style.height=`${50}px`;
      }
      rotation_scale.style.flexDirection="row";
      document.querySelector(".pixel-value").closest("div").classList.remove("class","pixle-value-closest-div");
    }

    

  })
 

}

const scalePixels=function(){
 for(const p of pixels2){
    p.addEventListener("mouseover",function(e){
      p.style.transform=`scaleY(5)`;
      p.style.zIndex="9999";
      document.querySelector(".pixel-value").textContent=p.dataset.pix*2;
      if(scaleTwo.classList.contains("transform-h-w")){
        p.style.transform=`scaleX(5)`;
      }
      })
      p.addEventListener("mouseout",function(){
        p.style.transform=`scale(1)`;
      document.querySelector(".pixel-value").textContent=0;

      })
      
  }
}

const moveScale=function(){

document.addEventListener("click",function(e){
  scaleTwo.style.left=`${e.pageX}px`;
  scaleTwo.style.top=`${e.pageY}px`;
})


}

const moveScaleByArrow=function(){
  let totalStyleOfScale=getComputedStyle(scaleTwo);
  document.addEventListener("keydown",function(e){
    console.log(e.key);
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp":
        scaleTwo.style.top=`${parseInt(totalStyleOfScale.top)-1}px`;
        break;
      case "ArrowDown":
        scaleTwo.style.top=`${parseInt(totalStyleOfScale.top)+1}px`;
      break;
      case "ArrowLeft":
        scaleTwo.style.left=`${parseInt(totalStyleOfScale.left)-1}px`;
      break;

      case "ArrowRight":
        scaleTwo.style.left=`${parseInt(totalStyleOfScale.left)+1}px`;
        break;
    
      default:
        break;
    }



  })

}


moveScale();
scalePixels();
changeScale_hr_vr();
moveScaleByArrow();




