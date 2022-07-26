(function() {

    const products = [
        {
            id: "1",
            title: "Fazioli Brunei - $ 400 000",
            description: "Focusing not on quantity, but on quality, Paolo created the Fazioli Concert Grand Brunei, an exquisite 3-meter masterpiece  that still holds the status of the greatest achievement and can be bought for $400,000.",
            image: "img/fazioli-brunei.jpg"
        },
        {
            id: "2",
            title: "Red Pops for, Steinway Sons - $ 1,925 млн",
            description: "And the central highlight of the promotion was the impressively beautiful piano Red Pops for (RED), Steinway Sons, which was later sold to billionaire philanthropist Stuart Rara for $1.925 million.",
            image: "img/red-pops-for.jpg"
        },
        {
            id: "3",
            title: "Crystal - $ 3,22 млн",
            description: "The Heintzman piano, developed by the Canadian company, is an exquisite instrument with a body made of crystal. The piano was created specifically for performances in large concert halls. The instrument was presented for the first time at the opening ceremony of the Olympic Games in Beijing, 2008, when the Chinese pianist Lang Lang played it. The piano was later sold for $3.22 million.",
            image: "img/crystal.jpg"
        }
    ];

})();

function renderProducts(products) {
    const  productContainer = document.querySelector('.section__main-top-piano-music');
    productContainer.innerHTML = ''; 
    for (const product of products) {
        productContainer.innerHTML += `
        <article class="article__piano-top">
           <img src="${pianoTop.image}" class="img__fazioli-brunei" alt="${pianoTop.title}">
           <h2 class="main__subtitle-fazioli-brunei">${pianoTop.title}</h2>
           <p class="main__text-fazioli-brunei">${pianoTop.description}</p>
        </article>
        `
    }
}

renderProducts(products);