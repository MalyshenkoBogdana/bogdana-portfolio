const projectData = {
  fashion: [
    ['HERO / Model + Outfit','IMAGE','var(--pink)'],['Architectural Walk','IMAGE','var(--lime)'],['Portrait','IMAGE','var(--coral)'],['Pool','IMAGE','var(--turquoise)'],['Fashion Detail','IMAGE','var(--yellow)'],['Staircase','IMAGE','var(--pink)'],['Staircase / Open Space','IMAGE','var(--lime)'],['Storyboard','IMAGE','var(--turquoise)'],['Video','VIDEO','var(--coral)']
  ],
  jewelry: [
    ['Photo 02','IMAGE','var(--pink)'],['Video','VIDEO','var(--coral)'],['Photo 01','IMAGE','var(--yellow)']
  ],
  fragrance: [
    ['Video 02','VIDEO','var(--moss)'],['Photo 01','IMAGE','var(--pink)'],['Photo 02','IMAGE','var(--yellow)'],['Photo 03','IMAGE','var(--lime)'],['Photo 04','IMAGE','var(--turquoise)'],['Photo 05','IMAGE','var(--coral)'],['Photo 06','IMAGE','var(--pink)'],['Video 01','VIDEO','var(--moss)']
  ]
};
// Add supplied originals here. Values can be a path string or {src, poster}.
// Example: 'fashion|HERO / Model + Outfit': 'assets/fashion/01-hero.jpg'
const mediaManifest = {
  'fashion|HERO / Model + Outfit': 'assets/fashion/01-model-outfit-web.jpg',
  'fashion|Architectural Walk': 'assets/fashion/02-architectural-walk.png',
  'fashion|Portrait': 'assets/fashion/03-portrait.png',
  'fashion|Pool': 'assets/fashion/04-pool.png',
  'fashion|Fashion Detail': 'assets/fashion/05-fashion-detail.png',
  'fashion|Staircase': 'assets/fashion/06-staircase.png',
  'fashion|Staircase / Open Space': 'assets/fashion/07-staircase-open-space.png',
  'fashion|Storyboard': 'assets/fashion/08-storyboard.png',
  'fashion|Video': 'assets/fashion/09-video.mp4',
  'jewelry|Photo 02': 'assets/jewelry/01-leo-photo-02.jpg',
  'jewelry|Video': 'assets/jewelry/02-leo-video.mp4',
  'jewelry|Photo 01': 'assets/jewelry/03-leo-photo-01.jpg',
  'fragrance|Video 02': 'assets/fragrance/01-video-02.mp4',
  'fragrance|Photo 01': 'assets/fragrance/02-photo-01.png',
  'fragrance|Photo 02': 'assets/fragrance/03-photo-02.png',
  'fragrance|Photo 03': 'assets/fragrance/04-photo-03.png',
  'fragrance|Photo 04': 'assets/fragrance/05-photo-04.jpeg',
  'fragrance|Photo 05': 'assets/fragrance/06-photo-05.png',
  'fragrance|Photo 06': 'assets/fragrance/07-photo-06.png',
  'fragrance|Video 01': 'assets/fragrance/08-video-01.mp4',
  'gallery:beauty|PINK LIQUID — CANDY POP BEAUTY': 'assets/explorations/beauty-candy-pop.png',
  'gallery:beauty|CARAMEL BONBONS': 'assets/explorations/beauty-caramel-perfume.mp4',
  'gallery:beauty|DIOR ADDICT LIP GLOW OIL 104 BLACK CHERRY': 'assets/explorations/beauty-dior-lip-glow-oil.png',
  'gallery:fashion|THE WIND DRESS': 'assets/explorations/fashion-wind-dress.mp4',
  'gallery:fashion|THE IMPOSSIBLE BAG — DIOR LADY D-LITE': 'assets/explorations/fashion-dior-bag.jpeg',
  'gallery:fashion|GLITTER MAKEUP': 'assets/explorations/fashion-glitter-makeup.png',
  'gallery:surreal|GIANT STRAWBERRY CAKE': 'assets/explorations/surreal-strawberry-cake.png',
  'gallery:surreal|MANGO PASSION COCKTAIL': 'assets/explorations/surreal-mango-cocktail.png',
  'gallery:surreal|LEMON HOTEL': 'assets/explorations/surreal-lemon-hotel.png',
  'gallery:surreal|BABY DRAGON PIZZA CHEF': 'assets/explorations/surreal-dragon-chef.mp4'
};
const explorationData = [
  {id:'beauty',title:'BEAUTY & PRODUCT',description:{uk:'Б’юті-візуали, предметна зйомка та концепції, що передають відчуття.',en:'Beauty, product imagery and sensory visual concepts.'},layout:'beauty',items:[['PINK LIQUID — CANDY POP BEAUTY','IMAGE'],['CARAMEL BONBONS','VIDEO'],['DIOR ADDICT LIP GLOW OIL 104 BLACK CHERRY','IMAGE']]},
  {id:'fashion',title:'FASHION & OBJECTS',description:{uk:'Візуали, натхненні модою, виразні об’єкти та експериментальна естетика.',en:'Fashion-inspired visuals, statement objects and experimental aesthetics.'},layout:'fashion',items:[['THE WIND DRESS','VIDEO'],['THE IMPOSSIBLE BAG — DIOR LADY D-LITE','IMAGE'],['GLITTER MAKEUP','IMAGE']]},
  {id:'surreal',title:'SURREAL & PLAYFUL',description:{uk:'Уявні світи, сюрреалістичні концепції та несподівані візуальні історії.',en:'Imaginative worlds, surreal concepts and unexpected visual storytelling.'},layout:'surreal',items:[['GIANT STRAWBERRY CAKE','IMAGE'],['MANGO PASSION COCKTAIL','IMAGE'],['LEMON HOTEL','IMAGE'],['BABY DRAGON PIZZA CHEF','VIDEO']]}
];
let currentLanguage='uk';
const langButtons=[...document.querySelectorAll('[data-lang]')];
function setLanguage(lang){
  currentLanguage=lang; document.documentElement.lang=lang;
  langButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  document.querySelectorAll('[data-uk][data-en]').forEach(el=>{el.innerHTML=el.dataset[lang]});
  document.querySelectorAll('.email-placeholder,.footer-email').forEach(el=>{el.textContent=lang==='uk'?'email — додайте адресу ↗':'email — add address ↗';el.setAttribute('aria-label',lang==='uk'?'Email — додайте адресу':'Email — add your address')});
  document.querySelectorAll('.carousel').forEach(el=>{el.setAttribute('aria-label',`${el.dataset.carousel} carousel`)});
  document.querySelectorAll('.carousel-arrow.prev').forEach(el=>el.setAttribute('aria-label',lang==='uk'?'Попередній слайд':'Previous slide'));
  document.querySelectorAll('.carousel-arrow.next').forEach(el=>el.setAttribute('aria-label',lang==='uk'?'Наступний слайд':'Next slide'));
  document.querySelectorAll('.progress').forEach(el=>el.setAttribute('aria-label',lang==='uk'?'Навігація слайдами':'Slide navigation'));
  document.querySelectorAll('.placeholder-hint').forEach(el=>{el.textContent=el.dataset.kind==='VIDEO'?(lang==='uk'?'ВІДЕО · ДОДАЙТЕ ОРИГІНАЛ':'VIDEO · ADD ORIGINAL'):(lang==='uk'?'МЕДІА-СЛОТ · ДОДАЙТЕ ОРИГІНАЛ':'MEDIA SLOT · ADD ORIGINAL')});
  document.querySelectorAll('[data-video-toggle]').forEach(button=>button.setAttribute('aria-label',button.closest('.video-frame').querySelector('video').paused?(lang==='uk'?'Відтворити відео':'Play video'):(lang==='uk'?'Призупинити відео':'Pause video')));
  document.querySelectorAll('.explore-group .group-head p').forEach((el,index)=>{el.textContent=explorationData[index].description[lang]});
  document.querySelectorAll('.slide-label').forEach(el=>{el.textContent=el.closest('.project').querySelector('.slide.is-active')?.dataset.label||''});
}
langButtons.forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
const lightbox=document.createElement('dialog');lightbox.className='media-lightbox';lightbox.setAttribute('aria-label','Image preview');
const lightboxClose=document.createElement('button');lightboxClose.type='button';lightboxClose.className='lightbox-close';lightboxClose.setAttribute('aria-label','Close image preview');lightboxClose.textContent='×';
const lightboxImage=document.createElement('img');lightboxImage.className='lightbox-image';lightbox.append(lightboxClose,lightboxImage);document.body.append(lightbox);
let lightboxTrigger=null;
function openImage(image){lightboxTrigger=image;lightboxImage.src=image.currentSrc||image.src;lightboxImage.alt=image.alt;lightbox.showModal()}
lightboxClose.addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
lightbox.addEventListener('close',()=>{lightboxImage.removeAttribute('src');lightboxTrigger?.focus();lightboxTrigger=null});
function makePlaceholder(title,kind,bg){
  const box=document.createElement('div');box.className='asset-placeholder';box.style.setProperty('--slot',bg);
  const copy=document.createElement('div');copy.className='placeholder-copy';
  const mark=document.createElement('span');mark.className='video-mark';mark.setAttribute('aria-hidden','true');mark.textContent='▶';
  const hint=document.createElement('span');hint.className='placeholder-hint';hint.dataset.kind=kind;hint.textContent=kind==='VIDEO'?'ВІДЕО · ДОДАЙТЕ ОРИГІНАЛ':'МЕДІА-СЛОТ · ДОДАЙТЕ ОРИГІНАЛ';
  if(kind==='VIDEO')copy.append(mark);copy.append(hint);box.append(copy);return box;
}
function makeMedia(title,kind,bg,key){
  const entry=mediaManifest[key];if(!entry)return makePlaceholder(title,kind,bg);
  const source=typeof entry==='string'?entry:entry.src;
  if(!source)return makePlaceholder(title,kind,bg);
  if(kind==='VIDEO'){
    const frame=document.createElement('div');frame.className='video-frame';
    const video=document.createElement('video');video.className='portfolio-video';video.controls=false;video.preload='metadata';video.playsInline=true;video.setAttribute('aria-label',title);if(typeof entry==='object'&&entry.poster)video.poster=entry.poster;
    const sourceEl=document.createElement('source');sourceEl.src=source;video.append(sourceEl);
    const toggle=document.createElement('button');toggle.type='button';toggle.className='video-toggle';toggle.dataset.videoToggle='';toggle.setAttribute('aria-label',currentLanguage==='uk'?'Відтворити відео':'Play video');
    toggle.innerHTML='<svg class="icon-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5z"/></svg><svg class="icon-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 5.5h3v13h-3zm6 0h3v13h-3z"/></svg>';
    const updateToggle=()=>{frame.classList.toggle('is-playing',!video.paused);toggle.setAttribute('aria-label',video.paused?(currentLanguage==='uk'?'Відтворити відео':'Play video'):(currentLanguage==='uk'?'Призупинити відео':'Pause video'))};
    video.addEventListener('loadedmetadata',()=>{if(video.paused)video.currentTime=Math.max(video.duration-.06,0)});
    video.addEventListener('play',()=>{document.querySelectorAll('.portfolio-video').forEach(other=>{if(other!==video)other.pause()});updateToggle()});
    video.addEventListener('pause',updateToggle);
    video.addEventListener('ended',()=>{video.currentTime=Math.max(video.duration-.06,0);updateToggle()});
    toggle.addEventListener('click',()=>{if(video.paused){if(video.currentTime>=video.duration-.2)video.currentTime=0;video.play().catch(()=>updateToggle())}else video.pause()});
    frame.append(video,toggle);return frame;
  }
  const image=document.createElement('img');image.className='portfolio-image';image.src=source;image.alt=title;image.loading=key==='fashion|HERO / Model + Outfit'?'eager':'lazy';image.fetchPriority=key==='fashion|HERO / Model + Outfit'?'high':'auto';image.decoding='async';image.tabIndex=0;image.setAttribute('role','button');image.setAttribute('aria-label',`${title} — open full-size image`);image.addEventListener('click',()=>openImage(image));image.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openImage(image)}});return image;
}
const carousels=[];
document.querySelectorAll('.project').forEach(project=>{
  const id=project.dataset.project, carousel=project.querySelector('.carousel'),track=project.querySelector('.carousel-track'),progress=project.querySelector('.progress');
  const slides=projectData[id];let active=0;const slideElements=[];
  slides.forEach(([label,kind,bg],index)=>{
    const slide=document.createElement('div');slide.className='slide';slide.dataset.label=label;slide.setAttribute('role','group');slide.setAttribute('aria-roledescription','slide');slide.setAttribute('aria-label',`${index+1} of ${slides.length}: ${label}`);const media=makeMedia(label,kind,bg,`${id}|${label}`);slide.append(media);track.append(slide);if((id==='fashion'||id==='jewelry')&&media instanceof HTMLImageElement){const setRatio=()=>{if(media.naturalWidth&&media.naturalHeight)slide.style.aspectRatio=`${media.naturalWidth} / ${media.naturalHeight}`};if(media.complete)setRatio();else media.addEventListener('load',setRatio,{once:true})}slideElements.push(slide);
    const dot=document.createElement('button');dot.type='button';dot.setAttribute('aria-label',`Go to slide ${index+1}: ${label}`);dot.innerHTML='<span></span>';dot.addEventListener('click',()=>show(index));progress.append(dot);
  });
  const dots=[...progress.querySelectorAll('button')];
  function show(index){active=(index+slides.length)%slides.length;slideElements.forEach((el,i)=>{let d=(i-active+slides.length)%slides.length;if(d>slides.length/2)d-=slides.length;const wrapped=Math.abs(d)>1;el.classList.toggle('is-active',i===active);el.dataset.offset=wrapped?'far':String(d);el.setAttribute('aria-hidden',String(wrapped));if(i!==active)el.querySelector('video')?.pause()});dots.forEach((dot,i)=>{if(i===active)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current')});}
  project.querySelector('.prev').addEventListener('click',()=>show(active-1));project.querySelector('.next').addEventListener('click',()=>show(active+1));
  carousel.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();show(active-1)}if(event.key==='ArrowRight'){event.preventDefault();show(active+1)}});
  let startX=0,startY=0;carousel.addEventListener('pointerdown',event=>{if(event.target.closest('button'))return;startX=event.clientX;startY=event.clientY});carousel.addEventListener('pointerup',event=>{if(!startX)return;const dx=event.clientX-startX,dy=event.clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3)show(active+(dx<0?1:-1));startX=0;startY=0});
  show(0);carousels.push({show});
});
const gallery=document.querySelector('#exploration-groups');
explorationData.forEach((group,index)=>{
  const section=document.createElement('section');section.className='explore-group';section.setAttribute('aria-labelledby',`group-${group.id}`);
  const head=document.createElement('header');head.className='group-head';const h=document.createElement('h3');h.id=`group-${group.id}`;h.textContent=group.title;const desc=document.createElement('p');desc.textContent=group.description.uk;head.append(h,desc);
  const grid=document.createElement('div');grid.className='work-grid';grid.dataset.layout=group.layout;
  group.items.forEach(([title,kind],itemIndex)=>{const item=document.createElement('div');item.className=`work-item${kind==='VIDEO'?' video-work':''}`;const palette=['var(--yellow)','var(--pink)','var(--turquoise)','var(--coral)'];item.append(makeMedia(title,kind,palette[itemIndex%palette.length],`gallery:${group.id}|${title}`));grid.append(item)});
  section.append(head,grid);gallery.append(section);
});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets=document.querySelectorAll('.project,.explore-group');
if('IntersectionObserver' in window&&!reduceMotion){
  revealTargets.forEach(el=>el.classList.add('scroll-reveal'));
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');revealObserver.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -5% 0px'});
  revealTargets.forEach(el=>revealObserver.observe(el));
}
setLanguage('en');
