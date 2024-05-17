<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") En resumen, los documentos soporte son fundamentales en la contabilidad de una organización. Estos deben tener características como precisión y cumplimiento de normativas. Su propósito es respaldar operaciones financieras, facilitar auditorías y cumplir con obligaciones legales. Esto implica un análisis detallado, la correcta relación de documentos y su diligenciamiento conforme a las normas contables y fiscales, asegurando la integridad y exactitud de la información financiera. A continuación, se presenta un mapa conceptual que resume la información de este proceso.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En resumen, los documentos soporte son fundamentales en la contabilidad de una organización. Estos deben tener características como precisión y cumplimiento de normativas. Su propósito es respaldar operaciones financieras, facilitar auditorías y cumplir con obligaciones legales. Esto implica un análisis detallado, la correcta relación de documentos y su diligenciamiento conforme a las normas contables y fiscales, asegurando la integridad y exactitud de la información financiera. A continuación, se presenta un mapa conceptual que resume la información de este proceso.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
