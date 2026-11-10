================================================================================
politicianFIGHT - COMPLETE 3D BROWSER FIGHTING GAME
Created by: Sujal Yadav
================================================================================

1. OVERVIEW
--------------------------------------------------------------------------------
politicianFIGHT is a complete, fully playable, high-quality 3D browser fighting
game created by Sujal Yadav, inspired by FightKaro.com. It is developed using
HTML5, CSS3, JavaScript (ES6+), and Three.js (r128). It features 16 stylized
3D parody characters, unique signature super powers with 3D projectile & visual
effects, 3 richly detailed 3D arenas, dynamic lighting and shadows, an arcade
synthesizer sound engine with zero external asset dependencies, and complete
responsive support for desktop keyboards and mobile touchscreens.


2. PROJECT STRUCTURE & FILES
--------------------------------------------------------------------------------
- index.html    : Semantic HTML5 application structure, canvas viewport, arcade HUD,
                  character grid, cinematic VS screen, and modal dialogs.
- style.css     : Esports fighting game design, glowing neon accents, health & super
                  meters with ghost trails, responsive layouts, mobile control styling.
- script.js     : Comprehensive game engine:
                  * Character database (16 slots with stats, palettes, powers)
                  * Synthesized Web Audio system (procedural SFX + dynamic BGM)
                  * Procedural 3D character generator (hierarchical skeletal joints)
                  * 3 Detailed 3D arenas (Sansad, Jantar Mantar, Desi Sadak)
                  * Particle & FX system (hit sparks, block shields, projectiles)
                  * Fighter physics, state machine, collision, combo counter
                  * 3-tier AI (Easy, Normal, Hard)
                  * Dynamic 2.5D camera with zoom and tracking
- README.txt    : Comprehensive documentation and run instructions.


3. CHARACTERS & SIGNATURE POWERS
--------------------------------------------------------------------------------
1.  Mitraman     : Mitra Chakra (Spins a celestial glowing energy chakra disc)
2.  Yatra Boy    : Aloo Se Sona (Transmutes energy into golden beam blasts)
3.  Deedee       : Jadu Hobe (Mystic magenta shockwave orbs that disrupt foes)
4.  Tariff       : Trade Tornado (Raging economic whirlwind vortex)
5.  Dozer Dada   : Dozer Rush (Spectral yellow bulldozer charge)
6.  Toll Man     : Toll Tax Trap (Slamming barrier arms descend to crush enemies)
7.  Sutti Babu   : Sutti Strike (Relaxed nap stance detonates into supersonic blast)
8.  Rail Raja    : Railway Express (Ghost steam train engine charge)
9.  Mbapu        : Boss Mode (Ancient serenity bamboo staff shockwave)
10. Modi         : Baba Shield (Geometric energy barrier burst)
11. Rahul        : Jan Yatra Dash (Lightning-speed running multi-punch flurry)
12. Didi         : Jadu Hobe (Sonic megaphone rally wave)
13. Trump        : Wall Street Slam (Erects gold brick wall and slams it down)
14. Yogi         : Baba Bulldozer (Colossal saffron bulldozer blade strike)
15. Nitin        : Highway Hammer (Asphalt road roller hammer floor smash)
16. Random       : Surprise Fighter (Randomly selects any roster champion)


4. 3D ARENAS
--------------------------------------------------------------------------------
1. Sansad        : Grand colonnade architecture with massive sandstone pillars,
                   regal crimson carpet runway, gold borders, and tricolor flags.
2. Jantar Mantar : Terracotta astronomical observatories, Samrat Yantra ramp
                   sundials, cylindrical towers, and desert sunset lighting.
3. Desi Sadak    : Multi-lane Indian expressway, asphalt textures, yellow/white
                   road stripes, toll plaza gate, milestone, and overhead billboards.

* NOTE: All arena background geometry is positioned strictly behind the fighting
  plane (z < -3), ensuring background objects never occlude fighters or the camera.


5. GAME CONTROLS
--------------------------------------------------------------------------------
PLAYER 1 (KEYBOARD):
- Move Left / Right : [A] / [D]
- Jump              : [W]
- Crouch            : [S]
- Block (Shield)    : [F]
- Punch             : [J]
- Kick              : [K]
- Grab (Unblockable): [L]
- Super Attack      : [U] (Requires 100% Super Meter)

PLAYER 2 (LOCAL 2P KEYBOARD):
- Move Left / Right : [Arrow Left] / [Arrow Right]
- Jump              : [Arrow Up]
- Crouch            : [Arrow Down]
- Block             : [5] (or Numpad 5)
- Punch             : [1] (or Numpad 1)
- Kick              : [2] (or Numpad 2)
- Grab              : [4] (or Numpad 4)
- Super Attack      : [3] (or Numpad 3)

MOBILE & TOUCH DEVICES:
- Virtual D-Pad on bottom-left: Left, Right, Jump (Up), Crouch (Down)
- Action Buttons on bottom-right: Punch, Kick, Grab, Block, Super
- Automatically adapts and responds to multi-touch events.

SYSTEM HOTKEYS:
- Pause Match       : [Escape] or on-screen Pause button [⏸]
- Fullscreen Toggle : [⛶] button on top right


6. HOW TO RUN
--------------------------------------------------------------------------------
METHOD 1: VS Code Live Server (Recommended)
1. Open the project folder in Visual Studio Code.
2. Ensure the "Live Server" extension (by Ritwick Dey) is installed.
3. Right-click "index.html" in the file explorer and select "Open with Live Server".
4. The game will automatically open in your default browser at http://127.0.0.1:5500.

METHOD 2: Any Local Web Server
You can run any local server from the project directory:
- Python 3:
    python -m http.server 8000
  Then visit http://localhost:8000
- Node.js (npx serve or http-server):
    npx serve .
  Then open the provided local URL.

METHOD 3: Direct File Opening
- You can also double click `index.html` directly to open it in Chrome, Edge,
  Firefox, Safari or any modern web browser.


7. TECHNICAL HIGHLIGHTS & ARCHITECTURE
--------------------------------------------------------------------------------
- Zero Missing Assets: 100% of sound effects and music are synthesized on the fly
  using the browser's Web Audio API (OscillatorNodes, GainNodes, BiquadFilters).
- Procedural 3D Models: Built completely with Three.js geometries and materials,
  preventing any 404 errors or missing glTF/texture dependencies.
- True 2.5D Camera: Calculates player midpoint and distance dynamically to frame
  both fighters seamlessly with smooth lerping.
- Complete Combat Loop: Combos, hit stun, knockback, damage scaling, blocking,
  grab throws, super meter accumulation, 99s timer, round tracking (best of 3),
  KO banner announcements, victory animations, and clean state resets.
================================================================================
