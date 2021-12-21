import React, { Component } from 'react';
import '../css/Login.css'
import '../css/niceLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    render() {

        return(
            <section class="u-clearfix u-section-2" id="sec-502c">

            <div className="u-clearfix u-sheet u-sheet-1">

                <h1 className="u-custom-font u-font-montserrat u-text u-text-default u-text-1">Bienvenidos al <span style={{fontweight: + '700'}}>Banco ITAU</span></h1>
                
                <div className="loginStl u-border-1 u-border-grey-40 u-container-style u-group u-radius-25 u-shape-round u-group-1">
                    <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-xl u-valign-top-xs u-container-layout-1">
                        <h1 className="u-align-center u-custom-font u-font-montserrat u-text u-text-2">Iniciar Sesión</h1>
                        <div className="u-form u-form-1">
                            
                            <form action="/Login" method="POST" className="u-clearfix u-form-custom-backend u-form-spacing-16 u-form-vertical u-inner-form" style={{padding: + '21px'}} source="custom" name="form" redirect="true">
                                <input type="hidden" id="siteId" name="siteId" value="7147468"></input>
                                <input type="hidden" id="pageId" name="pageId" value="1070724703"></input>
                                <div className="u-form-group u-form-name">
                                    <label for="name-0dee" className="u-custom-font u-font-montserrat u-label u-label-1">Usuario</label>
                                    <input type="text" placeholder="Introduzca su usuario" id="name-0dee" name="user" className="u-border-2 u-border-grey-15 u-custom-font u-font-montserrat u-input u-input-rectangle u-radius-19 u-white" required="requiered"></input>
                                </div>
                                <div className="u-form-group">
                                    <label for="email-0dee" className="u-custom-font u-font-montserrat u-label u-label-2">Clave</label>
                                    <input type="text" placeholder="Digite su clave" id="email-0dee" name="pass" className="u-border-2 u-border-grey-15 u-custom-font u-font-montserrat u-input u-input-rectangle u-radius-19 u-white" required="required"></input>
                                </div>
                                <div className="u-align-center u-form-group u-form-submit">
                                    <a href="" type="submit" className="u-btn u-btn-round u-btn-submit u-button-style u-palette-1-light-1 u-radius-17 u-text-palette-1-light-3 u-btn-1">Login</a>
                                    <input type="submit" value="submit" className="u-form-control-hidden"></input>
                                </div>
                                <input type="hidden" value="" name="recaptchaResponse"></input>
                            </form>
                        </div>
                    </div>
                </div>
          </div>   
          </section>
        );
    }
}

export default Login;