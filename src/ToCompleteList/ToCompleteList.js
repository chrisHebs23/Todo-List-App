import MakeList from "../MakeList/MakeList";

const ToCompleteList = (props) => {
  let title = "Task Complete";

  if (props.tasks.length > 1) {
    title = "Tasks to Complete";
  }

  return (
    <div className="ListBox">
      <h2>{title}</h2>
      <ul className="list ToComplete">
        <MakeList tasks={props.tasks} onDelete={props.onDelete} />
      </ul>
    </div>
  );
};

export default ToCompleteList;
