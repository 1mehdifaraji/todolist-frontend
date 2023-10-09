import React, { FC, useState } from "react";

import { ListDisplay, ListInput } from ".";

const TodoList: FC<any> = ({ data }) => {
  const [state, setState] = useState({
    items: data,
    nextItem: "",
  });

  const itemAdder = () => {
    if (state.nextItem) {
      setState((prevState) => ({
        nextItem: "",
        items: prevState.items?.concat({
          description: state.nextItem,
          isCompleted: false,
        }),
      }));
    }
  };

  const itemRemover = (removeIndex: any) => {
    //todo remove item by index from list
  };

  const itemCompleter = (event: any, indexToComplete: any) => {
    function completeItem(myarray: any, indexToComplete: any) {
      return myarray.map(function (elem: any, index: any) {
        if (index === indexToComplete) elem.isCompleted = !elem.isCompleted;
        return elem;
      });
    }
    const editedItems = completeItem(state.items, indexToComplete);

    setState((prevState) => ({
      nextItem: prevState.nextItem,
      items: [...editedItems],
    }));
  };

  const itemInputChange = (e: any) => {
    setState((prevState) => ({
      nextItem: e.target.value,
      items: prevState.items,
    }));
  };

  return (
    <div className="listContainer">
      <ListInput
        itemAdder={itemAdder}
        getInputValue={itemInputChange}
        nextItem={state.nextItem}
      />
      <ListDisplay
        listItems={state.items}
        itemRemover={itemRemover}
        itemCompleter={itemCompleter}
      />
    </div>
  );
};

export default TodoList;
