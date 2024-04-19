
import styles from './Checkbox.module.css'; 

const Checkbox = ({ task, toglleTask }) => {
  return (
    <input
      className={styles.check}
      type="checkbox"
      checked={task.state}
      onChange={() => toglleTask(task)}
    />
  );
};

export default Checkbox;