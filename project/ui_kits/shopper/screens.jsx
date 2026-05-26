// Shopper / stylist desktop screens
// Tabs: Creation Page · Payments · Calendar · Client Contact · Messages · Profile

// ============ CREATION PAGE (dashboard) ============
const CreationScreen = () => {
  const todos = [
    { l: 'Plan it out', done: true },
    { l: 'Break it down', done: false },
    { l: 'Get it done', done: false },
    { l: 'Cross it off', done: false },
    { l: 'Feel great', done: false },
    { l: 'Celebrate', done: false },
  ];
  const clients = [
    { name: 'Olivia Martinez', evt: 'Black-tie wedding', date: 'Apr 16', img: '../../assets/photos/model-sunglasses.png' },
    { name: 'Amelia Park',     evt: 'Gala styling',      date: 'Apr 22', img: '../../assets/photos/model-selfie-blazer.png' },
    { name: 'Sienna Lowe',     evt: 'Wardrobe refresh',  date: 'May 02', img: '../../assets/photos/pearl-necklace.jpeg' },
  ];
  const stars = 3; // rating out of 5 — matches wireframe (3 filled)
  return (
    <div style={{ padding: 28 }}>
      {/* Welcome */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>TUESDAY · MAY 21</div>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4, lineHeight: 1.05, whiteSpace: 'nowrap' }}>Good morning, Sophia</h1>
          <p style={{ color: '#8C8278', fontSize: 13, marginTop: 4 }}>3 new inquiries · 2 contracts pending review</p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <Button variant="outline" size="md" leftIcon="plus">New event</Button>
          <Button variant="primary" size="md" leftIcon="sparkle">Ask AI</Button>
        </div>
      </div>

      {/* Main 3-column layout — left rail / map / to-do (matches wireframe) */}
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 280px', gap: 16, alignItems: 'start' }}>

        {/* LEFT RAIL — rating, phone preview (match graph), app statistics, AI assistant */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Rating */}
          <Card>
            <SectionTitle eyebrow="YOUR RATING">Client satisfaction</SectionTitle>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {[1,2,3,4,5].map(i => (
                <Icon key={i} name={i <= stars ? 'star' : 'starOutline'} size={26} stroke={i <= stars ? '#1A1410' : '#C7BFB5'} strokeWidth={1.4}/>
              ))}
              <span style={{ marginLeft: 6, fontFamily: "'JetBrains Mono',monospace", fontSize: 15, color: '#1A1410', fontWeight: 500 }}>3.0</span>
            </div>
            <p style={{ fontSize: 11.5, color: '#8C8278', marginTop: 8, lineHeight: 1.4 }}>Across 212 reviews · trending up this month.</p>
          </Card>

          {/* Phone preview — match network graph + 3|6 stat */}
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '16px 18px 0' }}>
              <SectionTitle eyebrow="LIVE MATCHES">Your app preview</SectionTitle>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 18px 18px' }}>
              <div style={{ width: 150, height: 230, borderRadius: 22, border: '6px solid #1A1410', background: '#FAF7F2', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 40, height: 4, borderRadius: 999, background: '#1A1410' }}/>
                {/* match network graph */}
                <svg viewBox="0 0 150 230" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <path d="M40 60 Q 75 90 110 70 M40 60 Q 60 120 95 140 M110 70 Q 90 130 95 140 M95 140 Q 60 160 50 190 M110 70 Q 130 130 105 185" stroke="#4B8B5A" strokeWidth="1.5" fill="none" opacity="0.5"/>
                  {[[40,60],[110,70],[95,140],[50,190],[105,185],[70,110]].map(([x,y], i) => (
                    <circle key={i} cx={x} cy={y} r="6" fill="#4B8B5A"/>
                  ))}
                </svg>
                {/* 3 | 6 stat badge */}
                <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 8, background: '#fff', borderRadius: 999, padding: '6px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: '#4B8B5A' }}>3</span>
                  <span style={{ fontSize: 11, color: '#C7BFB5' }}>|</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: '#1A1410' }}>6</span>
                </div>
              </div>
            </div>
          </Card>

          {/* App statistics */}
          <Card>
            <SectionTitle eyebrow="APP STATISTICS">This week</SectionTitle>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 70, marginBottom: 10 }}>
              {[10, 14, 9, 18, 22, 16, 24].map((v, i) => (
                <div key={i} style={{ flex: 1, height: `${(v/24)*100}%`, background: i === 6 ? '#6B5BD3' : '#CDC0FF', borderRadius: '3px 3px 0 0' }}/>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[['Profile views', '1.2k'], ['Response rate', '98%'], ['Hours online', '34h'], ['Avg reply', '12m']].map(s => (
                <div key={s[0]}>
                  <div style={{ fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{s[0]}</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: '#1A1410', marginTop: 1 }}>{s[1]}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* AI assistant */}
          <Card style={{ background: 'linear-gradient(180deg, #F4F1FF 0%, #fff 60%)', borderColor: '#CDC0FF' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: '#fff', display: 'grid', placeItems: 'center', border: '1px solid #CDC0FF', flexShrink: 0 }}>
                <Icon name="sparkle" size={16} stroke="#6B5BD3" strokeWidth={1.6}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13, color: '#1A1410' }}>AI assistant</div>
                <div style={{ fontSize: 11.5, color: '#8C8278', marginTop: 2, lineHeight: 1.4 }}>Drafted a 5-item shortlist for Olivia's wedding look from Bergdorf + Saks.</div>
                <button style={{ background: 'transparent', border: 0, color: '#6B5BD3', fontSize: 11.5, fontWeight: 600, padding: 0, marginTop: 8, cursor: 'pointer' }}>Review shortlist →</button>
              </div>
            </div>
          </Card>
        </div>

        {/* CENTER — shops map */}
        <Card style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px 0' }}>
            <SectionTitle eyebrow="DISTRIBUTION" action={<Button variant="ghost" size="sm">Open map</Button>}>Shops near your clients</SectionTitle>
          </div>
          <div style={{ position: 'relative', height: 460, background: 'linear-gradient(135deg, #F2EEE6 0%, #E8E2D6 60%, #DCD5CB 100%)' }}>
            <svg viewBox="0 0 600 460" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}>
              {Array.from({length: 12}).map((_, i) => <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="460" stroke="#fff" strokeWidth="1.5"/>)}
              {Array.from({length: 10}).map((_, i) => <line key={`h${i}`} x1="0" y1={i*46} x2="600" y2={i*46} stroke="#fff" strokeWidth="1.5"/>)}
              <path d="M0 230 Q 150 120 300 210 T 600 180" stroke="#C7BFB5" strokeWidth="6" fill="none"/>
              <path d="M180 0 Q 200 180 240 250 T 280 460" stroke="#C7BFB5" strokeWidth="6" fill="none"/>
            </svg>
            {[
              { l: '32%', t: '32%', label: 'Bergdorf' },
              { l: '58%', t: '54%', label: 'Bloomingdale\'s' },
              { l: '72%', t: '28%', label: 'The Webster' },
              { l: '22%', t: '68%', label: 'Saks' },
            ].map((p, i) => (
              <div key={i} style={{ position: 'absolute', left: p.l, top: p.t, transform: 'translate(-50%, -100%)' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50% 50% 50% 0', background: '#EE5A5A', transform: 'rotate(-45deg)', display: 'grid', placeItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>
                  <div style={{ width: 11, height: 11, background: '#fff', borderRadius: '50%', transform: 'rotate(45deg)' }}/>
                </div>
                <div style={{ background: '#fff', padding: '4px 8px', borderRadius: 8, fontSize: 10.5, fontWeight: 600, color: '#1A1410', marginTop: 4, boxShadow: '0 2px 6px rgba(0,0,0,0.06)', whiteSpace: 'nowrap' }}>{p.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* RIGHT — To-do list */}
        <Card>
          <SectionTitle eyebrow="PROJECT" action={<Icon name="moreHoriz" size={18} stroke="#8C8278"/>}>To do list</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {todos.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid ' + (t.done ? '#6B5BD3' : '#DCD5CB'), background: 'transparent', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  {t.done && <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#6B5BD3' }}/>}
                </div>
                <span style={{ fontSize: 13, color: t.done ? '#1A1410' : '#4A413B', fontWeight: t.done ? 600 : 400 }}>{t.l}{t.l === 'Celebrate' ? ' 🎉' : ''}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid #ECE7E0' }}>
            <button style={{ background: 'transparent', border: 0, color: '#6B5BD3', fontFamily: "'Outfit',sans-serif", fontSize: 12.5, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="plus" size={14} stroke="#6B5BD3" strokeWidth={2}/> Add a task
            </button>
          </div>
        </Card>
      </div>

      {/* Shops spreadsheet (full width, bottom) */}
      <Card style={{ marginTop: 16, padding: 0 }}>
        <div style={{ padding: '16px 20px 0' }}>
          <SectionTitle eyebrow="SHOPS SPREADSHEET" action={<Button variant="ghost" size="sm" leftIcon="plus">Add shop</Button>}>Sourcing partners</SectionTitle>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderTop: '1px solid #ECE7E0', background: '#FAF7F2' }}>
              {['Shops spreadsheet', 'Budget range', 'Style type', 'Contact salesperson', 'Last sourced'].map((h, i) => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontFamily: "'Outfit',sans-serif", fontSize: 10.5, fontWeight: 600, color: '#8C8278', letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '1px solid #ECE7E0', width: i === 0 ? '24%' : 'auto' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Bergdorf Goodman', range: '$$$$', style: 'Occasionwear · Editorial', contact: 'Marisol Reyes', last: '2 days' },
              { name: "Bloomingdale's",   range: '$$$',  style: 'Contemporary · Modern',     contact: 'James Chen',     last: '1 wk' },
              { name: 'The Webster',      range: '$$$$', style: 'Designer · Avant-garde',    contact: 'Lila Park',      last: '4 days' },
              { name: 'Saks Fifth Ave',   range: '$$$',  style: 'Classic · Y2K',              contact: 'Daniel Hu',      last: '6 days' },
              { name: 'Reformation',      range: '$$',   style: 'Boho · Cottage Core',        contact: 'Carmen Lee',     last: '3 wks' },
            ].map(s => (
              <tr key={s.name} style={{ borderBottom: '1px solid #ECE7E0' }}>
                <td style={{ padding: '12px 20px', fontSize: 13.5, fontWeight: 600, color: '#1A1410' }}>{s.name}</td>
                <td style={{ padding: '12px 20px', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#4A413B' }}>{s.range}</td>
                <td style={{ padding: '12px 20px', fontSize: 13, color: '#4A413B' }}>{s.style}</td>
                <td style={{ padding: '12px 20px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <Avatar initials={s.contact.split(' ').map(x => x[0]).join('')} size={24}/>
                    <span style={{ fontSize: 13, color: '#1A1410' }}>{s.contact}</span>
                  </div>
                </td>
                <td style={{ padding: '12px 20px', fontSize: 12, color: '#8C8278' }}>{s.last} ago</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

// ============ PAYMENTS ============
const PaymentsScreen = () => {
  const [range, setRange] = React.useState('Current Month');
  const chartData = {
    'Current Month': [12, 28, 18, 34, 22, 40, 30],
    '3 Months': [44, 28, 56],
    'Year': [32, 28, 44, 38, 56, 48, 40, 52, 46, 58, 50, 62],
  };
  const bars = chartData[range];
  const max = Math.max(...bars);
  const clients = [
    { n: 'Client 1', amt: '$320', pct: 100, status: 'Paid',    paid: true },
    { n: 'Client 2', amt: '$180', pct: 55,  status: 'Pending' },
    { n: 'Client 3', amt: '$420', pct: 100, status: 'Paid',    paid: true },
    { n: 'Client 4', amt: '$240', pct: 70,  status: 'Pending' },
    { n: 'Client 5', amt: '$160', pct: 35,  status: 'Pending' },
    { n: 'Client 6', amt: '$300', pct: 50,  status: 'Pending' },
  ];
  return (
    <div style={{ padding: 28 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>FINANCE TRACKER</div>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 34, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Your earnings</h1>
        </div>
        <Button variant="ghost" size="sm" leftIcon="arrowDown">Export</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 16, alignItems: 'start' }}>

        {/* LEFT — Finance tracker chart */}
        <Card>
          <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
            {['Current Month', '3 Months', 'Year'].map(p => (
              <button key={p} onClick={() => setRange(p)} style={{ padding: '8px 14px', borderRadius: 10, border: '1px solid', borderColor: range === p ? '#1A1410' : '#DCD5CB', background: range === p ? '#1A1410' : '#fff', color: range === p ? '#fff' : '#1A1410', fontFamily: "'Outfit',sans-serif", fontSize: 12.5, fontWeight: 500, cursor: 'pointer' }}>{p}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 240, padding: '8px 0 12px', borderBottom: '1px solid #ECE7E0' }}>
            {bars.map((v, i) => {
              const shade = ['#1A4D2E', '#2E7D46', '#4B8B5A', '#7FB069'][i % 4];
              return <div key={i} style={{ flex: 1, height: `${(v/max)*100}%`, background: shade, borderRadius: '5px 5px 0 0' }}/>;
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
            {[['Earned', '$9,840'], ['Pending', '$640'], ['Avg session', '$152']].map(s => (
              <div key={s[0]}>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{s[0]}</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, fontWeight: 600, color: '#1A1410', marginTop: 2 }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* RIGHT — Client payment progress (6 cards) */}
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, marginBottom: 12 }}>CLIENT PAYMENT PROGRESS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {clients.map(c => (
              <Card key={c.n} padded={false} style={{ overflow: 'hidden' }}>
                <div style={{ background: '#F2EEE6', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ECE7E0' }}>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, color: '#1A1410' }}>{c.n}</span>
                  {c.paid && (
                    <span style={{ width: 18, height: 18, borderRadius: 4, border: '1.5px solid #4B8B5A', display: 'grid', placeItems: 'center' }}>
                      <Icon name="check" size={11} stroke="#4B8B5A" strokeWidth={3}/>
                    </span>
                  )}
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                    <div style={{ width: 36, height: 6, background: '#ECE7E0', borderRadius: 999 }}/>
                    <div style={{ width: 24, height: 6, background: '#ECE7E0', borderRadius: 999 }}/>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: '#1A1410' }}>{c.amt}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: c.status === 'Paid' ? '#4B8B5A' : '#D89A3E', letterSpacing: '0.04em' }}>{c.status}</span>
                  </div>
                  <div style={{ height: 8, background: '#F2EEE6', borderRadius: 999, border: '1px solid #ECE7E0' }}>
                    <div style={{ width: `${c.pct}%`, height: '100%', background: c.paid ? '#1A1410' : '#C7BFB5', borderRadius: 999 }}/>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ CALENDAR ============
const CalendarScreen = () => {
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
    { n: 'Olivia Martinez', t: '10:00 AM', w: 'Bergdorf · Studio 3', dot: '#EE5A5A' },
    { n: 'Amelia Park',     t: '2:30 PM',  w: 'Video call',          dot: '#6B5BD3' },
    { n: 'Sienna Lowe',     t: '5:00 PM',  w: 'Bloomingdale\'s',     dot: '#4B8B5A' },
    { n: 'Cora Tanaka',     t: '6:30 PM',  w: 'Email follow-up',     dot: '#D89A3E' },
  ];
  return (
    <div style={{ padding: 28, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16 }}>
      <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>SYNCED CALENDAR</div>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 34, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>May 2026</h1>
        </div>
        <Button variant="primary" leftIcon="plus">New event</Button>
      </div>

      {/* Calendar */}
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#1A1410' }}><Icon name="chevronLeft" size={20}/></button>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600 }}>May 05, 2026</span>
          <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#1A1410' }}><Icon name="chevronRight" size={20}/></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 8 }}>
          {days.map(d => <div key={d} style={{ fontSize: 11, fontWeight: 600, color: '#8C8278', textAlign: 'center', letterSpacing: '0.04em' }}>{d}</div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {cal.flat().map((d, i) => {
            const isToday = d === 5;
            const hasEvent = [9, 12, 14, 21, 25, 28].includes(d);
            return (
              <div key={i} style={{ aspectRatio: '1', display: 'grid', placeItems: 'center', position: 'relative', cursor: d ? 'pointer' : 'default' }}>
                {d && (
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    display: 'grid', placeItems: 'center',
                    background: isToday ? '#1A1410' : 'transparent',
                    color: isToday ? '#fff' : '#1A1410',
                    fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: isToday ? 600 : 400,
                  }}>{d}</div>
                )}
                {hasEvent && <div style={{ position: 'absolute', bottom: 3, width: 4, height: 4, borderRadius: '50%', background: '#6B5BD3' }}/>}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Event creator */}
      <Card>
        <SectionTitle eyebrow="QUICK CREATE">Schedule new event</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Input label="Title" placeholder="Bergdorf walkthrough with Olivia" value="" onChange={()=>{}}/>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <Input label="Date" leftIcon="calendar" value="May 16, 2026" onChange={()=>{}}/>
            <Input label="Time" leftIcon="clock" value="10:00 AM" onChange={()=>{}}/>
          </div>
          <Input label="Where" leftIcon="pin" placeholder="Add location or link" value="" onChange={()=>{}}/>
          <Input label="Client" leftIcon="users" placeholder="Tag a client" value="" onChange={()=>{}}/>
          <Button variant="primary" size="md" fullWidth style={{ marginTop: 6 }}>Add to calendar</Button>
        </div>
      </Card>

      {/* Today */}
      <Card style={{ gridColumn: '1 / -1' }}>
        <SectionTitle eyebrow="TODAY · TUESDAY MAY 5" action={<Button variant="ghost" size="sm">View all</Button>}>Upcoming meetings & deadlines</SectionTitle>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ECE7E0' }}>
              <th style={{ textAlign: 'left', padding: '10px 12px 10px 0', fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 600, color: '#8C8278', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '10px 12px', fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 600, color: '#8C8278', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Time</th>
              <th style={{ textAlign: 'left', padding: '10px 12px', fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 600, color: '#8C8278', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Where</th>
              <th style={{ textAlign: 'right', padding: '10px 0 10px 12px', fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 600, color: '#8C8278', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map(m => (
              <tr key={m.n} style={{ borderBottom: '1px solid #ECE7E0' }}>
                <td style={{ padding: '12px 12px 12px 0', fontSize: 13.5, fontWeight: 600, color: '#1A1410' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: m.dot }}/>
                    {m.n}
                  </span>
                </td>
                <td style={{ padding: '12px', fontSize: 13, color: '#4A413B' }}>{m.t}</td>
                <td style={{ padding: '12px', fontSize: 13, color: '#4A413B' }}>{m.w}</td>
                <td style={{ padding: '12px 0 12px 12px', textAlign: 'right' }}>
                  <Button variant="ghost" size="sm">Message</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

// ============ CLIENTS ============
const ClientsScreen = () => {
  const clients = [
    { name: 'Olivia Martinez', tag: 'Wedding · princess look', tagBg: '#E6DFFF', tagFg: '#3F3294', img: '../../assets/photos/model-sunglasses.png', mood: ['pearl-necklace.jpeg','model-blazer-coffee.png','model-selfie-blazer.png','hero-rack.png'], status: 'Current' },
    { name: 'Amelia Park',     tag: 'Gala · Y2K', tagBg: '#FFE0D8', tagFg: '#B22C2C', img: '../../assets/photos/model-selfie-blazer.png', mood: ['model-sunglasses.png','model-selfie-blazer.png','pearl-necklace.jpeg','model-blazer-coffee.png'], status: 'Current' },
    { name: 'Cora Tanaka',     tag: 'Refresh · cottage core', tagBg: '#F2EEE6', tagFg: '#4A413B', img: '../../assets/photos/pearl-necklace.jpeg', mood: ['hero-rack.png','model-sunglasses.png','model-blazer-coffee.png','model-selfie-blazer.png'], status: 'Potential' },
  ];
  return (
    <div style={{ padding: 28, display: 'grid', gridTemplateColumns: '2fr 1.1fr', gap: 16 }}>
      <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>CLIENT ROSTER</div>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 34, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Your clients</h1>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Input leftIcon="search" placeholder="Search clients…" value="" onChange={()=>{}} style={{ minWidth: 240 }} size="lg"/>
          <Button variant="outline" leftIcon="filter">Filter</Button>
        </div>
      </div>

      {/* Client cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {clients.map((c, i) => (
          <Card key={c.name} padded={false} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 16px 8px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid #ECE7E0' }}>
              <Avatar src={c.img} size={48}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410' }}>{c.name}</div>
                <span style={{ background: c.tagBg, color: c.tagFg, fontSize: 9.5, fontWeight: 700, padding: '3px 8px', borderRadius: 999, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4, display: 'inline-block' }}>{c.tag}</span>
              </div>
              <span style={{ fontSize: 10, padding: '4px 8px', borderRadius: 999, background: c.status === 'Current' ? '#E6DFFF' : '#F2EEE6', color: c.status === 'Current' ? '#3F3294' : '#4A413B', fontWeight: 600, letterSpacing: '0.04em' }}>{c.status}</span>
            </div>
            <div style={{ padding: 10, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
              {c.mood.map((m, j) => (
                <div key={j} style={{ aspectRatio: '3/4', background: `url(../../assets/photos/${m}) center/cover`, borderRadius: 6 }}/>
              ))}
            </div>
            <div style={{ padding: '10px 14px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #ECE7E0' }}>
              <div style={{ fontSize: 11, color: '#8C8278' }}>Last contact <span style={{ color: '#1A1410', fontWeight: 500 }}>2 days ago</span></div>
              <Button variant="primary" size="sm">Open</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Right rail: client detail */}
      <Card padded={false}>
        <div style={{ padding: '16px 18px 12px', borderBottom: '1px solid #ECE7E0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>CURRENT CLIENT · MORE INFO</div>
          <Icon name="moreHoriz" size={18} stroke="#8C8278"/>
        </div>
        <div style={{ padding: '18px 18px 8px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar src="../../assets/photos/model-sunglasses.png" size={56}/>
          <div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16, color: '#1A1410' }}>Olivia Martinez</div>
            <div style={{ fontSize: 12, color: '#8C8278', marginTop: 2 }}>Age 25 · New York · she/her</div>
            <div style={{ fontSize: 11.5, color: '#6B5BD3', fontWeight: 600, marginTop: 4, letterSpacing: '0.04em' }}>BUDGET $400 · WEDDING APR 16</div>
          </div>
        </div>

        <div style={{ padding: '8px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            ['Style', 'Boho · Chic'],
            ['Size', '6 US'],
            ['Height', '5\'3"'],
            ['Hair', 'Brown'],
          ].map(r => (
            <div key={r[0]} style={{ padding: 10, background: '#FAF7F2', borderRadius: 10 }}>
              <div style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>{r[0]}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1410', marginTop: 2 }}>{r[1]}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: '14px 18px 8px' }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, marginBottom: 8 }}>MOOD BOARD</div>
          <div style={{ height: 140, borderRadius: 10, position: 'relative', overflow: 'hidden', background: '#F2EEE6' }}>
            <div style={{ position: 'absolute', top: 8, left: 8, width: 70, height: 90, borderRadius: 6, background: 'url(../../assets/photos/pearl-necklace.jpeg) center/cover', transform: 'rotate(-4deg)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}/>
            <div style={{ position: 'absolute', top: 18, left: 90, width: 70, height: 90, borderRadius: 6, background: 'url(../../assets/photos/model-selfie-blazer.png) center/cover', transform: 'rotate(2deg)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}/>
            <div style={{ position: 'absolute', top: 12, right: 12, width: 70, height: 90, borderRadius: 6, background: 'url(../../assets/photos/model-blazer-coffee.png) center/cover', transform: 'rotate(5deg)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}/>
          </div>
        </div>

        {/* Mini calendar */}
        <div style={{ padding: '14px 18px 8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>NEXT SESSION</div>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: '#6B5BD3', fontWeight: 600 }}>May 2026</span>
          </div>
          <div style={{ background: '#FAF7F2', borderRadius: 10, padding: 10 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
              {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} style={{ fontSize: 9, fontWeight: 600, color: '#8C8278', textAlign: 'center' }}>{d}</div>)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
              {[null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, null, null, null, null, null].map((d, i) => {
                const isMeeting = d === 16;
                const isToday = d === 5;
                return (
                  <div key={i} style={{
                    aspectRatio: '1', display: 'grid', placeItems: 'center',
                    fontSize: 10, fontWeight: isMeeting ? 700 : isToday ? 600 : 400,
                    background: isMeeting ? '#6B5BD3' : isToday ? '#1A1410' : 'transparent',
                    color: (isMeeting || isToday) ? '#fff' : d ? '#1A1410' : 'transparent',
                    borderRadius: '50%',
                  }}>{d || ''}</div>
                );
              })}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, padding: '6px 10px', background: '#F4F1FF', borderRadius: 8 }}>
            <Icon name="clock" size={12} stroke="#6B5BD3"/>
            <span style={{ fontSize: 11, color: '#3F3294', fontWeight: 500 }}>May 16 · 10:00 AM · Bergdorf Studio 3</span>
          </div>
        </div>

        <div style={{ padding: '14px 18px 18px', display: 'flex', gap: 8 }}>
          <Button variant="primary" size="md" fullWidth>Open chat</Button>
          <Button variant="outline" size="md">Draft contract</Button>
        </div>
      </Card>
    </div>
  );
};

// ============ MESSAGES ============
const DESK_THREADS = {
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
const DESK_REPLIES = {
  'Olivia Martinez': 'Amazing — sending a princess-silhouette shortlist your way.',
  'Amelia Park':     'No problem, 3pm works. See you then!',
  'Cora Tanaka':     'Looking through it now — gorgeous palette.',
  'Sienna Lowe':     'So glad! Let’s book the next session soon.',
  'Hannah Yates':    'Me too — everything will be ready.',
};

const MessagesScreen = () => {
  const tabs = ['Inquiries', 'Messages', 'Contracts', 'Reviews'];
  const threadMeta = [
    { name: 'Olivia Martinez', t: '10:42', un: 0, img: '../../assets/photos/model-sunglasses.png' },
    { name: 'Amelia Park',     t: '09:15', un: 2, img: '../../assets/photos/model-selfie-blazer.png' },
    { name: 'Cora Tanaka',     t: 'Mon',   un: 1, img: '../../assets/photos/pearl-necklace.jpeg' },
    { name: 'Sienna Lowe',     t: 'Mon',   un: 0, img: '../../assets/photos/model-blazer-coffee.png' },
    { name: 'Hannah Yates',    t: 'Sun',   un: 0, img: '../../assets/photos/model-sunglasses.png' },
  ];
  const [activeTab, setActiveTab] = React.useState(1);
  const [selected, setSelected] = React.useState('Olivia Martinez');
  const [msgs, setMsgs] = React.useState(() => DESK_THREADS['Olivia Martinez'].slice());
  const [draft, setDraft] = React.useState('');
  const scrollRef = React.useRef(null);

  // Reset to the selected client's default thread whenever the selection changes
  React.useEffect(() => { setMsgs((DESK_THREADS[selected] || []).slice()); setDraft(''); }, [selected]);
  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [msgs]);

  const [showOffer, setShowOffer] = React.useState(false);
  const [offerPrice, setOfferPrice] = React.useState('');
  const [offerWas, setOfferWas] = React.useState('');
  React.useEffect(() => { setShowOffer(false); setOfferPrice(''); setOfferWas(''); }, [selected]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMsgs(m => [...m, { side: 'out', text }]);
    setDraft('');
    const reply = DESK_REPLIES[selected];
    if (reply) setTimeout(() => setMsgs(m => [...m, { side: 'in', text: reply }]), 700);
  };

  const sendOffer = () => {
    const p = offerPrice.trim();
    if (!p) return;
    const price = p.startsWith('$') ? p : '$' + p;
    const was = offerWas.trim() ? (offerWas.trim().startsWith('$') ? offerWas.trim() : '$' + offerWas.trim()) : '';
    setMsgs(m => [...m, { side: 'out', type: 'offer', price, was, expires: '299hr 47min' }]);
    setShowOffer(false); setOfferPrice(''); setOfferWas('');
    setTimeout(() => setMsgs(m => [...m, { side: 'in', text: 'Thanks! Reviewing your offer now.' }]), 800);
  };

  const threads = threadMeta.map(t => ({ ...t, last: (DESK_THREADS[t.name][DESK_THREADS[t.name].length - 1] || {}).text || '', sel: t.name === selected }));
  const selImg = (threadMeta.find(t => t.name === selected) || {}).img;
  return (
    <div style={{ padding: 0, display: 'grid', gridTemplateColumns: '160px 320px 1fr', height: 'calc(100% - 0px)', borderTop: '1px solid #ECE7E0' }}>
      {/* Sub-tabs rail */}
      <div style={{ borderRight: '1px solid #ECE7E0', background: '#FAF7F2', padding: '20px 0' }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActiveTab(i)} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            width: '100%', padding: '12px 20px',
            background: i === activeTab ? '#fff' : 'transparent', borderLeft: i === activeTab ? '3px solid #6B5BD3' : '3px solid transparent',
            border: 0, borderBottom: 0, color: i === activeTab ? '#1A1410' : '#8C8278',
            fontFamily: "'Outfit',sans-serif", fontSize: 13.5, fontWeight: i === activeTab ? 600 : 500,
            cursor: 'pointer', textAlign: 'left',
          }}>
            <Icon name={['inbox','message','fileText','star'][i]} size={16} stroke={i === activeTab ? '#1A1410' : '#8C8278'}/>
            {t}
          </button>
        ))}
      </div>

      {/* Thread list */}
      <div style={{ borderRight: '1px solid #ECE7E0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 14px', borderBottom: '1px solid #ECE7E0' }}>
          <Input leftIcon="search" placeholder="Search messages" value="" onChange={()=>{}}/>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {threads.map(t => (
            <div key={t.name} onClick={() => setSelected(t.name)} style={{ padding: '14px 16px', borderBottom: '1px solid #ECE7E0', background: t.sel ? '#F4F1FF' : '#fff', cursor: 'pointer', display: 'flex', gap: 10 }}>
              <Avatar src={t.img} size={40}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13.5, fontWeight: 600, color: '#1A1410' }}>{t.name}</span>
                  <span style={{ fontSize: 11, color: '#8C8278' }}>{t.t}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                  <span style={{ fontSize: 12, color: '#8C8278', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{t.last}</span>
                  {t.un > 0 && <span style={{ fontSize: 10, background: '#6B5BD3', color: '#fff', fontWeight: 700, padding: '2px 7px', borderRadius: 999, marginLeft: 6 }}>{t.un}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat view */}
      <div style={{ display: 'flex', flexDirection: 'column', background: '#FAF7F2' }}>
        <div style={{ padding: '14px 22px', borderBottom: '1px solid #ECE7E0', background: '#fff', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar src={selImg} size={40}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410' }}>{selected}</div>
            <div style={{ fontSize: 11, color: '#6B5BD3' }}>● Active now</div>
          </div>
          <Button variant="outline" size="sm">View profile</Button>
          <Button variant="outline" size="sm" leftIcon="tag" onClick={() => setShowOffer(s => !s)}>Offer</Button>
          <Button variant="primary" size="sm" leftIcon="fileText">Send contract</Button>
        </div>

        <div ref={scrollRef} style={{ flex: 1, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', fontSize: 11, color: '#8C8278', letterSpacing: '0.06em', margin: '8px 0' }}>TUESDAY · 10:42 AM</div>
          {msgs.map((m, i) => (
            m.type === 'offer'
              ? <DeskOfferCard key={i} side={m.side} price={m.price} was={m.was} expires={m.expires} status={m.status}/>
              : <ShopperBubble key={i} side={m.side}>{m.text}</ShopperBubble>
          ))}
        </div>

        {showOffer && (
          <div style={{ margin: '0 22px', padding: 14, background: '#F4F1FF', border: '1px solid #CDC0FF', borderRadius: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13, color: '#1A1410' }}>Send a price offer to {selected.split(' ')[0]}</span>
              <button onClick={() => setShowOffer(false)} style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#8C8278', fontSize: 16 }}>×</button>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              <Input label="Offer price" placeholder="$60" value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)} style={{ flex: 1 }}/>
              <Input label="Original (optional)" placeholder="$68" value={offerWas} onChange={(e) => setOfferWas(e.target.value)} style={{ flex: 1 }}/>
              <Button variant="primary" size="md" onClick={sendOffer}>Send offer</Button>
            </div>
          </div>
        )}

        <div style={{ padding: '14px 22px', borderTop: '1px solid #ECE7E0', background: '#fff', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon name="paperclip" size={18} stroke="#8C8278"/>
          <Icon name="image" size={18} stroke="#8C8278"/>
          <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') send(); }} placeholder="Type here…" style={{ flex: 1, border: '1px solid #ECE7E0', borderRadius: 999, padding: '10px 16px', fontFamily: "'Outfit',sans-serif", fontSize: 13.5, outline: 'none' }}/>
          <button onClick={send} style={{ width: 38, height: 38, borderRadius: '50%', background: '#6B5BD3', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
            <Icon name="send" size={16} stroke="#fff" strokeWidth={2}/>
          </button>
        </div>
      </div>
    </div>
  );
};

const ShopperBubble = ({ side, children }) => {
  const out = side === 'out';
  return (
    <div style={{
      maxWidth: '62%', padding: '11px 15px', borderRadius: 16,
      fontSize: 13, lineHeight: 1.45,
      alignSelf: out ? 'flex-end' : 'flex-start',
      background: out ? '#6B5BD3' : '#fff',
      color: out ? '#fff' : '#1A1410',
      border: out ? '0' : '1px solid #ECE7E0',
      borderBottomRightRadius: out ? 6 : 16,
      borderBottomLeftRadius: out ? 16 : 6,
    }}>{children}</div>
  );
};

// Depop-style price offer card for the desktop chat
const DeskOfferCard = ({ side, price, was, expires = '299hr 47min', status }) => {
  const received = side === 'in';
  return (
    <div style={{ alignSelf: received ? 'flex-start' : 'flex-end', maxWidth: '62%', background: '#fff', border: '1px solid #ECE7E0', borderRadius: 14, padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <Icon name="tag" size={15} stroke="#4B8B5A"/>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 12.5, color: '#4B8B5A' }}>{received ? 'Special offer received' : 'Offer sent'}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 20, color: '#1A1410' }}>{price}</span>
        {was && <span style={{ fontSize: 13, color: '#8C8278', textDecoration: 'line-through' }}>{was}</span>}
      </div>
      <div style={{ fontSize: 11.5, color: '#8C8278', marginTop: 4 }}>{status || `Expires in ${expires}`}</div>
    </div>
  );
};

// ============ PROFILE / SIGN UP ============
const ProfileScreen = () => (
  <div style={{ padding: 28, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 16 }}>
    <div style={{ gridColumn: '1 / -1' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>YOUR PROFILE</div>
      <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 34, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>How clients see you</h1>
    </div>

    <Card>
      <SectionTitle eyebrow="STRUCTURED · PUBLIC">Stylist details</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Input label="Full name" value="Sophia Laurent" onChange={()=>{}}/>
        <Input label="Gender" value="Female (she/her)" onChange={()=>{}}/>
        <Input label="Age" value="32" onChange={()=>{}}/>
        <Input label="Years of experience" value="6" onChange={()=>{}}/>
        <Input label="Educational background" placeholder="Parsons MFA, 2018" value="" onChange={()=>{}}/>
        <Input label="Location" leftIcon="pin" value="New York · Remote" onChange={()=>{}}/>
        <Input label="Languages" value="English, French" onChange={()=>{}}/>
        <Input label="Availability" value="Tue–Sat · 9am–6pm" onChange={()=>{}}/>
        <Input label="Email" value="sophia@sourced.co" onChange={()=>{}}/>
        <Input label="Phone" value="+1 (212) 555-0184" onChange={()=>{}}/>
      </div>
      <div style={{ marginTop: 16 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: '#4A413B' }}>Area of fashion expertise</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
          {['Occasionwear', 'Wedding', 'Y2K', 'Editorial', 'Boho', '+ Add'].map((c, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 500, padding: '6px 12px', borderRadius: 999, background: i === 5 ? 'transparent' : '#E6DFFF', color: i === 5 ? '#8C8278' : '#3F3294', border: i === 5 ? '1px dashed #DCD5CB' : 'none', cursor: 'pointer' }}>{c}</span>
          ))}
        </div>
      </div>
    </Card>

    <Card>
      <SectionTitle eyebrow="UNSTRUCTURED · VISUAL" action={<Button variant="ghost" size="sm" leftIcon="plus">Upload</Button>}>Profile & mood board</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', marginBottom: 12 }}>
        <Avatar src="../../assets/photos/model-blazer-coffee.png" size={92}/>
        <textarea placeholder="Description — how would you describe your styling philosophy?"
          defaultValue="Romantic, editorial dressing rooted in tailoring. Six years between Bloomingdale's and freelance."
          style={{ width: '100%', boxSizing: 'border-box', minHeight: 70, padding: 12, border: '1px solid #DCD5CB', borderRadius: 12, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#1A1410', outline: 'none', resize: 'none' }}/>
      </div>
      <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600, marginBottom: 8 }}>MOOD BOARD · 9 IMAGES</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
        {['hero-rack.png','model-sunglasses.png','model-blazer-coffee.png','pearl-necklace.jpeg','model-selfie-blazer.png','hero-rack.png','model-sunglasses.png','model-blazer-coffee.png','pearl-necklace.jpeg'].map((f, i) => (
          <div key={i} style={{ aspectRatio: '1', borderRadius: 6, background: `url(../../assets/photos/${f}) center/cover` }}/>
        ))}
      </div>
      <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button variant="outline" size="sm" leftIcon="instagram">Instagram</Button>
        <Button variant="outline" size="sm" leftIcon="linkedin">LinkedIn</Button>
        <Button variant="outline" size="sm">
          <span style={{ fontFamily: "'serif'", fontWeight: 900, fontSize: 14 }}>f</span>
          Facebook
        </Button>
        <Button variant="outline" size="sm">
          <span style={{ fontWeight: 900, fontSize: 11 }}>TikTok</span>
        </Button>
      </div>
    </Card>
  </div>
);

Object.assign(window, { CreationScreen, PaymentsScreen, CalendarScreen, ClientsScreen, MessagesScreen, ProfileScreen, ShopperBubble });

// ============ LOGIN (Slide 14) ============
const LoginScreen = ({ go }) => (
  <div style={{ background: '#FAF7F2', minHeight: 760, display: 'grid', placeItems: 'center', padding: 60 }}>
    <div style={{ width: 460, background: '#fff', borderRadius: 18, border: '1px solid #ECE7E0', boxShadow: '0 24px 48px rgba(26,20,16,0.08)', padding: 0, overflow: 'hidden' }}>
      <div style={{ background: '#F2EEE6', padding: '16px 24px', borderBottom: '1px solid #ECE7E0', textAlign: 'center', fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 24, color: '#1A1410' }}>Log in</div>
      <div style={{ padding: '32px 32px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Input label="Email" placeholder="you@email.com" value="" onChange={()=>{}}/>
        <Input label="Password" placeholder="••••••••••" value="" onChange={()=>{}}/>
        <Button variant="primary" size="md" fullWidth onClick={() => go && go('workspace')} style={{ marginTop: 6 }}>Enter</Button>
        <div style={{ textAlign: 'center', fontSize: 13, color: '#8C8278' }}>
          Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); go && go('signup'); }} style={{ color: '#6B5BD3', fontWeight: 600, textDecoration: 'underline' }}>Sign up</a> here
        </div>
      </div>
    </div>
  </div>
);

// ============ SIGNUP (Slide 14 — full form) ============
const SignupScreen = ({ go }) => (
  <div style={{ background: '#FAF7F2', minHeight: 760, padding: 40 }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>JOIN AS A STYLIST</div>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 34, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Build your Sourced profile</h1>
        <p style={{ fontSize: 13.5, color: '#8C8278', marginTop: 6, maxWidth: 540 }}>Tell us about you — clients will see this. You can edit any of this later from your Profile tab.</p>
      </div>
      <Card padded={false}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 320px', gap: 0 }}>
          <div style={{ padding: 24, borderRight: '1px solid #ECE7E0', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Input label="Full name" placeholder="Sophia Laurent" value="" onChange={()=>{}}/>
            <Input label="Gender" placeholder="Select" value="" onChange={()=>{}}/>
            <Input label="Educational background" placeholder="Parsons MFA, 2018" value="" onChange={()=>{}}/>
            <Input label="Location" leftIcon="pin" placeholder="New York, USA" value="" onChange={()=>{}}/>
            <div>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#4A413B' }}>Availability</span>
              <select style={{ marginTop: 6, width: '100%', padding: '9px 12px', background: '#fff', border: '1px solid #DCD5CB', borderRadius: 10, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#1A1410', outline: 'none' }}>
                <option>Tue–Sat · 9am–6pm</option>
                <option>Mon–Fri · 9am–5pm</option>
                <option>Weekends only</option>
                <option>By appointment</option>
              </select>
            </div>
          </div>
          <div style={{ padding: 24, borderRight: '1px solid #ECE7E0', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#4A413B' }}>Area of fashion expertise</span>
              <textarea placeholder="Type here…" defaultValue=""
                style={{ marginTop: 6, width: '100%', boxSizing: 'border-box', minHeight: 90, padding: 10, border: '1px solid #DCD5CB', borderRadius: 10, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#1A1410', outline: 'none', resize: 'none' }}/>
            </div>
            <Input label="Languages" placeholder="English, French" value="" onChange={()=>{}}/>
            <Input label="Email" placeholder="you@email.com" value="" onChange={()=>{}}/>
            <Input label="Phone number" placeholder="+1 (555) 000-0000" value="" onChange={()=>{}}/>
          </div>
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 96, height: 96, borderRadius: '50%', background: '#F2EEE6', border: '1px dashed #C7BFB5', display: 'grid', placeItems: 'center', color: '#8C8278' }}>
                <Icon name="image" size={28} stroke="#8C8278"/>
              </div>
              <Button variant="outline" size="sm" leftIcon="plus">Upload photo</Button>
            </div>

            <div>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#4A413B' }}>Description</span>
              <textarea placeholder="Describe your style philosophy in 2–3 sentences"
                style={{ marginTop: 6, width: '100%', boxSizing: 'border-box', minHeight: 70, padding: 10, border: '1px solid #DCD5CB', borderRadius: 10, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#1A1410', outline: 'none', resize: 'none' }}/>
            </div>

            <div>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#4A413B' }}>Mood board</span>
              <div style={{ marginTop: 6, height: 80, background: '#F2EEE6', border: '1.5px dashed #C7BFB5', borderRadius: 10, display: 'grid', placeItems: 'center', color: '#8C8278', fontSize: 12 }}>
                <div style={{ textAlign: 'center' }}>
                  <Icon name="image" size={18} stroke="#8C8278"/>
                  <div style={{ marginTop: 4 }}>Drop images or click</div>
                </div>
              </div>
            </div>

            <div>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#4A413B' }}>Connect your social media</span>
              <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
                <Button variant="outline" size="sm" leftIcon="instagram">Instagram</Button>
                <Button variant="outline" size="sm" leftIcon="linkedin">LinkedIn</Button>
                <Button variant="outline" size="sm"><span style={{ fontFamily: 'serif', fontWeight: 900, fontSize: 14 }}>f</span> Facebook</Button>
                <Button variant="outline" size="sm">TikTok</Button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '14px 24px', borderTop: '1px solid #ECE7E0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FAF7F2' }}>
          <span style={{ fontSize: 12, color: '#8C8278' }}>Step 1 of 2 · Public profile</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="outline" size="md" onClick={() => go && go('login')}>Cancel</Button>
            <Button variant="primary" size="md" onClick={() => go && go('workspace')}>Continue</Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

// ============ STYLIST ACCOUNT MENU (Slide 16, stylist side — Hello Sophia) ============
const AccountScreen = () => {
  const items = [
    { l: 'Personal Information', icon: 'users' },
    { l: 'Login and security',   icon: 'lock' },
    { l: 'Personalisation',      icon: 'sparkle' },
    { l: 'Language',             icon: 'info' },
    { l: 'Display mode',         icon: 'eye' },
    { l: 'Ongoing orders',       icon: 'fileText' },
    { l: 'My clients',           icon: 'users' },
    { l: 'Saved shops',          icon: 'bookmark' },
    { l: 'My style portfolio',   icon: 'image' },
    { l: 'SOURCED Collective',   icon: 'sparkle', accent: true },
    { l: 'Finance tracker',      icon: 'wallet' },
  ];
  return (
    <div style={{ padding: 28, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 16 }}>
      <div style={{ gridColumn: '1 / -1' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8278', fontWeight: 600 }}>YOUR ACCOUNT</div>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: '#1A1410', letterSpacing: '-0.01em', marginTop: 4 }}>Hello, Sophia</h1>
        <p style={{ fontSize: 13.5, color: '#8C8278', marginTop: 4 }}>Stylist · New York · Member since Feb 2024</p>
      </div>

      <Card padded={false}>
        <div style={{ padding: '12px 4px' }}>
          {items.map((it, i) => (
            <button key={it.l} style={{
              width: '100%', textAlign: 'left', background: 'transparent', border: 0, cursor: 'pointer',
              padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14,
              borderBottom: i < items.length - 1 ? '1px solid #ECE7E0' : 'none',
            }}>
              <Icon name={it.icon} size={18} stroke={it.accent ? '#6B5BD3' : '#8C8278'} strokeWidth={1.7}/>
              <span style={{ flex: 1, fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: it.accent ? 600 : 400, color: it.accent ? '#6B5BD3' : '#1A1410' }}>{it.l}</span>
              <Icon name="chevronRight" size={16} stroke="#C7BFB5"/>
            </button>
          ))}
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Card>
          <SectionTitle eyebrow="PERFORMANCE · 30 DAYS">Activity at a glance</SectionTitle>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 110, padding: '8px 0' }}>
            {[8, 12, 9, 14, 11, 16, 22, 18, 14, 19, 25, 21].map((v, i) => (
              <div key={i} style={{ flex: 1, height: `${(v/25)*100}%`, background: i === 11 ? '#6B5BD3' : '#CDC0FF', borderRadius: '4px 4px 0 0' }}/>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 11, color: '#8C8278' }}>
            <span>Sessions: <strong style={{ color: '#1A1410' }}>34</strong></span>
            <span>Earnings: <strong style={{ color: '#1A1410' }}>$3,240</strong></span>
            <span>Rating: <strong style={{ color: '#1A1410' }}>4.9 ★</strong></span>
          </div>
        </Card>

        <Card>
          <SectionTitle eyebrow="SETTINGS">Quick actions</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Button variant="outline" size="md" leftIcon="edit" fullWidth>Edit profile</Button>
            <Button variant="outline" size="md" leftIcon="info" fullWidth>Help & support</Button>
            <Button variant="ghost" size="md" fullWidth style={{ color: '#C24545' }}>Sign out</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

Object.assign(window, { LoginScreen, SignupScreen, AccountScreen });
