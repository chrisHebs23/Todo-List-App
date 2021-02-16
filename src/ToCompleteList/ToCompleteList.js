import MakeList from "../MakeList/MakeList";

const ToCompleteList = (props) => {
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
      <h2>Todo Today</h2>
      <ul className="list ToComplete">{todos}</ul>
    </div>
  );
};

export default ToCompleteList;
