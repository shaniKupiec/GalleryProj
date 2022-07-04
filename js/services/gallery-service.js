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
      "Mar - 2022"
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
      "Apr - 2022"
    ),
    createProj(
      "113",
      "Toy App",
      "Vue & Node",
      "End-to-End",
      "Toy app that allows the user to add, edit and remove toys. Built using: Vue3, Vuex, Node.js, MongoDB. More features: authentication, filter, search and sort",
      "https://github.com/shaniKupiec/Mister-Toy-Frontend",
      "",
      "https://res.cloudinary.com/trellox/image/upload/v1652188790/github-gallery/c076be98-8fa4-4a91-8e56-661493c55a26_ksiovt.jpg",
      "Mar - 2022"
    ),
    createProj(
      "112",
      "Zone Todo",
      "React & AWS",
      "End-to-End",
      "Zone Todo is a mobile app that allows you to manage your daily tasks.",
      "https://github.com/shaniKupiec/Zone-Todo",
      "",
      "https://res.cloudinary.com/trellox/image/upload/v1656951743/github-gallery/Presentation1_wrslqv.png",
      "June - 2022"
    ),
    createProj(
      "111",
      "Google App",
      "Vue",
      "Front-End",
      "App that combines 2 of google apps- google notes and gmail. Google notes- add, edit, remove notes. supports note with: image, video, sound, and list. Email- sending and receiving new mails. supports unreading, moving to trash. More features: allow saving mail as note. and sending a note as a mail",
      "https://github.com/shaniKupiec/Google-App",
      "https://shanikupiec.github.io/Google-App/#/note",
      "https://res.cloudinary.com/trellox/image/upload/v1652187056/github-gallery/91375c87-bfd6-4528-a13c-32a9c080de34_ijuylf.jpg",
      "Mar - 2022"
    ),
    createProj(
      "110",
      "Meme Generator",
      "Vanilla",
      "Front-End",
      "An image maker that lets you add custom resizable text, images, and much more to templates. More features: saving, sharing on Facebook and download",
      "https://github.com/shaniKupiec/Meme-Generator",
      "https://shanikupiec.github.io/Meme-Generator/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177071/github-gallery/5954264d-3be6-4c42-abdf-22471e937928_ak3qhl.jpg",
      "Feb - 2022"
    ),
    createProj(
      "109",
      "Shani's Books",
      "Vue",
      "Front-End",
      "Colorful bookshop that allows the user to watch the book details. The website is combined from reusable components such as: long text, adding and deleting review. More features: filtering, adding new books to the store using external api",
      "https://github.com/shaniKupiec/Shani-s-Books",
      "https://shanikupiec.github.io/Shani-s-Books/#/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177075/github-gallery/e34e7c95-f846-4919-8e96-fc2f70913346_aqn0pc.jpg",
      "Feb - 2022"
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
      "June - 2022"
    ),
    createProj(
      "107",
      "Px Prefect Blogin",
      "Vanilla",
      "Learning project",
      "",
      "https://github.com/shaniKupiec/px-prefect-Blogin",
      "https://shanikupiec.github.io/px-prefect-Blogin/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177076/github-gallery/bb99a8ee-1aea-4bef-82be-64ad79325c9a_mysmlz.jpg",
      "Feb - 2022"
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
      "Jan - 2022"
    ),
    createProj(
      "105",
      "Pac Man",
      "Vanilla",
      "Learning project",
      "The player controls a character through an enclosed maze, trying to collect all coins without the enemies killing it",
      "https://github.com/shaniKupiec/pac-man",
      "https://shanikupiec.github.io/pac-man/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177039/github-gallery/847ca411-1a60-4d48-892a-689560a38af6_sajjeq.jpg",
      "Jan - 2022"
    ),
    createProj(
      "104",
      "Eat the ball",
      "Vanilla",
      "Learning project",
      "A players that needs to eat all the balls in the board",
      "https://github.com/shaniKupiec/eat-the-ball",
      "https://shanikupiec.github.io/eat-the-ball/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177079/github-gallery/fbb51fea-6066-4da3-8566-08135854d137_dtzp0m.jpg",
      "Jan - 2022"
    ),
    createProj(
      "103",
      "Guess Who jQuery",
      "jQuery",
      "Learning project",
      "A guess who tree. Allows the user to add more data to the tree",
      "https://github.com/shaniKupiec/guess-who-jQuery/tree/main",
      "https://shanikupiec.github.io/guess-who-jQuery/",
      "https://res.cloudinary.com/trellox/image/upload/v1652187051/github-gallery/a03e93fd-cbd8-4841-b09e-6aa8f29eac39_bd4h0n.jpg",
      "Feb - 2022"
    ),
    createProj(
      "102",
      "Chess Board",
      "Vanilla",
      "Learning project",
      "A board that shows the next possible movement",
      "https://github.com/shaniKupiec/chess-board",
      "https://shanikupiec.github.io/chess-board/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177068/github-gallery/9d3faab1-d1a2-44d9-ad60-b3a7a6ee0473_qcxyrn.jpg",
      "Jan - 2022"
    ),
    createProj(
      "101",
      "My Todos",
      "Vanilla",
      "Learning project",
      "Keeps track of the users tasks. Allows to add, change status, delete, filter and sort ",
      "https://github.com/shaniKupiec/my-todos",
      "https://shanikupiec.github.io/my-todos/",
      "https://res.cloudinary.com/trellox/image/upload/v1652187048/github-gallery/f7511721-72c2-47a0-9cbd-5fc4b5a7772b_t29jim.jpg",
      "Jan - 2022"
    ),
    createProj(
      "100",
      "Book Shop",
      "Vanilla",
      "Learning project",
      "Allows the user to see books in the book store. The user can: read, update price, delete and add new book. More features: paging, i18n",
      "https://github.com/shaniKupiec/book-shop",
      "https://shanikupiec.github.io/book-shop/",
      "https://res.cloudinary.com/trellox/image/upload/v1652177073/github-gallery/13189420-50fd-4824-9737-240cbd7fce8c_eeoy5b.jpg",
      "Feb - 2022"
    ),
  ];
}

function createProj(id, name, category, type, longDesc, codeUrl, siteUrl, img, publishedAt) {
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
  };
}

function getProject() {
  return gProject;
}

function getProjectById(projId) {
  return gProject.find((proj) => proj.id === projId);
}
