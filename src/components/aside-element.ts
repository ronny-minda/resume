import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import jsPDF from 'jspdf';
import { Copy, createElement, Download, LayoutTemplate, LoaderCircle, Send, View, Code2, AppWindow } from 'lucide';

@customElement('aside-element')
export class MyElement extends LitElement {


  @property({type: Array})
  template = [
    {
      img: "",
      pdf: "plantillas/Plantilla CV - Harvard.pdf",
      name: "Plantilla CV - Harvard"
    },
    {
      img: 'plantillasImg/Black Modern Professional Resume.jpg',
      pdf: "plantillas/Black Modern Professional Resume.pdf",
      name: "Black Modern Professional Resume",
    },
    {
      img: 'plantillasImg/Currículum Agente comercial Minimalista Blanco y negro.jpg',
      pdf: "plantillas/Currículum Agente comercial Minimalista Blanco y negro.pdf",
      name: "Currículum Agente comercial Minimalista Blanco y negro",
    },
    {
      img: 'plantillasImg/Currículum Agente comercial Profesional Blanco y negro.jpg',
      pdf: "plantillas/Currículum Agente comercial Profesional Blanco y negro.pdf",
      name: "Currículum Agente comercial Profesional Blanco y negro",
    },
    {
      img: 'plantillasImg/Currículum Agente comercial Sencillo Crema.jpg',
      pdf: "plantillas/Currículum Agente comercial Sencillo Crema.pdf",
      name: "Currículum Agente comercial Sencillo Crema",
    },
    {
      img: 'plantillasImg/Currículum CV Diseñador Gráfico Masculino Profesional Azul.jpg',
      pdf: "plantillas/Currículum CV Diseñador Gráfico Masculino Profesional Azul.pdf",
      name: "Currículum CV Diseñador Gráfico Masculino Profesional Azul",
    },
    {
      img: 'plantillasImg/Curriculum CV Resume Profesional Marketing Creativo Rosa.jpg',
      pdf: "plantillas/Curriculum CV Resume Profesional Marketing Creativo Rosa.pdf",
      name: "Curriculum CV Resume Profesional Marketing Creativo Rosa",
    },
    {
      img: 'plantillasImg/Currículum Diseñadora Minimalista Gris y Blanco.jpg',
      pdf: "plantillas/Currículum Diseñadora Minimalista Gris y Blanco.pdf",
      name: "Currículum Diseñadora Minimalista Gris y Blanco",
    },
    {
      img: 'plantillasImg/Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris.jpg',
      pdf: "plantillas/Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris.pdf",
      name: "Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris",
    },
    {
      img: 'plantillasImg/Currículum Vitae Cv de Administración Simple Azul.jpg',
      pdf: "plantillas/Currículum Vitae Cv de Administración Simple Azul.pdf",
      name: "Currículum Vitae Cv de Administración Simple Azul",
    },
    {
      img: 'plantillasImg/Currículum Vitae CV de Contabilidad Simple Gris.jpg',
      pdf: "plantillas/Currículum Vitae CV de Contabilidad Simple Gris.pdf",
      name: "Currículum Vitae CV de Contabilidad Simple Gris",
    },
    {
      img: 'plantillasImg/Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa.jpg',
      pdf: "plantillas/Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa.pdf",
      name: "Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa",
    },
    {
      img: 'plantillasImg/Curriculum Vitae CV Elegante Profesional Rosa.jpg',
      pdf: "plantillas/Curriculum Vitae CV Elegante Profesional Rosa.pdf",
      name: "Curriculum Vitae CV Elegante Profesional Rosa",
    },
    {
      img: 'plantillasImg/Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro.jpg',
      pdf: "plantillas/Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro.pdf",
      name: "Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro",
    },
    {
      img: 'plantillasImg/Currículum Vitae CV Minimalista Sencillo Clásico Gris.jpg',
      pdf: "plantillas/Currículum Vitae CV Minimalista Sencillo Clásico Gris.pdf",
      name: "Currículum Vitae CV Minimalista Sencillo Clásico Gris",
    },
    {
      img: "",
      pdf: "plantillas/CV Español.pdf",
      name: "CV Español"
    },    
  ]

