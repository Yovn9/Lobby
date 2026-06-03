// ─── Users ────────────────────────────────────────────────────────────────────
export const mockUsers = [
  { id: '1',  username: 'xNova_GG',      initials: 'XN', color: '#00F5FF', bio: 'Pro FPS player. Content creator. Living in the feed.', followers: 142800, following: 892,  badges: ['Pro Player', 'Verified Creator'], favoriteGames: ['GTA 6', 'Call of Duty: Modern Warfare 4', 'Valorant'],   posts: 234 },
  { id: '2',  username: 'LuciaFanatic',  initials: 'LF', color: '#FF2D78', bio: 'GTA lore nerd & clip machine. She/her.',              followers: 87400,  following: 1204, badges: ['Top Creator'],                     favoriteGames: ['GTA 6', 'Red Dead Redemption 2'],                         posts: 189 },
  { id: '3',  username: 'CrimsonDezel',  initials: 'CD', color: '#8B5CF6', bio: 'Open world explorer. PC Gaming evangelist.',           followers: 54200,  following: 432,  badges: ['Early Adopter'],                   favoriteGames: ['Crimson Desert', 'Fable 4', 'PC Gaming'],                 posts: 97  },
  { id: '4',  username: 'StateOfPlay_V', initials: 'SP', color: '#00FF87', bio: 'PlayStation news. Drops before the Directs.',          followers: 231000, following: 201,  badges: ['Verified Creator', 'News Insider'], favoriteGames: ['PlayStation', "Marvel's Wolverine"],                      posts: 512 },
  { id: '5',  username: 'FableForever',  initials: 'FF', color: '#FFB800', bio: 'If it has lore, I have a 30-min video on it.',         followers: 38900,  following: 677,  badges: ['Lore Master'],                     favoriteGames: ['Fable 4', 'LEGO Batman', 'Crimson Desert'],               posts: 143 },
  { id: '6',  username: 'TechFrameRate', initials: 'TF', color: '#0080FF', bio: '1440p/240Hz or nothing. Hardware nerd.',              followers: 62100,  following: 310,  badges: ['Tech Creator'],                    favoriteGames: ['PC Gaming', 'Console vs PC'],                             posts: 88  },
  { id: '7',  username: 'WolverineWatch',initials: 'WW', color: '#FF6B35', bio: 'Insomniac tracker. Wolverine or nothing.',             followers: 29400,  following: 540,  badges: ['Hype Creator'],                    favoriteGames: ["Marvel's Wolverine", 'Spider-Man 2'],                     posts: 61  },
  { id: '8',  username: 'PS5ProMax',     initials: 'PM', color: '#A78BFA', bio: 'PS5 Pro owner. Not sorry.',                           followers: 18700,  following: 221,  badges: ['Console Creator'],                  favoriteGames: ['PS5 Pro', 'GTA 6'],                                       posts: 44  },
  { id: '9',  username: 'HorrorVault',   initials: 'HV', color: '#E11D48', bio: 'Horror game archivist. ILL. SH. Amnesia. All of it.', followers: 47200,  following: 388,  badges: ['Horror Expert'],                   favoriteGames: ['Silent Hill', 'ILL', 'Amnesia'],                          posts: 178 },
  { id: '10', username: 'GodOfWarLore',  initials: 'GL', color: '#F97316', bio: 'Kratos disciple. Norse lore. Every detail matters.',  followers: 93600,  following: 510,  badges: ['Verified Creator', 'Lore Master'],  favoriteGames: ['God of War: Laufey', 'Fable 4'],                          posts: 302 },
];

export const currentUser = mockUsers[0];

