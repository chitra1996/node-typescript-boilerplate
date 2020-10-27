# GO HIGH LEVEL ASSIGNMENT
This is a a project built to booking appointments and fetching free slots.

## Purpose
build a calendar appointment system where users can see free slots of Dr. John and they can book for whatever time period when Dr. John is
available.

## Tech-stack
- Typescript
- Node
- Firestore 

## Installation 
1. install the dependencies using the command: `yarn`
2. Rename the file `.env.sample` to `.env` and input the values as per your requirements
3. Transpile the typescript code using the following command: `yarn build`
4. Start the app using `yarn start`
5. Or you can simply start the app using the following command in dev mode: `yarn dev`
6. After that, go to: `http://localhost:<your_port_number>/healthz` to check if the server is running
7. If the app is up and running, run the APIs on Postman


## Available scripts
- `build` - Transpile TypeScript to ES6,
- `dev` - To run the app without transpile to ES6,
- `start` - Run the transpiled app
- `format` - Format the whole project according the set config

## List of APIs

#### GET FREE SLOTS
URL: `<base_url>/v1/appointment/get-free-slots`

Purpose: Fetch free slots in the provided timezone

Request Body: 
```javascript
{ 
    method: 'POST',
    url: '<base_url>/v1/appointment/get-free-slots',
    headers: { 
        'Content-Type': 'application/json' 
    },
    body: { 
        date: string_in_format [YYYY-MM-DD], // 2020-10-22
        timezone: string, // Asia/Shanghai
    },
    json: true 
}
```

Response Body:
```javascript
[
    {
        "start_time": "2020-10-22, 14:30:00",
        "end_time": "2020-10-22, 15:30:00",
        "available": true
    },
    {
        "start_time": "2020-10-22, 15:30:00",
        "end_time": "2020-10-22, 16:30:00",
        "available": false
    },
    ...
]
```

#### CREATE NEW EVENT
URL: `<base_url>/v1/appointment/create-event`

Purpose: Create a new event for the given data and timezone

Request Body: 
```javascript
{ 
    method: 'POST',
    url: '<base_url>/v1/appointment/create-event',
    headers: { 
        'Content-Type': 'application/json' 
    },
    body: { 
        slot_start: string_in_format [YYYY-MM-DD, hh:mm:ss], // '2020-10-22, 12:30:00',
        duration: integer [time in minutes], // 30
        timezone: string, // Asia/Shanghai
    },
    json: true 
}
```

Response Body:
FAILURE:
```javascript
status: 422
{
    "message": "Could not create event. Please try again later",
    "error": "Slot unavailable"
}
```

SUCCESS:
```javascript
status: 200
{
    "message": "Event has been created successfully",
    "success": true
}
```

#### GET ALL EVENTS
URL: `<base_url>/v1/appointment/get-events`

Purpose: Get the list of all the events. The timestamps are going to be in UTC format

Request Body: 
```javascript
{ 
    method: 'POST',
    url: '<base_url>/v1/appointment/get-events',
    headers: { 
        'Content-Type': 'application/json' 
    },
    body: { 
        start_date: string_in_format [YYYY-MM-DD], // '2020-10-21', 
        end_date: string_in_format [YYYY-MM-DD], // '2020-10-22' 
    },
    json: true 
}
```

Response Body:
```javascript
[
    {
        "_id": "8869237b-bc82-428f-bdcb-ef29ba7bc7cd",
        "doctor_name": "Dr. john",
        "slot_start": "2020-10-21, 06:30:00",
        "slot_end": "2020-10-21, 07:30:00"
    },
    {
        "_id": "bdc9dccf-c84f-46e5-a515-4831b78eba5a",
        "doctor_name": "Dr. john",
        "slot_start": "2020-10-21, 07:30:00",
        "slot_end": "2020-10-21, 08:30:00"
    },
    ...
]
```
