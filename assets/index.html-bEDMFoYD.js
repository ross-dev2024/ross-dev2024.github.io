import{_ as r,c as o,d as p,b as n,w as e,a as s,e as a,r as d,o as g}from"./app-Dg_oyx95.js";const c={};function y(A,i){const k=d("VPIcon"),h=d("CodeTabs");return g(),o("div",null,[i[19]||(i[19]=p(`<p>随着 <code>Nodejs v16</code> 成为长期稳定支持的版本，<code>ESM</code> 也随之成为 <code>NodeJs</code> 正式支持的标准化模块系统，这允许我们通过 <code>ESM</code> 来开发我们的 <code>NodeJs</code> 项目，并在项目中通过<code>ESM</code> 来导入其他的<code>ESM</code>包。</p><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><p>我们以新建一个 NodeJs 项目为例， 它有如下的结构：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">./my-esm-package</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lib</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   ├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> resolve.js</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> index.js</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">└──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package.json</span></span></code></pre></div><p>这个项目的功能是导出一个 resolve 方法，是 <code>path.resolve</code> 的封装实现。</p>`,5)),n(h,{id:"14",data:[{id:"lib/index.js"},{id:"lib/resolve.js"}]},{title0:e(({value:l,isActive:t})=>[n(k,{name:"vscode-icons:file-type-js"}),i[0]||(i[0]=s("span",null,"lib/index.js",-1))]),title1:e(({value:l,isActive:t})=>[n(k,{name:"vscode-icons:file-type-js"}),i[1]||(i[1]=s("span",null,"lib/resolve.js",-1))]),tab0:e(({value:l,isActive:t})=>i[2]||(i[2]=[s("div",{class:"language-js","data-ext":"js","data-title":"js"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," *"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./resolve.js"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")])])])],-1)])),tab1:e(({value:l,isActive:t})=>i[3]||(i[3]=[s("div",{class:"language-js","data-ext":"js","data-title":"js"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," path"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"path"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," const"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," resolve"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," (..."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"arg"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," path"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"resolve"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(..."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"arg"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")])])])],-1)])),_:1}),i[20]||(i[20]=s("h2",{id:"package-json",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#package-json"},[s("span",null,"package.json")])],-1)),i[21]||(i[21]=s("p",null,[a("在 "),s("code",null,"package.json"),a(" 中，我们需要进行以下声明：")],-1)),s("ul",null,[i[15]||(i[15]=s("li",null,[s("p",null,[a("声明 "),s("code",null,"type"),a(" 字段值为 "),s("code",null,"module")]),s("p",null,[a("这个字段声明了你的包将作为一个 "),s("code",null,"ECMAScript module"),a(" 被"),s("code",null,"NodeJs"),a(" 加载并解析，并允许使用"),s("code",null,".mjs"),a("格式的文件。")])],-1)),s("li",null,[i[13]||(i[13]=s("p",null,[a("声明 "),s("code",null,"exports"),a(" 字段")],-1)),i[14]||(i[14]=s("p",null,"该字段描述了 项目如何导出模块给到其他包使用。",-1)),s("ul",null,[s("li",null,[i[6]||(i[6]=s("p",null,"默认导出",-1)),n(h,{id:"49",data:[{id:"package.json"}]},{title0:e(({value:l,isActive:t})=>[n(k,{name:"vscode-icons:file-type-node"}),i[4]||(i[4]=s("span",null,"package.json",-1))]),tab0:e(({value:l,isActive:t})=>i[5]||(i[5]=[s("div",{class:"language-json","data-ext":"json","data-title":"json"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"exports"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/index.js"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])])],-1)])),_:1}),i[7]||(i[7]=s("p",null,[a("即当使用"),s("code",null,"import { resolve } from 'my-esm-package'"),a("时，默认引入的文件是 "),s("code",null,"lib/index.js"),a("。")],-1))]),s("li",null,[i[10]||(i[10]=s("p",null,"导出多个模块",-1)),n(h,{id:"62",data:[{id:"package.json"}]},{title0:e(({value:l,isActive:t})=>[n(k,{name:"vscode-icons:file-type-node"}),i[8]||(i[8]=s("span",null,"package.json",-1))]),tab0:e(({value:l,isActive:t})=>i[9]||(i[9]=[s("div",{class:"language-json","data-ext":"json","data-title":"json"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"exports"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"."),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/index.js"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"resolve"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/resolve.js"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])])],-1)])),_:1}),i[11]||(i[11]=p("<p>声明了导出了两种模块：一个是默认导出，使用<code>&quot;.&quot;</code> 作为key；一个是具名导出。</p><p>当使用<code>import { resolve } from &#39;my-esm-package&#39;</code>时，默认引入的文件是 <code>lib/index.js</code>。</p><p>当使用<code>import { resolve } from &#39;my-esm-package/resolve&#39;</code> 时，引入的文件是 <code>lib/resolve.js</code>。</p>",3))]),i[12]||(i[12]=s("li",null,[s("p",null,[s("code",null,"exports"),a(" 还支持其他形式的值，这里暂不赘述。")])],-1))])]),i[16]||(i[16]=p("<li><p>声明 <code>engines</code> 字段</p><p>由于 <code>Nodejs</code> 并不是全版本支持<code>esm</code>的，而是从<code>v14.16.0</code>版本开始试验性的支持，并到了<code>v16</code>版本才作为正式支持， 且当前<code>v16</code>版本作为目前的长期稳定支持的版本。这个项目运行环境的<code>NodeJs</code> 版本，最低应该推荐使用 <code>v16</code> 以上的版本。 即它的值应该为 <code>{ &quot;node&quot;: &quot;&gt;=16&quot; }</code></p></li>",1))]),i[22]||(i[22]=s("p",null,[a("到这里，这个项目的"),s("code",null,"package.json"),a(" 文件，包含以下内容:")],-1)),n(h,{id:"96",data:[{id:"package.json"}]},{title0:e(({value:l,isActive:t})=>[n(k,{name:"vscode-icons:file-type-node"}),i[17]||(i[17]=s("span",null,"package.json",-1))]),tab0:e(({value:l,isActive:t})=>i[18]||(i[18]=[s("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"name"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"my-esm-package"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"description"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"My first esm package."),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"type"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"module"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"exports"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"."),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/index.js"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"resolve"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/resolve.js"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  },")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"engines"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"node"),s("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},">=16"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),i[23]||(i[23]=p(`<h2 id="编写项目代码" tabindex="-1"><a class="header-anchor" href="#编写项目代码"><span>编写项目代码</span></a></h2><ol><li><p>由于是一个 <code>esm</code> 项目，所以理所当然的不能项目中使用 <code>require()</code>/<code>module.exports</code> 来导入导出模块。 而是应该全部使用<code>import</code>/<code>export</code> 的方式来导入导出模块。</p></li><li><p>不需要在项目代码中 使用 <code>use strict</code>。</p></li><li><p>由于 <code>esm</code> 项目中，<code>NodeJs</code> 不再支持 <code>__dirname</code>/<code>__filename</code>，所以有相关场景需要使用时，需要使用其他的方式来实现相同功能：</p></li></ol><div class="language-js" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> basename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">path</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> fileURLToPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">url</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> _dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __dirname</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">undefined</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __dirname</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fileURLToPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">meta</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> _filename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __filename</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">undefined</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __filename</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> basename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fileURLToPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">meta</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span></code></pre></div><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>TypeScript</span></a></h2><p>如果在项目中使用了 <code>TypeScript</code>，那么除了需要遵循以上的内容，还需要在 <code>tsconfig.json</code> 配置文件中补充以下配置：</p><div class="language-json" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">module</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">node16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">moduleResolution</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">node16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>并且，应该将 <code>.ts</code> 文件，编译为 <code>.js</code> 文件，<code>package.json</code> 配置的 <code>exports</code> 导出的，是编译后的 <code>.js</code> 文件。</p><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后"><span>最后</span></a></h2><p>当完成了以上步骤，就可以得到一个<code>NodeJs ESM</code> 项目。它也只能在另一个支持 <code>esm</code> 的项目中使用。</p>`,9))])}const u=r(c,[["render",y],["__file","index.html.vue"]]),m=JSON.parse(`{"path":"/article/7jzjudus/","title":"在NodeJs项目中使用ECMAScript module","lang":"zh-CN","frontmatter":{"title":"在NodeJs项目中使用ECMAScript module","createTime":"2022/06/17 02:04:57","author":"pengzhanbo","tags":["node"],"permalink":"/article/7jzjudus/","description":"随着 Nodejs v16 成为长期稳定支持的版本，ESM 也随之成为 NodeJs 正式支持的标准化模块系统，这允许我们通过 ESM 来开发我们的 NodeJs 项目，并在项目中通过ESM 来导入其他的ESM包。 创建项目 我们以新建一个 NodeJs 项目为例， 它有如下的结构： 这个项目的功能是导出一个 resolve 方法，是 path.res...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/article/7jzjudus/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"在NodeJs项目中使用ECMAScript module"}],["meta",{"property":"og:description","content":"随着 Nodejs v16 成为长期稳定支持的版本，ESM 也随之成为 NodeJs 正式支持的标准化模块系统，这允许我们通过 ESM 来开发我们的 NodeJs 项目，并在项目中通过ESM 来导入其他的ESM包。 创建项目 我们以新建一个 NodeJs 项目为例， 它有如下的结构： 这个项目的功能是导出一个 resolve 方法，是 path.res..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在NodeJs项目中使用ECMAScript module\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"package.json","slug":"package-json","link":"#package-json","children":[]},{"level":2,"title":"编写项目代码","slug":"编写项目代码","link":"#编写项目代码","children":[]},{"level":2,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"readingTime":{"minutes":2.58,"words":774},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"1.前端/5.Node/在node项目中使用esm.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"8ce9db","sort":5,"name":"Node"}]}`);export{u as comp,m as data};
