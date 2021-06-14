## Introduction:

Believe it or not, Antra-React is a growing division within Antra Inc that is looking for fullstack front-end developers like yourself to help it scale to a be a billion dollar revenue division.

This code challenge is meant to mimic the type work we do each day as front-end/fullstack developers in the Antra-React division. Everyday, we ask developers such as yourself to take ownership of the implementation and management of front-end features. This requires understanding of front-end architecture, data models, how-the-feature-works-end-2-end, in addition to writing the feature in html/css via React or other technologies.

Through this challenge, we are looking for signals that indicate that you would be able to handle the unique and interesting engineering challenges we have that take more than just writing of front-end code to fit a UI mock.

Our techstack is React, Redux, Node, Express (microservice layer). We don’t expect mastery - we prefer fullstack understanding and the ability to quickly learn what you don’t know.

---

## Instructions:

- Fork the code challenge repo to your personal Github account
- Once you are complete with the tasks of this challenge , push the code to your repo and send the link to Patrick with direct message using Slack. (please submit it be before 6pm est today)
- Here are the tasks to complete using the challenge repo:

1. Review the project to undertand the current project's code, logic, and dependencies.

2. Setup your developement env for the server and create the `dev:server` script in package.json (You can use nodemon and any thing that help you to write better code.) // Once you have done this part, make a commit called "server env setup".

3. Modify the GET `/hobbies` endpoint API so that it should return a JSON (an array of hobbies without duplicate value).
   // Once you have done this part, make a commit called "finished hobbies API".

4. Modify the GET `/users/age` endpoint API so that the _hobbyToLookup_ value in the function _getListOfAgesOfUsersWithHandler_ can be variably specified by the front-end application calling the endpoint and not hardcoded as 'pc game' like it currently is. / Once you have done this part, make a commit called "finished age API".

5. Setup your developement env for the client side and create the dev:client script in package.json that script should start the client development server to show UI page (You can use webpack,babel and any thing else that help you to set up the React developement env, and you can put all your client side code under `src/client`) // Once you have done this part, make a commit called "client env setup".

6. Implement the UI design mocks in the PDF in this repo. Use your choice of front-end technology(For the CORS issue, you can either use Proxy on the client side Or `cors` lib on the express side). You DO NOT have to follow the look or layout of the UI components. You MUST have the functionality shown in the mocks. Make the UI look nice :) We used Material-UI in the mocks but you can use whatever else. // Once you have done this part, make a commit called "finished UI".

When you are done, the hiring team should be able to get your code up and running by these 3 commands:

- git clone your completed code challenge repo and cd into the directory
- then run -> npm install
- then run -> npm dev:server
- then run -> npm dev:client

---

## Final Comments

We know that you may have questions and typically, at work, those questions are resolved when receiving mocks or during sprint-planning. But since this is an evaluation, make your best guess to unblock yourself and keep on moving. Use comments in code if needed to convey your thoughts. In our division, this type of problem comes up every day and you must be able to make good judgements and be able to proceed even with the lack of clarity.

Also… fix any bugs you find along the way. Not sure if we left some in there just like in real life :P

Good luck! We look forward to reading your implementation.
