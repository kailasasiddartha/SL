/**
 * Java Programming Laboratory Portal
 * Minimal, Premium Monochrome Aesthetic (Matching Scripting Languages Lab Portal)
 * Pure Vanilla JavaScript implementation with Fuse.js and Prism.js.
 * Fully client-side, zero backend dependencies.
 */

// Global State
let javaLabData = null;
let javaFuseInstance = null;
let javaCurrentFilter = 'all';
let javaActiveTask = null;
let javaActiveFile = null;

// Initialize theme immediately and when DOM is loaded
initTheme();
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initJavaApp();
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
 * Initialize Java application with data and event listeners
 */
async function initJavaApp() {
    try {
        if (window.JAVA_LAB_DATA) {
            javaLabData = window.JAVA_LAB_DATA;
        } else {
            const res = await fetch('java-data.json');
            javaLabData = await res.json();
        }

        initFuse();
        renderTasks(javaLabData.tasks);
        setupEventListeners();
    } catch (err) {
        console.error("Initialization error:", err);
        const grid = document.getElementById('tasksGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="col-span-full py-8 text-center text-[#111111] dark:text-white bg-[#F5F5F5] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626] rounded-xl p-6">
                    <p class="font-bold text-sm">Error loading Java laboratory data.</p>
                    <p class="text-xs text-[#777777] dark:text-[#A3A3A3] mt-1">Please ensure java-data.js or java-data.json is accessible.</p>
                </div>
            `;
        }
    }
}

/**
 * Setup Fuse.js fuzzy search index
 */
function initFuse() {
    if (!window.Fuse || !javaLabData || !javaLabData.tasks) return;

    const options = {
        includeScore: true,
        threshold: 0.38,
        ignoreLocation: true,
        keys: [
            { name: 'taskNumber', weight: 0.4 },
            { name: 'id', weight: 0.3 },
            { name: 'title', weight: 0.35 },
            { name: 'taskGroup', weight: 0.25 },
            { name: 'groupTitle', weight: 0.25 },
            { name: 'tags', weight: 0.25 },
            { name: 'question', weight: 0.2 },
            { name: 'files.name', weight: 0.2 }
        ]
    };

    javaFuseInstance = new Fuse(javaLabData.tasks, options);
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
    if (totalEl && javaLabData && javaLabData.tasks) totalEl.innerText = javaLabData.tasks.length;
    const navCountEl = document.getElementById('navTaskCount');
    if (navCountEl && javaLabData && javaLabData.tasks) navCountEl.innerText = javaLabData.tasks.length;

    if (!taskList || taskList.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    grid.innerHTML = taskList.map(task => {
        // Badges for files inside task
        const fileBadges = task.files.map(f => {
            let badgeClass = 'badge-' + (f.type || 'java');
            return `<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono ${badgeClass}" title="${f.name} (${f.size})">${escapeHtml(f.name)}</span>`;
        }).join(' ');

        // Tags badges
        const tagBadges = task.tags.map(t => {
            return `<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F5F5F5] dark:bg-[#1F1F1F] text-[#555555] dark:text-[#CCCCCC] border border-[#E5E5E5] dark:border-[#333333]">${escapeHtml(t)}</span>`;
        }).join(' ');

        const taskCardBorder = 'border-[#E5E5E5] dark:border-[#262626] hover:border-[#A3A3A3] dark:hover:border-[#525252]';

        return `
            <div class="bg-white dark:bg-[#171717] border ${taskCardBorder} rounded-xl p-5 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 group">
                <div class="space-y-3">
                    
                    <!-- Card Top: Task Number, Group Badge & File Count -->
                    <div class="flex items-start justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-1 rounded-md bg-[#111111] text-white dark:bg-white dark:text-[#111111] font-mono font-bold text-xs tracking-wider">
                                TASK ${task.taskNumber}
                            </span>
                            <span class="text-[11px] font-medium text-[#777777] dark:text-[#A3A3A3] truncate max-w-[140px] sm:max-w-[180px]">
                                ${escapeHtml(task.groupTitle)}
                            </span>
                        </div>
                        <span class="text-[11px] font-mono text-[#777777] dark:text-[#A3A3A3] flex-shrink-0">${task.filesCount} file</span>
                    </div>

                    <!-- Title -->
                    <h3 class="text-sm font-bold text-[#111111] dark:text-white group-hover:text-[#555555] dark:group-hover:text-[#E5E5E5] transition-colors leading-snug">
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
                        <div class="text-[11px] text-[#777777] dark:text-[#A3A3A3] font-medium">Source File:</div>
                        <div class="flex flex-wrap gap-1.5 max-h-16 overflow-hidden">
                            ${fileBadges}
                        </div>
                    </div>

                </div>

                <!-- Two Main Actions: Copy Code & View Code -->
                <div class="pt-4 mt-4 border-t border-[#E5E5E5] dark:border-[#262626] flex items-center gap-2">
                    <!-- 1. Copy Code Button -->
                    <button 
                        onclick="quickCopyTaskCode('${task.id}', this)"
                        class="flex-1 py-2 px-2.5 bg-[#F5F5F5] hover:bg-[#EBEBEB] dark:bg-[#262626] dark:hover:bg-[#333333] text-[#111111] dark:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#E5E5E5] dark:border-[#333333] shadow-sm group/copy"
                        title="Copy ${task.files[0].name} code directly"
                    >
                        <svg class="w-3.5 h-3.5 text-[#777777] dark:text-[#A3A3A3] group-hover/copy:text-[#111111] dark:group-hover/copy:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                        <span>Copy Code</span>
                    </button>

                    <!-- 2. View Code / Open Viewer -->
                    <button 
                        onclick="openTaskModal('${task.id}')"
                        class="flex-1 py-2 px-2.5 bg-[#111111] hover:bg-black dark:bg-white dark:hover:bg-[#F5F5F5] text-white dark:text-[#111111] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                        title="View syntax-highlighted Java code"
                    >
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        <span>View Code</span>
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
    if (!javaLabData || !javaLabData.tasks) return;

    const trimmed = query.trim();
    let results = javaLabData.tasks;

    if (trimmed !== '') {
        if (javaFuseInstance) {
            const fuseResults = javaFuseInstance.search(trimmed);
            results = fuseResults.map(r => r.item);
        } else {
            const lower = trimmed.toLowerCase();
            results = javaLabData.tasks.filter(t => 
                t.title.toLowerCase().includes(lower) ||
                t.question.toLowerCase().includes(lower) ||
                t.groupTitle.toLowerCase().includes(lower) ||
                t.tags.some(tag => tag.toLowerCase().includes(lower)) ||
                `task ${t.taskNumber}`.toLowerCase().includes(lower) ||
                `${t.taskNumber}`.toLowerCase() === lower ||
                t.files.some(f => f.name.toLowerCase().includes(lower))
            );
        }
    }

    if (javaCurrentFilter !== 'all') {
        const filterLower = javaCurrentFilter.toLowerCase();
        results = results.filter(task => {
            return task.taskGroup.toLowerCase().replace(/\s+/g, '') === filterLower ||
                   task.groupTitle.toLowerCase().includes(filterLower) ||
                   task.tags.some(tag => tag.toLowerCase().includes(filterLower)) ||
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
    javaCurrentFilter = 'all';
    updateFilterChipUI();
    renderTasks(javaLabData.tasks);
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.classList.add('hidden');
}

function executeSearch() {
    const input = document.getElementById('taskSearchInput');
    if (input) {
        handleSearch(input.value);
        input.focus();
    }
}

function findTask(taskIdentifier) {
    if (!javaLabData || !javaLabData.tasks) return null;
    const query = String(taskIdentifier).trim().toLowerCase();
    return javaLabData.tasks.find(t => 
        t.id.toLowerCase() === query || 
        String(t.taskNumber).toLowerCase() === query ||
        `task-${t.taskNumber}`.toLowerCase() === query
    );
}

function quickCopyTaskCode(taskIdentifier, btnElement) {
    const task = findTask(taskIdentifier);
    if (!task) return;

    const file = task.files.find(f => f.content) || task.files[0];
    if (file && file.content) {
        copyTextToClipboard(file.content, `Copied ${file.name} to clipboard!`);
        if (btnElement) {
            const originalHTML = btnElement.innerHTML;
            btnElement.classList.add('bg-[#EBEBEB]', 'dark:bg-[#333333]');
            btnElement.innerHTML = `
                <svg class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Copied!</span>
            `;
            setTimeout(() => {
                btnElement.innerHTML = originalHTML;
                btnElement.classList.remove('bg-[#EBEBEB]', 'dark:bg-[#333333]');
            }, 1500);
        }
    } else {
        openTaskModal(task.id);
    }
}

function openTaskModal(taskIdentifier) {
    const task = findTask(taskIdentifier);
    if (!task) return;

    javaActiveTask = task;

    const modal = document.getElementById('fileModal');
    const modalBadge = document.getElementById('modalTaskBadge');
    const modalTitle = document.getElementById('modalTaskTitle');
    const modalQuestion = document.getElementById('modalTaskQuestion');
    const filesCount = document.getElementById('modalFilesCount');

    if (modalBadge) modalBadge.innerText = `TASK ${task.taskNumber}`;
    if (modalTitle) modalTitle.innerText = task.title;
    if (modalQuestion) modalQuestion.innerText = task.question;
    if (filesCount) filesCount.innerText = task.files.length;

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
    javaActiveTask = null;
    javaActiveFile = null;
}

function renderModalFileList(files) {
    const listEl = document.getElementById('modalFileList');
    if (!listEl) return;

    listEl.innerHTML = files.map(file => {
        let badgeClass = 'badge-' + (file.type || 'java');
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
    if (!javaActiveTask) return;
    const file = javaActiveTask.files.find(f => f.name === fileName);
    if (!file) return;

    javaActiveFile = file;

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
    badgeEl.innerText = (file.extension || 'java').toUpperCase();
    badgeEl.className = `font-mono text-[10px] uppercase font-bold px-1.5 py-0.5 rounded badge-${file.type || 'java'}`;

    dlBtn.href = file.path;
    dlBtn.setAttribute('download', file.name);

    const codeContainer = document.getElementById('codeViewContainer');
    const codeDisplay = document.getElementById('modalCodeDisplay');

    codeContainer.classList.remove('hidden');
    codeDisplay.className = 'language-java';
    codeDisplay.textContent = file.content || '// No code content available';

    if (window.Prism) {
        Prism.highlightElement(codeDisplay);
    }
}

function copyCurrentFileCode() {
    if (!javaActiveFile || !javaActiveFile.content) return;
    copyTextToClipboard(javaActiveFile.content, `Copied ${javaActiveFile.name} to clipboard!`);
}

function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg);
        }).catch(() => {
            fallbackCopy(text);
            showToast(successMsg);
        });
    } else {
        fallbackCopy(text);
        showToast(successMsg);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (e) {
        console.error("Fallback copy failed", e);
    }
    textArea.remove();
}

let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;

    msgEl.innerText = message;
    toast.classList.remove('hidden');
    toast.classList.add('flex');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
    }, 2500);
}

function updateFilterChipUI() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        const filterVal = chip.getAttribute('data-filter');
        if (filterVal === javaCurrentFilter) {
            chip.classList.add('bg-[#111111]', 'dark:bg-white', 'text-white', 'dark:text-[#111111]', 'font-semibold', 'border-[#111111]', 'dark:border-white');
            chip.classList.remove('bg-white', 'dark:bg-[#111111]', 'text-[#777777]', 'dark:text-[#A3A3A3]', 'border-[#E5E5E5]', 'dark:border-[#333333]');
        } else {
            chip.classList.remove('bg-[#111111]', 'dark:bg-white', 'text-white', 'dark:text-[#111111]', 'font-semibold', 'border-[#111111]', 'dark:border-white');
            chip.classList.add('bg-white', 'dark:bg-[#111111]', 'text-[#777777]', 'dark:text-[#A3A3A3]', 'border-[#E5E5E5]', 'dark:border-[#333333]');
        }
    });
}

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('taskSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value);
        });
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                resetSearch();
            }
        });
    }

    // Filter Chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            javaCurrentFilter = chip.getAttribute('data-filter');
            updateFilterChipUI();
            const inputVal = searchInput ? searchInput.value : '';
            handleSearch(inputVal);
        });
    });

    // Clear Search Button
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', resetSearch);
    }

    // Global keyboard shortcuts: / for search, Escape for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Close modal on outside click
    const modal = document.getElementById('fileModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function cleanId(str) {
    return String(str).replace(/[^a-zA-Z0-9]/g, '_');
}

// Global exports
window.openTaskModal = openTaskModal;
window.closeModal = closeModal;
window.selectModalFile = selectModalFile;
window.copyCurrentFileCode = copyCurrentFileCode;
window.quickCopyTaskCode = quickCopyTaskCode;
window.resetSearch = resetSearch;
window.executeSearch = executeSearch;
