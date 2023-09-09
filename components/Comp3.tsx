import Explanation from './Explanation';
import UrMP from './YourMP';

const Comp3 = () => {
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
          width: '60%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="https://youmap.com/wp-content/uploads/uploads/2020/04/partners-bg-cdn.png.webp"
          alt=""
          style={{ width: '70%', height: 'auto' }}
        />
      </div>
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
          text="WHEN YOU'RE FAR AWAY"
          lineHeight="80px"
          fontSize="40px"
          width="65%"
        />
        <Explanation
          text="Getting a notification when your friend lands in another country.
        Even when you're miles away trom your peop e, Zenly makes you
        feel like you're with them."
          width="70%"
        ></Explanation>
      </div>
    </div>
  );
};
export default Comp3;
