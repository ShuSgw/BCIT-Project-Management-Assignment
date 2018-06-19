var nav = require('./nav');
var bar = require('./slide');
var $ = require('jQuery');

var mainNav = document.getElementById("mainNav");
mainNav.innerHTML =
    nav("Home", "index") +
    nav("Standards & Regulations", "standards_regulations") +
    nav("Current Tools", "current_tools") +
    nav("Articles & Resources", "article_resources") +
    nav("Fture Technologies", "future_tech") +
    nav("F.A.Q", "faq") +
    nav("The Team", "team");