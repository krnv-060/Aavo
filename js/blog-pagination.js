const caseStudies = [
    { img: "./images/blog/blog-thumb01.jpg", category: "AI Solutions", date: "December 2, 2024", title: "How AI is Revolutionizing Data Analytics for Businesses" },
    { img: "./images/blog/blog-thumb02.jpg", category: "Customer Experience", date: "December 2, 2024", title: "AI in Customer Service: Enhancing the User Experience" },
    { img: "./images/blog/blog-thumb03.jpg", category: "Predictive Analytics", date: "November 29, 2024", title: "How AI is Shaping the Future of Decision-Making" },
    { img: "./images/blog/blog-thumb04.jpg", category: "Customer Experience", date: "November 29, 2024", title: "AI in Customer Experience: Personalization at Scale" },
    { img: "./images/blog/blog-thumb05.jpg", category: "Automation", date: "November 28, 2024", title: "Sustainable Automation Practices for Modern Enterprises" },
    { img: "./images/blog/blog-thumb06.jpg", category: "Data Solutions", date: "November 28, 2024", title: "Real-Time Data Integration: The Key to Operational Efficiency" },
    { img: "./images/blog/blog-thumb07.jpg", category: "Technology", date: "November 27, 2024", title: "AI: Transforming the Future of Business Operations" },
    { img: "./images/blog/blog-thumb08.jpg", category: "Finance", date: "November 27, 2024", title: "The Role of Machine Learning in Financial Forecasting" },
];

const ITEMS_PER_PAGE = 6;
let currentPage = 1;
const totalPages = Math.ceil(caseStudies.length / ITEMS_PER_PAGE);
const caseStudyContainer = document.getElementById("BlogContainer");
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
        card.classList.add("blog-card");
        card.innerHTML = `
            <div class="blog-thumb">
                <img src="${item.img}" alt="Blog Thumb 01" class="cover-image">
            </div>
            <div class="blog-content">
                <div class="blog-info">
                    <div>${item.category}</div>-<div>${item.date}</div>
                </div>
                <h4 class="blog-title">${item.title}</h4>
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