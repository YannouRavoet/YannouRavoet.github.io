function openTab(event, contentID){
    //Hide all content
    let content = document.getElementsByClassName("content");
    for(let i=0; i<content.length; i++)
        content[i].style.display="none";

    //Set all tabs to unactive
    let tablinks = document.getElementsByClassName("tablinks");
    for(let i=0; i<tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        tablinks[i].style.color = "navajowhite";
    }
    //Show the current tab
    document.getElementById(contentID).style.display = "flex";
    event.currentTarget.className += " active";
    event.currentTarget.style.color = "deepskyblue";
}