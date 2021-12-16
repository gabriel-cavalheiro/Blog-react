import { Header } from "pages/Header";
import { Footer } from "pages/Footer";

//Images
import logoBlog from '../../svg/blog.svg'

export const About = () => {
    return(
        <>
            <Header />

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <h1 className="h0">Blog <span>.</span></h1>
                        <p className="mt-1">
                            O Blog é um projeto desenvolvido em React.js
                            para o curso FrontPush. Clique aqui para saber
                            de mais informações.
                            
                            
                        </p>
                        <a href="#" className="btn mt-4">Saiba mais</a>
                    </div>
                    <div className="grid-6">
                        <img src={logoBlog} className="ilustration" alt="ilustração do blog" />
                    </div>
                </div>
            </section>

             <Footer />      
        </>
    );
}