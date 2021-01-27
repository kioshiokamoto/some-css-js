

const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value);

    if(e.key === 'Enter'){
        e.target.value='';

        randomSelect();
    }
})

function createTags(input){
    const tags = input.split(',')
                    .filter(tag => tag.trim() !=='')
                    .map(tag => tag.trim());

    tagsEl.innerHTML = ''; //Limpia contenedor

    tags.forEach(tag =>{
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })

}
function randomSelect(){
    const times = 30;
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 200);

    },200);
    

    setTimeout(() => {
        clearInterval(interval);
        
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
        setTimeout(() => {
            highlightTag(randomTag); // Ganador
        }, 200);

    }, times*100);
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag){
    tag.classList.add('highlight');
}
function unhighlightTag(tag){
    tag.classList.remove('highlight');
}