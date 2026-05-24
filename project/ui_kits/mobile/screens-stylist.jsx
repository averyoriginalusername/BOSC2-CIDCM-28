// Sourced — stylist screens. Loaded after screens-client.jsx in the unified mobile app.
// All function names prefixed with `Stylist` to avoid collisions with client screens.

const StylistSetupScreen = ({ go }) => (
  <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    <ScreenHeader onBack={() => go('role')} title="Become a stylist" eyebrow role="stylist"/>
    <div style={{ padding: '8px 24px 130px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <p style={{ fontSize: 13.5, color: '#8C8278', lineHeight: 1.5, marginTop: -4 }}>Your public profile. Clients will see this.</p>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
        <button style={{ background: 'transparent', border: 0, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 88, height: 88, borderRadius: '50%', background: '#F2EEE6', border: '1px dashed #C7BFB5', display: 'grid', placeItems: 'center', color: '#8C8278' }}>
            <Icon name="image" size={28} stroke="#8C8278"/>
          </div>
          <span style={{ fontSize: 11.5, color: '#6B5BD3', fontWeight: 600 }}>+ Add profile photo</span>
        </button>
      </div>

      <Input label="Full name" role="stylist" placeholder="Sophia Laurent" value="" onChange={()=>{}}/>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Input label="Age" role="stylist" placeholder="32" value="" onChange={()=>{}}/>
        <Input label="Gender" role="stylist" placeholder="Female (she/her)" value="" onChange={()=>{}}/>
      </div>
      <Input label="Educational background" role="stylist" placeholder="FIT — BFA Fashion Design" value="" onChange={()=>{}}/>
      <Input label="Location" role="stylist" placeholder="New York, USA" value="" onChange={()=>{}}/>
      <Select label="Availability" role="stylist" options={['Full-time', 'Part-time', 'Weekends only', 'On request']} value="" onChange={()=>{}}/>
      <Textarea label="Area of fashion expertise" role="stylist" placeholder="Occasionwear, wedding, editorial, vintage…" rows={2}/>
      <Input label="Languages" role="stylist" placeholder="English, French" value="" onChange={()=>{}}/>
      <Input label="Email" role="stylist" placeholder="you@email.com" value="" onChange={()=>{}}/>
      <Input label="Phone number" role="stylist" placeholder="+1 (555) 000-0000" value="" onChange={()=>{}}/>

      <Textarea label="Description" role="stylist" placeholder="Tell clients about your style sensibility, who you love dressing, what makes you different…" rows={3}/>

      <div>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#6B5BD3' }}>Connect your social media</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
          {['Instagram', 'LinkedIn', 'Facebook', 'TikTok'].map(s => (
            <Chip key={s} variant="lilac" size="sm">+ {s}</Chip>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#6B5BD3' }}>Mood board</span>
          <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#6B5BD3', fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Icon name="plus" size={14} stroke="#6B5BD3" strokeWidth={2}/> Upload
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {['model-blazer-coffee.png','pearl-necklace.jpeg','model-sunglasses.png','hero-rack.png','model-selfie-blazer.png'].map((f, i) => (
            <div key={i} style={{ aspectRatio: '1', borderRadius: 8, background: `url(../../assets/photos/${f}) center/cover` }}/>
          ))}
          <button style={{ aspectRatio: '1', borderRadius: 8, background: '#FAF7F2', border: '1.5px dashed #DCD5CB', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
            <Icon name="camera" size={20} stroke="#8C8278"/>
          </button>
        </div>
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: 30, left: 24, right: 24 }}>
      <Button variant="lilac" size="lg" fullWidth onClick={() => go('stylist-home')}>Continue</Button>
    </div>
  </div>
);

// ---------- 2. HOME / DASHBOARD ----------
const StylistHomeScreen = ({ go }) => {
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
        <button onClick={() => go('stylist-account')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 0 }}>
          <Avatar src="../../assets/photos/model-blazer-coffee.png" size={42} ring="#6B5BD3"/>
        </button>
      </div>

      {/* Stats row */}
      <div style={{ padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          { l: 'Clients', v: '12', d: '+2', nav: 'clients' },
          { l: 'Sessions', v: '34', d: '+8%', nav: 'calendar' },
          { l: 'Earnings', v: '$3.2k', d: '+12%', nav: 'payments' },
        ].map(s => (
          <button key={s.l} onClick={() => go(s.nav)} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 12, cursor: 'pointer', textAlign: 'left' }}>
            <div style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{s.l}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 20, fontWeight: 500, color: '#1A1410', letterSpacing: '-0.01em' }}>{s.v}</span>
              <span style={{ fontSize: 10.5, color: '#4B8B5A', fontWeight: 500 }}>{s.d}</span>
            </div>
          </button>
        ))}
      </div>

      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ background: '#1A1410', color: '#fff', borderRadius: 18, padding: 16, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'url(../../assets/photos/hero-rack.png) right/cover', opacity: 0.3 }}/>
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>NEW INQUIRIES</p>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 22, lineHeight: 1.15, marginTop: 4, color: '#fff', maxWidth: '70%' }}>3 clients waiting on you</h2>
            <button onClick={() => go('stylist-messages-list')} style={{ marginTop: 12, background: '#fff', color: '#1A1410', border: 0, borderRadius: 999, padding: '7px 14px', fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Open inbox →</button>
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
        <Button variant="lilac" size="md" fullWidth onClick={() => go('stylist-chat')}>Open chat</Button>
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
// Client directory + per-conversation default threads (reset each time a chat opens).
// On the stylist side, the stylist (me) is 'out' and the client is 'in'.
const STYLIST_CLIENTS = {
  'Olivia Martinez': { img: '../../assets/photos/model-sunglasses.png',     t: '10:42', un: 0 },
  'Amelia Park':     { img: '../../assets/photos/model-selfie-blazer.png',  t: '09:15', un: 2 },
  'Cora Tanaka':     { img: '../../assets/photos/pearl-necklace.jpeg',      t: 'Mon',   un: 1 },
  'Sienna Lowe':     { img: '../../assets/photos/model-blazer-coffee.png',  t: 'Mon',   un: 0 },
  'Hannah Yates':    { img: '../../assets/photos/model-sunglasses.png',     t: 'Sun',   un: 0 },
};

const STYLIST_THREADS = {
  'Olivia Martinez': [
    { side: 'in',  text: 'Hello Sophia! I saw your profile and since my wedding is coming up I was hoping to get styled by you for it!' },
    { side: 'out', text: 'HI! Yes that sounds great as I am currently available. What look are you going for?' },
    { side: 'in',  text: 'Perfect! I was hoping for a princess look with a long train and preferably white.' },
    { side: 'out', text: 'I definitely have some ideas that we can discuss. What would be your budget so I can show you some ideas?' },
  ],
  'Amelia Park':  [ { side: 'in', text: 'Could we move the call to 3pm?' } ],
  'Cora Tanaka':  [ { side: 'in', text: 'Hi! Just sent my mood board.' } ],
  'Sienna Lowe':  [ { side: 'in', text: 'Thank you again — loved everything.' } ],
  'Hannah Yates': [ { side: 'in', text: 'Looking forward to next week!' } ],
};

const STYLIST_REPLIES = {
  'Olivia Martinez': 'Sounds perfect — I’ll prep a few looks and follow up.',
  'Amelia Park':     'No problem, 3pm works. See you then!',
  'Cora Tanaka':     'Got it, looking through your board now — love the palette.',
  'Sienna Lowe':     'So glad to hear it! Let’s plan the next one soon.',
  'Hannah Yates':    'Me too! I’ll have everything ready.',
};

const StylistMessagesListScreen = ({ go, set }) => {
  const threads = Object.keys(STYLIST_CLIENTS).map(name => ({
    name,
    last: (STYLIST_THREADS[name][STYLIST_THREADS[name].length - 1] || {}).text || '',
    ...STYLIST_CLIENTS[name],
  }));
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
        <button key={t.name} onClick={() => { set && set({ chatWith: t.name }); go('stylist-chat'); }} style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 0, borderBottom: '1px solid #ECE7E0', padding: '14px 24px', cursor: 'pointer', display: 'flex', gap: 12, alignItems: 'center' }}>
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

// ---------- 6. CHAT (live, per-client threads reset on open) ----------
const StylistChatScreen = ({ go, state }) => {
  const who = (state && state.chatWith && STYLIST_CLIENTS[state.chatWith]) ? state.chatWith : 'Olivia Martinez';
  const info = STYLIST_CLIENTS[who];
  const [msgs, setMsgs] = React.useState(() => (STYLIST_THREADS[who] || []).slice());
  const [draft, setDraft] = React.useState('');
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    setMsgs((STYLIST_THREADS[who] || []).slice());
    setDraft('');
  }, [who]);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMsgs(m => [...m, { side: 'out', text }]);
    setDraft('');
    const reply = STYLIST_REPLIES[who];
    if (reply) setTimeout(() => setMsgs(m => [...m, { side: 'in', text: reply }]), 700);
  };

  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#fff', borderBottom: '1px solid #ECE7E0', padding: '8px 16px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={() => go('stylist-messages-list')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
          <Icon name="back" size={22} stroke="#1A1410" strokeWidth={1.8}/>
        </button>
        <Avatar src={info.img} size={36}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14.5, color: '#1A1410' }}>{who}</div>
          <div style={{ fontSize: 11, color: '#6B5BD3' }}>● Active now</div>
        </div>
        <button onClick={() => go('client-detail')} style={{ background: 'transparent', border: 0, cursor: 'pointer' }}>
          <Icon name="info" size={20} stroke="#8C8278"/>
        </button>
      </div>

      <div ref={scrollRef} style={{ flex: 1, padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto', paddingBottom: 100 }}>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#8C8278', letterSpacing: '0.06em', marginBottom: 6 }}>TODAY · 10:42 AM</div>
        {msgs.map((m, i) => (
          <ChatBubbleStylist key={i} side={m.side}>{m.text}</ChatBubbleStylist>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: 30, left: 16, right: 16, background: '#fff', border: '1px solid #ECE7E0', borderRadius: 999, padding: '8px 8px 8px 18px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 20px rgba(26,20,16,0.06)' }}>
        <Icon name="image" size={20} stroke="#8C8278"/>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
          placeholder={`Message ${who.split(' ')[0]}…`}
          style={{ flex: 1, border: 0, outline: 'none', fontFamily: "'Outfit',sans-serif", fontSize: 14, background: 'transparent' }}/>
        <button onClick={send} style={{ background: '#6B5BD3', border: 0, width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <Icon name="send" size={18} stroke="#fff" strokeWidth={2}/>
        </button>
      </div>
    </div>
  );
};

const ChatBubbleStylist = ({ side, children }) => {
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
const StylistAccountScreen = ({ go }) => {
  const items = [
    { l: 'Personal Information', icon: 'user' },
    { l: 'Login and security',   icon: 'lock' },
    { l: 'Personalisation',      icon: 'sparkle' },
    { l: 'Language',             icon: 'info' },
    { l: 'Display mode',         icon: 'eye' },
    { l: 'Ongoing orders',       icon: 'contract' },
    { l: 'My clients',           icon: 'users',  go: 'clients' },
    { l: 'Saved shops',          icon: 'heart' },
    { l: 'My style portfolio',   icon: 'image' },
    { l: 'SOURCED Collective',   icon: 'crown',  accent: true, go: 'loyalty' },
    { l: 'Finance tracker',      icon: 'wallet', go: 'payments' },
    { l: 'Tell us how we did',   icon: 'message', accent: true, go: 'stylist-ipa-quiz' },
  ];
  return (
    <div style={{ background: '#fff', minHeight: '100%', padding: '0 0 120px' }}>
      <div style={{ padding: '8px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => go('stylist-home')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
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
          <Button variant="ghost" fullWidth leftIcon="logout" style={{ color: '#C24545' }} onClick={() => go('sign-in')}>Sign out</Button>
        </div>
      </div>
    </div>
  );
};


Object.assign(window, {
  StylistSetupScreen, StylistHomeScreen, CalendarScreen,
  ClientsScreen, ClientDetailScreen, StylistMessagesListScreen, StylistChatScreen,
  PaymentsScreen, StylistAccountScreen,
});
