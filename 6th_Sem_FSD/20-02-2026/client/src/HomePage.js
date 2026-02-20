import React, { useState, useCallback, useMemo } from "react";
import "./HomePage.css";

/* ────────────────────────────────────────
   INLINE SVG ICON SET  (Lucide-style)
──────────────────────────────────────── */
const Icon = ({ name, size = 16, ...props }) => {
  const icons = {
    users:       <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    user:        <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    userPlus:    <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></>,
    userCheck:   <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></>,
    briefcase:   <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    building:    <><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22V12h6v10"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/></>,
    mail:        <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    phone:       <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></>,
    mapPin:      <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    hash:        <><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></>,
    search:      <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    edit:        <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    trash:       <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></>,
    plus:        <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    check:       <><polyline points="20 6 9 17 4 12"/></>,
    x:           <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    save:        <><path d="M19 21H5a2 2 0 0 0-2-2V5a2 2 0 0 0 2-2h11l5 5v11a2 2 0 0 0 0 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>,
    bell:        <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
    settings:    <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    trendUp:     <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    trendDown:   <><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></>,
    barChart:    <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    activity:    <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    grid:        <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    list:        <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
    chevronUp:   <><polyline points="18 15 12 9 6 15"/></>,
    chevronDown: <><polyline points="6 9 12 15 18 9"/></>,
    arrowUp:     <><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></>,
    info:        <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>,
    zap:         <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
    sun:         <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
    moon:        <><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></>,
  };

  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {icons[name]}
    </svg>
  );
};

/* ────────────────────────────────────────
   HELPERS
──────────────────────────────────────── */
const BLANK = { id:"", name:"", contact:"", email:"", designation:"", company:"", address:"" };

const initials = (name = "") =>
  name.split(" ").map(w => w[0]).filter(Boolean).join("").toUpperCase().slice(0, 2) || "?";

/* ────────────────────────────────────────
   TOAST HOOK
──────────────────────────────────────── */
const useToast = () => {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts(t => [...t, { id, msg, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200);
  }, []);
  return { toasts, show };
};

