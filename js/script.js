function preloader() {
    const imagesList = [
         "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];

    const images = [];

    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }
}

window.addEventListener("load", preloader);

// BUTTONS
const buttons = document.querySelectorAll(".buttons button");

// CONTENT CONTAINER
const content = document.getElementById("content");

// RESOURCE OBJECT
const resources = {
    solar: {
        headingContent: "Solar Power",
        bodyText: "Solar panels are becoming cheaper and more accessible. Solar power is one of the most accessible forms of renewable energy for everyday households. As technology improves, the cost of solar panels continues to decrease, making it easier for people with average budgets to adopt clean energy solutions. Government incentives and financing options also help reduce the upfront cost, allowing more homeowners to make the switch."
,
        imgUrl: "./img/img-1.jpg",
        imgAlt: "Solar panels"
    },
    wind: {
        headingContent: "Wind Energy",
        bodyText: "Wind energy is a cost-effective and sustainable solution that is becoming more accessible to communities and homeowners. Small-scale wind turbines can be installed in suitable areas to generate clean electricity and reduce reliance on traditional power sources. As technology advances, installation and maintenance costs are decreasing, making wind power a more realistic option for people with average budgets. Over time, wind energy helps lower energy bills while supporting a cleaner environment.",
        imgUrl: "./img/img-2.jpg",
        imgAlt: "Wind turbines"
    },
    efficiency: {
        headingContent: "Energy Efficiency",
        bodyText: "Smart homes use advanced technology and energy-efficient appliances to reduce overall power consumption. Devices like smart thermostats, LED lighting, and energy monitoring systems help homeowners better control and optimize their energy use. These upgrades are becoming more affordable and can significantly lower monthly utility costs. By improving efficiency, households can reduce waste and contribute to a more sustainable and budget-friendly lifestyle.",
        imgUrl: "./img/img-3.jpg",
        imgAlt: "Energy efficiency"
    }
};

// HANDLE CLICK
function handleSelection(event) {

    // REMOVE active-button
    buttons.forEach(btn => {
        if (btn.hasAttribute("id")) {
            btn.removeAttribute("id");
        }
    });

    // ADD active-button to clicked
    event.target.setAttribute("id", "active-button");

    let data;

    if (event.target.textContent === "Solar") {
        data = resources.solar;
    } else if (event.target.textContent === "Wind") {
        data = resources.wind;
    } else {
        data = resources.efficiency;
    }

    content.innerHTML = `
        <h1>${data.headingContent}</h1>
        <img src="${data.imgUrl}" alt="${data.imgAlt}">
        <p>${data.bodyText}</p>
    `;
}

// EVENT LISTENERS
buttons.forEach(button => {
    button.addEventListener("click", handleSelection);
});