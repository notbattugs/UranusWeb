const Explanation = (text: any) => {
  return (
    <p
      style={{
        fontSize: '15px',
        fontWeight: 200,
        color: '#fff',
        marginLeft: '17%',
        // width: '400px',
        width: `${text.width}`,
      }}
    >
      {text.text}
    </p>
  );
};
export default Explanation;
