// Customer-side mobile screens
// Each is a render function (props: state, set). State is { screen, name, role, styleTags, color, budget, ratings, feedback, ... }
// Uses primitives from components.jsx and IOSDevice context (no need to render frame here).

const SCREEN_HEIGHT = 'calc(100% - 0px)';
const PAGE_BG = '#FAF7F2';

// ---------- 1. SIGN IN ----------
const SignInScreen = ({ go }) => (
  <div style={{ background: '#fff', minHeight: '100%', padding: '60px 28px 120px', display: 'flex', flexDirection: 'column', gap: 28 }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 20 }}>
      <Logo size={48}/>
      <WordmarkCaps size={11} color="#1A1410"/>
    </div>
    <div>
      <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontSize: 36, color: '#1A1410', letterSpacing: '-0.01em', fontStyle: 'italic' }}>Sign in</h1>
      <p style={{ color: '#8C8278', marginTop: 6, fontSize: 14 }}>Hi there! Nice to see you again.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input label="Email" value="olivia@email.com" onChange={()=>{}}/>
      <Input label="Password" type="password" value="••••••••••" onChange={()=>{}}/>
    </div>
    <Button variant="primary" size="lg" fullWidth onClick={() => go('role')}>Sign in</Button>
    <div style={{ textAlign: 'center', color: '#8C8278', fontSize: 12, letterSpacing: '0.02em' }}>or use one of your social profiles</div>
    <div style={{ display: 'flex', gap: 10 }}>
      <button style={{ flex: 1, background: '#1A1410', color: 'white', border: 0, borderRadius: 999, padding: '12px 14px', fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <span style={{ fontWeight: 700 }}>𝕏</span> Twitter
      </button>
      <button style={{ flex: 1, background: '#1877F2', color: 'white', border: 0, borderRadius: 999, padding: '12px 14px', fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <span style={{ fontFamily: 'serif', fontWeight: 900 }}>f</span> Facebook
      </button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 4 }}>
      <a style={{ color: '#8C8278', textDecoration: 'none' }} href="#" onClick={(e)=>{e.preventDefault();}}>Forgot Password?</a>
      <a style={{ color: '#EE5A5A', fontWeight: 600, textDecoration: 'none' }} href="#" onClick={(e)=>{e.preventDefault(); go('sign-up');}}>Sign Up</a>
    </div>
  </div>
);

// ---------- 1b. SIGN UP (email / password / T&C / Continue) ----------
const SignUpScreen = ({ go }) => {
  const [agree, setAgree] = React.useState(true);
  return (
    <div style={{ background: '#fff', minHeight: '100%', padding: '40px 28px 130px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <ScreenHeader onBack={() => go('sign-in')}/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: -4 }}>
        <Logo size={42}/>
        <WordmarkCaps size={10.5} color="#1A1410"/>
      </div>
      <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 36, color: '#1A1410', letterSpacing: '-0.01em' }}>Sign Up</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Input label="Email" placeholder="Your email address" value="" onChange={()=>{}}/>
        <Input label="Password" type="password" placeholder="Your password" value="" onChange={()=>{}}/>
      </div>
      <button onClick={() => setAgree(!agree)} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: 'transparent', border: 0, padding: 0, cursor: 'pointer', textAlign: 'left' }}>
        <div style={{ width: 18, height: 18, borderRadius: 5, background: agree ? '#EE5A5A' : 'transparent', border: agree ? '0' : '1.5px solid #DCD5CB', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 1 }}>
          {agree && <Icon name="check" size={12} stroke="#fff" strokeWidth={3}/>}
        </div>
        <span style={{ fontSize: 13, color: '#4A413B', lineHeight: 1.5 }}>I agree to the <span style={{ color: '#EE5A5A', fontWeight: 600 }}>Terms of Services</span> and <span style={{ color: '#EE5A5A', fontWeight: 600 }}>Privacy Policy.</span></span>
      </button>
      <Button variant="primary" size="lg" fullWidth onClick={() => go('role')} disabled={!agree}>Continue</Button>
      <div style={{ textAlign: 'center', fontSize: 13, color: '#8C8278' }}>
        Have an Account? <a style={{ color: '#EE5A5A', fontWeight: 600, textDecoration: 'none' }} href="#" onClick={(e) => { e.preventDefault(); go('sign-in'); }}>Sign In</a>
      </div>
    </div>
  );
};

// ---------- 2. WHO ARE YOU? ----------
const RoleSelectScreen = ({ go, state, set }) => (
  <div style={{ background: '#fff', minHeight: '100%', padding: '40px 24px 130px', display: 'flex', flexDirection: 'column', gap: 22 }}>
    <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 36, color: '#1A1410', textAlign: 'center', letterSpacing: '-0.01em' }}>Who are you?</h1>
    <p style={{ color: '#8C8278', fontSize: 13.5, textAlign: 'center', maxWidth: 280, margin: '-6px auto 0' }}>Sourced is a two-sided platform. Pick the side you're joining today.</p>

    {[
      { k: 'client', tag: 'CLIENT', tagline: 'I want to be styled', desc: 'Get matched with a personal shopper for an event, a wardrobe refresh, or everyday looks.', img: '../../assets/photos/model-sunglasses.png' },
      { k: 'stylist', tag: 'STYLIST', tagline: 'I want to style', desc: 'Build your client roster, manage bookings, and grow your styling business.', img: '../../assets/photos/model-blazer-coffee.png' },
    ].map(opt => (
      <button key={opt.k}
        onClick={() => { set({ role: opt.k }); go(opt.k === 'client' ? 'quiz' : 'stylist-app'); }}
        style={{
          textAlign: 'left', cursor: 'pointer',
          background: '#fff', border: state.role === opt.k ? '2px solid #1A1410' : '1px solid #ECE7E0',
          borderRadius: 20, padding: 14, display: 'flex', gap: 14, alignItems: 'center',
          boxShadow: '0 2px 6px rgba(26,20,16,0.05)',
        }}>
        <div style={{ width: 92, height: 110, borderRadius: 14, background: `url(${opt.img}) center/cover`, flexShrink: 0 }}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10.5, letterSpacing: '0.18em', color: '#8C8278', textTransform: 'uppercase', fontWeight: 600 }}>{opt.tag}</span>
          <span style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 22, color: '#1A1410', lineHeight: 1.1 }}>{opt.tagline}</span>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12.5, color: '#8C8278', lineHeight: 1.4, marginTop: 2 }}>{opt.desc}</span>
        </div>
      </button>
    ))}

    <button onClick={() => alert('SOURCED chatbot — not in scope')}
      style={{
        marginTop: 'auto', alignSelf: 'flex-start',
        background: '#F2EEE6', color: '#1A1410', border: '1px solid #ECE7E0',
        borderRadius: 14, padding: '10px 14px',
        fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 500,
        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
      }}>
      <Icon name="sparkle" size={14} stroke="#1A1410" strokeWidth={1.8}/>
      Ask SOURCED Chat
    </button>
  </div>
);

