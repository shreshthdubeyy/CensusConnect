// ==========================================================================
// CENSUSCONNECT - STATE MANAGEMENT & GLOBAL CONFIG
// ==========================================================================

// Secured direct Google Apps Script Web App Endpoint URL
const API_URL = "https://script.google.com/macros/s/AKfycbyf2VOpYhOvVaMeUSI405NbxIMNsT3dwJVGlEXZjoaa0fE895DupTyWsk86cVSSfhrc/exec";

// ==========================================================================
// DUAL-LANGUAGE (ENGLISH & HINDI) INTERNATIONALIZATION (i18n)
// ==========================================================================
const I18N = {
  en: {
    app_title: "CensusConnect",
    field_survey_ops: "Field Survey Operations",
    login_subtitle: "Sign in to access the field registry",
    lbl_username: "Username",
    ph_username: "Enter Username",
    lbl_password: "Password",
    ph_password: "Enter password",
    btn_sign_in: "Sign In",
    auth_or_divider: "or explore as guest",
    btn_demo_sandbox: "Try Demo Mode",
    live_production: "Cloud Sync Live",
    portfolio_sandbox: "Portfolio Sandbox (Demo Data)",
    nav_new_entry: "New Entry",
    nav_search_edit: "Search & Edit",
    btn_lock: "Lock",
    title_add_bhavan: "Add New Building",
    lbl_bhavan_auto: "Building No. (Auto-Generated)",
    lbl_non_residential: "Non-Residential Structure",
    lbl_household_unit: "Household Unit",
    lbl_head_name: "Head of Household Name",
    ph_head_name: "Enter full name",
    lbl_mobile: "Mobile Number",
    ph_mobile: "10-digit mobile number",
    lbl_members_count: "Family Members Count",
    ph_members_count: "e.g. 4",
    lbl_se_id: "Socio-Economic ID (Optional)",
    ph_se_id: "Enter SE ID (Optional)",
    lbl_remarks: "Remarks",
    ph_remarks: "Add optional remarks",
    btn_remove: "Remove",
    btn_restore: "Restore Family",
    btn_delete: "Delete",
    btn_add_makaan: "Add Household / Family",
    btn_submit_bhavan: "Submit Building Details",
    title_search_edit: "Search & Edit Records",
    ph_search: "Search by Building ID, Name, or Mobile...",
    btn_search: "Search",
    lbl_found_records: "Found matching records",
    btn_clear: "Clear",
    lbl_editing_bhavan: "Editing Building No.",
    lbl_families_in_bhavan: "Families in Building",
    btn_add_makaan_edit: "Add Household under this Building",
    btn_save_updates: "Save Updates",
    title_search_placeholder: "Find Records in the Registry",
    desc_search_placeholder: "Search by Building ID (e.g. CN-0001), Head of Household, or Mobile Number to view and edit entries.",
    bhavan_badge_label: "Building",
    makaan_badge_label: "Household",
    members_badge_label: "Members",
    non_res_badge: "(Non-Residential)"
  },
  hi: {
    app_title: "CensusConnect",
    field_survey_ops: "क्षेत्रीय सर्वेक्षण परिचालन",
    login_subtitle: "फ़ील्ड रजिस्ट्री एक्सेस करने के लिए साइन इन करें",
    lbl_username: "ऑपरेटर आईडी",
    ph_username: "उदा. op_01",
    lbl_password: "पासवर्ड",
    ph_password: "पासवर्ड दर्ज करें",
    btn_sign_in: "साइन इन करें",
    auth_or_divider: "या बिना लॉगिन देखें",
    btn_demo_sandbox: "डेमो मोड आज़माएं (तुरंत प्रवेश)",
    live_production: "क्लाउड सिंक लाइव",
    portfolio_sandbox: "पोर्टफोलियो सैंडबॉक्स (डेमो डेटा)",
    nav_new_entry: "नई प्रविष्टि",
    nav_search_edit: "खोजें और संपादित करें",
    btn_lock: "लॉक करें",
    title_add_bhavan: "नया भवन जोड़ें",
    lbl_bhavan_auto: "भवन संख्या (स्वतः उत्पन्न)",
    lbl_non_residential: "गैर-आवासीय संरचना",
    lbl_household_unit: "मकान / परिवार इकाई",
    lbl_head_name: "मुखिया का नाम",
    ph_head_name: "पूरा नाम दर्ज करें",
    lbl_mobile: "मोबाइल नंबर",
    ph_mobile: "10 अंकों का मोबाइल नंबर",
    lbl_members_count: "परिवार के सदस्यों की संख्या",
    ph_members_count: "उदा. 4",
    lbl_se_id: "सामाजिक-आर्थिक आईडी (वैकल्पिक)",
    ph_se_id: "एसई आईडी दर्ज करें (वैकल्पिक)",
    lbl_remarks: "टिप्पणी",
    ph_remarks: "अतिरिक्त टिप्पणी जोड़ें",
    btn_remove: "हटाएं",
    btn_restore: "पुनर्स्थापित करें",
    btn_delete: "हटाएं",
    btn_add_makaan: "मकान / परिवार जोड़ें",
    btn_submit_bhavan: "भवन विवरण दर्ज करें",
    title_search_edit: "रिकॉर्ड खोजें और संपादित करें",
    ph_search: "भवन आईडी, नाम या मोबाइल से खोजें...",
    btn_search: "खोजें",
    lbl_found_records: "मिले हुए रिकॉर्ड्स",
    btn_clear: "साफ़ करें",
    lbl_editing_bhavan: "भवन संख्या संपादन",
    lbl_families_in_bhavan: "भवन में कुल परिवार",
    btn_add_makaan_edit: "इस भवन में मकान जोड़ें",
    btn_save_updates: "अपडेट सुरक्षित करें",
    title_search_placeholder: "रजिस्ट्री में रिकॉर्ड खोजें",
    desc_search_placeholder: "भवन आईडी (उदा. CN-0001), मुखिया के नाम, या मोबाइल नंबर से खोजें।",
    bhavan_badge_label: "भवन",
    makaan_badge_label: "मकान",
    members_badge_label: "सदस्य",
    non_res_badge: "(गैर-आवासीय)"
  }
};

function t(key) {
  const lang = state.currentLang || 'en';
  return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N['en'][key] || key);
}

function setLanguage(lang) {
  state.currentLang = lang;
  localStorage.setItem('census_lang', lang);
  
  // Update toggle button text
  const toggleBtnText = document.getElementById('lang-toggle-text');
  if (toggleBtnText) {
    toggleBtnText.textContent = lang === 'en' ? 'हिन्दी' : 'English';
  }
  const loginLangBtn = document.getElementById('login-lang-toggle-text');
  if (loginLangBtn) {
    loginLangBtn.textContent = lang === 'en' ? 'हिन्दी' : 'English';
  }
  
  // Update static DOM elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (I18N[lang] && I18N[lang][key]) {
      el.setAttribute('placeholder', I18N[lang][key]);
    }
  });
  
  // Update dynamic views
  if (state.currentView === 'new-entry') {
    reindexNewFormMakaans();
  } else if (state.currentView === 'search-edit' && state.searchResults.length > 0) {
    renderEditForm();
  }
}

