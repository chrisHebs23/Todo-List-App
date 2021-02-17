export default function ResetButton(props) {
  return (
    <div className="ButtonContainer">
      <button className="resetButton buttonColor" onClick={props.onClick}>
        Reset Tasks
      </button>
    </div>
  );
}
