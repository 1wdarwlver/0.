/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Anchor, 
  Mail, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  Award, 
  Box, 
  ArrowRight,
  Ship,
  Compass,
  ArrowDown,
  Plane,
  Camera,
  Utensils,
  Coffee,
  Calendar,
  PieChart,
  FileText,
  Video
} from 'lucide-react';

const SECTIONS = [
  { id: 'hero', title: '首頁' },
  { id: 'about', title: '關於我' },
  { id: 'internship', title: '實習經歷' },
  { id: 'education', title: '學歷背景' },
  { id: 'certifications', title: '專業證照' },
  { id: 'models', title: '3D 模型' },
  { id: 'okinawa', title: '沖繩遊記' },
  { id: 'presentation', title: '旅遊簡報' },
  { id: 'video', title: '旅遊影片' },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Create horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88.88%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });

  return (
    <div className="relative h-[900vh] bg-white font-sans text-black" ref={containerRef}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white pointer-events-none">
        <div className="text-2xl font-extrabold tracking-tighter pointer-events-auto">
          SONG YUAN-CHING
        </div>
        <div className="hidden md:flex gap-8 pointer-events-auto">
          {SECTIONS.map((s) => (
            <button 
              key={s.id} 
              className="text-xs font-bold tracking-widest hover:underline decoration-2 underline-offset-4"
              onClick={() => {
                const index = SECTIONS.findIndex(sec => sec.id === s.id);
                window.scrollTo({
                  top: (index / (SECTIONS.length - 1)) * (document.body.scrollHeight - window.innerHeight),
                  behavior: 'smooth'
                });
              }}
            >
              {s.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Vertical Progress Bar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 h-32 w-px bg-gray-200">
        <motion.div 
          className="w-full bg-black"
          style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>

      {/* Main Horizontal Content Wrapper */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div 
          style={{ x: springX }}
          className="flex h-full w-max"
        >
          {/* Section 0: Hero */}
          <section id="hero" className="relative flex h-screen w-screen shrink-0 items-center justify-center overflow-hidden border-r border-black/10">
            <div className="absolute top-1/4 left-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[12vw] font-black leading-none tracking-tighter"
              >
                2026
              </motion.div>
            </div>

            <div className="relative group">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-[30rem] h-[30rem] grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden border border-black shadow-2xl"
              >
                 <img 
                  src="/src/assets/images/regenerated_image_1778504586986.png" 
                  alt="宋沅罄" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </motion.div>
              <div className="absolute -bottom-8 -right-8 z-20 bg-black text-white p-6">
                <h1 className="text-4xl font-bold">宋沅罄</h1>
                <p className="text-sm opacity-60 tracking-widest mt-1">SONG YUAN CHING</p>
              </div>
            </div>

            <div className="absolute right-32 bottom-20 flex flex-col items-end">
              <div className="flex items-center gap-4 mb-4">
                <Mail size={18} />
                <span className="font-mono text-sm tracking-tighter">a111182133@nkust.edu.tw</span>
              </div>
              <div className="mt-8 animate-bounce">
                <ArrowRight size={32} />
              </div>
            </div>
            
            <div className="absolute bottom-10 left-20 flex gap-4">
              <a 
                href="https://www.nkust.edu.tw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                title="國立高雄科技大學"
              >
                <Compass className="animate-spin-slow text-gray-400" size={24} />
              </a>
              <a 
                href="https://st.nkust.edu.tw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                title="國立高雄科技大學航海系"
              >
                <Ship size={24} />
              </a>
            </div>
          </section>

          {/* Section 1: About */}
          <section id="about" className="relative flex h-screen w-screen shrink-0 items-center justify-center px-24 border-r border-black/10 bg-[#fafafa]">
             <div className="grid grid-cols-12 gap-12 w-full max-w-7xl h-[70vh]">
                <div className="col-span-4 flex flex-col justify-center border-r border-black/10 pr-12">
                   <h2 className="text-8xl font-black mb-8 opacity-10">01</h2>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-px bg-black" />
                      <span className="text-xl font-bold tracking-widest">AUTOBIOGRAPHY</span>
                   </div>
                   <h3 className="text-4xl font-extrabold mb-6 leading-tight">
                     自傳
                   </h3>
                   <div className="mt-auto">
                   </div>
                </div>
                <div className="col-span-8 flex items-center">
                   <div className="bg-white p-12 border border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative">
                      <p className="text-2xl leading-relaxed text-gray-800 font-medium">
                        「我是宋沅罄，目前就讀於國立高雄科技大學航海系四年級。進入這所學校得到了家人的影響，也對海上生活有所嚮往。在其他同學選擇就讀高中職時，我決定進入五專航海科就讀。在校期間，研修了航海相關課程與實習。讓我對航海這門專業有了更深的了解。」
                      </p>
                      <div className="absolute -top-6 -right-6 text-9xl text-black/5 select-none pointer-events-none italic">"</div>
                   </div>
                </div>
             </div>
          </section>

          {/* Section 2: Internship */}
          <section id="internship" className="relative flex h-screen w-screen shrink-0 items-center px-24 border-r border-black/10 overflow-hidden">
             <div className="absolute top-10 left-32">
                <h2 className="text-9xl font-black opacity-[0.03]">御風輪實習</h2>
             </div>
             <div className="grid grid-cols-2 gap-20 w-full items-center">
                <div className="space-y-12">
                   <div className="flex items-start gap-6">
                      <div>
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-2">MAY 2025</div>
                        <h3 className="text-5xl font-extrabold mb-4">御風輪實習</h3>
                        <p className="text-lg text-gray-600 max-w-md">
                          搭乘學校的實習船到日本東京
                        </p>
                      </div>
                   </div>
                   <div className="p-8 border-l-4 border-black bg-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <MapPin size={24} />
                        <span className="font-bold">高雄 - 東京航線</span>
                      </div>
                      <ArrowRight />
                   </div>
                </div>
                <div className="relative group overflow-hidden border border-black bg-white">
                   <img 
                    src="/src/assets/images/regenerated_image_1778506991545.jpg" 
                    alt="日本地圖" 
                    className="w-full h-[500px] object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none" />
                   <div className="absolute bottom-8 left-8 bg-white px-6 py-3 font-bold border border-black shadow-lg">
                      實習動態展示
                   </div>
                </div>
             </div>
          </section>

          {/* Section 4: Education */}
          <section id="education" className="relative flex h-screen w-screen shrink-0 items-center justify-center border-r border-black/10 bg-black text-white">
             <div className="max-w-5xl w-full px-20">
                <div className="flex items-center gap-4 mb-16">
                  <GraduationCap size={32} className="opacity-50" />
                  <h2 className="text-sm tracking-[0.4em] font-bold opacity-50">ACADEMIC PATH</h2>
                </div>
                
                <div className="grid grid-cols-12 gap-16 items-start">
                   {/* Left: Education Entry */}
                   <div className="col-span-12 md:col-span-8">
                      <div className="bg-white text-black p-16 relative shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)]">
                         <div className="text-sm font-bold mb-4 opacity-50">111年 9月 ~ 現在</div>
                         <h4 className="text-5xl font-black leading-tight mb-4">國立高雄科技大學<br/>航海系</h4>
                         <p className="text-lg font-medium opacity-60">航海系 - 五專部</p>
                         <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 -z-10" />
                      </div>
                   </div>

                   {/* Right: Languages Only */}
                   <div className="col-span-12 md:col-span-4 flex justify-end">
                      <div className="text-left w-full max-w-xs">
                         <div className="flex items-center gap-3 mb-6">
                           <Languages size={20} className="text-gray-400" />
                           <span className="font-bold tracking-widest text-sm uppercase">語言能力</span>
                         </div>
                         <div className="space-y-4">
                           <div className="flex justify-between items-end">
                              <span className="text-xl font-bold">中文</span>
                              <span className="text-xs opacity-50">普通</span>
                           </div>
                           <div className="h-px bg-white/20 w-full" />
                           <div className="flex justify-between items-end">
                              <span className="text-xl font-bold">台語</span>
                              <span className="text-xs opacity-50">普通</span>
                           </div>
                           <div className="h-px bg-white/20 w-full" />
                           <div className="flex justify-between items-end">
                              <span className="text-xl font-bold">英文</span>
                              <span className="text-xs opacity-50">普通</span>
                           </div>
                           <div className="h-px bg-white/20 w-full" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Section 4: Certifications */}
          <section id="certifications" className="relative flex h-screen w-screen shrink-0 items-center justify-center px-24 border-r border-black/10">
             <div className="grid grid-cols-12 gap-8 w-full h-[60vh]">
                <div className="col-span-3 flex flex-col justify-end pb-8">
                   <Award size={48} className="mb-6" />
                   <h2 className="text-5xl font-black leading-none mb-4">專業<br />證照</h2>
                   <p className="text-xs font-bold tracking-widest text-gray-400">CERTIFICATIONS & LICENSES</p>
                </div>
                <div className="col-span-9 grid grid-cols-2 gap-4">
                   {[
                     { id: '15', title: '四小證', desc: '基本安全培訓' },
                     { id: '14', title: '進階滅火', desc: '專業損害管制培訓' },
                     { id: '13', title: '助更及航行當值', desc: '航行安全核心技能' },
                     { id: '12', title: '保全意識+職責', desc: '海事保全專門訓練' }
                   ].map((cert, i) => (
                     <motion.div 
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative border border-black p-8 hover:bg-black hover:text-white transition-all duration-300"
                     >
                        <div className="text-8xl font-black absolute top-0 right-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                          {cert.id}
                        </div>
                        <h4 className="text-2xl font-bold mb-2 relative z-10">{cert.title}</h4>
                        <p className="text-sm opacity-60 font-mono relative z-10">{cert.desc}</p>
                        <div className="absolute bottom-6 left-8 overflow-hidden">
                           <div className="w-12 h-px bg-current translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500" />
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* Section 5: 3D Models */}
          <section id="models" className="relative flex h-screen w-screen shrink-0 items-center px-24 bg-[#0a0a0a] text-white">
             <div className="grid grid-cols-2 gap-12 w-full h-[70vh]">
                <div className="border border-white/20 p-8 flex flex-col group">
                   <div className="flex justify-between items-start mb-8">
                      <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-xs">{"{a}"}</div>
                      <Box className="group-hover:rotate-45 transition-transform" />
                   </div>
                   <a 
                     href="https://studio.tripo3d.ai/3d-model/ad4ee384-034f-4906-bfba-612038848cbe?invite_code=1GL395" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex-1 mb-8 overflow-hidden relative border border-white/10 group/card"
                   >
                      <img 
                        src="/src/assets/images/regenerated_image_1778512562655.png" 
                        alt="3D Character model" 
                        className="w-full h-full object-cover filter brightness-50 group-hover/card:brightness-75 transition-all duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                         <div className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 text-sm font-black tracking-[0.2em] uppercase hover:bg-yellow-400 hover:text-black transition-colors shadow-xl">
                            OPEN 3D MODEL A
                         </div>
                      </div>
                   </a>
                   <h3 className="text-2xl font-black mb-1">3D MODEL A (點擊上方圖片或此處查看)</h3>
                   <p className="text-[10px] font-mono opacity-40">TRIPO AI • CHARACTER DESIGN • 2024</p>
                </div>
                
                <div className="border border-white/20 p-8 flex flex-col group">
                   <div className="flex justify-between items-start mb-8">
                      <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-xs">{"{s}"}</div>
                      <Box className="group-hover:rotate-45 transition-transform" />
                   </div>
                   <a 
                     href="https://studio.tripo3d.ai/workspace/generate/c4be8ffc-fa02-4b3c-ad8e-0e4dc1e1ff53" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex-1 mb-8 overflow-hidden relative border border-white/10 group/card"
                   >
                      <img 
                        src="/src/assets/images/regenerated_image_1778512771760.png" 
                        alt="3D Tech model" 
                        className="w-full h-full object-cover filter brightness-50 group-hover/card:brightness-75 transition-all duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                         <div className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 text-sm font-black tracking-[0.2em] uppercase hover:bg-yellow-400 hover:text-black transition-colors shadow-xl">
                            OPEN 3D MODEL S
                         </div>
                      </div>
                   </a>
                   <h3 className="text-2xl font-black mb-1">3D MODEL S (點擊上方圖片或此處查看)</h3>
                   <p className="text-[10px] font-mono opacity-40">TRIPO AI • DIGITAL ASSET • 2024</p>
                </div>
             </div>
             
             {/* Footer Overlay */}
             <div className="absolute bottom-10 left-32 flex gap-20 items-end">
                <div className="text-[18vw] font-black leading-none opacity-5 tracking-tighter">FIN</div>
                <div className="pb-12 space-y-2">
                   <p className="text-xs opacity-40">© 2026 SONG YUAN-CHING</p>
                   <p className="text-xs opacity-40">DESIGNED WITH AI STUDIO</p>
                </div>
             </div>
          </section>

          {/* Section: Okinawa Trip */}
          <section id="okinawa" className="relative flex h-screen w-screen shrink-0 items-center justify-center border-r border-black/10 bg-[#3d5a3d] text-white overflow-hidden">
             {/* Map Background with Path */}
             <div className="absolute inset-0 opacity-10 pointer-events-none scale-150 rotate-12">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                   <path 
                     id="travelPath"
                     d="M100,500 C300,500 400,200 600,200 C800,200 900,800 1100,800" 
                     stroke="white" 
                     strokeWidth="2" 
                     fill="none" 
                     strokeDasharray="8 12" 
                   />
                </svg>
             </div>

             <div className="relative z-10 max-w-6xl w-full grid grid-cols-12 gap-12 px-20">
                <div className="col-span-12 flex justify-between items-end mb-8 border-b border-white/20 pb-8 mt-12">
                   <div>
                      <h2 className="text-sm font-black tracking-[0.5em] opacity-30 mb-4">TRAVEL LOG / 2026.04</h2>
                      <h3 className="text-6xl font-black italic tracking-tighter text-white/90">清明連假</h3>
                      <div className="flex items-center gap-6 mt-6">
                        <span className="text-3xl font-black opacity-80 uppercase tracking-tighter">台灣</span>
                        <div className="flex-1 w-24 h-px bg-white/40 relative">
                           <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-40" size={14} />
                        </div>
                        <span className="text-3xl font-black opacity-80 uppercase tracking-tighter">那霸</span>
                      </div>
                   </div>
                   <div className="text-right flex flex-col items-end">
                      <div className="px-5 py-2 border border-white/20 rounded-full flex items-center gap-3 mb-6 bg-white/5">
                        <Calendar size={14} className="text-yellow-400" />
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase">Season: Spring 2026.04</span>
                      </div>
                      <div className="text-5xl font-black opacity-10 select-none tracking-tighter uppercase whitespace-nowrap">Okinawa Trip</div>
                   </div>
                </div>

                {/* Itinerary Column */}
                <div className="col-span-8 grid grid-cols-2 gap-8">
                   <div className="space-y-8">
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-0 w-8 h-10 bg-yellow-400 text-black flex items-center justify-center font-black text-xs transform -rotate-3 transition-transform group-hover:rotate-0">01</div>
                        <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                           DAY 1
                           <div className="h-px flex-1 bg-white/10" />
                        </h4>
                        <ul className="space-y-3 text-sm opacity-70 font-medium">
                          <li>• 機場接機與辦理租車手續</li>
                          <li>• 租車取車</li>
                          <li>• 瀨長島</li>
                        </ul>
                     </div>
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-0 w-8 h-10 bg-yellow-400 text-black flex items-center justify-center font-black text-xs transform rotate-2 transition-transform group-hover:rotate-0">02</div>
                        <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                           DAY 2
                           <div className="h-px flex-1 bg-white/10" />
                        </h4>
                        <ul className="space-y-3 text-sm opacity-70 font-medium">
                          <li>• 希望之丘 & 海岸步道</li>
                          <li>• Trip Cafe Okinawa</li>
                          <li>• 萬座毛象鼻岩</li>
                          <li>• 萬座毛 炙燒和牛燒肉</li>
                        </ul>
                     </div>
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-0 w-8 h-10 bg-yellow-400 text-black flex items-center justify-center font-black text-xs transform rotate-1 transition-transform group-hover:rotate-0">03</div>
                        <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                           DAY 3
                           <div className="h-px flex-1 bg-white/10" />
                        </h4>
                        <ul className="space-y-3 text-sm opacity-70 font-medium">
                          <li>• Blue Seal 牧港店</li>
                        </ul>
                     </div>
                   </div>
                   <div className="space-y-8">
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-0 w-8 h-10 bg-yellow-400 text-black flex items-center justify-center font-black text-xs transform rotate-6 transition-transform group-hover:rotate-0">04</div>
                        <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                           DAY 4
                           <div className="h-px flex-1 bg-white/10" />
                        </h4>
                        <ul className="space-y-3 text-sm opacity-70 font-medium">
                          <li>• 古宇利島與心形岩</li>
                        </ul>
                     </div>
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-0 w-8 h-10 bg-yellow-400 text-black flex items-center justify-center font-black text-xs transform -rotate-2 transition-transform group-hover:rotate-0">05</div>
                        <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                           DAY 5
                           <div className="h-px flex-1 bg-white/10" />
                        </h4>
                        <ul className="space-y-3 text-sm opacity-70 font-medium">
                          <li>• 港川外人住宅甜點</li>
                          <li>• 美國村 American Village</li>
                          <li>• 北谷夕陽觀賞</li>
                          <li>• 飯店泡湯</li>
                        </ul>
                     </div>
                   </div>
                </div>

                {/* Expenses Column */}
                <div className="col-span-4 bg-white/5 border border-white/10 p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                   <div>
                      <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                        <PieChart size={18} className="text-yellow-400" />
                        <h4 className="text-xs font-black tracking-[0.3em] uppercase">Expense Budget</h4>
                       </div>
                       <div className="space-y-8">
                          {[
                            { label: '飯店住宿', value: '60%' },
                            { label: '租車與油錢', value: '17%' },
                            { label: '機票預算', value: '12%' },
                            { label: '行程開銷', value: '11%' }
                          ].map((item, i) => (
                            <div key={i} className="group">
                               <div className="flex justify-between items-end mb-3">
                                 <span className="text-xs font-black opacity-40 uppercase tracking-widest group-hover:opacity-100 transition-opacity">{item.label}</span>
                                 <span className="text-xs font-black opacity-100 font-mono tracking-tighter">{item.value}</span>
                               </div>
                               <div className="h-1 bg-white/5 w-full overflow-hidden">
                                 <motion.div 
                                   initial={{ width: 0 }}
                                   whileInView={{ width: item.value }}
                                   transition={{ duration: 1, delay: i * 0.1 }}
                                   className="h-full bg-yellow-400/80"
                                 />
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="border-t border-white/10 pt-10 mt-12">
                       <div className="text-[10px] opacity-30 font-black mb-2 tracking-[0.4em] uppercase">Total Estimated</div>
                       <div className="text-4xl font-black text-yellow-400">NT$ 73,320</div>
                    </div>
                 </div>
              </div>
           </section>

           {/* Section: Presentation */}
           <section id="presentation" className="relative flex h-screen w-screen shrink-0 items-center justify-center bg-zinc-900 text-white border-r border-white/5">
              <div className="max-w-6xl w-full px-20">
                 <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 bg-yellow-400 text-black flex items-center justify-center rounded-sm rotate-3">
                       <FileText size={32} />
                    </div>
                    <div>
                       <h2 className="text-sm font-black tracking-[0.5em] opacity-40 uppercase">Resource / Documentation</h2>
                       <h3 className="text-6xl font-black italic tracking-tighter">旅遊簡報</h3>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-12 gap-8 h-[60vh]">
                    <div className="col-span-12 bg-black/40 border border-white/10 overflow-hidden relative group">
                       <iframe 
                         src="https://drive.google.com/file/d/1etcXQHJZS-WUsIcQl7tLfZ-bx0wTHrNZ/preview" 
                         className="w-full h-full border-none"
                         allow="autoplay"
                       ></iframe>
                    </div>
                 </div>
              </div>
           </section>

           {/* Section: Video */}
           <section id="video" className="relative flex h-screen w-screen shrink-0 items-center justify-center bg-black text-white">
              <div className="max-w-6xl w-full px-20">
                 <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center rounded-sm -rotate-2">
                       <Video size={32} />
                    </div>
                    <div>
                       <h2 className="text-sm font-black tracking-[0.5em] opacity-40 uppercase">Media / Experience</h2>
                       <h3 className="text-6xl font-black italic tracking-tighter">旅遊計畫影片</h3>
                    </div>
                 </div>

                 <div className="aspect-video w-full border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl relative group">
                    <iframe 
                      src="https://drive.google.com/file/d/1G9rNPUFIBc4FoftawrztScV9NdTiL4du/preview" 
                      className="w-full h-full border-none"
                      allow="autoplay"
                    ></iframe>
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                       <a 
                         href="https://drive.google.com/file/d/1G9rNPUFIBc4FoftawrztScV9NdTiL4du/view?usp=sharing"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                       >
                          Open in Drive
                       </a>
                    </div>
                 </div>
              </div>
           </section>
        </motion.div>
      </div>

      {/* Page Indicator */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs font-bold tracking-[0.5em] select-none pointer-events-auto">
        <div className="flex items-center gap-6">
          {SECTIONS.map((_, i) => {
            const pageNum = i + 1;
            const step = 1 / (SECTIONS.length - 1);
            return (
              <motion.button
                key={i}
                onClick={() => {
                  window.scrollTo({
                    top: i * step * (document.body.scrollHeight - window.innerHeight),
                    behavior: 'smooth'
                  });
                }}
                style={{
                  opacity: useTransform(scrollYProgress, (v) => {
                    const currentStep = i * step;
                    const dist = Math.abs(v - currentStep);
                    const range = step * 0.5;
                    if (dist > range) return 0.3;
                    return 0.3 + (1 - dist / range) * 0.7;
                  })
                }}
                className="hover:opacity-100 transition-opacity cursor-pointer p-2"
              >
                {pageNum.toString().padStart(2, '0')}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
