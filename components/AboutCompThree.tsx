import TeamMember from './TeamMember';
const AboutCompThree = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundSize: '20px 20px',
        backgroundImage:
          'linear-gradient(90deg, #222 1px, transparent 0px), linear-gradient(#222 1px, transparent 0px)',
      }}
    >
      <h1
        style={{
          fontSize: '80px',
          fontWeight: 800,
          color: '#fff',
          lineHeight: '80px',
        }}
      >
        Meet Our Team
      </h1>

<br /><br />
<br />
      <div
        style={{
          width: '100vw',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <div
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TeamMember name="Амарсайхан"></TeamMember>
            <TeamMember name="Баттөгс"></TeamMember>
            <TeamMember name="Мөнхцог"></TeamMember>
          </div>
          <br />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <TeamMember name="Тэмүүлэн"></TeamMember>
            <TeamMember name="Энхбилгүүн"></TeamMember>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCompThree;
