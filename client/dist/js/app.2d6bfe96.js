(function(e){function t(t){for(var o,r,d=t[0],n=t[1],O=t[2],A=0,g=[];A<d.length;A++)r=d[A],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&g.push(a[r][0]),a[r]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);s&&s(t);while(g.length)g.shift()();return c.push.apply(c,O||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],o=!0,d=1;d<i.length;d++){var n=i[d];0!==a[n]&&(o=!1)}o&&(c.splice(t--,1),e=r(r.s=i[0]))}return e}var o={},a={app:0},c=[];function r(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=o,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],n=d.push.bind(d);d.push=t,d=d.slice();for(var O=0;O<d.length;O++)t(d[O]);var s=n;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"2b74":function(e,t,i){"use strict";i("add2")},"4d3a":function(e,t,i){"use strict";i("f161")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("7a23");function a(e,t,i,a,c,r){var d=Object(o["m"])("Index");return Object(o["h"])(),Object(o["c"])(d)}i("b0c0");var c=Object(o["o"])("data-v-0c4482fc");Object(o["j"])("data-v-0c4482fc");var r={class:"section"},d={class:"section"},n={key:0,class:"section"},O=Object(o["g"])("h3",null,"Resultado",-1),s={class:"dest"},A=Object(o["f"])(" horas. Total de "),g={class:"dest"},l=Object(o["f"])(".");Object(o["i"])();var b=c((function(e,t,i,a,c,b){var C=Object(o["m"])("HeaderNav"),I=Object(o["m"])("DisSection"),u=Object(o["m"])("DisFormSection");return Object(o["h"])(),Object(o["c"])(o["a"],null,[Object(o["g"])(C,{msg:"Em desenvolvimento",title:"TEST NESTJS e VUEJS"}),Object(o["g"])("div",r,[Object(o["g"])(I,{getObj:e.getObj},null,8,["getObj"])]),Object(o["g"])("div",d,[Object(o["g"])(u,{sendData:e.envio},null,8,["sendData"])]),e.result.show?(Object(o["h"])(),Object(o["c"])("div",n,[O,Object(o["g"])("h5",null,[Object(o["f"])(Object(o["n"])(e.result.name)+", você possui ",1),Object(o["g"])("span",s,Object(o["n"])(e.result.total),1),A,Object(o["g"])("span",g,Object(o["n"])(e.result.pcent)+"%",1),l])])):Object(o["d"])("",!0)],64)})),C=(i("4de4"),Object(o["o"])("data-v-1a4e35d8"));Object(o["j"])("data-v-1a4e35d8");var I={class:"root"},u=Object(o["g"])("h4",null,"Selecione as disciplinas pagas",-1),p={class:"cards"};Object(o["i"])();var E=C((function(e,t,i,a,c,r){var d=Object(o["m"])("DisCard");return Object(o["h"])(),Object(o["c"])("div",I,[u,(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(a.buttons.data,(function(e){return Object(o["h"])(),Object(o["c"])("button",{key:e,onClick:function(t){return a.handlePeriodo(e.id)},class:[e.click?"btnOn":"btnOff"]}," P"+Object(o["n"])(e.id),11,["onClick"])})),128)),Object(o["g"])("div",p,[(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(a.exibDis.data,(function(e,t){return Object(o["h"])(),Object(o["c"])(d,{data:e,key:e.id,index:t,selected:e.selected,onClick:function(t){return a.handleClick(e.id,i.getObj)}},null,8,["data","index","selected","onClick"])})),128))])])})),m=(i("c740"),Object(o["o"])("data-v-d0ff2df6")),D=m((function(e,t,i,a,c,r){return Object(o["h"])(),Object(o["c"])("div",{class:["d-root",{active:i.selected}]},[Object(o["g"])("p",null,[Object(o["f"])(Object(o["n"])(i.data.name)+" ",1),Object(o["g"])("span",{class:[i.selected?"dCreActive":"dCre"]},"- "+Object(o["n"])(i.data.creditos)+" créditos",3)]),Object(o["g"])("p",{class:[i.selected?"dCatActive":"dCat"]},Object(o["n"])(i.data.categoria),3)],2)})),f=(i("a9e3"),{name:"DisCard",props:{data:Object,index:Number,selected:Boolean},methods:{}});i("cd94");f.render=D,f.__scopeId="data-v-d0ff2df6";var S=f,j=[{id:1,name:"INTROD A ENGENHARIA DE COMPUTACAO",codigo:"1107248",periodo:1,creditos:4,categoria:"Obrigatória",selected:!1},{id:2,name:"CALCULO DIFERENCIAL E INTEGRAL I",codigo:"1103177",periodo:1,creditos:4,categoria:"Obrigatória",selected:!1},{id:3,name:"CALCULO VETORIAL E GEOMETRIA ANALITICA",codigo:"1103118 ",periodo:1,creditos:4,categoria:"Obrigatória",selected:!1},{id:4,name:"METODOLOGIA DO TRABALHO CIENTIFICO",codigo:"1107201",periodo:1,creditos:3,categoria:"Complementar Obrigatoria",selected:!1},{id:5,name:"INTRODUCAO A PROGRAMACAO PARA ENGENHARIA DE COMPUTACAO",codigo:"GDINF0107",periodo:1,creditos:4,categoria:"Obrigatória",selected:!1},{id:6,name:"LABORATORIO DE INTRODUCAO A PROGRAMACAO",codigo:"GDINF0101",periodo:1,creditos:4,categoria:"Obrigatória",selected:!1},{id:7,name:"MATERIAIS PARA MICRO E NANO TECNOLOGIA",codigo:"GDSCO0025",periodo:1,creditos:4,categoria:"Obrigatória",selected:!1},{id:8,name:"CALCULO DIFERENCIAL E INTEGRAL II",codigo:"1103178",periodo:2,creditos:4,categoria:"Obrigatória",selected:!1},{id:9,name:"FISICA APLICADA A COMPUTACAO I",codigo:"1101171",periodo:2,creditos:4,categoria:"Obrigatória",selected:!1},{id:10,name:"LABORATORIO DE LINGUAGEM DE PROGRAMACAO I",codigo:"GDINF0102",periodo:2,creditos:4,categoria:"Obrigatória",selected:!1},{id:11,name:"LINGUAGEM DE PROGRAMACAO I",codigo:"GDINF0108",periodo:2,creditos:4,categoria:"Obrigatória",selected:!1},{id:12,name:"CIRCUITOS LOGICOS I",codigo:"GDSCO0021",periodo:2,creditos:4,categoria:"Obrigatória",selected:!1},{id:13,name:"ELETRICIDADE E CIRCUITOS PARA COMPUTACAO I",codigo:"GDSCO0023",periodo:2,creditos:4,categoria:"Obrigatória",selected:!1},{id:14,name:"FISICA EXPERIMENTAL PARA COMPUTACAO",codigo:"GDSCO0046",periodo:2,creditos:2,categoria:"Obrigatória",selected:!1},{id:15,name:"PESQUISA APLICADA A COMPUTACAO",codigo:"1107206",periodo:3,creditos:3,categoria:"Complementar Obrigatoria",selected:!1},{id:16,name:"INTRODUCAO A ALGEBRA LINEAR",codigo:"1103179",periodo:3,creditos:4,categoria:"Obrigatória",selected:!1},{id:17,name:"CALCULO DIFERENCIAL E INTEGRAL III",codigo:"1103232",periodo:3,creditos:4,categoria:"Obrigatória",selected:!1},{id:18,name:"CALCULO DAS PROBABILIDADES I",codigo:"1108136",periodo:3,creditos:4,categoria:"Obrigatória",selected:!1},{id:19,name:"CIRCUITOS LOGICOS II",codigo:"GDSCO0022",periodo:3,creditos:4,categoria:"Obrigatória",selected:!1},{id:20,name:"ELETRICIDADE E CIRCUITOS PARA COMPUTACAO II",codigo:"GDSCO0024",periodo:3,creditos:4,categoria:"Obrigatória",selected:!1},{id:21,name:"MECANICA PARA ENGENHARIA DA COMPUTACAO",codigo:"GDSCO0059",periodo:3,creditos:4,categoria:"Obrigatória",selected:!1},{id:22,name:"LINGUAGEM DE PROGRAMACAO II",codigo:"1107148",periodo:4,creditos:4,categoria:"Obrigatória",selected:!1},{id:23,name:"FISICA APLICADA A COMPUTACAO II",codigo:"1101172",periodo:4,creditos:4,categoria:"Opcional",selected:!1},{id:24,name:"SERIES E EQUACOES DIFERENCIAIS ORDINARIAS",codigo:"1103180",periodo:4,creditos:4,categoria:"Obrigatória",selected:!1},{id:25,name:"ESTRUTURA DE DADOS",codigo:"1107186",periodo:4,creditos:4,categoria:"Obrigatória",selected:!1},{id:26,name:"ELETRONICA APLICADA I",codigo:"GDSCO0026",periodo:4,creditos:4,categoria:"Obrigatória",selected:!1},{id:27,name:"ARQUITETURA DE COMPUTADORES",codigo:"GDSCO0035",periodo:4,creditos:4,categoria:"Obrigatória",selected:!1},{id:28,name:"ARQUITETURA AVANCADA DE COMPUTADORES",codigo:"GDSCO0034",periodo:5,creditos:4,categoria:"Opcional",selected:!1},{id:29,name:"BANCO DE DADOS I",codigo:"1107180",periodo:5,creditos:4,categoria:"Obrigatória",selected:!1},{id:30,name:"CALCULO NUMERICO",codigo:"GDCOC0072",periodo:5,creditos:4,categoria:"Obrigatória",selected:!1},{id:31,name:"ANALISE E PROJETO DE ALGORITMOS",codigo:"GDCOC0076",periodo:5,creditos:4,categoria:"Obrigatória",selected:!1},{id:32,name:"ELETRONICA APLICADA II",codigo:"GDSCO0027",periodo:5,creditos:4,categoria:"Obrigatória",selected:!1},{id:33,name:"INTRODUCAO A MECANICA DOS FLUIDOS",codigo:"GDSCO0052",periodo:5,creditos:2,categoria:"Obrigatória",selected:!1},{id:34,name:"INTRODUCAO A MICROELETRONICA",codigo:"GDSCO0053",periodo:5,creditos:4,categoria:"Obrigatória",selected:!1},{id:35,name:"REDES DE COMPUTADORES I",codigo:"GDSCO0062 ",periodo:6,creditos:4,categoria:"Obrigatória",selected:!1},{id:36,name:"ENGENHARIA DE SOFTWARE",codigo:"1107128",periodo:6,creditos:4,categoria:"Obrigatória",selected:!1},{id:37,name:"MICROCONTROLADORES",codigo:"5101003",periodo:6,creditos:4,categoria:"Obrigatória",selected:!1},{id:38,name:"PESQUISA OPERACIONAL",codigo:"5102007",periodo:6,creditos:4,categoria:"Obrigatória",selected:!1},{id:39,name:"SINAIS E SISTEMAS DINAMICOS",codigo:"GDSCO0064",periodo:6,creditos:4,categoria:"Obrigatória",selected:!1},{id:40,name:"SISTEMAS OPERACIONAIS I",codigo:"GDSCO0068",periodo:6,creditos:4,categoria:"Obrigatória",selected:!1},{id:41,name:"AVALIACAO E DESEMPENHO DE SISTEMAS OPERACIONAIS",codigo:"5101001",periodo:7,creditos:4,categoria:"Obrigatória",selected:!1},{id:42,name:"REDES SEM FIO",codigo:"GDSCO0032",periodo:7,creditos:4,categoria:"Obrigatória",selected:!1},{id:43,name:"INTRODUCAO A COMPUTACAO GRAFICA",codigo:"GDSCO0051",periodo:7,creditos:4,categoria:"Obrigatória",selected:!1},{id:44,name:"INTRODUCAO AO PROCESSAMENTO DIGITAL DE IMAGENS",codigo:"GDSCO0055",periodo:7,creditos:4,categoria:"Obrigatória",selected:!1},{id:45,name:"SISTEMAS E CONTROLE DE AUTOMACAO",codigo:"GDSCO0065",periodo:7,creditos:4,categoria:"Obrigatória",selected:!1},{id:46,name:"SISTEMAS EMBARCADOS I",codigo:"GDSCO0081",periodo:7,creditos:4,categoria:"Obrigatória",selected:!1},{id:47,name:"INTRODUCAO A INTELIGENCIA ARTIFICIAL",codigo:"1107191",periodo:8,creditos:4,categoria:"Obrigatória",selected:!1},{id:48,name:"ROBOTICA",codigo:"GDSCO0028",periodo:8,creditos:4,categoria:"Obrigatória",selected:!1},{id:49,name:"CONCEPCAO ESTRUTURADA DE CIRCUITOS INTEGRADOS",codigo:"GDSCO0040",periodo:8,creditos:4,categoria:"Obrigatória",selected:!1},{id:50,name:"INTRODUCAO A TEORIA DA INFORMACAO",codigo:"GDSCO0054",periodo:8,creditos:4,categoria:"Obrigatória",selected:!1},{id:51,name:"ECONOMIA I",codigo:"1201126",periodo:9,creditos:4,categoria:"Obrigatória",selected:!1},{id:52,name:"COMPUTADORES E SOCIEDADE",codigo:"GDINF0106",periodo:9,creditos:4,categoria:"Complementar Obrigatoria",selected:!1},{id:53,name:"ADMINISTRACAO PARA ENGENHARIA",codigo:"1204172",periodo:9,creditos:4,categoria:"Obrigatória",selected:!1},{id:54,name:"TRABALHO DE CONCLUSAO DE CURSO I - ENG. DE COMPUTACAO",codigo:"GDSCO0029",periodo:9,creditos:2,categoria:"Complementar Obrigatoria",selected:!1},{id:55,name:"TRABALHO DE CONCLUSAO DE CURSO II - ENG. DE COMPUTACAO",codigo:"GDSCO0029",periodo:10,creditos:2,categoria:"Complementar Obrigatoria",selected:!1}],R=j,v=R,T={name:"DisSection",components:{DisCard:S},setup:function(){for(var e=Object(o["k"])(v),t=Object(o["k"])({data:e.filter((function(e){return 1==e.periodo}))}),i=Object(o["k"])({data:[]}),a=1;a<11;a++)i.data.push({id:a,click:!1});i.data[0].click=!0;var c=function(o){t.data=e.filter((function(e){return e.periodo==o}));for(var a=0;a<10;a++)i.data[a].id!=o&&(i.data[a].click=!1);i.data[o-1].click=!0},r=function(t,i){var o=e.findIndex((function(e){return e.id==t}));e[o].selected=!e[o].selected,i(e)};return{disciplinas:e,exibDis:t,buttons:i,handleClick:r,handlePeriodo:c}},props:{getObj:Function},data:function(){return{}}};i("86cb");T.render=E,T.__scopeId="data-v-1a4e35d8";var N=T,G=Object(o["o"])("data-v-6f06ce26");Object(o["j"])("data-v-6f06ce26");var L={class:"df-root"},U=Object(o["g"])("h4",null,"Algumas outras informações",-1),h=Object(o["e"])('<label for="name" data-v-6f06ce26>Nome</label><input class="text-form" type="text" name="name" id="name" value="" autocomplete="off" data-v-6f06ce26><div class="check-div" data-v-6f06ce26><label class="check-label" for="checkbox" data-v-6f06ce26>Estágio Concluido</label><input class="check" type="checkbox" name="estagio" id="estagio" data-v-6f06ce26></div><button class="btn-limpar" data-v-6f06ce26>Limpar</button>',4),M=Object(o["g"])("button",{class:"btn-enviar",type:"submit",val:""},"Enviar",-1);Object(o["i"])();var P=G((function(e,t,i,a,c,r){return Object(o["h"])(),Object(o["c"])("div",L,[U,Object(o["g"])("form",{class:"form",onsubmit:function(){return e.enviar(i.sendData)}},[h,M],8,["onsubmit"])])})),k={name:"DisFormSection",setup:function(){var e=function(e){var t=document.getElementById("name").value,i=document.getElementById("estagio").checked,o={name:t,estagio:i};return e(o),!1};return{enviar:e}},data:function(){return{}},props:{sendData:Function}};i("2b74");k.render=P,k.__scopeId="data-v-6f06ce26";var y=k,F=Object(o["o"])("data-v-23f8c525");Object(o["j"])("data-v-23f8c525");var x={class:"bar"},_={class:"msg"},w=Object(o["g"])("a",{href:"https://github.com/andres0ares/nest-with-vue",class:"link",target:"_blank"},"GitHub",-1),B={class:"root-header"},H={class:"title"};Object(o["i"])();var J=F((function(e,t,i,a,c,r){return Object(o["h"])(),Object(o["c"])(o["a"],null,[Object(o["g"])("div",x,[Object(o["g"])("p",_,[Object(o["f"])(Object(o["n"])(i.msg)+" | ",1),w])]),Object(o["g"])("div",B,[Object(o["g"])("h4",H,Object(o["n"])(i.title),1)])],64)})),Q={name:"HeaderNav",props:{msg:String,title:String}};i("b8eb");Q.render=J,Q.__scopeId="data-v-23f8c525";var V=Q,W={name:"Index",components:{DisSection:N,DisFormSection:y,HeaderNav:V},setup:function(){var e=Object(o["k"])({dis:[]}),t=Object(o["k"])({name:"",show:!1,total:0,pcent:0}),i=function(t){e.dis=t},a=function(i){var o=e.dis.filter((function(e){return 1==e.selected}));e.dis=o;for(var a=0,c=0;c<e.dis.length;c++)a+=e.dis[c].creditos;i.estagio&&(a+=20),t.total=15*a,t.show=!0,t.name=i.name,t.pcent=Math.round(15*a*100/3735),console.log("result",t),console.log("index",e)};return{envio:a,getObj:i,result:t}},props:{}};i("4d3a");W.render=b,W.__scopeId="data-v-0c4482fc";var X=W,q={name:"App",components:{Index:X}};i("7eae");q.render=a;var z=q;Object(o["b"])(z).mount("#app")},"66bb":function(e,t,i){},"7eae":function(e,t,i){"use strict";i("b06f")},"86cb":function(e,t,i){"use strict";i("edee")},add2:function(e,t,i){},b06f:function(e,t,i){},b8eb:function(e,t,i){"use strict";i("ef97")},cd94:function(e,t,i){"use strict";i("66bb")},edee:function(e,t,i){},ef97:function(e,t,i){},f161:function(e,t,i){}});
//# sourceMappingURL=app.2d6bfe96.js.map