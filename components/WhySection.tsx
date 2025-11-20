import React from 'react';
import { Box, Zap, LayoutTemplate, TrendingUp } from 'lucide-react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 border-l-4 border-transparent hover:border-brand-500 group">
    <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
      <div className="text-brand-400 group-hover:text-brand-300">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            为什么锚定 <span className="text-brand-500">MuleRun + Iframe</span> 路径？
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            我的 Agent 变现实战验证：踩中 “好体验 + 提效率 + 省成本” 的复购核心。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="平台赋能"
            desc="MuleRun 自带生态流量扶持，不用自己搭服务器、做分发，上线即触达潜在用户，解决最难的“冷启动”问题。"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="工具适配"
            desc="Iframe 具备标准交互能力，无缝嵌入 MuleRun 生态，避免用户跳出，提供原生般的流畅体验，极大提升转化率。"
          />
          <FeatureCard
            icon={<LayoutTemplate className="w-8 h-8" />}
            title="模板复用"
            desc="以 MuleRun 官方适配的 Iframe 模板为基座，开发时间缩短 80%，只需关注核心业务逻辑，快速迭代产品。"
          />
        </div>

        <div className="mt-16 glass-panel p-8 rounded-3xl border border-brand-500/20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">实战数据揭秘</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">开发周期</span>
                  <span className="text-brand-400 font-mono font-bold">3天 vs 3周</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">服务器成本</span>
                  <span className="text-brand-400 font-mono font-bold">¥0 (Serverless)</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="text-slate-400">首月变现</span>
                  <span className="text-green-400 font-mono font-bold flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" /> +300% ROI
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-right">
              <p className="text-lg text-slate-300 italic md:whitespace-nowrap">
                "选对路，比跑得快更重要。MuleRun 是目前 Agent 变现的最佳洼地。"
              </p>
              <div className="mt-4 flex items-center justify-center md:justify-end">
                 <img src="https://picsum.photos/64/64?grayscale" alt="Author" className="w-12 h-12 rounded-full border-2 border-brand-500" />
                 <div className="ml-4 text-left">
                    <div className="text-white font-bold">宇哲</div>
                    <div className="text-brand-500 text-xs">开发者</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;