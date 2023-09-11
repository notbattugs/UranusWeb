import App from './MovingWorld';
import DownloadOn from './DownloadOn';
import UrMP from './YourMP';
import Explanation from './Explanation';
const Comp1 = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundImage: `url("https://preview.free3d.com/img/2017/09/2279484665356092960/twd1hxx0.jpg")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '120%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          flexDirection: 'column',
          width: '35%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexDirection: 'column',
            width: '80%',
            gap: '10px',
            marginLeft: '20%',
          }}
        >
          <UrMP text="YOUR MAP" lineHeight="60px" fontSize="70px" />
          <UrMP
            text="YOUR PEOPLE"
            fontSize="70px"
            lineHeight="60px"
            width="550px"
          />
        </div>
        <br />

        <Explanation
          text=" Uranus is a live map of your friends and family. It's the most fun way
          to meet up - or just see what's up! - so you can feel together, even
          when you're apart."
          width="70%"
          className="ExplanationOnCompOne"
        ></Explanation>
      </div>

      <div
        style={{
          width: '60%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        {/* <App widht="500px" height="500px"></App> */}
        {/* <img
          // src="https://youmap.com/wp-content/uploads/uploads/2020/04/contact_bg.png.webp"
          src="https://youmap.com/wp-content/uploads/uploads/2020/03/planet-4.png"
          alt=""
          style={{ width: '50%', height: 'auto' }}
        /> */}
        <img
          src="https://i.ibb.co/hBWmfJs/uranushero-removebg-preview.png"
          alt=""
          style={{ width: 'auto', height: '80%' }}
        />
      </div>
    </div>
  );
};
export default Comp1;
