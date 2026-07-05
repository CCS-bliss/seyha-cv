import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  Globe, 
  Heart, 
  Sparkles,
  ExternalLink,
  CheckCircle,
  Eye,
  Award
} from "lucide-react";
import { cvData } from "./types";
// @ts-ignore
import profileImage from "./assets/images/photo_1_2025-11-03_09-44-05 copy.jpg";

export default function App() {
  const [interactiveMode, setInteractiveMode] = useState<boolean>(true);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 selection:bg-neutral-200 py-0 md:py-8 transition-all duration-300">
      
      {/* UTILITY CONTROL NAV - Sticky, Premium floating panel (Hidden during Print) */}
      <header className="no-print sticky top-0 md:top-4 z-50 max-w-5xl mx-auto px-4 mb-4">
        <div className="bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-2xl shadow-sm px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-display font-bold text-sm tracking-tight">
              CC
            </div>
            <div>
              <span className="font-display font-bold text-sm text-neutral-900 block">Chiv Chanseyha</span>
              <span className="text-[10px] text-neutral-500 font-mono">Original CV Digital Replica</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Interactive mode toggle */}
            <button
              onClick={() => setInteractiveMode(!interactiveMode)}
              id="mode-toggle-button"
              className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                interactiveMode
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-neutral-200 hover:bg-neutral-50 text-neutral-700"
              }`}
            >
              {interactiveMode ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span>Interactive Features On</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Static Replica Mode</span>
                </>
              )}
            </button>

            {/* Print/Save PDF button */}
            <button
              onClick={handlePrint}
              id="print-cv-button"
              className="px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* CV MAIN FRAMEWORK - Perfect replication of the 2-column paper design */}
      <main className="max-w-5xl mx-auto bg-white border border-neutral-300/40 shadow-xl md:rounded-3xl overflow-hidden transition-all duration-300">
        
        {/* Dynamic Interactive Banner (Only visible if interactive mode is on) */}
        {interactiveMode && (
          <div className="no-print bg-amber-50 border-b border-amber-100 px-6 py-2.5 flex items-center justify-between text-xs text-amber-900 font-medium">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Interactive Enhancements: Direct links, live inbox, and premium hover effects are enabled.</span>
            </div>
            <button 
              onClick={() => setInteractiveMode(false)}
              className="text-[10px] uppercase font-bold tracking-wider hover:underline text-amber-700 cursor-pointer"
            >
              Disable
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[1100px]">
          
          {/* ========================================================= */}
          {/* LEFT SIDEBAR (Col span 4) - Pitch Black Theme, White Text */}
          {/* ========================================================= */}
          <section className="md:col-span-4 bg-[#0a0a0a] text-white p-8 flex flex-col justify-between space-y-10">
            
            <div className="space-y-10">
              {/* Centered Profile Avatar matching the original layout */}
              <div className="flex flex-col items-center pt-2">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-white/10 blur-md group-hover:bg-white/20 transition duration-75" />
                  <div className="w-44 h-44 rounded-full overflow-hidden border-[4px] border-white relative bg-neutral-900 flex items-center justify-center shadow-lg">
                    <img 
                      src={profileImage} 
                      alt="Chiv Chanseyha Profile" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------------------ */}
              {/* INFO SECTION                         */}
              {/* ------------------------------------ */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm tracking-[0.25em] text-white/90 border-b border-white/20 pb-1.5 uppercase">
                  Info
                </h3>
                <ul className="space-y-3.5 text-xs text-white/80">
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-white/50 shrink-0" />
                    <a 
                      href={`tel:${cvData.phone.replace(/\s+/g, '')}`} 
                      className={interactiveMode ? "hover:text-emerald-400 transition-colors" : ""}
                    >
                      {cvData.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-white/50 shrink-0" />
                    <a 
                      href={`mailto:${cvData.email}`} 
                      className={interactiveMode ? "hover:text-emerald-400 transition-colors" : ""}
                    >
                      {cvData.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                    <div className="leading-relaxed">
                      <p>{cvData.location}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">B87-B89-B91 199 Khan Chamkarmorn</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* ------------------------------------ */}
              {/* SKILLS SECTION                       */}
              {/* ------------------------------------ */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm tracking-[0.25em] text-white/90 border-b border-white/20 pb-1.5 uppercase">
                  Skills
                </h3>
                <ul className="list-disc pl-4 space-y-2 text-xs text-white/80">
                  {cvData.skills.map((skill, idx) => (
                    <li key={idx} className="leading-relaxed font-medium">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ------------------------------------ */}
              {/* EDUCATION SECTION                    */}
              {/* ------------------------------------ */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm tracking-[0.25em] text-white/90 border-b border-white/20 pb-1.5 uppercase">
                  Education
                </h3>
                <div className="space-y-5">
                  {/* Digital Economy at NUMIC */}
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs leading-snug text-white">
                      Digital Economy, NUMIC, Veal Sbov
                    </h4>
                    <span className="inline-block text-[10px] bg-white/10 text-white/90 px-1.5 py-0.5 rounded font-mono">
                      Nov 2025 - Current
                    </span>
                  </div>

                  {/* High School Details */}
                  <div className="text-xs text-white/80 space-y-2 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-white/40">•</span>
                      <span>Graduated BACII (2023-2025)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40">•</span>
                      <span>Graduated High School at WIS (2023-2025)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40">•</span>
                      <span>Pass IELTS test with an average score of 6.5</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40">•</span>
                      <span>Learn Chinese LEVEL 1-3</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40">•</span>
                      <span>Learn French LEVEL 1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------ */}
              {/* LANGUAGE SECTION                     */}
              {/* ------------------------------------ */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm tracking-[0.25em] text-white/90 border-b border-white/20 pb-1.5 uppercase">
                  Language
                </h3>
                <ul className="space-y-2.5 text-xs text-white/80">
                  {cvData.languages.map((lang, idx) => (
                    <li key={idx} className="flex justify-between">
                      <span className="font-bold">{lang.name}</span>
                      <span className="text-white/50">{lang.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Subtle digital economy grid watermark bottom of sidebar */}
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30 font-mono">
              <span>NUMIC • Digital Economy</span>
              <span>v1.2.0</span>
            </div>

          </section>

          {/* ========================================================= */}
          {/* RIGHT COLUMN (Col span 8) - Pure Minimalist White Theme  */}
          {/* ========================================================= */}
          <section className="md:col-span-8 bg-white p-8 md:p-12 space-y-10">
            
            {/* LARGE NAME HEADER */}
            <div className="space-y-1 pt-4">
              <h1 className="font-display font-black text-5xl md:text-6xl text-neutral-900 tracking-tight leading-[0.95] uppercase">
                Chiv
                <br />
                Chanseyha
              </h1>
              <p className="font-display font-medium text-sm tracking-[0.25em] text-neutral-500 uppercase pt-2">
                Business
              </p>
            </div>

            {/* PROFILE PARAGRAPH */}
            <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-2xl text-justify font-sans">
              {cvData.profileSummary}
            </div>

            {/* ------------------------------------ */}
            {/* EXPERIENCE TIMELINE                  */}
            {/* ------------------------------------ */}
            <div className="space-y-6">
              <h3 className="font-display font-bold text-base tracking-[0.2em] text-neutral-900 uppercase">
                Experience
              </h3>

              {/* Connecting vertical timeline structure mimicking screenshot */}
              <div className="relative pl-6 border-l-2 border-neutral-200 space-y-10 py-2">
                
                {/* Node 1: TAZANA Intern experience */}
                <div className="relative">
                  {/* Timeline circular node */}
                  <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-neutral-900 bg-white" />
                  
                  <div className="space-y-2.5">
                    <h4 className="font-display font-bold text-sm text-neutral-900 leading-snug">
                      baristas, TAZANA Tea & Coffee, Phnom Penh, The
                      <br />
                      Olympia Mall Branch, Cambodia
                    </h4>
                    
                    <span className="inline-block text-xs font-semibold text-neutral-500 font-mono">
                      Jul 2024 — Aug 2024
                    </span>

                    <ul className="space-y-2 text-xs text-neutral-600 pl-1 font-sans">
                      <li className="flex items-start gap-2.5">
                        <span className="text-neutral-400 mt-1 shrink-0">•</span>
                        <span>Worked for a month as an Intern</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-neutral-400 mt-1 shrink-0">•</span>
                        <span>Knowledgeable at making lots of different types of drinks/beverages</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-neutral-400 mt-1 shrink-0">•</span>
                        <span>Likes to clean/tidy up after work hours</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Node 2: Websites and Social Links */}
                <div className="relative">
                  {/* Timeline circular node */}
                  <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-neutral-900 bg-white" />
                  
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-sm text-neutral-900 uppercase tracking-wider">
                      Websites and Social Links
                    </h4>

                    {/* Green Sip Card */}
                    <div className={`p-4 rounded-xl border border-neutral-200/80 transition-all ${
                      interactiveMode 
                        ? "bg-emerald-50/20 border-emerald-100 hover:shadow-xs hover:border-emerald-200" 
                        : "bg-neutral-50"
                    }`}>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="font-display font-bold text-xs text-neutral-900">Green Sip</span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-full">
                            Featured Project
                          </span>
                        </div>
                        <a
                          href="https://green-sip-336732128574.asia-southeast1.run.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-700 font-medium inline-flex items-center gap-1 hover:underline"
                        >
                          <span>green-sip-336732128574.asia...</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                        An elegant, custom-crafted cafe management website showcasing Chanseyha's mix of digital structures and tea/coffee barista expertise.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Node 3: Hobbies and Interests */}
                <div className="relative">
                  {/* Timeline circular node */}
                  <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-neutral-900 bg-white" />
                  
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-sm text-neutral-900 uppercase tracking-wider">
                      Hobbies and Interests
                    </h4>

                    <ul className="space-y-1.5 pl-1 text-xs text-neutral-600 font-sans">
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        <span>Jogging</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        <span>Excercising</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        <span>Making Drinks</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        <span>Coding</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        <span>Reading</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>



          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="no-print text-center py-10 text-xs text-neutral-400 font-mono">
        <p>© 2026 Chiv Chanseyha. Designed and compiled perfectly matching the original print copy.</p>
        <p className="mt-1">Built with React, Vite, and Tailwind CSS. Hosted on Cloud Run.</p>
      </footer>
    </div>
  );
}
