import React from 'react';
import { 
  Github, 
  MessageSquare, 
  Users, 
  Mail, 
  BookOpen, 
  HelpCircle, 
  UserPlus, 
  FolderOpen, 
  ArrowRight
} from 'lucide-react';

const WECHAT_QR_URL = "https://item.aichimp.top/mulerun%E7%BE%A4%E8%81%8A.png";
const PERSONAL_WECHAT_URL = "https://item.aichimp.top/selfweixin.jpg";

const ResourceLink: React.FC<{ href: string; title: string; icon: React.ReactNode; color: string }> = ({ href, title, icon, color }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group flex items-center p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
  >
    <div className={`w-10 h-10 rounded-lg ${color} bg-opacity-20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-slate-200 font-medium text-sm group-hover:text-white transition-colors">{title}</h4>
    </div>
    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer id="community" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-900 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Banner */}
        <div className="glass-panel rounded-3xl p-10 md:p-16 text-center relative overflow-hidden mb-16">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 via-slate-900/50 to-blue-900/10 pointer-events-none"></div>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
             MuleRun 生态下 <br />
             <span className="text-brand-500">一起放大 Agent 变现价值</span>
           </h2>
           <p className="text-slate-300 max-w-2xl mx-auto mb-10 relative z-10">
             这不是一个人的战斗。加入我们的私域社群，获取开源模板代码，参与互动答疑，共同掘金。
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
             <a 
                href="https://form.typeform.com/to/mkqp5k3B?utm_source=blog"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl flex items-center justify-center transition-all transform hover:scale-105 shadow-lg shadow-brand-500/20"
             >
               <Users className="mr-2 w-5 h-5" /> 申请成为 Creator
             </a>
             <a 
               href="https://github.com/aichimp/mulerun-init"
               target="_blank"
               rel="noreferrer"
               className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 flex items-center justify-center transition-all"
             >
               <Github className="mr-2 w-5 h-5" /> 获取开源代码
             </a>
           </div>
        </div>

        {/* New Resource Hub Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {/* Left: Resource Links */}
          <div className="lg:col-span-2 glass-panel p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-500/50 rounded-l-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FolderOpen className="mr-3 text-brand-500 w-6 h-6" /> MuleRun Creator 资源合集
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <ResourceLink 
                href="https://acnr4afdew94.feishu.cn/wiki/CHd9w4BfLiTruikVIsAc3XmbnPx?table=tbl9ln9B6xhL4Ly7&view=vewyql6AAn" 
                title="MuleRun Creator 变现案例" 
                icon={<BookOpen className="text-blue-400" />}
                color="bg-blue-500"
              />
              <ResourceLink 
                href="https://acnr4afdew94.feishu.cn/wiki/CbXswlwTqi6agrkOShycp6ElnOb" 
                title="MuleRun Creator FAQ" 
                icon={<HelpCircle className="text-purple-400" />}
                color="bg-purple-500"
              />
              <ResourceLink 
                href="https://form.typeform.com/to/mkqp5k3B?utm_source=blog" 
                title="申请成为 MuleRun Creator" 
                icon={<UserPlus className="text-green-400" />}
                color="bg-green-500"
              />
              <ResourceLink 
                href="https://acnr4afdew94.feishu.cn/wiki/AN2bwtGLvinIKCky8Uicr4Y2nbh" 
                title="MuleRun Creator 资源合集" 
                icon={<FolderOpen className="text-orange-400" />}
                color="bg-orange-500"
              />
            </div>
          </div>

          {/* Right: QR Code */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-blue-500"></div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-center">
              <MessageSquare className="mr-2 text-brand-500 w-5 h-5" /> MuleRun Creator 交流群（中国）
            </h3>
            <div className="bg-white p-3 rounded-xl shadow-lg mb-6 transition-transform transform group-hover:scale-105 duration-300">
                <img 
                  src={WECHAT_QR_URL} 
                  alt="MuleRun Creator Group QR" 
                  className="w-40 h-40 object-contain"
                />
            </div>
            <p className="text-slate-400 text-xs max-w-[200px] leading-relaxed">
              扫描二维码加入 MuleRun Creator 官方交流群，获取最新动态
            </p>
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
               <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center mr-3 shadow-lg shadow-brand-500/20">
                 <span className="text-black font-bold font-mono text-xl">M</span>
               </div>
               <span className="text-xl font-bold text-white tracking-tight">AgentMastery</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              专注 MuleRun 生态开发与变现。帮助个人开发者选对工具，用 Iframe 打造高价值 Agent 产品。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider text-slate-200">资源导航</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a 
                  href="https://github.com/aichimp/mulerun-init" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-400 transition-colors flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  开源模板
                </a>
              </li>
              <li>
                <a 
                  href="https://mulerun.com/docs/creator-guide/agent/iframe-agent-spec" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-400 transition-colors flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  API 文档 (MuleRun)
                </a>
              </li>
              <li>
                <a 
                  href="https://aichimp.top" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-400 transition-colors flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Aichimp导航
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider text-slate-200">联系我们</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center group hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3 text-slate-500 group-hover:text-brand-400" /> 
                aichimpnav@gmail.com
              </li>
              <li className="relative flex items-center group hover:text-white transition-colors cursor-pointer">
                <MessageSquare className="w-4 h-4 mr-3 text-slate-500 group-hover:text-brand-400" /> 
                <span className="border-b border-transparent group-hover:border-brand-400 transition-colors pb-0.5">微信答疑</span>
                
                {/* Hover Tooltip */}
                <div className="absolute bottom-full left-0 mb-3 w-32 p-2 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <img 
                    src={PERSONAL_WECHAT_URL} 
                    alt="WeChat Personal QR" 
                    className="w-full h-auto rounded block"
                  />
                  {/* Arrow */}
                  <div className="absolute -bottom-1 left-4 w-3 h-3 bg-white rotate-45"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} AgentMastery. All rights reserved.</p>
          <p className="mt-2 md:mt-0">非 MuleRun 官方页面，仅为社区分享。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;