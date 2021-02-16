import MakeList from "../MakeList/MakeList";

export default function CompletedList(props) {
  const todos = props.task.map((todo) => {
    return (
      <MakeList
        content={todo}
        key={Math.random() * 100}
        id={Math.random() * 100}
        onDelete={props.onDelete}
      />
    );
  });
  return (
    <div className="ListBox">
      <h2>Completed</h2>
      <ul className="list CompletedList">{todos}</ul>
    </div>
  );
}
