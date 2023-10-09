import { FC, useEffect, useState } from "react";
import axios from "axios";

import TodoList from "./components/TodoList";

const App: FC = () => {
  const [list, setList] = useState<[]>([]);

  const getListData = async () => {
    const { data } = await axios.get("/list");
    setList(data.list);
  };

  useEffect(() => {
    getListData();
  }, []);

  return <TodoList data={list}></TodoList>;
};

export default App;
