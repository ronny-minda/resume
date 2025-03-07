import { openDB } from "idb";
import { Signal, signal } from "@lit-labs/preact-signals";

// Crear la base de datos
const dbPromise = openDB("appDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("signals")) {
      db.createObjectStore("signals");
    }
  },
});

// Función para guardar en IndexedDB
async function saveToDB(key: string, value: any) {
  const db = await dbPromise;
  await db.put("signals", value, key);
}

// Función para recuperar de IndexedDB
async function loadFromDB<T>(key: string, defaultValue: T): Promise<T> {
  const db = await dbPromise;
  return (await db.get("signals", key)) ?? defaultValue;
}

// Función para crear una señal sincronizada con IndexedDB
function createPersistentSignal<T>(key: string, defaultValue: T): Signal<T> {
  const sig = signal<T>(defaultValue);

  // Cargar el valor desde IndexedDB
  loadFromDB<T>(key, defaultValue).then((value) => (sig.value = value));

  // Guardar cambios en IndexedDB
  sig.subscribe((value) => saveToDB(key, value));

  return sig;
}



export const loaderDescarga = createPersistentSignal("loaderDescarga", false);
export const zoom = createPersistentSignal("zoom", 50);
export const template = createPersistentSignal('template', false);
export const templates = createPersistentSignal('templates', [
  {
    img: "plantillasImg/Plantilla CV - Harvard.jpg",
    pdf: "plantillas/Plantilla CV - Harvard.pdf",
    name: "Plantilla CV - Harvard",
  },
  {
    img: "plantillasImg/Black Modern Professional Resume.jpg",
    pdf: "plantillas/Black Modern Professional Resume.pdf",
    name: "Black Modern Professional Resume",
  },
  {
    img: "plantillasImg/Currículum Agente comercial Minimalista Blanco y negro.jpg",
    pdf: "plantillas/Currículum Agente comercial Minimalista Blanco y negro.pdf",
    name: "Currículum Agente comercial Minimalista Blanco y negro",
  },
  {
    img: "plantillasImg/Currículum Agente comercial Profesional Blanco y negro.jpg",
    pdf: "plantillas/Currículum Agente comercial Profesional Blanco y negro.pdf",
    name: "Currículum Agente comercial Profesional Blanco y negro",
  },
  {
    img: "plantillasImg/Currículum Agente comercial Sencillo Crema.jpg",
    pdf: "plantillas/Currículum Agente comercial Sencillo Crema.pdf",
    name: "Currículum Agente comercial Sencillo Crema",
  },
  {
    img: "plantillasImg/Currículum CV Diseñador Gráfico Masculino Profesional Azul.jpg",
    pdf: "plantillas/Currículum CV Diseñador Gráfico Masculino Profesional Azul.pdf",
    name: "Currículum CV Diseñador Gráfico Masculino Profesional Azul",
  },
  {
    img: "plantillasImg/Curriculum CV Resume Profesional Marketing Creativo Rosa.jpg",
    pdf: "plantillas/Curriculum CV Resume Profesional Marketing Creativo Rosa.pdf",
    name: "Curriculum CV Resume Profesional Marketing Creativo Rosa",
  },
  {
    img: "plantillasImg/Currículum Diseñadora Minimalista Gris y Blanco.jpg",
    pdf: "plantillas/Currículum Diseñadora Minimalista Gris y Blanco.pdf",
    name: "Currículum Diseñadora Minimalista Gris y Blanco",
  },
  {
    img: "plantillasImg/Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris.jpg",
    pdf: "plantillas/Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris.pdf",
    name: "Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris",
  },
  {
    img: "plantillasImg/Currículum Vitae Cv de Administración Simple Azul.jpg",
    pdf: "plantillas/Currículum Vitae Cv de Administración Simple Azul.pdf",
    name: "Currículum Vitae Cv de Administración Simple Azul",
  },
  {
    img: "plantillasImg/Currículum Vitae CV de Contabilidad Simple Gris.jpg",
    pdf: "plantillas/Currículum Vitae CV de Contabilidad Simple Gris.pdf",
    name: "Currículum Vitae CV de Contabilidad Simple Gris",
  },
  {
    img: "plantillasImg/Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa.jpg",
    pdf: "plantillas/Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa.pdf",
    name: "Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa",
  },
  {
    img: "plantillasImg/Curriculum Vitae CV Elegante Profesional Rosa.jpg",
    pdf: "plantillas/Curriculum Vitae CV Elegante Profesional Rosa.pdf",
    name: "Curriculum Vitae CV Elegante Profesional Rosa",
  },
  {
    img: "plantillasImg/Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro.jpg",
    pdf: "plantillas/Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro.pdf",
    name: "Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro",
  },
  {
    img: "plantillasImg/Currículum Vitae CV Minimalista Sencillo Clásico Gris.jpg",
    pdf: "plantillas/Currículum Vitae CV Minimalista Sencillo Clásico Gris.pdf",
    name: "Currículum Vitae CV Minimalista Sencillo Clásico Gris",
  },
  {
    img: "",
    pdf: "plantillas/CV Español.pdf",
    name: "CV Español",
  },
]);