function toggleLanguage() {
  const nextLang = state.currentLang === 'en' ? 'hi' : 'en';
  setLanguage(nextLang);
}

// ==========================================================================
// SYNTHETIC PORTFOLIO SANDBOX DATASET (100% Mock Data - Zero Real Citizen PII)
// ==========================================================================
const SYNTHETIC_DEMO_DATASET = [
  {
    bhavanId: "CN-0001",
    makaanId: "0001",
    mukhiyaNaam: "Aarav Sharma",
    mobileNo: "9876500001",
    membersCount: "4",
    seId: "SE-1024",
    remarks: "Head of Household",
    isGairAvasiya: false
  },
  {
    bhavanId: "CN-0001",
    makaanId: "0002",
    mukhiyaNaam: "Rohan Sharma",
    mobileNo: "9876500002",
    membersCount: "3",
    seId: "SE-1025",
    remarks: "Joint Family Unit",
    isGairAvasiya: false
  },
  {
    bhavanId: "CN-0002",
    makaanId: "0003",
    mukhiyaNaam: "Priya Verma",
    mobileNo: "9876500003",
    membersCount: "5",
    seId: "SE-1088",
    remarks: "Primary Resident",
    isGairAvasiya: false
  },
  {
    bhavanId: "CN-0003",
    makaanId: "0004",
    mukhiyaNaam: "Vikram Patel",
    mobileNo: "9876500004",
    membersCount: "2",
    seId: "SE-2041",
    remarks: "Senior Citizen Household",
    isGairAvasiya: false
  },
  {
    bhavanId: "CN-0004",
    makaanId: "0005",
    mukhiyaNaam: "Community Welfare Centre",
    mobileNo: "9876500005",
    membersCount: "1",
    seId: "SE-COMM",
    remarks: "Non-Residential Facility",
    isGairAvasiya: true
  }
];

function getSandboxData() {
  const cached = sessionStorage.getItem('census_sandbox_data');
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {}
  }
  return JSON.parse(JSON.stringify(SYNTHETIC_DEMO_DATASET));
}

function saveSandboxData(data) {
  sessionStorage.setItem('census_sandbox_data', JSON.stringify(data));
}

// Global App State
const state = {
  currentView: 'new-entry',
  currentLang: localStorage.getItem('census_lang') || 'en',
  isSandbox: false,
  
  // Next IDs fetched directly from Google Sheets or Sandbox
  nextBhavanId: 'CN-0001',
  nextMakaanId: '0001',
  
  // New entry form current blocks
  newFormBlocks: [],
  
  // Search and Edit state
  searchQuery: '',
  searchResults: [], // Rows of Makaans currently loaded in edit panel
  deletedMakaanIds: [], // Track Makaans removed during editing
  newMakaansInEdit: [] // Track newly added Makaans in the edit form
};

// ==========================================================================
// INITIALIZATION & VIEW CONTROLLER
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Apply saved language
  setLanguage(state.currentLang);

  // 1. Check URL parameters for direct recruiter demo link (?demo=true)
  const urlParams = new URLSearchParams(window.location.search);
  const isDemo = urlParams.get('demo') === 'true';
  
  if (isDemo) {
    launchSandboxMode();
    return;
  }

  // 2. Check browser session cache for existing authentication status
  const isSandbox = sessionStorage.getItem('census_sandbox') === 'true';
  const isAuthenticated = sessionStorage.getItem('census_authenticated') === 'true';
  const hasPasswordToken = sessionStorage.getItem('census_session_password') !== null;
  
  if (isSandbox) {
    state.isSandbox = true;
    showDashboard();
  } else if (isAuthenticated && hasPasswordToken) {
    state.isSandbox = false;
    showDashboard();
  } else {
    showLogin();
  }
}

// Launch Safe Portfolio Sandbox Mode (Uses Synthetic Data, zero PII)
function launchSandboxMode() {
  sessionStorage.setItem('census_authenticated', 'true');
  sessionStorage.setItem('census_sandbox', 'true');
  sessionStorage.removeItem('census_session_password');
  state.isSandbox = true;
  
  if (!sessionStorage.getItem('census_sandbox_data')) {
    saveSandboxData(SYNTHETIC_DEMO_DATASET);
  }
  
  showToast("Demo Sandbox Active", "Running in safe demo mode with synthetic data.", "success");
  showDashboard();
}

// Render Login Page Layout
function showLogin() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('main-app-layout').style.display = 'none';
  
  const userField = document.getElementById('login-username');
  if (userField) {
    userField.value = "";
  }
  
  const passwordInput = document.getElementById('login-password');
  if (passwordInput) {
    passwordInput.value = "";
  }
}

// Toggle password text / password type visibility
function togglePasswordVisibility(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  
  if (btnEl) {
    btnEl.innerHTML = `<i data-lucide="${isPassword ? 'eye-off' : 'eye'}" class="toggle-icon"></i>`;
    lucide.createIcons({
      nodeList: btnEl.querySelectorAll('[data-lucide]')
    });
  }
}

// Render Authenticated Dashboard
function showDashboard() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('main-app-layout').style.display = 'block';
  
  // Adjust header indicator badge based on Sandbox vs Production Mode
  const statusPill = document.getElementById('header-status-pill');
  if (statusPill) {
    if (state.isSandbox) {
      statusPill.innerHTML = `<i data-lucide="shield-check" style="width: 12px; height: 12px; color: var(--color-primary);"></i> ${t('portfolio_sandbox')}`;
      statusPill.style.background = 'rgba(79, 70, 229, 0.1)';
      statusPill.style.color = 'var(--color-primary)';
      statusPill.style.borderColor = 'rgba(79, 70, 229, 0.25)';
    } else {
      statusPill.innerHTML = `<span class="pulse-dot" style="width: 6px; height: 6px;"></span> ${t('live_production')}`;
      statusPill.style.background = 'rgba(16, 185, 129, 0.1)';
      statusPill.style.color = '#059669';
      statusPill.style.borderColor = 'rgba(16, 185, 129, 0.25)';
    }
  }

  // Trigger progressive database ID sync
  fetchNextIdState();
  
  // Reload icons inside dashboard header/tabs
  lucide.createIcons({
    nodeList: document.querySelectorAll('#main-app-layout [data-lucide]')
  });
}

