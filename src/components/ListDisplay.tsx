import { FC } from "react";

interface ListDisplayProps {
  listItems: TodoList;
  itemRemover: (description: string) => void;
  itemCompleter: (description: string) => void;
}

const ListDisplay: FC<ListDisplayProps> = ({
  listItems,
  itemRemover,
  itemCompleter,
}) => {
  return (
    <ul className="taskList">
      {listItems?.map(({ description, isCompleted }: Todo, index: any) => (
        <ListItem
          key={index}
          index={index}
          taskDesc={description}
          isCompleted={isCompleted}
          itemCompleter={itemCompleter}
          itemRemover={itemRemover}
        />
      ))}
    </ul>
  );
};

export default ListDisplay;

interface ListItemProps {
  itemCompleter: (description: string) => void;
  itemRemover: (description: string) => void;
  isCompleted: boolean;
  taskDesc: string;
  index: number;
}

const ListItem: FC<ListItemProps> = ({
  itemCompleter,
  index,
  isCompleted,
  taskDesc,
  itemRemover,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => itemCompleter(taskDesc)}
        checked={isCompleted}
      />
      <span className={isCompleted ? "itemCompleted" : ""}>{taskDesc}</span>
      <button onClick={() => itemRemover(taskDesc)} className="fa fa-trash" />
    </li>
  );
};
