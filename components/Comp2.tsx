import App from './MovingWorld';
import DownloadOn from './DownloadOn';
import UrMP from './YourMP';
import Explanation from './Explanation';
const Comp2 = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundSize: '20px 20px',
        backgroundImage:
          'linear-gradient(90deg, #222 1px, transparent 0px), linear-gradient(#222 1px, transparent 0px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          flexDirection: 'column',
          width: '40%',
        }}
      >
        <UrMP
          text="TRIPS WITH FRIENDS"
          lineHeight="80px"
          fontSize="40px"
          width="65%"
        />
        <Explanation
          text="Uranus is a must have when traveling with friends.
          Whether you're at a music festival, on the beach or on the slopes - Zenly keeps your group together and gets you back to them whenever you split up."
          width="70%"
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
        <img
          src="https://youmap.com/wp-content/uploads/uploads/2020/03/about-top-section.png.webp"
          alt=""
          style={{ width: '80%', height: 'auto' }}
        />
      </div>
    </div>
  );
};
export default Comp2;
