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
            "nav.technology": "Teknologi",
            "nav.about": "Tentang Kami",
            "hero.title": "Power Up Seperti Sumo",
            "hero.subtitle": "Rasakan energi yang tahan lama dan andal dengan baterai SumoPower.",
            "hero.button": "Jelajahi Produk Kami",
            "products.title": "Produk Kami",
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
            "technology.title": "Teknologi Kami",
            "tech.perf.title": "Performa Canggih",
            "tech.perf.desc": "Baterai kami direkayasa untuk output dan efisiensi daya maksimum.",
            "tech.eco.title": "Ramah Lingkungan",
            "tech.eco.desc": "Kami berkomitmen untuk mengurangi dampak lingkungan dengan bahan yang dapat didaur ulang.",
            "tech.leak.title": "Desain Anti Bocor",
            "tech.leak.desc": "Teknologi segel aman kami melindungi perangkat Anda dari kerusakan.",
            "about.title": "Tentang SumoPower",
            "about.text": "Didirikan pada tahun 2023, SumoPower berdedikasi untuk menyediakan baterai berkualitas tinggi dan tahan lama untuk semua kebutuhan Anda. Komitmen kami terhadap inovasi dan kualitas memastikan bahwa setiap baterai SumoPower memberikan kinerja yang andal. Kami percaya pada masa depan yang berkelanjutan, dan penelitian kami difokuskan pada penciptaan solusi daya yang lebih ramah lingkungan.",
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
            "nav.technology": "Technology",
            "nav.about": "About Us",
            "hero.title": "Power Up Like A Sumo",
            "hero.subtitle": "Experience long-lasting, reliable energy with SumoPower batteries.",
            "hero.button": "Explore Our Products",
            "products.title": "Our Products",
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
            "technology.title": "Our Technology",
            "tech.perf.title": "Advanced Performance",
            "tech.perf.desc": "Our batteries are engineered for maximum power output and efficiency.",
            "tech.eco.title": "Eco-Friendly",
            "tech.eco.desc": "We are committed to reducing environmental impact with recyclable materials.",
            "tech.leak.title": "Leak-Proof Design",
            "tech.leak.desc": "Our secure seal technology protects your devices from damage.",
            "about.title": "About SumoPower",
            "about.text": "Founded in 2023, SumoPower is dedicated to providing top-tier, long-lasting batteries for all your needs. Our commitment to innovation and quality ensures that every SumoPower battery delivers reliable performance. We believe in a sustainable future, and our research is focused on creating more eco-friendly power solutions.",
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

    let currentLanguage = localStorage.getItem('language') || 'id';
    
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

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = navbar.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
            if (navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
            }
        });
    });

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
                <img src="${product.imageUrl}" alt="${product[nameKey]}" onerror="this.onerror=null;this.src='https://placehold.co/300x300/CCCCCC/FFFFFF?text=Image+Not+Found';">
                <span class="product-category">${translations[currentLanguage][product.category_key]}</span>
                <h3>${product[nameKey]}</h3>
                <a href="${product.shopeeUrl}" target="_blank" class="btn btn-secondary">${translations[currentLanguage]['product.viewOnShopee']}</a>
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
