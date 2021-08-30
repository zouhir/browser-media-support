import "./style.css";

const ListView = ({ list = [] }) => {
  if (list.length === 0) return "loading...";
  return (
    <ul class="listview">
      <li class="heading">
        <span>MIME</span>
        <span>SUPPORTED</span>
      </li>
      {list.map(item => (
        <li>
          <span>{item.mime}</span>
          <span>
            <div classNamee={item.canPlay}>
              {item.canPlay}
            </div>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
