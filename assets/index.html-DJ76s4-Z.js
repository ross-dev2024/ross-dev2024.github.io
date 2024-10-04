import{_ as t,c as s,d as i,o as a}from"./app-Dg_oyx95.js";const n={};function o(r,e){return a(),s("div",null,e[0]||(e[0]=[i(`<h2 id="所有权原则" tabindex="-1"><a class="header-anchor" href="#所有权原则"><span>所有权原则</span></a></h2><ul><li>Rust中每一个值都被一个变量所拥有，该变量被称为值的所有者</li><li>一个值只能同时被一个变量所拥有，或者说一个值只能有一个拥有者</li><li>当所有者（变量）离开作用域时，这个值将被抛弃（drop）</li></ul><h2 id="所有权转移" tabindex="-1"><a class="header-anchor" href="#所有权转移"><span>所有权转移</span></a></h2><div class="language-rust" data-ext="rust" data-title="rust"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> String</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">::</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">from</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hello</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre></div><p><strong>当 <code>s1</code> 赋予 <code>s2</code> 后，Rust 认为 <code>s1</code> 不再有效，因此也无需在 <code>s1</code> 离开作用域后 <code>drop</code> 任何东西，这就是把所有权从 <code>s1</code> 转移给了 <code>s2</code>，<code>s1</code> 在被赋予 <code>s2</code> 后就马上失效了</strong>。</p>`,5)]))}const d=t(n,[["render",o],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/learn-rust/ownership/","title":"所有权","lang":"zh-CN","frontmatter":{"title":"所有权","author":"鹏展博","createTime":"2022/06/03 05:45:05","permalink":"/learn-rust/ownership/","description":"所有权原则 Rust中每一个值都被一个变量所拥有，该变量被称为值的所有者 一个值只能同时被一个变量所拥有，或者说一个值只能有一个拥有者 当所有者（变量）离开作用域时，这个值将被抛弃（drop） 所有权转移 当 s1 赋予 s2 后，Rust 认为 s1 不再有效，因此也无需在 s1 离开作用域后 drop 任何东西，这就是把所有权从 s1 转移给了 s...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/learn-rust/ownership/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"所有权"}],["meta",{"property":"og:description","content":"所有权原则 Rust中每一个值都被一个变量所拥有，该变量被称为值的所有者 一个值只能同时被一个变量所拥有，或者说一个值只能有一个拥有者 当所有者（变量）离开作用域时，这个值将被抛弃（drop） 所有权转移 当 s1 赋予 s2 后，Rust 认为 s1 不再有效，因此也无需在 s1 离开作用域后 drop 任何东西，这就是把所有权从 s1 转移给了 s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"鹏展博"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"所有权\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[{"level":2,"title":"所有权原则","slug":"所有权原则","link":"#所有权原则","children":[]},{"level":2,"title":"所有权转移","slug":"所有权转移","link":"#所有权转移","children":[]}],"readingTime":{"minutes":0.56,"words":169},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/rust学习简记/基础入门/所有权.md"}`);export{d as comp,p as data};