// ---------- 3. STYLE QUIZ ----------
const QuizScreen = ({ go, state, set }) => {
  const allTags = ['Chic', 'Modern', 'Y2K', 'Cottage Core', 'Vintage', "80's", 'Summer', 'boho', 'Cyber punk'];
  const tags = state.styleTags || ['boho'];
  const toggle = (t) => set({ styleTags: tags.includes(t) ? tags.filter(x => x !== t) : [...tags, t] });
  const colors = ['#E94560', '#F08A4B', '#F2CB05', '#6BBF59', '#41B3A3', '#3E64FF', '#7868E6', '#C06AC9', '#1A1410', '#D9A78E', '#FFF1EE', '#EAE0D5'];
  return (
    <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <ScreenHeader onBack={() => go('role')} title="Style quiz" eyebrow/>
      <div style={{ padding: '0 24px 130px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <p style={{ fontSize: 13.5, color: '#4A413B', marginBottom: 10 }}>Words to describe your style</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {allTags.map(t => (
              <Chip key={t} active={tags.includes(t)} variant="quiet" onClick={() => toggle(t)}>{t}</Chip>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 13.5, color: '#4A413B', marginBottom: 4 }}>Favorite colors</p>
          <p style={{ fontSize: 11.5, color: '#8C8278', marginBottom: 12 }}>Pick as many as you like — these guide your stylist's palette.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 10 }}>
            {colors.map((c, i) => {
              const selected = (state.colors || []).includes(c);
              return (
                <button key={i} onClick={() => {
                    const cur = state.colors || [];
                    set({ colors: selected ? cur.filter(x => x !== c) : [...cur, c] });
                  }}
                  style={{
                    width: '100%', aspectRatio: '1', borderRadius: '50%', background: c,
                    border: selected ? '2.5px solid #1A1410' : '1px solid #ECE7E0',
                    cursor: 'pointer', padding: 0, position: 'relative',
                    boxShadow: selected ? '0 0 0 2px #fff inset' : 'none',
                  }}>
                  {selected && (
                    <span style={{
                      position: 'absolute', top: -4, right: -4,
                      width: 18, height: 18, borderRadius: '50%', background: '#1A1410',
                      display: 'grid', placeItems: 'center', color: '#fff',
                    }}>
                      <Icon name="check" size={11} stroke="#fff" strokeWidth={3}/>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {(state.colors || []).length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, padding: '8px 12px', background: '#F4F1FF', borderRadius: 10 }}>
              <span style={{ fontSize: 11, color: '#3F3294', fontWeight: 600, letterSpacing: '0.04em' }}>{(state.colors || []).length} SELECTED</span>
              <div style={{ display: 'flex', gap: 4 }}>
                {(state.colors || []).map((c, i) => (
                  <span key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: c, border: '1px solid rgba(0,0,0,0.08)' }}/>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <p style={{ fontSize: 13.5, color: '#4A413B', marginBottom: 6 }}>What are you looking for?</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 10, marginBottom: 14 }}>
            <Chip variant="coral" active={state.need === 'every'} size="sm" onClick={() => set({ need: 'every' })}>Everyday styling</Chip>
            <Chip variant="coral" active={state.need === 'event'} size="sm" onClick={() => set({ need: 'event' })}>An event</Chip>
            <Chip variant="coral" active={state.need === 'refresh'} size="sm" onClick={() => set({ need: 'refresh' })}>Wardrobe refresh</Chip>
          </div>

          <p style={{ fontSize: 13.5, color: '#4A413B', marginBottom: 6, marginTop: 12 }}>Budget</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#8C8278' }}>$10</span>
            <input type="range" min="10" max="2000" defaultValue="400" style={{ flex: 1, accentColor: '#EE5A5A' }}/>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#8C8278' }}>$2000+</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 36, left: 24, right: 24 }}>
        <Button variant="primary" size="lg" fullWidth onClick={() => go('profile-setup')}>Continue</Button>
      </div>
    </div>
  );
};

// ---------- 3b. SET UP YOUR PROFILE ----------
const ProfileSetupScreen = ({ go }) => (
  <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button onClick={() => go('quiz')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
        <Icon name="back" size={22} stroke="#1A1410" strokeWidth={1.8}/>
      </button>
      <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15 }}>Set up your profile</span>
      <button style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
        <Icon name="plus" size={22} stroke="#EE5A5A" strokeWidth={2}/>
      </button>
    </div>

    <div style={{ padding: '12px 24px 130px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <Input label="Name" placeholder="Olivia Martinez" value="" onChange={()=>{}}/>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Input label="Age" placeholder="25" value="" onChange={()=>{}}/>
        <Input label="Location" placeholder="New York, USA" value="" onChange={()=>{}}/>
      </div>
      <Input label="Occupation" placeholder="Marketing executive" value="" onChange={()=>{}}/>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        <Input label="Height" placeholder="160 cm" value="" onChange={()=>{}}/>
        <Input label="Weight" placeholder="56 kg" value="" onChange={()=>{}}/>
        <Input label="Shoe size" placeholder="7 US" value="" onChange={()=>{}}/>
      </div>

      <div>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#EE5A5A' }}>Specific measurements or comments</span>
        <textarea placeholder="Anything we should know about fit, preferences, or things to avoid…"
          style={{ width: '100%', boxSizing: 'border-box', marginTop: 6, minHeight: 80, padding: '12px 14px', border: '1.25px solid #DCD5CB', borderRadius: 12, fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#1A1410', outline: 'none', resize: 'none' }}/>
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: 30, left: 24, right: 24 }}>
      <Button variant="primary" size="lg" fullWidth onClick={() => go('profile-detail')}>Continue</Button>
    </div>
  </div>
);

// ---------- 3c. PROFILE DETAIL (mood board upload) ----------
const ProfileDetailScreen = ({ go }) => (
  <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button onClick={() => go('profile-setup')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
        <Icon name="back" size={22} stroke="#1A1410" strokeWidth={1.8}/>
      </button>
      <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15 }}>Profile</span>
      <Icon name="edit" size={20} stroke="#1A1410" strokeWidth={1.7}/>
    </div>

    <div style={{ padding: '12px 24px 130px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'url(../../assets/photos/model-sunglasses.png) center/cover', border: '1px solid #ECE7E0' }}/>
        <div>
          <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 26, color: '#1A1410', letterSpacing: '-0.005em' }}>Olivia Martinez</div>
          <div style={{ fontSize: 12, color: '#8C8278', marginTop: 2 }}>New York · Marketing exec</div>
        </div>
      </div>

      <div style={{ background: '#FAF7F2', borderRadius: 14, padding: 14, border: '1px solid #ECE7E0' }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, marginBottom: 10 }}>PERSONAL INFORMATION</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            ['Name', 'Olivia M.'],
            ['Age', '25'],
            ['Height', '160 cm'],
            ['Weight', '56 kg'],
            ['Occupation', 'Marketing'],
            ['Hair', 'Brown'],
          ].map(r => (
            <div key={r[0]}>
              <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{r[0]}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1A1410', marginTop: 2 }}>{r[1]}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>PERSONAL DESCRIPTION</span>
        </div>
        <p style={{ fontSize: 13.5, color: '#4A413B', lineHeight: 1.5, margin: 0 }}>Romantic dresser with a soft spot for vintage tailoring. Refining my style for occasions — weddings, gallery openings, dinner parties.</p>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>MOOD BOARD</span>
          <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#EE5A5A', fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Icon name="plus" size={14} stroke="#EE5A5A" strokeWidth={2}/> Upload
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {['pearl-necklace.jpeg','model-sunglasses.png','model-blazer-coffee.png','model-selfie-blazer.png','hero-rack.png'].map((f, i) => (
            <div key={i} style={{ aspectRatio: '1', borderRadius: 8, background: `url(../../assets/photos/${f}) center/cover` }}/>
          ))}
          <button style={{ aspectRatio: '1', borderRadius: 8, background: '#FAF7F2', border: '1.5px dashed #DCD5CB', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
            <Icon name="camera" size={20} stroke="#8C8278"/>
          </button>
        </div>
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: 30, left: 24, right: 24 }}>
      <Button variant="primary" size="lg" fullWidth onClick={() => go('home')}>Save profile</Button>
    </div>
  </div>
);

// ---------- 4b. MESSAGES LIST (Search Stylist) ----------
const MessagesListScreen = ({ go }) => {
  const stylists = [
    { n: 'Sophia',  spec: 'Wedding Stylist',    new: 1 },
    { n: 'Mandy',   spec: 'Cottage Core Stylist', new: 0 },
    { n: 'Martha',  spec: 'Boho Chic Stylist',  new: 0 },
    { n: 'Jerry',   spec: 'Cyber punk Stylist', new: 0 },
    { n: 'Sam',     spec: 'Y2K Stylist',        new: 2 },
  ];
  return (
    <div style={{ background: '#fff', minHeight: '100%', padding: '0 0 120px' }}>
      <div style={{ padding: '8px 20px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span/>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16 }}>Messages</span>
        <button style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
          <Icon name="plus" size={22} stroke="#EE5A5A" strokeWidth={2}/>
        </button>
      </div>
      <div style={{ padding: '0 18px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#F2EEE6', borderRadius: 12 }}>
          <Icon name="search" size={16} stroke="#8C8278"/>
          <input placeholder="Search Stylist" style={{ flex: 1, border: 0, outline: 'none', background: 'transparent', fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#1A1410' }}/>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {stylists.map(s => (
          <button key={s.n} onClick={() => go('chat')} style={{ background: 'transparent', border: 0, borderBottom: '1px solid #ECE7E0', padding: '16px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left' }}>
            <div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14.5, color: '#1A1410' }}>{s.n} — <span style={{ color: '#6B5BD3', fontWeight: 500 }}>{s.spec}</span></div>
            </div>
            {s.new > 0 && <span style={{ fontSize: 10.5, background: '#6B5BD3', color: '#fff', fontWeight: 700, padding: '2px 7px', borderRadius: 999 }}>{s.new}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

// ---------- 4c. FILTER (Mood / Event / Style / Location / Budget / Size / Timeline) ----------
const FilterScreen = ({ go, state, set }) => {
  const Section = ({ title, children, sub }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#1A1410' }}>{title}</span>
        {sub && <span style={{ fontSize: 11, color: '#8C8278', marginLeft: 6 }}>{sub}</span>}
      </div>
      {children}
    </div>
  );
  const f = state.filters || { mood: 'Romantic', event: 'Wedding', styles: ['Princess', 'Chic'], openness: 60, size: 'M', timeline: '3 weeks' };
  return (
    <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ECE7E0' }}>
        <button onClick={() => go('home')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
          <Icon name="close" size={22} stroke="#1A1410" strokeWidth={1.8}/>
        </button>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16 }}>Filter your match</span>
        <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#8C8278', fontFamily: "'Outfit',sans-serif", fontSize: 13 }}>Reset</button>
      </div>

      <div style={{ padding: '20px 24px 130px', display: 'flex', flexDirection: 'column', gap: 22, overflowY: 'auto' }}>

        <Section title="Mood" sub="The feeling you're going for">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['Romantic', 'Bold', 'Polished', 'Effortless', 'Playful'].map(m => (
              <Chip key={m} active={f.mood === m} variant="quiet" size="sm" onClick={() => set({ filters: { ...f, mood: m } })}>{m}</Chip>
            ))}
          </div>
        </Section>

        <Section title="Event & vibe">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['Wedding', 'Gala', 'Date night', 'Festival', 'Everyday'].map(m => (
              <Chip key={m} active={f.event === m} variant="coral" size="sm" onClick={() => set({ filters: { ...f, event: m } })}>{m}</Chip>
            ))}
          </div>
        </Section>

        <Section title="Style preferences">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['Princess', 'Minimal', 'Chic', 'Y2K', 'Boho', 'Cottage Core', 'Editorial'].map(m => {
              const active = f.styles.includes(m);
              return (
                <Chip key={m} active={active} variant="lilac" size="sm"
                  onClick={() => set({ filters: { ...f, styles: active ? f.styles.filter(x => x !== m) : [...f.styles, m] } })}>{m}</Chip>
              );
            })}
          </div>
        </Section>

        <Section title="Location" sub="Distance from you">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="pin" size={16} stroke="#8C8278"/>
            <input type="range" min="1" max="50" defaultValue="10" style={{ flex: 1, accentColor: '#EE5A5A' }}/>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#1A1410' }}>10 mi</span>
          </div>
        </Section>

        <Section title="Budget">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8C8278' }}>$50</span>
            <input type="range" min="50" max="2000" defaultValue="400" style={{ flex: 1, accentColor: '#EE5A5A' }}/>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8C8278' }}>$2000+</span>
          </div>
        </Section>

        <Section title="Size & fit preferences">
          <div style={{ display: 'flex', gap: 6 }}>
            {['XS','S','M','L','XL','XXL'].map(s => (
              <Chip key={s} active={f.size === s} variant="quiet" size="sm" onClick={() => set({ filters: { ...f, size: s } })}>{s}</Chip>
            ))}
          </div>
        </Section>

        <Section title="Timeline" sub="When do you need this?">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['This week', '2 weeks', '3 weeks', '1 month+', 'Flexible'].map(m => (
              <Chip key={m} active={f.timeline === m} variant="quiet" size="sm" onClick={() => set({ filters: { ...f, timeline: m } })}>{m}</Chip>
            ))}
          </div>
        </Section>

        <Section title="How open are you?" sub="To stylists' creative direction">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11, color: '#8C8278' }}>Stick to brief</span>
            <input type="range" min="0" max="100" defaultValue="60" style={{ flex: 1, accentColor: '#6B5BD3' }}/>
            <span style={{ fontSize: 11, color: '#8C8278' }}>Surprise me</span>
          </div>
        </Section>
      </div>

      <div style={{ position: 'absolute', bottom: 30, left: 24, right: 24, display: 'flex', gap: 8 }}>
        <Button variant="outline" size="lg" onClick={() => go('home')}>Cancel</Button>
        <Button variant="primary" size="lg" fullWidth onClick={() => go('home')}>Show 8 matches</Button>
      </div>
    </div>
  );
};
const HomeScreen = ({ go }) => {
  const stylists = [
    { name: 'Sophia Laurent', spec: 'Wedding · Occasionwear', rate: '$20/hr', rating: 4.9, photo: '../../assets/photos/model-blazer-coffee.png', tag: 'WEDDING', tagBg: '#E6DFFF', tagFg: '#3F3294' },
    { name: 'Mandy Chen', spec: 'Cottage Core · Vintage', rate: '$24/hr', rating: 4.8, photo: '../../assets/photos/model-sunglasses.png', tag: 'COTTAGE CORE', tagBg: '#FFE0D8', tagFg: '#B22C2C' },
    { name: 'Martha Reyes', spec: 'Boho Chic · Festival', rate: '$18/hr', rating: 4.7, photo: '../../assets/photos/model-selfie-blazer.png', tag: 'BOHO', tagBg: '#E8E2D6', tagFg: '#4A413B' },
  ];
  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', padding: '20px 0 120px' }}>
      <div style={{ padding: '0 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: 12, color: '#8C8278', letterSpacing: '0.04em', margin: 0 }}>Tuesday, May 21</p>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 30, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Hello, Olivia</h1>
        </div>
        <Avatar initials="OM" size={42}/>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ background: '#1A1410', color: '#fff', borderRadius: 18, padding: 18, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'url(../../assets/photos/hero-rack.png) right/cover', opacity: 0.35 }}/>
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>FOR YOU</p>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.15, marginTop: 4, color: '#fff', maxWidth: '70%' }}>3 stylists matched to your style</h2>
            <button onClick={() => go('filter')} style={{ marginTop: 14, background: '#fff', color: '#1A1410', border: 0, borderRadius: 999, padding: '8px 16px', fontFamily: "'Outfit',sans-serif", fontSize: 12.5, fontWeight: 600, cursor: 'pointer' }}>View matches →</button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 }}>
          <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16, color: '#1A1410' }}>Top matches</h3>
          <button onClick={() => go('filter')} style={{ background: 'transparent', border: 0, color: '#6B5BD3', fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Icon name="settings" size={13} stroke="#6B5BD3" strokeWidth={1.8}/> Filter
          </button>
        </div>

        {stylists.map((s, i) => (
          <button key={s.name}
            onClick={() => go('stylist')}
            style={{ textAlign: 'left', background: '#fff', border: '1px solid #ECE7E0', borderRadius: 18, padding: 12, display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer', boxShadow: '0 2px 6px rgba(26,20,16,0.04)' }}>
            <div style={{ width: 64, height: 80, borderRadius: 12, background: `url(${s.photo}) center/cover`, flexShrink: 0 }}/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ background: s.tagBg, color: s.tagFg, fontSize: 9.5, fontWeight: 700, padding: '3px 8px', borderRadius: 999, letterSpacing: '0.12em' }}>{s.tag}</span>
              </div>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, color: '#1A1410' }}>{s.name}</span>
              <span style={{ fontSize: 12, color: '#8C8278' }}>{s.spec}</span>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 2 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, color: '#1A1410', fontWeight: 500 }}>{s.rate}</span>
                <span style={{ fontSize: 11.5, color: '#EE5A5A' }}>★ {s.rating}</span>
              </div>
            </div>
            <Icon name="chevronRight" size={18} stroke="#C7BFB5"/>
          </button>
        ))}
      </div>
    </div>
  );
};

