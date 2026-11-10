/**
 * ============================================================================
 * politicianFIGHT - COMPLETE 3D FIGHTING GAME ENGINE
 * Created by Sujal Yadav
 * High-quality 3D Browser Fighting Game
 * Built with HTML5, CSS3, JavaScript and Three.js
 * ============================================================================
 */

// Global Game Configuration & Data
const CONFIG = {
  ROUND_TIME: 99,
  MAX_HEALTH: 100,
  MAX_SUPER: 100,
  ROUNDS_TO_WIN: 2,
  ARENA_BOUNDS: 13.5,
  GRAVITY: -0.022,
  FLOOR_Y: 0
};

// ----------------------------------------------------------------------------
// 1. CHARACTER DATABASE (16 SLOTS)
// ----------------------------------------------------------------------------
const CHARACTERS = [
  {
    id: 'mitraman',
    name: 'Mitraman',
    icon: '🇮🇳',
    title: 'The Orator',
    powerName: 'Mitra Chakra',
    powerDesc: 'Spins a celestial glowing energy chakra that pierces through foes.',
    stats: { atk: 85, spd: 75, def: 80 },
    palette: {
      skin: 0xdeb887,
      hair: 0xeeeeee,
      beard: 0xeeeeee,
      jacket: 0xff6f00, // Saffron jacket
      kurta: 0xf5f5f5,  // White kurta
      pants: 0xf5f5f5,
      shoes: 0x212121,
      glow: 0xff9100
    },
    accessory: 'chakra'
  },
  {
    id: 'yatraboy',
    name: 'Yatra Boy',
    icon: '🌾',
    title: 'The Traveler',
    powerName: 'Aloo Se Sona',
    powerDesc: 'Transmutes raw energy into golden beams with heavy knockback.',
    stats: { atk: 75, spd: 85, def: 70 },
    palette: {
      skin: 0xe0ac69,
      hair: 0x1a1a1a,
      beard: 0x1a1a1a,
      jacket: 0xffffff, // White polo
      kurta: 0xffffff,
      pants: 0xc2a679, // Khaki
      shoes: 0xffffff,
      glow: 0xffd600
    },
    accessory: 'goldpotato'
  },
  {
    id: 'deedee',
    name: 'Deedee',
    icon: '🎨',
    title: 'The Maestro',
    powerName: 'Jadu Hobe',
    powerDesc: 'Casts mystic magenta energy shockwaves that disorient the opponent.',
    stats: { atk: 80, spd: 78, def: 75 },
    palette: {
      skin: 0xd29b6e,
      hair: 0x111111,
      jacket: 0xf0f4f8,
      kurta: 0x0091ea, // Blue border sari
      pants: 0xf0f4f8,
      shoes: 0x3e2723,
      glow: 0x00e5ff
    },
    accessory: 'microphone'
  },
  {
    id: 'tariff',
    name: 'Tariff',
    icon: '💼',
    title: 'The Dealmaker',
    powerName: 'Trade Tornado',
    powerDesc: 'Summons a raging whirlwind of tax papers and economic gusts.',
    stats: { atk: 88, spd: 65, def: 85 },
    palette: {
      skin: 0xf0b27a,
      hair: 0xffd54f, // Golden blonde hair
      jacket: 0x0d47a1, // Navy suit
      kurta: 0xd50000, // Red tie
      pants: 0x0d47a1,
      shoes: 0x1a1a1a,
      glow: 0x00e676
    },
    accessory: 'briefcase'
  },
  {
    id: 'dozerdada',
    name: 'Dozer Dada',
    icon: '🚜',
    title: 'The Demolisher',
    powerName: 'Dozer Rush',
    powerDesc: 'Rushes forward as a phantom yellow bulldozer with immense crushing force.',
    stats: { atk: 92, spd: 60, def: 90 },
    palette: {
      skin: 0xca8a5c,
      hair: 0x212121,
      jacket: 0xfbc02d, // Construction yellow
      kurta: 0xff6d00, // Saffron scarf
      pants: 0x263238,
      shoes: 0x3e2723,
      glow: 0xffa000
    },
    accessory: 'dozerblade'
  },
  {
    id: 'tollman',
    name: 'Toll Man',
    icon: '🚧',
    title: 'The Gatekeeper',
    powerName: 'Toll Tax Trap',
    powerDesc: 'Slamming barrier arms descend from above, trapping and damaging the foe.',
    stats: { atk: 78, spd: 82, def: 80 },
    palette: {
      skin: 0xbd865a,
      hair: 0x333333,
      jacket: 0x00e676, // Neon green safety vest
      kurta: 0x455a64,
      pants: 0x37474f,
      shoes: 0x212121,
      glow: 0x76ff03
    },
    accessory: 'barrier'
  },
  {
    id: 'suttibabu',
    name: 'Sutti Babu',
    icon: '🕶️',
    title: 'The Slumber Striker',
    powerName: 'Sutti Strike',
    powerDesc: 'A deceptive lazy rest unleashes a sudden explosive supersonic blast.',
    stats: { atk: 82, spd: 88, def: 68 },
    palette: {
      skin: 0xc48c60,
      hair: 0x263238,
      jacket: 0x8d6e63,
      kurta: 0xf5f5f5,
      pants: 0xd7ccc8,
      shoes: 0x4e342e,
      glow: 0xab47bc
    },
    accessory: 'sunglasses'
  },
  {
    id: 'railraja',
    name: 'Rail Raja',
    icon: '🚂',
    title: 'The Express Conductor',
    powerName: 'Railway Express',
    powerDesc: 'Charges forward with the unstoppable momentum of a ghost steam train.',
    stats: { atk: 86, spd: 72, def: 84 },
    palette: {
      skin: 0xaf7950,
      hair: 0x212121,
      jacket: 0x1b5e20, // Green railway coat
      kurta: 0xffd600, // Gold brass buttons
      pants: 0x1b5e20,
      shoes: 0x000000,
      glow: 0x00e676
    },
    accessory: 'lantern'
  },
  {
    id: 'mbapu',
    name: 'Mbapu',
    icon: '🕊️',
    title: 'The Elder Master',
    powerName: 'Boss Mode',
    powerDesc: 'Channeling ancient serenity, his bamboo staff strikes with divine shockwaves.',
    stats: { atk: 70, spd: 90, def: 82 },
    palette: {
      skin: 0xa97249,
      hair: 0xcccccc,
      beard: 0x000000,
      jacket: 0xeeeeee, // Khadi shawl
      kurta: 0xffffff,
      pants: 0xf5f5f5,
      shoes: 0x5d4037,
      glow: 0xffeb3b
    },
    accessory: 'lathi'
  },
  {
    id: 'modi',
    name: 'Modi',
    icon: '🪷',
    title: 'The Vanguard',
    powerName: 'Baba Shield',
    powerDesc: 'Projects a magnificent glowing geometric energy barrier that bursts outward.',
    stats: { atk: 87, spd: 74, def: 88 },
    palette: {
      skin: 0xdfb486,
      hair: 0xffffff,
      beard: 0xffffff,
      jacket: 0xbf360c, // Deep saffron bandhgala
      kurta: 0xffffff,
      pants: 0xf5f5f5,
      shoes: 0x212121,
      glow: 0xff6d00
    },
    accessory: 'lotuscrest'
  },
  {
    id: 'rahul',
    name: 'Rahul',
    icon: '🏃',
    title: 'The Sprinter',
    powerName: 'Jan Yatra Dash',
    powerDesc: 'A lightning-speed multi-hit running blitz that tears across the battleground.',
    stats: { atk: 76, spd: 94, def: 72 },
    palette: {
      skin: 0xe5b27a,
      hair: 0x212121,
      jacket: 0xffffff,
      kurta: 0xffffff,
      pants: 0x37474f,
      shoes: 0x00e5ff, // Modern running sneakers
      glow: 0x29b6f6
    },
    accessory: 'headband'
  },
  {
    id: 'didi',
    name: 'Didi',
    icon: '📢',
    title: 'The Street Fighter',
    powerName: 'Jadu Hobe',
    powerDesc: 'Emits a roaring sonic surge through a mystical megaphone megaphone barrier.',
    stats: { atk: 84, spd: 80, def: 76 },
    palette: {
      skin: 0xc89467,
      hair: 0x111111,
      jacket: 0xffffff,
      kurta: 0x2e7d32, // Green border
      pants: 0xffffff,
      shoes: 0x4e342e,
      glow: 0x00e676
    },
    accessory: 'mic'
  },
  {
    id: 'trump',
    name: 'Trump',
    icon: '🗽',
    title: 'The Mogul',
    powerName: 'Wall Street Slam',
    powerDesc: 'Erects a towering gold brick wall from the earth, slamming it onto enemies.',
    stats: { atk: 90, spd: 62, def: 86 },
    palette: {
      skin: 0xf8a56a, // Orange-tinted skin
      hair: 0xffeb3b, // Golden swoop hair
      jacket: 0x1a237e, // Dark suit
      kurta: 0xd50000, // Giant red tie
      pants: 0x1a237e,
      shoes: 0x000000,
      glow: 0xffd600
    },
    accessory: 'goldpodium'
  },
  {
    id: 'yogi',
    name: 'Yogi',
    icon: '🧘',
    title: 'The Bulldozer Ascetic',
    powerName: 'Baba Bulldozer',
    powerDesc: 'Summons a colossal saffron bulldozer blade that crashes down from the skies.',
    stats: { atk: 93, spd: 68, def: 88 },
    palette: {
      skin: 0xdca677,
      hair: 0x000000, // Shaved
      jacket: 0xff6f00, // Full saffron robes
      kurta: 0xff8f00,
      pants: 0xff6f00,
      shoes: 0x4e342e,
      glow: 0xff3d00
    },
    accessory: 'earrings'
  },
  {
    id: 'nitin',
    name: 'Nitin',
    icon: '🛣️',
    title: 'The Expressway King',
    powerName: 'Highway Hammer',
    powerDesc: 'Slams down an asphalt road roller hammer that shatters the arena floor.',
    stats: { atk: 89, spd: 70, def: 90 },
    palette: {
      skin: 0xc89366,
      hair: 0x424242,
      jacket: 0x1565c0, // Blue engineer safari suit
      kurta: 0xfbc02d, // Hardhat / badge
      pants: 0x1565c0,
      shoes: 0x212121,
      glow: 0x29b6f6
    },
    accessory: 'hardhat'
  },
  {
    id: 'random',
    name: 'Random',
    icon: '❓',
    title: 'Mystery Fighter',
    powerName: 'Surprise Power',
    powerDesc: 'Selects a random champion from the roster with mysterious energy.',
    stats: { atk: 80, spd: 80, def: 80 },
    palette: {
      skin: 0x90caf9,
      hair: 0xba68c8,
      jacket: 0xff4081,
      kurta: 0x7c4dff,
      pants: 0x00e5ff,
      shoes: 0xffeb3b,
      glow: 0xffffff
    },
    accessory: 'question'
  }
];

