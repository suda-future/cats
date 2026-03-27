// 猫咪数据
const catsData = [
    {
        id: 1,
        name: "大灰",
        image: "images/大灰.jpg",
        status: "健康",
        age: "1岁",
        gender: "母猫",
        description: "大李华是一只非常亲人的狸花猫，它性格温顺，喜欢和人互动，特别喜欢被摸摸头。",
        characteristics: "狸花色，毛色逐渐发黄",
        neutered: "未绝育"
    },
    {
        id: 2,
        name: "小开门",
        image: "images/小开门.jpg",
        status: "健康",
        age: "1岁",
        gender: "母猫",
        description: "小开门是一只亲人的三花猫，它性格温顺，未来校区的颜值巅峰。",
        characteristics: "三花色，小脸大美女",
        neutered: "未绝育"
    },
    {
        id: 3,
        name: "小橘",
        image: "images/小橘.jpg",
        status: "健康",
        age: "1岁",
        gender: "公猫",
        description: "小橘是一只橘白，喜欢围着送饭官蹭蹭，但是吃饭时特别护食，小心被挠。",
        characteristics: "橘白，眼神很无辜",
        neutered: "未绝育"
    }
];

// DOM 元素
const catsContainer   = document.getElementById('catsContainer');
const searchInput     = document.getElementById('searchInput');
const searchBtn       = document.getElementById('searchBtn');
const statusFilter    = document.getElementById('statusFilter');
const neuteredFilter  = document.getElementById('neuteredFilter');
const catModal        = document.getElementById('catModal');
const modalContent    = document.getElementById('modalContent');
const addCatBtn       = document.getElementById('addCatBtn');
const addCatModal     = document.getElementById('addCatModal');
const addCatForm      = document.getElementById('addCatForm');

// 当前过滤条件
let currentFilters = { searchText: '', status: '', neutered: '' };

// ── 初始化 ───────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    displayCats(catsData);
    setupEventListeners();
});

// ── 事件绑定 ─────────────────────────────────
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(); });

    statusFilter.addEventListener('change', handleFilter);
    neuteredFilter.addEventListener('change', handleFilter);

    // 猫咪详情模态框的关闭按钮
    catModal.addEventListener('click', function(e) {
        // 点击模态框外部时关闭
        if (e.target === catModal) {
            closeModal();
        }
    });

    // 点击猫咪卡片内的关闭按钮
    catModal.addEventListener('click', function(e) {
        const closeBtn = e.target.closest('.close');
        if (closeBtn && catModal.contains(closeBtn)) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        }
    });

    // 新增猫咪相关事件
    if (addCatBtn) {
        addCatBtn.addEventListener('click', openAddCatModal);
    }
    if (addCatForm) {
        addCatForm.addEventListener('submit', handleAddCatSubmit);
    }

    // 图片上传预览
    const catImageInput = document.getElementById('catImageInput');
    if (catImageInput) {
        catImageInput.addEventListener('change', function() {
            const previewDiv = document.getElementById('imagePreview');
            const previewImg = document.getElementById('previewImg');
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImg.src = e.target.result;
                    previewDiv.style.display = 'block';
                };
                reader.readAsDataURL(this.files[0]);
            } else {
                previewDiv.style.display = 'none';
            }
        });
    }

    // 新增猫咪模态框的关闭
    addCatModal.addEventListener('click', function(e) {
        // 点击模态框外部时关闭
        if (e.target === addCatModal) {
            closeAddCatModal();
        }
        // 点击关闭按钮或取消按钮时关闭
        const closeBtn = e.target.closest('.close');
        const cancelBtn = e.target.closest('.btn-cancel');
        if (closeBtn || cancelBtn) {
            e.preventDefault();
            e.stopPropagation();
            closeAddCatModal();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal();
            closeAddCatModal();
        }
        if (e.ctrlKey && e.key === 'r') { e.preventDefault(); showRandomCat(); }
    });

    // 导航
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            showPage(this.getAttribute('href').substring(1));
        });
    });
}

// ── 搜索 / 筛选 ──────────────────────────────
function handleSearch() {
    currentFilters.searchText = searchInput.value.toLowerCase().trim();
    filterAndDisplayCats();
}

function handleFilter() {
    currentFilters.status   = statusFilter.value;
    currentFilters.neutered = neuteredFilter.value;
    filterAndDisplayCats();
}

function filterAndDisplayCats() {
    const filtered = catsData.filter(cat => {
        const q = currentFilters.searchText;
        const matchSearch   = !q ||
            cat.name.toLowerCase().includes(q) ||
            cat.description.toLowerCase().includes(q) ||
            cat.characteristics.toLowerCase().includes(q);
        const matchStatus   = !currentFilters.status   || cat.status   === currentFilters.status;
        const matchNeutered = !currentFilters.neutered || cat.neutered === currentFilters.neutered;
        return matchSearch && matchStatus && matchNeutered;
    });
    displayCats(filtered);
}

// ── 渲染卡片 ─────────────────────────────────
function getStatusClass(status) {
    const map = { '健康': 'status-healthy', '需要帮助': 'status-need-help', '已被领养': 'status-adopted' };
    return map[status] || 'status-healthy';
}

