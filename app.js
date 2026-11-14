/**
 * Scripting Languages (SL) University Lab Portal
 * Minimal, Premium Black-and-White Aesthetic with Subtle Grey & Silver
 * Pure Vanilla JavaScript implementation with Fuse.js and Prism.js.
 * Fully client-side, zero backend dependencies.
 */

// Global State
let labData = null;
let fuseInstance = null;
let currentFilter = 'all';
let activeTask = null;
let activeFile = null;

// Initialize theme immediately and when DOM is loaded
initTheme();
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initApp();
});

/**
 * Theme Toggle & Management (Pure Monochrome Light / Dark)
 */
function initTheme() {
    try {
        const savedTheme = localStorage.getItem('sl_theme');
        const isDark = savedTheme === 'dark';
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateThemeIcon(isDark);
    } catch (e) {
        console.warn("Theme init error:", e);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
        localStorage.setItem('sl_theme', isDark ? 'dark' : 'light');
    } catch (e) {}
    updateThemeIcon(isDark);
}
window.toggleTheme = toggleTheme;

function updateThemeIcon(isDark) {
    const sun = document.getElementById('themeIconSun');
    const moon = document.getElementById('themeIconMoon');
    if (sun && moon) {
        if (isDark) {
            sun.classList.remove('hidden');
            moon.classList.add('hidden');
        } else {
            sun.classList.add('hidden');
            moon.classList.remove('hidden');
        }
    }
}

/**
 * Initialize application with data and event listeners
 */
