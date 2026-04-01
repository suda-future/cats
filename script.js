// 猫咪数据
const catsData = [
    {
        id: 1,
        name: "灰灰酱",
        image: "images/灰灰酱.jpg",
        status: "健康",
        age: "1岁",
        gender: "母猫",
        birthday: "未知",
        description: "灰灰酱是一只非常亲人的狸花猫，它性格温顺，喜欢和人互动，特别喜欢被摸摸头。",
        characteristics: "狸花色，毛色逐渐发黄",
        neutered: "未绝育",
        updatedAt: "2026-03-30"
    },
    {
        id: 2,
        name: "小开门",
        image: "images/小开门.jpg",
        status: "健康",
        age: "0-1岁",
        gender: "母猫",
        birthday: "2025-07-06",
        description: "小开门是一只亲人的三花猫，它性格温顺，未来校区的颜值巅峰。",
        characteristics: "三花色，小脸大美女",
        neutered: "未绝育",
        updatedAt: "2026-03-30",
        relations: [
            { type: "弟弟", name: "小小橘ABC" },
            { type: "妹妹", name: "小小橘D" }
        ]
    },
    {
        id: 3,
        name: "小橘",
        image: "images/小橘.jpg",
        status: "健康",
        age: "0-1岁",
        gender: "公猫",
        birthday: "未知",
        description: "小橘是一只橘白，喜欢围着送饭官蹭蹭蹭，但是吃饭时有点护食，小心被挠。",
        characteristics: "橘白，眼神很无辜",
        neutered: "未绝育",
        updatedAt: "2026-03-30"
    },
    {
        id: 4,
        name: "面具侠",
        image: "images/面具侠.jpg",
        status: "健康",
        age: "1岁",
        gender: "母猫",
        birthday: "未知",
        description: "面具侠是一只简州猫，面部像带着面具而得名，颜值顶流，非常亲人，喜欢干饭，育有3子",
        characteristics: "简州猫，小脸超可爱呀",
        neutered: "未绝育",
        updatedAt: "2026-03-30"
    },
    {
        id: 5,
        name: "小小橘ABC",
        image: "images/小小橘ABCD.jpg",
        status: "健康",
        age: "0-1岁",
        gender: "公猫",
        birthday: "2025-11",
        description: "小小橘ABC是3只猫，傻傻分不清楚，随叫随到，摸头的时候稍显抗拒",
        characteristics: "橘白，都有白领带和白手套",
        neutered: "未绝育",
        updatedAt: "2026-03-31",
        relations: [
            { type: "姐姐", name: "小开门" },
            { type: "姐/妹", name: "小小橘D" }
        ]
    },
    {
        id: 6,
        name: "小小橘D",
        image: "images/小小橘ABCD.jpg",
        status: "健康",
        age: "0-1岁",
        gender: "母猫",
        birthday: "2025-11",
        description: "小小橘D和ABC是一胎生，除了性别，长相也傻傻分不清楚（所以用的同一张图），随叫随到，摸头的时候稍显抗拒",
        characteristics: "橘白，有白领带和白手套",
        neutered: "未绝育",
        updatedAt: "2026-03-31",
        relations: [
            { type: "姐姐", name: "小开门" },
            { type: "兄/弟", name: "小小橘ABC" }
        ]
    },
    {
        id: 8,
        name: "大白",
        image: "images/大白.jpg",
        status: "健康",
        age: "2岁",
        gender: "公猫",
        birthday: "未知",
        description: "叫声凄惨，看着可怜。公猫中的战斗机，打遍校园无敌手，在校园里如同做了皇帝一般，不爱干净哈哈",
        characteristics: "橘白，左前掌受伤",
        neutered: "未绝育",
        updatedAt: "2026-04-01",
    },
    {
        id: 9,
        name: "马里奥",
        image: "images/马里奥.jpg",
        status: "健康",
        age: "1-2岁",
        gender: "公猫",
        birthday: "未知",
        description: "公猫中的小清新，蛮可爱哒，不挑食喜欢吃猫粮，喜欢跳起来蹭人，得名马里奥",
        characteristics: "英短蓝白，长相可爱",
        neutered: "未绝育",
        updatedAt: "2026-04-01",
    },
    {
        id: 10,
        name: "大刘海",
        image: "images/大刘海.jpg",
        status: "健康",
        age: "0-1岁",
        gender: "公猫",
        birthday: "未知",
        description: "大刘海猫如其名，目前还比较胆小，不让人靠近，干饭速度比赛中荣获第二名",
        characteristics: "深狸花加白，额头有刘海",
        neutered: "未绝育",
        updatedAt: "2026-04-01",
    }
];

