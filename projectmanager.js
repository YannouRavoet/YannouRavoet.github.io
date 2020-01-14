function openCategory(name){
    //Hide all content
    let content = document.getElementsByClassName("content");
    for(let i=0; i<content.length; i++)
        content[i].style.display="none";

    //Show the current category of projects
    document.getElementById(name+"Category").style.display = "flex";
}