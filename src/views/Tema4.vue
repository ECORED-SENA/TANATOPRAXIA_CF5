<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Laboratorio de tanatopraxia

    .row.justify-content-center.mb-2
      .col-lg-8.mb-4
        p.mb-4 Es el lugar más sagrado de la funeraria, porque allí se dan los últimos cuidados físicos de las personas fallecidas que las familias han puesto en su custodia. Este espacio arquitectónico está dotado con equipos, instalaciones e insumos especializados para iniciar y finalizar un proceso de preservación del cuerpo de un fallecido.
        .cajon.color-secundario.p-4.mb-0
          p.mb-0 El 
            b laboratorio de tanatopraxia es un área restringida de la funeraria, 
            b-none  solo está permitido el acceso a este espacio arquitectónico al personal autorizado y avalado, según lineamientos técnicos y sanitarios, es decir, el laboratorio, también llamado sala de embalsamamiento, 
            b está amueblado con equipos especializados, que están sujetos a verificación y uso de los tanatopráctores y personal autorizado de la funeraria.
      .col-lg-4.mb-4.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/tema4/img1.jpg', alt='Laboratorio de tanatopraxia', style='width:380px')
      

    p.mb-4 Ahora, con lo mencionado hasta el momento, es importante que, como aprendiz, continúe con la lectura de este componente, para la identificación de los implementos necesarios que en cualquier momento utilizará en una sesión de tanatopraxia o tanatoestética. Adelante con su exploración y aprendizaje.


    #t_4_1.titulo-segundo
      h2 4.1 Insumos y elementos usados en tanatopraxia y tanatoestética
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-center
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/img2.svg', alt='imagen ambiental', style='width:335px;').mx-auto
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-4 Los insumos que se usan en 
              b tanatopraxia 
              b-none son, en su mayoría, fabricados en acero y enchapados en níquel o cromo, para protegerlos de la oxidación y agentes químicos. Están hechos para resistir el calor y tienen una larga vida útil.  Se recomienda que observe el siguiente recurso educativo para que identifique las 
              b características de los insumos y elementos en el momento de una sesión de tanatopraxia o tanatoestética.
            .llamado-pdf
              .row.justify-content-end
                .col-lg-10
                  a.anexo.mb-4(:href="obtenerLink('/downloads/insumosyelementos.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p.mb-0 
                        b.color-texto Anexo. 
                        b-none.color-texto Insumos y elementos usados en tanatopraxia y tanatoestética.

    separador
    #t_4_2.titulo-segundo.mb-2
      h2 4.2 Suministros químicos para embalsamar
    

    .row.justify-content-center.fondo-custom4
      .col-lg-12.px-md-5.mt-5
        .row.justify-content-center.mb-4
          .col-lg-12
            p.mb-4 La mayoría de los químicos se basan en el formaldehído como materia prima principal. Tradicionalmente, se ha utilizado el formol como preservante, ya sea puro, mezclado con agua o mezclado con agua y otros químicos. De cualquier manera, al utilizar los químicos preservantes, se debe seguir algún criterio profesional, nunca se deben utilizar libremente.
            p Ellos se pueden clasificar así: 
        
        .row.justify-content-around.mb-4
          .bg-color2.p-4.mb-4(data-aos="flip-left")
            figure.mb-4
              img(src='@/assets/curso/tema4/icon1.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
            h4.text-center.mb-4 Químicos genéricos
            p.text-center se refiere a la utilización de formol al 37 %, mezclado con H2O, sin la adición de ningún químico.
          
          .bg-color3.p-4.mb-4(data-aos="flip-left")
            figure.mb-4
              img(src='@/assets/curso/tema4/icon2.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
            h4.text-center.mb-4 Fórmulas básicas:
            p.text-center son mezclas especiales de formol, alcohol, glicerina y fenol, que se usan en tanatopraxia.
          
          .bg-color4.p-4.mb-4(data-aos="flip-left")
            figure.mb-4
              img(src='@/assets/curso/tema4/icon3.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
            h4.text-center.mb-4 Químicos profesionales para tanatopraxia
            p.text-center son formulaciones especiales, diseñadas científicamente para cualquier caso especial de tanatopraxia. Estos se clasifican, a su vez, por sus propiedades preservantes y sus contenidos de formol.

        .row.justify-content-center.mb-5
          .col-12
            p En los químicos que se utilizan para la preservación del cuerpo, existen factores relevantes de los químicos especializados. Esto se refiere al índice o índex de la solución, la cual se define como la cantidad de formol por cada 100 cm3 de químico puro. Los índices van de 5 a 50, y la razón de ser de los índices depende de la aplicación y del tratamiento de tanatopraxia. Observe a continuación una clasificación por índices:
    
        .row.justify-content-center.mb-5
          .col-lg-12
            TabsC.color-primario.mb-0
              .py-4.py-md-5(titulo="Químicos de índice bajo")
                .row.justify-content-around.px-2
                  .col-md-5.mb-4.mb-md-0.align-self-center
                    h4 Químicos de índice bajo o no endurecedores (entre 5 y 18)
                    p Estos químicos son apropiados para la preservación de niños y bebés, cuerpos con ictericia o caquéxicos, que no hayan muerto en condiciones infecciosas; éstos no dan rigidez a los tejidos.
                
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img3.jpg', style="width: 420px;" ,alt='Químicos no endurecedores').mx-auto
                      
              .py-4.py-md-5(titulo="Químicos de índice medio")
                .row.justify-content-around.px-2
                  .col-md-5.mb-4.mb-md-0.align-self-center
                    h4 Químicos de índice medio (entre 19 y 27)
                    p Son los químicos promedio para preservaciones convencionales, donde no haya complicaciones mayores; proporcionan firmeza moderada a los tejidos. 
                
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img4.jpg', style="width: 420px;" ,alt='Químicos preservación convencional').mx-auto
                      
              .py-4.py-md-5(titulo="Químicos de índice alto o endurecedores")
                .row.justify-content-around.px-2
                  .col-md-5.mb-4.mb-md-0.align-self-center
                    h4 Químicos de índice alto o endurecedores (entre 29 y 50)
                    p dan mayor firmeza a los tejidos y son los apropiados para casos difíciles o que necesiten condiciones especiales de preservación.
                
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img5.jpg', style="width: 420px;" ,alt='Químicos endurecedores').mx-auto
                      
    
    p.mb-5 De acuerdo con su utilización, los químicos se clasifican como:
    
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4
        figure
          img.imagen-custom3(src='@/assets/curso/tema4/img6.svg', style="" ,alt='Clasificación de Químicos').mx-auto
      .col-lg-7.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Químicos o fluidos arteriales")
            .col-md-12.mb-4.mb-md-0
              p Son químicos preservantes, moderadamente estéticos, que se utilizan única y exclusivamente para ser inyectados arterialmente y se deben inyectar siempre mezclados con agua. Estos tienen propiedades desinfectantes, preservantes; dependiendo de su índice, tienen propiedades reafirmantes y tienen modificación estética, es decir, mejoran la apariencia y el color del fallecido.
              
          .row(numero="2" titulo="Químicos cavitales o de cavidad")
            .col-md-12.mb-4.mb-md-0
              p Son diseñados exclusivamente para el tratamiento de las vísceras corporales, son altamente desinfectantes y preservantes, pero no tienen ningún aditivo estético. Estos se deben aplicar siempre puros, nunca deben mezclarse con agua ni se deben inyectar arterialmente.

          .row(numero="3" titulo="Químicos especiales")
            .col-md-12.mb-4.mb-md-0
              p.mb-3 Son especialmente diseñados para modificar la acción de los químicos arteriales y se clasifican de la siguiente manera:
              ul.lista-ul.mx-sm-4
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Acondicionadores vasculares: lubrican, expanden y suavizan los canales vasculares.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Agentes anticoagulantes: estos ayudan a deshacer los coágulos sanguíneos y las cadenas de calcio en el torrente sanguíneo.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Agentes modificadores de humedad: son químicos que ayudan tanto a aumentar como a disminuir la humedad de los tejidos cuando las condiciones lo ameriten. Ejemplo: químicos para aumentar cuerpos deshidratados y emaciados.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Químicos blanqueadores: estos ayudan a remover coloraciones y manchas temporales.
            
          .row(numero="4" titulo="Químicos para casos especiales")
            .col-md-12.mb-4.mb-md-0
              p son químicos que vienen presentados en polvos y en gel para la aplicación directa en los tejidos, en zonas donde no hay circulación sanguínea. Estos se utilizan especialmente para el tratamiento de gangrenas, úlceras, llagas y puntos de mutilación.

    .row.justify-content-center.mb-4
      .col-lg-12
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img(style="min-width:105px;")
            img.mx-auto(src='@/assets/curso/tema4/icon4.svg' alt='AvatarTop' style='width:105px;')
          .tarjeta.tarjeta-white--color-red
            .p-4.py-5
              p.mb-0 Finalmente, los químicos tienen una composición básica para las arterias y cavitales. Se recomienda leer con atención la siguiente información, que es fundamental para el contexto laboral en el sector funerario.
    
    .row.justify-content-center.fondo-custom5
      .col-lg-12.px-md-5.mt-5
        .row.justify-content-center.mb-4
          .col-lg-12
            h4.mb-4 Químicos arteriales
            p.mb-0 Agente preservante, formol, glutaraldehído, dialdehído y acetil aldehído. Este es el químico encargado de la preservación. A continuación, se presentan algunos, según su intención.
        
        .row.justify-content-center.mb-4
          .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
            .tarjeta.tarjeta-container2.tarjeta-oscura
              .tarjetaContent2
                .tarjetaImg2
                  figure.mb-3
                    img(src="@/assets/curso/tema3/num1.svg", alt="icono-Numero", style="width:86px;").m-auto
                  p.mb-0 #[strong Agente desinfectante: formol ]
                .tarjetaTxt2
                  figure.mb-3
                    img(src="@/assets/curso/tema4/img7.jpg", alt="imagen ambiental", style="width:238px;").m-auto
                  .px-3
                    .bg-num1
                      p.mb-2 #[strong Agente desinfectante: formol ]
                      p.mb-0 No es el mejor desinfectante y necesita ser reforzado, metanol, alcohol isopropílico, alcohol industrial.
                    
          .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
            .tarjeta.tarjeta-container2.tarjeta-verde
              .tarjetaContent2
                .tarjetaImg2
                  figure.mb-3
                    img(src="@/assets/curso/tema3/num2.svg", alt="icono-Numero", style="width:86px;").m-auto
                  p.mb-0 #[strong Agentes desinfectantes secundarios ]
                .tarjetaTxt3
                  figure.mb-3
                    img(src="@/assets/curso/tema4/img8.jpg", alt="imagen ambiental", style="width:238px;").m-auto
                  .px-3
                    .bg-num2
                      p.mb-2 #[strong Agentes desinfectantes secundarios ]
                      p.mb-0 Se utilizan para la eliminación de hongos y de flora bacteriana tardía. Son: amonios cuaternarios, paradicloro benceno y cloruro benzalconio.
                      
          .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
            .tarjeta.tarjeta-container2.tarjeta-oscura
              .tarjetaContent2
                .tarjetaImg2
                  figure.mb-3
                    img(src="@/assets/curso/tema3/num3.svg", alt="icono-Numero", style="width:86px;").m-auto
                  p.mb-0 #[strong  ]
                .tarjetaTxt2
                  figure.mb-3
                    img(src="@/assets/curso/tema4/img9.jpg", alt="imagen ambiental", style="width:238px;").m-auto
                  .px-3
                    .bg-num3
                      p.mb-2 #[strong  ]
                      p.mb-0 Es el químico que facilita el movimiento de los químicos en el sistema circulatorio. Son: alcohol etílico y agua destilada.
                    
          .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
            .tarjeta.tarjeta-container2.tarjeta-verde
              .tarjetaContent2
                .tarjetaImg2
                  figure.mb-3
                    img(src="@/assets/curso/tema3/num4.svg", alt="icono-Numero", style="width:86px;").m-auto
                  p.mb-0 #[strong Agentes surfactantes ]
                .tarjetaTxt3
                  figure.mb-3
                    img(src="@/assets/curso/tema4/img10.jpg", alt="imagen ambiental", style="width:238px;").m-auto
                  .px-3
                    .bg-num4
                      p.mb-2 #[strong Agentes surfactantes ]
                      p.mb-0 Son químicos encargados de reducir la presión de superficie de la solución, para que fluyan más fácilmente en el sistema circulatorio. Son: oxalato de potasio y calcio.
          
          .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
            .tarjeta.tarjeta-container2.tarjeta-oscura
              .tarjetaContent2
                .tarjetaImg2
                  figure.mb-3
                    img(src="@/assets/curso/tema3/num5.svg", alt="icono-Numero", style="width:86px;").m-auto
                  p.mb-0 #[strong Colorantes ]
                .tarjetaTxt2
                  figure.mb-3
                    img(src="@/assets/curso/tema4/img11.jpg", alt="imagen ambiental", style="width:238px;").m-auto
                  .px-3
                    .bg-num5
                      p.mb-2 #[strong Colorantes ]
                      p.mb-0 En los fluidos arteriales, son de 2 tipos: 1. Activos, tiñen los tejidos para darle más naturalidad al fallecido e identificar qué zonas del cuerpo están siendo inyectadas; y 2. Los inactivos, que solamente dan color al químico para modificarlo.
                    
        //.row.justify-content-center.mb-4
          .col-12
            figure.mb-5
              img(src="@/assets/curso/tema4/img12.png", alt="Químicos cavitales", style="").m-auto
        .row.justify-content-around.img-fondo2.mb-5(style="border-radius: 8px;")
          .col-md-3.col-sm-1
            //vacio
          .col-lg-7.py-5.my-5
            .row.justify-content-center
              .col-auto.align-self-center
                figure
                  img(src='@/assets/curso/tema4/img28.svg', alt='imagen ambiental', style='width: 90px;')
              .col
                h4.mb-2 Químicos cavitales 
                p.mb-0 Están 
                  b(style="color: #008F85;") compuestos básicamente 
                  b-none de 
                  b preservantes, desinfectantes, algún agente deshidratante y un colorante inactivo diferente a los arteriales.



    separador
    #t_4_3.titulo-segundo
      h2 4.3 Instalaciones físicas del laboratorio de tanatopraxia
    
    .row.justify-content-center.fondo-custom6
      .col-lg-12.px-md-5.mt-5

        .row.justify-content-center.mb-2
          .col-lg-8.mb-4
            p.mb-4 El propósito del 
              b laboratorio de tanatopraxia 
              b-nonw es proporcionar al trabajador un espacio, equipos y elementos necesarios para realizar un eficiente proceso de tanatopraxia y tanatoestética, según las condiciones de la persona fallecida, 
              b ofreciendo un entorno de trabajo limpio, seguro y cómodo para el embalsamador.
            .cajon.color-secundario.p-4.mb-0
              p.mb-0
                b La sala de preparación deberá estar adecuadamente equipada, 
                b-none mantenerse sanitizada; solo podrá contener los artículos, instalaciones e instrumentos necesarios para los procedimientos de embalsamamiento. 
                b Su principal generalidad es que siempre debe ser una zona privada, 
                b-none para salvaguardar la dignidad del fallecido, y con altas normas de moralidad, dentro de un espacio físico limpio y saludable.
          .col-lg-4.mb-4
            figure
              img.imagen-custom1(src="@/assets/curso/tema4/img13.svg", alt="laboratorio de tanatopraxia", style="").m-auto

        p.mb-5 Los requisitos mínimos con los cuales debe contar un laboratorio de tanatopraxia son: 
        .row.justify-content-center.mb-4
          .col-lg-4.mb-3
            figure
              img.imagen-custom1(src="@/assets/curso/tema4/img14.jpg", alt="Requisitos laboratorio", style="").m-auto
          .col-lg-8.mb-3
            ul.lista-ul
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Piso de vinilo o epoxi.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Los instrumentos e insumos de esta sala deberán ser limpiados y desinfectados de manera exhaustiva después de cada procedimiento.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Suministro de agua potable.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Extractor y ducto de ventilación, idealmente con 15 recambios de aire por hora.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Instalación sanitaria conectada al sistema aprobado por el ministerio.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Mesa de trabajo, idealmente en acero inoxidable.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Contar con hidroaspiradores.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Zona destinada para el manejo de residuos hospitalarios y similares.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Equipo de primeros auxilios.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Ducha para ojos.
              
        .row.justify-content-center.mb-4
          .col-lg-12
            p.mb-4
              b Se debe tener en cuenta su ubicación dentro de la funeraria y debe contar con un acceso fácil desde el garaje u otras entradas. 
              b-none La primera elección de ubicación sería la primera planta física de la empresa funeraria. 
              b Se debe contar con un espacio correctamente iluminado, 
              b-none ya sea por iluminación natural o artificial, sobre cada mesa de preparación, 
              b para controlar así el riesgo físico laboral.
              
            .cajon.color-secundario.p-4.mb-2
              p.mb-0 Una correcta ventilación es extremadamente necesaria. 
                b  No hay nada más perjudicial para la salud que la acumulación de olores químicos y/o corporales 
                b-none  en una habitación mal ventilada; por ello 
                b se recomienda que el laboratorio de tanatopraxia cuente con 12 a 20 intercambios de aire por hora, 
                b-none para así ayudar a 
                b controlar el riesgo químico laboral por inhalación  de sustancias químicas,
                b-none  entre ellas el formaldehído, que pueden llegar a generar una irritación de la membrana mucosa en las vías respiratorias y los ojos si se superan concentraciones de 0.25 y 1.39 ppm (partes por millón).
              
        .row.justify-content-center.mb-4
          .col-lg-12
            separador
            #t_4_4.titulo-segundo
              h2 4.4 Equipos en el laboratorio de tanatopraxia
            .row.justify-content-center
              .col-lg-8.mb-2
                .cajon.color-secundario.p-4.mb-4
                  p.mb-0 En el contexto de la tanatopraxia, los equipos son insumos y herramientas importantes para el desarrollo del proceso de embalsamamiento. Cada equipo que se adquiera en una organización del sector funerario facilita el tratamiento del cuerpo fallecido bajo unos lineamientos sanitarios y según la orden de servicio.
                p.mb-0 A continuación, se recomienda revisar el siguiente recurso educativo para la identificación de elementos que se pueden utilizar, según las intenciones o directrices del proceso de tanatopraxia.
              .col-lg-4.mb-2.align-self-center
                figure
                  img.imagen-custom3(src="@/assets/curso/tema4/img15.jpg", alt="Equipos y elementos", style="").m-auto
          

    .row.justify-content-center.mb-2
      .col-lg-5.mb-4
        figure
          img.imagen-custom3(src="@/assets/curso/tema4/img16.svg", alt="Equipos de tanatopraxia", style="").m-auto
      .col-lg-7.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Aspirador eléctrico")
            .col.mb-4.mb-md-0.align-self-center
              p Es un instrumento que ayuda a realizar la succión de líquidos o semisólidos en el cadáver. 
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img17.png', alt='imagen de Aspirador eléctrico ', style='width: 200px;')
          .row(numero="2" titulo="Elevadores de cadáveres (grúa)")
            .col.mb-4.mb-md-0.align-self-center
              p Estos dispositivos son fundamentales en la labor del tanatopráctor, ya que ayudan a eliminar los riesgos laborales por cargas pesadas, pues ayudan a realizar el movimiento del difunto desde la camilla hacia el ataúd u otro lugar. 
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img18.png', alt='imagen de Elevador de cadáveres', style='width: 200px;')
        
          .row(numero="3" titulo="Gabinete")
            .col.mb-4.mb-md-0.align-self-center
              p Son espacios de almacenamiento dentro del laboratorio, en los cuales se pueden organizar todos los elementos e instrumentos necesarios para el proceso de embalsamamiento y tanatoestética.
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img19.png', alt='imagen de Gabinete', style='width: 200px;')
        
          .row(numero="4" titulo="Instrumentos de inyección")
            .col.mb-4.mb-md-0.align-self-center
              p Generalmente, se usan máquinas eléctricas de inyección, pero, en algunas ocasiones, se deberá hacer uso de métodos más antiguos, como la inyección por gravedad. En esta, la solución arterial se vierte en un percolador de vidrio que tiene conectada una manguera de suministro en su base. Luego, este dispositivo se eleva sobre el cuerpo y la solución fluye hacia el sistema arterial. A 71 cm de altura, se genera 1 libra de presión de inyección, ofreciendo un método lento y estable de inyección; esto favorece la retención de la solución arterial en los tejidos del cuerpo. 
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img20.png', alt='imagen de Instrumentos de inyección', style='width: 200px;')
        
          .row(numero="5" titulo="Bomba manual")
            .col.mb-4.mb-md-0.align-self-center
              p Método histórico, es una bomba con dos conectores para las mangueras, un conector suministra aire para generar presión y el otro genera un vacío. Así, la solución arterial puede fluir por la manguera que está conectada a una cánula arterial para llegar al cuerpo.
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img21.png', alt='imagen de Bomba manual', style='width: 200px;')
        
          .row(numero="6" titulo="Máquinas eléctricas de inyección arterial")
            .col-lg-12
              .row.mb-4
                .col.mb-4.mb-md-0.align-self-center
                  p Es una máquina eléctrica con una bomba centrífuga con la cual es posible mantener una presión preestablecida constante, además de la velocidad de flujo preestablecida de solución arterial al cuerpo. Se recomienda ajustar la presión antes de realizar la inyección arterial. La velocidad del flujo se puede determinar al inicio del proceso. Para realizar el uso adecuado de esta máquina, se deben conocer los conceptos de:
                .col-auto.align-self-center
                  figure
                    img(src='@/assets/curso/tema4/img22.png', alt='imagen de Máquina eléctrica de inyección arterial', style='width: 200px;')
              .row.mb-4
                .col-lg-11
                  ul.lista-ul
                    li 
                      i.fas.fa-biohazard(style="color: #D93328;")
                      p.mb-0 #[strong Presión:] se define como la fuerza necesaria para distribuir la solución arterial por todo el cuerpo.
                    li 
                      i.fas.fa-biohazard(style="color: #D93328;")
                      p.mb-0 #[strong Presión potencial:] es la lectura de presión en el medidor de la máquina de inyección, que indica la presión con la válvula de velocidad de flujo cerrada.
                    li 
                      i.fas.fa-biohazard(style="color: #D93328;")
                      p.mb-0 #[strong Presión diferencial:] es la diferencia entre la lectura de la presión potencial y la real.
                    li 
                      i.fas.fa-biohazard(style="color: #D93328;")
                      p.mb-0 #[strong Presión real:] es la lectura del medidor de presión en la máquina inyectora cuando la válvula de velocidad de flujo está abierta y la solución arterial está fluyendo con el cuerpo.
                    li 
                      i.fas.fa-biohazard(style="color: #D93328;")
                      p.mb-0 #[strong Velocidad de flujo:] es la cantidad de solución arterial que ingresa al cuerpo en un periodo determinado.

        
          .row(numero="7" titulo="Aspirador nasal")
            .col.mb-4.mb-md-0.align-self-center
              p El aspirador con tubo nasal está diseñado para ser insertado en una de las fosas nasales o la garganta para realizar la aspiración de estas estructuras anatómicas.
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img23.png', alt='imagen de Aspirador nasal', style='width: 200px;')
        
          .row(numero="8" titulo="Hidroaspirador con trocar")
            .col.mb-4.mb-md-0.align-self-center
              p Es un dispositivo de aspiración que crea un vacío cuando fluye agua por el mecanismo y, al estar conectado al trocar, facilita la aspiración de los líquidos y semisólidos de la cavidad abdominal y torácica.
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img24.png', alt='imagen de Hidroaspirador con trocar', style='width: 200px;')
        
          .row(numero="9" titulo="Mesas")
            .col-auto.mb-4.mb-md-0
              p Existen muchos tipos de mesas que podrán usarse dependiendo del tamaño y forma del laboratorio de tanatopraxia. Se recomienda que estas sean en acero inoxidable, pueden tener mecanismos de elevación, descenso o inclinación. 
            .col-lg-12.mb-4.mb-md-0
              .row.justify-content-center
                .col-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema4/img25.png', alt='imagen de mesa de preparación con placas removibles y pozuelo', style='width: 178px;')
                .col-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema4/img26.png', alt='imagen de mesa hidraúlica de tijera', style='width: 178px;')
                .col-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema4/img27.png', alt='imagen de mesa instrumental', style='width: 178px;')
        
    //figure.mb-4
      img(src='@/assets/curso/tema4/img28.png', alt='', style='width:1200px')
    
    .row.justify-content-around.img-fondo.mb-5(style="border-radius: 8px;")
      .col-lg-7.py-5.my-5
        .row.justify-content-center
          .col-auto.align-self-center
            figure
              img(src='@/assets/curso/tema4/img28.svg', alt='imagen ambiental', style='width: 90px;')
          .col
            p.mb-0 Se hace necesario 
              b(style="color: #008F85;") recordar 
              b-none que 
              b la tanatopraxia es un proceso antiguo, 
              b-none que se remonta al tiempo antes de Cristo, y 
              b con el paso del tiempo se ha actualizado a partir de prácticas como:
      .col-md-3.col-sm-1
        //vacio

    .row.justify-content-around.mb-4
      .bg-color2.p-4.mb-4(data-aos="flip-right")
        figure.mb-4
          img(src='@/assets/curso/tema4/number1.svg', style="width: 110px;" ,alt='icono que acompaña').mx-auto
        p.text-center Reducción de uso de productos químicos tóxicos.
      
      .bg-color3.p-4.mb-4(data-aos="flip-right")
        figure.mb-4
          img(src='@/assets/curso/tema4/number2.svg', style="width: 110px;" ,alt='icono que acompaña').mx-auto
        p.text-center Diseño de espacios especializados para la realización de procesos que cuiden el cuerpo, según la condición de la muerte. 
      
      .bg-color4.p-4.mb-4(data-aos="flip-right")
        figure.mb-4
          img(src='@/assets/curso/tema4/number3.svg', style="width: 110px;" ,alt='icono que acompaña').mx-auto
        p.text-center Preservación de un cuerpo fallecido para la realización de un ritual, según el contexto y las creencias de los seres vivos que rodean la situación.
      

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 En conclusión, la tanatopraxia, como práctica humana, puede seguir evolucionando y adquiriendo nuevos procesos según los procesos culturales y tecnológicos de las sociedades.

    
    
    
    
    
    
    
    

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
