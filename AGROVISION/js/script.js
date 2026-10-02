const PRODUCTOS=[
{n:"Fertilizante NPK 15-15-15",c:"Fertilizantes",d:"Nutrición balanceada para banano, maíz y arroz en todas sus etapas.",f:["Saco de 50 kg","Gránulo uniforme","Liberación gradual"],p:34.5},
{n:"Urea 46%",c:"Fertilizantes",d:"Fuente concentrada de nitrógeno para impulsar el crecimiento vegetativo.",f:["Saco de 50 kg","46% de nitrógeno","Alta solubilidad"],p:29},
{n:"Semilla de maíz híbrido AV-210",c:"Semillas",d:"Híbrido de buen rendimiento adaptado a la Costa ecuatoriana.",f:["Alto potencial de rendimiento","Tolerante a la sequía corta","Saco de 20 kg"],p:42},
{n:"Plántulas de cacao CCN-51",c:"Semillas",d:"Plantas injertadas y sanas para nuevas plantaciones o renovación.",f:["Vivero certificado","Altura de 40 cm","Entrega por lotes"],p:null},
{n:"Trichoderma biológico",c:"Bioinsumos",d:"Hongo benéfico que protege la raíz frente a enfermedades del suelo.",f:["Bolsa de 1 kg","Uso en suelo y semilla","Apto para manejo orgánico"],p:22},
{n:"Micorrizas para raíz",c:"Bioinsumos",d:"Mejoran la absorción de agua y nutrientes en cultivos jóvenes.",f:["Presentación de 1 kg","Fácil aplicación","Mayor desarrollo radicular"],p:19},
{n:"Fungicida a base de cobre",c:"Control de plagas",d:"Control preventivo de hongos en cacao, banano y hortalizas.",f:["Envase de 1 litro","Acción preventiva","Dosis según cultivo"],p:21},
{n:"Insecticida orgánico de neem",c:"Control de plagas",d:"Alternativa natural para controlar insectos chupadores y orugas.",f:["Envase de 1 litro","Bajo impacto ambiental","Compatible con bioinsumos"],p:18.5},
{n:"Tijera de podar profesional",c:"Herramientas",d:"Corte limpio y preciso para poda de cacao, frutales y banano.",f:["Acero endurecido","Mango ergonómico","Resorte reemplazable"],p:15},
{n:"Mochila fumigadora 20 L",c:"Herramientas",d:"Aplicación uniforme de protección y nutrición foliar.",f:["Capacidad de 20 litros","Bomba manual","Correas acolchadas"],p:48},
{n:"Sensor de humedad de suelo",c:"Equipos",d:"Mide la humedad del lote y se conecta al sistema AGROVISION.",f:["Lectura en tiempo real","Resistente al agua","Fácil instalación"],p:45},
{n:"Kit de riego por goteo",c:"Equipos",d:"Riego eficiente que ahorra agua y mejora la uniformidad del cultivo.",f:["Diseño según el lote","Incluye accesorios","Instalación opcional"],p:null}];
const SERVICIOS=[
{i:"bi-chat-dots",n:"Asesoría agrícola",d:"Acompañamiento técnico para decidir mejor en cada etapa del cultivo.",b:["Plan de trabajo por finca","Visitas de seguimiento","Respuestas rápidas"]},
{i:"bi-clipboard2-pulse",n:"Análisis y diagnóstico de cultivos",d:"Evaluamos suelo, hojas y plantas para encontrar la causa del problema.",b:["Informe claro y práctico","Detección temprana","Recomendaciones concretas"]},
{i:"bi-bug",n:"Manejo y control de plagas",d:"Estrategias de control que protegen el cultivo y cuidan el entorno.",b:["Menos pérdidas","Uso responsable de insumos","Monitoreo continuo"]},
{i:"bi-droplet-half",n:"Fertilización y nutrición vegetal",d:"Programas de nutrición ajustados a tu suelo y a tu meta de producción.",b:["Dosis precisas","Ahorro en fertilizantes","Mejor calidad de fruto"]},
{i:"bi-binoculars",n:"Monitoreo de cultivos",d:"Seguimiento periódico del estado de tus lotes, en campo y con sensores.",b:["Alertas oportunas","Historial por lote","Decisiones con datos"]},
{i:"bi-cpu",n:"Agricultura de precisión",d:"Sensores, mapas y tecnología para aplicar agua e insumos donde se necesitan.",b:["Riego eficiente","Menor desperdicio","Mayor rendimiento por hectárea"]},
{i:"bi-mortarboard",n:"Capacitación para productores",d:"Talleres prácticos para ti y tu equipo, en tu finca o en nuestras aulas.",b:["Aprendizaje práctico","Material de apoyo","Certificado de asistencia"]},
{i:"bi-graph-up-arrow",n:"Planificación y optimización de producción",d:"Calendarios de siembra, costos y metas para producir con rentabilidad.",b:["Costos bajo control","Cosechas planificadas","Mejor uso del terreno"]}];
const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const IMG={"Fertilizantes":"fertilizantes","Semillas":"semillas","Bioinsumos":"bioinsumos","Control de plagas":"plagas","Herramientas":"herramientas","Equipos":"equipos"};

