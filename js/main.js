const secondContainer = document.querySelector('.second-container');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const body = document.querySelector('body');
const h2 = document.querySelector('h2');

const box = document.querySelector('.box');

const spinBox = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
const timing = {
  duration: 1000,
  iterations: Infinity,
}

let intervalId;
let i = 0;
let j = 0;
let k = 0;

let position = [0, 170,-170, 0, -170, 170];
let positionY = [0, 130, -130, 0, 130, -130];
let opacities = ['.6','.7','.8'];
let colors = [
  'linear-gradient(180deg, rgb(255, 187, 0), rgb(219, 65, 4))',
  'linear-gradient(90deg, rgb(219, 65, 4),rgb(255, 187, 0))',
  'linear-gradient(270deg, rgb(255, 187, 0), rgb(219, 65, 4))',
  'linear-gradient(360deg, rgb(219, 65, 4),rgb(255, 187, 0))',
  'linear-gradient(60deg,rgb(255, 187, 0), rgb(219, 65, 4))',
  'linear-gradient(0deg, rgb(219, 65, 4),rgb(255, 187, 0))'
];


const changeDesign = function(){
  if (!intervalId) {
    setInterval( manageColor, 1000)
  }
}
const coloredBlue = ()=>{
  body.classList.toggle("fill");
}
const unColoredBlue = ()=>{
  box.style.background ='transparent';
}
window.addEventListener('click', ()=>{
  body.classList.toggle("fill") == true ? h2.innerHTML = 'Ging' : h2.innerHTML = 'Gong'
});



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
/**
 * Connexion of the changeDesign function to The DOMContentLoaded event
 */
window.addEventListener('DOMContentLoaded', 
  changeDesign(),
  box.animate(spinBox, timing),
) ;


/**
 * function to get the time
 * 
*/
// const timer = ()=>{
//   const t= new Date();
//   hour.textContent = `${t.getHours()}`;
//   min.textContent = `${t.getMinutes()}`;
//   sec.textContent = `${t.getSeconds()}`;
  
// }
// setInterval(timer(),1000)

setInterval(()=>{
  const t= new Date();
  hour.textContent = `${t.getHours()}`;
  min.textContent = `${t.getMinutes()}`;
  sec.textContent = `${t.getSeconds()}`;
  
}, 1000);


  
