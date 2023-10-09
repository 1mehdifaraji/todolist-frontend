import { FC } from "react";

const ListDisplay: FC<any> = (props) => {
  return (
    <ul className="taskList">
      {props.listItems?.map((item: any, index: any) => (
        <ListItem
          key={index}
          index={index}
          taskDesc={item.description}
          isCompleted={item.isCompleted}
          itemCompleter={props.itemCompleter}
          itemRemover={props.itemRemover}
        />
      ))}
    </ul>
  );
};

export default ListDisplay;

const ListItem: FC<any> = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={(event) => props.itemCompleter(event, props.index)}
        checked={props.isCompleted}
      />
      <span
      //       className={props.isCompleted ? "itemCompleted" : null}
      >
        {props.taskDesc}
      </span>
      <button
        onClick={() => props.itemRemover(props.index)}
        className="fa fa-trash"
      />
    </li>
  );
};