// ----------------------------------------------------------------------------
// 2. SYNTHESIZED WEB AUDIO SOUND SYSTEM (100% SELF-CONTAINED)
// ----------------------------------------------------------------------------
class SoundSystem {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.bgmPlaying = false;
    this.bgmNodes = [];
    this.bgmTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      this.stopBGM();
    } else {
      this.init();
      this.playBGM();
    }
    return this.enabled;
  }

  // Play a quick synthetic sound effect
  playPunch() {
    if (!this.enabled || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    
    // Impact oscillator
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);
    
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.13);

    // Noise burst for snap
    this.playNoise(0.06, 0.3, 1200);
  }

  playKick() {
    if (!this.enabled || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.22);
    
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.23);

    this.playNoise(0.09, 0.4, 800);
  }

  playBlock() {
    if (!this.enabled || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.1);
    
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.11);
  }

  playGrab() {
    if (!this.enabled || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(200, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.35);
    
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.36);
  }

  playSuper() {
    if (!this.enabled || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    
    // Sci-fi charge up
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.35);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.7);
    
    gain.gain.setValueAtTime(0.45, now);
    gain.gain.linearRampToValueAtTime(0.8, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.75);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.76);

    // Boom blast
    setTimeout(() => {
      this.playExplosion();
    }, 250);
  }

  playExplosion() {
    if (!this.enabled || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.6);
    
    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.62);

    this.playNoise(0.5, 0.55, 600);
  }

  playJump() {
    if (!this.enabled || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(380, now + 0.15);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  playWhoosh() {
    if (!this.enabled || !this.ctx) return;
    this.playNoise(0.12, 0.2, 1600);
  }

  playNoise(duration, volume, filterFreq) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = filterFreq || 1000;
    
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();
  }

  playBeep(freq, type = 'sine', duration = 0.15, vol = 0.3) {
    if (!this.enabled || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.01);
  }

  playAnnounce(type) {
    if (!this.enabled) return;
    this.init();
    if (type === 'round1') {
      this.playBeep(330, 'square', 0.2, 0.35);
      setTimeout(() => this.playBeep(440, 'square', 0.3, 0.4), 160);
    } else if (type === 'fight') {
      this.playBeep(440, 'sawtooth', 0.15, 0.4);
      setTimeout(() => this.playBeep(660, 'sawtooth', 0.4, 0.5), 140);
    } else if (type === 'ko') {
      this.playBeep(550, 'sawtooth', 0.2, 0.5);
      setTimeout(() => this.playBeep(275, 'sawtooth', 0.6, 0.6), 200);
      setTimeout(() => this.playExplosion(), 250);
    } else if (type === 'win') {
      const notes = [440, 554, 659, 880];
      notes.forEach((n, idx) => {
        setTimeout(() => this.playBeep(n, 'triangle', 0.3, 0.35), idx * 140);
      });
    }
  }

  // Dynamic Arcade Techno Fight BGM synthesized in Web Audio
  playBGM() {
    if (!this.enabled || this.bgmPlaying) return;
    this.init();
    if (!this.ctx) return;
    this.bgmPlaying = true;

    const tempo = 132;
    const beatLen = 60 / tempo;
    const bassScale = [55, 55, 65.4, 55, 73.4, 55, 82.4, 65.4];
    let step = 0;

    const scheduleLoop = () => {
      if (!this.bgmPlaying || !this.enabled) return;
      const now = this.ctx.currentTime;

      // Bass synth note
      const bassFreq = bassScale[step % bassScale.length];
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(bassFreq, now);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + beatLen * 0.9);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350 + (step % 4) * 80, now);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + beatLen);

      // Kick drum on 0 and 2
      if (step % 2 === 0) {
        const kickOsc = this.ctx.createOscillator();
        const kickGain = this.ctx.createGain();
        kickOsc.type = 'sine';
        kickOsc.frequency.setValueAtTime(130, now);
        kickOsc.frequency.exponentialRampToValueAtTime(35, now + 0.15);
        kickGain.gain.setValueAtTime(0.25, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        kickOsc.connect(kickGain);
        kickGain.connect(this.ctx.destination);
        kickOsc.start(now);
        kickOsc.stop(now + 0.16);
      }

      // Snare / Hi-hat on 1 and 3
      if (step % 2 === 1) {
        this.playNoise(0.05, 0.08, 4000);
      }

      step++;
      this.bgmTimer = setTimeout(scheduleLoop, beatLen * 500);
    };

    scheduleLoop();
  }

  stopBGM() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

// ----------------------------------------------------------------------------
// 3. 3D PROCEDURAL CHARACTER MODEL FACTORY
// ----------------------------------------------------------------------------
class CharacterModelFactory {
  static createCharacterMesh(charData) {
    const root = new THREE.Group();
    root.name = charData.id;
    const p = charData.palette;

    // Materials
    const skinMat = new THREE.MeshLambertMaterial({ color: p.skin });
    const hairMat = new THREE.MeshLambertMaterial({ color: p.hair });
    const jacketMat = new THREE.MeshLambertMaterial({ color: p.jacket });
    const pantsMat = new THREE.MeshLambertMaterial({ color: p.pants });
    const shoesMat = new THREE.MeshLambertMaterial({ color: p.shoes });
    const accentMat = new THREE.MeshLambertMaterial({ color: p.kurta });
    const glowMat = new THREE.MeshBasicMaterial({ color: p.glow });

    // --- HIPS / PELVIS ---
    const pelvisGeo = new THREE.BoxGeometry(0.7, 0.35, 0.45);
    const pelvis = new THREE.Mesh(pelvisGeo, pantsMat);
    pelvis.position.y = 1.6;
    pelvis.castShadow = true;
    root.add(pelvis);

    // --- TORSO ---
    const torsoGeo = new THREE.BoxGeometry(0.85, 0.95, 0.5);
    const torso = new THREE.Mesh(torsoGeo, jacketMat);
    torso.position.y = 0.65;
    torso.castShadow = true;
    pelvis.add(torso);

    // Tie / Scarf / Vest Accent
    const chestStripeGeo = new THREE.BoxGeometry(0.24, 0.8, 0.52);
    const chestStripe = new THREE.Mesh(chestStripeGeo, accentMat);
    chestStripe.position.set(0, 0, 0.01);
    torso.add(chestStripe);

    // --- HEAD GROUP ---
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.8, 0);
    torso.add(headGroup);

    // Head base
    const headGeo = new THREE.BoxGeometry(0.55, 0.6, 0.55);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 0.15;
    head.castShadow = true;
    headGroup.add(head);

    // Eyes
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const eyeGeo = new THREE.BoxGeometry(0.08, 0.08, 0.05);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(0.14, 0.18, 0.28);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(-0.14, 0.18, 0.28);
    headGroup.add(leftEye, rightEye);

    // Distinctive Hair / Cap / Beard styling per character
    if (charData.id === 'mitraman' || charData.id === 'modi') {
      // White hair and trimmed white beard
      const hairGeo = new THREE.BoxGeometry(0.58, 0.25, 0.58);
      const hair = new THREE.Mesh(hairGeo, hairMat);
      hair.position.set(0, 0.38, 0);
      headGroup.add(hair);

      const beardGeo = new THREE.BoxGeometry(0.48, 0.25, 0.25);
      const beard = new THREE.Mesh(beardGeo, hairMat);
      beard.position.set(0, 0.02, 0.24);
      headGroup.add(beard);

      // Spectacles
      const specMat = new THREE.MeshBasicMaterial({ color: 0xcccccc });
      const specGeo = new THREE.RingGeometry(0.06, 0.09, 8);
      const specL = new THREE.Mesh(specGeo, specMat);
      specL.position.set(0.14, 0.18, 0.31);
      const specR = new THREE.Mesh(specGeo, specMat);
      specR.position.set(-0.14, 0.18, 0.31);
      headGroup.add(specL, specR);
    } else if (charData.id === 'trump' || charData.id === 'tariff') {
      // Swept big golden blonde hairstyle
      const hairGeo = new THREE.BoxGeometry(0.64, 0.32, 0.62);
      const hair = new THREE.Mesh(hairGeo, hairMat);
      hair.position.set(0.05, 0.42, 0.05);
      headGroup.add(hair);
    } else if (charData.id === 'mbapu') {
      // Shaved head + Round wire glasses
      const specMat = new THREE.MeshBasicMaterial({ color: 0xdddddd });
      const specGeo = new THREE.RingGeometry(0.08, 0.11, 8);
      const specL = new THREE.Mesh(specGeo, specMat);
      specL.position.set(0.14, 0.18, 0.31);
      const specR = new THREE.Mesh(specGeo, specMat);
      specR.position.set(-0.14, 0.18, 0.31);
      headGroup.add(specL, specR);
    } else if (charData.id === 'suttibabu') {
      // Dark sunglasses
      const glassMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
      const glasses = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.14, 0.1), glassMat);
      glasses.position.set(0, 0.18, 0.29);
      headGroup.add(glasses);
    } else if (charData.id === 'railraja') {
      // Station master cap
      const capMat = new THREE.MeshLambertMaterial({ color: 0x1b5e20 });
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.18, 12), capMat);
      cap.position.set(0, 0.45, 0);
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.04, 0.2), new THREE.MeshLambertMaterial({ color: 0x111111 }));
      visor.position.set(0, 0.38, 0.24);
      headGroup.add(cap, visor);
    } else if (charData.id === 'nitin') {
      // Construction yellow hardhat
      const hatMat = new THREE.MeshLambertMaterial({ color: 0xfbc02d });
      const hardhat = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), hatMat);
      hardhat.position.set(0, 0.35, 0);
      headGroup.add(hardhat);
    } else {
      // Default stylized hair
      const hairGeo = new THREE.BoxGeometry(0.6, 0.22, 0.6);
      const hair = new THREE.Mesh(hairGeo, hairMat);
      hair.position.set(0, 0.38, 0);
      headGroup.add(hair);
    }

    // --- ARMS (LEFT & RIGHT) ---
    // Right Arm (Forward / Punch arm)
    const armGeo = new THREE.BoxGeometry(0.24, 0.8, 0.24);
    const rShoulder = new THREE.Group();
    rShoulder.position.set(0.55, 0.3, 0);
    const rArm = new THREE.Mesh(armGeo, jacketMat);
    rArm.position.y = -0.35;
    rArm.castShadow = true;
    rShoulder.add(rArm);
    const rHand = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), skinMat);
    rHand.position.y = -0.42;
    rArm.add(rHand);
    torso.add(rShoulder);

    // Left Arm (Back arm)
    const lShoulder = new THREE.Group();
    lShoulder.position.set(-0.55, 0.3, 0);
    const lArm = new THREE.Mesh(armGeo, jacketMat);
    lArm.position.y = -0.35;
    lArm.castShadow = true;
    lShoulder.add(lArm);
    const lHand = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), skinMat);
    lHand.position.y = -0.42;
    lArm.add(lHand);
    torso.add(lShoulder);

    // --- LEGS (LEFT & RIGHT) ---
    const legGeo = new THREE.BoxGeometry(0.28, 0.9, 0.28);
    const shoeGeo = new THREE.BoxGeometry(0.3, 0.2, 0.45);

    // Right Leg
    const rHip = new THREE.Group();
    rHip.position.set(0.24, -0.15, 0);
    const rLeg = new THREE.Mesh(legGeo, pantsMat);
    rLeg.position.y = -0.45;
    rLeg.castShadow = true;
    rHip.add(rLeg);
    const rShoe = new THREE.Mesh(shoeGeo, shoesMat);
    rShoe.position.set(0, -0.45, 0.08);
    rShoe.castShadow = true;
    rLeg.add(rShoe);
    pelvis.add(rHip);

    // Left Leg
    const lHip = new THREE.Group();
    lHip.position.set(-0.24, -0.15, 0);
    const lLeg = new THREE.Mesh(legGeo, pantsMat);
    lLeg.position.y = -0.45;
    lLeg.castShadow = true;
    lHip.add(lLeg);
    const lShoe = new THREE.Mesh(shoeGeo, shoesMat);
    lShoe.position.set(0, -0.45, 0.08);
    lShoe.castShadow = true;
    lLeg.add(lShoe);
    pelvis.add(lHip);

    // --- SIGNATURE ACCESSORY / PROP ---
    if (charData.accessory === 'chakra') {
      const chakraGeo = new THREE.TorusGeometry(0.32, 0.05, 8, 16);
      const chakra = new THREE.Mesh(chakraGeo, glowMat);
      chakra.position.set(0, 0, -0.35);
      chakra.name = 'prop_chakra';
      torso.add(chakra);
    } else if (charData.accessory === 'goldpotato') {
      const potato = new THREE.Mesh(new THREE.DodecahedronGeometry(0.18), glowMat);
      potato.position.set(0, -0.15, 0.2);
      rHand.add(potato);
    } else if (charData.accessory === 'lathi') {
      const lathi = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8), new THREE.MeshLambertMaterial({ color: 0x8d6e63 }));
      lathi.position.set(0, 0.4, 0.2);
      rHand.add(lathi);
    } else if (charData.accessory === 'briefcase') {
      const briefcase = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.12), new THREE.MeshLambertMaterial({ color: 0x3e2723 }));
      briefcase.position.set(0, -0.25, 0);
      rHand.add(briefcase);
    }

    // Attach limb references for procedural animation
    root.joints = {
      pelvis,
      torso,
      headGroup,
      rShoulder,
      lShoulder,
      rArm,
      lArm,
      rHip,
      lHip
    };

    return root;
  }
}

