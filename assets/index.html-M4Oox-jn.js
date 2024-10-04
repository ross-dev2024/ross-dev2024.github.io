import{_ as i,c as a,d as t,o as n}from"./app-Dg_oyx95.js";const e={};function l(p,s){return n(),a("div",null,s[0]||(s[0]=[t(`<div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 显示版本信息以确认 Cargo 已安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> version</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 创建新项目 二进制程序</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> new</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --bin</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 创建新项目 库</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> new</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --lib</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 在项目中运行单元测试</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> test</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 快速编译项目，无需生成二进制文件来检查错误</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> check</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 自动格式化代码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fmt</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 编译一个项目</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> build</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 一步编译和运行项目</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Linter 检查错误</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clippy</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --all-targets</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> warnings</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检查代码覆盖率</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cargo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tarpaulin</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --ignore-tests</span></span></code></pre></div><h2 id="安装-升级" tabindex="-1"><a class="header-anchor" href="#安装-升级"><span>安装/升级</span></a></h2><p>适用于 Linux 和 MacOS</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -sSf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://static.rust-lang.org/rustup.sh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sh</span></span></code></pre></div><p>在 Windows 中，下载 <a href="https://win.rustup.rs/" target="_blank" rel="noopener noreferrer">rustup-init.exe</a> 并运行。</p><h2 id="切换源" tabindex="-1"><a class="header-anchor" href="#切换源"><span>切换源</span></a></h2><p>配置文件： <code>~/.cargo/config</code></p><div class="language-toml" data-ext="toml" data-title="toml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">source</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">crates-io</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">registry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://github.com/rust-lang/crates.io-index</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">replace-with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tuna</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 👈 如果需要提交包注释配置源</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">source</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tuna</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">registry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># registry = &quot;git://mirrors.ustc.edu.cn/crates.io-index&quot;</span></span></code></pre></div><p>切换源需要删除缓存目录</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.cargo/.package-cache</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # ⚠️ 删除缓存目录内容</span></span></code></pre></div>`,10)]))}const k=i(e,[["render",l],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/memorandum/cargo/","title":"cargo","lang":"zh-CN","frontmatter":{"title":"cargo","icon":"logos:rust","author":"鹏展博","createTime":"2022/06/21 17:40:42","permalink":"/memorandum/cargo/","description":"安装/升级 适用于 Linux 和 MacOS 在 Windows 中，下载 rustup-init.exe 并运行。 切换源 配置文件： ~/.cargo/config 切换源需要删除缓存目录","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/memorandum/cargo/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"cargo"}],["meta",{"property":"og:description","content":"安装/升级 适用于 Linux 和 MacOS 在 Windows 中，下载 rustup-init.exe 并运行。 切换源 配置文件： ~/.cargo/config 切换源需要删除缓存目录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T16:10:48.000Z"}],["meta",{"property":"article:author","content":"鹏展博"}],["meta",{"property":"article:modified_time","content":"2024-09-29T16:10:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cargo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T16:10:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[{"level":2,"title":"安装/升级","slug":"安装-升级","link":"#安装-升级","children":[]},{"level":2,"title":"切换源","slug":"切换源","link":"#切换源","children":[]}],"readingTime":{"minutes":0.8,"words":241},"git":{"createdTime":1727626248000,"updatedTime":1727626248000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/备忘录/cargo.md"}`);export{k as comp,r as data};
