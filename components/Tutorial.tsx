import React from 'react';
import { Github } from 'lucide-react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  {
    num: "01",
    title: "核心前提：适配要求",
    content: "明确 MuleRun 生态适配要求。不再是盲目开发，而是先理解 API 对接规范、计量逻辑以及平台的审核红线。这是避免做无用功的第一步。"
  },
  {
    num: "02",
    title: "开源模板架构",
    content: "Clone 我的开源模板 mulerun-init。此模板已内置标准 Iframe 通信协议与 Cloudflare Pages 适配。前端 src 负责交互，后端 functions 负责逻辑转发，开箱即用。"
  },
  {
    num: "03",
    title: "三步上线 (CF Pages)",
    content: "1. 初始化 Git 仓库。2. 绑定 Cloudflare Pages 自动部署。3. 将生成的 URL 填入 MuleRun 开发者后台。零服务器运维，代码提交即上线。"
  },
  {
    num: "04",
    title: "优化技巧",
    content: "利用 PostMessage 实现父子页面通信，处理高度自适应，去除滚动条，让 Agent 看起来像原生应用一样丝滑。"
  }
];

const ArchitectureAnim: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[600px] flex items-center justify-center relative p-4 bg-slate-950">
      <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-2xl font-sans select-none">
        <defs>
          <linearGradient id="gradBox" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="gradPipe" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#475569" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.2" />
          </linearGradient>
          <marker id="arrowhead-sm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
          </marker>
          <marker id="arrowhead-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#22c55e" />
          </marker>
           <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* ================= ZONE 1: LOCAL DEV / GIT (Left) ================= */}
        <g transform="translate(50, 80)">
           <text x="10" y="-20" fill="#94a3b8" fontSize="14" fontWeight="bold" letterSpacing="1">1. SOURCE CODE</text>
           
           {/* Git Repo Box - Height increased to 400 for alignment */}
           <rect x="0" y="0" width="180" height="400" rx="12" fill="url(#gradBox)" stroke="#334155" strokeWidth="2" />
           <g transform="translate(140, 20)">
             <Github size={24} color="#fff" />
           </g>
           
           {/* Structure */}
           <text x="20" y="40" fill="#fff" fontSize="16" fontWeight="bold">mulerun-init</text>
           
           {/* src/ block - Spaced out */}
           <g transform="translate(20, 100)">
             <rect x="0" y="0" width="140" height="60" rx="6" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />
             <text x="10" y="25" fill="#60a5fa" fontSize="14" fontWeight="bold">/src</text>
             <text x="10" y="45" fill="#94a3b8" fontSize="11">React UI Components</text>
           </g>
           
           {/* functions/ block - Spaced out */}
           <g transform="translate(20, 220)">
             <rect x="0" y="0" width="140" height="60" rx="6" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeWidth="1" strokeDasharray="4 2" />
             <text x="10" y="25" fill="#facc15" fontSize="14" fontWeight="bold">/functions</text>
             <text x="10" y="45" fill="#94a3b8" fontSize="11">API Logic (Backend)</text>
           </g>
           
           <text x="20" y="380" fill="#64748b" fontSize="10">git push origin main</text>
        </g>


        {/* ================= ZONE 2: CLOUDFLARE PAGES (Middle) ================= */}
        <g transform="translate(350, 80)">
           <text x="10" y="-20" fill="#f97316" fontSize="14" fontWeight="bold" letterSpacing="1">2. CLOUDFLARE</text>
           
           {/* CF Platform Box - Height increased to 400 for alignment */}
           <rect x="0" y="0" width="220" height="400" rx="16" fill="#1e293b" stroke="#f97316" strokeWidth="2" fillOpacity="0.3" />
           
           {/* Top: CDN / Assets - Spaced out */}
           <g transform="translate(20, 30)">
             <rect x="0" y="0" width="180" height="70" rx="8" fill="#0f172a" stroke="#334155" />
             <text x="90" y="30" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">Static Assets</text>
             <text x="90" y="50" fill="#64748b" fontSize="11" textAnchor="middle">HTML / JS / CSS</text>
           </g>

           {/* Middle: Workers - Spaced out */}
           <g transform="translate(20, 150)">
             <rect x="0" y="0" width="180" height="90" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="1" />
             <text x="90" y="30" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">Serverless Fn</text>
             <text x="90" y="50" fill="#eab308" fontSize="11" textAnchor="middle">/api/chat</text>
             <rect x="40" y="65" width="100" height="8" rx="2" fill="#eab308" fillOpacity="0.2" />
           </g>

           {/* Bottom: KV Database - Spaced out */}
           <g transform="translate(20, 300)">
             {/* Cylinder Top */}
             <ellipse cx="90" cy="15" rx="60" ry="15" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="1"/>
             {/* Cylinder Body */}
             <path d="M30 15 v40 a60 15 0 0 0 120 0 v-40" fill="#ec4899" fillOpacity="0.1" stroke="#ec4899" strokeWidth="1"/>
             <text x="90" y="45" fill="#f472b6" fontSize="14" fontWeight="bold" textAnchor="middle">KV Database</text>
             <text x="90" y="65" fill="#94a3b8" fontSize="10" textAnchor="middle">Sessionid / Userid</text>
           </g>
           
           {/* Internal Connection: Worker -> KV */}
           <path d="M 110 240 L 110 300" stroke="#ec4899" strokeWidth="1" strokeDasharray="4 2" />
           <circle r="2" fill="#ec4899">
             <animateMotion dur="1.5s" repeatCount="indefinite" path="M 110 240 L 110 300" />
           </circle>
        </g>


        {/* ================= ZONE 3: MULERUN APP (Right) ================= */}
        <g transform="translate(720, 80)">
           {/* Header aligned with other zones */}
           <text x="40" y="-20" fill="#22c55e" fontSize="14" fontWeight="bold" letterSpacing="1">3. MULERUN APP</text>
           
           {/* Phone/Host Device - Top aligned at y=0, Height 400 */}
           <rect x="0" y="0" width="240" height="400" rx="24" fill="#020617" stroke="#334155" strokeWidth="4" />
           
           {/* Host App Header */}
           <rect x="10" y="10" width="220" height="40" rx="0" fill="#1e293b" />
           <circle cx="30" cy="30" r="6" fill="#ef4444" />
           <rect x="50" y="25" width="100" height="10" rx="2" fill="#334155" />
           
           {/* THE IFRAME */}
           <g transform="translate(10, 60)">
             <rect x="0" y="0" width="220" height="330" fill="#fff" fillOpacity="0.02" stroke="#eab308" strokeWidth="2" />
             <rect x="0" y="0" width="60" height="20" fill="#eab308" />
             <text x="5" y="14" fill="#000" fontSize="10" fontWeight="bold">&lt;iframe&gt;</text>
             
             {/* UI Elements inside Iframe */}
             <g transform="translate(15, 40)">
               <rect x="0" y="0" width="140" height="20" rx="4" fill="#334155" />
               <rect x="0" y="30" width="190" height="60" rx="4" fill="#1e293b" stroke="#334155" />
               <text x="10" y="65" fill="#64748b" fontSize="12">Chat UI...</text>
               
               {/* The Input Box */}
               <rect x="0" y="250" width="190" height="30" rx="15" fill="#1e293b" stroke="#eab308" strokeWidth="1" />
               <text x="20" y="270" fill="#eab308" fontSize="10">Send Message...</text>
             </g>
           </g>
        </g>


        {/* ================= ZONE 4: BILLING & AUTH (Bottom Center) ================= */}
        <g transform="translate(380, 520)">
           <rect x="0" y="0" width="160" height="60" rx="8" fill="#020617" stroke="#22c55e" strokeWidth="1" />
           <text x="80" y="25" fill="#4ade80" fontSize="12" fontWeight="bold" textAnchor="middle">MuleRun Cloud</text>
           <text x="80" y="45" fill="#94a3b8" fontSize="10" textAnchor="middle">Billing & Auth (计费上报)</text>
        </g>


        {/* ================= CONNECTIONS & ANIMATIONS ================= */}
        
        {/* Path 1: Build & Deploy (Src -> Assets) */}
        <path d="M 210 190 C 260 190, 300 145, 370 145" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
        <circle r="3" fill="#3b82f6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 210 190 C 260 190, 300 145, 370 145" />
        </circle>

        {/* Path 2: Build & Deploy (Functions -> Serverless Fn) */}
        <path d="M 210 330 C 260 330, 300 275, 370 275" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
        <circle r="3" fill="#eab308">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 210 330 C 260 330, 300 275, 370 275" />
        </circle>

        {/* Path 3: Load Assets (CDN -> Iframe) */}
        <path d="M 550 145 C 600 145, 650 160, 730 160" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead-sm)" />
        
        {/* Path 4: API INTERACTION LOOP */}
        {/* Request: Iframe Input -> Serverless Fn */}
        <path id="reqPath" d="M 730 430 C 650 430, 650 275, 550 275" fill="none" stroke="#eab308" strokeWidth="2" strokeOpacity="0.3" />
        
        {/* Response: Serverless Fn -> Iframe */}
        <path id="resPath" d="M 550 295 C 650 295, 650 450, 730 450" fill="none" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.3" />

        {/* Path 5: Billing Report (Worker -> MuleRun Cloud) */}
        {/* Starts from Right side of Serverless Fn, curves down nicely to avoid KV */}
        <path id="billingPath" d="M 550 275 C 600 275, 600 480, 460 520" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arrowhead-green)"/>
        
        {/* Animated Packets for API */}
        <circle r="5" fill="#eab308" filter="url(#glow-gold)">
           <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
             <mpath href="#reqPath" />
           </animateMotion>
           <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle r="4" fill="#3b82f6">
           <animateMotion dur="2s" begin="1s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
             <mpath href="#resPath" />
           </animateMotion>
           <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>

        {/* Animated Packet for Billing */}
        <circle r="3" fill="#22c55e">
           <animateMotion dur="3s" repeatCount="indefinite" path="M 550 275 C 600 275, 600 480, 460 520" />
           <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Labels for Flow */}
        <text x="620" y="360" fill="#eab308" fontSize="10" fontStyle="italic">1. API Request</text>
        <text x="620" y="380" fill="#3b82f6" fontSize="10" fontStyle="italic">2. JSON Response</text>
        
      </svg>
    </div>
  );
};