// ----------------------------------------------------------------------------
// 4. ARENA GENERATOR (3 DETAILED 3D ARENAS)
// ----------------------------------------------------------------------------
class ArenaBuilder {
  static buildArena(scene, arenaId) {
    // Clear previous stage objects with tag 'stage-object'
    const toRemove = [];
    scene.children.forEach(child => {
      if (child.userData && child.userData.isStage) {
        toRemove.push(child);
      }
    });
    toRemove.forEach(child => scene.remove(child));

    const arenaGroup = new THREE.Group();
    arenaGroup.userData.isStage = true;

    if (arenaId === 'sansad') {
      ArenaBuilder.buildSansad(arenaGroup);
    } else if (arenaId === 'jantar') {
      ArenaBuilder.buildJantarMantar(arenaGroup);
    } else {
      ArenaBuilder.buildDesiSadak(arenaGroup);
    }

    scene.add(arenaGroup);
  }

  // ARENA 1: SANSAD (Grand Circular Colonnade, Red Carpet Floor, Warm Regal Lights)
  static buildSansad(stage) {
    // Main Battle Floor (Red Carpet over Sandstone)
    const floorGeo = new THREE.PlaneGeometry(38, 14);
    const floorMat = new THREE.MeshLambertMaterial({ color: 0xb71c1c }); // Crimson red carpet
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, 0);
    floor.receiveShadow = true;
    stage.add(floor);

    // Gold carpet border trim
    const trimMat = new THREE.MeshLambertMaterial({ color: 0xffd54f });
    const trim1 = new THREE.Mesh(new THREE.BoxGeometry(38, 0.05, 0.3), trimMat);
    trim1.position.set(0, 0.02, 3.2);
    const trim2 = trim1.clone();
    trim2.position.set(0, 0.02, -3.2);
    stage.add(trim1, trim2);

    // Grand Circular Parliament Colonnade (Placed STRICTLY in background z < -4)
    const pillarMat = new THREE.MeshLambertMaterial({ color: 0xefd8b8 }); // Sandstone
    const numPillars = 14;
    const radius = 16;
    for (let i = 0; i < numPillars; i++) {
      const angle = (i / (numPillars - 1)) * Math.PI * 0.85 + Math.PI * 0.075;
      const x = Math.cos(angle) * radius;
      const z = -Math.sin(angle) * (radius * 0.6) - 5; // strictly behind fighting line

      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.75, 12, 16), pillarMat);
      pillar.position.set(x, 6, z);
      pillar.castShadow = true;
      stage.add(pillar);

      // Capital base and top
      const cap = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 1.6), pillarMat);
      cap.position.set(x, 12, z);
      stage.add(cap);
    }

    // Curved Entablature / Roof arch on top of pillars
    const roofCurve = new THREE.Mesh(
      new THREE.CylinderGeometry(18, 18, 1.2, 32, 1, true, Math.PI * 0.1, Math.PI * 0.8),
      new THREE.MeshLambertMaterial({ color: 0xdec09c, side: THREE.DoubleSide })
    );
    roofCurve.position.set(0, 12.5, -9);
    stage.add(roofCurve);

    // Central Grand Dome silhouette
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(6, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5),
      new THREE.MeshLambertMaterial({ color: 0xd7b489 })
    );
    dome.position.set(0, 13, -15);
    stage.add(dome);

    // Indian Tricolor Banners along background wall
    for (let i = -3; i <= 3; i += 2) {
      const flagGroup = new THREE.Group();
      flagGroup.position.set(i * 4.5, 5, -8);
      const f1 = new THREE.Mesh(new THREE.BoxGeometry(2, 0.4, 0.05), new THREE.MeshLambertMaterial({ color: 0xff9933 }));
      const f2 = new THREE.Mesh(new THREE.BoxGeometry(2, 0.4, 0.05), new THREE.MeshLambertMaterial({ color: 0xffffff }));
      const f3 = new THREE.Mesh(new THREE.BoxGeometry(2, 0.4, 0.05), new THREE.MeshLambertMaterial({ color: 0x138808 }));
      f1.position.y = 0.4;
      f2.position.y = 0;
      f3.position.y = -0.4;
      flagGroup.add(f1, f2, f3);
      stage.add(flagGroup);
    }
  }

  // ARENA 2: JANTAR MANTAR (Terracotta Astronomical Instruments, Sundials, Desert Sunset)
  static buildJantarMantar(stage) {
    // Battle Ground (Terracotta stone tiles)
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(38, 14),
      new THREE.MeshLambertMaterial({ color: 0xb55338 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    stage.add(floor);

    const stoneMat = new THREE.MeshLambertMaterial({ color: 0xd96b43 }); // Reddish sandstone

    // Samrat Yantra: Massive Ramp Sundial in background (z = -7)
    const rampGroup = new THREE.Group();
    rampGroup.position.set(0, 0, -8);

    const rampGeo = new THREE.BufferGeometry();
    // Triangular prism wedge for sundial
    const vertices = new Float32Array([
      // Front Triangle
      -2, 0,  1,
       2, 0,  1,
       2, 8, -5,
      // Back Triangle
      -2, 0, -5,
      -2, 8, -5,
       2, 8, -5
    ]);
    const ramp = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 10), stoneMat);
    ramp.rotation.x = 0.5;
    ramp.position.set(0, 3.5, -8);
    ramp.castShadow = true;
    stage.add(ramp);

    // Cylindrical Rama Yantra Towers (left and right background)
    for (const x of [-10, 10]) {
      const tower = new THREE.Mesh(
        new THREE.CylinderGeometry(3.5, 3.5, 6, 24, 1, true),
        new THREE.MeshLambertMaterial({ color: 0xc45733, side: THREE.DoubleSide })
      );
      tower.position.set(x, 3, -7);
      stage.add(tower);

      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 6, 12), stoneMat);
      pillar.position.set(x, 3, -7);
      stage.add(pillar);
    }

    // Stepped terraces in background
    for (let step = 0; step < 4; step++) {
      const stepMesh = new THREE.Mesh(
        new THREE.BoxGeometry(32, 0.6, 2),
        stoneMat
      );
      stepMesh.position.set(0, step * 0.6, -5 - step * 1.5);
      stage.add(stepMesh);
    }
  }

  // ARENA 3: DESI SADAK (Indian Expressway, Asphalt, Toll Gate, Milestone, Billboards)
  static buildDesiSadak(stage) {
    // Asphalt Highway Surface
    const road = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 14),
      new THREE.MeshLambertMaterial({ color: 0x212124 })
    );
    road.rotation.x = -Math.PI / 2;
    road.receiveShadow = true;
    stage.add(road);

    // Yellow Lane Center Markings
    const laneMat = new THREE.MeshBasicMaterial({ color: 0xffd600 });
    for (let i = -6; i <= 6; i++) {
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.25), laneMat);
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(i * 3, 0.02, 0);
      stage.add(stripe);
    }

    // White shoulder lines
    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const line1 = new THREE.Mesh(new THREE.PlaneGeometry(40, 0.2), whiteMat);
    line1.rotation.x = -Math.PI / 2;
    line1.position.set(0, 0.02, 2.8);
    const line2 = line1.clone();
    line2.position.set(0, 0.02, -2.8);
    stage.add(line1, line2);

    // Highway Toll Plaza Gate in background (z = -6)
    const tollMat = new THREE.MeshLambertMaterial({ color: 0x37474f });
    const barrierMat = new THREE.MeshLambertMaterial({ color: 0xff1744 });

    // Toll Booth Pillars
    for (const x of [-7, 0, 7]) {
      const booth = new THREE.Mesh(new THREE.BoxGeometry(1.8, 4.5, 2.5), tollMat);
      booth.position.set(x, 2.25, -6);
      booth.castShadow = true;
      stage.add(booth);

      // Toll booth roof canopy
      const roof = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.4, 3.5), new THREE.MeshLambertMaterial({ color: 0x0277bd }));
      roof.position.set(x, 4.6, -6);
      stage.add(roof);

      // Green & Red Lane Indicator lights
      const greenLight = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), new THREE.MeshBasicMaterial({ color: 0x00e676 }));
      greenLight.position.set(x, 4.2, -4.7);
      stage.add(greenLight);
    }

    // Milestone Marker on roadside
    const stoneBase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 12), new THREE.MeshLambertMaterial({ color: 0xf5f5f5 }));
    stoneBase.position.set(11, 0.6, -3.5);
    const stoneTop = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), new THREE.MeshLambertMaterial({ color: 0xffeb3b }));
    stoneTop.position.set(11, 1.2, -3.5);
    stage.add(stoneBase, stoneTop);

    // Overhead Highway Billboard
    const boardGroup = new THREE.Group();
    boardGroup.position.set(0, 7.5, -9);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(16, 3.5, 0.3), new THREE.MeshLambertMaterial({ color: 0x263238 }));
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(15.4, 3), new THREE.MeshBasicMaterial({ color: 0x00701a }));
    banner.position.z = 0.16;
    boardGroup.add(frame, banner);

    // Billboard poles
    const pole1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 8, 8), tollMat);
    pole1.position.set(-6, -4, 0);
    const pole2 = pole1.clone();
    pole2.position.set(6, -4, 0);
    boardGroup.add(pole1, pole2);
    stage.add(boardGroup);
  }
}

