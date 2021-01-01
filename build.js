const Handlebars = require("handlebars");
const fs = require("fs");

// compile templates

const homeTemplateFile = fs.readFileSync("./src/templates/index.hbs").toString();
const homeTemplate = Handlebars.compile(homeTemplateFile);

// Register Partials

const headerTemplate = fs.readFileSync("./src/templates/header.hbs").toString();
Handlebars.registerPartial("header", headerTemplate);

const workTemplate = fs.readFileSync("./src/templates/work.hbs").toString();
Handlebars.registerPartial("work", workTemplate);

const educationTemplate = fs.readFileSync("./src/templates/education.hbs").toString();
Handlebars.registerPartial("education", educationTemplate);

const skillsTemplate = fs.readFileSync("./src/templates/skills.hbs").toString();
Handlebars.registerPartial("skills", skillsTemplate);

const languagesTemplate = fs.readFileSync("./src/templates/languages.hbs").toString();
Handlebars.registerPartial("languages", languagesTemplate);

const interestsTemplate = fs.readFileSync("./src/templates/interests.hbs").toString();
Handlebars.registerPartial("interests", interestsTemplate);

// Register Helpers

Handlebars.registerHelper("link", function (url) {
  var url = Handlebars.escapeExpression(url);
  var text = url.split("//")[1];

  return new Handlebars.SafeString("<a href='" + url + "'>" + text + "</a>");
});

// load json-resume

const context = fs.readFileSync("./resume.json").toString();
const contextJSON = JSON.parse(context);

// write webpages

fs.writeFileSync("./public/index.html", homeTemplate(contextJSON));
