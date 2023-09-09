const TeamMember = ({ name }: any) => {
  return (
    <div
      style={{
        width: '30%',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src="https://i.ibb.co/hFhbzGY/Screenshot-2023-09-02-at-8-27-56-AM-removebg-preview.png"
        alt=""
        style={{ width: 'auto', height: '80%' }}
      />
      <p style={{ color: 'white' }}>{name}</p>
    </div>
  );
};
export default TeamMember;
