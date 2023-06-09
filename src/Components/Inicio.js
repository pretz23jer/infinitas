import React, { Component } from "react";
import ImgApp2 from '../img/baner.png';
import ImgApp1 from '../Resources/banerg1.png';
import ImgApp3 from '../Resources/banerg2.png';
import App1 from '../Resources/app2.png';
import App2 from '../Resources/app1.png';
import App3 from '../Resources/app3.png';
import App4 from '../Resources/app4.png';
import App5 from '../Resources/app5.png';
import App6 from '../Resources/app6.png';
import App7 from '../Resources/app7.png';
import App8 from '../Resources/app8.png';
import App9 from '../Resources/app9.png';
import App10 from '../Resources/app10.png';
import App11 from '../Resources/app11.png';
import App12 from '../Resources/app12.png';
import App13 from '../Resources/app13.png';
import App14 from '../Resources/app14.png';
import Logo from '../Resources/hidroa.png';
import Marca1 from '../Resources/marca1.png';
import Marca2 from '../Resources/marca2.png';
import Marca3 from '../Resources/marca3.png';
import Marca4 from '../Resources/marca4.png';
import Marca5 from '../Resources/marca5.png';
import Marca6 from '../Resources/marca6.png';
import Phone from '../Resources/phone.png';
import Persona from '../Resources/persona.png';
import Persona2 from '../Resources/persona2.png';
import Persona3 from '../Resources/persona3.png';
import Celular from '../Resources/celular2.png';
import diseño from '../img/diseño.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imganeTelefono from '../img/telefono_medio.png';

