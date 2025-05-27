const deliveryFee = 10;
const CART_STORAGE_KEY = 'restaurantAppCart_vFinalWithHoursAndAlerts';
const VAT_RATE = 0.15;
const COMPACT_VIEW_STORAGE_KEY = 'restaurantApp_compactView';

const restaurantOperatingHours = {
     everyday: { open: 1200, close: 2300 } // 12:00 PM to 11:00 PM
};
const closedMessage = "عذراً،لايمكنك الطلب الان فالمطعم مغلق حالياً. أوقات العمل من 12:00 ظهراً حتى 11:00 مساءً.";

function isRestaurantOpen() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    let hoursForToday;
    if (restaurantOperatingHours.everyday) {
        hoursForToday = restaurantOperatingHours.everyday;
    } else if (restaurantOperatingHours[currentDay]) {
        hoursForToday = restaurantOperatingHours[currentDay];
    } else { return false; }
    if (!hoursForToday || typeof hoursForToday.open === 'undefined' || typeof hoursForToday.close === 'undefined') { return false; }
    return currentTime >= hoursForToday.open && currentTime < hoursForToday.close;
}

function showRestaurantClosedAlert() {
    alert(closedMessage);
}

const productsData = [
    {
        id: 'meal1', name: 'برجر لحم', category: 'ساندويتشات',
        description: 'قطعة لحم بقري طازجة مشوية، خس، طماطم، بصل، صوص خاص في خبز البرجر.',
        basePrice: 12, image: 'https://images.deliveryhero.io/image/hungerstation/menuitem/image/1cd52e657a498d7cce1c77558a651b69?width=256&quality=75',
        customizations: [
            { groupName: 'الحجم', type: 'radio', name: 'meal1_size', required: true,
              options: [{ text: 'عادي', value: 'regular', price: 0 }, { text: 'كبير (دبل)', value: 'large', price: 6 }] },
            { groupName: 'الإضافات', type: 'checkbox', name: 'meal1_extras',
              options: [{ text: 'جبنة إضافية', value: 'extra_cheese', price: 2 }, { text: 'مخلل', value: 'pickles', price: 1 }] }
        ]
    },
    {
        id: 'meal2', name: 'بيتزا مارغريتا', category: 'بيتزا',
        description: 'عجينة بيتزا تقليدية مغطاة بصلصة طماطم، جبنة موزاريلا طازجة، وريحان.',
        basePrice: 12, image: 'https://cdn.salla.sa/lwlEj/lr8AMrrwRY7pr9RdcofJOMdWkYT9jny040gM1EGH.jpg',
        customizations: [
            { groupName: 'الحجم', type: 'radio', name: 'meal2_pizza_size', required: true,
              options: [{ text: 'صغير', value: 'small', price: 0 }, { text: 'وسط', value: 'medium', price: 3 }, { text: 'كبير', value: 'large', price: 6 }] }
        ]
    },
    {
        id: 'meal3', name: 'بيتزا ببروني', category: 'بيتزا',
        description: 'بيتزا – صلصة – جبن مبشورة – شرائح ببروني',
        basePrice: 12, image: 'https://shata-limon.com/wp-content/uploads/2024/11/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.png',
        customizations: [
            { groupName: 'الحجم', type: 'radio', name: 'meal3_pizza_size', required: true,
              options: [{ text: 'صغير', value: 'small', price: 0 }, { text: 'وسط', value: 'medium', price: 3 }, { text: 'كبير', value: 'large', price: 6 }] }
        ]
    },
    {
        id: 'drink1', name: 'مشروب غازي', category: 'مشروبات',
        description: 'اختر مشروبك الغازي المفضل.',
        basePrice: 3, image: 'https://mahkoortea.com/wp-content/uploads/2024/10/s850854577414200103_p46_i4_w500.webp',
          customizations: [
            { groupName: 'المشروب', type: 'radio', name: 'drink1_type', required: true,
              options: [{ text: 'ببسي', value: 'pepsi', price: 0 }, { text: 'ديو', value: 'dew', price: 0 },{ text: 'سفن اب', value: '7up', price: 0 }, { text: 'حمضيات', value: 'citrus', price: 0 }] }
        ]
    },
    {
        id: 'drink2', name: 'موية', category: 'مشروبات',
        description: 'مياة 330مل',
        basePrice: 1, image: 'https://images.deliveryhero.io/image/hungerstation/menuitem/image_url_ref/e0016190b9a8488decf2d8ad4f49d1a0.jpg?width=256&quality=75',

    },
    {
        id: 'side1', name: 'بطاطس مقلية', category: 'أطباق جانبية',
        description: 'بطاطس مقلية مقرمشة ومتبلة.',
        basePrice: 5, image: 'https://shata-limon.com/wp-content/uploads/2024/11/%D8%B5%D8%AD%D9%86-%D8%A8%D8%B7%D8%A7%D8%B7%D8%B3.png',
      customizations: [
            { groupName: 'الاضافات', type: 'radio', name: 'side1_fries_extras',
              options: [{ text: 'بدون كاتشب', value: 'no_ketchup', price: 0 }, { text: 'بدون شطة', value: 'no_hot_sauce', price: 0 }, { text: 'بدون مايونيز', value: 'no_mayo', price: 0 }] }
        ]
    },
    {
        id: 'dessert1', name: 'كيكة شوكولاتة', category: 'حلويات',
        description: 'قطعة غنية من كيكة الشوكولاتة مع صوص الشوكولاتة.',
        basePrice: 18, image: 'https://cdn1-m.zahratalkhaleej.ae/store/archive/image/2023/2/7/51e14985-ec85-40b4-9079-64927ae9514f.jpg',
    }
];

