import { useAppSelector } from "../../store";
import Task from "../Task/TaskCard";

const TasksList = (): React.ReactElement => {
  const tasks = useAppSelector((state) => state.tasksState.tasks);

  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
