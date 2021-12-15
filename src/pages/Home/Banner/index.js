import img02 from '../../../img/02.png'

export const Banner = () => {
    return(
        <>

            <section className="container">
                <div className="img-banner hidden flex-center">
                    <img src={img02} alt="imagem do banner" />
                </div>
                <div className="row mt-3">
                    <h6 className="color-gray text-center">01 de novembro de 2021</h6>
                    <h6 className="uppercase color-primary text-center">tecnologia</h6>

                    <h3 className="text-center">O que esperar do cinema em 2021?</h3>
                    <p className="mt-1 text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Corrupti, magnam! Qui magni animi quia sequi quisquam esse
                        corrupti incidunt commodi eum voluptate, hic adipisci iure
                        sed, modi dolorum enim maxime.
                    </p>
                    <div className="my-3 flex-center">
                        <a href="#" className="link color-primary ">Ler mais</a>
                    </div>
                </div>
            </section>

        </>
    );
}