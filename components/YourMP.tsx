const UrMP = (text: any) => {
  return (
    <h1
      style={{
        fontSize: `${text.fontSize}`,
        fontWeight: 600,
        color: '#fff',
        lineHeight: `${text.lineHeight}`,
        width: `${text.width}`,
        marginLeft: '10%',
      }}
    >
      {text.text}
    </h1>
  );
};
export default UrMP;
