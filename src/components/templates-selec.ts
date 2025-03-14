import { SignalWatcher } from "@lit-labs/preact-signals";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import {
  informacionCv,
  informaionSesible,
  perfilBase64Image,
  seleccionado,
} from "../store/ui";
import { createElement, Mail, Globe, Smartphone, MapPin, Phone } from "lucide";

@customElement("templates-selec")
export class MyElement extends SignalWatcher(LitElement) {
  render() {
    return html`
      ${seleccionado.value === 1
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                background-color: #ffffff;
                display: inline-block;
                padding: 0 22px;

                a {
                  color: #0000ee;
                }

                .lin {
                  font-size: 12px;
                  text-align: center;
                  .no {
                    color: #000;
                  }
                }

                .raya {
                  border-bottom: 1px solid #000;
                  width: 100%;
                }

                .ti {
                  font-size: 24px;
                  text-align: center;
                }
                .ti2 {
                  font-weight: bold;
                  margin-left: 10px;
                  font-size: 12px;
                }
                .ti3 {
                  font-weight: bold;
                  font-size: 12px;
                  display: flex;
                  justify-content: space-between;
                  padding: 0 10px;
                }
                .ti4 {
                  font-weight: normal;
                  font-size: 12px;
                  display: flex;
                  justify-content: space-between;
                  padding: 0 10px;
                }
                ul {
                  padding: 0 35px;
                  li {
                    font-family: Rubik;
                    font-size: 10px;
                    font-weight: normal;
                    width: 100%;
                    padding-left: 5px;
                    &::marker {
                      content: "●   ";
                    }
                  }
                }
                .p {
                  font-size: 10px;
                }
              }
            </style>

            <div class="cv" id="cv">
              <div style="margin-top: 36px"></div>
              <h1 class="ti">${informacionCv.value.perfil.nombre}</h1>

              <div class="lin">
                ${informacionCv.value.contacto.direccion} ·
                <a href="${informacionCv.value.contacto.web}"
                  >${informacionCv.value.contacto.web}</a
                >
                ·
                <a
                  class="no"
                  href="tel:${informacionCv.value.contacto.telefono}"
                  >${informacionCv.value.contacto.telefono}</a
                >
                ·
                <a
                  class="no"
                  href="mailto:${informacionCv.value.contacto.email}"
                  >${informacionCv.value.contacto.email}</a
                >
              </div>

              <div style="margin-top: -1px"></div>
              <div class="raya"></div>
              <div style="margin-top: 6px"></div>

              <div class="p">${informacionCv.value.perfil.descripcion}</div>

              <div style="margin-top: 12px"></div>
              <div class="ti2">EXPERIENCIA PROFESIONAL</div>

              <div style="margin-top: -3px"></div>
              <div class="raya"></div>
              <div style="margin-top: 9px"></div>

              ${informacionCv.value.experiencia.map((value) => {
                const {
                  empresa,
                  titulo,
                  duracionInicio,
                  duracionFin,
                  descripcion,
                } = value;
                return html`
                  <div class="ti3">
                    <div>${empresa}</div>
                    <div>Guayaquil</div>
                  </div>
                  <div style="margin-top: -4px"></div>
                  <div class="ti4">
                    <div>${titulo}</div>
                    <i>${duracionInicio}–${duracionFin}</i>
                  </div>

                  <div style="margin-top: 5px"></div>
                  <ul>
                    ${descripcion.map((value2) => html`<li>${value2}</li>`)}
                  </ul>
                  <div style="margin-top: 6px"></div>
                `;
              })}

              <div style="margin-top: 13px"></div>
              <div class="ti2">EDUCACIÓN</div>

              <div style="margin-top: -3px"></div>
              <div class="raya"></div>
              <div style="margin-top: 9px"></div>

              ${informacionCv.value.educacion.map((value) => {
                const { institucion, titulo, fechaInicio, descripcion } = value;
                return html`
                  <div class="ti3">
                    <div>${institucion}</div>
                    <div>${titulo}</div>
                  </div>
                  <div style="margin-top: -4px"></div>
                  <div class="ti4">
                    <!-- <div>Ingeniería de Informática</div> -->
                    <div>${fechaInicio}</div>
                  </div>
                  <div style="margin-top: -4px"></div>
                  <div class="ti4">
                    <div>${descripcion}</div>
                  </div>
                  <div style="margin-top: 8px;"></div>
                `;
              })}

              <div style="margin-top: 13px"></div>
              <div class="ti2">SKILLS ADICIONALES</div>

              <div style="margin-top: -3px"></div>
              <div class="raya"></div>
              <div style="margin-top: 9px"></div>

              <ul>
                ${informacionCv.value.experticia.map(
                  (value) => html`<li>${value}</li>`
                )}
              </ul>
            </div>
          `
        : ""}
      ${seleccionado.value === 2
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                text-align: end;
                display: flex;
                position: relative;

                .dere {
                  background-color: #ffffff;
                  height: 100%;
                  width: 336px;
                  padding-left: 9px;
                  padding-right: 60px;
                  flex: 1;
                  text-align: start;

                  .ti {
                    color: #fff;
                    background: #043381;
                    width: 150px;
                    height: 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    font-size: 11px;
                    font-family: Roboto-Regular;
                  }
                  .tip {
                    font-family: Roboto-Bold;
                    font-size: 10px;
                    padding-left: 5px;
                  }
                  .p {
                    font-family: Roboto-Regular;
                    font-size: 10px;
                    padding-left: 5px;
                  }

                  table {
                    font-size: 10px;
                    th {
                      font-family: Roboto-Bold;
                      text-align: start;
                    }
                    td {
                      padding-left: 20px;
                      font-family: Roboto-Regular;
                    }
                  }
                }
                .iz {
                  background-color: #181818;
                  height: 100%;
                  width: 222px;
                  margin-left: 34px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;

                  .conteInfo {
                    background-color: #043381;
                    position: absolute;
                    z-index: 9;
                    left: 0;
                    top: 77px;
                    width: 100%;
                    height: 118px;
                    color: #fff;
                    box-shadow: 0px 10px 20px #0000004a;

                    .deco {
                      height: 100%;
                      width: 230px;
                      position: absolute;
                      top: 0;
                      left: 33px;
                      background-color: #042a69;
                      transform: skew(341deg);
                    }
                    h1 {
                      font-family: Montserrat-Bold;
                      position: absolute;
                      top: 0;
                      left: 232px;
                      font-size: 38px;
                      letter-spacing: 3px;
                      letter-spacing: normal;
                    }
                    h2 {
                      font-family: Montserrat-Bold;
                      position: absolute;
                      top: 45px;
                      left: 260px;
                      font-size: 38px;
                      letter-spacing: 3px;
                      letter-spacing: normal;
                    }
                    h3 {
                      font-family: Roboto-Regular;
                      position: absolute;
                      top: 92px;
                      left: 308px;
                      font-size: 13px;
                    }
                  }

                  .contePerfil {
                    position: relative;
                    z-index: 10;

                    .perfil {
                      background-color: #405c8e;
                      border-radius: 50%;
                      height: 165px;
                      width: 165px;
                      border: 3px solid #053381;
                      background-image: url(${perfilBase64Image.value});
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                    }
                  }

                  .titulo2 {
                    font-family: Roboto-Regular;
                    text-align: center;
                    color: #fff;
                    font-weight: bold;
                    font-size: 15px;
                  }

                  p {
                    font-family: Roboto-Regular;
                    font-size: 10px;
                    color: #fff;
                    width: 160px;
                    text-align: center;
                    line-height: 13px;
                  }

                  .titulo {
                    font-family: Roboto-Regular;
                    color: #fff;
                    font-size: 12px;
                    border: 2px solid #0f70af;
                    padding: 3px 55px;
                    border-radius: 15px;
                  }
                  li {
                    font-family: Roboto-Regular;
                    font-size: 10px;
                    color: #fff;
                    margin: 2px 0;
                    text-align: start;
                    width: 150px;
                  }
                  .ti {
                    font-family: Roboto-Bold;
                    color: #fff;
                    font-size: 10px;
                  }
                  .tip {
                    font-family: Roboto-Regular;
                    color: #fff;
                    font-size: 10px;
                  }

                  .lin {
                    color: #fff;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding-left: 35px;
                    margin: 2px 0;
                    text-decoration: none;

                    .lucide-map-pin {
                      svg {
                        circle {
                          stroke-width: 0;
                          fill: #0673bb;
                        }
                      }
                    }

                    .ico {
                      background-color: #0673bb;
                      width: 25px;
                      height: 25px;
                      padding: 4px;
                      border-radius: 50%;
                      transform: scale(0.8);

                      svg {
                        fill: #181818;
                        stroke-width: 2;
                        stroke: #0673bb;
                        height: 100%;
                        width: 100%;
                      }
                    }
                    span {
                      font-family: Roboto-Regular;
                      font-size: 10px;
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
                }
              }
            </style>
            <div class="cv" id="cv">
              <div class="iz">
                <div class="conteInfo">
                  <div class="deco"></div>
                  <h1>
                    ${informacionCv.value.perfil.nombre
                      .split(" ")[0]
                      .toUpperCase()}
                  </h1>
                  <h2>
                    ${informacionCv.value.perfil.nombre
                      .split(" ")[2]
                      .toUpperCase()}
                  </h2>
                  <h3>${informacionCv.value.perfil.titulo}</h3>
                </div>
                <div style="margin-top: 52px"></div>
                <div class="contePerfil">
                  <div class="perfil"></div>
                </div>
                <div style="margin-top: 8px"></div>
                <div class="titulo2">Sobre mi</div>
                <div style="margin-top: 4px"></div>
                <p>${informacionCv.value.perfil.descripcion}</p>

                <div style="margin-top: 13px"></div>
                <a
                  href="tel:${informacionCv.value.contacto.telefono}"
                  class="lin"
                >
                  <div class="ico">${createElement(Phone)}</div>
                  <span>${informacionCv.value.contacto.telefono}</span>
                </a>
                <div class="lin">
                  <div class="ico lucide-map-pin">${createElement(MapPin)}</div>
                  <span>${informacionCv.value.contacto.direccion}</span>
                </div>
                <a
                  href="mailto:${informacionCv.value.contacto.email}"
                  class="lin"
                >
                  <div class="ico">${createElement(Mail)}</div>
                  <span>${informacionCv.value.contacto.email}</span>
                </a>
                <a href="${informacionCv.value.contacto.web}" class="lin">
                  <div class="ico">${createElement(Globe)}</div>
                  <span>${informacionCv.value.contacto.web}</span>
                </a>

                <div style="margin-top: 13px"></div>
                <div class="titulo">Educación</div>
                <div style="margin-top: 13px"></div>

                ${informacionCv.value.educacion.map((value) => {
                  const { institucion, titulo, fechaInicio, fechaFin } = value;
                  return html`
                    <div class="ti">${institucion}</div>
                    <div class="tip">${titulo}</div>
                    <div class="tip">${fechaInicio} - ${fechaFin}</div>
                    <div style="margin-top: 13px"></div>
                  `;
                })}

                <div class="titulo">Expertise</div>
                <div style="margin-top: 13px"></div>
                <ul style="margin-left: 14px;">
                  ${informacionCv.value.experticia.map(
                    (value) => html`<li>${value}</li>`
                  )}
                </ul>
              </div>
              <div class="dere">
                <div style="margin-top: 221px"></div>
                <div class="ti">Experiencia</div>

                ${informacionCv.value.experiencia.map((value) => {
                  const { empresa, duracionInicio, duracionFin, descripcion } =
                    value;
                  return html`
                    <div style="margin-top: 12px"></div>
                    <div class="tip">${empresa}</div>
                    <div class="tip">Ecuador - Guayaquil</div>
                    <div class="tip">${duracionInicio} - ${duracionFin}</div>
                    <div class="p">${descripcion}</div>
                  `;
                })}
                ${informaionSesible.value
                  ? html`
                      <div style="margin-top: 12px"></div>
                      <div class="ti">Información</div>

                      <div style="margin-top: 12px"></div>
                      <table>
                        <tr>
                          <th>Cedula:</th>
                          <td>${informacionCv.value.datosPersonales.cedula}</td>
                        </tr>
                        <tr>
                          <th>Edad:</th>
                          <td>${informacionCv.value.datosPersonales.edad}</td>
                        </tr>
                        <tr>
                          <th>Estado Civil:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.estadoCivil}
                          </td>
                        </tr>
                        <tr>
                          <th>Fecha Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .fechaNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th>Lugar Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .lugarNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th>Nacionalidad:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.nacionalidad}
                          </td>
                        </tr>
                      </table>
                    `
                  : ""}
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 3
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                text-align: end;
                display: flex;
                position: relative;
                background-color: #ffffff;
                /* letter-spacing: 1px; */

                .tiiz {
                  position: relative;
                  &::after {
                    position: absolute;
                    content: "";
                    display: inline-block;
                    top: 50%;
                    right: -7px;
                    height: 6px;
                    width: 6px;
                    background-color: #fff;
                    border-radius: 50%;
                    border: 1px solid #000;
                    transform: translateX(-50%) translateY(-50%);
                  }
                }
                .tidere {
                  position: relative;
                  &::after {
                    position: absolute;
                    content: "";
                    display: inline-block;
                    top: 50%;
                    left: 0;
                    height: 6px;
                    width: 6px;
                    background-color: #fff;
                    border-radius: 50%;
                    border: 1px solid #000;
                    transform: translateX(-50%) translateY(-50%);
                  }
                }
                .noi {
                  position: relative;
                  &::before {
                    position: absolute;
                    content: "";
                    display: inline-block;
                    top: 50%;
                    left: 0;
                    height: 150px;
                    width: 6px;
                    background-color: #fff;
                    transform: translateX(-50%) translateY(-0%);
                  }
                }
                .noi2 {
                  position: relative;
                  &::before {
                    position: absolute;
                    content: "";
                    display: inline-block;
                    top: 50%;
                    right: -7px;
                    height: 317px;
                    width: 6px;
                    background-color: #fff;
                    transform: translateX(-50%) translateY(-0%);
                  }
                }

                .iz {
                  height: 100%;
                  width: 149px;
                  margin-left: 60px;
                  padding-top: 67px;
                  position: relative;

                  .raya {
                    position: absolute;
                    right: 0;
                    top: 80px;
                    height: calc(100% - 80px);
                    width: 1px;
                    background-color: #000;
                  }

                  .conteI {
                    .img {
                      height: 224px;
                      width: 136px;
                      background-color: black;
                      background-image: url(${perfilBase64Image.value});
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      filter: grayscale(1);
                    }
                  }

                  .ti {
                    padding-right: 15px;
                    font-size: 12px;
                    font-family: Raleway;
                    font-weight: bold;
                    position: relative;
                  }
                  .ti2 {
                    font-family: Raleway;
                    padding-right: 15px;
                    font-weight: bold;
                    font-size: 11px;
                  }
                  li {
                    padding-right: 15px;
                    font-size: 11px;
                    list-style: none;
                    margin: 1px 0;
                    font-family: Rubik;
                  }
                  .p {
                    padding-right: 15px;
                    font-size: 11px;
                    margin: 1px 0;
                    font-family: Rubik;
                  }
                }
                .dere {
                  text-align: start;
                  width: 315px;

                  h1 {
                    font-family: Raleway;
                    padding-left: 18px;
                    font-size: 26px;
                  }
                  h2 {
                    font-family: Rubik;
                    padding-left: 18px;
                    font-size: 13px;
                    font-weight: normal;
                    letter-spacing: 2px;
                  }

                  .ti {
                    padding-left: 18px;
                    font-size: 12px;
                    font-family: Raleway;
                    font-weight: bold;
                  }
                  .p {
                    padding-left: 18px;
                    font-size: 10px;
                    margin: 1px 0;
                    font-family: Rubik;
                    line-height: 14px;
                  }
                  .ico {
                    padding-left: 18px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 124%;

                    .lin {
                      display: flex;
                      align-items: center;
                      color: #000;
                      width: 175px;

                      .map-pin {
                        svg {
                          height: 100%;
                          width: 100%;
                          fill: #fff;
                          stroke-width: 0;
                          circle {
                            stroke-width: 0;
                            fill: #000;
                          }
                        }
                      }

                      .mail {
                        svg {
                          height: 100%;
                          width: 100%;
                          fill: #fff;
                          stroke-width: 2 !important;
                          stroke: #000;
                        }
                      }

                      .globe {
                        svg {
                          height: 100%;
                          width: 100%;
                          fill: #fff;
                          stroke-width: 2 !important;
                          stroke: #000;
                        }
                      }

                      .i {
                        height: 30px;
                        width: 30px;
                        background-color: #000;
                        padding: 6px;
                        border-radius: 50%;
                        transform: scale(0.8);

                        svg {
                          height: 100%;
                          width: 100%;
                          fill: #fff;
                          stroke-width: 0;
                        }
                      }
                      span {
                        font-size: 10px;
                        font-family: Rubik;
                        font-weight: normal;
                      }
                    }
                  }
                  .ti2 {
                    font-family: Raleway;
                    padding-left: 18px;
                    font-weight: bold;
                    font-size: 11px;
                  }
                  .p,
                  li {
                    padding-left: 18px;
                    font-size: 10px;
                    margin: 1px 0;
                    font-family: Rubik;
                    padding-left: 22px;
                  }
                  table {
                    padding-left: 18px;
                    font-size: 11px;
                    th {
                      font-family: Raleway;
                      text-align: start;
                      /* font-weight: 700; */
                    }
                    td {
                      font-family: Rubik;
                      padding-left: 18px;
                    }
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="iz">
                <div class="raya"></div>

                <div class="conteI">
                  <div class="img"></div>
                </div>

                <div style="margin-top: 46px"></div>

                <div class="ti tiiz">DATOS ACADÉMICOS</div>

                ${informacionCv.value.educacion.map((value) => {
                  const { institucion, titulo, fechaInicio, fechaFin } = value;
                  return html`
                    <div style="margin-top: 14px"></div>
                    <div class="ti2">${institucion}</div>
                    <div style="margin-top: -5px"></div>
                    <div class="p">${titulo}</div>
                    <div style="margin-top: -5px"></div>
                    <div class="p">${fechaInicio} - ${fechaFin}</div>
                  `;
                })}

                <div style="margin-top: 29px"></div>

                <div class="ti tiiz ${informaionSesible.value ? "" : "noi2"}">
                  HABILIDADES
                </div>

                <div style="margin-top: 10px"></div>
                ${informacionCv.value.experticia.map(
                  (value) => html`<li>${value}</li>`
                )}
              </div>
              <div class="dere">
                <div style="margin-top: 61px"></div>
                <h1 class="tidere">
                  ${informacionCv.value.perfil.nombre.split(" ")[0]}
                  ${informacionCv.value.perfil.nombre.split(" ")[2]}
                </h1>
                <div style="margin-top: -3px"></div>
                <h2>${informacionCv.value.perfil.titulo}</h2>

                <div style="margin-top: 18px"></div>
                <div class="ti tidere">SOBRE MÍ</div>
                <div style="margin-top: 7px"></div>
                <div class="p">${informacionCv.value.perfil.descripcion}</div>

                <div style="margin-top: 18px"></div>
                <div class="ico">
                  <a href="${informacionCv.value.contacto.web}" class="lin">
                    <div class="i globe">${createElement(Globe)}</div>
                    <span>${informacionCv.value.contacto.web}</span></a
                  >
                  <a
                    href="mailto:${informacionCv.value.contacto.email}"
                    class="lin"
                  >
                    <div class="i mail">${createElement(Mail)}</div>
                    <span>${informacionCv.value.contacto.email}</span></a
                  >
                  <a
                    href="tel:${informacionCv.value.contacto.telefono}"
                    class="lin"
                  >
                    <div class="i">${createElement(Phone)}</div>
                    <span>${informacionCv.value.contacto.telefono}</span></a
                  >
                  <div href="" class="lin">
                    <div class="i map-pin">${createElement(MapPin)}</div>
                    <span>${informacionCv.value.contacto.direccion}</span>
                  </div>
                </div>

                <div style="margin-top: 26px"></div>
                <div class="ti tidere">EXPERIENCIA LABORAL</div>

                ${informacionCv.value.experiencia.map((value) => {
                  const {
                    titulo,
                    empresa,
                    duracionInicio,
                    duracionFin,
                    descripcion,
                  } = value;

                  return html`
                    <div style="margin-top: 7px"></div>
                    <div class="ti2">${titulo}</div>
                    <div style="margin-top: -3px"></div>
                    <div class="p">
                      ${empresa} | ${duracionInicio} - ${duracionFin}
                    </div>
                    <div style="margin-top: 3px"></div>
                    <ul style="padding-left: 35px;">
                      ${descripcion.map(
                        (value2) =>
                          html`<li style="padding-left: 0;">${value2}</li>`
                      )}
                    </ul>
                  `;
                })}
                ${informaionSesible.value
                  ? html`
                      <div style="margin-top: 26px"></div>
                      <div class="ti tidere noi">INFORMACION PERSONAL</div>
                      <div style="margin-top: 10px"></div>

                      <table>
                        <tr>
                          <th>Cedula:</th>
                          <td>${informacionCv.value.datosPersonales.cedula}</td>
                        </tr>
                        <tr>
                          <th>Edad:</th>
                          <td>${informacionCv.value.datosPersonales.edad}</td>
                        </tr>
                        <tr>
                          <th>Estado Civil:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.estadoCivil}
                          </td>
                        </tr>
                        <tr>
                          <th>Fecha Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .fechaNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th>Lugar Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .lugarNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th>Nacionalidad:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.nacionalidad}
                          </td>
                        </tr>
                      </table>
                    `
                  : ""}
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 4
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                display: flex;
                position: relative;
                background-color: #ffffff;
                padding: 26px;

                .ti {
                  font-size: 17px;
                  font-family: DMSerifDisplay-Regular;
                }
                .ti2 {
                  font-weight: bold;
                  font-size: 10px;
                  font-family: Raleway;
                }
                .p {
                  font-family: Rubik;
                  font-size: 10px;
                  line-height: 14px;
                  margin-top: 4px;
                }
                li {
                  font-family: Rubik;
                  font-size: 10px;
                  font-weight: normal;
                  &::marker {
                    content: "-  ";
                  }
                }

                .iz {
                  height: 794px;
                  width: 190px;
                  position: relative;
                  padding: 0 20px 0 30px;
                  z-index: 1;
                  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); */

                  .imgPerfil {
                    height: 239px;
                    width: 170px;
                    background-color: #0005;
                    position: absolute;
                    top: 31px;
                    left: 30px;
                    z-index: -2;

                    background-image: url(${perfilBase64Image.value});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    filter: grayscale(1);
                  }

                  .border {
                    height: 100%;
                    width: 100%;
                    border: 4px solid #000;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -1;
                  }

                  .ico {
                    display: inline-flex;
                    align-items: center;
                    margin-left: -25px;

                    .iico {
                      height: 30px;
                      width: 30px;
                      background-color: #000;
                      border-radius: 50%;
                      padding: 6px;
                      transform: scale(0.8) translateX(-3px);

                      svg {
                        height: 100%;
                        width: 100%;
                        fill: #fff;
                        stroke-width: 2;
                        stroke: #000;
                      }
                    }
                    span {
                      font-family: Rubik;
                      color: #000;
                      font-weight: normal;
                      font-size: 11px;
                      margin-left: 5px;
                      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                      width: 148px;
                    }
                  }
                }
                .dere {
                  flex: 1;
                  padding: 33px 0 0 40px;

                  h1 {
                    font-family: tan-pearl;
                    font-size: 34px;
                  }
                  h2 {
                    font-family: Raleway;
                    font-size: 12px;
                    font-weight: normal;
                    margin-top: 1px;
                  }

                  table {
                    td {
                      padding-left: 18px;
                    }
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="iz">
                <div class="imgPerfil"></div>
                <div class="border"></div>

                <div style="margin-top: 297px"></div>
                <div class="ti">Sobre mí</div>
                <div style="margin-top: 4px"></div>
                <div class="p">${informacionCv.value.perfil.descripcion}</div>

                <div style="margin-top: 24px"></div>
                <div class="ti">Contacto</div>
                <div style="margin-top: 13px"></div>

                <a
                  href="tel:${informacionCv.value.contacto.telefono}"
                  class="ico"
                >
                  <div class="iico phone">${createElement(Phone)}</div>
                  <span>${informacionCv.value.contacto.telefono}</span>
                </a>
                <a href="${informacionCv.value.contacto.web}" class="ico">
                  <div class="iico globe">${createElement(Globe)}</div>
                  <span>${informacionCv.value.contacto.web}</span></a
                >
                <a
                  href="mailto:${informacionCv.value.contacto.email}"
                  class="ico"
                >
                  <div class="iico mail">${createElement(Mail)}</div>
                  <span>${informacionCv.value.contacto.email}</span>
                </a>
                <div class="ico">
                  <div class="iico map-pin">${createElement(MapPin)}</div>
                  <span>${informacionCv.value.contacto.direccion}</span>
                </div>

                <div style="margin-top: 54px"></div>
                <div class="ti">Más información</div>
                <div style="margin-top: 9px"></div>

                ${informacionCv.value.experticia.map(
                  (value) => html`<li>${value}</li>`
                )}
              </div>
              <div class="dere">
                <h1>${informacionCv.value.perfil.nombre.split(" ")[0]}</h1>
                <div style="margin-top: -7px"></div>
                <h1>${informacionCv.value.perfil.nombre.split(" ")[2]}</h1>
                <h2>${informacionCv.value.perfil.titulo}</h2>

                <div style="margin-top: 50px"></div>
                <div class="ti">Experiencia laboral</div>

                ${informacionCv.value.experiencia.map((value) => {
                  const {
                    titulo,
                    empresa,
                    duracionInicio,
                    duracionFin,
                    descripcion,
                  } = value;
                  return html`
                    <div style="margin-top: 6px"></div>
                    <div class="ti2">${titulo}</div>
                    <div style="margin-top: -5px"></div>
                    <div class="p">
                      ${empresa} | ${duracionInicio} - ${duracionFin}
                    </div>
                    <div style="margin-top: 3px"></div>
                    ${descripcion.map(
                      (value2) => html`<li>${value2}</li>
                        <div style="margin-top: -1px"></div>`
                    )}

                    <div style="margin-top: 14px"></div>
                  `;
                })}

                <div style="margin-top: 21px"></div>
                <div class="ti">Datos académicos</div>
                <div style="margin-top: 11px"></div>

                ${informacionCv.value.educacion.map((value2) => {
                  const { institucion, titulo, fechaInicio, fechaFin } = value2;
                  return html`
                    <div class="ti2">${institucion}</div>
                    <div style="margin-top: -5px"></div>
                    <div class="p">
                      ${titulo} | ${fechaInicio} - ${fechaFin}
                    </div>
                    <div style="margin-top: 12px"></div>
                  `;
                })}
                ${informaionSesible.value
                  ? html`
                      <div style="margin-top: 20px"></div>
                      <div class="ti">Información personal</div>

                      <div style="margin-top: 9px"></div>

                      <table>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Cedula:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales.cedula}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">Edad:</th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales.edad}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Estado Civil:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales.estadoCivil}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Fecha Nacimiento:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales
                              .fechaNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Lugar Nacimiento:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales
                              .lugarNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Nacionalidad:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales.nacionalidad}
                          </td>
                        </tr>
                      </table>
                    `
                  : ""}
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 5
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                display: flex;
                position: relative;
                background-color: #ffffff;

                .ti {
                  font-family: Maharlika;
                  width: 100%;
                  font-size: 15px;
                }
                .ti2 {
                  font-weight: bold;
                  font-size: 10px;
                  font-family: Raleway;
                  width: 100%;
                }
                li {
                  font-family: Rubik;
                  font-size: 10px;
                  font-weight: normal;
                  width: 100%;
                }
                .p {
                  font-family: Rubik;
                  font-size: 11px;
                  line-height: 14px;
                  width: 100%;
                }

                .raya {
                  height: 100%;
                  width: 37px;
                  background-color: #c3b19d;
                }

                .iz {
                  height: 100%;
                  width: 210px;
                  position: relative;
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  padding: 0 30px;

                  .raya {
                    position: absolute;
                    top: 159px;
                    right: 0;
                    height: 633px;
                    width: 2px;
                    background-color: #c3b19d;
                  }

                  .imgPerfil {
                    height: 134px;
                    width: 134px;
                    border-radius: 50%;
                    background-color: #c3b19d;
                    background-image: url(${perfilBase64Image.value});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                  }
                }
                .dere {
                  padding: 0 69px 0 32px;
                  flex: 1;

                  h1 {
                    font-family: Maharlika;
                    width: 100%;
                    font-size: 26px;
                  }
                  h2 {
                    font-family: Rubik;
                    width: 100%;
                    font-size: 14px;
                    padding-right: 27px;
                    text-align: end;
                    font-weight: normal;
                  }

                  .ico {
                    display: flex;
                    align-items: center;

                    .iico {
                      height: 16px;
                      width: 16px;
                      transform: scale(0.8) translateX(-3px);

                      svg {
                        height: 100%;
                        width: 100%;
                        fill: #000;
                        stroke-width: 2;
                        stroke: #fff;
                      }
                    }

                    .map-pin {
                      svg {
                        stroke-width: 0;
                        circle {
                          fill: #fff;
                        }
                      }
                    }
                    .mail {
                      svg {
                        stroke-width: 0;
                        path {
                          stroke-width: 2;
                        }
                      }
                    }
                    .phone {
                      svg {
                        stroke-width: 0;
                      }
                    }

                    span {
                      font-family: Rubik;
                      color: #000;
                      font-weight: normal;
                      font-size: 11px;
                      margin-left: 6px;
                    }
                  }

                  table {
                    td {
                      padding-left: 18px;
                      width: auto;
                    }
                    th {
                      width: auto;
                    }
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="raya"></div>
              <div class="iz">
                <div class="raya"></div>
                <div style="margin-top: 60px"></div>
                <div>
                  <div class="imgPerfil"></div>
                </div>

                <div style="margin-top: 49px"></div>
                <div class="ti">Sobre mí</div>
                <div style="margin-top: 9px"></div>
                <div class="p">${informacionCv.value.perfil.descripcion}</div>

                <div style="margin-top: 23px"></div>
                <div class="ti">Datos académicos</div>
                <div style="margin-top: 11px"></div>

                ${informacionCv.value.educacion.map((value) => {
                  const { institucion, titulo, fechaInicio, fechaFin } = value;
                  return html`
                    <div class="ti2">${institucion}</div>
                    <div class="p">${titulo}</div>
                    <div class="p">${fechaInicio} - ${fechaFin}</div>
                    <div style="margin-top: 12px"></div>
                  `;
                })}
              </div>

              <div class="dere">
                <div style="margin-top: 63px"></div>
                <h1>
                  ${informacionCv.value.perfil.nombre.split(" ")[0]}
                  ${informacionCv.value.perfil.nombre.split(" ")[2]}
                </h1>
                <div style="margin-top: -4px"></div>
                <h2>/ ${informacionCv.value.perfil.titulo}</h2>

                <div style="margin-top: 37px"></div>
                <a href="${informacionCv.value.contacto.web}" class="lin ico">
                  <div class="iico globe">${createElement(Globe)}</div>
                  <span>${informacionCv.value.contacto.web}</span></a
                >
                <a
                  href="tel:${informacionCv.value.contacto.telefono}"
                  class="ico"
                >
                  <div class="iico phone">${createElement(Phone)}</div>
                  <span>${informacionCv.value.contacto.telefono}</span>
                </a>
                <a
                  href="mailto:${informacionCv.value.contacto.email}"
                  class="ico"
                >
                  <div class="iico mail">${createElement(Mail)}</div>
                  <span>${informacionCv.value.contacto.email}</span>
                </a>
                <div class="ico">
                  <div class="iico map-pin">${createElement(MapPin)}</div>
                  <span>${informacionCv.value.contacto.direccion}</span>
                </div>

                <div style="margin-top: 58px"></div>
                <div class="ti">Experiencia laboral</div>

                ${informacionCv.value.experiencia.map((value) => {
                  const {
                    titulo,
                    empresa,
                    duracionInicio,
                    duracionFin,
                    descripcion,
                  } = value;

                  return html`
                    <div style="margin-top: 6px"></div>
                    <div class="ti2">${titulo}</div>
                    <div style="margin-top: -4px"></div>
                    <div class="p">
                      ${empresa} | ${duracionInicio} - ${duracionFin}
                    </div>
                    <div style="margin-top: 3px"></div>

                    <ul style="padding-left: 13px;">
                      ${descripcion.map(
                        (value2) => html`<li>${value2}</li>
                          <div style="margin-top: -1px"></div>`
                      )}
                    </ul>

                    <div style="margin-top: 14px"></div>
                  `;
                })}
                ${informaionSesible.value
                  ? html`
                      <div style="margin-top: 25px"></div>
                      <div class="ti">Información personal</div>

                      <div style="margin-top: 6px"></div>
                      <table>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Cedula:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales.cedula}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">Edad:</th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales.edad}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Estado Civil:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales.estadoCivil}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Fecha Nacimiento:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales
                              .fechaNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Lugar Nacimiento:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales
                              .lugarNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;" class="ti2">
                            Nacionalidad:
                          </th>
                          <td class="p">
                            ${informacionCv.value.datosPersonales.nacionalidad}
                          </td>
                        </tr>
                      </table>
                    `
                  : ""}
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 6
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                display: inline-block;
                background-color: #ffffff;
                font-family: GlacialIndifference-Regular;

                .conte {
                  height: 172px;
                  width: 100%;
                  background-color: #25577c;
                  position: relative;

                  .deta {
                    height: 142px;
                    width: 142px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: rotate(45deg) translateX(-56px) translateY(76px);
                    background-size: 10px;
                    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
                  }

                  .imgPerfil {
                    height: 142px;
                    width: 142px;
                    position: absolute;
                    top: 17px;
                    left: 85px;
                    border-radius: 50%;
                    background-color: blue;
                    border: 3px solid #fff;

                    background-image: url(${perfilBase64Image.value});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                  }

                  .conteInfo {
                    height: 100%;
                    min-width: 250px;
                    position: absolute;
                    top: 0;
                    right: 59px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #fff;

                    h1 {
                      font-size: 33px;
                      letter-spacing: 7px;
                      width: 100%;
                      text-align: center;
                    }
                    h2 {
                      font-size: 12px;
                      letter-spacing: 5px;
                      width: 100%;
                      text-align: end;
                    }
                    .raya {
                      width: 100%;
                      margin-bottom: 4px;
                      border: 1px solid #fff;
                    }
                    p {
                      width: 250px;
                      font-size: 10px;
                      text-align: end;
                    }
                  }
                }

                .conteI {
                  height: 556px;
                  min-width: 100%;
                  display: flex;
                  justify-content: center;

                  .b {
                    height: 100%;
                    margin: 0 18px;
                    width: 215px;

                    .ti {
                      width: 98%;
                      height: 22px;
                      background: #386687;
                      color: #fff;
                      font-size: 12px;
                      display: flex;
                      justify-content: start;
                      align-items: center;
                      padding-left: 8px;
                      letter-spacing: 1px;
                      font-family: Montserrat-Bold;
                    }

                    .ti2 {
                      font-family: Montserrat-Bold;
                      font-size: 10px;
                      padding-left: 7px;
                    }
                    p {
                      font-size: 11px;
                      padding: 0 8px;
                      line-height: 14px;
                    }
                    li {
                      font-size: 11px;
                      padding: 0 8px;
                      line-height: 14px;
                    }

                    table {
                      th {
                        font-family: Montserrat-Bold;
                        padding-right: 9px;
                        width: auto;
                        font-size: 11px;
                        border-right: 1px solid #000;
                        padding-left: 8px;
                      }
                      td {
                        padding-left: 9px;
                        width: auto;
                        font-size: 12px;
                      }
                    }

                    .icono {
                      height: 116px;
                      width: 97%;
                      background-color: #25577c;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;

                      .oo {
                        display: flex;
                        align-items: flex-start;
                        flex-direction: column;

                        .ico {
                          display: flex;
                          align-items: center;
                          justify-content: center;

                          .iico {
                            height: 25px;
                            width: 25px;
                            transform: scale(0.8) translateX(-3px);

                            svg {
                              height: 100%;
                              width: 100%;
                              fill: #fff;
                              stroke-width: 2;
                              stroke: #25577c;
                            }
                          }

                          .map-pin {
                            svg {
                              stroke-width: 0;
                              circle {
                                fill: #25577c;
                              }
                            }
                          }
                          .mail {
                            svg {
                              stroke-width: 0;
                              path {
                                stroke-width: 2;
                              }
                            }
                          }
                          .phone {
                            svg {
                              stroke-width: 0;
                            }
                          }

                          span {
                            font-family: Rubik;
                            color: #fff;
                            font-weight: normal;
                            font-size: 11px;
                            margin-left: 6px;
                          }
                        }
                      }
                    }
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div style="margin-top: 61px"></div>
              <div class="conte">
                <div class="deta"></div>
                <div class="imgPerfil"></div>
                <div class="conteInfo">
                  <h1>
                    ${informacionCv.value.perfil.nombre.split(" ")[0]}
                    ${informacionCv.value.perfil.nombre.split(" ")[2]}
                  </h1>
                  <h2>${informacionCv.value.perfil.titulo}</h2>
                  <div class="raya"></div>
                  <p>${informacionCv.value.perfil.descripcion}</p>
                </div>
              </div>

              <div class="conteI">
                <div class="a1 b">
                  <div style="margin-top: 24px"></div>
                  <div class="ti">FORMACIÓN</div>

                  ${informacionCv.value.educacion.map((value2) => {
                    const {
                      institucion,
                      titulo,
                      fechaInicio,
                      fechaFin,
                      descripcion,
                    } = value2;
                    return html`
                      <div style="margin-top: 19px"></div>
                      <div class="ti2">${titulo}</div>
                      <div style="margin-top: -3px"></div>
                      <div class="ti2">${institucion}</div>
                      <div style="margin-top: -3px"></div>
                      <div class="ti2">(${fechaInicio} - ${fechaFin})</div>
                      <div style="margin-top: 5px"></div>
                      <p>${descripcion}</p>
                      <div style="margin-top: 24px"></div>
                    `;
                  })}

                  <div style="margin-top: 24px"></div>
                  <div class="ti">HERRAMIENTAS</div>
                  <div style="margin-top: 10px"></div>

                  ${informacionCv.value.experticia.map(
                    (value) => html`<p>${value}</p>`
                  )}
                  ${informaionSesible.value
                    ? html`
                        <div style="margin-top: 24px"></div>
                        <div class="ti">INFORMACIÓN</div>
                        <div style="margin-top: 10px"></div>

                        <table>
                          <tr>
                            <th style="text-align: start;">Cedula:</th>
                            <td>
                              ${informacionCv.value.datosPersonales.cedula}
                            </td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">Edad:</th>
                            <td>${informacionCv.value.datosPersonales.edad}</td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">Estado Civil:</th>
                            <td>
                              ${informacionCv.value.datosPersonales.estadoCivil}
                            </td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">
                              Fecha Nacimiento:
                            </th>
                            <td>
                              ${informacionCv.value.datosPersonales
                                .fechaNacimiento}
                            </td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">
                              Lugar Nacimiento:
                            </th>
                            <td>
                              ${informacionCv.value.datosPersonales
                                .lugarNacimiento}
                            </td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">Nacionalidad:</th>
                            <td>
                              ${informacionCv.value.datosPersonales
                                .nacionalidad}
                            </td>
                          </tr>
                        </table>
                      `
                    : ""}
                </div>
                <div class="a2 b">
                  <div style="margin-top: 24px"></div>
                  <div class="ti">EXPERIENCIA</div>

                  ${informacionCv.value.experiencia.map((value) => {
                    const { titulo, duracionInicio, duracionFin, descripcion } =
                      value;
                    return html`
                      <div style="margin-top: 19px"></div>
                      <div class="ti2">${titulo}</div>
                      <div style="margin-top: -3px"></div>
                      <div class="ti2">
                        (${duracionInicio} - ${duracionFin})
                      </div>
                      <div style="margin-top: 5px"></div>
                      ${descripcion.map((value2) => html`<p>${value2}</p>`)}

                      <div style="margin-top: 18px"></div>
                    `;
                  })}

                  <div style="margin-top: 20px"></div>
                  <div class="icono">
                    <div class="oo">
                      <a
                        href="${informacionCv.value.contacto.web}"
                        class="lin ico"
                      >
                        <div class="iico globe">${createElement(Globe)}</div>
                        <span>${informacionCv.value.contacto.web}</span></a
                      >
                      <a
                        href="tel:${informacionCv.value.contacto.telefono}"
                        class="ico"
                      >
                        <div class="iico phone">${createElement(Phone)}</div>
                        <span>${informacionCv.value.contacto.telefono}</span>
                      </a>
                      <a
                        href="mailto:${informacionCv.value.contacto.email}"
                        class="ico"
                      >
                        <div class="iico mail">${createElement(Mail)}</div>
                        <span>${informacionCv.value.contacto.email}</span>
                      </a>
                      <div class="ico">
                        <div class="iico map-pin">${createElement(MapPin)}</div>
                        <span>${informacionCv.value.contacto.direccion}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 7 ? html`` : ""}
      ${seleccionado.value === 8
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                display: flex;
                position: relative;
                background-color: #ffffff;

                .ti {
                  font-family: DMSerifDisplay-Regular;
                  width: 100%;
                  font-size: 17px;
                }
                .ti2 {
                  font-weight: bold;
                  font-size: 10px;
                  font-family: Raleway;
                  width: 100%;
                }
                li {
                  font-family: Rubik;
                  font-size: 10px;
                  font-weight: normal;
                  width: 100%;
                  padding-left: 11px;
                }
                .p {
                  font-family: Rubik;
                  font-size: 11px;
                  line-height: 14px;
                  width: 100%;
                }

                .raya {
                  border-bottom: 3px solid #b3b4b7;
                  width: 100%;
                  border-radius: 10px;
                }
                .ti {
                  font-family: hatton-Medium;
                  font-size: 15px;
                  letter-spacing: 1px;
                }

                .iz {
                  height: 100%;
                  width: 43%;
                  background-color: #e3e6eb;
                  display: flex;
                  align-items: center;
                  padding: 0 40px;
                  flex-direction: column;

                  .conte {
                    height: 441px;
                    width: 220px;
                    background-color: #fff;
                    border-radius: 111px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;

                    .imgPerfil {
                      height: 204px;
                      width: 204px;
                      border-radius: 50%;
                      background-color: red;

                      background-image: url(${perfilBase64Image.value});
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                    }
                    .o {
                      font-family: hatton-Medium;
                      font-size: 20px;
                      letter-spacing: 1px;
                    }
                    .oo {
                      font-size: 9px;
                      padding: 0px 32px;
                      text-align: center;
                      font-family: Rubik;
                    }
                  }
                  .icono {
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;

                    .ico {
                      display: flex;
                      align-items: center;

                      .iico {
                        height: 30px;
                        width: 30px;
                        background-color: #000;
                        border-radius: 50%;
                        padding: 6px;
                        transform: scale(0.8) translateX(-3px);

                        svg {
                          height: 100%;
                          width: 100%;
                          fill: #fff;
                          stroke-width: 2;
                          stroke: #000;
                        }
                      }
                      span {
                        font-family: Rubik;
                        color: #000;
                        font-weight: normal;
                        font-size: 11px;
                        margin-left: 5px;
                      }
                    }
                  }
                }
                .dere {
                  height: 100%;
                  flex: 1;
                  padding-right: 20px;

                  h1 {
                    font-family: hatton-Medium;
                    font-size: 35px;
                    text-align: center;
                    letter-spacing: 2px;
                  }
                  h2 {
                    text-align: end;
                    padding-right: 40px;
                    font-size: 17px;
                    font-family: lazord;
                    letter-spacing: 2px;
                  }
                  .conteY {
                    padding: 0 38px 0 22px;
                  }

                  .u {
                    font-size: 16px;
                    padding: 0 0px 0 22px;
                    letter-spacing: 2px;
                  }
                  .iu {
                    font-size: 10px;
                    padding: 0 0px 0 37px;
                    letter-spacing: 1px;
                  }
                  .ii {
                    margin-left: 38px;
                    padding: 0;
                    &:marker {
                      content: "  ";
                    }
                  }
                  .iio {
                    list-style: none;
                  }

                  table {
                    margin-left: 12px;
                    th {
                      font-family: Montserrat-Bold;
                      padding-right: 9px;
                      width: auto;
                      font-size: 11px;
                      padding-left: 8px;
                      font-family: Raleway;
                      font-weight: bold;
                    }
                    td {
                      padding-left: 9px;
                      width: auto;
                      font-size: 12px;
                    }
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="iz">
                <div style="margin-top: 35px"></div>
                <div class="conte">
                  <div style="margin-top: 10px"></div>
                  <div class="imgPerfil"></div>
                  <div style="margin-top: 25px"></div>
                  <div class="o">Mi perfil</div>
                  <div class="oo">
                    ${informacionCv.value.perfil.descripcion}
                  </div>
                </div>

                <div style="margin-top: 40px"></div>
                <div class="raya"></div>
                <div style="margin-top: 12px"></div>
                <div class="ti">EXPERTISE:</div>
                <div style="margin-top: 1px"></div>
                <ul style="margin-left: 14px;">
                  ${informacionCv.value.experticia.map(
                    (value) => html`<li>${value}</li>`
                  )}
                </ul>

                <div style="margin-top: 21px"></div>
                <div class="raya"></div>
                <div style="margin-top: 14px"></div>
                <div class="ti">CONTACTO:</div>
                <div style="margin-top: 1px"></div>

                <div class="icono">
                  <a
                    href="tel:${informacionCv.value.contacto.telefono}"
                    class="ico"
                  >
                    <div class="iico phone">
                      ${createElement(Phone)}<i data-lucide="phone"></i>
                    </div>
                    <span>${informacionCv.value.contacto.telefono}</span>
                  </a>
                  <a href="${informacionCv.value.contacto.web}" class="ico">
                    <div class="iico globe">
                      ${createElement(Globe)}<i data-lucide="globe"></i>
                    </div>
                    <span>${informacionCv.value.contacto.web}</span></a
                  >
                  <a
                    href="mailto:${informacionCv.value.contacto.email}"
                    class="ico"
                  >
                    <div class="iico mail">
                      ${createElement(Mail)}<i data-lucide="mail"></i>
                    </div>
                    <span>${informacionCv.value.contacto.email}</span>
                  </a>
                  <div class="ico">
                    <div class="iico map-pin">
                      ${createElement(MapPin)}<i data-lucide="map-pin"></i>
                    </div>
                    <span>${informacionCv.value.contacto.direccion}</span>
                  </div>
                </div>
              </div>

              <div class="dere">
                <div style="margin-top: 58px"></div>
                <h1>
                  ${informacionCv.value.perfil.nombre.split(" ")[0]}
                  ${informacionCv.value.perfil.nombre.split(" ")[2]}
                </h1>
                <div style="margin-top: -3px"></div>
                <h2>${informacionCv.value.perfil.titulo}</h2>

                <div style="margin-top: 8px"></div>
                <div class="conteY"><div class="raya"></div></div>
                <div style="margin-top: 22px"></div>

                <div class="ti u">Experiencia laboral</div>

                ${informacionCv.value.experiencia.map((value) => {
                  const {
                    titulo,
                    empresa,
                    duracionInicio,
                    duracionFin,
                    descripcion,
                  } = value;
                  return html`
                    <div style="margin-top: 11px"></div>
                    <div class="ti2 iu">${titulo}</div>
                    <div class="ti2 iu">
                      ${empresa} (${duracionInicio} - ${duracionFin})
                    </div>
                    ${descripcion.map(
                      (value2) => html`<li class="ii">${value2}</li>`
                    )}
                  `;
                })}

                <div style="margin-top: 18px"></div>
                <div class="conteY"><div class="raya"></div></div>
                <div style="margin-top: 22px"></div>

                <div class="ti u">Formación</div>

                ${informacionCv.value.educacion.map((value2) => {
                  const {
                    institucion,
                    titulo,
                    fechaInicio,
                    fechaFin,
                    descripcion,
                  } = value2;
                  return html`
                    <div style="margin-top: 11px"></div>
                    <div class="ti2 iu">${titulo}</div>
                    <div class="ti2 iu">${institucion}</div>
                    <div class="ti2 iu">(${fechaInicio} - ${fechaFin})</div>
                    <li class="ii iio">${descripcion}</li>
                  `;
                })}
                ${informaionSesible.value
                  ? html`
                      <div style="margin-top: 18px"></div>
                      <div class="conteY"><div class="raya"></div></div>
                      <div style="margin-top: 22px"></div>

                      <div class="ti u">Información</div>
                      <div style="margin-top: 11px"></div>

                      <table>
                        <tr>
                          <th style="text-align: start;">Cedula:</th>
                          <td>${informacionCv.value.datosPersonales.cedula}</td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Edad:</th>
                          <td>${informacionCv.value.datosPersonales.edad}</td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Estado Civil:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.estadoCivil}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Fecha Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .fechaNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Lugar Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .lugarNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Nacionalidad:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.nacionalidad}
                          </td>
                        </tr>
                      </table>
                    `
                  : ""}
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 9
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                background-color: #ffffff;

                .ti {
                  font-family: Assistant;
                  width: 100%;
                  font-weight: bold;
                  font-size: 23px;
                  color: #031d52;
                }
                .ti2 {
                  font-weight: bold;
                  font-size: 13px;
                  width: 100%;
                  font-family: Assistant;
                  color: #031d52;
                }
                li {
                  font-family: Rubik;
                  font-size: 10px;
                  font-weight: normal;
                  width: 100%;
                  padding-left: 5px;
                  color: #031d52;
                }
                .p {
                  font-size: 11px;
                  line-height: 14px;
                  width: 100%;
                  font-family: Assistant;
                  color: #031d52;
                }

                .conteInfo {
                  height: 152px;
                  width: 100%;
                  background-color: #223a56;
                  position: relative;
                  margin-bottom: 15px;

                  .imgPerfil {
                    height: 183px;
                    width: 182px;
                    background-color: #e93939;
                    position: absolute;
                    top: 43px;
                    left: 39px;
                    border: 6px solid #fff;

                    background-image: url(${perfilBase64Image.value});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                  }

                  .info {
                    height: 108px;
                    width: 379px;
                    position: absolute;
                    top: 43px;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    h1 {
                      font-family: Cabin;
                      text-align: end;
                      color: #fff;
                      font-size: 39px;
                      width: 100%;
                      padding-right: 53px;
                      letter-spacing: 1px;
                    }
                    h2 {
                      font-family: Assistant;
                      font-size: 13px;
                      color: #fff;
                      width: 100%;
                      padding-right: 53px;
                      letter-spacing: 1px;
                      text-align: end;
                    }
                  }
                }
                .conteDes {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  .uu {
                    height: 660px;
                  }

                  .iz {
                    background-color: #e3e4e8;
                    width: 255px;
                    padding: 0 40px;

                    .icono {
                      height: 116px;
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: flex-start;

                      .oo {
                        display: flex;
                        align-items: flex-start;
                        flex-direction: column;

                        .ico {
                          display: flex;
                          align-items: center;
                          justify-content: center;

                          .iico {
                            height: 25px;
                            width: 25px;
                            transform: scale(0.7) translateX(-3px);

                            svg {
                              height: 100%;
                              width: 100%;
                              fill: #031d52;
                              stroke-width: 2;
                              stroke: #e3e4e8;
                            }
                          }

                          .map-pin {
                            svg {
                              stroke-width: 0;
                              circle {
                                fill: #fff;
                              }
                            }
                          }
                          .mail {
                            svg {
                              stroke-width: 0;
                              path {
                                stroke-width: 2;
                              }
                            }
                          }
                          .phone {
                            svg {
                              stroke-width: 0;
                            }
                          }

                          span {
                            font-family: Rubik;
                            color: #031d52;
                            font-weight: normal;
                            font-size: 11px;
                            margin-left: 6px;
                          }
                        }
                      }
                    }
                  }
                  .dere {
                    width: 308px;
                    position: relative;
                    padding-right: 53px;

                    .raya {
                      position: absolute;
                      top: 0;
                      right: 0;
                      height: 100%;
                      width: 16px;
                      background-color: #223a56;
                    }

                    table {
                      color: #031d52;
                      th {
                        font-family: Assistant;
                        padding-right: 9px;
                        width: auto;
                        font-size: 13px;
                      }
                      td {
                        font-family: Rubik;
                        padding-left: 9px;
                        width: auto;
                        font-size: 11px;
                      }
                    }
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="conteInfo">
                <div class="imgPerfil"></div>

                <div class="info">
                  <h1>
                    ${informacionCv.value.perfil.nombre.split(" ")[0]}
                    ${informacionCv.value.perfil.nombre.split(" ")[2]}
                  </h1>
                  <div style="margin-top: -6px"></div>
                  <h2>${informacionCv.value.perfil.titulo}</h2>
                </div>
              </div>
              <div class="conteDes">
                <div class="iz uu">
                  <div style="margin-top: 78px"></div>
                  <div class="ti">FORMACIÓN</div>

                  ${informacionCv.value.educacion.map((value2) => {
                    const { institucion, titulo, fechaInicio, fechaFin } =
                      value2;
                    return html`
                      <div class="ti2">${institucion}</div>
                      <div class="ti2">(${fechaInicio} - ${fechaFin})</div>
                      <div class="p">${titulo}</div>
                      <div style="margin-top: 10px"></div>
                    `;
                  })}

                  <div style="margin-top: 25px"></div>
                  <div class="ti">CONTACTO</div>

                  <div class="icono">
                    <div class="oo">
                      <a
                        href="${informacionCv.value.contacto.web}"
                        class="lin ico"
                      >
                        <div class="iico globe">${createElement(Globe)}</div>
                        <span>${informacionCv.value.contacto.web}</span></a
                      >
                      <a
                        href="tel:${informacionCv.value.contacto.telefono}"
                        class="ico"
                      >
                        <div class="iico phone">${createElement(Phone)}</div>
                        <span>${informacionCv.value.contacto.telefono}</span>
                      </a>
                      <a
                        href="mailto:${informacionCv.value.contacto.email}"
                        class="ico"
                      >
                        <div class="iico mail">${createElement(Mail)}</div>
                        <span>${informacionCv.value.contacto.email}</span>
                      </a>
                      <div class="ico">
                        <div class="iico map-pin">${createElement(MapPin)}</div>
                        <span>${informacionCv.value.contacto.direccion}</span>
                      </div>
                    </div>
                  </div>

                  <div style="margin-top: 16px"></div>
                  <div class="ti">EXPERTISE</div>

                  <ul style="margin-left: 14px;">
                    ${informacionCv.value.experticia.map(
                      (value) => html`<li>${value}</li>`
                    )}
                  </ul>
                </div>
                <div class="dere uu">
                  <div class="ti">MI PERFIL</div>
                  <div class="p">${informacionCv.value.perfil.descripcion}</div>

                  <div style="margin-top: 16px"></div>
                  <div class="ti">EXPERIENCIA</div>

                  ${informacionCv.value.experiencia.map((value) => {
                    const {
                      titulo,
                      empresa,
                      duracionInicio,
                      duracionFin,
                      descripcion,
                    } = value;
                    return html`
                      <div class="ti2">${titulo}</div>
                      <div class="ti2">
                        ${empresa} (${duracionInicio} - ${duracionFin})
                      </div>
                      ${descripcion.map(
                        (value2) => html`<div class="p">${value2}</div>`
                      )}

                      <div style="margin-top: 10px"></div>
                    `;
                  })}
                  ${informaionSesible.value
                    ? html`
                        <div style="margin-top: 16px"></div>
                        <div class="ti">INFORMACIÓN</div>
                        <table>
                          <tr>
                            <th style="text-align: start;">Cedula:</th>
                            <td>
                              ${informacionCv.value.datosPersonales.cedula}
                            </td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">Edad:</th>
                            <td>${informacionCv.value.datosPersonales.edad}</td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">Estado Civil:</th>
                            <td>
                              ${informacionCv.value.datosPersonales.estadoCivil}
                            </td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">
                              Fecha Nacimiento:
                            </th>
                            <td>
                              ${informacionCv.value.datosPersonales
                                .fechaNacimiento}
                            </td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">
                              Lugar Nacimiento:
                            </th>
                            <td>
                              ${informacionCv.value.datosPersonales
                                .lugarNacimiento}
                            </td>
                          </tr>
                          <tr>
                            <th style="text-align: start;">Nacionalidad:</th>
                            <td>
                              ${informacionCv.value.datosPersonales
                                .nacionalidad}
                            </td>
                          </tr>
                        </table>
                      `
                    : ""}

                  <div class="raya"></div>
                </div>
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 10
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                display: flex;
                position: relative;
                font-family: Lato-Regular;

                .conteInfo {
                  background-color: #143f72;
                  position: absolute;
                  z-index: 9;
                  left: 0;
                  top: 60px;
                  width: 100%;
                  height: 137px;
                  color: #fff;

                  .conteee {
                    height: 100%;
                    width: 349px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: Lato-Bold;
                    h1 {
                      font-size: 41px;
                      width: 100%;
                      text-align: center;
                    }
                    h3 {
                      font-size: 23px;
                      width: 100%;
                      text-align: center;
                    }
                  }
                }

                .dere {
                  background-color: #ffffff;
                  height: 100%;
                  width: 336px;
                  padding-left: 28px;
                  padding-right: 60px;
                  flex: 1;
                  text-align: start;

                  .conteEx {
                    width: 100%;
                    border-left: 2px solid #143f72;
                    padding-left: 20px;
                  }

                  .tidere {
                    position: relative;
                    font-family: Lato-Bold;
                    &::after {
                      position: absolute;
                      content: "";
                      display: inline-block;
                      top: 50%;
                      left: -21px;
                      height: 8px;
                      width: 8px;
                      background-color: #143f72;
                      border-radius: 50%;
                      transform: translateX(-50%) translateY(-50%);
                    }
                  }

                  .raya {
                    width: 100%;
                    height: 2px;
                    background-color: #143f72;
                    border-radius: 10px;
                  }

                  .ti {
                    color: #143f72;
                    width: 100%;
                    font-size: 15px;
                    font-family: Lato-Bold;
                  }
                  .tip {
                    padding-left: 5px;
                    font-size: 11px;
                  }
                  .p {
                    font-size: 10px;
                    padding-left: 5px;
                  }
                }
                .iz {
                  position: relative;
                  z-index: 10;
                  background-color: #376dad;
                  height: 100%;
                  width: 228px;
                  margin-left: 23px;
                  padding: 0 20px;

                  .contePerfil {
                    .perfil {
                      background-color: #405c8e;
                      border-radius: 50%;
                      height: 173px;
                      width: 173px;
                      border: 4px solid #ffffff;

                      background-image: url(${perfilBase64Image.value});
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                    }
                  }

                  .titulo2 {
                    text-align: center;
                    color: #fff;
                    font-weight: bold;
                    font-size: 15px;
                  }

                  p {
                    font-size: 10px;
                    color: #fff;
                    width: 150px;
                    text-align: center;
                    line-height: 13px;
                  }

                  .titulo {
                    color: #fff;
                    font-size: 15px;
                    width: 100%;
                    padding: 0 7px;
                    font-family: Lato-Bold;
                  }
                  ul {
                    margin-left: 10px;
                  }
                  li {
                    font-size: 10px;
                    color: #fff;
                    margin: 2px 0 0 15px;
                    text-align: start;
                    width: 100%;
                  }
                  .ti {
                    color: #fff;
                    font-size: 13px;
                    font-weight: bold;
                  }
                  .tip {
                    color: #fff;
                    font-size: 10px;
                  }

                  .lin {
                    color: #fff;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: 0 7px;

                    .ico {
                      background-color: #fff;
                      width: 25px;
                      height: 25px;
                      padding: 4px;
                      border-radius: 50%;
                      transform: scale(0.8);

                      svg {
                        fill: #153f70;
                        stroke-width: 2;
                        stroke: #fff;
                        height: 100%;
                        width: 100%;
                      }
                    }
                    .map-pin {
                      circle {
                        stroke-width: 0;
                        fill: #fff;
                      }
                    }
                    .phone {
                      svg {
                        stroke-width: 0;
                      }
                    }
                    span {
                      font-size: 10px;
                      margin-left: 7px;
                      text-align: start;
                      width: 170px;
                    }
                  }

                  .raya {
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    border-radius: 10px;
                  }

                  .pa {
                    font-size: 11px;
                    line-height: 18px;
                    text-align: start;
                  }

                  .tiE {
                    display: flex;
                    font-size: 14px;
                    padding-left: 28px;
                  }
                  .año {
                    text-align: start;
                    font-size: 16px;
                    padding-left: 28px;
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="conteInfo">
                <div class="conteee">
                  <h1>${informacionCv.value.perfil.nombre.split(" ")[0]} ${
            informacionCv.value.perfil.nombre.split(" ")[2]
          }</h1>
                  <div style="margin-top: -11px"></div>
                  <h3>${informacionCv.value.perfil.titulo}</h3>
                </div>
              </div>
              <div class="iz">
                <div style="margin-top: 60px"></div>
                <div class="contePerfil">
                  <div class="perfil"></div>
                </div>
                <div style="margin-top: 23px"></div>

                <div class="titulo">CONTACTO</div>
                <div style="margin-top: 13px"></div>

                <div style="margin-top: 13px"></div>
                <a href="tel:${
                  informacionCv.value.contacto.telefono
                }" class="lin">
                  <div>
                    <div class="ico phone">${createElement(Phone)}</div>
                  </div>
                  <span>${informacionCv.value.contacto.telefono}</span>
                </a>
                <div class="lin">
                  <div>
                    <div class="ico map-pin">
                      ${createElement(MapPin)}</i>
                    </div>
                  </div>
                  <span>${informacionCv.value.contacto.direccion}</span>
                </div>
                <a href="mailto:${
                  informacionCv.value.contacto.email
                }" class="lin">
                  <div>
                    <div class="ico">${createElement(Mail)}</div>
                  </div>
                  <span>${informacionCv.value.contacto.email}</span>
                </a>
                <a href="${informacionCv.value.contacto.web}" class="lin">
                  <div>
                    <div class="ico">
                      ${createElement(Globe)}
                    </div>
                  </div>
                  <span>${informacionCv.value.contacto.web}</span>
                </a>

                <div style="margin-top: 13px"></div>
                <div class="raya"></div>

                <div style="margin-top: 13px"></div>
                <div class="titulo">HABILIDADES</div>
                <div style="margin-top: 13px"></div>

                <ul style="margin-left: 14px;">
                  ${informacionCv.value.experticia.map(
                    (value) => html`<li>${value}</li>`
                  )}
                </ul>

                <div style="margin-top: 27px"></div>
                <div class="raya"></div>
                <div style="margin-top: 27px"></div>

                <div style="margin-top: 13px"></div>
                <div class="titulo">EDUCACIÓN</div>
                <div style="margin-top: 13px"></div>

                <ul>

                  ${informacionCv.value.educacion.map((value2) => {
                    const { institucion, titulo, fechaInicio, fechaFin } =
                      value2;
                    return html`
                      <li>
                        <div style="margin-top: 12px"></div>
                        <div class="ti">${titulo}</div>
                        <div class="pa">${institucion}</div>
                        <div class="pa">${fechaInicio}-${fechaFin}</div>
                      </li>
                    `;
                  })}

                </ul>
              </div>
              <div class="dere">
                <div style="margin-top: 212px"></div>
                <div class="ti">ACERCA DE MÍ</div>

                <div style="margin-top: 13px;"></div>
                <div class="p">
                  ${informacionCv.value.perfil.descripcion}
                </div>

                <div style="margin-top: 17px"></div>
                <div class="raya"></div>
                <div style="margin-top: 17px"></div>

                <div class="ti">EXPERIENCIA LABORAL</div>


                <div class="conteEx">
                  ${informacionCv.value.experiencia.map((value) => {
                    const {
                      titulo,
                      empresa,
                      duracionInicio,
                      duracionFin,
                      descripcion,
                    } = value;
                    return html`
                      <div style="margin-top: 12px"></div>
                      <div class="tip tidere">${titulo}</div>
                      <div class="tip">${empresa} - Guayaquil</div>
                      <div class="tip">${duracionInicio} - ${duracionFin}</div>
                      ${descripcion.map(
                        (value2) => html`<div class="p">${value2}</div>`
                      )}
                    `;
                  })}
                </div>
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 11
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                background-color: #ffffff;

                .raya {
                  width: 49px;
                  margin: 6px 0 15px 0;
                  height: 3px;
                  background-color: #323232;
                  border-radius: 10px;
                }
                .ti {
                  font-family: Raleway;
                  width: 100%;
                  font-weight: bold;
                  font-size: 15px;
                  color: #323232;
                  letter-spacing: 2px;
                }
                .ti2 {
                  font-weight: bold;
                  font-size: 13px;
                  width: 100%;
                  font-family: Assistant;
                  color: #031d52;
                }
                li {
                  font-family: Lato-Regular;
                  color: #323232;
                  font-weight: normal;
                  font-size: 12px;
                  width: 100%;
                  padding-left: 5px;
                }
                .p {
                  font-size: 11px;
                  line-height: 14px;
                  width: 100%;
                  font-family: Lato-Regular;
                  color: #323232;
                }

                .conteInfo {
                  height: 179px;
                  width: 100%;
                  background-color: #cfcfcf;
                  position: relative;

                  .imgPerfil {
                    height: 174px;
                    width: 174px;
                    background-color: #e93939;
                    position: absolute;
                    top: 24px;
                    left: 56px;
                    border-radius: 50%;
                    border: 8px solid #cfcfcf;

                    background-image: url(${perfilBase64Image.value});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                  }

                  .info {
                    height: 100%;
                    width: 321px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    color: #444444;
                    font-family: Garet-bold;

                    h1 {
                      text-align: start;
                      font-size: 39px;
                      width: 100%;
                      padding-right: 53px;
                      letter-spacing: 1px;
                    }
                    h2 {
                      font-size: 13px;
                      width: 100%;
                      padding-right: 53px;
                      letter-spacing: 1px;
                      text-align: start;
                    }
                  }
                }
                .conteDes {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  .uu {
                    height: 660px;
                  }

                  .iz {
                    background-color: #f4f4f4;
                    width: 251px;
                    padding: 0 10px 0 46px;

                    .icono {
                      height: 116px;
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: flex-start;

                      .oo {
                        display: flex;
                        align-items: flex-start;
                        flex-direction: column;

                        .ico {
                          display: flex;
                          align-items: center;
                          justify-content: center;

                          .iico {
                            background: #323232;
                            height: 30px;
                            width: 30px;
                            transform: scale(0.7) translateX(-3px);
                            border-radius: 50%;
                            padding: 5px;

                            svg {
                              height: 100%;
                              width: 100%;
                              fill: #fff;
                              stroke-width: 2;
                              stroke: #323232;
                            }
                          }

                          .map-pin {
                            svg {
                              stroke-width: 0;
                              circle {
                                fill: #323232;
                              }
                            }
                          }
                          .mail {
                            svg {
                              stroke-width: 0;
                              path {
                                stroke-width: 2;
                              }
                            }
                          }
                          .phone {
                            svg {
                              stroke-width: 0;
                            }
                          }

                          span {
                            font-family: Lato-Regular;
                            color: #323232;
                            font-weight: normal;
                            font-size: 11px;
                            margin-left: 6px;
                          }
                        }
                      }
                    }
                  }
                  .dere {
                    width: 320px;
                    position: relative;
                    padding-right: 53px;

                    table {
                      color: #323232;
                      th {
                        font-family: Lato-bold;
                        padding-right: 9px;
                        width: auto;
                        font-size: 12px;
                      }
                      td {
                        font-family: Lato-Regular;
                        font-family: Rubik;
                        padding-left: 9px;
                        width: auto;
                        font-size: 11px;
                      }
                    }
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="conteInfo">
                <div class="imgPerfil"></div>

                <div class="info">
                  <h1>${informacionCv.value.perfil.nombre.split(" ")[0]}</h1>
                  <div style="margin-top: -7px"></div>
                  <h1>${informacionCv.value.perfil.nombre.split(" ")[2]}</h1>
                  <div style="margin-top: 5px"></div>
                  <h2>${informacionCv.value.perfil.titulo}</h2>
                </div>
              </div>
              <div class="conteDes">
                <div class="iz uu">
                  <div style="margin-top: 32px"></div>
                  <div class="ti">CONTACTO</div>
                  <div class="raya"></div>

                  <div class="icono">
                    <div class="oo">
                      <a
                        href="${informacionCv.value.contacto.web}"
                        class="lin ico"
                      >
                        <div class="iico globe">
                          ${createElement(Globe)}<i data-lucide="globe"></i>
                        </div>
                        <span>${informacionCv.value.contacto.web}</span></a
                      >
                      <a
                        href="tel:${informacionCv.value.contacto.telefono}"
                        class="ico"
                      >
                        <div class="iico phone">
                          ${createElement(Phone)}<i data-lucide="phone"></i>
                        </div>
                        <span>${informacionCv.value.contacto.telefono}</span>
                      </a>
                      <a
                        href="mailto:${informacionCv.value.contacto.email}"
                        class="ico"
                      >
                        <div class="iico mail">
                          ${createElement(Mail)}<i data-lucide="mail"></i>
                        </div>
                        <span>${informacionCv.value.contacto.email}</span>
                      </a>
                      <div class="ico">
                        <div class="iico map-pin">
                          ${createElement(MapPin)}<i data-lucide="map-pin"></i>
                        </div>
                        <span>${informacionCv.value.contacto.direccion}</span>
                      </div>
                    </div>
                  </div>

                  <div style="margin-top: 25px"></div>
                  <div class="ti">HABILIDADES</div>
                  <div class="raya"></div>

                  <ul style="margin-left: 14px;">
                    ${informacionCv.value.experticia.map(
                      (value) => html`<li>${value}</li>`
                    )}
                  </ul>

                  <div style="margin-top: 25px"></div>
                  <div class="ti">EDUCACIÓN</div>
                  <div class="raya"></div>

                  ${informacionCv.value.educacion.map((value2) => {
                    const { institucion, titulo, fechaInicio, fechaFin } =
                      value2;
                    return html`
                      <li style="font-family: Lato-Bold">${titulo}</li>
                      <div style="margin-left: 20px" class="p">
                        ${institucion}
                      </div>
                      <div style="margin-left: 20px" class="p">
                        ${fechaInicio}-${fechaFin}
                      </div>
                      <div style="margin-top: 10px"></div>
                    `;
                  })}
                </div>
                <div class="dere uu">
                  <div style="margin-top: 32px"></div>
                  <div class="ti">ACERCA DE MÍ</div>
                  <div class="raya"></div>

                  <div class="p">${informacionCv.value.perfil.descripcion}</div>

                  <div style="margin-top: 25px"></div>
                  <div class="ti">EXPERIENCIA LABORAL</div>
                  <div class="raya"></div>

                  ${informacionCv.value.experiencia.map((value) => {
                    const {
                      titulo,
                      empresa,
                      duracionInicio,
                      duracionFin,
                      descripcion,
                    } = value;
                    return html`
                      <ul style="margin-left: 14px;">
                        <li style="font-family: Lato-Bold">${titulo}</li>
                      </ul>
                      <div style="margin-top: 5px"></div>
                      <div style="margin-left: 20px" class="p">${empresa}</div>
                      <div style="margin-left: 20px" class="p">
                        ${duracionInicio}-${duracionFin}
                      </div>
                      <div style="margin-top: 5px"></div>
                      ${descripcion.map(
                        (value2) =>
                          html`<div style="margin-left: 20px" class="p">
                            ${value2}
                          </div>`
                      )}
                      <div style="margin-top: 15px"></div>
                    `;
                  })}

                  <!-- <div style="margin-top: 25px"></div>
                  <div class="ti">INFORMACIÓN</div>
                  <div class="raya"></div>

                  <table>
                    <tr>
                      <th>Nombre:</th>
                      <td>Contact</td>
                    </tr>
                    <tr>
                      <th>Nombre:</th>
                      <td>Contact</td>
                    </tr>
                    <tr>
                      <th>Nombre:</th>
                      <td>Contact</td>
                    </tr>
                  </table> -->
                </div>
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 12
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                background-color: #be5757;
                text-align: end;
                display: flex;
                position: relative;
                flex-direction: row-reverse;

                .dere {
                  background-color: #ffffff;
                  height: 100%;
                  width: 336px;

                  h1 {
                    font-family: Liana;
                    font-size: 89px;
                    padding-right: 67px;
                  }
                  h2 {
                    font-family: CorporativeRegular;
                    font-size: 28px;
                    padding-right: 42px;
                    letter-spacing: 1px;
                  }
                  h3 {
                    font-family: CorporativeRegular;
                    letter-spacing: 4px;
                    font-size: 13px;
                    width: 100%;
                    text-align: center;
                  }
                  .raya {
                    height: 3px;
                    margin-top: 7px;
                    margin-bottom: 8px;
                    margin-left: 31px;
                    width: 271px;
                    background-color: #f1dbdb;
                    border-radius: 10px;
                  }
                  .titulo {
                    font-family: CorporativeRegular;
                    letter-spacing: 1px;
                    background-color: #f2dedf;
                    padding: 0px 0px 0px 4px;
                    width: 266px;
                    display: flex;
                    justify-content: flex-start;
                    margin-left: 30px;
                    font-size: 14px;
                  }
                  .ti {
                    font-family: Raleway;
                    letter-spacing: 1px;
                    font-weight: bold;
                    text-align: start;
                    padding-left: 39px;
                    font-size: 10px;
                  }
                  .pa {
                    font-family: Raleway;
                    text-align: start;
                    padding-left: 39px;
                    font-size: 10px;
                    width: 298px;
                  }

                  table {
                    margin-left: 31px;

                    th {
                      font-family: Raleway;
                      padding-right: 9px;
                      width: auto;
                      font-size: 11px;
                    }
                    td {
                      font-family: Raleway;
                      font-family: Rubik;
                      padding-left: 9px;
                      width: auto;
                      font-size: 10px;
                    }
                  }
                }
                .iz {
                  background-color: #f1dcdb;
                  height: 100%;
                  flex: 1;
                  flex-direction: column;

                  .contePer {
                    height: 241px;
                    width: 206px;
                    border: 7px solid #fff;
                    margin-left: 34px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .perfil {
                      background-color: red;
                      height: 213px;
                      width: 179px;
                      border: 2px solid #ae866a;

                      background-image: url(${perfilBase64Image.value});
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                    }
                  }

                  .titulo {
                    font-family: CorporativeRegular;
                    background-color: #fffefe;
                    padding: 0px 0px 0px 32px;
                    width: 194px;
                    margin-left: 40px;
                    font-size: 14px;
                    display: flex;
                    justify-content: flex-start;
                  }
                  li {
                    font-size: 10px;
                    line-height: 13px;
                    font-family: Raleway;
                    width: 180px;
                    text-align: start;
                    margin: 3px 0 0 52px;
                  }

                  .lin {
                    color: black;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding-left: 42px;
                    margin: 5px 0;
                    font-family: Raleway;

                    .ico {
                      width: 17px;
                      height: 17px;

                      svg {
                        stroke: #ac7c5d;
                        height: 100%;
                        width: 100%;
                      }
                    }
                    span {
                      font-size: 9px;
                      margin-left: 7px;
                      text-align: start;
                      width: 170px;
                    }
                  }

                  .pa {
                    font-size: 10px;
                    line-height: 13px;
                    font-family: Raleway;
                    width: 180px;
                    text-align: start;
                    margin-left: 52px;
                  }

                  .ti {
                    font-size: 9px;
                    line-height: 13px;
                    font-family: Raleway;
                    font-weight: bold;
                    width: 180px;
                    text-align: start;
                    margin-left: 52px;
                  }

                  .tiE {
                    display: flex;
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
                <div style="margin-top: 38px"></div>
                <h1>${informacionCv.value.perfil.nombre.split(" ")[0]}</h1>
                <div style="margin-top: -40px"></div>
                <h2>${informacionCv.value.perfil.nombre.split(" ")[2]}</h2>
                <!-- <div style="margin-top: 5px"></div> -->
                <div class="raya"></div>
                <h3>${informacionCv.value.perfil.titulo}</h3>
                <div style="margin-top: 52px"></div>
                <div class="titulo">EXPERIENCIA</div>

                ${informacionCv.value.experiencia.map((value) => {
                  const {
                    titulo,
                    empresa,
                    duracionInicio,
                    duracionFin,
                    descripcion,
                  } = value;
                  return html`
                    <div style="margin-top: 18px"></div>
                    <div class="ti">${titulo}</div>
                    <div class="ti">${empresa}</div>
                    <div style="margin-top: 2px"></div>
                    <div class="pa">${duracionInicio} - ${duracionFin}</div>
                    <div style="margin-top: 2px"></div>
                    ${descripcion.map(
                      (value2) =>
                        html`<div class="pa" style="line-height: 18px">
                          ${value2}
                        </div>`
                    )}
                  `;
                })}
                ${informaionSesible.value
                  ? html`
                      <div style="margin-top: 30px"></div>
                      <div class="titulo">IMFORMACIÓN PERSONAL</div>
                      <div style="margin-top: 10px"></div>

                      <table>
                        <tr>
                          <th style="text-align: start;">Cedula:</th>
                          <td>${informacionCv.value.datosPersonales.cedula}</td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Edad:</th>
                          <td>${informacionCv.value.datosPersonales.edad}</td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Estado Civil:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.estadoCivil}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Fecha Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .fechaNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Lugar Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .lugarNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Nacionalidad:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.nacionalidad}
                          </td>
                        </tr>
                      </table>
                    `
                  : ""}
              </div>
              <div class="iz">
                <div style="margin-top: 32px"></div>
                <div class="contePer">
                  <div class="perfil"></div>
                </div>
                <div style="margin-top: 32px"></div>
                <div class="titulo">SOBRE MÍ</div>

                <div style="margin-top: 10px"></div>
                <div class="pa">${informacionCv.value.perfil.descripcion}</div>

                <div style="margin-top: 35px"></div>
                <div class="titulo">CONTACTO</div>
                <div style="margin-top: 10px"></div>

                <div class="lin">
                  <div class="ico">
                    ${createElement(MapPin)}<i data-lucide="map-pin"></i>
                  </div>
                  <span>${informacionCv.value.contacto.direccion}</span>
                </div>
                <a
                  href="tel:${informacionCv.value.contacto.telefono}"
                  class="lin"
                >
                  <div class="ico">
                    ${createElement(Smartphone)}<i data-lucide="smartphone"></i>
                  </div>
                  <span>${informacionCv.value.contacto.telefono}</span>
                </a>
                <a href="${informacionCv.value.contacto.web}" class="lin">
                  <div class="ico">
                    ${createElement(Globe)}<i data-lucide="globe"></i>
                  </div>
                  <span>${informacionCv.value.contacto.web}</span>
                </a>
                <a
                  href="mailto:${informacionCv.value.contacto.email}"
                  class="lin"
                >
                  <div class="ico">
                    ${createElement(Mail)}<i data-lucide="mail"></i>
                  </div>
                  <span>${informacionCv.value.contacto.email}</span>
                </a>

                <div style="margin-top: 35px"></div>
                <div class="titulo">FORMACIÓN</div>

                <div style="margin-top: 10px"></div>

                ${informacionCv.value.educacion.map((value2) => {
                  const { institucion, titulo, fechaInicio, fechaFin } = value2;
                  return html`
                    <div class="ti">${titulo}</div>
                    <div class="pa">${institucion}</div>
                    <div class="pa">${fechaInicio} - ${fechaFin}</div>
                    <div style="margin-top: 7px"></div>
                  `;
                })}
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 13
        ? html`
            <style>
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
                    border-radius: 50%;
                    height: 165px;
                    width: 165px;
                    border: 3px solid #fff;
                    background-image: url(${perfilBase64Image.value});
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
                <h1>${informacionCv.value.perfil.nombre.split(" ")[0]}</h1>
                <div style="margin-top: -21px"></div>
                <h2>${informacionCv.value.perfil.nombre.split(" ")[2]}</h2>
                <div style="margin-top: 5px"></div>
                <h3>${informacionCv.value.perfil.titulo}</h3>
                <div style="margin-top: 8px"></div>
                <div class="titulo">EXPERIENCIA LABORAL</div>

                ${informacionCv.value.experiencia.map((value) => {
                  const {
                    empresa,
                    titulo,
                    duracionInicio,
                    duracionFin,
                    descripcion,
                  } = value;
                  return html`
                    <div style="margin-top: 11px"></div>
                    <div class="ti">${empresa} | ${titulo}</div>
                    <div style="margin-top: 7px"></div>
                    <div class="pa">${duracionInicio} - ${duracionFin}</div>
                    <div style="margin-top: 7px"></div>
                    <div class="pa" style="line-height: 18px">
                      ${descripcion}
                    </div>
                  `;
                })}

                <div style="margin-top: 30px"></div>
                <div class="titulo">EXPERTISE</div>
                <div style="margin-top: 10px"></div>
                ${informacionCv.value.experticia.map(
                  (value) => html`<li>${value}</li>`
                )}
              </div>
              <div class="iz">
                <div style="margin-top: 45px"></div>
                <div class="perfil"></div>
                <div style="margin-top: 18px"></div>
                <div class="titulo">CONTACTO</div>

                <div class="lin">
                  <div class="ico">${createElement(MapPin)}</div>
                  <span>${informacionCv.value.contacto.direccion}</span>
                </div>
                <a
                  href="tel:${informacionCv.value.contacto.telefono}"
                  class="lin"
                >
                  <div class="ico">${createElement(Smartphone)}</div>
                  <span>${informacionCv.value.contacto.telefono}</span>
                </a>
                <a href="${informacionCv.value.contacto.web}" class="lin">
                  <div class="ico">${createElement(Globe)}</div>
                  <span>${informacionCv.value.contacto.web}</span>
                </a>
                <a
                  href="mailto:${informacionCv.value.contacto.email}"
                  class="lin"
                >
                  <div class="ico">${createElement(Mail)}</div>
                  <span>${informacionCv.value.contacto.email}</span>
                </a>

                <div style="margin-top: 28px"></div>
                <div class="titulo">SOBRE MI</div>
                <div style="margin-top: 6px"></div>
                <div class="pa">${informacionCv.value.perfil.descripcion}</div>

                <div style="margin-top: 31px"></div>
                <div class="titulo">EDUCACIÓN</div>

                ${informacionCv.value.educacion.map((value) => {
                  const { titulo, institucion, fechaInicio, fechaFin } = value;
                  return html`
                    <div style="margin-top: 11px"></div>
                    <div class="tiE">
                      <div class="b">${titulo}</div>
                      <div class="n">${institucion}</div>
                    </div>
                    <div style="margin-top: 6px"></div>
                    <div class="año">${fechaInicio}/${fechaFin}</div>
                  `;
                })}
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 14
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                display: flex;
                justify-content: center;
                position: relative;
                background-color: #ffffff;
                justify-content: space-between;

                .ti {
                  font-family: OpenSauceOne-Black;
                  width: 100%;
                  font-size: 14px;
                  border: 1px solid #000;
                  border-left: none;
                  border-right: none;
                  padding: 3px 0 3px 12px;
                }
                .ti2 {
                  font-size: 11px;
                  width: 100%;
                  padding-left: 12px;
                }
                li {
                  font-family: Inter-VariableFont;
                  font-size: 10px;
                  font-weight: normal;
                  width: 100%;
                  padding-left: 5px;
                  padding-left: 12px;
                }
                .p {
                  font-family: Inter-VariableFont;
                  padding: 3px 0 3px 12px;
                  font-size: 11px;
                  line-height: 14px;
                  width: 100%;
                }

                .iz {
                  height: 100%;
                  width: 205px;
                  margin-left: 60px;

                  .conteImg {
                    width: 100%;
                    height: 178px;
                    border: 1px solid #000;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items: center;

                    .imgPerfil {
                      height: 158px;
                      transform: translateX(-50%);
                      width: 158px;
                      background-color: #fff;
                      position: absolute;
                      top: -36px;
                      left: 50%;
                      border-radius: 50%;
                      border: 1px solid #000;

                      background-image: url(${perfilBase64Image.value});
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                    }

                    h1 {
                      font-family: OpenSauceOne-Black;
                      width: 100%;
                      text-align: center;
                      font-size: 16px;
                      letter-spacing: 3px;
                    }
                    h2 {
                      font-family: DMSans-Italic-VariableFont;
                      font-size: 12px;
                      letter-spacing: 2px;
                    }
                  }

                  .icono {
                    height: 116px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

                    .oo {
                      display: flex;
                      align-items: flex-start;
                      flex-direction: column;
                      width: 100%;

                      .ico {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        width: 100%;
                        padding-left: 9px;
                        border-bottom: 1px solid #000;

                        .iico {
                          background: #000;
                          height: 30px;
                          width: 30px;
                          transform: scale(0.7) translateX(-3px);
                          border-radius: 50%;
                          padding: 5px;

                          svg {
                            height: 100%;
                            width: 100%;
                            fill: #fff;
                            stroke-width: 2;
                            stroke: #000;
                          }
                        }

                        .map-pin {
                          svg {
                            stroke-width: 0;
                            circle {
                              fill: #000;
                            }
                          }
                        }
                        .mail {
                          svg {
                            stroke-width: 0;
                            path {
                              stroke-width: 2;
                            }
                          }
                        }
                        .phone {
                          svg {
                            stroke-width: 0;
                          }
                        }

                        span {
                          font-family: Lato-Regular;
                          color: #000;
                          font-weight: normal;
                          font-size: 11px;
                          margin-left: 6px;
                        }
                      }
                    }
                  }
                }
                .dere {
                  height: 100%;
                  width: 265px;
                  margin-right: 51px;
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="iz">
                <div style="margin-top: 80px"></div>
                <div class="conteImg">
                  <div class="imgPerfil"></div>
                  <h1>
                    ${informacionCv.value.perfil.nombre.split(" ")[0]}
                    ${informacionCv.value.perfil.nombre.split(" ")[2]}
                  </h1>
                  <div style="margin-top: -5px"></div>
                  <h2>${informacionCv.value.perfil.titulo}</h2>
                  <div style="margin-top: 10px"></div>
                </div>

                <div style="margin-top: 15px"></div>
                <div class="ti">PERFIL</div>
                <div style="margin-top: 6px"></div>
                <div class="p">${informacionCv.value.perfil.descripcion}</div>

                <div style="margin-top: 21px"></div>
                <div class="ti">CONTACTO</div>

                <div class="icono">
                  <div class="oo">
                    <a
                      href="${informacionCv.value.contacto.web}"
                      class="lin ico"
                    >
                      <div class="iico globe">
                        ${createElement(Globe)}<i data-lucide="globe"></i>
                      </div>
                      <span>${informacionCv.value.contacto.web}</span></a
                    >
                    <a
                      href="tel:${informacionCv.value.contacto.telefono}"
                      class="ico"
                    >
                      <div class="iico phone">
                        ${createElement(Phone)}<i data-lucide="phone"></i>
                      </div>
                      <span>${informacionCv.value.contacto.telefono}</span>
                    </a>
                    <a
                      href="mailto:${informacionCv.value.contacto.email}"
                      class="ico"
                    >
                      <div class="iico mail">
                        ${createElement(Mail)}<i data-lucide="mail"></i>
                      </div>
                      <span>${informacionCv.value.contacto.email}</span>
                    </a>
                    <div class="ico" style="border-bottom: none">
                      <div class="iico map-pin">
                        ${createElement(MapPin)}<i data-lucide="map-pin"></i>
                      </div>
                      <span>${informacionCv.value.contacto.direccion}</span>
                    </div>
                  </div>
                </div>

                <div style="margin-top: 21px"></div>
                <div class="ti">HABILIDADES</div>

                <div style="margin-top: 5px"></div>
                <ul style="margin-left: 14px;">
                  ${informacionCv.value.experticia.map(
                    (value) => html`<li>${value}</li>`
                  )}
                </ul>
              </div>

              <div class="dere">
                <div style="margin-top: 80px"></div>

                <div style="margin-top: 21px"></div>
                <div class="ti">FORMACIÓN</div>

                <div style="margin-top: 18px"></div>

                ${informacionCv.value.educacion.map((value2) => {
                  const {
                    institucion,
                    titulo,
                    fechaInicio,
                    fechaFin,
                    descripcion,
                  } = value2;
                  return html`
                    <div
                      class="ti2"
                      style="font-family: Inter-VariableFont; font-weight: bold"
                    >
                      ${titulo} (${fechaInicio} - ${fechaFin})
                    </div>
                    <div
                      class="ti2"
                      style="font-family: Inter-Italic-VariableFont; font-weight: bold"
                    >
                      ${institucion}
                    </div>
                    <div
                      class="ti2"
                      style="font-family: Inter-Italic-VariableFont"
                    >
                      ${descripcion}
                    </div>
                    <div style="margin-top: 5px"></div>
                  `;
                })}

                <div style="margin-top: 21px"></div>
                <div class="ti">EXPERIENCIA</div>

                <div style="margin-top: 10px"></div>

                ${informacionCv.value.experiencia.map((value) => {
                  const {
                    titulo,
                    empresa,
                    duracionInicio,
                    duracionFin,
                    descripcion,
                  } = value;
                  return html`
                    <div
                      class="ti2"
                      style="font-family: Inter-VariableFont; font-weight: bold"
                    >
                      ${empresa} (${duracionInicio} - ${duracionFin})
                    </div>
                    <li
                      class="ti2"
                      style="font-family: Inter-Italic-VariableFont; font-weight: bold"
                    >
                      ${titulo}
                    </li>
                    ${descripcion.map(
                      (value2) =>
                        html`<div
                          class="ti2"
                          style="font-family: Inter-VariableFont"
                        >
                          ${value2}
                        </div>`
                    )}
                    <div style="margin-top: 21px"></div>
                  `;
                })}

                <!-- ${informaionSesible.value
                  ? html`
                      <div style="margin-top: 21px"></div>
                      <div class="ti">INFORMACIÓN</div>

                      <div style="margin-top: 5px"></div>

                      <table>
                        <tr>
                          <th style="text-align: start;">Cedula:</th>
                          <td>${informacionCv.value.datosPersonales.cedula}</td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Edad:</th>
                          <td>${informacionCv.value.datosPersonales.edad}</td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Estado Civil:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.estadoCivil}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Fecha Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .fechaNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Lugar Nacimiento:</th>
                          <td>
                            ${informacionCv.value.datosPersonales
                              .lugarNacimiento}
                          </td>
                        </tr>
                        <tr>
                          <th style="text-align: start;">Nacionalidad:</th>
                          <td>
                            ${informacionCv.value.datosPersonales.nacionalidad}
                          </td>
                        </tr>
                      </table>
                    `
                  : ""} -->
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 15
        ? html`
            <style>
              .cv {
                height: 848px;
                width: 600px;
                display: flex;
                position: relative;
                background-color: #ffffff;

                .ti {
                  font-family: BeVietnamPro-Bold;
                  width: 100%;
                  font-size: 17px;
                  letter-spacing: 2px;
                  color: #0a0a0a;
                }
                .ti2 {
                  font-weight: bold;
                  font-size: 11px;
                  font-family: Poppins-Bold;
                  width: 100%;
                  color: #313134;
                }
                li {
                  color: #343434;
                  font-family: Poppins-Regular;
                  font-size: 11px;
                  width: 100%;
                  margin-bottom: 10px;
                }
                .p {
                  font-family: Poppins-Regular;
                  font-size: 10px;
                  line-height: 14px;
                  width: 100%;
                  color: #313134;
                }
                .contrP {
                  display: flex;
                  font-size: 8px;
                  color: #313134;

                  .bb {
                    font-family: Poppins-BoldItalic;
                  }
                  .pp {
                    margin-left: 13px;
                    letter-spacing: 3px;
                    font-family: Poppins-Regular;
                  }
                }
                .raya {
                  width: 100%;
                  height: 3px;
                  margin-bottom: 8px;

                  .ii {
                    background-color: #0a0a0a;
                    width: 35px;
                    height: 100%;
                    border-radius: 10px;
                  }
                }

                .iz {
                  height: 100%;
                  width: 206px;
                  position: relative;
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  padding: 0px 23px;
                  background: #d9d9d9;

                  .imgPerfil {
                    height: 118px;
                    width: 118px;
                    border-radius: 50%;
                    background-color: #c3b19d;
                    margin-right: 14px;

                    background-image: url(${perfilBase64Image.value});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                  }

                  .ico {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 10px;
                    margin-left: -35px;

                    .iico {
                      height: 16px;
                      width: 16px;
                      transform: scale(0.8) translateX(-3px);

                      svg {
                        height: 100%;
                        width: 100%;
                        fill: #343434;
                        stroke-width: 2;
                        stroke: #d9d9d9;
                      }
                    }

                    .map-pin {
                      svg {
                        stroke-width: 0;
                        circle {
                          fill: #d9d9d9;
                        }
                      }
                    }
                    .mail {
                      svg {
                        stroke-width: 0;
                        path {
                          stroke-width: 2;
                        }
                      }
                    }
                    .phone {
                      svg {
                        stroke-width: 0;
                      }
                    }

                    span {
                      font-family: Poppins-Regular;
                      color: #343434;
                      font-weight: normal;
                      font-size: 11px;
                      margin-left: 6px;
                      width: 137px;
                    }
                  }

                  table {
                    color: #343434;
                    th {
                      font-weight: bold;
                      font-size: 11px;
                      font-family: BeVietnamPro-Bold;
                    }
                    td {
                      font-size: 11px;
                      padding-left: 10px;
                      font-family: Poppins-Regular;
                    }
                  }
                }
                .dere {
                  padding: 0 40px 0 38px;
                  flex: 1;

                  .rayaa {
                    width: 100%;
                    height: 2px;
                    background-color: #000000;
                    margin-top: 3px;
                  }

                  h1 {
                    font-family: BeVietnamPro-Bold;
                    width: 100%;
                    font-size: 39px;
                  }
                  h2 {
                    font-family: Poppins-Regular;
                    width: 100%;
                    font-size: 21px;
                    text-align: start;
                    font-weight: normal;
                  }

                  table {
                    td {
                      padding-left: 18px;
                      width: auto;
                    }
                    th {
                      width: auto;
                    }
                  }
                }
              }
            </style>

            <div class="cv" id="cv">
              <div class="iz">
                <div style="margin-top: 20px"></div>
                <div>
                  <div class="imgPerfil"></div>
                </div>

                <div style="margin-top: 30px"></div>
                <div class="ti">Contacto</div>
                <div class="raya">
                  <div class="ii"></div>
                </div>

                <a href="${informacionCv.value.contacto.web}" class="lin ico">
                  <div class="iico globe">
                    ${createElement(Globe)}<i data-lucide="globe"></i>
                  </div>
                  <span>${informacionCv.value.contacto.web}</span></a
                >
                <a
                  href="tel:${informacionCv.value.contacto.telefono}"
                  class="ico"
                >
                  <div class="iico phone">
                    ${createElement(Phone)}<i data-lucide="phone"></i>
                  </div>
                  <span>${informacionCv.value.contacto.telefono}</span>
                </a>
                <a
                  href="mailto:${informacionCv.value.contacto.email}"
                  class="ico"
                >
                  <div class="iico mail">
                    ${createElement(Mail)}<i data-lucide="mail"></i>
                  </div>
                  <span>${informacionCv.value.contacto.email}</span>
                </a>
                <div href="tel:" class="ico">
                  <div class="iico map-pin">
                    ${createElement(MapPin)}<i data-lucide="map-pin"></i>
                  </div>
                  <span>${informacionCv.value.contacto.direccion}</span>
                </div>

                <div style="margin-top: 30px"></div>
                <div class="ti">Formación</div>
                <div class="raya">
                  <div class="ii"></div>
                </div>

                ${informacionCv.value.educacion.map((value) => {
                  const {
                    fechaInicio,
                    fechaFin,
                    titulo,
                    institucion,
                    descripcion,
                  } = value;
                  return html`
                    <div class="ti2">
                      (${fechaInicio}-${fechaFin}) ${titulo}
                    </div>
                    <div class="contrP" style="width: 100%;">
                      <div class="bb">${institucion}</div>
                    </div>
                    <div class="p">${descripcion}</div>
                    <div style="margin-bottom: 30px;"></div>
                  `;
                })}

                <div style="margin-top: 30px"></div>
                <div class="ti">Habilidades</div>
                <div class="raya">
                  <div class="ii"></div>
                </div>

                <ul style="margin-left: 14px;">
                  ${informacionCv.value.experticia.map(
                    (value) => html`<li>${value}</li>`
                  )}
                </ul>
              </div>

              <div class="dere">
                <div style="margin-top: 23px"></div>
                <h1>
                  ${informacionCv.value.perfil.nombre.split(" ")[0]}
                  ${informacionCv.value.perfil.nombre.split(" ")[2]}
                </h1>
                <div class="rayaa"></div>
                <div style="margin-top: -4px"></div>
                <h2>${informacionCv.value.perfil.titulo}</h2>

                <div style="margin-top: 37px"></div>

                <div style="margin-top: 54px"></div>
                <div class="ti">Sobre mí</div>
                <div class="raya">
                  <div class="ii"></div>
                </div>

                <div class="p">${informacionCv.value.perfil.descripcion}</div>

                <div style="margin-top: 38px"></div>
                <div class="ti">Experiencia</div>
                <div class="raya">
                  <div class="ii"></div>
                </div>

                ${informacionCv.value.experiencia.map((value) => {
                  const {
                    titulo,
                    empresa,
                    duracionInicio,
                    duracionFin,
                    descripcion,
                  } = value;
                  return html`
                    <div class="ti2">${titulo}</div>
                    <div class="contrP">
                      <div class="bb">${empresa}</div>
                      <div class="pp">${duracionInicio} - ${duracionFin}</div>
                    </div>
                    ${descripcion.map(
                      (value2) => html`<div class="p">${value2}</div>`
                    )}
                    <div style="margin-bottom: 30px;"></div>
                  `;
                })}
              </div>
            </div>
          `
        : ""}
      ${seleccionado.value === 16 ? html`` : ""}
    `;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
    }

    /* :host {
    } */
  `;
}
