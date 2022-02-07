"use strict";

var gProjs;
createProjs()

function createProjs(){
    gProjs = [
        createProj('101', 'Minesweeper', 'thinking game', 'try not to die','https://shanikupiec.github.io/Mine-Sweeper/', 'Jan - 2022'),
        createProj('102', 'Chess', 'thinking game', 'helps beginners to play chess by showing optional moves','https://shanikupiec.github.io/ChessProj/', 'Jan - 2022'),
        createProj('103', 'Ball', 'fun game', 'clear all the balls to win','https://shanikupiec.github.io/BallBoard/', 'Jan - 2022'),
        createProj('104', 'Pacman', 'fun game', 'eat all food and stay away from ghost','https://shanikupiec.github.io/Pacman/', 'Jan - 2022'),
        createProj('105', 'ToDo', 'helpful website', 'organize all your tasks in one place','https://shanikupiec.github.io/ToDos/', 'Jan - 2022'),
        createProj('106', 'BookShop', 'helpful website', 'access ordering books online','https://shanikupiec.github.io/BookShop/', 'Jan - 2022')
    ];
}

function createProj(id, name, title, desc, url, date) {
  return {
    id,
    name,
    title,
    desc,
    img: "img/portfolio2/01-full",
    url,
    publishedAt: date,
    labels: ["Matrixes", "keyboard events"],
  };
}

function getProjs(){
    return gProjs
}

function getProjsById(projId){
    return gProjs.find( proj => proj.id === projId)
}