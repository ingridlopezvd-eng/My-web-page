accordion = document.getElementById('myinfoAccordion');
accordion.innerHTML += `
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                My Hobbies
            </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myinfoAccordion">
            <div class="accordion-body">
                I enjoy hiking, reading science fiction novels, and playing the guitar.
            </div>
        </div>
    </div>
`;

accordion.innerHTML += `
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                My Goals
            </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#myinfoAccordion">
            <div class="accordion-body">
                My goals include learning new programming languages, traveling to new countries, and improving my cooking skills.
            </div>
        </div>
    </div>
`;