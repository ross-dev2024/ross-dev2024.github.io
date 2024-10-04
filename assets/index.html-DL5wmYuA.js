import{_ as t,c as a,d as n,o as r}from"./app-Dg_oyx95.js";const i="/images/21.Elasticsearch/54816cbc.png",s={};function c(o,e){return r(),a("div",null,e[0]||(e[0]=[n('<h2 id="転置インデックス" tabindex="-1"><a class="header-anchor" href="#転置インデックス"><span>転置インデックス</span></a></h2><ul><li>転置インデックスの目的<br> 非常に効率的で高速な全文検索を可能にする構造にテキストを格納することです。</li></ul><h3 id="いつ作成" tabindex="-1"><a class="header-anchor" href="#いつ作成"><span>いつ作成</span></a></h3><p>インデックスにドキュメントが登録された際、転置インデックスを作成します。</p><h3 id="どのように作成" tabindex="-1"><a class="header-anchor" href="#どのように作成"><span>どのように作成</span></a></h3><p>それぞれのフィールドの、各テキストに対して、テキストを分割し単語を取得する処理 を適用し、取得した単語をキーにするという方法で転置インデックスは作成されています。</p><h3 id="全体のながれ" tabindex="-1"><a class="header-anchor" href="#全体のながれ"><span>全体のながれ</span></a></h3><p><img src="'+i+'" alt=""></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2><ul><li><a href="https://qiita.com/y_tom/items/d5fde34b45575a1fa6fd#%E8%BB%A2%E7%BD%AE%E3%82%A4%E3%83%B3%E3%83%87%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E6%9C%89%E7%94%A8%E6%80%A7%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" target="_blank" rel="noopener noreferrer">[Elasticsearch] 転置インデックスの詳解 と マーケットプレイスのAnalyzer設計パターン</a></li><li><a href="https://codingexplained.com/coding/elasticsearch/understanding-the-inverted-index-in-elasticsearch" target="_blank" rel="noopener noreferrer"> Understanding the Inverted Index in Elasticsearch Published on May 5, 2018 by Bo Andersen </a></li><li><a href="https://www.devinline.com/2018/09/elasticsearch-inverted-index-and-its-storage.html" target="_blank" rel="noopener noreferrer">Elasticsearch Inverted index(Analysis)</a></li></ul>',10)]))}const d=t(s,[["render",c],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/es/elastic0102/","title":"転置インデックス","lang":"zh-CN","frontmatter":{"title":"転置インデックス","author":"ross","createTime":"2020-05-11T13:59:38.000Z","permalink":"/es/elastic0102/","description":"転置インデックス 転置インデックスの目的 非常に効率的で高速な全文検索を可能にする構造にテキストを格納することです。 いつ作成 インデックスにドキュメントが登録された際、転置インデックスを作成します。 どのように作成 それぞれのフィールドの、各テキストに対して、テキストを分割し単語を取得する処理 を適用し、取得した単語をキーにするという方法で転置インデ...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://wangjw.cn/es/elastic0102/"}],["meta",{"property":"og:site_name","content":"ross.dev"}],["meta",{"property":"og:title","content":"転置インデックス"}],["meta",{"property":"og:description","content":"転置インデックス 転置インデックスの目的 非常に効率的で高速な全文検索を可能にする構造にテキストを格納することです。 いつ作成 インデックスにドキュメントが登録された際、転置インデックスを作成します。 どのように作成 それぞれのフィールドの、各テキストに対して、テキストを分割し単語を取得する処理 を適用し、取得した単語をキーにするという方法で転置インデ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wangjw.cn/images/21.Elasticsearch/54816cbc.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T16:10:48.000Z"}],["meta",{"property":"article:author","content":"ross"}],["meta",{"property":"article:modified_time","content":"2024-09-29T16:10:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"転置インデックス\\",\\"image\\":[\\"https://wangjw.cn/images/21.Elasticsearch/54816cbc.png\\"],\\"dateModified\\":\\"2024-09-29T16:10:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ross\\"}]}"]]},"headers":[{"level":2,"title":"転置インデックス","slug":"転置インデックス","link":"#転置インデックス","children":[{"level":3,"title":"いつ作成","slug":"いつ作成","link":"#いつ作成","children":[]},{"level":3,"title":"どのように作成","slug":"どのように作成","link":"#どのように作成","children":[]},{"level":3,"title":"全体のながれ","slug":"全体のながれ","link":"#全体のながれ","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":0.55,"words":164},"git":{"createdTime":1727601543000,"updatedTime":1727626248000,"contributors":[{"name":"wangjw","email":"wangjw","commits":1}]},"autoDesc":true,"filePathRelative":"notes/21.Elasticsearch/1.concept/2.転置インデックス.md"}`);export{d as comp,p as data};