export const cv = createPersistentSignal('cv', {
  contacto: {
    telefono: "0993105654",
    email: "ronny.minda.vera@gmail.com",
    web: "https://ronnyminda.vercel.app/",
    direccion: "ISLA TRINITARIA",
    direccionExacta: "ISLA TRINITARIA COOP ANTONIO MZ. 12A SL. 13B",
  },
  perfil: {
    imgBase64: "",
    nombre: "Ronny Michael Minda Vera",
    titulo: "Desarrollador Full Stack",
    descripcion:
      "Desarrollador web con experiencia en desarrollo de aplicaciones web, diseño de interfaz de usuario (UI) y experiencia de usuario (UX). Enfocado en el desarrollo de software tanto front-end como back-end, con el objetivo de crear aplicaciones dinámicas y estáticas con experiencias intuitivas y atractivas.",
  },
  datosPersonales: {
    cedula: "0954703468",
    fechaNacimiento: "25/08/1999",
    estadoCivil: "Soltero",
    nacionalidad: "Ecuatoriano",
    lugarNacimiento: "Guayaquil",
    edad: 24,
  },
  educacion: [
    {
      fechaInicio: "2019",
      fechaFin: "2023",
      titulo: "Tecnologo en Sistemas",
      nivel: "Superior",
      institucion: "Instituto Superior Universitario Bolivariano (ITB)",
      descripcion: "Formación como Desarrollador de Software.",
    },
    {
      fechaInicio: "2020",
      fechaFin: "2022",
      titulo: "Full Stack",
      nivel: "Curso",
      institucion: "Platzi",
      descripcion: "Desarrollo Web en plataforma de aprendizaje en línea.",
    },
  ],
  experiencia: [
    {
      titulo: "Desarrollador Aplicaciones Frontend Eficientes",
      descripcion: [
        "Desarrollo de aplicaciones frontend con experiencia en React",
        "Tailwindcss, Zustand, Redux",
        "Styled Components",
        "Styled Components",
      ],
      duracionInicio: "Nov. 2023",
      duracionFin: "Feb. 2024",
      empresa: "Central File",
    },
    // {
    //   titulo: "Desarrollador frontend (Portafolio de fotógrafo)",
    //   descripcion:
    //     "Diseño minimalista para destacar fotografías con transiciones y animaciones sutiles.",
    //   duracion: "Mar. 2022 - May. 2022",
    //   empresa: "Servicios Prestados",
    // },
    {
      titulo: "Plataforma de administración de estudiantes Frontend/Backend",
      descripcion: [
        "Desarrollo de una aplicación con Node, Express",
        "React.js y MongoDB",
        "Gestión eficiente de datos y funcionalidades CRUD",
      ],
      duracionInicio: "May. 2022",
      duracionFin: "Jul. 2022",
      empresa: "Servicios Prestados",
    },
    {
      titulo: "Desarrollador Web Frontend y Backend",
      descripcion: [
        "Desarrollo y mantenimiento de sitios web usando React",
        "Vue, Next.js, y Nuxt.js",
        "Implementación de animaciones con Framer Motion y optimización de rendimiento",
      ],
      duracionInicio: "Ago. 2022",
      duracionFin: "Dic. 2022",
      empresa: "Manasystem (Servicios Prestados)",
    },
  ],
  experticia: [
    "Frontend y Backend",
    "UX UI",
    "Arquitectura cliente-servidor con REST APIs",
    "Gestión de estado con Tanstack Query",
  ],
  tecnologias: [
    "Node.js APIs",
    "Framer Motion",
    "Vue",
    "Nuxt.js",
    "React.js",
    "Preact.js",
    "Next.js",
    "MongoDB",
    "Express.js",
    "Bcrypt.js",
    "Redux",
    "Zustand",
    "Tailwindcss",
  ],
  referencias: [
    {
      nombre: "Byron Asencio Rodriguez",
      puesto: "Ingeniero en Sistemas Computacionales - MSIG, Jefe de Sistemas",
      telefono: "+593 99 790 0800",
    },
    {
      nombre: "Brady Gutierrez",
      puesto: "Analista Desarrollador, Tecnólogo de Desarrollo de Software",
      telefono: "+593 97 932 8153",
    },
    {
      nombre: "Paul Cando",
      puesto:
        "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
      telefono: "+593 98 249 9225",
    },
    {
      nombre: "Dennisse Pérez Cedeño",
      puesto:
        "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
      telefono: "+593 99 440 8857",
    },
  ],
});

