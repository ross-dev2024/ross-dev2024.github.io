import{_ as t,c as a,d as i,o as c}from"./app-Dg_oyx95.js";const r={};function n(s,e){return c(),a("div",null,e[0]||(e[0]=[i('<div class="hint-container tip"><p class="hint-container-title">提问</p><ol><li>什么是文档预解析？</li><li>CSS如何阻塞文档解析</li><li>渲染过程遇到 JS文件怎么处理？</li><li><code>&lt;script&gt;</code> 的 <code>async</code> 和 <code>defer</code> 属性有什么作用？区别是什么？</li></ol></div><h2 id="文档预解析" tabindex="-1"><a class="header-anchor" href="#文档预解析"><span>文档预解析</span></a></h2><p>当执行 Javascript 脚本时，另一个线程会解析剩下的文档，并加载后面需要通过网络加载的资源。 这种方式可以使资源并行加载从而使整体速度更快。</p><p>预解析并不改变DOM树，它将这个工作留给主解析过程，自己只解析外部资源的引用，比如外部脚本、样式表和图片。</p><p>Webkit和Firefox 都做了这个优化。</p><h2 id="css如何阻塞文档解析" tabindex="-1"><a class="header-anchor" href="#css如何阻塞文档解析"><span>CSS如何阻塞文档解析</span></a></h2><p>虽然样式表不改变DOM树，看起来没有必要停下文档的解析等待它们。 但是这里存在一个问题，Javascript 脚本执行时可能在文档的解析过程中请求样式信息， 如果样式还没有加载和解析，脚本将得到错误的值，显然会导致很多问题。</p><p>所以如果浏览器尚未完成 CSSOM 的下载和构建，但却在此时运行脚本，那么浏览器将延迟Javascript脚本执行和文档的解析, 直至其完成 CSSOM 的下载和构建。</p><p>在这种情况下，浏览器会先下载和构建 CSSOM，然后再执行，最后再继续文档的解析。</p><h2 id="渲染过程遇到-js文件" tabindex="-1"><a class="header-anchor" href="#渲染过程遇到-js文件"><span>渲染过程遇到 JS文件</span></a></h2><p>Javascript 的加载、解析和执行会阻塞文档的解析。 在构建 DOM时，HTML解析器若遇到了 Javascript，那么会暂时停止文档的解析，将控制权移交给 Javascript引擎， 等 Javascript引擎运行完毕，浏览器在从中断的地方恢复继续解析文档。</p><p>所以为了首屏渲染的速度更快，不应该在首屏就加载JS文档，这也是建议将 script 标签放在 body标签底部的原因。 但在现在，因为 script 标签有了 async 和 defer属性，也不一定需要放在body标签底部了。</p><h2 id="script-的-async-和-defer-属性" tabindex="-1"><a class="header-anchor" href="#script-的-async-和-defer-属性"><span><code>&lt;script&gt;</code> 的 <code>async</code> 和 <code>defer</code> 属性</span></a></h2><ul><li><p><code>async</code> 属性 表示 异步执行引入的 javascript 脚本。</p><p>当前 javascript 加载时不会阻塞HTML文档的解析，加载完成后立即执行脚本。 即加载过程不阻塞HTML文档解析，但是加载完成开始执行仍然会阻塞HTML文档解析。 多个脚本的执行顺序无法保证。</p></li><li><p><code>defer</code> 属性 表示 延迟执行引入的 javascript 脚本。</p><p>当前 javascript 加载时不会阻塞HTML文档的解析，这两个过程是并行的。 当整个HTML解析完毕后在执行脚本文件。 并在 DOMContentLoaded事件触发之前完成执行脚本文件，多个脚本按顺序执行。</p></li></ul>',14)]))}const p=t(r,[["render",n],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/interview-question/5z5tyxb9/","title":"浏览器解析过程","lang":"zh-CN","frontmatter":{"title":"浏览器解析过程","createTime":"2022/04/14 04:22:21","author":"pengzhanbo","permalink":"/interview-question/5z5tyxb9/","description":"提问 什么是文档预解析？ CSS如何阻塞文档解析 渲染过程遇到 JS文件怎么处理？ <script> 的 async 和 defer 属性有什么作用？区别是什么？ 文档预解析 当执行 Javascript 脚本时，另一个线程会解析剩下的文档，并加载后面需要通过网络加载的资源。 这种方式可以使资源并行加载从而使整体速度更快。 预解析并不改变DOM树，它将...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/interview-question/5z5tyxb9/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"浏览器解析过程"}],["meta",{"property":"og:description","content":"提问 什么是文档预解析？ CSS如何阻塞文档解析 渲染过程遇到 JS文件怎么处理？ <script> 的 async 和 defer 属性有什么作用？区别是什么？ 文档预解析 当执行 Javascript 脚本时，另一个线程会解析剩下的文档，并加载后面需要通过网络加载的资源。 这种方式可以使资源并行加载从而使整体速度更快。 预解析并不改变DOM树，它将..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"浏览器解析过程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"文档预解析","slug":"文档预解析","link":"#文档预解析","children":[]},{"level":2,"title":"CSS如何阻塞文档解析","slug":"css如何阻塞文档解析","link":"#css如何阻塞文档解析","children":[]},{"level":2,"title":"渲染过程遇到 JS文件","slug":"渲染过程遇到-js文件","link":"#渲染过程遇到-js文件","children":[]},{"level":2,"title":"<script> 的 async 和 defer 属性","slug":"script-的-async-和-defer-属性","link":"#script-的-async-和-defer-属性","children":[]}],"readingTime":{"minutes":2.4,"words":720},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/面试题/浏览器/浏览器解析过程.md"}`);export{p as comp,d as data};
