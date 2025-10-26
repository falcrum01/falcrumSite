import { useEffect, useRef } from 'react';
import { Cpu, Brain, Sparkles, Network, Boxes, Code, LineChart, ArrowRight } from 'lucide-react';
import * as THREE from 'three';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    // Safe setup with try/catch for environments without WebGL
    let renderer: THREE.WebGLRenderer | null = null;
    let animationId: number | null = null;

    try {
      // Three.js setup — futuristic world background (globe + neon grid + floaters)
      const scene = new THREE.Scene();
      // keep background transparent so hero gradients show through
      scene.background = null;

      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvasEl.appendChild(renderer.domElement);

      // Lights
      const hemi = new THREE.HemisphereLight(0xffffff, 0x080820, 0.6);
      scene.add(hemi);
      const point = new THREE.PointLight(0x66f6ff, 1.2, 50);
      point.position.set(5, 10, 10);
      scene.add(point);

      // Rotating wireframe globe (low-poly) to suggest a futuristic world
      const globeGeom = new THREE.IcosahedronGeometry(3.2, 3);
      const globeMat = new THREE.MeshStandardMaterial({
        color: 0x0ea5e9,
        emissive: 0x0b84c7,
        metalness: 0.1,
        roughness: 0.2,
        transparent: true,
        opacity: 0.85
      });
      const globe = new THREE.Mesh(globeGeom, globeMat);
      // wireframe overlay
      const edgeGeom = new THREE.EdgesGeometry(globeGeom);
      const edgeMat = new THREE.LineBasicMaterial({ color: 0x7dd3fc, linewidth: 1, transparent: true, opacity: 0.6 });
      const globeWire = new THREE.LineSegments(edgeGeom, edgeMat);
      const globeGroup = new THREE.Group();
      globeGroup.add(globe);
      globeGroup.add(globeWire);
      globeGroup.position.set(-1.5, 0.5, -2);
      scene.add(globeGroup);

      // Neon grid plane
      const gridSize = 40;
      const gridGeom = new THREE.PlaneGeometry(gridSize, gridSize, 80, 80);
      const gridMat = new THREE.LineBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.06 });
      const gridWire = new THREE.LineSegments(new THREE.WireframeGeometry(gridGeom), gridMat);
      gridWire.rotation.x = -Math.PI / 2;
      gridWire.position.y = -3.6;
      scene.add(gridWire);

      // Floating neon boxes
      const floaters: THREE.Mesh[] = [];
      const boxGeom = new THREE.BoxGeometry(0.6, 0.6, 0.6);
      for (let i = 0; i < 8; i++) {
        const mat = new THREE.MeshStandardMaterial({ color: 0x60a5fa, emissive: 0x114b8b, roughness: 0.3, metalness: 0.6 });
        const m = new THREE.Mesh(boxGeom, mat);
        m.position.set((Math.random() - 0.5) * 12, Math.random() * 4 - 1, (Math.random() - 0.5) * 8);
        m.rotation.set(Math.random(), Math.random(), Math.random());
        scene.add(m);
        floaters.push(m);
      }

      // 3D cubic grid (instanced) — fills the hero with many small cubes that rotate/float
      let cubeInstanced: THREE.InstancedMesh | null = null;
      const tempObj = new THREE.Object3D();
      const cubeInfos: { x: number; y: number; z: number; speed: number; phase: number; rotSpeed: number }[] = [];
      try {
        const gridX = 14;
        const gridY = 6;
        const layers = 3; // depth layers
        const count = gridX * gridY * layers;

        const instGeom = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const instMat = new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x065f46, roughness: 0.25, metalness: 0.6, transparent: true, opacity: 0.85 });
        cubeInstanced = new THREE.InstancedMesh(instGeom, instMat, count);
        cubeInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

        const spacingX = 0.9;
        const spacingY = 0.9;
        const startX = -((gridX - 1) * spacingX) / 2;
        const startY = -1.4;
        const startZ = -3.5;

        let idx = 0;
        for (let l = 0; l < layers; l++) {
          for (let ix = 0; ix < gridX; ix++) {
            for (let iy = 0; iy < gridY; iy++) {
              const x = startX + ix * spacingX + (l - (layers - 1) / 2) * 0.15;
              const y = startY + iy * spacingY * 0.55 + (Math.random() - 0.5) * 0.15;
              const z = startZ + l * 1.2 + (Math.random() - 0.5) * 0.6;
              const speed = 0.6 + Math.random() * 1.2;
              const phase = Math.random() * Math.PI * 2;
              const rotSpeed = 0.2 + Math.random() * 1.2;
              cubeInfos.push({ x, y, z, speed, phase, rotSpeed });

              tempObj.position.set(x, y, z);
              tempObj.rotation.set(Math.random(), Math.random(), Math.random());
              tempObj.updateMatrix();
              cubeInstanced.setMatrixAt(idx, tempObj.matrix);
              idx++;
            }
          }
        }

        cubeInstanced.scale.setScalar(1);
        cubeInstanced.castShadow = false;
        cubeInstanced.receiveShadow = false;
        scene.add(cubeInstanced);
      } catch (e) {
        // if instancing fails, ignore to keep the page running
        console.warn('cube instancing failed', e);
      }

      camera.position.set(0, 0.6, 9);

      const animate = () => {
        animationId = window.requestAnimationFrame(animate);
        const t = Date.now() * 0.0005;
        // globe slow rotation
        globeGroup.rotation.y = t * 0.15;
        globeGroup.rotation.x = Math.sin(t * 0.3) * 0.05;
        // floaters bob
        floaters.forEach((f, idx) => {
          f.position.y += Math.sin(t * 1.2 + idx) * 0.006;
          f.rotation.x += 0.006 + idx * 0.0015;
          f.rotation.y += 0.008 + idx * 0.0017;
        });
        // animate instanced cubes (if present)
        if (cubeInstanced) {
          for (let i = 0; i < cubeInfos.length; i++) {
            const info = cubeInfos[i];
            const px = info.x;
            const py = info.y + Math.sin(t * info.speed + info.phase) * 0.45;
            const pz = info.z + Math.cos(t * info.speed * 0.7 + info.phase) * 0.25;
            tempObj.position.set(px, py, pz);
            // rotate more dynamically
            tempObj.rotation.set(t * info.rotSpeed, t * info.rotSpeed * 0.7, Math.sin(t * info.speed + info.phase) * 0.4);
            tempObj.scale.setScalar(0.9 + Math.sin(t * info.speed + info.phase) * 0.08);
            tempObj.updateMatrix();
            cubeInstanced.setMatrixAt(i, tempObj.matrix);
          }
          cubeInstanced.instanceMatrix.needsUpdate = true;
        }
        if (renderer) renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationId) cancelAnimationFrame(animationId);
        // dispose floaters
        floaters.forEach((f) => {
          (f.geometry as THREE.BufferGeometry & { dispose?: () => void }).dispose?.();
          (f.material as THREE.Material & { dispose?: () => void }).dispose?.();
          scene.remove(f);
        });
        // dispose grid
  (gridGeom as THREE.BufferGeometry & { dispose?: () => void }).dispose?.();
  (gridMat as THREE.Material & { dispose?: () => void }).dispose?.();
        scene.remove(gridWire);
        // dispose globe
  (globeGeom as THREE.BufferGeometry & { dispose?: () => void }).dispose?.();
  (globeMat as THREE.Material & { dispose?: () => void }).dispose?.();
  (edgeGeom as THREE.BufferGeometry & { dispose?: () => void }).dispose?.();
  (edgeMat as THREE.Material & { dispose?: () => void }).dispose?.();
        scene.remove(globeGroup);
        // dispose instanced cubes
        try {
          if (cubeInstanced) {
            (cubeInstanced.geometry as THREE.BufferGeometry & { dispose?: () => void }).dispose?.();
            ((cubeInstanced.material as THREE.Material) as THREE.Material & { dispose?: () => void }).dispose?.();
            scene.remove(cubeInstanced);
          }
        } catch {
          // ignore disposal errors
        }
        // dispose lights
        scene.remove(hemi);
        scene.remove(point);
        // dispose renderer
        if (renderer) {
          renderer.dispose();
          if (renderer.domElement && canvasEl.contains(renderer.domElement)) canvasEl.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      // fail silently if WebGL is not available — avoid throwing at runtime
      console.warn('Three.js initialization failed:', err);
      if (renderer && canvasEl.contains(renderer.domElement)) canvasEl.removeChild(renderer.domElement);
      return;
    }

    // cleanup is handled inside the try/catch return path above; nothing to do here
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Three.js Canvas */}
      <div ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        {/* subtle dark overlay to slightly deepen the background */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

        {/* left & right futuristic neon edge decorations (behind content) */}
        <div className="absolute inset-y-0 left-0 w-56 pointer-events-none z-10 flex items-center justify-start">
          <svg viewBox="0 0 120 600" className="w-full h-full opacity-40 blur-sm mix-blend-screen float-slow" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.0" />
                <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="120" height="600" fill="url(#g1)" />
            <g className="pulse-neon" stroke="#7dd3fc" strokeWidth="1.4" fill="none" strokeLinecap="round">
              <path className="dash" d="M20 40 L20 120" strokeOpacity="0.7" />
              <path className="dash" d="M20 160 L20 260" strokeOpacity="0.6" />
              <path className="dash" d="M20 300 L20 420" strokeOpacity="0.5" />
              <path className="dash" d="M40 80 L80 80 L80 100" strokeOpacity="0.5" />
              <circle className="pulse-neon" cx="20" cy="40" r="3" fill="#34d399" stroke="none" />
              <circle className="pulse-neon" cx="20" cy="160" r="2.5" fill="#06b6d4" stroke="none" />
              <circle className="pulse-neon" cx="20" cy="300" r="2" fill="#7dd3fc" stroke="none" />
            </g>
          </svg>
        </div>

        <div className="absolute inset-y-0 right-0 w-56 pointer-events-none z-10 flex items-center justify-end">
          <svg viewBox="0 0 120 600" className="w-full h-full opacity-40 blur-sm mix-blend-screen float-slow" style={{ animationDelay: '1.2s' }} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.0" />
                <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="120" height="600" fill="url(#g2)" />
            <g className="pulse-neon" stroke="#86efac" strokeWidth="1.2" fill="none" strokeLinecap="round">
              <path className="dash" d="M20 40 L20 120" strokeOpacity="0.7" />
              <path className="dash" d="M20 160 L20 260" strokeOpacity="0.6" />
              <path className="dash" d="M20 300 L20 420" strokeOpacity="0.5" />
              <path className="dash" d="M40 80 L80 80 L80 100" strokeOpacity="0.5" />
              <circle className="pulse-neon" cx="20" cy="40" r="3" fill="#34d399" stroke="none" />
              <circle className="pulse-neon" cx="20" cy="160" r="2.5" fill="#06b6d4" stroke="none" />
              <circle className="pulse-neon" cx="20" cy="300" r="2" fill="#7dd3fc" stroke="none" />
            </g>
          </svg>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,64,175,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,64,175,0.1)_1px,transparent_1px)] bg-[size:14px_14px] opacity-15"></div>

        {/* additional decorative elements: scanlines, rotating ring, holographic panel, particle field */}
        <div className="absolute inset-0 pointer-events-none z-15">
          <div className="absolute inset-0 scanline" />

          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30">
            <svg viewBox="0 0 200 200" className="w-full h-full rotate-slow" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="rg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#60a5fa" strokeWidth="0.6" opacity="0.12" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.08" />
              <circle cx="100" cy="100" r="40" fill="url(#rg)" />
            </svg>
          </div>

          <div className="absolute top-8 right-8 holo" />

          <div className="particle-field">
            {[
              { left: '6%', top: '22%', cls: 'particle slow' },
              { left: '18%', top: '48%', cls: 'particle' },
              { left: '30%', top: '12%', cls: 'particle fast' },
              { left: '46%', top: '62%', cls: 'particle slow' },
              { left: '52%', top: '28%', cls: 'particle' },
              { left: '64%', top: '50%', cls: 'particle fast' },
              { left: '74%', top: '18%', cls: 'particle' },
              { left: '84%', top: '44%', cls: 'particle slow' },
            ].map((p, i) => (
              <div
                key={i}
                className={p.cls}
                style={{ left: p.left, top: p.top }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative inline-block">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-600 glow">
                    AI & Deep Tech <span className="text-white">Talent Solutions</span>
                  </h1>
                <div className="absolute left-0 -bottom-3 w-36 h-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-700 blur-md opacity-90" />
              </div>

              <div className="mt-4 mb-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-md">
                <p className="text-lg text-white leading-relaxed font-medium">
                  Connecting visionary companies with elite AI engineers, machine learning architects,
                  and deep tech specialists. We match talent with mission-critical projects in
                  generative AI, computer vision, robotics, and quantum research.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-sm text-gray-100">LLMs</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-sm text-gray-100">MLOps</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-sm text-gray-100">Computer Vision</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-sm text-gray-100">Edge AI</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-sm text-gray-100">Quantum ML</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('/opportunities/openings')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg font-semibold hover:from-blue-800 hover:to-indigo-900 transition-colors flex items-center justify-center space-x-2 ring-1 ring-white/10"
                >
                  <span>Explore AI Roles</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('/solutions')}
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors ring-1 ring-white/10"
                >
                  Staffing Solutions
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <Brain className="w-12 h-12 text-blue-500 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">500+</h3>
                    <p className="text-gray-300 text-sm">AI Engineers Placed</p>
                    <div className="mt-3 h-0.5 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 rounded" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <Cpu className="w-12 h-12 text-blue-500 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">50+</h3>
                    <p className="text-gray-300 text-sm">AI Startups</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <Network className="w-12 h-12 text-blue-500 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">15+</h3>
                    <p className="text-gray-300 text-sm">ML Models Deployed</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <Sparkles className="w-12 h-12 text-blue-500 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">98%</h3>
                    <p className="text-gray-300 text-sm">Algorithm Accuracy</p>
                  </div>
                </div>
              </div>
              {/* floating neon orbs */}
              <div className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-700 opacity-14 blur-3xl transform rotate-12 animate-[spin_90s_linear_infinite]"></div>
              <div className="pointer-events-none absolute -left-12 bottom-8 w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-800 to-blue-500 opacity-12 blur-2xl transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

  {/* AI Specializations Section */}
  <section className="py-20 subsection-dark bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow !text-black">AI & Future Tech Expertise</h2>
            <p className="text-xl max-w-3xl mx-auto !text-[#0b0b0d]">
              Leading the recruitment revolution with specialized AI talent acquisition across cutting-edge domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl p-8 border border-white/10 hover:shadow-xl transition-all group card">
              <Brain className="w-14 h-14 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 glow text-black">Advanced AI Systems</h3>
              <ul className="space-y-3 text-gray-900">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  Large Language Models
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  Neural Architecture Design
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  Reinforcement Learning
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl p-8 border border-white/10 hover:shadow-xl transition-all group card">
              <Code className="w-14 h-14 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 glow text-black">Quantum Computing</h3>
              <ul className="space-y-3 text-gray-900">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  Quantum Algorithms
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  Error Correction
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  Quantum ML Integration
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl p-8 border border-white/10 hover:shadow-xl transition-all group card">
              <Network className="w-14 h-14 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 glow text-black">Edge Computing & IoT</h3>
              <ul className="space-y-3 text-gray-900">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  Edge AI Development
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  IoT Neural Networks
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-gray-800" />
                  Distributed Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pioneering Tomorrow's Tech</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We connect companies with visionaries who are shaping the future of technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <LineChart className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Research</h3>
              <p className="text-blue-100">
                Advancing foundational AI models and theoretical breakthroughs
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quantum AI</h3>
              <p className="text-blue-100">
                Merging quantum computing with advanced AI algorithms
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Boxes className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Neural Interfaces</h3>
              <p className="text-blue-100">
                Developing brain-computer interfaces and neural networks
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Network className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">AGI Development</h3>
              <p className="text-blue-100">
                Working towards artificial general intelligence breakthroughs
              </p>
            </div>
          </div>
        </div>
      </section>

  {/* Technology Impact Section */}
  <section className="py-20 subsection-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 glow !text-black">Transforming Industries Through AI</h2>
              <p className="text-lg mb-8 leading-relaxed !text-black">
                Our AI specialists are driving innovation across sectors, from healthcare diagnostics
                to climate change solutions. We connect companies with talent that can turn
                ambitious AI initiatives into reality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 !text-black">
                  <Sparkles className="w-6 h-6 text-black" />
                  <span className="!text-black">Advanced NLP for automated diagnosis</span>
                </div>
                <div className="flex items-center space-x-3 !text-black">
                  <Sparkles className="w-6 h-6 text-black" />
                  <span className="!text-black">Computer vision for climate monitoring</span>
                </div>
                <div className="flex items-center space-x-3 !text-black">
                  <Sparkles className="w-6 h-6 text-black" />
                  <span className="!text-black">Quantum algorithms for drug discovery</span>
                </div>
                <div className="flex items-center space-x-3 !text-black">
                  <Sparkles className="w-6 h-6 text-black" />
                  <span className="!text-black">AI-driven renewable energy optimization</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-800 to-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Build the Future?</h3>
              <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                Whether you're developing next-gen AI systems or seeking top AI talent,
                we're here to connect the brightest minds with groundbreaking projects.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => onNavigate('/opportunities/submit')}
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Submit Your AI Expertise
                </button>
                <button
                  onClick={() => onNavigate('/solutions')}
                  className="w-full px-6 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition-colors border-2 border-white/30"
                >
                  Partner with AI Talent Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}