// ─── Stories ──────────────────────────────────────────────────────────────────
export const mockStories = [
  { id: 's0',  label: 'Your Story',       isAdd: true,  color: '#00F5FF', emoji: '＋',  colors: ['#00F5FF22', '#8B5CF622'], viewed: false, hot: false },
  { id: 's1',  label: 'GTA 6',            isAdd: false, color: '#00F5FF', emoji: '🌆',  colors: ['#0A2A4A',   '#001833'  ], viewed: false, hot: true  },
  { id: 's2',  label: 'State of Play',    isAdd: false, color: '#FF2D78', emoji: '🎮',  colors: ['#3A0A20',   '#1A0010'  ], viewed: false, hot: true  },
  { id: 's3',  label: 'Wolverine',        isAdd: false, color: '#FFB800', emoji: '🦾',  colors: ['#3A2800',   '#1A1000'  ], viewed: false, hot: true  },
  { id: 's4',  label: 'God of War',       isAdd: false, color: '#F97316', emoji: '⚡',  colors: ['#3A1500',   '#1A0800'  ], viewed: false, hot: true  },
  { id: 's5',  label: 'Silent Hill',      isAdd: false, color: '#94A3B8', emoji: '🌫️', colors: ['#1A2030',   '#0D1018'  ], viewed: false, hot: false },
  { id: 's6',  label: 'ILL',             isAdd: false, color: '#E11D48', emoji: '🩸',  colors: ['#2D0510',   '#150208'  ], viewed: false, hot: false },
  { id: 's7',  label: 'Crimson Desert',  isAdd: false, color: '#FFB800', emoji: '⚔️',  colors: ['#2A1800',   '#120A00'  ], viewed: true,  hot: false },
  { id: 's8',  label: '007 First Light', isAdd: false, color: '#8B5CF6', emoji: '🕵️', colors: ['#1A0A30',   '#0D0518'  ], viewed: true,  hot: false },
  { id: 's9',  label: 'MW4',             isAdd: false, color: '#0080FF', emoji: '🎖️', colors: ['#001A3A',   '#000D1A'  ], viewed: true,  hot: false },
  { id: 's10', label: 'PC Gaming',       isAdd: false, color: '#00FF87', emoji: '💻',  colors: ['#002A1A',   '#00150D'  ], viewed: true,  hot: false },
];

// ─── Live streams ─────────────────────────────────────────────────────────────
export const mockLiveStreams = [
  { id: 'l1', streamer: 'StateOfPlay_V', initials: 'SP', color: '#00FF87', title: 'Wolverine State of Play Reaction',     game: 'State of Play',               viewers: 14200, category: 'React'    },
  { id: 'l2', streamer: 'CrimsonDezel',  initials: 'CD', color: '#8B5CF6', title: 'Crimson Desert Story Update Review',   game: 'Crimson Desert',               viewers: 4200,  category: 'Review'   },
  { id: 'l3', streamer: 'HorrorVault',   initials: 'HV', color: '#E11D48', title: 'ILL + Silent Hill Showcase Watch',     game: 'Horror Showcase',              viewers: 8900,  category: 'React'    },
  { id: 'l4', streamer: 'xNova_GG',      initials: 'XN', color: '#00F5FF', title: 'MW4 on Switch 2 — First Impressions', game: 'Call of Duty: Modern Warfare 4', viewers: 31400, category: 'Gameplay' },
];

