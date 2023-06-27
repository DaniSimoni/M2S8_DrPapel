import React from 'react';
import './main.css';
import MainBanner from '../banner/mainbanner';


const Main = () => {
    return (
        <>
        
        <section className='container container-produtos'>

        <div className='container-fluid icones-produtos'>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/Topos/topocapa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Topo de Bolo</label>
            </button>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/CaixasBrinde/caixas-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Lembrancinhas</label>
            </button>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/Adesivos_Apliques/adesivos-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Apliques</label>
            </button>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/3D/capa3D.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>3D</label>
            </button>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/Mais/mais-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Mais</label>
            </button>

        </div>

        </section>

        <MainBanner />

        <section className='kits'>

                    <h1 className='kits-ttl'>Kits Festas</h1>
        
        <div className='container container-main '>

            <section className='container-fluid row col-sm-3 container-card'>
            <div className='flip-card d-sm-inline-flex '>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                <img src="/images/2.jpg" className="img-thumbnail" alt="..."></img>
                </div>

                <div className='flip-card-back'>
                <img src="/images/kit...jpg" className="img-thumbnail" alt="..."></img>
                </div>
            </div>
            </div>
            </section>

            <section  className='container-fluid row col-sm-3 container-card'>
            <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                <img src="/images/1.jpg" className="img-thumbnail" alt="..."></img>
                </div>

                <div className='flip-card-back'>
                <img src="/images/kit....jpg" className="img-thumbnail" alt="..."></img>
                </div>
            </div>
            </div>
            </section>

            <section  className='container-fluid row col-sm-3 container-card'>    
            <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                <img src="/images/3.jpg" className="img-thumbnail" alt="..."></img>
                </div>

                <div className='flip-card-back'>
                <img src="/images/kit.jpg" className="img-thumbnail" alt="..."></img>
                </div>
            </div>
            </div>
            </section>
            

        </div>

        <h1 className='kits-ttl'></h1>
        </section>

        </>
    )
}
    






export default Main;