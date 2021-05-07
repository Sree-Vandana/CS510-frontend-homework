export default function Result(props) {
  return (
    <div>
      <h1>Result {props.name}</h1>
      <img src={props.img} alt="img"></img>
    </div>
  );
}
