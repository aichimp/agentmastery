import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-brand-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel border-brand-500/30 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-ping"></span>
          <span className="text-brand-300 text-sm font-semibold tracking-wide">选对生态 + 用对工具 = 快速变现</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          第一桶金比 <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300 animate-gradient-x">
            想象中更近
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
          不用从零搭生态，不用盲目试错。借力 <span className="text-white font-bold">MuleRun</span> 平台优势，
          用我的实战型 Agent 做模板，教你复制变现路径。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => document.getElementById('why')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center">
            揭秘变现路径 <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button onClick={() => document.getElementById('tutorial')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all flex items-center justify-center">
            查看实战教学
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-medium">
          <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2" /> 平台流量扶持</div>
          <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2" /> 零服务器成本</div>
          <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2" /> 官方模板基座</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;