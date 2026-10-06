const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.querySelectorAll('[data-contact]').forEach(link=>{link.href='https://wa.me/5493416206812?text='+encodeURIComponent(link.dataset.contact);link.target='_blank';link.rel='noopener noreferrer';});