// ─── Comments ─────────────────────────────────────────────────────────────────
export const mockComments: Record<string, Array<{ id: string; user: typeof mockUsers[0]; text: string; likes: number; time: string }>> = {
  p1: [
    { id: 'c1a', user: mockUsers[3],  text: 'Jason & Lucia chemistry is exactly what open-world games have been missing. Real narrative weight finally.', likes: 2841, time: '1h ago' },
    { id: 'c1b', user: mockUsers[4],  text: "Rockstar understood the assignment. This might be their most ambitious protagonist writing since RDR2.",       likes: 1612, time: '2h ago' },
    { id: 'c1c', user: mockUsers[7],  text: 'Lucia carrying the narrative in a GTA game is bold. And it works. The dual-lead structure is genuinely fresh.', likes: 989, time: '2h ago' },
  ],
  p2: [
    { id: 'c2a', user: mockUsers[6],  text: "That State of Play showcase was everything. Brutal combat, actual cinematic weight — Insomniac understood exactly what Wolverine needs to feel like.", likes: 6800, time: '2h ago' },
    { id: 'c2b', user: mockUsers[2],  text: 'The extended gameplay footage alone justified the entire showcase. $69.99 day one. No hesitation.',                   likes: 4200, time: '3h ago' },
    { id: 'c2c', user: mockUsers[0],  text: 'September 15 cannot come fast enough. Preorder is locked in. The brutal finisher animations are insane.',                likes: 3100, time: '3h ago' },
  ],
  p3: [
    { id: 'c3a', user: mockUsers[4],  text: "Laufey as the central antagonist is the lore drop that changes the entire God of War mythology trajectory. Didn't see it coming.", likes: 4200, time: '5h ago' },
    { id: 'c3b', user: mockUsers[0],  text: 'Santa Monica ending the father-son arc and immediately pivoting to this? Fearless creative decision.',                    likes: 2870, time: '6h ago' },
  ],
  p4: [
    { id: 'c4a', user: mockUsers[8],  text: "First-person Silent Hill is the most unsettling creative direction in horror gaming in years. You can't escape it.", likes: 3120, time: '7h ago' },
    { id: 'c4b', user: mockUsers[0],  text: 'Townfall going first-person flips everything the series built. Bold and genuinely terrifying as a design choice.', likes: 1780, time: '8h ago' },
  ],
  p5: [
    { id: 'c5a', user: mockUsers[8],  text: 'ILL is the most viscerally grotesque game since Scorn and that is absolutely a compliment. Horror needed this.', likes: 2640, time: '9h ago' },
    { id: 'c5b', user: mockUsers[0],  text: 'The creature design in ILL is from a completely different dimension of wrong. Whatever they are paying the art team is not enough.', likes: 1920, time: '9h ago' },
  ],
  p6: [
    { id: 'c6a', user: mockUsers[3],  text: 'IO Interactive building Bond with Hitman disguise system DNA is the exact right move. Social stealth in iconic locations. Yes.', likes: 1892, time: '7h ago' },
    { id: 'c6b', user: mockUsers[6],  text: "People really are not ready for how good 007 First Light is going to be. IO doesn't miss. Ever.",               likes: 1471, time: '8h ago' },
  ],
  p7: [
    { id: 'c7a', user: mockUsers[3],  text: "Call of Duty on Switch 2 is genuinely historic. First Nintendo CoD in over a decade. This is not a small thing.",       likes: 5200, time: '14h ago' },
    { id: 'c7b', user: mockUsers[4],  text: 'No previous-gen means they actually built MW4 for current hardware. October 23 is going to be massive across every platform.', likes: 3870, time: '15h ago' },
    { id: 'c7c', user: mockUsers[5],  text: 'Switch 2 getting MW4 day-and-date with PS5, Xbox and PC is legitimizing the platform at a speed nobody predicted.',         likes: 2940, time: '16h ago' },
  ],
  p8: [
    { id: 'c8a', user: mockUsers[4],  text: 'The patch history for Crimson Desert over the past few months is genuinely impressive. Pearl Abyss kept their word.', likes: 1840, time: '11h ago' },
    { id: 'c8b', user: mockUsers[5],  text: 'Went back after the March story update and the difference is real. The narrative is actually landing now. Good recovery.', likes: 1340, time: '12h ago' },
    { id: 'c8c', user: mockUsers[0],  text: 'From launch disaster to actually engaging open world in under three months. Pearl Abyss did the work.',                     likes: 980,  time: '13h ago' },
  ],
  p9: [
    { id: 'c9a', user: mockUsers[2],  text: '1440p 240Hz on a PlayStation-branded display is a direct message to PC players. Sony knows where the market is heading.', likes: 834, time: '5h ago' },
    { id: 'c9b', user: mockUsers[0],  text: 'The dual-ecosystem play from Sony is the right long-term move. They want to be everywhere the screen is.',             likes: 619, time: '6h ago' },
  ],
};

