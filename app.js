
const $=(s)=>document.querySelector(s), $$=(s)=>document.querySelectorAll(s);

const EAI_CONFIG={
  chatApi:"/api/chat",
  paperApi:"/api/papers",
  dashboards:{
    macro:{titleES:"Bolivia Macro Monitor",titleEN:"Bolivia Macro Monitor",url:""},
    prices:{titleES:"Inflation Network Lab",titleEN:"Inflation Network Lab",url:""},
    financial:{titleES:"Financial Stability Monitor",titleEN:"Financial Stability Monitor",url:""}
  }
};

const T={
es:{
"nav.monitor":"Monitor","nav.insights":"Insights","nav.research":"Investigación","nav.publications":"Publicaciones","nav.dashboards":"Dashboards","nav.about":"Instituto",
"ribbon.title":"BOLIVIA ECONOMIC MONITOR","ribbon.note":"Fuentes oficiales · último dato disponible","tick.fx":"TCO","tick.cpi":"IPC 12M","tick.cpiM":"IPC MES","tick.rin":"RIN*","tick.base":"BASE MON.","tick.tre":"TRe MN","tick.gold":"ORO","tick.normalization":"normalización","tick.latest":"último corte","tick.reference":"referencia","tick.international":"internacional",
"hero.updated":"Actualizado con fuentes oficiales","hero.title":"La economía boliviana, leída con datos.","hero.lead":"Investigación independiente, monitoreo económico y herramientas cuantitativas para entender qué está cambiando, por qué importa y qué evidencia respalda la lectura.","hero.latest":"Ver análisis recientes","hero.ask":"Preguntar al Research Assistant","hero.now":"AHORA",
"now.fx":"Mercado cambiario","now.fxp":"El TCO se ubica en Bs 11,50/USD, por debajo de los máximos observados a inicios de agosto.","now.prices":"Precios","now.pricesp":"Julio registra una corrección mensual de -2,79%; la inflación a 12 meses baja a 4,93%.","now.policy":"Política monetaria","now.policyp":"Las tasas operativas permanecen elevadas en un entorno de transición monetaria y cambiaria.",
"ins.kicker":"Latest research intelligence","ins.title":"Lo que estamos viendo","ins.note1":"Notas breves basadas en datos","ins.note2":"no titulares de prensa","feature.label":"TIPO DE CAMBIO OFICIAL","feature.today":"● último dato","feature.title":"El boliviano corrige parte de la depreciación observada a inicios de agosto.","feature.body":"Desde el máximo de Bs 12,23/USD del 3 de agosto, el TCO se redujo hasta Bs 11,50/USD. La señal inmediata es una menor presión cambiaria respecto del pico, aunque la lectura estructural requiere mirar liquidez, intervención y flujos de divisas.","feature.dashboard":"Ver dashboard cambiario →","feature.ask":"Preguntar a EAI AI →",
"card1.title":"La desinflación de julio es fuerte, pero su composición importa.","card1.body":"El IPC cayó 2,79% mensual tras la normalización del abastecimiento. La siguiente pregunta es cuánto de esa corrección será persistente.","card2.base":"Base monetaria","card2.yoy":"12 meses","card2.title":"La señal monetaria debe leerse junto con tasas, encaje y liquidez.","card2.body":"Un agregado monetario aislado no resume la postura monetaria. EAI propone una lectura conjunta de instrumentos y condiciones financieras.","ins.read":"Leer análisis →","ins.explore":"Explorar datos →",
"risk.fx":"Volatilidad cambiaria","risk.prices":"Persistencia inflacionaria","risk.external":"Liquidez externa","risk.mid":"MEDIA","risk.watch":"VIGILAR","risk.note":"Indicadores analíticos, no calificaciones crediticias.",
"pulse.title":"Una lectura en 60 segundos","pulse.cut":"Corte analítico","pulse.p1k":"CAMBIARIO","pulse.p1":"Corrección desde máximos, pero régimen aún en fase de descubrimiento.","pulse.p2k":"INFLACIÓN","pulse.p2":"La normalización de oferta reduce el IPC; vigilar núcleo y persistencia.","pulse.p3k":"MONETARIO","pulse.p3":"Tasas operativas altas refuerzan una postura contractiva.","pulse.p4k":"EXTERNO","pulse.p4":"Reservas y disponibilidad líquida siguen siendo variables críticas.",
"research.title":"Investigación que se acumula, no contenido que desaparece.","research.lead":"Cada línea conecta papers, datasets, código, dashboards y notas de coyuntura.","research.r1":"Macroeconomía y política monetaria","research.r1p":"Inflación, crecimiento, dinero, reservas, régimen cambiario y transición a metas de inflación.","research.r2":"Precios y redes","research.r2p":"Propagación de shocks, inflación sistémica, persistencia y formación de precios.","research.r3":"Finanzas y riesgo sistémico","research.r3p":"Banca, liquidez, solvencia, contagio y estabilidad financiera.","research.r4p":"Nowcasting, NLP, LLMs, automatización, scraping y sistemas de información económica.",
"pub.title":"Research output","pub.upload":"Subir paper","pub.all":"Todo","paper.area1":"Inflación · Redes","paper.title1":"¿Cuándo los shocks de precios se vuelven sistémicos?","paper.desc1":"Redes dinámicas y cascadas de propagación inflacionaria en Bolivia.","paper.area2":"Política monetaria","paper.title2":"Migración hacia metas de inflación en Bolivia","paper.desc2":"Preparación institucional, ancla nominal, dominancia fiscal y régimen cambiario.","paper.title3":"Nowcasting con datos de alta frecuencia y señales textuales","paper.desc3":"Pipeline reproducible para actividad económica y monitoreo de coyuntura.","paper.area4":"Coyuntura","paper.title4":"Bolivia Economic Pulse — Semana 34","paper.desc4":"Tipo de cambio, inflación, liquidez y principales señales de riesgo.",
"dash.title":"Dashboards y herramientas","dash.lead":"Los tableros no son anexos: forman parte de la investigación y pueden actualizarse con mayor frecuencia que un paper.","dash.macro":"Bolivia Macro Monitor","dash.macrop":"Inflación, TCO, RIN, actividad, fiscal, monetario y sector externo.","dash.prices":"Inflation Network Lab","dash.pricesp":"Productos centrales, cascadas, incidencia, shocks y estructura de propagación.","dash.fin":"Financial Stability Monitor","dash.finp":"Mora, reprogramados, liquidez, capital, rentabilidad y señales de vulnerabilidad.","dash.open":"Abrir dashboard →","dash.more":"Repositorio abierto de aplicaciones","dash.morep":"Preparado para Streamlit, Shiny, Power BI, Tableau y herramientas propias.",
"about.kicker":"About EAI","about.title":"Un instituto debe parecer solvente porque su trabajo puede ser examinado.","about.p1":"Economic Analytics Institute se plantea como una plataforma independiente de investigación económica aplicada, con foco inicial en Bolivia y capacidad de extender análisis comparados a América Latina.","about.c1":"Autores identificables","about.c2":"Fuentes trazables","about.c3":"Métodos reproducibles","about.c4":"Política editorial",
"ai.title":"Que el chatbot conozca tu producción, no todo Internet.","ai.body":"El asistente puede conectarse al repositorio de EAI y responder utilizando papers, notas, datasets y documentos seleccionados, con referencias a la fuente.","ai.try":"Probar interfaz",
"footer.research":"Research","footer.integrity":"Integrity","footer.methods":"Metodología","footer.editorial":"Política editorial","footer.conflicts":"Conflictos de interés","footer.sources":"Indicadores mostrados en portada: fuentes oficiales BCB e INE. Cada serie debe conservar fecha de corte, definición y enlace de origen en producción.","footer.independent":"Independent economic research · Bolivia / Latin America",
"chat.title":"Pregunta sobre la investigación.","chat.body":"La interfaz está preparada para consultar un backend RAG con papers y documentos autorizados.","chat.welcome":"Hola. ¿Qué quieres consultar sobre la economía boliviana o la investigación de EAI?","chat.placeholder":"Ej.: ¿Qué explica la caída reciente del TCO?","chat.send":"Enviar",
"upload.title":"Subir publicación","upload.t":"Título","upload.a":"Autor(es)","upload.k":"Tipo","upload.abs":"Resumen","upload.send":"Cargar e indexar"
},
en:{
"nav.monitor":"Monitor","nav.insights":"Insights","nav.research":"Research","nav.publications":"Publications","nav.dashboards":"Dashboards","nav.about":"Institute",
"ribbon.title":"BOLIVIA ECONOMIC MONITOR","ribbon.note":"Official sources · latest available observation","tick.fx":"OFFICIAL FX","tick.cpi":"CPI 12M","tick.cpiM":"CPI MONTH","tick.rin":"NIR*","tick.base":"MON. BASE","tick.tre":"REF. RATE","tick.gold":"GOLD","tick.normalization":"normalization","tick.latest":"latest cut","tick.reference":"reference","tick.international":"international",
"hero.updated":"Updated with official sources","hero.title":"Bolivia's economy, read through data.","hero.lead":"Independent research, economic monitoring, and quantitative tools to understand what is changing, why it matters, and what evidence supports the interpretation.","hero.latest":"View latest analysis","hero.ask":"Ask the Research Assistant","hero.now":"NOW",
"now.fx":"FX market","now.fxp":"The official exchange rate stands at Bs 11.50/USD, below the highs observed in early August.","now.prices":"Prices","now.pricesp":"July records a -2.79% monthly correction; 12-month inflation falls to 4.93%.","now.policy":"Monetary policy","now.policyp":"Operational rates remain elevated amid an ongoing monetary and FX regime transition.",
"ins.kicker":"Latest research intelligence","ins.title":"What we are watching","ins.note1":"Short notes grounded in data","ins.note2":"not news headlines","feature.label":"OFFICIAL EXCHANGE RATE","feature.today":"● latest observation","feature.title":"The boliviano retraces part of the depreciation seen in early August.","feature.body":"From a peak of Bs 12.23/USD on August 3, the official exchange rate declined to Bs 11.50/USD. The immediate signal is lower FX pressure relative to the peak, although the structural reading requires liquidity, intervention, and foreign-currency flow data.","feature.dashboard":"View FX dashboard →","feature.ask":"Ask EAI AI →",
"card1.title":"July disinflation is sharp, but its composition matters.","card1.body":"CPI fell 2.79% month-on-month as supply conditions normalized. The next question is how much of the correction will persist.","card2.base":"Monetary base","card2.yoy":"12 months","card2.title":"The monetary signal should be read together with rates, reserve requirements, and liquidity.","card2.body":"A single monetary aggregate does not summarize the policy stance. EAI proposes a combined reading of instruments and financial conditions.","ins.read":"Read analysis →","ins.explore":"Explore data →",
"risk.fx":"FX volatility","risk.prices":"Inflation persistence","risk.external":"External liquidity","risk.mid":"MEDIUM","risk.watch":"WATCH","risk.note":"Analytical indicators, not credit ratings.",
"pulse.title":"A 60-second reading","pulse.cut":"Analytical cut","pulse.p1k":"FX","pulse.p1":"Correction from recent highs, but the regime remains in a price-discovery phase.","pulse.p2k":"INFLATION","pulse.p2":"Supply normalization lowers CPI; watch core and persistence.","pulse.p3k":"MONETARY","pulse.p3":"High operational rates reinforce a contractionary stance.","pulse.p4k":"EXTERNAL","pulse.p4":"Reserves and liquid foreign-currency availability remain critical variables.",
"research.title":"Research that accumulates, not content that disappears.","research.lead":"Each research line connects papers, datasets, code, dashboards, and short-form analysis.","research.r1":"Macroeconomics & monetary policy","research.r1p":"Inflation, growth, money, reserves, FX regime, and the transition toward inflation targeting.","research.r2":"Prices & networks","research.r2p":"Shock propagation, systemic inflation, persistence, and price formation.","research.r3":"Finance & systemic risk","research.r3p":"Banking, liquidity, solvency, contagion, and financial stability.","research.r4p":"Nowcasting, NLP, LLMs, automation, scraping, and economic information systems.",
"pub.title":"Research output","pub.upload":"Upload paper","pub.all":"All","paper.area1":"Inflation · Networks","paper.title1":"When do price shocks become systemic?","paper.desc1":"Dynamic networks and inflation-propagation cascades in Bolivia.","paper.area2":"Monetary policy","paper.title2":"Migrating toward inflation targeting in Bolivia","paper.desc2":"Institutional readiness, nominal anchors, fiscal dominance, and the FX regime.","paper.title3":"Nowcasting with high-frequency data and textual signals","paper.desc3":"A reproducible pipeline for activity and economic monitoring.","paper.area4":"Economic monitoring","paper.title4":"Bolivia Economic Pulse — Week 34","paper.desc4":"Exchange rate, inflation, liquidity, and the main risk signals.",
"dash.title":"Dashboards & tools","dash.lead":"Dashboards are not appendices: they are part of the research and can update more frequently than a paper.","dash.macro":"Bolivia Macro Monitor","dash.macrop":"Inflation, FX, reserves, activity, fiscal, monetary, and external indicators.","dash.prices":"Inflation Network Lab","dash.pricesp":"Central products, cascades, contributions, shocks, and propagation structure.","dash.fin":"Financial Stability Monitor","dash.finp":"NPLs, restructured loans, liquidity, capital, profitability, and vulnerability signals.","dash.open":"Open dashboard →","dash.more":"Open application repository","dash.morep":"Ready for Streamlit, Shiny, Power BI, Tableau, and custom applications.",
"about.kicker":"About EAI","about.title":"An institute should look credible because its work can be examined.","about.p1":"Economic Analytics Institute is designed as an independent applied-economic-research platform, initially focused on Bolivia and able to extend comparative work across Latin America.","about.c1":"Identifiable authors","about.c2":"Traceable sources","about.c3":"Reproducible methods","about.c4":"Editorial policy",
"ai.title":"Let the chatbot know your research, not the entire Internet.","ai.body":"The assistant can connect to the EAI repository and answer using selected papers, briefs, datasets, and documents, with source references.","ai.try":"Try interface",
"footer.research":"Research","footer.integrity":"Integrity","footer.methods":"Methodology","footer.editorial":"Editorial policy","footer.conflicts":"Conflicts of interest","footer.sources":"Homepage indicators use official BCB and INE sources. In production, each series should retain its cut-off date, definition, and source link.","footer.independent":"Independent economic research · Bolivia / Latin America",
"chat.title":"Ask about the research.","chat.body":"The interface is ready to query a RAG backend using authorized papers and documents.","chat.welcome":"Hello. What would you like to ask about Bolivia's economy or EAI research?","chat.placeholder":"e.g. What explains the recent decline in the exchange rate?","chat.send":"Send",
"upload.title":"Upload publication","upload.t":"Title","upload.a":"Author(s)","upload.k":"Type","upload.abs":"Abstract","upload.send":"Upload and index"
}};

