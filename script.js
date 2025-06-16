const deliveryFee = 5;
const CART_STORAGE_KEY = 'restaurantAppCart_vOfficialFinal';
const VAT_RATE = 0.15; // 15% VAT rate
const COMPACT_VIEW_STORAGE_KEY = 'restaurantApp_compactView_vOfficialFinal';

const productsData = [ /* ... بيانات منتجاتك كما هي ... */
       {
"id": "IcrUgH",
"name": "نصف مظبي دجاج",
"category": "دجاج",
"description": "2094cal",
"basePrice": 20,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLalqSJe3hiLxe1XfG-oxO-VxvUo5yw9CLCq9JNhWbu5pxBPgYcG3niFN3MeQums8edZ8D-9ycBUxKbxLXGUYIECYN4J3dK-4aujs1F5u0a6liRvtbtWQ7XUy3Oqv7n50HF3PNyTnffUhxxq9hNjpBfSsjrNTtyeLDkTjofmGEpkIfdZI5Q_cc6EoSWnPY/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.33%20PM.jpeg"
},
{
"id": "Gan3oT",
"name": "حبة مظبي دجاج",
"category": "دجاج",
"description": "3398cal",
"basePrice": 40,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLalqSJe3hiLxe1XfG-oxO-VxvUo5yw9CLCq9JNhWbu5pxBPgYcG3niFN3MeQums8edZ8D-9ycBUxKbxLXGUYIECYN4J3dK-4aujs1F5u0a6liRvtbtWQ7XUy3Oqv7n50HF3PNyTnffUhxxq9hNjpBfSsjrNTtyeLDkTjofmGEpkIfdZI5Q_cc6EoSWnPY/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.33%20PM.jpeg"
},
{
"id": "cORcsR",
"name": "حبة مضغوط دجاج",
"category": "دجاج",
"description": "950cal",
"basePrice": 43,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi_QjnAI9FmGpf8jblIUMk_z1grHaLpP0N__CVl3j0kG8bzqrxaJ_Px8YHkS-n5m0Ru6bC9UvPHhfWIPcMs1-N2xCqN7dJn3-bRDeIMWuRujuOHowgk_Pvk5Ox8geGiK71qDIIuCRJdl83zbNLDL-HupVd1QhqOKXA6qMTL9llSj6g3S-qq3OkQgxO1IRu/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.34%20PM.jpeg",
"customizations": [
    {
        "groupName": "اختر نوع الرز",
        "type": "radio",
        "name": "cust_cORcsR___",
        "required": true,
        "options": [
            {
                "text": "رز مزه حبه طويل",
                "value": "rzmza",
                "price": 0
            },
            {
                "text": "ابو بنت",
                "value": "rz1c",
                "price": 1
            }
        ]
    }
]
},
{
"id": "bo8E3D",
"name": "نصف مضغوط دجاج",
"category": "دجاج",
"description": "465cal",
"basePrice": 21.5,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi_QjnAI9FmGpf8jblIUMk_z1grHaLpP0N__CVl3j0kG8bzqrxaJ_Px8YHkS-n5m0Ru6bC9UvPHhfWIPcMs1-N2xCqN7dJn3-bRDeIMWuRujuOHowgk_Pvk5Ox8geGiK71qDIIuCRJdl83zbNLDL-HupVd1QhqOKXA6qMTL9llSj6g3S-qq3OkQgxO1IRu/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.34%20PM.jpeg",
"customizations": [
    {
        "groupName": "اختر نوع الرز",
        "type": "radio",
        "name": "cust_bo8E3D___",
        "required": true,
        "options": [
            {
                "text": "رز مزه حبه طويله",
                "value": "mza55",
                "price": 0
            },
            {
                "text": "رز ابو بنت",
                "value": "bnh5",
                "price": 0.5
            }
        ]
    }
]
},
{
"id": "ij4aSL",
"name": "نفر مضغوط حاشي",
"category": "لحم",
"description": "1400cal",
"basePrice": 60,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbAKWHvfTRMBu6BFzjjjpIpASd4eBpfo3Z1dddSGGprERn7TTTV_VR6D_rfq7gLx-cObmOG7h2FyEwfXxXyASXpCB3YRRp2nu6QEAWFDadiXCK8Px1NevX1e9vJ_ox1kGEeUO0pXGEbPgXi8dEr5jjG9kzCoN-wRzKa34y6kMYsxb1FfzV01S_ac0vN8fC/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.34%20PM%20(1).jpeg",
"customizations": [
    {
        "groupName": "اختر نوع الرز",
        "type": "radio",
        "name": "cust_ij4aSL___",
        "required": true,
        "options": [
            {
                "text": "رز مزه حبه طويله",
                "value": "mm55",
                "price": 0
            },
            {
                "text": "رز ابو بنت",
                "value": "nm55",
                "price": 0
            }
        ]
    }
]
},
{
"id": "QFQv2n",
"name": "مضغوط لحم حري",
"category": "لحم",
"description": "1400cal",
"basePrice": 75,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh10OuGwLxzodGq-ugVLECssLJH0QVH5ygCzvObfFbNrCaDgE6N5rLxjER89BXNMEIqT5v4Ei5mG0ruSsQbSEfRZgNJOk7RYQFpcxEn1QHJFoaNxoGkU6yaFXFHNBArysidwwtr7GaWQbdEjLk5qcOgfGhFU7Vv067YH2gepZsnKWmOg9hgZtCTRkmA2T3K/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.35%20PM%20(2).jpeg",
"customizations": [
    {
        "groupName": "اختر نوع الرز",
        "type": "radio",
        "name": "cust_QFQv2n___",
        "required": true,
        "options": [
            {
                "text": "رز مزه حبه طويله",
                "value": "gbjm1",
                "price": 0
            },
            {
                "text": "رز ابو بنت",
                "value": "mnimj455",
                "price": 0
            }
        ]
    }
]
},
  {
"id": "vMMrip",
"name": "نفر رز ابيض",
"category": "رز",
"description": "266cal",
"basePrice": 6,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjN4kkpCHNbO80YH9_OB9uPZorpH3_gtN00-qbsOuLVQNaAjV8q12ak6LiAs_ThRsqfr66EYKRAszTy7Wi7U-Xpp_QQkO9S9zid7gE2rjGgFjDhuOCZ-MUx1jcFRHmF7GakXRyQRxGmEKIg4i82kCI6GFWgxOBA5ZWTbfDRUzt2-QkaXyNDEQsSDqyVW2z/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.36%20PM.jpeg"
},
{
"id": "2hpxbb",
"name": "ايدام مسقع",
"category": "طلبات جانبية",
"description":  "240cal",
"basePrice": 5,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBt_74UlvRrmOS7c2JL147Fjo6Q5kw71auimiQ34P2LDD4sbGyPmVIkJIK3NIpH08eb9MY6rJ1KQv9yRfP_weDkd8KMz8TX-qVTrLp3CDpqpM1Xe2xG53tS44P1dKyz_6hZxYeeuSdfc0uS_9wL4ItiTSvnAGzqRjjqmQ6Hjef2_X4eQzvy8QXfVcBJtSp/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.35%20PM%20(1).jpeg"
},
{
"id": "Z5Z7fn",
"name": "ايدام مشكل خضار",
"category": "طلبات جانبية",
"description":  "185cal",
"basePrice": 5,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHq-7uFg5JOpWVG4bnfKtsmAz5Ic2SGvuBszOSAyrhMeXD8WU08xJB4u6rRjgbN0VYsPYkKsWRWt4RDXRkV1QUbw5KDzf60n3FQ4CS_hKSf6VDPuwIQWkwLARXW2-GSlzVjIYUijIa51CbVSY96zKJcC6qqffxGYplTKDdUm80ZTsRheKB8vK1zva5myt6/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.35%20PM.jpeg"
},
{
"id": "G8IDza",
"name": "سلطة خيار بالزبادي",
"category": "طلبات جانبية",
"description":  "140cal",
"basePrice": 3,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJUNogRhF4PcuARVAdLfxPO-GWtJBeXlGUO1hbgZRCSuEEHvzeTYDWhN-KDLiXSu4j51q2LYAfqB2J3qKRAB2xYJ42T6Bf4xlUfKk7zsbT-oaGUGTd1A1xHhMVND6rmG3OF-T-xjVPgOrdIpLhkhlVIy-Rwo2uARGhhxt0ucb1yq0mmP8HqgDVZDm5ED7H/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.34%20PM%20(2).jpeg"
},
{
"id": "oaR6u8",
"name": "طحينة",
"category": "طلبات جانبية",
"description": "173cal",
"basePrice": 2,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIFsRjpvSAmC-lLpko67mZSMTA_-p8U8ZuMtLWMRku5T4PNkek9ZdsKBB_Q_oeqQQRDHDVmhCZCATs1SBctuXeYsmsy1RRxS90G02I3vLNgvRB6bmJdMiLapGEdKpouIIoBCCAcGpaElbdImgg4vrDTArNm1yimGCmqFQ5AOuLaKWLakPQEj3aMIqvyaiy/s1600/WhatsApp%20Image%202025-05-24%20at%206.28.40%20PM.jpeg"
},
{
"id": "UcTRIu",
"name": "سلطة حمراء",
"category": "طلبات جانبية",
"description": "73cal",
"basePrice": 1,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIo4kvqkoXiph20KnzOSMAGiqUJs6W2ojXIIcX2NKjrQBdqUerXEFQ0oPjBSZoxR9nWQ-yGW5TF736ntdOj2eVfmOxGVr_UTi4C0Lkh5_6ZySkEbyR9QOtgoUU9_-tw1V76GjT3nWGMIn4IFzVLO1HsZ1hJVxYUB1UucuXVxhYzIsVFEdEfx7sgUaxFyzO/s1600/WhatsApp%20Image%202025-05-24%20at%206.28.40%20PM%20(1).jpeg"
},
{
"id": "fNOvF7",
"name": "كنافة قشطة",
"category": "طلبات جانبية",
"description": "631cal",
"basePrice": 8,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis8KZjbHiBvxwjJIADraRhl7VdCAvmQ2Ko6wAUue3C1jYRD5sDC-Gp9AkdeGRC2dnIOxhqc7hph_9VXUEG5kVrWGW3cz_Wsv7tzWpci_S0FOzEnHpjZDU82boIrqKEJ0rivJeWxuamoN5lVcWHCN-AS7n9HQNGjhwWW_fVDDnNnYyS4KmPxCsSeG0hBxOB/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.37%20PM.jpeg"
},
{
"id": "DBwOHB",
"name": "كنافة نوتيلا",
"category": "طلبات جانبية",
"description": "631cal",
"basePrice": 10,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNxzSjQIlex4wOHZAOcIFyFsE53caiNL1B_2-JpOaMkT77lsefeyyb_jsEkKJbLUT3EeV6HCdlbEy5TujxfI-JnaCBBL-NKp5NDlKJGBXOnK49yWts6lA_GLdI916Mz52xFg-g13FWMW3WLQukVdZ1V7b1IR93JeRfeq0zK7FI9-XTpngbdOVzEUf2d56y/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.36%20PM%20(1).jpeg"
},
{
"id": "JW6aLV",
"name": "ببسي 240 مل",
"category": "المشروبات",
"description": "145cal",
"basePrice": 2,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcezFudCKVd0L161jlMHiBSY-FJ0XLd-0upF-9axG-RHdweob-EX3ej3lLLkzq1cu2wUQRZvUNP60XRo23nQVKIylh0D0-rxrsOrI5WJlT7TwVtCSSxXKd1gCRuv4dCHwz6u-WyBWWzQ56l0rLtnUqZavL04y3UZWpV7sEcuV03PyxVvMPWtXyZGd6P8IF/s224/WhatsApp%20Image%202025-05-24%20at%206.28.37%20PM%20(1).jpeg"
},
{
"id": "JIAGbe",
"name": "ببسي 320 مل",
"category": "المشروبات",
"description": "145cal",
"basePrice": 2.5,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcezFudCKVd0L161jlMHiBSY-FJ0XLd-0upF-9axG-RHdweob-EX3ej3lLLkzq1cu2wUQRZvUNP60XRo23nQVKIylh0D0-rxrsOrI5WJlT7TwVtCSSxXKd1gCRuv4dCHwz6u-WyBWWzQ56l0rLtnUqZavL04y3UZWpV7sEcuV03PyxVvMPWtXyZGd6P8IF/s224/WhatsApp%20Image%202025-05-24%20at%206.28.37%20PM%20(1).jpeg"
},
{
"id": "F1QQDr",
"name": "حمضيات 220 مل",
"category": "المشروبات",
"description": "145cal",
"basePrice": 2,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi9KhsPQCdBXZPxMsyqIqzGaA1KNF-TEq20c3WtbryvrVw-1uMwIbHeUlot_UqR7xSUnhBtuCnw4NHoC3X16DwmYataErAMwcfOhEv3wnFA6lnj9fYi0Cd-75umfEqTe-kGHTUaCP3PvRGBMr4gOhIb3zJP6MfdTxZBD9_vD1OkG60YtwneDHbN3Azs6Uh/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.38%20PM.jpeg"
},
{
"id": "qdyJl8",
"name": "حمضيات 320 مل",
"category": "المشروبات",
"description": "145cal",
"basePrice": 2.5,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi9KhsPQCdBXZPxMsyqIqzGaA1KNF-TEq20c3WtbryvrVw-1uMwIbHeUlot_UqR7xSUnhBtuCnw4NHoC3X16DwmYataErAMwcfOhEv3wnFA6lnj9fYi0Cd-75umfEqTe-kGHTUaCP3PvRGBMr4gOhIb3zJP6MfdTxZBD9_vD1OkG60YtwneDHbN3Azs6Uh/s1280/WhatsApp%20Image%202025-05-24%20at%206.28.38%20PM.jpeg"
},
{
"id": "tVG8tJ",
"name": "موية",
"category": "المشروبات",
"description": "0cal",
"basePrice": 1,
"image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggSwSk7lI8x_WukuPfgYSQaoNMqqw9WzHFYeSnYUcZ9wa0AmystjZhtE2nZ_8nzEwX8_kJvCW3uMBfJeyuSLZXQ8xDYAiZx7_Mfiv-SuPCJ5o2O88d-xKi-Bhrh4JyPx-8Qgz_BIDltShikBFPZBv0R5y56hyHSfi4BoGvm97bmjRmzOZTjlNg2aDjF1M0/s432/WhatsApp%20Image%202025-05-24%20at%207.25.49%20PM.jpeg"
}
];

