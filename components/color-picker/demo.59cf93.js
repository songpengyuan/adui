(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1281:function(n,s,a){n.exports={basic:a(1358)}},1358:function(n,s){n.exports={content:["article",["p","配合 ",["code","localstorage"]," 记录最近使用的颜色："],["pre",{lang:"jsx",highlighted:'  <span class="token keyword">const</span> storage <span class="token operator">=</span> localStorage<span class="token punctuation">[</span><span class="token string">"adui-recent-colors"</span><span class="token punctuation">]</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>recentColors<span class="token punctuation">,</span> setRecentColors<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>storage <span class="token operator">?</span> storage<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"#07C160"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> colorPickerRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span>\n      <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>colorPickerRef<span class="token punctuation">}</span></span>\n      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#07C160<span class="token punctuation">"</span></span>\n      <span class="token attr-name">recentColors</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>recentColors<span class="token punctuation">}</span></span>\n      <span class="token attr-name">onFinishChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>recentColors<span class="token punctuation">]</span>\n        colors<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\n        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"adui-recent-colors"</span><span class="token punctuation">,</span> colors<span class="token punctuation">)</span>\n        <span class="token function">setRecentColors</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span>'},["code",'  const storage = localStorage["adui-recent-colors"]\n  const [recentColors, setRecentColors] = useState(storage ? storage.split(",") : ["#07C160"])\n  const colorPickerRef = useRef(null)\n\n  return (\n    <ColorPicker\n      ref={colorPickerRef}\n      defaultValue="#07C160"\n      recentColors={recentColors}\n      onFinishChange={val => {\n        const colors = [...recentColors]\n        colors.unshift(val)\n        localStorage.setItem("adui-recent-colors", colors)\n        setRecentColors(colors)\n      }}\n    />\n  )']],["h2","Alert"],["h3","关于 recentColors 与 onFinishChange"],["p","你需要配合使用这两个特殊的 Prop 完成对”最近使用“的记录。组件本身不负责也无法记录最近使用，因此你需要在 ",["code","onFinishChange"]," 的时候设置 ",["code","recentColors"],"，继而将 ",["code","recentColors"]," 传递给组件完成展示。",["br"],"你可以选择 ",["code","localStorage"]," ",["strong","简单地"],"实现本地存储的方案。"]],meta:{order:0,title:{"zh-CN":"最近使用","en-US":"recentColors"},filename:"components/color-picker/demo/basic.md"}}}}]);