const Tutorial: React.FC = () => {
  return (
    <section id="tutorial" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-blue-900/05 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            实战教学：复制我的变现路径
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            清晰的架构，标准化的流程。选对 MuleRun + Iframe 组合，你只需要关注核心业务。
          </p>
        </div>

        {/* Part 1: Steps Cards (2x2 Grid) */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-brand-500/40 transition-all duration-300 group relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -right-4 -top-4 text-[120px] font-bold text-white opacity-[0.02] leading-none select-none group-hover:opacity-[0.04] transition-opacity">
                {step.num}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                     <span className="text-brand-500 font-mono font-bold text-xl">{step.num}</span>
                   </div>
                   {index === 1 && (
                     <a href="https://github.com/aichimp/mulerun-init" target="_blank" rel="noreferrer" className="flex items-center px-3 py-1.5 rounded-full bg-slate-800 hover:bg-brand-500 text-brand-400 hover:text-black text-xs font-bold border border-slate-700 hover:border-brand-500 transition-all">
                       <Github className="w-3 h-3 mr-2" /> mulerun-init
                     </a>
                   )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Full Width Architecture Animation */}
        <div className="w-full">
          <div className="glass-panel rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl bg-slate-900/50">
            {/* Browser-like Header */}
            <div className="bg-slate-900/80 border-b border-slate-800 px-6 py-4 flex items-center gap-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               </div>
               <div className="px-4 py-1 rounded-full bg-slate-800 text-xs text-slate-400 font-mono flex-1 text-center">
                  architecture_overview.svg — mulerun-init Full Stack Flow
               </div>
            </div>
            
            {/* Canvas */}
            <div className="w-full bg-gradient-to-br from-slate-900 to-slate-950 relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.03]"></div>
               <ArchitectureAnim />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;