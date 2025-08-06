document.addEventListener('DOMContentLoaded', function() {
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
            "featured.title": "Produk Unggulan",
            "featured.seeAll": "Lihat Semua Produk",
            "product.viewOnShopee": "Lihat di Shopee",
            "whatsapp.text": "Butuh bantuan? Chat dengan kami",
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
            "about.text": "Didirikan pada tahun 2023, SumoPower berdedikasi untuk menyediakan baterai berkualitas tinggi dan tahan lama untuk semua kebutuhan Anda.",
            "about.readMore": "Baca Selengkapnya",
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
            "featured.title": "Featured Products",
            "featured.seeAll": "View All Products",
            "product.viewOnShopee": "View on Shopee",
            "whatsapp.text": "Need help? Chat with us",
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
            "about.text": "Founded in 2023, SumoPower is dedicated to providing top-tier, long-lasting batteries for all your needs.",
            "about.readMore": "Read More",
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

    let currentLanguage = localStorage.getItem('language') || 'id';
    const navbar = document.querySelector('.navbar');
    const langSwitcher = document.querySelector('.lang-switcher');
    const featuredProductGrid = document.getElementById('featured-product-grid');

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

        langSwitcher.classList.toggle('lang-en', lang === 'en');
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        if (featuredProductGrid) {
            renderFeaturedProducts();
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

    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', () => navbarNav.classList.toggle('active'));
    }

    // Render featured products (first 6 products)
    const renderFeaturedProducts = () => {
        if (!featuredProductGrid || typeof allProducts === 'undefined') return;
        
        featuredProductGrid.innerHTML = '';
        const nameKey = `name_${currentLanguage}`;
        const featuredProducts = allProducts.slice(0, 6);

        featuredProducts.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <img src="/placeholder.svg?height=200&width=200&text=Product+${product.id}" alt="${product[nameKey]}">
                <span class="product-category">${translations[currentLanguage][product.category_key]}</span>
                <h3>${product[nameKey]}</h3>
                <a href="${product.shopeeUrl}" target="_blank" class="btn btn-secondary">${translations[currentLanguage]['product.viewOnShopee']}</a>
            `;
            featuredProductGrid.appendChild(card);
        });
    };

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => setLanguage(e.target.dataset.lang));
    });

    // Initialize
    setLanguage(currentLanguage);
});