// ─── Posts ────────────────────────────────────────────────────────────────────
export const mockPosts = [
  {
    id: 'p1', user: mockUsers[1],
    tag: 'GTA 6', tagColor: '#00F5FF',
    content: "GTA 6's Jason and Lucia might be Rockstar's most carefully written protagonists. The dual-lead structure is cinematic in a way open-world games rarely attempt. This isn't just a game — it's a statement for the entire medium.",
    accent: '#00F5FF',
    artConfig: {
      bg1: '#020D1A', bg2: '#010810',
      glowColor: 'rgba(0,245,255,0.15)',
      emoji: '🌆', emojiSize: 72,
      label: 'GTA VI', sub: 'Rockstar Games · 2025',
      tag1: 'OPEN WORLD', tag2: 'ACTION',
      shimmer1: '#001830', shimmer2: '#002040',
      bars: ['#00F5FF', '#0080FF', '#004499'],
    },
    likes: 14200, comments: 892, shares: 3400, views: 284000,
    timestamp: '2h ago', trending: true,
  },
  {
    id: 'p2', user: mockUsers[6],
    tag: "Marvel's Wolverine", tagColor: '#FFB800',
    content: "Insomniac just showed everything at State of Play and Wolverine is EVERYTHING. Brutal finisher animations, cinematic violence, extended gameplay — September 15 is locked in my calendar. $69.99 preorder is live on PlayStation Store right now.",
    accent: '#FFB800',
    artConfig: {
      bg1: '#1A0E00', bg2: '#0F0800',
      glowColor: 'rgba(255,184,0,0.15)',
      emoji: '🦾', emojiSize: 72,
      label: "MARVEL'S WOLVERINE", sub: 'Insomniac Games · Sept 15, 2026 · $69.99',
      tag1: 'ACTION RPG', tag2: 'PREORDER LIVE',
      shimmer1: '#2A1800', shimmer2: '#3A2200',
      bars: ['#FFB800', '#FF8800', '#CC5500'],
    },
    likes: 48300, comments: 3890, shares: 14200, views: 1240000,
    timestamp: '3h ago', trending: true,
  },
  {
    id: 'p3', user: mockUsers[9],
    tag: 'God of War: Laufey', tagColor: '#F97316',
    content: "God of War: Laufey revealing Laufey as the central antagonist is the lore drop nobody was ready for. Santa Monica is building something that may surpass Ragnarök. The Norse mythology angle here is genuinely unprecedented territory.",
    accent: '#F97316',
    artConfig: {
      bg1: '#1A0800', bg2: '#0F0400',
      glowColor: 'rgba(249,115,22,0.15)',
      emoji: '⚡', emojiSize: 72,
      label: 'GOD OF WAR: LAUFEY', sub: 'Santa Monica Studio · PS5',
      tag1: 'ACTION', tag2: 'NORSE MYTH',
      shimmer1: '#2A1000', shimmer2: '#3A1800',
      bars: ['#F97316', '#EA580C', '#C2410C'],
    },
    likes: 24600, comments: 1890, shares: 6100, views: 441000,
    timestamp: '5h ago', trending: true,
  },
  {
    id: 'p4', user: mockUsers[8],
    tag: 'Silent Hill: Townfall', tagColor: '#94A3B8',
    content: "Silent Hill: Townfall going first-person is the boldest creative decision in horror gaming since SOMA. You lose the third-person buffer. You can't look away from what's in front of you. No Code and Konami are not playing around.",
    accent: '#94A3B8',
    artConfig: {
      bg1: '#0A0D12', bg2: '#050709',
      glowColor: 'rgba(148,163,184,0.1)',
      emoji: '🌫️', emojiSize: 68,
      label: 'SILENT HILL: TOWNFALL', sub: 'Konami · No Code Studio',
      tag1: 'HORROR', tag2: 'FIRST PERSON',
      shimmer1: '#111827', shimmer2: '#1E2A3A',
      bars: ['#94A3B8', '#64748B', '#475569'],
    },
    likes: 18900, comments: 1340, shares: 4200, views: 328000,
    timestamp: '7h ago', trending: true,
  },
  {
    id: 'p5', user: mockUsers[8],
    tag: 'ILL', tagColor: '#E11D48',
    content: "ILL is the most grotesque, atmospheric, and uncompromising horror game I have seen since Scorn. The creature design is from another dimension of wrong entirely. This is what the genre needed — zero compromises, zero accessibility padding.",
    accent: '#E11D48',
    artConfig: {
      bg1: '#150208', bg2: '#0A0105',
      glowColor: 'rgba(225,29,72,0.15)',
      emoji: '🩸', emojiSize: 68,
      label: 'ILL', sub: 'Team Clout · Survival Horror',
      tag1: 'HORROR', tag2: 'SURVIVAL',
      shimmer1: '#200310', shimmer2: '#2D0518',
      bars: ['#E11D48', '#BE123C', '#9F1239'],
    },
    likes: 22400, comments: 1780, shares: 5800, views: 394000,
    timestamp: '9h ago', trending: true,
  },
  {
    id: 'p6', user: mockUsers[4],
    tag: '007 First Light', tagColor: '#8B5CF6',
    content: "007 First Light is the sleeper hit nobody is building hype for yet. IO Interactive bringing Hitman's social stealth DNA to a Bond sandbox — disguises, iconic locations, moral weight — this will surprise everyone who overlooked it.",
    accent: '#8B5CF6',
    artConfig: {
      bg1: '#0D0520', bg2: '#070212',
      glowColor: 'rgba(139,92,246,0.15)',
      emoji: '🕵️', emojiSize: 68,
      label: '007 FIRST LIGHT', sub: 'IO Interactive · Multi-platform',
      tag1: 'STEALTH', tag2: 'ACTION',
      shimmer1: '#130830', shimmer2: '#1A0A40',
      bars: ['#8B5CF6', '#7C3AED', '#6D28D9'],
    },
    likes: 19300, comments: 1080, shares: 5200, views: 287000,
    timestamp: '10h ago', trending: false,
  },
  {
    id: 'p7', user: mockUsers[0],
    tag: 'Call of Duty: MW4', tagColor: '#0080FF',
    content: "Call of Duty: Modern Warfare 4 launches October 23 on PS5, Xbox Series, PC — and Nintendo Switch 2. First Call of Duty on a Nintendo platform in over a decade. No previous-gen. This is a massive statement and everyone is sleeping on it.",
    accent: '#0080FF',
    artConfig: {
      bg1: '#000D20', bg2: '#000610',
      glowColor: 'rgba(0,128,255,0.15)',
      emoji: '🎖️', emojiSize: 68,
      label: 'MODERN WARFARE 4', sub: 'Oct 23, 2026 · PS5 · Xbox · Switch 2 · PC',
      tag1: 'SHOOTER', tag2: 'SWITCH 2',
      shimmer1: '#001030', shimmer2: '#001840',
      bars: ['#0080FF', '#0066CC', '#004D99'],
    },
    likes: 34700, comments: 5200, shares: 12400, views: 748000,
    timestamp: '12h ago', trending: true,
  },
  {
    id: 'p8', user: mockUsers[2],
    tag: 'Crimson Desert', tagColor: '#FFB800',
    content: "Crimson Desert launched rough on March 19 — bugs, glitches, movement issues, a weak story. But Pearl Abyss has shipped update after update. The game is genuinely good now. The story is finally landing. This recovery is one of the best in recent memory.",
    accent: '#FFB800',
    artConfig: {
      bg1: '#1A0E00', bg2: '#0F0700',
      glowColor: 'rgba(255,184,0,0.12)',
      emoji: '⚔️', emojiSize: 68,
      label: 'CRIMSON DESERT', sub: 'Pearl Abyss · Story Update · Live Now',
      tag1: 'STORY UPDATE', tag2: 'LIVE',
      shimmer1: '#241200', shimmer2: '#301A00',
      bars: ['#FFB800', '#F59E0B', '#D97706'],
    },
    likes: 11200, comments: 1840, shares: 3100, views: 198000,
    timestamp: '1d ago', trending: false,
  },
  {
    id: 'p9', user: mockUsers[5],
    tag: 'PlayStation Hardware', tagColor: '#00FF87',
    content: "PlayStation's 27-inch 1440p 240Hz monitor is not targeting PS5-only players. It's targeting PC players who also own a PS5. Sony is making the full dual-platform ecosystem play and the specs make the strategy completely obvious.",
    accent: '#00FF87',
    artConfig: {
      bg1: '#001A0F', bg2: '#000D08',
      glowColor: 'rgba(0,255,135,0.12)',
      emoji: '🖥️', emojiSize: 68,
      label: 'PLAYSTATION MONITOR', sub: 'Sony · 1440p 240Hz',
      tag1: 'HARDWARE', tag2: '1440P',
      shimmer1: '#00200F', shimmer2: '#002D18',
      bars: ['#00FF87', '#00CC6A', '#00994F'],
    },
    likes: 8700, comments: 441, shares: 1200, views: 142000,
    timestamp: '2d ago', trending: false,
  },
];

