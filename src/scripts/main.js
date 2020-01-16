import { LoginForm } from "./users/LoginForm.js";
import { getUsers } from "./users/UsersDataProvider.js";
import TaskListComponent from "./tasks/TaskList.js";
import TaskFormComponent from "./tasks/TaskForm.js";
getUsers()
.then(LoginForm)
.then(TaskListComponent)
.then(TaskFormComponent)

