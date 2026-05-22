// Stylist mobile screens — adapted from desktop wireframes for handheld
// Lilac (#6B5BD3) is the stylist primary throughout

// ---------- 1. SIGN IN ----------
const SignInScreen = ({ go }) => (
  <div style={{ background: '#fff', minHeight: '100%', padding: '60px 28px 120px', display: 'flex', flexDirection: 'column', gap: 28 }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 20 }}>
      <Logo size={48}/>
      <WordmarkCaps size={11} color="#1A1410"/>
      <span style={{ fontSize: 9.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#6B5BD3', fontWeight: 600, marginTop: 2 }}>FOR STYLISTS</span>
    </div>
    <div>
      <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 36, color: '#1A1410', letterSpacing: '-0.01em' }}>Welcome back</h1>
      <p style={{ color: '#8C8278', marginTop: 6, fontSize: 14 }}>Pick up where you left off with your clients.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input label="Email" value="sophia@sourced.co" onChange={()=>{}}/>
      <Input label="Password" type="password" value="••••••••••" onChange={()=>{}}/>
    </div>
    <Button variant="primary" size="lg" fullWidth onClick={() => go('home')}>Enter</Button>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 4 }}>
      <a style={{ color: '#8C8278', textDecoration: 'none' }} href="#" onClick={(e)=>{e.preventDefault();}}>Forgot Password?</a>
      <a style={{ color: '#6B5BD3', fontWeight: 600, textDecoration: 'none' }} href="#" onClick={(e)=>{e.preventDefault(); go('signup');}}>Sign Up</a>
    </div>
  </div>
);

// ---------- 1b. SIGN UP ----------
const SignUpScreen = ({ go }) => (
  <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    <ScreenHeader onBack={() => go('sign-in')} title="Become a stylist" eyebrow/>
    <div style={{ padding: '8px 24px 130px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p style={{ fontSize: 13.5, color: '#8C8278', lineHeight: 1.5 }}>Step 1 of 2 — your public profile. Clients will see this.</p>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
        <button style={{ background: 'transparent', border: 0, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 88, height: 88, borderRadius: '50%', background: '#F2EEE6', border: '1px dashed #C7BFB5', display: 'grid', placeItems: 'center', color: '#8C8278' }}>
            <Icon name="image" size={28} stroke="#8C8278"/>
          </div>
          <span style={{ fontSize: 11.5, color: '#6B5BD3', fontWeight: 600 }}>+ Add profile photo</span>
        </button>
      </div>

      <Input label="Full name" placeholder="Sophia Laurent" value="" onChange={()=>{}}/>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Input label="Age" placeholder="32" value="" onChange={()=>{}}/>
        <Input label="Gender" placeholder="Female" value="" onChange={()=>{}}/>
      </div>
      <Input label="Location" leftIcon="pin" placeholder="New York, USA" value="" onChange={()=>{}}/>
      <Input label="Area of expertise" placeholder="Occasionwear, wedding" value="" onChange={()=>{}}/>
      <Input label="Years of experience" placeholder="6" value="" onChange={()=>{}}/>
      <Input label="Languages" placeholder="English, French" value="" onChange={()=>{}}/>
      <Input label="Email" placeholder="you@email.com" value="" onChange={()=>{}}/>
      <Input label="Phone number" placeholder="+1 (555) 000-0000" value="" onChange={()=>{}}/>

      <div>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#6B5BD3' }}>Connect social media</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
          {['Instagram', 'LinkedIn', 'Facebook', 'TikTok'].map(s => (
            <Chip key={s} variant="lilac" size="sm">+ {s}</Chip>
          ))}
        </div>
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: 30, left: 24, right: 24 }}>
      <Button variant="primary" size="lg" fullWidth onClick={() => go('home')}>Continue</Button>
    </div>
  </div>
);

