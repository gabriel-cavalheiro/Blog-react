import { Footer } from "pages/Footer";
import { Header } from "pages/Header";

// Images
import logo from '../../svg/blog-logo2.svg';

export const Login = () => {
    return(
        <>
        
        <Header />

            <section className="container">
                <div className="row flex-center">
                    <img src={logo} className="icon-l" alt="" />
                </div>

                <div className="row">
                    <div className="grid-4 disappear"></div>
                    <div className="grid-4">

                        <form>
                            <h5 className="text-center">
                                Olá, faça o login para continuar.
                            </h5>

                            <div className="mt-4">
                                <label className="mb-2"><h6>Nome de usuário </h6> </label>
                                <input type="text" id="user" name="user" className="mt-1" placeholder="Digite seu usuário" />
                            </div>

                            <div className="mt-3">
                                <label htmlFor="password" ><h6>Senha</h6></label>
                                <input type="password" id="password" name="password" className="mt-1"  placeholder="Digite sua senha" />
                            </div>
                              
                                    <div className="card-danger p-2 mt-3">
                                        <h6 className="h7 color-red"></h6>
                                    </div>
                                                                                
                                    <div className="card-success p-2 mt-3">
                                        <h6 className="h7 color-green"></h6>
                                    </div>
                                
                            
                            <button className="btn w-100 mt-5">Entrar</button>
                        </form>
                    </div>
                    <div className="grid-4 disappear"></div>
                </div>
            </section>

        <Footer />

        </>
    );
}