<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Características de la documentación 
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img01.png' alt="Imagen decorativa")
      .col-lg-8
        p(data-aos="fade-left") Los documentos contables son los archivos que sirven para registrar todas las actividades comerciales de una organización, son la base para registrar las actividades en sí, y sirven como prueba o comprobante de los movimientos y contabilización financiera. Sirven de base para los registros obligatorios y la actividad contable, contienen los movimientos financieros de la empresa, los cuales se utilizan para el cálculo de las operaciones, estos documentos deben mantenerse en plena integridad y son auditados por distintos organismos gubernamentales, como la Dirección de Impuestos y Aduanas Nacionales (DIAN), quien se encarga de realizar el control fiscal.
        .cajon.color-primario.p-4(data-aos="fade-left")
          p.mb-0 Los documentos cuentan con varias características, entre las principales, se encuentran:

    .row.justify-content-center.mb-5
      .col-xxl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .BGB03.h-100.p-4
          .h1.text-end.tc1.mb-0 01
          .row.justify-content-center.mb-4
            .col-10
              img(src='@/assets/curso/tema2/img02.svg' alt="Imagen decorativa")
          p.mb-0 Son el respaldo de las transacciones financieras de la organización.
      .col-xxl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="flip-right")
        .BGB01.h-100.p-4
          .h1.text-end.tc1.mb-0 02
          .row.justify-content-center.mb-4
            .col-10
              img(src='@/assets/curso/tema2/img03.svg' alt="Imagen decorativa")
          p.text-white.mb-0 Contribuyen con el cálculo de las operaciones realizadas.
      .col-xxl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .BGB04.h-100.p-4
          .h1.text-end.tc1.mb-0 03
          .row.justify-content-center.mb-4
            .col-10
              img(src='@/assets/curso/tema2/img04.svg' alt="Imagen decorativa")
          p.text-white.mb-0 Soportan los movimientos de bienes.
      .col-xxl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="flip-left")
        .BGB05.h-100.p-4
          .h1.text-end.text-white.mb-0 04
          .row.justify-content-center.mb-4
            .col-10
              img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
          p.text-white.mb-0 Respaldan la información financiera.
      .col-xxl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-left")
        .BGB06.h-100.p-4
          .h1.text-end.tc1.mb-0 05
          .row.justify-content-center.mb-4
            .col-10
              img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
          p.mb-0 Sirven como medida de control interna y externa.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img07.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 A continuación, se podrán visualizar los documentos contables y no contables, con sus respectivas características:
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          i Documentos contables y no contables
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img08.svg' alt="En la Figura 1 se presentan las características de los documentos contables y no contables, los cuales son útiles para la actividad empresarial.")
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img09.png' alt="Imagen decorativa")
      .col-lg-8
        p(data-aos="fade-left") Los documentos contables son la base para registrar las actividades económicas de una empresa, y sirven como comprobante de los movimientos y contabilizaciones financieras; las cuales se pueden auditar de manera interna y externa, e incluso puede ser requerido por la administración de impuestos. Estos documentos se archivan en orden cronológico, manteniendo la pulcritud del documento (sin tachones o enmendaduras), con cierre por mes o por trimestre; por lo general los registros contables se realizan, en función a la fecha de emisión, de ahí la importancia de mantener un buen archivo de la documentación. En Colombia, los soportes contables se deben guardar por cinco años.
        p.mb-0(data-aos="fade-left") Los documentos contables se pueden dividir por categorías según el uso que tengan los mismos, los cuales estan divididos en dos tipos, documentos internos y documentos externos.

    .cajon.color-primario.p-4.mb-5(data-aos="flip-up")
      p.mb-0 #[b Los documentos Internos], son los que la empresa elabora para su propio uso o para redimirlos a un tercero, todo documento que sea emitido por la empresa se encuentra dentro de esta categoría, como se puede ver a continuación:   
    
    .BGIMG01.px-md-5.px-4.py-4.mb-5(data-aos="zoom-in")
      SlyderF.mb-5(columnas="col-xl-3 col-lg-4 col-sm-6")
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img10.svg', alt='Factura de venta')
          .tarjeta.BG07.p-3(x="44%" y="75%" numero="+")
            p.mb-0 Documento comercial que se utiliza para registrar una venta, o un servicio, este es un comprobante de la operación realizada de forma legal.
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img11.svg', alt='Recibo de caja')
          .tarjeta.BG07.p-3(x="43%" y="74%" numero="+")
            p.mb-0 Soporte contable en el cual constan los ingresos en efectivo, cheque y otras formas de recaudo; el original se entrega al cliente y la copia se archiva.
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img12.svg', alt='Vale')
          .tarjeta.BG07.p-3(x="43%" y="74%" numero="+")
            p.mb-0 Documento crédito, que se expide como promesa de pago, por el cual el deudor se compromete a pagar, en una fecha determinada, en el mismo documento.
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img13.svg', alt='Comprobantes de egreso')
          .tarjeta.BG07.p-3(x="43%" y="74%" numero="+")
            p.mb-0 Documentos que respaldan la salida de la empresa; permite registrar pagos o abonos de diferentes obligaciones, este es el comprobante de dicha transacción económica.
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img14.svg', alt='Presupuesto')
          .tarjeta.BG07.p-3(x="43%" y="74%" numero="+")
            p.mb-0 Herramienta de planificación que presenta en términos cuantitativos, las actividades que se van a realizar en futuro en la empresa; es la estimación del costo necesario para llevar a cabo un proyecto.
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img15.svg', alt='Nota débito')
          .tarjeta.BG07.p-3(x="43%" y="74%" numero="+")
            p.mb-0 Comprobante que la empresa envía a su cliente, en la que notifica haber cargado o debitado en su cuenta, por un concepto determinado que se explica en la nota.
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img16.svg', alt='Nota crédito')
          .tarjeta.BG07.p-3(x="43%" y="74%" numero="+")
            p.mb-0 Comprobante que la empresa entrega a su cliente, para acreditar la devolución de un valor y concepto determinado, los cuales irán en la nota.
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img17.svg', alt='Documentos equivalentes')
          .tarjeta.BG07.p-3(x="43%" y="74%" numero="+")
            p.mb-0 Documentos que reemplazan la factura, en las obligaciones comerciales, con las personas que no están obligadas a expedir facturas.
        ImagenInfograficaB.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img18.svg', alt='Cheque')
          .tarjeta.BG07.p-3(x="43%" y="74%" numero="+")
            p.mb-0 Documento mercantil aceptado como medio de pago, firmado por el propietario de una cuenta bancaria, que habilita al que lo recibe a disponer una cantidad determinada de dinero, su principal función es la de emitir un pago sin necesidad de transportar dinero en efectivo.

    p.mb-5(data-aos="fade-right") Así mismo, existen #[b los documentos externos,] los cuales son comprobantes que recibe la empresa al realizar una transacción económica, por parte de terceros, como se puede ver a continuación:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img19.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Factura de compra") Documento tributario, realizado por el comprador, cuando el vendedor al ser un particular no tiene la capacidad para generar este documento.
          p(numero="2" titulo="Recibos de pago") Documento que se entrega a cualquier comprador, al momento de concretar el pago, por una transacción de compra.
          p(numero="3" titulo="Comprobante de devolución") Documento mediante el cual, se registran y detallan las devoluciones por parte de los clientes.
          p(numero="4" titulo="Letra de cambio") Documento de cobro, donde se ordena una determinada suma de dinero con una fecha de vencimiento, se utiliza como garantía de pago y también financiera.
          p(numero="5" titulo="Desprendible de consignaciones") Comprobante que elaboran los bancos y suministran a sus clientes, para el diligenciamiento al consignar.
          p(numero="6" titulo="Cheque") Documento mercantil, aceptado como medio de pago, firmado por el propietario de una cuenta bancaria, que habilita al que lo recibe, a disponer una cantidad determinada de dinero, su principal función es la de emitir un pago sin necesidad de transportar dinero en efectivo.

    .p.mb-5(data-aos="fade-right") Los documentos no contables son aquellos que solo ofrecen información de una operación mercantil, entre estos documentos se encuentran:  

    .BGM08.py-5.px-md-5.px-4.mb-5(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Cotizaciones',
        texto:
          'Documentos que suministra el vendedor a solicitud del cliente, donde se consigna información de la venta de productos y servicios, con las condiciones bajo las cuales se va a realizar la negociación.',
        imagen: require('@/assets/curso/tema2/img20.png'),
      },
      {
        titulo: 'Remisiones',
        texto:
          'Documentos que sirve para acreditar que el receptor de un envío ha recibido el pedido que esperaba.',
        imagen: require('@/assets/curso/tema2/img21.png'),
      },
      {
        titulo: 'Órden de pedido',
        texto:
          'Es una solicitud formal de un bien o servicio, en este documento se especifican detalladamente, los artículos o servicios, solicitados.',
        imagen: require('@/assets/curso/tema2/img22.png'),
      },
      {
        titulo: 'Órden de compra',
        texto:
          'Documento informativo que se expide al cliente, para el envío de la mercancía.',
        imagen: require('@/assets/curso/tema2/img23.png'),
      },
      {
        titulo: 'Órden de entrega',
        texto:
          'Permite certificar la entrega de productos vendidos al cliente.',
        imagen: require('@/assets/curso/tema2/img24.png'),
      },
      {
        titulo: 'Remesa',
        texto:
          'Es un documento bancario, para ordenar la liquidación de cobros y pagos de varias operaciones.',
        imagen: require('@/assets/curso/tema2/img25.png'),
      },
      {
        titulo: 'Hoja de vida',
        texto:
          'Herramienta utilizada para la selección de personal, a partir de la información que se consigna allí.',
        imagen: require('@/assets/curso/tema2/img26.png'),
      },
      {
        titulo: 'Solicitud',
        texto: 'Información solicitada referente a algo en particular.',
        imagen: require('@/assets/curso/tema2/img27.png'),
      },
    ],
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
