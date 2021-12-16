//Icons
import star from '../../svg/icon-star.svg'

//Components
import { Hero } from './Hero';
import { Main } from './Main/index';
import { Card } from './Card';
import { Banner } from './Banner';

//API
import api from 'services/api';

//HOOKS
import { useState, useEffect } from 'react';
import { Header } from 'pages/Header';
import { Footer } from 'pages/Footer';

//Link

export const Home = () => {

    const [main, setMain] = useState([]);
    const [mostseen, setMostseen] = useState([]);
    const [banner, setBanner] = useState([]);

    useEffect(() => {

        //Requisição para posts com nota 5 estrelas
        api.get('posts?star=5&_limit=2&_order=desc')
        .then((response) => {
            setMain(response.data);
        })

        //Requesição para o banner
        api.get('posts?_sort=date&_order=desc&_limit=1')
        .then((response) => {
            setBanner(response.data);
        })

        //Requisição para posts mais vistos
        api.get('posts?_limit=3')
        .then((response) => {
            setMostseen(response.data);
        })

    }, [])


    return (
        <>

        <Header />

            <Hero />
            
                <section className="container">
                    <div className="row">
                        <div className="grid-5 pt-5 pb-3">  
                            <img src={star}  className="icon-l" alt="ícone de estrela" />        
                            <h2 className="mt-2">
                                Os melhores e mais bem votados posts do mês.
                            </h2>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Voluptatum sint praesentium excepturi neque dolor! Ex amet
                                ab a suscipit neque quas doloremque fuga maiores? Nihil 
                                cupiditate corporis obcaecati! Molestias, debitis.
                            </p>
                        </div>
                        <div className="grid-7">
                        
                            {
                                main.map((item) => {
                                    return <Main key={item.id} content={item} />
                                })
                            }

                        </div>
                    </div>
                </section>

                <section className="container">

                    <h3>Post com mais visitas</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit exercitationem sed! Perspiciatis ipsam temporibus atque, odit facere magnam similique molestiae nulla praesentium sed cupiditate commodi laudantium illum id error!
                    </p>

                    <div className="row mt-4">
                        
                        {
                            mostseen.map((item) => {
                                return <Card key={item.id} content={item} />
                            })
                        }
                        
                    </div>
            </section>

            {
                banner.map((item) => {
                    return <Banner key={item.id} content={item} />
                })                   
            }

            <Footer />
            
        </>
    );
}