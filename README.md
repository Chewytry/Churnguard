# Churnguard - DSA3101-2320-Ateam Predictive Analysis for Customer Churn
## Start up
To get started,

1. Ensure that you have docker installed and have opened up docker

2. Clone the repository from our GitHub page to your local machine. Use the following command in your terminal or command prompt:
```
git clone "https://github.com/joytsy/DSA3101-2320-Ateam.git"
```
3. Create a .env file under the backend folder, and have the following information:
```
API_KEY=
GXS_COLLECTION_ID = 
GXS_CHAT_ID=
RECOMMENDATION_COLLECTION_ID=
RECOMMENDATION_CHAT_ID=
CRM_PLAYBOOK_COLLECTION_ID=
CRM_PLAYBOOK_CHAT_ID=
````

4. Build the application Docker Image
```
docker-compose build 
```

5. Run the application
```
docker compose up -d
```

6. You should have 3 containers up and running:

    1. web - This will contain the flask api that connects the database and the react website. (Served on port 5001)
    2. mongo - This will contain the database with the necessary information about the customers. (Served on port 27017)
    3. app - This will be hosting our react frontend website. (Served on port 3000)


7. Access our web application on a web browser
```
http://localhost:3000
```
8. Sign up for an account with a unique username and password, then login to Churnguard


<!-- 3. Try Endpoints
### 1. /test (GET)
Calling this should return you 200 to check if the Flask endpoint is running

### 2. /data (GET)
Calling this should return you the data of the customers -->