// Handle Secure Server-Side Authentication
async function handleLoginSubmit(event) {
  event.preventDefault();
  
  const usernameInput = document.getElementById('login-username');
  const passwordInput = document.getElementById('login-password');
  const submitBtn = event.target.querySelector('button[type="submit"]');
  
  const username = usernameInput ? usernameInput.value.trim() : "";
  const password = passwordInput.value;
  
  if (!username) {
    showToast("Input Required", "Please enter a username or operator ID.", "warning");
    if (usernameInput) usernameInput.focus();
    return;
  }
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> Verifying...`;
  lucide.createIcons({
    nodeList: submitBtn.querySelectorAll('[data-lucide]')
  });
  
  try {
    const payload = {
      action: 'authenticate',
      username: username,
      password: password
    };
    
    const response = await fetch(API_URL, {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    
    if (data.success) {
      sessionStorage.setItem('census_authenticated', 'true');
      sessionStorage.setItem('census_session_password', password);
      sessionStorage.setItem('census_username', username);
      sessionStorage.removeItem('census_sandbox');
      state.isSandbox = false;
      
      showToast("App Unlocked", `Welcome, ${username}. Live Database Connected.`, "success");
      showDashboard();
    } else {
      showToast("Access Denied", "Incorrect password. Click 'Explore Demo Mode' for portfolio review.", "error");
      passwordInput.focus();
    }
  } catch (err) {
    console.error("Authentication server error:", err);
    showToast("Connection Error", "Could not reach authentication server. Try Demo Sandbox.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i data-lucide="log-in"></i> <span>${t('btn_sign_in')}</span>`;
    lucide.createIcons({
      nodeList: submitBtn.querySelectorAll('[data-lucide]')
    });
    passwordInput.value = "";
  }
}

// Handle Session Logout / App Locking
function handleLogout() {
  sessionStorage.removeItem('census_authenticated');
  sessionStorage.removeItem('census_session_password');
  sessionStorage.removeItem('census_sandbox');
  state.isSandbox = false;
  showToast("Application Locked", "Your active session was locked securely.", "success");
  showLogin();
}

// Switch between panels smoothly
function switchView(viewName) {
  state.currentView = viewName;
  
  document.getElementById('tab-new-entry').classList.toggle('active', viewName === 'new-entry');
  document.getElementById('tab-search-edit').classList.toggle('active', viewName === 'search-edit');
  
  document.getElementById('view-new-entry').classList.toggle('active', viewName === 'new-entry');
  document.getElementById('view-search-edit').classList.toggle('active', viewName === 'search-edit');
  
  if (viewName === 'search-edit') {
    setTimeout(() => document.getElementById('search-bhavan-query').focus(), 150);
  }
}

// ==========================================================================
// ID GENERATION ENGINE
// ==========================================================================

async function fetchNextIdState() {
  if (state.isSandbox) {
    const sandboxRecords = getSandboxData();
    let maxB = 0;
    let maxM = 0;
    
    sandboxRecords.forEach(r => {
      const bMatch = (r.bhavanId || "").match(/CN-(\d+)/i);
      if (bMatch) {
        const bNum = parseInt(bMatch[1], 10);
        if (bNum > maxB) maxB = bNum;
      }
      const mNum = parseInt(r.makaanId, 10);
      if (!isNaN(mNum) && mNum > maxM) maxM = mNum;
    });
    
    state.nextBhavanId = "CN-" + pad(maxB + 1, 4);
    state.nextMakaanId = pad(maxM + 1, 4);
    renderNextIds();
    return;
  }

  const token = sessionStorage.getItem('census_session_password');
  if (!token) return;
  
  try {
    const response = await fetch(`${API_URL}?action=getNextIds&password=${encodeURIComponent(token)}`, {
      credentials: 'omit'
    });
    const data = await response.json();
    if (data.success) {
      state.nextBhavanId = data.nextBhavanId;
      state.nextMakaanId = data.nextMakaanId;
      renderNextIds();
    } else {
      throw new Error(data.error || "Failed to fetch IDs");
    }
  } catch (err) {
    console.error("API Error fetching next IDs:", err);
    showToast("Sync Error", "Could not connect to the census server. Running in fallback.", "error");
    
    state.nextBhavanId = 'CN-0001';
    state.nextMakaanId = '0001';
    renderNextIds();
  }
}

function renderNextIds() {
  document.getElementById('new-bhavan-id').textContent = state.nextBhavanId;
  const estimateEl = document.getElementById('next-makaan-estimate');
  if (estimateEl) {
    estimateEl.textContent = state.nextMakaanId;
  }
  
  if (state.newFormBlocks.length === 0) {
    addMakaanBlock();
  } else {
    reindexNewFormMakaans();
  }
}

