import { FC, useEffect, useState } from "react";
import axios from "axios";

import { TodoList } from "./components";

const App: FC = () => {
  const [list, setList] = useState<TodoList | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getListData = async () => {
    const { data } = await axios.get("/list");
    setList(data.list);
    setLoading(false);
  };

  useEffect(() => {
    getListData();
  }, []);

  if (loading) return <div className="listContainer">Loading...</div>;
  return <TodoList setList={setList} data={list} />;
};

export default App;
