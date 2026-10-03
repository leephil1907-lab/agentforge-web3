"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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

export default function Home(){
 const [active,setActive]=useState(0);
 return <main>
 <Progress/>
 <header className="nav"><a className="brand" href="#"><i/>AGENTFORGE</a><nav><a href="#agents">Agents</a><a href="#workflows">Workflows</a><a href="#control">Control</a></nav><a className="nav-cta" href="#map">Map workflow ↗</a></header>

 <section className="hero">
  <div className="hero-grid"/><div className="scanline"/>
  <div className="hero-copy">
   <motion.p className="eyebrow" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>AI OPERATIONS / WEB3</motion.p>
   <motion.h1 initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{delay:.3,duration:.9,ease:[.16,1,.3,1]}}>Turn fragmented<br/><em>activity into action.</em></motion.h1>
   <motion.p className="lede" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.55,duration:.7}}>A controlled crew of AI agents for the work that sits between your community, on-chain signals, research and operations.</motion.p>
   <motion.div className="actions" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.7}}><a className="button primary" href="#map">Map my workflow <span>↗</span></a><a className="button ghost" href="#agents">See the system</a></motion.div>
  </div>
  <SignalCore/>
  <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>AGENTFORGE / 001</span></div>
 </section>

 <section className="ticker" aria-label="AgentForge principles"><div><span>CONTROLLED AUTONOMY</span><i>✦</i><span>HUMAN GATES</span><i>✦</i><span>TRACEABLE RUNS</span><i>✦</i><span>WEB3 OPERATIONS</span><i>✦</i><span>CONTROLLED AUTONOMY</span><i>✦</i></div></section>

 <section className="statement"><Reveal><p className="eyebrow">THE PROBLEM</p><h2>Web3 does not run in one inbox.</h2></Reveal><div className="problem-grid">{["COMMUNITY|Messages. Requests. Intent.","ON-CHAIN|Events. Wallets. Conditions.","OPERATIONS|Research. CRM. Treasury.","HUMANS|Judgement. Approval. Accountability."].map((x,i)=>{const [a,b]=x.split("|");return <Reveal key={a} className="problem-item"><span>0{i+1}</span>{a}<b>{b}</b></Reveal>})}</div></section>

 <section id="agents" className="agents"><div className="section-head"><Reveal><p className="eyebrow">THE CREW</p><h2>Six roles.<br/>One operating layer.</h2></Reveal><Reveal><p>AgentForge separates discovery, reasoning and execution so automation can move quickly without pretending humans are optional.</p></Reveal></div><div className="agent-grid">{agents.map((a,i)=><motion.button whileHover={{y:-7}} whileTap={{scale:.985}} key={a[0]} className={active===i?"agent active":"agent"} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{a[0]}</strong><small>{a[1]}</small><p>{a[2]}</p><b className="arrow">↗</b><i className="agent-line"/></motion.button>)}</div><div className="agent-detail"><span>ACTIVE ROLE / 0{active+1}</span><strong>{agents[active][0]}</strong><p>{agents[active][2]}</p></div></section>

 <section id="workflows" className="workflow"><div className="section-head"><Reveal><p className="eyebrow">WORKFLOW ANATOMY</p><h2>Signal → Reason → Act → Report</h2></Reveal><Reveal><p>Show the run, surface the approval moment, and leave evidence behind.</p></Reveal></div><div className="pipeline">{stages.map((x,i)=><motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="node" key={x[0]}><span>{x[2]}</span><strong>{x[0]}</strong><small>{x[1]}</small></motion.div>)}</div><div className="workflow-beam"/></section>

 <section className="use"><div className="section-head"><Reveal><p className="eyebrow">USE CASES</p><h2>Start with the bottleneck.</h2></Reveal><Reveal><p>Map the repetitive work around the valuable work. Keep sensitive decisions in the loop.</p></Reveal></div><div className="case-list">{workflows.map((w,i)=><motion.div whileHover={{x:8}} className="case" key={w[0]}><span>0{i+1}</span><div><h3>{w[0]}</h3><p>{w[1]}</p></div><b>↗</b></motion.div>)}</div></section>

 <section id="control" className="control"><Reveal className="control-visual"><div className="rings"/><div className="lock">⌁</div><span className="radar-label">GUARDRAIL / ACTIVE</span></Reveal><Reveal><p className="eyebrow">CONTROL LAYER</p><h2>Autonomy is useful.<br/><em>Unbounded autonomy isn't the product.</em></h2><ul><li><b>Human gates</b><span>Approval before sensitive actions.</span></li><li><b>Scoped permissions</b><span>Each agent gets only the tools its job needs.</span></li><li><b>Traceable runs</b><span>Inputs, decisions and outputs stay inspectable.</span></li><li><b>Recovery paths</b><span>Pause, retry, escalate or hand back to a human.</span></li></ul></Reveal></section>

 <section id="map" className="mapper"><Reveal><p className="eyebrow">WORKFLOW MAPPER</p><h2>Describe the work.<br/><em>We map the system.</em></h2><p>Tell us where requests arrive, what gets repeated and where a human must approve. The first map should make the hidden workflow visible.</p><a className="button primary" href="mailto:hello@agentforge-web3.com?subject=AgentForge%20workflow%20map">Start a workflow map ↗</a></Reveal><Reveal className="terminal"><div className="term-top"><span>AGENTFORGE / MAPPER</span><i>● ● ●</i></div><div className="term-body"><p><b>$</b> ingest workflow</p><p className="dim">channel: community</p><p className="dim">signal: qualified intent</p><p><b>→</b> route to <strong>SCOUT</strong></p><p><b>→</b> context via <strong>ANALYST</strong></p><p><b>→</b> approval gate <strong>HUMAN</strong></p><p><b>→</b> execute <strong>OPERATOR</strong></p><p className="success">✓ trace saved / run_0017</p><span className="cursor"/></div></Reveal></section>

 <footer><div className="brand"><i/>AGENTFORGE</div><p>Controlled AI agents for Web3 operations.</p><div><a href="#agents">Agents</a><a href="#workflows">Workflows</a><a href="#control">Control</a></div></footer>
 </main>;
}