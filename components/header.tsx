import App from './MovingWorld';
const styles = {
  cont: {
    width: '100vw',
    height: '86px',
    display: 'flex',
    backgroundColor: '#000',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
    boxShadow: ' 1px 5px 5px #3B3B3B',
    zIndex: 1,
  },
  logo: {
    width: '50px',
    height: '50px',
  },
};
const HeaderComp = () => {
  return (
    <>
      <div style={styles.cont}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}
        >
          {' '}
          <a
            href="/"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}
          >
            {/* <App widht="50px" height="50px"></App> */}
            <img
              src="https://i.ibb.co/hBWmfJs/uranushero-removebg-preview.png"
              alt=""
              style={{ width: 'auto', height: '50px' }}
            />
            <h1 style={{ fontSize: '20px', fontWeight: 600, color: 'white ' }}>
              Uranus
            </h1>
          </a>
        </div>
        <div
          style={{
            width: '20%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            color: 'white',
          }}
        >
          <a href="/About">
            <p style={{ gap: '10px' }}>
              {' '}
              <strong style={{ color: 'rgb(199, 120, 221)' }}>#</strong>
              About Us
            </p>
          </a>
        </div>
      </div>
    </>
  );
};
export default HeaderComp;
