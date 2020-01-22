# Nutshell: The Information Dashboard

## Instructions

1. Clone this repository
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory
1. `cd` into `api` directory
1. Run `json-server -w database.json -p 3000` in `api` directory
1. In a separate terminal, `cd` into `src` directory
1. Run local host server


Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

Our target demographic was "Parkour Enthusiasts".

## Sample Api

### Users

```
{ "id": 1, "email": "me@me.com", "password": 123, "firstName"" "Steve", "lastName": "Brownlee" }
```

### Messages

```
{ "id": 1, "userId": 1, "message": "What's up?", "timestamp: 1579312120634 }
```

### News

```
{
    "id": 1,
    "userId": 2,
    "url": "youtube.com/watch?v=QqfjiuqVrV4",
    "title": "Bill Gates jumping over a chair like a gangster",
    "synopsis": "Software developers can parkour too",
    "timestamp: 1579312120634
}
```

### Friends

```
{ "id": 1, "userId": 1, "activeUserId": 2 }
```

### Tasks

```
{ "id": 1, "userId": 3, "name": "Kick Flip", "task": "do a cool trick", "dueDate": "2020-05-15T16:00", "isCompleted": true }
```

### Events

```
{ "id": 1, "userId": 2, "name": "Party Time", "location": "Nashville", "timestamp": "2020-05-15T16:00" }
```

### Ads

```
{ "id": 1, "imgs/steve-ad.png" }
```

## Authors

* **Willy Metcalf** - (https://github.com/WilliamMetcalf-37)
* **Jansen van der Spuy** - (https://github.com/jansenv)
* **Holden Parker** - (https://github.com/holdenprkr)
* **Spencer Truett** - (https://github.com/SpencerTruett)