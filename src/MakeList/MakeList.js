export default function CompleteList(props) {
  return (
    <>
      {props.tasks.map((item) => (
        <li
          className="hoverChange"
          key={item.id}
          onClick={() => {
            props.onDelete(item.id);
          }}
        >
          {item.task}
        </li>
      ))}
    </>
  );
}