// ----------------------------------------------------------------------------
// 5. PARTICLE & SPECIAL FX MANAGER
// ----------------------------------------------------------------------------
class FXSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.projectiles = [];
  }

  // Create hit spark on impact
  spawnHitSparks(x, y, color = 0xffd600, count = 16) {
    const geo = new THREE.SphereGeometry(0.08, 6, 6);
    const mat = new THREE.MeshBasicMaterial({ color });

    for (let i = 0; i < count; i++) {
      const p = new THREE.Mesh(geo, mat);
      p.position.set(x, y, 0);
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.08 + Math.random() * 0.16;
      p.userData = {
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.04,
        life: 1.0,
        decay: 0.04 + Math.random() * 0.04
      };
      this.scene.add(p);
      this.particles.push(p);
    }
  }

  // Create block shield spark
  spawnBlockSparks(x, y) {
    this.spawnHitSparks(x, y, 0x00e5ff, 12);
  }

  // Spawn character special projectile / power mesh
  spawnSpecialPower(attacker, target, powerName) {
    const projGroup = new THREE.Group();
    projGroup.position.set(attacker.mesh.position.x, attacker.mesh.position.y + 1.2, 0);
    const dir = attacker.facing;

    let proj = null;
    let speed = 0.28 * dir;
    let life = 90;
    let damage = 32;

    if (powerName.includes('Chakra')) {
      // Mitra Chakra: Glowing rotating disc
      const geo = new THREE.TorusGeometry(0.65, 0.1, 8, 24);
      const mat = new THREE.MeshBasicMaterial({ color: 0xff9100 });
      proj = new THREE.Mesh(geo, mat);
      proj.rotation.x = Math.PI / 2;
    } else if (powerName.includes('Aloo')) {
      // Golden potato laser ball
      const geo = new THREE.DodecahedronGeometry(0.5);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffd600 });
      proj = new THREE.Mesh(geo, mat);
    } else if (powerName.includes('Dozer') || powerName.includes('Bulldozer')) {
      // Heavy bulldozer spectral blade
      const geo = new THREE.BoxGeometry(1.6, 1.2, 0.8);
      const mat = new THREE.MeshLambertMaterial({ color: 0xffb300, transparent: true, opacity: 0.85 });
      proj = new THREE.Mesh(geo, mat);
      speed = 0.22 * dir;
      damage = 36;
    } else if (powerName.includes('Tornado')) {
      // Trade Tornado: Swirling cone
      const geo = new THREE.ConeGeometry(0.8, 2.2, 12);
      const mat = new THREE.MeshLambertMaterial({ color: 0x00e676, transparent: true, opacity: 0.75 });
      proj = new THREE.Mesh(geo, mat);
      proj.rotation.z = Math.PI;
    } else if (powerName.includes('Railway')) {
      // Train phantom
      const geo = new THREE.BoxGeometry(2.2, 1.4, 0.9);
      const mat = new THREE.MeshLambertMaterial({ color: 0x2e7d32 });
      proj = new THREE.Mesh(geo, mat);
      speed = 0.32 * dir;
    } else {
      // Generic high-impact energy sphere
      const geo = new THREE.SphereGeometry(0.6, 12, 12);
      const mat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
      proj = new THREE.Mesh(geo, mat);
    }

    projGroup.add(proj);
    this.scene.add(projGroup);

    this.projectiles.push({
      group: projGroup,
      vx: speed,
      life,
      damage,
      attacker,
      target,
      powerName
    });
  }

  update() {
    // Update individual particle sparks
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.position.x += p.userData.vx;
      p.position.y += p.userData.vy;
      p.userData.vy -= 0.008; // gravity
      p.userData.life -= p.userData.decay;
      p.scale.setScalar(p.userData.life);

      if (p.userData.life <= 0) {
        this.scene.remove(p);
        this.particles.splice(i, 1);
      }
    }

    // Update active projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.group.position.x += pr.vx;
      pr.group.rotation.y += 0.2;
      pr.group.rotation.z += 0.1;
      pr.life--;

      // Check collision with opponent
      const dist = Math.abs(pr.group.position.x - pr.target.mesh.position.x);
      const dy = Math.abs(pr.group.position.y - (pr.target.mesh.position.y + 1.0));

      if (dist < 1.4 && dy < 1.6) {
        // Impact!
        pr.target.takeDamage(pr.damage, 25, 0.45 * Math.sign(pr.vx), false, true);
        this.spawnHitSparks(pr.group.position.x, pr.group.position.y, 0xff1744, 28);
        this.scene.remove(pr.group);
        this.projectiles.splice(i, 1);
        continue;
      }

      if (pr.life <= 0 || Math.abs(pr.group.position.x) > CONFIG.ARENA_BOUNDS + 3) {
        this.scene.remove(pr.group);
        this.projectiles.splice(i, 1);
      }
    }
  }

  clear() {
    this.particles.forEach(p => this.scene.remove(p));
    this.particles = [];
    this.projectiles.forEach(pr => this.scene.remove(pr.group));
    this.projectiles = [];
  }
}

// ----------------------------------------------------------------------------
// 6. FIGHTER CLASS (PHYSICS, ANIMATION, COMBAT STATE MACHINE)
// ----------------------------------------------------------------------------
class Fighter {
  constructor(charData, isPlayer2 = false, soundSystem, fxSystem) {
    this.charData = charData;
    this.isPlayer2 = isPlayer2;
    this.sounds = soundSystem;
    this.fx = fxSystem;

    // Build 3D mesh
    this.mesh = CharacterModelFactory.createCharacterMesh(charData);
    this.joints = this.mesh.joints;

    // Movement & Physics
    this.x = isPlayer2 ? 4.5 : -4.5;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.facing = isPlayer2 ? -1 : 1;
    this.isGrounded = true;

    // Combat Stats & Meter
    this.health = CONFIG.MAX_HEALTH;
    this.superMeter = 0;
    this.roundsWon = 0;

    // State machine
    // States: 'IDLE', 'WALK', 'JUMP', 'CROUCH', 'BLOCK', 'PUNCH', 'KICK', 'GRAB', 'SUPER', 'HIT', 'KNOCKDOWN', 'VICTORY'
    this.state = 'IDLE';
    this.stateTime = 0;
    this.hitStun = 0;
    this.knockdownTime = 0;
    this.comboHits = 0;
    this.comboResetTimer = 0;

    // Opponent reference (set by game manager)
    this.opponent = null;

    // Key states for this fighter
    this.inputs = {
      left: false,
      right: false,
      jump: false,
      crouch: false,
      block: false,
      punch: false,
      kick: false,
      grab: false,
      super: false
    };

    // Edge-trigger buffers to prevent infinite attack spam on held keys
    this.justPressed = {
      punch: false,
      kick: false,
      grab: false,
      super: false,
      jump: false
    };

    this.mesh.position.set(this.x, this.y, 0);
  }

  reset(xPos) {
    this.x = xPos;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.isGrounded = true;
    this.health = CONFIG.MAX_HEALTH;
    this.superMeter = 0;
    this.state = 'IDLE';
    this.stateTime = 0;
    this.hitStun = 0;
    this.knockdownTime = 0;
    this.comboHits = 0;
    this.mesh.position.set(this.x, this.y, 0);
    this.mesh.rotation.y = this.isPlayer2 ? -Math.PI / 2 : Math.PI / 2;
  }

  update() {
    this.stateTime++;

    // Combo timeout check
    if (this.comboResetTimer > 0) {
      this.comboResetTimer--;
      if (this.comboResetTimer <= 0) {
        this.comboHits = 0;
      }
    }

    // Facing direction: always face opponent unless mid-attack animation
    if (this.opponent && this.canCancelState()) {
      if (this.opponent.x > this.x) {
        this.facing = 1;
      } else {
        this.facing = -1;
      }
    }

    // Smoothly turn mesh to face opponent
    const targetRotY = this.facing === 1 ? Math.PI / 2 : -Math.PI / 2;
    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, targetRotY, 0.25);

    // Handle Active States
    if (this.state === 'HIT') {
      this.hitStun--;
      if (this.hitStun <= 0) {
        this.state = 'IDLE';
      }
    } else if (this.state === 'KNOCKDOWN') {
      this.knockdownTime--;
      if (this.knockdownTime <= 0) {
        this.state = 'IDLE';
      }
    } else if (this.state === 'PUNCH') {
      if (this.stateTime === 5) {
        this.checkStrikeHit(1.4, 6, 7, 0.12, false);
      }
      if (this.stateTime > 14) this.state = 'IDLE';
    } else if (this.state === 'KICK') {
      if (this.stateTime === 7) {
        this.checkStrikeHit(1.6, 10, 10, 0.2, false);
      }
      if (this.stateTime > 20) this.state = 'IDLE';
    } else if (this.state === 'GRAB') {
      if (this.stateTime === 6) {
        this.checkGrabHit();
      }
      if (this.stateTime > 22) this.state = 'IDLE';
    } else if (this.state === 'SUPER') {
      if (this.stateTime === 15) {
        this.fx.spawnSpecialPower(this, this.opponent, this.charData.powerName);
      }
      if (this.stateTime > 40) this.state = 'IDLE';
    } else if (this.state === 'VICTORY' || this.state === 'DEFEAT') {
      // Round end lock
    } else {
      // Normal controllable state
      this.handleInputs();
    }

    // Apply Physics & Gravity
    this.vy += CONFIG.GRAVITY;
    this.y += this.vy;
    this.x += this.vx;