export const informaionSesible = createPersistentSignal('informaionSesible', true);
export const cambio = createPersistentSignal('cambio', false);
export const seleccionado = createPersistentSignal('seleccionado', 15);
export const perfilBase64Image = createPersistentSignal('perfilBase64Image', "");
export const informacionCv = createPersistentSignal('informacionCv', {
  contacto: {
    telefono: "0993105654",
    email: "ronny.minda.vera@gmail.com",
    web: "https://ronnyminda.vercel.app/",
    direccion: "ISLA TRINITARIA",
    direccionExacta: "ISLA TRINITARIA COOP ANTONIO MZ. 12A SL. 13B",
  },
  perfil: {
    nombre: "Ronny Michael Minda Vera",
    titulo: "Desarrollador Full Stack",
    descripcion:
      "Desarrollador web con experiencia en desarrollo de aplicaciones web, diseño de interfaz de usuario (UI) y experiencia de usuario (UX). Enfocado en el desarrollo de software tanto front-end como back-end, con el objetivo de crear aplicaciones dinámicas y estáticas con experiencias intuitivas y atractivas.",
  },
  datosPersonales: {
    cedula: "0954703468",
    fechaNacimiento: "25/08/1999",
    estadoCivil: "Soltero",
    nacionalidad: "Ecuatoriano",
    lugarNacimiento: "Guayaquil",
    edad: 24,
  },
  educacion: [
    {
      fechaInicio: "2019",
      fechaFin: "2023",
      titulo: "Tecnologo en Sistemas",
      nivel: "Superior",
      institucion: "Instituto Superior Universitario Bolivariano (ITB)",
      descripcion: "Formación como Desarrollador de Software.",
    },
    {
      fechaInicio: "2020",
      fechaFin: "2022",
      titulo: "Full Stack",
      nivel: "Curso",
      institucion: "Platzi",
      descripcion: "Desarrollo Web en plataforma de aprendizaje en línea.",
    },
  ],
  experiencia: [
    {
      titulo: "Desarrollador Aplicaciones Frontend Eficientes",
      descripcion: [
        "Desarrollo de aplicaciones frontend con experiencia en React",
        "Tailwindcss, Zustand, Redux",
        "Styled Components",
        "Styled Components",
      ],
      duracionInicio: "Nov. 2023",
      duracionFin: "Feb. 2024",
      empresa: "Central File",
    },
    {
      titulo: "Plataforma de administración de estudiantes Frontend/Backend",
      descripcion: [
        "Desarrollo de una aplicación con Node, Express",
        "React.js y MongoDB",
        "Gestión eficiente de datos y funcionalidades CRUD",
      ],
      duracionInicio: "May. 2022",
      duracionFin: "Jul. 2022",
      empresa: "Servicios Prestados",
    },
    {
      titulo: "Desarrollador Web Frontend y Backend",
      descripcion: [
        "Desarrollo y mantenimiento de sitios web usando React",
        "Vue, Next.js, y Nuxt.js",
        "Implementación de animaciones con Framer Motion y optimización de rendimiento",
      ],
      duracionInicio: "Ago. 2022",
      duracionFin: "Dic. 2022",
      empresa: "Manasystem (Servicios Prestados)",
    },
  ],
  experticia: [
    "Frontend y Backend",
    "UX UI",
    "Arquitectura cliente-servidor con REST APIs",
    "Gestión de estado con Tanstack Query",
  ],
  tecnologias: [
    "Node.js APIs",
    "Framer Motion",
    "Vue",
    "Nuxt.js",
    "React.js",
    "Preact.js",
    "Next.js",
    "MongoDB",
    "Express.js",
    "Bcrypt.js",
    "Redux",
    "Zustand",
    "Tailwindcss",
  ],
  referencias: [
    {
      nombre: "Byron Asencio Rodriguez",
      puesto:
        "Ingeniero en Sistemas Computacionales - MSIG, Jefe de Sistemas",
      telefono: "+593 99 790 0800",
    },
    {
      nombre: "Brady Gutierrez",
      puesto: "Analista Desarrollador, Tecnólogo de Desarrollo de Software",
      telefono: "+593 97 932 8153",
    },
    {
      nombre: "Paul Cando",
      puesto:
        "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
      telefono: "+593 98 249 9225",
    },
    {
      nombre: "Dennisse Pérez Cedeño",
      puesto:
        "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
      telefono: "+593 99 440 8857",
    },
  ],
  informacionDestino: {
    correoDestino: "",
    mensajeDestino: "",
    asuntoDestino: "",
  },
});
export const informacionDestino = createPersistentSignal('informacionDestino', {
  correoDestino: "",
  mensajeDestino: "",
  asuntoDestino: "",
});










