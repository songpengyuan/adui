(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1250:function(n,a,s){n.exports={basic:s(1325),buttonGroup:s(1326)}},1325:function(n,a){n.exports={content:["article",["p","点击切换按钮类型 ",["code","intent"],"："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>copied<span class="token punctuation">,</span> setCopied<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n      <span class="token attr-name">leftIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>copied <span class="token operator">?</span> <span class="token string">"tick-circle"</span> <span class="token punctuation">:</span> <span class="token string">"copy-outlined"</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">intent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>copied <span class="token operator">?</span> <span class="token string">"primary"</span> <span class="token punctuation">:</span> <span class="token string">"normal"</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setCopied</span><span class="token punctuation">(</span><span class="token operator">!</span>copied<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>copied <span class="token operator">?</span> <span class="token string">"已复制"</span> <span class="token punctuation">:</span> <span class="token string">"复制代码"</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>'},["code",'const [copied, setCopied] = useState(false)\n\nreturn (\n  <div>\n    <Button\n      leftIcon={copied ? "tick-circle" : "copy-outlined"}\n      intent={copied ? "primary" : "normal"}\n      theme="light"\n      onClick={() => setCopied(!copied)}\n    >\n      {copied ? "已复制" : "复制代码"}\n    </Button>\n  </div>\n)']]],meta:{order:0,title:{"zh-CN":"按钮类型","en-US":"Intent"},filename:"components/button/demo/basic.md"}}},1326:function(n,a){n.exports={content:["article",["p","按钮组 ",["code","Button.Group"]," ："],["pre",{lang:"jsx",highlighted:'  <span class="token keyword">const</span> <span class="token punctuation">[</span>activeIndex<span class="token punctuation">,</span> setActiveIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button.Group</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mr-20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          <span class="token punctuation">[</span><span class="token string">"选项一"</span><span class="token punctuation">,</span> <span class="token string">"选项二"</span><span class="token punctuation">,</span> <span class="token string">"选项三"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span>\n              <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index <span class="token operator">===</span> activeIndex<span class="token punctuation">}</span></span>\n              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setActiveIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token punctuation">{</span> text <span class="token punctuation">}</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button.Group</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button.Group</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          <span class="token punctuation">[</span>\n            <span class="token string">"format-align-left"</span><span class="token punctuation">,</span>\n            <span class="token string">"format-align-center"</span><span class="token punctuation">,</span>\n            <span class="token string">"format-align-right"</span><span class="token punctuation">,</span>\n            <span class="token string">"format-align-justify"</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>icon<span class="token punctuation">}</span></span>\n              <span class="token attr-name">leftIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>icon<span class="token punctuation">}</span></span>\n              <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index <span class="token operator">===</span> activeIndex<span class="token punctuation">}</span></span>\n              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setActiveIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button.Group</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>'},["code",'  const [activeIndex, setActiveIndex] = useState(0)\n\n  return (\n    <React.Fragment>\n      <Button.Group className="mr-20">\n        {\n          ["选项一", "选项二", "选项三"].map((text, index) => (\n            <Button\n              key={text}\n              active={index === activeIndex}\n              onClick={() => setActiveIndex(index)}\n            >\n              { text }\n            </Button>\n          ))\n        }\n      </Button.Group>\n      <Button.Group>\n        {\n          [\n            "format-align-left",\n            "format-align-center",\n            "format-align-right",\n            "format-align-justify",\n          ].map((icon, index) => (\n            <Button\n              key={icon}\n              leftIcon={icon}\n              active={index === activeIndex}\n              onClick={() => setActiveIndex(index)}\n            />\n          ))\n        }\n      </Button.Group>\n    </React.Fragment>\n  )']]],meta:{order:1,title:{"zh-CN":"按钮组","en-US":"Group"},filename:"components/button/demo/buttonGroup.md"}}}}]);