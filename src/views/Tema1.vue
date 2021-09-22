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
        p.text-center No realizaban embalsamamiento como tal, realizaban un tratamiento del cadáver que consistía en poner el cadáver en el suelo para lavarlo y envolverlo en sabanas.
      
      .bg-color3.p-4.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/icon2.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
        h4.text-center.mb-4 Periodo dos
        p.text-center No realizaban embalsamamiento como tal, realizaban un tratamiento del cadáver que consistía en poner el cadáver en el suelo para lavarlo y envolverlo en sabanas.
      
      .bg-color4.p-4.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/icon3.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
        h4.text-center.mb-4 Periodo tres
        p.text-center Los pies siempre debían ubicarse mirando hacia la puerta. Durante todo el proceso tenían una vela encendida.
      
    
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
      .col-auto.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 218px;')
      .col-auto.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema1/img5.svg', alt='', style='width: 218px;')
      .col-auto.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema1/img6.svg', alt='', style='width: 218px;')
      .col-auto.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 218px;')
      .col-auto.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema1/img8.svg', alt='', style='width: 218px;')


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
      .col-lg-12.mt-5.px-5

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
              p.mb-2 Este proceso tomaba aproximadamente 15 días, momento en el que la familia reclamaba el cuerpo, lo cosían en una piel de cabra y lo trasladaban a las amplias cuevas que se encuentran en la isla. 
              .cajon-tarjeta
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema1/icon7.svg' alt='AvatarTop')
                  .tarjeta.bg-line4(style='background-color:#fff; align-self: center;')
                    .p-4
                      p.mb-0 Los individuos más importantes tenían ataúdes elaborados, que se construían durante el tiempo del embalsamamiento.
        
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

    .row.justify-content-center.fondo-custom2
      .col-lg-11.px-4
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
                
      .col-lg-12.px-5
        h4.mb-4 Periodo tres
        p.mb-5 Este periodo se caracterizó porque la preservación del cuerpo fue  con fines funerarios. El precursor de este periodo fue el Dr. Thomas Holmes, conocido como el padre de la tanatopraxia moderna.
        
        .bloque-texto-a.reverse.color-secundario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-9
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
