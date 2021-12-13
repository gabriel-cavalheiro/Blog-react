import logo from '../../svg/blog-logo2.svg';
import iconFacebook from '../../svg/icon-facebook.svg';
import iconInsta from '../../svg/icon-instagram.svg';
import iconYoutube from '../../svg/icon-youtube.svg';
import iconTwitter from '../../svg/icon-twitter.svg';



export const Footer = () => {
    return (
        <footer className="bg-section bt-black">
            <section className="container pb-0 ">
                <div className="row flex-center">
                    <img src={logo} className='icon-l' alt="logo do blog" />
                </div>

                <div className="row pb-3 bb-black">
                    <div className="grid-3">
                        <h4>Posts</h4>
                        <div className="flex-start-column mt-2">
                            <a href="#" className="color-gray link-footer">Mais vistos</a>
                            <a href="#" className="color-gray link-footer">Mais comentados</a>
                            <a href="#" className="color-gray link-footer ">Mais populares</a>
                            <a href="#" className="color-gray link-footer">Mais recentes</a>
                        </div>
                        
                    </div>

                    <div className="grid-3">
                        <h4>Categorias</h4>
                        <div className="flex-start-column mt-2">
                            <a href="#" className="color-gray link-footer">Tecnologia</a>
                            <a href="#" className="color-gray link-footer">Games</a>
                            <a href="#" className="color-gray link-footer">Fotografia</a>
                            <a href="#" className="color-gray link-footer">Cinema</a>
                        </div>
                    </div>

                    <div className="grid-6">
                        <h4 className="mb-2">Quer ser avisado dos novos posts do blog?</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ornare urna pharetra ut ac, pellentesque. 
                        </p>
                        <div className="flex-start-row mt-2">
                            <input type="text" name="search" id="" placeholder="Digite seu e-mail aqui" />
                            <button className="btn ml-2">Cadastrar</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-9">
                        <p>2021 | Todos os direitos reservados. Projeto de React.js do curso <a href="https://www.frontpush.com.br/" target="_blank">FrontPUSH.</a> </p>
                    </div>

                    <div className="grid-3">
                        <a href=""><img src={iconFacebook} className="icon-s" alt="" /></a>
                        <a href=""><img src={iconInsta} className="icon-s ml-2" alt="" /></a>
                        <a href=""><img src={iconYoutube} className="icon-s ml-2" alt="" /></a>
                        <a href=""><img src={iconTwitter} className="icon-s ml-2" alt="" /></a>
                    </div>
                </div>

            </section>
        </footer>
    );
}