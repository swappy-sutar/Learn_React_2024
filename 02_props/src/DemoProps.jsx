const DemoProps = (props) => {
  console.log(props);
  return (
    <>
      <h1>Welcome, {props.name} ! </h1>
      <h3>this is the DemoProps file </h3>
      <p>name : {props.name}</p>
      <p>age : {props.age}</p>
    </>
  );
};

export default DemoProps;
