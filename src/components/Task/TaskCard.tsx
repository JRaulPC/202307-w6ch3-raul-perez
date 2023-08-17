import { Task } from "../../types";
import "./TaskCard.css";
interface TaskComponentProps {
  task: Task;
}

const TaskCard = ({
  task: { name },
}: TaskComponentProps): React.ReactElement => {
  return (
    <article className="task">
      <h2 className="task__title">{name}</h2>
      <button>Done</button>
      <button>Delete</button>
    </article>
  );
};

export default TaskCard;