const modalOverlay = document.getElementById('customization-modal-overlay');
const menuSectionsContainer = document.getElementById('menu-sections');
const filtersContainer = document.getElementById('filters-container');
const cartItemsListElement = document.getElementById('cart-items-list');
const searchInput = document.getElementById('search-input');
const toggleViewBtn = document.getElementById('toggle-view-btn');
const preloader = document.getElementById('preloader');
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
const cartToggleButton = document.getElementById('cart-toggle-btn');
const closeCartButtonSidebar = document.getElementById('close-cart-btn-sidebar');
const cartSidebar = document.getElementById('cart-sidebar');
const pageOverlay = document.getElementById('page-overlay');
const cartCountBadge = document.getElementById('cart-count-badge');
const clearCartBtn = document.getElementById('clear-cart-btn');
const notificationToast = document.getElementById('notification-toast');
const notificationMessage = document.getElementById('notification-message');
const generalOrderNotesTextarea = document.getElementById('general-order-notes');
const deliveryTypeRadios = document.querySelectorAll('input[name="deliveryType"]');
const checkoutBtn = document.getElementById('checkout-btn');
const emptyCartMessage = document.getElementById('empty-cart-message');
const modalContent = document.getElementById('customization-modal-content');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductBasePrice = document.getElementById('modal-product-base-price');
const modalCurrentItemPrice = document.getElementById('modal-current-item-price');
const modalCustomizationsContainer = document.getElementById('modal-customizations-container');
const modalQuantityInput = document.getElementById('modal-quantity');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');
const cartSubtotalAmountElement = document.getElementById('cart-subtotal-amount');
const cartVatAmountElement = document.getElementById('cart-vat-amount');
const deliveryFeeLineElement = document.getElementById('delivery-fee-line');
const deliveryFeeAmountElement = document.getElementById('delivery-fee-amount');
const cartGrandTotalAmountElement = document.getElementById('cart-grand-total-amount');

