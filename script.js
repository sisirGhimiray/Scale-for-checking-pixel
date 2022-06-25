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
const pixels=document.querySelectorAll(".div-markup");
const verticalScale=document.querySelector(".vertical-scale");
const move_scale_container=document.querySelector(".move-scale-container");
const horizontalValue=document.querySelector(".horizontal-value");
const verticalValue=document.querySelector(".vertical-value");
for(const p of pixels){
  p.addEventListener("pointerover",function(e){
  p.style.transform=`scaleY(10)`;
  horizontalValue.textContent=p.dataset.pixelNum*2;
  verticalValue.textContent=p.dataset.pixelNum*2;
  
  })
  p.addEventListener("pointerout",function(e){
    p.style.transform=`scaleY(1)`;
    horizontalValue.textContent=0;
    verticalValue.textContent=0;
    })
}


document.addEventListener("click",function(e){
  move_scale_container.style.left=`${e.pageX}px`;
  move_scale_container.style.top=`${e.pageY}px`
  console.log(e.pageY);
})