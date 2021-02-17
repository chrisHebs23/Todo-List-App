export default function CompleteList(props) {
  return (
    <li
      className="hoverChange"
      id={props.todoId}
      onClick={() => {
        props.onDelete(props.content);
      }}
    >
      {props.content}
    </li>
  );
}
