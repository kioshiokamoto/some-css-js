const container = document.getElementById('container');

const circlesArr = [];

const rows = 15;
const cols = 15;

for (let i = 0; i < rows; i++) {
    circlesArr[i] = [];
    for (let j = 0; j < cols; j++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        container.appendChild(circle);
        circlesArr[i].push(circle);
    }
}

circlesArr.forEach((cols, i) => {
    cols.forEach((circle, j) => {
        circle.addEventListener('click', () => {
            growCircle(i, j);
        })
    })
})

function growCircle(i, j) {
    if (circlesArr[i] && circlesArr[i][j]) {
        if (!circlesArr[i][j].classList.contains('grow')) {
            circlesArr[i][j].classList.add('grow');
            setTimeout(() => {
                
                growCircle(i - 1, j);
                growCircle(i + 1, j);
                growCircle(i, j - 1);
                growCircle(i, j + 1);
            }, 100);
            setTimeout(() => {
                circlesArr[i][j].classList.remove('grow');
            }, 300);
        }
    }

}