let lang=localStorage.getItem("eai-lang")||"es";
function setLang(l){
 lang=l;localStorage.setItem("eai-lang",l);document.documentElement.lang=l;
 $$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(T[l][k])el.textContent=T[l][k]});
 $$("[data-i18n-placeholder]").forEach(el=>{const k=el.dataset.i18nPlaceholder;if(T[l][k])el.placeholder=T[l][k]});
 $$(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===l));
}
$$(".lang-btn").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
$("#menuToggle")?.addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$$(".main-nav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));

function openModal(id){const m=document.getElementById(id);if(m){m.classList.add("open");m.setAttribute("aria-hidden","false")}}
function closeModal(id){const m=document.getElementById(id);if(m){m.classList.remove("open");m.setAttribute("aria-hidden","true")}}
$$("[data-close]").forEach(b=>b.addEventListener("click",()=>closeModal(b.dataset.close)));
$$(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)closeModal(m.id)}));
["#chatFab","#openChatTop","#openChatHero","#openChatBottom"].forEach(s=>$(s)?.addEventListener("click",()=>openModal("chatModal")));
$("#openUpload")?.addEventListener("click",()=>openModal("uploadModal"));

$$(".ask-insight").forEach(b=>b.addEventListener("click",()=>{
 openModal("chatModal");$("#chatInput").value=lang==="en"?b.dataset.questionEn:b.dataset.questionEs;$("#chatInput").focus()
}));
$$(".ask-paper").forEach(b=>b.addEventListener("click",()=>{
 openModal("chatModal");$("#chatInput").value=lang==="en"?`Summarize the main findings of "${b.dataset.paper}"`:`Resume los principales hallazgos de "${b.dataset.paper}"`;$("#chatInput").focus()
}));