// export const loaderDescarga = signal(false);
// export const template = signal(false);
// export const templates = signal([
//   {
//     img: "plantillasImg/Plantilla CV - Harvard.jpg",
//     pdf: "plantillas/Plantilla CV - Harvard.pdf",
//     name: "Plantilla CV - Harvard",
//   },
//   {
//     img: "plantillasImg/Black Modern Professional Resume.jpg",
//     pdf: "plantillas/Black Modern Professional Resume.pdf",
//     name: "Black Modern Professional Resume",
//   },
//   {
//     img: "plantillasImg/Currículum Agente comercial Minimalista Blanco y negro.jpg",
//     pdf: "plantillas/Currículum Agente comercial Minimalista Blanco y negro.pdf",
//     name: "Currículum Agente comercial Minimalista Blanco y negro",
//   },
//   {
//     img: "plantillasImg/Currículum Agente comercial Profesional Blanco y negro.jpg",
//     pdf: "plantillas/Currículum Agente comercial Profesional Blanco y negro.pdf",
//     name: "Currículum Agente comercial Profesional Blanco y negro",
//   },
//   {
//     img: "plantillasImg/Currículum Agente comercial Sencillo Crema.jpg",
//     pdf: "plantillas/Currículum Agente comercial Sencillo Crema.pdf",
//     name: "Currículum Agente comercial Sencillo Crema",
//   },
//   {
//     img: "plantillasImg/Currículum CV Diseñador Gráfico Masculino Profesional Azul.jpg",
//     pdf: "plantillas/Currículum CV Diseñador Gráfico Masculino Profesional Azul.pdf",
//     name: "Currículum CV Diseñador Gráfico Masculino Profesional Azul",
//   },
//   {
//     img: "plantillasImg/Curriculum CV Resume Profesional Marketing Creativo Rosa.jpg",
//     pdf: "plantillas/Curriculum CV Resume Profesional Marketing Creativo Rosa.pdf",
//     name: "Curriculum CV Resume Profesional Marketing Creativo Rosa",
//   },
//   {
//     img: "plantillasImg/Currículum Diseñadora Minimalista Gris y Blanco.jpg",
//     pdf: "plantillas/Currículum Diseñadora Minimalista Gris y Blanco.pdf",
//     name: "Currículum Diseñadora Minimalista Gris y Blanco",
//   },
//   {
//     img: "plantillasImg/Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris.jpg",
//     pdf: "plantillas/Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris.pdf",
//     name: "Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris",
//   },
//   {
//     img: "plantillasImg/Currículum Vitae Cv de Administración Simple Azul.jpg",
//     pdf: "plantillas/Currículum Vitae Cv de Administración Simple Azul.pdf",
//     name: "Currículum Vitae Cv de Administración Simple Azul",
//   },
//   {
//     img: "plantillasImg/Currículum Vitae CV de Contabilidad Simple Gris.jpg",
//     pdf: "plantillas/Currículum Vitae CV de Contabilidad Simple Gris.pdf",
//     name: "Currículum Vitae CV de Contabilidad Simple Gris",
//   },
//   {
//     img: "plantillasImg/Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa.jpg",
//     pdf: "plantillas/Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa.pdf",
//     name: "Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa",
//   },
//   {
//     img: "plantillasImg/Curriculum Vitae CV Elegante Profesional Rosa.jpg",
//     pdf: "plantillas/Curriculum Vitae CV Elegante Profesional Rosa.pdf",
//     name: "Curriculum Vitae CV Elegante Profesional Rosa",
//   },
//   {
//     img: "plantillasImg/Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro.jpg",
//     pdf: "plantillas/Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro.pdf",
//     name: "Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro",
//   },
//   {
//     img: "plantillasImg/Currículum Vitae CV Minimalista Sencillo Clásico Gris.jpg",
//     pdf: "plantillas/Currículum Vitae CV Minimalista Sencillo Clásico Gris.pdf",
//     name: "Currículum Vitae CV Minimalista Sencillo Clásico Gris",
//   },
//   {
//     img: "",
//     pdf: "plantillas/CV Español.pdf",
//     name: "CV Español",
//   },
// ]);

