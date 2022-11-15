var username = "";
function nextPage(){
    username = document.getElementById("name").value;
    localStorage.setItem("forNextPage", username);
    username = "";
    document.getElementById("name").value = "";
    window.location = "primary.html";
};