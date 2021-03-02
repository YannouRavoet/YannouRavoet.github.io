/*A JS script responsible for managing what gets displayed in the header, body and footer of the webpage based on
* which tab is selected. Loads the content of the body from external html files.*/

const tabs={
    PROJECTS: {content: 'projects.html', header_el:'#projects_tab'},
    ABOUTME: {content:'aboutme.html', header_el:'#aboutme_tab'}
}

function highlightHeader(tab){
    $(tab.header_el).blur(); //removes focus
    let tab_els = document.getElementsByClassName("tab");
    for(let i=0; i<tab_els.length; i++) {
        tab_els[i].style.color = "var(--main-color)";
    }
    $(tab.header_el)[0].style.color = 'var(--main-color-accent)';

}

function loadContent(tab){
    $('#body').load(tab.content);
    highlightHeader(tab);
}
