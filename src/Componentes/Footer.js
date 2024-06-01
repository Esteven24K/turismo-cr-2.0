import React from "react";
import { AppContext } from '../AppContext';
import { useContext } from 'react';

function Footer() {

    const { datos } = useContext(AppContext);


    return (
        <div>
            <a href="#" className="btn btn-lg btn-success btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>


            <div className="container-fluid text-white" style={{ background: "#18241d" }}>

                <div className="container text-center">

                    <div className="row justify-content-end">

                        <div className="col-lg-12 col-md-4">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "75px" }}>
                                <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">{datos.Footer.proveedor}</a>. {datos.Footer.derechos}
                                    <a className="text-white border-bottom" href="https://htmlcodex.com">{datos.Footer.siglas}</a></p>


                            </div>
                        </div>
                        <div className="col-lg-12 col-md-4 ">
                            <a className="btn btn-success btn-square me-2 " href="#"><i className="fab fa-twitter fw-normal"></i></a>
                            <a className="btn btn-success btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                            <a className="btn btn-success btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                            <a className="btn btn-success btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;