// DOM Elements
const modalOverlay = document.getElementById('customization-modal-overlay');
const modalContent = document.getElementById('customization-modal-content');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductBasePrice = document.getElementById('modal-product-base-price');
const modalCurrentItemPrice = document.getElementById('modal-current-item-price');
const modalCustomizationsContainer = document.getElementById('modal-customizations-container');
const modalQuantityInput = document.getElementById('modal-quantity');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');
const decreaseQuantityBtn = document.getElementById('decrease-quantity');
const increaseQuantityBtn = document.getElementById('increase-quantity');

const menuSectionsContainer = document.getElementById('menu-sections');
const filtersContainer = document.getElementById('filters-container');
const cartItemsListElement = document.getElementById('cart-items-list');
const cartSubtotalAmountElement = document.getElementById('cart-subtotal-amount');
const cartVatAmountElement = document.getElementById('cart-vat-amount');
const deliveryFeeLineElement = document.getElementById('delivery-fee-line');
const deliveryFeeAmountElement = document.getElementById('delivery-fee-amount');
const cartGrandTotalAmountElement = document.getElementById('cart-grand-total-amount');
const checkoutBtn = document.getElementById('checkout-btn');
const emptyCartMessage = document.getElementById('empty-cart-message');
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

const searchInput = document.getElementById('search-input');
const toggleViewBtn = document.getElementById('toggle-view-btn');

let cart = [];
let currentDeliveryType = 'pickup';
let currentProductIdInModal = null;
let currentProductInModalObject = null;
let notificationTimeout;
const whatsappNumber = "966510012621";
let currentActiveFilter = 'all';
let currentSearchTerm = '';
let isCompactView = false;

function saveCartToLocalStorage() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
        cart = JSON.parse(storedCart);
    } else {
        cart = [];
    }
}

function loadViewPreference() {
    const storedView = localStorage.getItem(COMPACT_VIEW_STORAGE_KEY);
    if (storedView === 'true') {
        isCompactView = true;
        document.body.classList.add('compact-view');
        toggleViewBtn.classList.add('active-compact-view');
        toggleViewBtn.innerHTML = '<i class="fas fa-th-list"></i>';
        toggleViewBtn.title = "عرض عادي";
    } else {
        isCompactView = false;
        document.body.classList.remove('compact-view');
        toggleViewBtn.classList.remove('active-compact-view');
        toggleViewBtn.innerHTML = '<i class="fas fa-th-large"></i>';
        toggleViewBtn.title = "عرض مضغوط";
    }
}

function saveViewPreference() {
    localStorage.setItem(COMPACT_VIEW_STORAGE_KEY, isCompactView);
}

