const caseStudies = [
    { img: "./images/case-study/casestudy-thumb01.jpg", category: "Industrial Automation", date: "November 2024", title: "Unlocking New Insights in Financial Analysis for FinServe Ltd with AI" },
    { img: "./images/case-study/casestudy-thumb02.jpg", category: "Retail Customer Experience", date: "November 2024", title: "Elevating Retail Customer Experiences Through AI-Powered Solutions for ShopEase" },
    { img: "./images/case-study/casestudy-thumb03.jpg", category: "Digital Marketing", date: "November 2024", title: "Enhancing User Retention Through ClickBoost’s Predictive Engagement Framework" },
    { img: "./images/case-study/casestudy-thumb04.jpg", category: "E-commerce Optimization", date: "November 2024", title: "Empowering E-commerce Giants Like TechMart with AI-Driven Operational Tools" },
    { img: "./images/case-study/casestudy-thumb05.jpg", category: "Industrial Automation", date: "November 2024", title: "Driving Industrial Efficiency Through AI for BuildSmart’s Manufacturing Network" },
    { img: "./images/case-study/casestudy-thumb06.jpg", category: "Travel & Itinerary Planning", date: "November 2024", title: "Simplifying Travel Planning for Users Through TravelX's AI Innovations" },
    { img: "./images/case-study/casestudy-thumb07.jpg", category: "Market Analysis", date: "November 2024", title: "Boosting Sales Performance for RetailPro with AI-Powered Market Analysis" },
    { img: "./images/case-study/casestudy-thumb08.jpg", category: "Education", date: "November 2024", title: "Enhancing Learning Platforms at EduLearn with Personalized AI Solutions" },
];

const ITEMS_PER_PAGE = 6;
let currentPage = 1;
const totalPages = Math.ceil(caseStudies.length / ITEMS_PER_PAGE);
const caseStudyContainer = document.getElementById("caseStudyContainer");
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
        card.classList.add("case-study-card");
        card.innerHTML = `
            <div class="case-study-thumb">
                <img src="${item.img}" loading="eager" alt="${item.title}">
            </div>
            <div class="case-study-info">
                <div class="blog-info">
                    <div>${item.category}</div>-<div>${item.date}</div>
                </div>
                <h4>${item.title}</h4>
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