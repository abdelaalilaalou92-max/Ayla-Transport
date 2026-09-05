const langBtn=document.getElementById("lang");
let french=false;
function setLanguage(){
  document.documentElement.lang=french?"fr":"ar";
  document.documentElement.dir=french?"ltr":"rtl";
  document.querySelectorAll("[data-ar]").forEach(el=>{
    el.innerHTML=french?el.dataset.fr:el.dataset.ar;
  });
  langBtn.textContent=french?"AR":"FR";
}
langBtn.addEventListener("click",()=>{french=!french;setLanguage()});
document.getElementById("year").textContent=new Date().getFullYear();
setLanguage();