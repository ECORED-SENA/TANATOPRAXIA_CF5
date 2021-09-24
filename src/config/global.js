export default {
  global: {
    componenteFormativo: 'Introducción a la tanatopraxia',
    descripcionCurso:
      'El presente componente formativo se desarrolla en torno a un contexto básico sobre los fundamentos de la tanatopraxia, una práctica que ha evolucionado a lo largo de la historia humana en torno a procedimientos y normatividad. Se espera que el acceso a la información organizada siga siendo un pretexto para su aprendizaje. Bienvenido.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la tanatopraxia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marco normativo de la tanatopraxia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seguridad y salud en el trabajo de la tanatopraxia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Laboratorio de tanatopraxia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Insumos y elementos usados en tanatopraxia y tanatoestética',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Suministros químicos para embalsamar',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Instalaciones físicas del laboratorio de tanatopraxia',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Equipos en el laboratorio de tanatopraxia',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Canal Capital Bogotá. (2019). Profesiones Insólitas -Tanatólogo y restauradora de libros [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=FeF0Qls1iq8',
    },
    {
      referencia:
        'Circular 28 de 2004. [Secretaría Distrital de Salud de Bogotá]. Condiciones higiénico sanitarias. Diciembre 23 de 2004. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=16763',
    },
    {
      referencia:
        'ICONTEC. (2017). Servicios funerarios. Requisitos (NTC 5840). ',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=AF60935720F13C6466C0297B7F80FF16&Req=',
    },
    {
      referencia:
        'Decreto 391 de 1991. [Alcaldía Mayor de Bogotá]. Por el cual se reglamenta el trámite para la inscripción y obtención de la licencia sanitaria de funcionamiento para las funerarias y agencias mortuorias. Julio 3 de 1991.  ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=1863&dt=S',
    },
    {
      referencia:
        'Decreto 1295 de 1994. [Ministerio de Trabajo y Seguridad Social]. Por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales. Junio 22 de 1994. DO. Nº 41.405. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/decreto_1295_1994.html',
    },
    {
      referencia:
        'Ley 9 de 1979. Por la cual se dictan medidas sanitarias. Enero 24 de 1979. DO. Nº 35.308. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf',
    },
    {
      referencia:
        'Ley 1562 del 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012. DO. Nº 48.488. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/68798/ley_1562_de_2012_Sistema_de_Riesgos_Laborales.pdf/eacf951b-5db0-0216-8e9e-269175f29da4?t=1487695271349',
    },
    {
      referencia:
        'Mayer, R. (2006). Embalming: History, Theory, and Practice. McGraw-Hill Education.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Aseguramiento en riesgos laborales. Imprenta Nacional. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/RL/Aseguramiento%20en%20riesgos%20laborales.pdf',
    },
    {
      referencia:
        'Norma 260601020 del 2017. [SENA-Mesa Sectorial Servicios Funerarios]. Embalsamar el cuerpo de acuerdo con normativa y requerimientos del cliente. ',
      link:
        'https://certificados.sena.edu.co/claborales/saveas.asp?var1=260601020',
    },
    {
      referencia:
        'Resolución 181331 de 2009. [Ministerio de Minas y Energía]. Por la cual se expide el Reglamento Técnico de Iluminación y Alumbrado Público – RETILAP y se dictan otras disposiciones. Agosto 6 de 2009. DO. Nº 47.447. ',
      link:
        'https://www.minenergia.gov.co/documents/10180/23931303/RES181331_2009.pdf/53f7e906-94de-4cba-959d-ef45b04e93c6',
    },
    {
      referencia:
        'Resolución 0631 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones. Marzo 17 de 2015. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/d1-res_631_marz_2015.pdf',
    },
    {
      referencia: 'SORTEM. (2017). Tanatoplastia. Catálogo General. ',
      link: 'https://issuu.com/sortem/docs/cat_c3_a1logo_20gral_20sortem',
    },
  ],
  glosario: [
    {
      termino: 'Descomposición',
      significado:
        'Es la separación de compuestos en sustancias más simples mediante la acción de enzimas microbianas y/o autolíticas.',
    },
    {
      termino: 'Embalsamar',
      //terminoHtml: '<em>Suftware</em>',
      significado:
        'Es tratar un cadáver con productos químicos para retardar el proceso de descomposición y restablecer un aspecto físico aceptable.',
    },
    {
      termino: 'Instrumento ',
      significado:
        'Es un objeto fabricado para la realización de trabajos o actividades.',
    },
    {
      termino: 'Sala de embalsamamiento ',
      //terminoHtml: '<em>Áectores</em>',
      significado:
        'Es un espacio físico, parecido a una sala quirúrgica, donde se realizan los procesos de tanatopraxia y tanatoestética en el fallecido.',
    },
    {
      termino: 'Preservante',
      significado:
        'Son los productos químicos que inactivan las bacterias, deteniendo el proceso de descomposición mediante la alteración de las enzimas y lisinas.',
    },
  ],
  complementario: [
    {
      texto:
        'Resolución 0631 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones. Marzo 17 de 2015. ',
      tipo: 'PDF',
      descarga: '/downloads/d1-0631_7marz_2015.pdf',
    },
    {
      texto:
        'Circular 28 de 2004. [Secretaría Distrital de Salud de Bogotá]. Condiciones higiénico sanitarias. Diciembre 23 de 2004.',
      tipo: 'Documento web',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=16763',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (s. f.). Aseguramiento en riesgos laborales. Imprenta Nacional.',
      tipo: 'PDF',
      descarga: '/downloads/Aseguramiento en riesgos laborales.pdf',
    },
    {
      texto:
        'Ley 1562 del 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012. DO. Nº 48.488.',
      tipo: 'Documento web',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/68798/ley_1562_de_2012_Sistema_de_Riesgos_Laborales.pdf/eacf951b-5db0-0216-8e9e-269175f29da4?t=1487695271349',
    },
    {
      texto:
        'Decreto 1295 de 1994. [Ministerio de Trabajo y Seguridad Social]. Por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales. Junio 22 de 1994. DO. Nº 41.405.',
      tipo: 'Documento web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/decreto_1295_1994.html',
    },
    {
      texto:
        'Canal Capital Bogotá. (2019). Profesiones Insólitas -Tanatólogo y restauradora de libros [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FeF0Qls1iq8',
    },
    {
      texto: 'SORTEM. (2017). Tanatoplastia. Catálogo General.',
      tipo: 'Texto digital',
      link: 'https://issuu.com/sortem/docs/cat_c3_a1logo_20gral_20sortem',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder desarrollo curricular servicios personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana Maria Bustamante Cataño',
        cargo: 'Profesional de diseño y producción curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Jesus Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
