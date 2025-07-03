

const projects_data = [
    {
        id: 1,
        thumbnail : "assets/img/projects/project01.png",
        title : "Lading Page Empresarial",
        tools : [ "React", "Nodejs"],
        description : "Portal web de una sola página descripciones y formulario de contacto.",
        link : "https://intervionesiprd.com"
    },
    {
        id: 2,
        thumbnail : "assets/img/projects/project02.png",
        title : "Lading page Profesional",
        tools : [ "Javascript", "Css"],
        description : "Portal web de una sola pagina, para tener presencia en Internet.",
        link : "https://aesgdo.github.io/landing"
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
