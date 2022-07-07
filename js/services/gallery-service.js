"use strict";

var gProject;
createProject();

function createProject() {
  gProject = [
    createProj(
      "115",
      "Trellox",
      "Vue & Node",
      "End-to-End",
      "Trellox is an App inspired by Trello. The app was built with the latest web technologies such as Node.js, Vue.js, Vuex, MongoDB, and Socket.IO. Allows the user to create a board for project management, business, design, education, marketing, and more",
      "https://github.com/shaniKupiec/Trellox--Frontend",
      "https://trelloxx.herokuapp.com/#/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177135/github-gallery/1650551308518_bpzid6.jpg",
      "Mar - 2022",
      "Vue.js, Vuex, Axios, Chart.js, Socket.io, SCSS, Mongodb, Express, Cors, Bcrypt, REST API",
      [
        "Login, register and logout",
        "Login with Google",
        "Board CRUD, List CRUD, Task CRUD",
        "Search, Filter",
        "User can add to a card: members, labels, checklists, due-date, attachments, cover and stickers",
        "More actions with card: make copy, move to another list or board, watch, share and record a video",
        "Dashboard with information about the board",
        "Searching photos using unsplash",
        "Drag and drop list and task",
        "Using reusable component for the popup modal",
        "Creating directive for closing modals when the area outside the modal is clicked"
      ]
    ),
    createProj(
      "114",
      "Cyptonites",
      "Angular & Node",
      "End-to-End",
      "An app that allows transfer of crypto coins to users. Using Node.js, Angular, and TypeScript",
      "https://github.com/shaniKupiec/Cyptonites",
      "https://cryptonites.herokuapp.com/#/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177401/github-gallery/2a41ee5f-2d01-4af0-b7db-9a9a0011f80d_qwwwjt.jpg",
      "Apr - 2022",
      "Angular Typescript, SCSS, Ngx Charts",
      [
        "Login, register and logout",
        "Current Value of different crypto coins",
        "Chart with exchange history",
        "Chart with bitcoin market price",
        "Chart with Transactions History By Coin Type- week/month/year",
        "Allows transfer coins to saved contact",
        "Watch preview transactions",
        "Full CRUD in contact list",
      ]
    ),
    createProj(
      "113",
      "Zone Todo",
      "React & AWS",
      "End-to-End",
      "Zone Todo is a mobile design app that allows you to manage your daily tasks",
      "https://github.com/shaniKupiec/Zone-Todo",
      "",
      "https://res.cloudinary.com/trellox/image/upload/v1656951743/github-gallery/Presentation1_wrslqv.png",
      "June - 2022",
      "React.js, Redux, Graphql, AWS Services: AppSync, Cognito, Amplify, DynamoDB, SCSS",
      ["Login, register and logout", "Task CRUD", "When where is a city name in a Todo- it displays the weather in that city"]
    ),
    createProj(
      "112",
      "Toy App",
      "Vue & Node",
      "End-to-End",
      "Advanced Toy Store with Google Maps and Socket.IO",
      "https://github.com/shaniKupiec/Mister-Toy-Frontend",
      "",
      "https://res.cloudinary.com/trellox/image/upload/v1652188790/github-gallery/c076be98-8fa4-4a91-8e56-661493c55a26_ksiovt.jpg",
      "Mar - 2022",
      "Vue.js, Vuex, Axios, Element-plus, Socket.io, SCSS, Mongodb, Express, Cors, Bcrypt, REST API",
      ["Toys CRUD", "Filter", "Sort", "Search", "Dashboard with Charts", "Map with location of stores", "Login, signup and logout", "Chat rooms by topic"]
    ),
    createProj(
      "111",
      "Google App",
      "Vue",
      "Front-End",
      "App that combines 2 of google apps- google notes and gmail",
      "https://github.com/shaniKupiec/Google-App",
      "https://shanikupiec.github.io/Google-App/#/note",
      "https://res.cloudinary.com/trellox/image/upload/v1652187056/github-gallery/91375c87-bfd6-4528-a13c-32a9c080de34_ijuylf.jpg",
      "Mar - 2022",
      "Vue.js, Local storage",
      ["Notes CRUD", "Supports note with: image, video, sound, and list", "Supports pining note", "Search notes", "Send a mail", "Supports unread mail and moving to trash", "Allow saving mail as note and sending a note as a mail"]
    ),
    createProj(
      "110",
      "Meme Generator",
      "Vanilla",
      "Front-End",
      "An image maker that lets you add custom resizable text, images, and much more",
      "https://github.com/shaniKupiec/Meme-Generator",
      "https://shanikupiec.github.io/Meme-Generator/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177071/github-gallery/5954264d-3be6-4c42-abdf-22471e937928_ak3qhl.jpg",
      "Feb - 2022",
      "Javascript, Css, HTML, Local storage",
      [
        "Filter", 
        "Search", 
        "Generate random meme", 
        "Meme CRUD", 
        "Edit meme: font, font size, font color, outline color, drag and drop, font location and stickers", 
        "Saving meme in local storage", 
        "Sharing meme on Facebook", 
        "Download meme"
      ]
    ),
    createProj(
      "109",
      "Shani's Books",
      "Vue",
      "Front-End",
      "Colorful bookshop that allows the user to watch the book details. More features: filtering, adding new books to the store using external api",
      "https://github.com/shaniKupiec/Shani-s-Books",
      "https://shanikupiec.github.io/Shani-s-Books/#/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177075/github-gallery/e34e7c95-f846-4919-8e96-fc2f70913346_aqn0pc.jpg",
      "Feb - 2022",
      "Vue.js, Local storage",
      ["Using reusable components such as long text", "Filter", "Search", "Books CRUD", "Adding new books to the store using external api", "User message after adding and removing reviews"]
    ),
    createProj(
      "108",
      "Name App",
      "React ts & Node",
      "Learning project",
      "Allows getting data(probability, count and gender) about name",
      "https://github.com/shaniKupiec/Name-App-Frontend",
      "",
      "https://res.cloudinary.com/trellox/image/upload/v1656946328/github-gallery/Presentation1_s16ulr.jpg",
      "June - 2022",
      "React Typescript, SCSS, Axios, Chart.js, HTML",
      ["Show result of last search in the new name page", "Showing history of all names searched in the past", "Option to clear the history list"]
    ),
    createProj(
      "107",
      "Px Prefect Blogin",
      "Vanilla",
      "Learning project",
      "design to live page",
      "https://github.com/shaniKupiec/px-prefect-Blogin",
      "https://shanikupiec.github.io/px-prefect-Blogin/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177076/github-gallery/bb99a8ee-1aea-4bef-82be-64ad79325c9a_mysmlz.jpg",
      "Feb - 2022",
      "Javascript, Css, HTML",
      ["Includes hover effects"]
    ),
    createProj(
      "106",
      "Minesweeper",
      "Vanilla",
      "Learning project",
      'A single-player puzzle the goal is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them',
      "https://github.com/shaniKupiec/Minesweeper/",
      "https://shanikupiec.github.io/Minesweeper/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177131/github-gallery/1650974170498_anpyp3.jpg",
      "Jan - 2022",
      "Javascript, Css, HTML, Local storage",
      [
        "Allows to choose size of board",
        "Lives",
        "Hint- when clicking revels for 1 second 9 closed cells",
        "Safe click- shows the user a random place where it is safe to click(not a mine)",
        "Timer",
        "Option to manually create a board by placing the mines where the users wants",
      ]
    ),
    createProj(
      "105",
      "Pac Man",
      "Vanilla",
      "Learning project",
      "The player controls a character through an enclosed maze, trying to collect all coins without the ghosts(shaped like '@') killing it",
      "https://github.com/shaniKupiec/pac-man",
      "https://shanikupiec.github.io/pac-man/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177039/github-gallery/847ca411-1a60-4d48-892a-689560a38af6_sajjeq.jpg",
      "Jan - 2022",
      "Javascript, Css, HTML",
      ["Sound", "Restart option and the end of the game", "Live count of coins that were collected", "Moving ghosts", "Super mood- the player can temporarily eat the ghosts"]
    ),
    createProj(
      "104",
      "Eat the ball",
      "Vanilla",
      "Learning project",
      "The player controls a character through a board. To win the game the player needs to eat all the balls in the board",
      "https://github.com/shaniKupiec/eat-the-ball",
      "https://shanikupiec.github.io/eat-the-ball/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177079/github-gallery/fbb51fea-6066-4da3-8566-08135854d137_dtzp0m.jpg",
      "Jan - 2022",
      "Javascript, Css, HTML",
      [
        "Adding new ball in a random free place every 2 seconds",
        "Sticky mushrooms that unable the users movement for 3 seconds",
        "4 connections outside of the board that allows the player to cross the board from one side to another in one step",
        "Restart option and the end of the game",
        "Live count of balls that were collected",
      ]
    ),
    createProj(
      "103",
      "Guess Who jQuery",
      "jQuery",
      "Learning project",
      "A guess who game base on a binary tree. The user needs to think of a character and the application need to guess how it is",
      "https://github.com/shaniKupiec/guess-who-jQuery/tree/main",
      "https://shanikupiec.github.io/guess-who-jQuery/",
      "https://res.cloudinary.com/trellox/image/upload/v1652187051/github-gallery/a03e93fd-cbd8-4841-b09e-6aa8f29eac39_bd4h0n.jpg",
      "Feb - 2022",
      "jQuery, Javascript, Css, HTML, Local storage",
      ["Allows adding data to the tree when the application couldn't guess the user's character"]
    ),
    createProj(
      "102",
      "Chess Board",
      "Vanilla",
      "Learning project",
      "A chess board that show possible movement for each piece",
      "https://github.com/shaniKupiec/chess-board",
      "https://shanikupiec.github.io/chess-board/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177068/github-gallery/9d3faab1-d1a2-44d9-ad60-b3a7a6ee0473_qcxyrn.jpg",
      "Jan - 2022",
      "Javascript, Css, HTML",
      ["Allows restart game"]
    ),
    createProj(
      "101",
      "My Todos",
      "Vanilla",
      "Learning project",
      "Application for tasks management",
      "https://github.com/shaniKupiec/my-todos",
      "https://shanikupiec.github.io/my-todos/",
      "https://res.cloudinary.com/trellox/image/upload/v1652187048/github-gallery/f7511721-72c2-47a0-9cbd-5fc4b5a7772b_t29jim.jpg",
      "Jan - 2022",
      "Javascript, Css, HTML, Local storage",
      ["Todos CRUD", "Filtering", "Sorting", "Calculate active todos"]
    ),
    createProj(
      "100",
      "Book Shop",
      "Vanilla",
      "Learning project",
      "Book Shop that allows the user to read, create, edit and delete books",
      "https://github.com/shaniKupiec/book-shop",
      "https://shanikupiec.github.io/book-shop/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177073/github-gallery/13189420-50fd-4824-9737-240cbd7fce8c_eeoy5b.jpg",
      "Feb - 2022",
      "Javascript, Css, HTML, Local storage",
      ["Books CRUD", "Paging", "I18n"]
    ),
  ];
}

function createProj(id, name, category, type, longDesc, codeUrl, siteUrl, img, publishedAt, techs, features) {
  return {
    id,
    name,
    category,
    type,
    longDesc,
    img,
    codeUrl,
    siteUrl,
    publishedAt,
    techs,
    features,
  };
}

function getProject() {
  return gProject;
}

function getProjectById(projId) {
  return gProject.find((proj) => proj.id === projId);
}
