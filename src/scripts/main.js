import { LoginForm } from "./users/LoginForm.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getEvents } from "./events/EventDataProvider.js";
import { getTasks } from "./tasks/TaskDataProvider.js";
import { getMessages } from "./messages/MessagesDataProvider.js";
import { getFriends } from "./friends/FriendsDataProvider.js";
import { addFriend } from "./friends/AddOrRemoveFriend.js";
import { getNews } from "./news/NewsDataProvider.js";
import { AddEventForm } from "./events/EventForm.js"
import EventList from "./events/EventList.js"
import { AddTaskForm } from "./tasks/TaskForm.js"
import { AddMessageForm } from "./messages/MessageForm.js"
import { AddNewsForm } from "./news/NewsForm.js"
import { MessageList } from "./messages/MessageList.js"
import TaskList from "./tasks/TaskList.js"
import NewsList from "./news/NewsList.js"
import { FriendList } from "./friends/FriendList.js"
import { Home } from "./homeNav/home.js";
import { SearchFriendsList } from "./friends/FriendSearchList.js";


// Renders all html for user
const RenderAtLogin=()=>{
  AddEventForm()
  AddTaskForm()
  AddMessageForm()
  AddNewsForm()
  EventList()
  MessageList()
  TaskList()
  NewsList()
  FriendList()
  SearchFriendsList()
  
  }

getUsers()
.then(LoginForm)
.then(getEvents)
.then(getMessages)
.then(getTasks)
.then(getFriends)
.then(getNews)
.then(addFriend)
.then(RenderAtLogin)
.then(Home)

