document.addEventListener("DOMContentLoaded", () => {
    const projectInput = document.getElementById("projectInput");
    const addProjectButton = document.getElementById("addProject");
    const projectsContainer = document.getElementById("projectsContainer");

    addProjectButton.addEventListener("click", () => {
        const projectName = projectInput.value.trim();

        if (projectName) {
            createProjectElement(projectName);
            projectInput.value = "";
        }
    });

    function createProjectElement(name) {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `
        <span>${name}</span>
        <div>
            <button class="completeProject">Zakończ</button>
            <button class="deleteProject">Usuń</button>
            
        </div>
        `;

        const deleteButton = projectDiv.querySelector(".deleteProject");
        const completeButton = projectDiv.querySelector(".completeProject");

        deleteButton.addEventListener("click", () => {
            projectsContainer.removeChild(projectDiv);
        });

        completeButton.addEventListener("click", () => {
            projectDiv.classList.toggle("completed");
        });

        projectsContainer.appendChild(projectDiv);
    }
});