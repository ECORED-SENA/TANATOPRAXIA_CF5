<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1  Seguridad y salud en el trabajo de la tanatopraxia


    .row.justify-content-center.mb-3
      .col-lg-auto.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema3/img1.svg', alt='Protocolos de bioseguridad', style='width:450px')
      .col.mb-4
        p.mb-4 Toda actividad laboral conlleva un riesgo, sin importar la función que se realice. Esta premisa está presente dentro de las funciones relacionadas con la 
          b tanatopraxia, 
          b-none porque el personal está expuesto a riesgos laborales, que se disminuyen con los 
          b protocolos de bioseguridad. 
          b-none Según el 
          b Decreto 1295 de 1994, el riesgo profesional es una situación potencial de peligro que se produce como consecuencia directa o indirecta del trabajo o labor que se desempeña.  
          b-none El hecho puede llegar a poner en peligro la salud y estabilidad física o psicológica de los trabajadores y afectar su desempeño laboral.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En el contexto de la 
            b función de los empleados denominados tanatopráctores, 
            b-none se pueden clasificar los riesgos laborales así:

    .row.justify-content-center.mb-5
      .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
        .tarjeta.tarjeta-container2.tarjeta-oscura
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema3/num1.svg", alt="icono-Numero", style="width:86px;").m-auto
              p.mb-0 #[strong Riesgo químico ]
            .tarjetaTxt2
              figure.mb-3
                img(src="@/assets/curso/tema3/img2.jpg", alt="imagen ambiental", style="width:238px;").m-auto
              .px-3
                .bg-num1
                  p.mb-2 #[strong Riesgo químico ]
                  p.mb-0 Este riesgo está relacionado directamente con líquidos y demás sustancias, como polvos y vapores, que se usan en el proceso de embalsamamiento.
                
      .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
        .tarjeta.tarjeta-container2.tarjeta-verde
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema3/num2.svg", alt="icono-Numero", style="width:86px;").m-auto
              p.mb-0 #[strong Riesgo físico ]
            .tarjetaTxt3
              figure.mb-3
                img(src="@/assets/curso/tema3/img2.jpg", alt="imagen ambiental", style="width:238px;").m-auto
              .px-3
                .bg-num2
                  p.mb-2 #[strong Riesgo físico ]
                  p.mb-0 Este riesgo está desencadenado por la falta de iluminación, fatiga y ruido que se pueda generar dentro del laboratorio de tanatopraxia, ya que pueden llegar a generar un accidente.
                
      .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
        .tarjeta.tarjeta-container2.tarjeta-oscura
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema3/num3.svg", alt="icono-Numero", style="width:86px;").m-auto
              p.mb-0 #[strong Riesgo biológico ]
            .tarjetaTxt2
              figure.mb-3
                img(src="@/assets/curso/tema3/img2.jpg", alt="imagen ambiental", style="width:238px;").m-auto
              .px-3
                .bg-num3
                  p.mb-2 #[strong Riesgo biológico ]
                  p.mb-0 Cuando una persona se expone a este riesgo, debe entender que los cuerpos tratados en el laboratorio de tanatopraxia pueden contener microorganismos, como virus, bacterias, parásitos u hongos, que representan una amenaza para la salud del tanatopráctor.
                
      .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
        .tarjeta.tarjeta-container2.tarjeta-verde
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema3/num4.svg", alt="icono-Numero", style="width:86px;").m-auto
              p.mb-0 #[strong Riesgo psicológico ]
            .tarjetaTxt3
              figure.mb-3
                img(src="@/assets/curso/tema3/img2.jpg", alt="imagen ambiental", style="width:238px;").m-auto
              .px-3
                .bg-num4
                  p.mb-2 #[strong Riesgo psicológico ]
                  p.mb-0 Este riesgo es provocado por aspectos como el ambiente y entorno laboral, que pueden llegar a generar estrés severo y, con el correr del tiempo, pueden generar enfermedades inmunitarias, dermatológicas, respiratorias, cardiovasculares o mentales.
                
      .col-auto.mb-4.margen-tarjetaLarga.px-lg-1
        .tarjeta.tarjeta-container2.tarjeta-oscura
          .tarjetaContent2
            .tarjetaImg2
              figure.mb-3
                img(src="@/assets/curso/tema3/num5.svg", alt="icono-Numero", style="width:86px;").m-auto
              p.mb-0 #[strong Riesgo ergonómico ]
            .tarjetaTxt2
              figure.mb-3
                img(src="@/assets/curso/tema3/img2.jpg", alt="imagen ambiental", style="width:238px;").m-auto
              .px-3
                .bg-num5
                  p.mb-2 #[strong Riesgo ergonómico ]
                  p.mb-0 Este riesgo es originado por una incorrecta ergonomía laboral, provocando un trastorno músculo-esquelético por la actividad física de mover el cadáver.
                
    













</template>

<script>
export default {
  name: 'Tema3',
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
