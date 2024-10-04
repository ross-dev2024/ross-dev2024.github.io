import{_ as t,c as o,d as i,o as d}from"./app-Dg_oyx95.js";const a="/images/chrome-override/open-menu.png",c="/images/chrome-override/select-folder.png",n="/images/chrome-override/allow.png",r="/images/chrome-override/mock-file.png",s="/images/chrome-override/disable.png",p="/images/chrome-override/override-res-1.png",l="/images/chrome-override/override-header-1.png",m="/images/chrome-override/override-header-2.png",h="/images/chrome-override/override-header-3.png",g="/images/chrome-override/override-header-4.png",v="/images/chrome-override/override-header-5.png",w="/images/chrome-override/override-header-6.png",u="/images/chrome-override/override-content.png",x={};function _(f,e){return d(),o("div",null,e[0]||(e[0]=[i('<p>在 <strong>Chrome 117</strong> 中，发布了一项极为实用的新功能，这项功能允许 我们在 <strong>本地替换Web内容</strong> （包括 XHR 和 提取请求数据）</p><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>在我们的日常开发中，在进行调试时经常需要模拟各种数据场景。 通常情况下，我们可以借助一些开发工具，或者根据项目所使用的脚手架相关的工具进行模拟。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你正在使用 <code>vite</code>，推荐使用 <a href="https://vite-plugin-mock-dev-server.netlify.app/" target="_blank" rel="noopener noreferrer"><code>vite-plugin-mock-dev-server</code></a> 插件为你的项目开启 mock 支持。 能够满足绝大多数的需求场景，不仅支持 http 请求，还支持 websocket。</p></div><p>从 <code>Chrome 117</code> 开始，为我们提供了 <code>overrides content</code> 功能，它带来的功能包括：</p><ul><li>替换 HTTP 响应头</li><li>替换 HTTP 响应内容</li><li>替换 网页资源</li></ul><p>同时，它还将替换的内容保存 为 本地的文件夹中形成副本。当重新加载网页时，开发者工具会使用这些 本地的副本， 而不是真实的网络资源。</p><h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h2><p>本地替换适用于网络响应标头和大多数文件类型（包括 XHR 和提取请求），但有一些例外情况：</p><ul><li>开发者工具不会保存对 <code>Elements</code> 面板的 DOM 树所做的更改。</li><li>如果你在 <code>Styles</code> 窗格中修改 CSS，且该 CSS 的来源是 HTML 文件，则开发者工具不会保存更改。</li></ul><p>不过，你可以在 <code>Sources</code> 面板中修改 HTML 文件。</p><h2 id="设置本地替换项" tabindex="-1"><a class="header-anchor" href="#设置本地替换项"><span>设置本地替换项</span></a></h2><h3 id="启用" tabindex="-1"><a class="header-anchor" href="#启用"><span>启用</span></a></h3><ol><li><p>首先打开 <code>Networks</code> 面板，首先选择你想要 替换的请求， 从下拉菜单中选择 <code>override header</code>(替换响应头) 或者 <code>override content</code> （替换内容）。</p><div style="text-align:center;"><p><img src="'+a+'" alt="open menu" style="width:275px;max-width:100%;"></p></div></li><li><p>如果你还未设置过 本地替换项，则开发者工具会在顶部的的操作栏中，提示你 选择一个 本地文件夹， 用于将 替换的文件保存到 本地的文件夹中作为副本。</p><div style="text-align:center;"><p><img src="'+c+'" alt="select folder"></p></div><p>选择文件夹后，开发者工具 会提示你 进行 文件夹授权，点击 <code>Allow / 允许</code> 即可：</p><div style="text-align:center;"><p><img src="'+n+'" alt="allow"></p></div></li><li><p>授权完毕后，开发者工具将会跳转到 <code>Sources</code> 面板。在这里，你可以看到 新生成的 Mock 文件， 该文件与你想要替换的 请求内容 相对应， 你可以直接在这里对其进行修改：</p><div style="text-align:center;"><p><img src="'+r+'" alt="mock file"></p></div></li></ol><h3 id="停用" tabindex="-1"><a class="header-anchor" href="#停用"><span>停用</span></a></h3><p>在 <code>Sources &gt; overrides</code> 面板中， 取消选中 <code>Enable local override</code> 即可 停用 本地替换。</p><div style="text-align:center;"><p><img src="'+s+'" alt="disable" style="width:375px;max-width:100%;"></p></div><h2 id="替换响应内容" tabindex="-1"><a class="header-anchor" href="#替换响应内容"><span>替换响应内容</span></a></h2><p>使用 替换响应内容 时，我们可以不必等待后端，获得后端支持，即可在本地 实时模拟我们需要的数据进行调试。</p><p>在 <code>Networks</code> 面板中，右键点击你想要修改的接口，在弹出咋菜单中，选择 <code>Override content</code> 选项：</p><div style="text-align:center;"><p><img src="'+p+'" alt="override res" style="width:375px;max-width:100%;"></p></div><p>开发者工具将会跳转到 <code>Sources &gt; Overrides</code> 面板中，并打开对应的 mock 文件：</p><div style="text-align:center;"><p><img src="'+r+'" alt="mock file"></p></div><p>你可以直接在这里修改 响应内容，然后按 <code>Command /Ctrl + S</code> 保存文件, 然后刷新页面</p><h2 id="替换响应头" tabindex="-1"><a class="header-anchor" href="#替换响应头"><span>替换响应头</span></a></h2><h3 id="修改单个请求响应头" tabindex="-1"><a class="header-anchor" href="#修改单个请求响应头"><span>修改单个请求响应头</span></a></h3><p>在 <code>Networks</code> 面板中，选择想要修改的接口，并右键点击，然后在 右键菜单中，选择 <code>Override header</code>选项：</p><div style="text-align:center;"><p><img src="'+l+'" alt="override header" style="width:375px;max-width:100%;"></p></div><p>此时，面板 <code>Header</code> 将会进入 可编辑状态：</p><div style="text-align:center;"><p><img src="'+m+'" alt="override header"></p></div><p>你可以点击 <code>Add Header</code> 添加新的响应头， 也可以直接点击想要修改的值即可修改响应头。</p><p>另外，如果你只需要简单的修改某个值，还可以直接鼠标悬停在 想要修改的 <code>Header</code> 值上，然后点击 <code>Edit</code> 图标 来修改响应头。</p><div style="text-align:center;"><p><img src="'+h+'" alt="override header"></p></div><p>请看一个示例，添加一个 允许跨域请求的头，删除一个响应头并修改响应头：</p><div style="text-align:center;"><p><img src="'+g+'" alt="override header"></p></div><h3 id="修改所有请求响应头" tabindex="-1"><a class="header-anchor" href="#修改所有请求响应头"><span>修改所有请求响应头</span></a></h3><p>如果需要在修改所有请求的响应头时，点击 <code>Response Headers</code> 面板右侧的 <code>.headers</code> 按钮：</p><div style="text-align:center;"><p><img src="'+v+'" alt="override header" style="width:425px;max-width:100%;"></p></div><p>开发者工具将会条状到对应的 <code>Sources &gt; Overrides &gt; .headers</code> 文件中：</p><div style="text-align:center;"><p><img src="'+w+'" alt="override header"></p></div><p>在这里，你可以点击 <code>Add override rule</code> 按钮，添加新的响应头。</p><p>其中 <code>Apply to</code> 表示该规则匹配的 请求接口地址， 你可以使用 <code>*</code> 通配符 匹配所有的接口， 使用 <code>?</code> 指定单个字符。</p><p>修改完成后，别忘了 使用 <code>Commands/Ctrl + S</code> 保存 <code>.headers</code> 文件。</p><p>然后，你就可以刷新页面以应用所有的更改。</p><h2 id="替换web内容" tabindex="-1"><a class="header-anchor" href="#替换web内容"><span>替换Web内容</span></a></h2><p>你可以直接在 <code>Sources &gt; Page</code> 查看 当前页面的 所有资源内容，然后找到你想要修改的资源内容， 右键点击，在菜单中选择 <code>Override content</code>。</p><div style="text-align:center;"><p><img src="'+u+'" alt="override content" style="width:425px;max-width:100%;"></p></div><p>开发者工具将会跳转到 <code>Sources &gt; Overrides</code> 面板，并建立 该资源内容的 Mock 副本， 你可以直接对其进行修改， <code>Command /Ctrl + S</code> 保存文件，然后刷新页面。</p>',48)]))}const k=t(x,[["render",_],["__file","index.html.vue"]]),b=JSON.parse(`{"path":"/article/hdx2maf6/","title":"在 Chrome 中模拟请求和Web内容","lang":"zh-CN","frontmatter":{"title":"在 Chrome 中模拟请求和Web内容","author":"鹏展博","tags":["development"],"createTime":"2024/01/21 15:22:45","permalink":"/article/hdx2maf6/","description":"在 Chrome 117 中，发布了一项极为实用的新功能，这项功能允许 我们在 本地替换Web内容 （包括 XHR 和 提取请求数据） 概述 在我们的日常开发中，在进行调试时经常需要模拟各种数据场景。 通常情况下，我们可以借助一些开发工具，或者根据项目所使用的脚手架相关的工具进行模拟。 提示 如果你正在使用 vite，推荐使用 vite-plugin-...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/article/hdx2maf6/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"在 Chrome 中模拟请求和Web内容"}],["meta",{"property":"og:description","content":"在 Chrome 117 中，发布了一项极为实用的新功能，这项功能允许 我们在 本地替换Web内容 （包括 XHR 和 提取请求数据） 概述 在我们的日常开发中，在进行调试时经常需要模拟各种数据场景。 通常情况下，我们可以借助一些开发工具，或者根据项目所使用的脚手架相关的工具进行模拟。 提示 如果你正在使用 vite，推荐使用 vite-plugin-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wangjw.cn/images/chrome-override/open-menu.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"鹏展博"}],["meta",{"property":"article:tag","content":"development"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Chrome 中模拟请求和Web内容\\",\\"image\\":[\\"https://wangjw.cn/images/chrome-override/open-menu.png\\",\\"https://wangjw.cn/images/chrome-override/select-folder.png\\",\\"https://wangjw.cn/images/chrome-override/allow.png\\",\\"https://wangjw.cn/images/chrome-override/mock-file.png\\",\\"https://wangjw.cn/images/chrome-override/disable.png\\",\\"https://wangjw.cn/images/chrome-override/override-res-1.png\\",\\"https://wangjw.cn/images/chrome-override/mock-file.png\\",\\"https://wangjw.cn/images/chrome-override/override-header-1.png\\",\\"https://wangjw.cn/images/chrome-override/override-header-2.png\\",\\"https://wangjw.cn/images/chrome-override/override-header-3.png\\",\\"https://wangjw.cn/images/chrome-override/override-header-4.png\\",\\"https://wangjw.cn/images/chrome-override/override-header-5.png\\",\\"https://wangjw.cn/images/chrome-override/override-header-6.png\\",\\"https://wangjw.cn/images/chrome-override/override-content.png\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"限制","slug":"限制","link":"#限制","children":[]},{"level":2,"title":"设置本地替换项","slug":"设置本地替换项","link":"#设置本地替换项","children":[{"level":3,"title":"启用","slug":"启用","link":"#启用","children":[]},{"level":3,"title":"停用","slug":"停用","link":"#停用","children":[]}]},{"level":2,"title":"替换响应内容","slug":"替换响应内容","link":"#替换响应内容","children":[]},{"level":2,"title":"替换响应头","slug":"替换响应头","link":"#替换响应头","children":[{"level":3,"title":"修改单个请求响应头","slug":"修改单个请求响应头","link":"#修改单个请求响应头","children":[]},{"level":3,"title":"修改所有请求响应头","slug":"修改所有请求响应头","link":"#修改所有请求响应头","children":[]}]},{"level":2,"title":"替换Web内容","slug":"替换web内容","link":"#替换web内容","children":[]}],"readingTime":{"minutes":4.41,"words":1322},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"1.前端/10.开发/在Chrome中模拟请求和Web内容.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"90af2f","sort":10,"name":"开发"}]}`);export{k as comp,b as data};
