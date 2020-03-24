This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />

or access the demo at [https://babe124578.github.io/social-dashboard](https://babe124578.github.io/social-dashboard) to view the github page site.

## Project description

This project show the social dashboard dataset form Wisesight (Thailand) Co., Ltd. and for career application in Wisesight (Thailand) Co., Ltd.<br />

* This show 5 parts of 5 topics
    1. Number of daily messages         bottom-center of the site page
    2. Top 10 accounts by messages      bottom-right of the site page
    3. Top 10 messages by engagements   top-left of the site page
    4. Word Clouds                      top-right of the site page
    5. Hashtag Clouds                   top-center of the site page

### Front end
I host frontend on github pages using github action to auto deploy when I commit and put source code in github.
To run youcan either use npm install then npm start from source code root directory or access github pages site.

### Backend
I host each backend topics as API in Amazon Elastic Beanstalk, each API for 1 EC2 instance.

*Note: The backend section cannot run because it need accesskey and secret to access Amazon S3 service.*

