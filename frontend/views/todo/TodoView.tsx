import {useEffect, useState} from "react";
import {Button, Checkbox, TextField} from "@hilla/react-components";
import Todo from "Frontend/generated/com/example/application/Todo";
import {TextFieldChangeEvent} from "@vaadin/text-field";
import {TodoEndpoint} from "Frontend/generated/endpoints";

export default function TodoView() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    TodoEndpoint.findAll().then(setTodos)
  }, []);

  async function add() {
    setTodos([...todos, await TodoEndpoint.add(task)]);
    setTask('');
  }

  function updateTask(e: TextFieldChangeEvent) {
    setTask(e.target.value);
  }

  async function updateStatus(todo: Todo, status: boolean) {

    const saved = await TodoEndpoint.save(({
      ...todo,
      done: status
    }));

    if (saved) {
      setTodos(todos.map(t => t.id === saved.id ? saved : t));
    }
  }

  return (
    <div className="p-m">
      <div className="flex gap-m items-baseline">
        <TextField label="Task" value={task} onChange={updateTask}/>
        <Button onClick={add}>Add</Button>
      </div>
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <Checkbox
              checked={todo.done}
              onCheckedChanged={({detail: {value}}) => updateStatus(todo, value)}>
              {todo.task}
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  );
}
