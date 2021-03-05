const toggle = document.querySelector('.toggle');

toggle.removeAttribute('hidden');
toggle.querySelector('input').addEventListener('change', evt => {
    if (evt.target.checked) {
      document.body.classList.add('dark');
      return;
    }
  
    document.body.classList.remove('dark');
  });