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
      <div className="task__header">
        <h2 className="task__title">{name}</h2>
        {isDone && <span>✅</span>}
      </div>
      <button className="done-button" key={id} onClick={() => toogleTask(id)}>
        Done
      </button>
      <button className="delete-button" key={id} onClick={() => deleteTask(id)}>
        Delete
      </button>
    </article>
  );
};

export default TaskCard;
