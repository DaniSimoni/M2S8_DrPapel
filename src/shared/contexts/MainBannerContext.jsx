import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const MainBannerContext = createContext({
    bannerMain: {
        mainTitulo: '',
        mainParagrafo: '',
    },
    setBanner: () => {},
});

export function MainBannerProvider ({ children }) {
    const [bannerMain, setBannerMain] = useState({
        mainTitulo: 'Confira nossos Kits Personalizáveis',
        mainParagrafo: 'Praticidade na escolha e economia na hora de montar a sua festa personalizada.',
    });

   
    return(
        <MainBannerContext.Provider value={{bannerMain, setBannerMain}}>
         { children }
        </MainBannerContext.Provider>
    )
};

    MainBannerProvider.propTypes = {
       children: PropTypes.node,
 };    