function displayFilterButtons() {
    filtersContainer.innerHTML = '';
    const categories = ['all', ...new Set(productsData.map(p => p.category))];
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('filter-btn');
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
        menuSectionsContainer.innerHTML = `<p style="text-align:center; padding: 20px; color: #777;">لا توجد منتجات تطابق بحثك أو الفلتر الحالي.</p>`;
        return;
    }

    const productsByCategory = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    const displayOrderCategories = currentActiveFilter === 'all' || !currentActiveFilter
        ? [...new Set(productsData.map(p => p.category))]
        : [currentActiveFilter];

    const restaurantIsOpen = isRestaurantOpen();

    displayOrderCategories.forEach(category => {
        const productsInCategory = productsByCategory[category];
        if (!productsInCategory || productsInCategory.length === 0) return;

        const categorySection = document.createElement('div');
        categorySection.classList.add('category-section');
        const categoryTitle = document.createElement('h2');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        const productsGrid = document.createElement('div');
        productsGrid.classList.add('products-grid');

        productsInCategory.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            let actionButtonHTML = '';
            let priceDisplayHTML = `<p class="price">السعر: ${product.basePrice} ريال</p>`;
            const btnDisabledAttribute = !restaurantIsOpen ? 'disabled' : '';

            if (product.customizations && product.customizations.length > 0) {
                priceDisplayHTML = `<p class="price">يبدأ من: ${product.basePrice} ريال</p>`;
                actionButtonHTML = `<button class="customize-btn" onclick="openCustomizationModal('${product.id}')" ${btnDisabledAttribute}>حدد الخيارات <i class="fas fa-cog"></i></button>`;
            } else {
                actionButtonHTML = `<button class="direct-add-btn" onclick="addDirectToCart('${product.id}')" ${btnDisabledAttribute}>أضف للسلة <i class="fas fa-cart-plus"></i></button>`;
            }
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description || ''}</p>
                ${priceDisplayHTML}
                ${actionButtonHTML}
            `;
            productsGrid.appendChild(productCard);
        });
        categorySection.appendChild(productsGrid);
        menuSectionsContainer.appendChild(categorySection);
    });
}

window.addDirectToCart = function(productId) {
    if (!isRestaurantOpen()) {
        // showRestaurantClosedAlert(); // المستمع العام سيتعامل مع هذا
        return;
    }
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    const quantity = 1;
    const cartItemId = productId;
    const existingItemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            cartItemId: cartItemId, id: productId, name: product.name,
            basePrice: product.basePrice, finalPricePerItem: product.basePrice,
            quantity: quantity, customizations: [], image: product.image
        });
    }
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification(`"${product.name}" أضيف إلى طلباتك.`);
};

function updateModalPrice() {
    if (!currentProductInModalObject) return;
    let currentPrice = currentProductInModalObject.basePrice;
    currentProductInModalObject.customizations?.forEach((group, groupIndex) => {
        const groupElement = document.getElementById(`modal-group-${currentProductInModalObject.id}-${groupIndex}`);
        if (!groupElement) return;
        if (group.type === 'radio') {
            const selectedRadio = groupElement.querySelector(`input[name="${group.name}"]:checked`);
            if (selectedRadio) currentPrice += parseFloat(selectedRadio.dataset.price);
        } else if (group.type === 'checkbox') {
            const checkedBoxes = groupElement.querySelectorAll(`input[name="${group.name}"]:checked`);
            checkedBoxes.forEach(cb => currentPrice += parseFloat(cb.dataset.price));
        }
    });
    modalCurrentItemPrice.textContent = `السعر مع الاضافات: ${currentPrice.toFixed(2)} ريال`;
}

window.openCustomizationModal = function(productId) {
    if (!isRestaurantOpen()) {
        // showRestaurantClosedAlert(); // المستمع العام سيتعامل مع هذا
        return;
    }
    currentProductIdInModal = productId;
    currentProductInModalObject = productsData.find(p => p.id === productId);
    if (!currentProductInModalObject) return;
    modalProductImage.src = currentProductInModalObject.image;
    modalProductTitle.textContent = currentProductInModalObject.name;
    modalProductBasePrice.textContent = `السعر : ${currentProductInModalObject.basePrice} ريال`;
    modalQuantityInput.value = 1;
    modalCustomizationsContainer.innerHTML = '';
    if (currentProductInModalObject.customizations) {
        currentProductInModalObject.customizations.forEach((group, groupIndex) => {
            const fieldset = document.createElement('fieldset');
            fieldset.classList.add('option-group');
            fieldset.id = `modal-group-${currentProductInModalObject.id}-${groupIndex}`;
            const legend = document.createElement('legend');
            legend.textContent = `${group.groupName}${group.required ? ' (مطلوب)' : ''}`;
            fieldset.appendChild(legend);
            group.options.forEach((opt, optIndex) => {
                const optionDiv = document.createElement('div');
                optionDiv.classList.add('option-item');
                const input = document.createElement('input');
                input.type = group.type;
                input.id = `modal-opt-${currentProductInModalObject.id}-${group.name}-${optIndex}`;
                input.name = group.name;
                input.value = opt.value;
                input.dataset.price = opt.price;
                input.addEventListener('change', updateModalPrice);
                const label = document.createElement('label');
                label.htmlFor = input.id;
                label.textContent = `${opt.text} ${opt.price > 0 ? `(+${opt.price} ريال)` : ''}`;
                optionDiv.appendChild(input);
                optionDiv.appendChild(label);
                fieldset.appendChild(optionDiv);
            });
            modalCustomizationsContainer.appendChild(fieldset);
        });
    }
    updateModalPrice();
    // تمكين أو تعطيل زر الإضافة داخل الـ Modal بناءً على حالة المطعم
    modalAddToCartBtn.disabled = !isRestaurantOpen();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

decreaseQuantityBtn.addEventListener('click', () => {
    let currentValue = parseInt(modalQuantityInput.value);
    if (currentValue > 1) {
        modalQuantityInput.value = currentValue - 1;
    }
});

increaseQuantityBtn.addEventListener('click', () => {
    let currentValue = parseInt(modalQuantityInput.value);
    modalQuantityInput.value = currentValue + 1;
});

modalQuantityInput.addEventListener('change', () => {
    if (parseInt(modalQuantityInput.value) < 1 || isNaN(parseInt(modalQuantityInput.value))) {
        modalQuantityInput.value = 1;
    }
});

function closeCustomizationModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    currentProductIdInModal = null;
    currentProductInModalObject = null;
}
modalCloseBtn.addEventListener('click', closeCustomizationModal);
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) closeCustomizationModal();
});

// مستمع حدث زر الإضافة للسلة داخل نافذة التخصيص
modalAddToCartBtn.addEventListener('click', function() {
    if (!isRestaurantOpen()) { // تحقق أولاً
        showRestaurantClosedAlert();
        closeCustomizationModal();
        return;
    }
    if (!currentProductInModalObject) return;
    const product = currentProductInModalObject;
    const quantity = parseInt(modalQuantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        alert("الرجاء تحديد كمية صحيحة."); return;
    }
    let itemPrice = product.basePrice;
    const selectedCustomizations = [];
    let cartItemIdSuffix = '';
    if (product.customizations) {
        for (let i = 0; i < product.customizations.length; i++) {
            const group = product.customizations[i];
            const groupElement = document.getElementById(`modal-group-${product.id}-${i}`);
            if(!groupElement) { continue; }
            let groupSelected = false;
            if (group.type === 'radio') {
                const selectedRadio = groupElement.querySelector(`input[name="${group.name}"]:checked`);
                if (selectedRadio) {
                    itemPrice += parseFloat(selectedRadio.dataset.price);
                    selectedCustomizations.push({ group: group.groupName, text: selectedRadio.labels[0].textContent.split(' (+')[0], price: parseFloat(selectedRadio.dataset.price) });
                    cartItemIdSuffix += `-${selectedRadio.value}`;
                    groupSelected = true;
                }
                if (group.required && !groupSelected) { alert(`الرجاء اختيار "${group.groupName}" لمنتج "${product.name}".`); return; }
            } else if (group.type === 'checkbox') {
                const checkedBoxes = groupElement.querySelectorAll(`input[name="${group.name}"]:checked`);
                checkedBoxes.forEach(cb => {
                    itemPrice += parseFloat(cb.dataset.price);
                    selectedCustomizations.push({ group: group.groupName, text: cb.labels[0].textContent.split(' (+')[0], price: parseFloat(cb.dataset.price) });
                    cartItemIdSuffix += `-${cb.value}`;
                });
            }
        }
    }
    const cartItemId = `${product.id}${cartItemIdSuffix}`;
    const existingItemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ cartItemId: cartItemId, id: product.id, name: product.name, basePrice: product.basePrice, finalPricePerItem: itemPrice, quantity: quantity, customizations: selectedCustomizations, image: product.image });
    }
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification(`"${product.name}" أضيف إلى طلباتك.`);
    closeCustomizationModal();
});

function showNotification(message) {
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

    if (cart.length === 0) {
        cartItemsListElement.appendChild(emptyCartMessage);
        emptyCartMessage.style.display = 'block';
        clearCartBtn.style.display = 'none';
        if (vatLineDetails) vatLineDetails.style.display = 'none';
    } else {
        emptyCartMessage.style.display = 'none';
        clearCartBtn.style.display = 'block';
        if (vatLineDetails) vatLineDetails.style.display = 'flex';
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            let customizationsText = '';
            if (item.customizations && item.customizations.length > 0) {
                customizationsText += '<div class="item-customizations">';
                item.customizations.forEach(cust => {
                    customizationsText += `<div>- ${cust.text}${cust.price > 0 ? ` (+${cust.price} ر.س)` : ''}</div>`;
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
                    <button class="remove-item-btn" onclick="removeFromCart(${index})" aria-label="إزالة ${item.name}">
                        <i class="fas fa-minus-circle"></i>
                    </button>
                </div>
            `;
            cartItemsListElement.appendChild(listItem);
            subtotal += item.finalPricePerItem * item.quantity;
            totalItemsCount += item.quantity;
        });
    }
    cartSubtotalAmountElement.textContent = subtotal.toFixed(2);
    const vatAmount = (subtotal * VAT_RATE) / (1 + VAT_RATE);
    if (cartVatAmountElement) cartVatAmountElement.textContent = vatAmount.toFixed(2);
    let currentDeliveryFee = 0;
    if (currentDeliveryType === 'delivery' && cart.length > 0) {
        currentDeliveryFee = deliveryFee;
        deliveryFeeLineElement.style.display = 'flex';
        deliveryFeeAmountElement.textContent = deliveryFee.toFixed(2);
    } else {
        deliveryFeeLineElement.style.display = 'none';
    }
    const grandTotal = subtotal + currentDeliveryFee;
    cartGrandTotalAmountElement.textContent = grandTotal.toFixed(2);
    cartCountBadge.textContent = totalItemsCount;
}

deliveryTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        currentDeliveryType = this.value;
        updateCartDisplay();
    });
});

window.removeFromCart = function(itemIndex) {
    cart.splice(itemIndex, 1);
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification("تمت إزالة الوجبة من الطلبات.");
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
    showNotification("تم إرسال طلبك وإفراغ السلة.");
    closeCartSidebar();
}

// مستمع حدث زر الدفع النهائي في السلة (معدل)
checkoutBtn.addEventListener('click', function(event) {
    if (!isRestaurantOpen()) {
        showRestaurantClosedAlert();
        event.preventDefault();
        return;
    }
    if (cart.length === 0) {
        alert("سلة الطلبات فارغة. الرجاء إضافة وجبات أولاً.");
        return;
    }
    let message = "طلب جديد من مطعم فلان الفلاني:\n";
    message += "--------------------\n";
    let calculatedSubtotal = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.finalPricePerItem * item.quantity;
        message += `\n${index + 1}. ${item.name}\n`;
        if (item.customizations && item.customizations.length > 0) {
            message += `  التخصيصات:\n`;
            item.customizations.forEach(cust => { message += `    - ${cust.text}${cust.price > 0 ? ` (+${cust.price} ريال)` : ''}\n`; });
        }
        message += `  الكمية: ${item.quantity}\n`;
        message += `  السعر للقطعة: ${item.finalPricePerItem.toFixed(2)} ريال\n`;
        message += `  إجمالي الصنف: ${itemTotal.toFixed(2)} ريال\n`;
        calculatedSubtotal += itemTotal;
    });
    message += "\n--------------------\n";
    message += `المجموع الفرعي (شامل الضريبة): ${calculatedSubtotal.toFixed(2)} ريال\n`;
    const calculatedVatAmount = (calculatedSubtotal * VAT_RATE) / (1 + VAT_RATE);
    message += `ضريبة القيمة المضافة (15%): ${calculatedVatAmount.toFixed(2)} ريال\n`;
    let finalTotalForMessage = calculatedSubtotal;
    if (currentDeliveryType === 'delivery') {
        message += `نوع الطلب: توصيل للمنزل\n`;
        message += `رسوم التوصيل: ${deliveryFee.toFixed(2)} ريال\n`;
        finalTotalForMessage += deliveryFee;
    } else {
        message += `نوع الطلب: استلام من المطعم\n`;
    }
    const generalNotes = generalOrderNotesTextarea.value.trim();
    if (generalNotes) { message += `\nملاحظات عامة:\n${generalNotes}\n`; }
    message += `\n--------------------\n`;
    message += `الإجمالي الكلي للطلب: ${finalTotalForMessage.toFixed(2)} ريال\n\n`;
    message += "بيانات المطعم:\n";
    message += "اسم المطعم: مطعم فلان الفلاني\n";
    message += "رقم الهاتف: 0510012621\n";
    message += "العنوان: الرياض - البديعة -شارع عائشة\n";
    message += "--------------------\n";
    message += "شكراً لطلبكم!";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_self');
    emptyCartAfterCheckout();
});

