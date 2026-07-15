document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    renderDecorations();
    lucide.createIcons();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    loadVisitorCount(); // Load visitor counter on page load

    // Mobile Menu Logik - Robuster Event Listener
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
        document.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        mobileMenu.addEventListener('click', (e) => e.stopPropagation());
    }
});

function renderContent() {
    const c = webseitenInhalt;
    document.getElementById('nav-logo').src = c.logoUrl; document.getElementById('nav-title').textContent = c.vereinNameKurz; document.getElementById('nav-subtitle').textContent = c.stadt; renderMenu(c.menu);
    document.getElementById('willkommen-badge').textContent = c.willkommen.badge; document.getElementById('willkommen-title-1').textContent = c.willkommen.titelZeile1; document.getElementById('willkommen-title-2').textContent = c.willkommen.titelZeile2; document.getElementById('willkommen-text').textContent = c.willkommen.text; document.getElementById('willkommen-image').src = c.willkommen.bildUrl; document.getElementById('willkommen-btn-verein').textContent = c.willkommen.buttonVerein; document.getElementById('willkommen-btn-kita').textContent = c.willkommen.buttonKita;
    document.getElementById('about-badge').textContent = c.ueberUns.badge; document.getElementById('about-title').textContent = c.ueberUns.titel; document.getElementById('about-text').textContent = c.ueberUns.text; renderFeatures(c.ueberUns.karten);
    document.getElementById('btn-vorstand').textContent = c.vorstand.buttonLabel;
    document.getElementById('vorstand-modal-title').textContent = c.vorstand.modalTitel;
    document.getElementById('vorstand-modal-subtitle').textContent = c.vorstand.modalUntertitel;
    document.getElementById('vorstand-modal-text').textContent = c.vorstand.modalText;
    renderVorstand(c.vorstand.mitglieder);
    const gp = document.getElementById('group-photo'), gpp = document.getElementById('group-photo-placeholder'); document.getElementById('group-photo-label').textContent = c.ueberUns.gruppenBildLabel;
    if (c.ueberUns.gruppenBildUrl) { gp.src = c.ueberUns.gruppenBildUrl; gp.classList.remove('hidden'); gpp.classList.add('hidden'); } else { gp.classList.add('hidden'); gpp.classList.remove('hidden'); }
    document.getElementById('social-title').textContent = c.socialMedia.titel; document.getElementById('social-subtitle').textContent = c.socialMedia.untertitel; document.getElementById('social-features').innerHTML = c.socialMedia.whatsapp.features.map(f => `<div class="flex items-center gap-3 text-gray-700 font-medium"><div class="w-6 h-6 bg-whatsapp/10 text-whatsapp rounded-full flex items-center justify-center shrink-0"><i data-lucide="check" class="w-4 h-4"></i></div>${f}</div>`).join('');
    document.getElementById('social-btn-whatsapp').href = c.socialMedia.whatsapp.link; document.getElementById('social-btn-whatsapp').querySelector('span').textContent = c.socialMedia.whatsapp.buttonText; document.getElementById('whatsapp-mock-name').textContent = c.socialMedia.whatsapp.name; document.getElementById('whatsapp-mock-logo').src = c.logoUrl;
    document.getElementById('whatsapp-qr-label').textContent = c.socialMedia.whatsapp.qrLabel; document.getElementById('whatsapp-qr-sublabel').textContent = c.socialMedia.whatsapp.qrSubLabel;
    if (c.socialMedia.whatsapp.qrUrl) document.getElementById('whatsapp-qr').src = c.socialMedia.whatsapp.qrUrl;
    document.getElementById('kita-section-label').textContent = c.kita.bereichLabel; document.getElementById('kita-badge').textContent = c.kita.badge; document.getElementById('kita-title').textContent = c.kita.titel; document.getElementById('kita-subtitle').textContent = c.kita.untertitel; document.getElementById('kita-text').textContent = c.kita.beschreibung; document.getElementById('kita-gallery-title').textContent = c.kita.galleryTitle; renderRaeume(c.kita.raeume, c.kita.galleryOverlayText);
    if (c.kita.leitung.bildUrl) { document.getElementById('kita-leitung-bild').src = c.kita.leitung.bildUrl; } else { document.getElementById('kita-leitung-bild-container').innerHTML = `<div class="w-full h-full image-placeholder text-blue-300 text-center flex flex-col items-center justify-center"><i data-lucide="user" class="w-16 h-16 mb-1"></i><p class="text-[10px] font-bold uppercase tracking-tighter">Bild folgt</p></div>`; }
    document.getElementById('kita-leitung-titel').textContent = c.kita.leitung.titel; document.getElementById('kita-leitung-name').textContent = c.kita.leitung.name; document.getElementById('label-kita-tel').textContent = c.kita.kontaktLabels.tel; document.getElementById('kita-tel').textContent = c.kita.kontakt.tel; document.getElementById('kita-tel').href = `tel:${c.kita.kontakt.tel.replace(/\s/g, '')}`; document.getElementById('label-kita-email').textContent = c.kita.kontaktLabels.email; document.getElementById('kita-email').textContent = c.kita.kontakt.email; document.getElementById('kita-email').href = `mailto:${c.kita.kontakt.email}`; document.getElementById('label-kita-app').textContent = c.kita.kontaktLabels.app; document.getElementById('kita-app').textContent = c.kita.kontakt.appInfo; document.getElementById('label-kita-adresse').textContent = c.kita.kontaktLabels.adresse; document.getElementById('kita-adresse').textContent = c.kita.kontakt.adresse;
    document.getElementById('projects-title').textContent = c.projekteSettings.titel; renderProjects(c.projekte); document.getElementById('actions-title').textContent = c.aktionenSettings.titel; document.getElementById('actions-subtitle').textContent = c.aktionenSettings.untertitel; renderActions(c.aktionen); document.getElementById('testimonials-title').textContent = c.testimonialsSettings.titel; document.getElementById('testimonials-subtitle').textContent = c.testimonialsSettings.untertitel; renderTestimonials(c.testimonials);
    document.getElementById('cta-title').textContent = c.cta.titel; document.getElementById('cta-text').textContent = c.cta.text; document.getElementById('btn-antrag').textContent = c.cta.buttonAntrag; document.getElementById('btn-spenden-cta').innerHTML = `<i data-lucide="heart-handshake" class="w-5 h-5"></i> ${c.cta.buttonSpenden}`;
    document.getElementById('bank-title').textContent = c.bank.titel; document.getElementById('donate-text').textContent = c.bank.infoText; document.getElementById('label-empfaenger').textContent = c.bank.labels.empfaenger; document.getElementById('bank-recipient').textContent = c.bank.empfaenger; document.getElementById('label-bank').textContent = c.bank.labels.bank; document.getElementById('bank-name').textContent = c.bank.bankName; document.getElementById('label-iban').textContent = c.bank.labels.iban; document.getElementById('iban-display').textContent = c.bank.iban; document.getElementById('btn-copy-iban').title = c.bank.labels.copyIbanHint; document.getElementById('label-bic').textContent = c.bank.labels.bic; document.getElementById('bic-display').textContent = c.bank.bic; document.getElementById('btn-copy-all').querySelector('span').textContent = c.bank.labels.copyAll; document.getElementById('qr-info-text').textContent = c.bank.qrInfo;
    if (c.bank.qrUrl) document.getElementById('bank-qrcode').src = c.bank.qrUrl;
    document.getElementById('footer-header-kontakt').textContent = c.legal.footerHeaders.kontakt; document.getElementById('footer-header-legal').textContent = c.legal.footerHeaders.rechtliches; document.getElementById('footer-logo').src = c.logoUrlFooter; document.getElementById('footer-address').innerHTML = c.footer.adresse.map(line => `<p>${line}</p>`).join('');
    const em = document.getElementById('footer-email'); em.href = `mailto:${c.footer.email}`; em.innerHTML = `<i data-lucide="mail" class="w-4 h-4"></i> ${c.footer.email}`;
    document.getElementById('footer-links').innerHTML = c.footer.links.map(l => { let h = (l.text === "Impressum") ? `onclick="openLegalModal('impressum'); return false;"` : ((l.text === "Datenschutz") ? `onclick="openLegalModal('datenschutz'); return false;"` : ""); return `<li><a href="${l.url}" ${h} class="hover:text-white transition cursor-pointer">${l.text}</a></li>`; }).join('');
    document.getElementById('footer-about').textContent = c.footer.ueberText; document.getElementById('footer-copyright').textContent = c.vereinName; document.querySelectorAll('.modal-close-btn-text').forEach(btn => btn.textContent = c.ui.buttonSchliessen); document.getElementById('membership-modal-title').textContent = c.ui.mitgliedschaft.titel; document.getElementById('membership-modal-text').textContent = c.ui.mitgliedschaft.text; document.getElementById('membership-modal-btn-text').textContent = c.ui.mitgliedschaft.buttonDownload; document.getElementById('membership-modal-download-btn').href = c.cta.dateiNameAntrag;
    document.getElementById('visitor-stats-domain').textContent = c.legal.stammdaten.webseite.replace('https://', '').replace(/\/.*/, '') + ' - Besucherstatistik';
}
function renderFeatures(cards) { document.getElementById('features-container').innerHTML = cards.map(c => { let cl = c.farbe === "yellow" ? "bg-yellow-50 text-yellow-600 border-yellow-100" : (c.farbe === "orange" ? "bg-orange-50 text-orange-600 border-orange-100" : "bg-green-50 text-brand-green border-green-100"); return `<div class="text-center p-6 ${cl} bg-opacity-50 rounded-2xl border transition hover:shadow-lg"><div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-center flex flex-col justify-center"><i data-lucide="${c.icon}" class="w-8 h-8 mx-auto"></i></div><h3 class="text-xl font-bold text-gray-900 mb-2 font-display">${c.titel}</h3><p class="text-gray-600 leading-relaxed text-center sm:text-left">${c.text}</p></div>`; }).join(''); }
function renderRaeume(raeume, overlay) {
    const container = document.getElementById('kita-raeume');
    const fp = webseitenInhalt.kita.footprints || {};

    if (fp.spacingSections) {
        container.className = fp.spacingSections;
    }

    container.innerHTML = raeume.map((r, index) => {
        const bilderHtml = r.bilder && r.bilder.length > 0
            ? r.bilder.map((b, bIdx) => {
                const colCount = 2;
                const row = Math.floor(bIdx / colCount);
                const isEvenRow = row % 2 === 0;
                const isLastInArea = bIdx === r.bilder.length - 1;

                const orderClass = `lg:order-${isEvenRow ? bIdx : (row * colCount + (colCount - 1 - (bIdx % colCount)))}`;
                const rotation = (bIdx % 2 === 0 ? 'rotate-2' : '-rotate-2');

                let pathHtml = '';
                if (!isLastInArea) {
                    const isEndOfRow = (bIdx + 1) % colCount === 0;
                    let steps = [0, 1, 2, 3, 4, 5];
                    if (! isEndOfRow){
                        steps = [0, 2, 4];
                    }

                    pathHtml = `
                        <div class="absolute inset-0 pointer-events-none z-20">
                            <div class="hidden lg:block">
                                ${steps.map(sIdx => {
                                    const delay = (bIdx * 1.5) + (sIdx * 0.3);
                                    let style = "";
                                    if (isEndOfRow) {
                                        if (isEvenRow) {
                                            const x = -1 - Math.sin(sIdx * 0.6) * 3;
                                            const y = 60 + (sIdx * 15);
                                            style = `right: ${x}rem; top: ${y}%;`;
                                        } else {
                                            const x = -1 - Math.sin(sIdx * 0.6) * 3;
                                            const y = 60 + (sIdx * 15);
                                            style = `left: ${x}rem; top: ${y}%;`;
                                        }
                                    } else {
                                        const x = 0.8 + (sIdx * 0.8);
                                        const y = 45 + Math.sin(sIdx * 0.8) * 5;
                                        if (isEvenRow) { style = `right: -${x}rem; top: ${y}%;`; }
                                        else { style = `left: -${x}rem; top: ${y}%;`; }
                                    }
                                    return `<div class="absolute guided-step ${fp.color || 'text-brand'}" style="${style} animation-delay: ${delay}s"><i data-lucide="footprints" class="w-5 h-5 transform rotate-[180deg]"></i></div>`;
                                }).join('')}
                            </div>
                            <div class="lg:hidden block">
                                ${[0, 1, 2].map(sIdx => {
                                    const delay = (bIdx * 1.5) + (sIdx * 0.4);
                                    const side = (bIdx % 2 === 0 ? 'right' : 'left');
                                    let pos = "";
                                    if (sIdx === 0) pos = `-bottom-6 ${side === 'right' ? '-right-6' : '-left-6'}`;
                                    if (sIdx === 1) pos = `-bottom-14 ${side === 'right' ? '-right-12' : '-left-12'}`;
                                    if (sIdx === 2) pos = `-bottom-22 ${side === 'right' ? '-right-6' : '-left-6'}`;
                                    return `<div class="absolute ${pos} ${fp.color || 'text-brand'} guided-step" style="animation-delay: ${delay}s"><i data-lucide="footprints" class="w-5 h-5 transform rotate-[180deg]"></i></div>`;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }

                return `
                    <div class="relative group ${orderClass}">
                        <div class="bg-white p-3 shadow-xl rounded-2xl transform transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 border border-white/50 ${rotation} z-10 hover:z-30">
                            <div class="h-48 sm:h-72 lg:h-[22rem] w-64 sm:w-96 lg:w-[30rem] overflow-hidden rounded-xl relative">
                                <img src="${b}" class="w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <p class="text-white text-xs font-medium italic">${overlay}</p>
                                </div>
                            </div>
                        </div>
                        ${pathHtml}
                    </div>
                `;
            }).join('')
            : `<div class="w-full image-placeholder text-blue-300 text-center p-12 rounded-[2rem]"><i data-lucide="camera" class="w-16 h-16 mb-4"></i><p class="text-sm font-bold uppercase">Fotos folgen bald</p></div>`;

        return `
            <div class="area-block">
                <div class="max-w-3xl mx-auto text-center mb-8 px-4">
                    <h4 class="text-3xl font-bold text-gray-900 font-display mb-4 relative inline-block">
                        ${r.titel}
                        <div class="absolute -bottom-2 left-0 w-full h-1 bg-brand-green/30 rounded-full"></div>
                    </h4>
                    <p class="text-gray-600 text-lg leading-relaxed">${r.text}</p>
                </div>
                <div class="flex flex-wrap justify-center gap-12 lg:gap-16 px-4 relative">
                    ${bilderHtml}
                </div>
                ${index < raeume.length - 1 ? `
                    <div class="flex justify-center mt-8 mb-4 ${fp.color || 'text-brand'} ${fp.opacityLarge || 'opacity-10'}">
                        <div class="flex gap-6 transform rotate-180 scale-75 sm:scale-100">
                            <i data-lucide="footprints" class="${fp.sizeLarge || 'w-12 h-12'} ${fp.animLarge1 || ''}"></i>
                            <i data-lucide="footprints" class="${fp.sizeLarge || 'w-12 h-12'} mt-12 ${fp.animLarge2 || ''}"></i>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function renderProjects(projects) { document.getElementById('projects-container').innerHTML = projects.map(p => { let sc = p.status === "aktiv" ? "text-brand-green bg-green-100" : (p.status === "geplant" ? "text-brand bg-orange-100" : "text-blue-600 bg-blue-100"); return `<div class="scroll-item w-[85%] md:w-[calc(33.33%-1rem)] bg-white rounded-3xl shadow-sm border overflow-hidden transition hover:shadow-md animate-fade-in relative z-10 flex flex-col"><div class="relative h-48 shrink-0"><img class="h-full w-full object-cover" src="${p.bildUrl}"><div class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${sc}">${p.statusText}</div></div><div class="p-6 flex flex-col flex-grow text-left"><h3 class="text-xl font-bold text-gray-900 font-display mb-3">${p.titel}</h3><p class="text-gray-600 text-sm leading-relaxed line-clamp-4 text-center sm:text-left">${p.beschreibung}</p></div></div>`; }).join(''); }
function renderActions(actions) { document.getElementById('actions-container').innerHTML = actions.map(a => { let style = a.bildUrl ? `background-image: url('${a.bildUrl}'); background-size: cover; background-position: center;` : ""; let tc = a.textFarbe === 'white' ? "text-white text-shadow" : "text-gray-900", dc = a.textFarbe === 'white' ? "text-gray-100 text-shadow" : "text-gray-600", ov = a.bildUrl ? `<div class="absolute inset-0 ${a.textFarbe === 'white' ? 'bg-black/40' : 'bg-white/60'} transition z-0"></div>` : ""; return `<div class="scroll-item w-[85%] md:w-[calc(33.33%-1rem)] ${a.bildUrl ? 'border-transparent relative overflow-hidden group' : 'bg-orange-50 border-orange-100'} rounded-2xl p-6 border hover:shadow-lg transition h-full flex flex-col relative z-10 text-left" style="${style}">${ov}<div class="relative z-10 flex flex-col h-full"><div class="flex items-center justify-between mb-4"><div class="p-3 bg-white rounded-full text-brand shadow-sm shrink-0"><i data-lucide="${a.icon}" class="w-6 h-6"></i></div><span class="text-xs font-bold uppercase tracking-wider text-brand-dark bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm">${a.zeitraum}</span></div><h3 class="text-lg font-bold ${tc} mb-2 font-display">${a.titel}</h3><p class="${dc} text-sm flex-grow line-clamp-3 text-center sm:text-left">${a.text}</p></div></div>`; }).join(''); }
function renderTestimonials(testimonials) { document.getElementById('testimonials-container').innerHTML = testimonials.map(t => { let av = t.avatar ? `<img src="${t.avatar}" alt="${t.name}" class="w-14 h-14 rounded-full border-2 border-brand-green/20 object-cover">` : `<div class="w-14 h-14 rounded-full bg-soft-green border-2 border-brand-green/20 flex items-center justify-center text-brand-green text-center flex flex-col justify-center"><i data-lucide="user" class="w-8 h-8 mx-auto"></i></div>`; return `<div class="scroll-item w-[85%] md:w-[calc(33.33%-1rem)] bg-white rounded-3xl p-8 shadow-sm border flex flex-col transition hover:shadow-md relative z-10 text-left"><div class="flex items-center gap-4 mb-6">${av}<div><h4 class="font-bold text-gray-900">${t.name}</h4><p class="text-xs text-brand-green font-semibold uppercase tracking-wider">${t.rolle}</p></div></div><p class="text-gray-600 italic leading-relaxed flex-grow">"${t.text}"</p><div class="mt-4 text-brand-light"><i data-lucide="quote" class="w-8 h-8 opacity-20"></i></div></div>`; }).join(''); lucide.createIcons(); }
function scrollContainer(id, dir) { const el = document.getElementById(id); const scrollAmount = el.clientWidth * 0.8; el.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' }); }
function renderDecorations() { const deko = webseitenInhalt.dekoElemente; Object.keys(deko).forEach(sid => { const s = document.getElementById(sid); if (!s) return; const c = s.querySelector('.section-decorations'); if (!c) return; c.innerHTML = deko[sid].map(item => `<div class="absolute ${item.pos} ${item.color} ${item.anim} z-0 pointer-events-none"><i data-lucide="${item.icon}" class="${item.size}"></i></div>`).join(''); }); }
function renderMenu(items) { const d = document.getElementById('desktop-menu'), m = document.getElementById('mobile-menu-items'); d.innerHTML = ''; m.innerHTML = ''; items.forEach(item => { let cl = "text-gray-600 hover:text-brand font-medium transition", mCl = "text-gray-700 hover:text-brand hover:bg-gray-50"; if (item.highlight) { cl = "px-5 py-2.5 bg-brand text-white rounded-full font-bold hover:bg-brand-dark transition shadow-md transform hover:-translate-y-0.5"; mCl = "text-brand font-bold bg-orange-50"; } else if (item.kitaHighlight) { cl = "px-5 py-2.5 bg-brand-green text-white rounded-full font-bold hover:bg-green-700 transition shadow-md transform hover:-translate-y-0.5"; mCl = "text-brand-green font-bold bg-green-50"; } d.innerHTML += `<a href="${item.link}" class="${cl}">${item.label}</a>`; m.innerHTML += `<a href="${item.link}" class="block px-3 py-2 rounded-md text-base font-medium ${mCl}">${item.label}</a>`; }); }
function openLegalModal(type) { const l = webseitenInhalt.legal, t = l.templates[type]; document.getElementById('legal-modal-title').textContent = t.titel; document.getElementById('legal-modal-content').innerHTML = t.getHtml(l.stammdaten); document.getElementById('legal-modal').classList.remove('hidden'); lucide.createIcons(); }
function closeLegalModal() { document.getElementById('legal-modal').classList.add('hidden'); }
function openModal() { document.getElementById('membership-modal').classList.remove('hidden'); setTimeout(() => document.getElementById('membership-modal').firstElementChild.classList.remove('scale-95', 'opacity-0'), 10); }
function closeModal() { document.getElementById('membership-modal').classList.add('hidden'); }
document.getElementById('membership-modal').addEventListener('click', (e) => { if (e.target.id === 'membership-modal') closeModal(); });
document.getElementById('legal-modal').addEventListener('click', (e) => { if (e.target.id === 'legal-modal') closeLegalModal(); });
document.getElementById('vorstand-modal').addEventListener('click', (e) => { if (e.target.id === 'vorstand-modal') closeVorstandModal(); });
document.getElementById('visitor-stats-modal').addEventListener('click', (e) => { if (e.target.id === 'visitor-stats-modal') closeVisitorStatsModal(); });

function renderVorstand(mitglieder) {
    document.getElementById('vorstand-grid').innerHTML = mitglieder.map(m => {
        let imgHtml = m.bildUrl
            ? `<img src="${m.bildUrl}" class="w-full h-full object-cover">`
            : `<div class="w-full h-full image-placeholder text-brand/20"><i data-lucide="user" class="w-12 h-12"></i></div>`;
        return `
            <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center transition hover:shadow-md">
                <div class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-soft-amber shadow-sm shrink-0">
                    ${imgHtml}
                </div>
                <h4 class="text-xl font-bold text-gray-900 font-display">${m.name}</h4>
                <p class="text-brand font-semibold text-sm uppercase tracking-wider mb-3">${m.rolle}</p>
                <p class="text-gray-500 text-sm leading-relaxed text-center">${m.beschreibung}</p>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function openVorstandModal() {
    const m = document.getElementById('vorstand-modal');
    m.classList.remove('hidden');
    setTimeout(() => m.firstElementChild.classList.remove('scale-95', 'opacity-0'), 10);
}

function closeVorstandModal() {
    document.getElementById('vorstand-modal').classList.add('hidden');
}

// Visitor Stats Modal Functions
function openVisitorStatsModal() {
    loadVisitorCount(); // Refresh count when opening modal
    const m = document.getElementById('visitor-stats-modal');
    m.classList.remove('hidden');
    setTimeout(() => m.firstElementChild.classList.remove('scale-95', 'opacity-0'), 10);
}

function closeVisitorStatsModal() {
    document.getElementById('visitor-stats-modal').classList.add('hidden');
}

// Load and display visitor count from GoatCounter
function loadVisitorCount() {
    // Attempt to fetch from GoatCounter API
    // Note: This will be blocked by ad blockers - tracking still works via script tag
    fetch('https://senfkorn-haltern.goatcounter.com/counter.json')
        .then(response => {
            if (!response.ok) throw new Error('No count data');
            return response.json();
        })
        .then(data => {
            if (data && data.count !== undefined) {
                updateVisitorDisplay(data.count);
            }
        })
        .catch((error) => {
            // Check if this looks like ad blocker interference
            // Ad blockers typically cause "TypeError: Failed to fetch" or network errors
            if (error.message && (error.message.includes('fetch') || error.name === 'TypeError')) {
                setBlockedByAdblocker();
            }
            // Otherwise, just keep the placeholder - count will appear in dashboard later
        });
}

// Display message when blocked by ad blocker
function setBlockedByAdblocker() {
    const msg = 'Durch Ad Blocker blockiert';
    const elem1 = document.getElementById('visitor-counter');
    const elem2 = document.getElementById('visitor-counter-modal');
    const hint = document.getElementById('adblocker-hint');
    if (elem1) elem1.textContent = msg;
    if (elem2) elem2.textContent = msg;
    if (hint) hint.classList.remove('hidden');
}

// Update both counter displays with the count
function updateVisitorDisplay(count) {
    const formatted = count.toLocaleString('de-DE');
    const elem1 = document.getElementById('visitor-counter');
    const elem2 = document.getElementById('visitor-counter-modal');
    const hint = document.getElementById('adblocker-hint');
    if (elem1) elem1.textContent = formatted;
    if (elem2) elem2.textContent = formatted;
    if (hint) hint.classList.add('hidden'); // Hide hint when count loads successfully
}
