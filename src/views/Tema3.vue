<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Propósito de la documentación
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")
      .col-lg-8
        p(data-aos="fade-left") La documentación en las organizaciones cuenta la historia a través del tiempo, sus orígenes y el rumbo que toma, para cumplir sus metas y objetivos; los documentos determinan el tipo de organización que es, su estructura jurídica, cómo está organizada, su misión y su visión. Mantienen el cumplimiento de las normativas que se aplican según sea la necesidad, por ejemplo: cumplir con la documentación para el funcionamiento, pagos tributarios, registros de transacciones financieras, beneficios estatales.
        .cajon.color-primario.p-4(data-aos="fade-left")
          p.mb-0 Entre sus propósitos, el principal es recolectar y disponer los soportes documentales, así como elaborar el registro contable y financiero dentro de la organización, de acuerdo con la normativa interna y externa que la rige. En general permite controlar las operaciones económicas realizadas por la organización.

    p.mb-5(data-aos="fade-right") Todas las organizaciones deben registrar sus operaciones económicas en los libros de contabilidad, y a su vez deben tener soportes documentales de cada una de las transacciones realizadas, estos documentos deben contener una información general como:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img02.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.p-4
            .h5.text-center.mt-4.mb-0 Nombre o razón social de la empresa que lo emite.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img03.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.p-4
            .h5.text-center.mt-4.mb-0 Nombre, número y fecha del comprobante.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img04.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.p-4
            .h5.text-center.mt-4.mb-0 Descripción del contenido del documento.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img05.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.p-4
            .h5.text-center.mt-4.mb-0 Firmas de los responsables de elaborar, revisar, aprobar y contabilizar los comprobantes.

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") Los documentos comúnmente utilizados incluyen:
        .row.mb-4
          .col-lg-6
            ul.lista-ul--color.lista-ul--separador
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.fas.fa-caret-right(style="color: #FE502D;")
                | Facturas de compra-venta.
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.fas.fa-caret-right(style="color: #FE502D;")
                | Recibos.
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.fas.fa-caret-right(style="color: #FE502D;")
                | Comprobante de depósitos y recibos.
              li(style="margin-bottom: 2px" data-aos="fade-right")
                i.fas.fa-caret-right(style="color: #FE502D;")
                | Recibos de caja.
          .col-lg-6
            ul.lista-ul--color.lista-ul--separador
              li(style="margin-bottom: 2px" data-aos="flip-right")
                i.fas.fa-caret-right(style="color: #FE502D;")
                | Cheques.
              li(style="margin-bottom: 2px" data-aos="flip-right")
                i.fas.fa-caret-right(style="color: #FE502D;")
                | Comprobantes de pago.
              li(style="margin-bottom: 2px" data-aos="flip-right")
                i.fas.fa-caret-right(style="color: #FE502D;")
                | Letras de cambio.
        p.mb-0(data-aos="fade-right") Se debe tener un sistema de documentación contable, cuyo objetivo es establecer los criterios que garanticen la integralidad, la inalterabilidad, la verificación, la seguridad y la conservación de la información financiera de la organización.  A través del mismo, se contienen y administran los documentos. Los hechos económicos se registran a través de soportes, comprobantes y libros de contabilidad, cumpliendo con las características de #[b autenticidad, integralidad y veracidad]; estos documentos pueden ser en papel impreso o digitales, y en los dos casos se debe mantener archivo de ellos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img06.png' alt="Imagen decorativa")

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

<style lang="sass"></style>
