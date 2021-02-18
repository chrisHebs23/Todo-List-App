import MakeList from "../MakeList/MakeList";

export default function CompletedList(props) {
  let title = "Task Completed";
  if (props.tasks.length > 1) {
    title = "Tasks Completed";
  }

  return (
    <div className="ListBox">
      <h2>{title}</h2>
      <ul className="list CompletedList">
        <MakeList tasks={props.tasks} onDelete={props.onDelete} />
      </ul>
    </div>
  );
}
