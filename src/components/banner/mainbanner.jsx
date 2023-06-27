import React, { useContext } from 'react';
import './banner.css';
import { MainBannerContext } from '../../shared/contexts/MainBannerContext';



function MainBanner () {
    const { bannerMain } = useContext(MainBannerContext)
 

    return (

        <>
            <div className="col-12 p-t-120 banner">
                <h1 className='banner-h1' id='mainTitulo'>{bannerMain.mainTitulo}</h1>
                <h6 className="banner-h6 text-muted" id='mainParagrafo'>{bannerMain.mainParagrafo}</h6>
            </div>
        </>
    )
}

export default MainBanner;