import { h } from "preact";
import style from "./style";

const ListView = ({ list = [] }) => {
  if (list.length === 0) return "loading...";
  return (
    <ul class={style.listview}>
      <li class={style.heading}>
        <span>MIME</span>
        <span>SUPPORTED</span>
      </li>
      {list.map(item => (
        <li>
          <span>{item.mime}</span>
          <span>
            <div class={style[item.canPlay]}>
              {item.canPlay}
            </div>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
