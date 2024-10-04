import{_ as r,c as d,d as c,b as h,w as n,r as k,o,a as s,e as i}from"./app-Dg_oyx95.js";const g={};function y(u,a){const t=k("VPIcon"),p=k("CodeTabs");return o(),d("div",null,[a[4]||(a[4]=c(`<p>事件循环，即 Event-Loop。</p><h2 id="什么是-event-loop" tabindex="-1"><a class="header-anchor" href="#什么是-event-loop"><span>什么是 Event-Loop ？</span></a></h2><p>Event-Loop 是一个执行模型，在 <a href="https://html.spec.whatwg.org/multipage/webappapis.html#event-loops" target="_blank" rel="noopener noreferrer">html5规范</a> 中进行了浏览器端的 Event-Loop 的明确定义。</p><h2 id="宏任务与微任务" tabindex="-1"><a class="header-anchor" href="#宏任务与微任务"><span>宏任务与微任务</span></a></h2><p>javascript 有两种异步任务，分别是<code>宏任务</code>和<code>微任务</code></p><h3 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务"><span>宏任务</span></a></h3><p>宏任务，<code>macro task</code>，也叫 <code>tasks</code>，一些异步任务的回调会依次进入 <code>macro task queue</code>，等待后续被调用。</p><p>这些异步任务包括：</p><ul><li>setTimeout</li><li>setInterval</li><li>setImmediate (Node独有)</li><li>requestAnimationFrame (浏览器独有)</li><li>I/O</li><li>UI rendering</li></ul><h3 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务"><span>微任务</span></a></h3><p>微任务， <code>micro task</code>, 也叫 <code>jobs</code>，另一些异步任务的回调会依次进入<code>micro task queue</code>，等待后续被调用。</p><p>这些异步任务包括：</p><ul><li>process.nextTick(Node独有)</li><li>Promise</li><li>Object.observe</li><li>MutationObserver</li></ul><h2 id="事件循环-event-loop" tabindex="-1"><a class="header-anchor" href="#事件循环-event-loop"><span>事件循环 Event Loop</span></a></h2><ol><li>执行全局 <code>script</code> 代码，这些代码有一些是同步语句，有一些是异步语句（如： setTimeout）；</li><li>全局<code>script</code>同步代码执行完毕后，调用栈Stack会清空；</li><li>从微任务<code>micro task queue</code> 中取出位于队首的任务，放入调用栈Stack中执行，执行完后<code>micro task queue</code>长度减一；</li><li>继续取出微任务<code>micro task queue</code>位于队首的任务，放入调用栈Stack中执行， 以此类推，直到把<code>micro task queue</code>中的所有任务都执行完毕。<strong>注意，如果在执行micro task的过程中，产生了<code>micro task</code>那么会加入到队列的末尾，也会在这个周期被调用执行</strong>；</li><li><code>micro task</code>中的所有无人都执行完毕，此时 <code>micro task queue</code> 为空队列，调用栈Stack也为空；</li><li>取出宏队列 <code>macro task queue</code> 中位于队首的任务，放入Stack中执行；</li><li>执行完毕后，调用栈Stack为空；</li><li>重复第3-7个步骤；</li><li>以此继续循环重复；</li></ol><div class="hint-container tip"><p class="hint-container-title">重点</p><ol><li>宏任务<code>marco task</code> 一次只从队列中取出一个任务执行，执行后就去执行微任务队列中的任务；</li><li>微任务队列中所有的任务都会依次取出来执行，直到<code>micro task queue</code>为空， 且当前微任务执行过程中产生新的<code>micro task</code>，也会加入到当前<code>micro task queue</code>;</li><li><code>UI Rendering</code>由浏览器自定判断决定执行节点。但是只要执行<code>UI Rendering</code>，它的节点是在执行完所有 <code>micro task</code>之后，下一个<code>macro task</code>之前，紧跟着执行<code>UI Rendering</code></li></ol></div><p>尝试从代码层面来分析 event-loop:</p><div class="hint-container note"><p class="hint-container-title">抖个机灵</p><p>代码人看代码应该比看流程图要来得好理解了吧（bushi）</p></div><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 执行器</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 接收一段javascript代码</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Execution</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  constructor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> code</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 启动执行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  exec</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 首次运行，将 传入的 code 推入到 Track中执行</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 并获取其中的 宏任务和 微任务</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 将宏任务和微任务 推入到 各自的 队列中</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 开始执行微任务</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">runMicroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 执行微任务队列</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  runMicroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 遍历 微任务队列中的所有任务</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 当当前的 微任务队列清空时，遍历才结束</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    while</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 取出 队首的微任务</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">      const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">shift</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 将 当前微任务 推入到 执行栈中执行</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 并将返回的 宏任务和微任务 继续 推入到 各自的队列中</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">      const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">      this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">      this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 当前微任务执行完毕，继续执行宏任务</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">runMacroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 执行宏任务队列</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  runMacroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 从 宏任务队列队首 取出一个 宏任务</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">shift</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 将当前 宏任务 推入到 执行栈中执行</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 并将返回的 宏任务和微任务 继续 推入到 各自的队列中</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 再一次执行 微任务队列中的任务</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">runMicroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 执行栈调用</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // track 函数表示 执行栈</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 执行完毕返回 产生的 微任务队列 和 宏任务队列</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> track</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> macroTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> microTaskQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> execute</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Execution</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">scriptCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">execute</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">exec</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>event-loop</code> 概念性的内容大体就这么多，接下来从示例中来实际执行情况。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>以下示例是在 <code>Chrome</code> 中执行后获得的结果，在其他浏览器的表现并不一定完全相同。</p></div><p>可以尝试自己心中执行这段代码后的打印顺序，再切换到<code>Console</code>中看实际的运行结果，是否符合你的预期结果。</p>`,23)),h(p,{id:"179",data:[{id:"javascript"},{id:"Console"}]},{title0:n(({value:l,isActive:e})=>[h(t,{name:"vscode-icons:file-type-js-official"}),a[0]||(a[0]=s("span",null,"javascript",-1))]),title1:n(({value:l,isActive:e})=>a[1]||(a[1]=[s("span",null,"Console",-1)])),tab0:n(({value:l,isActive:e})=>a[2]||(a[2]=[s("div",{class:"language-js line-numbers-mode","data-ext":"js","data-title":"js"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"script"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"setTimeout"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"timeout 1"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  Promise"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"resolve"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"then"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"promise 1"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  })")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"new"),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," Promise"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"resolve"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"promise resolver"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  Promise"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"resolve"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"then"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"promise 3"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  })")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  resolve"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"promise 2"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"then"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"data"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"data"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"setTimeout"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"timeout 2"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"end"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:n(({value:l,isActive:e})=>a[3]||(a[3]=[s("div",{class:"language-txt","data-ext":"txt","data-title":"txt"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"script")]),i(`
`),s("span",{class:"line"},[s("span",null,"promise resolver")]),i(`
`),s("span",{class:"line"},[s("span",null,"end")]),i(`
`),s("span",{class:"line"},[s("span",null,"promise 3")]),i(`
`),s("span",{class:"line"},[s("span",null,"promise 2")]),i(`
`),s("span",{class:"line"},[s("span",null,"timeout 1")]),i(`
`),s("span",{class:"line"},[s("span",null,"promise 1")]),i(`
`),s("span",{class:"line"},[s("span",null,"timeout 2")])])])],-1)])),_:1})])}const m=r(g,[["render",y],["__file","index.html.vue"]]),v=JSON.parse(`{"path":"/article/browser-event-loop/","title":"Event Loop 浏览器端的事件循环","lang":"zh-CN","frontmatter":{"title":"Event Loop 浏览器端的事件循环","createTime":"2021/06/03 01:53:17","permalink":"/article/browser-event-loop/","author":"pengzhanbo","tags":["javascript"],"description":"事件循环，即 Event-Loop。 什么是 Event-Loop ？ Event-Loop 是一个执行模型，在 html5规范 中进行了浏览器端的 Event-Loop 的明确定义。 宏任务与微任务 javascript 有两种异步任务，分别是宏任务和微任务 宏任务 宏任务，macro task，也叫 tasks，一些异步任务的回调会依次进入 mac...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/article/browser-event-loop/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"Event Loop 浏览器端的事件循环"}],["meta",{"property":"og:description","content":"事件循环，即 Event-Loop。 什么是 Event-Loop ？ Event-Loop 是一个执行模型，在 html5规范 中进行了浏览器端的 Event-Loop 的明确定义。 宏任务与微任务 javascript 有两种异步任务，分别是宏任务和微任务 宏任务 宏任务，macro task，也叫 tasks，一些异步任务的回调会依次进入 mac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Event Loop 浏览器端的事件循环\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"什么是 Event-Loop ？","slug":"什么是-event-loop","link":"#什么是-event-loop","children":[]},{"level":2,"title":"宏任务与微任务","slug":"宏任务与微任务","link":"#宏任务与微任务","children":[{"level":3,"title":"宏任务","slug":"宏任务","link":"#宏任务","children":[]},{"level":3,"title":"微任务","slug":"微任务","link":"#微任务","children":[]}]},{"level":2,"title":"事件循环 Event Loop","slug":"事件循环-event-loop","link":"#事件循环-event-loop","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"readingTime":{"minutes":3.95,"words":1186},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"1.前端/1.基础/浏览器端的事件循环.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"f67703","sort":1,"name":"基础"}]}`);export{m as comp,v as data};
