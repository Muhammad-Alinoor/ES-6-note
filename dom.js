// add border only at friend container by an id
const friendContainer = document.getElementById("friend-container");
// click the add border button to give border to friend container
document.getElementById("add-border").addEventListener("click", function () {
    friendContainer.style.border = "10px solid goldenrod";
})
// add background to all friend by a class
const friendClass = document.getElementsByClassName("friends");
// click add background button to give the backgroundColor on every Friend
document.getElementById("add-background").addEventListener("click", function () {
    for (const friend of friendClass) {
        friend.style.backgroundColor = "gray";
    }
})
// add new friend to the friend container div,who is the parent of friend

document.getElementById("add-friend").addEventListener("click", function () {
    const friendContainer = document.getElementById("friend-container");
    // step:1 create new friend div
    const newFriend = document.createElement("div");
    newFriend.classList.add("friends");
    // creat inner html
    newFriend.innerHTML = `
    <h3>New Friend </h3>
    <h4> Abdul Jolil </h4>
`;
    // append as child to the parent
    friendContainer.appendChild(newFriend);
})
