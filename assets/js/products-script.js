document.addEventListener('DOMContentLoaded', function() {

    // --- Check if products are loaded ---
    if (typeof allProducts === 'undefined') {
        console.error("Error: The products.js file is not loaded or is loaded after script.js. Products will not be displayed.");
        const productMain = document.querySelector('.product-main');
        if(productMain) {
            productMain.innerHTML = '<p style="text-align: center; color: red;">Error: Product data could not be loaded. Please ensure products.js is loaded correctly before script.js.</p>';
        }
        return; // Stop execution if products aren't loaded
    }

    // --- Language and Translations ---
    const translations = {
        id: {
            "nav.home": "Beranda",
            "nav.products": "Produk",
            "nav.about": "Tentang Kami",
            "products.title": "Produk Kami",
            "products.subtitle": "Temukan baterai berkualitas tinggi untuk semua kebutuhan perangkat Anda",
            "products.categoryTitle": "KATEGORI",
            "products.reset": "Reset",
            "products.seeMore": "Lihat Lebih",
            "product.viewOnShopee": "Lihat di Shopee",
            "whatsapp.text": "Butuh bantuan? Chat dengan kami",
            "category.all": "Semua",
            "category.charger": "CHARGER MOBIL / SAVER",
            "category.asus": "BATERAI ASUS",
            "category.infinix": "BATERAI INFINIX",
            "category.samsung": "BATERAI SAMSUNG",
            "category.xiaomi": "BATERAI XIAOMI",
            "category.vivo": "BATERAI VIVO",
            "category.oppo": "BATERAI OPPO",
            "category.iphone": "BATERAI IPHONE",
            "category.nokia": "BATERAI NOKIA",
            "footer.sumopower": "SumoPower",
            "footer.question": "Punya pertanyaan? Hubungi kami sekarang.",
            "footer.address": "Alamat:",
            "footer.contact": "Pusat Kontak",
            "footer.info": "Informasi",
            "footer.info.products": "Produk",
            "footer.info.catalog": "Katalog",
            "footer.connect": "Tetap Terhubung",
            "footer.copyright": "&copy; 2024 SumoPower. Hak Cipta Dilindungi."
        },
        en: {
            "nav.home": "Home",
            "nav.products": "Products",
            "nav.about": "About Us",
            "products.title": "Our Products",
            "products.subtitle": "Find high-quality batteries for all your device needs",
            "products.categoryTitle": "CATEGORIES",
            "products.reset": "Reset",
            "products.seeMore": "See More",
            "product.viewOnShopee": "View on Shopee",
            "whatsapp.text": "Need help? Chat with us",
            "category.all": "All",
            "category.charger": "CAR CHARGER / SAVER",
            "category.asus": "ASUS BATTERY",
            "category.infinix": "INFINIX BATTERY",
            "category.samsung": "SAMSUNG BATTERY",
            "category.xiaomi": "XIAOMI BATTERY",
            "category.vivo": "VIVO BATTERY",
            "category.oppo": "OPPO BATTERY",
            "category.iphone": "IPHONE BATTERY",
            "category.nokia": "NOKIA BATTERY",
            "footer.sumopower": "SumoPower",
            "footer.question": "Have a question? Contact us now.",
            "footer.address": "Address:",
            "footer.contact": "Contact Center",
            "footer.info": "Information",
            "footer.info.products": "Products",
            "footer.info.catalog": "Catalog",
            "footer.connect": "Stay Connected",
            "footer.copyright": "&copy; 2024 SumoPower. All Rights Reserved."
        }
    };

    const productCategories = [
        "category.charger", "category.asus", "category.infinix", 
        "category.samsung", "category.xiaomi", "category.vivo", 
        "category.oppo", "category.iphone", "category.nokia"
    ];

    // Set default language to English, but allow user to change it
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    const productGrid = document.querySelector('.product-grid');
    const categoryListContainer = document.getElementById('category-list');
    const seeMoreBtn = document.getElementById('see-more-btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const resetCategoriesBtn = document.getElementById('reset-categories-btn');
    const navLinks = document.querySelectorAll('.navbar-nav a');
    const navbar = document.querySelector('.navbar');
    const langSwitcher = document.querySelector('.lang-switcher');

    let currentFilteredProducts = [];
    let loadedProductsCount = 0;
    const productsPerLoad = 8;

    const setLanguage = (lang) => {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        if (searchInput) {
            searchInput.placeholder = lang === 'id' ? 'Cari produk...' : 'Search products...';
        }

        langSwitcher.classList.toggle('lang-en', lang === 'en');
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        if (categoryListContainer) {
            renderCategories();
            updateProductView();
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', () => navbarNav.classList.toggle('active'));
    }

    const renderProducts = (productsToRender) => {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        loadedProductsCount = 0;
        currentFilteredProducts = productsToRender;
        loadMoreProducts();
    };

    const loadMoreProducts = () => {
        if (!productGrid) return;
        const nameKey = `name_${currentLanguage}`;
        const productsToLoad = currentFilteredProducts.slice(loadedProductsCount, loadedProductsCount + productsPerLoad);

        productsToLoad.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <img src="https://placehold.co/200x200/CCCCCC/FFFFFF?text=Product+${product.id}" alt="${product[nameKey]}" onerror="this.onerror=null;this.src='https://placehold.co/200x200/CCCCCC/FFFFFF?text=Image+Not+Found';">
                <span class="product-category">${translations[currentLanguage][product.category_key]}</span>
                <h3>${product[nameKey]}</h3>
                <a href="${product.shopeeUrl}" target="_blank" class="shopee-link">
                    <div class="shopee-brand">
                        <img src="../assets/images/shopeelogo.png" alt="Shopee" class="shopee-logo">
                        <span class="shopee-text">Shopee</span>
                    </div>
                </a>
            `;
            productGrid.appendChild(card);
        });

        loadedProductsCount += productsToLoad.length;
        if (seeMoreBtn) {
            seeMoreBtn.style.display = loadedProductsCount >= currentFilteredProducts.length ? 'none' : 'inline-block';
        }
    };

    const renderCategories = () => {
        if (!categoryListContainer) return;
        categoryListContainer.innerHTML = '';
        const categoryCounts = allProducts.reduce((acc, product) => {
            acc[product.category_key] = (acc[product.category_key] || 0) + 1;
            return acc;
        }, {});

        productCategories.forEach(key => {
            const count = categoryCounts[key] || 0;
            const item = document.createElement('div');
            item.className = 'category-item';
            item.innerHTML = `
                <input type="checkbox" id="${key}" value="${key}">
                <label for="${key}">${translations[currentLanguage][key]} (${count})</label>
            `;
            item.querySelector('input').addEventListener('change', updateProductView);
            categoryListContainer.appendChild(item);
        });
    };

    const updateProductView = () => {
        if (!productGrid) return;

        const currentlyVisibleCards = productGrid.querySelectorAll('.product-card');
        currentlyVisibleCards.forEach(card => card.classList.add('fade-out'));

        setTimeout(() => {
            const selectedCategories = Array.from(categoryListContainer.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
            const searchTerm = searchInput.value.toLowerCase();
            const nameKey = `name_${currentLanguage}`;

            let filtered = allProducts;
            if (selectedCategories.length > 0) {
                filtered = filtered.filter(p => selectedCategories.includes(p.category_key));
            }
            if (searchTerm) {
                filtered = filtered.filter(p => p[nameKey].toLowerCase().includes(searchTerm));
            }
            renderProducts(filtered);
        }, 300); // Match fade-out animation duration
    };

    if (productGrid) {
        if (seeMoreBtn) seeMoreBtn.addEventListener('click', loadMoreProducts);
        if (searchBtn) searchBtn.addEventListener('click', updateProductView);
        if (searchInput) {
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') updateProductView();
            });
        }
        if (resetCategoriesBtn) {
            resetCategoriesBtn.addEventListener('click', () => {
                categoryListContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
                updateProductView();
            });
        }
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => setLanguage(e.target.dataset.lang));
    });

    setLanguage(currentLanguage);
});
