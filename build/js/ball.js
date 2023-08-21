const container = document.getElementById('oferta-section');
const textContent = document.getElementById('oferta-text');
const ofertaCards = document.querySelectorAll('.oferta-card');

const ball = document.createElement('div');
ball.classList.add("pointer-events-none","ball","absolute","w-6","h-6","rounded-full","border","border-black","animate-ball-enter","duration-[100]");

container.addEventListener('mouseenter',(e)=>{
    container.appendChild(ball);
});

container.addEventListener('mouseleave',(e)=>{
    container.removeChild(ball);
});

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const easing = 0.15;

const updateCirclePosition = () => {
  const deltaX = targetX - currentX;
  const deltaY = targetY - currentY;
  currentX += deltaX * easing;
  currentY += deltaY * easing;
  
  ball.style.left = `${currentX}px`;
  ball.style.top = `${currentY}px`;

  requestAnimationFrame(updateCirclePosition);
}

const setTargetPosition = (e) => {
    targetX = e.pageX - e.currentTarget.offsetLeft;
    targetY = e.pageY - e.currentTarget.offsetTop;
}

container.addEventListener('mousemove', setTargetPosition);

textContent.addEventListener('mouseenter',(e)=>{
    ball.classList.add('animate-ball-expand');
});

textContent.addEventListener('mouseleave',(e)=>{
    ball.classList.remove('animate-ball-expand');
});

ofertaCards.forEach(card => {
    card.addEventListener('mouseenter',(e)=>{
        container.removeEventListener('mousemove',setTargetPosition);
        const iconRect = e.target.querySelector('.oferta-card-icon').getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        ball.classList.add('animate-ball-expand');

        targetX = iconRect.left + 8 - containerRect.left;
        targetY = iconRect.top + 8 - containerRect.top;
    });
    card.addEventListener('mouseleave',(e)=>{
        ball.classList.remove('animate-ball-expand');
        container.addEventListener('mousemove',setTargetPosition);
    });
})

updateCirclePosition();