import React, {useCallback, useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight,ArrowDownRight,Github,Wrench,BarChart3,Database,Cpu,Factory,Activity,Code2,Mail,MapPin} from 'lucide-react';
import './style.css';
const repo='https://github.com/inwatetanmay17-byte/Manufacturing-Analytics-Dashboard';
const github='https://github.com/inwatetanmay17-byte';
const email='inwatetanmay17@gmail.com';

function SwarmIntro({onComplete,onSkip,runKey}){
  useEffect(()=>{
    // Keep the intro mounted for its full sequence. Reduced-motion CSS makes
    // the scene static, but should never dismiss it almost immediately.
    const timer=window.setTimeout(onComplete,8800);
    return ()=>window.clearTimeout(timer);
  },[runKey,onComplete]);
  const cursors=[
    ["cyan","14%","24%","0s"],["pink","78%","17%","0.25s"],["yellow","87%","64%","0.55s"],
    ["violet","20%","76%","0.8s"],["orange","64%","83%","1.05s"],["blue","48%","13%","1.3s"],
    ["mint","92%","39%","1.55s"],["rose","8%","54%","1.8s"]
  ];
  return <div className="swarm-intro" key={runKey} role="status" aria-label="Portfolio is being assembled">
    <div className="swarm-grid"/>
    <div className="swarm-topline"><span>T. / TANMAY PORTFOLIO</span><span>INDEPENDENTLY BUILT · 2026</span></div>
    <div className="swarm-stage">
      <div className="swarm-kicker swarm-draw d1"><i/> ENGINEERING · ANALYTICS · BUILDING</div>
      <div className="swarm-title swarm-draw d2">Turning engineering<br/><span>questions into</span><br/><b>clear insights.</b></div>
      <div className="swarm-copy swarm-draw d3">Mechanical engineering, manufacturing systems<br/>and data-driven problem solving.</div>
      <div className="swarm-cta swarm-draw d4"><span>EXPLORE PROJECTS ↘</span><span>VIEW GITHUB ↗</span></div>
      <div className="swarm-visual swarm-draw d5"><div className="swarm-orbit"/><div className="swarm-core"><small>ENGINEERING / 001</small><b>SYSTEMS<br/><em>THINKING.</em></b><small>MECHANICAL × DATA</small></div><i className="swarm-chip">◈ ANALYSE</i></div>
      <div className="swarm-sectionline swarm-draw d6"><span>01 / ABOUT</span><i/><span>02 / EXPERTISE</span></div>
      <div className="swarm-cards swarm-draw d7"><i/><i/><i/><i/></div>
      <div className="swarm-project swarm-draw d8"><div/><span>MANUFACTURING PRODUCTION & QUALITY ANALYSIS</span></div>
    </div>
    {cursors.map(([tone,left,top,delay],i)=><div className={`swarm-cursor ${tone}`} style={{left,top,animationDelay:delay}} key={tone}><span>➤</span><small>{["TANMAY","BUILD_02","ANALYST","DESIGN_04","SYSTEMS","MECH_01","DATA_03","ENGINEER"][i]}</small></div>)}
    <div className="swarm-progress"><span>ASSEMBLING PORTFOLIO</span><div><i/></div><b>01 — 08</b></div>
    <button className="swarm-skip" onClick={onSkip}>SKIP INTRO ↗</button>
    <div className="swarm-reveal">A PORTFOLIO, BUILT IN MOTION.</div>
  </div>
}

