class Todo {
  id:string;
  name:string;
  deadline:Date;
  isDone:boolean;
  
  constructor(id:string, name:string, deadline:Date, isDone:boolean) {
    this.id = id;
    this.name = name;
    this.deadline = deadline;
    this.isDone = isDone;
  }
}

export default Todo;