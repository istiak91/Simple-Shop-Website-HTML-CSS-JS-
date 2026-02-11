const libraryProducts = [
    { id: 1, name: "ফ্রেশ খাতা", price: "55 টাকা", img: "./images/Library/Fresh Khata.jpg" },
    { id: 2, name: "মেটাডোর হাই স্কুল", price: "5 টাকা", img: "./images/Library/Matador Hi School.jpg" },
    { id: 3, name: "পেট্রা পেন্সিল", price: "১০ টাকা", img: "./images/Library/Petra Pencil.jpg" },
    { id: 4, name: "ডোমস রাবার", price: "১০ টাকা", img: "./images/Library/Doms Triangle.jpg" },
    { id: 5, name: "ডেলি কাটার", price: "১০ টাকা", img: "./images/Library/i-select Sharpner.webp" },
    { id: 6, name: "টিটি রঙ পেন্সিল", price: "১৫০ টাকা", img: "./images/Library/TiTi Oil Color Pencil.jpg" },
    { id: 7, name: "ক্লাসমেট টপ টেন খাতা", price: "৩০ টাকা", img: "./images/Library/Classmate Top Ten Khata.jpg" },
    { id: 8, name: "A4 কালার পেপার", price: "৩ টাকা", img: "./images/Library/Colour Paper.jpg" },
    { id: 9, name: "Good Luck Express DF Ball Point Pen", price: "১০ টাকা", img: "./images/Library/Good Luck Pata.JPG" },
    { id: 10, name: "Good Luck Craze Ball Point Pen", price: "১০ টাকা", img: "./images/Library/Good Luck Craze.png" },
    { id: 11, name: "মেটাডোর অল টাইম", price: "৬ টাকা", img: "./images/Library/Matador All Time.jpg" },
    { id: 12, name: "মেটাডোর অরবিট", price: "৫ টাকা", img: "./images/Library/Matador Orbit.jpg" },
    { id: 13, name: "রেডলিফ হাইলাইটার", price: "৪০ টাকা", img: "./images/Library/RedLeaf Highliter.jpg" },
    { id: 14, name: "ফ্লেক্সঅফিস হাইলাইটার", price: "৪০ টাকা", img: "./images/Library/Flexoffice Highliter.jpg" },
    { id: 15, name: "কার্বন 2B পেন্সিল", price: "১০ টাকা", img: "./images/Library/KARBON 2B Pencil.jpg" },
    { id: 16, name: "ডোমস এক্সট্রা লং রাবার", price: "১৫ টাকা", img: "./images/Library/Doms Extra Long Eraser.png" },
    { id: 17, name: "পেট্রা রঙ পেন্সিল ১৩পিছ", price: "২০০ টাকা", img: "./images/Library/Petra Colour 13.jpg" },
    { id: 18, name: "ডোমস রঙ পেন্সিল ১২পিছ", price: "৮০ টাকা", img: "./images/Library/Doms Colour 12.jpg" },
    { id: 19, name: "ফ্রেশ প্লাস্টিক স্কেল (ছট/বড়)", price: "১৫/২০ টাকা", img: "./images/Library/Plastic Scale.jpg" },
    { id: 20, name: "ফেভিকল সাদা", price: "২০ টাকা", img: "./images/Library/Fevicol Whitw.jpg" },
    { id: 21, name: "ফেভিকল ক্লিয়ার", price: "২৫ টাকা", img: "./images/Library/Fevicol Water.webp" },
    { id: 22, name: "কস্টিপ", price: "৫০ টাকা", img: "./images/Library/Kostip.jpg" },
    { id: 23, name: "মেটাডোর ফাইল", price: "২০ টাকা", img: "./images/Library/Matador File.jpg" },
    { id: 24, name: "পেন্সিল এন্ড পেন নেট ব্যাগ", price: "৩০ টাকা", img: "./images/Library/Pencil Bag.jpg" },
    { id: 25, name: "ভোমোড়", price: "১৫ টাকা", img: "./images/Library/Vomor.webp" },
    { id: 26, name: "সুতা", price: "২০ টাকা", img: "./images/Library/Suta.jpg" }
];

