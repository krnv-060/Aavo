const caseStudies = [
    { img: "./images/review/review-thumb01.jpg", name: "John Doe", position: "Chief Data Scientist", review: "Adopting this AI SaaS platform has been a seamless process for our team. The system is intuitive and easy to navigate, allowing us to integrate it quickly into our existing workflows without significant downtime" },
    { img: "./images/review/review-thumb02.jpg", name: "Jane Smith", position: "CEO", review: "Working with this team has been a truly transformative experience for us. From the outset, they took the time to understand our unique challenges and goals, and crafted a tailored strategy that aligned perfectly with our vision." },
    { img: "./images/review/review-thumb03.jpg", name: "David Martin", position: "VP of Operations", review: "Our company was experiencing significant challenges with project management and resource allocation. That’s when we decided to collaborate with this team, and it was a decision we’ll never regret. Their deep industry knowledge and experience ." },
    { img: "./images/review/review-thumb04.jpg", name: "Sara K", position: "Operations Manager", review: "The introduction of AI technologies into our financial operations has been a game-changer, and we owe much of our success to the team. Prior to working with them, our financial forecasting process was manual, inefficient, and prone to errors." },
    { img: "./images/review/review-thumb05.jpg", name: "John D", position: "CEO of TechCorp", review: "Working with this team has been a truly transformative experience for us. From the outset, they took the time to understand our unique challenges and goals, and crafted a tailored strategy that aligned perfectly with our vision." },
    { img: "./images/review/review-thumb06.jpg", name: "Jane M.", position: "Marketing Director", review: "We were initially skeptical about partnering with another service provider, but the team proved us wrong in every way. They took the time to understand our brand, target audience, and specific needs before offering a comprehensive solution that far exceeded our expectations." },
    { img: "./images/review/review-thumb07.jpg", name: "Michael F", position: "Founder", review: "As a growing company in the sustainability sector, we faced a number of operational challenges that hindered our growth potential. Partnering with this team was the best decision we could have made." },
    { img: "./images/review/review-thumb08.jpg", name: "David T", position: "Reviewer Job Position", review: "The partnership we’ve had with this team has been nothing short of exceptional. Before working with them, our financial forecasting process was slow, manual, and prone to errors, which made it difficult to make timely decisions." },
];

const ITEMS_PER_PAGE = 4;
let currentPage = 1;
const totalPages = Math.ceil(caseStudies.length / ITEMS_PER_PAGE);
const caseStudyContainer = document.getElementById("ReviewContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const pageNumber = document.getElementById("pageNumber");

function renderPage(page) {
    caseStudyContainer.innerHTML = "";
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const currentItems = caseStudies.slice(start, end);

    currentItems.forEach(item => {
        const card = document.createElement("a");
        card.href = "#";
        card.classList.add("review-card");``
        card.innerHTML = `
            <img src="./images/quote-icon.svg" width="40" alt="Quote Icon">
            <div class="review-inner">
                <p>${item.review}</p>
                <div class="review-bottom">
                    <div class="review-thumb">
                        <img src="${item.img}" alt="${item.name}" class="cover-image">
                    </div>
                    <h5>${item.name}</h5>
                    <div class="body-small">${item.position}</div>
                </div>
            </div>
        `;
        caseStudyContainer.appendChild(card);
    });

    // Hide/show pagination buttons based on the page number
    prevButton.style.display = page === 1 ? "none" : "inline-block";
    nextButton.style.display = page === totalPages ? "none" : "inline-block";

    pageNumber.textContent = `Page ${page}`;
}

prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
    }
});

// Initial render
renderPage(currentPage);