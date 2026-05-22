// Sourced — shared auth flow. Sign in → Sign up → Role select.
// After role select, the client and stylist onboarding diverge.

// ============================================================
// SIGN IN — shared
// ============================================================
const SignInScreen = ({ go, state, set }) => (
  <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ padding: '32px 28px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <Logo size={48} tilt={true}/>
      <Wordmark size={22}/>
    </div>

    <div style={{ padding: '12px 28px 0' }}>
      <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 26, fontWeight: 600, color: '#1A1410', margin: 0, letterSpacing: '-0.01em' }}>Sign in</h1>
      <p style={{ fontSize: 13, color: '#8C8278', marginTop: 4 }}>Hi there! Nice to see you again.</p>
    </div>

    <div style={{ padding: '22px 28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input label="Email" labelColor="#EE5A5A" placeholder="example@email.com" value="" onChange={()=>{}}/>
      <Input label="Password" labelColor="#EE5A5A" type="password" placeholder="••••••••••" value="" onChange={()=>{}}/>
      <div style={{ marginTop: 6 }}>
        <Button variant="ink" size="md" fullWidth onClick={() => go(state.role === 'stylist' ? 'stylist-home' : 'home')}>Sign in</Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#8C8278', fontSize: 12, margin: '6px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#ECE7E0' }}/>
        <span>or use one of your social profiles</span>
        <div style={{ flex: 1, height: 1, background: '#ECE7E0' }}/>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 14px', borderRadius: 12, border: '1px solid #DCD5CB', background: '#fff', cursor: 'pointer', fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, color: '#1A1410' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1D9BF0"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          X / Twitter
        </button>
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 14px', borderRadius: 12, border: '1px solid #DCD5CB', background: '#fff', cursor: 'pointer', fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, color: '#1A1410' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Facebook
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <button style={{ background: 'transparent', border: 0, color: '#8C8278', fontFamily: "'Outfit',sans-serif", fontSize: 13, cursor: 'pointer' }}>Forgot Password?</button>
        <button onClick={() => go('sign-up')} style={{ background: 'transparent', border: 0, color: '#EE5A5A', fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Sign Up</button>
      </div>
    </div>
  </div>
);

// ============================================================
// SIGN UP — shared, then routes to role select
// ============================================================
const SignUpScreen = ({ go }) => {
  const [agree, setAgree] = React.useState(false);
  return (
    <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 20px 0' }}>
        <button onClick={() => go('sign-in')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
          <Icon name="back" size={22} stroke="#1A1410" strokeWidth={1.8}/>
        </button>
      </div>

      <div style={{ padding: '8px 28px 0' }}>
        <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 28, fontWeight: 600, color: '#1A1410', margin: 0, letterSpacing: '-0.01em' }}>Sign Up</h1>
      </div>

      <div style={{ padding: '22px 28px 30px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Input label="Email" labelColor="#EE5A5A" placeholder="Your email address" value="" onChange={()=>{}}/>
        <Input label="Password" labelColor="#EE5A5A" type="password" placeholder="Your password" value="" onChange={()=>{}}/>

        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', marginTop: 4 }}>
          <span onClick={() => setAgree(!agree)} style={{
            width: 18, height: 18, borderRadius: 4, border: '1.5px solid ' + (agree ? '#EE5A5A' : '#DCD5CB'),
            background: agree ? '#EE5A5A' : '#fff', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 1,
          }}>
            {agree && <Icon name="check" size={12} stroke="#fff" strokeWidth={3}/>}
          </span>
          <span style={{ fontSize: 12.5, color: '#4A413B', lineHeight: 1.5 }}>
            I agree to the <a style={{ color: '#EE5A5A', textDecoration: 'underline' }}>Terms of Services</a> and <a style={{ color: '#EE5A5A', textDecoration: 'underline' }}>Privacy Policy</a>
          </span>
        </label>

        <div style={{ marginTop: 12 }}>
          <Button variant="ink" size="md" fullWidth disabled={!agree} onClick={() => go('role')}>Continue</Button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 8, color: '#8C8278', fontSize: 13 }}>
          Have an Account? <button onClick={() => go('sign-in')} style={{ background: 'transparent', border: 0, color: '#EE5A5A', fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: 0 }}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// ROLE SELECT — the divergence point. CLIENT or STYLIST.
// ============================================================
const RoleSelectScreen = ({ go, state, set }) => (
  <div style={{ background: '#F2EEE6', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ padding: '12px 20px 0' }}>
      <button onClick={() => go('sign-up')} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: 4 }}>
        <Icon name="back" size={22} stroke="#1A1410" strokeWidth={1.8}/>
      </button>
    </div>

    <div style={{ padding: '20px 28px 12px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 26, fontWeight: 600, color: '#1A1410', margin: 0 }}>Who are you?</h1>
      <p style={{ fontSize: 13, color: '#8C8278', marginTop: 6 }}>This decides what your app looks like next.</p>
    </div>

    <div style={{ padding: '16px 24px 0', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
      {[
        { k: 'client',  label: 'CLIENT',  blurb: 'I want a stylist to dress me for an event or refresh my wardrobe.', color: '#EE5A5A', soft: '#FFE0D8', img: 'model-sunglasses.png' },
        { k: 'stylist', label: 'STYLIST', blurb: 'I am a personal shopper or stylist looking for new clients.', color: '#6B5BD3', soft: '#E6DFFF', img: 'model-blazer-coffee.png' },
      ].map(opt => (
        <button key={opt.k}
          onClick={() => {
            set({ role: opt.k });
            go(opt.k === 'client' ? 'quiz' : 'stylist-setup');
          }}
          style={{
            background: '#fff', border: '1.5px solid #DCD5CB', borderRadius: 22,
            padding: 22, display: 'flex', alignItems: 'center', gap: 18,
            cursor: 'pointer', textAlign: 'left', flex: 1,
            transition: 'transform 140ms, box-shadow 140ms',
          }}>
          <div style={{
            width: 80, height: 80, borderRadius: 16, flexShrink: 0,
            background: `url(../../assets/photos/${opt.img}) center/cover`,
          }}/>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: '0.08em',
              color: opt.color, marginBottom: 6,
            }}>{opt.label}</div>
            <div style={{ fontSize: 13, color: '#4A413B', lineHeight: 1.4 }}>{opt.blurb}</div>
          </div>
          <Icon name="chevronRight" size={20} stroke="#8C8278"/>
        </button>
      ))}
    </div>

    <div style={{ padding: '16px 24px 26px', textAlign: 'center' }}>
      <button style={{
        background: '#fff', border: '1px solid #DCD5CB', borderRadius: 999,
        padding: '8px 18px', fontFamily: "'Outfit',sans-serif", fontSize: 12,
        color: '#4A413B', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
      }}>
        <Icon name="sparkle" size={14} stroke="#6B5BD3" strokeWidth={1.6}/>
        SOURCED CHAT
      </button>
    </div>
  </div>
);

Object.assign(window, { SignInScreen, SignUpScreen, RoleSelectScreen });
