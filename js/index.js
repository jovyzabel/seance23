const boxMouse = document.querySelector('.box');
const secondBox = document.querySelector('.secondBox');
const container = document.querySelector('.container');

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
  boxMouse.style.top = '125px';
  boxMouse.style.left = '185px';
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
