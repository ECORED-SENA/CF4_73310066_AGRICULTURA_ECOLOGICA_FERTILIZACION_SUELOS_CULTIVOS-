(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"0697":function(e,t,a){e.exports=a.p+"img/Grupo 1108118.8ffc5f6c.png"},"0b0d":function(e,t,a){"use strict";a("4cb3")},"1a1c":function(e,t,a){e.exports=a.p+"img/Grupo 1108116.bca3e8c2.png"},"27ba":function(e,t,a){},4298:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t("div",{attrs:{id:"Actividad"}},[t("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},o=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta--blanca"},[t("div",{staticClass:"row align-items-center mb-4"},[e._m(0),t("div",{staticClass:"col"},[t("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),t("p",{staticClass:"mb-0"},[e._v(" "+e._s(e.cuestionario.introduccion)+" ")])])]),t("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?t("ActividadResultados",{attrs:{respuestas:e.respuestas}}):t("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),t("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-auto"},[t("img",{attrs:{src:a("8da0"),alt:""}})])}],c=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"mb-4 pb-4",domProps:{innerHTML:e._s(e.pregunta.texto)}}),t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col-5"},[t("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),t("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(a,s){return t("div",{key:a.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":a.correcta,"tarjeta-respuesta--incorrecta":a.incorrecta,"tarjeta-respuesta--disabled":a.disabled},on:{click:function(t){return e.onRespuestaSelected(a)}}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===a.id?a.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),t("div",{staticClass:"col",domProps:{innerHTML:e._s(a.texto)}})])])})),0)]),e.respuestaSelected.id?[t("hr"),e.respuestaSelected.esCorrecta?t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),n=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(t=>({...t,correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(a("c8a9"),a("2877")),p=Object(l["a"])(u,c,n,!1,null,"5c28cbbd",null),m=p.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta-avance"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col"},[t("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[t("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),t("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),t("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?t("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[t("span",[e._v("Reiniciar")])]):t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Continuar")]),t("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],C={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"}}},v=C,x=(a("c2dc"),Object(l["a"])(v,b,g,!1,null,"7a0121ad",null)),h=x.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row align-items-center justify-content-around"},[t("div",{staticClass:"col-5"},[(e.aprobado,t("img",{attrs:{src:a("a46c"),alt:""}}))]),t("div",{staticClass:"col-4"},[t("div",{staticClass:"d-flex align-items-center flex-column"},[t("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[t("h3",[e._v("¡BUEN TRABAJO!")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[t("h3",[e._v("VUELVE A INTENTARLO")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],t("hr",{staticClass:"w-100"}),t("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},f=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},A=j,y=(a("4d40"),Object(l["a"])(A,_,f,!1,null,"360ec089",null)),S=y.exports,R={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:h,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:t}=this.cuestionario;if(!e)return[];const a=t?this.shuffle(e):e;return a.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let t,a=e.length;while(a>0)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},M=R,L=(a("0b0d"),Object(l["a"])(M,r,i,!1,null,"1bb53ccc",null)),w=L.exports,I={name:"ActividadDidactica",components:{Actividad:w},data:()=>({cuestionario:{tema:"Manejo agroecológico de plagas y enfermedades.",titulo:"Cuestionario",introduccion:"Lea la pregunta de cada ítem y seleccione la respuesta correcta.",barajarPreguntas:!1,preguntas:[{id:1,texto:"<b>¿Qué es el manejo agroecológico de plagas y enfermedades?</b>",imagen:a("779c"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Control de plagas mediante productos químicos.",esCorrecta:!1},{id:"b",texto:"Enfoque agrícola basado en principios ecológicos.",esCorrecta:!0},{id:"c",texto:"Uso exclusivo de métodos biológicos.",esCorrecta:!1},{id:"d",texto:"Aplicación de pesticidas.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"<b>¿Cuál de las siguientes es una práctica sostenible en el manejo agroecológico?</b>",imagen:a("1a1c"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Uso de pesticidas sintéticos.",esCorrecta:!1},{id:"b",texto:"Rotación de cultivos.",esCorrecta:!0},{id:"c",texto:"Monocultivo intensivo.",esCorrecta:!1},{id:"d",texto:"Riego por inundación.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"<b>¿Qué agente causante puede ser controlado en el manejo agroecológico de enfermedades?</b>",imagen:a("cae9"),opciones:[{id:"a",texto:"Insectos beneficiosos.",esCorrecta:!1},{id:"b",texto:"Hongos, bacterias y virus.",esCorrecta:!0},{id:"c",texto:"Contaminantes químicos.",esCorrecta:!1},{id:"d",texto:"Malezas.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"<b>¿Cuál es un método de control de plagas en el manejo integrado?</b>",imagen:a("0697"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Aplicación de herbicidas.",esCorrecta:!1},{id:"b",texto:"Métodos mecánicos.",esCorrecta:!0},{id:"c",texto:"Uso de fertilizantes químicos.",esCorrecta:!1},{id:"d",texto:"Irradiación de cultivos.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"<b>¿Qué práctica no es parte del manejo agroecológico de suelos?</b>",imagen:a("779c"),opciones:[{id:"a",texto:"Uso de fertilizantes sintéticos.",esCorrecta:!0},{id:"b",texto:"Conservación de organismos y microorganismos.",esCorrecta:!1},{id:"c",texto:"Labranza mínima o cero.",esCorrecta:!1},{id:"d",texto:"Coberturas (muertas y vivas).",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"<b>¿Cuál es un ejemplo de un bioinsumo utilizado en prácticas sostenibles?</b>",imagen:a("1a1c"),opciones:[{id:"a",texto:"Caldo de ceniza.",esCorrecta:!0},{id:"b",texto:"Fertilizantes sintéticos.",esCorrecta:!1},{id:"c",texto:"Pesticidas comerciales.",esCorrecta:!1},{id:"d",texto:"Hormonas de crecimiento.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"<b>¿Qué tipo de arvense se menciona en el manejo de arvenses?</b>",imagen:a("cae9"),opciones:[{id:"a",texto:"Agresivas <em>vs</em> nobles.",esCorrecta:!0},{id:"b",texto:"Comestibles",esCorrecta:!1},{id:"c",texto:"Medicinales.",esCorrecta:!1},{id:"d",texto:"Ornamentales.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"<b>¿Cuál es una categoría de plagas mencionada en el manejo integrado?</b>",imagen:a("0697"),opciones:[{id:"a",texto:"Plagas urbanas.",esCorrecta:!1},{id:"b",texto:"Plagas mecánicas.",esCorrecta:!0},{id:"c",texto:"Plagas acuáticas.",esCorrecta:!1},{id:"d",texto:"Plagas aéreas.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"<b>¿Qué técnica se utiliza para la prevención de enfermedades en el manejo agroecológico?</b>",imagen:a("779c"),opciones:[{id:"a",texto:"Uso de insecticidas.",esCorrecta:!1},{id:"b",texto:"Rotación de cultivos.",esCorrecta:!0},{id:"c",texto:"Irrigación constante.",esCorrecta:!1},{id:"d",texto:"Cultivo en invernaderos.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"<b>¿Qué beneficio se obtiene de la fertilización agroecológica?</b>",imagen:a("1a1c"),opciones:[{id:"a",texto:"Disminución de la biodiversidad.",esCorrecta:!1},{id:"b",texto:"Mejora de la estructura del suelo.",esCorrecta:!0},{id:"c",texto:"Aumento de residuos químicos.",esCorrecta:!1},{id:"d",texto:"Reducción de la actividad biológica del suelo.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Se evidencia un buen manejo de los conceptos estudiados en esta unidad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},H=I,P=Object(l["a"])(H,s,o,!1,null,null,null);t["default"]=P.exports},"4cb3":function(e,t,a){},"4d40":function(e,t,a){"use strict";a("27ba")},"779c":function(e,t,a){e.exports=a.p+"img/Grupo 1108115.4824c309.png"},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},c2dc:function(e,t,a){"use strict";a("f4e0")},c8a9:function(e,t,a){"use strict";a("e54f")},cae9:function(e,t,a){e.exports=a.p+"img/Grupo 1108117.3ba0887a.png"},e54f:function(e,t,a){},f4e0:function(e,t,a){}}]);
//# sourceMappingURL=actividad.08029a6c.js.map