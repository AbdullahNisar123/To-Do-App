import React from "react";

type TodoItemProps = {
  title: string;
  description: string;
  onDelete: () => void; // Function to handle delete action
};

export default function TodoList({ title, description, onDelete }: TodoItemProps) {
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button onClick={onDelete} style={{ backgroundColor: "red", color: "white" }}>
          Delete
        </button>
      </td>
    </tr>
  );
}
