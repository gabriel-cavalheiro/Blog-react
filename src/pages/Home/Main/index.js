import profile from "../../../profile/gab.jpg"

export const Main = () => {
    return(
        <>
        <div className="py-3 bb-black">
            <h6 className="color-gray">01 de novembro de 2021</h6>
            <h6 className="uppercase color-primary">tecnologia</h6>

            <h4>O que esperar do cinema em 2021?</h4>
            <p className="mt-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti, magnam! Qui magni animi quia sequi quisquam esse
                corrupti incidunt commodi eum voluptate, hic adipisci iure
                sed, modi dolorum enim maxime.
            </p>
            <div className="flex-start-row mt-3">
                <div className="profile">
                    <img src={profile} className="profile-img" alt="Foto de Perfil" />
                </div>
                <div className="ml-1">
                    <h6 className="color-primary">Gabriel Cavalheiro</h6>
                    <h6 className="color-gray">@gabriel.cavalheiro</h6>
                </div>
            </div>
        </div>
        </>
    );
}