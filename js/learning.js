/**
 * IECLOP Learning Hub & Module Repository Controller
 * Features: Instant Search, Category Filter, Bilingual Data, Modal Detail, GDrive Integration
 */

const learningModules = [
    {
        id: "mod-01",
        category: "grammar",
        badge: { id: "Grammar", en: "Grammar" },
        title: {
            id: "Mastering English 16 Tenses: Konsep & Implementasi",
            en: "Mastering English 16 Tenses: Concepts & Practical Usage"
        },
        desc: {
            id: "Panduan komprehensif memahami formula, fungsi, dan contoh nyata penggunaan 16 tenses dalam percakapan dan penulisan formal.",
            en: "A comprehensive guide to understanding formulas, functions, and real-world usage of all 16 English tenses in conversations and writing."
        },
        level: { id: "Semua Tingkat", en: "All Levels" },
        format: "pdf",
        formatLabel: "PDF (3.4 MB)",
        author: "Divisi Education",
        date: "2026",
        driveUrl: "https://drive.google.com/drive/folders/1ieclop_learning_grammar_tenses",
        syllabus: {
            id: [
                "Dasar pembagian Present, Past, Future, & Perfect",
                "Perbedaan krusial Simple Past vs Present Perfect",
                "Common Mistakes & Jebakan tenses dalam tes",
                "Latihan soal interaktif beserta kunci jawaban"
            ],
            en: [
                "Fundamentals of Present, Past, Future, & Perfect",
                "Crucial differences between Simple Past & Present Perfect",
                "Common mistakes and traps in English exams",
                "Interactive practice questions with answer keys"
            ]
        }
    },
    {
        id: "mod-02",
        category: "speaking",
        badge: { id: "Speaking", en: "Speaking" },
        title: {
            id: "Daily English Conversation & Fluency Booster",
            en: "Daily English Conversation & Fluency Booster"
        },
        desc: {
            id: "Kumpulan frasa percakapan harian, idioms populer, dan teknik berbicara bahasa Inggris secara percaya diri tanpa rasa gugup.",
            en: "Collection of daily conversational phrases, popular idioms, and techniques to speak English confidently without nervousness."
        },
        level: { id: "Pemula - Menengah", en: "Beginner - Intermediate" },
        format: "pdf",
        formatLabel: "PDF (2.8 MB)",
        author: "Divisi Education",
        date: "2026",
        driveUrl: "https://drive.google.com/drive/folders/1ieclop_learning_daily_speaking",
        syllabus: {
            id: [
                "Strategi mengatasi mental block & fear of speaking",
                "50+ Frasa percakapan kasual & profesional",
                "Pronunciation guide: Silent letters & connected speech",
                "Roleplay scenarios untuk latihan berpasangan"
            ],
            en: [
                "Overcoming mental blocks & fear of speaking",
                "50+ Casual & professional conversation phrases",
                "Pronunciation guide: Silent letters & connected speech",
                "Roleplay scenarios for paired speaking practice"
            ]
        }
    },
    {
        id: "mod-03",
        category: "toefl",
        badge: { id: "TOEFL / IELTS", en: "TOEFL / IELTS" },
        title: {
            id: "TOEFL ITP Preparation: Listening, Structure & Reading",
            en: "TOEFL ITP Preparation: Listening, Structure & Reading"
        },
        desc: {
            id: "Modul intensif persiapan tes TOEFL ITP lengkap dengan trik membedah soal Structure & Written Expression serta strategi Listening.",
            en: "Intensive TOEFL ITP preparation module complete with tricks to tackle Structure & Written Expression and Listening strategies."
        },
        level: { id: "Menengah - Mahir", en: "Intermediate - Advanced" },
        format: "folder",
        formatLabel: "Drive Folder",
        author: "Divisi Education",
        date: "2026",
        driveUrl: "https://drive.google.com/drive/folders/1ieclop_learning_toefl_itp_kit",
        syllabus: {
            id: [
                "Analisis Pola Soal Structure (Skill 1 - 60)",
                "Strategi Listening Part A, B, dan C",
                "Teknik Skimming & Scanning Reading Comprehension",
                "Full Practice Test + Audio Listening & Pembahasan"
            ],
            en: [
                "Structure Question Pattern Analysis (Skills 1 - 60)",
                "Strategies for Listening Part A, B, and C",
                "Techniques for Skimming & Scanning Reading Passages",
                "Full Practice Test + Audio Listening & Answer Keys"
            ]
        }
    },
    {
        id: "mod-04",
        category: "public-speaking",
        badge: { id: "Debate & Speech", en: "Debate & Speech" },
        title: {
            id: "Parliamentary Debate Framework: Asian & British Style",
            en: "Parliamentary Debate Framework: Asian & British Style"
        },
        desc: {
            id: "Metode konstruksi argumen A-R-E-L, teknik rebuttals tajam, time management, dan tips adjudication dalam kompetisi debat bahasa Inggris.",
            en: "A-R-E-L argument construction methodology, sharp rebuttal techniques, time management, and debate adjudication strategies."
        },
        level: { id: "Menengah - Mahir", en: "Intermediate - Advanced" },
        format: "pdf",
        formatLabel: "PDF (5.2 MB)",
        author: "Divisi Olympic",
        date: "2026",
        driveUrl: "https://drive.google.com/drive/folders/1ieclop_learning_debate_framework",
        syllabus: {
            id: [
                "Format & Aturan Main British Parliamentary (BP) vs Asian Parliamentary (AP)",
                "Membangun Argumen Kuat dengan Rumus A-R-E-L",
                "Teknik POI (Point of Information) dan Whip Speech yang Efektif",
                "Bank Motion Terbaru dari Turnamen Nasional (NUDC / WUDC)"
            ],
            en: [
                "British Parliamentary (BP) vs Asian Parliamentary (AP) Rules & Roles",
                "Building robust arguments with the A-R-E-L Formula",
                "Effective POI (Point of Information) and Whip Speeches",
                "Latest Motion Bank from National Competitions (NUDC / WUDC)"
            ]
        }
    },
    {
        id: "mod-05",
        category: "grammar",
        badge: { id: "Grammar", en: "Grammar" },
        title: {
            id: "Academic Writing & Essay Structure Blueprint",
            en: "Academic Writing & Essay Structure Blueprint"
        },
        desc: {
            id: "Panduan praktis menulis esai akademik berstandar internasional, perumusan thesis statement, kohesi paragraf, dan parafrase.",
            en: "Practical blueprint for writing international standard academic essays, formulating thesis statements, paragraph cohesion, and paraphrasing."
        },
        level: { id: "Menengah", en: "Intermediate" },
        format: "docs",
        formatLabel: "Google Docs",
        author: "Divisi Education",
        date: "2026",
        driveUrl: "https://drive.google.com/drive/folders/1ieclop_learning_academic_writing",
        syllabus: {
            id: [
                "Struktur 5-Paragraph Essay (Intro, Body, Conclusion)",
                "Cara merumuskan Thesis Statement yang tajam & spesifik",
                "Teknik Paraphrasing & Menghindari Plagiarisme",
                "Contoh Esai Beasiswa & Kompetisi Esai Nasional"
            ],
            en: [
                "Standard 5-Paragraph Essay Structure",
                "Formulating sharp & specific Thesis Statements",
                "Paraphrasing techniques and avoiding plagiarism",
                "Real winning samples of scholarship & competition essays"
            ]
        }
    },
    {
        id: "mod-06",
        category: "infocom",
        badge: { id: "Infocom", en: "Infocom" },
        title: {
            id: "Visual Branding & Social Media Design Kit",
            en: "Visual Branding & Social Media Design Kit"
        },
        desc: {
            id: "Panduan desain grafis publikasi organisasi, color theory, tipografi Canva/Photoshop, serta template feed dan story resmi IECLOP.",
            en: "Graphic design guide for student organization publications, color theory, typography in Canva/Photoshop, and official social media templates."
        },
        level: { id: "Pemula - Menengah", en: "Beginner - Intermediate" },
        format: "slides",
        formatLabel: "Slides & Assets",
        author: "Divisi Infocom",
        date: "2026",
        driveUrl: "https://drive.google.com/drive/folders/1ieclop_learning_design_branding",
        syllabus: {
            id: [
                "Prinsip Desain Grafis: Hierarchy, Contrast, & Alignment",
                "Panduan Warna & Font Resmi Organisasi IECLOP",
                "Template Siap Pakai untuk Feed & Story Instagram",
                "Workflow pembuatan poster event & konten edukasi"
            ],
            en: [
                "Graphic Design Principles: Hierarchy, Contrast, & Alignment",
                "Official IECLOP Color Codes and Typography Guidelines",
                "Ready-to-use Instagram Feed & Story Templates",
                "Workflow for creating event posters & social feeds"
            ]
        }
    },
    {
        id: "mod-07",
        category: "speaking",
        badge: { id: "Speaking", en: "Speaking" },
        title: {
            id: "Storytelling & Expressive Speech Guide",
            en: "Storytelling & Expressive Speech Guide"
        },
        desc: {
            id: "Kiat sukses memenangkan kompetisi Storytelling dan Speech: pengembangan karakter, intonasi dramatis, dan properti panggung.",
            en: "Key strategies for winning Storytelling and Speech competitions: character development, dramatic intonation, and stage props."
        },
        level: { id: "Semua Tingkat", en: "All Levels" },
        format: "pdf",
        formatLabel: "PDF (4.1 MB)",
        author: "Divisi Olympic",
        date: "2026",
        driveUrl: "https://drive.google.com/drive/folders/1ieclop_learning_storytelling_speech",
        syllabus: {
            id: [
                "Teknik Membangun Plot & Emosi Cerita",
                "Variasi Karakter Suara (Voice Acting Basics)",
                "Penggunaan Gerak Tubuh & Mimik Wajah Efektif",
                "Naskah Storytelling Pemenang Medali Emas IPEC"
            ],
            en: [
                "Techniques to Build Plot & Emotional Arcs",
                "Voice Acting & Character Variation Basics",
                "Effective Body Gestures & Facial Expressions",
                "Gold Medal Winning Storytelling Script Samples"
            ]
        }
    },
    {
        id: "mod-08",
        category: "organization",
        badge: { id: "Organisasi", en: "Organization" },
        title: {
            id: "Event Management & Public Relations Playbook",
            en: "Event Management & Public Relations Playbook"
        },
        desc: {
            id: "Buku panduan manajemen acara, komunikasi sponsorship, penyusunan proposal kegiatan, dan media partner UKM.",
            en: "Playbook for event management, sponsorship communication, project proposal drafting, and student organization media relations."
        },
        level: { id: "Semua Tingkat", en: "All Levels" },
        format: "folder",
        formatLabel: "Drive Folder",
        author: "Divisi Public Relation",
        date: "2026",
        driveUrl: "https://drive.google.com/drive/folders/1ieclop_learning_pr_event_playbook",
        syllabus: {
            id: [
                "SOP Perencanaan Acara dari Pra hingga Pasca Kegiatan",
                "Template Surat Menyurat & Proposal Sponsorship",
                "Etika Menghubungi Narasumber & Juri Nasional",
                "Checklist Evaluasi & Laporan Pertanggungjawaban (LPJ)"
            ],
            en: [
                "Event Planning SOP from Pre to Post Event",
                "Official Lettering & Sponsorship Proposal Templates",
                "Communication Etiquette for Guest Speakers & Judges",
                "Post-Event Evaluation & Accountability Checklist"
            ]
        }
    }
];

