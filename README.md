<!-- PROJECT LOGO -->
<a id="readme-top"></a>
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/Chewytry/Churnguard/blob/main/frontend/churnguard/src/Components/logo.png?raw=true" alt="Churnguard Logo" width="80" height="80">
  </a>
</div>

# Churnguard - Predictive Analysis for Customer Churn

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://chew-yucai.web.app/#projects)

Churnguard aims to revolutionize how Banks in Singapore approaches customer retention and engagement by harnessing data science methodologies. Through our platform, Churnguard, the team of developers aimed to provide a user-friendly interface to access data-driven insights and recommendations, enabling proactive management of customer churn.

Data for this project is synthetic but based off real world data, any resemblance to any real data is coincidental.

### Built With

Built on a react frontend and flask serving as the backend framework, the application is easily deployed using Docker.

* [![React][React.js]][React-url]
* [![Flask][Flask]][Flask-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Ensure that you have docker installed and have opened up [Docker](https://www.docker.com/products/docker-desktop/)

### Installation

1. Clone the repository from our GitHub page to your local machine. Use the following command in your terminal or command prompt:
```
git clone "https://github.com/Chewytry/Churnguard.git"
```
2. Create a .env file under the backend folder, and have the following information:
```
API_KEY=
GXS_COLLECTION_ID = 
GXS_CHAT_ID=
RECOMMENDATION_COLLECTION_ID=
RECOMMENDATION_CHAT_ID=
CRM_PLAYBOOK_COLLECTION_ID=
CRM_PLAYBOOK_CHAT_ID=
```
Note: this is to serve the LLM recommending actions for customers, this service is currently down.

3. Build the application Docker Image
```
docker-compose build 
```

4. Run the application
```
docker compose up -d
```

5. You should have 3 containers up and running:

    1. web - This will contain the flask api that connects the database and the react website. (Served on port 5001)
    2. mongo - This will contain the database with the necessary information about the customers. (Served on port 27017)
    3. app - This will be hosting our react frontend website. (Served on port 3000)


6. Access our web application on a web browser
```
http://localhost:3000
```
7. Sign up for an account with a unique username and password, then login to Churnguard (Error 409 refers to taken usernames)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

There are several components Churnguard aims to deliver in:

1) An overview of all the clients' data, presented as a dashboard

    <img src="https://github.com/Chewytry/Churnguard/blob/main/wiki%20images/dashboard.png?raw=true" alt="Churnguard Logo" width="640" height="320">

2) Zooming into specific client's data
3) Predictive analytics for customer churn for the user 
4) Recommending steps for Customer Relations Management (CRM) team to take 

For a more in depth look into how to use Churnguard, check out the [wiki](https://github.com/Chewytry/Churnguard/wiki) or for a deep dive into how the project came about, we have a [report](https://chew-yucai.web.app/assets/files/ChurnGuard%20Report.pdf) too.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thank you to the academic staff at National University of Singapore ([NUS](https://nus.edu.sg/)) for seeing this project through and for connecting us with the partnering organisation [GXS](https://www.gxs.com.sg/).

And of course, this project would have been impossible without the following people :D
### My Team:
<a href="https://github.com/Chewytry/Churnguard/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Chewytry/Churnguard" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: https://chew-yucai.web.app/assets/project_images/churnguard.png
[Flask]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/