// 离校猫友数据
const alumniData = [
    {
        id: 101,
        name: "小灰",
        image: "images/小灰.jpg",
        gender: "母猫",
        description: "小灰是最可爱的狸花猫，没有之一，任何时候看到她都好开心，快回来吧我的宝贝555",
        characteristics: "狸花，小脸，太可爱了",
        neutered: "未绝育",
        leaveReason: "其他",
        updatedAt: "2026-04-01",
        relations: []
    },
    {
        id: 102,
        name: "小刘海",
        image: "images/小刘海.jpg",
        gender: "母猫",
        description: "小刘海是取快递路上的一道光，安静乖巧，和小开门玩的很好",
        characteristics: "白猫，异瞳，很亲人",
        neutered: "未绝育",
        leaveReason: "其他",
        updatedAt: "2026-04-01",
        relations: []
    },
    {
        id: 103,
        name: "奶牛两兄弟",
        image: "images/奶牛两兄弟.JPG",
        gender: "公猫",
        description: "2只奶牛，有媒婆痣的那只会抓老鼠相当厉害哟",
        characteristics: "奶牛，其中一只有媒婆痣",
        neutered: "未绝育",
        leaveReason: "走失",
        updatedAt: "2026-04-01",
        relations: []
    },
    {
        id: 104,
        name: "大脸猫",
        image: "images/大脸猫.JPG",
        gender: "公猫",
        description: "大脸猫长得很讨喜，据说跟别的猫私奔出走了🐶",
        characteristics: "折耳彩狸，圆脸很可爱",
        neutered: "未绝育",
        leaveReason: "走失",
        updatedAt: "2026-04-01",
        relations: []
    },
    {
        id: 105,
        name: "大橘白",
        image: "images/大橘白.jpg",
        gender: "公猫",
        description: "大橘白24年就是校园名猫了，有点怕人",
        characteristics: "橘白，看着挺机灵",
        neutered: "未绝育",
        leaveReason: "其他",
        updatedAt: "2026-04-01",
        relations: []
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

// 离校猫友 DOM
const alumniContainer     = document.getElementById('alumniContainer');
const alumniSearchInput   = document.getElementById('alumniSearchInput');
const alumniSearchBtn     = document.getElementById('alumniSearchBtn');
const leaveReasonFilter   = document.getElementById('leaveReasonFilter');

// 当前过滤条件
let currentFilters = { searchText: '', status: '', neutered: '' };
let alumniFilters  = { searchText: '', leaveReason: '' };

// ── 初始化 ───────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    displayCats(catsData);
    displayAlumni(alumniData);
    setupEventListeners();
});

// ── 事件绑定 ─────────────────────────────────
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(); });

    statusFilter.addEventListener('change', handleFilter);
    neuteredFilter.addEventListener('change', handleFilter);

    // 离校猫友搜索 & 筛选
    alumniSearchBtn.addEventListener('click', handleAlumniSearch);
    alumniSearchInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleAlumniSearch(); });
    leaveReasonFilter.addEventListener('change', handleAlumniFilter);

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

