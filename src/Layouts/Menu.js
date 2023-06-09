import React from "react";
import rie from '../img/ico.png';

function Menu(){
  function activar(){
    document.getElementById('listaMenu').className = 'nav-link show';
    document.getElementById('listaMenu').setAttribute("aria-expanded", "true");
    document.getElementById('ulEstilizar').className = 'dropdown-menu format show';
    document.getElementById('ulEstilizar').setAttribute("data-bs-popper", "static");
  }
  
  return(
        <div>
          <nav className="navbar navbar-expand navbar-light fondoBarra">
            <div className="container">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <div className="d-flex separarLogo">
                        <a className='navbar-brand' href="/" ><img src={rie} height='40' /></a>
                      </div>
                    </li>
                    
                  </ul>
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <div className="cajaEscri">
                        <a className="fw-bold" aria-current="page" href="#escribenos"><i className="fa fa-commenting-o fw-bold" aria-hidden="true"></i> Escríbenos</a>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
        </div>
    )
}

export default Menu;