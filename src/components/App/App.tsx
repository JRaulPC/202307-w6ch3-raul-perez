import { useEffect } from "react";
import fakeTasks from "../../data/tasksData";
import { useAppDispatch } from "../../store";
import { loadTaskActionCreator } from "../../store/tasks/tasks";
import TasksList from "../TasksList/TasksList";
import "./App.css";
const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTaskActionCreator(fakeTasks));
  });

  return (
    <div className="container">
      <h1 className="container__title">Tasks to do:</h1>
      <TasksList />
    </div>
  );
};

export default App;
