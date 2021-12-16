import { Header } from "pages/Header";
import { Footer } from "pages/Footer";

//Images
import LogoBlog from '../../svg/blog-logo2.svg'

//link
import { Link } from 'react-router-dom';


export const NotFound = () => {
    return(
        <>
            <Header />
                <section className="container">
                    <div className="row">
                        <div className="grid-4 disappear"></div>
                        <div className="grid-4 flex-center-column">
                            <div className="flex-center">
                                <img src={LogoBlog} alt="logo blog" className="icon-l" />
                            </div>

                            <h3 className="h0 mt-4 color-primary">404</h3>
                            <h6 className="my-2">Página não encontrada!</h6>
                            <p className="p4 text-center">
                                A página que você tá procurando não existe
                                ou foi removida.<br/>
                                Clique para voltar para o site.
                            </p>
                                <Link to="/" className="btn w-100 mt-4">Voltar p/ Home</Link>
                            

                        </div>
                        <div className="grid-4 disappear"></div>
                    </div>
                </section>
             <Footer />      
        </>
    );
}