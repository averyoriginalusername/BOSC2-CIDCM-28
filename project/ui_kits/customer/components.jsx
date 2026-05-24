// Customer mobile — shared primitives
// Outfit + Instrument Serif via colors_and_type.css

const Button = ({ children, variant = 'primary', size = 'md', onClick, style, disabled, fullWidth }) => {
  const base = {
    fontFamily: "'Outfit', system-ui, sans-serif",
    fontWeight: 600,
    borderRadius: 999,
    border: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 140ms cubic-bezier(0.22,0.61,0.36,1)',
    width: fullWidth ? '100%' : 'auto',
    letterSpacing: '-0.005em',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  };
  const sizes = {
    sm: { fontSize: 13, padding: '9px 18px' },
    md: { fontSize: 15, padding: '14px 26px' },
    lg: { fontSize: 16, padding: '16px 30px' },
  };
  const variants = {
    primary:  { background: '#EE5A5A', color: '#fff' },
    stylist:  { background: '#6B5BD3', color: '#fff' },
    ink:      { background: '#1A1410', color: '#fff' },
    outline:  { background: 'transparent', color: '#1A1410', boxShadow: 'inset 0 0 0 1.5px #1A1410' },
    ghost:    { background: 'transparent', color: '#1A1410' },
    soft:     { background: '#FFE0D8', color: '#B22C2C' },
    softLilac:{ background: '#E6DFFF', color: '#3F3294' },
  };
  return (
    <button onClick={disabled ? undefined : onClick}
      style={{ ...base, ...sizes[size], ...variants[variant], opacity: disabled ? 0.5 : 1, ...style }}>
      {children}
    </button>
  );
};

const Input = ({ label, labelColor = 'coral', type = 'text', value, onChange, placeholder, hint, style }) => {
  const [val, setVal] = React.useState(value || '');
  React.useEffect(() => { setVal(value || ''); }, [value]);
  return (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
    {label && (
      <span style={{
        fontSize: 13, fontWeight: 600,
        color: labelColor === 'coral' ? '#EE5A5A' : '#1A1410',
      }}>{label}</span>
    )}
    <input type={type} value={val} onChange={(e) => { setVal(e.target.value); if (onChange) onChange(e); }} placeholder={placeholder}
      style={{
        fontFamily: "'Outfit', system-ui, sans-serif", fontSize: 15,
        padding: '13px 14px', border: '1.25px solid #DCD5CB',
        borderRadius: 12, background: '#fff', color: '#1A1410', outline: 'none', width: '100%',
        boxSizing: 'border-box',
      }} />
    {hint && <span style={{ fontSize: 12, color: '#8C8278' }}>{hint}</span>}
  </div>
  );
};

const Chip = ({ children, active, onClick, variant = 'quiet', size = 'md' }) => {
  const colors = {
    quiet:  active ? { bg: '#1A1410', fg: '#fff' } : { bg: '#E8E2D6', fg: '#4A413B' },
    coral:  active ? { bg: '#EE5A5A', fg: '#fff' } : { bg: '#FFE0D8', fg: '#B22C2C' },
    lilac:  active ? { bg: '#6B5BD3', fg: '#fff' } : { bg: '#E6DFFF', fg: '#3F3294' },
  }[variant];
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 12 },
    md: { padding: '8px 16px', fontSize: 14 },
  }[size];
  return (
    <button onClick={onClick} style={{
      ...sizes, fontFamily: "'Outfit', sans-serif", fontWeight: 500,
      background: colors.bg, color: colors.fg, border: 0, borderRadius: 999,
      cursor: 'pointer', transition: 'all 140ms cubic-bezier(0.22,0.61,0.36,1)',
    }}>{children}</button>
  );
};

const Avatar = ({ src, initials, size = 44, ring }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    background: src ? `url(${src}) center/cover` : '#E6DFFF',
    display: 'grid', placeItems: 'center',
    color: '#3F3294', fontWeight: 700, fontSize: size * 0.36,
    boxShadow: ring ? `0 0 0 2px #fff, 0 0 0 4px ${ring}` : 'none',
    flexShrink: 0,
  }}>
    {!src && initials}
  </div>
);