const groceryProducts = [
    { id: 1, name: "প্রান চিনিগুড়া চাল", price: "১৬৫ টাকা", img: "./images/Grocery/pran-chinigura-aromatic-rice-1-kg.jpg" },
    { id: 2, name: "মোল্লা সুপার সল্ট ১কেজি", price: "৪০ টাকা", img: "./images/Grocery/Molla-salt.jpg" },
    { id: 3, name: "রাঁধুনী বিরিয়ানি মসলা", price: "৬০ টাকা", img: "./images/Grocery/Radhuni_Biriyani_ Mosla.jpg" },
    { id: 4, name: "রাঁধুনী বার-বি-কিউ মসলা", price: "৮০ টাকা", img: "./images/Grocery/Radhuni BBQ Mosla.jpg" },
    { id: 5, name: "রাঁধুনী রোস্ট মসলা", price: "৬৫ টাকা", img: "./images/Grocery/Radhuni Roast Mosla.jpg" },
    { id: 6, name: "মিঃ নুডুলস ৮পিছ", price: "১৭০ টাকা", img: "./images/Grocery/mrnoodles-magic-masala-8pack.jpg" },
    { id: 7, name: "মিঃ নুডুলস ৪পিছ", price: "৫০ টাকা", img: "./images/Grocery/mrnoodles-4pcs.webp" },
    { id: 8, name: "মিঃ নুডুলস (কাপ)", price: "৩৫ টাকা", img: "./images/Grocery/cup-noodles.webp" },
    { id: 9, name: "আফি মুড়ি (আকিজ) ২০০গ্রাম/৫০০গ্রাম", price: "৩৫/৭০ টাকা", img: "./images/Grocery/Muri.jpg" },
    { id: 10, name: "আকিজ চিড়া ২০০গ্রাম/৫০০গ্রাম", price: "৪০/৭৫ টাকা", img: "./images/Grocery/Chira.jpg" },
    { id: 11, name: "আকিজ সরিষার তেল 50ml", price: "25 টাকা", img: "./images/Grocery/Mustard-oil-80-ml.jpg" },
    { id: 12, name: "পটাটা বিস্কিট", price: "৩০ টাকা", img: "./images/Grocery/Potata.jpg" },
    { id: 13, name: "প্রান ম্যাংগো জুস 200ml", price: "২০ টাকা", img: "./images/Grocery/Pran Mango.webp" },
    { id: 14, name: "প্রান ফ্রুটো 500ml", price: "৪৫ টাকা", img: "./images/Grocery/Frooto.jpg" },
    { id: 15, name: "ড্রিংকো 250ml", price: "৩০ টাকা", img: "./images/Grocery/Drinko.png" },
    { id: 16, name: "সিপইট পাউডার ড্রিংক (আকিজ)", price: "৯০ টাকা", img: "./images/Grocery/Tang.jpg" },
    { id: 17, name: "হুইল গুড়া সাবান আধা-কেজি/এক-কেজি", price: "৭৫/১৪৫ টাকা", img: "./images/Grocery/wheel-washing-powder-2-in-1-clean-fresh-500-gm.jpg" },
    { id: 18, name: "ভিম বার ১২৫গ্রাম/ ৩০০গ্রাম", price: "১৫/৪০ টাকা", img: "./images/Grocery/Vim bar.jpg" },
    { id: 19, name: "গ্লিটার ডিশ ওয়াশ Refill 250ml", price: "৭০ টাকা", img: "./images/Grocery/Glitter.jpg" },
    { id: 20, name: "সুইফট টয়লেট ক্লিনার 500ml", price: "১১৫ টাকা", img: "./images/Grocery/Swift.webp" }
];

