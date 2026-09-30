// Data & Konten Halaman
const pages = {
    "/quiz1": `
        <div class="fade-in space-y-8 text-center md:text-left">
            <div class="bg-beige-card p-8 md:p-12 rounded-2xl border border-maroon/10 shadow-sm flex flex-col md:flex-row items-center gap-8">
                <div class="flex-1 space-y-4">
                    <span class="inline-block px-3 py-1 bg-maroon/10 text-maroon font-semibold rounded-full text-sm">Welcome to My Personal Space</span>
                    <h1 class="text-4xl md:text-5xl font-extrabold text-maroon leading-tight">Halo, I'm Nabila Zalfaa!</h1>
                    <p class="text-lg text-stone-600 leading-relaxed">
                        Undergraduate Informatics Engineering Student at Institut Teknologi Sepuluh Nopember (ITS). Welcome to my Quiz 1 Web Development Project!
                    </p>
                    <div class="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="#/quiz1/profile" class="bg-maroon text-white px-6 py-3 rounded-xl font-medium hover:bg-maroon-dark transition shadow-md">Explore Profile</a>
                        <a href="#/quiz1/hometown" class="bg-beige-dark text-maroon border border-maroon/30 px-6 py-3 rounded-xl font-medium hover:bg-maroon/10 transition">My Hometown</a>
                    </div>
                </div>
            </div>

            <!-- Quick Overview Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-maroon mb-2">👤 Profile</h3>
                    <p class="text-stone-600 text-sm">Discover my academic journey, passion for games, and digital artwork.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-maroon mb-2">🍢 Local Food</h3>
                    <p class="text-stone-600 text-sm">Explore legendary culinary options from Jakarta that I can't stop thinking about.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-maroon mb-2">🏙️ Tourist Places</h3>
                    <p class="text-stone-600 text-sm">Check out iconic attractions, shopping malls, and historic hangouts in Jakarta.</p>
                </div>
            </div>
        </div>
    `,

    "/quiz1/profile": `
        <div class="fade-in space-y-8 max-w-4xl mx-auto">
            <div class="text-center md:text-left border-b border-maroon/20 pb-4">
                <h1 class="text-3xl md:text-4xl font-bold text-maroon">About Me</h1>
                <p class="text-stone-500 text-sm mt-1">Get to know more about Nabila Zalfaa</p>
            </div>

            <div class="bg-beige-card p-8 rounded-2xl border border-maroon/10 shadow-sm space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="text-sm uppercase tracking-wider text-stone-500 font-bold mb-1">Full Name</h3>
                        <p class="text-xl font-bold text-stone-800">Nabila Zalfaa</p>
                    </div>
                    <div>
                        <h3 class="text-sm uppercase tracking-wider text-stone-500 font-bold mb-1">Education</h3>
                        <p class="text-xl font-bold text-stone-800">Informatics Engineering</p>
                        <p class="text-stone-600 text-sm">Institut Teknologi Sepuluh Nopember (ITS)</p>
                    </div>
                    <div>
                        <h3 class="text-sm uppercase tracking-wider text-stone-500 font-bold mb-1">Origin</h3>
                        <p class="text-xl font-bold text-stone-800">Jakarta, Indonesia</p>
                    </div>
                    <div>
                        <h3 class="text-sm uppercase tracking-wider text-stone-500 font-bold mb-1">Passions & Hobbies</h3>
                        <p class="text-xl font-bold text-stone-800">Gaming & Making Art 🎨🎮</p>
                    </div>
                </div>

                <hr class="border-maroon/10">

                <div>
                    <h3 class="text-lg font-bold text-maroon mb-2">Personal Introduction</h3>
                    <p class="text-stone-600 leading-relaxed">
                        Hi! I am an undergraduate student majoring in Informatics Engineering at Institut Teknologi Sepuluh Nopember (ITS). 
                        Originally from Jakarta, I am deeply passionate about technology, visual design, and gaming. When I am not coding or studying, 
                        I love spending my time creating digital art and exploring creative artwork!
                    </p>
                </div>
            </div>
        </div>
    `,

    "/quiz1/hometown": `
        <div class="fade-in space-y-8 max-w-4xl mx-auto">
            <div class="border-b border-maroon/20 pb-4">
                <h1 class="text-3xl md:text-4xl font-bold text-maroon">My Hometown: Jakarta 🏙️</h1>
                <p class="text-stone-500 text-sm mt-1">The bustling capital city full of life and flavor</p>
            </div>

            <div class="bg-beige-card p-8 rounded-2xl border border-maroon/10 shadow-sm space-y-6">
                <p class="text-stone-700 leading-relaxed text-lg">
                    Jakarta is a big, energetic, and vibrant city that never sleeps! It’s a dynamic metropolis filled with endless skyscraper views, bustling streets, and diverse cultures.
                </p>
                
                <p class="text-stone-700 leading-relaxed text-lg">
                    When I was in Jakarta, I loved strolling around with <strong>TransJakarta</strong> or taking the train for spontaneous food hunting or just going wherever I wanted! There’s always something new to discover around every corner.
                </p>

                <div class="bg-maroon/10 border-l-4 border-maroon p-4 rounded-r-lg italic text-maroon font-medium text-sm">
                    "i miss my hometown while making this" ✨
                </div>
            </div>
        </div>
    `,

    "/quiz1/food": `
        <div class="fade-in space-y-8 max-w-5xl mx-auto">
            <div class="border-b border-maroon/20 pb-4">
                <h1 class="text-3xl md:text-4xl font-bold text-maroon">Jakarta Food I Can't Stop Thinking About 🤤</h1>
                <p class="text-stone-500 text-sm mt-1">My ultimate comfort food list from hometown</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:border-maroon/30 transition">
                    <h3 class="text-xl font-bold text-maroon">🍲 Soto Betawi</h3>
                    <p class="text-stone-600 text-sm mt-2">Rich, creamy coconut milk soup served with tender beef and warm rice.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:border-maroon/30 transition">
                    <h3 class="text-xl font-bold text-maroon">🥪 Roti Bakar Pak Eddy</h3>
                    <p class="text-stone-600 text-sm mt-2">The legendary toasted bread hangout spot with generous toppings.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:border-maroon/30 transition">
                    <h3 class="text-xl font-bold text-maroon">🍳 Kerak Telor</h3>
                    <p class="text-stone-600 text-sm mt-2">Traditional Betawi spicy omelette made with glutinous rice and toasted coconut.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:border-maroon/30 transition">
                    <h3 class="text-xl font-bold text-maroon">🍚 Nasi Goreng Samping Rumah</h3>
                    <p class="text-stone-600 text-sm mt-2">The unrivaled street-side fried rice near home with unmatched nostalgic flavor.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:border-maroon/30 transition">
                    <h3 class="text-xl font-bold text-maroon">🍢 Sate Maranggi Depan Sekolah</h3>
                    <p class="text-stone-600 text-sm mt-2">Marinated grilled skewers served right outside school during break time.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:border-maroon/30 transition">
                    <h3 class="text-xl font-bold text-maroon">🍩 Kue Cucur</h3>
                    <p class="text-stone-600 text-sm mt-2">Sweet, palm sugar fried pancake with crispy edges and soft center.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:border-maroon/30 transition">
                    <h3 class="text-xl font-bold text-maroon">🥣 Lontong Sayur</h3>
                    <p class="text-stone-600 text-sm mt-2">Rice cakes served in savory vegetable curry soup with crackers.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10 hover:border-maroon/30 transition">
                    <h3 class="text-xl font-bold text-maroon">👵 Masakan Nenek</h3>
                    <p class="text-stone-600 text-sm mt-2">Grandma's home-cooked dishes that hold the best memories.</p>
                </div>
            </div>
        </div>
    `,

    "/quiz1/tourist": `
        <div class="fade-in space-y-8 max-w-5xl mx-auto">
            <div class="border-b border-maroon/20 pb-4">
                <h1 class="text-3xl md:text-4xl font-bold text-maroon">Tourist Places & Hangout Spots 🎡</h1>
                <p class="text-stone-500 text-sm mt-1">Popular destinations and favorite spots across Jakarta</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10">
                    <span class="text-xs bg-maroon/10 text-maroon px-2.5 py-1 rounded-full font-bold">Amusement Park</span>
                    <h3 class="text-lg font-bold text-stone-800 mt-3">Dufan (Dunia Fantasi)</h3>
                    <p class="text-stone-600 text-sm mt-1">Iconic theme park full of exciting roller coasters and attractions in Ancol.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10">
                    <span class="text-xs bg-maroon/10 text-maroon px-2.5 py-1 rounded-full font-bold">Shopping Mall</span>
                    <h3 class="text-lg font-bold text-stone-800 mt-3">Central Park Mall</h3>
                    <p class="text-stone-600 text-sm mt-1">Popular mall with a huge outdoor park garden (Tribeca Park).</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10">
                    <span class="text-xs bg-maroon/10 text-maroon px-2.5 py-1 rounded-full font-bold">Shopping Mall</span>
                    <h3 class="text-lg font-bold text-stone-800 mt-3">Grand Indonesia</h3>
                    <p class="text-stone-600 text-sm mt-1">One of Jakarta’s largest luxury shopping destinations in Central Jakarta.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10">
                    <span class="text-xs bg-maroon/10 text-maroon px-2.5 py-1 rounded-full font-bold">Shopping Mall</span>
                    <h3 class="text-lg font-bold text-stone-800 mt-3">Pondok Indah Mall (PIM)</h3>
                    <p class="text-stone-600 text-sm mt-1">Legendary mall complex located in South Jakarta.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10">
                    <span class="text-xs bg-maroon/10 text-maroon px-2.5 py-1 rounded-full font-bold">Shopping Mall</span>
                    <h3 class="text-lg font-bold text-stone-800 mt-3">Lippo Mall</h3>
                    <p class="text-stone-600 text-sm mt-1">Modern lifestyle and entertainment centers spread across Jakarta.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10">
                    <span class="text-xs bg-maroon/10 text-maroon px-2.5 py-1 rounded-full font-bold">Waterfront</span>
                    <h3 class="text-lg font-bold text-stone-800 mt-3">PIK (Pantai Indah Kapuk)</h3>
                    <p class="text-stone-600 text-sm mt-1">Trendy coastal culinary center and seaside promenade.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10">
                    <span class="text-xs bg-maroon/10 text-maroon px-2.5 py-1 rounded-full font-bold">Culinary & Culture</span>
                    <h3 class="text-lg font-bold text-stone-800 mt-3">Blok M</h3>
                    <p class="text-stone-600 text-sm mt-1">Vibrant vintage district known for Japanese cuisine, thrifting, and cafes.</p>
                </div>
                <div class="bg-beige-card p-6 rounded-xl border border-maroon/10">
                    <span class="text-xs bg-maroon/10 text-maroon px-2.5 py-1 rounded-full font-bold">Historical Site</span>
                    <h3 class="text-lg font-bold text-stone-800 mt-3">Kota Tua Jakarta</h3>
                    <p class="text-stone-600 text-sm mt-1">Historic Old Town area surrounded by colonial-era architecture and museums.</p>
                </div>
            </div>
        </div>
    `
};

// Fungsi Router
function renderPage() {
    // Ambil path dari hash URL (contoh: "#/quiz1/profile" -> "/quiz1/profile")
    let hash = window.location.hash.replace('#', '') || '/quiz1';
    
    // Jika path tidak terdaftar, kembalikan ke default /quiz1
    if (!pages[hash]) {
        hash = '/quiz1';
    }

    // Render konten ke <main id="app">
    const appEl = document.getElementById('app');
    if (appEl) {
        appEl.innerHTML = pages[hash];
    }

    // Update kelas active pada tautan navigasi
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-path') === hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll ke paling atas setiap kali pindah halaman
    window.scrollTo(0, 0);
}

// Inisialisasi Event Listener setelah DOM Siap
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render halaman saat pertama dibuka
    renderPage();

    // 2. Render ulang jika URL hash berubah
    window.addEventListener('hashchange', renderPage);

    // 3. Toggle menu mobile
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Sembunyikan menu mobile saat link diklik
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});