// ─── Trending ─────────────────────────────────────────────────────────────────
export const trendingTopics = [
  {
    id: 't1', title: 'GTA 6', subtitle: 'Jason & Lucia Era', category: 'Upcoming Release',
    score: 98, posts: '142K', color: '#00F5FF', gradient: 'from-cyan-500/20 to-blue-600/20', border: 'border-cyan-500/30',
    description: "Rockstar's GTA 6 discourse is at an all-time high. Jason and Lucia's dual-lead structure is dominating gaming content across every platform as the release window approaches.",
    angle: "Argue why Jason and Lucia could redefine open-world storytelling — then ask your audience which character they are playing first.",
  },
  {
    id: 't2', title: "Marvel's Wolverine", subtitle: 'State of Play Gameplay Shown', category: 'Confirmed · Sept 15',
    score: 97, posts: '218K', color: '#FFB800', gradient: 'from-amber-500/20 to-orange-600/20', border: 'border-amber-500/30',
    description: "Insomniac dropped the full Wolverine gameplay showcase at State of Play. Brutal finisher animations, cinematic violence, and an extended look at the combat system. Preorder is live at $69.99 for September 15, 2026.",
    angle: "React to the State of Play showcase — break down the combat, the finishers, and whether Insomniac nailed the tone. Reaction content is peaking right now.",
  },
  {
    id: 't3', title: 'PlayStation State of Play', subtitle: 'June Showcase Recap', category: 'Showcase',
    score: 96, posts: '201K', color: '#FF2D78', gradient: 'from-pink-500/20 to-red-600/20', border: 'border-pink-500/30',
    description: "PlayStation's State of Play dominated the summer gaming conversation. Wolverine gameplay, new hardware reveals, and several surprise announcements made this one of the most-discussed showcases in years.",
    angle: "Drop your ranked list of State of Play announcements — tier lists and rankings drive massive engagement after a showcase.",
  },
  {
    id: 't4', title: 'God of War: Laufey', subtitle: 'Laufey Reveal', category: 'Upcoming Release',
    score: 94, posts: '88K', color: '#F97316', gradient: 'from-orange-500/20 to-red-600/20', border: 'border-orange-500/30',
    description: "Santa Monica Studio revealed Laufey as the central antagonist, sending the lore community into overdrive. The Norse mythology implications are unprecedented in the series.",
    angle: "Break down the Laufey lore — who she is in Norse mythology and what her role means for Kratos. Deep-dive lore content is performing well on this topic.",
  },
  {
    id: 't5', title: 'Call of Duty: Modern Warfare 4', subtitle: 'Oct 23 · Switch 2 Launch', category: 'Confirmed · Oct 23',
    score: 92, posts: '156K', color: '#0080FF', gradient: 'from-blue-500/20 to-indigo-600/20', border: 'border-blue-500/30',
    description: "Call of Duty: Modern Warfare 4 launches October 23 on PS5, Xbox Series X|S, PC, and Nintendo Switch 2 — the first Call of Duty on a Nintendo platform in over a decade. No previous-gen release.",
    angle: "Focus on the Switch 2 angle — this is historically significant for Nintendo and the console war narrative. That specific take is underserved right now.",
  },
  {
    id: 't6', title: 'Silent Hill: Townfall', subtitle: 'First-Person Horror', category: 'Upcoming Release',
    score: 89, posts: '67K', color: '#94A3B8', gradient: 'from-slate-500/20 to-gray-600/20', border: 'border-slate-500/30',
    description: "No Code's Silent Hill: Townfall is confirmed first-person, which has divided the horror community. The decision removes the series' iconic camera distance and puts players directly inside the nightmare.",
    angle: "Is first-person Silent Hill a genius move or a betrayal of the series identity? This debate is wide open and both sides are passionate.",
  },
  {
    id: 't7', title: 'ILL', subtitle: 'Horror Reveal Showcase', category: 'Upcoming Release',
    score: 87, posts: '52K', color: '#E11D48', gradient: 'from-rose-500/20 to-red-600/20', border: 'border-rose-500/30',
    description: "Team Clout's ILL has emerged as the most viscerally disturbing horror game revealed in years. The creature design and atmospheric brutality have the horror community comparing it to Scorn and SOMA.",
    angle: "Explain why ILL looks different from every other horror game right now — the creature design is a specific conversation starter that resonates.",
  },
  {
    id: 't8', title: '007 First Light', subtitle: 'IO Interactive Bond', category: 'Upcoming Release',
    score: 85, posts: '68K', color: '#8B5CF6', gradient: 'from-purple-500/20 to-indigo-600/20', border: 'border-purple-500/30',
    description: "IO Interactive's James Bond game continues to build quiet anticipation. The Hitman studio applying their social stealth expertise to the Bond sandbox is generating serious discussion among stealth game fans.",
    angle: "Make the case for why 007 First Light is the most underrated upcoming game right now. Underdog narratives drive shares.",
  },
  {
    id: 't9', title: 'Crimson Desert', subtitle: 'Story Update · Now Polished', category: 'Story Update',
    score: 79, posts: '61K', color: '#FFB800', gradient: 'from-amber-500/20 to-orange-600/20', border: 'border-amber-500/30',
    description: "Crimson Desert launched on March 19 with bugs, performance issues, and a weak story. Pearl Abyss responded with consistent updates and the game is now significantly more polished, with ongoing story improvements.",
    angle: "Cover the redemption arc — compare launch state to current state. Recovery stories perform extremely well and Pearl Abyss is actively delivering.",
  },
  {
    id: 't10', title: 'Fable 4', subtitle: 'Playground Reboot', category: 'Upcoming Release',
    score: 79, posts: '58K', color: '#4ADE80', gradient: 'from-emerald-500/20 to-green-600/20', border: 'border-emerald-500/30',
    description: "Playground Games' Fable reboot continues to build anticipation years into development. The studio's Forza heritage meets open-world RPG ambition, and the community is split between excitement and healthy skepticism.",
    angle: "Is Playground Games the right studio for Fable? Compare their Forza track record to what an open-world RPG demands. This debate has no clear winner yet.",
  },
  {
    id: 't11', title: 'PlayStation Hardware', subtitle: 'Monitor & Controller', category: 'Hardware',
    score: 74, posts: '41K', color: '#00FF87', gradient: 'from-green-500/20 to-teal-600/20', border: 'border-green-500/30',
    description: "PlayStation's new 27-inch 1440p 240Hz gaming monitor and updated controllers are positioned for both PS5 and PC players — a clear dual-ecosystem play from Sony that has the hardware community talking.",
    angle: "Is Sony quietly becoming a PC gaming hardware company? That framing is provocative and accurate, which is exactly what drives engagement.",
  },
  {
    id: 't12', title: 'PS5 Pro', subtitle: 'Performance Numbers', category: 'Hardware',
    score: 77, posts: '63K', color: '#A78BFA', gradient: 'from-violet-500/20 to-purple-600/20', border: 'border-violet-500/30',
    description: "PS5 Pro performance breakdowns continue to generate discussion. Digital Foundry comparisons showing native 4K/60 performance gains are the most-referenced pieces of content in the hardware community this week.",
    angle: "Show the before/after frame rate comparisons with specific game examples. Data-driven content dominates the PS5 Pro conversation.",
  },
  {
    id: 't13', title: 'PC Gaming', subtitle: '1440p / 240Hz Meta', category: 'PC Gaming',
    score: 82, posts: '87K', color: '#00FF87', gradient: 'from-emerald-500/20 to-teal-600/20', border: 'border-emerald-500/30',
    description: "The 2025 PC gaming meta has settled around 1440p at 240Hz as the performance sweet spot. New monitor options and GPU price drops are making this setup more accessible than ever.",
    angle: "Make the definitive case for 1440p/240Hz over 4K/60 in 2025. Strong opinions on monitor specs drive comments from both sides.",
  },
];

