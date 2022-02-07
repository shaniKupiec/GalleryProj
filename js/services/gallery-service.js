"use strict";

var gProjs;
createProjs()

function createProjs(){
    gProjs = [
        createProj('Minesweeper', 2022),
        createProj('Chess', 2022),
        createProj('Todos', 2022)
    ];
}

function createProj(name, year) {
  return {
    id: name,
    name,
    title: name + "Best Project Ever",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "img/portfolio/01-full",
    publishedAt: year,
    labels: ["Matrixes", "keyboard events"],
  };
}

function getProjs(){
    return gProjs
}

function getProjsById(projId){
    return gProjs.find( proj => proj.id === projId)
}