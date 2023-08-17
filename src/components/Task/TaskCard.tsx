import { useDispatch } from "react-redux";
import {
  deleteTaskActionCreator,
  toogleTaskActionCreator,
} from "../../store/tasks/tasks";
import { Task } from "../../types";
import "./TaskCard.css";
interface TaskComponentProps {
  task: Task;
}

const TaskCard = ({
  task: { id, name, isDone },
}: TaskComponentProps): React.ReactElement => {
  const dispatch = useDispatch();

  const deleteTask = (id: number) => {
    dispatch(deleteTaskActionCreator(id));
  };

  const toogleTask = (id: number) => {
    dispatch(toogleTaskActionCreator(id));
  };

  return (
    <article className="task">
      <h2 className="task__title">
        {name} {isDone && <span>✅</span>}
      </h2>
      <button key={id} onClick={() => toogleTask(id)}>
        Done
      </button>
      <button key={id} onClick={() => deleteTask(id)}>
        Delete
      </button>
    </article>
  );
};

export default TaskCard;
