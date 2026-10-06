const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
const heroTitle=document.querySelector('.hero h1');if(heroTitle)heroTitle.innerHTML='Capacitación tecnológica gratuita<br><span>para abrir nuevas oportunidades.</span>';
const heroIntro=document.querySelector('.hero .intro');if(heroIntro)heroIntro.textContent='Pakova acompaña a personas de Rosario que quieren aprender informática, acercarse al mundo IT y crecer junto a su comunidad.';
const learningEyebrow=document.querySelector('#capacitaciones .eyebrow');if(learningEyebrow)learningEyebrow.textContent='01 / QUÉ HACEMOS';
const learningTitle=document.querySelector('#capacitaciones h2');if(learningTitle)learningTitle.innerHTML='Aprendé tecnología<br>desde tu comunidad.';
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.querySelectorAll('[data-contact]').forEach(link=>{link.href='https://wa.me/5493416206812?text='+encodeURIComponent(link.dataset.contact);link.target='_blank';link.rel='noopener noreferrer';});
const partnerAssets=['logo-NAN.avif','vecinal_san_martin.avif','creciendo.avif','biblioteca_empalme_norte.avif','vecinal_antartida.avif','vecinal_decendiantes_de_victoria.avif'];
document.querySelectorAll('.partners>span').forEach((partner,index)=>{const image=document.createElement('img');image.src='assets/'+partnerAssets[index];image.alt='Logo de '+partner.textContent.trim();image.style.cssText='width:58px;height:48px;object-fit:contain;object-position:left center;display:block;margin-bottom:12px';partner.prepend(image);});
document.querySelectorAll('footer details a').forEach((link,index)=>{const icons=['logo_squash_icon.png','mantis-logo.webp','testlink-logo.webp'];if(!icons[index])return;link.classList.add('tool');link.style.cssText='display:inline-flex;align-items:center;gap:7px;margin-right:15px';const image=document.createElement('img');image.src='assets/'+icons[index];image.alt='';image.style.cssText='width:22px;height:22px;object-fit:contain';link.prepend(image);});