// ---------- 5. STYLIST PROFILE ----------
const StylistScreen = ({ go }) => (
  <div style={{ background: '#FAF7F2', minHeight: '100%', paddingBottom: 130 }}>
    <div style={{ position: 'relative' }}>
      <div style={{ height: 280, background: 'url(../../assets/photos/model-blazer-coffee.png) center/cover' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.55) 100%)' }}/>
      <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => go('home')} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <Icon name="back" size={18} stroke="#1A1410" strokeWidth={2}/>
        </button>
        <button style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <Icon name="bookmark" size={18} stroke="#1A1410" strokeWidth={1.8}/>
        </button>
      </div>
      <div style={{ position: 'absolute', bottom: 18, left: 20, right: 20, color: '#fff' }}>
        <span style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.85 }}>WEDDING STYLIST</span>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 32, color: '#fff', letterSpacing: '-0.01em', marginTop: 4 }}>Sophia Laurent</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>New York · Remote · ★ 4.9 (212 reviews)</p>
      </div>
    </div>

    <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button variant="stylist" size="md" fullWidth onClick={() => go('chat')}>Message</Button>
        <Button variant="outline" size="md" onClick={() => {}}>Book session</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, background: '#fff', borderRadius: 16, padding: 14, border: '1px solid #ECE7E0' }}>
        {[
          { l: 'Rate', v: '$20/hr' },
          { l: 'Experience', v: 'Bloomingdale\'s' },
          { l: 'Response', v: '< 1 hr' },
        ].map((m, i) => (
          <div key={m.l} style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', textAlign: 'center', borderLeft: i ? '1px solid #ECE7E0' : 'none' }}>
            <span style={{ fontSize: 10, color: '#8C8278', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{m.l}</span>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, color: '#1A1410' }}>{m.v}</span>
          </div>
        ))}
      </div>

      <div>
        <p style={{ fontSize: 10.5, color: '#8C8278', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>STYLIST INFORMATION</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            ['Location', 'New York · Remote', 'pin'],
            ['Age', '32', 'user'],
            ['Gender', 'Female (she/her)', 'user'],
            ['Years of experience', '6', 'calendar'],
          ].map(r => (
            <div key={r[0]} style={{ background: '#fff', borderRadius: 12, border: '1px solid #ECE7E0', padding: 12 }}>
              <div style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{r[0]}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1410', marginTop: 4 }}>{r[1]}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: 10.5, color: '#8C8278', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>ABOUT</p>
        <p style={{ fontSize: 14, color: '#4A413B', lineHeight: 1.55 }}>Specializes in occasionwear with a romantic, editorial sensibility — formal weddings, gala nights, and silhouette-driven dressing.</p>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <p style={{ fontSize: 10.5, color: '#8C8278', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>STYLE PORTFOLIO</p>
          <span style={{ fontSize: 12, color: '#8C8278' }}>9 looks</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
          {['model-sunglasses.png','pearl-necklace.jpeg','model-selfie-blazer.png','hero-rack.png','model-blazer-coffee.png','model-sunglasses.png','model-selfie-blazer.png','pearl-necklace.jpeg','hero-rack.png'].map((f, i) => (
            <div key={i} style={{ aspectRatio: '3/4', borderRadius: 8, background: `url(../../assets/photos/${f}) center/cover` }}/>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ---------- 6. CHAT ----------
const ChatScreen = ({ go }) => (
  <div style={{ background: '#FAF7F2', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ background: '#fff', borderBottom: '1px solid #ECE7E0', padding: '8px 16px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <button onClick={() => go('stylist')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
        <Icon name="back" size={22} stroke="#1A1410" strokeWidth={1.8}/>
      </button>
      <Avatar initials="SL" size={36}/>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, color: '#1A1410' }}>Sophia Laurent</div>
        <div style={{ fontSize: 11, color: '#6B5BD3' }}>● Available now</div>
      </div>
      <Icon name="info" size={20} stroke="#8C8278"/>
    </div>

    <div style={{ flex: 1, padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto', paddingBottom: 100 }}>
      <div style={{ textAlign: 'center', fontSize: 11, color: '#8C8278', letterSpacing: '0.06em', marginBottom: 6 }}>Today · 10:42 AM</div>

      <ChatBubble side="out">Hello Sophia! I saw your profile and since my wedding is coming up I was hoping to get styled by you for it!</ChatBubble>
      <ChatBubble side="in">HI! Yes that sounds great as I am currently available. What look are you going for?</ChatBubble>
      <ChatBubble side="out">Perfect! I was hoping for a princess look with a long train and preferably white.</ChatBubble>
      <ChatBubble side="in">I definitely have some ideas that we can discuss. What would be your budget so I can show you some ideas?</ChatBubble>

      <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 16, padding: 14, display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
        <Icon name="paperclip" size={22} stroke="#6B5BD3" strokeWidth={1.8}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1410' }}>Mood board attached</div>
          <div style={{ fontSize: 11, color: '#8C8278' }}>princess-train.jpg · 2 of 4</div>
        </div>
        <Icon name="forward" size={18} stroke="#8C8278"/>
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: 30, left: 16, right: 16, background: '#fff', border: '1px solid #ECE7E0', borderRadius: 999, padding: '8px 8px 8px 18px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 20px rgba(26,20,16,0.06)' }}>
      <Icon name="image" size={20} stroke="#8C8278"/>
      <input placeholder="Message Sophia…" style={{ flex: 1, border: 0, outline: 'none', fontFamily: "'Outfit',sans-serif", fontSize: 14, background: 'transparent' }}/>
      <button onClick={() => go('complete')} style={{ background: '#6B5BD3', border: 0, width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
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

// ---------- 7. SESSION COMPLETE ----------
const CompleteScreen = ({ go }) => (
  <div style={{ background: '#fff', minHeight: '100%', padding: '40px 24px 130px', display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button onClick={() => go('chat')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
        <Icon name="back" size={22}/>
      </button>
      <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15 }}>Session Complete</span>
      <span style={{ width: 22 }}/>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '0 4px' }}>
      <Avatar initials="SL" size={64}/>
      <div>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 18, color: '#1A1410' }}>Sophia Laurent</div>
        <div style={{ fontSize: 13, color: '#8C8278' }}>Personal Stylist</div>
        <div style={{ fontSize: 13, color: '#EE5A5A', marginTop: 2 }}>★ ★ ★ ★ ★ &nbsp;4.9</div>
      </div>
    </div>

    <div style={{ background: '#EE5A5A', color: '#fff', borderRadius: 22, padding: '28px 22px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="check" size={24} stroke="#fff" strokeWidth={2.5}/>
      </div>
      <h2 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 28, marginTop: 14, lineHeight: 1.1 }}>Your styling session is complete</h2>
      <p style={{ fontSize: 13.5, marginTop: 8, opacity: 0.92 }}>We hope you love your new look.</p>
    </div>

    <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 18, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p style={{ fontSize: 10.5, color: '#8C8278', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>SESSION SUMMARY</p>
      {[
        ['Service', 'Event Outfit'],
        ['Date', 'Apr 16, 2026'],
        ['Duration', '1.5 hrs'],
      ].map(r => (
        <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
          <span style={{ color: '#8C8278' }}>{r[0]}</span>
          <span style={{ color: '#1A1410', fontWeight: 500 }}>{r[1]}</span>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, paddingTop: 10, borderTop: '1px solid #ECE7E0' }}>
        <span style={{ fontWeight: 600, color: '#1A1410' }}>Total</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, color: '#1A1410' }}>$129.00</span>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Button variant="primary" size="lg" fullWidth onClick={() => go('review')}>
        <Icon name="starOutline" size={16} stroke="#fff" strokeWidth={2}/>
        Leave a review
      </Button>
      <Button variant="outline" size="md" fullWidth onClick={() => go('home')}>Book again</Button>
    </div>
  </div>
);

// ---------- 8. REVIEW ----------
const ReviewScreen = ({ go, state, set }) => {
  const ratings = state.ratings || { overall: 5, style: 5, comm: 5, value: 4, time: 5, ease: 5 };
  const setR = (k, v) => set({ ratings: { ...ratings, [k]: v } });
  const rows = [
    { k: 'style', label: 'Style Match', icon: 'sparkle' },
    { k: 'comm', label: 'Communication', icon: 'message' },
    { k: 'value', label: 'Value for Money', icon: 'tag' },
    { k: 'time', label: 'Time Saved', icon: 'calendar' },
    { k: 'ease', label: 'Ease of Process', icon: 'check' },
  ];
  return (
    <div style={{ background: '#fff', minHeight: '100%', padding: '24px 24px 120px', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <ScreenHeader onBack={() => go('complete')} title="Leave a Review"/>

      <div style={{ textAlign: 'center', marginTop: -10 }}>
        <p style={{ fontSize: 10.5, color: '#8C8278', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>OVERALL RATING</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
          {[1,2,3,4,5].map(i => (
            <button key={i} onClick={() => setR('overall', i)} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 0 }}>
              <Icon name={i <= ratings.overall ? 'star' : 'starOutline'} size={36} stroke="#EE5A5A" strokeWidth={1.8}/>
            </button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#8C8278', marginTop: 8 }}>Tap a star to rate</p>
      </div>

      <div>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#1A1410', marginBottom: 10 }}>How was your experience?</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {rows.map(r => (
            <div key={r.k} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F4F1FF', display: 'grid', placeItems: 'center' }}>
                <Icon name={r.icon} size={18} stroke="#6B5BD3" strokeWidth={1.8}/>
              </div>
              <span style={{ flex: 1, fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#1A1410' }}>{r.label}</span>
              <div style={{ display: 'flex', gap: 3 }}>
                {[1,2,3,4,5].map(i => (
                  <button key={i} onClick={() => setR(r.k, i)} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 0 }}>
                    <Icon name={i <= ratings[r.k] ? 'star' : 'starOutline'} size={16} stroke="#EE5A5A" strokeWidth={1.8}/>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#1A1410', marginBottom: 10 }}>Write your feedback</p>
        <textarea placeholder="Share your thoughts…"
          style={{ width: '100%', boxSizing: 'border-box', minHeight: 80, padding: 14, border: '1.25px solid #DCD5CB', borderRadius: 14, fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#1A1410', outline: 'none', resize: 'none' }}/>
      </div>

      <Button variant="primary" size="lg" fullWidth onClick={() => go('thank-you')}>Submit Review</Button>
    </div>
  );
};

// ---------- 8b. THANK YOU (+10 points earned) ----------
const ThankYouScreen = ({ go }) => (
  <div style={{ background: '#fff', minHeight: '100%', padding: '40px 24px 130px', display: 'flex', flexDirection: 'column', gap: 22 }}>
    <div style={{ padding: '0 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span/>
      <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16 }}>Thank You!</span>
      <span style={{ width: 22 }}/>
    </div>

    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, position: 'relative' }}>
      {/* Confetti sparkles */}
      <svg width="240" height="20" viewBox="0 0 240 20" style={{ position: 'absolute', top: -20, opacity: 0.7 }}>
        {[[20,8,'#EE5A5A'],[60,4,'#6B5BD3'],[110,12,'#D89A3E'],[160,6,'#EE5A5A'],[200,10,'#6B5BD3'],[220,4,'#D89A3E']].map(([x,y,c], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill={c}/>
        ))}
      </svg>

      <div style={{ width: 100, height: 100, borderRadius: '50%', background: '#6B5BD3', display: 'grid', placeItems: 'center', boxShadow: '0 12px 30px rgba(107,91,211,0.25)' }}>
        <Icon name="check" size={48} stroke="#fff" strokeWidth={2.5}/>
      </div>

      <div style={{ textAlign: 'center', maxWidth: 280 }}>
        <h2 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: '#1A1410', letterSpacing: '-0.01em', lineHeight: 1.1 }}>Thanks for your feedback</h2>
        <p style={{ fontSize: 13.5, color: '#8C8278', marginTop: 10, lineHeight: 1.5 }}>Your review helps us improve future stylist matching for you.</p>
      </div>

      <div style={{ background: '#F4F1FF', border: '1px solid #CDC0FF', borderRadius: 18, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, width: '100%' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <Icon name="starOutline" size={20} stroke="#6B5BD3" strokeWidth={1.8}/>
        </div>
        <div>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, color: '#6B5BD3', fontSize: 15 }}>+10 points earned</div>
          <div style={{ fontSize: 12, color: '#3F3294', marginTop: 1 }}>You now have <strong>120 points</strong></div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Button variant="primary" size="lg" fullWidth onClick={() => go('loyalty')}>View rewards</Button>
      <Button variant="outline" size="md" fullWidth onClick={() => go('home')}>Book again</Button>
    </div>
  </div>
);

// ---------- 9. ACCOUNT ----------
const AccountScreen = ({ go }) => {
  const items = [
    { l: 'Personal Information', icon: 'user' },
    { l: 'Login and security', icon: 'lock' },
    { l: 'Personalisation', icon: 'sparkle' },
    { l: 'Language', icon: 'info' },
    { l: 'Display mode', icon: 'eye' },
    { l: 'My orders', icon: 'tag' },
    { l: 'Saved stylists', icon: 'bookmark' },
    { l: 'Saved shops', icon: 'heart' },
    { l: 'My watchlists', icon: 'star' },
    { l: 'SOURCED Collective', icon: 'crown', accent: true, go: 'loyalty' },
    { l: 'My spending', icon: 'wallet' },
    { l: 'Tell us how we did', icon: 'message', accent: true, go: 'ipa-quiz' },
  ];
  return (
    <div style={{ background: '#fff', minHeight: '100%', padding: '0 0 120px' }}>
      <div style={{ padding: '8px 24px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => go('home')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
          <Icon name="close" size={22} stroke="#EE5A5A" strokeWidth={2}/>
        </button>
        <Icon name="bell" size={20} stroke="#1A1410" strokeWidth={1.7}/>
      </div>
      <div style={{ padding: '0 24px 18px' }}>
        <p style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 32, color: '#1A1410', letterSpacing: '-0.01em' }}>Hello, Olivia</p>
        <p style={{ fontSize: 13, color: '#8C8278', marginTop: 2 }}>Member since April 2026 · Icon tier</p>
      </div>

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

// ---------- 9b. IPA QUIZ ("Tell us how we did" toast → Finalise account → Quiz) ----------
const IPAQuizScreen = ({ go }) => {
  const [step, setStep] = React.useState('toast'); // toast, intro, q1, q2, q3, done
  const [ratings, setRatings] = React.useState({ onboarding: 4, matching: 5, chatbot: 3 });
  const setR = (k, v) => setRatings({ ...ratings, [k]: v });

  if (step === 'toast') {
    return (
      <div style={{ background: 'rgba(74,65,59,0.4)', backdropFilter: 'blur(4px)', minHeight: '100%', position: 'relative' }}>
        {/* Faded account view behind */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.45, pointerEvents: 'none' }}>
          <AccountScreen go={() => {}}/>
        </div>
        <div style={{ position: 'absolute', top: '34%', left: 24, right: 24, background: '#fff', borderRadius: 18, padding: 20, boxShadow: '0 20px 48px rgba(26,20,16,0.18)' }}>
          <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16, color: '#1A1410', margin: 0 }}>Tell us how we did!</h3>
          <p style={{ fontSize: 13, color: '#8C8278', marginTop: 6, lineHeight: 1.5 }}>Your feedback helps us improve your matches and experience on SOURCED.</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <Button variant="outline" size="md" onClick={() => go('account')}>Dismiss</Button>
            <Button variant="primary" size="md" fullWidth onClick={() => setStep('intro')}>Take a quiz</Button>
          </div>
        </div>
      </div>
    );
  }
  if (step === 'intro') {
    return (
      <div style={{ background: '#fff', minHeight: '100%', padding: '24px 24px 130px', display: 'flex', flexDirection: 'column' }}>
        <ScreenHeader onBack={() => setStep('toast')}/>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: 40, gap: 16 }}>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: '#1A1410', letterSpacing: '-0.01em', lineHeight: 1.05 }}>Finalise your account</h1>
          <p style={{ fontSize: 14, color: '#4A413B', lineHeight: 1.6, maxWidth: 290 }}>Help us improve your SOURCED experience. This quick survey takes less than 1 minute and helps us better understand you as a customer!</p>
        </div>
        <Button variant="primary" size="lg" fullWidth onClick={() => setStep('q1')}>Take a quiz</Button>
        <p style={{ fontSize: 11, color: '#8C8278', textAlign: 'center', marginTop: 18, lineHeight: 1.5 }}>This quiz is 100% confidential.<br/>We do not collect any personal data.<br/><br/>After completion of this survey, you will be eligible to receive a voucher for <strong style={{ color: '#6B5BD3' }}>+30 points</strong> on your SOURCED Collective account!</p>
      </div>
    );
  }
  if (step === 'done') {
    return (
      <div style={{ background: '#fff', minHeight: '100%', padding: '40px 24px 130px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18 }}>
        <div style={{ marginTop: 60, width: 84, height: 84, borderRadius: '50%', background: '#EE5A5A', display: 'grid', placeItems: 'center' }}>
          <Icon name="check" size={40} stroke="#fff" strokeWidth={3}/>
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: '#1A1410', letterSpacing: '-0.01em' }}>Thank you!</h1>
        <p style={{ fontSize: 14, color: '#8C8278', maxWidth: 280, lineHeight: 1.5 }}>Your responses help us tailor SOURCED to you. You've earned <strong style={{ color: '#6B5BD3' }}>+30 points</strong>.</p>
        <Button variant="primary" size="lg" fullWidth onClick={() => go('loyalty')} style={{ marginTop: 'auto' }}>View my rewards</Button>
      </div>
    );
  }

  // q1, q2, q3 — IPA "rate 1-5 hearts"
  const questions = {
    q1: { num: 1, total: 3, label: 'Sign-up process', key: 'onboarding', sub: 'Was creating your account easy?' },
    q2: { num: 2, total: 3, label: 'Stylist matching filter', key: 'matching', sub: 'How well did matches fit you?' },
    q3: { num: 3, total: 3, label: 'Chatbot helpfulness', key: 'chatbot', sub: 'Was SOURCED Chat useful?' },
  };
  const q = questions[step];
  const nextStep = step === 'q1' ? 'q2' : step === 'q2' ? 'q3' : 'done';
  const prevStep = step === 'q1' ? 'intro' : step === 'q2' ? 'q1' : 'q2';

  return (
    <div style={{ background: '#fff', minHeight: '100%', padding: '24px 24px 130px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <ScreenHeader onBack={() => setStep(prevStep)}/>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>QUESTION {q.num} OF {q.total}</div>
        <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
          {[1,2,3].map(i => <div key={i} style={{ flex: 1, height: 4, borderRadius: 999, background: i <= q.num ? '#EE5A5A' : '#ECE7E0' }}/>)}
        </div>
      </div>
      <div>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 30, color: '#1A1410', letterSpacing: '-0.01em', lineHeight: 1.1 }}>How would you rate the {q.label.toLowerCase()}?</h1>
        <p style={{ fontSize: 14, color: '#8C8278', marginTop: 8 }}>{q.sub}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
        {[1,2,3,4,5].map(i => (
          <button key={i} onClick={() => setR(q.key, i)} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill={i <= ratings[q.key] ? '#EE5A5A' : 'none'} stroke="#EE5A5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        ))}
      </div>
      <p style={{ fontSize: 12, color: '#8C8278', textAlign: 'center' }}>Tap a heart to rate</p>
      <Button variant="primary" size="lg" fullWidth onClick={() => setStep(nextStep)} style={{ marginTop: 'auto' }}>
        {step === 'q3' ? 'Submit' : 'Continue'}
      </Button>
    </div>
  );
};
const LoyaltyScreen = ({ go }) => (
  <div style={{ background: '#FAF7F2', minHeight: '100%', paddingBottom: 130 }}>
    <ScreenHeader onBack={() => go('account')} title=""/>
    <div style={{ padding: '0 24px 18px', textAlign: 'center' }}>
      <p style={{ fontSize: 10.5, color: '#8C8278', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>SOURCED COLLECTIVE</p>
      <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 30, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Your rewards</h1>
    </div>

    <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ background: '#6B5BD3', color: '#fff', borderRadius: 22, padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85, fontWeight: 600 }}>POINTS AVAILABLE</span>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 500, fontSize: 44, marginTop: 4 }}>120</div>
          </div>
          <Icon name="trophy" size={36} stroke="#fff" strokeWidth={1.4}/>
        </div>
        <div style={{ marginTop: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Icon member</span>
            <span style={{ fontSize: 11, opacity: 0.85 }}>180 pts to Editorial</span>
          </div>
          <div style={{ height: 6, background: 'rgba(255,255,255,0.25)', borderRadius: 999 }}>
            <div style={{ width: '40%', height: '100%', background: '#fff', borderRadius: 999 }}/>
          </div>
        </div>
      </div>

      <div>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410', marginBottom: 8 }}>Your benefits</p>
        <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 18 }}>
          {[
            { i: 'tag', l: '10% off next booking', s: 'Use your points to get a discount on your next session.' },
            { i: 'sparkle', l: 'Priority stylist matching', s: 'Get matched with top stylists first.' },
            { i: 'gift', l: 'Free mini consultation', s: 'Unlock a free 15-min consultation after 3 bookings.' },
          ].map((b, i) => (
            <div key={b.l} style={{ padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start', borderBottom: i < 2 ? '1px solid #ECE7E0' : 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F4F1FF', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Icon name={b.i} size={18} stroke="#6B5BD3" strokeWidth={1.8}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410' }}>{b.l}</div>
                <div style={{ fontSize: 12, color: '#8C8278', marginTop: 2 }}>{b.s}</div>
              </div>
              <Icon name="chevronRight" size={16} stroke="#C7BFB5"/>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410', marginBottom: 8 }}>Earn more points</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { l: 'Book a stylist', v: '+100' },
            { l: 'Leave a review', v: '+30' },
            { l: 'Refer a friend', v: '+500' },
            { l: 'Per €1 spent', v: '+1' },
          ].map(e => (
            <div key={e.l} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: '12px 14px' }}>
              <div style={{ fontSize: 12, color: '#8C8278' }}>{e.l}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, color: '#6B5BD3', fontWeight: 500, marginTop: 2 }}>{e.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          { l: 'Tiers', i: 'crown', go: 'tier-compare' },
          { l: 'Invite', i: 'gift', go: 'invite' },
          { l: 'History', i: 'clock', go: 'points-history' },
        ].map(a => (
          <button key={a.l} onClick={() => go(a.go)} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: '14px 8px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <Icon name={a.i} size={18} stroke="#6B5BD3" strokeWidth={1.6}/>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, color: '#1A1410' }}>{a.l}</span>
          </button>
        ))}
      </div>

      {/* Recommended for you */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410' }}>Recommended for you</p>
          <button style={{ background: 'transparent', border: 0, color: '#8C8278', fontFamily: "'Outfit',sans-serif", fontSize: 12, cursor: 'pointer' }}>See all</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { l: 'Stylists Near You', img: 'model-sunglasses.png' },
            { l: 'Black-Tie Outfits',  img: 'pearl-necklace.jpeg' },
            { l: 'Elegant Styles',      img: 'model-blazer-coffee.png' },
          ].map(r => (
            <div key={r.l} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 12, padding: 6, cursor: 'pointer' }}>
              <div style={{ aspectRatio: '1', borderRadius: 8, background: `url(../../assets/photos/${r.img}) center/cover`, marginBottom: 6 }}/>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#1A1410', textAlign: 'center', lineHeight: 1.2 }}>{r.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ---------- 10b. TIER COMPARISON ----------
const TierCompareScreen = ({ go }) => {
  const tiers = [
    { name: 'Insider', rom: 'i', req: '1 purchase / 12 months', perks: ['Birthday discount — 5%', 'Style magazine access'], bg: '#F2EEE6', fg: '#1A1410', current: false },
    { name: 'Icon',     rom: 'ii', req: '1 purchase / month',     perks: ['Birthday discount — 15%', 'Annual mystery box', 'Style magazine access'], bg: '#E6DFFF', fg: '#3F3294', current: true },
    { name: 'Editorial',rom: 'iii', req: '$10,000+ annual spend',  perks: ['Birthday discount — 25%', 'Annual mystery box', '1 free styling session', 'Priority styling'], bg: '#1A1410', fg: '#E8D9B6', current: false },
  ];
  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', paddingBottom: 130 }}>
      <ScreenHeader onBack={() => go('loyalty')} title="Membership tiers"/>
      <div style={{ padding: '0 24px 12px', textAlign: 'center' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>SOURCED COLLECTIVE</p>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 30, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Compare tiers</h1>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {tiers.map(t => (
          <div key={t.name} style={{ background: t.bg, color: t.fg, borderRadius: 16, padding: 18, border: t.current ? '2px solid #6B5BD3' : '1px solid ' + (t.name === 'Editorial' ? '#1A1410' : '#DCD5CB'), position: 'relative' }}>
            {t.current && <span style={{ position: 'absolute', top: -10, right: 16, background: '#6B5BD3', color: '#fff', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', padding: '4px 10px', borderRadius: 999 }}>YOUR TIER</span>}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 28, lineHeight: 1, color: t.fg }}>{t.name}</div>
              <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', opacity: 0.6, fontSize: 18 }}>{t.rom}</span>
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75, fontWeight: 600, marginBottom: 10 }}>REQUIREMENTS</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 12 }}>{t.req}</div>
            <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75, fontWeight: 600, marginBottom: 10 }}>PERKS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {t.perks.map(p => (
                <div key={p} style={{ display: 'flex', gap: 8, fontSize: 13, opacity: 0.92 }}>
                  <Icon name="check" size={14} stroke={t.fg} strokeWidth={2}/>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- 10c. INVITE A FRIEND ----------
const InviteFriendScreen = ({ go }) => (
  <div style={{ background: '#FAF7F2', minHeight: '100%', paddingBottom: 130 }}>
    <ScreenHeader onBack={() => go('loyalty')} title=""/>
    <div style={{ padding: '0 24px 12px', textAlign: 'center' }}>
      <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>EARN +500 POINTS</p>
      <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 30, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Invite a friend</h1>
    </div>

    <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', padding: '20px 0' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'url(../../assets/photos/model-sunglasses.png) center/cover', border: '2px solid #fff', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}/>
        <div style={{ display: 'flex', alignItems: 'center', color: '#6B5BD3' }}>
          <Icon name="arrowRight" size={20} stroke="#6B5BD3" strokeWidth={1.8}/>
        </div>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#F4F1FF', border: '2px dashed #CDC0FF', display: 'grid', placeItems: 'center', color: '#6B5BD3' }}>
          <Icon name="plus" size={20} stroke="#6B5BD3" strokeWidth={1.8}/>
        </div>
      </div>
      <p style={{ fontSize: 13.5, color: '#4A413B', textAlign: 'center', lineHeight: 1.55, maxWidth: 280, margin: '0 auto' }}>Share your personal link. When a friend signs up and completes their first booking, you both earn 500 points.</p>

      <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 14, marginTop: 8 }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>YOUR LINK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, color: '#1A1410', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>sourced.co/r/olivia-m</span>
          <button style={{ background: '#1A1410', color: '#fff', border: 0, borderRadius: 999, padding: '7px 14px', fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Copy</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 8 }}>
        {[
          { l: 'Message', i: 'message', bg: '#E6DFFF', fg: '#6B5BD3' },
          { l: 'Email',   i: 'paperclip',  bg: '#FFE0D8', fg: '#B22C2C' },
          { l: 'Instagram', i: 'image', bg: '#F2EEE6', fg: '#1A1410' },
          { l: 'More',    i: 'plus',  bg: '#ECE7E0', fg: '#4A413B' },
        ].map(b => (
          <button key={b.l} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 12, padding: '14px 6px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: b.bg, display: 'grid', placeItems: 'center' }}>
              <Icon name={b.i} size={16} stroke={b.fg} strokeWidth={1.8}/>
            </div>
            <span style={{ fontSize: 10.5, fontWeight: 600, color: '#1A1410' }}>{b.l}</span>
          </button>
        ))}
      </div>

      <div style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 14, marginTop: 4 }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, marginBottom: 10 }}>YOUR INVITES</div>
        {[
          { n: 'Hannah Y.', s: 'Signed up · pending first booking', dot: '#D89A3E' },
          { n: 'Maya R.',   s: 'Completed · +500 points',           dot: '#4B8B5A' },
        ].map(inv => (
          <div key={inv.n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: '1px solid #ECE7E0' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: inv.dot }}/>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1A1410', flex: 1 }}>{inv.n}</span>
            <span style={{ fontSize: 11, color: '#8C8278' }}>{inv.s}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ---------- 10d. POINTS HISTORY ----------
const PointsHistoryScreen = ({ go }) => {
  const history = [
    { d: 'May 18', l: 'Review for Sophia Laurent', v: +10, t: 'review' },
    { d: 'May 16', l: 'Wedding session · Sophia',  v: +100, t: 'booking' },
    { d: 'May 16', l: 'Spent $129',                 v: +129, t: 'spend' },
    { d: 'May 02', l: 'Completed style quiz',       v: +50,  t: 'profile' },
    { d: 'Apr 28', l: 'Invited Hannah Y.',         v: +500, t: 'referral' },
    { d: 'Apr 16', l: 'Redeemed — $10 credit',     v: -1000, t: 'redeem' },
    { d: 'Apr 12', l: 'Birthday bonus',             v: +50, t: 'bonus' },
  ];
  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', paddingBottom: 130 }}>
      <ScreenHeader onBack={() => go('loyalty')} title=""/>
      <div style={{ padding: '0 24px 18px', textAlign: 'center' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>SOURCED COLLECTIVE</p>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 30, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Your points history</h1>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', gap: 8, marginBottom: 14 }}>
        {['All', 'Earned', 'Spent'].map((p, i) => (
          <Chip key={p} active={i === 0} variant="quiet" size="sm">{p}</Chip>
        ))}
      </div>

      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column' }}>
        {history.map((h, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderBottom: '1px solid #ECE7E0' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: h.v > 0 ? '#F4F1FF' : '#FFE0D8', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
              <Icon name={h.t === 'review' ? 'starOutline' : h.t === 'booking' ? 'calendar' : h.t === 'spend' ? 'tag' : h.t === 'profile' ? 'sparkle' : h.t === 'referral' ? 'gift' : h.t === 'redeem' ? 'wallet' : 'crown'} size={16} stroke={h.v > 0 ? '#6B5BD3' : '#EE5A5A'} strokeWidth={1.7}/>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500, color: '#1A1410' }}>{h.l}</div>
              <div style={{ fontSize: 11, color: '#8C8278' }}>{h.d}</div>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 600, color: h.v > 0 ? '#4B8B5A' : '#C24545' }}>{h.v > 0 ? '+' : ''}{h.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- BOOKINGS (calendar nav) ----------
const BookingsScreen = ({ go }) => {
  const [tab, setTab] = React.useState('upcoming');
  const upcoming = [
    { stylist: 'Sophia Laurent', type: 'Wedding styling', date: 'Jun 12 · 10:00 AM', where: 'Bergdorf · Studio 3', status: 'confirmed', img: '../../assets/photos/model-blazer-coffee.png' },
    { stylist: 'Martha Reyes',   type: 'Casual refresh',  date: 'Jun 24 · 2:30 PM',  where: 'Video call',         status: 'pending',   img: '../../assets/photos/model-selfie-blazer.png' },
  ];
  const past = [
    { stylist: 'Sophia Laurent', type: 'Event outfit',    date: 'Apr 16',  where: 'Bergdorf · Studio 3', status: 'complete', rating: 5, img: '../../assets/photos/model-blazer-coffee.png' },
    { stylist: 'Mandy Chen',     type: 'Wardrobe refresh',date: 'Feb 28',  where: 'Video call',          status: 'complete', rating: 4, img: '../../assets/photos/model-sunglasses.png' },
  ];
  const items = tab === 'upcoming' ? upcoming : past;
  const statusColor = { confirmed: { bg: '#E8F5EC', fg: '#4B8B5A' }, pending: { bg: '#FFF5E6', fg: '#D89A3E' }, complete: { bg: '#F2EEE6', fg: '#8C8278' } };
  return (
    <div style={{ background: '#FAF7F2', minHeight: '100%', padding: '20px 0 120px' }}>
      <div style={{ padding: '0 24px 16px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, margin: 0 }}>MY SESSIONS</p>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 30, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Bookings</h1>
        </div>
        <button onClick={() => go('home')} style={{ width: 36, height: 36, borderRadius: '50%', background: '#EE5A5A', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <Icon name="plus" size={18} stroke="#fff" strokeWidth={2}/>
        </button>
      </div>

      <div style={{ padding: '0 24px 16px', display: 'flex', gap: 6 }}>
        <Chip active={tab === 'upcoming'} variant="coral" size="sm" onClick={() => setTab('upcoming')}>Upcoming</Chip>
        <Chip active={tab === 'past'} variant="quiet" size="sm" onClick={() => setTab('past')}>Past</Chip>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((b, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #ECE7E0', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 12, padding: 14, alignItems: 'center' }}>
              <div style={{ width: 52, height: 64, borderRadius: 10, background: `url(${b.img}) center/cover`, flexShrink: 0 }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14.5, color: '#1A1410' }}>{b.stylist}</div>
                <div style={{ fontSize: 12.5, color: '#6B5BD3', marginTop: 2 }}>{b.type}</div>
                <div style={{ fontSize: 12, color: '#8C8278', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icon name="calendar" size={11} stroke="#8C8278"/> {b.date}
                </div>
                <div style={{ fontSize: 12, color: '#8C8278' }}>{b.where}</div>
              </div>
              <span style={{
                fontSize: 9.5, fontWeight: 700, padding: '4px 9px', borderRadius: 999,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: statusColor[b.status].bg, color: statusColor[b.status].fg,
              }}>{b.status}</span>
            </div>
            {tab === 'upcoming' && (
              <div style={{ borderTop: '1px solid #ECE7E0', display: 'flex', gap: 8, padding: '10px 14px' }}>
                <Button variant="soft" size="sm" onClick={() => go('chat')}>Message</Button>
                <Button variant="ghost" size="sm" style={{ color: '#C24545' }}>Cancel</Button>
              </div>
            )}
            {tab === 'past' && b.rating && (
              <div style={{ borderTop: '1px solid #ECE7E0', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(s => <Icon key={s} name={s <= b.rating ? 'star' : 'starOutline'} size={14} stroke="#EE5A5A" strokeWidth={1.5}/>)}
                </div>
                <Button variant="soft" size="sm" onClick={() => go('home')}>Book again</Button>
              </div>
            )}
          </div>
        ))}

        {tab === 'upcoming' && (
          <button onClick={() => go('home')} style={{ background: 'transparent', border: '1.5px dashed #DCD5CB', borderRadius: 16, padding: '20px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#8C8278', fontFamily: "'Outfit',sans-serif", fontSize: 14 }}>
            <Icon name="plus" size={18} stroke="#8C8278" strokeWidth={1.6}/>
            Book a new session
          </button>
        )}
      </div>
    </div>
  );
};

// ---------- STYLIST REDIRECT (role select → stylist) ----------
const StylistAppScreen = ({ go }) => (
  <div style={{ background: '#6B5BD3', minHeight: '100%', padding: '60px 28px 120px', display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', textAlign: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 20 }}>
      <Logo size={52} color="#fff"/>
      <WordmarkCaps size={11} color="rgba(255,255,255,0.7)"/>
      <span style={{ fontSize: 9.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>FOR STYLISTS</span>
    </div>
    <div>
      <h1 style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 34, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.1 }}>You're a stylist!</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginTop: 10 }}>Great news — Sourced has a dedicated app for stylists. Manage clients, bookings, earnings, and your brand from the stylist workspace.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
      <a href="../shopper-mobile/index.html"
         style={{ display: 'block', background: '#fff', color: '#6B5BD3', borderRadius: 999, padding: '16px 24px', fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
        Open Stylist App →
      </a>
      <button onClick={() => go('role')} style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 999, padding: '14px 24px', color: 'rgba(255,255,255,0.75)', fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
        ← Back to role select
      </button>
    </div>
    <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 16, width: '100%', marginTop: 8 }}>
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>STYLIST APP INCLUDES</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {['Client roster & management', 'Calendar & scheduling', 'In-app messaging & contracts', 'Finance tracker & invoices', 'Profile & portfolio builder'].map(f => (
          <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
            <Icon name="check" size={13} stroke="rgba(255,255,255,0.7)" strokeWidth={2}/>
            {f}
          </div>
        ))}
      </div>
    </div>
  </div>
);

Object.assign(window, {
  SignInScreen, SignUpScreen, RoleSelectScreen, QuizScreen, ProfileSetupScreen, ProfileDetailScreen,
  HomeScreen, MessagesListScreen, FilterScreen, BookingsScreen, StylistAppScreen,
  StylistScreen, ChatScreen, CompleteScreen, ReviewScreen, ThankYouScreen,
  AccountScreen, IPAQuizScreen, LoyaltyScreen, TierCompareScreen, InviteFriendScreen, PointsHistoryScreen,
  ChatBubble,
});