async function initApp() {
    try {
        if (window.LAB_DATA) {
            labData = window.LAB_DATA;
        } else {
            const res = await fetch('data.json');
            labData = await res.json();
        }

        initFuse();
        renderTasks(labData.tasks);
        setupEventListeners();
    } catch (err) {
        console.error("Initialization error:", err);
        const grid = document.getElementById('tasksGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="col-span-full py-8 text-center text-[#111111] dark:text-white bg-[#F5F5F5] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626] rounded-xl p-6">
                    <p class="font-bold text-sm">Error loading laboratory data.</p>
                    <p class="text-xs text-[#777777] dark:text-[#A3A3A3] mt-1">Please ensure data.js or data.json is accessible.</p>
                </div>
            `;
        }
    }
}

/**
 * Setup Fuse.js fuzzy search index
 */
function initFuse() {
    if (!window.Fuse || !labData || !labData.tasks) return;

    const options = {
        includeScore: true,
        threshold: 0.38,
        ignoreLocation: true,
        keys: [
            { name: 'taskNumber', weight: 0.4 },
            { name: 'id', weight: 0.3 },
            { name: 'title', weight: 0.3 },
            { name: 'tags', weight: 0.25 },
            { name: 'question', weight: 0.2 },
            { name: 'files.name', weight: 0.15 }
        ]
    };

    fuseInstance = new Fuse(labData.tasks, options);
}

/**
 * Render Lab Task Cards into the DOM with clean monochrome styling
 */
function renderTasks(taskList) {
    const grid = document.getElementById('tasksGrid');
    const countEl = document.getElementById('displayedCount');
    const noResults = document.getElementById('noResultsState');

    if (!grid) return;

    if (countEl) countEl.innerText = taskList.length;
    const totalEl = document.getElementById('totalTasksCount');
    if (totalEl && labData && labData.tasks) totalEl.innerText = labData.tasks.length;

    if (!taskList || taskList.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    grid.innerHTML = taskList.map(task => {
        // Find primary code file to copy directly
        const primaryCodeFile = task.files.find(f => ['html', 'php', 'js', 'xml'].includes(f.type)) || task.files[0];
        const primaryFileName = primaryCodeFile ? primaryCodeFile.name : 'code';

        // Badges for files inside task
        const fileBadges = task.files.map(f => {
            let badgeClass = 'badge-' + (f.type || 'code');
            return `<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono ${badgeClass}" title="${f.name} (${f.size})">${escapeHtml(f.name)}</span>`;
        }).join(' ');

        // Tags badges
        const tagBadges = task.tags.map(t => {
            return `<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F5F5F5] dark:bg-[#1F1F1F] text-[#555555] dark:text-[#CCCCCC] border border-[#E5E5E5] dark:border-[#333333]">${escapeHtml(t)}</span>`;
        }).join(' ');

        const isTask12 = task.taskNumber === 12 || task.taskNumber === "12";
        const taskCardBorder = isTask12 
            ? 'border-[#111111] dark:border-white ring-1 ring-[#111111] dark:ring-white' 
            : 'border-[#E5E5E5] dark:border-[#262626] hover:border-[#A3A3A3] dark:hover:border-[#525252]';

        return `
            <div class="bg-white dark:bg-[#171717] border ${taskCardBorder} rounded-xl p-5 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 group">
                <div class="space-y-3">
                    
                    <!-- Card Top: Task Number, Title & Tags -->
                    <div class="flex items-start justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-1 rounded-md bg-[#111111] text-white dark:bg-white dark:text-[#111111] font-mono font-bold text-xs tracking-wider">
                                TASK ${task.taskNumber}
                            </span>
                            ${isTask12 ? '<span class="px-2 py-0.5 rounded-md bg-[#F5F5F5] text-[#111111] dark:bg-[#262626] dark:text-white border border-[#E5E5E5] dark:border-[#333333] text-[10px] font-bold">Populated & Tested</span>' : ''}
                        </div>
                        <span class="text-[11px] font-mono text-[#777777] dark:text-[#A3A3A3]">${task.filesCount} files</span>
                    </div>

                    <!-- Title -->
                    <h3 class="text-sm font-bold text-[#111111] dark:text-white group-hover:text-[#555555] dark:group-hover:text-[#E5E5E5] transition-colors">
                        ${escapeHtml(task.title)}
                    </h3>

                    <!-- Topic Tags -->
                    <div class="flex flex-wrap gap-1">
                        ${tagBadges}
                    </div>

                    <!-- Full Question Text -->
                    <div class="pt-1">
                        <p class="text-xs text-[#333333] dark:text-[#CCCCCC] leading-relaxed bg-[#F5F5F5] dark:bg-[#111111] p-3 rounded-lg border border-[#E5E5E5] dark:border-[#262626]">
                            ${escapeHtml(task.question)}
                        </p>
                    </div>

                    <!-- Files Overview Chips -->
                    <div class="pt-1 space-y-1">
                        <div class="text-[11px] text-[#777777] dark:text-[#A3A3A3] font-medium">Task Assets:</div>
                        <div class="flex flex-wrap gap-1.5 max-h-16 overflow-hidden">
                            ${fileBadges}
                        </div>
                    </div>

                </div>

                <!-- Three Main Actions: Download ZIP, View/Open Folder, Copy Code -->
                <div class="pt-4 mt-4 border-t border-[#E5E5E5] dark:border-[#262626] flex items-center gap-2">
                    <!-- 1. Download ZIP -->
                    <a 
                        href="${task.zipPath}" 
                        download="task${task.taskNumber}.zip"
                        class="flex-1 py-2 px-2.5 bg-[#F5F5F5] hover:bg-[#EBEBEB] dark:bg-[#262626] dark:hover:bg-[#333333] text-[#111111] dark:text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors border border-[#E5E5E5] dark:border-[#333333]"
                        title="Download ${task.zipPath} directly"
                    >
                        <svg class="w-3.5 h-3.5 text-[#777777] dark:text-[#A3A3A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                        <span>ZIP</span>
                    </a>

                    <!-- 2. View / Open Folder -->
                    <button 
                        onclick="openTaskModal('${task.id}')"
                        class="flex-1 py-2 px-2.5 bg-[#111111] hover:bg-black dark:bg-white dark:hover:bg-[#F5F5F5] text-white dark:text-[#111111] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                        title="Open file switcher to preview code & assets in browser"
                    >
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        <span>View Folder</span>
                    </button>

                    <!-- 3. Copy Code Button -->
                    <button 
                        onclick="quickCopyTaskCode('${task.id}')"
                        class="p-2 bg-[#F5F5F5] hover:bg-[#EBEBEB] dark:bg-[#262626] dark:hover:bg-[#333333] text-[#111111] dark:text-white rounded-lg text-xs transition-colors border border-[#E5E5E5] dark:border-[#333333]"
                        title="Copy code of primary file (${primaryFileName})"
                    >
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Handle Search Input & Filter logic
 */
function handleSearch(query) {
    if (!labData || !labData.tasks) return;

    const trimmed = query.trim();
    let results = labData.tasks;

    if (trimmed !== '') {
        if (fuseInstance) {
            const fuseResults = fuseInstance.search(trimmed);
            results = fuseResults.map(r => r.item);
        } else {
            const lower = trimmed.toLowerCase();
            results = labData.tasks.filter(t => 
                t.title.toLowerCase().includes(lower) ||
                t.question.toLowerCase().includes(lower) ||
                t.tags.some(tag => tag.toLowerCase().includes(lower)) ||
                `task ${t.taskNumber}`.includes(lower) ||
                `${t.taskNumber}` === lower
            );
        }
    }

    if (currentFilter !== 'all') {
        results = results.filter(task => {
            const filterLower = currentFilter.toLowerCase();
            return task.tags.some(tag => tag.toLowerCase().includes(filterLower)) ||
                   task.title.toLowerCase().includes(filterLower);
        });
    }

    renderTasks(results);

    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
        if (trimmed.length > 0) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');
    }
}

function resetSearch() {
    const input = document.getElementById('taskSearchInput');
    if (input) input.value = '';
    currentFilter = 'all';
    updateFilterChipUI();
    renderTasks(labData.tasks);
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.classList.add('hidden');
}

function findTask(taskIdentifier) {
    if (!labData || !labData.tasks) return null;
    const query = String(taskIdentifier).trim().toLowerCase();
    return labData.tasks.find(t => 
        t.id.toLowerCase() === query || 
        String(t.taskNumber).toLowerCase() === query ||
        `task-${t.taskNumber}`.toLowerCase() === query
    );
}

function jumpToTask(taskIdentifier) {
    const task = findTask(taskIdentifier);
    if (task) {
        openTaskModal(task.id);
    }
}

function quickCopyTaskCode(taskIdentifier) {
    const task = findTask(taskIdentifier);
    if (!task) return;

    const file = task.files.find(f => f.content) || task.files[0];
    if (file && file.content) {
        navigator.clipboard.writeText(file.content).then(() => {
            showToast(`Copied ${file.name} to clipboard!`);
        }).catch(() => {
            fallbackCopy(file.content);
            showToast(`Copied ${file.name}!`);
        });
    } else {
        openTaskModal(task.id);
    }
}

function openTaskModal(taskIdentifier) {
    const task = findTask(taskIdentifier);
    if (!task) return;

    activeTask = task;

    const modal = document.getElementById('fileModal');
    const modalBadge = document.getElementById('modalTaskBadge');
    const modalTitle = document.getElementById('modalTaskTitle');
    const modalQuestion = document.getElementById('modalTaskQuestion');
    const modalZip = document.getElementById('modalZipDownload');
    const filesCount = document.getElementById('modalFilesCount');

    modalBadge.innerText = `TASK ${task.taskNumber}`;
    modalTitle.innerText = task.title;
    modalQuestion.innerText = task.question;
    modalZip.href = task.zipPath;
    modalZip.setAttribute('download', `task${task.taskNumber}.zip`);
    filesCount.innerText = task.files.length;

    renderModalFileList(task.files);

    const defaultFile = task.files.find(f => f.content) || task.files[0];
    if (defaultFile) {
        selectModalFile(defaultFile.name);
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('fileModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    activeTask = null;
    activeFile = null;
}

function renderModalFileList(files) {
    const listEl = document.getElementById('modalFileList');
    if (!listEl) return;

    listEl.innerHTML = files.map(file => {
        let badgeClass = 'badge-' + (file.type || 'code');
        return `
            <button 
                onclick="selectModalFile('${escapeHtml(file.name)}')"
                id="fileTab_${cleanId(file.name)}"
                class="file-tab w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between gap-2 hover:bg-[#EBEBEB] dark:hover:bg-[#262626] text-[#333333] dark:text-[#CCCCCC] transition-colors group"
            >
                <div class="flex items-center gap-2 truncate">
                    <span class="inline-block px-1.5 py-0.5 rounded font-mono text-[9px] uppercase font-bold ${badgeClass}">
                        ${escapeHtml(file.extension)}
                    </span>
                    <span class="truncate font-mono">${escapeHtml(file.name)}</span>
                </div>
                <span class="text-[10px] text-[#777777] dark:text-[#A3A3A3] font-mono">${file.size}</span>
            </button>
        `;
    }).join('');
}

function selectModalFile(fileName) {
    if (!activeTask) return;
    const file = activeTask.files.find(f => f.name === fileName);
    if (!file) return;

    activeFile = file;

    document.querySelectorAll('.file-tab').forEach(tab => {
        tab.classList.remove('bg-white', 'dark:bg-[#262626]', 'text-[#111111]', 'dark:text-white', 'border', 'border-[#111111]', 'dark:border-white', 'font-semibold', 'shadow-sm');
    });
    const selectedTab = document.getElementById(`fileTab_${cleanId(file.name)}`);
    if (selectedTab) {
        selectedTab.classList.add('bg-white', 'dark:bg-[#262626]', 'text-[#111111]', 'dark:text-white', 'border', 'border-[#111111]', 'dark:border-white', 'font-semibold', 'shadow-sm');
    }

    const nameEl = document.getElementById('activeFileName');
    const sizeEl = document.getElementById('activeFileSize');
    const badgeEl = document.getElementById('activeFileTypeBadge');
    const copyBtn = document.getElementById('modalCopyBtn');
    const dlBtn = document.getElementById('modalDownloadFileBtn');

    nameEl.innerText = file.name;
    sizeEl.innerText = `(${file.size})`;
    badgeEl.innerText = file.extension;
    badgeEl.className = `font-mono text-[10px] uppercase font-bold px-1.5 py-0.5 rounded badge-${file.type}`;
    dlBtn.href = file.path;
    dlBtn.setAttribute('download', file.name);

    const codeView = document.getElementById('codeViewContainer');
    const docView = document.getElementById('docViewContainer');
    const imgView = document.getElementById('imageViewContainer');

    codeView.classList.add('hidden');
    docView.classList.add('hidden');
    imgView.classList.add('hidden');

    if (file.type === 'docx') {
        copyBtn.classList.add('hidden');
        docView.classList.remove('hidden');
        document.getElementById('docxFileName').innerText = file.name;
        const docxLink = document.getElementById('docxDownloadLink');
        docxLink.href = file.path;
        docxLink.setAttribute('download', file.name);
        return;
    }

    if (file.type === 'image') {
        copyBtn.classList.add('hidden');
        imgView.classList.remove('hidden');
        const img = document.getElementById('modalImageDisplay');
        img.src = file.path;
        document.getElementById('modalImageCaption').innerText = `${file.name} • ${file.size}`;
        return;
    }

    copyBtn.classList.remove('hidden');
    codeView.classList.remove('hidden');

    const codeEl = document.getElementById('modalCodeDisplay');
    const content = file.content || '// Content unavailable for preview.';

    let lang = 'markup';
    if (file.type === 'css') lang = 'css';
    else if (file.type === 'js') lang = 'javascript';
    else if (file.type === 'php') lang = 'php';
    else if (file.type === 'sql') lang = 'sql';
    else if (file.type === 'xml') lang = 'markup';

    codeEl.className = `language-${lang}`;
    codeEl.textContent = content;

    if (window.Prism) {
        Prism.highlightElement(codeEl);
    }
}

function copyCurrentFileCode() {
    if (!activeFile || !activeFile.content) return;

    const copyBtnText = document.getElementById('modalCopyText');

    navigator.clipboard.writeText(activeFile.content).then(() => {
        if (copyBtnText) copyBtnText.innerText = 'Copied!';
        showToast(`Copied ${activeFile.name} code!`);
        setTimeout(() => {
            if (copyBtnText) copyBtnText.innerText = 'Copy Code';
        }, 2000);
    }).catch(() => {
        fallbackCopy(activeFile.content);
        if (copyBtnText) copyBtnText.innerText = 'Copied!';
        showToast(`Copied ${activeFile.name}!`);
        setTimeout(() => {
            if (copyBtnText) copyBtnText.innerText = 'Copy Code';
        }, 2000);
    });
}

function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (e) {
        console.error('Fallback copy failed', e);
    }
    document.body.removeChild(textArea);
}

let toastTimeout = null;
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast) return;

    if (toastMsg) toastMsg.innerText = message;
    toast.classList.remove('hidden');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('hidden');
    }, 2800);
}

function setupEventListeners() {
    const searchInput = document.getElementById('taskSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value);
        });
    }

    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', resetSearch);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    const modal = document.getElementById('fileModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            currentFilter = chip.getAttribute('data-filter') || 'all';
            updateFilterChipUI();
            const searchVal = searchInput ? searchInput.value : '';
            handleSearch(searchVal);
        });
    });
}

function updateFilterChipUI() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        const filterVal = chip.getAttribute('data-filter');
        if (filterVal === currentFilter) {
            chip.className = 'filter-chip active px-3 py-1 rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-semibold text-xs transition-colors border border-[#111111] dark:border-white shadow-sm';
        } else {
            chip.className = 'filter-chip px-3 py-1 rounded-full bg-[#F5F5F5] dark:bg-[#1F1F1F] text-[#555555] dark:text-[#A3A3A3] hover:text-[#111111] dark:hover:text-white hover:bg-[#EBEBEB] dark:hover:bg-[#2A2A2A] text-xs transition-colors border border-[#E5E5E5] dark:border-[#333333]';
        }
    });
}

function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function cleanId(str) {
    return (str || '').replace(/[^a-zA-Z0-9]/g, '_');
}