function cardServicio(s){return `<div class="col-md-6 col-lg-3 reveal"><div class="card-av p-4"><div class="ico"><i class="bi ${s.i}"></i></div><h3 class="h5">${esc(s.n)}</h3><p class="small">${esc(s.d)}</p></div></div>`}
function cardServicioFull(s){return `<div class="col-md-6 reveal"><div class="card-av p-4 d-flex flex-column"><div class="d-flex gap-3"><div class="ico flex-shrink-0"><i class="bi ${s.i}"></i></div><div><h3 class="h5">${esc(s.n)}</h3><p class="mb-2">${esc(s.d)}</p></div></div><ul class="feat mb-3">${s.b.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><a class="btn btn-av mt-auto align-self-start" href="contacto.html?tipo=Asesoría agrícola&asunto=${encodeURIComponent("Quiero asesoría sobre: "+s.n)}">Solicitar asesoría</a></div></div>`}
function cardProducto(p){return `<div class="col-sm-6 col-lg-4 col-xl-3 reveal"><div class="card-av d-flex flex-column"><img src="img/productos/${IMG[p.c]}.svg" alt="${esc(p.n)}" loading="lazy"><div class="p-3 d-flex flex-column flex-grow-1"><span class="tag align-self-start mb-2">${esc(p.c)}</span><h3 class="h6">${esc(p.n)}</h3><p class="small mb-2">${esc(p.d)}</p><ul class="feat">${p.f.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><div class="mt-auto"><div class="pr mb-2">${p.p?"USD "+p.p.toFixed(2):"Consultar precio"}</div><a class="btn btn-line btn-sm w-100" href="contacto.html?tipo=Información de productos&asunto=${encodeURIComponent("Quiero información de: "+p.n)}">Solicitar información</a></div></div></div></div>`}

/* Render por página */
const sd=$("#servicios-dest");if(sd)sd.innerHTML=SERVICIOS.slice(0,4).map(cardServicio).join("");
const sl=$("#servicios-lista");if(sl)sl.innerHTML=SERVICIOS.map(cardServicioFull).join("");
const pd=$("#productos-dest");if(pd)pd.innerHTML=PRODUCTOS.filter((_,i)=>[0,2,4,10].includes(i)).map(cardProducto).join("");
const pl=$("#productos-lista");
if(pl){
  const cats=["Todos",...new Set(PRODUCTOS.map(p=>p.c))];let cur="Todos";
  const dib=()=>{
    const q=$("#buscar").value.trim().toLowerCase();
    $("#chips").innerHTML=cats.map(c=>`<button class="chip ${c===cur?"on":""}" data-c="${esc(c)}" aria-pressed="${c===cur}">${esc(c)}</button>`).join("");
    const l=PRODUCTOS.filter(p=>(cur==="Todos"||p.c===cur)&&(p.n+" "+p.d).toLowerCase().includes(q));
    pl.innerHTML=l.length?l.map(cardProducto).join(""):'<p class="text-center py-5">No encontramos productos con esa búsqueda. Prueba con otra palabra o escríbenos.</p>';
    $("#cuenta").textContent=l.length+" producto"+(l.length===1?"":"s");
    observar();
  };
  $("#chips").addEventListener("click",e=>{const b=e.target.closest("button");if(b){cur=b.dataset.c;dib()}});
  $("#buscar").addEventListener("input",dib);dib();
}

/* Animaciones al desplazar */
const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12}):null;
function observar(){document.querySelectorAll(".reveal:not(.in)").forEach(el=>io?io.observe(el):el.classList.add("in"))}
observar();

/* Contadores */
document.querySelectorAll("[data-n]").forEach(el=>{
  const fin=+el.dataset.n,t0=performance.now();let ok=false;
  const run=()=>{if(ok)return;ok=true;const f=t=>{const k=Math.min((t-t0)/1500,1);el.textContent="+"+Math.round(fin*k).toLocaleString("es");if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)};
  new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){run();o.disconnect()}}).observe(el);
});

/* Volver arriba y menú activo */
const top_=$("#top");
addEventListener("scroll",()=>{top_.style.display=scrollY>400?"block":"none"});
top_.onclick=()=>scrollTo({top:0,behavior:"smooth"});
const pag=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll(".navbar .nav-link").forEach(a=>{if(a.getAttribute("href")===pag)a.classList.add("active")});

/* Formulario de contacto */
const f=$("#form-contacto");
if(f){
  const qs=new URLSearchParams(location.search);
  if(qs.get("asunto"))$("#mensaje").value=qs.get("asunto");
  if(qs.get("tipo"))$("#tipo").value=qs.get("tipo");
  const err=(id,m)=>{const el=$("#"+id);el.classList.toggle("is-invalid",!!m);el.classList.toggle("is-valid",!m);$("#e-"+id).textContent=m||""; return !m};
  f.addEventListener("submit",e=>{
    e.preventDefault();
    const v=id=>$("#"+id).value.trim();
    const r=[
      err("nombre",v("nombre").split(/\s+/).filter(Boolean).length<2?"Escribe tu nombre y apellido.":""),
      err("correo",!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("correo"))?"Escribe un correo válido, por ejemplo nombre@finca.com.":""),
      err("telefono",!/^(\+593|0)?9\d{8}$|^(\+593|0)?[2-7]\d{7}$/.test(v("telefono").replace(/[\s-]/g,""))?"Escribe un teléfono ecuatoriano válido, por ejemplo 0991234567.":""),
      err("tipo",!v("tipo")?"Elige un tipo de consulta.":""),
      err("mensaje",v("mensaje").length<10?"Cuéntanos tu consulta con al menos 10 caracteres.":"")
    ];
    const ok=r.every(Boolean),box=$("#resultado");
    box.className="alert mt-3 "+(ok?"alert-success":"alert-danger");
    box.textContent=ok?"¡Gracias, "+v("nombre").split(" ")[0]+"! Recibimos tu consulta y te responderemos en menos de 24 horas.":"Revisa los campos marcados en rojo.";
    if(ok){f.reset();f.querySelectorAll(".is-valid").forEach(x=>x.classList.remove("is-valid"))}
  });
}