function pad(num, size) {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

// ==========================================================================
// INTERACTIVE FORM GENERATION (NEW ENTRIES)
// ==========================================================================

function addMakaanBlock(initialData = null) {
  const container = document.getElementById('makaan-blocks-container');
  const blockIndex = Date.now() + Math.random().toString(36).substr(2, 5);
  
  const blockHTML = `
    <div class="makaan-block" id="makaan-block-${blockIndex}" data-block-id="${blockIndex}">
      <div class="makaan-block-header">
        <span class="makaan-title">
          <i data-lucide="home"></i> <span class="makaan-title-label">${t('lbl_household_unit')}</span>: <strong class="makaan-display-num">XXXX</strong>
        </span>
        <button type="button" class="remove-makaan-btn" onclick="removeMakaanBlock('${blockIndex}')" title="Remove Household">
          <i data-lucide="trash-2"></i> ${t('btn_remove')}
        </button>
      </div>
      
      <div class="makaan-grid">
        <input type="hidden" class="makaan-number-hidden-input" name="makaanId">
        
        <!-- Head of Household -->
        <div class="input-container">
          <label class="input-label">${t('lbl_head_name')} <span>*</span></label>
          <input type="text" name="mukhiyaNaam" class="form-input" placeholder="${t('ph_head_name')}" required autocapitalize="words" autocomplete="name" oninput="validateField(this)">
        </div>
        
        <!-- Mobile Number -->
        <div class="input-container">
          <label class="input-label">${t('lbl_mobile')} <span>*</span></label>
          <input type="tel" name="mobileNo" class="form-input" placeholder="${t('ph_mobile')}" required maxlength="10" inputmode="numeric" pattern="[0-9]{10}" oninput="formatMobileNumber(this); validateField(this);">
        </div>
        
        <!-- Family Members Count -->
        <div class="input-container">
          <label class="input-label">${t('lbl_members_count')} <span>*</span></label>
          <input type="number" name="membersCount" class="form-input" placeholder="${t('ph_members_count')}" required min="1" max="50" inputmode="numeric" oninput="validateField(this)">
        </div>
        
        <!-- Socio-Economic ID -->
        <div class="input-container">
          <label class="input-label">${t('lbl_se_id')}</label>
          <input type="text" name="seId" class="form-input" placeholder="${t('ph_se_id')}" autocapitalize="characters" autocomplete="off" autocorrect="off">
        </div>
        
        <!-- Remarks -->
        <div class="input-container span-2">
          <label class="input-label">${t('lbl_remarks')}</label>
          <input type="text" name="remarks" class="form-input" placeholder="${t('ph_remarks')}">
        </div>
      </div>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', blockHTML);
  lucide.createIcons({
    attrs: { "stroke-width": 2 },
    nodeList: container.querySelectorAll(`[id="makaan-block-${blockIndex}"] [data-lucide]`)
  });
  
  state.newFormBlocks.push(blockIndex);
  reindexNewFormMakaans();
}

function removeMakaanBlock(blockIndex) {
  if (state.newFormBlocks.length <= 1) {
    showToast("Invalid Action", "A Building must contain at least one household record.", "warning");
    return;
  }
  
  const block = document.getElementById(`makaan-block-${blockIndex}`);
  if (block) {
    block.style.transform = "scale(0.95)";
    block.style.opacity = "0";
    setTimeout(() => {
      block.remove();
      state.newFormBlocks = state.newFormBlocks.filter(id => id !== blockIndex);
      reindexNewFormMakaans();
    }, 200);
  }
}

function reindexNewFormMakaans() {
  const container = document.getElementById('makaan-blocks-container');
  const blocks = container.querySelectorAll('.makaan-block');
  
  let currentMakaanNum = parseInt(state.nextMakaanId, 10);
  
  blocks.forEach((block) => {
    const formattedId = pad(currentMakaanNum, 4);
    block.querySelector('.makaan-display-num').textContent = formattedId;
    block.querySelector('.makaan-number-hidden-input').value = formattedId;
    
    const titleLabel = block.querySelector('.makaan-title-label');
    if (titleLabel) titleLabel.textContent = t('lbl_household_unit');
    
    currentMakaanNum++;
  });
}

// ==========================================================================
// FORM INPUT VALIDATORS & FORMATTERS
// ==========================================================================

function formatMobileNumber(input) {
  let cleanValue = input.value.replace(/\D/g, '');
  if (cleanValue.length > 10) {
    cleanValue = cleanValue.substring(0, 10);
  }
  input.value = cleanValue;
}

function validateField(input) {
  if (input.required && (!input.value || input.value.trim() === "")) {
    input.classList.add('invalid');
    return false;
  }
  
  if (input.name === "mobileNo") {
    if (input.value.length !== 10) {
      input.classList.add('invalid');
      return false;
    }
  }
  
  input.classList.remove('invalid');
  return true;
}

function validateForm(form) {
  const inputs = form.querySelectorAll('input[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    const isFieldValid = validateField(input);
    if (!isFieldValid) {
      isValid = false;
    }
  });
  
  if (!isValid) {
    showToast("Validation Error", "Please fill in all required fields (*) with valid information.", "error");
  }
  
  return isValid;
}

// ==========================================================================
// SUBMIT NEW BUILDING DETAILS (DIRECT LIVE SYNC OR SANDBOX)
// ==========================================================================

async function handleNewSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('new-bhavan-form');
  if (!validateForm(form)) return;
  
  const submitBtn = document.getElementById('submit-new-btn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> Saving...`;
  lucide.createIcons({
    nodeList: submitBtn.querySelectorAll('[data-lucide]')
  });
  
  const container = document.getElementById('makaan-blocks-container');
  const blocks = container.querySelectorAll('.makaan-block');
  const entries = [];
  
  blocks.forEach(block => {
    entries.push({
      mukhiyaNaam: block.querySelector('[name="mukhiyaNaam"]').value.trim(),
      mobileNo: block.querySelector('[name="mobileNo"]').value.trim(),
      membersCount: block.querySelector('[name="membersCount"]').value.trim(),
      seId: block.querySelector('[name="seId"]').value.trim(),
      remarks: block.querySelector('[name="remarks"]').value.trim()
    });
  });
  
  const isGair = document.getElementById('new-gair-avasiya').checked;

  // 1. Sandbox Mode Submission
  if (state.isSandbox) {
    setTimeout(() => {
      const sandboxRecords = getSandboxData();
      const currentBhavanId = state.nextBhavanId;
      let startMakaanNum = parseInt(state.nextMakaanId, 10);
      
      entries.forEach((entry, idx) => {
        sandboxRecords.push({
          bhavanId: currentBhavanId,
          makaanId: pad(startMakaanNum + idx, 4),
          mukhiyaNaam: entry.mukhiyaNaam,
          mobileNo: entry.mobileNo,
          membersCount: entry.membersCount,
          seId: entry.seId,
          remarks: entry.remarks,
          isGairAvasiya: isGair
        });
      });
      
      saveSandboxData(sandboxRecords);
      showToast("Saved to Sandbox", `Created Building ${currentBhavanId} with ${entries.length} record(s).`, "success");
      resetNewForm();
      fetchNextIdState();
      
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i data-lucide="save"></i> ${t('btn_submit_bhavan')}`;
      lucide.createIcons({
        nodeList: submitBtn.querySelectorAll('[data-lucide]')
      });
    }, 350);
    return;
  }

  // 2. Production Mode Submission (Google Sheets)
  const token = sessionStorage.getItem('census_session_password');
  
  try {
    const payload = {
      action: 'createEntry',
      password: token,
      isGairAvasiya: isGair,
      entries: entries
    };
    
    const response = await fetch(API_URL, {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    
    if (data.success) {
      showToast("Sync Successful", `Created Building ${data.bhavanId} with ${entries.length} records.`, "success");
      resetNewForm();
      fetchNextIdState();
    } else {
      throw new Error(data.error || "Backend failed to write row");
    }
  } catch (err) {
    console.error("API Post error:", err);
    showToast("Sync Failed", "Could not save details. Please check connection and try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i data-lucide="save"></i> ${t('btn_submit_bhavan')}`;
    lucide.createIcons({
      nodeList: submitBtn.querySelectorAll('[data-lucide]')
    });
  }
}

// Toggle dynamic validations for Non-Residential
function toggleNewGairAvasiya(checkbox) {
  const isChecked = checkbox.checked;
  const container = document.getElementById('makaan-blocks-container');
  const addBtn = document.querySelector('#view-new-entry .btn-outline');
  
  if (isChecked) {
    const blocks = container.querySelectorAll('.makaan-block');
    for (let i = 1; i < blocks.length; i++) {
      blocks[i].remove();
    }
    state.newFormBlocks = [state.newFormBlocks[0]];
    
    if (addBtn) addBtn.style.display = 'none';
    
    const firstBlock = container.querySelector('.makaan-block');
    if (firstBlock) {
      firstBlock.classList.add('disabled-gair');
      const currentIdStr = pad(parseInt(state.nextMakaanId, 10), 4);
      firstBlock.querySelector('.makaan-display-num').textContent = currentIdStr;
      firstBlock.querySelector('.makaan-number-hidden-input').value = currentIdStr;
      
      const mukhiya = firstBlock.querySelector('[name="mukhiyaNaam"]');
      const mobile = firstBlock.querySelector('[name="mobileNo"]');
      const members = firstBlock.querySelector('[name="membersCount"]');
      if (mukhiya) mukhiya.removeAttribute('required');
      if (mobile) mobile.removeAttribute('required');
      if (members) members.removeAttribute('required');
      
      firstBlock.querySelectorAll('.input-label span').forEach(s => s.style.display = 'none');
      
      const remarksInput = firstBlock.querySelector('[name="remarks"]');
      if (remarksInput && !remarksInput.value) {
        remarksInput.value = "Non-Residential Structure";
      }
    }
  } else {
    if (addBtn) addBtn.style.display = 'inline-flex';
    
    const firstBlock = container.querySelector('.makaan-block');
    if (firstBlock) {
      firstBlock.classList.remove('disabled-gair');
      
      const mukhiya = firstBlock.querySelector('[name="mukhiyaNaam"]');
      const mobile = firstBlock.querySelector('[name="mobileNo"]');
      const members = firstBlock.querySelector('[name="membersCount"]');
      if (mukhiya) mukhiya.setAttribute('required', 'true');
      if (mobile) mobile.setAttribute('required', 'true');
      if (members) members.setAttribute('required', 'true');
      
      firstBlock.querySelectorAll('.input-label span').forEach(s => s.style.display = 'inline');
      
      const remarksInput = firstBlock.querySelector('[name="remarks"]');
      if (remarksInput && remarksInput.value === "Non-Residential Structure") {
        remarksInput.value = "";
      }
    }
    reindexNewFormMakaans();
  }
}

function toggleEditGairAvasiya(checkbox) {
  const isChecked = checkbox.checked;
  const container = document.getElementById('edit-makaan-blocks-container');
  const addBtn = document.querySelector('#view-search-edit .btn-outline');
  
  if (isChecked) {
    const blocks = container.querySelectorAll('.makaan-block');
    if (blocks.length > 1) {
      showToast("Blocks Marked For Removal", "Non-residential structures have only one block.", "warning");
      blocks.forEach((block, idx) => {
        if (idx > 0) {
          const mId = block.id.replace('edit-makaan-block-', '');
          if (!state.deletedMakaanIds.includes(mId)) {
            state.deletedMakaanIds.push(mId);
          }
        }
      });
    }
    if (addBtn) addBtn.style.display = 'none';
    renderEditForm();
  } else {
    if (addBtn) addBtn.style.display = 'inline-flex';
    renderEditForm();
  }
}

function resetNewForm() {
  const container = document.getElementById('makaan-blocks-container');
  container.innerHTML = '';
  state.newFormBlocks = [];
  
  const gairCheckbox = document.getElementById('new-gair-avasiya');
  if (gairCheckbox) {
    gairCheckbox.checked = false;
  }
  
  const addBtn = document.querySelector('#view-new-entry .btn-outline');
  if (addBtn) {
    addBtn.style.display = 'inline-flex';
  }
  
  const submitBtn = document.getElementById('submit-new-btn');
  submitBtn.disabled = false;
  submitBtn.innerHTML = `<i data-lucide="save"></i> ${t('btn_submit_bhavan')}`;
  
  addMakaanBlock();
}

// ==========================================================================
// SEARCH & EDIT MODULE
// ==========================================================================

function handleSearchKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    performBhavanSearch();
  }
}

function clearSearchResults() {
  document.getElementById('search-results-container').style.display = 'none';
  document.getElementById('edit-bhavan-form').style.display = 'none';
  document.getElementById('search-placeholder').style.display = 'block';
  
  const queryInput = document.getElementById('search-bhavan-query');
  queryInput.value = '';
  queryInput.focus();
}

async function loadBhavanForEditing(bhavanId) {
  document.getElementById('search-results-container').style.display = 'none';
  document.getElementById('edit-bhavan-form').style.display = 'none';
  document.getElementById('search-skeleton').style.display = 'flex';
  
  state.searchQuery = bhavanId;
  state.searchResults = [];
  state.deletedMakaanIds = [];
  state.newMakaansInEdit = [];
  
  if (state.isSandbox) {
    setTimeout(() => {
      document.getElementById('search-skeleton').style.display = 'none';
      const sandboxRecords = getSandboxData();
      const matched = sandboxRecords.filter(r => (r.bhavanId || "").toUpperCase() === bhavanId.toUpperCase());
      
      if (matched.length > 0) {
        state.searchResults = JSON.parse(JSON.stringify(matched));
        renderEditForm();
      } else {
        showNoResultsForQuery(bhavanId);
      }
    }, 200);
    return;
  }

  const token = sessionStorage.getItem('census_session_password');
  
  try {
    const response = await fetch(`${API_URL}?action=getBhavanDetails&bhavanId=${encodeURIComponent(bhavanId)}&password=${encodeURIComponent(token)}`, {
      credentials: 'omit'
    });
    const data = await response.json();
    
    document.getElementById('search-skeleton').style.display = 'none';
    
    if (data.success && data.data.length > 0) {
      state.searchResults = data.data;
      renderEditForm();
    } else {
      showNoResultsForQuery(bhavanId);
    }
  } catch (err) {
    console.error("API error while loading building:", err);
    document.getElementById('search-skeleton').style.display = 'none';
    showToast("Network Error", "Could not connect to the server.", "error");
    showNoResultsForQuery(bhavanId);
  }
}

async function performBhavanSearch() {
  const queryInput = document.getElementById('search-bhavan-query');
  const rawQuery = queryInput.value.trim();
  
  if (!rawQuery) {
    showToast("Search Error", "Please enter a search query (Building ID, name, or phone)", "warning");
    return;
  }
  
  let processedQuery = rawQuery;
  const digitMatch = rawQuery.match(/CN-(\d+)/i);
  if (digitMatch) {
    processedQuery = "CN-" + pad(parseInt(digitMatch[1], 10), 4);
    queryInput.value = processedQuery;
  } else if (!isNaN(parseInt(rawQuery, 10)) && rawQuery.length <= 4) {
    processedQuery = "CN-" + pad(parseInt(rawQuery, 10), 4);
    queryInput.value = processedQuery;
  }
  
  document.getElementById('search-placeholder').style.display = 'none';
  document.getElementById('edit-bhavan-form').style.display = 'none';
  document.getElementById('search-results-container').style.display = 'none';
  document.getElementById('search-skeleton').style.display = 'flex';
  
  state.searchResults = [];
  state.deletedMakaanIds = [];
  state.newMakaansInEdit = [];
  
  if (state.isSandbox) {
    setTimeout(() => {
      document.getElementById('search-skeleton').style.display = 'none';
      const sandboxRecords = getSandboxData();
      const qLower = processedQuery.toLowerCase();
      
      const matched = sandboxRecords.filter(r => {
        const bMatch = (r.bhavanId || "").toLowerCase().includes(qLower);
        const mIdMatch = (r.makaanId || "").toLowerCase().includes(qLower);
        const nameMatch = (r.mukhiyaNaam || "").toLowerCase().includes(qLower);
        const phoneMatch = (r.mobileNo || "").toLowerCase().includes(qLower);
        const seMatch = (r.seId || "").toLowerCase().includes(qLower);
        return bMatch || mIdMatch || nameMatch || phoneMatch || seMatch;
      });
      
      if (matched.length > 0) {
        const uniqueBhavans = [...new Set(matched.map(r => r.bhavanId.toString().toUpperCase().trim()))];
        if (uniqueBhavans.length === 1) {
          const matchedBhavanId = uniqueBhavans[0];
          showToast("Building Loaded", `Displaying records for Building ${matchedBhavanId}.`, "success");
          queryInput.value = matchedBhavanId;
          loadBhavanForEditing(matchedBhavanId);
        } else {
          renderSearchResultsList(matched);
        }
      } else {
        showNoResultsForQuery(rawQuery);
      }
    }, 200);
    return;
  }

  const token = sessionStorage.getItem('census_session_password');
  
  try {
    const response = await fetch(`${API_URL}?action=universalSearch&query=${encodeURIComponent(processedQuery)}&password=${encodeURIComponent(token)}`, {
      credentials: 'omit'
    });
    const data = await response.json();
    
    document.getElementById('search-skeleton').style.display = 'none';
    
    if (data.success && data.data && data.data.length > 0) {
      const records = data.data;
      const uniqueBhavans = [...new Set(records.map(r => r.bhavanId.toString().toUpperCase().trim()))];
      
      if (uniqueBhavans.length === 1) {
        const matchedBhavanId = uniqueBhavans[0];
        showToast("Building Loaded", `Displaying records for Building ${matchedBhavanId}.`, "success");
        queryInput.value = matchedBhavanId;
        loadBhavanForEditing(matchedBhavanId);
      } else {
        renderSearchResultsList(records);
      }
    } else {
      showNoResultsForQuery(rawQuery);
    }
  } catch (err) {
    console.error("API search error:", err);
    document.getElementById('search-skeleton').style.display = 'none';
    showToast("Network Error", "Could not connect to the database server.", "error");
    showNoResultsForQuery(rawQuery);
  }
}

function renderSearchResultsList(records) {
  document.getElementById('search-placeholder').style.display = 'none';
  document.getElementById('edit-bhavan-form').style.display = 'none';
  
  const container = document.getElementById('search-results-container');
  const list = document.getElementById('search-results-list');
  const countSpan = document.getElementById('search-results-count');
  
  list.innerHTML = '';
  countSpan.textContent = records.length;
  
  records.forEach(record => {
    const isGair = !record.mukhiyaNaam || record.mukhiyaNaam.trim() === "" || (record.remarks && record.remarks.toLowerCase().includes("non-residential"));
    
    let tempMId = record.makaanId;
    if (!tempMId || tempMId === "-") {
      tempMId = state.nextMakaanId;
    }
    const makaanNum = parseInt(tempMId, 10);
    const formattedMakaanId = isNaN(makaanNum) ? tempMId : pad(makaanNum, 4);
    
    const cardHTML = `
      <div class="search-result-card" onclick="loadBhavanForEditing('${record.bhavanId}')">
        <div class="search-result-info">
          <div class="search-result-meta">
            <span class="search-result-badge bhavan">
              <i data-lucide="clipboard-signature" style="width: 12px; height: 12px;"></i> ${t('bhavan_badge_label')}: ${record.bhavanId}
            </span>
            <span class="search-result-badge makaan" style="${isGair ? 'background-color: var(--border-light); color: var(--text-muted);' : ''}">
              <i data-lucide="${isGair ? 'alert-triangle' : 'home'}" style="width: 12px; height: 12px;"></i> ${t('makaan_badge_label')}: ${formattedMakaanId} ${isGair ? ` ${t('non_res_badge')}` : ''}
            </span>
          </div>
          <div class="search-result-name">${isGair ? (record.mukhiyaNaam ? `${record.mukhiyaNaam} ${t('non_res_badge')}` : t('lbl_non_residential')) : (record.mukhiyaNaam || 'N/A')}</div>
          <div class="search-result-details">
            <div class="search-result-detail-item">
              <i data-lucide="phone" style="width: 12px; height: 12px;"></i> ${record.mobileNo || 'N/A'}
            </div>
            <div class="search-result-detail-item">
              <i data-lucide="users" style="width: 12px; height: 12px;"></i> ${t('members_badge_label')}: ${record.membersCount || '0'}
            </div>
            ${record.seId ? `
              <div class="search-result-detail-item">
                <i data-lucide="hash" style="width: 12px; height: 12px;"></i> SE ID: ${record.seId}
              </div>
            ` : ''}
          </div>
        </div>
        <div class="search-result-action">
          <button type="button" class="btn btn-secondary">
            <i data-lucide="file-edit" style="width: 14px; height: 14px;"></i> Edit
          </button>
        </div>
      </div>
    `;
    list.insertAdjacentHTML('beforeend', cardHTML);
  });
  
  lucide.createIcons({
    nodeList: list.querySelectorAll('[data-lucide]')
  });
  
  container.style.display = 'block';
}

function showNoResultsForQuery(query) {
  document.getElementById('search-results-container').style.display = 'none';
  document.getElementById('edit-bhavan-form').style.display = 'none';
  
  const placeholder = document.getElementById('search-placeholder');
  placeholder.style.display = 'block';
  
  placeholder.querySelector('h3').textContent = "No Records Found";
  placeholder.querySelector('p').textContent = `No census records matching "${query}" were found. Try searching by another name, phone number, or Building ID.`;
}

function renderEditForm() {
  document.getElementById('search-placeholder').style.display = 'none';
  document.getElementById('edit-bhavan-form').style.display = 'block';
  
  document.getElementById('edit-bhavan-id').textContent = state.searchQuery;
  
  const gairCheckbox = document.getElementById('edit-gair-avasiya');
  const loadedIsGair = state.searchResults.length > 0 && 
                       ((!state.searchResults[0].mukhiyaNaam || state.searchResults[0].mukhiyaNaam.trim() === "") || 
                        (state.searchResults[0].remarks && state.searchResults[0].remarks.toLowerCase().includes("non-residential")));
  const isGair = gairCheckbox ? gairCheckbox.checked : loadedIsGair;
  
  if (gairCheckbox) {
    gairCheckbox.checked = isGair;
  }
  
  document.getElementById('edit-families-count').textContent = isGair ? "0" : state.searchResults.length;
  
  const container = document.getElementById('edit-makaan-blocks-container');
  container.innerHTML = '';
  
  const addBtn = document.querySelector('#view-search-edit .btn-outline');
  if (addBtn) {
    addBtn.style.display = isGair ? 'none' : 'inline-flex';
  }
  
  if (isGair) {
    const baseMakaan = state.searchResults[0] || { makaanId: "", mukhiyaNaam: "", mobileNo: "", seId: "", remarks: "Non-Residential Structure" };
    
    let tempMId = baseMakaan.makaanId;
    if (!tempMId || tempMId === "-") {
      tempMId = state.nextMakaanId;
    }
    const makaanNum = parseInt(tempMId, 10);
    const formattedMakaanId = isNaN(makaanNum) ? tempMId : pad(makaanNum, 4);
    
    const cardHTML = `
      <div class="makaan-block disabled-gair" id="edit-makaan-block-${formattedMakaanId}">
        <div class="makaan-block-header">
          <span class="makaan-title" style="background-color: var(--color-primary-light); color: var(--color-primary);">
            <i data-lucide="home"></i> ${t('lbl_household_unit')}: <strong>${formattedMakaanId || '-'} ${t('non_res_badge')}</strong>
          </span>
        </div>
        
        <div class="makaan-grid">
          <input type="hidden" name="makaanId" value="${formattedMakaanId}">
          
          <div class="input-container">
            <label class="input-label">${t('lbl_head_name')}</label>
            <input type="text" name="mukhiyaNaam" class="form-input" placeholder="${t('ph_head_name')} (Optional)" value="${baseMakaan.mukhiyaNaam || ''}" autocapitalize="words" autocomplete="name" oninput="validateField(this)">
          </div>
          
          <div class="input-container">
            <label class="input-label">${t('lbl_mobile')}</label>
            <input type="tel" name="mobileNo" class="form-input" placeholder="${t('ph_mobile')} (Optional)" value="${baseMakaan.mobileNo || ''}" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" oninput="formatMobileNumber(this); validateField(this);">
          </div>
          
          <div class="input-container">
            <label class="input-label">${t('lbl_members_count')}</label>
            <input type="number" name="membersCount" class="form-input" placeholder="${t('ph_members_count')} (Optional)" value="${baseMakaan.membersCount || ''}" min="1" max="50" inputmode="numeric" oninput="validateField(this)">
          </div>
          
          <div class="input-container">
            <label class="input-label">${t('lbl_se_id')}</label>
            <input type="text" name="seId" class="form-input" placeholder="${t('ph_se_id')}" value="${baseMakaan.seId || ''}" autocapitalize="characters" autocomplete="off" autocorrect="off">
          </div>
          
          <div class="input-container span-2">
            <label class="input-label">${t('lbl_remarks')}</label>
            <input type="text" name="remarks" class="form-input" placeholder="${t('ph_remarks')}" value="${baseMakaan.remarks || 'Non-Residential Structure'}">
          </div>
        </div>
      </div>
    `;
    
    container.insertAdjacentHTML('beforeend', cardHTML);
    lucide.createIcons({
      nodeList: container.querySelectorAll(`#edit-makaan-block-${formattedMakaanId} [data-lucide]`)
    });
  } else {
    state.searchResults.forEach((makaan, index) => {
      if (makaan.makaanId === "-") {
        makaan.makaanId = "";
      }
      renderEditMakaanCard(makaan, index, container);
    });
  }
}

function renderEditMakaanCard(makaan, index, container) {
  const blockIndex = makaan.makaanId;
  const isDeleted = state.deletedMakaanIds.includes(blockIndex);
  
  const makaanNum = parseInt(makaan.makaanId, 10);
  const formattedMakaanId = isNaN(makaanNum) ? makaan.makaanId : pad(makaanNum, 4);
  
  const cardHTML = `
    <div class="makaan-block" id="edit-makaan-block-${blockIndex}" style="${isDeleted ? 'opacity: 0.5; border-color: var(--color-error);' : ''}">
      <div class="makaan-block-header">
        <span class="makaan-title" style="background-color: hsl(195, 80%, 94%); color: var(--color-secondary);">
          <i data-lucide="home"></i> ${t('lbl_household_unit')}: <strong>${formattedMakaanId}</strong>
        </span>
        
        ${isDeleted ? 
          `<button type="button" class="btn" style="min-height:30px; height:30px; padding:0 12px; background-color: var(--border-light); font-size:0.8rem; border-radius:15px;" onclick="restoreDeletedMakaan('${blockIndex}')">
            <i data-lucide="rotate-ccw"></i> ${t('btn_restore')}
          </button>` : 
          `<button type="button" class="remove-makaan-btn" onclick="markMakaanForDeletion('${blockIndex}')" title="Delete Household">
            <i data-lucide="trash-2"></i> ${t('btn_delete')}
          </button>`
        }
      </div>
      
      <div class="makaan-grid" style="${isDeleted ? 'pointer-events: none;' : ''}">
        <input type="hidden" name="makaanId" value="${formattedMakaanId}">
        
        <!-- Head of Household -->
        <div class="input-container">
          <label class="input-label">${t('lbl_head_name')} <span>*</span></label>
          <input type="text" name="mukhiyaNaam" class="form-input" placeholder="${t('ph_head_name')}" required value="${makaan.mukhiyaNaam || ''}" autocapitalize="words" autocomplete="name" oninput="validateField(this)">
        </div>
        
        <!-- Mobile Number -->
        <div class="input-container">
          <label class="input-label">${t('lbl_mobile')} <span>*</span></label>
          <input type="tel" name="mobileNo" class="form-input" placeholder="${t('ph_mobile')}" required value="${makaan.mobileNo || ''}" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" oninput="formatMobileNumber(this); validateField(this);">
        </div>
        
        <!-- Family Members Count -->
        <div class="input-container">
          <label class="input-label">${t('lbl_members_count')} <span>*</span></label>
          <input type="number" name="membersCount" class="form-input" placeholder="${t('ph_members_count')}" required min="1" max="50" inputmode="numeric" value="${makaan.membersCount || ''}" oninput="validateField(this)">
        </div>
        
        <!-- Socio-Economic ID -->
        <div class="input-container">
          <label class="input-label">${t('lbl_se_id')}</label>
          <input type="text" name="seId" class="form-input" placeholder="${t('ph_se_id')}" value="${makaan.seId || ''}" autocapitalize="characters" autocomplete="off" autocorrect="off">
        </div>
        
        <!-- Remarks -->
        <div class="input-container span-2">
          <label class="input-label">${t('lbl_remarks')}</label>
          <input type="text" name="remarks" class="form-input" placeholder="${t('ph_remarks')}" value="${makaan.remarks || ''}">
        </div>
      </div>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', cardHTML);
  lucide.createIcons({
    nodeList: container.querySelectorAll(`#edit-makaan-block-${blockIndex} [data-lucide]`)
  });
}

