"use strict";

$(document).ready(init);

function init() {
  console.log("Starting up");
  renderProt();
}

function renderProt() {
  var projs = getProjs();
  var strHTML = projs.map(
    (proj) =>
      `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="${proj.url}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
        </div>
    </div>`
  );
  strHTML = strHTML.join("");
  $(".addProtfolio").html(strHTML);
}

function renderModal(projId) {
  var proj = getProjsById(projId);
  console.log('projId',projId, 'proj', proj);
  var strHTML = 
      `<h2>${proj.name}</h2>
        <p class="item-intro text-muted">${proj.desc}</p>
        <img class="img-fluid d-block mx-auto" src="${proj.url}.jpg" alt="">
        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
        dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!</p>
        <ul class="list-inline">
            <li>Date: ${proj.publishedAt}</li>
            <li>Client: ${proj.name}</li>
            <li>Category: ${proj.title}</li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`;

  $(".modal-body").html(strHTML);
}