function openCartSidebar() {
    cartSidebar.classList.add('open');
    pageOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    pageOverlay.classList.remove('active');
    document.body.style.overflow = '';
}
cartToggleButton.addEventListener('click', openCartSidebar);
closeCartButtonSidebar.addEventListener('click', closeCartSidebar);
pageOverlay.addEventListener('click', function(event){
    if (cartSidebar.classList.contains('open') && event.target === pageOverlay) {
        closeCartSidebar();
    }
});

searchInput.addEventListener('input', function() {
    currentSearchTerm = this.value.trim();
    displayProducts();
});

toggleViewBtn.addEventListener('click', function() {
    isCompactView = !isCompactView;
    document.body.classList.toggle('compact-view', isCompactView);
    this.classList.toggle('active-compact-view', isCompactView);
    saveViewPreference();
    if (isCompactView) {
        this.innerHTML = '<i class="fas fa-th-list"></i>'; this.title = "عرض عادي";
    } else {
        this.innerHTML = '<i class="fas fa-th-large"></i>'; this.title = "عرض مضغوط";
    }
});

// مستمع حدث على حاوية المنتجات الرئيسية لالتقاط النقرات
menuSectionsContainer.addEventListener('click', function(event) {
    if (!isRestaurantOpen()) {
        const targetButton = event.target.closest('.customize-btn, .direct-add-btn');
        if (targetButton) {
            event.preventDefault();
            event.stopPropagation();
            showRestaurantClosedAlert();
        }
    }
});

