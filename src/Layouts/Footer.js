import React, { Component } from "react";

import infinit from '../img/ico.png';

class Footer extends Component{
    render() {
        return(
            <div className="pie">
               <div className="container-fluid">
                    <div className="row justify-content-center g-2">
                        <div className="col-12 col-sm-6 col-md-3 enlaceText">
                            <div className="row">
                                <div className="col-auto text-start"><img src={infinit} width='50' alt="Imagen Infi"/></div>
                                <div className="col align-middle pt-3"><p>Creaciones Infinitas</p></div>
                            </div>
                            <p>Síguenos en nuestras redes sociales</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 enlaceText">
                            <a className="fw-bold" href="/soporte"><p className="titulopie">Soporte</p></a>
                            <a href="#"><p>Preguntas Frecuentes</p></a>
                            <a href="#"><p>Políticas de privacidad</p></a>
                            <a href="#"><p>Experiencias</p></a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 enlaceText"><p className="titulopie">Acerca de Nosotros</p>
                            <a href="#"><p>Sobre Creaciones Infinitas</p></a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <p className="titulopie">Síguenos en</p>
                            <div className="iconos-redes-sociales d-flex align-items-center justify-content-center">
                                    <a href="https://wa.me/50256448667" target="_blank" rel="noreferrer">
                                        <i className="fa fa-phone"></i>
                                    </a>
                                    <a href="https://www.facebook.com/elizabeth.es87" target="_blank" rel="noreferrer">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a  href="https://wa.me/50256448667?text=Hola,%20le%20comento%20que%20me%20interesó%20el%20producto%20:%20" target="_blank" rel="noreferrer">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </div>                               
                                <div className="ajusteing mt-3">
                                    <div>
                                        <img src={infinit} width='50' alt="Imagen Hidro"/>
                                    </div>
                                    <div className="sepataTexto">
                                        <p className="">Cloudit4 &copy; 2023</p>
                                        <p className="textoPieDerecho">Todos los derechos reservados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Footer;