// export const cv = signal({
//   contacto: {
//     telefono: "0993105654",
//     email: "ronny.minda.vera@gmail.com",
//     web: "https://ronnyminda.vercel.app/",
//     direccion: "ISLA TRINITARIA",
//     direccionExacta: "ISLA TRINITARIA COOP ANTONIO MZ. 12A SL. 13B",
//   },
//   perfil: {
//     imgBase64: "",
//     nombre: "Ronny Michael Minda Vera",
//     titulo: "Desarrollador Full Stack",
//     descripcion:
//       "Desarrollador web con experiencia en desarrollo de aplicaciones web, diseño de interfaz de usuario (UI) y experiencia de usuario (UX). Enfocado en el desarrollo de software tanto front-end como back-end, con el objetivo de crear aplicaciones dinámicas y estáticas con experiencias intuitivas y atractivas.",
//   },
//   datosPersonales: {
//     cedula: "0954703468",
//     fechaNacimiento: "25/08/1999",
//     estadoCivil: "Soltero",
//     nacionalidad: "Ecuatoriano",
//     lugarNacimiento: "Guayaquil",
//     edad: 24,
//   },
//   educacion: [
//     {
//       fechaInicio: "2019",
//       fechaFin: "2023",
//       titulo: "Tecnologo en Sistemas",
//       nivel: "Superior",
//       institucion: "Instituto Superior Universitario Bolivariano (ITB)",
//       descripcion: "Formación como Desarrollador de Software.",
//     },
//     {
//       fechaInicio: "2020",
//       fechaFin: "2022",
//       titulo: "Full Stack",
//       nivel: "Curso",
//       institucion: "Platzi",
//       descripcion: "Desarrollo Web en plataforma de aprendizaje en línea.",
//     },
//   ],
//   experiencia: [
//     {
//       titulo: "Desarrollador Aplicaciones Frontend Eficientes",
//       descripcion: [
//         "Desarrollo de aplicaciones frontend con experiencia en React",
//         "Tailwindcss, Zustand, Redux",
//         "Styled Components",
//         "Styled Components",
//       ],
//       duracionInicio: "Nov. 2023",
//       duracionFin: "Feb. 2024",
//       empresa: "Central File",
//     },
//     // {
//     //   titulo: "Desarrollador frontend (Portafolio de fotógrafo)",
//     //   descripcion:
//     //     "Diseño minimalista para destacar fotografías con transiciones y animaciones sutiles.",
//     //   duracion: "Mar. 2022 - May. 2022",
//     //   empresa: "Servicios Prestados",
//     // },
//     {
//       titulo: "Plataforma de administración de estudiantes Frontend/Backend",
//       descripcion: [
//         "Desarrollo de una aplicación con Node, Express",
//         "React.js y MongoDB",
//         "Gestión eficiente de datos y funcionalidades CRUD",
//       ],
//       duracionInicio: "May. 2022",
//       duracionFin: "Jul. 2022",
//       empresa: "Servicios Prestados",
//     },
//     {
//       titulo: "Desarrollador Web Frontend y Backend",
//       descripcion: [
//         "Desarrollo y mantenimiento de sitios web usando React",
//         "Vue, Next.js, y Nuxt.js",
//         "Implementación de animaciones con Framer Motion y optimización de rendimiento",
//       ],
//       duracionInicio: "Ago. 2022",
//       duracionFin: "Dic. 2022",
//       empresa: "Manasystem (Servicios Prestados)",
//     },
//   ],
//   experticia: [
//     "Frontend y Backend",
//     "UX UI",
//     "Arquitectura cliente-servidor con REST APIs",
//     "Gestión de estado con Tanstack Query",
//   ],
//   tecnologias: [
//     "Node.js APIs",
//     "Framer Motion",
//     "Vue",
//     "Nuxt.js",
//     "React.js",
//     "Preact.js",
//     "Next.js",
//     "MongoDB",
//     "Express.js",
//     "Bcrypt.js",
//     "Redux",
//     "Zustand",
//     "Tailwindcss",
//   ],
//   referencias: [
//     {
//       nombre: "Byron Asencio Rodriguez",
//       puesto: "Ingeniero en Sistemas Computacionales - MSIG, Jefe de Sistemas",
//       telefono: "+593 99 790 0800",
//     },
//     {
//       nombre: "Brady Gutierrez",
//       puesto: "Analista Desarrollador, Tecnólogo de Desarrollo de Software",
//       telefono: "+593 97 932 8153",
//     },
//     {
//       nombre: "Paul Cando",
//       puesto:
//         "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
//       telefono: "+593 98 249 9225",
//     },
//     {
//       nombre: "Dennisse Pérez Cedeño",
//       puesto:
//         "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
//       telefono: "+593 99 440 8857",
//     },
//   ],
// });

