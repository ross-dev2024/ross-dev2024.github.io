import{_ as t,c as i,d as e,o as a}from"./app-Dg_oyx95.js";const l={};function h(n,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h2 id="配置位置" tabindex="-1"><a class="header-anchor" href="#配置位置"><span>配置位置</span></a></h2><table><thead><tr><th style="text-align:left;">位置</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>/etc/ssh/ssh_config</code></td><td style="text-align:right;">系统范围的配置</td></tr><tr><td style="text-align:left;"><code>~/.ssh/config</code></td><td style="text-align:right;">用户特定的配置</td></tr><tr><td style="text-align:left;"><code>~/.ssh/id_{type}</code></td><td style="text-align:right;">私钥</td></tr><tr><td style="text-align:left;"><code>~/.ssh/id_{type}.pub</code></td><td style="text-align:right;">公钥</td></tr><tr><td style="text-align:left;"><code>~/.ssh/known_hosts</code></td><td style="text-align:right;">登录主机</td></tr><tr><td style="text-align:left;"><code>~/.ssh/authorized_keys</code></td><td style="text-align:right;">授权登录密钥</td></tr></tbody></table><h2 id="执行远程命令" tabindex="-1"><a class="header-anchor" href="#执行远程命令"><span>执行远程命令</span></a></h2><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> root@192.168.1.5</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls -l</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 调用本地脚本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> root@192.168.1.5</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bash</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> script.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 从服务器压缩和下载</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> root@192.168.1.5</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tar cvzf - ~/source</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> output.tgz</span></span></code></pre></div><h2 id="scp" tabindex="-1"><a class="header-anchor" href="#scp"><span>SCP</span></a></h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scp -r</code></td><td style="text-align:right;">递归复制整个目录</td></tr><tr><td style="text-align:left;"><code>scp -C</code></td><td style="text-align:right;">压缩数据</td></tr><tr><td style="text-align:left;"><code>scp -v</code></td><td style="text-align:right;">打印详细信息</td></tr><tr><td style="text-align:left;"><code>scp -P 8080</code></td><td style="text-align:right;">使用特定端口</td></tr><tr><td style="text-align:left;"><code>scp -B</code></td><td style="text-align:right;">批处理模式 <em>（防止密码）</em></td></tr><tr><td style="text-align:left;"><code>scp -p</code></td><td style="text-align:right;">保留时间和模式</td></tr></tbody></table><p>从远程复制到本地</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">scp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user@server:/dir/file.ext</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dest/</span></span></code></pre></div><p>两台服务器之间的副本</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">scp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user@server:/file</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user@server:/dir</span></span></code></pre></div><p>从本地复制到远程</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">scp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dest/file.ext</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user@server:/dir</span></span></code></pre></div><p>复制整个文件夹</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">scp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user@server:/dir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dest/</span></span></code></pre></div><p>复制文件夹中的所有文件</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">scp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user@server:/dir/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dest/</span></span></code></pre></div><p>从服务器文件夹复制到当前文件夹</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">scp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user@server:/dir/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span></code></pre></div><h2 id="keygen" tabindex="-1"><a class="header-anchor" href="#keygen"><span>keygen</span></a></h2><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rsa</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -b</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4096</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -C</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">your@mail.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre></div><ul><li><code>-t</code> 指定密钥类型, <code>rsa | ed25519 | dsa | ecdsa</code></li><li><code>-b</code> 指定密钥长度</li><li><code>-C</code> 指定注释</li></ul><p>指定文件名</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/filename</span></span></code></pre></div><p>从私钥生成公钥</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> private.key</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> public.pub</span></span></code></pre></div><p>更改私钥密码</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/id_rsa</span></span></code></pre></div><p>从 known_hosts 搜索</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -F</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ip/hostnam</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span></code></pre></div><p>从 known_hosts 中删除</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -R</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ip/hostnam</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span></code></pre></div>`,31)]))}const p=t(l,[["render",h],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/memorandum/ssh/","title":"ssh","lang":"zh-CN","frontmatter":{"title":"ssh","icon":"mdi:ssh","author":"鹏展博","createTime":"2019/04/13 18:58:37","permalink":"/memorandum/ssh/","description":"配置位置 执行远程命令 SCP 从远程复制到本地 两台服务器之间的副本 从本地复制到远程 复制整个文件夹 复制文件夹中的所有文件 从服务器文件夹复制到当前文件夹 keygen -t 指定密钥类型, rsa | ed25519 | dsa | ecdsa -b 指定密钥长度 -C 指定注释 指定文件名 从私钥生成公钥 更改私钥密码 从 known_hos...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/memorandum/ssh/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"ssh"}],["meta",{"property":"og:description","content":"配置位置 执行远程命令 SCP 从远程复制到本地 两台服务器之间的副本 从本地复制到远程 复制整个文件夹 复制文件夹中的所有文件 从服务器文件夹复制到当前文件夹 keygen -t 指定密钥类型, rsa | ed25519 | dsa | ecdsa -b 指定密钥长度 -C 指定注释 指定文件名 从私钥生成公钥 更改私钥密码 从 known_hos..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T16:10:48.000Z"}],["meta",{"property":"article:author","content":"鹏展博"}],["meta",{"property":"article:modified_time","content":"2024-09-29T16:10:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ssh\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T16:10:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[{"level":2,"title":"配置位置","slug":"配置位置","link":"#配置位置","children":[]},{"level":2,"title":"执行远程命令","slug":"执行远程命令","link":"#执行远程命令","children":[]},{"level":2,"title":"SCP","slug":"scp","link":"#scp","children":[]},{"level":2,"title":"keygen","slug":"keygen","link":"#keygen","children":[]}],"readingTime":{"minutes":1.25,"words":375},"git":{"createdTime":1727626248000,"updatedTime":1727626248000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/备忘录/ssh.md"}`);export{p as comp,k as data};