function checkRestaurantStatusOnPageLoad() {
    const restaurantIsOpen = isRestaurantOpen();
    let statusMessageDiv = document.getElementById('restaurant-status-message');

    if (statusMessageDiv) { statusMessageDiv.remove(); } // إزالة الرسالة القديمة

    if (!restaurantIsOpen) {
        statusMessageDiv = document.createElement('div');
        statusMessageDiv.id = 'restaurant-status-message';
        statusMessageDiv.textContent = closedMessage;
        const filtersWrapper = document.querySelector('.filters-container-wrapper');
        if (filtersWrapper) {
            filtersWrapper.parentNode.insertBefore(statusMessageDiv, filtersWrapper);
        } else {
            const mainContainerTitle = document.querySelector('.container h1.page-title');
            if(mainContainerTitle) mainContainerTitle.insertAdjacentElement('afterend', statusMessageDiv);
        }
        checkoutBtn.disabled = true;
        checkoutBtn.textContent = "المطعم مغلق حالياً";
        modalAddToCartBtn.disabled = true; // تعطيل زر الإضافة في الـ Modal أيضاً
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.textContent = "إرسال الطلب عبر واتساب";
        modalAddToCartBtn.disabled = false;
    }
    displayProducts(); // لإعادة رسم المنتجات مع تعطيل/تمكين الأزرار
}

// Initial Load
loadCartFromLocalStorage();
loadViewPreference();
displayFilterButtons();
updateCartDisplay();
checkRestaurantStatusOnPageLoad();

document.getElementById('current-year').textContent = new Date().getFullYear();