const Icon = ({ name, size = 22, stroke = '#1A1410', strokeWidth = 1.6 }) => {
  const paths = {
    home: <><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
    message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    pin: <><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    star: <path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-4-6 4 1.5-8L2 9.5 9 9z" fill={stroke}/>,
    starOutline: <path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-4-6 4 1.5-8L2 9.5 9 9z"/>,
    check: <path d="M20 6 9 17l-5-5"/>,
    close: <path d="M18 6 6 18M6 6l12 12"/>,
    back: <path d="M19 12H5M12 19l-7-7 7-7"/>,
    forward: <path d="m9 6 6 6-6 6"/>,
    plus: <path d="M12 5v14M5 12h14"/>,
    eye: <><circle cx="12" cy="12" r="3"/><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
    chevronDown: <path d="m6 9 6 6 6-6"/>,
    chevronRight: <path d="m9 6 6 6-6 6"/>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
    bookmark: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>,
    sparkle: <path d="M12 3 L13.5 9 L20 10.5 L13.5 12 L12 18 L10.5 12 L4 10.5 L10.5 9 Z"/>,
    crown: <><path d="m2 12 3-9 3 9 4-9 4 9 3-9 3 9"/><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/></>,
    trophy: <><path d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4"/><path d="M6 3h12v6a6 6 0 0 1-12 0z"/><path d="M9 21h6M12 17v4"/></>,
    gift: <><rect x="3" y="8" width="18" height="13" rx="1"/><path d="M3 12h18M12 8v13M16 8a3 3 0 1 0-4-2.7A3 3 0 1 0 8 8"/></>,
    tag: <><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1" fill={stroke}/></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></>,
    arrowRight: <path d="M5 12h14M13 5l7 7-7 7"/>,
    camera: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>,
    paperclip: <path d="m21 11-8.5 8.5a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"/>,
    send: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>,
    edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="m18 2 4 4-11 11H7v-4z"/></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></>,
    info: <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>,
    moodboard: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
};

const BottomNav = ({ active, onChange }) => {
  const items = [
    { k: 'home', label: 'Home' },
    { k: 'calendar', label: 'Bookings' },
    { k: 'message', label: 'Messages' },
    { k: 'user', label: 'Profile' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 24, left: 16, right: 16,
      background: '#fff', borderRadius: 24, padding: '12px 8px',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      border: '1px solid #ECE7E0', boxShadow: '0 8px 20px rgba(26,20,16,0.06)',
      zIndex: 5,
    }}>
      {items.map(it => (
        <button key={it.k} onClick={() => onChange && onChange(it.k)}
          style={{
            background: 'transparent', border: 0, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: 4, color: active === it.k ? '#EE5A5A' : '#8C8278',
          }}>
          <Icon name={it.k} size={22} stroke={active === it.k ? '#EE5A5A' : '#8C8278'} strokeWidth={1.8}/>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10.5, fontWeight: 500 }}>{it.label}</span>
        </button>
      ))}
    </div>
  );
};

const Logo = ({ size = 36, color = '#1A1410', tilt = true }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
       stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round"
       style={tilt ? { transform: 'rotate(-6deg) translateY(2px)' } : undefined}>
    <path d="M32 27 C32 22 32 19 32 18 C32 14 34.5 11.5 38 11.5 C41.3 11.5 43.6 13.8 43.4 17"/>
    <path d="M32 27 C26 32 18 38 11 44 C24 41 40 41 53 44 C46 38 38 32 32 27 Z"/>
  </svg>
);

const Wordmark = ({ size = 28, color = '#1A1410', italic = true }) => (
  <span style={{
    fontFamily: "'Instrument Serif', 'Times New Roman', serif",
    fontWeight: 400, fontStyle: italic ? 'italic' : 'normal',
    fontSize: size, letterSpacing: '-0.005em', color, lineHeight: 1,
  }}>Sourced</span>
);

// Spaced caps wordmark — for app-bar / footer / eyebrow uses
const WordmarkCaps = ({ size = 12, color = '#1A1410' }) => (
  <span style={{
    fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: size,
    letterSpacing: '0.5em', textTransform: 'uppercase', color,
    paddingLeft: '0.5em', lineHeight: 1,
  }}>Sourced</span>
);

const ScreenHeader = ({ title, onBack, onClose, right, eyebrow }) => (
  <div style={{ padding: '8px 20px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 28 }}>
      {onBack ? (
        <button onClick={onBack} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4, color: '#1A1410' }}>
          <Icon name="back" size={22} stroke="#1A1410" strokeWidth={1.8}/>
        </button>
      ) : onClose ? (
        <button onClick={onClose} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4, color: '#EE5A5A' }}>
          <Icon name="close" size={22} stroke="#EE5A5A" strokeWidth={2}/>
        </button>
      ) : <span/>}
      {title && !eyebrow && <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16 }}>{title}</span>}
      <span>{right}</span>
    </div>
    {eyebrow && (
      <div style={{ marginTop: 4 }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 28, letterSpacing: '-0.02em', color: '#1A1410' }}>{title}</div>
      </div>
    )}
  </div>
);

Object.assign(window, { Button, Input, Chip, Avatar, Icon, BottomNav, Logo, Wordmark, WordmarkCaps, ScreenHeader });
