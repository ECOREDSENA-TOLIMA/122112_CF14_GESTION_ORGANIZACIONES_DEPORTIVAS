<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Documentos soporte
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img01.png' alt="Imagen decorativa")
      .col-lg-8
        p(data-aos="fade-left") Es el documento que se utiliza para acreditar una compra de un bien o servicio, el cual debe generar el comprador en sus transacciones con sus proveedores que no estén obligados a expedir factura. Al realizarse transacciones con sujetos no obligados a expedir factura, el documento soporte se convierte en la evidencia de dicha transacción, este documento es una aceptación fiscal de costos, deducciones o impuestos descontables. Es obligación de las personas o empresas obligadas a expedir facturas, o generar un documento soporte cuando hacen un pago o una compra a una persona que no está obligada a expedir factura, lo anterior de acuerdo con el artículo 1.6.1.4.12 del decreto 1625 de 2016. Es importante tener en cuenta que el soporte ideal, para los costos o gastos, es la factura.
        p.mb-0(data-aos="fade-left") El artículo 1, del Decreto 358 de 2020, sustituyó al artículo 1.6.1.4.12 del Decreto Único Reglamentario en Materia Tributaria (DUT 1625 de 2016), por el cual se dan las orientaciones con respecto al documento soporte para las adquisiciones efectuadas a sujetos no obligados a expedir factura de venta y formalizar la cuenta de cobro.

    .cajon.color-primario.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Teniendo en cuenta el artículo 1.6.1.4.12 del decreto 1625 de 2016, los requisitos del documento soporte para los sujetos no obligados a facturar son:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2
        .BGR01.p-2.mb-4(data-aos="fade-right")
          .h4.text-center.text-white.mb-0 Requisitos documentos soporte
        ul.lista-ul--color.ms-4
          li(style="margin-bottom: 5px" data-aos="fade-right")
            i.fas.fa-caret-right.my-auto(style="color: #FE502D; font-size: xx-large")
            .BGR02.w-100.p-2
              p.mb-0 Estar denominado expresamente como documento soporte en adquisiciones efectuadas a no obligados a facturar.
          li(style="margin-bottom: 5px" data-aos="fade-right")
            i.fas.fa-caret-right.my-auto(style="color: #FE502D; font-size: xx-large")
            .BGR02.w-100.p-2
              p.mb-0 Tener la fecha de la operación que debe corresponder a la fecha de generación del documento.
          li(style="margin-bottom: 5px" data-aos="fade-right")
            i.fas.fa-caret-right.my-auto(style="color: #FE502D; font-size: xx-large")
            .BGR02.w-100.p-2
              p.mb-0 Contener los apellidos y nombre o razón social y Número de Identificación Tributaria (NIT) del vendedor o de quien presta el servicio.
          li(style="margin-bottom: 5px" data-aos="fade-right")
            i.fas.fa-caret-right.my-auto(style="color: #FE502D; font-size: xx-large")
            .BGR02.w-100.p-2
              p.mb-0 Contener los apellidos y nombre o razón social y Número de Identificación Triibutaria (NIT) del adquiriente de los bienes o servicios.
          li(style="margin-bottom: 5px" data-aos="fade-right")
            i.fas.fa-caret-right.my-auto(style="color: #FE502D; font-size: xx-large")
            .BGR02.w-100.p-2
              p.mb-0 Llevar el número que corresponda a un sistema de numeración consecutiva de documento soporte incluyendo el número, rango y vigencia autorizado por la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN).
          li(style="margin-bottom: 5px" data-aos="fade-right")
            i.fas.fa-caret-right.my-auto(style="color: #FE502D; font-size: xx-large")
            .BGR02.w-100.p-2
              p.mb-0 Tener la descripción específica del bien o del servicio prestado.
          li(style="margin-bottom: 5px" data-aos="fade-right")
            i.fas.fa-caret-right.my-auto(style="color: #FE502D; font-size: xx-large")
            .BGR02.w-100.p-2
              p.mb-0 Detallar el valor total de la operación.
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img02.png' alt="Imagen decorativa")
    
    p.text-center.mb-5(data-aos="fade-right") Además de los requisitos mencionados se deben cumplir las siguientes exigencias:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img03.svg' alt='Imagen decorativa')
          .tarjeta.color-primario.h-100.px-4.pt-5.pb-4
            p.text-white.mb-0 Incluir la firma del emisor de los documentos soporte al momento de la generación.
      .col-lg-5.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img04.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.w-100.px-4.pt-5.pb-4
            p.mb-0 Utilizar el formato electrónico establecido por la DIAN.
    
    .cajon.color-primario.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Adicionalmente, a estas consideraciones, es importante tener en cuenta, las diferencias entre los documentos de soporte electrónico y los de soporte para no residentes en Colombia: 

    SlyderE(indicadores="derecha" data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-6.col-10.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img05.png' alt="Imagen decorativa")
        .col-lg-6
          .h4 Documento soporte electrónico
          p.mb-0 Los contribuyentes que efectúan factura electrónica también deben generar el documento soporte de manera electrónica, para las operaciones con personas no obligadas a facturar. Este documento soporte, debe contener una numeración consecutiva, la cual, debe estar autorizada por la DIAN, lo anterior de acuerdo al artículo 38 de la resolución de la DIAN número 042 del 5 de mayo de 2020.
      .row.justify-content-center
        .col-lg-6.col-10.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img06.png' alt="Imagen decorativa")
        .col-lg-6
          .h4 Documento soporte para no residentes en Colombia
          p.mb-0 El documento soporte, será válido en contratos celebrados con personas u otras entidades no residentes en Colombia, cumpliendo con los requisitos descritos en el artículo 38 de la resolución de la DIAN número 042 del 5 de mayo de 2020.
      
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

<style lang="sass"></style>
