import { LoginForm } from "./users/LoginForm.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getEvents } from "./events/EventDataProvider.js";
import initializeAddEventsButton from "./dialogs/Dialog.js";
import { AddEventForm } from "./events/EventForm.js";
import EventList from "./events/EventList.js";
import { getTasks } from "./tasks/TaskDataProvider.js";
import { AddTaskForm } from "./tasks/TaskForm.js";
import TaskList from "./tasks/TaskList.js";
import { getMessages } from "./messages/MessagesDataProvider.js";
import { MessageList } from "./messages/MessageList.js"
import { AddMessageForm } from "./messages/MessageForm.js";

getUsers()
.then(LoginForm)
.then(getEvents)
.then(getMessages)
.then(getTasks)
.then(AddEventForm)
.then(EventList)
.then(AddTaskForm)
.then(TaskList)
.then(AddMessageForm)
.then(MessageList)











.then(initializeAddEventsButton)
