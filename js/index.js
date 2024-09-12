const boxMouse = document.querySelector('.box');
const secondBox = document.querySelector('.secondBox');
const container = document.querySelector('.container');
const secondContainer = document.querySelector('.second-container');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const spinBox = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const timing = {
  duration: 1000,
  iterations: Infinity,
}

console.log(boxMouse);

boxMouse.addEventListener('mouseover', (e)=>{
  boxMouse.style.backgroundColor = '#023e8a';
  boxMouse.style.boxShadow = '4px 3px 7px orange';
  boxMouse.style.borderRadius = '100px';
})

boxMouse.addEventListener('mouseleave', (e)=>{
  boxMouse.style.backgroundColor = 'orange';
  boxMouse.style.boxShadow = 'none';
  boxMouse.style.borderRadius = '8px';
})

boxMouse.addEventListener('click', (e)=>{
  boxMouse.style.position = 'absolute';
  boxMouse.style.top = '185px';
  secondBox.style.display = 'block';
  secondBox.animate([
     { transform: "translateY(0px)" },
    { transform: "translateX(330px)" },
  ],
  {
    duration: 1000,
    iterations: Infinity,
  })
})

boxMouse.addEventListener('dblclick', (e)=>{
  boxMouse.animate(spinBox, timing)
})

// container.addEventListener('click', (e)=>{
//     secondBox.style.display = 'none';
//   })
let intervalId;

const changeDesign = function(){
  if (!intervalId) {
    setInterval( manageColor, 1000)
  }
}
let position = [0, 170,-170, 0, -170, 170];
let positionY = [0, 130, -130, 0, 130, -130];
let opacities = ['.6','.7','.8'];
let colors = ['linear-gradient(180deg, rgb(255, 187, 0), rgb(219, 65, 4))',
  'linear-gradient(90deg, rgb(219, 65, 4),rgb(255, 187, 0))',
  'linear-gradient(270deg, rgb(255, 187, 0), rgb(219, 65, 4))',
  'linear-gradient(360deg, rgb(219, 65, 4),rgb(255, 187, 0))',
  'linear-gradient(60deg,rgb(255, 187, 0), rgb(219, 65, 4))',
  'linear-gradient(0deg, rgb(219, 65, 4),rgb(255, 187, 0))'];
let i = 0;
let j = 0;
let k = 0;
const manageColor = ()=>{
  secondContainer.innerHTML = '<div class="circle"></div>';
  const circle = document.querySelector('.circle')
  circle.style.transform = `translateX(${position[i]}px) translateY(${positionY[i]}px)`;
  i= (i+1)%position.length;
  
  // circle.style.transform = `translateY(${position[i]}px)`;
  circle.style.opacity = `${opacities[k]}`; 
  // i= (i+1)%opacities.length;
  secondContainer.style.background = `${colors[i]}`; 
  j= (j+1)%colors.length;
  // console.log(circle);
}

secondContainer.addEventListener('DOMContentLoaded', changeDesign()) ;
// console.log(t.toLocaleTimeString());


// console.log(`${t.getMinutes()} : ${t.getSeconds()}`);

setInterval(()=> {
  const t= new Date();
  hour.textContent = `${t.getHours()}`;
  min.textContent = `${t.getMinutes()}`;
  sec.textContent = `${t.getSeconds()}`;
  
}, 1000);
