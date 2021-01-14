

const Handlebars = require("handlebars");
const fs = require("fs");

// create ./public dir
fs.promises.mkdir('public', { recursive: true }).catch(console.error);

// compile templates

const homeTemplateFile = fs.readFileSync("./src/templates/index.hbs").toString();
const homeTemplate = Handlebars.compile(homeTemplateFile);

// Register Partials
const headingTemplate = fs.readFileSync("./src/templates/heading.hbs").toString();
Handlebars.registerPartial("heading", headingTemplate);

const aboutTemplate = fs.readFileSync("./src/templates/about.hbs").toString();
Handlebars.registerPartial("about", aboutTemplate);

const headerTemplate = fs.readFileSync("./src/templates/header.hbs").toString();
Handlebars.registerPartial("header", headerTemplate);

const jobsTemplate = fs.readFileSync("./src/templates/jobs.hbs").toString();
Handlebars.registerPartial("jobs", jobsTemplate);

const educationTemplate = fs.readFileSync("./src/templates/education.hbs").toString();
Handlebars.registerPartial("education", educationTemplate);

const skillsTemplate = fs.readFileSync("./src/templates/skills.hbs").toString();
Handlebars.registerPartial("skills", skillsTemplate);

const languagesTemplate = fs.readFileSync("./src/templates/languages.hbs").toString();
Handlebars.registerPartial("languages", languagesTemplate);

const interestsTemplate = fs.readFileSync("./src/templates/interests.hbs").toString();
Handlebars.registerPartial("interests", interestsTemplate);

// Register Helpers

Handlebars.registerHelper("linkText", (url) => {
  var url = Handlebars.escapeExpression(url);
  var text = url.split("www.")[1];

  return new Handlebars.SafeString(text);
});

Handlebars.registerHelper("getYear", (date) => {
  // assumes format is YYYY-MM-DD
  var date = Handlebars.escapeExpression(date);
  var year = date.split("-")[0];

  return new Handlebars.SafeString(year);
});

Handlebars.registerHelper("isNotLast", function (a, b) {
  var next = arguments[arguments.length - 1];
  return a < b - 1 ? next.fn(this) : next.inverse(this);
});

// load json-resume

const context = fs.readFileSync("./resume.json").toString();
const contextJSON = JSON.parse(context);

// write webpages

fs.writeFileSync("./public/index.html", homeTemplate(contextJSON));
