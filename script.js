
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
    { id: 10, name: "ফেভিকল সাদা", price: "২০ টাকা", img: "./images/Library/Fevicol Whitw.jpg" },
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
    { id: 20, name: "সুইফট টয়লেট ক্লিনার 500ml", price: "১১৫ টাকা", img: "./images/Grocery/Swift.webp" },
];

const printingPrices = [
    { service: "সাদাকালো ফটোকপি (এক পৃষ্ঠা)", price: "৩ টাকা" },
    { service: "রঙিন ফটোকপি (এক পৃষ্ঠা)", price: "১০ টাকা" },
    { service: "সাদাকালো প্রিন্ট (এক পৃষ্ঠা)", price: "৫ টাকা" },
    { service: "রঙিন প্রিন্ট (এক পৃষ্ঠা)", price: "১০ টাকা" },
    { service: "ছবি প্রিন্ট (৪পিছ)", price: "৪০ টাকা" },
    { service: "ছবি প্রিন্ট (৪পিছ এডিট সহ)", price: "৫০ টাকা" },
    { service: "স্ক্যানিং (এক পৃষ্ঠা)", price: "১০ টাকা" },
];

const applicationPrices = [
    { service: "স্কুল, কলেজ ও বিশ্ববিদ্যালয় ভর্তি আবেদন", price: "200 টাকা" },
    { service: "ভোটার আইডি কার্ড (NID) আবেদন", price: "৩00 টাকা" },
    { service: "জন্ম নিবন্ধন আবেদন/সংশোধন", price: "২০০ টাকা" },
    { service: "পাসপোর্ট আবেদন", price: "৫00 টাকা" },
    { service: "টিন সার্টিফিকেট আবেদন", price: "২০০ টাকা" },
    { service: "ড্রাইভিং লাইসেন্স আবেদন", price: "৩০০ টাকা" },
    { service: "অনলাইন GD", price: "২০০ টাকা" },
    { service: "পত্রিকায় বিজ্ঞাপনের আবেদন", price: "২০০ টাকা" },
    { service: "বাস এবং ট্রেনের টিকেট কাটা", price: "৫০ টাকা" }
];


let libraryShowingAll = false;
let groceryShowingAll = false;


function createProductCard(product) {
    return `
        <div class="col-md-4 col-sm-6">
            <div class="card product-card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="product-title">${product.name}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="product-price">${product.price}</span>
                        <button class="btn btn-sm btn-outline-primary" onclick="showAlert('${product.name}')">
                            বিস্তারিত
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
    
    const productsToShow = showAll ? libraryProducts : libraryProducts.slice(0, 6);
    
    productsToShow.forEach(product => {
        container.innerHTML += createProductCard(product);
    });
    
    if (showAll) {
        toggleBtn.innerHTML = 'আরও কম দেখুন <i class="fas fa-arrow-up ms-2"></i>';
        toggleBtn.classList.add('show-all');
    } else {
        toggleBtn.innerHTML = 'আরও পণ্য দেখুন <i class="fas fa-arrow-down ms-2"></i>';
        toggleBtn.classList.remove('show-all');
    }
}


function displayGroceryProducts(showAll) {
    const container = document.getElementById('grocery-products-container');
    const toggleBtn = document.getElementById('grocery-toggle-btn');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    const productsToShow = showAll ? groceryProducts : groceryProducts.slice(0, 6);
    
    productsToShow.forEach(product => {
        container.innerHTML += createProductCard(product);
    });
    
    if (showAll) {
        toggleBtn.innerHTML = 'আরও কম দেখুন <i class="fas fa-arrow-up ms-2"></i>';
        toggleBtn.classList.add('show-all');
    } else {
        toggleBtn.innerHTML = 'আরও পণ্য দেখুন <i class="fas fa-arrow-down ms-2"></i>';
        toggleBtn.classList.remove('show-all');
    }
}


function displayPrintingPrices() {
    const container = document.getElementById('printing-prices');
    if (!container) return;
    
    container.innerHTML = '';
    
    printingPrices.forEach(item => {
        const priceItem = document.createElement('div');
        priceItem.className = 'pricing-item';
        priceItem.innerHTML = `
            <span>${item.service}</span>
            <span class="fw-bold text-primary">${item.price}</span>
        `;
        container.appendChild(priceItem);
    });
}


function displayApplicationPrices() {
    const container = document.getElementById('application-prices');
    if (!container) return;
    
    container.innerHTML = '';
    
    applicationPrices.forEach(item => {
        const priceItem = document.createElement('div');
        priceItem.className = 'pricing-item';
        priceItem.innerHTML = `
            <span>${item.service}</span>
            <span class="fw-bold text-primary">${item.price}</span>
        `;
        container.appendChild(priceItem);
    });
}


function toggleLibraryProducts() {
    libraryShowingAll = !libraryShowingAll;
    displayLibraryProducts(libraryShowingAll);
}


function toggleGroceryProducts() {
    groceryShowingAll = !groceryShowingAll;
    displayGroceryProducts(groceryShowingAll);
}


function showAlert(productName) {
    alert(`বিস্তারিত জানতে আমাদের ফোন করুন: ০১৯৭৮৮৯৯৬২৩\nপণ্য: ${productName}`);
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    displayLibraryProducts(false);
    displayGroceryProducts(false);
    

    displayPrintingPrices();
    displayApplicationPrices();
    

    document.querySelectorAll('.service-card').forEach(card => {
        const target = card.getAttribute('data-target');
        if (target) {
            card.addEventListener('click', function() {
                scrollToSection(target);
            });
        }
    });
});