function getGenderTag(gender) {
    const isMale = gender.includes('公');
    return `<span class="tag ${isMale ? 'tag-gender-m' : 'tag-gender-f'}">${isMale ? '♂' : '♀'} ${gender}</span>`;
}

function getNeuteredTag(neutered) {
    const cls = neutered === '已绝育' ? 'tag-neutered' : 'tag-unneutered';
    const icon = neutered === '已绝育' ? '✓' : '–';
    return `<span class="tag ${cls}">${icon} ${neutered}</span>`;
}

function displayCats(cats) {
    if (cats.length === 0) {
        catsContainer.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🐾</span>
                <strong>没有找到匹配的猫咪</strong>
                <p>换个关键词或调整筛选条件试试吧</p>
            </div>`;
        return;
    }

    catsContainer.innerHTML = cats.map(cat => `
        <div class="cat-card" onclick="openCatModal(${cat.id})">
            <div class="cat-image-wrap">
                <img src="${cat.image}" alt="${cat.name}"
                     onerror="this.style.display='none'">
                <div class="cat-status-overlay">
                    <span class="status-badge ${getStatusClass(cat.status)}">${cat.status}</span>
                </div>
            </div>
            <div class="cat-info">
                <div class="cat-name">${cat.name}</div>
                <div class="cat-tags">
                    ${getGenderTag(cat.gender)}
                    <span class="tag tag-age">🗓 ${cat.age}</span>
                    ${getNeuteredTag(cat.neutered)}
                </div>
                <p class="cat-description">${cat.description}</p>
                <div class="cat-footer">
                    <span>点击查看详情 →</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ── 模态框 ───────────────────────────────────
function openCatModal(catId) {
    const cat = catsData.find(c => c.id === catId);
    if (!cat) return;

    modalContent.innerHTML = `
        <div class="modal-image">
            <img src="${cat.image}" alt="${cat.name}"
                 onerror="this.style.display='none'">
        </div>
        <div class="modal-info">
            <div class="modal-header">
                <h3>${cat.name}</h3>
                <span class="status-badge ${getStatusClass(cat.status)}">${cat.status}</span>
            </div>
            <div class="modal-tags">
                ${getGenderTag(cat.gender)}
                <span class="tag tag-age">🗓 ${cat.age}</span>
                ${getNeuteredTag(cat.neutered)}
            </div>
            <div class="modal-details">
                <div class="modal-detail">
                    <strong>年龄</strong>
                    <span>${cat.age}</span>
                </div>
                <div class="modal-detail">
                    <strong>性别</strong>
                    <span>${cat.gender}</span>
                </div>
                <div class="modal-detail">
                    <strong>绝育状态</strong>
                    <span>${cat.neutered}</span>
                </div>
                <div class="modal-detail">
                    <strong>外观特征</strong>
                    <span>${cat.characteristics}</span>
                </div>
            </div>
            <div class="modal-description">
                <span class="desc-label">详细描述</span>
                <p>${cat.description}</p>
            </div>
        </div>
    `;

    catModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    catModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ── 页面切换 ─────────────────────────────────
function showPage(pageId) {
    // 隐藏所有 section 区块
    document.querySelectorAll('main .container > section').forEach(s => {
        s.style.display = 'none';
    });

    // 显示目标页面
    const target = document.getElementById(pageId);
    if (target) target.style.display = 'block';

    // 如果是首页，显示筛选器并应用当前筛选条件
    if (pageId === 'home') {
        const searchSection = document.querySelector('.search-section');
        if (searchSection) searchSection.style.display = 'block';
        filterAndDisplayCats();
    }
}

// ── 彩蛋 ─────────────────────────────────────
function showRandomCat() {
    openCatModal(catsData[Math.floor(Math.random() * catsData.length)].id);
}

function exportCatsData() {
    const blob = new Blob([JSON.stringify(catsData, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'campus_cats_data.json';
    a.click();
}

// ── 新增猫咪 ─────────────────────────────────
function openAddCatModal() {
    addCatModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAddCatModal() {
    addCatModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    addCatForm.reset();
}

function handleAddCatSubmit(e) {
    e.preventDefault();

    const imageInput = document.getElementById('catImageInput');
    const file = imageInput.files[0];

    if (!file) {
        alert('请选择猫咪照片');
        return;
    }

    // 读取图片并转 base64
    const reader = new FileReader();
    reader.onload = function(event) {
        const base64Image = event.target.result;

        const formData = new FormData(addCatForm);
        const newCat = {
            id: catsData.length > 0 ? Math.max(...catsData.map(c => c.id)) + 1 : 1,
            name: formData.get('name').trim(),
            age: formData.get('age').trim(),
            gender: formData.get('gender'),
            status: formData.get('status'),
            neutered: formData.get('neutered'),
            location: '校园内',
            image: base64Image,
            characteristics: formData.get('characteristics').trim(),
            description: formData.get('description').trim(),
            lastSeen: new Date().toISOString().split('T')[0]
        };

        catsData.push(newCat);
        filterAndDisplayCats();
        closeAddCatModal();
        alert('🎉 新增猫咪成功！');
    };
    reader.readAsDataURL(file);
}

console.log('🐱 苏州大学未来校区流浪猫之家 已加载完成！');
console.log('Ctrl+R 随机展示一只猫咪 | showRandomCat() | exportCatsData()');
