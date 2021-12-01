import React, { Component } from 'react';
import '../css/Home.css'
import '../css/nicepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render(){
        return(
        <div>  
    <header className="u-clearfix u-header u-palette-1-light-1 u-sticky u-sticky-2438 u-header" id="sec-0d11">
        <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-border-3 u-border-white u-line u-line-vertical u-opacity u-opacity-70 u-line-1">
                
            </div>

            <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                <div className="menu-collapse u-custom-font u-font-montserrat tituloStl">
                    <a className="u-button-style u-custom-active-color u-custom-border u-custom-border-color u-custom-border-radius u-custom-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="/">
                        <svg>
                            <use xlinkHref="http://www.w3.org/1999/xlink" href="#menu-hamburger"></use>
                        </svg>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                            <defs>
                                <symbol id="menu-hamburger symbolStl" viewBox="0 0 16 16">
                                    <rect y="1" width="16" height="2"></rect>
                                    <rect y="7" width="16" height="2"></rect>
                                    <rect y="13" width="16" height="2"></rect>
                                </symbol>
                            </defs>
                        </svg>
                    </a>
                </div>

                <div className="u-custom-menu u-nav-container">
                        <ul className="u-custom-font u-font-montserrat u-nav u-spacing-20 u-unstyled u-nav-1">
                            <li className="u-nav-item">
                                <a className="u-button-style u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-hover-grey-90 u-text-white menuTextStyle" href="\">Home</a>
                            </li>
                            <li className="u-nav-item">
                                <a className="u-button-style u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-hover-grey-90 u-text-white menuTextStyle" href="Clientes" >Clientes</a>
                            </li>
                            <li className="u-nav-item">
                                <a className="u-button-style u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-hover-grey-90 u-text-white menuTextStyle" href="Contactenos">Contactenos</a>
                            </li>
                        </ul>
                </div>

                <div className="u-custom-menu u-nav-container-collapse">
                    <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                        <div className="u-inner-container-layout u-sidenav-overflow">
                                <div className="u-menu-close">

                                </div>
                            
                                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link menuTextStyle" href="">Home</a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link menuTextStyle" href="Clientes">Clientes</a>
                                    </li><li className="u-nav-item">
                                        <a className="u-button-style u-nav-link menuTextStyle" href="Contactenos">Contactenos</a>
                                    </li>                    
                                </ul>
                        </div>
                    </div>

                    <div className="u-black u-menu-overlay u-opacity u-opacity-70">

                    </div>
                </div>
            </nav>

            <div className="u-container-style u-group u-shape-rectangle u-white u-group-1">
                <div className="u-container-layout u-valign-middle-xs u-container-layout-1">
                    <div className="u-absolute-hcenter u-expanded u-palette-5-light-2 u-shape u-shape-circle u-shape-1">

                    </div>

                    <h4 className="u-custom-font u-font-montserrat u-text u-text-1">Banco<br></br>
                        <span style={{fontweight: + "700"}}>ITAU</span>
                    </h4>
                </div>
            </div>

            <a href="Registrarse" className="u-active-grey-5 u-border-none u-btn u-btn-round u-button-style u-custom-font u-font-montserrat u-hover-grey-15 u-radius-30 u-white u-btn-1">REGISTRARSE</a>
            <a href="Login" className="u-active-grey-5 u-border-none u-btn u-btn-round u-button-style u-custom-font u-font-montserrat u-hover-grey-25 u-radius-30 u-text-active-grey-10 u-text-hover-black u-white u-btn-2">INICIAR SESIÓN</a>
        </div>
    </header>

    <section className="u-clearfix u-image u-parallax u-section-1" id="sec-a299" data-image-width="150" data-image-height="99">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-container-style u-grey-10 u-group u-opacity u-opacity-60 u-radius-15 u-shape-round u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <h1 className="u-text u-text-default u-text-1">Bienvenidos al <span style={{fontweight: + "700"}}>Banco ITAU</span>
            </h1>
            <p className="u-align-justify u-custom-font u-font-montserrat u-text u-text-default u-text-2"> En el siguiente enlace encontraran información sobre los beneficios que puedes obtener&nbsp;al abrir una cuenta corriente o de ahorros en nuestro banco, tasas de interesen favorables, prestamos a 24 cuotas sin estudio de crédito, y muchos beneficios que podrás saber en el&nbsp;siguiente enlace....</p>
            <a href="Info" className="u-btn u-btn-round u-button-style u-custom-font u-font-montserrat u-radius-15 u-btn-1">Más información</a>
          </div>
        </div>
      </div>
    </section>
    
    
    <footer className="u-align-center u-clearfix u-custom-color-1 u-footer u-footer" id="sec-106c">
        <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-border-3 u-border-grey-5 u-line u-line-vertical u-line-1"></div>
                <div className="u-border-3 u-border-grey-5 u-line u-line-horizontal u-line-2"></div>
                    <p className="u-align-left u-custom-font u-font-montserrat u-small-text u-text u-text-variant u-text-1"> Grupo 1 App Banco ITAU<br></br>Ciclo 3 Desarrollo de Aplicaciones Web UniNorte</p>
            <div className="u-container-style u-group u-shape-rectangle u-white u-group-1">
                <div className="u-container-layout u-valign-middle-xs u-container-layout-1">
                    <div className="u-absolute-hcenter u-expanded u-palette-5-light-2 u-shape u-shape-circle u-shape-1">

                    </div>
                    <h4 className="u-custom-font u-font-montserrat u-text u-text-2">Banco<br></br>
                        <span style={{fontweight: + "700"}}>ITAU</span>
                    </h4>
                </div>
            </div>
            <h6 className="u-align-left u-text u-text-3">
                <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-custom-font u-font-montserrat u-hover-none u-none u-text-body-alt-color u-btn-1" href="Contactenos">Contactenos</a>
            </h6>
        </div>
    </footer>    
    </div>  
        );
    }
}

export default Home;