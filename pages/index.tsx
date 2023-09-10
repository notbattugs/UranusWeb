import HeaderComp from '../components/header';
import Comp1 from '../components/Comp1';
import Comp2 from '../components/Comp2';
import Comp3 from '../components/Comp3';
import Footer from '../components/Footer';
import { IBM_Plex_Mono } from 'next/font/google';
const IBM = IBM_Plex_Mono({
  weight: '600',
  subsets: ['latin'],
});
export function Index() {
  return (
    <div
      style={{
        width: '100vw',
        height: 'auto',
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
          height: '86px',
          backgroundSize: '20px 20px',
          backgroundImage:
            'linear-gradient(90deg, #222  1px, transparent 0px), linear-gradient(#222   1px, transparent 0px)',
        }}
      ></div>
      <Comp1 />
      <div
        style={{
          width: '100vw',
          height: '74vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: '20px 20px',
          backgroundImage:
            'linear-gradient(90deg, #222 1px, transparent 0px), linear-gradient(#222 1px, transparent 0px)',
        }}
      >
        <h1
          style={{
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: `100%`,
            width: `50%`,
            color: '#fff',
          }}
          id="INdex"
        >
          Uranus is a live fun and friendly map of your friends and family. We
          helped them creating a website that reflets Zenly's Universe best.
        </h1>
      </div>
      <Comp2></Comp2>
      <Comp3></Comp3>
      <Footer />
      <div
        style={{
          width: '100vw',
          height: '1vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: '20px 20px',
          backgroundImage:
            'linear-gradient(90deg, #222  1px, transparent 0px), linear-gradient(#222   1px, transparent 0px)',
        }}
      >
        <p
          style={{
            color: 'gray',
            fontSize: '10px',
            gap: '1px',
          }}
        >
          Copyright © 2023 - 6969 UrAnus Inc. UrAnus is a registered trademark.
          Protected by MN Patents.
        </p>
      </div>
    </div>
  );
}

export default Index;
