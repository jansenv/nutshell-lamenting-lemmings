import { LoginForm } from "./users/LoginForm.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getEvents } from "./events/EventDataProvider.js";
import initializeAddEventsButton from "./dialogs/Dialog.js";
import { AddEventForm } from "./events/EventForm.js";
import EventList from "./events/EventList.js";


getUsers()
.then(LoginForm)
.then(getEvents)
.then(AddEventForm)
.then(EventList)
.then(initializeAddEventsButton)

