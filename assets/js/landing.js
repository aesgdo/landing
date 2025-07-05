

// HABILIDADES

const skills_data = [
    {
        id: 1,
        fa_icon : "<i class='fa-solid fa-swatchbook fa-fade'></i>",
        title : "Frontend",
        tools : [ "React", "jQuery", "Javascript", "Css", "Html"],
    },
    {
        id: 2,        
        fa_icon : "<i class='fa-solid fa-cube fa-fade'></i>",
        title : "Backend",
        tools : [ "Php", "NodeJs", "Phyton"],
    },
    {
        id: 3,        
        fa_icon : "<i class='fa-solid fa-code fa-fade'></i>",
        title : "Base de Datos",
        tools : [ "Mysql", "MongoDb", "Firebase"],
    },
    {
        id: 4,
        fa_icon : "<i class='fa-solid fa-microchip fa-fade'></i>",
        title : "DevOps",
        tools : [ "Docker", "AWS", "CI/CD"],
    },
]


const skills = skills_data.map( (skill) => {

    const tools = skill.tools.map( tool => {
        return `<span class="tool ${tool.toLocaleLowerCase()}">${tool}</span>`
    }).join("");

    return `<div id="skill_card_id${skill.id}" class="skill_card">
                <div class="skill_header">
                    <div class="title_icon_container">
                        <span>${skill.fa_icon}</span>
                    </div>                                
                    <h4>${skill.title}</h4>
                </div>
                <div class="card_body">
                    <div class="card_tools">
                        <div class="tools_container">
                            ${tools}
                        </div>                                
                    </div>
                </div>
            </div>`

}).join("");


const skills_card_container = document.getElementById("skills_card_container");
      skills_card_container.innerHTML = skills;

// PROYECTOS

const projects_data = [
    {
        id: 1,
        thumbnail : "assets/img/projects/project01.png",
        title : "Lading Page Empresarial",
        tools : [ "Php", "Javascript"],
        description : "Portal web de una sola página descripciones y formulario de contacto.",
        link : "https://intervionesiprd.com"
    },
    {
        id: 2,
        thumbnail : "assets/img/projects/project04.png",
        title : "Plugins de Wordpress con IA",
        tools : [ "Php", "Javascript"],
        description : "Plugin de Worpdress que permite usar una API de Inteligencia Artificial que chatea con los visitantes.",
        link : "https://juventud.gob.do/"
    },
    {
        id: 3,
        thumbnail : "assets/img/projects/project03.png",
        title : "Portal Gubernamental",
        tools : [ "Php", "Javascript"],
        description : "Creación de Thema en Wordpress para manejar portales del gobierno.",
        link : "https://juventud.gob.do/"
    },
    {
        id: 4,
        thumbnail : "assets/img/projects/project02.png",
        title : "Lading Page Profesional",
        tools : [ "Php", "Javascript"],
        description : "Website de una pagina para tener presencia en Internet.",
        link : "https://aesgdo.github.io/landing/"
    },
]


const cards = projects_data.map( (card) => {

    const tools = card.tools.map( tool => {
        return `<span class="tool ${tool.toLocaleLowerCase()}">${tool}</span>`
    }).join("");

    return `<div id="project_card_container" class="project_card_container">
        <div id="${card.id}" class="project_card">
            <div class="card_header">
                <div class="card_img_container" style="background-image: url(${card.thumbnail});"></div>
            </div>
            <div class="card_body">
                <div class="card_title_tools">
                    <h4>${card.title}</h4>
                    <div class="tools_container">
                        ${tools}
                    </div>
                </div>
                <div class="card_description">
                    <p>${card.description}</p>
                </div>
                <div class="card_links">
                    <a href="${card.link}" target="_blank" ref="no-referrer noopener"><span class="card_icon link"><i class="fa-solid fa-square-up-right"></i></span> Live</a>
                </div>
            </div>
        </div>
    </div>`

}).join("");


const project_card_container = document.getElementById("project_card_container");
      project_card_container.innerHTML = cards;
