import HeaderComp from '../components/header';
import { IBM_Plex_Mono } from 'next/font/google';
import AboutCompOne from '../components/AboutCompOne';
import AboutCompTwo from '../components/AboutCompTwo';
import AboutCompThree from '../components/AboutCompThree';
import Footer from '../components/Footer';
const IBM = IBM_Plex_Mono({
  weight: '600',
  subsets: ['latin'],
});
const About = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        transition: 'all 7s',
        background: '#000',
        cursor: ` url('https://assets.wizardingworld.com/js/patronus/assets/images/ui/cursor.png') 16 16, auto`,
      }}
      className={IBM.className}
    >
      <HeaderComp />
      <div
        style={{
          width: '100vw',
          height: '100px',
          backgroundSize: '20px 20px',
          backgroundImage:
            'linear-gradient(90deg, #222  1px, transparent 0px), linear-gradient(#222   1px, transparent 0px)',
        }}
      ></div>
      <AboutCompOne></AboutCompOne>
      <AboutCompTwo></AboutCompTwo>
      <div
        style={{
          height: '60px',
          backgroundSize: '20px 20px',
          backgroundImage:
            'linear-gradient(90deg, #222  1px, transparent 0px), linear-gradient(#222   1px, transparent 0px)',
        }}
      >
        <img
          src="https://youmap.com/wp-content/uploads/uploads/2020/03/planet-2.png"
          alt=""
          style={{ width: '50px', height: 'auto', marginLeft: '90%' }}
        />
      </div>
      <AboutCompThree></AboutCompThree>
      <div
        style={{
          height: '200px',
          backgroundSize: '20px 20px',
          backgroundImage:
            'linear-gradient(90deg, #222  1px, transparent 0px), linear-gradient(#222   1px, transparent 0px)',
        }}
      >
        <img
          src="https://youmap.com/wp-content/uploads/uploads/2020/03/planet-4.png"
          alt=""
          style={{ width: '50px', height: 'auto', marginLeft: '10%' }}
        />
      </div>

      <Footer></Footer>
    </div>
  );
};
export default About;
