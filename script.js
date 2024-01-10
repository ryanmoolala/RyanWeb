let home = document.querySelector('.home_button');
let skills = document.querySelector('.skills_button');
let experience = document.querySelector('.experience_button');
let projects = document.querySelector('.projects_button');
let contact = document.querySelector('.contact_button');

let home_section = document.getElementById('home_id');
let skills_section = document.getElementById('skills_id');
let experience_section = document.getElementById('experience_id');
let projects_section = document.getElementById('projects_id');
let contact_section = document.getElementById('contact_id');


let button_to_section = {
    home: home_section,
    skills: skills_section,
    experience: experience_section,
    projects: projects_section,
    contact: contact_section
}

Object.keys(button_to_section).forEach(x => {
    const button = document.querySelector(`.${x}_button`)
    if (button){
        button.addEventListener('click', ()=>{
            button_to_section[x].scrollIntoView({ behavior: 'smooth' });
        }
        )
    }
}
)