const printingPrices = [
    { service: "সাদাকালো ফটোকপি (এক পৃষ্ঠা)", price: "৩ টাকা" },
    { service: "রঙিন ফটোকপি (এক পৃষ্ঠা)", price: "১০ টাকা" },
    { service: "সাদাকালো প্রিন্ট (এক পৃষ্ঠা)", price: "৫ টাকা" },
    { service: "রঙিন প্রিন্ট (এক পৃষ্ঠা)", price: "১০ টাকা" },
    { service: "ছবি প্রিন্ট (৪পিছ)", price: "৪০ টাকা" },
    { service: "ছবি প্রিন্ট (৪পিছ এডিট সহ)", price: "৫০ টাকা" },
    { service: "স্ক্যানিং (এক পৃষ্ঠা)", price: "১০ টাকা" }
];

const applicationPrices = [
    { service: "স্কুল, কলেজ ও বিশ্ববিদ্যালয় ভর্তি আবেদন", price: "200 টাকা" },
    { service: "ভোটার আইডি কার্ড (NID) আবেদন", price: "৩০০ টাকা" },
    { service: "জন্ম নিবন্ধন আবেদন/সংশোধন", price: "২০০ টাকা" },
    { service: "পাসপোর্ট আবেদন", price: "৪০০ টাকা" },
    { service: "জমির নামজারি", price: "৩০০ টাকা" },
    { service: "জমির কর প্রদান", price: "১০০ টাকা" },
    { service: "টিন সার্টিফিকেট আবেদন", price: "১৫০ টাকা" },
    { service: "ড্রাইভিং লাইসেন্স আবেদন", price: "৩০০ টাকা" },
    { service: "অনলাইন GD", price: "১৫০ টাকা" },
    { service: "পত্রিকায় বিজ্ঞাপনের আবেদন", price: "১৫০ টাকা" },
    { service: "বাস এবং ট্রেনের টিকেট কাটা", price: "৫০ টাকা" }
];

let libraryShowingAll = false;
let groceryShowingAll = false;

