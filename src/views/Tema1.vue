<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Introducción a la tanatopraxia
  
    .row.justify-content-center.mb-4
      .col-auto.align-self-center
        figure.mb-lg-0.mb-4
          img.mx-auto(src='@/assets/curso/tema1/img1.jpg', alt='Proceso de embalsamamiento', style='width:420px;')
      .col
        p.mb-4
          b El embalsamamiento es un proceso que se ha practicado en todo el mundo, 
          b-none usando diferentes formas y métodos a lo largo de gran parte de la historia, considerándose una de las artes de mayor antigüedad practicada por los hombres.
          b  En todas las culturas del mundo se preocupan por el cuidado de sus fallecidos, 
          b-none implementando sus propios rituales de despedida, los cuales van acompañados de música, arte, danza y literatura.
        .cajon.color-secundario.p-4
          p.mb-0 
            b A continuación, se realizará una aproximación a algunos eventos históricos abordados por Mayer (2006) 
            b-none e interpretados en el presente componente formativo. Se recomienda leer atentamente la información donde se pueden identificar las prácticas de algunas culturas en relación con el deceso de los cuerpos. 
            b ¡Adelante! 

    .row.mb-1
      .col-lg-12.p-3.mb-3(style='background-color: #1D272B; border-radius: 10px;')
        h3.text-center.text-white.mb-0  La tanatopraxia como práctica cultural se puede clasificar históricamente en tres periodos:
      
    .row.justify-content-around.mb-4
      .bg-color2.p-4.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/icon1.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
        h4.text-center.mb-4 Periodo uno
        p.text-center Surge en Egipto, durante la primera dinastía, alrededor del año 3.000 A.C.
      
      .bg-color3.p-4.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/icon2.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
        h4.text-center.mb-4 Periodo dos
        p.text-center Este se extiende entre los años 650 y 1861 D.C., en Europa, y se conoce como el periodo de los anatomistas. 
      
      .bg-color4.p-4.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/icon3.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
        h4.text-center.mb-4 Periodo tres
        p.text-center Llamado tiempo moderno, se extiende desde 1861 hasta el día de hoy. 
      
    
    p.mb-5 Profundicemos en el estudio de cada uno de estos periodos.
    h4.mb-4 Periodo uno
    .row.justify-content-center.mb-4
      .col-lg-7
        p.mb-4 Durante el periodo uno o antiguo, el proceso de embalsamamiento era practicado por diferentes grupos poblacionales o étnicos alrededor del mundo y sus procesos dependían principalmente de sus creencias religiosas.
        p A este periodo pertenecieron los:
      .col-lg-5
        figure
          img.mx-auto(src='@/assets/curso/tema1/img3.svg', alt='imagen ambietal', style='width:466px;')

    .row.justify-content-center.mb-4
      .col-auto.mb-4.p-lg-2.p-xl-1
        figure
          img.imagen-custom2.mx-auto(src='@/assets/curso/tema1/img4.svg', alt='egipcios', style='')
      .col-auto.mb-4.p-lg-2.p-xl-1
        figure
          img.imagen-custom2.mx-auto(src='@/assets/curso/tema1/img5.svg', alt='Persas, Sirios-Babilonios', style='')
      .col-auto.mb-4.p-lg-2.p-xl-1
        figure
          img.imagen-custom2.mx-auto(src='@/assets/curso/tema1/img6.svg', alt='Etíopes', style='')
      .col-auto.mb-4.p-lg-2.p-xl-1
        figure
          img.imagen-custom2.mx-auto(src='@/assets/curso/tema1/img7.svg', alt='Canarias', style='')
      .col-auto.mb-4.p-lg-2.p-xl-1
        figure
          img.imagen-custom2.mx-auto(src='@/assets/curso/tema1/img8.svg', alt='Judios', style='')


    p.mb-5 Conozcamos más sobre cada uno de ellos.

    .tarjeta.color-secundario.p-4.p-md-5(style='background: linear-gradient(180deg,#f5f5f5,#f5f5f5)')
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema1/img9.svg")
        .col-md.col-lg-6
          .titulo-segundo
            h2 Egipcios
          p.mb-4 El embalsamamiento en Egipto surge como una necesidad  y requisito religioso para preservar los cuerpos humanos para la resurrección.  A continuación conoce cómo se realizaba el proceso de embalsamiento en Egipto. 
          
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/infografia_egipcios.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .row.justify-content-center.fondo-custom1
      .col-lg-12.mt-5.px-md-5

        .row.justify-content-center.mb-4
          .col-lg-7
            h4.mb-4 Persas
            p.mb-5 Estas poblaciones algunas veces sumergían a sus difuntos en miel o cera.
            h4.mb-4 Etíopes
            p.mb-2 El proceso de embalsamamiento era similar al realizado por los egipcios. Los contornos del cuerpo eran rellenados con yeso, se pintaban de forma semejante al color de piel del difunto y, por último, se aplicaba una capa de resina.
          .col-lg-5
            figure.mb-2
              img.mx-auto(src='@/assets/curso/tema1/img10.svg', alt='Prodecos de embalsamiento', style='width: 450px;')
        
        .row.justify-content-center.mb-4
          .col-lg-12
            h4.mb-4 Canarias
            p.mb-4 En las Islas Canarias, los embalsamadores eran que cuidaban exclusivamente de su propio sexo. El proceso de embalsamamiento consistía en:
        
        .row.justify-content-center.mb-5
          .col-lg-5
            figure.mb-2
              img.mx-auto(src='@/assets/curso/tema1/img11.svg', alt='imagen ambiental', style='width: 330px;')
          .col-lg-7.align-self-center
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/icon4.svg' alt='AvatarTop')
              .tarjeta.bg-line1(style='background-color:#fff; align-self: center;')
                .p-4
                  p.mb-0 Abrir la cavidad corporal y extraer los intestinos.
            
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/icon5.svg' alt='AvatarTop')
              .tarjeta.bg-line2(style='background-color:#fff; align-self: center;')
                .p-4
                  p.mb-0 Realizar el lavado minucioso del interior del cuerpo, salar el cuerpo por dentro y por fuera, y devolver los intestinos con hierbas y plantas aromáticas.
            
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/icon6.svg' alt='AvatarTop')
              .tarjeta.bg-line3(style='background-color:#fff; align-self: center;')
                .p-4
                  p.mb-0 El exterior del cuerpo se cubría con una resina de mantequilla, maleza y piedra pómez, y se dejaba secar al sol o se usaba un horno para secarlo.
        .row.mb-5
          .col-lg-12
            .cajon.color-secundario.p-4.mb-5
              p.mb-4
                b Este proceso tomaba aproximadamente 15 días, 
                b-none momento en el que la familia reclamaba el cuerpo, lo cosían en una piel de cabra y 
                b lo trasladaban a las amplias cuevas que se encuentran en la isla. 
              .row.justify-content-center
                .col-lg-10
                  .tarjeta-avatar-b.mb-2
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/tema1/icon7.svg' alt='AvatarTop')
                    .tarjeta.bg-line4(style='background-color:#fff; align-self: center;')
                      .p-4
                        p.mb-4 Los individuos más importantes tenían ataúdes elaborados, que se construían durante el tiempo del embalsamamiento.
                        p Si el cuerpo se dejaba secar, el embalsamador hacía guardia para evitar que los pájaros y animales depredadores lo contaminasen. 

        
        .row.justify-content-center.mb-5
          .col-lg-12
            h4.mb-4 Judios
          .col-lg-12
            .row.justify-content-around
              .bg-color2.p-4.mb-4(data-aos="fade-left")
                figure.mb-4
                  img(src='@/assets/curso/tema1/icon8.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
                p.text-center No realizaban embalsamamiento como tal, realizaban un tratamiento del cadáver que consistía en poner el cadáver en el suelo para lavarlo y envolverlo en sabanas.
              
              .bg-color3.p-4.mb-4(data-aos="fade-left")
                figure.mb-4
                  img(src='@/assets/curso/tema1/icon9.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
                p.text-center Cerca al cadáver, se  ponían hierbas y especias para ocultar el olor de la descomposición.
              
              .bg-color4.p-4.mb-4(data-aos="fade-left")
                figure.mb-4
                  img(src='@/assets/curso/tema1/icon10.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
                p.text-center Los pies siempre debían ubicarse mirando hacia la puerta. Durante todo el proceso tenían una vela encendida.
              
    h4.mb-4 Periodo dos
    p.mb-5 La siguiente infografía presenta cómo se realizaba la preservación de cadáveres en el periodo dos.

    .row.justify-content-center.fondo-custom2.mb-4
      .col-lg-11.px-md-5
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop' style='width: 73px;')
                .tarjeta
                  .p-4
                    p.mb-0 En el periodo de los anatomistas, el objetivo de la preservación de los cadáveres era permitir la disección y el estudio anatómico detallado.
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta
                  .p-4.text-start
                    p.mb-0 El maestro y practicante Claudio Galeno, 130-200 D.C, en su libro, realizó la descripción anatómica humana a partir de las disecciones realizadas a los cerdos y los monos.
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop' style='width: 90px;')
                  
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop' style='width: 95px;')
                .tarjeta
                  .p-4
                    p.mb-0 El libro de Galeno fue una guía en el siglo XIV para la realización de las primeras disecciones en humanos, realizadas a los criminales ejecutados en Bolonia, Italia.
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta
                  .p-4.text-start
                    p.mb-0 Cuando el profesor de anatomía  leía el texto de Galeno, señalaba las estructuras anatómicas del cuerpo  y un asistente realizaba la disección real a medida que iba avanzando el relato.
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop' style='width: 85px;')
                  
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop' style='width: 88px;')
                .tarjeta
                  .p-4
                    p.mb-0 A finales del siglo XVII, el desarrollo e implementación de la inyección arterial demostró ser el método más eficaz para preparar el cuerpo.
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta
                  .p-4.text-start
                    p.mb-4 En este periodo, seguía existiendo cierta preocupación por las vísceras del tronco. Se preguntaban si estas debían ser removidas y conservadas por separado.
                    p.mb-0 La solución fue la inmersión de los órganos en un conservante en polvo o líquido, puesto en la cavidad después de la sustitución de los órganos.
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop' style='width: 70px;')
                
          .row
            .col-md-12.mb-4.mb-md-0
              .tarjeta-avatar-b.mb-0
                .tarjeta
                  .p-4.text-start
                    p.mb-0 Otro método consistía en mantener el tronco intacto y tratarlo con la misma solución conservante, introducida directamente en la cavidad del tronco, así como mediante la inmersión del cuerpo en la solución.
                .tarjeta-avatar-b__img(style='')
                  img.mx-auto(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop' style='width: 70px;')
                
      .col-lg-12.px-md-5
        h4.mb-4 Periodo tres
        p.mb-5 Este periodo se caracterizó porque la preservación del cuerpo fue  con fines funerarios. El precursor de este periodo fue el Dr. Thomas Holmes, conocido como el padre de la tanatopraxia moderna.
        
        .bloque-texto-a.reverse.color-secundario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-9.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p.mb-4 Durante su desempeño como médico en Estados Unidos, desarrolló investigaciones y aplicación de químicos con el fin de realizar un embalsamamiento.
                p.mb-2 Holmes preparó 4000 cuerpos y patentó muchos inventos relacionados con embalsamamiento, como lo fue la bolsa para cadáveres de tela revestida de caucho. 
            .col-lg-3.mb-4.mb-lg-0.align-self-center
              figure
                img.mx-auto(src='@/assets/curso/tema1/img19.svg', alt='imagen ambiental', style='width:176px;')
        
        p.mb-4 Los principales exponentes del periodo moderno fueron: 
        .row.justify-content-center.mb-4
          .col-lg-5.mb-4
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img20.png', alt='Exponentes del periodo moderno', style='')
          .col-lg-7.mb-4.align-self-center
            LineaTiempoD.color-primario
              p.text-medium(numero="1" titulo="Joseph Henry Clark") Nació en indiana en 1840, inicialmente trabajó como vendedor de ataúdes y posteriormente inició como vendedor de líquidos de embalsamamiento. Durante las demostraciones, se dio cuenta del interés que esto generaba, por lo cual decide estudiar anatomía para aprender cómo los líquidos actuaban en el cuerpo humano y conocer así sus efectos. 
              p.text-medium(numero="2" titulo="Los hermanos Dodge, George y A.J Dodge") Se convierten en embalsamadores cuando deciden  ir a Boston. Los seminarios de Dodge pronto se convirtieron en partes importantes de la educación de muchos directores de funerarias y embalsamadores, e introdujeron la idea de una funeraria de servicio completo.
              p.text-medium(numero="3" titulo="Samuel Rodgers") Aproximadamente en el año 1870, realizó el invento del trocar, introduciendo un nuevo sistema para el tratamiento de cavidades. La facilidad de uso del trocar lo hizo atractivo para aquellos que se sentían incómodos al realizar un embalsamamiento arterial.
        

    p.mb-4 En el siglo XIX,  surgen máquinas que facilitaron el embalsamamiento, las cuales son: 
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img21.svg', alt='Bombas de embalsamamiento o inyectores', style='width:218px')
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img22.svg', alt='Las máquinas de inyección eléctrica', style='width:218px')
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img23.svg', alt='La máquina Porti-Boy, el aparato de inyección más popular de la historia', style='width:218px')
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img24.svg', alt='La máquina de inyección de alta presión extrema: Sawyer', style='width:218px')

    p.mb-5 Con el aumento de los embalsamamientos en las funerarias, se incrementó el uso de dispositivos profesionales. 

    .row.mb-1
      .col-lg-12.p-3.mb-3(style='background-color: #1D272B; border-radius: 10px;')
        h3.text-center.text-white.mb-0  En las primeras décadas del siglo XX, se inventaron nuevos equipos de embalsamamiento, entre ellos:
      
    .row.justify-content-around.mb-4
      .bg-color2.p-4.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/icon11.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
        h4.text-center.mb-2 Bomba eléctrica a batería
        p.text-center Inyectaba productos químicos de embalsamamiento, un cierre de mandíbula y un botón de trocar (un dispositivo de plástico, con forma de tornillo, proporcionando un sello impermeable para perforaciones de trocar o heridas como agujeros de bala).
      
      .bg-color3.p-4.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/icon12.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
        h4.text-center.mb-2 Aspiradoras
        p.text-center Usaban una fuente de agua confiable para crear la succión necesaria para la aspiración de cavidades.
      
      .bg-color4.p-4.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/icon13.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
        h4.text-center.mb-2 Aspiradores eléctricos
        p.text-center Proporcionaban una succión y presión más confiables que el agua, que podía perder presión en períodos de alto uso de agua.
      

    h3.mb-4 Tipos de tanatopraxia
    
    .row.justify-content-center.mb-2
      .col-lg-7.mb-4
        p.mb-4 Las técnicas de preparación y acondicionamiento del cuerpo sin vida son de diferentes clases y sirven a diferentes propósitos, entre ellas están el embalsamamiento médico, el didáctico y el funeral. Todos los procedimientos tienen protocolos especiales y bastante diferentes, tanto en las formas de hacerlo como en el empleo de los químicos que se utilizan.
        p.mb-3 Para realizar la descripción de los tipos de tanatopraxia, lo primero es conocer cuál es su significado.
        .cajon.color-secundario.p-4.mb-2
          p.mb-0 La tanatopraxia es el conjunto de técnicas y protocolos que se emplean para retrasar los efectos bioquímicos de la descomposición cadavérica y buscan conservar o restaurar la apariencia física del cadáver.
      .col-lg-5.mb-4
        figure
          img.imagen-custom3(src='@/assets/curso/tema1/img25.svg',alt='imagen ambiental').mx-auto

    p.mb-4 El tipo de tanatopraxia se define por sus intenciones. Observe el siguiente recurso educativo para valorar las características de cada una de ellos.

    .row.justify-content-center.mb-4
      .col-sm-auto.col-lg-5.mb-4
        figure
          img.imagen-custom3(src='@/assets/curso/tema1/img26.svg',alt='imagen ambiental', style='').mx-auto
      .col-lg-7.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Tanatopraxia médica")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Su intención es preservar la estructura tisular del cuerpo, a partir de la inyección de fluidos preservantes, sin necesidad de hacer algún tipo de drenaje. 
              p.mb-4 En este caso, no se requiere de extracción o tratamiento directo de vísceras, por dos razones:
              .tarjeta-avatar-b.mb-2
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/icon14.svg' alt='AvatarTop')
                .tarjeta.bg-line2(style='background-color:#fff; align-self: center;')
                  .p-4
                    p.mb-0 El químico preservante se utiliza puro y  sin diluirse en agua. Esto conlleva que se fijen intensamente las vísceras e incluso sus contenidos, haciendo innecesaria la evisceración o aspiración de la cavidad.

              .tarjeta-avatar-b.mb-2
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/icon15.svg' alt='AvatarTop')
                .tarjeta.bg-line2(style='background-color:#fff; align-self: center;')
                  .p-4
                    p.mb-0 Cualquier manipulación directa de vísceras alteraría la morfología del cadáver.
            
          .row(numero="2" titulo="Tanatopraxia didáctica")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Las preservaciones del cuerpo humano tienen como propósito experimentar técnicas quirúrgicas y/o científicas sobre el cuerpo humano. 
              p.mb-4 Ejemplo: la preservación que se utiliza para hacer pruebas especiales de cirugía, como las pruebas de impacto (choques vehiculares) y funcionamiento de líquidos.
          
          .row(numero="3" titulo="Tanatopraxia funeraria")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 La intención del embalsamamiento del cuerpo es su preservación transitoria o de corta duración para una disposición final del cuerpo. Para este caso, se aplican varias fórmulas y químicos.
              p.mb-4 Sin embargo, un buen embalsamamiento funerario puede tener una duración de meses e incluso años, dependiendo de factores como:
              .row.justify-content-center
                .col
                  ul.lista-ul
                    li 
                      i.fas.fa-biohazard(style="color: #D93328;")
                      p.mb-0 Causas y tiempo de muerte.
                    li 
                      i.fas.fa-biohazard(style="color: #D93328;")
                      p.mb-0 Condición del lugar del enterramiento.
                    li 
                      i.fas.fa-biohazard(style="color: #D93328;")
                      p.mb-0 Técnica de embalsamamiento aplicada.
                .col-auto.align-self-center
                  figure
                    img(src='@/assets/curso/tema1/img27.svg',alt='imagen ambiental', style='width: 212px;').mx-auto
            

    p.mb-5 Sin importar el químico o los elementos de preparación que se utilicen, la tanatopraxia debe buscar:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-secundario.p-5(style='background-color:#EEEEF2 ')
        .row.justify-content-center.mb-4
          .col-sm-auto.col-lg-4
            figure
              img.imagen-custom4.mx-auto(src='@/assets/curso/tema1/icon16.svg', alt='icono que acompaña', style="")
        h2.text-center Un óptimo nivel de<br> desinfección tisular.
      .col-md.tarjeta.color-primario.p-5(style='background-color: #A6DAD7')
        .row.justify-content-center.mb-4
          .col-sm-auto.col-lg-4
            figure
              img.imagen-custom4.mx-auto(src='@/assets/curso/tema1/icon17.svg', alt='icono que acompaña', style="")
        h2.text-center(style='color: #12263f') Preservación bioquímica y conservación de la apariencia estética del fallecido.


    p.mb-4 Esto solo se logra con el empleo de químicos para embalsamar apropiados, mezclados profesionalmente y aplicados con técnicas y criterios científicos. Cuando no se hace de esta manera, el resultado siempre es incierto. Por eso, en este punto está la diferencia del tanatopráctor certificado y el empírico.
    p.mb-5 Recuerde que el protocolo básico de cualquier tipo de embalsamamiento es:

    .row.justify-content-center.mb-2
      .col-lg-10
        .row.justify-content-center
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img28.svg', alt='Desinfección externa del cadáver', style='width:218px')
          
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img29.svg', alt='Aseo externo generalizado', style='width:218px')
          
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img30.svg', alt='Perfusión vascular de fluidos preservantes y germicidas', style='width:218px')
          
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema1/img31.svg', alt='Inactivación y estabilización química de tejidos viscerales', style='width:218px')
          

    p.mb-4 Estos procedimientos genéricos difieren de fondo y en la aplicación para cada caso en particular. 
      b El proceso de tanatopraxia 
      b-none logra objetivos de desinfección, conservación y restauración. El embalsamamiento no puede detener completamente el proceso natural de descomposición, pero asegura que sus familiares podrán interactuar con los restos humanos sin ningún riesgo.
    
    p.mb-5 A continuación, se mencionan a profundidad los aspectos fundamentales y su importancia dentro de la tanatopraxia.



    .tarjeta.tarjeta-fondo.p-4.mb-5
      SlyderA
        .row(style='justify-content: space-evenly')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4.mb-4 Sanidad e higiene
            p.mb-4 La primera consideración de la tanatopraxia tiene que ver con la higienización y limpieza, tanto del área de trabajo como del cuerpo sin vida, en general. El ambiente funerario debe ser seguro, higiénicamente hablando, por la gran cantidad de personas que interactúan alrededor del cuerpo sin vida.
            .cajon-b.color-primario.abajo-derecha.p-0.mb-0
              p.mb-0 La limpieza e higiene responden a la necesidad de evitar y disminuir contagios de enfermedades derivadas del contacto con cadáveres. Si se consideran todas las muertes de un área en especial, en un tiempo determinado, la acumulación resultante de los cadáveres representa un riesgo general para la salud pública. Esta consideración le da un valor a la tanatopraxia como generador de un ritual y como solución higiénica, ya que, si no existiera este proceso, solo se haría evacuación de cuerpos.
          .col-sm-6.col-md-4.align-self-center
            figure
              img.imagen-custom3.mx-auto(src='@/assets/curso/tema1/img32.jpg', alt='', style='')

        .row(style='justify-content: space-evenly')
          .col-md-4.align-self-center
            figure.mb-4
              img.imagen-custom3.mx-auto(src='@/assets/curso/tema1/img33.jpg', alt='Excelente servicio funerario')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4.mb-4 Reverencia por la muerte
            .cajon-b.color-primario.p-0.mb-4
              p.mb-0 El servicio funerario está basado en el sentimiento y el respeto, tanto por la vida de quien ha fallecido como por las personas que quedan vivas. Este servicio se basa en la ritualidad y la importancia que se le da a la existencia de quienes ya han partido. Por ello, debe ser delicado y cuidadoso, absolutamente reverente y respetuoso de la individualidad de cada caso, sin distinguir entre razas, credo, ni condiciones sociales o económicas. 
            p.mb-0  El maltrato y la rudeza en el trato con las personas y con el cuerpo sin vida son inaceptables y no deben ser tolerados bajo ninguna circunstancia.
        
        .row(style='justify-content: space-evenly')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4.mb-4 Dignidad
            p.mb-4 Se refiere a la manera ceremoniosa y ritual como se hace la disposición final de los cuerpos. Esta muestra la importancia y la especialidad de lo que significa la persona fallecida.
            .cajon-b.color-primario.abajo-derecha.ajustado.p-0.mb-0
              p.mb-4 La tanatopraxia y el ritual funerario permiten hacer la despedida con el ritual y ceremonia necesarios.
          .col-md-4.align-self-center
            figure
              img.imagen-custom3.mx-auto(src='@/assets/curso/tema1/img34.jpg', alt='Ritual funerario para despedida', style='')

        .row(style='justify-content: space-evenly')
          .col-md-4.align-self-center
            figure.mb-4
              img.imagen-custom3.mx-auto(src='@/assets/curso/tema1/img35.jpg', alt='Relación afectuosa con el cliente')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4.mb-4 Simpatía con la muerte
            .cajon-b.color-primario.p-0.mb-0
              p.mb-0 Es la relación afectuosa que se debe generar entre el funerario y el cliente. El servicio funerario debe partir de la solidaridad de entender el dolor del otro, sin llegar al punto de afectarse negativamente.
            p.mb-4 Se debe reconocer cada duelo, partiendo de la premisa psicológica: no hay dolor como el mío, ni tristeza como la mía, nadie está en capacidad de sentir y compartir el dolor ajeno de la manera que le da el individuo. 
            p.mb-4 De este punto, se dice que la solidaridad y afectación por la muerte de alguien son necesarias para prestar un buen servicio.
        
        .row(style='justify-content: space-evenly')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4.mb-4 Eficiencia
            p.mb-4 El funerario debe ser el apoyo necesario para la familia, tanto en el despacho como en el proceso de tanatopraxia. Él tiene que ser un generador de procesos y no un obstáculo de situaciones.
            .cajon-b.color-primario.abajo-derecha.p-0.mb-0
              p.mb-0 El mayor enemigo de un funerario es la rutina, ya que obliga a despachar y atender servicios de una manera estandarizada, sin variables y sin darles la oportunidad a las familias de personalizar el servicio.
          .col-md-4.align-self-center
            figure
              img.imagen-custom3.mx-auto(src='@/assets/curso/tema1/img36.jpg', alt='Generador de procesos', style='')

        .row(style='justify-content: space-evenly')
          .col-md-4.align-self-center
            figure.mb-4
              img.imagen-custom3.mx-auto(src='@/assets/curso/tema1/img37.jpg', alt='Confiabilidad profesional')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4.mb-4 Confianza
            .cajon-b.color-primario.p-0.mb-4
              p.mb-0 Este valor se refiere a la confiabilidad profesional y la seriedad de los compromisos que adquiere el laboratorio. Este manejo ético del funeral orienta al embalsamador a la reservación de información tal como:
            ul.lista-ul
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Causas de la muerte.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Condiciones alrededor del fallecimiento.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Particularidades físicas y/o defectos del fallecido.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Detalles de la preparación.
              li 
                i.fas.fa-biohazard(style="color: #D93328;")
                p.mb-0 Fuera del laboratorio, no se discuten detalles personales, sociales, legales o financieros de la familia.
            
        


    p.mb-5 Es maravilloso conocer todos los cambios, avances y modificaciones que ha tenido el proceso de embalsamamiento a lo largo de la historia, lo cual permite evidenciar que los tanatopráctores son el último tramo en la despedida final del fallecido, desde tiempos pasados hasta la actualidad; por ello, se hace necesario que las personas involucradas desarrollen un proceso que brinde respeto por la muerte y aseguramiento de los protocolos de bioseguridad, normatividad y preservación del cuerpo, según los lineamientos del sector funerario.






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
