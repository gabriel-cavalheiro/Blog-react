import img01 from '../../../img/01.png'


export const Card = () => {
    return(
        <>
            <div className="grid-4 card p-0">
                    <div className="thumb hidden">
                        <a href="#">
                            <img src={img01} alt="Foto da capa do post de um notebook" />
                        </a>
                    </div>
                    <div className="mt-2 px-2">
                        <h6 className="color-gray">01 de novembro de 2021</h6>
                        <h6 className="uppercase color-primary">tecnologia</h6>

                        <h4>O que esperar do cinema em 2021?</h4>
                        <p className="mt-1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Corrupti, magnam! Qui magni animi quia sequi quisquam esse
                            corrupti incidunt commodi eum voluptate, hic adipisci iure
                            sed, modi dolorum enim maxime.
                        </p>
                        <div className="my-3">
                            <a href="#" className="link color-primary ">Ler mais</a>
                        </div>
                    </div>
                </div>
        </>
    );
}