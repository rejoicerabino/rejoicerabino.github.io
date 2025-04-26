// Navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.classList.add('navbar-hide');
    } else {
        navbar.classList.remove('navbar-hide');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// News
var newsItems =[
    {
        title: 'IMF Reaffirms Commitment to Climate Support Amidst Policy Debates',
        date: 'April 24, 2025',
        excerpt: 'During the IMF and World Bank Spring Meetings, IMF Managing Director Kristalina Georgieva emphasized the organization’s continued support for countries impacted by climate change, addressing macroeconomic implications of climate-related challenges.',
        image: 'assets/img/news1.png',
        link: 'https://www.reuters.com/sustainability/climate-energy/imf-stay-focused-stability-support-countries-climate-change-georgieva-says-2025-04-24/'
    },
    {
        title: 'Welcome to the world of triple-digit spring weather',
        date: 'April 24, 2025',
        excerpt: 'Extreme heat is striking unusually early in 2025, with regions like Phoenix and Palm Springs nearing 100°F in March, and South Asia enduring temperatures up to 120°F, leading to power outages, protests, and wildfires.',
        image: 'assets/img/news6.png',
        link: 'https://www.vox.com/climate/410042/extreme-heat-wave-spring-phoenix-india-asia-climate-change'
    },
    {
        title: 'UK Approves £50 Million for Sun-Dimming Geoengineering Experiments',
        date: 'April 24, 2025',
        excerpt: 'The UK government is set to invest £50 million in geoengineering experiments aimed at mitigating global warming by dimming the sun, including techniques like stratospheric aerosol injection and marine cloud brightening.',
        image: 'assets/img/news3.png',
        link: 'https://www.thetimes.co.uk/article/uk-experiments-dim-sun-global-warming-fss9l5cw5'
    },
    {
        title: 'U.S. State Department Eliminates Office Leading Climate Talks',
        date: 'April 24, 2025',
        excerpt: 'The U.S. State Department is eliminating the Office of Global Change, responsible for leading international climate change negotiations, raising concerns about the country’s commitment to climate diplomacy.',
        image: 'assets/img/news4.jpg',
        link: 'https://www.politico.com/news/2025/04/24/rubio-eliminates-climate-office-00308505'
    },
    {
        title: 'Greece Deploys Record Number of Firefighters Amid Global Warming',
        date: 'April 24, 2025',
        excerpt: 'Greece is preparing for an intense wildfire season by deploying a record 18,000 firefighters and investing €2 billion in firefighting resources, responding to increasingly severe wildfire threats driven by climate change.',
        image: 'assets/img/news5.png',
        link: 'https://www.reuters.com/sustainability/climate-energy/greece-deploy-record-number-firefighters-this-year-amid-global-warming-minister-2025-04-24/'
    },
    {
        title: 'Aid Groups Remove Climate Change References Amid Political Pressure',
        date: 'April 24, 2025',
        excerpt: 'Several aid organizations are editing or removing climate change language from their websites, responding to political pressures and raising concerns about the depoliticization of climate issues.',
        image: 'assets/img/news10.png',
        link: 'https://www.thenewhumanitarian.org/news/2025/04/24/aid-groups-are-erasing-climate-change-their-websites'
    },
    {
        title: '84% of the world’s coral reefs hit by worst bleaching event on record',
        date: 'April 24, 2025',
        excerpt: 'The ongoing 2023–2025 global coral bleaching event has become the most extensive in recorded history, impacting approximately 84% of the Earth’s coral reef ecosystems due to elevated ocean temperatures.',
        image: 'assets/img/news7.jpg',
        link: 'https://apnews.com/article/coral-reef-bleaching-climate-change-fdbeddf7ae3ccc9d7cf85d1c3267e581'
    },
    {
        title: 'Every day is Earth Day for Indigenous people',
        date: 'April 22, 2025',
        excerpt: 'A worldwide survey finds 89 percent of the world’s people believe their country should do more to fight climate change',
        image: 'assets/img/ip.jpg',
        link: 'https://ictnews.org/news/every-day-is-earth-day-for-indigenous-people'
    },
    {
        title: 'Why vanishing sea ice at the poles is a crisis for the entire planet',
        date: 'April 21, 2025',
        excerpt: '2025 has seen unexpected climate wins through activism, innovation, legal action, and renewable energy growth, demonstrating how pressure and persistence can lead to tangible environmental change.',
        image: 'assets/img/news9.png',
        link: 'https://www.newscientist.com/article/2473584-why-vanishing-sea-ice-at-the-poles-is-a-crisis-for-the-entire-planet/'
    },
]
    ;

    var newsRow = document.getElementById('newsRow');

    for (var i = 0; i < newsItems.length; i++) {
        var cardHTML = `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card custom-card h-100 shadow-sm border-0">
            <img src="${newsItems[i].image}" class="card-img-top" alt="${newsItems[i].title}">
            <div class="card-body">
              <div class="news-date">${newsItems[i].date}</div>
              <h5 class="card-title">${newsItems[i].title}</h5>
              <p class="card-text">${newsItems[i].excerpt}</p>
              <a href="${newsItems[i].link}" class="read-more">Read more →</a>
            </div>
          </div>
        </div>
      `;
        newsRow.innerHTML += cardHTML;
    }