import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const BannerContext = createContext({
    banner: {
        titulo: '',
        paragrafo: '',
    },
    setBanner: () => {},
});

export function BannerProvider ({ children }) {
    const [banner, setBanner] = useState({
        titulo: 'Papelaria Personalizada',
        paragrafo: 'Deixe os momentos especiais inesquecíveis com os ítens da Dr.Papel.',
    });

   
    return(
        <BannerContext.Provider value={{banner, setBanner}}>
         { children }
        </BannerContext.Provider>
    )
};

    BannerProvider.propTypes = {
       children: PropTypes.node,
 };    