    // Floor collision
    if (this.y <= CONFIG.FLOOR_Y) {
      this.y = CONFIG.FLOOR_Y;
      this.vy = 0;
      this.isGrounded = true;
      if (this.state === 'JUMP') {
        this.state = 'IDLE';
      }
    } else {
      this.isGrounded = false;
    }

    // Apply friction to horizontal velocity
    this.vx *= 0.82;

    // Arena boundary clamp
    if (this.x < -CONFIG.ARENA_BOUNDS) {
      this.x = -CONFIG.ARENA_BOUNDS;
      this.vx = 0;
    }
    if (this.x > CONFIG.ARENA_BOUNDS) {
      this.x = CONFIG.ARENA_BOUNDS;
      this.vx = 0;
    }

    // Update 3D Mesh Position
    this.mesh.position.set(this.x, this.y, 0);

    // Procedural Joint Animations
    this.animateJoints();
  }

  canCancelState() {
    return ['IDLE', 'WALK', 'BLOCK', 'CROUCH'].includes(this.state);
  }

  handleInputs() {
    const spd = (this.charData.stats.spd / 100) * 0.16;

    // Super Attack
    if (this.justPressed.super && this.superMeter >= CONFIG.MAX_SUPER) {
      this.superMeter = 0;
      this.state = 'SUPER';
      this.stateTime = 0;
      this.vx = 0;
      this.sounds.playSuper();
      return;
    }

    // Grab Attack
    if (this.justPressed.grab && this.isGrounded) {
      this.state = 'GRAB';
      this.stateTime = 0;
      this.vx = 0.08 * this.facing;
      this.sounds.playWhoosh();
      return;
    }

    // Punch Attack
    if (this.justPressed.punch && this.isGrounded) {
      this.state = 'PUNCH';
      this.stateTime = 0;
      this.vx = 0.06 * this.facing;
      this.sounds.playWhoosh();
      return;
    }

    // Kick Attack
    if (this.justPressed.kick && this.isGrounded) {
      this.state = 'KICK';
      this.stateTime = 0;
      this.vx = 0.09 * this.facing;
      this.sounds.playWhoosh();
      return;
    }

    // Jump
    if (this.justPressed.jump && this.isGrounded) {
      this.vy = 0.42;
      this.state = 'JUMP';
      this.stateTime = 0;
      this.sounds.playJump();
      if (this.inputs.right) this.vx = spd * 1.2;
      if (this.inputs.left) this.vx = -spd * 1.2;
      return;
    }

    // Block
    if (this.inputs.block && this.isGrounded) {
      this.state = 'BLOCK';
      this.vx = 0;
      return;
    }

    // Crouch
    if (this.inputs.crouch && this.isGrounded) {
      this.state = 'CROUCH';
      this.vx = 0;
      return;
    }

    // Walking Forward / Backward
    if (this.isGrounded) {
      if (this.inputs.right) {
        this.vx = spd;
        this.state = 'WALK';
      } else if (this.inputs.left) {
        this.vx = -spd;
        this.state = 'WALK';
      } else {
        this.state = 'IDLE';
      }
    }
  }

  checkStrikeHit(range, damage, stunFrames, knockback, isHeavy) {
    if (!this.opponent) return;
    const dist = Math.abs(this.x - this.opponent.x);
    const dy = Math.abs(this.y - this.opponent.y);

    if (dist <= range && dy < 1.4) {
      // Hit confirmed!
      this.buildSuper(8);
      this.opponent.takeDamage(damage, stunFrames, knockback * this.facing, isHeavy);
      if (isHeavy) {
        this.sounds.playKick();
      } else {
        this.sounds.playPunch();
      }
    }
  }

  checkGrabHit() {
    if (!this.opponent) return;
    const dist = Math.abs(this.x - this.opponent.x);
    if (dist <= 1.2) {
      // Grab bypasses normal block!
      this.buildSuper(12);
      this.opponent.takeDamage(15, 25, 0.4 * this.facing, true, true);
      this.sounds.playGrab();
    }
  }

  takeDamage(amount, stunDuration, knockbackForce, isHeavy = false, bypassBlock = false) {
    if (this.state === 'VICTORY' || this.state === 'DEFEAT') return;

    // Check if blocking
    if (this.state === 'BLOCK' && !bypassBlock) {
      // Reduced damage and block sparks
      this.health = Math.max(0, this.health - amount * 0.2);
      this.vx = knockbackForce * 0.5;
      this.sounds.playBlock();
      this.fx.spawnBlockSparks(this.x, this.y + 1.2);
      return;
    }

    // Unblocked hit
    const defFactor = (100 - (this.charData.stats.def * 0.25)) / 100;
    const finalDamage = Math.max(2, amount * defFactor);
    this.health = Math.max(0, this.health - finalDamage);

    // Build super for taking damage
    this.buildSuper(6);

    // Hit sparks
    this.fx.spawnHitSparks(this.x, this.y + 1.2, isHeavy ? 0xff1744 : 0xffd600, 18);

    // Knockdown or Hit Stun
    if (isHeavy || this.health <= 0) {
      this.state = 'KNOCKDOWN';
      this.knockdownTime = 30;
      this.vx = knockbackForce * 1.5;
      this.vy = 0.2;
    } else {
      this.state = 'HIT';
      this.hitStun = stunDuration;
      this.vx = knockbackForce;
    }

    // Opponent combo count increment
    if (this.opponent) {
      this.opponent.comboHits++;
      this.opponent.comboResetTimer = 50;
    }
  }

  buildSuper(amount) {
    this.superMeter = Math.min(CONFIG.MAX_SUPER, this.superMeter + amount);
  }

  // Procedural Joint Animations
  animateJoints() {
    const t = this.stateTime * 0.15;
    const j = this.joints;
    if (!j) return;

    // Reset joint positions to neutral
    j.pelvis.position.y = 1.6;
    j.torso.rotation.set(0, 0, 0);
    j.rShoulder.rotation.set(0, 0, 0);
    j.lShoulder.rotation.set(0, 0, 0);
    j.rHip.rotation.set(0, 0, 0);
    j.lHip.rotation.set(0, 0, 0);

    if (this.state === 'IDLE') {
      // Natural breathing & fighting stance bounce
      const bob = Math.sin(t) * 0.04;
      j.pelvis.position.y = 1.6 + bob;
      j.torso.rotation.x = Math.sin(t * 0.8) * 0.05;
      j.rShoulder.rotation.x = 0.5 + Math.sin(t) * 0.05; // Guard up
      j.lShoulder.rotation.x = 0.3 - Math.sin(t) * 0.05;
    } else if (this.state === 'WALK') {
      // Walking swing
      const swing = Math.sin(t * 1.6);
      j.rHip.rotation.z = swing * 0.5;
      j.lHip.rotation.z = -swing * 0.5;
      j.rShoulder.rotation.x = -swing * 0.4;
      j.lShoulder.rotation.x = swing * 0.4;
    } else if (this.state === 'JUMP') {
      // Tucked jump pose
      j.rHip.rotation.z = 0.8;
      j.lHip.rotation.z = 0.6;
      j.rShoulder.rotation.x = -1.2;
      j.lShoulder.rotation.x = -1.2;
    } else if (this.state === 'CROUCH') {
      // Duck down
      j.pelvis.position.y = 1.1;
      j.rHip.rotation.z = 1.1;
      j.lHip.rotation.z = 1.1;
      j.rShoulder.rotation.x = 0.8;
      j.lShoulder.rotation.x = 0.8;
    } else if (this.state === 'BLOCK') {
      // Cross-arms guard
      j.rShoulder.rotation.x = 1.2;
      j.lShoulder.rotation.x = 1.2;
      j.rShoulder.rotation.y = -0.4;
      j.lShoulder.rotation.y = 0.4;
    } else if (this.state === 'PUNCH') {
      // Straight right punch thrust
      const progress = Math.min(1, this.stateTime / 7);
      j.torso.rotation.y = -0.4 * progress;
      j.rShoulder.rotation.x = 1.6 * progress;
      j.lShoulder.rotation.x = 0.6;
    } else if (this.state === 'KICK') {
      // High snap kick
      const progress = Math.min(1, this.stateTime / 10);
      j.rHip.rotation.z = -1.8 * progress;
      j.torso.rotation.z = 0.4 * progress;
    } else if (this.state === 'GRAB') {
      // Two-handed lunge
      j.rShoulder.rotation.x = 1.5;
      j.lShoulder.rotation.x = 1.5;
      j.torso.rotation.x = 0.3;
    } else if (this.state === 'SUPER') {
      // Cinematic powering up pose
      j.rShoulder.rotation.x = -2.2;
      j.lShoulder.rotation.x = -2.2;
      j.torso.rotation.x = -0.2;
      j.pelvis.position.y = 1.8 + Math.sin(t * 3) * 0.08;
    } else if (this.state === 'HIT') {
      // Flinch back
      j.torso.rotation.x = -0.4;
      j.rShoulder.rotation.x = -0.5;
      j.lShoulder.rotation.x = -0.5;
    } else if (this.state === 'KNOCKDOWN') {
      // Fall backwards onto floor
      j.pelvis.position.y = 0.4;
      j.torso.rotation.x = -1.4;
      j.rHip.rotation.z = 0.4;
      j.lHip.rotation.z = 0.4;
    } else if (this.state === 'VICTORY') {
      // Both arms raised high in celebration
      j.rShoulder.rotation.x = -2.6;
      j.lShoulder.rotation.x = -2.6;
      j.torso.rotation.y = Math.sin(t) * 0.2;
    }
  }
}

// ----------------------------------------------------------------------------
// 7. ARTIFICIAL INTELLIGENCE (EASY, NORMAL, HARD)
// ----------------------------------------------------------------------------
class FighterAI {
  constructor(fighter, difficulty = 'normal') {
    this.fighter = fighter;
    this.difficulty = difficulty;
    this.decisionTimer = 0;
  }