// export const informaionSesible = signal(true);
// export const cambio = signal(false);
// export const seleccionado = signal(15);
// export const perfilBase64Image = signal("");
// export const informacionCv = signal({
//   contacto: {
//     telefono: "0993105654",
//     email: "ronny.minda.vera@gmail.com",
//     web: "https://ronnyminda.vercel.app/",
//     direccion: "ISLA TRINITARIA",
//     direccionExacta: "ISLA TRINITARIA COOP ANTONIO MZ. 12A SL. 13B",
//   },
//   perfil: {
//     nombre: "Ronny Michael Minda Vera",
//     titulo: "Desarrollador Full Stack",
//     descripcion:
//       "Desarrollador web con experiencia en desarrollo de aplicaciones web, diseño de interfaz de usuario (UI) y experiencia de usuario (UX). Enfocado en el desarrollo de software tanto front-end como back-end, con el objetivo de crear aplicaciones dinámicas y estáticas con experiencias intuitivas y atractivas.",
//   },
//   datosPersonales: {
//     cedula: "0954703468",
//     fechaNacimiento: "25/08/1999",
//     estadoCivil: "Soltero",
//     nacionalidad: "Ecuatoriano",
//     lugarNacimiento: "Guayaquil",
//     edad: 24,
//   },
//   educacion: [
//     {
//       fechaInicio: "2019",
//       fechaFin: "2023",
//       titulo: "Tecnologo en Sistemas",
//       nivel: "Superior",
//       institucion: "Instituto Superior Universitario Bolivariano (ITB)",
//       descripcion: "Formación como Desarrollador de Software.",
//     },
//     {
//       fechaInicio: "2020",
//       fechaFin: "2022",
//       titulo: "Full Stack",
//       nivel: "Curso",
//       institucion: "Platzi",
//       descripcion: "Desarrollo Web en plataforma de aprendizaje en línea.",
//     },
//   ],
//   experiencia: [
//     {
//       titulo: "Desarrollador Aplicaciones Frontend Eficientes",
//       descripcion: [
//         "Desarrollo de aplicaciones frontend con experiencia en React",
//         "Tailwindcss, Zustand, Redux",
//         "Styled Components",
//         "Styled Components",
//       ],
//       duracionInicio: "Nov. 2023",
//       duracionFin: "Feb. 2024",
//       empresa: "Central File",
//     },
//     // {
//     //   titulo: "Desarrollador frontend (Portafolio de fotógrafo)",
//     //   descripcion:
//     //     "Diseño minimalista para destacar fotografías con transiciones y animaciones sutiles.",
//     //   duracion: "Mar. 2022 - May. 2022",
//     //   empresa: "Servicios Prestados",
//     // },
//     {
//       titulo: "Plataforma de administración de estudiantes Frontend/Backend",
//       descripcion: [
//         "Desarrollo de una aplicación con Node, Express",
//         "React.js y MongoDB",
//         "Gestión eficiente de datos y funcionalidades CRUD",
//       ],
//       duracionInicio: "May. 2022",
//       duracionFin: "Jul. 2022",
//       empresa: "Servicios Prestados",
//     },
//     {
//       titulo: "Desarrollador Web Frontend y Backend",
//       descripcion: [
//         "Desarrollo y mantenimiento de sitios web usando React",
//         "Vue, Next.js, y Nuxt.js",
//         "Implementación de animaciones con Framer Motion y optimización de rendimiento",
//       ],
//       duracionInicio: "Ago. 2022",
//       duracionFin: "Dic. 2022",
//       empresa: "Manasystem (Servicios Prestados)",
//     },
//   ],
//   experticia: [
//     "Frontend y Backend",
//     "UX UI",
//     "Arquitectura cliente-servidor con REST APIs",
//     "Gestión de estado con Tanstack Query",
//   ],
//   tecnologias: [
//     "Node.js APIs",
//     "Framer Motion",
//     "Vue",
//     "Nuxt.js",
//     "React.js",
//     "Preact.js",
//     "Next.js",
//     "MongoDB",
//     "Express.js",
//     "Bcrypt.js",
//     "Redux",
//     "Zustand",
//     "Tailwindcss",
//   ],
//   referencias: [
//     {
//       nombre: "Byron Asencio Rodriguez",
//       puesto:
//         "Ingeniero en Sistemas Computacionales - MSIG, Jefe de Sistemas",
//       telefono: "+593 99 790 0800",
//     },
//     {
//       nombre: "Brady Gutierrez",
//       puesto: "Analista Desarrollador, Tecnólogo de Desarrollo de Software",
//       telefono: "+593 97 932 8153",
//     },
//     {
//       nombre: "Paul Cando",
//       puesto:
//         "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
//       telefono: "+593 98 249 9225",
//     },
//     {
//       nombre: "Dennisse Pérez Cedeño",
//       puesto:
//         "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
//       telefono: "+593 99 440 8857",
//     },
//   ],
// });
// export const informacionDestino = signal({
//   correoDestino: "",
//   mensajeDestino: "",
//   asuntoDestino: "",
// });