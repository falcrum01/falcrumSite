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

    // Three.js setup (neural particle field)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1e1b4b);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasEl.appendChild(renderer.domElement);

    // Create particles for neural network nodes
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 18;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x60a5fa, // soft blue
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // subtle linking lines (geometry + line segments)
    const linesMaterial = new THREE.LineBasicMaterial({ color: 0x38bdf8, opacity: 0.08, transparent: true });
    const positions = particlesGeometry.getAttribute('position').array as Float32Array;
    const lineGeom = new THREE.BufferGeometry();
    const connections: number[] = [];
    for (let i = 0; i < particlesCount; i += 6) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];
      const j = (i + 3) % particlesCount;
      const j3 = j * 3;
      connections.push(x, y, z, positions[j3], positions[j3 + 1], positions[j3 + 2]);
    }
    lineGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(connections), 3));
    const lines = new THREE.LineSegments(lineGeom, linesMaterial);
    scene.add(lines);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      const t = Date.now() * 0.00015; // slower time factor
      // reduce motion amplitude for a calmer visual
      particlesMesh.rotation.x = Math.sin(t) * 0.02;
      particlesMesh.rotation.y = Math.cos(t) * 0.02;
      lines.rotation.y = particlesMesh.rotation.y * 0.35;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (canvasEl.contains(renderer.domElement)) canvasEl.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Three.js Canvas */}
      <div ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,64,175,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,64,175,0.1)_1px,transparent_1px)] bg-[size:14px_14px] opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
  <section className="py-20 subsection-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow">AI & Future Tech Expertise</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Leading the recruitment revolution with specialized AI talent acquisition across cutting-edge domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl p-8 border border-white/10 hover:shadow-xl transition-all group card">
              <Brain className="w-14 h-14 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 glow">Advanced AI Systems</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  Large Language Models
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  Neural Architecture Design
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  Reinforcement Learning
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl p-8 border border-white/10 hover:shadow-xl transition-all group card">
              <Code className="w-14 h-14 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 glow">Quantum Computing</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  Quantum Algorithms
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  Error Correction
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  Quantum ML Integration
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl p-8 border border-white/10 hover:shadow-xl transition-all group card">
              <Network className="w-14 h-14 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 glow">Edge Computing & IoT</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  Edge AI Development
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  IoT Neural Networks
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
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
              <h2 className="text-4xl font-bold mb-6 glow">Transforming Industries Through AI</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Our AI specialists are driving innovation across sectors, from healthcare diagnostics
                to climate change solutions. We connect companies with talent that can turn
                ambitious AI initiatives into reality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-100">
                  <Sparkles className="w-6 h-6 text-white" />
                  <span>Advanced NLP for automated diagnosis</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-100">
                  <Sparkles className="w-6 h-6 text-white" />
                  <span>Computer vision for climate monitoring</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-100">
                  <Sparkles className="w-6 h-6 text-white" />
                  <span>Quantum algorithms for drug discovery</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-100">
                  <Sparkles className="w-6 h-6 text-white" />
                  <span>AI-driven renewable energy optimization</span>
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
