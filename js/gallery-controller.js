"use strict";

$(document).ready(init);
const gOwnerEmail = "shani.kupiec@gmail.com";

function init() {
  renderProject();
}

function renderProject() {
  var projects = getProject();
  var strHTML1 = "";
  var strHTML2 = "";
  var strHTML3 = "";
  projects.map((project) => {
    const html = getInnerHTML(project);
    switch (project.type) {
      case "End-to-End":
        strHTML1 += html;
        break;
      case "Front-End":
        strHTML2 += html;
        break;
      case "Learning project":
        strHTML3 += html;
        break;
      default:
        break;
    }
  });
  $(".addPortfolioEndToEnd").html(strHTML1);
  $(".addPortfolioFrontend").html(strHTML2);
  $(".addPortfolioLearning").html(strHTML3);
}

function getInnerHTML(project) {
  return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${project.id}')">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="${project.img}" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>${project.name}</h4>
              <p class="text-muted">${project.category}</p>
            </div>
          </div>`;
}

function renderModal(projId) {
  var project = getProjectById(projId);
  var strHTML = `
  <h2>'${project.name}'</h2>
  <p class="item-intro text-muted">${project.type}</p>
  <p>${project.longDesc}</p>
  <a style="color: blue; margin: 5px" href="${project.codeUrl}" target="_blank">Link to Code</a> </br>
  ${project.siteUrl ? `<a style="color: blue; margin: 5px" href="${project.siteUrl}" target="_blank">Link to Application</a> </br>` : ""}
  <ul class="list-inline">
    <li>Date: ${project.publishedAt}</li>
    <li>Technology: ${project.techs}</li> 
    <li>
    Features:
      <ul>
      ${project.features.map((f) => `<li>${f}</li>`).join("")}
      </ul>
    </li>
  </ul>
  <button class="btn btn-primary m-3" onclick="renderModal('${getId(projId, true)}')">
    <i class="fa fa-arrow-left" aria-hidden="true"></i>
    next project 
  </button>
  <button class="btn btn-primary m-3" onclick="renderModal('${getId(projId, false)}')">
    previews project 
    <i class="fa fa-arrow-right" aria-hidden="true"></i>
  </button>
  <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">`;

  $(".modal-body").html(strHTML);
}

function getId(currentId, isNext) {
  return isNext ? (currentId === "113" ? "100" : ++currentId) : currentId === "100" ? "113" : --currentId;
}

function sendEmail() {
  var email = $("[name=email]").val();
  var subject = $("[name=sub]").val();
  var message = $("[name=msg]").val();

  $("[name=email]").val("");
  $("[name=sub]").val("");
  $("[name=msg]").val("");

  if (!email || !subject || !message || !email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")) return;

  console.log("email", email, "subject", subject, "message", message);

  var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${gOwnerEmail}&su=${subject}&body=${message}`;
  window.open(url);
}
