import { Header } from "pages/Header";
import { Footer } from "pages/Footer";

//Images
import ImgBanner from '../../img/05.png'
import IconFacebook from '../../svg/icon-facebook.svg'
import IconInstagram from '../../svg/icon-instagram.svg'
import IconYoutube from '../../svg/icon-youtube.svg'
import IconTwitter from '../../svg/icon-twitter.svg'

//Params
import { useParams } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

//API
import api from "services/api";

export const Post = () => {

    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    const { idPost } = useParams();

    useEffect(() => {
        
        if(idPost){
            api.get("/posts/" + idPost)
            .then((response) => {
                setPost(response.data);

                api.get("/user/" + response.data.id_user)
                .then((response) => {
                    setUser(response.data)
                })
            })
        }

    }, [])

    return(
        <>
            <Header />

            <section className="container">
                    <h6 className="uppercase color-primary text-center">{post.category}</h6>
                    <h3 className="text-center">{post.title}</h3>

                    <div className="flex-center my-3">
                        <div className="profile">
                            <img src={user.ImageProfile} className="profile-img" alt="" />
                        </div>
                        <div className="ml-2">
                            <h6 className="color-primary">{user.name} {user.surname}</h6>
                            <p className="color-gray p3">{user.user}</p>
                        </div>
                        <p className="ml-4">{post.date} - {post.duration}min</p>
                    </div>

                    <div className="img-banner hidden">
                        <img src={post.imageUrl} alt="Banner do post" />
                    </div>

                    <div className="row my-3">
                        <h4 className="mt-4">{post.title}</h4>
                        <p className="mt-2 text-indent mb-5">
                            {post.content}
                        </p>                       
                    </div>

                    <div className="row">
                        <div className="grid-3 disappear"></div>
                        <div className="grid-6 card mt-4">
                            <div className="row">
                                <div className="grid-3 flex-center pl-1">
                                    <div className="profile-big">
                                        <img src={user.ImageProfile} className="profile-img" alt="Foto de perfil" />
                                    </div>
                                </div>
                                <div className="grid-9">
                                    <div className="flex-space">
                                        <h6 className="color-primary">{user.name} {user.surname}</h6>
                                        <ul className="social-media flex">
                                            <li><a href="#"><img src={IconFacebook} alt="ícone do Facebook" className="icon-s" /></a></li>
                                            <li><a href="#"><img src={IconInstagram} alt="ícone do Instagram" className="icon-s" /></a></li>
                                            <li><a href="#"><img src={IconTwitter} alt="ícone do Twitter" className="icon-s" /></a></li>
                                            <li><a href="#"><img src={IconYoutube} alt="ícone do Youtube" className="icon-s" /></a></li>
                                        </ul>
                                    </div>
                                    <p className="color-gray p3">{user.user}</p>
                                    <p className="mt-1">
                                        {user.description}
                                    </p>
                                    <a href="#" className="link">Ver perfil</a>
                                </div>
                            </div>
                        </div>
                        <div className="grid-3 disappear"></div>
                    </div>
                </section>
            <Footer />      
        </>
    );
}