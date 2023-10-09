import { FC } from "react";

interface ListInputProps {
  getInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextItem: string;
  itemAdder: () => void;
}

const ListInput: FC<ListInputProps> = ({
  getInputValue,
  nextItem,
  itemAdder,
}) => {
  return (
    <div className="ListInputUI">
      <input
        type="text"
        className="taskInput"
        placeholder="Enter a task"
        onChange={getInputValue}
        value={nextItem}
      />
      <button onClick={itemAdder} className="taskButton fa fa-fw fa-plus" />
    </div>
  );
};

export default ListInput;