// --- عناصر جديدة لرقم الطاولة ---
const tableNumberLineElement = document.getElementById('table-number-line');
const tableNumberDisplayElement = document.getElementById('table-number-display');


let cart = [];
let currentDeliveryType = 'pickup';
let currentProductIdInModal = null;
let currentProductInModalObject = null;
let notificationTimeout;
const whatsappNumber = "966510012621";
let currentActiveFilter = 'all';
let currentSearchTerm = '';
let isCompactView = false;
let currentTableNumber = null; // --- لتخزين رقم الطاولة ---

// --- دالة جديدة لقراءة رقم الطاولة من الرابط ---
function getTableNumberFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const table = urlParams.get('table');
    return table ? table.trim() : null;
}

window.addEventListener('load', () => {
    if (preloader) { preloader.classList.add('hidden'); }
    initScrollAnimations();
    currentTableNumber = getTableNumberFromUrl(); // اقرأ رقم الطاولة عند تحميل الصفحة
    updateCartDisplay(); // تأكد من تحديث العرض ليشمل رقم الطاولة إذا وُجد
});

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = (window.scrollY > 300) ? 'flex' : 'none';
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
}

function saveCartToLocalStorage() { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); }
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    cart = storedCart ? JSON.parse(storedCart) : [];
}

function loadViewPreference() {
    const storedView = localStorage.getItem(COMPACT_VIEW_STORAGE_KEY);
    const body = document.body;
    const iconElement = toggleViewBtn.querySelector('i');
    if (storedView === 'true') {
        isCompactView = true;
        body.classList.add('compact-view');
        toggleViewBtn.classList.add('active-compact-view');
        if (iconElement) iconElement.className = 'fas fa-th-list';
        toggleViewBtn.title = "عرض عادي";
    } else {
        isCompactView = false;
        body.classList.remove('compact-view');
        toggleViewBtn.classList.remove('active-compact-view');
        if (iconElement) iconElement.className = 'fas fa-th-large';
        toggleViewBtn.title = "عرض مضغوط";
    }
}
function saveViewPreference() { localStorage.setItem(COMPACT_VIEW_STORAGE_KEY, isCompactView); }

