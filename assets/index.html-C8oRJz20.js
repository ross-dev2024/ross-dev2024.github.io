import{f as c,g as l,_ as E,c as C,a as u,e as s,b as D,w as B,t as n,n as d,d as i,r as m,o as g}from"./app-Dg_oyx95.js";const h=c({__name:"index.html",setup(p,{expose:t}){t();const o=l(!1),e=()=>{o.value=!o.value},a=l(!1),r={show:o,toggle:e,show2:a,toggle2:()=>{a.value=!a.value}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),A={class:"demo-wrapper"},k={class:"demo-container"},b={class:"demo-wrapper"},v={class:"demo-container"};function y(p,t,o,e,a,F){const r=m("RouteLink");return g(),C("div",null,[t[7]||(t[7]=u("h2",{id:"scroll-gutter",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#scroll-gutter"},[u("span",null,"Scroll Gutter")])],-1)),u("p",null,[t[1]||(t[1]=s("与滚动相关的另一件事是滚动条装订线。 以前面的 ")),D(r,{to:"/defensive-css/scroll-chaining/"},{default:B(()=>t[0]||(t[0]=[s("例子")])),_:1}),t[2]||(t[2]=s(" 为例，当内容变长时，添加滚动条将导致布局偏移。 发生布局偏移的原因是为滚动条保留空间。"))]),u("div",A,[t[4]||(t[4]=u("div",{class:"demo-head"},[u("div",{class:"demo-ctrl"},[u("i"),u("i"),u("i")])],-1)),u("div",k,[u("button",{type:"button",class:"add-btn-120",onClick:e.toggle},n(e.show?"重置内容":"添加内容"),1),u("div",{class:d(["body-scroll-120",{show:e.show}])},t[3]||(t[3]=[i("<p>關關雎鳩，在河之洲。<br>窈窕淑女，君子好逑。</p><p>參差荇菜，左右流之。<br>窈窕淑女，寤寐求之。</p><p>求之不得，寤寐思服。<br>悠哉悠哉，輾轉反側。</p><p>參差荇菜，左右采之。<br>窈窕淑女，琴瑟友之。</p><p>參差荇菜，左右芼之。<br>窈窕淑女，鍾鼓樂之。</p>",5)]),2)])]),t[8]||(t[8]=i(`<p>请注意，当内容因显示滚动条而变长时，内容是如何移动的。 我们可以通过使用属性 <code>scrollbar-gutter</code> 来避免这种行为。</p><div class="language-css" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  scrollbar-gutter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> stable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div>`,2)),u("div",b,[t[6]||(t[6]=u("div",{class:"demo-head"},[u("div",{class:"demo-ctrl"},[u("i"),u("i"),u("i")])],-1)),u("div",v,[u("button",{type:"button",class:"add-btn-120",onClick:e.toggle2},n(e.show2?"重置内容":"添加内容"),1),u("div",{class:d(["body-scroll-120 stable",{show:e.show2}])},t[5]||(t[5]=[i("<p>關關雎鳩，在河之洲。<br>窈窕淑女，君子好逑。</p><p>參差荇菜，左右流之。<br>窈窕淑女，寤寐求之。</p><p>求之不得，寤寐思服。<br>悠哉悠哉，輾轉反側。</p><p>參差荇菜，左右采之。<br>窈窕淑女，琴瑟友之。</p><p>參差荇菜，左右芼之。<br>窈窕淑女，鍾鼓樂之。</p>",5)]),2)])]),t[9]||(t[9]=u("p",null,[u("code",null,"scrollbar-gutter: stable"),s(" 将会预先为 滚动条保留空间。 因此，在计算 内填充 "),u("code",null,"padding"),s(" 时，应考虑滚动条的宽度，从而适配 UI 效果。")],-1))])}const w=E(h,[["render",y],["__file","index.html.vue"]]),S=JSON.parse(`{"path":"/defensive-css/scroll-gutter/","title":"Scroll Gutter","lang":"zh-CN","frontmatter":{"title":"Scroll Gutter","author":"鹏展博","createTime":"2023/08/08 21:58:55","permalink":"/defensive-css/scroll-gutter/","description":"Scroll Gutter 与滚动相关的另一件事是滚动条装订线。 以前面的 为例，当内容变长时，添加滚动条将导致布局偏移。 发生布局偏移的原因是为滚动条保留空间。 {{ show ? '重置内容' : '添加内容' }} 關關雎鳩，在河之洲。窈窕淑女，君子好逑。 參差荇菜，左右流之。窈窕淑女，寤寐求之。 求之不得，寤寐思服。悠哉悠哉，輾轉反側。 參差荇...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/defensive-css/scroll-gutter/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"Scroll Gutter"}],["meta",{"property":"og:description","content":"Scroll Gutter 与滚动相关的另一件事是滚动条装订线。 以前面的 为例，当内容变长时，添加滚动条将导致布局偏移。 发生布局偏移的原因是为滚动条保留空间。 {{ show ? '重置内容' : '添加内容' }} 關關雎鳩，在河之洲。窈窕淑女，君子好逑。 參差荇菜，左右流之。窈窕淑女，寤寐求之。 求之不得，寤寐思服。悠哉悠哉，輾轉反側。 參差荇..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"鹏展博"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Scroll Gutter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[{"level":2,"title":"Scroll Gutter","slug":"scroll-gutter","link":"#scroll-gutter","children":[]}],"readingTime":{"minutes":1.92,"words":576},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/防御性CSS/scroll-gutter.md"}`);export{w as comp,S as data};
