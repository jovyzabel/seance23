const secondContainer = document.querySelector('.second-container');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
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
/** toggling the text and the background of the body */
function toggleTextAndBackground() {
  body.classList.toggle("fill") == true ? h2.innerHTML = 'Ging' : h2.innerHTML = 'Gong'
}
function upgradeSize() {
  h2.style.fontSize = '2.4em';
  h2.style.textTransform = 'uppercase';
  h2.style.textDecoration = 'overline';
  
}
function downgradeSize() {
  h2.style.fontSize = '2em';
  h2.style.color = 'rgb(219, 65, 4)';
  h2.style.textTransform = 'none';
  h2.style.transform = "rotateX(180deg)"
  
}
function leaveText() {
  h2.style.fontSize = '1.4rem';
  h2.style.color = 'royalblue';
  h2.style.textTransform = 'none';
  h2.style.textDecoration = 'none';
  h2.style.transform = "rotateX(360deg)"
}



window.addEventListener('click', toggleTextAndBackground)
h2.addEventListener('dblclick', upgradeSize)
h2.addEventListener('mouseover', downgradeSize)
h2.addEventListener('mouseleave', leaveText)
/**
 * Manging colors with a variable function
 */

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
footer.addEventListener('DOMContentLoaded', 
  changeDesign(),
  box.animate(spinBox, timing),
) ;


/**
 * Global timer 
 */

setInterval(()=>{
  const t= new Date();
  hour.textContent = `${t.getHours()}`;
  min.textContent = `${t.getMinutes()}`;
  sec.textContent = `${t.getSeconds()}`;
  
}, 1000);