function displayFilterButtons() {
    filtersContainer.innerHTML = '';
    const categories = ['all', ...new Set(productsData.map(p => p.category))];
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('filter-btn', 'animate-on-scroll');
        button.dataset.category = category;
        button.textContent = category === 'all' ? 'عرض الكل' : category;
        if (category === currentActiveFilter) button.classList.add('active');
        button.addEventListener('click', function() {
            currentActiveFilter = this.dataset.category;
            displayProducts();
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
        filtersContainer.appendChild(button);
    });
    initScrollAnimations();
}

function displayProducts() {
    menuSectionsContainer.innerHTML = '';
    let filteredProducts = productsData;
    if (currentActiveFilter !== 'all' && currentActiveFilter) {
        filteredProducts = filteredProducts.filter(p => p.category === currentActiveFilter);
    }
    if (currentSearchTerm) {
        const searchTermLower = currentSearchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchTermLower) ||
            (p.description && p.description.toLowerCase().includes(searchTermLower)) ||
            p.category.toLowerCase().includes(searchTermLower)
        );
    }
    if (filteredProducts.length === 0) {
        menuSectionsContainer.innerHTML = `<p style="text-align:center; padding: 30px; color: var(--text-muted); font-size: 1.1em;">لا توجد منتجات تطابق بحثك أو الفلتر الحالي.</p>`;
        return;
    }
    const productsByCategory = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {});
    const displayOrderCategories = currentActiveFilter === 'all' || !currentActiveFilter
        ? [...new Set(productsData.map(p => p.category))]
        : [currentActiveFilter];
    displayOrderCategories.forEach(category => {
        const productsInCategory = productsByCategory[category];
        if (!productsInCategory || productsInCategory.length === 0) return;
        const categorySection = document.createElement('div');
        categorySection.classList.add('category-section', 'animate-on-scroll');
        const categoryTitle = document.createElement('h2');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);
        const productsGrid = document.createElement('div');
        productsGrid.classList.add('products-grid');
        productsInCategory.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card', 'animate-on-scroll');
            let actionButtonHTML = '';
            if (product.customizations && product.customizations.length > 0) {
                actionButtonHTML = `<button class="customize-btn" onclick="openCustomizationModal('${product.id}')"><i class="fas fa-sliders-h"></i> تخصيص</button>`;
            } else {
                actionButtonHTML = `<button class="direct-add-btn" onclick="addDirectToCart('${product.id}')"><i class="fas fa-cart-plus"></i> أضف للسلة</button>`;
            }
            productCard.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description || ''}</p>
                    <p class="price">${product.basePrice.toFixed(2)} ريال</p>
                    <div class="product-card-actions">${actionButtonHTML}</div>
                </div>`;
            productsGrid.appendChild(productCard);
        });
        categorySection.appendChild(productsGrid);
        menuSectionsContainer.appendChild(categorySection);
    });
    initScrollAnimations();
}

window.addDirectToCart = function(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    const quantity = 1;
    const cartItemId = productId;
    const existingItemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingItemIndex > -1) cart[existingItemIndex].quantity += quantity;
    else cart.push({ cartItemId, id: productId, name: product.name, basePrice: product.basePrice, finalPricePerItem: product.basePrice, quantity, customizations: [], image: product.image });
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification(`"${product.name}" أضيف إلى طلباتك.`);
};

function updateModalPrice() {
    if (!currentProductInModalObject) return;
    let currentPrice = currentProductInModalObject.basePrice;
    currentProductInModalObject.customizations?.forEach(group => {
        const safeGroupName = group.name.replace(/\s+/g, '_');
        const groupElement = document.getElementById(`modal-group-${currentProductInModalObject.id}-${safeGroupName}`);
        if (!groupElement) return;
        if (group.type === 'radio') {
            const selectedRadio = groupElement.querySelector(`input[name="modal-${currentProductInModalObject.id}-${safeGroupName}"]:checked`);
            if (selectedRadio) currentPrice += parseFloat(selectedRadio.dataset.price);
        } else if (group.type === 'checkbox') {
            const checkedBoxes = groupElement.querySelectorAll(`input[name="modal-${currentProductInModalObject.id}-${safeGroupName}"]:checked`);
            checkedBoxes.forEach(cb => currentPrice += parseFloat(cb.dataset.price));
        }
    });
    modalCurrentItemPrice.textContent = `السعر مع الإضافات: ${currentPrice.toFixed(2)} ريال`;
}

window.openCustomizationModal = function(productId) {
    currentProductIdInModal = productId;
    currentProductInModalObject = productsData.find(p => p.id === productId);
    if (!currentProductInModalObject) return;
    modalProductImage.src = currentProductInModalObject.image;
    modalProductTitle.textContent = currentProductInModalObject.name;
    modalProductBasePrice.textContent = `السعر الأساسي: ${currentProductInModalObject.basePrice.toFixed(2)} ريال`;
    modalQuantityInput.value = 1;
    modalCustomizationsContainer.innerHTML = '';
    if (currentProductInModalObject.customizations) {
        currentProductInModalObject.customizations.forEach((group, groupIndex) => {
            const safeGroupName = group.name.replace(/\s+/g, '_');
            const fieldset = document.createElement('fieldset');
            fieldset.classList.add('option-group');
            fieldset.id = `modal-group-${currentProductInModalObject.id}-${safeGroupName}`;
            const legend = document.createElement('legend');
            legend.textContent = `${group.groupName}${group.required ? ' (مطلوب)' : ''}`;
            fieldset.appendChild(legend);
            group.options.forEach((opt, optIndex) => {
                const optionDiv = document.createElement('div');
                optionDiv.classList.add('option-item');
                const input = document.createElement('input');
                input.type = group.type;
                input.id = `modal-opt-${currentProductInModalObject.id}-${safeGroupName}-${optIndex}`;
                input.name = `modal-${currentProductInModalObject.id}-${safeGroupName}`;
                input.value = opt.value;
                input.dataset.price = opt.price;
                input.addEventListener('change', updateModalPrice);
                const label = document.createElement('label');
                label.htmlFor = input.id;
                label.textContent = `${opt.text} ${opt.price > 0 ? `(+${opt.price.toFixed(2)} ريال)` : ''}`;
                optionDiv.appendChild(input);
                optionDiv.appendChild(label);
                fieldset.appendChild(optionDiv);
            });
            modalCustomizationsContainer.appendChild(fieldset);
        });
    }
    updateModalPrice();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
modalQuantityInput.addEventListener('input', updateModalPrice);

function closeCustomizationModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    currentProductIdInModal = null;
    currentProductInModalObject = null;
}
modalCloseBtn.addEventListener('click', closeCustomizationModal);
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) closeCustomizationModal();
});

modalAddToCartBtn.addEventListener('click', function() {
    if (!currentProductInModalObject) return;
    const product = currentProductInModalObject;
    const quantity = parseInt(modalQuantityInput.value);
    if (isNaN(quantity) || quantity <= 0) { alert("الرجاء تحديد كمية صحيحة."); return; }
    let itemPrice = product.basePrice;
    const selectedCustomizations = [];
    let cartItemIdSuffix = '';
    let allRequiredSelected = true;
    if (product.customizations) {
        for (const group of product.customizations) {
            const safeGroupName = group.name.replace(/\s+/g, '_');
            const groupElement = document.getElementById(`modal-group-${product.id}-${safeGroupName}`);
            if (!groupElement) { console.error(`Group element not found for ${safeGroupName}`); continue; }
            let groupSelectedThisIteration = false;
            if (group.type === 'radio') {
                const selectedRadio = groupElement.querySelector(`input[name="modal-${product.id}-${safeGroupName}"]:checked`);
                if (selectedRadio) {
                    itemPrice += parseFloat(selectedRadio.dataset.price);
                    selectedCustomizations.push({ group: group.groupName, text: selectedRadio.labels[0].textContent.split(' (+')[0].trim(), price: parseFloat(selectedRadio.dataset.price) });
                    cartItemIdSuffix += `-${selectedRadio.value}`;
                    groupSelectedThisIteration = true;
                }
                if (group.required && !groupSelectedThisIteration) { alert(`الرجاء اختيار "${group.groupName}" لمنتج "${product.name}".`); allRequiredSelected = false; break; }
            } else if (group.type === 'checkbox') {
                const checkedBoxes = groupElement.querySelectorAll(`input[name="modal-${product.id}-${safeGroupName}"]:checked`);
                let atLeastOneCheckboxSelected = false;
                checkedBoxes.forEach(cb => {
                    itemPrice += parseFloat(cb.dataset.price);
                    selectedCustomizations.push({ group: group.groupName, text: cb.labels[0].textContent.split(' (+')[0].trim(), price: parseFloat(cb.dataset.price) });
                    cartItemIdSuffix += `-${cb.value}`;
                    atLeastOneCheckboxSelected = true;
                });
                if (group.required && !atLeastOneCheckboxSelected) { alert(`الرجاء اختيار واحد على الأقل من "${group.groupName}" لمنتج "${product.name}".`); allRequiredSelected = false; break; }
            }
        }
    }
    if (!allRequiredSelected) return;
    const cartItemId = `${product.id}${cartItemIdSuffix}`;
    const existingItemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingItemIndex > -1) cart[existingItemIndex].quantity += quantity;
    else cart.push({ cartItemId, id: product.id, name: product.name, basePrice: product.basePrice, finalPricePerItem: itemPrice, quantity, customizations: selectedCustomizations, image: product.image });
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification(`"${product.name}" أضيف إلى طلباتك.`);
    closeCustomizationModal();
});

function showNotification(message) {
    const iconElement = notificationToast.querySelector('i');
    if (iconElement) iconElement.className = 'fas fa-check-circle';
    notificationMessage.textContent = message;
    notificationToast.classList.add('show');
    if (notificationTimeout) clearTimeout(notificationTimeout);
    notificationTimeout = setTimeout(() => notificationToast.classList.remove('show'), 3000);
}

function updateCartDisplay() {
    cartItemsListElement.innerHTML = '';
    let subtotal = 0;
    let totalItemsCount = 0;
    const vatLineDetails = document.getElementById('vat-line-details');

    // --- تعديل لعرض رقم الطاولة في السلة ---
    if (currentTableNumber && tableNumberLineElement && tableNumberDisplayElement) {
        tableNumberDisplayElement.textContent = currentTableNumber;
        tableNumberLineElement.style.display = 'flex';
        // إذا كان هناك رقم طاولة، فمن المنطقي إخفاء خيارات التوصيل أو تعطيلها
        // وتعيين نوع الطلب إلى استلام (أو نوع جديد "داخل المطعم")
        // للتبسيط، لن نغير اختيار الراديو تلقائياً هنا، لكن لن نحسب رسوم توصيل
        if (document.querySelector('.delivery-options')) {
            document.querySelector('.delivery-options').style.display = 'none';
        }
    } else if (tableNumberLineElement) {
        tableNumberLineElement.style.display = 'none';
         if (document.querySelector('.delivery-options')) {
            document.querySelector('.delivery-options').style.display = 'block'; // أو 'flex' إذا كان هذا هو العرض الأصلي
        }
    }
    // --- نهاية التعديل ---

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'list-item';
        clearCartBtn.style.display = 'none';
        if (vatLineDetails) vatLineDetails.style.display = 'none';
         // إذا كانت السلة فارغة، ورقم الطاولة موجود، استمر في عرضه
        if (currentTableNumber && tableNumberLineElement) {
             tableNumberLineElement.style.display = 'flex'; // Ensure table number is shown even if cart is empty
        } else if (tableNumberLineElement) {
            tableNumberLineElement.style.display = 'none';
        }

    } else {
        emptyCartMessage.style.display = 'none';
        clearCartBtn.style.display = 'block';
        if (vatLineDetails) vatLineDetails.style.display = 'flex'; // Use flex for consistency with other summary lines
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            let customizationsText = '';
            if (item.customizations && item.customizations.length > 0) {
                customizationsText += '<div class="item-customizations">';
                item.customizations.forEach(cust => {
                    customizationsText += `<div>- ${cust.text}${cust.price > 0 ? ` (+${cust.price.toFixed(2)} ر.س)` : ''}</div>`;
                });
                customizationsText += '</div>';
            }
            listItem.innerHTML = `
                <div class="cart-item-details">
                    <span class="item-name">${item.name}</span>
                    ${customizationsText}
                    <div class="item-qty-price">الكمية: ${item.quantity} × ${item.finalPricePerItem.toFixed(2)} ر.س</div>
                </div>
                <div class="cart-item-actions">
                    <span class="item-total-price">${(item.finalPricePerItem * item.quantity).toFixed(2)} ر.س</span>
                    <button class="remove-item-btn" onclick="removeFromCart(${index})" aria-label="إزالة ${item.name}"><i class="fas fa-trash-alt"></i></button>
                </div>`;
            cartItemsListElement.appendChild(listItem);
            subtotal += item.finalPricePerItem * item.quantity;
            totalItemsCount += item.quantity;
        });
    }
    
    // Subtotal here is price *before* VAT is added, but includes customizations
    // If prices already include VAT, then the logic for VAT calculation needs to change.
    // Assuming basePrice and customization prices are *exclusive* of VAT for now for calculation display.
    // However, the problem description implies "المجموع الفرعي (شامل الضريبة)"
    // Let's assume the prices entered in productsData are *inclusive* of VAT.
    // Then subtotal is the sum of (finalPricePerItem * quantity)
    // And VAT amount is (subtotal * VAT_RATE) / (1 + VAT_RATE)

    cartSubtotalAmountElement.textContent = subtotal.toFixed(2);
    const vatAmount = cart.length > 0 ? (subtotal * VAT_RATE) / (1 + VAT_RATE) : 0;
    if (cartVatAmountElement) cartVatAmountElement.textContent = vatAmount.toFixed(2);
    
    let currentDeliveryFee = 0;
    // لا رسوم توصيل إذا كان الطلب لطاولة
    if (currentDeliveryType === 'delivery' && cart.length > 0 && !currentTableNumber) {
        currentDeliveryFee = deliveryFee;
        deliveryFeeLineElement.style.display = 'flex';
        deliveryFeeAmountElement.textContent = deliveryFee.toFixed(2);
    } else {
        deliveryFeeLineElement.style.display = 'none';
         deliveryFeeAmountElement.textContent = (0).toFixed(2);
    }
    const grandTotal = subtotal + currentDeliveryFee; // Grand total IS subtotal (inclusive of VAT) + delivery fee
    cartGrandTotalAmountElement.textContent = grandTotal.toFixed(2);
    cartCountBadge.textContent = totalItemsCount;
    cartCountBadge.style.display = totalItemsCount > 0 ? 'inline-block' : 'none';
}


deliveryTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        // If a table number exists, delivery type should not be 'delivery'
        if (currentTableNumber && this.value === 'delivery') {
            // Optionally, revert selection or show a message
            // For now, we just update the type, and updateCartDisplay will handle fee logic
            alert("لا يمكن اختيار التوصيل عند وجود رقم طاولة. سيتم اعتبار الطلب داخل المطعم.");
            document.querySelector('input[name="deliveryType"][value="pickup"]').checked = true;
            currentDeliveryType = 'pickup';
        } else {
            currentDeliveryType = this.value;
        }
        updateCartDisplay();
    });
});

window.removeFromCart = function(itemIndex) {
    const removedItemName = cart[itemIndex].name;
    cart.splice(itemIndex, 1);
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification(`"${removedItemName}" أزيل من الطلبات.`);
}
function emptyCart() {
    if (cart.length === 0) return;
    if (confirm("هل أنت متأكد أنك تريد إفراغ سلة الطلبات؟")) {
        cart = [];
        updateCartDisplay();
        saveCartToLocalStorage();
        showNotification("تم إفراغ سلة الطلبات.");
    }
}
clearCartBtn.addEventListener('click', emptyCart);
function emptyCartAfterCheckout() {
    cart = [];
    updateCartDisplay();
    saveCartToLocalStorage();
    closeCartSidebar();
}
checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) { alert("سلة الطلبات فارغة. الرجاء إضافة وجبات أولاً."); return; }

    let message = "طلب جديد من مطعم فلان الفلاني\n\n";
    // --- تعديل لإضافة رقم الطاولة لرسالة الواتساب ---
    if (currentTableNumber) {
        message += `رقم الطاولة: ${currentTableNumber}\n\n`;
        message += "------------------------------\n";
        message += "        تفاصيل الطلب (محلي)\n";
    } else {
         message += "------------------------------\n";
         message += "        تفاصيل الطلب\n";
    }
    // --- نهاية التعديل ---
    message += "------------------------------\n\n";
    let calculatedSubtotal = 0; // This will be sum of (finalPricePerItem * quantity)

    cart.forEach((item, index) => {
        const itemTotal = item.finalPricePerItem * item.quantity;
        message += `${index + 1}. ${item.name}\n`; // اسم المنتج
        if (item.customizations && item.customizations.length > 0) {
            message += `  الإضافات:\n`;
            item.customizations.forEach(cust => {
                message += `    - ${cust.text}${cust.price > 0 ? ` (+${cust.price.toFixed(2)} ر.س)` : ''}\n`;
            });
        }
        message += `  الكمية: ${item.quantity}\n`;
        message += `  سعر القطعة: ${item.finalPricePerItem.toFixed(2)} ر.س\n`; // This price is already final (base + customizations)
        message += `  إجمالي الصنف: ${itemTotal.toFixed(2)} ر.س\n\n`;
        calculatedSubtotal += itemTotal;
    });

    message += "------------------------------\n";
    // Assuming calculatedSubtotal is VAT-inclusive as per "المجموع الفرعي (شامل الضريبة)"
    message += `المجموع الفرعي (شامل الضريبة): ${calculatedSubtotal.toFixed(2)} ر.س\n`;
    // The VAT amount is part of the subtotal, so we show it for clarity
    const calculatedVatAmount = (calculatedSubtotal * VAT_RATE) / (1 + VAT_RATE);
    message += `منها ضريبة القيمة المضافة (15%): ${calculatedVatAmount.toFixed(2)} ر.س\n`;
    
    let finalTotalForMessage = calculatedSubtotal; // Start with VAT-inclusive subtotal

    // --- تعديل لخيارات التوصيل بناءً على وجود رقم طاولة ---
    if (currentTableNumber) {
        // إذا كان هناك رقم طاولة، فهو طلب داخل المطعم
        message += `نوع الطلب: داخل المطعم (الطاولة ${currentTableNumber})\n`;
        // No delivery fee for table orders
    } else {
        // إذا لم يكن هناك رقم طاولة، استخدم خيارات التوصيل العادية
        const selectedDeliveryTypeRadio = document.querySelector('input[name="deliveryType"]:checked');
        const actualDeliveryType = selectedDeliveryTypeRadio ? selectedDeliveryTypeRadio.value : 'pickup';

        if (actualDeliveryType === 'delivery') {
            message += `نوع الطلب: توصيل (داخل الحي)\n`;
            message += `رسوم التوصيل: ${deliveryFee.toFixed(2)} ر.س\n`;
            finalTotalForMessage += deliveryFee;
        } else {
            message += `نوع الطلب: استلام من المطعم\n`;
        }
    }
    // --- نهاية التعديل ---

    const generalNotes = generalOrderNotesTextarea.value.trim();
    if (generalNotes) message += `\nملاحظات إضافية:\n   ${generalNotes}\n`;
    message += `\n------------------------------\n`;
    message += `الإجمالي الكلي: ${finalTotalForMessage.toFixed(2)} ريال سعودي\n\n`;
    message += "شكراً لطلبكم.";


    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    showNotification("جاري تحويلك للواتساب لإرسال الطلب...");
    setTimeout(() => {
         window.open(whatsappUrl, '_blank');
         emptyCartAfterCheckout();
    }, 1500);
});

function openCartSidebar() { cartSidebar.classList.add('open'); pageOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeCartSidebar() { cartSidebar.classList.remove('open'); pageOverlay.classList.remove('active'); document.body.style.overflow = ''; }
cartToggleButton.addEventListener('click', openCartSidebar);
closeCartButtonSidebar.addEventListener('click', closeCartSidebar);
pageOverlay.addEventListener('click', (event) => {
    if (cartSidebar.classList.contains('open') && event.target === pageOverlay) closeCartSidebar();
});
searchInput.addEventListener('input', function() { currentSearchTerm = this.value.trim(); displayProducts(); });
toggleViewBtn.addEventListener('click', function() {
    isCompactView = !isCompactView;
    document.body.classList.toggle('compact-view', isCompactView);
    this.classList.toggle('active-compact-view', isCompactView);
    saveViewPreference();
    const iconElement = this.querySelector('i');
    if (isCompactView) { if (iconElement) iconElement.className = 'fas fa-th-list'; this.title = "عرض عادي"; }
    else { if (iconElement) iconElement.className = 'fas fa-th-large'; this.title = "عرض مضغوط"; }
});

document.addEventListener('DOMContentLoaded', () => {
    currentTableNumber = getTableNumberFromUrl(); // اقرأ رقم الطاولة مجدداً هنا لضمان التحديث
    loadCartFromLocalStorage();
    loadViewPreference();
    displayFilterButtons();
    displayProducts();
    updateCartDisplay(); // تأكد من استدعائها بعد قراءة رقم الطاولة
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // If table number exists, hide delivery options and default to pickup
    if (currentTableNumber) {
        if (document.querySelector('.delivery-options')) {
            document.querySelector('.delivery-options').style.display = 'none';
        }
        currentDeliveryType = 'pickup'; // Ensure this is set if table number exists
        const pickupRadio = document.querySelector('input[name="deliveryType"][value="pickup"]');
        if (pickupRadio) pickupRadio.checked = true;
    } else {
         if (document.querySelector('.delivery-options')) {
            document.querySelector('.delivery-options').style.display = 'block'; // or 'flex'
        }
    }
});
