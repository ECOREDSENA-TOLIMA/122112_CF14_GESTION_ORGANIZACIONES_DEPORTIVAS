export default {
  global: {
    componenteFormativo: 'Documentos soporte',
    descripcionCurso:
      'En este componente formativo se abordarán los temas relacionados con el documento soporte, el registro de normas y los propósitos para elaborar los documentos para los soportes contables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-10'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-10.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Documentos soporte',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Características de la documentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Propósito de la documentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normas de elaboración de la documentación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Documentos soporte',
      referencia: 'Almaraz. A. (s.f.). Curso de contabilidad básica.',
      tipo: 'Documento',
      link:
        'https://www.tesuva.edu.co/phocadownloadpap/Curso%20de%20contabilidad%20basica%20con%20iva.pdf',
    },
    {
      tema: '1. Documentos soporte',
      referencia:
        'Actualicese.com (2021). Documento soporte en compras con no obligados a facturar: lo que debes conocer al respecto.',
      tipo: 'Página web',
      link:
        'https://actualicese.com/documento-soporte-en-compras-con-no-obligados-a-facturar-lo-que-debes-conocer-al-respecto/',
    },
    {
      tema: '1. Documentos soporte',
      referencia:
        'Ministerio de vivienda. (2021). Instructivo: creación documento soporte en adquisiciones efectuadas a no obligados a facturar.',
      tipo: 'Instructivo',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/procesos/fra-i-05-instructivo-creacion-documento-soporte-en-adquisiciones-efectuadas-a-no-obligados-a-facturar-1.0.pdf',
    },
    {
      tema: '4. Normas de elaboración de la documentación',
      referencia:
        'Actualicese.com (2018). Normas relacionadas con libros y soportes contables continúan vigentes.',
      tipo: 'Página web',
      link:
        'https://actualicese.com/normas-relacionadas-con-libros-y-soportes-contables-continuan-vigentes/',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad',
      significado:
        'parte de las finanzas que estudia las distintas partidas que reflejan los movimientos económicos y financieros de una empresa o entidad.',
    },
    {
      termino: 'Clasificación',
      significado:
        'es una función lógica que forma grupos, series o clases de objetos similares o afines. Los objetos que pertenecen a una clase son afines en el sentido que poseen características esenciales comunes a todos ellos.',
    },
    {
      termino: 'Empresa',
      significado:
        'entidad en la que intervienen el capital y el trabajo como factores de producción de actividades industriales o mercantiles o para la prestación de servicios.',
    },
    {
      termino: 'Registro mercantil',
      significado:
        'es el registro de los comerciantes y sus establecimientos de comercio, así como el depósito de documentos de carácter mercantil más importantes para el comerciante.',
    },
    {
      termino: 'Sociedades comerciales',
      significado:
        'es una sociedad que tiene como objetivo la realización de actos de comercio o, en general, una actividad sujeta al derecho mercantil, también se diferencia de una sociedad civil en el hecho de que esta última no contempla en su objeto social actos mercantiles.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ayala, S., Fino, G. (2015). Contabilidad Básica General: un enfoque administrativo y de control interno, Libro I. Corporación Universitaria Republicana.',
    },
    {
      referencia:
        'DIAN, Ministerio de Hacienda. (2020). Documento Soporte, en adquisiciones efectuados a sujetos no obligados a expedir factura de venta o documento equivalente.',
    },
    {
      referencia: 'Gómez, G. (2001). Los soportes contables.',
      link: 'https://www.gestiopolis.com/soportes-contables/',
    },
    {
      referencia:
        'Contaduría General de la Nación, Ministerio de Hacienda. (2018). Norma de Proceso Contable y Sistema Documental Contables.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Tatiana Cristina Vargas Ossa',
          cargo: 'Instructora',
          centro: 'Regional Antioquia, Centro de servicios de Salud',
        },
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Profesional experto temático',
          centro: 'Regional Antioquia, Centro de servicios de Salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Bogotá, Centro de Gestión Industrial.',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
