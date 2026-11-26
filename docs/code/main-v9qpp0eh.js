import{S,W,R,p,t}from"./page-r2zcgm5h.js";import{K,tA,_,eA,nA,iA}from"./page-pw9h05gd.js";import{w}from"./page-y19a9grd.js";import{e,C}from"./page-27x1w3mk.js";var j=e(w(),1);var u={name:"grikomsn",version:"2.0.0",description:"Griko Nibras in your terminal: npx grikomsn",homepage:"https://nibras.co",repository:{type:"git",url:"git+https://github.com/grikomsn/multiverse.git",directory:"apps/cli"},license:"MIT",author:"Griko Nibras (https://nibras.co)",type:"module",bin:{grikomsn:"dist/cli.js"},files:["dist"],engines:{node:">=22"},scripts:{start:"bun scripts/dev.ts",build:"bun scripts/build.ts","build:web":"bun scripts/build-web.ts",prepublishOnly:"bun scripts/build.ts",lint:"eslint .",typecheck:"tsc && tsc -p tsconfig.test.json",test:"bun test"},devDependencies:{"@multiverse/config":"workspace:*","@multiverse/content":"workspace:*","@multiverse/sanity":"workspace:*","@multiverse/ui":"workspace:*","@types/node":"catalog:","@types/react":"catalog:","@wterm/dom":"catalog:",eslint:"catalog:",ink:"catalog:",react:"catalog:",sharp:"catalog:",typescript:"catalog:"},keywords:["grikomsn","griko","nibras","card","cli","ink"]};var D="\x1B[38;5;178m",f="\x1B[1m",P="\x1B[2m",I="\x1B[0m";function y(n,{color:o=!1,short:h=!1}={}){let i=(s,c)=>o?s+c+I:c,a=[["Website",n.website],...n.email?[["Email",n.email]]:[],...n.scheduleUrl?[["Call",n.scheduleUrl]]:[],["Resume",`${n.website}/resume`],...n.profiles.filter((s)=>s.featured).map((s)=>[s.label,s.url])],m=Math.max(...a.map(([s])=>s.length)),k=a.map(([s,c])=>`  ${i(D,s.padEnd(m))}  ${c}`),g=[i(f,n.name),[n.headline,n.location].filter(Boolean).join(" · "),"",p(n).join(""),"",...k];if(h)return g.join(`
`)+`
`;let b=n.experience.filter((s)=>!s.end);return[g,b.length>0&&[i(f,"Now"),...b.map((s)=>`  ${s.roles.join(", ")} at ${s.organization}`)],n.projects.length>0&&[i(f,"Projects"),...n.projects.flatMap((s)=>[`  ${s.name}${s.url?i(P,`  ${s.url}`):""}`,...s.summary?[`    ${s.summary}`]:[]])],n.posts.length>0&&[i(f,"Latest posts"),...n.posts.map((s)=>`  ${i(P,S(s.date))}  ${s.title}
              ${s.url}`)],[i(f,"For AI tools"),`  ${n.website}/llms.txt`,`  ${n.website}/mcp`]].filter((s)=>s!==!1).map((s)=>s.join(`
`)).join(`

`)+`
`}var T=`${u.name} ${u.version}
${u.description}

Usage
  npx ${u.name} [options]

Options
  --plain        Print the card as text. This is the default in a pipe.
  --json         Print the card's facts as JSON.
  --theme <name> Start in the "light" or the "dark" theme. The default is the terminal's.
  --no-motion    Show still pictures. NO_MOTION=1 does the same.
  --no-mouse     Do not read the mouse. The m key turns it on and off.
  --offline      Do not read today's facts from nibras.co. Use the copy in the package.
  -v, --version  Print the version.
  -h, --help     Print this text.

Keys and mouse
  ↑ ↓      Move the cursor            ⏎      Open the row in the browser
  ← →      Change the page            c      Copy the row's address
  /        Search                     t      Change the theme
  space    Press the face             q esc  Quit
  m        Turn the mouse off, to select text. Shift and a drag also selects.
  A click opens a row or a page, the wheel moves a list, and the face likes a click.
`;function N(n){try{return j.parseArgs({args:n,options:{plain:{type:"boolean"},json:{type:"boolean"},theme:{type:"string"},"no-motion":{type:"boolean"},"no-mouse":{type:"boolean"},offline:{type:"boolean"},version:{type:"boolean",short:"v"},help:{type:"boolean",short:"h"}}}).values}catch(o){process.stderr.write(`${o instanceof Error?o.message:String(o)}

${T}`);return}}async function q(n){let o=N(n);if(!o)return 2;if(o.help)return process.stdout.write(T),0;if(o.version)return process.stdout.write(`${u.version}
`),0;if(o.theme!==void 0&&o.theme!=="light"&&o.theme!=="dark")return process.stderr.write(`--theme takes "light" or "dark", not "${o.theme}".
`),2;let h=W(),a=((o.plain||o.json||!_()||!h)&&!o.offline?await R(h?2000:8000):void 0)??h;if(!a)return process.stderr.write(`The card has no facts: nibras.co did not answer. Try again later.
`),1;if(o.json)return process.stdout.write(JSON.stringify(a,null,2)+`
`),0;if(o.plain||!_())return process.stdout.write(y(a,{color:K()>0})),0;let m=K();if(m===0)process.env.FORCE_COLOR="0";let[k,{render:g},{App:b},{Screen:v},{tapInput:s}]=await Promise.all([o.theme?o.theme==="dark":iA().then((r)=>r??!0),(C("c07qn2vg"),import("./index-c07qn2vg.js")),(C("brk2svfe"),import("./app-brk2svfe.js")),(C("15beb7gb"),import("./screen-15beb7gb.js")),(C("c63d7mqj"),import("./pointer-c63d7mqj.js"))]),c=!o["no-motion"]&&!tA(),l=new v({terminal:process.stdout,depth:m,fps:eA(),motion:c}),d=s(process.stdin,()=>l.touch());d.subscribe((r)=>{if(r.kind==="focus")l.focus(r.on)}),l.start({pointer:!o["no-mouse"]});let x=(r)=>{d.close(),l.close(),console.error(r),process.exit(1)},O=()=>{l.close(),process.exit(1)},E=["SIGTERM","SIGHUP"];process.once("uncaughtException",x);for(let r of E)process.once(r,O);try{await g(t(b,{card:a,dark:k,depth:m,motion:c,braille:nA(),offline:o.offline===!0,pointer:!o["no-mouse"],stage:l,input:d}),{stdout:l,stdin:d.stream,debug:!0,patchConsole:!1,kittyKeyboard:{mode:"disabled"}}).waitUntilExit()}finally{d.close(),l.close(),process.off("uncaughtException",x);for(let r of E)process.off(r,O)}return process.stdout.write(y(a,{color:m>0,short:!0})),0}export{q as main};
