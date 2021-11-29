// export interface TodoResponse {
//   items: Todo[]
// }

interface TodoResponse {
  id: number
  title: string
  userId: number
  completed: boolean
}

function getTodosByCount(count: number) {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
      .then<TodoResponse>((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
}


document.addEventListener('DOMContentLoaded', (event) => {
  getTodosByCount(5)
    .then((todos) => {
      todos.map(item => console.log(
        item.title,
        item.userId,
        item.completed,
      ))
    });
});