  update() {
    if (!this.fighter.opponent || this.fighter.state === 'VICTORY' || this.fighter.state === 'DEFEAT') {
      return;
    }

    const dist = Math.abs(this.fighter.x - this.fighter.opponent.x);
    const opp = this.fighter.opponent;

    // Reset edge-triggers
    this.fighter.justPressed.punch = false;
    this.fighter.justPressed.kick = false;
    this.fighter.justPressed.grab = false;
    this.fighter.justPressed.super = false;
    this.fighter.justPressed.jump = false;

    this.decisionTimer--;
    if (this.decisionTimer > 0) return;

    // Decision frequency based on difficulty
    const intervals = { easy: 24, normal: 12, hard: 5 };
    this.decisionTimer = intervals[this.difficulty] || 12;

    // Reset continuous movement inputs
    this.fighter.inputs.left = false;
    this.fighter.inputs.right = false;
    this.fighter.inputs.block = false;
    this.fighter.inputs.crouch = false;

    // 1. SUPER ATTACK DECISION
    if (this.fighter.superMeter >= CONFIG.MAX_SUPER) {
      const superChance = this.difficulty === 'hard' ? 0.75 : this.difficulty === 'normal' ? 0.5 : 0.25;
      if (Math.random() < superChance && dist < 7) {
        this.fighter.justPressed.super = true;
        return;
      }
    }

    // 2. DEFENSIVE BLOCKING (Reaction to opponent attacking)
    const oppAttacking = ['PUNCH', 'KICK', 'SUPER'].includes(opp.state);
    if (oppAttacking && dist < 2.5) {
      const blockChance = this.difficulty === 'hard' ? 0.85 : this.difficulty === 'normal' ? 0.5 : 0.2;
      if (Math.random() < blockChance) {
        this.fighter.inputs.block = true;
        return;
      }
    }

    // 3. CLOSE RANGE COMBAT (In strike distance)
    if (dist < 1.6) {
      // If opponent is blocking, grab them!
      if (opp.state === 'BLOCK' && Math.random() < 0.7) {
        this.fighter.justPressed.grab = true;
        return;
      }

      const roll = Math.random();
      if (roll < 0.45) {
        this.fighter.justPressed.punch = true;
      } else if (roll < 0.8) {
        this.fighter.justPressed.kick = true;
      } else if (roll < 0.95 && this.difficulty !== 'easy') {
        this.fighter.justPressed.grab = true;
      } else {
        // Back off slightly
        if (this.fighter.x > opp.x) this.fighter.inputs.right = true;
        else this.fighter.inputs.left = true;
      }
      return;
    }

    // 4. MEDIUM RANGE SPACING
    if (dist >= 1.6 && dist < 4.5) {
      const roll = Math.random();
      if (roll < 0.65) {
        // Move towards player
        if (this.fighter.x < opp.x) this.fighter.inputs.right = true;
        else this.fighter.inputs.left = true;
      } else if (roll < 0.8 && this.difficulty === 'hard') {
        // Jump in attack
        this.fighter.justPressed.jump = true;
        if (this.fighter.x < opp.x) this.fighter.inputs.right = true;
        else this.fighter.inputs.left = true;
      } else {
        // Crouch or feint
        this.fighter.inputs.crouch = true;
      }
      return;
    }

    // 5. LONG RANGE (Approach player)
    if (dist >= 4.5) {
      if (this.fighter.x < opp.x) this.fighter.inputs.right = true;
      else this.fighter.inputs.left = true;
    }
  }
}

// ----------------------------------------------------------------------------
// 8. MAIN GAME CONTROLLER & UI MANAGER
// ----------------------------------------------------------------------------
class FightArenaGame {
  constructor() {
    this.sound = new SoundSystem();
    this.mode = 'cpu'; // 'cpu' or 'pvp'
    this.difficulty = 'normal'; // 'easy', 'normal', 'hard'
    this.selectedArena = 'sansad';
    this.p1CharIndex = 0;
    this.p2CharIndex = 1;
    this.selectionTurn = 1; // 1 = P1 choosing, 2 = P2/CPU choosing

    // Three.js Core Components
    this.canvas = document.getElementById('game-canvas');
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.fx = null;

    // Fighters
    this.fighter1 = null;
    this.fighter2 = null;
    this.ai = null;

    // Round Logic
    this.roundTime = CONFIG.ROUND_TIME;
    this.timerInterval = null;
    this.currentRound = 1;
    this.isPaused = false;
    this.isMatchActive = false;

    // Preview Canvases
    this.p1Preview = null;
    this.p2Preview = null;

    // DOM Elements Cache
    this.screens = {
      menu: document.getElementById('screen-menu'),
      select: document.getElementById('screen-select'),
      vs: document.getElementById('screen-vs'),
      battle: document.getElementById('screen-battle')
    };

    this.modals = {
      pause: document.getElementById('modal-pause'),
      gameover: document.getElementById('modal-gameover'),
      controls: document.getElementById('modal-controls')
    };

    this.initThreeJS();
    this.setupUI();
    this.setupInputs();
    this.setupPreviewRenderers();
    this.populateCharacterGrid();
    this.updatePreviewCards();
  }

