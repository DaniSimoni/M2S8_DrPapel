import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import { BannerProvider } from '../shared/contexts/BannerContext'

export const FAQPage = ( ) => {
  return (
    <>
        <div className='container-fluid '>
      <Header/>
      <BannerProvider>
      <Banner/>
      </BannerProvider>
        <h1>FAQ em desenvolvimento</h1>
      <Footer/>
    </div>
    
    </>
  )
};