function createProductCard(product) {
    return `
        <div class="col-md-4 col-sm-6 col-lg-3">
            <div class="card product-card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}" loading="lazy"
                     onerror="this.onerror=null; this.src='./images/placeholder.jpg'">
                <div class="card-body">
                    <h5 class="product-title">${product.name}</h5>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <span class="product-price">${product.price}</span>
                        <button class="btn btn-detail" onclick="showAlert('${product.name}')">
                            <i class="fas fa-shopping-cart me-1"></i> বিস্তারিত
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function displayLibraryProducts(showAll) {
    const container = document.getElementById('library-products-container');
    const toggleBtn = document.getElementById('library-toggle-btn');
    if (!container) return;
    container.innerHTML = '';
    const productsToShow = showAll ? libraryProducts : libraryProducts.slice(0, 8);
    productsToShow.forEach(product => container.innerHTML += createProductCard(product));
    toggleBtn.innerHTML = showAll 
        ? 'আরও কম দেখুন <i class="fas fa-arrow-up ms-2"></i>' 
        : 'আরও পণ্য দেখুন <i class="fas fa-arrow-down ms-2"></i>';
    toggleBtn.classList.toggle('show-all', showAll);
}

function displayGroceryProducts(showAll) {
    const container = document.getElementById('grocery-products-container');
    const toggleBtn = document.getElementById('grocery-toggle-btn');
    if (!container) return;
    container.innerHTML = '';
    const productsToShow = showAll ? groceryProducts : groceryProducts.slice(0, 8);
    productsToShow.forEach(product => container.innerHTML += createProductCard(product));
    toggleBtn.innerHTML = showAll 
        ? 'আরও কম দেখুন <i class="fas fa-arrow-up ms-2"></i>' 
        : 'আরও পণ্য দেখুন <i class="fas fa-arrow-down ms-2"></i>';
    toggleBtn.classList.toggle('show-all', showAll);
}

function displayPrintingPrices() {
    const container = document.getElementById('printing-prices');
    if (container) {
        container.innerHTML = printingPrices.map(item => 
            `<div class="pricing-item"><span>${item.service}</span><span class="fw-bold text-primary">${item.price}</span></div>`
        ).join('');
    }
}

function displayApplicationPrices() {
    const container = document.getElementById('application-prices');
    if (container) {
        container.innerHTML = applicationPrices.map(item => 
            `<div class="pricing-item"><span>${item.service}</span><span class="fw-bold text-success">${item.price}</span></div>`
        ).join('');
    }
}

function toggleLibraryProducts() { libraryShowingAll = !libraryShowingAll; displayLibraryProducts(libraryShowingAll); }
function toggleGroceryProducts() { groceryShowingAll = !groceryShowingAll; displayGroceryProducts(groceryShowingAll); }

function showAlert(productName) {
    alert(`📞 বিস্তারিত জানতে কল করুন: ০১৯৭৮৮৯৯৬২৩\nপণ্য: ${productName}\nআমরা সকাল ১০টা – রাত ১০টা পর্যন্ত সেবা দিচ্ছি।`);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function performSearch(query) {
    if (!query.trim()) {
        clearSearch();
        return;
    }
    const lowerQuery = query.toLowerCase().trim();
    const allProducts = [...libraryProducts, ...groceryProducts];
    const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(lowerQuery)
    );
    
    const resultsSection = document.getElementById('searchResultsSection');
    const resultsContainer = document.getElementById('searchResultsContainer');
    const resultCountText = document.getElementById('resultCountText');
    
    if (results.length === 0) {
        resultCountText.innerText = 'দুঃখিত, কোনো পণ্য পাওয়া যায়নি';
        resultsContainer.innerHTML = '<div class="col-12 text-center py-5"><i class="fas fa-search fa-3x text-muted mb-3"></i><h5>কিছু পাওয়া যায়নি</h5><p class="text-muted">অন্য কিওয়ার্ড দিয়ে চেষ্টা করুন</p></div>';
    } else {
        resultCountText.innerText = `মোট ${results.length}টি পণ্য পাওয়া গেছে`;
        resultsContainer.innerHTML = results.map(product => createProductCard(product)).join('');
    }
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearSearch() {
    const resultsSection = document.getElementById('searchResultsSection');
    if (resultsSection) resultsSection.style.display = 'none';
    const navbarInput = document.getElementById('navbarSearchInput');
    const heroInput = document.getElementById('heroSearchInput');
    if (navbarInput) navbarInput.value = '';
    if (heroInput) heroInput.value = '';
}

function initSearch() {
    const navbarInput = document.getElementById('navbarSearchInput');
    const navbarIcon = document.getElementById('navbarSearchIcon');
    
    if (navbarInput) {
        navbarInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
        navbarInput.addEventListener('input', function(e) {
            if (this.value.trim() === '') {
                clearSearch();
            }
        });
    }
    if (navbarIcon) {
        navbarIcon.addEventListener('click', function() {
            const input = document.getElementById('navbarSearchInput');
            if (input) performSearch(input.value);
        });
    }
    
    const heroInput = document.getElementById('heroSearchInput');
    const heroBtn = document.getElementById('heroSearchBtn');
    
    if (heroInput) {
        heroInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
        heroInput.addEventListener('input', function(e) {
            if (this.value.trim() === '') {
                clearSearch();
            }
        });
    }
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            const input = document.getElementById('heroSearchInput');
            if (input) performSearch(input.value);
        });
    }
    
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayLibraryProducts(false);
    displayGroceryProducts(false);
    displayPrintingPrices();
    displayApplicationPrices();
    
    initSearch();
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const target = this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
            if (target) scrollToSection(target);
        });
    });
    
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset + 120;
        sections.forEach(sec => {
            const height = sec.offsetHeight;
            const top = sec.offsetTop - 100;
            const id = sec.getAttribute('id');
            if (scrollY > top && scrollY <= top + height) {
                document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    });
});
