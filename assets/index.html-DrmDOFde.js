import{_ as t,c as a,d as s,o as n}from"./app-Dg_oyx95.js";const o={};function i(l,e){return n(),a("div",null,e[0]||(e[0]=[s(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>当我们着手进行项目开发时，为了方便项目管理，需要为项目定义一个版本。 可是，项目的版本号，应该怎么写呢？ 是 <code>1.0</code>，还是 <code>0.1</code> 还是 <code>1.0.0</code> 还是 <code>0.0.1</code> 呢？</p><p>如果是使用了 <code>1.0.0</code> 作为起始，那么下一次版本，应该是 <code>1.0.1</code> 还是 <code>1.1.0</code> 呢？</p><p>我们经常在一些开源的项目中，看到一些项目的版本号，还携带了后缀， 比如 <code>vue</code> 的 <code>3.0.0-beta.0</code>， 或者 <code>react</code> 的 <code>18.0.0-rc.0</code>。这些后缀有代表了什么含义呢？</p><h2 id="semver-规范" tabindex="-1"><a class="header-anchor" href="#semver-规范"><span>Semver 规范</span></a></h2><p>使用一种好的版本号管理方案，可以帮助我们快速的了解版本的变化范围。</p><p>这并不是一个创新性的想法，实际上，你可能已经在做近似的事情了。问题在于只是“近似”还不够。 如果没有某个正式的规范可循，版本号对于依赖的管理并无实质意义。 将上述的想法命名并给予清楚的定义，让你对软件使用者传达意向变得容易。 一旦这些意向变得清楚，弹性（但又不会太弹性）的依赖规范就能达成。</p><p>在 开源社区中，由 Gravatars 创办者兼 GitHub 共同创办者 <a href="http://tom.preston-werner.com/" target="_blank" rel="noopener noreferrer">Tom Preston-Werner</a> 建立了 语义化版本控制的规范, <code>semantic version</code> 简称 <code>semver</code>，即 这个规范称为 <code>semver 规范</code>。</p><p>你可以在 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">https://semver.org/lang/zh-CN/</a> 了解 <code>semver</code> 规范的详细信息。</p><h3 id="版本号格式" tabindex="-1"><a class="header-anchor" href="#版本号格式"><span>版本号格式</span></a></h3><p>版本格式：<strong>主版本号.次版本号.修订号</strong> ，我们以 <code>X.Y.Z</code> 作为 格式别名。</p><p>其中 X、Y 和 Z 为非负的整数，且禁止在数字前方补零，X 是主版本号、Y 是次版本号、而 Z 为修订号， 每个元素必须（MUST）以数值来递增。如 <code>1.9.1 -&gt; 1.10.0 -&gt; 1.11.0</code>。</p><h3 id="版本控制规范" tabindex="-1"><a class="header-anchor" href="#版本控制规范"><span>版本控制规范</span></a></h3><ol><li><p>标记版本号的软件发行后，<strong>禁止</strong> 改变该版本软件的内容。任何修改都 <strong>必须</strong> 以新版本发行。</p></li><li><p>主版本号为零（0.y.z）的软件处于开发初始阶段，一切都可能随时被改变。这样的公共 API 不应该被视为稳定版。</p></li><li><p>1.0.0 的版本号用于界定公共 API 的形成。这一版本之后所有的版本号更新都基于公共 API 及其修改内容。</p></li><li><p>修订号 Z（x.y.Z | x &gt; 0）<strong>必须</strong> 在只做了向下兼容的修正时才递增。这里的修正指的是针对不正确结果而进行的内部修改。</p></li><li><p>次版本号 Y（x.Y.z | x &gt; 0）<strong>必须</strong> 在有向下兼容的新功能出现时递增。 在任何公共 API 的功能被标记为弃用时也 <strong>必须递增</strong>。 也 <strong>可以</strong> 在内部程序有大量新功能或改进被加入时递增，其中 <strong>可以</strong> 包括修订级别的改变。 每当次版本号递增时，修订号 <strong>必须</strong> 归零。</p></li><li><p>主版本号 X（X.y.z | X &gt; 0）<strong>必须</strong>在有任何不兼容的修改被加入公共 API 时递增。 其中 <strong>可以</strong> 包括次版本号及修订级别的改变。每当主版本号递增时，次版本号和修订号 <strong>必须</strong> 归零。</p></li><li><p>先行版本号 <strong>可以</strong> 被标注在修订版之后，先加上一个连接号再加上一连串以句点分隔的标识符来修饰。 标识符 <strong>必须</strong> 由 ASCII 字母数字和连接号 <code>[0-9A-Za-z-]</code> 组成，且 <strong>禁止</strong>留白。 数字型的标识符 <strong>禁止</strong> 在前方补零。先行版的优先级低于相关联的标准版本。 被标上先行版本号则表示这个版本并非稳定而且可能无法满足预期的兼容性需求。 范例：1.0.0-alpha、1.0.0-alpha.1、1.0.0-0.3.7、1.0.0-x.7.z.92。</p></li><li><p>版本编译信息 <strong>可以</strong> 被标注在修订版或先行版本号之后，先加上一个加号再加上一连串以句点分隔的标识符来修饰。 标识符 <strong>必须</strong> 由 ASCII 字母数字和连接号 <code>[0-9A-Za-z-]</code> 组成，且 <strong>禁止</strong> 留白。 当判断版本的优先层级时，版本编译信息 <strong>可</strong> 被忽略。 因此当两个版本只有在版本编译信息有差别时，属于相同的优先层级。</p><p>范例：1.0.0-alpha+001、1.0.0+20130313144700、1.0.0-beta+exp.sha.5114f85。</p></li><li><p>版本的优先层级指的是不同版本在排序时如何比较。</p><ol><li><p>判断优先层级时，<strong>必须</strong> 把版本依序拆分为主版本号、次版本号、修订号及先行版本号后进行比较 （版本编译信息不在这份比较的列表中）。</p></li><li><p>由左到右依序比较每个标识符，第一个差异值用来决定优先层级：主版本号、次版本号及修订号以数值比较。</p><p>例如：1.0.0 &lt; 2.0.0 &lt; 2.1.0 &lt; 2.1.1。</p></li><li><p>当主版本号、次版本号及修订号都相同时，改以优先层级比较低的先行版本号决定。</p><p>例如：1.0.0-alpha &lt; 1.0.0。</p></li><li><p>有相同主版本号、次版本号及修订号的两个先行版本号，其优先层级 <strong>必须</strong> 透过由左到右的每个被句点 分隔的标识符来比较，直到找到一个差异值后决定：</p><ol><li><p>只有数字的标识符以数值高低比较。</p></li><li><p>有字母或连接号时则逐字以 ASCII 的排序来比较。</p></li><li><p>数字的标识符比非数字的标识符优先层级低。</p></li><li><p>若开头的标识符都相同时，栏位比较多的先行版本号优先层级比较高。</p></li></ol><p>例如：1.0.0-alpha &lt; 1.0.0-alpha.1 &lt; 1.0.0-alpha.beta &lt; 1.0.0-beta &lt; 1.0.0-beta.2 &lt; 1.0.0-beta.11 &lt; 1.0.0-rc.1 &lt; 1.0.0。</p></li></ol></li></ol><h4 id="总结递增规则如下" tabindex="-1"><a class="header-anchor" href="#总结递增规则如下"><span>总结递增规则如下</span></a></h4><ul><li>主版本号：当你做了不兼容的 API 修改，</li><li>次版本号：当你做了向下兼容的功能性新增，</li><li>修订号：当你做了向下兼容的问题修正。</li></ul><p>先行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸。</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><h3 id="在-0-y-z-初始开发阶段-我该如何进行版本控制" tabindex="-1"><a class="header-anchor" href="#在-0-y-z-初始开发阶段-我该如何进行版本控制"><span>在 0.y.z 初始开发阶段，我该如何进行版本控制？</span></a></h3><p>最简单的做法是以 0.1.0 作为你的初始化开发版本，并在后续的每次发行时递增次版本号。</p><h3 id="如何判断发布-1-0-0-版本的时机" tabindex="-1"><a class="header-anchor" href="#如何判断发布-1-0-0-版本的时机"><span>如何判断发布 1.0.0 版本的时机？</span></a></h3><p>当你的软件被用于正式环境，它应该已经达到了 1.0.0 版。如果你已经有个稳定的 API 被使用者依赖，也会是 1.0.0 版。 如果你很担心向下兼容的问题，也应该算是 1.0.0 版了。</p><h3 id="语义化版本对于版本的字符串长度是否有限制呢" tabindex="-1"><a class="header-anchor" href="#语义化版本对于版本的字符串长度是否有限制呢"><span>语义化版本对于版本的字符串长度是否有限制呢？</span></a></h3><p>没有，请自行做适当的判断。举例来说，长到 255 个字符的版本已过度夸张。 再者，特定的系统对于字符串长度可能会有他们自己的限制。</p><h3 id="v1-2-3-是一个语义化版本号吗" tabindex="-1"><a class="header-anchor" href="#v1-2-3-是一个语义化版本号吗"><span>“v1.2.3” 是一个语义化版本号吗？</span></a></h3><p>“v1.2.3” 并不是一个语义化的版本号。但是，在语义化版本号之前增加前缀 “v” 是用来表示版本号的常用做法。 在版本控制系统中，将 “version” 缩写为 “v” 是很常见的。 比如：git tag v1.2.3 -m &quot;Release version 1.2.3&quot; 中，“v1.2.3” 表示标签名称，而 “1.2.3” 是语义化版本号。</p><h2 id="alpha、beta、rc" tabindex="-1"><a class="header-anchor" href="#alpha、beta、rc"><span>alpha、beta、rc</span></a></h2><p>在规范中， 先行版本中 <code>-</code> 后的字符是自定义的，我们经常可以看到一些开源库使用的标识符如 <code>alpha</code>、<code>beta</code>、<code>rc</code>。</p><p>一般来说，这些 标识符表示以下含义：</p><ul><li><code>alpha</code>: 表示 内部测试版本。主要是提供给内部的开发和测试使用，不建议用户下载。</li><li><code>beta</code>: 表示 公开测试版本。用户可以提前尝试使用一些功能。</li><li><code>rc</code>: 表示预览版本。表示该版本不再增加新的功能，可能还存在一些 bug，修复完成后就到 正式版本了。</li></ul><h2 id="npm-指定版本范围" tabindex="-1"><a class="header-anchor" href="#npm-指定版本范围"><span>npm 指定版本范围</span></a></h2><p>我们可以在 <code>package.json</code> 中看到版本号之前出现如 <code>^</code> 或 <code>~</code> 等符号，如：</p><div class="language-json" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">vuepress</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">^1.9.7</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">vue</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~2.7.11</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>这些符号表示以后该库 安装版本的 允许范围。</p><p>通常常见的字符包括： <code>^</code>、 <code>~</code> 、 <code>&gt;</code>、<code>&lt;</code>、<code>&lt;=</code>、<code>&gt;=</code> 等。</p><p><code>^</code> 表示 次版本号的更新，比如 <code>^1.2.3</code> 就表示以后安装的版本 <code>&gt;=1.2.3 &lt;2.0.0</code>。 但是如果 主版本号为 <code>0</code>，比如 <code>^0.2.3</code> 相当于 <code>&gt;=0.2.3 &lt;0.3.0</code>； <code>^0.0.3</code> 相当于 <code>&gt;=0.0.3 &lt;0.0.4</code>。</p><p><code>~</code> 表示 修订号的更新，比如 <code>~1.2.3</code> 就表示以后安装的版本 <code>&gt;=1.2.3 &lt;1.3.0</code>。</p><p>完整版本范围说明，查看 <a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies" target="_blank" rel="noopener noreferrer">npm 文档</a></p>`,38)]))}const p=t(o,[["render",i],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/article/npm-semantic-versions/","title":"npm 语义化版本管理","lang":"zh-CN","frontmatter":{"title":"npm 语义化版本管理","author":"鹏展博","tags":["node"],"createTime":"2023/05/13 22:36:26","permalink":"/article/npm-semantic-versions/","description":"前言 当我们着手进行项目开发时，为了方便项目管理，需要为项目定义一个版本。 可是，项目的版本号，应该怎么写呢？ 是 1.0，还是 0.1 还是 1.0.0 还是 0.0.1 呢？ 如果是使用了 1.0.0 作为起始，那么下一次版本，应该是 1.0.1 还是 1.1.0 呢？ 我们经常在一些开源的项目中，看到一些项目的版本号，还携带了后缀， 比如 vue...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/article/npm-semantic-versions/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"npm 语义化版本管理"}],["meta",{"property":"og:description","content":"前言 当我们着手进行项目开发时，为了方便项目管理，需要为项目定义一个版本。 可是，项目的版本号，应该怎么写呢？ 是 1.0，还是 0.1 还是 1.0.0 还是 0.0.1 呢？ 如果是使用了 1.0.0 作为起始，那么下一次版本，应该是 1.0.1 还是 1.1.0 呢？ 我们经常在一些开源的项目中，看到一些项目的版本号，还携带了后缀， 比如 vue..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"鹏展博"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm 语义化版本管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"Semver 规范","slug":"semver-规范","link":"#semver-规范","children":[{"level":3,"title":"版本号格式","slug":"版本号格式","link":"#版本号格式","children":[]},{"level":3,"title":"版本控制规范","slug":"版本控制规范","link":"#版本控制规范","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"在 0.y.z 初始开发阶段，我该如何进行版本控制？","slug":"在-0-y-z-初始开发阶段-我该如何进行版本控制","link":"#在-0-y-z-初始开发阶段-我该如何进行版本控制","children":[]},{"level":3,"title":"如何判断发布 1.0.0 版本的时机？","slug":"如何判断发布-1-0-0-版本的时机","link":"#如何判断发布-1-0-0-版本的时机","children":[]},{"level":3,"title":"语义化版本对于版本的字符串长度是否有限制呢？","slug":"语义化版本对于版本的字符串长度是否有限制呢","link":"#语义化版本对于版本的字符串长度是否有限制呢","children":[]},{"level":3,"title":"“v1.2.3” 是一个语义化版本号吗？","slug":"v1-2-3-是一个语义化版本号吗","link":"#v1-2-3-是一个语义化版本号吗","children":[]}]},{"level":2,"title":"alpha、beta、rc","slug":"alpha、beta、rc","link":"#alpha、beta、rc","children":[]},{"level":2,"title":"npm 指定版本范围","slug":"npm-指定版本范围","link":"#npm-指定版本范围","children":[]}],"readingTime":{"minutes":7.17,"words":2152},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"1.前端/5.Node/npm 语义化版本管理.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"8ce9db","sort":5,"name":"Node"}]}`);export{p as comp,c as data};
