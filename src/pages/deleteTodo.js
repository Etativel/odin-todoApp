import currentPage from "./currentPage";
import loadAllTask from "./loadAllTask";
import loadTodo from "./loadTodo";

function deleteTodo(id, storageKey) {
  let todoObject;
  if (["All", "upcoming", "today"].includes(currentPage.getCurrentPage())) {
    console.log("on all");
    todoObject = JSON.parse(localStorage.getItem(storageKey));
  } else {
    todoObject = JSON.parse(localStorage.getItem(currentPage.getCurrentPage()));
  }
  if (!todoObject) {
    console.log("there is no todo in the storage");
    return;
  }
  const filterTodo = todoObject.filter((todo) => todo.id !== id);
  localStorage.setItem(storageKey, JSON.stringify(filterTodo));
  loadAllTask();
  loadTodo(currentPage.getCurrentPage());
}
export default deleteTodo;
