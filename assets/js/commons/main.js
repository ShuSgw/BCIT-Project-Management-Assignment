var nav = require('../commons/nav');
var bar = require('../commons/slide');
var subNav = require('../commons/subNav');
var $ = require('jQuery');

var mainNav = document.getElementById("mainNav");
mainNav.innerHTML =
    nav("Home >", "index",
        "<div class='subNav'>" +
        "<div><a href='web_design.html'>What is Web design</div>" +
        "<div><a href='web_dev.html'>What is Web design</a></div>" +
        "<div><a href='web_dev.html'>What is Web Development</a></div>" +
        "<div><a href='full_stack_developer.html'>What is Full Stack Developer</a></div>" +
        "<div><a href='full_stack_web_designer.html'>What is Full Stack Web Designer</a></div>" +
        "</div>") +
    nav("History", "history") +
    nav("Standards & Regulations", "standards_regulations") +
    nav("Current Tools >", "current_tools",
        "<div class='subNav'>" +
        "<div><a href='web_design.html'>Current Tools for Web Design</a></div>" +
        "<div><a href='web_dev.html'>Current Tools for Web Development</a></div>" +
        "</div>") +
    nav("Articles & Resources", "article_resources") +
    nav("Fture Technologies >", "future_tech",
        "<div class='subNav'>" +
        "<div><a href='web_design_trends.html'>Web Design Trend</a></div>" +
        "<div><a href='web_dev_trends.html'>Web Development Trend</a></div>" +
        "</div>") +
    nav("F.A.Q >", "faq") +
    nav("The Team", "team",
        "<div class='subNav'>" +
        "<div><a href='about_ko.html'>Ko</a></div>" +
        "<div><a href='about_nicole.html'>Nicole</a></div>" +
        "<div><a href='about_sara.html'>Sara</a></div>" +
        "<div><a href='about_shuhei.html'>Shuhei</a></div>" +
        "</div>"
    );
// subNav("Current Tools for Web Design", "current_tool_web_design") +
// subNav("Current Tools for Web Development", "current_tool_web_dev") +
// nav("Articles & Resources", "article_resources") +
// nav("Fture Technologies", "future_tech") +
// subNav("Web Design Trend", "web_design_trends") +
// subNav("Web Development Trend", "web_dev_trends") +
// nav("F.A.Q", "faq") +
// nav("The Team", "team") +
// subNav("Ko", "about_ko") +
// subNav("Nicole", "about_nicole") +
// subNav("Sara", "about_sara") +
// subNav("Shuhei", "about_shuhei");

$(function () {
    // ▼マウスが載ったらサブメニューを表示
    $("li").mouseenter(function () {
        $(this).siblings().find(".subNav").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
        $(this).children().slideDown(150);
    });
    // ▼どこかがクリックされたらサブメニューを消す
    $('html').click(function () {
        $('.subNav').slideUp(150);
    });
});