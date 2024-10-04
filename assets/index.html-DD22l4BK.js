import{_ as i,c as a,d as e,o as n}from"./app-Dg_oyx95.js";const l={};function p(t,s){return n(),a("div",null,s[0]||(s[0]=[e(`<div style="text-align:center;"><p><img src="https://www.webpackjs.com/icon-square-small.85ba630cf0c5f29ae3e3.svg" alt="webpack" width="100"></p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>我们知道， <code>webpack</code> 作为前端工程化中，主流的模块打包工具之一，应用于各种各样的前端工程化项目中。</p><p>虽然大多数项目都或多或少会使用到 <code>webpack</code>， 但是可能对于大多数的 前端开发人员来说， 可能只是改改 <code>webpack</code> 的配置， 或者甚至从未动过 <code>webpack</code> 的相关文件, 或多或少对 <code>webpack</code> 的配置以及功能感到陌生。</p><p>还有类似于 <code>vue-cli</code>、<code>create-react-app</code> 、 <code>umi.js</code> 等各种基于 <code>webpack</code> 封装的 脚手架， 提供了各种开箱即用的功能，这使得 <code>webpack</code> 离我们好像越来越远。</p><p>但是当我们的某个项目面临了不得不去 深入 <code>webpack</code> 才能解决的问题，或者 面试时，被问起 <code>webpack</code> 相关的问题， 就难以解决或者回答。</p><p>所以我们需要对 <code>webpack</code> 至少有基本的了解，了解它的原理、如何编写 <code>loader</code> 、 <code>plugin</code> 等。</p><h2 id="webpack是什么" tabindex="-1"><a class="header-anchor" href="#webpack是什么"><span>webpack是什么</span></a></h2><blockquote><p>引用 <a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer">webpack官网</a> ：</p><p>At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.</p><p>本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。 当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)， 其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。</p></blockquote><p>从作用上讲，webpack 的功能就是将不同模块的文件，打包整合到一起，并且保证它们之间引用的正确，且有序执行。 这使得我们在做项目架构时，能够从模块的角度去做文件拆分，然后交给 webpack 打包整合。</p><p>而一个项目中的文件，不仅有 html文件、CSS文件、JavaScript文件、图片资源、Vue特有的<code>.vue</code>文件， typescript的<code>.ts</code> 文件等，以及项目的中的代码还需要进行压缩混淆、浏览器兼容、等等必要的处理， 启动一个本地的开发服务器、模块的热更新替换等， 可以通过<code>webpack</code> 提供的各种机制，来一一实现。</p><p>对于 <code>webpack</code> 来说， 它自身只能识别 JavaScript 文件， 而对于其他的资源，可以通过 webpack提供的 <code>Loader</code> 特性来实现 识别。 通过 <code>Loader</code>，可以把其它类型的资源文件，转换为 webpack能够处理的有效模块。</p><p>而对于 代码混淆、本地开发服务器、模块热更新，则可以通过 webpack 提供的 <code>Plugin</code> 特性来实现功能上的扩展。</p><h2 id="模块打包原理" tabindex="-1"><a class="header-anchor" href="#模块打包原理"><span>模块打包原理</span></a></h2><p>在 webpack 中，有四个基础且核心的概念：</p><ul><li><strong>入口（entry）</strong></li><li><strong>输出（output）</strong></li><li><strong>加载器（Loader）</strong></li><li><strong>插件（Plugin）</strong></li></ul><h3 id="入口-entry" tabindex="-1"><a class="header-anchor" href="#入口-entry"><span>入口（entry）</span></a></h3><p>指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。</p><h3 id="输出-output" tabindex="-1"><a class="header-anchor" href="#输出-output"><span>输出(output)</span></a></h3><p>告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件</p><h3 id="加载器-loader" tabindex="-1"><a class="header-anchor" href="#加载器-loader"><span>加载器（Loader）</span></a></h3><p>webpack 自身只能理解 JavaScript 文件 和 json 文件， loader 可以将其他类型的资源文件转换为 webpack能够处理的有效模块。</p><p>本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。</p><h3 id="插件-plugin" tabindex="-1"><a class="header-anchor" href="#插件-plugin"><span>插件（Plugin）</span></a></h3><p>用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。 插件接口功能极其强大，可以用来处理各种各样的任务。</p><h3 id="模块-modules" tabindex="-1"><a class="header-anchor" href="#模块-modules"><span>模块（modules）</span></a></h3><p>在模块化编程中，开发者将程序分解成离散功能块(discrete chunks of functionality)，并称之为模块。</p><p>对于 webpack ，任何文件都可以是一个模块。</p><h3 id="模块打包运行原理" tabindex="-1"><a class="header-anchor" href="#模块打包运行原理"><span>模块打包运行原理</span></a></h3><p>在说 webpack 的 <strong>模块打包运行原理</strong> 之前， 先看下 我们是如何使用 webpack的， 一般情况下， 我们通过编写一个 配置文件<code>webpack.config.js</code>， 对 webpack 进行本地化的配置， 大致的配置如下：</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 声明模块的入口文件</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  entry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./src/entry.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  output</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">resolve</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">__dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 输出目录</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    filename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bundle.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 文件名称</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    rules</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 配置 使用 babel-loader 对 .js 资源进行转换</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> /</span><span style="--shiki-light:#BDA437;--shiki-dark:#E6CC77;">\\.</span><span style="--shiki-light:#AB5E3F;--shiki-dark:#C4704F;">js</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">$</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        loader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">babel-loader</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // ...more loader</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 插件配置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> EslintWebpackPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> webpack</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">NoEmitOnErrorsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // ...more plugin</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // ...more config</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>webpack</code> 读取了 配置文件后，运行的流程大致如下：</p><ol><li>读取 <code>webpack</code> 的配置参数；</li><li>启动 <code>webpack</code> , 创建 <code>compiler</code> 对象，开始解析项目；</li><li>从入口文件 <code>entry</code> 开始解析，并找到其导入的<strong>依赖模块</strong>，递归遍历分析，形成<strong>依赖关系树</strong>；</li><li>对不同的文件类型资源的依赖模块文件，使用对应的 <code>Loader</code> 进行转换，最终转为 webpack的有效模块；</li><li>在编译过程中， <code>webpack</code> 通过 发布订阅模式，向外抛出一些 <code>hooks</code> ，<code>webpack</code> 的 <code>Plugin</code> 通过监听各个 <code>hooks</code> ， 执行插件任务，扩展 <code>webpack</code> 的功能，干预输出结果。</li><li>根据 输出配置 <code>output</code> ，将打包构建好的资源文件 输出。</li></ol><p><code>compiler</code> 对象是一个全局单例，负责控制整个 webpack 构建流程。</p><p>在构建过程中，还会产生一个当前构建的上下文对象 <code>compilation</code>, 它包含了当前构建的所有信息，在每个热更新或重新构建时， <code>compiler</code> 都会产生一个新的<code>compilation</code> 对象，负责当前构建过程。</p><p>每个模块间的依赖关系，则依赖于<code>AST</code>语法树。每个模块文件在通过<code>Loader</code>解析完成之后， 会通过<code>acorn</code>库生成模块代码的<code>AST</code>语法树，通过语法树就可以分析这个模块是否还有依赖的模块， 进而继续循环执行下一个模块的编译解析。</p><p>最终， webpack 打包构建出来的 bundle 文件，是一个 IIFE 执行函数。</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// webpack5下进行的最小化打包输出文件</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">;(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // webpack 模块文件内容</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __webpack_modules__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">entry.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">modules</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      /* ... */</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">other.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">__unused_webpack_module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __unused_webpack_exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __webpack_require__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      /* ... */</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 模块缓存</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __webpack_module_cache__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // The require function</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> __webpack_require__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">moduleId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // Check if module is in cache</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> cachedModule</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __webpack_module_cache__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">moduleId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">cachedModule</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !==</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> undefined</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> cachedModule</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">exports</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // Create a new module (and put it into the cache)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">__webpack_module_cache__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">moduleId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // no module.id needed</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // no module.loaded needed</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // Execute the module function</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    __webpack_modules__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">moduleId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __webpack_require__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // Return the exports of the module</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">exports</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // startup</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // Load entry module and return exports</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // This entry module can&#39;t be inlined because the eval devtool is used.</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __webpack_exports__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> __webpack_require__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">entry.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的打包demo中，整个立即执行函数里边只有三个变量和一个函数方法，<code>__webpack_modules__</code>存放了编译后的各个文件模块的JS内容，<code>__webpack_module_cache__</code> 用来做模块缓存，<code>__webpack_require__</code> 是Webpack内部实现的一套依赖引入函数。最后一句则是代码运行的起点，从入口文件开始，启动整个项目。</p><p><code>__webpack_require__</code>模块引入函数，我们在模块化开发的时候，通常会使用<code>ES Module</code>或者<code>CommonJS</code>规范导出/引入依赖模块，webpack打包编译的时候，会统一替换成自己的<code>__webpack_require__</code>来实现模块的引入和导出，从而实现模块缓存机制，以及抹平不同模块规范之间的一些差异性。</p>`,40)]))}const k=i(l,[["render",p],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/article/gq88mn6a/","title":"webpack原理的简单入门","lang":"zh-CN","frontmatter":{"title":"webpack原理的简单入门","createTime":"2021/03/21 06:13:07","author":"pengzhanbo","tags":["node","webpack"],"permalink":"/article/gq88mn6a/","description":"webpack 前言 我们知道， webpack 作为前端工程化中，主流的模块打包工具之一，应用于各种各样的前端工程化项目中。 虽然大多数项目都或多或少会使用到 webpack， 但是可能对于大多数的 前端开发人员来说， 可能只是改改 webpack 的配置， 或者甚至从未动过 webpack 的相关文件, 或多或少对 webpack 的配置以及功能感...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/article/gq88mn6a/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"webpack原理的简单入门"}],["meta",{"property":"og:description","content":"webpack 前言 我们知道， webpack 作为前端工程化中，主流的模块打包工具之一，应用于各种各样的前端工程化项目中。 虽然大多数项目都或多或少会使用到 webpack， 但是可能对于大多数的 前端开发人员来说， 可能只是改改 webpack 的配置， 或者甚至从未动过 webpack 的相关文件, 或多或少对 webpack 的配置以及功能感..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.webpackjs.com/icon-square-small.85ba630cf0c5f29ae3e3.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:tag","content":"webpack"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webpack原理的简单入门\\",\\"image\\":[\\"https://www.webpackjs.com/icon-square-small.85ba630cf0c5f29ae3e3.svg\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"webpack是什么","slug":"webpack是什么","link":"#webpack是什么","children":[]},{"level":2,"title":"模块打包原理","slug":"模块打包原理","link":"#模块打包原理","children":[{"level":3,"title":"入口（entry）","slug":"入口-entry","link":"#入口-entry","children":[]},{"level":3,"title":"输出(output)","slug":"输出-output","link":"#输出-output","children":[]},{"level":3,"title":"加载器（Loader）","slug":"加载器-loader","link":"#加载器-loader","children":[]},{"level":3,"title":"插件（Plugin）","slug":"插件-plugin","link":"#插件-plugin","children":[]},{"level":3,"title":"模块（modules）","slug":"模块-modules","link":"#模块-modules","children":[]},{"level":3,"title":"模块打包运行原理","slug":"模块打包运行原理","link":"#模块打包运行原理","children":[]}]}],"readingTime":{"minutes":6.2,"words":1859},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"1.前端/7.构建工具/webpack原理.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"4b3373","sort":7,"name":"构建工具"}]}`);export{k as comp,d as data};
