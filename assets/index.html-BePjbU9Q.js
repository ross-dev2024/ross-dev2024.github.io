import{_ as t,c as i,d as n,o}from"./app-Dg_oyx95.js";const a={};function c(r,e){return o(),i("div",null,e[0]||(e[0]=[n('<div class="hint-container tip"><p class="hint-container-title">提问</p><ol><li>nextTick 是什么？</li><li>nextTick 的实现原理？</li><li>nextTick 的作用？</li></ol></div><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h2><p>此题考查 对 <code>vue</code> 异步更新队列的理解。</p><h2 id="回答" tabindex="-1"><a class="header-anchor" href="#回答"><span>回答</span></a></h2><blockquote><p><strong>官方定义：</strong></p><p>当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。</p><p>nextTick() 可以在状态改变后立即使用，以等待 DOM 更新完成。你可以传递一个回调函数作为参数，或者 await 返回的 Promise。</p></blockquote><ol><li><p>nextTick是Vue提供的一个全局API，由于vue的异步更新策略导致我们对数据的修改不会立刻体现在dom变化上，此时如果想要立即获取更新后的dom状态，就需要使用这个方法。</p></li><li><p>当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中， 直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。 本质上， nextTick 会被添加到 队列的最后再执行，而如果队列为空，则 nextTick 就是一个 普通的 promise 。</p></li><li><p>当需要在数据发生变更后，立即获取更新后的dom状态、修改dom时，可以使用 nextTick() 方法。</p></li></ol>',6)]))}const s=t(a,[["render",c],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/interview-question/e3adhfty/","title":"nextTick","lang":"zh-CN","frontmatter":{"title":"nextTick","author":"鹏展博","createTime":"2022/04/25 19:28:09","permalink":"/interview-question/e3adhfty/","description":"提问 nextTick 是什么？ nextTick 的实现原理？ nextTick 的作用？ 分析 此题考查 对 vue 异步更新队列的理解。 回答 官方定义： 当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/interview-question/e3adhfty/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"nextTick"}],["meta",{"property":"og:description","content":"提问 nextTick 是什么？ nextTick 的实现原理？ nextTick 的作用？ 分析 此题考查 对 vue 异步更新队列的理解。 回答 官方定义： 当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"鹏展博"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nextTick\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[{"level":2,"title":"分析","slug":"分析","link":"#分析","children":[]},{"level":2,"title":"回答","slug":"回答","link":"#回答","children":[]}],"readingTime":{"minutes":1.34,"words":402},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/面试题/Vue/v3/nextTick.md"}`);export{s as comp,p as data};
