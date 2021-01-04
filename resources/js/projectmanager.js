/*The projectmanager.js file is responsible for managing which projects are shown in the browser.
A default set of projects is maintained here.
/*=====================*/
/*   DATA STRUCTURES   */
/*=====================*/
class Project{
    /*A Project datastructure that represents a github project.*/
    constructor(name, tags, githublink, imgpath, description, date, weblink=null) {
        this.name = name;               //Name of the project
        this.tags = tags;               //Tags of the project used for filtering
        this.githublink = githublink;   //Link to GitHub repository
        this.imgpath = imgpath;         //image to display
        this.description = description; //description of the project (shown when hovering)
        this.date = date;
        this.weblink = weblink;         //Link to a webpage for the project *not required*
    }
}
const tags = {
    UNITY: 'unity',
    CSHARP: 'C#',
    PYTHON: 'python',
    RF: 'reinforcement_learning',
    KAGGLE: 'kaggle',
    OPENAI: 'OpenAI',
    OPENSPIEL: 'OpenSpiel',
    OPENPOSE: 'OpenPose',
    CNN: 'Convolutional Neural Nets',
    LSTM: 'Long Short-Term Neural Nets',
    COMPUTERVISION: 'Computer Vision',
    CPP: 'C++',
    PATHFINDING: 'Pathfinding',
    JPS: 'Jump Point Search'
}

