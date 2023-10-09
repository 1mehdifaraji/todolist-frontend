import { FC, useEffect, useState } from "react";
import axios from "axios";

import { TodoList } from "./components";

const App: FC = () => {
  const [list, setList] = useState<TodoList | []>([]);

  const getListData = async () => {
    const { data } = await axios.get("/list");
    setList(data.list);
  };

  useEffect(() => {
    getListData();
  }, []);

  return <TodoList data={list} />;
};

export default App;
