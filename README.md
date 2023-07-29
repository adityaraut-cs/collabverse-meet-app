# collabverse-meet-app
CollabVerse-Meet: My Node.js &amp; React video conferencing project aims to replicate Google Meet with MongoDB for data storage and WebRTC for real-time communication. Hoping to learn and have fun throughout this project as I start my journey of growth and creativity!  🚀

## System Design of CollabVerse-Meet 
CollabVerse follows a microservices architecture, with separate services for different functionalities. The architecture consists of the following components:
```
                         +-----------------+
                         | Frontend App    |
                         +-----------------+
                                  |
                                  v
                         +-----------------+
                         | API Gateway     |
                         | (Nginx)         |
                         +-----------------+
                                  |
            +-------------------------------------------------+
            |                      |                          |
            v                      v                          v
 +-----------------+  +-----------------+  +-----------------+  +-----------------+
 | User Auth       |  | Video Conferenc |  | Chat            |  | Dashboard       |
 | Microservice    |  | Microservice    |  | Microservice    |  | Microservice    |
 +-----------------+  +-----------------+  +-----------------+  +-----------------+
        |                   |                       ^
        v                   v                       |
 +-----------------+    +-----------------+    +-----------------+
 | MongoDB         |    | MongoDB         |    | MongoDB         |
 | (User Auth DB)  |    | (Video Conf DB) |    | (Chat DB)       |
 +-----------------+    +-----------------+    +-----------------+

                                  |
                                  v
                         +-----------------+
                         | Consul          |
                         | (Service Discov)|
                         +-----------------+
```

**Frontend Application :**
 - Single Frontend Application
 - Connected to: API Gateway (Nginx)

**API Gateway (Nginx) :**
 - Routes requests to the appropriate microservices based on the request URL.
 - Connected to: User Authentication Microservice, Video Conferencing Microservice, Chat Microservice, Dashboard Microservice

**User Authentication Microservice :**
 - Manages user registration, login, and token generation.
 - Stores user data in its own MongoDB collection.
 - Connected to: API Gateway (Nginx)

**Video Conferencing Microservice :**
 - Handles video conferencing functionalities using WebRTC.
 - Manages the creation and management of video conference rooms.
 - Stores video conference room metadata in its own MongoDB collection.
 - Connected to: API Gateway (Nginx)

**Chat Microservice :**
 - Manages real-time chat functionalities for users.
 - Handles the creation and management of chat rooms.
 - Stores chat room data in its own MongoDB database.
 - Connected to: API Gateway (Nginx)

**Dashboard Microservice :**
 - Provides user dashboard functionalities and user-specific data.
 - Integrates with other microservices to gather information about ongoing video conferences, chat rooms, etc.
 - Acts as an gathering service to display user-related data.
 - Connected to: API Gateway (Nginx)

**Service Discovery and Registry :**
 - Consul Integration.
 - Manages service discovery and registration for microservices to find each other dynamically.



# Technologies Used
- `Node.js` and `Express` for the backend server.
- `React.js` for the frontend user interface.
- `MongoDB` for data storage and user management.
- `WebRTC` for real-time communication.

