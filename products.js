// The product list is now stored in this separate file.
// Make sure 'category_key' matches one of the keys in 'productCategories' in script.js.
const allProducts = [
    { 
        id: 1, 
        name_id: "Charger Mobil/Motor / Saver 2output Usb+ C 2in1 SM-50 Super Fast Charging", 
        name_en: "Car/Motorcycle Charger / Saver 2-output USB+C 2in1 SM-50 Super Fast Charging", 
        category_key: "category.charger", 
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Charger+SM-50", 
        shopeeUrl: "https://shopee.co.id/" 
    },
    { 
        id: 2, 
        name_id: "Baterai Sumopower Zenfone Max Pro M1 ZB601KL ZB602KL / Max Pro M2 ZB631KL C11P1706 Batre Double Power Original 100%", 
        name_en: "Sumopower Battery Zenfone Max Pro M1 ZB601KL ZB602KL / Max Pro M2 ZB631KL C11P1706 Double Power Original 100% Battery", 
        category_key: "category.asus", 
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Asus+Battery", 
        shopeeUrl: "https://shopee.co.id/" 
    },
    {
        id: 3,
        name_id: "Sumopower Battery Infinix Hot 30i / Hot 40 Pro / Note 10 Pro NFC X695 / Note 11 Pro / Note 11S / Zero 5G 2023 - BL-49LX",
        name_en: "Sumopower Battery Infinix Hot 30i / Hot 40 Pro / Note 10 Pro NFC X695 / Note 11 Pro / Note 11S / Zero 5G 2023 - BL-49LX",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-49LX.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 4,
        name_id: "Sumopower Battery Infinix Hot 30i / Hot 40i / Smart 7 / Smart 8 / Smart 8 Pro / Smart 5 / Smart 9 - BL-49NX",
        name_en: "Sumopower Battery Infinix Hot 30i / Hot 40i / Smart 7 / Smart 8 / Smart 8 Pro / Smart 5 / Smart 9 - BL-49NX",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-49NX.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 5,
        name_id: "Sumopower Battery Infinix Hot 8 / Hot 9 / Hot 9 Pro / Hot 20i / Note 7 Lite / Smart 5 / Smart 6 / Smart 6 Plus - BL-49FX",
        name_en: "Sumopower Battery Infinix Hot 8 / Hot 9 / Hot 9 Pro / Hot 20i / Note 7 Lite / Smart 5 / Smart 6 / Smart 6 Plus - BL-49FX",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-49FX.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 6,
        name_id: "Sumopower Battery Infinix Hot 12 / Hot 12i / Hot 20s - BL-49LK",
        name_en: "Sumopower Battery Infinix Hot 12 / Hot 12i / Hot 20s - BL-49LK",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-49LK.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 7,
        name_id: "Sumopower Battery Infinix Hot 7 Lite / Hot 11s / Hot 12 Pro / Note 7 / Note 10 / Zero X Neo - BL-49GX",
        name_en: "Sumopower Battery Infinix Hot 7 Lite / Hot 11s / Hot 12 Pro / Note 7 / Note 10 / Zero X Neo - BL-49GX",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-49GX.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 8,
        name_id: "Sumopower Battery Infinix Hot 8 Play / Hot 10s / Hot 10 Play / Hot 11 Play / Hot 12 Play / Hot 30 Play - BL-58BX",
        name_en: "Sumopower Battery Infinix Hot 8 Play / Hot 10s / Hot 10 Play / Hot 11 Play / Hot 12 Play / Hot 30 Play - BL-58BX",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-58BX.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 9,
        name_id: "Sumopower Battery Infinix S5 / S5 Lite / Smart 4 - BL-39LX",
        name_en: "Sumopower Battery Infinix S5 / S5 Lite / Smart 4 - BL-39LX",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-39LX.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 10,
        name_id: "Sumopower Battery Infinix Hot 10 / Hot 11 / Note 8 / Note 8i - BL-51BX",
        name_en: "Sumopower Battery Infinix Hot 10 / Hot 11 / Note 8 / Note 8i - BL-51BX",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-51BX.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 11,
        name_id: "Sumopower Battery Infinix Note 11 NFC / Note 12 / Note 12 G96 / Note 12 2023 / Note 12i 2022 - BL-49KX",
        name_en: "Sumopower Battery Infinix Note 11 NFC / Note 12 / Note 12 G96 / Note 12 2023 / Note 12i 2022 - BL-49KX",
        category_key: "category.infinix",
        imageUrl: "assets/images/infinix/BL-49KX.png",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 12,
        name_id: "Baterai Sumopower Samsung C140 / X200 / E250 / C3303 AB463436BU Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung C140 / X200 / E250 / C3303 AB463436BU Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 13,
        name_id: "Baterai Sumopower Samsung M11 / M115 / M115F HQ-S71 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung M11 / M115 / M115F HQ-S71 Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 14,
        name_id: "Baterai Sumopower Samsung A01 Core EB-BA013ABY Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung A01 Core EB-BA013ABY Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 15,
        name_id: "Baterai sumopower Samsung M10 / A10 2019 / A7 2018 A750 EB-BA750ABU Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung M10 / A10 2019 / A7 2018 A750 EB-BA750ABU Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 16,
        name_id: "Baterai Sumopower Samsung A02S / A03 / A03S HQ-50S Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung A02S / A03 / A03S HQ-50S Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 17,
        name_id: "Baterai Sumopower Samsung Galaxy J1 / J100 BJ100CBE Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung Galaxy J1 / J100 BJ100CBE Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 18,
        name_id: "Baterai Sumopower Samsung S8 Plus G955 EB-BG955ABE Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung S8 Plus G955 EB-BG955ABE Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 19,
        name_id: "Baterai Sumopower Samsung Galaxy J510 J5 2016 BJ510CBE Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung Galaxy J510 J5 2016 BJ510CBE Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 20,
        name_id: "Baterai Sumopower Samsung M52 / M53 / M56 / M23 / F23 / A23 / A73 EB-BM526ABY Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung M52 / M53 / M56 / M23 / F23 / A23 / A73 EB-BM526ABY Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 21,
        name_id: "Baterai Sumopower Samsung Note 9 EB-BN965ABU Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung Note 9 EB-BN965ABU Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 22,
        name_id: "Baterai Sumopower Samsung S21 Ultra EB-BG998ABY Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung S21 Ultra EB-BG998ABY Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 23,
        name_id: "Baterai Sumopower Samsung Grand Prime/J2 Prime/J2 Pro/A2 Core A260/J2 Core/J5/J3 J300/J3 Pro/J320 J3 2016 G530 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Samsung Grand Prime/J2 Prime/J2 Pro/A2 Core A260/J2 Core/J5/J3 J300/J3 Pro/J320 J3 2016 G530 Double Power Original 100% Battery",
        category_key: "category.samsung",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Samsung+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 24,
        name_id: "Baterai Sumopower Mi Note Pro BM34 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Mi Note Pro BM34 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 25,
        name_id: "Baterai Sumopower Mi Max BM49 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Mi Max BM49 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 26,
        name_id: "Baterai Sumopower Redmi 5 BN35 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Redmi 5 BN35 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 27,
        name_id: "Baterai Sumopower Poco M4 Pro / Redmi Note 11 4G / Redmi Note 11s BN5D Batre Double Power Original 100%",
        name_en: "Sumopower Battery Poco M4 Pro / Redmi Note 11 4G / Redmi Note 11s BN5D Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 28,
        name_id: "Baterai Sumopower Redmi Note 5A/Note 5A Pro/Note 5A Prime/Mi A1/Mi 5X/Redmi S2 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Redmi Note 5A/Note 5A Pro/Note 5A Prime/Mi A1/Mi 5X/Redmi S2 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 29,
        name_id: "Baterai Sumopower Redmi 7A BN49 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Redmi 7A BN49 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 30,
        name_id: "Baterai Sumopower Redmi 4 Pro / Redmi 4 Prime BN40 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Redmi 4 Pro / Redmi 4 Prime BN40 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 31,
        name_id: "Baterai Sumopower Redmi Note 5 / Redmi Note 5 BN45 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Redmi Note 5 / Redmi Note 5 BN45 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 32,
        name_id: "Baterai Sumopower Redmi Note 7 / Redmi Note 7 Pro BN4A Batre Double Power Original 100%",
        name_en: "Sumopower Battery Redmi Note 7 / Redmi Note 7 Pro BN4A Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 33,
        name_id: "Baterai Sumopower Mi 6 BM39 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Mi 6 BM39 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 34,
        name_id: "Baterai Sumopower Mi 4i BM33 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Mi 4i BM33 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 35,
        name_id: "Baterai Sumopower Mi 6X / Mi A2 BN36 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Mi 6X / Mi A2 BN36 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 36,
        name_id: "Baterai Sumopower Mi Note 5 / Redmi Note Bambu / Mi Note Bamboo BM21 Double Power Original 100%",
        name_en: "Sumopower Battery Mi Note 5 / Redmi Note Bambu / Mi Note Bamboo BM21 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 37,
        name_id: "Baterai Sumopower Redmi 5A BN34 Double Power Original 100%",
        name_en: "Sumopower Battery Redmi 5A BN34 Double Power Original 100%",
        category_key: "category.xiaomi",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Xiaomi+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 38,
        name_id: "Baterai Sumopower Vivo Y19 2019 B-H9 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo Y19 2019 B-H9 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 39,
        name_id: "Baterai Sumopower Vivo Y16 2022 B-W1 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo Y16 2022 B-W1 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 40,
        name_id: "Baterai Sumopower Vivo Y21 / Y21A / Y21S / Y33S B-S2 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo Y21 / Y21A / Y21S / Y33S B-S2 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 41,
        name_id: "Baterai Sumopower Vivo Y15S / Y01 B-S8 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo Y15S / Y01 B-S8 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 42,
        name_id: "Baterai Sumopower Vivo V7 B-D5 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo V7 B-D5 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 43,
        name_id: "Baterai Sumopower Vivo V15 Pro B-G0 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo V15 Pro B-G0 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 44,
        name_id: "Baterai Sumopower Vivo V11 1806 / V11i / Y97 B-E8 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo V11 1806 / V11i / Y97 B-E8 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 45,
        name_id: "Baterai Sumopower Vivo BK-B-65 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo BK-B-65 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 46,
        name_id: "Baterai Sumopower Vivo Y22 2022 B-W3 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo Y22 2022 B-W3 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 47,
        name_id: "Baterai Sumopower Vivo Y53 1606 B-C1 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo Y53 1606 B-C1 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 48,
        name_id: "Baterai Sumopower Vivo Y55 / Y55S 1610 / Y55L B-B1 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Vivo Y55 / Y55S 1610 / Y55L B-B1 Double Power Original 100%",
        category_key: "category.vivo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Vivo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 49,
        name_id: "Baterai Sumopower Reno 5F / Reno 6Z / Reno 5 / A95 5G BLP839 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Reno 5F / Reno 6Z / Reno 5 / A95 5G BLP839 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 50,
        name_id: "Baterai Sumopower BLP877 Realme Narzo 50A Prime/Narzo 50i/Narzo 50i Prime/Note 50/8i/C30/C30S/C31/C33/C35 Batre Double Power Original 100%",
        name_en: "Sumopower Battery BLP877 Realme Narzo 50A Prime/Narzo 50i/Narzo 50i Prime/Note 50/8i/C30/C30S/C31/C33/C35 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 51,
        name_id: "Baterai Sumopower F7 / F7 Pro / A3 BLP661 Batre Double Power Original 100%",
        name_en: "Sumopower Battery F7 / F7 Pro / A3 BLP661 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 52,
        name_id: "Baterai Sumopower A3S/A5/A5S AX5S/A7/A7X/A11K/A12 2020/A31 2020/Realme C1/Realme 2 BLP673 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A3S/A5/A5S AX5S/A7/A7X/A11K/A12 2020/A31 2020/Realme C1/Realme 2 BLP673 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 53,
        name_id: "Baterai Sumopower BLPA07 A78 4G Batre Double Power Original 100%",
        name_en: "Sumopower Battery BLPA07 A78 4G Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 54,
        name_id: "Baterai Sumopower Realme C2 BLP721 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme C2 BLP721 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 55,
        name_id: "Baterai Sumopower Realme C12/C15/C25/C25S/Narzo 20/Narzo 20A/Narzo 30A/Narzo 50A BLP793 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme C12/C15/C25/C25S/Narzo 20/Narzo 20A/Narzo 30A/Narzo 50A BLP793 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 56,
        name_id: "Baterai Sumopower A15 / A15S / A16E / A16K BLP817 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A15 / A15S / A16E / A16K BLP817 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 57,
        name_id: "Baterai Sumopower Realme Narzo 10 / Realme 6i / C25Y BLP771 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme Narzo 10 / Realme 6i / C25Y BLP771 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 58,
        name_id: "Baterai Sumopower BLP649 A83 Batre Double Power Original 100%",
        name_en: "Sumopower Battery BLP649 A83 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 59,
        name_id: "Baterai Sumopower Reno 3 5G / Reno 3 Pro BLP755 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Reno 3 5G / Reno 3 Pro BLP755 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 60,
        name_id: "Baterai Sumopower BLP923 A57 4G 2022 / A57 5G/A57S/A77 5G/A77S/A78 5G/A97 5G/Realme C51 Batre Double Power Original 100%",
        name_en: "Sumopower Battery BLP923 A57 4G 2022 / A57 5G/A57S/A77 5G/A77S/A78 5G/A97 5G/Realme C51 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 61,
        name_id: "Baterai Sumopower A16 2021 / A32/A33 2020 / A53 2020/A53S 5G/A54/A54S/A55/A73/A74 5G /A75/A93 5G BLP805 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A16 2021 / A32/A33 2020 / A53 2020/A53S 5G/A54/A54S/A55/A73/A74 5G /A75/A93 5G BLP805 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 62,
        name_id: "Baterai Sumopower Reno 4 Pro BLP787 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Reno 4 Pro BLP787 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 63,
        name_id: "Baterai Sumopower A18 BLPA21 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A18 BLPA21 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 64,
        name_id: "Baterai Sumopower Realme 5 Pro BLP731 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme 5 Pro BLP731 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 65,
        name_id: "Baterai Sumopower F1 / A35 / Neo 7 / A33W / A33 / F1F BLP605 Batre Double Power Original 100%",
        name_en: "Sumopower Battery F1 / A35 / Neo 7 / A33W / A33 / F1F BLP605 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 66,
        name_id: "Baterai Sumopower Reno 3 / F15 / A91 BLP765 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Reno 3 / F15 / A91 BLP765 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 67,
        name_id: "Baterai Sumopower K3 / Realme X BLP715 Batre Double Power Original 100%",
        name_en: "Sumopower Battery K3 / Realme X BLP715 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 68,
        name_id: "Baterai Sumopower A58 4G / A38 BLPA19 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A58 4G / A38 BLPA19 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 69,
        name_id: "Baterai Sumopower Realme 6 / Realme 6 Pro / Narzo BLP757 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme 6 / Realme 6 Pro / Narzo BLP757 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 70,
        name_id: "Baterai Sumopower A52 / A92 BLP781 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A52 / A92 BLP781 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 71,
        name_id: "Baterai Sumopower Realme XT BLP741 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme XT BLP741 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 72,
        name_id: "Baterai Sumopower A74 4G / A95 4G BLP851 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A74 4G / A95 4G BLP851 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 73,
        name_id: "Baterai Sumopower BLP681 F9 / F9 Pro / R17 Batre Double Power Original 100%",
        name_en: "Sumopower Battery BLP681 F9 / F9 Pro / R17 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 74,
        name_id: "Baterai Sumopower Realme 7i / Realme 8 5G / V3 / C17 BLP803 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme 7i / Realme 8 5G / V3 / C17 BLP803 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 75,
        name_id: "Baterai Sumopower F3 / F5 / F5 Youth / A73 / A77 BLP631 Batre Double Power Original 100%",
        name_en: "Sumopower Battery F3 / F5 / F5 Youth / A73 / A77 BLP631 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 76,
        name_id: "Baterai Sumopower BLP915 A17 / A17K Batre Double Power Original 100%",
        name_en: "Sumopower Battery BLP915 A17 / A17K Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 77,
        name_id: "Baterai Sumopower Realme 3 BLP693 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme 3 BLP693 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 78,
        name_id: "Baterai Sumopower Reno 4 4G BLP791 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Reno 4 4G BLP791 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 79,
        name_id: "Baterai Sumopower Reno 2F / Reno 2Z BLP737 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Reno 2F / Reno 2Z BLP737 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 80,
        name_id: "Baterai Sumopower A92S / Reno 4F BLP779 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A92S / Reno 4F BLP779 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 81,
        name_id: "Baterai Sumopower A71 BLP641 Batre Double Power Original 100%",
        name_en: "Sumopower Battery A71 BLP641 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 82,
        name_id: "Baterai Sumopower BLP807 A96 5G / F21 Pro / Reno 7 4G / Reno 7Z / Reno 8 4G / Reno 8 Lite Batre Double Power Original 100%",
        name_en: "Sumopower Battery BLP807 A96 5G / F21 Pro / Reno 7 4G / Reno 7Z / Reno 8 4G / Reno 8 Lite Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 83,
        name_id: "Baterai Sumopower REALME 2 PRO BLP683 Batre Double Power Original 100%",
        name_en: "Sumopower Battery REALME 2 PRO BLP683 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 84,
        name_id: "Baterai Sumopower BLP807 Realme 7 / V5 Batre Double Power Original 100%",
        name_en: "Sumopower Battery BLP807 Realme 7 / V5 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 85,
        name_id: "Baterai Sumopower Reno 2 BLP735 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Reno 2 BLP735 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 86,
        name_id: "Baterai Sumopower Reno 4 5G BLP789 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Reno 4 5G BLP789 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 87,
        name_id: "Baterai Sumopower F1S/A53 2015/A59 BLP601 Batre Double Power Original 100%",
        name_en: "Sumopower Battery F1S/A53 2015/A59 BLP601 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 88,
        name_id: "Baterai Sumopower RENO 6 G BLP819 Batre Double Power Original 100%",
        name_en: "Sumopower Battery RENO 6 G BLP819 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 89,
        name_id: "Baterai Sumopower Realme 3 Pro BLP713 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Realme 3 Pro BLP713 Double Power Original 100%",
        category_key: "category.oppo",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Oppo+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 90,
        name_id: "Baterai Sumopower Iph X Batre Double Power Original 100%",
        name_en: "Sumopower Battery Iph X Double Power Original 100%",
        category_key: "category.iphone",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=iPhone+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 91,
        name_id: "Baterai Sumopower Iph 15 pro Batre Double Power Original 100%",
        name_en: "Sumopower Battery Iph 15 pro Double Power Original 100%",
        category_key: "category.iphone",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=iPhone+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 92,
        name_id: "Baterai Sumopower Iph 12/12 Pro Batre Double Power Original 100%",
        name_en: "Sumopower Battery Iph 12/12 Pro Double Power Original 100%",
        category_key: "category.iphone",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=iPhone+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 93,
        name_id: "Baterai Sumopower Iph 5s Batre Double Power Original 100%",
        name_en: "Sumopower Battery Iph 5s Double Power Original 100%",
        category_key: "category.iphone",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=iPhone+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 94,
        name_id: "Baterai Sumopower Iph 14 pro max Batre Double Power Original 100%",
        name_en: "Sumopower Battery Iph 14 pro max Double Power Original 100%",
        category_key: "category.iphone",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=iPhone+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 95,
        name_id: "Baterai Sumopower Iph 15 pro max Batre Double Power Original 100%",
        name_en: "Sumopower Battery Iph 15 pro max Double Power Original 100%",
        category_key: "category.iphone",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=iPhone+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 96,
        name_id: "Baterai Sumopower Iph XR Batre Double Power Original 100%",
        name_en: "Sumopower Battery Iph XR Double Power Original 100%",
        category_key: "category.iphone",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=iPhone+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 97,
        name_id: "Baterai Sumopower Iph 15 Batre Double Power Original 100%",
        name_en: "Sumopower Battery Iph 15 Double Power Original 100%",
        category_key: "category.iphone",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=iPhone+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 98,
        name_id: "Baterai Sumopower Nokia 105 / 106 / 107 / 150 / 1100 / 3100 / 7610 BL-5C Batre Double Power Original 100%",
        name_en: "Sumopower Battery Nokia 105 / 106 / 107 / 150 / 1100 / 3100 / 7610 BL-5C Double Power Original 100%",
        category_key: "category.nokia",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Nokia+Battery",
        shopeeUrl: "https://shopee.co.id/"
    },
    {
        id: 99,
        name_id: "Baterai Sumopower Nokia 1202 / 2650 / 5100 / 6100 / 6300 / 7200 / 7270 BL-4C Batre Double Power Original 100%",
        name_en: "Sumopower Battery Nokia 1202 / 2650 / 5100 / 6100 / 6300 / 7200 / 7270 BL-4C Double Power Original 100%",
        category_key: "category.nokia",
        imageUrl: "https://placehold.co/300x300/CCCCCC/FFFFFF?text=Nokia+Battery",
        shopeeUrl: "https://shopee.co.id/"
    }
];
