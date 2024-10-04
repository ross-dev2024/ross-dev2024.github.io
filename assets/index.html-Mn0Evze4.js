import{_ as t,c as a,d as p,o as r}from"./app-Dg_oyx95.js";const i={};function s(o,e){return r(),a("div",null,e[0]||(e[0]=[p(`<p>这是一篇在我个人工作实践中，在我参与的，负责的项目、团队协作中，逐步调整，适合于一些实际场景的 git 工作流实践。</p><p>众所周知，在软件开发中， git 是目前使用最广泛的 软件版本管理工具，它足够高效，足够安全，也足够灵活， 对于团队协作和软件管理提供了很大的帮助。</p><p>而一个良好的合适的 分支管理方案，可以更好的帮助我们通过 git 进行 软件版本管理。</p><p>在过去， git-flow 是一个很流行的 分支管理方案。对于多人协作，中大型项目，提供了一个较为满意的解决方案。</p><p>但在我过去的实践中，逐渐感受到 git-flow 对于我来说还是太过于繁杂了，虽然在事实上满足了 我对于项目的软件版本管理， 但认为还是可以做一些简化，调整 分支管理策略，以更好的适配实际的开发工作。</p><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span>场景</span></a></h2><p>试想一下，在我们实际的软件开发过程中，迭代一个软件的版本，正常来说是：</p><div class="language-txt" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>需求评审 -&gt; 需求确认 -&gt; 开发阶段 -&gt;</span></span>
<span class="line"><span>测试环境测试 -&gt; 预生产发布验证 -&gt; 生产环境发布验证 -&gt; 发布完成</span></span></code></pre></div><h3 id="从开发到发布" tabindex="-1"><a class="header-anchor" href="#从开发到发布"><span>从开发到发布</span></a></h3><p>在这个过程中，如果在 测试环境发现了 bug，需要重新回归到 开发阶段进行修复， 同样的，在预生产发布验证环节发现了问题，也需要重新回归到 开发阶段修复后，重新测试和发布预生产。</p><p>而如果 生产环境发布验证 出现了问题， 需要紧急回滚到上一个版本，并重新回到开发阶段修复，测试，预生产验证，再生产发布。</p><h3 id="需求明确-or-变更" tabindex="-1"><a class="header-anchor" href="#需求明确-or-变更"><span>需求明确 or 变更</span></a></h3><p>虽然我们一直强调，版本迭代进入开发后，这个版本的需求应该是明确的。</p><p>然而，这仅仅只是理想情况下，实际过程中经常会遇到 需求变更，甚至是 添加新的功能，删除功能等。 这种变更，还很难控制会发生在开发阶段还是测试阶段。</p><p>也许我们会吐槽甚至抱怨这样的容易变更需求的项目管理很糟糕，很不专业。但是，这也是确确实实存在的场景， 即使再成熟的团队，也会不可避免的遇到这种问题。</p><p>然而需求变更也不代表着一定是上面这种场景。</p><h3 id="周期性版本发布-需求池" tabindex="-1"><a class="header-anchor" href="#周期性版本发布-需求池"><span>周期性版本发布，需求池</span></a></h3><p>有些项目可能相对来说比较成熟，或者采用了不同的版本迭代方式。</p><p>周期性版本发布指，采用某个固定的周期内，仅会也一定会发布一个版本，如 每两周发布一个版本。 那么在这种模式下，每个版本上线哪些功能，上线多少功能，实际上是以各个功能的开发进度，和进入到当前周期后， 明确下来的版本计划再决定的。</p><p>将产品 明确划分为一个个需求，建立一个需求池，并指定了每个需求的按时间的线性迭代预期计划， 在预期的未来的周期性的版本发布中，会上线哪些需求功能。</p><p>在这种场景下，我们不可能把需求都集中在某个分支上进行开发，仅有的一个 develop分支也很难满足所有的 开发合并和测试。</p><h3 id="开发人员对于-git的掌握" tabindex="-1"><a class="header-anchor" href="#开发人员对于-git的掌握"><span>开发人员对于 git的掌握</span></a></h3><p>很多时候，对于工具能够使用到什么程度，对于项目能够有多少帮助，其实不在于 工具有多优秀，而是在于团队成员 对于工具的平均掌握程度，已经是否有成熟的规范化的操作流程。</p><p>早期我认为 成员对于 git 的掌握是大差不差的，只要说明一些操作流程即可，未加以限制和规范</p><p>然而，这会也给项目带来了潜在的风险：主要分支可能会被误操作污染，多个功能直接在同一个分支开发等等。</p><p>而为了解决这些问题，需要建立一套足够完善，同时低复杂度的操作规范，并对人员和分支加以权限控制。</p><h2 id="分支管理实践" tabindex="-1"><a class="header-anchor" href="#分支管理实践"><span>分支管理实践</span></a></h2><p>在以上的场景中，逐渐摸索出了一套合适的分支管理方案：</p><ul><li><p><code>master</code> 分支： 主分支，正式版本的代码提交记录。</p><p>永远不会在上面做任何改动提交，也仅接受来自 <code>release</code> 分支的合并请求，合并后打上版本tag。</p></li><li><p><code>release</code> 分支：发布分支，用于发布版本到预生产和生产环境，发布完成后合并到 master分支。</p><p>永远不会咋上面做任何改动提交，也仅接受来自 prerelease 分支的合并请求。</p></li><li><p><code>prerelease/*</code> 分支组： 预发布分支，根据版本号创建新的分支。</p><p>仅合并当前版本关联的 <code>feature/*</code> 分支，用于合并开发完成的需求，进入到版本测试阶段，发布到测试环境。 不会或者尽可能少的在上面做任何改动提交。</p></li><li><p><code>feature/*</code> 分支组： 功能开发分支(包括hotfix)，从 master 分支拉取创建的分支，</p><p>每个分支仅针对某一个单一的业务或者功能，所有的改动都应该在 feature 分支上进行。 仅能合并到 prerelease 分支。 master有更新后需要及时拉取合并同步。</p></li></ul><p>流程图： <img src="https://assets.processon.com/chart_image/6251bfce1efad407891be6c8.png" alt="git-work-flow"></p><p>可以看出，整个方案只有四条主要的分支，且不同功能分支到其他分支都是单向的。</p><p>这样的好处是足够的简单，足够的好理解，也保证了一定的灵活性。</p><p>删除了 develop分支的原因是，单一的develop分支并不能很好的满足 需求变更后导致的 develop分支无效， 选择使用 prerelease 分支组作为替代，可以灵活的根据版本规划创建分支，即使发生需求变更，也可以灵活的直接抛弃 当前已创建的分支，重新新建一条 prerelease分支再次从feature分支合并代码。</p><p>从 develop 改名为 prerelease 也是因为，功能分支开发完后并不是马上合并的，而是根据迭代计划再合并的，理解起来就是 预期上线的功能，即 prerelease。</p><p>从分支的行为上看， master分支和 release分支 似乎可以在简化仅保留一条。但这里是考虑到 如果有发布回滚操作，如果 都在 master 分支上进行，那么master分支的操作记录看起来就不够的干净，简洁，而把发布、回滚等策略都放到了 release分支 ，而 master仅保留干净的版本历史，那么会更加的友好，便于维护。</p><p>在这个方案中，最好是配合上 git分支的权限控制，对 master分支、release分支进行保护，确保这两个分支仅接受来自对应 分支的合并请求。</p><p>分支合并，选择 <code>merge</code> 还是 <code>rebase</code>，这个需要对 commit记录有何要求去考量。 如果需要保证所有提交记录都可追踪，建议使用 merge，如果希望 提交记录线性、整洁，建议使用 rebase。</p><p>同时，feature分支 合并到 prerelease 分支，最好是通过 pull requests 的操作模式，在进入测试阶段前，接受来自其他 有用审查权限的开发人员的code review。</p><div class="hint-container warning"><p class="hint-container-title">说明</p><p>该实践方案仅是我过去在我的工作实践中总结的，并在团队内部经历过超过2年的验证和调整所得出的，适合于当时团队的实践方案。</p><p>是否与您的团队或所在的团队契合，还需要重新考量。</p><p>分支管理方案 需要从实际的情况触发考虑，包括团队人数，产品规模等等。</p><p>没有最好的方案，只有合适自己的方案。</p></div>`,39)]))}const c=t(i,[["render",s],["__file","index.html.vue"]]),l=JSON.parse(`{"path":"/article/cjeo0sia/","title":"git工作流实践","lang":"zh-CN","frontmatter":{"title":"git工作流实践","createTime":"2022/04/18 12:26:46","author":"pengzhanbo","permalink":"/article/cjeo0sia/","tags":["工具"],"banner":"https://assets.processon.com/chart_image/6251bfce1efad407891be6c8.png","description":"这是一篇在我个人工作实践中，在我参与的，负责的项目、团队协作中，逐步调整，适合于一些实际场景的 git 工作流实践。 众所周知，在软件开发中， git 是目前使用最广泛的 软件版本管理工具，它足够高效，足够安全，也足够灵活， 对于团队协作和软件管理提供了很大的帮助。 而一个良好的合适的 分支管理方案，可以更好的帮助我们通过 git 进行 软件版本管理。...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/article/cjeo0sia/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"git工作流实践"}],["meta",{"property":"og:description","content":"这是一篇在我个人工作实践中，在我参与的，负责的项目、团队协作中，逐步调整，适合于一些实际场景的 git 工作流实践。 众所周知，在软件开发中， git 是目前使用最广泛的 软件版本管理工具，它足够高效，足够安全，也足够灵活， 对于团队协作和软件管理提供了很大的帮助。 而一个良好的合适的 分支管理方案，可以更好的帮助我们通过 git 进行 软件版本管理。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://assets.processon.com/chart_image/6251bfce1efad407891be6c8.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://assets.processon.com/chart_image/6251bfce1efad407891be6c8.png"}],["meta",{"name":"twitter:image:alt","content":"git工作流实践"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git工作流实践\\",\\"image\\":[\\"https://assets.processon.com/chart_image/6251bfce1efad407891be6c8.png\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"场景","slug":"场景","link":"#场景","children":[{"level":3,"title":"从开发到发布","slug":"从开发到发布","link":"#从开发到发布","children":[]},{"level":3,"title":"需求明确 or 变更","slug":"需求明确-or-变更","link":"#需求明确-or-变更","children":[]},{"level":3,"title":"周期性版本发布，需求池","slug":"周期性版本发布-需求池","link":"#周期性版本发布-需求池","children":[]},{"level":3,"title":"开发人员对于 git的掌握","slug":"开发人员对于-git的掌握","link":"#开发人员对于-git的掌握","children":[]}]},{"level":2,"title":"分支管理实践","slug":"分支管理实践","link":"#分支管理实践","children":[]}],"readingTime":{"minutes":6.96,"words":2089},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"1.前端/2.工具/git工作流实践.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"8d7e99","sort":2,"name":"工具"}]}`);export{c as comp,l as data};
