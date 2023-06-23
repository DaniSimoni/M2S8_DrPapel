import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';

export const HomePage = ( ) => {
  return (
    <>
        <div className='container-fluid '>
      <Header/>
      <Banner/>
      <Main/>
      <Footer/>
    </div>
    
    </>
  )
};