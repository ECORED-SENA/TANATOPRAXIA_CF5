<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1  Marco normativo de la tanatopraxia

    p.mb-4 
      b Un embalsamador tiene muchos roles 
      b-none que desempeñar dentro de su 
      b trabajo como tanatopráctor, 
      b-none tales como:

    .row.justify-content-center.mb-2
      .col-lg-10
        .row.justify-content-center
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema2/img1.svg', alt='Organizador', style='width:218px')
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema2/img2.svg', alt='Embalsamador', style='width:218px')
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema2/img3.svg', alt='Acompañar a las familias', style='width:218px')
          .col-auto.imagen-custom2.mb-4.p-lg-2.p-xl-1
            figure
              img.imagen-custom1.mx-auto(src='@/assets/curso/tema2/img4.svg', alt='Conducir y atender el servicio funeral', style='width:218px')
          
    p.mb-5 Todo esto solo por su compromiso con el servicio a otros; pero para ello debe conocer la regulación de la profesión y contar con actitudes e insumos que le permitan el desarrollo de estas actividades. Con este apartado del componente, podrá tener más claridad sobre lo mencionado anteriormente.
    .bloque-texto-a.reverse.color-secundario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p.mb-2 En Colombia, la 
              b labor de tanatopráctor 
              b-none no se encuentra regulada apropiadamente, debido a que no existen leyes ni decretos que hablen específicamente del rol del embalsamador, sus características o los requisitos para desempeñarse. Sin embargo, esta labor puede adherirse a diferentes estatutos que sirven como base para su realización y su ejecución. 
              b Entre ellos, se encuentran:
        .col-lg-3.mb-4.mb-lg-0.align-self-center
          figure
            img.mx-auto(src='@/assets/curso/tema2/img5.svg', alt='imagen ambiental', style='width:276px;')
        

    .row.justify-content-center
      .col-lg-5.mb-4
        figure
          img.imagen-custom5.mx-auto(src='@/assets/curso/tema2/img6.svg', alt='tanatopractor labor no regulada en colombia', style='')
      .col-lg-7.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Ley 9 de 1979")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 En esta ley, se encontrará la base necesaria para la aplicación de tanatopraxia. El título IV, Saneamiento de Edificaciones, servirá como guía para conocer algunas de las disposiciones necesarias, con las cuales debe de cumplir cualquier #[strong laboratorio de tanatopraxia a nivel nacional.]
              p.mb-4 La ley establece las normas #[strong sanitarias para la prevención y control de los agentes biológicos,] físicos o químicos que alteran las características del ambiente exterior de las edificaciones hasta hacerlo peligroso para la salud humana. 
              .tarjeta-avatar-b.mb-2
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/icon1.svg' alt='AvatarTop')
                .tarjeta.bg-line2(style="background-color:#fff;")
                  .p-4 
                    p.mb-4 En el título IX “Defunciones, traslado de cadáveres, inhumacion, exhumacion, transporte, transplante y control de especímenes, se encontrará la información necesaria para la verificación de los documentos necesarios para certificar la muerte, certificado de defunción, sin el cual el embalsamador no podrá realizar su labor.
                    p.mb-4 Para más información, haga clic en el siguiente enlace.
                    a.anexo.mb-4.mb-lg-0(href="https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf" target="_blank" style="")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.color-texto #[strong Enlace web.] Ley 9 de 1979
          
          .row(numero="2" titulo="Decreto 391 de 1991")
            .col-md-12.mb-4.mb-md-4
              p.mb-4 Por medio de este decreto, el #[strong Distrito Capital de Bogotá] reglamenta el trámite para la inscripción y obtención de la licencia sanitaria de funcionamiento para las funerarias y agencias mortuorias.
              .row.justify-content-center
                .col
                  p.mb-4 Para más información, haga clic en el siguiente enlace.
                  a.anexo.mb-4.mb-lg-0(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=1863&dt=S" target="_blank" style="background-color:#fff;")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.color-texto #[strong Enlace web.] Decreto 391 de 1991
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema2/img7.svg' alt='imagen ambiental', style="width:90px;")
              
          .row(numero="3" titulo="Norma Técnica Colombiana 5840 del Icontec")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 En su #[strong título 5.2.6 Tanatopraxia,] menciona los aspectos básicos para el tratamiento del cadáver y especificaciones que el trabajador debe de cumplir para la realización de esta actividad. Sus generalidades son:
              ul.lista-ul.ms-md-4
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Comprobar el uso adecuado de todos los elementos de protección personal, para controlar el riesgo al cual se encuentra expuesto.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Revisar la documentación e identificación del fallecido.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Realizar el inventario de las pertenencias del fallecido y determinar su disposición final.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Realizar inspección física al cadáver para determinar su estado.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Reporte del estado del cadáver.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Desinfección del cadáver.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Planeación del proceso de tanatopraxia según las condiciones del cadáver y exigencias de la familia.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Realización del proceso de tanatopraxia.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Vestir el cadáver.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Realización del proceso de tanatoestética.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Verificación del estado del cofre o ataúd para la disposición del cadáver.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Entregar el cadáver al personal encargado.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Diligenciamiento del informe de embalsamamiento.
                li 
                  i.fas.fa-biohazard(style="color: #D93328;")
                  p.mb-0 Desinfección del área de trabajo y materiales.
              
          .row(numero="4" titulo="Norma 260601020 del 2017")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Esta norma es un lineamiento desarrollado entre el #[strong SENA y la Mesa Sectorial de Servicios Funerarios,] para certificar las competencias de los tanatopráctores en funciones de embalsamamiento, en el contexto colombiano. 
              p.mb-4 Para más información, haga clic en el siguiente enlace y busque la #[strong Norma 260601020]  para su lectura.
              .row.justify-content-center
                .col
                  a.anexo.mb-4.mb-lg-0(href="https://certificados.sena.edu.co/claborales/default.asp#resultado" target="_blank" style="background-color:#fff;")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.color-texto #[strong Enlace web.] Embalsamar el cadáver de acuerdo con técnicas de tanatopraxia y requerimientos del cliente
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema2/img8.svg' alt='imagen ambiental', style="width:90px;")
              
          .row(numero="5" titulo="Resolución 181331 de 2009")
            .col-md-12.mb-4.mb-md-4
              p.mb-4 Esta resolución describe las #[strong características de adecuación de las instalaciones,] a nivel de iluminación, que contribuya a un adecuado desarrollo de las actividades laborales. Si bien la resolución no especifica el contexto del sector funerario, esta se adopta como un lineamiento para el uso y manejo de la electricidad en el proceso de tanatopraxia y otros relacionados con ella.
              .row.justify-content-center
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema2/img9.svg' alt='imagen ambiental', style="width:130px;")
                .col
                  p.mb-4 Para más información, haga clic en el siguiente enlace para acceder a la resolución mencionada. 
                  a.anexo.mb-4.mb-lg-0(href="https://www.minenergia.gov.co/documents/10180/23931303/RES181331_2009.pdf/53f7e906-94de-4cba-959d-ef45b04e93c6" target="_blank" style="background-color:#fff;")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.color-texto #[strong Enlace web.] Ministerio de Minas y Energía. Resolución Número 181331
                

          .row(numero="6" titulo="Resolución 5194 de 2010")
            .col-md-12.mb-4.mb-md-4
              p.mb-4 En la presente resolución del  #[strong Ministerio de la Protección Social,] se reglamenta la prestación de los servicios de cementerios, inhumación, exhumación y cremación de cadáveres.
              p.mb-4 Esta resolución expone #[strong parámetros sanitarios que se deben considerar en las prácticas funerarias.] Cabe mencionar que no se menciona la tanatopraxia literalmente, pero  se deben considerar los aspectos que se señalan allí en relación con la inhumación y exhumación, en el momento del embalsamamiento de un cuerpo fallecido.
              .row.justify-content-center
                .col
                  p.mb-4 Para más información, haga clic en el siguiente enlace y consulte la resolución mencionada. 
                  a.anexo.mb-4.mb-lg-0(href="http://www.saludcapital.gov.co/DDS/Documents/RESOLUCI%C3%93N%205194%20DE%202010%20INHUMACIONES%20EXHUMACIONES%20Y%20CREMACIONES.pdf" target="_blank" style="background-color:#fff;")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.color-texto #[strong Enlace web.] Ministerio de la Protección Social. Resolución 5194 de 2010
                
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema2/img10.svg' alt='imagen ambiental', style="width:130px;")
              

          .row(numero="7" titulo="Circular 28 de 2004")
            .col-md-12.mb-4.mb-md-4
              p.mb-4 En la presente circular, se imparten las directrices a las funerarias, salas de velación o agencias mortuorias que presten servicios dentro del 
                b Distrito Capital, 
                b-none relacionadas con las 
                b condiciones higiénico-sanitarias que deben cumplir, 
                b-none respecto de la implementación de programas de saneamiento básico que incluyan control vectorial, lavado y desinfección de tanques de reserva y almacenamiento de agua; aprobación de la autoridad competente para los establecimientos que cuenten con 
                b laboratorios de tanatopraxia.
              .row.justify-content-center
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema2/img11.svg' alt='imagen ambiental', style="width:130px;")
                .col
                  p.mb-4 Para más información, haga clic en el siguiente enlace y consulte la Circular mencionada. 
                  a.anexo.mb-4.mb-lg-0(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=16763" target="_blank" style="background-color:#fff;")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.color-texto #[strong Enlace web.] Circular 28 de 2004
                
              
              





</template>

<script>
export default {
  name: 'Tema2',
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
