export default function Progress(props) {
  let totalLength = props.todo.length + props.complete.length;
  let total = Math.floor((props.complete.length / totalLength) * 100);
  let text = "Well done";

  if (isNaN(total)) {
    text = `Progress 0%`;
    total = 0;
  } else if (total !== 100) {
    text = `Progress ${total}%`;
  }

  return (
    <div className="progressBar">
      <div style={{ width: `${total}%` }} className="displayProgress">
        <h3>{text}</h3>
      </div>
    </div>
  );
}