// ---------- 2. HOME / DASHBOARD ----------
const HomeScreen = ({ go }) => {
  const upcoming = [
    { n: 'Olivia Martinez', t: '10:00 AM', w: 'Bergdorf · Studio 3', dot: '#EE5A5A', img: '../../assets/photos/model-sunglasses.png' },
    { n: 'Amelia Park',     t: '2:30 PM',  w: 'Video call',          dot: '#6B5BD3', img: '../../assets/photos/model-selfie-blazer.png' },
    { n: 'Cora Tanaka',     t: '6:30 PM',  w: 'Email follow-up',     dot: '#D89A3E', img: '../../assets/photos/pearl-necklace.jpeg' },
  ];
  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', padding: '20px 0 120px' }}>
      <div style={{ padding: '0 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, margin: 0 }}>TUESDAY · MAY 21</p>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 28, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Good morning, Sophia</h1>
        </div>
        <button onClick={() => go('account')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 0 }}>
          <Avatar src="../../assets/photos/model-blazer-coffee.png" size={42} ring="#6B5BD3"/>
        </button>
      </div>

      {/* Stats row */}
      <div style={{ padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          { l: 'Clients', v: '12', d: '+2' },
          { l: 'Sessions', v: '34', d: '+8%' },
          { l: 'Earnings', v: '$3.2k', d: '+12%' },
        ].map(s => (
          <div key={s.l} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 12 }}>
            <div style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{s.l}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 20, fontWeight: 500, color: '#1A1410', letterSpacing: '-0.01em' }}>{s.v}</span>
              <span style={{ fontSize: 10.5, color: '#4B8B5A', fontWeight: 500 }}>{s.d}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ background: '#1A1410', color: '#fff', borderRadius: 18, padding: 16, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'url(../../assets/photos/hero-rack.png) right/cover', opacity: 0.3 }}/>
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>NEW INQUIRIES</p>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 22, lineHeight: 1.15, marginTop: 4, color: '#fff', maxWidth: '70%' }}>3 clients waiting on you</h2>
            <button onClick={() => go('messages-list')} style={{ marginTop: 12, background: '#fff', color: '#1A1410', border: 0, borderRadius: 999, padding: '7px 14px', fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Open inbox →</button>
          </div>
        </div>
      </div>

      {/* Upcoming */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
          <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, color: '#1A1410', margin: 0 }}>Today's sessions</h3>
          <button onClick={() => go('calendar')} style={{ background: 'transparent', border: 0, color: '#6B5BD3', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Calendar →</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {upcoming.map(u => (
            <div key={u.n} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar src={u.img} size={40}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13.5, color: '#1A1410' }}>{u.n}</div>
                <div style={{ fontSize: 11.5, color: '#8C8278', marginTop: 2 }}>{u.w}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11.5, color: '#6B5BD3', fontWeight: 700, letterSpacing: '0.04em' }}>{u.t}</div>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: u.dot, display: 'inline-block', marginTop: 4 }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI assistant prompt */}
      <div style={{ padding: '16px 24px 0' }}>
        <div style={{ background: 'linear-gradient(180deg, #F4F1FF 0%, #fff 60%)', border: '1px solid #CDC0FF', borderRadius: 16, padding: 14, display: 'flex', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: '#fff', display: 'grid', placeItems: 'center', border: '1px solid #CDC0FF', flexShrink: 0 }}>
            <Icon name="sparkle" size={16} stroke="#6B5BD3" strokeWidth={1.6}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13, color: '#1A1410' }}>AI assistant</div>
            <div style={{ fontSize: 11.5, color: '#8C8278', marginTop: 2, lineHeight: 1.4 }}>I drafted a 5-item shortlist for Olivia's wedding look.</div>
            <button style={{ background: 'transparent', border: 0, color: '#6B5BD3', fontSize: 11.5, fontWeight: 600, padding: 0, marginTop: 6, cursor: 'pointer' }}>Review →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- 3. CALENDAR ----------