function formatBirthday(dateStr) {
    if (!dateStr) return '未知';
    // 仅年月格式 YYYY-MM
    if (/^\d{4}-\d{2}$/.test(dateStr)) {
        const [y, m] = dateStr.split('-');
        return `${y}年${parseInt(m)}月`;
    }
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function getBirthdayTag(birthday) {
    if (!birthday) return '';
    return `<span class="tag tag-birthday">🎂 ${formatBirthday(birthday)}</span>`;
}

function getRelationsHtml(relations) {
    if (!relations || relations.length === 0) return '';
    const relationTags = relations.map(rel => 
        `<span class="relation-tag">${rel.type}：${rel.name}</span>`
    ).join('');
    return `<div class="modal-relations">${relationTags}</div>`;
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

// ── 离校猫友 搜索 / 筛选 ───────────────────
function handleAlumniSearch() {
    alumniFilters.searchText = alumniSearchInput.value.toLowerCase().trim();
    filterAndDisplayAlumni();
}

function handleAlumniFilter() {
    alumniFilters.leaveReason = leaveReasonFilter.value;
    filterAndDisplayAlumni();
}

function filterAndDisplayAlumni() {
    const filtered = alumniData.filter(cat => {
        const q = alumniFilters.searchText;
        const matchSearch      = !q ||
            cat.name.toLowerCase().includes(q) ||
            cat.description.toLowerCase().includes(q) ||
            cat.characteristics.toLowerCase().includes(q);
        const matchLeaveReason = !alumniFilters.leaveReason || cat.leaveReason === alumniFilters.leaveReason;
        return matchSearch && matchLeaveReason;
    });
    displayAlumni(filtered);
}

function displayAlumni(cats) {
    if (cats.length === 0) {
        alumniContainer.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🐾</span>
                <strong>${alumniData.length === 0 ? '暂无离校猫友记录' : '没有找到匹配的猫咪'}</strong>
                <p>${alumniData.length === 0 ? '期待有朝一日能在这里纪念它们' : '换个关键词或调整筛选条件试试吧'}</p>
            </div>`;
        return;
    }

    alumniContainer.innerHTML = cats.map(cat => `
        <div class="cat-card" onclick="openAlumniModal(${cat.id})">
            <div class="cat-image-wrap">
                <img src="${cat.image}" alt="${cat.name}"
                     onerror="this.style.display='none'">
                <div class="cat-status-overlay">
                    ${getLeaveReasonTag(cat.leaveReason)}
                </div>
            </div>
            <div class="cat-info">
                <div class="cat-name">${cat.name}</div>
                <div class="cat-tags">
                    ${getGenderTag(cat.gender)}
                </div>
                <p class="cat-description">${cat.description}</p>
                <div class="cat-footer">
                    <span>点击查看详情 →</span>
                </div>
            </div>
        </div>
    `).join('');
}

function getLeaveReasonTag(leaveReason) {
    const map = {
        '被领养': 'leave-adopted',
        '走失':   'leave-lost',
        '其他':   'leave-other'
    };
    const cls = map[leaveReason] || 'leave-other';
    return `<span class="status-badge ${cls}">${leaveReason || '未知'}</span>`;
}

function openAlumniModal(catId) {
    const cat = alumniData.find(c => c.id === catId);
    if (!cat) return;

    modalContent.innerHTML = `
        <div class="modal-image">
            <img src="${cat.image}" alt="${cat.name}"
                 onerror="this.style.display='none'">
        </div>
        <div class="modal-info">
            <div class="modal-header">
                <h3>${cat.name}</h3>
                ${getLeaveReasonTag(cat.leaveReason)}
            </div>
            <div class="modal-details">
                <div class="modal-detail">
                    <strong>性别</strong>
                    <span>${cat.gender}</span>
                </div>
                <div class="modal-detail">
                    <strong>离校原因</strong>
                    <span>${cat.leaveReason || '未知'}</span>
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
            ${getRelationsHtml(cat.relations)}
            ${cat.updatedAt ? `<div class="modal-updated">最后更新：${formatBirthday(cat.updatedAt)}</div>` : ''}
        </div>
    `;

    catModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
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
            <div class="modal-details">
                <div class="modal-detail">
                    <strong>年龄</strong>
                    <span>${cat.age}</span>
                </div>
                <div class="modal-detail">
                    <strong>生日</strong>
                    <span>${cat.birthday ? formatBirthday(cat.birthday) : '未知'}</span>
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
            ${getRelationsHtml(cat.relations)}
            ${cat.updatedAt ? `<div class="modal-updated">最后更新：${formatBirthday(cat.updatedAt)}</div>` : ''}
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

    // 隐藏在校猫友的筛选器
    const searchSection = document.querySelector('.search-section');
    if (searchSection) searchSection.style.display = 'none';

    // 显示目标页面
    const target = document.getElementById(pageId);
    if (target) target.style.display = 'block';

    // 如果是在校猫友，显示筛选器并应用当前筛选条件
    if (pageId === 'home') {
        if (searchSection) searchSection.style.display = 'block';
        filterAndDisplayCats();
    }

    // 如果是离校猫友，应用当前筛选条件
    if (pageId === 'alumni') {
        filterAndDisplayAlumni();
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
            birthday: formData.get('birthday') || '',
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

console.log('🐱 苏州大学未来校区校园猫之家 已加载完成！');
console.log('Ctrl+R 随机展示一只猫咪 | showRandomCat() | exportCatsData()');
