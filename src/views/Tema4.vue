<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Normas de elaboración de la documentación
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img01.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p La administración del sistema de documentación contable será responsabilidad del representante legal de la empresa, desde allí se regulan todos los aspectos relativos a los documentos contables, los cuales deben corresponder a los soportes, los comprobantes y los libros de contabilidad.
        figure.mb-4
          img(src='@/assets/curso/tema4/img02.svg' alt="Imagen decorativa")
        p.mb-0 Los libros de contabilidad se clasifican, en libros principales y libros auxiliares.

    p.mb-5(data-aos="fade-right") #[b Los libros principales]: son aquellos, donde se consigna la información sobre recursos, obligaciones, ingresos, costos y gastos de una entidad, allí se lleva el resumen de las operaciones durante el periodo contable de la organización. Los libros principales son: #[b libro diario y libro mayor].

    .row.justify-content-center.mb-5
      .col-lg-6.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema4/img03.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG01.p-xl-4.p-lg-3.p-sm-4.p-2
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-sm-4.mb-2
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Libro diario
            p.text-white.text-center.mb-0 En este, se registran cronológicamente los movimientos diarios; se deben identificar como mínimo, la fecha, el código, la denominación de la cuenta, y el movimiento diario, débito y crédito contable.
      .col-lg-6.col-sm-10.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema4/img04.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04.p-xl-4.p-lg-3.p-sm-4.p-2
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-sm-4.mb-2
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Libro mayor
            p.text-white.text-center.mb-0 Se registra por mes el saldo inicial, el movimiento y el saldo final de las cuentas, en este libro se debe identificar como mínimo: el mes, saldos iniciales, el movimiento débito y crédito y el saldo final de la cuenta.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img05.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 #[b Libros auxiliares]: detallan cronológicamente, los hechos económicos registrados en los comprobantes de contabilidad. En estos libros se deben identificar como mínimo: el periodo, la fecha, la clase y el número del comprobante, la descripción general, el valor, el saldo inicial y el saldo final de la misma.

    .BG07.p-4.mb-5
      .row.justify-content-center
        .col-xl-10
          .BGS09
            .row.justify-content-end.align-items-center
              .col-lg-2.col-3.img-01.order-lg-1.order-3
                img(src='@/assets/curso/tema4/img06.svg' alt="Imagen decorativa")
              .col-lg-9.px-lg-0.py-lg-4.order-lg-2.order-4
                .BGR09.px-lg-4.p-lg-0.p-4
                  .h4 Prohibiciones relacionadas con los documentos contables
                  p.mb-0 En los documentos contables no se puede tachar, mutilar, enmendar, eliminar, alterar las denominaciones o cuantías, ni adicionar información anteriormente establecida en el documento. Si se debe corregir un soporte, la organización debe anular el documento inicial, y solicitar a la otra entidad uno nuevo; cuando los documentos son internos, debe realizarse el procedimiento según políticas de la organización. Para los libros y comprobantes de contabilidad está prohibido alterar el orden cronológico en que ocurren los hechos económicos, al contener errores en los comprobantes de contabilidad se debe emitir un nuevo comprobante, ajustando las partidas afectadas.
              .col-7.d-lg-none.d-flex.order-2
              .col-lg-1.col-2.px-2.order-lg-3.order-1
                img.mx-auto(src='@/assets/curso/tema4/img07.svg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Los documentos contables también tienen una conservación, esto es una tenencia frente a los documentos y soportes contables, que tienen como finalidad, la consulta y la verificación financiera; la organización deberá definir los controles internos que garanticen la tenencia, la conservación y la reproducción de la documentación contable. Los soportes, libros y documentos contables, pueden conservarse impresos o en cualquier otro medio electrónico, magnético, óptico o similar, siempre y cuando se garantice:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img02.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.w-100.p-4
            .h5.text-center.mt-4.mb-0 Reproducción exacta.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img03.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.p-4
            .h5.text-center.mt-4.mb-0 Accesibilidad para su posterior consulta.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img04.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.p-4
            .h5.text-center.mt-4.mb-0 Que se conserven en el formato que se haya generado.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img05.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.p-4
            .h5.text-center.mt-4.mb-0 Que se conserve toda la información.

    .BG07.py-4.mb-5
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img08.png' alt="Imagen decorativa")
        .col-lg-8
          p(data-aos="fade-left") Para el caso de documentos impresos, las entidades deberán conservar, de manera ordenada y en pulcritud los soportes, comprobantes y libros de contabilidad, se deberá tener en cuenta las tablas de retención documental establecidas por la entidad.
          .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
            p.mb-0 El término de la conservación de soportes, libros y comprobantes es de 10 años, contados a partir de la fecha del último asiento, según la Ley 962 de 2005 artículo 28.
          .BGS09
            .row.justify-content-end.align-items-center
              .col-lg-2.col-3.img-02.order-lg-1.order-3
                img(src='@/assets/curso/tema4/img09.svg' alt="Imagen decorativa")
              .col-lg-9.px-lg-0.py-lg-4.order-lg-2.order-4
                .BGT09.px-lg-4.p-lg-0.p-4
                  .h4 El Decreto 2649 de 1993, en su artículo 134
                  p.mb-0 El Decreto 2649 de 1993, en su artículo 134, acerca de la conservación y destrucción de los libros determina que las organizaciones deben conservar debidamente ordenados los libros de contabilidad, actas, registros de aportes, comprobantes de cuentas, los soportes de contabilidad y la correspondencia relacionada.
              .col-8.d-lg-none.d-flex.order-2
              .col-lg-1.col-2.px-2.order-lg-3.order-1
                img.mx-auto(src='@/assets/curso/tema4/img10.svg' alt="Imagen decorativa")

    .h5.text-center.mb-5(data-aos="fade-right") La conservación de los documentos, salvo normas especiales, debe realizarse así:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img11.svg' alt='Imagen decorativa')
          .tarjeta.color-primario.h-100.p-4
            .h5.text-center.text-white.mt-4.mb-0 20 años contados desde el cierre de aquellos o último comprobante o documento.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img12.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.h-100.p-4
            .h5.text-center.mt-4.mb-0 10 años cuando se garantice su reproducción por otro medio técnico.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img13.svg' alt='Imagen decorativa')
          .tarjeta.color-acento-botones.h-100.p-4
            .h5.text-center.mt-4.mb-0 5 años ya que el liquidador de las sociedades comerciales debe conservar los libros y papeles por este término.
    
    .cajon.color-primario.p-4.mb-5(data-aos="flip-up")
      p.mb-0 En el artículo 60 del código de comercio se determina la conservación de los libros y papeles contables desde una reproducción exacta.
    
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
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
