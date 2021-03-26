const circles = document.querySelectorAll('.circle');
const style = document.createElement('style');
let styleInner = ``;
circles.forEach( (circle,idx) =>{
    circle.style.borderWidth = (idx+1) * 10 + 'px';
    circle.style.zIndex = -idx;
    circle.style.animationName = `rotate-${idx}`;

    const deg = (idx+1)*360;
    const style = document.createElement('style');

    styleInner += `
        @keyframes rotate-${idx}{
            to{
                transform: translate(-50%, -50%) rotate(${deg}deg);
            }
        }
    `;
})
style.innerHTML =styleInner;
document.body.appendChild(style);

