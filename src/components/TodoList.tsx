import React, { Dispatch, FC, SetStateAction, useState } from "react";
import axios from "axios";

import { ErrorDisplay, ListDisplay, ListInput } from ".";

interface TodoListProps {
  data: TodoList;
  setList: Dispatch<SetStateAction<TodoList>>;
}

const TodoList: FC<TodoListProps> = ({ data, setList }) => {
  const [state, setState] = useState({
    nextItem: "",
  });

  const [err, setErr] = useState<boolean>(false);

  const itemAdder = (): void => {
    if (state.nextItem)
      axios
        .post("/list", {
          description: state.nextItem,
          isCompleted: false,
        })
        .then(({ data }) => {
          setList(data.list);
          setState({ nextItem: "" });
        })
        .catch(() => setErr(true));
  };

  const itemRemover = (description: string): void => {
    axios
      .delete(`/list/${description}`)
      .then(({ data }) => setList(data.list))
      .catch(() => setErr(true));
  };

  const itemCompleter = (description: string): void => {
    axios
      .put("/list", { description })
      .then(({ data }) => setList(data.list))
      .catch(() => setErr(true));
  };

  const itemInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setState((prevState) => ({
      nextItem: e.target.value,
    }));

  return (
    <div className="listContainer">
      <ListInput
        itemAdder={itemAdder}
        getInputValue={itemInputChange}
        nextItem={state.nextItem}
      />
      {err ? (
        <ErrorDisplay setErr={setErr} />
      ) : (
        <ListDisplay
          listItems={data}
          itemRemover={itemRemover}
          itemCompleter={itemCompleter}
        />
      )}
    </div>
  );
};

export default TodoList;
