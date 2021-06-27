var submitnew = document.getElementById("submitnewbtn");
var newtitle = document.getElementById("newposttitle");
var newcontent = document.getElementById("newpostcontent");
submitnew.onclick = function() {
    let time = new Date();
    console.log("CLICKED");
    let now = (time.getMonth()+1) + "." + time.getDate() + "." + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes();
    localStorage.setItem("id", id + 1);
    var post = {
        title: newtitle.value,
        date: now,
        content: newcontent.value,
        titleid: "posttitle" + id,
        dateid: "date" + id,
        contentid: "content" + id,
        upvotes: 0,
        downvotes: 0
    }
    localStorage.setItem(id, JSON.stringify(post));
    localStorage.setItem("bool", true)
    window.location.href = "index.html";
};
localStorage.setItem("bool", false);
var id = Number(localStorage.getItem("id"));
if (localStorage.getItem("bool") == "true") {
    console.log("HAPPY");
    /*let newD = document.createElement("div");
    newD.setAttribute("class", "post" + id);
    document.body.appendChild(newD);
    let newT = document.createElement("a");
    newT.setAttribute("class", "posttitle" + id);
    newT.setAttribute("class", "posttitle");
    newT.setAttribute("href", "comments.html");*/
    let newDate = document.createElement("p");
    newDate.setAttribute("class", "date" + id);
    newDate.setAttribute("class", "postdate");
    var a = JSON.parse(localStorage.getItem(id));
    console.log(a);
    let temp = document.createTextNode(a.date);
    console.log(JSON.parse(localStorage.getItem(id)).date);
    newDate.appendChild(temp);
    document.body.appendChild(newDate);
    let content = document.createElement("p");
    content.setAttribute("class", "content" + id);
    content.setAttribute("class", "content");
}