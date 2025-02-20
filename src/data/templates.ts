import { html, TemplateResult } from "lit";
import { createIcons, createElement, icons, Mail, Globe, Smartphone, MapPin } from "lucide";

interface Contacto {
    telefono: string;
    email: string;
    web: string;
    direccion: string;
    direccionExacta: string;
  }
  
  interface Perfil {
    nombre: string;
    titulo: string;
    descripcion: string;
  }
  
  interface DatosPersonales {
    cedula: string;
    fechaNacimiento: string;
    estadoCivil: string;
    nacionalidad: string;
    lugarNacimiento: string;
    edad: number;
  }
  
  interface Educacion {
    fechaInicio: string;
    fechaFin: string;
    titulo: string;
    nivel: string;
    institucion: string;
    descripcion: string;
  }
  
  interface Experiencia {
    titulo: string;
    descripcion: string[];
    duracionInicio: string;
    duracionFin: string;
    empresa: string;
  }
  
  interface Referencia {
    nombre: string;
    puesto: string;
    telefono: string;
  }
  
  interface InformacionCv {
    contacto: Contacto;
    perfil: Perfil;
    datosPersonales: DatosPersonales;
    educacion: Educacion[];
    experiencia: Experiencia[];
    experticia: string[];
    tecnologias: string[];
    referencias: Referencia[];
  }

interface TemplateParams {
    informacionCv: InformacionCv; // Cambia `any` por el tipo adecuado si lo conoces
    perfilBase64Image: string;
  }

