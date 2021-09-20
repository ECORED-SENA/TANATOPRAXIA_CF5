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

    .row.mb-5
      .col-12.p-0
        figure
          img.mx-auto(src='@/assets/curso/tema1/img2.svg', alt='La tanatopraxia como práctica cultural se puede clasificar históricamente en tres periodos:', style='')

    p.mb-5 Profundicemos en el estudio de cada uno de estos periodos.
    h4.mb-4 Periodo uno
    .row.justify-content-center.mb-4
      .col-lg-7
        p.mb-4 Durante el periodo uno o antiguo, el proceso de embalsamamiento era practicado por diferentes grupos poblacionales o étnicos alrededor del mundo y sus procesos dependían principalmente de sus creencias religiosas.
        p A este periodo pertenecieron los:
      .col-lg-5
        figure
          img.mx-auto(src='@/assets/curso/tema1/img3.svg', alt='imagen ambietal', style='466px;')





















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
