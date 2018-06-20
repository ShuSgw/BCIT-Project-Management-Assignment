var nav = require('../commons/nav');
var bar = require('../commons/slide');
var subNav = require('../commons/subNav');
var $ = require('jQuery');

var mainNav = document.getElementById("mainNav");
mainNav.innerHTML =
    nav("Home", "index") +
    subNav("What is Web design", "web_design") +
    subNav("What is Web Development", "web_dev") +
    subNav("What is Full Stack Developer", "full_stack_developer") +
    subNav("What is Full Stack Web Designer", "full_stack_web_designer") +
    nav("History", "history") +
    nav("Standards & Regulations", "standards_regulations") +
    nav("Current Tools", "current_tools") +
    subNav("Current Tools for Web Design", "current_tool_web_design") +
    subNav("Current Tools for Web Development", "current_tool_web_dev") +
    nav("Articles & Resources", "article_resources") +
    nav("Fture Technologies", "future_tech") +
    subNav("Web Design Trend", "web_design_trends") +
    subNav("Web Development Trend", "web_dev_trends") +
    nav("F.A.Q", "faq") +
    nav("The Team", "team") +
    subNav("Ko", "about_ko") +
    subNav("Nicole", "about_nicole") +
    subNav("Sara", "about_sara") +
    subNav("Shuhei", "about_shuhei");