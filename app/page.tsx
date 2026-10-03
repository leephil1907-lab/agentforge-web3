"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const agents=[
["SCOUT","Find signals","Prospects, conversations, market and ecosystem signals."],
["SENTINEL","Watch conditions","Wallets, contracts, communities and operational thresholds."],
["ANALYST","Reason with context","Classify events, connect context and propose next actions."],
["OPERATOR","Act with limits","Run approved workflow steps; sensitive actions stay gated."],
["CONCIERGE","Respond safely","Handle known support and community requests from approved knowledge."],
["ARCHIVIST","Prove the run","Capture decisions, outputs, approvals and an audit trail."]
];
const stages=[
["SIGNAL","event detected","01"],
["REASON","context assembled","02"],
["APPROVAL","human gate","03"],
["ACT","approved step","04"],
["REPORT","audit trail","05"]
];
const workflows=[
["Community → CRM","Detect a high-intent conversation → enrich context → draft response → request approval → log outcome."],
["On-chain signal → Ops","Watch a contract event → classify → correlate with internal rules → notify operator → archive evidence."],
["Lead → Website","Qualify an inbound lead → map requirements → generate a scoped workflow → hand off for review."]
];

function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){
 return <motion.div className={className} initial={{opacity:0,y:34}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.7,ease:[.16,1,.3,1]}}>{children}</motion.div>;
}

function SignalCore(){
 const ref=useRef<HTMLDivElement>(null);
 const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
 const rotate=useTransform(scrollYProgress,[0,1],[-25,40]);
 const scale=useTransform(scrollYProgress,[0,.5,1],[.8,1.08,.9]);
 return <motion.div ref={ref} className="core-wrap" style={{scale}}>
   <motion.div style={{rotate}} className="orbit orbit-a"/>
   <motion.div style={{rotate:rotate}} className="orbit orbit-b"/>
   <div className="core"><span/><span/><span/><b/></div>
   <div className="core-label">SIGNAL<br/><b>CORE_01</b></div>
 </motion.div>;
}

function Progress(){
 const {scrollYProgress}=useScroll();
 const scale=useSpring(scrollYProgress,{stiffness:120,damping:30});
 return <motion.div className="progress" style={{scaleX:scale}}/>;
}

