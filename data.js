// ==========================================
// FILE CẤU HÌNH LIÊN KẾT (DATA.JS)
// Ní điền link vào giữa hai dấu nháy "" ở mục link: "..."
// ==========================================

const OFFERS = [
    // --- 1. NHÓM VAY TIỀN ---
    { id: "moneycatvn", type: "vay", name: "MoneyCat", link: "", logo: "", desc: "0% lãi suất lần đầu, duyệt 5 phút" },
    { id: "moneyveo", type: "vay", name: "MoneyVeo", link: "", logo: "", desc: "Hỗ trợ tư vấn tài chính 24/7" },
    { id: "tima", type: "vay", name: "Tima", link: "", logo: "", desc: "Vay qua đăng ký xe máy/oto" },
    { id: "jeffapp", type: "vay", name: "Jeff App", link: "", logo: "", desc: "Sàn so sánh vay đa dạng" },
    { id: "dong247", type: "vay", name: "Dong247", link: "", logo: "", desc: "Duyệt vay tự động bằng AI" },
    { id: "crezu", type: "vay", name: "Crezu", link: "", logo: "", desc: "0% lãi suất khoản đầu" },
    { id: "kamo", type: "vay", name: "Kamo", link: "", logo: "", desc: "Thủ tục đơn giản" },
    { id: "kavay", type: "vay", name: "Kavay", link: "", logo: "", desc: "Giải ngân siêu tốc" },
    { id: "bimo", type: "vay", name: "Bimo", link: "", logo: "", desc: "Vay tiền mặt online" },
    { id: "cashspace", type: "vay", name: "Cashspace", link: "", logo: "", desc: "Tìm khoản vay tốt nhất" },
    { id: "vaymini", type: "vay", name: "VayMini", link: "", logo: "", desc: "Khoản vay nhỏ, giải ngân nhanh" },
    { id: "tieno", type: "vay", name: "Tieno", link: "", logo: "", desc: "Duyệt hồ sơ cực dễ" },
    { id: "skycredit", type: "vay", name: "Sky Credit", link: "", logo: "", desc: "Vay tín chấp lãi suất thấp" },
    { id: "vaymeo", type: "vay", name: "Vaymeo", link: "", logo: "", desc: "Vay online mọi lúc mọi nơi" },
    { id: "binvay", type: "vay", name: "BinVay", link: "", logo: "", desc: "Tiền về tài khoản trong ngày" },
    { id: "agovay", type: "vay", name: "Agovay", link: "", logo: "", desc: "Vay tiền online chuyển khoản" },
    { id: "bfcmoney", type: "vay", name: "BFC Money", link: "", logo: "", desc: "Vay tiền nhanh qua iCloud" },
    { id: "fago", type: "vay", name: "Fago", link: "", logo: "", desc: "Vay tiền nhanh Fago" },
    { id: "navacash", type: "vay", name: "Navacash", link: "", logo: "", desc: "Lãi suất ưu đãi hấp dẫn" },
    { id: "creditvn", type: "vay", name: "Credit.vn", link: "", logo: "", desc: "Cổng tài chính uy tín" },
    { id: "credy", type: "vay", name: "Credy", link: "", logo: "", desc: "Giải pháp tài chính linh hoạt" },
    { id: "vimayman", type: "vay", name: "Ví May Mắn", link: "", logo: "", desc: "Ví vay tiền tiện lợi" },
    { id: "shbfinance", type: "vay", name: "SHB Finance", link: "", logo: "", desc: "Vay tiền mặt SHB Finance" },
    { id: "cayvang", type: "vay", name: "CayVang", link: "", logo: "https://hl-link.net/towLs20", desc: "Vay Cây Vàng - Duyệt nhanh" },
    { id: "vietmoney", type: "vay", name: "VietMoney", link: "", logo: "", desc: "Cầm đồ trực tuyến an toàn" },
    { id: "binixo", type: "vay", name: "Binixo", link: "", logo: "", desc: "Kết nối vay nhanh" },
    { id: "fec", type: "vay", name: "FE CREDIT", link: "", logo: "", desc: "Vay tiêu dùng tín chấp" },
    { id: "finzone", type: "vay", name: "Finzone", link: "", logo: "", desc: "Sàn tài chính kết nối khoản vay" },
    { id: "redbag-2", type: "vay", name: "Redbag", link: "", logo: "", desc: "Túi thần tài chính" },
    { id: "cashingpro", type: "vay", name: "Cashing Pro", link: "", logo: "", desc: "Giải pháp cầm cố tài sản" },
    { id: "dongshopsun1", type: "vay", name: "Đồng Shop Sun", link: "", logo: "", desc: "Vay tiền Nhật Bản" },
    { id: "avay", type: "vay", name: "Avay", link: "", logo: "", desc: "Vay tín chấp Avay" },
    { id: "f88", type: "vay", name: "F88", link: "", logo: "", desc: "Cầm cố tài sản F88" },
    { id: "vayvnd", type: "vay", name: "VayVND", link: "", logo: "", desc: "Vay cấp tốc online" },

    // --- 2. NGÂN HÀNG SỐ ---
    { id: "kbankpayroll", type: "bank", name: "KBank", link: "", logo: "", desc: "Mở TK nhận thưởng hấp dẫn" },
    { id: "mb-ios", type: "bank", name: "MB Bank", link: "", logo: "", desc: "Tài khoản số đẹp miễn phí" },
    { id: "cake", type: "bank", name: "Cake Bank", link: "", logo: "", desc: "Ngân hàng số Cake by VPBank" },
    { id: "tnex-cashloan", type: "bank", name: "TNEX", link: "", logo: "", desc: "Ngân hàng thuần số miễn phí" },
    { id: "msb-ekyc", type: "bank", name: "MSB mBank", link: "", logo: "", desc: "Mở tài khoản MSB số đẹp" },
    { id: "vpbankneo", type: "bank", name: "VPBank NEO", link: "", logo: "", desc: "Ngân hàng số toàn năng" },
    { id: "acb1", type: "bank", name: "ACB One", link: "", logo: "", desc: "Ngân hàng số ACB One" },
    { id: "ocbcode1", type: "bank", name: "OCB OMNI", link: "", logo: "", desc: "Ngân hàng số OCB OMNI" },
    { id: "vikki", type: "bank", name: "Vikki", link: "", logo: "", desc: "Ngân hàng số Vikki" },
    { id: "uob-ekyc", type: "bank", name: "UOB", link: "", logo: "", desc: "Tài khoản thanh toán UOB" },
    { id: "lpbank", type: "bank", name: "LPBank", link: "", logo: "", desc: "Tài khoản LPBank" },
    { id: "msb-tktt", type: "bank", name: "MSB TKTT", link: "", logo: "", desc: "Tài khoản thanh toán MSB" },

    // --- 3. THẺ TÍN DỤNG ---
    { id: "vib-2", type: "the", name: "VIB Credit", link: "", logo: "", desc: "Mở thẻ online, miễn phí thường niên" },
    { id: "tpbankevo", type: "the", name: "TPBank EVO", link: "", logo: "", desc: "Thẻ Evo 100% Online" },
    { id: "cake-cc", type: "the", name: "Be Visa", link: "", logo: "", desc: "Thẻ Cake x Be - Hoàn tiền" },
    { id: "vib-3", type: "the", name: "VIB Zalo", link: "", logo: "", desc: "Mở thẻ VIB qua Zalo" },
    { id: "vpbank-mc", type: "the", name: "VPBank Auto", link: "", logo: "", desc: "Thẻ VPBank duyệt tự động" },
    { id: "finmart", type: "the", name: "Finmart", link: "", logo: "", desc: "Thẻ tín dụng Finmart" },
    { id: "cake-web", type: "the", name: "Cake Thẻ", link: "", logo: "", desc: "Thẻ tín dụng Cake Freedom" },
    { id: "vib-card", type: "the", name: "VIB MAX", link: "", logo: "", desc: "Thẻ tín dụng VIB Max" }
];