const allProjects = [
    new Project(
        "TopDownShooter",
        [tags.UNITY, tags.UNITY],
        "https://github.com/YannouRavoet/TopDownShooter",
        "resources/images/projects/TopDownShooter.png",
        "A simple game where you battle against waves of enemies with varying weapons (Unity)",
        2019,
        "https://yannouravoet.github.io/UnityShooter/"),
    new Project(
        "OpenAI Taxi",
        [tags.PYTHON, tags.RF, tags.OPENAI],
        "https://github.com/YannouRavoet/gymprojects/blob/master/src/Taxi_v3.py",
        "resources/images/projects/OpenAI_Taxi.png",
        "Q-learning for discrete state spaces",
        2019,
        "https://YannouRavoet.github.io/gymprojects#QLearning"),
    new Project(
        "OpenAI Cartpole",
        [tags.PYTHON, tags.RF, tags.OPENAI],
        "https://github.com/YannouRavoet/gymprojects/blob/master/src/Cartpole_v0.py",
        "resources/images/projects/OpenAI_Cartpole.png",
        "Deep Q-learning for continuous state spaces",
        2019,
        "https://YannouRavoet.github.io/gymprojects#DeepQ-Network"),
    new Project(
        "OpenAI Breakout",
        [tags.PYTHON, tags.RF, tags.OPENAI],
        "https://github.com/YannouRavoet/gymprojects/blob/master/src/Breakout.py",
        "resources/images/projects/OpenAI_Breakout.png",
        "Reinforcement Learning on Atari Games using the OpenAI framework",
        2020,
        "https://YannouRavoet.github.io/gymprojects#DoubleDeepQ-Network"),
    new Project(
        "Kaggle Titanic",
        [tags.PYTHON, tags.KAGGLE],
        "https://github.com/YannouRavoet/titanic",
        "resources/images/projects/Kaggle_Titanic.png",
        "An introduction to data visualization and data wrangling",
        2020,
        "https://yannouravoet.github.io/titanic"),
    new Project(
        "OpenSpiel Poker",
        [tags.PYTHON, tags.RF, tags.OPENSPIEL],
        "https://github.com/YannouRavoet/ml_project",
        "resources/images/projects/Poker.png",
        "An application of game theory combined with reinforcement learning using the DeepMind OpenSpiel library",
        2020,
        "https://github.com/YannouRavoet/ml_project"),
    new Project(
        "Sign Language Recognition",
        [tags.PYTHON, tags.OPENPOSE, tags.CNN, tags.LSTM, tags.COMPUTERVISION],
        null,
        "resources/images/projects/BrainjarInternship.png",
        "Gathering Data and Training classifiers for Dutch Sign Language (Brainjar Internship)",
        2020,
        "https://blog.raccoons.be/unforgettable-internship-brainjar"),
    new Project(
        "DeepFake Documentary",
        [tags.PYTHON, tags.COMPUTERVISION, tags.CNN],
        null,
        "resources/images/projects/DeepFakes.png",
        "How far could I get with publicly available deepfake tools...",
        2018,
        "https://vimeo.com/327167924"),
    new Project(
        "Pathfinding Project",
        [tags.CPP, tags.PATHFINDING, tags.JPS],
        "https://github.com/YannouRavoet/MediaProcessing_PathfindingGame_2018",
        "resources/images/projects/MP_Pathfinding_2018.png",
        "Jump Point Search implementation with enemies and healthpacks",
        2018,
        "https://github.com/YannouRavoet/MediaProcessing_PathfindingGame_2018")
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
        let projectBox = makeProjectBox(project);
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

function makeProjectBox(project){
    /*<div class="col-md-2 projectBox">
         <a href={project.weblink}>
            <div class="hoverbox">
                <h6>{project.description}</h6>
                <h6>{project.date}</h6>
            </div>
            <img src={project.imgpath}>
            <div class="title">
                <h4>{project.name}</h4>
                <a href={project.githublink}>
                     <img src="resources/images/buttons/GitRepo.png" class="githubLink">
                </a>
             </div>
         </a>
      </div>*/

    let box = document.createElement('div');
    box.classList.add('col-md-2');
    box.classList.add('projectBox');
    let a = document.createElement('a')
    a.href = project.weblink;

    /*HOVERBOX*/
    let [hoverbox, description, date] = makeHoverBox(project);
    a.appendChild(hoverbox);

    /*IMAGE*/
    let img = document.createElement('img');
    img.src = project.imgpath;
    a.appendChild(img);

    /*TITLE*/
    let title_div = document.createElement('div')
    title_div.classList.add('title');
    let h4 = document.createElement('h4')
    h4.innerText = project.name;
    title_div.appendChild(h4);

    /*GITHUB LINK*/
    if (project.githublink != null) {
        let a_github = document.createElement('a')
        a_github.href = project.githublink;
        let img_github = document.createElement('img');
        img_github.src = "resources/images/buttons/GitRepo.png";
        img_github.classList.add('githubLink');
        a_github.appendChild(img_github);
        title_div.appendChild(a_github);

        a_github.addEventListener('mouseenter', function() {
            h4.style.color = 'var(--main-color)';
            description.style.color = 'var(--main-color)';
            date.style.color = 'var(--main-color)';
            hoverbox.style.display = 'none';
        });
        a_github.addEventListener('mouseleave', function() {
            h4.style.color = 'var(--main-color-accent)';
            description.style.color = 'var(--main-color-accent)';
            date.style.color = 'var(--main-color-accent)';
            hoverbox.style.display = 'flex';
        });

    }
    a.appendChild(title_div);
    box.appendChild(a);

    box.addEventListener('mouseenter', function() {
        h4.style.color = 'var(--main-color-accent)';
        description.style.color = 'var(--main-color-accent)';
        date.style.color = 'var(--main-color-accent)';
        hoverbox.style.display = 'flex';
    });
    box.addEventListener('mouseleave', function() {
        h4.style.color = 'var(--main-color)';
        hoverbox.style.display = 'none';
    });



    return box;
}

function makeHoverBox(project){
    let hoverbox = document.createElement('div');
    hoverbox.classList.add('hoverbox');
    let description = document.createElement('h6');
    description.innerText = project.description;
    description.style.textAlign = 'start';
    let date = document.createElement('h6');
    date.innerText = project.date;
    date.style.textAlign = 'end';
    hoverbox.appendChild(description);
    hoverbox.appendChild(date);
    return [hoverbox, description, date];
}

function filterProjects(tags){
    //TODO: IMPLEMENT FILTERING ON TAGS
    //filters a list of projects

    //displays the projects
}