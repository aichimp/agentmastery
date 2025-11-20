import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Check, X, AlertTriangle } from 'lucide-react';
import { ComparisonPoint, ComparisonRow } from '../types';

const data: ComparisonPoint[] = [
  { metric: '开发速度', iframe: 90, n8n: 70, fullMark: 100 },
  { metric: '交互体验 (UX)', iframe: 95, n8n: 60, fullMark: 100 },
  { metric: '生态兼容性', iframe: 98, n8n: 80, fullMark: 100 },
  { metric: '维护成本', iframe: 85, n8n: 50, fullMark: 100 }, // Higher score = Lower cost/Easier maintenance
  { metric: '逻辑灵活性', iframe: 80, n8n: 95, fullMark: 100 },
];

const tableData: ComparisonRow[] = [
  {
    feature: '开发体验',
    iframe: '基于 Web 标准 (React/Vue)，所见即所得，前端开发者 0 门槛',
    n8n: '低代码节点流，逻辑复杂时如同"连线地狱"，调试困难',
    highlight: 'iframe'
  },
  {
    feature: '核心优势',
    iframe: 'UI 高度定制，可完美融入 MuleRun，支持复杂交互组件',
    n8n: '后端逻辑极其强大，适合纯数据处理或自动化流',
    highlight: 'iframe'
  },
  {
    feature: '成本与维护',
    iframe: '托管于 Cloudflare Pages (免费)，代码即文档，易于版本控制',
    n8n: '版本管理困难，容易"断流"',
    highlight: 'iframe'
  },
  {
    feature: '场景适配',
    iframe: '面向用户的产品型 Agent (SaaS, 工具)',
    n8n: '面向节点的效率型流程 (自动化, 归档)',
    highlight: 'iframe'
  },
];

const Comparison: React.FC = () => {
  return (
    <section id="compare" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            MuleRun 生态下：<span className="text-blue-400">n8n</span> vs <span className="text-brand-500">Iframe</span>
          </h2>
          <p className="text-slate-400">
            谁能在 MuleRun 生态里，帮你复制我的变现路径？数据不说谎。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Section */}
          <div className="h-[400px] glass-panel rounded-3xl p-4 relative">
            <h3 className="text-center text-white font-semibold mb-2 absolute top-6 left-0 right-0 z-10">
              综合能力雷达图
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="55%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Iframe (推荐)"
                  dataKey="iframe"
                  stroke="#eab308"
                  strokeWidth={3}
                  fill="#eab308"
                  fillOpacity={0.5}
                />
                <Radar
                  name="n8n"
                  dataKey="n8n"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  fill="#60a5fa"
                  fillOpacity={0.3}
                />
                <Legend verticalAlign='bottom' wrapperStyle={{ paddingTop: '20px' }} />
              </RadarChart>
            </ResponsiveContainer>
            <div className="absolute bottom-4 right-4 text-xs text-slate-500">
              *基于变现场景评分
            </div>
          </div>

          {/* Text Analysis */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-brand-500">
              <h4 className="text-xl font-bold text-white mb-2 flex items-center">
                <Check className="w-6 h-6 text-brand-500 mr-2" /> Iframe: 产品化变现首选
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                如果你想做一款"卖给用户"的产品，Iframe 是较好的选择。它能提供完整的 App 体验，让用户觉得物有所值。
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-blue-500 opacity-70">
              <h4 className="text-xl font-bold text-white mb-2 flex items-center">
                <AlertTriangle className="w-6 h-6 text-blue-500 mr-2" /> n8n: 节点效率工具
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                适合做后台任务。但在 MuleRun 中直接面向消费者时，缺乏 UI 交互能力。
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="mt-16 overflow-x-auto">
           <div className="min-w-[800px]">
            <div className="grid grid-cols-12 bg-slate-800 text-slate-300 font-bold p-4 rounded-t-xl">
              <div className="col-span-2">维度</div>
              <div className="col-span-5 text-brand-400">MuleRun + Iframe</div>
              <div className="col-span-5 text-blue-400">n8n</div>
            </div>
            {tableData.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-12 p-4 border-b border-slate-800 hover:bg-slate-800/30 transition-colors ${idx === tableData.length - 1 ? 'border-none' : ''}`}>
                <div className="col-span-2 font-medium text-white flex items-center">{row.feature}</div>
                <div className="col-span-5 text-slate-300 pr-4 flex items-start">
                   {row.highlight === 'iframe' && <Check className="w-4 h-4 text-brand-500 mr-2 mt-1 flex-shrink-0" />}
                   {row.iframe}
                </div>
                <div className="col-span-5 text-slate-400 pr-4 flex items-start">
                   {row.highlight === 'n8n' && <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />}
                   {row.n8n}
                </div>
              </div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;