export const coleccionTemplates: { [key: number]: (params: TemplateParams) => TemplateResult<1> } = {
    1: ({ informacionCv, perfilBase64Image }) => {
        createIcons({ icons });

        return html`<style>
        .cv {
          height: 848px;
          width: 600px;
          background-color: #be5757;
          text-align: end;
          display: flex;
          position: relative;
  
          .dere {
            background-color: #ffffff;
            height: 100%;
            width: 336px;
  
            h1 {
              font-family: Wonderful;
              font-size: 56px;
              padding-right: 20px;
            }
            h2 {
              font-family: Roboto-Regular;
              font-size: 30px;
              padding-right: 28px;
              letter-spacing: 1px;
            }
            h3 {
              font-family: Roboto-Bold;
              padding-right: 43px;
              letter-spacing: 2px;
            }
            .titulo {
              font-family: Roboto-Bold;
              letter-spacing: 1px;
              background-color: #e6b6ac;
              padding: 4px 0px 4px 40px;
              width: 320px;
              border-radius: 0 16px 16px 0;
              display: flex;
              justify-content: center;
            }
            .ti {
              font-family: Roboto-Bold;
              letter-spacing: 1px;
              text-align: start;
              padding-left: 39px;
              font-size: 14px;
            }
            .pa {
              font-family: Roboto-Regular;
              text-align: start;
              padding-left: 39px;
              font-size: 14px;
            }
            li {
              font-family: Roboto-Regular;
              font-size: 14px;
              padding-left: 20px;
              text-align: start;
              padding-bottom: 6px;
            }
          }
          .iz {
            background-color: #e6b6ac;
            height: 100%;
            flex: 1;
            flex-direction: column;
  
            .perfil {
              margin-left: 35px;
              margin-right: 30px;
              background-color: red;
              border-radius: 50%;
              height: 165px;
              width: 165px;
              border: 3px solid #fff;
              background-image: url(${perfilBase64Image});
              background-repeat: no-repeat;
              background-size: cover;
            }
  
            .titulo {
              font-family: Roboto-Bold;
              letter-spacing: 1px;
              background-color: #fffefe;
              padding: 4px 35px 4px 0px;
              width: calc(100% - 15px);
              margin-left: 15px;
              border-radius: 16px 0 0 16px;
              display: flex;
              justify-content: center;
            }
  
            .lin {
              color: black;
              width: 100%;
              display: flex;
              align-items: center;
              padding-left: 27px;
              margin: 5px 0;
              text-decoration: none;
  
              .ico {
                background-color: #000;
                width: 25px;
                height: 25px;
                padding: 4px;
                border-radius: 50%;
  
                svg {
                  stroke: #e6b6ac;
                  height: 100%;
                  width: 100%;
                }
              }
              span {
                font-family: Roboto-Regular;
                font-size: 13px;
                margin-left: 7px;
                text-align: start;
                width: 170px;
              }
            }
  
            .pa {
              font-size: 13px;
              line-height: 18px;
              font-family: Roboto-Regular;
              width: 180px;
              text-align: start;
              margin-left: 28px;
            }
  
            .tiE {
              text-align: start;
              font-size: 14px;
              padding-left: 28px;
  
              .b {
                font-family: Roboto-Bold;
              }
              .n {
                font-family: Roboto-Regular;
              }
            }
            .año {
              font-family: Roboto-Regular;
              text-align: start;
              font-size: 16px;
              padding-left: 28px;
            }
          }
        }
      </style>
  
      <div class="cv" id="cv">
        <div class="dere">
          <div style="margin-top: 60px"></div>
          <h1>${informacionCv.perfil.nombre.split(" ")[0]}</h1>
          <div style="margin-top: -21px"></div>
          <h2>${informacionCv.perfil.nombre.split(" ")[2]}</h2>
          <div style="margin-top: 5px"></div>
          <h3>${informacionCv.perfil.titulo}</h3>
          <div style="margin-top: 8px"></div>
          <div class="titulo">EXPERIENCIA LABORAL</div>

          ${
            informacionCv.experiencia.map((value) => {
              const { empresa, titulo, duracionInicio, duracionFin, descripcion } = value
              return (html`
                <div style="margin-top: 11px"></div>
                <div class="ti">${empresa} | ${titulo}</div>
                <div style="margin-top: 7px"></div>
                <div class="pa">${duracionInicio} - ${duracionFin}</div>
                <div style="margin-top: 7px"></div>
                <div class="pa" style="line-height: 18px">${descripcion}</div>
              `)
            })
          }  
  
          <div style="margin-top: 30px"></div>
          <div class="titulo">EXPERTISE</div>
          <div style="margin-top: 10px"></div>
          ${informacionCv.experticia.map((value) => html`<li>${value}</li>`)}
          
        </div>
        <div class="iz">
          <div style="margin-top: 45px"></div>
          <div class="perfil"></div>
          <div style="margin-top: 18px"></div>
          <div class="titulo">CONTACTO</div>
  
          <div class="lin">
            <div class="ico">${createElement(MapPin)}</div>
            <span>${informacionCv.contacto.direccion}</span>
          </div>
          <a href="tel:${informacionCv.contacto.telefono}" class="lin">
            <div class="ico">${createElement(Smartphone)}</div>
            <span>${informacionCv.contacto.telefono}</span>
          </a>
          <a href="${informacionCv.contacto.web}" class="lin">
            <div class="ico">${createElement(Globe)}</div>
            <span>${informacionCv.contacto.web}</span>
          </a>
          <a href="mailto:${informacionCv.contacto.email}" class="lin">
            <div class="ico">${createElement(Mail)}</div>
            <span>${informacionCv.contacto.email}</span>
          </a>
  
          <div style="margin-top: 28px"></div>
          <div class="titulo">SOBRE MI</div>
          <div style="margin-top: 6px"></div>
          <div class="pa">${informacionCv.perfil.descripcion}</div>
  
          <div style="margin-top: 31px"></div>
          <div class="titulo">EDUCACIÓN</div>

          ${
            informacionCv.educacion.map((value) => {
              const { titulo, institucion, fechaInicio, fechaFin } = value
              return (html`
                <div style="margin-top: 11px"></div>
                <div class="tiE">
                  <div class="b">${titulo}</div>
                  <div class="n">${institucion}</div>
                </div>
                <div style="margin-top: 6px"></div>
                <div class="año">${fechaInicio}/${fechaFin}</div>
              `)
            })
          }

        </div>
        </div>`
      },
  }