function App(){
const [menuOpen,setMenuOpen]=useState(false);
const [introRun,setIntroRun]=useState(()=>{
  try{
    if(window.localStorage.getItem('tanmay-swarm-intro-seen')) return false;
    window.localStorage.setItem('tanmay-swarm-intro-seen','1');
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }catch{return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;}
});
const [introKey,setIntroKey]=useState(0);
const finishIntro=useCallback(()=>setIntroRun(false),[]);
const replayIntro=useCallback(()=>{
  // Do not silently skip replay for visitors who prefer reduced motion.
  // The intro component switches to a short static presentation for them.
  window.scrollTo({top:0,behavior:'auto'});
  setIntroKey(k=>k+1);
  setIntroRun(true);
},[]);
const closeMenu=()=>setMenuOpen(false);
return <div>
{introRun && <SwarmIntro key={introKey} runKey={introKey} onComplete={finishIntro} onSkip={finishIntro}/>}
<button className="replay-intro" onClick={replayIntro} aria-label="Replay portfolio introduction">↻ <span>REPLAY INTRO</span></button>
<nav className="nav wrap"><a className="brand" href="#home" onClick={closeMenu}>T. <span>TANMAY<span className="cyan">/</span>PORTFOLIO</span></a><div className={`links ${menuOpen?'mobile-open':''}`}><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Expertise</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#contact" onClick={closeMenu}>Contact</a></div><div className="nav-actions"><a className="navbtn" href={github} target="_blank" rel="noreferrer">GitHub ↗</a><button className="menu-toggle" type="button" aria-label={menuOpen?'Close navigation menu':'Open navigation menu'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?'✕':'☰'}</button></div></nav>
<header className="hero wrap" id="home"><div><div className="eyebrow"><i/> ENGINEERING • ANALYTICS • BUILDING</div><h1>Turning engineering<br/><span>questions into</span><br/><b>clear insights.</b></h1><p className="lead">I'm Tanmay — <strong>Mechanical Engineer | Data Analytics Enthusiast.</strong> Interested in the intersection of engineering systems, manufacturing, and data-driven problem solving.</p><div className="actions"><a className="primary" href="#projects">Explore projects <ArrowDownRight size={16}/></a><a className="secondary" href={repo} target="_blank"><Github size={16}/> View GitHub</a></div><div className="meta">BASED IN INDIA <i/> OPEN TO ENGINEERING OPPORTUNITIES</div></div><div className="visual"><div className="orbit"></div><div className="core"><small>ENGINEERING / 001　 <span>● LIVE</span></small><Factory size={62}/><h2>SYSTEMS<br/><em>THINKING.</em></h2><small>MECHANICAL　×　DATA</small></div><label className="chip one">◈ ANALYSE</label><label className="chip two">⌘ ENGINEER</label><small className="fig">FIG 01 — APPROACH</small></div><div className="scroll">SCROLL TO EXPLORE <i/> 01 / 04</div></header>
<div className="band"><div className="wrap bandin"><small>[ 01 — PROFILE ]</small><p>Curiosity for how things work.<br/><em>Discipline to understand why.</em></p><small>MECHANICAL ENGINEERING<br/>DATA-DRIVEN THINKING</small></div></div>
<section className="wrap section" id="about"><div className="label">01 / ABOUT <i/></div><div className="about"><h2>Engineering mindset.<br/><span>Analytical approach.</span></h2><div><p>I’m building a foundation across mechanical engineering and data analytics. I enjoy breaking down complex systems, working with structured data, and communicating findings through clear visual stories.</p><p>This portfolio is a growing record of projects, practical learning, and the tools I use to turn raw information into useful understanding.</p><div className="edu"><Wrench/><div><small>EDUCATION</small><b>Mechanical Engineering</b><span>National Institute of Technology, Durgapur</span></div><a href="https://nitdgp.ac.in/" target="_blank">↗</a></div></div></div></section>
<section className="section dark" id="skills"><div className="wrap"><div className="label">02 / EXPERTISE <i/></div><div className="sectionhead"><h2>Tools & <span>capabilities.</span></h2><p>A developing toolkit for understanding engineering processes and making data useful.</p></div><div className="skills"><article><Wrench/><small>01 / CORE DOMAIN</small><h3>Mechanical<br/>Engineering</h3><p>Engineering fundamentals, manufacturing processes, and production systems.</p></article><article><BarChart3/><small>02 / VISUAL ANALYTICS</small><h3>Power BI<br/>& Excel</h3><p>Dashboard design, KPI reporting, data exploration, and visual communication.</p></article><article><Database/><small>03 / DATA</small><h3>SQL<br/>Analysis</h3><p>Data querying, aggregation, grouping, and structured analysis using MySQL.</p></article><article><Code2/><small>04 / PROBLEM SOLVING</small><h3>Technical<br/>Thinking</h3><p>Organizing workflows, documenting methods, and presenting technical work clearly.</p></article></div></div></section>
<section className="wrap section" id="projects"><div className="label">03 / SELECTED WORK <i/></div><div className="sectionhead"><h2>Projects in <span>progress.</span></h2><small>01 FEATURED PROJECT</small></div><article className="project"><div className="preview"><a className="preview-image-link" href="/dashboard-preview.png" target="_blank" rel="noreferrer" aria-label="Open the full manufacturing dashboard preview in a new tab"><img src="/dashboard-preview.png" alt="Full manufacturing production and quality Power BI dashboard preview" loading="lazy"/></a><small>PROJECT / 001　 POWER BI DASHBOARD · CLICK IMAGE TO VIEW FULL SIZE</small></div><div className="details"><small className="eyebrow">● FEATURED CASE STUDY</small><h3>Manufacturing Production<br/>& Quality Analysis</h3><p>An end-to-end analytics project exploring production performance, quality metrics, machine downtime, and shift-level trends using a synthetic manufacturing dataset.</p><div className="tags"><span>EXCEL</span><span>MYSQL</span><span>POWER BI</span></div><div className="stats"><div><b>450</b><small>RECORDS</small></div><div><b>92.71%</b><small>PRODUCTION EFFICIENCY</small></div><div><b>2.65%</b><small>REJECTION RATE</small></div></div><a className="primary" href={repo} target="_blank">Explore repository <ArrowUpRight size={15}/></a><a className="doclink" href={repo+'/tree/main/DOCUMENTATION'} target="_blank">Read documentation ↗</a><p className="disclosure">Dataset disclosure: synthetic data generated with ChatGPT for educational and portfolio purposes; not real factory data.</p></div></article><div className="future"><div><small>NEXT CHAPTERS</small><h3>More work will live here.</h3></div><p>CAD & design · Manufacturing systems · Mechanical analysis · Data projects</p><b>＋</b></div></section>
<section className="contact" id="contact"><div className="wrap"><div className="label">04 / CONTACT <i/></div><small>HAVE A PROJECT OR OPPORTUNITY?</small><h2>Let's build<br/><b>something useful.</b></h2><p>I'm open to connecting with people working across engineering, manufacturing, and analytics.</p><div className="contact-links"><a className="primary" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}target="_blank"rel="nonreferrer"><Mail size={16}/> Email me <ArrowUpRight size={15}/></a><a className="secondary" href={github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub profile ↗</a></div><div className="contact-location"><MapPin size={14}/><span>Based in India</span></div></div></section>
<footer className="wrap"><a className="brand" href="#">T. <span>TANMAY/PORTFOLIO</span></a><small>DESIGNED TO GROW WITH THE WORK.</small><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} TANMAY</small></footer>
</div>}
createRoot(document.getElementById('root')).render(<App/>);
