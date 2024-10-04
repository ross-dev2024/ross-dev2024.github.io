import{_ as s,c as i,d as a,o as e}from"./app-Dg_oyx95.js";const l={};function h(n,t){return e(),i("div",null,t[0]||(t[0]=[a(`<p>Web世界中，随着历史的发展，技术的迭代，发展出了许多不同的文档，只有了解文档的类型，浏览器才能正确的解析渲染文档。</p><p>HTML也有多个不同的版本，只有完全明白页面使用的是哪个确切的HTML版本，浏览器才能完全正确的显示出HTML页面。</p><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p><code>&lt;!DOCTYPE&gt;</code> 标签是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。</p><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2><p>声明文档的解析类型 （document.compatMode），避免浏览器的怪异模式。</p><p><strong>document.compatMode:</strong></p><ul><li><code>BackCompat</code>: 怪异模式，浏览器使用自己的怪异模式解析渲染页面。</li><li><code>CSS1Compat</code>: 标准模式，浏览器使用W3C的标准解析渲染页面。</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>在文档的首行进行声明。必须位于 html标签之前。</p><p><code>&lt;!DOCTYPE&gt;</code> 声明不是HTML标签，它是指示浏览器关于页面使用哪个HTML版本的指令。</p><blockquote><p>如果页面没有 DOCTYPE 声明，那么默认是 怪异模式，为了确保浏览器按预期渲染页面，必须进行DOCTYPE声明。</p></blockquote><h3 id="常用的doctype声明" tabindex="-1"><a class="header-anchor" href="#常用的doctype声明"><span>常用的DOCTYPE声明</span></a></h3><p>一般情况下，默认使用以下声明即可。</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">doctype</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="一般doctype声明列表" tabindex="-1"><a class="header-anchor" href="#一般doctype声明列表"><span>一般DOCTYPE声明列表</span></a></h2><h3 id="html5" tabindex="-1"><a class="header-anchor" href="#html5"><span>html5</span></a></h3><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">doctype</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="html-4-01-strict" tabindex="-1"><a class="header-anchor" href="#html-4-01-strict"><span>HTML 4.01 Strict</span></a></h3><p>该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">DOCTYPE</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PUBLIC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;-//W3C//DTD HTML 4.01//EN&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;http://www.w3.org/TR/html4/strict.dtd&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="html-4-01-transitional" tabindex="-1"><a class="header-anchor" href="#html-4-01-transitional"><span>HTML 4.01 Transitional</span></a></h3><p>该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">DOCTYPE</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PUBLIC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;http://www.w3.org/TR/html4/loose.dtd&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="html-4-01-frameset" tabindex="-1"><a class="header-anchor" href="#html-4-01-frameset"><span>HTML 4.01 Frameset</span></a></h3><p>该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">DOCTYPE</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PUBLIC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;-//W3C//DTD HTML 4.01 Frameset//EN&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;http://www.w3.org/TR/html4/frameset.dtd&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="xhtml-1-0-strict" tabindex="-1"><a class="header-anchor" href="#xhtml-1-0-strict"><span>XHTML 1.0 Strict</span></a></h3><p>该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">DOCTYPE</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PUBLIC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="xhtml-1-0-transitional" tabindex="-1"><a class="header-anchor" href="#xhtml-1-0-transitional"><span>XHTML 1.0 Transitional</span></a></h3><p>该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">DOCTYPE</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PUBLIC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot; http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="xhtml-1-0-frameset" tabindex="-1"><a class="header-anchor" href="#xhtml-1-0-frameset"><span>XHTML 1.0 Frameset</span></a></h3><p>该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">DOCTYPE</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PUBLIC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;-//W3C//DTD XHTML 1.0 Frameset//EN&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="xhtml-1-1" tabindex="-1"><a class="header-anchor" href="#xhtml-1-1"><span>XHTML 1.1</span></a></h3><p>该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）。</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">DOCTYPE</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> html</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PUBLIC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;-//W3C//DTD XHTML 1.1//EN&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> &quot;http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div>`,39)]))}const d=s(l,[["render",h],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/article/s8udp6vp/","title":"<!DOCTYPE> 文档类型声明","lang":"zh-CN","frontmatter":{"title":"<!DOCTYPE> 文档类型声明","createTime":"2018/03/14 01:06:52","permalink":"/article/s8udp6vp/","author":"pengzhanbo","tags":["html"],"description":"Web世界中，随着历史的发展，技术的迭代，发展出了许多不同的文档，只有了解文档的类型，浏览器才能正确的解析渲染文档。 HTML也有多个不同的版本，只有完全明白页面使用的是哪个确切的HTML版本，浏览器才能完全正确的显示出HTML页面。 定义 <!DOCTYPE> 标签是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器，它应该使用什么...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/article/s8udp6vp/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"<!DOCTYPE> 文档类型声明"}],["meta",{"property":"og:description","content":"Web世界中，随着历史的发展，技术的迭代，发展出了许多不同的文档，只有了解文档的类型，浏览器才能正确的解析渲染文档。 HTML也有多个不同的版本，只有完全明白页面使用的是哪个确切的HTML版本，浏览器才能完全正确的显示出HTML页面。 定义 <!DOCTYPE> 标签是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器，它应该使用什么..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"<!DOCTYPE> 文档类型声明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"常用的DOCTYPE声明","slug":"常用的doctype声明","link":"#常用的doctype声明","children":[]}]},{"level":2,"title":"一般DOCTYPE声明列表","slug":"一般doctype声明列表","link":"#一般doctype声明列表","children":[{"level":3,"title":"html5","slug":"html5","link":"#html5","children":[]},{"level":3,"title":"HTML 4.01 Strict","slug":"html-4-01-strict","link":"#html-4-01-strict","children":[]},{"level":3,"title":"HTML 4.01 Transitional","slug":"html-4-01-transitional","link":"#html-4-01-transitional","children":[]},{"level":3,"title":"HTML 4.01 Frameset","slug":"html-4-01-frameset","link":"#html-4-01-frameset","children":[]},{"level":3,"title":"XHTML 1.0 Strict","slug":"xhtml-1-0-strict","link":"#xhtml-1-0-strict","children":[]},{"level":3,"title":"XHTML 1.0 Transitional","slug":"xhtml-1-0-transitional","link":"#xhtml-1-0-transitional","children":[]},{"level":3,"title":"XHTML 1.0 Frameset","slug":"xhtml-1-0-frameset","link":"#xhtml-1-0-frameset","children":[]},{"level":3,"title":"XHTML 1.1","slug":"xhtml-1-1","link":"#xhtml-1-1","children":[]}]}],"readingTime":{"minutes":2.29,"words":687},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"1.前端/1.基础/DOCTYPE 文档类型声明.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"f67703","sort":1,"name":"基础"}]}`);export{d as comp,r as data};
