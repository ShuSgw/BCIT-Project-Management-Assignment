var nav = require('../commons/nav');
var bar = require('../commons/slide');
var $ = require('jQuery');

var mainNav = document.getElementById("mainNav");
mainNav.innerHTML =
    nav("Home >", "index",
        "<div class='subNav'>" +
        "<a href='what_web_design.html'><div>What is Web design</div></a>" +
        "<a href='what_web_dev.html'><div>What is Web Development</div></a>" +
        "<a href='what_full_stack_developer.html'><div>What is Full Stack Developer</div></a>" +
        "<a href='what_full_stack_web_designer.html'><div>What is Full Stack Web Designer</div></a>" +
        "</div>") +
    nav("History >", "history", "<div class='subNav'>" +
        "<a href='history_web_design.html'><div>Histroy of Web Design</div></a>" +
        "<a href='history_web_dev.html'><div>Histroy of Web Development</div></a>" +
        "</div>") +
    nav("Standards & Regulations", "standards_regulations") +
    nav("Current Tools >", "current_tools",
        "<div class='subNav'>" +
        "<a href='current_tool_web_design.html'><div>Current Tools for Web Design</div></a>" +
        "<a href='current_tool_web_dev.html'><div>Current Tools for Web Development</div></a>" +
        "</div>") +
    nav("Articles & Resources", "article_resources") +
    nav("Fture Technologies >", "trend_future_tech",
        "<div class='subNav'>" +
        "<a href='trend_web_design.html'><div>Web Design Trend</div></a>" +
        "<a href='trend_web_dev.html'><div>Web Development Trend</div></a>" +
        "</div>") +
    nav("F.A.Q ", "faq") +
    nav("The Team", "team",
        "<div class='subNav'>" +
        "<a href='team_about_ko.html'><div>Ko</div></a>" +
        "<a href='team_about_nicole.html'><div>Nicole</div></a>" +
        "<a href='team_about_sara.html'><div>Sara</div></a>" +
        "<a href='team_about_shuhei.html'><div>Shuhei</div></a>" +
        "</div>"
    );

$(function () {
    $("li").mouseenter(function () {
        $(this).siblings().find(".subNav").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
        $(this).children().slideDown(150);
    });
    $('html').click(function () {
        $('.subNav').slideUp(150);
    });
});