const CalendarScreen = ({ go }) => {
  const days = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  const cal = [
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, null, null, null, null, null, null],
  ];
  const meetings = [
    { n: 'Olivia Martinez', t: '10:00 AM', w: 'Bergdorf', dot: '#EE5A5A' },
    { n: 'Amelia Park',     t: '2:30 PM',  w: 'Video call', dot: '#6B5BD3' },
    { n: 'Sienna Lowe',     t: '5:00 PM',  w: 'Bloomingdale\'s', dot: '#4B8B5A' },
    { n: 'Cora Tanaka',     t: '6:30 PM',  w: 'Email follow-up', dot: '#D89A3E' },
  ];
  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', padding: '20px 0 120px' }}>
      <div style={{ padding: '0 24px 16px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, margin: 0 }}>SYNCED CALENDAR</p>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 28, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>May 2026</h1>
        </div>
        <button style={{ width: 38, height: 38, borderRadius: '50%', background: '#6B5BD3', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <Icon name="plus" size={18} stroke="#fff" strokeWidth={2}/>
        </button>
      </div>

      <div style={{ padding: '0 24px' }}>
        <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 18, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <button style={{ background: 'transparent', border: 0, cursor: 'pointer' }}><Icon name="chevronLeft" size={18}/></button>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600 }}>Tuesday · May 05</span>
            <button style={{ background: 'transparent', border: 0, cursor: 'pointer' }}><Icon name="chevronRight" size={18}/></button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 6 }}>
            {days.map(d => <div key={d} style={{ fontSize: 10, fontWeight: 600, color: '#8C8278', textAlign: 'center', letterSpacing: '0.04em' }}>{d}</div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {cal.flat().map((d, i) => {
              const isToday = d === 5;
              const hasEvent = [9, 12, 14, 21, 25, 28].includes(d);
              return (
                <div key={i} style={{ aspectRatio: '1', display: 'grid', placeItems: 'center', position: 'relative' }}>
                  {d && (
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      display: 'grid', placeItems: 'center',
                      background: isToday ? '#6B5BD3' : 'transparent',
                      color: isToday ? '#fff' : '#1A1410',
                      fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: isToday ? 600 : 400,
                    }}>{d}</div>
                  )}
                  {hasEvent && !isToday && <div style={{ position: 'absolute', bottom: 2, width: 3, height: 3, borderRadius: '50%', background: '#6B5BD3' }}/>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Today's meetings */}
      <div style={{ padding: '20px 24px 0' }}>
        <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410', margin: '0 0 10px' }}>Today's schedule</h3>
        <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14 }}>
          {meetings.map((m, i) => (
            <div key={m.n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderBottom: i < meetings.length - 1 ? '1px solid #ECE7E0' : 'none' }}>
              <div style={{ width: 40, textAlign: 'center' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#1A1410', fontWeight: 600 }}>{m.t.split(' ')[0]}</div>
                <div style={{ fontSize: 9, color: '#8C8278' }}>{m.t.split(' ')[1]}</div>
              </div>
              <div style={{ width: 3, alignSelf: 'stretch', borderRadius: 999, background: m.dot }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13.5, color: '#1A1410' }}>{m.n}</div>
                <div style={{ fontSize: 11.5, color: '#8C8278' }}>{m.w}</div>
              </div>
              <Icon name="chevronRight" size={16} stroke="#C7BFB5"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------- 4. CLIENTS ----------
const ClientsScreen = ({ go }) => {
  const clients = [
    { name: 'Olivia Martinez', tag: 'Wedding · princess', tagBg: '#E6DFFF', tagFg: '#3F3294', img: '../../assets/photos/model-sunglasses.png', status: 'current' },
    { name: 'Amelia Park',     tag: 'Gala · Y2K',         tagBg: '#FFE0D8', tagFg: '#B22C2C', img: '../../assets/photos/model-selfie-blazer.png', status: 'current' },
    { name: 'Sienna Lowe',     tag: 'Refresh · classic',  tagBg: '#F2EEE6', tagFg: '#4A413B', img: '../../assets/photos/pearl-necklace.jpeg', status: 'current' },
    { name: 'Cora Tanaka',     tag: 'Cottage Core',       tagBg: '#F2EEE6', tagFg: '#4A413B', img: '../../assets/photos/model-blazer-coffee.png', status: 'potential' },
    { name: 'Hannah Yates',    tag: 'Editorial',          tagBg: '#E6DFFF', tagFg: '#3F3294', img: '../../assets/photos/model-selfie-blazer.png', status: 'potential' },
  ];
  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', padding: '20px 0 120px' }}>
      <div style={{ padding: '0 24px 16px' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, margin: 0 }}>YOUR ROSTER</p>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 28, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Clients</h1>
      </div>

      <div style={{ padding: '0 24px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#fff', borderRadius: 12, border: '1px solid #ECE7E0' }}>
          <Icon name="search" size={16} stroke="#8C8278"/>
          <input placeholder="Search clients" style={{ flex: 1, border: 0, outline: 'none', background: 'transparent', fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#1A1410' }}/>
        </div>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', gap: 6 }}>
        {['All', 'Current', 'Potential', 'Past'].map((p, i) => (
          <Chip key={p} active={i === 0} variant="quiet" size="sm">{p}</Chip>
        ))}
      </div>

      <div style={{ padding: '16px 24px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {clients.map(c => (
          <button key={c.name} onClick={() => go('client-detail')} style={{ textAlign: 'left', background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 12, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
            <Avatar src={c.img} size={48}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410' }}>{c.name}</span>
              </div>
              <span style={{ background: c.tagBg, color: c.tagFg, fontSize: 9.5, fontWeight: 700, padding: '3px 8px', borderRadius: 999, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6, display: 'inline-block' }}>{c.tag}</span>
            </div>
            <span style={{ fontSize: 9.5, padding: '3px 8px', borderRadius: 999, background: c.status === 'current' ? '#E6DFFF' : '#F2EEE6', color: c.status === 'current' ? '#3F3294' : '#8C8278', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{c.status}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ---------- 4b. CLIENT DETAIL ----------
const ClientDetailScreen = ({ go }) => (
  <div style={{ background: '#FAF7F2', minHeight: '100%', paddingBottom: 130 }}>
    <div style={{ position: 'relative' }}>
      <div style={{ height: 220, background: 'url(../../assets/photos/model-sunglasses.png) center/cover' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.6) 100%)' }}/>
      <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => go('clients')} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <Icon name="back" size={18} stroke="#1A1410" strokeWidth={2}/>
        </button>
        <button style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <Icon name="settings" size={18} stroke="#1A1410"/>
        </button>
      </div>
      <div style={{ position: 'absolute', bottom: 18, left: 20, right: 20, color: '#fff' }}>
        <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.85 }}>CURRENT CLIENT</span>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 28, color: '#fff', letterSpacing: '-0.01em', marginTop: 4 }}>Olivia Martinez</h1>
        <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>Wedding · Apr 16 · $400 budget</p>
      </div>
    </div>

    <div style={{ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="primary" size="md" fullWidth onClick={() => go('chat')}>Open chat</Button>
        <Button variant="outline" size="md" leftIcon="fileText">Contract</Button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        {[
          ['Style', 'Boho · Chic'],
          ['Size', '6 US'],
          ['Height', "5'3\""],
          ['Hair', 'Brown'],
        ].map(r => (
          <div key={r[0]} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 12, padding: 10 }}>
            <div style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{r[0]}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1410', marginTop: 2 }}>{r[1]}</div>
          </div>
        ))}
      </div>

      {/* Mood board */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>MOOD BOARD</span>
          <button style={{ background: 'transparent', border: 0, color: '#6B5BD3', fontSize: 11.5, fontWeight: 600, cursor: 'pointer' }}>+ Add look</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
          {['pearl-necklace.jpeg','model-selfie-blazer.png','model-blazer-coffee.png','hero-rack.png','model-sunglasses.png','model-blazer-coffee.png'].map((f, i) => (
            <div key={i} style={{ aspectRatio: '3/4', borderRadius: 8, background: `url(../../assets/photos/${f}) center/cover` }}/>
          ))}
        </div>
      </div>

      {/* Next session */}
      <div style={{ background: '#F4F1FF', borderRadius: 14, padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: '#6B5BD3', display: 'grid', placeItems: 'center' }}>
          <Icon name="calendar" size={20} stroke="#fff" strokeWidth={1.7}/>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13, color: '#3F3294' }}>Next session</div>
          <div style={{ fontSize: 12, color: '#6B5BD3', marginTop: 1 }}>May 16 · 10:00 AM · Bergdorf Studio 3</div>
        </div>
      </div>
    </div>
  </div>
);

// ---------- 5. MESSAGES LIST ----------
const MessagesListScreen = ({ go }) => {
  const threads = [
    { name: 'Olivia Martinez', last: 'Perfect! I was hoping for a princess look…', t: '10:42', un: 0, sel: true,  img: '../../assets/photos/model-sunglasses.png' },
    { name: 'Amelia Park',     last: 'Could we move the call to 3pm?',             t: '09:15', un: 2, sel: false, img: '../../assets/photos/model-selfie-blazer.png' },
    { name: 'Cora Tanaka',     last: 'Hi! Just sent my mood board.',               t: 'Mon',   un: 1, sel: false, img: '../../assets/photos/pearl-necklace.jpeg' },
    { name: 'Sienna Lowe',     last: 'Thank you again — loved everything.',        t: 'Mon',   un: 0, sel: false, img: '../../assets/photos/model-blazer-coffee.png' },
    { name: 'Hannah Yates',    last: 'Looking forward to next week!',              t: 'Sun',   un: 0, sel: false, img: '../../assets/photos/model-sunglasses.png' },
  ];
  return (
    <div style={{ background: '#fff', minHeight: '100%', padding: '0 0 120px' }}>
      <div style={{ padding: '8px 20px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span/>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16 }}>Messages</span>
        <button style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
          <Icon name="plus" size={22} stroke="#6B5BD3" strokeWidth={2}/>
        </button>
      </div>

      <div style={{ padding: '0 24px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#F2EEE6', borderRadius: 12 }}>
          <Icon name="search" size={16} stroke="#8C8278"/>
          <input placeholder="Search clients" style={{ flex: 1, border: 0, outline: 'none', background: 'transparent', fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#1A1410' }}/>
        </div>
      </div>

      {/* Sub-tabs */}
      <div style={{ padding: '0 16px 12px', display: 'flex', gap: 4, borderBottom: '1px solid #ECE7E0' }}>
        {[
          ['Inquiries', 0],
          ['Messages', 1],
          ['Contracts', 0],
          ['Reviews', 0],
        ].map(([t, active], i) => (
          <button key={t} style={{ flex: 1, background: 'transparent', border: 0, padding: '10px 4px', fontFamily: "'Outfit',sans-serif", fontSize: 12.5, fontWeight: active ? 600 : 500, color: active ? '#1A1410' : '#8C8278', cursor: 'pointer', borderBottom: active ? '2px solid #1A1410' : '2px solid transparent', marginBottom: -1 }}>{t}</button>
        ))}
      </div>

      {threads.map(t => (
        <button key={t.name} onClick={() => go('chat')} style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 0, borderBottom: '1px solid #ECE7E0', padding: '14px 24px', cursor: 'pointer', display: 'flex', gap: 12, alignItems: 'center' }}>
          <Avatar src={t.img} size={44}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410' }}>{t.name}</span>
              <span style={{ fontSize: 11, color: '#8C8278' }}>{t.t}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 3 }}>
              <span style={{ fontSize: 12, color: t.un > 0 ? '#1A1410' : '#8C8278', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, fontWeight: t.un > 0 ? 500 : 400 }}>{t.last}</span>
              {t.un > 0 && <span style={{ fontSize: 10, background: '#6B5BD3', color: '#fff', fontWeight: 700, padding: '2px 7px', borderRadius: 999, marginLeft: 6 }}>{t.un}</span>}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

// ---------- 6. CHAT ----------
const ChatScreen = ({ go }) => (
  <div style={{ background: '#FAF7F2', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ background: '#fff', borderBottom: '1px solid #ECE7E0', padding: '8px 16px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <button onClick={() => go('messages-list')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
        <Icon name="back" size={22} stroke="#1A1410" strokeWidth={1.8}/>
      </button>
      <Avatar src="../../assets/photos/model-sunglasses.png" size={36}/>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14.5, color: '#1A1410' }}>Olivia Martinez</div>
        <div style={{ fontSize: 11, color: '#6B5BD3' }}>● Active now</div>
      </div>
      <button onClick={() => go('client-detail')} style={{ background: 'transparent', border: 0, cursor: 'pointer' }}>
        <Icon name="info" size={20} stroke="#8C8278"/>
      </button>
    </div>

    <div style={{ flex: 1, padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto', paddingBottom: 100 }}>
      <div style={{ textAlign: 'center', fontSize: 11, color: '#8C8278', letterSpacing: '0.06em', marginBottom: 6 }}>TODAY · 10:42 AM</div>
      <ChatBubble side="in">Hello Sophia! I saw your profile and since my wedding is coming up I was hoping to get styled by you for it!</ChatBubble>
      <ChatBubble side="out">HI! Yes that sounds great as I am currently available. What look are you going for?</ChatBubble>
      <ChatBubble side="in">Perfect! I was hoping for a princess look with a long train and preferably white.</ChatBubble>
      <ChatBubble side="out">I definitely have some ideas that we can discuss. What would be your budget so I can show you some ideas?</ChatBubble>

      <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 12, display: 'flex', alignItems: 'center', gap: 10, alignSelf: 'flex-end', maxWidth: '78%', marginTop: 8 }}>
        <Icon name="fileText" size={18} stroke="#6B5BD3"/>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#1A1410' }}>Contract draft sent</div>
          <div style={{ fontSize: 10.5, color: '#8C8278' }}>Tap to view</div>
        </div>
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: 30, left: 16, right: 16, background: '#fff', border: '1px solid #ECE7E0', borderRadius: 999, padding: '8px 8px 8px 18px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 20px rgba(26,20,16,0.06)' }}>
      <Icon name="image" size={20} stroke="#8C8278"/>
      <input placeholder="Message Olivia…" style={{ flex: 1, border: 0, outline: 'none', fontFamily: "'Outfit',sans-serif", fontSize: 14, background: 'transparent' }}/>
      <button style={{ background: '#6B5BD3', border: 0, width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
        <Icon name="send" size={18} stroke="#fff" strokeWidth={2}/>
      </button>
    </div>
  </div>
);

const ChatBubble = ({ side, children }) => {
  const out = side === 'out';
  return (
    <div style={{
      maxWidth: '78%', padding: '11px 15px', borderRadius: 20,
      fontSize: 13.5, lineHeight: 1.45,
      alignSelf: out ? 'flex-end' : 'flex-start',
      background: out ? '#6B5BD3' : '#E6DFFF',
      color: out ? '#fff' : '#3F3294',
      borderBottomRightRadius: out ? 6 : 20,
      borderBottomLeftRadius: out ? 20 : 6,
    }}>{children}</div>
  );
};

// ---------- 7. PAYMENTS / FINANCE ----------
const PaymentsScreen = ({ go }) => {
  const months = [
    { m: 'Jan', a: 32, b: 18 },
    { m: 'Feb', a: 28, b: 14 },
    { m: 'Mar', a: 44, b: 26 },
    { m: 'Apr', a: 38, b: 22 },
    { m: 'May', a: 56, b: 34 },
  ];
  const invoices = [
    { id: 'Olivia M.', status: 'Paid',    pct: 100, amt: '$320' },
    { id: 'Amelia P.', status: 'Pending', pct: 60,  amt: '$180' },
    { id: 'Sienna L.', status: 'Paid',    pct: 100, amt: '$420' },
    { id: 'Hannah Y.', status: 'Pending', pct: 40,  amt: '$240' },
  ];
  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', padding: '20px 0 120px' }}>
      <div style={{ padding: '0 24px 16px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, margin: 0 }}>FINANCE TRACKER</p>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 28, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Your earnings</h1>
        </div>
        <button style={{ background: 'transparent', border: 0, cursor: 'pointer' }}>
          <Icon name="settings" size={20} stroke="#8C8278"/>
        </button>
      </div>

      {/* Period toggle */}
      <div style={{ padding: '0 24px 14px', display: 'flex', gap: 6 }}>
        {['Month', '3 Months', 'Year'].map((p, i) => (
          <Chip key={p} active={i === 1} variant="quiet" size="sm">{p}</Chip>
        ))}
      </div>

      {/* Big balance */}
      <div style={{ padding: '0 24px' }}>
        <div style={{ background: '#6B5BD3', color: '#fff', borderRadius: 22, padding: 22, position: 'relative', overflow: 'hidden' }}>
          <span style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85, fontWeight: 600 }}>3 MONTH EARNINGS</span>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 500, fontSize: 44, marginTop: 6, letterSpacing: '-0.02em', lineHeight: 1 }}>$9,840</div>
          <div style={{ marginTop: 8, fontSize: 13, opacity: 0.95 }}>↑ 18% vs prior period · $640 pending</div>

          {/* Mini chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 60, marginTop: 16 }}>
            {months.map(m => (
              <div key={m.m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'flex-end', gap: 2, height: 50 }}>
                  <div style={{ flex: 1, height: `${(m.a/60)*100}%`, background: '#fff', borderRadius: '3px 3px 0 0' }}/>
                  <div style={{ flex: 1, height: `${(m.b/60)*100}%`, background: 'rgba(255,255,255,0.5)', borderRadius: '3px 3px 0 0' }}/>
                </div>
                <span style={{ fontSize: 9, opacity: 0.7 }}>{m.m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ padding: '16px 24px 0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        {[
          { l: 'This month', v: '$3,240', d: '+12%' },
          { l: 'Avg session', v: '$152',   d: '+4%' },
        ].map(s => (
          <div key={s.l} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 14 }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{s.l}</div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 500, fontSize: 22, color: '#1A1410', marginTop: 6, letterSpacing: '-0.01em' }}>{s.v}</div>
            <div style={{ fontSize: 11.5, color: '#4B8B5A', marginTop: 2 }}>{s.d}</div>
          </div>
        ))}
      </div>

      {/* Invoices */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410', margin: 0 }}>Open invoices</h3>
          <button style={{ background: 'transparent', border: 0, color: '#6B5BD3', fontSize: 11.5, fontWeight: 600, cursor: 'pointer' }}>Export →</button>
        </div>
        <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14 }}>
          {invoices.map((c, i) => (
            <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderBottom: i < invoices.length - 1 ? '1px solid #ECE7E0' : 'none' }}>
              <Avatar initials={c.id.split(' ').map(x => x[0]).join('')} size={32}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#1A1410' }}>{c.id}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, fontWeight: 500, color: '#1A1410' }}>{c.amt}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                  <div style={{ flex: 1, height: 3, background: '#F2EEE6', borderRadius: 999 }}>
                    <div style={{ width: `${c.pct}%`, height: '100%', background: c.status === 'Paid' ? '#4B8B5A' : '#D89A3E', borderRadius: 999 }}/>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, color: c.status === 'Paid' ? '#4B8B5A' : '#D89A3E', letterSpacing: '0.04em' }}>{c.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------- 8. ACCOUNT / PROFILE (slide 16, stylist side) ----------
const AccountScreen = ({ go }) => {
  const items = [
    { l: 'Personal Information', icon: 'user' },
    { l: 'Login and security',   icon: 'lock' },
    { l: 'Personalisation',      icon: 'sparkle' },
    { l: 'Ongoing orders',       icon: 'fileText' },
    { l: 'My clients',           icon: 'users',  go: 'clients' },
    { l: 'My style portfolio',   icon: 'image' },
    { l: 'Finance tracker',      icon: 'wallet', go: 'payments' },
    { l: 'SOURCED Collective',   icon: 'crown',  accent: true },
    { l: 'Language',             icon: 'info' },
    { l: 'Display mode',         icon: 'eye' },
  ];
  return (
    <div style={{ background: '#fff', minHeight: '100%', padding: '0 0 120px' }}>
      <div style={{ padding: '8px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => go('home')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
          <Icon name="close" size={22} stroke="#6B5BD3" strokeWidth={2}/>
        </button>
        <Icon name="bell" size={20} stroke="#1A1410" strokeWidth={1.7}/>
      </div>

      {/* Profile card — slide 16 layout */}
      <div style={{ padding: '12px 24px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <Avatar src="../../assets/photos/model-blazer-coffee.png" size={84} ring="#6B5BD3"/>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 26, color: '#1A1410', letterSpacing: '-0.005em' }}>Sophia Laurent</div>
          <div style={{ fontSize: 12.5, color: '#8C8278', marginTop: 2 }}>Wedding Stylist · New York · ★ 4.9</div>
        </div>
        <Button variant="outline" size="sm" leftIcon="edit">Edit profile</Button>
      </div>

      {/* Performance stats — 3 cells */}
      <div style={{ padding: '0 24px 18px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          { l: 'Sessions', v: '34', t: 'this month' },
          { l: 'Earnings', v: '$3.2k', t: 'this month' },
          { l: 'Clients',  v: '12',  t: 'active' },
        ].map(s => (
          <div key={s.l} style={{ background: '#F4F1FF', borderRadius: 12, padding: 12, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 18, color: '#3F3294' }}>{s.v}</div>
            <div style={{ fontSize: 10.5, color: '#6B5BD3', marginTop: 2, letterSpacing: '0.04em' }}>{s.l}</div>
            <div style={{ fontSize: 9, color: '#8C8278', marginTop: 1 }}>{s.t}</div>
          </div>
        ))}
      </div>

      {/* Activity sparkline */}
      <div style={{ padding: '0 24px 18px' }}>
        <div style={{ background: '#FAF7F2', borderRadius: 14, padding: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>ACTIVITY · 12 WEEKS</span>
            <span style={{ fontSize: 11, color: '#4B8B5A', fontWeight: 600 }}>↑ trending up</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 64 }}>
            {[8, 12, 9, 14, 11, 16, 22, 18, 14, 19, 25, 21].map((v, i) => (
              <div key={i} style={{ flex: 1, height: `${(v/25)*100}%`, background: i === 11 ? '#6B5BD3' : '#CDC0FF', borderRadius: '3px 3px 0 0' }}/>
            ))}
          </div>
        </div>
      </div>

      {/* Menu */}
      <div style={{ padding: '0 24px' }}>
        <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 18 }}>
          {items.map((it, i) => (
            <button key={it.l} onClick={() => it.go && go(it.go)}
              style={{
                width: '100%', textAlign: 'left', background: 'transparent', border: 0, cursor: 'pointer',
                padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14,
                borderBottom: i < items.length - 1 ? '1px solid #ECE7E0' : 'none',
              }}>
              <Icon name={it.icon} size={18} stroke={it.accent ? '#6B5BD3' : '#8C8278'} strokeWidth={1.7}/>
              <span style={{ flex: 1, fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: it.accent ? 600 : 400, color: it.accent ? '#6B5BD3' : '#1A1410' }}>{it.l}</span>
              <Icon name="chevronRight" size={16} stroke="#C7BFB5"/>
            </button>
          ))}
        </div>
        <div style={{ marginTop: 14 }}>
          <Button variant="ghost" fullWidth leftIcon="logout" style={{ color: '#C24545' }}>Sign out</Button>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, {
  SignInScreen, SignUpScreen, HomeScreen, CalendarScreen,
  ClientsScreen, ClientDetailScreen, MessagesListScreen, ChatScreen,
  PaymentsScreen, AccountScreen, ChatBubble,
});
