import MakeList from "../MakeList/MakeList";

const ToCompleteList = (props) => {
  let title = "Task Complete";

  if (props.task.length > 1) {
    title = "Tasks to Complete";
  }

  const todos = props.task.map((todo) => {
    let newId = Math.random() * 100;
    return (
      <MakeList
        content={todo}
        id={newId}
        key={newId}
        onDelete={props.onDelete}
        // todoTask={props}
      />
    );
  });
  return (
    <div className="ListBox">
      <h2>{title}</h2>
      <ul className="list ToComplete">{todos}</ul>
    </div>
  );
};

export default ToCompleteList;
