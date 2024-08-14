import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, markCompleted, editTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          markCompleted={markCompleted}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;