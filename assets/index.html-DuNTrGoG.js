import{_ as t,c as i,d as l,o as a}from"./app-Dg_oyx95.js";const o={};function n(r,e){return a(),i("div",null,e[0]||(e[0]=[l('<div class="hint-container tip"><p class="hint-container-title">提问</p><ul><li>什么是 BFC ?</li><li>如何创建BFC ?</li><li>BFC有什么作用 ？</li></ul></div><h2 id="什么是-bfc" tabindex="-1"><a class="header-anchor" href="#什么是-bfc"><span>什么是 BFC</span></a></h2><p>BFC, Block Formatting Context。是 W3C CSS2.1规范中的一个概念。 是页面中的一块块级渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和作用。</p><p>具有BFC特性的元素，可以看做是一个被隔离了的独立容器，容器内的元素不会在布局上影响到外面的元素，并且BFC具有普通容器所没有的一些特性。</p><h2 id="创建bfc的方式" tabindex="-1"><a class="header-anchor" href="#创建bfc的方式"><span>创建BFC的方式</span></a></h2><ol><li>根元素（html）</li><li>浮动元素，即 float值不为 none。</li><li>绝对定位元素， 元素的 position 为 absolute 或者 fixed</li><li>行内块元素， 元素的 display 为 inline-block</li><li>表格单元格， 元素的 display 为 table-cell。 （HTML表格单元格默认为该值）</li><li>表格标题， 元素的display为table-caption。 （HTML表格标题默认为该值）</li><li>匿名表格单元格元素， 元素的display为 table、table-row、table-row-group、 table-header-group、table-footer-group 。 （分别是 HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table。</li><li>overflow计算值不为visible的块元素</li><li>display值为 flow-root的元素</li><li>contain值为 layout、content、paint的元素</li><li>弹性元素，display为 flex、inline-flex元素的直接子元素</li><li>网格元素， display为gird、inline-gird元素的直接子元素</li><li>多列容器，元素的column-count或column-width不为 auto， 包括column-count不为1</li><li>colum-span为all的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中。</li></ol><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2><ol><li>同一个BFC的外边距会发生折叠（合并）， 通过将其放在不同的BFC中规避折叠。</li><li>BFC可以包含浮动元素，即清除浮动。</li><li>BFC可以阻止元素被浮动元素覆盖。</li></ol>',8)]))}const s=t(o,[["render",n],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/interview-question/p1gn97x5/","title":"BFC块级格式化上下文","lang":"zh-CN","frontmatter":{"title":"BFC块级格式化上下文","createTime":"2022/04/13 02:33:55","author":"pengzhanbo","permalink":"/interview-question/p1gn97x5/","description":"提问 什么是 BFC ? 如何创建BFC ? BFC有什么作用 ？ 什么是 BFC BFC, Block Formatting Context。是 W3C CSS2.1规范中的一个概念。 是页面中的一块块级渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和作用。 具有BFC特性的元素，可以看做是一个被隔离了的独立容器，容器...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/interview-question/p1gn97x5/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"BFC块级格式化上下文"}],["meta",{"property":"og:description","content":"提问 什么是 BFC ? 如何创建BFC ? BFC有什么作用 ？ 什么是 BFC BFC, Block Formatting Context。是 W3C CSS2.1规范中的一个概念。 是页面中的一块块级渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和作用。 具有BFC特性的元素，可以看做是一个被隔离了的独立容器，容器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BFC块级格式化上下文\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"什么是 BFC","slug":"什么是-bfc","link":"#什么是-bfc","children":[]},{"level":2,"title":"创建BFC的方式","slug":"创建bfc的方式","link":"#创建bfc的方式","children":[]},{"level":2,"title":"作用","slug":"作用","link":"#作用","children":[]}],"readingTime":{"minutes":1.65,"words":495},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/面试题/CSS/BFC块级格式化上下文.md"}`);export{s as comp,p as data};
