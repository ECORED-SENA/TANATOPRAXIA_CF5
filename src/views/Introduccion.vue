<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Apreciado aprendiz, pensar en las prácticas que permiten el traslado intermedio y final de unos restos mortales brinda un acercamiento a una práctica histórica como es la tanatopraxia. En este sentido, se le da la bienvenida, y se le recomienda revisar el siguiente recurso educativo para iniciar su aprendizaje.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5
      .row.m-0.align-items-center.justify-content-center
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img1.svg', alt='imagen ambiental', style='width:250px;').mx-auto
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Para la elaboración de este componente, se abordaron varios autores conocidos en instalaciones, equipos, materiales y elementos para el proceso de tanatopraxia, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la tanatopraxia y la tanatoestética.
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