function markMakaanForDeletion(makaanId) {
  state.deletedMakaanIds.push(makaanId);
  showToast("Marked for Deletion", `Household ${makaanId} will be removed upon saving.`, "warning");
  renderEditForm();
}

function restoreDeletedMakaan(makaanId) {
  state.deletedMakaanIds = state.deletedMakaanIds.filter(id => id !== makaanId);
  showToast("Record Restored", `Household ${makaanId} restored to active list.`, "success");
  renderEditForm();
}

async function addMakaanToEdit() {
  let nextIdStr = "";
  
  if (state.isSandbox) {
    const sandboxRecords = getSandboxData();
    let maxM = 0;
    sandboxRecords.forEach(r => {
      const mVal = parseInt(r.makaanId, 10);
      if (!isNaN(mVal) && mVal > maxM) maxM = mVal;
    });
    state.newMakaansInEdit.forEach(m => {
      const mVal = parseInt(m.makaanId, 10);
      if (!isNaN(mVal) && mVal >= maxM) maxM = mVal + 1;
    });
    nextIdStr = pad(maxM + 1, 4);
  } else {
    const token = sessionStorage.getItem('census_session_password');
    try {
      const response = await fetch(`${API_URL}?action=getNextIds&password=${encodeURIComponent(token)}`, {
        credentials: 'omit'
      });
      const data = await response.json();
      if (data.success) {
        let maxM = parseInt(data.nextMakaanId, 10) || 1;
        state.newMakaansInEdit.forEach(m => {
          const mVal = parseInt(m.makaanId, 10);
          if (!isNaN(mVal) && mVal >= maxM) maxM = mVal + 1;
        });
        nextIdStr = pad(maxM, 4);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("API error getting index, calculating locally:", err);
      let maxM = 1;
      state.searchResults.forEach(m => {
        const mVal = parseInt(m.makaanId, 10);
        if (!isNaN(mVal) && mVal >= maxM) maxM = mVal + 1;
      });
      nextIdStr = pad(maxM, 4);
    }
  }
  
  const newMakaan = {
    bhavanId: state.searchQuery,
    makaanId: nextIdStr,
    mukhiyaNaam: "",
    mobileNo: "",
    seId: "",
    remarks: "",
    isNew: true
  };
  
  state.searchResults.push(newMakaan);
  state.newMakaansInEdit.push(newMakaan);
  
  renderEditForm();
  
  setTimeout(() => {
    const el = document.getElementById(`edit-makaan-block-${nextIdStr}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.querySelector('[name="mukhiyaNaam"]').focus();
    }
  }, 100);
  
  showToast("Household Block Added", `Household ID: ${nextIdStr} created.`, "success");
}

async function handleEditSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('edit-bhavan-form');
  if (!validateForm(form)) return;
  
  const updateBtn = document.getElementById('update-btn');
  updateBtn.disabled = true;
  updateBtn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> Saving Updates...`;
  lucide.createIcons({
    nodeList: updateBtn.querySelectorAll('[data-lucide]')
  });
  
  const container = document.getElementById('edit-makaan-blocks-container');
  const cards = container.querySelectorAll('.makaan-block');
  const updatedEntries = [];
  const isGair = document.getElementById('edit-gair-avasiya').checked;
  
  cards.forEach(card => {
    const makaanId = card.querySelector('[name="makaanId"]').value;
    
    if (state.deletedMakaanIds.includes(makaanId)) {
      return; 
    }
    
    updatedEntries.push({
      makaanId: makaanId,
      mukhiyaNaam: card.querySelector('[name="mukhiyaNaam"]').value.trim(),
      mobileNo: card.querySelector('[name="mobileNo"]').value.trim(),
      membersCount: card.querySelector('[name="membersCount"]').value.trim(),
      seId: card.querySelector('[name="seId"]').value.trim(),
      remarks: card.querySelector('[name="remarks"]').value.trim()
    });
  });
  
  if (updatedEntries.length === 0 && !isGair) {
    showToast("Invalid Operation", "A Building cannot be empty. Maintain at least one household.", "error");
    updateBtn.disabled = false;
    updateBtn.innerHTML = `<i data-lucide="check-circle"></i> ${t('btn_save_updates')}`;
    lucide.createIcons({
      nodeList: updateBtn.querySelectorAll('[data-lucide]')
    });
    return;
  }
  
  // 1. Sandbox Mode Save
  if (state.isSandbox) {
    setTimeout(() => {
      let sandboxRecords = getSandboxData();
      
      sandboxRecords = sandboxRecords.filter(r => (r.bhavanId || "").toUpperCase() !== state.searchQuery.toUpperCase());
      
      updatedEntries.forEach(entry => {
        sandboxRecords.push({
          bhavanId: state.searchQuery,
          makaanId: entry.makaanId,
          mukhiyaNaam: entry.mukhiyaNaam,
          mobileNo: entry.mobileNo,
          membersCount: entry.membersCount,
          seId: entry.seId,
          remarks: entry.remarks,
          isGairAvasiya: isGair
        });
      });
      
      saveSandboxData(sandboxRecords);
      showToast("Updates Saved", `Updated Building ${state.searchQuery} in Sandbox.`, "success");
      loadBhavanForEditing(state.searchQuery);
      fetchNextIdState();
      
      updateBtn.disabled = false;
      updateBtn.innerHTML = `<i data-lucide="check-circle"></i> ${t('btn_save_updates')}`;
      lucide.createIcons({
        nodeList: updateBtn.querySelectorAll('[data-lucide]')
      });
    }, 350);
    return;
  }

  // 2. Production Mode Save (Google Sheets)
  const token = sessionStorage.getItem('census_session_password');
  
  try {
    const payload = {
      action: 'updateEntry',
      password: token,
      bhavanId: state.searchQuery,
      isGairAvasiya: isGair,
      entries: updatedEntries
    };
    
    const response = await fetch(API_URL, {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    
    if (data.success) {
      showToast("Sync Successful", `Successfully updated Building ${state.searchQuery} in Google Sheets.`, "success");
      performBhavanSearch();
      fetchNextIdState();
    } else {
      throw new Error(data.error || "Save failed on server");
    }
  } catch (err) {
    console.error("API Update Error:", err);
    showToast("Sync Failed", "Could not update record on the Google Sheet.", "error");
  } finally {
    updateBtn.disabled = false;
    updateBtn.innerHTML = `<i data-lucide="check-circle"></i> ${t('btn_save_updates')}`;
    lucide.createIcons({
      nodeList: updateBtn.querySelectorAll('[data-lucide]')
    });
  }
}

// ==========================================================================
// TOAST NOTIFICATIONS ENGINE
// ==========================================================================

function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toastId = 'toast-' + Math.random().toString(36).substr(2, 5);
  
  let iconName = 'check';
  if (type === 'error') iconName = 'x-circle';
  if (type === 'warning') iconName = 'alert-triangle';
  
  const toastHTML = `
    <div class="toast toast-${type}" id="${toastId}">
      <div class="toast-icon">
        <i data-lucide="${iconName}"></i>
      </div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
      <button class="toast-close" onclick="closeToast('${toastId}')">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', toastHTML);
  
  lucide.createIcons({
    nodeList: container.querySelectorAll(`#${toastId} [data-lucide]`)
  });
  
  setTimeout(() => {
    closeToast(toastId);
  }, 4000);
}

function closeToast(toastId) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.classList.add('removing');
    setTimeout(() => {
      toast.remove();
    }, 250);
  }
}

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker active:', reg.scope))
      .catch(err => console.error('Service Worker error:', err));
  });
}
