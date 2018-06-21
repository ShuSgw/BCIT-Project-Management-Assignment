const nav = (name, link, sub) => {
    if (sub == undefined) {
        return '<li><a href=' + link + '.html' + '>' + name + "<a></li>";
    }
    return '<li><a href=' + link + '.html' + '>' + name + "<a>" + sub + "</li>";
}

module.exports = nav;