// ─── Saved / Suggested / Stats ────────────────────────────────────────────────
export const savedGenerations = [
  { id: 'sg1', title: 'GTA 6 Hype Reel Script',                 game: 'GTA 6',                    platform: 'Instagram Reels', contentType: 'Script + Hook',  tone: 'Hype',         createdAt: '2 days ago', preview: "🔥 HOOK: Rockstar just broke the internet AGAIN. Jason and Lucia aren't just characters. They're an era."                                          },
  { id: 'sg2', title: "Wolverine State of Play Reaction Script", game: "Marvel's Wolverine",        platform: 'TikTok',          contentType: 'Script + Hook',  tone: 'Hype',         createdAt: '3 days ago', preview: "Insomniac just showed EVERYTHING. September 15. $69.99. Brutal finishers. Extended gameplay. Preorder is OPEN."                                  },
  { id: 'sg3', title: '007 First Light Sleeper Hit Take',        game: '007 First Light',           platform: 'TikTok',          contentType: 'Hook + Caption', tone: 'Controversial', createdAt: '5 days ago', preview: "POV: IO Interactive making a Bond game is the most exciting thing in gaming rn and nobody is talking about it 🎯"                               },
  { id: 'sg4', title: 'ILL Horror Breakdown',                    game: 'ILL',                       platform: 'YouTube Shorts',  contentType: 'Video Idea',     tone: 'Cinematic',    createdAt: '6 days ago', preview: "ILL is grotesque by design. Here's exactly why that's what horror gaming needed."                                                              },
  { id: 'sg5', title: 'MW4 on Switch 2 — Hot Take',             game: 'Call of Duty: Modern Warfare 4', platform: 'TikTok',    contentType: 'Script',         tone: 'Controversial', createdAt: '1 week ago', preview: "Call of Duty on Switch 2 is the most underrated gaming news of the year. This changes the console war narrative entirely."                      },
];

export const suggestedCreators = [
  { ...mockUsers[3],  mutualFollowers: 14 },
  { ...mockUsers[9],  mutualFollowers: 19 },
  { ...mockUsers[4],  mutualFollowers: 8  },
  { ...mockUsers[8],  mutualFollowers: 6  },
];

export const creatorStats = {
  totalViews: '2.4M', totalLikes: '148K', followers: '142.8K',
  postsThisMonth: 18, topContent: 'GTA 6 Reaction', engagementRate: '8.4%',
};

export const GAMES         = ['GTA 6', '007 First Light', 'God of War: Laufey', 'Silent Hill: Townfall', 'ILL', 'Call of Duty: Modern Warfare 4', "Marvel's Wolverine", 'Crimson Desert', 'Fable 4', 'PS5 Pro', 'PC Gaming', 'Console vs PC'];
export const PLATFORMS     = ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'Instagram'];
export const CONTENT_TYPES = ['Script', 'Hook', 'Caption', 'Hashtags', 'Carousel Idea', 'Video Idea'];
export const TONES         = ['Hype', 'Controversial', 'Funny', 'Cinematic', 'Informative'];
