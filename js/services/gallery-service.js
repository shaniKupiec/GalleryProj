'use strict'

var gProjs
createProjs()

function createProjs() {
  gProjs = [
    createProj(
      '110',
      'Trellox',
      'Vue',
      'End-to-End',
      'Trellox is an App inspired by Trello. The app was built with the latest web technologies such as Node.js, Vue.js, Vuex, MongoDB, and Socket.IO. Allows the user to create a board for project management, business, design, education, marketing, and more',
      'https://trelloxx.herokuapp.com/#/',
      'https://res.cloudinary.com/trellox/image/upload/v1652177135/github-gallery/1650551308518_bpzid6.jpg'
    ),
    createProj(
      '112',
      'Cyptonites',
      'Angular',
      'End-to-End',
      'An app that allows transfer of crypto coins to users. Using Node.js, Angular, and TypeScript',
      'https://github.com/shaniKupiec/Cyptonites',
      'https://res.cloudinary.com/trellox/image/upload/v1652177401/github-gallery/2a41ee5f-2d01-4af0-b7db-9a9a0011f80d_qwwwjt.jpg'
    ),
    createProj(
      '114',
      'Toy App',
      'Vue',
      'End-to-End',
      'Toy app that allows the user to add, edit and remove toys. Built using: Vue3, Vuex, Node.js, MongoDB. More features: authentication, filter, search and sort',
      'https://github.com/shaniKupiec/Mister-Toy-Frontend',
      'https://res.cloudinary.com/trellox/image/upload/v1652188790/github-gallery/c076be98-8fa4-4a91-8e56-661493c55a26_ksiovt.jpg'
    ),
    createProj(
      '111',
      'Google App',
      'Vue',
      'Front-End',
      'App that combines 2 of google apps- google notes and gmail. Google notes- add, edit, remove notes. supports note with: image, video, sound, and list. Email- sending and receiving new mails. supports unreading, moving to trash. More features: allow saving mail as note. and sending a note as a mail',
      'https://github.com/shaniKupiec/Google-App',
      'https://res.cloudinary.com/trellox/image/upload/v1652187056/github-gallery/91375c87-bfd6-4528-a13c-32a9c080de34_ijuylf.jpg'
    ),
    createProj(
      '107',
      'Meme Generator',
      'Vanilla',
      'Front-End',
      'An image maker that lets you add custom resizable text, images, and much more to templates. More features: saving, sharing on Facebook and download',
      'https://github.com/shaniKupiec/Meme-Generator',
      'https://res.cloudinary.com/trellox/image/upload/v1652177071/github-gallery/5954264d-3be6-4c42-abdf-22471e937928_ak3qhl.jpg'
    ),
    createProj(
      '106',
      "Shani's Books",
      'Vue',
      'Front-End',
      'Colorful bookshop that allows the user to watch the book details. The website is combined from reusable components such as: long text, adding and deleting review. More features: filtering, adding new books to the store using external api',
      'https://github.com/shaniKupiec/Shani-s-Books',
      'https://res.cloudinary.com/trellox/image/upload/v1652177075/github-gallery/e34e7c95-f846-4919-8e96-fc2f70913346_aqn0pc.jpg'
    ),
    createProj(
      '108',
      'Px Prefect Blogin',
      'Vanilla',
      'Px Prefect',
      '',
      'https://github.com/shaniKupiec/px-prefect-Blogin',
      'https://res.cloudinary.com/trellox/image/upload/v1652177076/github-gallery/bb99a8ee-1aea-4bef-82be-64ad79325c9a_mysmlz.jpg'
    ),
    createProj(
      '101',
      'Minesweeper',
      'Vanilla',
      'Learning project',
      'A single-player puzzle the goal is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them',
      'https://github.com/shaniKupiec/Minesweeper/',
      'https://res.cloudinary.com/trellox/image/upload/v1652177131/github-gallery/1650974170498_anpyp3.jpg'
    ),
    createProj(
      '104',
      'Pac Man',
      'Vanilla',
      'Learning project',
      'The player controls a character through an enclosed maze, trying to collect all coins without the enemies killing it',
      'https://github.com/shaniKupiec/pac-man',
      'https://res.cloudinary.com/trellox/image/upload/v1652177039/github-gallery/847ca411-1a60-4d48-892a-689560a38af6_sajjeq.jpg'
    ),
    createProj(
      '103',
      'Eat the ball',
      'Vanilla',
      'Learning project',
      'A players that needs to eat all the balls in the board',
      'https://github.com/shaniKupiec/eat-the-ball',
      'https://res.cloudinary.com/trellox/image/upload/v1652177079/github-gallery/fbb51fea-6066-4da3-8566-08135854d137_dtzp0m.jpg'
    ),
    createProj(
      '113',
      'Guess Who jQuery',
      'jQuery',
      'Learning project',
      'A guess who tree. Allows the user to add more data to the tree',
      'https://github.com/shaniKupiec/guess-who-jQuery/tree/main',
      'https://res.cloudinary.com/trellox/image/upload/v1652187051/github-gallery/a03e93fd-cbd8-4841-b09e-6aa8f29eac39_bd4h0n.jpg'
    ),
    createProj(
      '102',
      'Chess Board',
      'Vanilla',
      'Learning project',
      'A board that shows the next possible movement',
      'https://github.com/shaniKupiec/chess-board',
      'https://res.cloudinary.com/trellox/image/upload/v1652177068/github-gallery/9d3faab1-d1a2-44d9-ad60-b3a7a6ee0473_qcxyrn.jpg'
    ),
    createProj(
      '105',
      'My Todos',
      'Vanilla',
      'Learning project',
      'Keeps track of the users tasks. Allows to add, change status, delete, filter and sort ',
      'https://github.com/shaniKupiec/my-todos',
      'https://res.cloudinary.com/trellox/image/upload/v1652187048/github-gallery/f7511721-72c2-47a0-9cbd-5fc4b5a7772b_t29jim.jpg'
    ),
    createProj(
      '109',
      'Book Shop',
      'Vanilla',
      'Learning project',
      'Allows the user to see books in the book store. The user can: read, update price, delete and add new book. More features: paging, i18n',
      'https://github.com/shaniKupiec/book-shop',
      'https://res.cloudinary.com/trellox/image/upload/v1652177073/github-gallery/13189420-50fd-4824-9737-240cbd7fce8c_eeoy5b.jpg'
    ),
  ]
}

function createProj(id, name, category, shortDesc, longDesc, url, img) {
  return {
    id,
    name,
    category,
    shortDesc,
    longDesc,
    img,
    url,
    publishedAt: 'Jan - 2022',
    labels: ['Matrixes', 'keyboard events'],
  }
}

function getProjs() {
  return gProjs
}

function getProjsById(projId) {
  return gProjs.find((proj) => proj.id === projId)
}
