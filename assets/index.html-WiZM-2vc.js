import{_ as t,c as o,d as a,o as c}from"./app-Dg_oyx95.js";const n={};function i(r,e){return c(),o("div",null,e[0]||(e[0]=[a('<div class="hint-container tip"><p class="hint-container-title">提问</p><ol><li>javascript有哪些数据类型？</li><li>什么是基本数据类型？</li><li>什么是引用数据类型？</li><li>如何做数据类型判断？</li></ol></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2><p>javascript 有两种数据类型，分别是 基本数据类型 和 引用数据类型。</p><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span>基本数据类型</span></a></h2><p>javascript一共有7中基本数据类型，包括： <code>undefined</code>, <code>null</code>, <code>Boolean</code>, <code>Number</code>, <code>String</code>, <code>BigInt</code>, <code>Symbol</code>。</p><p>特性：</p><ul><li>存放在栈区</li><li>进行值比较时，<code>==</code> 只进行值的比较，会进行数据类型转换， <code>===</code> 不仅进行值的比较，还要进行数据类型的比较。</li></ul><h2 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型"><span>引用数据类型</span></a></h2><p>引用数据类型指 Object 类型， 所有其他的如 Array、Date、Function等类型都可以理解为Object类型的子类。</p><p>特性：</p><ul><li>同时保存在栈内存和堆内存中。解释器寻找引用值是，会首先检索它在栈中的地址，取得地址后从堆中获得实体。</li><li>比较时是引用的比较</li></ul><h2 id="数据类型判断" tabindex="-1"><a class="header-anchor" href="#数据类型判断"><span>数据类型判断</span></a></h2><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof"><span>typeof</span></a></h3><p><code>typeof</code> 返回一个表示数据类型的字符串，可以用来判断 <code>number</code>, <code>boolean</code>, <code>string</code>,<code>symbol</code>,<code>object</code>, <code>undefined</code>, <code>function</code> 等7种数据类型，但不能判断 <code>null</code>，<code>Object</code>的子类等。</p><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof"><span>instanceof</span></a></h3><p><code>instanceof</code> 用来判断 A是否为B的实例。 一般用于判断引用类型。但在 类的原型继承中，结果不一定准确。</p><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor"><span>constructor</span></a></h3><p><code>constructor</code> 和 <code>instanceof</code> 类似， 但还可以处理除了 null、undefined 之外的基本数据类型的检测。</p><p><code>constructor</code>不是稳定的，如果把类的原型重写，可能会把之前的<code>constructor</code>给覆盖了。</p><h3 id="object-prototype-tostring-call-someobj" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring-call-someobj"><span>Object.prototype.toString.call(someObj)</span></a></h3><p>最准确也是最常用的数据类型检测方式。 该方法会将数据类型的检测结果以<code>[object &lt;type&gt;]</code> 的形式返回。</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><p>除了上述的方式，一些数据类型也提供了方法进行数据类型判断，如：</p><ul><li>Array.isArray()</li><li>Number.isNaN()</li></ul>',24)]))}const d=t(n,[["render",i],["__file","index.html.vue"]]),s=JSON.parse(`{"path":"/interview-question/lzbk7vkc/","title":"数据类型","lang":"zh-CN","frontmatter":{"title":"数据类型","createTime":"2022/04/14 09:43:14","author":"pengzhanbo","permalink":"/interview-question/lzbk7vkc/","description":"提问 javascript有哪些数据类型？ 什么是基本数据类型？ 什么是引用数据类型？ 如何做数据类型判断？ 数据类型 javascript 有两种数据类型，分别是 基本数据类型 和 引用数据类型。 基本数据类型 javascript一共有7中基本数据类型，包括： undefined, null, Boolean, Number, String, Bi...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/interview-question/lzbk7vkc/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"数据类型"}],["meta",{"property":"og:description","content":"提问 javascript有哪些数据类型？ 什么是基本数据类型？ 什么是引用数据类型？ 如何做数据类型判断？ 数据类型 javascript 有两种数据类型，分别是 基本数据类型 和 引用数据类型。 基本数据类型 javascript一共有7中基本数据类型，包括： undefined, null, Boolean, Number, String, Bi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":2,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":2,"title":"引用数据类型","slug":"引用数据类型","link":"#引用数据类型","children":[]},{"level":2,"title":"数据类型判断","slug":"数据类型判断","link":"#数据类型判断","children":[{"level":3,"title":"typeof","slug":"typeof","link":"#typeof","children":[]},{"level":3,"title":"instanceof","slug":"instanceof","link":"#instanceof","children":[]},{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]},{"level":3,"title":"Object.prototype.toString.call(someObj)","slug":"object-prototype-tostring-call-someobj","link":"#object-prototype-tostring-call-someobj","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"readingTime":{"minutes":1.59,"words":478},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/面试题/JavaScript/数据类型.md"}`);export{d as comp,s as data};
