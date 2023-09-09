const AboutCompOne = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
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
          gap: '30px',
        }}
      >
        <h1
          style={{
            fontSize: '80px',
            fontWeight: 800,
            color: '#fff',
            lineHeight: '80px',
            width: '65%',
            marginLeft: '10%',
          }}
        >
          About The Uranus
        </h1>
        <br />
        <p
          style={{
            fontSize: '15px',
            fontWeight: 100,
            color: '#fff',
            marginLeft: '17%',
            width: '70%',
            height: 'auto',
          }}
        >
          Uranus is the seventh planet from the Sun, and has the third-largest
          diameter in our solar system. It was the first planet found with the
          aid of a telescope, Uranus was discovered in 1781 by astronomer
          William Herschel, although he originally thought it was either a comet
          or a star.It was two years later that the object was universally
          accepted as a new planet, in part because of observations by
          astronomer Johann Elert Bode. Herschel tried unsuccessfully to name
          his discovery Georgium Sidus after King George III. Instead, the
          scientific community accepted Bode's suggestion to name it Uranus, the
          Greek god of the sky, as suggested by Bode.
        </p>
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
          src="https://i.ibb.co/hBWmfJs/uranushero-removebg-preview.png"
          alt=""
          style={{ width: 'auto', height: '80%' }}
        />
      </div>
    </div>
  );
};
export default AboutCompOne;