function NetworkSystem() {
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start 85%","end 15%"]});
  const beamX=useTransform(scrollYProgress,[0,1],["0%","100%"]);
  const packetY=useTransform(scrollYProgress,[0,1],["4%","88%"]);
  const [pulse,setPulse]=useState(0);
  useEffect(()=>{const t=window.setInterval(()=>setPulse(v=>(v+1)%6),1400);return()=>window.clearInterval(t)},[]);
  return <div ref={ref} className="network-system"><div className="network-top"><span>AGENT MESH / LIVE</span><span><i/> PACKETS ROUTING</span></div><div className="network-stage"><svg className="network-lines" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true"><path d="M90 210 C220 50 330 50 500 210 S780 370 910 210"/><path d="M90 210 C240 350 360 350 500 210 S760 70 910 210"/><path d="M90 210 C260 210 340 210 500 210 S740 210 910 210"/></svg>{agents.map((a,i)=>{const x=[8,24,40,60,76,92][i],y=[23,69,24,68,23,69][i];return <motion.button key={a[0]} className={pulse===i?"mesh-agent hot":"mesh-agent"} style={{left:x+"%",top:y+"%"}} animate={{y:pulse===i?-5:0}} onClick={()=>setPulse(i)}><span className="mesh-orb"/><strong>{a[0]}</strong><small>{a[1]}</small></motion.button>})}<motion.div className="packet packet-a" style={{left:beamX,top:packetY}}/><motion.div className="packet packet-b" style={{left:useTransform(beamX,v=>"calc("+v+" - 22%)"),top:useTransform(packetY,v=>"calc("+v+" + 8%)")}}/><div className="mesh-core"><span/><b>ORCHESTRATOR</b><small>routing / policy / state</small></div></div><div className="network-status"><span>◉ STATE SYNCHRONIZED</span><span>6 AGENTS</span><span>1 CONTROL LAYER</span></div></div>;
}
function LiveMapper(){
  const [step,setStep]=useState(0),[running,setRunning]=useState(false);
  const logs=["ingest workflow","detect high-intent signal","route → SCOUT","context → ANALYST","policy check → HUMAN","approved → OPERATOR","trace → ARCHIVIST"];
  useEffect(()=>{if(!running)return;const t=window.setInterval(()=>setStep(c=>{if(c>=logs.length-1){setRunning(false);return c}return c+1}),650);return()=>window.clearInterval(t)},[running,logs.length]);
  return <div className="live-mapper"><div className="mapper-header"><div><span className="live-dot"/> WORKFLOW MAPPER / LIVE</div><button onClick={()=>{setStep(0);setRunning(true)}} disabled={running}>{running?"RUNNING…":"RUN SIMULATION ↗"}</button></div><div className="mapper-body"><div className="mapper-graph">{["INPUT","SCOUT","ANALYST","HUMAN","OPERATOR","ARCHIVIST"].map((name,i)=><motion.div key={name} className={i<=step?"map-node online":"map-node"} animate={i===step?{scale:[1,1.08,1]}:{scale:1}}><span>{String(i+1).padStart(2,"0")}</span><strong>{name}</strong>{i<5&&<i className={i<step?"connector active":"connector"}/>}</motion.div>)}</div><div className="mapper-log">{logs.map((log,i)=><motion.p key={log} animate={{opacity:i<=step?1:.25,x:i<=step?0:-4}}><b>{i<=step?"✓":"·"}</b> {log}</motion.p>)}<div className="mapper-footer"><span>RUN_00{step+1}</span><span>{running?"EXECUTING":step===logs.length-1?"TRACE SAVED":"READY"}</span></div></div></div></div>;
}export default function Home() {
  const [active,setActive]=useState(0);
  return <main>
    <Progress/><header className="nav"><a className="brand" href="#"><i/>AGENTFORGE</a><nav><a href="#agents">Agents</a><a href="#workflows">Workflows</a><a href="#control">Control</a></nav><a className="nav-cta" href="#map">Map workflow ↗</a></header>
    <section className="hero"><div className="hero-grid"/><div className="scanline"/><div className="hero-copy"><motion.p className="eyebrow" initial={{opacity:0}} animate={{opacity:1}}>REACHMARK / AI OPERATIONS / WEB3</motion.p><motion.h1 initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.16,1,.3,1]}}>Turn fragmented<br/><em>activity into action.</em></motion.h1><p className="lede">A controlled crew of AI agents for the work that sits between your community, on-chain signals, research and operations.</p><div className="actions"><a className="button primary" href="#map">Map my workflow <span>↗</span></a><a className="button ghost" href="#agents">See the system</a></div></div><SignalCore/><div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>AGENTFORGE / 001</span></div></section>
    <section className="ticker"><div><span>CONTROLLED AUTONOMY</span><i>✦</i><span>HUMAN GATES</span><i>✦</i><span>TRACEABLE RUNS</span><i>✦</i><span>WEB3 OPERATIONS</span><i>✦</i></div></section>
    <section className="statement"><Reveal><p className="eyebrow">THE PROBLEM</p><h2>Web3 does not run in one inbox.</h2></Reveal><div className="problem-grid">{["COMMUNITY","ON-CHAIN","OPERATIONS","HUMANS"].map((a,i)=><Reveal key={a} className="problem-item"><span>0{i+1}</span>{a}<b>{["Messages. Requests. Intent.","Events. Wallets. Conditions.","Research. CRM. Treasury.","Judgement. Approval. Accountability."][i]}</b></Reveal>)}</div></section>
    <section id="agents" className="agents"><div className="section-head"><Reveal><p className="eyebrow">THE CREW</p><h2>Six roles.<br/>One operating layer.</h2></Reveal><Reveal><p>Watch the crew connect as the workflow moves. Click an agent to wake its node.</p></Reveal></div><NetworkSystem/><div className="agent-grid">{agents.map((a,i)=><motion.button whileHover={{y:-7}} whileTap={{scale:.985}} key={a[0]} className={active===i?"agent active":"agent"} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{a[0]}</strong><small>{a[1]}</small><p>{a[2]}</p><b className="arrow">↗</b><i className="agent-line"/></motion.button>)}</div><div className="agent-detail"><span>ACTIVE ROLE / 0{active+1}</span><strong>{agents[active][0]}</strong><p>{agents[active][2]}</p></div></section>
    <section id="workflows" className="workflow"><div className="section-head"><Reveal><p className="eyebrow">WORKFLOW ANATOMY</p><h2>Packets move.<br/>Policy decides.</h2></Reveal><Reveal><p>Scroll through the system and watch the signal travel from detection to audit.</p></Reveal></div><div className="pipeline">{stages.map((x,i)=><motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="node" key={x[0]}><span>{x[2]}</span><strong>{x[0]}</strong><small>{x[1]}</small><i className="node-pulse"/></motion.div>)}</div><div className="workflow-beam"><span/></div></section>
    <section className="use"><div className="section-head"><Reveal><p className="eyebrow">USE CASES</p><h2>Start with the bottleneck.</h2></Reveal><Reveal><p>Map the repetitive work around the valuable work. Keep sensitive decisions in the loop.</p></Reveal></div><div className="case-list">{workflows.map((w,i)=><motion.div whileHover={{x:8}} className="case" key={w[0]}><span>0{i+1}</span><div><h3>{w[0]}</h3><p>{w[1]}</p></div><b>↗</b></motion.div>)}</div></section>
    <section id="control" className="control"><Reveal className="control-visual"><div className="rings"/><div className="lock">⌁</div><span className="radar-label">GUARDRAIL / ACTIVE</span></Reveal><Reveal><p className="eyebrow">CONTROL LAYER</p><h2>Autonomy is useful.<br/><em>Unbounded autonomy isn't the product.</em></h2><ul><li><b>Human gates</b><span>Approval before sensitive actions.</span></li><li><b>Scoped permissions</b><span>Each agent gets only the tools its job needs.</span></li><li><b>Traceable runs</b><span>Inputs, decisions and outputs stay inspectable.</span></li><li><b>Recovery paths</b><span>Pause, retry, escalate or hand back to a human.</span></li></ul></Reveal></section>
    <section id="map" className="mapper"><Reveal><p className="eyebrow">WORKFLOW MAPPER</p><h2>Describe the work.<br/><em>See the system run.</em></h2><p>Tell us where requests arrive, what gets repeated and where a human must approve. Run a controlled simulation before mapping the real workflow.</p><a className="button primary" href="mailto:hello@agentforge-web3.com?subject=AgentForge%20workflow%20map">Start a workflow map ↗</a></Reveal><Reveal><LiveMapper/></Reveal></section>
    <footer><div className="brand"><i/>AGENTFORGE</div><p>Controlled AI agents for Web3 operations.</p><div><a href="#agents">Agents</a><a href="#workflows">Workflows</a><a href="#control">Control</a></div></footer>
  </main>;
}