/*The projectmanager.js file is responsible for managing which projects are shown in the browser.
A default set of projects is maintained here.
/*=====================*/
/*   DATA STRUCTURES   */
/*=====================*/
class Project{
    /*A Project datastructure that represents a github project.*/
    constructor(name, tags, githublink, imgpath, weblink=null) {
        this.name = name;               //Name of the project
        this.tags = tags;               //Tags of the project used for filtering
        this.githublink = githublink;   //Link to GitHub repository
        this.imgpath = imgpath;         //image to display
        this.weblink = weblink          //Link to a webpage for the project *not required*
    }

}
const tags = {
    UNITY: 'unity',
    CSHARP: 'C#',
    PYTHON: 'python',
    RF: 'reinforcement_learning'
}

const allProjects = [
    new Project(
        "TopDownShooter",
        [tags.UNITY, tags.UNITY],
        "https://github.com/YannouRavoet/TopDownShooter",
        "resources/images/projects/TopDownShooter.png",
        "https://yannouravoet.github.io/UnityShooter/"),
    new Project(
        "OpenAI Taxi",
        [tags.PYTHON, tags.RF],
        "https://github.com/YannouRavoet/gymprojects/blob/master/src/Taxi_v3.py",
        "resources/images/projects/OpenAI_Taxi.png",
        "https://YannouRavoet.github.io/gymprojects#QLearning"),
    new Project(
        "OpenAI Cartpole",
        [tags.PYTHON, tags.RF],
        "https://github.com/YannouRavoet/gymprojects/blob/master/src/Cartpole_v0.py",
        "resources/images/projects/OpenAI_Cartpole.png",
        "https://YannouRavoet.github.io/gymprojects#DeepQ-Network"),
    new Project(
        "OpenAI Breakout",
        [tags.PYTHON, tags.RF],
        "https://github.com/YannouRavoet/gymprojects/blob/master/src/Breakout.py",
        "resources/images/projects/OpenAI_Breakout.png",
        "https://YannouRavoet.github.io/gymprojects#DoubleDeepQ-Network"),
    new Project(
        "Kaggle Titanic",
        [tags.PYTHON, tags.RF],
        "https://github.com/YannouRavoet/titanic",
        "resources/images/projects/Kaggle_Titanic.png",
        "https://yannouravoet.github.io/titanic")
]

/*=====================*/
/*DISPLAY FUNCTIONALITY*/
/*=====================*/
const projects_per_row = 5;

function displayProjects(projects){
    let index = 0;
    let current_row = null;
    projects.forEach(project => {
        if (index % projects_per_row === 0)
            current_row = makeProjectRow();
        let projectBox = makeProjectBox(index, project);
        current_row.appendChild(projectBox);
        index++;
    });
}

function makeProjectRow(){
    let project_row = document.createElement('div');
    project_row.classList.add('projects_row');
    $('#projects_div')[0].appendChild(project_row);
    return project_row;
}

function makeProjectBox(index, project){
    let box = document.createElement('div');
    box.classList.add('col-md-2');
    box.classList.add('projectBox');
    let a_img = document.createElement('a')
    a_img.href = project.weblink;
    let img = document.createElement('img');
    img.src = project.imgpath;
    a_img.appendChild(img);
    let title_div = document.createElement('div')
    title_div.classList.add('title');

    let a_title = document.createElement('a')
    a_title.href = project.weblink;
    let h4 = document.createElement('h4')
    h4.innerText = project.name;
    a_title.appendChild(h4);

    let a_github = document.createElement('a')
    a_github.href = project.githublink;
    let img_github = document.createElement('img');
    img_github.src = "resources/images/buttons/GitRepo.png";
    img_github.classList.add('githubLink');
    a_github.appendChild(img_github);

    title_div.appendChild(a_title);
    title_div.appendChild(a_github);
    box.appendChild(a_img);
    box.appendChild(title_div);
    return box;
}

function filterProjects(tags){
    //filters a list of projects

    //displays the projects
}