// STATE MANAGEMENT
let currentCategory = "all";
let searchQuery = "";
let currentLang = localStorage.getItem("preferredLang") || "id";

// DOM ELEMENTS
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("modules-grid");
    const searchInput = document.getElementById("module-search-input");
    const searchClearBtn = document.getElementById("search-clear-btn");
    const filterPills = document.querySelectorAll(".filter-pill");
    const emptyState = document.getElementById("empty-state");
    const resetFilterBtn = document.getElementById("btn-reset-filter");

    // MODAL ELEMENTS
    const modalOverlay = document.getElementById("learning-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalTitle = document.getElementById("modal-title");
    const modalTopicBadge = document.getElementById("modal-topic-badge");
    const modalFormatBadge = document.getElementById("modal-format-badge");
    const modalDesc = document.getElementById("modal-desc");
    const modalSyllabusList = document.getElementById("modal-syllabus-list");
    const modalDriveBtn = document.getElementById("modal-drive-btn");
    const modalCopyBtn = document.getElementById("modal-copy-btn");
    const toastNotice = document.getElementById("toast-notice");

    let currentSelectedModule = null;

    // 1. UPDATE STATS & CATEGORY COUNTS
    function updateCategoryCounts() {
        const counts = { all: learningModules.length };
        learningModules.forEach(mod => {
            counts[mod.category] = (counts[mod.category] || 0) + 1;
        });

        document.querySelectorAll("[data-count-cat]").forEach(el => {
            const cat = el.getAttribute("data-count-cat");
            if (counts[cat] !== undefined) {
                el.textContent = counts[cat];
            }
        });
    }

    // 2. RENDER MODULE CARDS
    function renderModules() {
        if (!gridContainer) return;

        const filtered = learningModules.filter(item => {
            const matchesCategory = currentCategory === "all" || item.category === currentCategory;
            
            const titleText = (item.title[currentLang] || item.title.id).toLowerCase();
            const descText = (item.desc[currentLang] || item.desc.id).toLowerCase();
            const badgeText = (item.badge[currentLang] || item.badge.id).toLowerCase();
            const query = searchQuery.trim().toLowerCase();

            const matchesSearch = !query || 
                titleText.includes(query) || 
                descText.includes(query) || 
                badgeText.includes(query) ||
                item.author.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });

        gridContainer.innerHTML = "";

        if (filtered.length === 0) {
            if (emptyState) emptyState.style.display = "block";
            return;
        } else {
            if (emptyState) emptyState.style.display = "none";
        }

        filtered.forEach((mod, index) => {
            const title = mod.title[currentLang] || mod.title.id;
            const desc = mod.desc[currentLang] || mod.desc.id;
            const badgeLabel = mod.badge[currentLang] || mod.badge.id;
            const levelText = mod.level[currentLang] || mod.level.id;
            const delay = (index % 6) * 0.05;

            // Icon by format
            let formatIcon = "fa-file-pdf";
            if (mod.format === "slides") formatIcon = "fa-file-powerpoint";
            if (mod.format === "docs") formatIcon = "fa-file-lines";
            if (mod.format === "folder") formatIcon = "fa-folder-open";

            const card = document.createElement("div");
            card.className = "module-card module-card-enter";
            card.style.animationDelay = `${delay}s`;

            card.innerHTML = `
                <div class="module-card-top">
                    <div class="module-card-header">
                        <span class="topic-badge ${mod.category}">
                            <i class="fa-solid fa-bookmark text-[9px]"></i> ${badgeLabel}
                        </span>
                    </div>

                    <div class="module-card-body">
                        <h3 class="module-title">${title}</h3>
                        <p class="module-desc">${desc}</p>
                    </div>
                </div>

                <div class="module-card-bottom">
                    <div class="module-meta-info">
                        <span><i class="fa-solid fa-layer-group"></i> ${levelText}</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-users"></i> ${mod.author}</span>
                    </div>

                    <div class="module-card-actions">
                        <a href="${mod.driveUrl}" target="_blank" rel="noopener noreferrer" class="btn-drive-access" title="Buka di Google Drive">
                            <i class="fa-brands fa-google-drive"></i>
                            <span>${currentLang === "en" ? "Open in Drive" : "Buka di Drive"}</span>
                            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-75"></i>
                        </a>
                        <button type="button" class="btn-detail-modal" data-mod-id="${mod.id}" title="Lihat Detail & Silabus">
                            <i class="fa-solid fa-circle-info"></i>
                        </button>
                    </div>
                </div>
            `;

            gridContainer.appendChild(card);
        });

        // Attach event listeners to Detail buttons
        gridContainer.querySelectorAll(".btn-detail-modal").forEach(btn => {
            btn.addEventListener("click", () => {
                const modId = btn.getAttribute("data-mod-id");
                openModal(modId);
            });
        });
    }

    // 3. MODAL CONTROLLER
    function openModal(modId) {
        const mod = learningModules.find(m => m.id === modId);
        if (!mod || !modalOverlay) return;

        currentSelectedModule = mod;

        const title = mod.title[currentLang] || mod.title.id;
        const desc = mod.desc[currentLang] || mod.desc.id;
        const badgeLabel = mod.badge[currentLang] || mod.badge.id;
        const syllabusItems = mod.syllabus[currentLang] || mod.syllabus.id;

        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalTopicBadge.textContent = badgeLabel;
        modalTopicBadge.className = `topic-badge ${mod.category}`;
        if (modalFormatBadge) {
            modalFormatBadge.remove();
        }
        modalDriveBtn.href = mod.driveUrl;

        // Render syllabus items
        modalSyllabusList.innerHTML = "";
        syllabusItems.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${item}</span>`;
            modalSyllabusList.appendChild(li);
        });

        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
            closeModal();
        }
    });

    // 4. COPY DRIVE LINK WITH TOAST
    if (modalCopyBtn) {
        modalCopyBtn.addEventListener("click", () => {
            if (!currentSelectedModule) return;

            navigator.clipboard.writeText(currentSelectedModule.driveUrl).then(() => {
                showToast(currentLang === "en" ? "Drive link copied to clipboard!" : "Tautan Drive berhasil disalin!");
            }).catch(() => {
                showToast("Failed to copy link");
            });
        });
    }

    function showToast(message) {
        if (!toastNotice) return;
        const span = toastNotice.querySelector("span");
        if (span) span.textContent = message;
        toastNotice.classList.add("show");
        setTimeout(() => {
            toastNotice.classList.remove("show");
        }, 2500);
    }

    // 5. SEARCH LOGIC (Real-time with Debounce)
    let searchDebounceTimer;
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            clearTimeout(searchDebounceTimer);
            const val = e.target.value;
            
            if (searchClearBtn) {
                searchClearBtn.style.display = val.length > 0 ? "flex" : "none";
            }

            searchDebounceTimer = setTimeout(() => {
                searchQuery = val;
                renderModules();
            }, 180);
        });

        // '/' shortcut to focus search
        document.addEventListener("keydown", (e) => {
            if (e.key === "/" && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }

    if (searchClearBtn) {
        searchClearBtn.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                searchInput.focus();
            }
            searchClearBtn.style.display = "none";
            searchQuery = "";
            renderModules();
        });
    }

    // 6. CATEGORY FILTER TABS
    filterPills.forEach(pill => {
        pill.addEventListener("click", () => {
            filterPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentCategory = pill.getAttribute("data-category") || "all";
            renderModules();
        });
    });

    // Reset button
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener("click", () => {
            currentCategory = "all";
            searchQuery = "";
            if (searchInput) searchInput.value = "";
            if (searchClearBtn) searchClearBtn.style.display = "none";

            filterPills.forEach(p => {
                if (p.getAttribute("data-category") === "all") p.classList.add("active");
                else p.classList.remove("active");
            });

            renderModules();
        });
    }

    // 7. INITIAL RENDER
    updateCategoryCounts();
    renderModules();

    // 8. BILINGUAL TRANSLATION HOOK
    window.updateLocalContent = function(lang) {
        currentLang = lang;
        updateCategoryCounts();
        renderModules();

        // Update modal texts if open
        if (currentSelectedModule && modalOverlay && modalOverlay.classList.contains("active")) {
            openModal(currentSelectedModule.id);
        }
    };
});
