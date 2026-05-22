// Shopper / stylist desktop — shared primitives
// Uses tokens from ../../colors_and_type.css

const Logo = ({ size = 30, color = '#1A1410', tilt = true }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
       stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round"
       style={tilt ? { transform: 'rotate(-6deg) translateY(2px)' } : undefined}>
    <path d="M32 27 C32 22 32 19 32 18 C32 14 34.5 11.5 38 11.5 C41.3 11.5 43.6 13.8 43.4 17"/>
    <path d="M32 27 C26 32 18 38 11 44 C24 41 40 41 53 44 C46 38 38 32 32 27 Z"/>
  </svg>
);

const Wordmark = ({ size = 28, color = '#1A1410' }) => (
  <span style={{
    fontFamily: "'Instrument Serif', 'Times New Roman', serif",
    fontWeight: 400, fontStyle: 'italic',
    fontSize: size, letterSpacing: '-0.005em', color, lineHeight: 1,
  }}>Sourced</span>
);

const Icon = ({ name, size = 18, stroke = '#1A1410', strokeWidth = 1.6, fill = 'none' }) => {
  const paths = {
    home: <><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></>,
    penTool: <><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z"/><circle cx="6" cy="6" r="2"/></>,
    wallet: <><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 6V4H8v2"/><circle cx="17" cy="12.5" r="1.4" fill={stroke} stroke="none"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
    users: <><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7"/><circle cx="17" cy="9" r="3"/><path d="M22 21c0-3-2-5-5-5"/></>,
    message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
    plus: <path d="M12 5v14M5 12h14"/>,
    chevronDown: <path d="m6 9 6 6 6-6"/>,
    chevronRight: <path d="m9 6 6 6-6 6"/>,
    chevronLeft: <path d="m15 18-6-6 6-6"/>,
    arrowUp: <path d="M12 19V5M5 12l7-7 7 7"/>,
    arrowDown: <path d="M12 5v14M5 12l7 7 7-7"/>,
    arrowRight: <path d="M5 12h14M13 5l7 7-7 7"/>,
    filter: <path d="M3 4h18l-7 9v6l-4 2v-8z"/>,
    pin: <><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    star: <path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-4-6 4 1.5-8L2 9.5 9 9z" fill={stroke}/>,
    check: <path d="M20 6 9 17l-5-5"/>,
    checkCircle: <><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></>,
    circle: <circle cx="12" cy="12" r="8"/>,
    moodboard: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></>,
    edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="m18 2 4 4-11 11H7v-4z"/></>,
    send: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>,
    paperclip: <path d="m21 11-8.5 8.5a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"/>,
    moreHoriz: <><circle cx="5" cy="12" r="1.5" fill={stroke}/><circle cx="12" cy="12" r="1.5" fill={stroke}/><circle cx="19" cy="12" r="1.5" fill={stroke}/></>,
    sparkle: <path d="M12 3 L13.5 9 L20 10.5 L13.5 12 L12 18 L10.5 12 L4 10.5 L10.5 9 Z"/>,
    menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></>,
    eye: <><circle cx="12" cy="12" r="3"/><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"/></>,
    info: <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill={stroke}/></>,
    linkedin: <><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10v7M7 6.5v.5"/><path d="M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"/></>,
    dollar: <><path d="M12 2v20"/><path d="M16 6H9.5a2.5 2.5 0 1 0 0 5h5a2.5 2.5 0 0 1 0 5H8"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    inbox: <><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="m5.45 5.11-3.5 8.51A2 2 0 0 0 4 16h16a2 2 0 0 0 2-2.38l-3.5-8.51A2 2 0 0 0 16.55 4h-9.1a2 2 0 0 0-2 1.11z"/></>,
    fileText: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
         stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
};

const Avatar = ({ src, initials, size = 36, ring }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    background: src ? `url(${src}) center/cover` : '#E6DFFF',
    display: 'grid', placeItems: 'center',
    color: '#3F3294', fontWeight: 600, fontSize: size * 0.36,
    fontFamily: "'Outfit', sans-serif",
    boxShadow: ring ? `0 0 0 2px #fff, 0 0 0 4px ${ring}` : 'none',
    flexShrink: 0,
  }}>
    {!src && initials}
  </div>
);

const Button = ({ children, variant = 'primary', size = 'md', onClick, fullWidth, style, leftIcon }) => {
  const base = { fontFamily: "'Outfit',sans-serif", fontWeight: 600, border: 0, cursor: 'pointer', borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all 140ms', width: fullWidth ? '100%' : 'auto' };
  const sizes = { sm: { fontSize: 12.5, padding: '7px 14px' }, md: { fontSize: 14, padding: '10px 20px' }, lg: { fontSize: 15, padding: '13px 24px' } };
  const variants = {
    primary:  { background: '#6B5BD3', color: '#fff' },
    coral:    { background: '#EE5A5A', color: '#fff' },
    ink:      { background: '#1A1410', color: '#fff' },
    outline:  { background: 'transparent', color: '#1A1410', boxShadow: 'inset 0 0 0 1.25px #DCD5CB' },
    softLilac:{ background: '#E6DFFF', color: '#3F3294' },
    ghost:    { background: 'transparent', color: '#4A413B' },
  };
  return (
    <button onClick={onClick} style={{ ...base, ...sizes[size], ...variants[variant], ...style }}>
      {leftIcon && <Icon name={leftIcon} size={14} stroke="currentColor" strokeWidth={2}/>}
      {children}
    </button>
  );
};

const Input = ({ value, onChange, placeholder, label, leftIcon, size = 'md', style }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
    {label && <span style={{ fontSize: 12, fontWeight: 500, color: '#4A413B' }}>{label}</span>}
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid #DCD5CB', borderRadius: size === 'lg' ? 999 : 10, padding: size === 'lg' ? '10px 16px' : '8px 12px' }}>
      {leftIcon && <Icon name={leftIcon} size={16} stroke="#8C8278"/>}
      <input value={value} onChange={onChange} placeholder={placeholder} style={{ flex: 1, border: 0, outline: 'none', fontFamily: "'Outfit',sans-serif", fontSize: size === 'lg' ? 14 : 13, color: '#1A1410', background: 'transparent' }}/>
    </div>
  </div>
);

const Card = ({ children, style, padded = true, hover }) => (
  <div style={{
    background: '#fff', border: '1px solid #ECE7E0', borderRadius: 18,
    padding: padded ? 20 : 0, boxShadow: '0 1px 2px rgba(26,20,16,0.04)',
    transition: 'all 140ms', ...style,
  }}>{children}</div>
);

const SectionTitle = ({ children, action, eyebrow }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
    <div>
      {eyebrow && <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, marginBottom: 4 }}>{eyebrow}</div>}
      <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16, color: '#1A1410', margin: 0, letterSpacing: '-0.01em' }}>{children}</h3>
    </div>
    {action}
  </div>
);

const Stat = ({ label, value, delta, deltaPositive }) => (
  <div style={{ padding: 16, background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14 }}>
    <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{label}</div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
      <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 26, fontWeight: 500, color: '#1A1410', letterSpacing: '-0.01em', lineHeight: 1 }}>{value}</span>
      {delta && (
        <span style={{ fontSize: 11.5, color: deltaPositive ? '#4B8B5A' : '#C24545', fontWeight: 500, whiteSpace: 'nowrap' }}>
          {deltaPositive ? '↑' : '↓'} {delta}
        </span>
      )}
    </div>
  </div>
);

Object.assign(window, { Logo, Wordmark, Icon, Avatar, Button, Input, Card, SectionTitle, Stat });