/* ════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════ */
export default function HomePage() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState(BLANK);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [activeNav, setActiveNav] = useState("employees");
  const [isDark, setIsDark] = useState(true);
  const { toasts, show: toast } = useToast();

  // Apply theme to document root
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  /* ── form handlers ── */
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleAdd = () => {
    if (!form.id.trim())   return toast("Employee ID is required!", "error");
    if (!form.name.trim()) return toast("Name is required!", "error");
    if (employees.find(e => e.id === form.id.trim()))
      return toast(`ID "${form.id}" already exists`, "error");
    setEmployees(e => [...e, { ...form, id: form.id.trim() }]);
    setForm(BLANK);
    toast(`${form.name} added successfully`);
  };

  const handleUpdate = () => {
    setEmployees(e => e.map(x => x.id === form.id ? form : x));
    setIsEditing(false);
    setForm(BLANK);
    toast(`${form.name} updated successfully`, "info");
  };

  const handleEdit = emp => {
    setForm(emp);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = emp => {
    setEmployees(e => e.filter(x => x.id !== emp.id));
    toast(`${emp.name} removed`, "error");
  };

  const handleCancel = () => { setIsEditing(false); setForm(BLANK); };

  /* ── sorting ── */
  const toggleSort = key => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  /* ── filtered + sorted list ── */
  const visible = useMemo(() => {
    const q = searchQ.toLowerCase();
    let list = employees.filter(e =>
      !q ||
      e.id.toLowerCase().includes(q) ||
      e.name.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q) ||
      e.designation.toLowerCase().includes(q) ||
      e.company.toLowerCase().includes(q)
    );
    list = [...list].sort((a, b) => {
      const va = (a[sortKey] || "").toLowerCase();
      const vb = (b[sortKey] || "").toLowerCase();
      return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return list;
  }, [employees, searchQ, sortKey, sortDir]);

  const exactMatch = searchQ.trim() && employees.find(e => e.id === searchQ.trim());

  /* ── sort header helper ── */
  const SortTh = ({ col, label }) => (
    <th
      className={sortKey === col ? "sorted" : ""}
      onClick={() => toggleSort(col)}
    >
      {label}
      <span className="sort-icon">
        {sortKey === col
          ? (sortDir === "asc" ? " ↑" : " ↓")
          : " ↕"}
      </span>
    </th>
  );

  /* ── stat counts ── */
  const departments = [...new Set(employees.map(e => e.designation).filter(Boolean))].length;
  const companies   = [...new Set(employees.map(e => e.company).filter(Boolean))].length;

  return (
    <div className="app-shell">

      {/* ══════════ SIDEBAR ══════════ */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">👥</div>
          <div className="brand-text">
            <strong>PeopleOS</strong>
            <span>HR Platform</span>
          </div>
        </div>

        <div className="sidebar-section-label">Main Menu</div>
        <nav className="sidebar-nav">
          {[
            { id:"dashboard",  icon:"grid",      label:"Dashboard" },
            { id:"employees",  icon:"users",      label:"Employees", badge: employees.length || null },
            { id:"departments",icon:"briefcase",  label:"Departments" },
            { id:"companies",  icon:"building",   label:"Companies" },
            { id:"activity",   icon:"activity",   label:"Activity" },
          ].map(item => (
            <div
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "active" : ""}`}
              onClick={() => setActiveNav(item.id)}
            >
              <span className="nav-icon"><Icon name={item.icon} size={17} /></span>
              {item.label}
              {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
            </div>
          ))}
        </nav>

        <div className="sidebar-section-label">System</div>
        <nav className="sidebar-nav">
          <div className="nav-item" onClick={() => setActiveNav("settings")}>
            <span className="nav-icon"><Icon name="settings" size={17} /></span>
            Settings
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-ava">AD</div>
            <div className="user-info">
              <strong>Admin User</strong>
              <span>HR Manager</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ══════════ MAIN ══════════ */}
      <div className="main-content">

        {/* ── TOPBAR ── */}
        <header className="topbar">
          <div className="topbar-title">
            Employee Management
            <span>/ Overview</span>
          </div>

          <div className="topbar-search">
            <Icon name="search" size={15} />
            <input
              placeholder="Search employees…"
              value={searchQ}
              onChange={e => setSearchQ(e.target.value)}
            />
          </div>

          <div className="topbar-btn notif-dot">
            <Icon name="bell" size={17} />
          </div>

          {/* ── THEME TOGGLE ── */}
          <button
            className="theme-toggle"
            onClick={() => setIsDark(d => !d)}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            <span className="toggle-track">
              <span className="toggle-icon-moon">🌙</span>
              <span className="toggle-icon-sun">☀️</span>
            </span>
            <span className="toggle-thumb">
              {isDark ? "🌙" : "☀️"}
            </span>
          </button>

          <div className="topbar-btn">
            <Icon name="settings" size={17} />
          </div>
        </header>

        {/* ── PAGE BODY ── */}
        <div className="page-body">

          {/* ── STAT CARDS ── */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon-wrap cyan"><Icon name="users" size={18} /></div>
                <span className="stat-trend up"><Icon name="trendUp" size={11} /> +12%</span>
              </div>
              <div className="stat-value">{employees.length}</div>
              <div className="stat-label">Total Employees</div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon-wrap emerald"><Icon name="userCheck" size={18} /></div>
                <span className="stat-trend up"><Icon name="trendUp" size={11} /> +4%</span>
              </div>
              <div className="stat-value">{employees.length}</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon-wrap violet"><Icon name="briefcase" size={18} /></div>
                <span className="stat-trend flat">– –</span>
              </div>
              <div className="stat-value">{departments}</div>
              <div className="stat-label">Departments</div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon-wrap amber"><Icon name="building" size={18} /></div>
                <span className="stat-trend down"><Icon name="trendDown" size={11} /> –1</span>
              </div>
              <div className="stat-value">{companies}</div>
              <div className="stat-label">Companies</div>
            </div>
          </div>

          {/* ── FORM PANEL ── */}
          <div className={`form-panel ${isEditing ? "editing" : ""}`}>
            <div className="panel-header">
              <div className="panel-title">
                <div className={`panel-title-icon ${isEditing ? "edit" : "add"}`}>
                  <Icon name={isEditing ? "edit" : "userPlus"} size={16} />
                </div>
                <div>
                  {isEditing ? "Edit Employee" : "Add New Employee"}
                  <div className="panel-subtitle">
                    {isEditing
                      ? `Editing record for ${form.name || "—"}`
                      : "Fill in the details to register a new team member"}
                  </div>
                </div>
              </div>
              <div className="mode-toggle">
                <button
                  className={`mode-pill ${!isEditing ? "active-add" : ""}`}
                  onClick={handleCancel}
                >
                  <Icon name="userPlus" size={12} /> Add Mode
                </button>
                {isEditing && (
                  <button className="mode-pill active-edit">
                    <Icon name="edit" size={12} /> Edit Mode
                  </button>
                )}
              </div>
            </div>

            <div className="form-body">
              <div className="form-grid">

                <div className="field-group">
                  <label className="field-label"><Icon name="hash" size={11} /> Employee ID</label>
                  <div className="field-input-wrap has-icon">
                    <span className="field-icon"><Icon name="hash" size={13} /></span>
                    <input name="id" placeholder="EMP-001" value={form.id} onChange={handleChange} disabled={isEditing} />
                  </div>
                </div>

                <div className="field-group span-2">
                  <label className="field-label"><Icon name="user" size={11} /> Full Name</label>
                  <div className="field-input-wrap has-icon">
                    <span className="field-icon"><Icon name="user" size={13} /></span>
                    <input name="name" placeholder="e.g. Sarah Johnson" value={form.name} onChange={handleChange} />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label"><Icon name="phone" size={11} /> Contact</label>
                  <div className="field-input-wrap has-icon">
                    <span className="field-icon"><Icon name="phone" size={13} /></span>
                    <input name="contact" placeholder="+1 (555) 000-0000" value={form.contact} onChange={handleChange} />
                  </div>
                </div>

                <div className="field-group span-2">
                  <label className="field-label"><Icon name="mail" size={11} /> Email Address</label>
                  <div className="field-input-wrap has-icon">
                    <span className="field-icon"><Icon name="mail" size={13} /></span>
                    <input name="email" placeholder="sarah@company.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label"><Icon name="briefcase" size={11} /> Designation</label>
                  <div className="field-input-wrap has-icon">
                    <span className="field-icon"><Icon name="briefcase" size={13} /></span>
                    <input name="designation" placeholder="Software Engineer" value={form.designation} onChange={handleChange} />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label"><Icon name="building" size={11} /> Company</label>
                  <div className="field-input-wrap has-icon">
                    <span className="field-icon"><Icon name="building" size={13} /></span>
                    <input name="company" placeholder="Acme Corp" value={form.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="field-group span-3">
                  <label className="field-label"><Icon name="mapPin" size={11} /> Address</label>
                  <div className="field-input-wrap has-icon">
                    <span className="field-icon" style={{ top: 16 }}><Icon name="mapPin" size={13} /></span>
                    <textarea name="address" placeholder="123 Innovation Drive, Tech City, CA 94102" value={form.address} onChange={handleChange} />
                  </div>
                </div>

              </div>
            </div>

            <div className="form-footer">
              <div className="form-hint">
                <Icon name="info" size={13} />
                Fields marked with ID and Name are required
              </div>
              <div className="btn-group">
                {isEditing ? (
                  <>
                    <button className="btn btn-ghost" onClick={handleCancel}>
                      <Icon name="x" size={15} /> Cancel
                    </button>
                    <button className="btn btn-sky" onClick={handleUpdate}>
                      <Icon name="save" size={15} /> Save Changes
                    </button>
                  </>
                ) : (
                  <button className="btn btn-primary" onClick={handleAdd}>
                    <Icon name="plus" size={15} /> Add Employee
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ── TABLE SECTION ── */}
          <div className="table-section">
            <div className="table-controls">
              <div className="table-title-group">
                <Icon name="list" size={17} color="var(--t4)" />
                <h2>Employee Directory</h2>
                <span className="count-badge">{visible.length}</span>
              </div>
              <div className="filter-pills">
                <button className="filter-pill active">All</button>
                <button className="filter-pill">Engineering</button>
                <button className="filter-pill">Design</button>
                <button className="filter-pill">Sales</button>
              </div>
            </div>

            {/* Exact match highlight */}
            {exactMatch && (
              <div className="highlight-card">
                <div className="highlight-ava">{initials(exactMatch.name)}</div>
                <div className="highlight-info">
                  <h4>{exactMatch.name}</h4>
                  <p>
                    <span><Icon name="mail" size={12} /> {exactMatch.email || "—"}</span>
                    <span><Icon name="phone" size={12} /> {exactMatch.contact || "—"}</span>
                    <span><Icon name="mapPin" size={12} /> {exactMatch.address || "—"}</span>
                  </p>
                </div>
                <div className="highlight-tags">
                  {exactMatch.designation && <span className="badge badge-role"><Icon name="briefcase" size={10} />{exactMatch.designation}</span>}
                  {exactMatch.company && <span className="badge badge-company"><Icon name="building" size={10} />{exactMatch.company}</span>}
                  <span className="badge badge-active"><span className="live-dot" />Active</span>
                </div>
              </div>
            )}

            <div className="table-wrapper">
              {visible.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon-ring">
                    <Icon name="users" size={28} />
                  </div>
                  <h3>{employees.length === 0 ? "No employees yet" : "No results found"}</h3>
                  <p>
                    {employees.length === 0
                      ? "Add your first team member using the form above to get started."
                      : `No records match "${searchQ}". Try a different search term.`}
                  </p>
                </div>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <SortTh col="id"          label="ID" />
                      <SortTh col="name"         label="Employee" />
                      <SortTh col="designation"  label="Role" />
                      <SortTh col="company"      label="Company" />
                      <th>Contact</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visible.map((emp, i) => (
                      <tr key={emp.id} className="row-entering" style={{ animationDelay: `${i * 0.04}s` }}>
                        <td className="td-id">{emp.id}</td>
                        <td>
                          <div className="name-cell">
                            <div className="avatar">{initials(emp.name)}</div>
                            <div>
                              <div className="name-main">{emp.name}</div>
                              <div className="name-sub">{emp.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {emp.designation
                            ? <span className="badge badge-role"><Icon name="briefcase" size={10} />{emp.designation}</span>
                            : <span className="td-muted">—</span>}
                        </td>
                        <td>
                          {emp.company
                            ? <span className="badge badge-company"><Icon name="building" size={10} />{emp.company}</span>
                            : <span className="td-muted">—</span>}
                        </td>
                        <td>
                          <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
                            <span style={{ fontSize:"0.82rem", color:"var(--t2)" }}>{emp.contact || "—"}</span>
                            {emp.address && (
                              <span style={{ fontSize:"0.72rem", color:"var(--t4)", display:"flex", alignItems:"center", gap:3 }}>
                                <Icon name="mapPin" size={10} />
                                {emp.address.length > 30 ? emp.address.slice(0,30)+"…" : emp.address}
                              </span>
                            )}
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-active">
                            <span className="live-dot" /> Active
                          </span>
                        </td>
                        <td>
                          <div className="actions-cell">
                            <button className="btn-warning-sm" onClick={() => handleEdit(emp)}>
                              <Icon name="edit" size={12} /> Edit
                            </button>
                            <button className="btn-danger-sm" onClick={() => handleDelete(emp)}>
                              <Icon name="trash" size={12} /> Del
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {visible.length > 0 && (
              <div className="table-footer">
                <div className="table-footer-info">
                  Showing <strong>{visible.length}</strong> of {employees.length} employees
                  {searchQ && <> matching <strong>"{searchQ}"</strong></>}
                </div>
                <div className="pagination">
                  <button className="page-btn">‹</button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">›</button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ══════════ TOASTS ══════════ */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className="toast">
            <div className={`toast-icon ${t.type}`}>
              <Icon name={t.type === "error" ? "x" : t.type === "info" ? "info" : "check"} size={15} />
            </div>
            {t.msg}
          </div>
        ))}
      </div>

    </div>
  );
}