$$(".pub-tab").forEach(tab=>tab.addEventListener("click",()=>{
 $$(".pub-tab").forEach(t=>t.classList.remove("active"));tab.classList.add("active");
 const f=tab.dataset.filter;$$(".paper-row").forEach(row=>row.style.display=(f==="all"||row.dataset.kind===f)?"grid":"none")
}));

$$(".open-dashboard").forEach(b=>b.addEventListener("click",()=>{
 const cfg=EAI_CONFIG.dashboards[b.dataset.id],wrap=$("#dashboardFrameWrap");
 $("#dashboardModalTitle").textContent=lang==="en"?cfg.titleEN:cfg.titleES;
 wrap.innerHTML=cfg.url?`<iframe src="${cfg.url}" loading="lazy" allowfullscreen></iframe>`:
 `<div class="dashboard-empty"><strong>${lang==="en"?"Ready to connect":"Espacio listo para conectar"}</strong><p>${lang==="en"?"Add your Streamlit, Shiny, Power BI, Tableau, or web-app URL in EAI_CONFIG.dashboards.":"Agrega la URL de tu Streamlit, Shiny, Power BI, Tableau o web app en EAI_CONFIG.dashboards."}</p></div>`;
 openModal("dashboardModal")
}));

function msg(text,role){const d=document.createElement("div");d.className=`msg ${role}`;d.textContent=text;$("#chatMessages").appendChild(d);$("#chatMessages").scrollTop=$("#chatMessages").scrollHeight}
$("#chatForm")?.addEventListener("submit",async e=>{
 e.preventDefault();const input=$("#chatInput"),q=input.value.trim();if(!q)return;msg(q,"user");input.value="";
 try{const r=await fetch(EAI_CONFIG.chatApi,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:q,language:lang,source_scope:"eai_repository"})});if(!r.ok)throw 0;const d=await r.json();msg(d.answer||"—","bot")}
 catch{msg(lang==="en"?"Demo mode: connect EAI_CONFIG.chatApi to your RAG backend.":"Modo demo: conecta EAI_CONFIG.chatApi a tu backend RAG.","bot")}
});
$("#uploadForm")?.addEventListener("submit",async e=>{
 e.preventDefault();const s=$("#uploadStatus"),file=$("#paperFile").files[0];if(!file){return}
 const f=new FormData();f.append("title",$("#paperTitle").value);f.append("authors",$("#paperAuthors").value);f.append("kind",$("#paperKind").value);f.append("abstract",$("#paperAbstract").value);f.append("file",file);
 try{const r=await fetch(EAI_CONFIG.paperApi,{method:"POST",body:f});if(!r.ok)throw 0;s.textContent=lang==="en"?"Uploaded and queued for indexing.":"Cargado y enviado a indexación."}
 catch{s.textContent=lang==="en"?"Demo mode: storage/backend not connected yet.":"Modo demo: almacenamiento/backend aún no conectado."}
});

setLang(lang);
