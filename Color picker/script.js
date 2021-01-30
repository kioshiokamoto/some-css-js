const colorPicker = document.getElementById('color-picker');
colorPicker.value='#06020f';

colorPicker.addEventListener('input',()=>{
    const colorSelected = colorPicker.value;

    document.body.style.background = colorSelected;
})