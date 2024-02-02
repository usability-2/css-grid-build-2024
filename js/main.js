var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('show');
    let expanded = this.getAttribute('aria-expanded')  == 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
});