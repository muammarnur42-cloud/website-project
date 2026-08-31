const tombol = document.querySelector("#btn-sapa");
const pesan = document.querySelector("#pesan");

tombol.addEventListener("click", function() {
    if (pesan.textContent === "") {
        pesan.textContent = "Halo! Terima kasih sudah mampir ke website saya.";
        } else {
            pesan.textContent ="";
        }
})

const skills = ["HTML", "CSS", "Git & GitHub", "Wordpress", "JavaScript"]
const skillcontainer = document.querySelector("#skill-container");

for (let i = 0; i < skills.length; i++) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = skills[i];
    skillcontainer.appendChild(badge)
}

const githubcontainer = document.querySelector("#github-info");

fetch("https://api.github.com/users/muammarnur42-cloud")
    .then(Response => Response.json())
    .then(data => {
        githubcontainer.innerHTML = `
        <p>Repository publik: ${data.public_repos}</p>
        <p>Follower: ${data.followers}</p>
        `
    })