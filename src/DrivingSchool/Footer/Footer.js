import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerContainer"> 
<div className="container">
            <h4 className="footer-Text fw-bold pt-5"> ABOUT ME </h4>
           <div className="d-flex row row-cols-2 mt-4 mb-4">
               
           <div className="col col-12 col-md-6 col-lg-6">
           <p className="footer-Text fw-bolder text-start">Hello. Assalamualaikum Guys. My Full Name
                Is <br/> Jannatune
                Naem Erfan (J.N.Erfan). I'M Junior
                Web
                Developer. <br/>
                Thanks For Visit My Web Site.
            </p>
           </div>
            <div className="col col-12 col-md-6 col-lg-6">
                
                         <p className="footer-Text fw-bolder text-start"> Location: Purbadhala Netrokona, Dhaka
                            Bangladesh
                            <br/>
                            E-mail: j.n.erfan420@gmail.com
                            <br/>
                            Phone: +8801314580860
                        </p>
            </div>
            </div>
            <div className="mb-4">
                <button className="btn btn-outline-light rounded-pill pt-1 pb-1 ps-3 pe-3" type="button">HIRE
                    ME</button>
            </div>
</div>

    <div className="footar-icon text-center mt-3">
    <a href="https://www.facebook.com/jnerfan"> <i className="fab fa-facebook fb pe-3"></i> </a>
    <a href="https://www.instagram.com/j.n.erfan/"><i className="fab fa-instagram ins pe-3"></i></a>
    <a href="https://twitter.com/login?lang=en"><i className="fab fa-twitter twt pe-3"></i></a>
    <a href="https://www.youtube.com/channel/UCRJ5d8nP2PBmv6rYdtNfFag"><i className="fab fa-youtube yt"></i></a>
    </div>


<div className="text-center pb-3">
    <hr className="footer-Text"/>
    <span>
        <i className="far fa-copyright text-light text-center"></i> <span className="footer-Text"> 
        Design By J.N.Erfan With React</span> 
    </span>
</div>

        </div>
    );
};

export default Footer;