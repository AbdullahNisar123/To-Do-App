"use client";
import { useEffect, useState } from "react";
import style from "./Todo.module.css";

type TodoItem = {
  title: string;
  description: string;
};

export default function Todo() {
  const [listTodo, setListTodo] = useState<TodoItem[]>([]); 
  const [title, setTitle] = useState<string>(""); 
  const [description, setDescription] = useState<string>(""); 

  useEffect(() => {
    console.log(listTodo);
  }, [listTodo]);

  const addList = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill in both Title and Description.");
      return;
    }
    setListTodo([...listTodo, { title, description }]); 
    setTitle("");
    setDescription("");
  };

  const deleteItem = (index: number) => { 
    const updatedList = listTodo.filter((_, i) => i !== index);
    setListTodo(updatedList);
  };

  return (
    <div className={style.main_div}>
      <div className={style.container}>
        <h1>Todo App</h1>
        <div className={style.input_div}>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter Description"
            spellCheck="false"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button onClick={addList}>Add Todo</button>
        <div className={style.table_div}>
          <table>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {listTodo.length === 0 ? (
                <tr>
                  <td colSpan= {3} style={{ textAlign: "center" }}>
                    No todos added yet!
                  </td>
                </tr>
              ) : (
                listTodo.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <button onClick={() => deleteItem(index)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
