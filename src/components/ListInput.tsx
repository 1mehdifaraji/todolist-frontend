import { FC } from "react";

const ListInput: FC<any> = (props) => {
  return (
    <div className="ListInputUI">
      <input
        type="text"
        className="taskInput"
        placeholder="Enter a task"
        onChange={props.getInputValue}
        value={props.nextItem}
      />
      <button
        onClick={() => props.itemAdder()}
        className="taskButton fa fa-fw fa-plus"
      />
    </div>
  );
};

export default ListInput;