  @state() private base64Image = ""
  @state() private selecionado = 1
  @state() private templates = false
  @state() private canbio = true
  @state() private informaionSesible = true
  @state() private loaderDescarga = false
  @state()
  private cv = {
  correoDestino: "",
  mensajeDestino: "",
  asuntoDestino: "",
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
      puesto: "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
      telefono: "+593 98 249 9225",
    },
    {
      nombre: "Dennisse Pérez Cedeño",
      puesto: "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
      telefono: "+593 99 440 8857",
    },
  ],
};

  // connectedCallback(): void {
  //   super.connectedCallback()
  //   setTimeout(() => {
  //     this.downloadPDF()
  //   }, 1);
  // }

  private async handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Verifica que sea una imagen
      if (!file.type.startsWith('image/')) {
        console.error('Por favor, selecciona un archivo de imagen.');
        return;
      }

      try {
        this.base64Image = await this.convertToBase64(file);
        console.log('Imagen en Base64:', this.base64Image);
      } catch (error) {
        console.error('Error al convertir la imagen a Base64:', error);
      }
    }
  }

  private convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  private downloadPDF () {
    this.loaderDescarga=true
    const element = this.renderRoot.querySelector(".cv") as HTMLElement;
    // Mostrar el PDF en el iframe
    // const iframe = this.renderRoot.querySelector("iframe") as HTMLIFrameElement;
    if (!element) {
      console.error("Elemento no encontrado");
      return;
    }
  
    // Crea una instancia de jsPDF
    const pdf = new jsPDF({
      format: "a4"
    });
  
    // Usa la función html de jsPDF
    pdf.html(element, {
      callback: (doc) => {
        // Descarga el PDF una vez que esté generado
        doc.save(`${this.cv.perfil.nombre} - Hoja de Vida.pdf`);
        this.loaderDescarga=false
      },
      // x: 10, // Margen X
      // y: 10, // Margen Y
      html2canvas: {
        scale: 0.350, // Escala del contenido
      },
    });
  };

  private copy () {
    navigator.clipboard.writeText(JSON.stringify(this.cv))
      .then(() => {
        console.log('Texto copiado al portapapeles')
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
      })
  }

  render() {
    return html`

      <div class="aside">
      
      ${
        this.loaderDescarga==true?html`
          <style>
            .loader {
              position: fixed;
              top: 0;
              left: 0;
              height: 100vh;
              width: 100vw;
              z-index: 9999;
              background-color: #0004;
              backdrop-filter: blur(1px);
              svg {
                height: 200px;
                width: 200px;
                color: #fff;
                /* animation: name 1s; */
              }
            }
          </style>
          <div class="loader">
            ${createElement(LoaderCircle)}
          </div>
        `:""
      }

        <style>
          .inputImg {
            height: 150px;
            width: 150px;
            margin: 20px 0;
            border: 1px solid red;
            background-color: #f5f7ff;
            border: 1px solid #c9cfe7;
            cursor: pointer;
            border-radius: 50%;
            /* background-image: url() */
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
            transition: 0.5s;

            input {
              display: none;
            }
          }
          .inputImg:hover {
            background-color: #c1c6d9;
          }
        </style>
      

      <label title="Cargar Imagen" class="inputImg" style="background-image: url(${this.base64Image})">
        <input
          type="file"
          @change=${this.handleFileChange}
          accept="image/*"
        />
      </label>
      <style>
        button,a,input {
          cursor: pointer;
          background-color: #f5f7ff;
          border: 1px solid #c9cfe7;
          outline: none;
          border-radius: 4px;
          padding: 3px;
          height: 30px;
          width: 30px;
          box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
          display: inline-block;

          svg {
            height: 100%;
            width: 100%;
            color: #535b77;
          }
          &:hover {
            svg {
              color: #8992af;
            }
          }
          &:active {
            svg {
              color: #535b77;
            }
          }
        }
        .contene {
          margin: 20px 0;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }
        textarea {
          width: 100%;
          height: 200px;
          border: 1px solid #c9cfe7;
          outline: none;
          border-radius: 4px;
          color: #3b4157;
          resize: none;
          field-sizing: content;
          padding: 10px;
          box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
        }
        textarea::-webkit-scrollbar {
          width: 10px;
        }
        textarea::-webkit-scrollbar-track {
          background: #b6c9e7;
          cursor: pointer;
        }
        textarea::-webkit-scrollbar-thumb {
          background-color: #6e82a1;
          border-radius: 10px;
          border: 3px solid #b6c9e7;
        }
        textarea::-webkit-scrollbar-thumb:hover {
          background-color: #4c6181;
          cursor: pointer;
        }
      </style>
      ${
        this.canbio == true ?html`          
          <button
            title="UI User"
            @click=${ () => this.canbio=!this.canbio }
          >${createElement(AppWindow)}</button>

          <div class="contene">
            <input type="checkbox"
              .checked=${this.informaionSesible}
              @change=${(e: Event)=> {
                const target = e.target as HTMLInputElement
                this.informaionSesible=target.checked
              }}
            >
            <button
              title="Templates"
              @click=${ () => {
                console.log()
                this.templates = !this.templates
              } }
            >${createElement(LayoutTemplate)}</button>
        
            <button
              title="Copiar"
              @click=${ () => this.copy() }
            >${createElement(Copy)}</button>
        
            <button
              title="Descargar"
              @click=${ () => this.downloadPDF() }
            >${createElement(Download)}</button>
        
            <a href=${`mailto:${this.cv.correoDestino}?subject=${this.cv.asuntoDestino}&body=${this.cv.mensajeDestino}`}>
              ${createElement(Send)}
            </a>
          </div>

          <textarea
            @input=${ (e: Event) => {
              const target = e.target as HTMLTextAreaElement
              console.log(target.value)
              const obj = JSON.parse(target.value)
              this.cv = obj
            }}
            
          >${JSON.stringify(this.cv)} </textarea>
        `:html`
          <button
            title="UI Dev"
            @click=${ () => this.canbio=!this.canbio }
          >${createElement(Code2)}</button>

          ${
            Object.entries(this.cv).map(([key, value]) => {
              if (typeof value == typeof "") {
                return (html`
                  <label>
                    <span>${key}</span>
                    <input >
                  </label>
                `)
              }
            })
          }

          <div>ui noral</div>
        `
      }
    </div>
    
    <div class="cuerpo">

      ${
        this.selecionado==10?html`
          <style>
            .cv {
              display: flex;
              height: 848px;
              width: 600px;
              position: relative;
              background-color: #fff;
              /* padding: 35px 28px; */
              font-family: Helvetica;
              /* font-family: Inter; */

              .iz {
                position: relative;
                z-index: 999;
                height: 100%;
                width: 227px;
                margin-left: 24px;
                background-color: #386dad;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #fff;
                padding: 0 17px;
                
                .bolaPerfil {
                  background-color: blue;
                  margin-top: 24px;
                  height: 192px;
                  width: 192px;
                  border-radius: 50%;
                  border: 5px solid #fff;
                  margin-bottom: 25px;
                  
                  .imgPlatilla {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                  }
                }
                .ti {
                  font-weight: bold;
                  text-align: start;
                  width: 100%;
                  margin-bottom: 13px;
                }
                .t1 {
                  /* color: red; */
                  font-weight: bold;
                  text-align: start;
                  font-size: 11px;
                  width: 100%;
                  margin-bottom: 2px;
                  margin-left: 40px;
                  position: relative;
                  .bola {
                    height: 6px;
                    width: 6px;
                    background-color: #fff;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: -17px;
                    transform: translateY(-50%);
                  }
                }
                .t2 {
                  font-size: 11px;
                  text-align: start;
                  width: 100%;
                  margin-bottom: 0px;
                  margin-left: 40px;
                }

                .co {
                  text-align: start;
                  width: 100%;
                  /* color: red; */
                  font-size: 12px;
                  display: flex;
                  align-items: center;
                  margin-bottom: 11px;

                  .bola {
                    margin-right: 6px;
                    border-radius: 50%;
                    height: 25px;
                    width: 25px;
                    background-color: #fff;
                  }
                }
                .raya {
                  width: 100%;
                  border-bottom: 2px solid #fff;
                  margin: 13px 0;
                }
              }

              .dere {
                height: 100%;
                width: 305px;
                /* background-color: red; */
                color: #143f72;
                padding-left: 25px;

                .ti {
                  margin-bottom: 9px;
                  font-weight: bold;
                }
                p {
                  font-size: 10px;
                  font-weight: 100;
                }
                .raya {
                  width: 100%;
                  border-bottom: 2px solid #143f72;
                  margin: 23px 0;
                }
                .caja {
                  width: calc(100% - 10px);
                  /* background-color: red; */
                  padding-left: 25px;
                  margin-left: 10px;
                  border-left: 2px solid #143f72;

                  .titu {
                    font-size: 12px;
                    font-weight: bold;
                    position: relative;
                    .bola {
                      height: 11px;
                      width: 11px;
                      background-color: #143f72;
                      position: absolute;
                      top: 50%;
                      left: -31px;
                      border-radius: 50%;
                      transform: translateY(-50%);
                    }
                  }
                }
                /* position: relative;
                z-index: 999; */
              }
              .pti {
                position: absolute;
                top: 26px;
                left: 0;
                background-color: #143f72;
                height: 150px;
                width: 100%;
                color: #fff;
                h1 {
                  font-size: 41px;
                  position: absolute;
                  top: 25px;
                  left: 278px;
                  letter-spacing: -3px;
                }
                h2 {
                  font-weight: 100;
                  font-size: 22px;
                  position: absolute;
                  top: 88px;
                  left: 278px;
                  letter-spacing: -2px;
                }
              }
            }
          </style>

          <div class="cv">
            
            <div class="iz">
              <div class="bolaPerfil">
                <img class="imgPlatilla" src=${this.base64Image} alt="perfil">
              </div>
              <div class="ti">CONTACTO</div>
              
              <div class="co"><div class="bola"></div>${this.cv.contacto.telefono}</div>
              <div class="co"><div class="bola"></div>${this.cv.contacto.email}</div>
              <div class="co"><div class="bola"></div>${this.cv.contacto.web}</div>
              
              <div class="raya"></div>
              <div style="margin-top: 11px;"></div>
              
              <div class="ti">EDUCACIÓN</div>
              ${
                this.cv.educacion.map((value) => {
                  const { titulo, institucion, fechaFin, fechaInicio } = value
                  return (html`
                    <div class="t1"><div class="bola"></div>${titulo}</div>
                    <div class="t2">${institucion}</div>
                    <div class="t2">${fechaInicio}-${fechaFin}</div>
                    <div style="margin-top: 11px;"></div>
                    `)
                })
              }

              <div class="raya"></div>
              <div style="margin-top: 11px;"></div>
              
              <div class="ti">HABILIDADES</div>
              ${
                this.cv.experticia.map((value) => {
                  return (html`
                    <div class="t1"><div class="bola"></div>${value}</div>
                    <div style="margin-top: 7px;"></div>
                    `)
                })
              }
            </div>

            <div class="pti">
              <h1>${this.cv.perfil.nombre.split(" ")[0]} ${this.cv.perfil.nombre.split(" ")[2]}</h1>
              <h2>${this.cv.perfil.titulo}</h2>
            </div>

            <div class="dere">
              <div style="margin-top: 199px;"></div>
              <div class="ti">ACERCA DE MÍ</div>
              <p>${this.cv.perfil.descripcion}</p>
              <div class="raya"></div>
              <!-- <div class="rayaY"></div> -->
              
              <div class="ti">EXPERIENCIA LABORAL</div>
              <div class="caja">
                ${
                  this.cv.experiencia.map((value) => {
                    const { descripcion, duracionFin, duracionInicio, empresa, titulo } = value
                    return (html`
                      <div class="titu"><div class="bola"></div>${titulo}</div>
                      <div style="margin-top: 6px;"></div>
                      <p>${empresa}</p>
                      <p>${duracionInicio}-${duracionFin}</p>
                      <div style="margin-top: 6px;"></div>
                      ${descripcion.map((valor)=>html`<p>${valor}</p>`)}
                      <div style="margin-top: 8px;"></div>
                    `)
                  })
                }
              </div>

            </div>

          </div>
        `:""
      }

      ${
        this.selecionado==3?html`
          <style>
            .cv {
              display: flex;
              height: 848px;
              width: 600px;
              position: relative;
              background-color: #fff;
              /* padding: 35px 28px; */
              font-family: Helvetica;
              /* font-family: Inter; */

              .iz {
                position: relative;
                height: 100%;
                width: 210px;
                /* background-color: red; */
                display: flex;
                flex-direction: column;
                align-items: end;
                padding-right: 15px;
                padding-top: 67px;
                /* justify-content: center; */

                .bola {
                  height: 9px;
                  width: 9px;
                  border: 1px solid #000;
                  background-color: #fff;
                  border-radius: 50%;
                  position: absolute;
                  top: 50%;
                  right: 0;
                  transform: translateX(19px) translateY(-50%);
                  z-index: 999999;
                }

                .foto {
                  height: 223px;
                  width: 135px;
                  background-color: #b7b7b7;
                  margin-bottom: 30px;

                  .imgPlatilla {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    filter: grayscale(1);
                  }
                }

                .abi {
                  font-size: 12px;
                  font-weight: bold;
                  margin-bottom: 10px;
                  margin-top: 20px;
                  position: relative;
                }

                p {
                  font-size: 10px;
                  width: 150px;
                  text-align: end;
                }

                .bti {
                  font-size: 10px;
                  font-weight: bold;
                  text-align: end;
                }

                .bp {
                  font-size: 10px;
                  text-align: end;
                  margin-bottom: 10px;
                }

                .raya {
                  position: absolute;
                  top: 80px;
                  right: 0;
                  height: 750px;
                  border-right: 1px solid #000;
                
                }


              }

              .dere {
                height: 100%;
                width: 310px;
                padding-top: 64px;
                padding-left: 18px;
                
                /* background-color: red; */

                .bola {
                  height: 9px;
                  width: 9px;
                  border: 1px solid #000;
                  background-color: #fff;
                  border-radius: 50%;
                  position: absolute;
                  top: 50%;
                  left: 0;
                  transform: translateX(-23px) translateY(-50%);
                }
                h1 {
                  font-size: 26px;
                  position: relative;

                }
                h2 {
                  margin-top: -7px;
                  font-size: 12px;
                  letter-spacing: 2px;
                  margin-bottom: 21px;
                  font-weight: 100;
                }
                .so {
                  font-size: 12px;
                  font-weight: bold;
                  margin-bottom: 10px;
                  position: relative;
                }
                
                .st {
                  font-size: 10px;
                  font-weight: bold;
                  /* color: red;  */
                  margin-top: -4px;
                }
                .sp {
                  margin-top: -2px;
                  font-size: 10px;
                  /* color: red;  */
                }
                li {
                  margin-top: 2px;
                  margin-left: 4px;
                  /* margin-bottom: 14px; */
                  /* color: red;  */
                  font-size: 10px;
                }
                li::marker {
                  margin-right: 2px;
                }
                p {
                  font-size: 10px;
                  /* width: 150px; */
                  /* text-align: end; */
                }
                table {
                  margin-bottom: 18px;
                  margin-top: 13px;

                  .tt {
                    padding-right: 40px;
                    padding-left: 5px;
                  }
                  td {
                    font-size: 10px;
                    /* display: flex; */
                    text-align: start;

                    .ico {
                      height: 21px;
                      width: 21px;
                      margin-bottom: 3px;
                      border-radius: 50%;
                      background-color: #000;
                    }
                  }
                }
              }

            }
          </style>

          <div class="cv">
              <!-- <img class="imgPlatilla" src="plantillasImg/Currículum Agente comercial Minimalista Blanco y negro_page-0001.jpg" alt="perfil"> -->

              <div class="iz">
                <div class="foto">
                  <img class="imgPlatilla" src=${this.base64Image} alt="perfil">
                </div>
                <div class="abi"><div class="bola"></div>DATOS ACADÉMICOS</div>
                ${
                  this.cv.educacion.map((value) => {
                    const { titulo, fechaFin, fechaInicio, institucion } = value
                    return (html`
                      <div class="bti">${institucion}</div>
                      <div class="bp">${titulo} | ${fechaInicio} - ${fechaFin}</div>
                    `)
                  })
                }
                <div class="abi"><div class="bola"></div>HABILIDADES</div>
                ${
                  this.cv.experticia.map((value) => {
                    return (html`
                      <P>${value}</P>
                    `)
                  })
                }
                

                
                <div class="raya"></div>
              </div>
              
              <div class="dere">
                <h1><div class="bola"></div>${this.cv.perfil.nombre.split(" ")[0]} ${this.cv.perfil.nombre.split(" ")[2]}</h1>
                <h2>${this.cv.perfil.titulo}</h2>
                <div class="so"><div class="bola"></div>SOBRE MÍ</div>
                
                <p>${this.cv.perfil.descripcion}</p>
                <table>
                  <tr>
                    <td><div class="ico"></div></td>
                    <td class="tt">${this.cv.datosPersonales.fechaNacimiento}</td>
                    <td><div class="ico"></div></td>
                    <td class="tt">${this.cv.contacto.email}</td>
                  </tr>
                  <tr>
                    <td><div class="ico"></div></td>
                    <td class="tt">${this.cv.contacto.telefono}</td>
                    <td><div class="ico"></div></td>
                    <td class="tt">${this.cv.contacto.direccionExacta}</td>
                  </tr>
                </table>

                <div class="so"><div class="bola"></div>EXPERIENCIA LABORAL</div>
                ${
                  this.cv.experiencia.map((value) => {
                    const { titulo, empresa, duracionInicio, duracionFin, descripcion } = value
                    return (html`
                    <div style="margin-top: 15px;"></div>
                    <div class="st">${titulo}</div>
                    <div class="sp" style="margin-bottom: 4px;">${empresa} | ${duracionInicio} - ${duracionFin}</div>
                    ${
                      descripcion.map((value) => {
                        return (html`
                          <li>${value}</li>                
                        `)
                      })
                    }
                  `)
                  })
                }

                ${
                  this.informaionSesible==true?html`
                    <div class="so" style="margin-top: 20px;"><div class="bola"></div>INFORMACION PERSONAL</div>
                    <table style="margin-top: -5px;">
                      <tr>
                        <td style="font-weight: bold;">Cedula:</td>
                        <td>${this.cv.datosPersonales.cedula}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold;">Edad:</td>
                        <td>${this.cv.datosPersonales.edad}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold;">Estado Civil:</td>
                        <td>${this.cv.datosPersonales.estadoCivil}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold;padding-right: 30px;">Fecha Nacimiento:</td>
                        <td>${this.cv.datosPersonales.fechaNacimiento}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold;">Nacionalidad:</td>
                        <td>${this.cv.datosPersonales.nacionalidad}</td>
                      </tr>
                    </table>
                  `:""
                }
                
              </div>
            
            </div>
        `:""
      }

      ${
        this.selecionado==2?html`
            <style>
              .cv {
                display: flex;
                height: 848px;
                width: 600px;
                position: relative;
                background-color: #fff;
                /* padding: 35px 28px; */
                font-family: Helvetica;
                /* font-family: Inter; */
                
                .titu {
                  position: absolute;
                  top: 78px;
                  left: 0;
                  height: 117px;
                  width: 100%;
                  background-color: #043382;
                  z-index: 9;
                  color: #fff;
                  
                  .deco {
                    position: absolute;
                    top: 0px;
                    left: 30px;
                    height: 100%;
                    width: 250px;
                    background-color: #042b6b;          
                    transform: skew(-25deg); 
                  }

                  .nom {
                    position: absolute;
                    top: 0px;left: 233px;
                    font-weight: bold;
                    font-size: 37px;
                    height: auto;
                    width: auto;
                  }
                  .titu {
                    position: absolute;
                    top: 91px;
                    left: 310px;
                    font-size: 15px;
                    height: auto;
                    width: auto;
                  }
                }

                .iz {
                  height: 100%;
                  width: 222px;
                  background: #191919;
                  margin-left: 34px;
                  display: flex;
                  /* justify-content: center; */
                  align-items: center;
                  flex-direction: column;
                  color: #fff;

                  .bolaFoto {
                    position: relative;
                    z-index: 99;
                    height: 165px;
                    width: 165px;
                    background-color: #043382;
                    border-radius: 50%;
                    margin-top: 52px;
                    border: 3px solid #043382;
                    background-repeat: no-repeat;
                    background-size: cover;

                    img {
                      height: 100%;
                      width: 100%;
                      object-fit: cover;
                      border-radius: 50%;
                      background-color: #043382;
                    }
                  }
                  .mi {
                    text-align: center;
                    margin-top: 5px;
                    font-size: 16px;
                  }
                  .mide {
                    margin-top: 5px;
                    font-size: 10px;
                    text-align: center;
                    width: 160px;
                    margin-bottom: 22px;
                  }
                  .ell {
                    font-size: 10px;
                    color: #fff;
                    margin-bottom: 12px;
                    text-align: start;
                    display: flex;
                    align-items: center;
                    padding-left: 13px;
                    /* background-color: red; */
                    width: 175px;

                    .bola {
                      margin-right: 5px;
                      height: 20px;
                      width: 20px;
                      background-color: #0774bb;
                      border-radius: 50%;

                      svg {
                        color: blue;
                        height: 100%;
                        width: 100%;
                      }
                    }
                  }
                
                  .deta {
                    font-size: 14px;
                    margin-top: 13px;
                    background-color: #0774bb00;
                    width: 173px;
                    height: 28px;
                    border-radius: 20px;
                    border: 2px solid #0774bb;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 11px;
                  }
                  .li {
                    width: 173px;
                    text-align: start;
                    display: flex;
                    align-items: center;
                    font-size: 10px;
                    margin-bottom: 5px;
                    padding-left: 29px;

                    .bola {
                      height: 5px;
                      width: 5px;
                      background-color: #fff;
                      border-radius: 50%;
                      margin-right: 7px;
                    }
                  }
                }

                .dere {
                  /* background-color: red; */
                  width: 280px;
                  padding-left: 8px;

                  .ti {
                    background-color: #043382;
                    color: #fff;
                    font-size: 13px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 150px;
                    height: 24px;
                    border-radius: 20px;
                    margin-bottom: 12px;
                  }
                  .tra {
                    font-weight: bold;
                    font-size: 11px;
                    margin-left: 5px;
                  }
                  .tra2 {
                    font-size: 10px;
                    margin-left: 5px;
                  }
                }

                table {
                  font-size: 11px;
                  
                }

              }
            </style>

            <div class="cv">

                <div class="titu">
                  <div class="deco"></div>
                  <div class="nom">${this.cv.perfil.nombre.split(" ")[0].toLocaleUpperCase()}</div>
                  <div style="top: 44px;left: 266px;" class="nom">${this.cv.perfil.nombre.split(" ")[2].toLocaleUpperCase()}</div>
                  <div class="titu">${this.cv.perfil.titulo}</div>
                </div>
                <div class="iz">
                  <div class="bolaFoto">
                    <img src=${this.base64Image}>
              </div>
                  
                  <div class="mi">Sobre Mi</div>
                  <div class="mide">${this.cv.perfil.descripcion}</div>
                  
                  <div class="ell"><div class="bola"></div>${this.cv.contacto.telefono}</div>
                  <div class="ell"><div class="bola"></div>${this.cv.contacto.email}</div>
                  <div class="ell"><div class="bola"></div>${this.cv.contacto.direccion}</div>
                  <div class="ell"><div class="bola"></div>${this.cv.contacto.web}</div>

                  <div class="deta">Experticia</div>

                  ${
                    this.cv.experticia.map((value) => {
                      return (html`<div class="li"><div class="bola"></div>${value}</div>`)
                    })
                  }

                </div>

                <div class="dere">
                  <div style="margin-top: 219px;"></div>
                  <div class="ti">Experience</div>
                  ${
                    this.cv.experiencia.map((value) => {
                      const { empresa, duracionInicio, duracionFin, descripcion, titulo } = value
                      return (html`
                        <div style="margin-top: 15px;"></div>
                        <div class="tra">${empresa} </div>
                        <div class="tra">${titulo} </div>
                        <div class="tra">${duracionInicio} - ${duracionFin}</div>
                        <div class="tra2">${descripcion}</div>
                      `)
                    })
                  }

                  ${
                    this.informaionSesible==true?html`
                      <div style="margin-top: 15px;"></div>

                      <div class="ti">Informacion</div>
                      <table style="width:100%">
                        <tr>
                          <td style="font-weight: bold;">Cedula:</td>
                          <td>${this.cv.datosPersonales.cedula}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: bold;">Edad:</td>
                          <td>${this.cv.datosPersonales.edad}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: bold;">Estado Civil:</td>
                          <td>${this.cv.datosPersonales.estadoCivil}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: bold;">Fecha Nacimiento:</td>
                          <td>${this.cv.datosPersonales.fechaNacimiento}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: bold;">Nacionalidad:</td>
                          <td>${this.cv.datosPersonales.nacionalidad}</td>
                        </tr>
                        
                      </table>
                    `:""
                  }

                </div>
              </div>
        `:""
      }
      
      ${
        this.selecionado==1?html`
        <style>
          .cv {
            height: 848px;
            width: 600px;
            position: relative;
            background-color: #fff;
            padding: 35px 28px;
            font-family: Inter;
            
            h1 {
              text-align: center;
              font-size: 26px;
              font-weight: bold;
              color: #000;
            }
            p {
              text-align: center;
              font-size: 11px;
            }
            hr {
              margin-top: 4px;
              transform: scaleY(0.3);
              border: 1px solid black;
              border-top: none;
              border-left: none;
              border-right: none;
            }
            .ita {
              /* line-height: 1.5;
              word-spacing: 3px; */
              margin-top: 4px;
              margin-left: 4px;
              text-align: start;
              font-style: italic;
            }
            h2 {
              margin-top: 7px;
              margin-left: 5px;
              font-size: 12px;
            }
            .conteExp {
              padding: 0 5px;
              font-size: 10px;
              margin-top: 7px;
              display: flex;
              justify-content: space-between;
              h4 {
                font-weight: 100;
              }
            }
            ul {
              font-size: 10px;
              padding: 0 37px;
              margin-top: 9px;
              li {
                list-style: none;
                position: relative;
                .bola {
                  display: inline-block;
                  position: absolute;
                  top: 7px;
                  left: -17px;
                  height: 5px;
                  width: 5px;
                  background-color: #000;
                  border-radius: 50%;
                }
              }
            }

            .separa {
              height: 10px;
              width: 10px;
              background-color: red;
            }

          }

        </style>

        <div class="cv">
          <h1>${this.cv.perfil.nombre}</h1>
          <p>${this.cv.contacto.direccion} · ${this.cv.contacto.web} · ${this.cv.contacto.telefono} · ${this.cv.contacto.email}</p>
          <hr>
          <p class="ita">${this.cv.perfil.descripcion}</p>
          <h2>EXPERIENCIA PROFESIONAL</h2>
          <hr style="margin-top: 0px;">

          ${
            this.cv.experiencia.map((value) => {
              const { descripcion, duracionFin, duracionInicio, titulo, empresa } = value
              return ( html`

                <div class="conteExp">
                  <h3>${empresa}</h3>
                  <!-- <h3>Barcelona,España</h3> -->
                </div>
                <div class="conteExp" style="margin-top: -4px; font-size: 11px;">
                  <h4>${titulo}</h4>
                  <h4 style="font-style: italic;">${duracionInicio} - ${duracionFin}</h4>
                </div>
          
                <ul>
                  ${
                    descripcion.map(item => {
                      return (html`
                        <li><div class="bola"></div>${item}</li>
                      `)
                    })
                  }
                </ul>
              `)
            })
          }

          <h2 style="margin-top: 11px;">EDUCACIÓN</h2>
          <hr style="margin-top: 0px;">
          ${
            this.cv.educacion.map((value) => {
              const { institucion, nivel, descripcion, fechaFin, fechaInicio, titulo } = value
              return ( html`
                <div class="conteExp">
                  <h3>${institucion}</h3>
                  <h3>${nivel}</h3>
                </div>
                <div class="conteExp" style="margin-top: -4px; font-size: 11px;">
                  <h4>${titulo}</h4>
                  <h4 style="font-style: italic;">${fechaInicio} - ${fechaFin}</h4>
                </div>
                <p style="text-align: start; margin-left: 5px; margin-top: -2px;">${descripcion}</p>
              `)
            })
          }
          <h2 style="margin-top: 12px;">SKILLS ADICIONALES</h2>
          <hr style="margin-top: 0px;">
          <ul>
          ${
            this.cv.experticia.map((value) => {
              return ( html`
                    <li><div class="bola"></div>${value}</li>
                `)
            })
          }
          </ul>
        </div>  
      `:""
      }
    </div>

    ${
      this.templates==true?
      html`
      <style>
        .back {
          position: fixed;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: #95adc979;
          z-index: 999;
          backdrop-filter: blur(1px);
        }
        .templateContenedor {
          border-radius: 5px;
          box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
          position: fixed;
          bottom: 0;
          left: 0;
          height: auto;
          width: 100%;
          background-color: #f5f7ff;
          z-index: 9999;
          padding: 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          
          .cada {
            border: 1px solid #c9cfe7;
            height: 140px;
            margin: 7px;
            width: 100px;
            background-color: #fff;
            border-radius: 3px;
            cursor: pointer;
            opacity: 1;
            transition: 0.5s;
            box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
            transform: scale(1);
          }
          .cada:hover {
            transform: scale(1.1);
            opacity: 0.5;
          }
          a {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 999;
            cursor: pointer;
            background-color: #f5f7ff;
            border: 1px solid #c9cfe7;
            outline: none;
            border-radius: 4px;
            padding: 3px;
            height: 30px;
            width: 30px;
            box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
            display: inline-block;
  
            svg {
              height: 100%;
              width: 100%;
              color: #535b77;
            }
            &:hover {
              svg {
                color: #8992af;
              }
            }
            &:active {
              svg {
                color: #535b77;
              }
            }
          }
        }
      </style>
      
      <div class="back" @click=${()=>this.templates=false}></div>
      <div class="templateContenedor">
        ${
          this.template.map((value, key) => {
            const { img, name, pdf } = value
            return (html`
              <div style="position: relative;">
                <a href=${pdf} target="_blank" rel="noopener noreferrer" title="Ver Pdf">${createElement(View)}</a>
                <img
                  src=${img}
                  class="cada"
                  title=${key+1+name}
                  @click=${()=>{
                    this.templates=false
                    this.selecionado=key+1
                  }
                }>
              </div>
            `)
          })
        }
      </div>
      `:""
    }
      
     
    `
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: flex;
      height: 100vh;
      width: 100vw;
    }
    .aside {
      height: 100%;
      width: 30%;
      background-color: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      padding: 10px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    .cuerpo {
      overflow-y: auto;
      height: 100%;
      width: 70%;
      display: flex;
      
      justify-content: center;
      /* align-items: center; */
      padding: 30px 0;

    }
    .contenedor {
      /* height: 100%;
      width: 100%; */
      height: 1500px;
      width: 800px;
      background-color: red;
      /* z-index: 9999999; */
      position: relative;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        height: 100%;
        width: 100%;
      }
      .i2 {
        opacity: 0.5;
      }
    }

    .cv {
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

  `
}









// const cv = {
//   contacto: {
//     telefono: "0993105654",
//     email: "ronny.minda.vera@gmail.com",
//     web: "https://ronnyminda.vercel.app/",
//     direccion: "ISLA TRINITARIA COOP ANTONIO MZ. 12A SL. 13B",
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
//       nivel: "Primaria",
//       institucion: "Milton Reyes Reyes",
//     },
//     {
//       nivel: "Secundaria",
//       institucion: "Juan Jose Plaza Bellas Artes",
//     },
//     {
//       nivel: "Superior",
//       institucion: "Instituto Superior Universitario Bolivariano (ITB)",
//       descripcion: "Formación como Desarrollador de Software.",
//     },
//     {
//       nivel: "Curso",
//       institucion: "Platzi",
//       descripcion: "Desarrollo Web en plataforma de aprendizaje en línea.",
//     },
//   ],
//   experiencia: [
//     {
//       titulo: "Desarrollador Aplicaciones Frontend Eficientes",
//       descripcion:
//         "Desarrollo de aplicaciones frontend con experiencia en React, Tailwindcss, Zustand, Redux, y Styled Components. Optimización del rendimiento y seguridad.",
//       duracion: "Nov. 2023 - Ene. 2024",
//       empresa: "Central File",
//     },
//     {
//       titulo: "Desarrollador frontend (Portafolio de fotógrafo)",
//       descripcion:
//         "Diseño minimalista para destacar fotografías con transiciones y animaciones sutiles.",
//       duracion: "Mar. 2022 - May. 2022",
//     },
//     {
//       titulo: "Plataforma de administración de estudiantes Frontend/Backend",
//       descripcion:
//         "Desarrollo de una aplicación con Node, Express, React.js y MongoDB. Gestión eficiente de datos y funcionalidades CRUD.",
//       duracion: "May. 2022 - Jul. 2022",
//       empresa: "Servicios Prestados",
//     },
//     {
//       titulo: "Desarrollador Web Frontend y Backend",
//       descripcion:
//         "Desarrollo y mantenimiento de sitios web usando React, Vue, Next.js, y Nuxt.js. Implementación de animaciones con Framer Motion y optimización de rendimiento.",
//       duracion: "Ago. 2022 - Dic. 2022",
//       empresa: "Manasystem (Servicios Prestados)",
//     },
//   ],
//   experticia: [
//     "Frontend y Backend",
//     "React, Next.js, Vue, Nuxt.js",
//     "Animaciones con Framer Motion",
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
//       puesto: "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
//       telefono: "+593 98 249 9225",
//     },
//     {
//       nombre: "Dennisse Pérez Cedeño",
//       puesto: "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
//       telefono: "+593 99 440 8857",
//     },
//   ],
// };



















// import { LitElement, css, html } from 'lit'
// import { customElement, property } from 'lit/decorators.js'
// import litLogo from './assets/lit.svg'
// import viteLogo from '/vite.svg'

// /**
//  * An example element.
//  *
//  * @slot - This element has a slot
//  * @csspart button - The button
//  */
// @customElement('root-element')
// export class MyElement extends LitElement {
//   /**
//    * Copy for the read the docs hint.
//    */
//   @property()
//   docsHint = 'Click on the Vite and Lit logos to learn more'

//   /**
//    * The number of times the button has been clicked.
//    */
//   @property({ type: Number })
//   count = 0

//   render() {
//     return html`
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src=${viteLogo} class="logo" alt="Vite logo" />
//         </a>
//         <a href="https://lit.dev" target="_blank">
//           <img src=${litLogo} class="logo lit" alt="Lit logo" />
//         </a>
//       </div>
//       <slot></slot>
//       <div class="card">
//         <button @click=${this._onClick} part="button">
//           count is ${this.count}
//         </button>
//       </div>
//       <p class="read-the-docs">${this.docsHint}</p>
//     `
//   }

//   private _onClick() {
//     this.count++
//   }

//   static styles = css`
//     :host {
//       max-width: 1280px;
//       margin: 0 auto;
//       padding: 2rem;
//       text-align: center;
//     }

//     .logo {
//       height: 6em;
//       padding: 1.5em;
//       will-change: filter;
//       transition: filter 300ms;
//     }
//     .logo:hover {
//       filter: drop-shadow(0 0 2em #646cffaa);
//     }
//     .logo.lit:hover {
//       filter: drop-shadow(0 0 2em #325cffaa);
//     }

//     .card {
//       padding: 2em;
//     }

//     .read-the-docs {
//       color: #888;
//     }

//     ::slotted(h1) {
//       font-size: 3.2em;
//       line-height: 1.1;
//     }

//     a {
//       font-weight: 500;
//       color: #646cff;
//       text-decoration: inherit;
//     }
//     a:hover {
//       color: #535bf2;
//     }

//     button {
//       border-radius: 8px;
//       border: 1px solid transparent;
//       padding: 0.6em 1.2em;
//       font-size: 1em;
//       font-weight: 500;
//       font-family: inherit;
//       background-color: #1a1a1a;
//       cursor: pointer;
//       transition: border-color 0.25s;
//     }
//     button:hover {
//       border-color: #646cff;
//     }
//     button:focus,
//     button:focus-visible {
//       outline: 4px auto -webkit-focus-ring-color;
//     }

//     @media (prefers-color-scheme: light) {
//       a:hover {
//         color: #747bff;
//       }
//       button {
//         background-color: #f9f9f9;
//       }
//     }
//   `
// }

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement
//   }
// }
