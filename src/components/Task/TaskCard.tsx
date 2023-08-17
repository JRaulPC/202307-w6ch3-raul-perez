import { useDispatch } from "react-redux";
import { deleteTaskActionCreator } from "../../store/tasks/tasks";
import { Task } from "../../types";
import "./TaskCard.css";
interface TaskComponentProps {
  task: Task;
}

const TaskCard = ({
  task: { id, name },
}: TaskComponentProps): React.ReactElement => {
  const dispatch = useDispatch();

  const deleteTask = (id: number) => {
    dispatch(deleteTaskActionCreator(id));
  };

  return (
    <article className="task">
      <h2 className="task__title">{name}</h2>
      <button>Done</button>
      <button key={id} onClick={() => deleteTask(id)}>
        Delete
      </button>
    </article>
  );
};

export default TaskCard;
