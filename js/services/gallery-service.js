"use strict";

var gProjs;
createProjs()

function createProjs(){
    gProjs = [
        createProj('101', 'Minesweeper', 'thinking game', 'try not to die','https://shanikupiec.github.io/Mine-Sweeper/', 'bomb.jpg'),
        createProj('102', 'Chess', 'thinking game', 'helps beginners to play chess by showing optional moves','https://shanikupiec.github.io/ChessProj/', 'chess.jpeg'),
        createProj('103', 'Ball', 'fun game', 'clear all the balls to win','https://shanikupiec.github.io/BallBoard/', 'ball.jpg'),
        createProj('104', 'Pacman', 'fun game', 'eat all food and stay away from ghost','https://shanikupiec.github.io/Pacman/', 'pacman.jpg'),
        createProj('105', 'ToDo', 'helpful website', 'organize all your tasks in one place','https://shanikupiec.github.io/ToDos/', 'todos.jpg'),
        createProj('106', 'BookShop', 'helpful website', 'access ordering books online','https://shanikupiec.github.io/BookShop/', 'bookshop.jpg')
    ];
}

function createProj(id, name, title, desc, url, img) {
  return {
    id,
    name,
    title,
    desc,
    img: "img/portfolio/" + img,
    url,
    publishedAt: 'Jan - 2022',
    labels: ["Matrixes", "keyboard events"],
  };
}

function getProjs(){
    return gProjs
}

function getProjsById(projId){
    return gProjs.find( proj => proj.id === projId)
}