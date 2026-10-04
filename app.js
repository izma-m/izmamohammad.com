(function(){var m=document.getElementById('m'),n=document.getElementById('nv');
m.onclick=function(){var o=n.classList.toggle('o');m.setAttribute('aria-expanded',o);m.textContent=o?'Close':'Menu'};
n.onclick=function(e){if(e.target.tagName=='A')n.classList.remove('o')};
var r=document.querySelectorAll('.rv');
if(!('IntersectionObserver' in window)){r.forEach(function(e){e.classList.add('on')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.15});
r.forEach(function(e){io.observe(e)})})();
