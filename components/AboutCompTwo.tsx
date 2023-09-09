const AboutCompTwo = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundSize: '20px 20px',
        backgroundImage:
          'linear-gradient(90deg, #222 1px, transparent 0px), linear-gradient(#222 1px, transparent 0px)',
      }}
    >
      {' '}
      <p
        style={{
          fontSize: '25px',
          fontWeight: 100,
          color: '#fff',
          width: '50%',
        }}
      >
        Grow your passion for learning and educating, explore maps.
      </p>
      <p
        style={{
          fontSize: '25px',
          fontWeight: 100,
          color: '#fff',
          width: '50%',
          marginLeft: '10%',
        }}
      >
        Build your content however you want.
      </p>
    </div>
  );
};
export default AboutCompTwo;