  // --- Three.js Scene Setup ---
  initThreeJS() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0c0f1d);
    this.scene.fog = new THREE.FogExp2(0x0c0f1d, 0.022);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 3.2, 12);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffaed, 1.2);
    dirLight.position.set(5, 12, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 30;
    dirLight.shadow.camera.left = -16;
    dirLight.shadow.camera.right = 16;
    dirLight.shadow.camera.top = 10;
    dirLight.shadow.camera.bottom = -2;
    this.scene.add(dirLight);

    // Dynamic Rim Light for dramatic fighting outline
    const rimLight = new THREE.DirectionalLight(0x00e5ff, 0.5);
    rimLight.position.set(-6, 8, -6);
    this.scene.add(rimLight);

    // Initialize FX System
    this.fx = new FXSystem(this.scene);

    // Responsive Resize Handler
    window.addEventListener('resize', () => this.onWindowResize());

    // Start Main Render Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  onWindowResize() {
    if (!this.renderer || !this.camera) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // --- Character Selection 3D Preview Renderers ---
  setupPreviewRenderers() {
    this.p1Preview = this.createPreviewViewport('p1-preview-canvas');
    this.p2Preview = this.createPreviewViewport('p2-preview-canvas');
  }

  createPreviewViewport(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(240, 240);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 20);
    camera.position.set(0, 1.8, 4.6);

    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(2, 5, 4);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    return { renderer, scene, camera, mesh: null };
  }

  updatePreviewViewport(viewport, charData) {
    if (!viewport) return;
    if (viewport.mesh) {
      viewport.scene.remove(viewport.mesh);
    }
    viewport.mesh = CharacterModelFactory.createCharacterMesh(charData);
    viewport.mesh.position.set(0, 0, 0);
    viewport.scene.add(viewport.mesh);
  }

  // --- UI Setup & Grid Generation ---
  setupUI() {
    // Mode Buttons
    const btnCpu = document.getElementById('btn-mode-cpu');
    const btnPvp = document.getElementById('btn-mode-pvp');
    const diffWrapper = document.getElementById('difficulty-wrapper');

    btnCpu.addEventListener('click', () => {
      this.mode = 'cpu';
      btnCpu.classList.add('active-mode');
      btnPvp.classList.remove('active-mode');
      diffWrapper.style.display = 'flex';
      this.sound.playPunch();
    });

    btnPvp.addEventListener('click', () => {
      this.mode = 'pvp';
      btnPvp.classList.add('active-mode');
      btnCpu.classList.remove('active-mode');
      diffWrapper.style.display = 'none';
      this.sound.playPunch();
    });

    // Difficulty Buttons
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.difficulty = e.target.dataset.diff;
        this.sound.playPunch();
      });
    });

    // Enter Arena (Go to Character Selection)
    document.getElementById('btn-start-select').addEventListener('click', () => {
      this.switchScreen('select');
      this.selectionTurn = 1;
      this.updateSelectionHeader();
      this.sound.playBGM();
      this.sound.playAnnounce('round1');
    });

    // Back to Menu
    document.getElementById('btn-back-to-menu').addEventListener('click', () => {
      this.switchScreen('menu');
      this.sound.playPunch();
    });

    // Random Selection Button
    document.getElementById('btn-select-random').addEventListener('click', () => {
      const validChars = CHARACTERS.filter(c => c.id !== 'random');
      const randIdx = Math.floor(Math.random() * validChars.length);
      this.selectCharacterSlot(randIdx);
      this.sound.playKick();
    });

    // Arena Tabs
    document.querySelectorAll('.arena-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.arena-tab').forEach(t => t.classList.remove('active'));
        const targetTab = e.currentTarget;
        targetTab.classList.add('active');
        this.selectedArena = targetTab.dataset.arena;
        this.sound.playPunch();
      });
    });

    // Confirm Selection & Enter VS Screen
    document.getElementById('btn-confirm-selection').addEventListener('click', () => {
      this.startVSScreen();
    });

    // Sound Toggle Header Button
    const btnSound = document.getElementById('btn-toggle-sound');
    const soundIcon = document.getElementById('sound-icon');
    btnSound.addEventListener('click', () => {
      const isSoundOn = this.sound.toggle();
      soundIcon.textContent = isSoundOn ? '🔊' : '🔇';
    });

    // Controls Guide Popup
    document.getElementById('btn-show-controls').addEventListener('click', () => {
      this.modals.controls.classList.add('active');
      this.sound.playPunch();
    });
    document.getElementById('btn-close-controls').addEventListener('click', () => {
      this.modals.controls.classList.remove('active');
    });
    document.getElementById('btn-dismiss-controls').addEventListener('click', () => {
      this.modals.controls.classList.remove('active');
    });

    // Fullscreen Toggle
    document.getElementById('btn-toggle-fullscreen').addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Pause Controls
    document.getElementById('btn-pause').addEventListener('click', () => this.togglePause());
    document.getElementById('btn-resume-game').addEventListener('click', () => this.togglePause());
    document.getElementById('btn-restart-round').addEventListener('click', () => {
      this.togglePause();
      this.startRound();
    });
    document.getElementById('btn-pause-select').addEventListener('click', () => {
      this.togglePause();
      this.switchScreen('select');
    });
    document.getElementById('btn-pause-menu').addEventListener('click', () => {
      this.togglePause();
      this.switchScreen('menu');
    });

    // Game Over Actions
    document.getElementById('btn-rematch').addEventListener('click', () => {
      this.modals.gameover.classList.remove('active');
      this.resetMatchScores();
      this.startRound();
    });
    document.getElementById('btn-gameover-select').addEventListener('click', () => {
      this.modals.gameover.classList.remove('active');
      this.switchScreen('select');
    });
    document.getElementById('btn-gameover-menu').addEventListener('click', () => {
      this.modals.gameover.classList.remove('active');
      this.switchScreen('menu');
    });
  }

  // Populate the 16 character slots in character grid
  populateCharacterGrid() {
    const grid = document.getElementById('character-grid');
    grid.innerHTML = '';

    CHARACTERS.forEach((char, index) => {
      const slot = document.createElement('div');
      slot.className = 'char-slot';
      slot.dataset.index = index;

      slot.innerHTML = `
        <div class="char-slot-icon">${char.icon}</div>
        <div class="char-slot-label">${char.name}</div>
      `;

      slot.addEventListener('click', () => {
        this.selectCharacterSlot(index);
      });

      grid.appendChild(slot);
    });

    this.highlightSelectedSlots();
  }

  selectCharacterSlot(index) {
    let resolvedIndex = index;
    if (CHARACTERS[index].id === 'random') {
      const validChars = CHARACTERS.filter(c => c.id !== 'random');
      resolvedIndex = Math.floor(Math.random() * validChars.length);
    }

    if (this.selectionTurn === 1) {
      this.p1CharIndex = resolvedIndex;
      this.sound.playPunch();
      if (this.mode === 'pvp') {
        this.selectionTurn = 2; // Next turn: Player 2
      } else {
        // CPU automatically picks a different exciting character
        do {
          this.p2CharIndex = Math.floor(Math.random() * (CHARACTERS.length - 1));
        } while (this.p2CharIndex === this.p1CharIndex);
      }
    } else {
      this.p2CharIndex = resolvedIndex;
      this.sound.playKick();
      this.selectionTurn = 1; // Back to P1
    }

    this.highlightSelectedSlots();
    this.updatePreviewCards();
    this.updateSelectionHeader();

    // Enable confirm button
    const confirmBtn = document.getElementById('btn-confirm-selection');
    confirmBtn.classList.remove('disabled');
  }

  highlightSelectedSlots() {
    const slots = document.querySelectorAll('.char-slot');
    slots.forEach(slot => {
      slot.classList.remove('selected-p1', 'selected-p2');
      const idx = parseInt(slot.dataset.index);
      if (idx === this.p1CharIndex) slot.classList.add('selected-p1');
      if (idx === this.p2CharIndex) slot.classList.add('selected-p2');
    });
  }

  updateSelectionHeader() {
    const indicator = document.getElementById('turn-indicator');
    if (this.mode === 'cpu') {
      indicator.textContent = 'PLAYER 1: SELECT YOUR HERO';
      indicator.classList.remove('p2-turn');
    } else {
      if (this.selectionTurn === 1) {
        indicator.textContent = 'PLAYER 1: SELECT FIGHTER';
        indicator.classList.remove('p2-turn');
      } else {
        indicator.textContent = 'PLAYER 2: SELECT FIGHTER';
        indicator.classList.add('p2-turn');
      }
    }
  }

  updatePreviewCards() {
    const c1 = CHARACTERS[this.p1CharIndex];
    const c2 = CHARACTERS[this.p2CharIndex];

    // Player 1 Card
    document.getElementById('p1-char-name').textContent = c1.name;
    document.getElementById('p1-char-power').textContent = `⚡ ${c1.powerName}`;
    document.getElementById('p1-stat-atk').style.width = `${c1.stats.atk}%`;
    document.getElementById('p1-stat-spd').style.width = `${c1.stats.spd}%`;
    document.getElementById('p1-stat-def').style.width = `${c1.stats.def}%`;
    this.updatePreviewViewport(this.p1Preview, c1);

    // Player 2 Card
    document.getElementById('p2-tag-label').textContent = this.mode === 'cpu' ? 'CPU' : 'PLAYER 2';
    document.getElementById('p2-char-name').textContent = c2.name;
    document.getElementById('p2-char-power').textContent = `⚡ ${c2.powerName}`;
    document.getElementById('p2-stat-atk').style.width = `${c2.stats.atk}%`;
    document.getElementById('p2-stat-spd').style.width = `${c2.stats.spd}%`;
    document.getElementById('p2-stat-def').style.width = `${c2.stats.def}%`;
    this.updatePreviewViewport(this.p2Preview, c2);
  }

  switchScreen(screenKey) {
    Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
    if (this.screens[screenKey]) {
      this.screens[screenKey].classList.add('active');
    }
  }

  // --- Cinematic VS Screen Transition ---
  startVSScreen() {
    const c1 = CHARACTERS[this.p1CharIndex];
    const c2 = CHARACTERS[this.p2CharIndex];

    document.getElementById('vs-p1-avatar').textContent = c1.icon;
    document.getElementById('vs-p1-name').textContent = c1.name.toUpperCase();
    document.getElementById('vs-p1-power').textContent = `SUPER: ${c1.powerName.toUpperCase()}`;

    document.getElementById('vs-p2-avatar').textContent = c2.icon;
    document.getElementById('vs-p2-name').textContent = c2.name.toUpperCase();
    document.getElementById('vs-p2-power').textContent = `SUPER: ${c2.powerName.toUpperCase()}`;
    document.getElementById('vs-p2-badge').textContent = this.mode === 'cpu' ? 'CPU' : 'PLAYER 2';

    const arenaLabels = { sansad: 'SANSAD', jantar: 'JANTAR MANTAR', sadak: 'DESI SADAK' };
    document.getElementById('vs-arena-label').textContent = `ARENA: ${arenaLabels[this.selectedArena]}`;

    this.switchScreen('vs');
    this.sound.playWhoosh();
    this.sound.playAnnounce('round1');

    // Build Arena in 3D scene while showing VS screen
    ArenaBuilder.buildArena(this.scene, this.selectedArena);

    // Setup Fighters
    this.setupFighters(c1, c2);

    // Transition to Battle Screen after 2.2 seconds
    setTimeout(() => {
      this.switchScreen('battle');
      this.resetMatchScores();
      this.startRound();
    }, 2200);
  }

  // --- Setup Fighters & AI ---
  setupFighters(char1, char2) {
    if (this.fighter1) this.scene.remove(this.fighter1.mesh);
    if (this.fighter2) this.scene.remove(this.fighter2.mesh);
    this.fx.clear();

    this.fighter1 = new Fighter(char1, false, this.sound, this.fx);
    this.fighter2 = new Fighter(char2, true, this.sound, this.fx);

    this.fighter1.opponent = this.fighter2;
    this.fighter2.opponent = this.fighter1;

    this.scene.add(this.fighter1.mesh);
    this.scene.add(this.fighter2.mesh);

    if (this.mode === 'cpu') {
      this.ai = new FighterAI(this.fighter2, this.difficulty);
    } else {
      this.ai = null;
    }

    // Update In-Game Battle HUD Info
    document.getElementById('hud-p1-name').textContent = char1.name.toUpperCase();
    document.getElementById('p1-hud-avatar').textContent = char1.icon;
    document.getElementById('hud-p2-name').textContent = char2.name.toUpperCase();
    document.getElementById('p2-hud-avatar').textContent = char2.icon;
  }

  resetMatchScores() {
    this.currentRound = 1;
    this.fighter1.roundsWon = 0;
    this.fighter2.roundsWon = 0;
    this.updateRoundDots();
  }

  // --- Start Round & Clock ---
  startRound() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.isMatchActive = false;
    this.roundTime = CONFIG.ROUND_TIME;
    document.getElementById('match-timer').textContent = this.roundTime;
    document.getElementById('round-indicator').textContent = `ROUND ${this.currentRound}`;

    // Reset fighter positions & health
    this.fighter1.reset(-4.5);
    this.fighter2.reset(4.5);
    this.updateHUD();

    // Announcement Sequence: "ROUND X" -> "FIGHT!"
    this.showAnnouncement(`ROUND ${this.currentRound}`, 1000, () => {
      this.sound.playAnnounce('round1');
      setTimeout(() => {
        this.showAnnouncement('FIGHT!', 700, () => {
          this.isMatchActive = true;
          this.sound.playAnnounce('fight');
          this.startRoundClock();
        });
      }, 300);
    });
  }

  startRoundClock() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      if (this.isPaused || !this.isMatchActive) return;

      this.roundTime--;
      const timerEl = document.getElementById('match-timer');
      timerEl.textContent = this.roundTime;

      if (this.roundTime <= 10) {
        timerEl.classList.add('low-time');
        this.sound.playBeep(440, 'sine', 0.08, 0.2);
      } else {
        timerEl.classList.remove('low-time');
      }

      if (this.roundTime <= 0) {
        this.endRound('TIME UP');
      }
    }, 1000);
  }

  endRound(reason) {
    if (!this.isMatchActive) return;
    this.isMatchActive = false;
    if (this.timerInterval) clearInterval(this.timerInterval);

    let winner = null;
    if (this.fighter1.health <= 0 && this.fighter2.health <= 0) {
      reason = 'DOUBLE K.O.';
    } else if (this.fighter1.health <= 0) {
      reason = 'K.O.';
      winner = this.fighter2;
    } else if (this.fighter2.health <= 0) {
      reason = 'K.O.';
      winner = this.fighter1;
    } else {
      // Time up: compare health
      if (this.fighter1.health > this.fighter2.health) {
        winner = this.fighter1;
      } else if (this.fighter2.health > this.fighter1.health) {
        winner = this.fighter2;
      }
    }

    if (winner) {
      winner.roundsWon++;
      winner.state = 'VICTORY';
      (winner === this.fighter1 ? this.fighter2 : this.fighter1).state = 'DEFEAT';
    }

    this.sound.playAnnounce('ko');
    this.showAnnouncement(reason, 1800, () => {
      this.updateRoundDots();

      // Check Match Victory (Best 2 of 3)
      if (this.fighter1.roundsWon >= CONFIG.ROUNDS_TO_WIN) {
        this.showGameOver(this.fighter1, 'PLAYER 1');
      } else if (this.fighter2.roundsWon >= CONFIG.ROUNDS_TO_WIN) {
        const winnerTag = this.mode === 'cpu' ? 'CPU' : 'PLAYER 2';
        this.showGameOver(this.fighter2, winnerTag);
      } else {
        // Next round
        this.currentRound++;
        setTimeout(() => this.startRound(), 1000);
      }
    });
  }

  showGameOver(winner, winnerTag) {
    this.sound.playAnnounce('win');
    document.getElementById('victory-header').textContent = `${winnerTag} WINS!`;
    document.getElementById('victory-subtext').textContent = `${winner.charData.name.toUpperCase()} REIGNS SUPREME`;
    document.getElementById('victory-avatar').textContent = winner.charData.icon;
    this.modals.gameover.classList.add('active');
  }

  showAnnouncement(text, duration, onComplete) {
    const el = document.getElementById('announcement-text');
    el.textContent = text;
    el.classList.add('show');
    setTimeout(() => {
      el.classList.remove('show');
      if (onComplete) onComplete();
    }, duration);
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.modals.pause.classList.add('active');
    } else {
      this.modals.pause.classList.remove('active');
    }
  }

  updateRoundDots() {
    const p1Dots = document.querySelectorAll('#p1-rounds .round-dot');
    const p2Dots = document.querySelectorAll('#p2-rounds .round-dot');

    p1Dots.forEach((dot, idx) => {
      if (idx < this.fighter1.roundsWon) dot.classList.add('won');
      else dot.classList.remove('won');
    });

    p2Dots.forEach((dot, idx) => {
      if (idx < this.fighter2.roundsWon) dot.classList.add('won');
      else dot.classList.remove('won');
    });
  }

  // --- Keyboard & Touch Controls ---
  setupInputs() {
    // Prevent continuous repeat triggers when key is held down
    const p1Held = {};
    const p2Held = {};

    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();

      // PLAYER 1 CONTROLS
      if (k === 'a') this.fighter1.inputs.left = true;
      if (k === 'd') this.fighter1.inputs.right = true;
      if (k === 'w' && !p1Held['w']) {
        this.fighter1.inputs.jump = true;
        this.fighter1.justPressed.jump = true;
        p1Held['w'] = true;
      }
      if (k === 's') this.fighter1.inputs.crouch = true;
      if (k === 'f') this.fighter1.inputs.block = true;

      if (k === 'j' && !p1Held['j']) {
        this.fighter1.justPressed.punch = true;
        p1Held['j'] = true;
      }
      if (k === 'k' && !p1Held['k']) {
        this.fighter1.justPressed.kick = true;
        p1Held['k'] = true;
      }
      if (k === 'l' && !p1Held['l']) {
        this.fighter1.justPressed.grab = true;
        p1Held['l'] = true;
      }
      if (k === 'u' && !p1Held['u']) {
        this.fighter1.justPressed.super = true;
        p1Held['u'] = true;
      }

      // PLAYER 2 CONTROLS (Only active in PVP mode)
      if (this.mode === 'pvp' && this.fighter2) {
        if (e.key === 'ArrowLeft') this.fighter2.inputs.left = true;
        if (e.key === 'ArrowRight') this.fighter2.inputs.right = true;
        if (e.key === 'ArrowUp' && !p2Held['ArrowUp']) {
          this.fighter2.inputs.jump = true;
          this.fighter2.justPressed.jump = true;
          p2Held['ArrowUp'] = true;
        }
        if (e.key === 'ArrowDown') this.fighter2.inputs.crouch = true;
        if ((k === '5' || e.code === 'Numpad5') && !p2Held['5']) {
          this.fighter2.inputs.block = true;
        }

        if ((k === '1' || e.code === 'Numpad1') && !p2Held['1']) {
          this.fighter2.justPressed.punch = true;
          p2Held['1'] = true;
        }
        if ((k === '2' || e.code === 'Numpad2') && !p2Held['2']) {
          this.fighter2.justPressed.kick = true;
          p2Held['2'] = true;
        }
        if ((k === '4' || e.code === 'Numpad4') && !p2Held['4']) {
          this.fighter2.justPressed.grab = true;
          p2Held['4'] = true;
        }
        if ((k === '3' || e.code === 'Numpad3') && !p2Held['3']) {
          this.fighter2.justPressed.super = true;
          p2Held['3'] = true;
        }
      }

      // Pause Hotkey
      if (e.key === 'Escape') this.togglePause();
    });

    window.addEventListener('keyup', (e) => {
      const k = e.key.toLowerCase();
      p1Held[k] = false;
      p2Held[e.key] = false;
      p2Held[k] = false;

      // PLAYER 1 RELEASE
      if (k === 'a') this.fighter1.inputs.left = false;
      if (k === 'd') this.fighter1.inputs.right = false;
      if (k === 'w') this.fighter1.inputs.jump = false;
      if (k === 's') this.fighter1.inputs.crouch = false;
      if (k === 'f') this.fighter1.inputs.block = false;

      // PLAYER 2 RELEASE
      if (this.mode === 'pvp' && this.fighter2) {
        if (e.key === 'ArrowLeft') this.fighter2.inputs.left = false;
        if (e.key === 'ArrowRight') this.fighter2.inputs.right = false;
        if (e.key === 'ArrowUp') this.fighter2.inputs.jump = false;
        if (e.key === 'ArrowDown') this.fighter2.inputs.crouch = false;
        if (k === '5' || e.code === 'Numpad5') this.fighter2.inputs.block = false;
      }
    });

    // Mobile Virtual Touch Controls
    const bindTouch = (elemId, onDown, onUp) => {
      const btn = document.getElementById(elemId);
      if (!btn) return;
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        btn.classList.add('pressed');
        onDown();
      }, { passive: false });
      btn.addEventListener('touchend', (e) => {
        e.preventDefault();
        btn.classList.remove('pressed');
        if (onUp) onUp();
      }, { passive: false });
    };

    // D-Pad Touch
    bindTouch('m-left', () => { this.fighter1.inputs.left = true; }, () => { this.fighter1.inputs.left = false; });
    bindTouch('m-right', () => { this.fighter1.inputs.right = true; }, () => { this.fighter1.inputs.right = false; });
    bindTouch('m-up', () => {
      this.fighter1.inputs.jump = true;
      this.fighter1.justPressed.jump = true;
    }, () => { this.fighter1.inputs.jump = false; });
    bindTouch('m-down', () => { this.fighter1.inputs.crouch = true; }, () => { this.fighter1.inputs.crouch = false; });

    // Actions Touch
    bindTouch('m-block', () => { this.fighter1.inputs.block = true; }, () => { this.fighter1.inputs.block = false; });
    bindTouch('m-punch', () => { this.fighter1.justPressed.punch = true; });
    bindTouch('m-kick', () => { this.fighter1.justPressed.kick = true; });
    bindTouch('m-grab', () => { this.fighter1.justPressed.grab = true; });
    bindTouch('m-super', () => { this.fighter1.justPressed.super = true; });
  }

  // --- HUD Updates ---
  updateHUD() {
    if (!this.fighter1 || !this.fighter2) return;

    // P1 Health & Super
    const p1Pct = Math.max(0, (this.fighter1.health / CONFIG.MAX_HEALTH) * 100);
    const p1Ghost = document.getElementById('p1-health-ghost');
    const p1Fill = document.getElementById('p1-health-fill');
    p1Fill.style.width = `${p1Pct}%`;
    setTimeout(() => { p1Ghost.style.width = `${p1Pct}%`; }, 120);

    const p1SupPct = Math.min(100, (this.fighter1.superMeter / CONFIG.MAX_SUPER) * 100);
    const p1SupFill = document.getElementById('p1-super-fill');
    p1SupFill.style.width = `${p1SupPct}%`;
    p1SupFill.classList.toggle('maxed', p1SupPct >= 100);
    document.getElementById('p1-super-label').textContent = p1SupPct >= 100 ? 'SUPER READY!' : `SUPER ${Math.floor(p1SupPct)}%`;

    // P2 Health & Super
    const p2Pct = Math.max(0, (this.fighter2.health / CONFIG.MAX_HEALTH) * 100);
    const p2Ghost = document.getElementById('p2-health-ghost');
    const p2Fill = document.getElementById('p2-health-fill');
    p2Fill.style.width = `${p2Pct}%`;
    setTimeout(() => { p2Ghost.style.width = `${p2Pct}%`; }, 120);

    const p2SupPct = Math.min(100, (this.fighter2.superMeter / CONFIG.MAX_SUPER) * 100);
    const p2SupFill = document.getElementById('p2-super-fill');
    p2SupFill.style.width = `${p2SupPct}%`;
    p2SupFill.classList.toggle('maxed', p2SupPct >= 100);
    document.getElementById('p2-super-label').textContent = p2SupPct >= 100 ? 'SUPER READY!' : `SUPER ${Math.floor(p2SupPct)}%`;

    // Combo Popups
    const p1ComboEl = document.getElementById('p1-combo-box');
    if (this.fighter1.comboHits >= 2) {
      p1ComboEl.classList.add('active');
      document.getElementById('p1-combo-count').textContent = `${this.fighter1.comboHits} HITS!`;
      document.getElementById('p1-combo-damage').textContent = `COMBO STRIKE`;
    } else {
      p1ComboEl.classList.remove('active');
    }

    const p2ComboEl = document.getElementById('p2-combo-box');
    if (this.fighter2.comboHits >= 2) {
      p2ComboEl.classList.add('active');
      document.getElementById('p2-combo-count').textContent = `${this.fighter2.comboHits} HITS!`;
      document.getElementById('p2-combo-damage').textContent = `COMBO STRIKE`;
    } else {
      p2ComboEl.classList.remove('active');
    }
  }

  // --- Dynamic 2.5D Fighting Camera System ---
  updateCamera() {
    if (!this.fighter1 || !this.fighter2) return;

    // Track midpoint between fighters
    const midX = (this.fighter1.x + this.fighter2.x) / 2;
    const dist = Math.abs(this.fighter1.x - this.fighter2.x);

    // Zoom camera in when fighters are close, zoom out when distant
    const targetZ = Math.max(8.5, Math.min(13.5, 7.5 + dist * 0.55));
    const targetY = 2.4 + (this.fighter1.y + this.fighter2.y) * 0.3;

    this.camera.position.x = THREE.MathUtils.lerp(this.camera.position.x, midX * 0.85, 0.08);
    this.camera.position.y = THREE.MathUtils.lerp(this.camera.position.y, targetY, 0.08);
    this.camera.position.z = THREE.MathUtils.lerp(this.camera.position.z, targetZ, 0.08);

    this.camera.lookAt(midX * 0.9, 1.8, 0);
  }

  // --- Main Animation & Render Loop ---
  animate() {
    requestAnimationFrame(this.animate);

    // Render Preview viewports in character selection
    if (this.screens.select.classList.contains('active')) {
      if (this.p1Preview && this.p1Preview.mesh) {
        this.p1Preview.mesh.rotation.y += 0.015;
        this.p1Preview.renderer.render(this.p1Preview.scene, this.p1Preview.camera);
      }
      if (this.p2Preview && this.p2Preview.mesh) {
        this.p2Preview.mesh.rotation.y -= 0.015;
        this.p2Preview.renderer.render(this.p2Preview.scene, this.p2Preview.camera);
      }
    }

    // Active Match Logic
    if (this.screens.battle.classList.contains('active') && !this.isPaused) {
      if (this.ai) this.ai.update();

      if (this.fighter1) this.fighter1.update();
      if (this.fighter2) this.fighter2.update();

      // Reset edge-triggered inputs after update cycle
      if (this.fighter1) {
        this.fighter1.justPressed.punch = false;
        this.fighter1.justPressed.kick = false;
        this.fighter1.justPressed.grab = false;
        this.fighter1.justPressed.super = false;
        this.fighter1.justPressed.jump = false;
      }
      if (this.fighter2) {
        this.fighter2.justPressed.punch = false;
        this.fighter2.justPressed.kick = false;
        this.fighter2.justPressed.grab = false;
        this.fighter2.justPressed.super = false;
        this.fighter2.justPressed.jump = false;
      }

      this.fx.update();
      this.updateCamera();
      this.updateHUD();

      // Check KO state during match
      if (this.isMatchActive) {
        if (this.fighter1.health <= 0 || this.fighter2.health <= 0) {
          this.endRound('K.O.');
        }
      }
    }

    // Render Main 3D Fighting Arena
    this.renderer.render(this.scene, this.camera);
  }
}

// ----------------------------------------------------------------------------
// 9. GAME BOOTSTRAPPER ON WINDOW LOAD
// ----------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  window.gameInstance = new FightArenaGame();
});
