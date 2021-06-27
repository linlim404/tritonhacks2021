var submitnew = document.getElementById("submitnewbtn");
var newtitle = document.getElementById("newposttitle");
var newcontent = document.getElementById("newpostcontent");
var database = firebase.database();

submitnew.addEventListener('click', (e) => {
    e.preventDefault();
    let time = new Date();
    let now = (time.getMonth()+1) + "." + time.getDate() + "." + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes();
    console.log(now);
    let ref = database.ref('/POSTID/');
    let newId = {
        postId: 0
    };
    ref.on('value', (snapshot) => {
        console.log(snapshot.val().postId);
        newId.postId = snapshot.val().postId + 1;
        console.log(newId);
    })
    ref.update(newId);
    database.ref('/posts/' + newId.postId).set({
        title: newtitle.value,
        date: now,
        content: newcontent.value,
        titleid: "posttitle" + newId.postId,
        dateid: "date" + newId.postId,
        contentid: "content" + newId.postId,
        upvotes: 0,
        downvotes: 0
    });
    localStorage.setItem("bool", true)
    localStorage.setItem("id", newId.postId);
    window.location.href = "index.html";
});
if (localStorage.getItem("bool")) {
    let newD = document.createElement("div");
    newD.setAttribute("class", "post" + localStorage.getItem("id"));
    document.body.appendChild(newD);
    let newT = document.createElement("a");
    newT.setAttribute("class", "posttitle" + localStorage.getItem("id"));
    newT.setAttribute("class", "posttitle");
    newT.setAttribute("href", "comments.html");
    let newDate = document.creatElement("p");
    document.setAttribute("class", "date" + localStorage.getItem("id"));
    document.setAttribute("class", "postdate");
    let content = document.creatElement("p");
    document.setAttribute("class", "content" + localStorage.getItem("id"));
    document.setAttribute("class", "content");
    let ref = database.ref('/posts/' + localStorage.getItem("id"));
    ref.on('value', (snapshot)=> {
        
    })
}