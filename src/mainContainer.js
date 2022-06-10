import * as React from "react";
import { TodoItem } from "./TodoItem";
import { InputForm } from "./InputForm";

function MainContainer() {
  const [todo, setTodo] = React.useState(() => {
    const localItem = window.localStorage.getItem("todo");
    return localItem !== null ? JSON.parse(localItem) : [];
  });

  function handleChecked(id) {
    const temp = [...todo];
    const index = temp.findIndex((x) => x.id === id);
    temp[index].checked = !temp[index].checked;
    setTodo(temp);
  }

  const complete = todo.filter((item) => {
    return item.checked === true;
  });

  const incomplete = todo.filter((item) => {
    return item.checked === false;
  });

  function handleClick(id) {
    const deleteItem = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(deleteItem);
  }

  React.useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <InputForm todo={todo} setTodo={setTodo} />
      <TodoItem
        todo={incomplete}
        onChecked={handleChecked}
        onDelete={handleClick}
      />
      <br />
      -------------------------------------------------
      <br />
      <br />
      <TodoItem
        todo={complete}
        onChecked={handleChecked}
        onDelete={handleClick}
      />
    </div>
  );
}

export { MainContainer };