class Home extends Component {
    render() {
        AOS.init();

        let accion = "block";

        if (window.matchMedia('only screen and (max-width: 600px)').matches) {
            accion = "block";
        } else {
            accion = "block";
        }

        let Accion = 'block';
        let AccionDos = 'none';

        function comportamiento() {
            document.getElementById('botonContinuar').style.display = AccionDos;
            document.getElementById('botonOcultar').style.display = Accion;
        }

        function ocultarTexto() {
            document.getElementById('botonContinuar').style.display = Accion;
            document.getElementById('botonContinuar').style.paddingTop = '5px';
            document.getElementById('botonContinuar').style.paddingBottom = '17px';
            document.getElementById('botonOcultar').style.display = AccionDos;
        }

        return (
            <div>
                <div data-aos="fade-down">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ImgApp2} className="d-block w-100" alt='Imágen Hidrocompras' />
                            </div>
                            <div className="carousel-item">
                                <img src={ImgApp1} className="d-block w-100" alt='Imágen Hidrocompras' />
                            </div>
                            <div className="carousel-item">
                                <img src={ImgApp3} className="d-block w-100" alt='Imágen Hidrocompras' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fondoAzulHidro" data-aos="fade-down">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8 espacioBaner">
                                <p className="todasApps">Todas las serigrafías y diseños  <br /> que más te gustan</p>
                                <p className="fw-fold todasApps">CREACIONES INFINITAS</p>
                                <p className="fw-bold text-black acumulaTexto">No dudes más, comunícate con nosotros.</p>
                                <a className="btn btn-md btn-danger animarBotonDescargar" href="#escribenos" target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;Escríbenos&nbsp;&nbsp;&nbsp;</a>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img className="img-fluid" src={imganeTelefono} />
                            </div>
                        </div>

                    </div>
                </div>
                <div id="estiloFondoProductos">
                    <div className="container pt-5 centarContenido mt-4" data-aos="fade-down">
                        <div className="fw-bold text-center">
                            <div className="espacioEntre">Nuestros Productos</div>
                        </div>
                    </div>
                    <div className="container pt-5 pb-5" data-aos="fade-down">
                        <div className="row">
                            <div className="col-12 col-md-4 p-3 text-center" data-aos="fade-down">
                                <img src={App1} className="img-fluid" alt="Imagen Hidro" />

                                <p className="fw-bold text-black h5">Playeras Serigrafiadas</p>
                                <p>Serigrafiamos playeras con tu diseño favorito</p>
                            </div>
                            <div className="col-md-4 p-3 text-center" style={{ display: accion }} data-aos="fade-down">
                                <img src={App3} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fw-bold text-black h5">Vasos Decorativos</p>
                                <p>Estampamos vasos con diseños personalizados para cualquier ocasión</p>
                            </div>
                            <div className="col-md-4 p-3 text-center" style={{ display: accion }} data-aos="fade-down">
                                <img src={App2} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fw-bold text-black h5">Vasos Plásticos</p>
                                <p>Diseños elegantes y para distintas ocaciones</p>
                            </div>
                            <div className="col-12 col-md-4 p-3 text-center" data-aos="fade-down">
                                <img src={App4} className="img-fluid" alt="Imagen Hidro" />

                                <p className="fw-bold text-black h5">Stickers</p>
                                <p>Impresiones y diseños de stickers para tu empresa o productos</p>
                            </div>
                            <div className="col-md-4 p-3 text-center" style={{ display: accion }} data-aos="fade-down">
                                <img src={App5} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fw-bold text-black h5">Loncheras</p>
                                <p>Estampamos con diseños personalizados para cualquier ocasión</p>
                            </div>
                            <div className="col-md-4 p-3 text-center" style={{ display: accion }} data-aos="fade-down">
                                <img src={App6} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fw-bold text-black h5">Botones Decorativos</p>
                                <p>Diseños elegantes, impresiones y elaboración de botones para distintos eventos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container centarContenido mt-4" data-aos="fade-down">
                    <div className="barraCeleste text-black fw-bold text-center">
                        <div className="espacioEntre">Reseñas Fotográficas</div>
                    </div>
                </div>
                <div className="container-fluid text-center p-5" data-aos="fade-down">
                    <div className="row">
                        <div className="col-12 col-lg-3 mb-3">
                            <div className="izquiTar tarjetaProducto" data-aos="fade-down">
                                <img src={App7} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-3">
                            <div className="izquiTar tarjetaProducto" data-aos="fade-down">
                            <img src={App8} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-3">
                            <div className="izquiTar tarjetaProducto" data-aos="fade-down">
                            <img src={App9} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-3">
                            <div className="dereTar tarjetaProducto " data-aos="fade-down">
                            <img src={App10} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-3">
                            <div className="dereTar tarjetaProducto " data-aos="fade-down">
                            <img src={App11} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-3">
                            <div className="dereTar tarjetaProducto " data-aos="fade-down">
                            <img src={App12} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-3">
                            <div className="dereTar tarjetaProducto " data-aos="fade-down">
                            <img src={App13} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-3">
                            <div className="dereTar tarjetaProducto " data-aos="fade-down">
                            <img src={App14} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="container text-center pb-5 mb-4" data-aos="fade-down">
                    <div className="cajaCir">
                        <div className="cajaCirHijo">
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                            <div className="circulos"></div>
                        </div>
                    </div>
                </div>
                <div className="fondoBeige pt-2 pb-5 mb-5" id="escribenos" data-aos="fade-down">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6" data-aos="fade-down">
                                <div className="cajaWQue text-center">
                                    <br />
                                    <p className="h2 fw-bold text-center pt-1 mt-3">Escríbenos</p>
                                    <br />
                                    <div className="text-center" data-aos="fade-down">
                                        <br />
                                        <img src={diseño} height="400" alt="Imagen Hidro" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6" data-aos="fade-down">
                                <div className="cajaWQue alinearTextoHidro">
                                    <div id="diseComentar">
                                        <div className="box-formulario">
                                            <div className="formulario">
                                                <div className="title-form alt">
                                                    <h2>Contato</h2>
                                                </div>
                                                <form method="post" id="enviarMensaje" name="enviarMensaje">
                                                    <span>
                                                        <input className="width-slide" id="nombreCliente" name="nombreCliente" type="text" placeholder="Nombre" autoComplete="off" minLength="3" required />
                                                        <label htmlFor="nombreCliente"> <i className="icon icon-user-1"></i> </label>
                                                    </span>
                                                    <span>
                                                        <input className="width-slide" id="apellidoCliente" name="apellidoCliente" type="text" placeholder="Apellidos" autoComplete="off" required />
                                                        <label htmlFor="apellidoCliente"> <i className="icon icon-user-1"></i> </label>
                                                    </span>
                                                    <span>
                                                        <input className="width-slide" id="email" type="email" name="email" placeholder="Correo Electrónico" autoComplete="off" required />
                                                        <label htmlFor="email"> <i className="icon icon-mail-1"></i> </label>
                                                    </span>
                                                    <span>
                                                        <input className="width-slide" id="asunto" name="asunto" type="text" placeholder="Asunto" autoComplete="off" required />
                                                        <label htmlFor="asunto"> <i className="icon icon-info"></i> </label>
                                                    </span>
                                                    <span>
                                                        <textarea className="width-slide" id="mensaje" name="mensaje" type="text" rows="3" placeholder="Mensaje" autoComplete="off" required></textarea>
                                                        <label htmlFor="mensaje"> <i className="icon icon-comment"></i> </label>
                                                    </span>
                                                    <span>
                                                        <input type="submit" value="Enviar" className="btn-submit" />
                                                    </span>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;