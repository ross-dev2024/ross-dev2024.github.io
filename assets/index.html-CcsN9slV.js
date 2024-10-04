import{_ as t,c as a,d as n,o}from"./app-Dg_oyx95.js";const r={};function i(d,e){return o(),a("div",null,e[0]||(e[0]=[n('<p><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/vue-%402-brightgreen" alt="vue@2"></a></p><div class="hint-container tip"><p class="hint-container-title">提问</p><p>在vue2的组件中，data为什么必须是一个函数</p></div><h2 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data</span></a></h2><p>因为一个组件可能会产生多个组件实例，而每个组件实例都应该拥有私有的数据空间， 也就是说每个组件实例的data应该是相互独立的。</p><p>将 <code>data</code> 使用函数的形式返回一个对象，这样每个组件实例都会获取一个新的 数据对象。</p>',5)]))}const s=t(r,[["render",i],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/interview-question/rumwg3ew/","title":"data为什么必须是函数","lang":"zh-CN","frontmatter":{"title":"data为什么必须是函数","createTime":"2022/04/23 02:53:20","author":"pengzhanbo","permalink":"/interview-question/rumwg3ew/","description":"vue@2 提问 在vue2的组件中，data为什么必须是一个函数 data 因为一个组件可能会产生多个组件实例，而每个组件实例都应该拥有私有的数据空间， 也就是说每个组件实例的data应该是相互独立的。 将 data 使用函数的形式返回一个对象，这样每个组件实例都会获取一个新的 数据对象。","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/interview-question/rumwg3ew/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"data为什么必须是函数"}],["meta",{"property":"og:description","content":"vue@2 提问 在vue2的组件中，data为什么必须是一个函数 data 因为一个组件可能会产生多个组件实例，而每个组件实例都应该拥有私有的数据空间， 也就是说每个组件实例的data应该是相互独立的。 将 data 使用函数的形式返回一个对象，这样每个组件实例都会获取一个新的 数据对象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/badge/vue-%402-brightgreen"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T09:19:03.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-09-29T09:19:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"data为什么必须是函数\\",\\"image\\":[\\"https://img.shields.io/badge/vue-%402-brightgreen\\"],\\"dateModified\\":\\"2024-09-29T09:19:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"data","slug":"data","link":"#data","children":[]}],"readingTime":{"minutes":0.46,"words":139},"git":{"createdTime":1727601543000,"updatedTime":1727601543000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/面试题/Vue/v2/data为什么必须是函数.md"}`);export{s as comp,p as data};
