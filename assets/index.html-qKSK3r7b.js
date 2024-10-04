import{_ as i,c as t,d as s,o}from"./app-Dg_oyx95.js";const a={};function n(d,e){return o(),t("div",null,e[0]||(e[0]=[s(`<div class="hint-container tip"><p class="hint-container-title">提问</p><ul><li>请简述 CSS 盒模型。</li><li>盒模型有哪些类型？有什么区别？</li></ul></div><p>盒模型是CSS规范定义的模块，它规定了一个矩形盒子（标准盒模型），描述任意元素在文档树中占据的空间区域。每个盒子有四个边：</p><ul><li><code>外边距边（margin edge or outer edge）</code></li><li><code>边框边（border edge）</code></li><li><code>内填充边（padding edge）</code></li><li><code>内容边（content edge or inner edge）</code></li></ul><p>可以划分四个区域：</p><ul><li><code>外边距区域（margin area）</code></li><li><code>边框区域（border area）</code></li><li><code>内填充区域（padding area）</code></li><li><code>内容区域（content area）</code></li></ul><p><img src="https://drafts.csswg.org/css-box-3/images/box.png" alt="css box model"></p><p>为什么会有盒模型类型，严格来说，多数浏览器都按照规范实现了标准盒模型，而盒模型的类型主要是来自于不同浏览器对元素宽高的方式不同而导致，IE浏览器认为元素的<code>width/height</code>应该是由元素的<code>内容+内填充+边框</code>组成，而W3C规定的元素的<code>width/height</code>应该是元素的<code>内容</code>，从而衍生了不同的盒子模型。到<code>CSS3</code>，添加了<code>box-sizing</code>属性，用于更改用于计算元素宽高的默认盒子模型，并将IE浏览器和W3C规范纳入了实现中。可以使用此属性来模拟不正确支持CSS盒子模型规范的浏览器的行为。</p><p><em>注：<code>width/height</code>最终并不能完全决定元素的实际占用宽高。</em></p><div class="language-css" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/* 关键字值 */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">box-sizing</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">border-box</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">; </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/* 默认值 */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">box-sizing</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">content-box</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/* 全局值 */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">box-sizing</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: inherit;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">box-sizing</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: initial;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">box-sizing</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: unset;</span></span></code></pre></div><p><code>border-box</code>规定了元素的<code>width</code>由<code>内容+内填充+边框</code>组成，即IE浏览器的实现。 元素的实际占据宽度由 width属性+外边距。内容宽度为<code>width - padding - border</code>。</p><p><code>content-box</code>规定了元素的<code>width</code>即<code>内容宽度</code>, W3C规范的标准。元素的实际占据宽度由<code>widht + padding + border + margin</code>。内容宽度为<code>width</code>。</p><p><code>box-sizing</code>还有一个待废除的值<code>padding-box</code>，<code>width</code> 和 <code>height</code> 属性包括内容和内边距，但是不包括边框和外边距。只有Firefox实现了这个值，它在Firefox 50中被删除。</p><p>在高度计算上以上规则同样适用，但对非替换行内元素，尽管内容周围存在内边距与边框，但其占用空间受到<code>line-height</code>属性影响。</p>`,13)]))}const r=i(a,[["render",n],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/interview-question/sfnusib9/","title":"盒模型","lang":"zh-CN","frontmatter":{"title":"盒模型","createTime":"2022/04/12 11:27:38","author":"pengzhanbo","permalink":"/interview-question/sfnusib9/","description":"提问 请简述 CSS 盒模型。 盒模型有哪些类型？有什么区别？ 盒模型是CSS规范定义的模块，它规定了一个矩形盒子（标准盒模型），描述任意元素在文档树中占据的空间区域。每个盒子有四个边： 外边距边（margin edge or outer edge） 边框边（border edge） 内填充边（padding edge） 内容边（content edg...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/interview-question/sfnusib9/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"盒模型"}],["meta",{"property":"og:description","content":"提问 请简述 CSS 盒模型。 盒模型有哪些类型？有什么区别？ 盒模型是CSS规范定义的模块，它规定了一个矩形盒子（标准盒模型），描述任意元素在文档树中占据的空间区域。每个盒子有四个边： 外边距边（margin edge or outer edge） 边框边（border edge） 内填充边（padding edge） 内容边（content edg..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://drafts.csswg.org/css-box-3/images/box.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"盒模型\\",\\"image\\":[\\"https://drafts.csswg.org/css-box-3/images/box.png\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.01,"words":602},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/面试题/CSS/盒模型.md"}`);export{r as comp,p as data};
