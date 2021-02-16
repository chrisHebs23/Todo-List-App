export default function CompleteList(props) {
  return (
    <li
      id={props.id}
      onClick={() => {
        props.onDelete(props.content);
      }}
    >
      {props.content}
    </li>
  );
}
