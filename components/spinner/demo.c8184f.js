(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1418:function(n,a,s){n.exports={basic:s(1555)}},1555:function(n,a){n.exports={content:["article",["p","结合卡片使用："],["pre",{lang:"jsx",highlighted:'  <span class="token keyword">const</span> <span class="token punctuation">[</span>spinning<span class="token punctuation">,</span> setSpinning<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">"80%"</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spinner</span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>\n        <span class="token attr-name">spinning</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>spinning<span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card.Header</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>个人信息<span class="token punctuation">"</span></span>\n            <span class="token attr-name">topContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>\n              <span class="token operator">&lt;</span>Button\n                leftIcon<span class="token operator">=</span><span class="token string">"refresh"</span>\n                onClick<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                  <span class="token function">setSpinning</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setSpinning</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token punctuation">></span></span>\n                点击刷新\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span>\n            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> boxShadow<span class="token punctuation">:</span> <span class="token string">"0 1px 0 0 rgba(0, 0, 0, 0.06)"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> \n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">"32px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">itemStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">"8px"</span><span class="token punctuation">,</span> fontSize<span class="token punctuation">:</span> <span class="token string">"13px"</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">"#636363"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">labelSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">labelStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">"16px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>微信广告助手<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>城市<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>深圳市<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>性别<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>电子邮箱<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>donon@gmail<span class="token punctuation">.</span>com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span> \n        <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/** 请忽略这个 style 标签 😊 */</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }`</span></span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Spinner</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>'},["code",'  const [spinning, setSpinning] = useState(false)\n\n  return (\n    <section style={{ width: "80%"}}>\n      <Spinner\n        size="medium"\n        spinning={spinning}\n      >\n        <Card>\n          <Card.Header\n            title="个人信息"\n            topContent={(\n              <Button\n                leftIcon="refresh"\n                onClick={() => {\n                  setSpinning(true)\n                  setTimeout(() => setSpinning(false), 1000)\n                }}\n              >\n                点击刷新\n              </Button>\n            )}\n            style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.06)" }} \n          />\n          <Form\n            style={{ padding: "32px" }}\n            itemStyle={{ marginBottom: "8px", fontSize: "13px", color: "#636363" }}\n            labelSize={4}\n            labelStyle={{ marginRight: "16px" }}\n          >\n            <Form.Item label="名称">微信广告助手</Form.Item>\n            <Form.Item label="城市">深圳市</Form.Item>\n            <Form.Item label="性别">女</Form.Item>\n            <Form.Item label="电子邮箱">donon@gmail.com</Form.Item>\n          </Form>\n        </Card> \n        {/** 请忽略这个 style 标签 😊 */}\n        <style dangerouslySetInnerHTML={{ __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }` }} />\n      </Spinner>\n    </section>\n  )']]],meta:{order:0,title:{"zh-CN":"示例","en-US":"Type"},filename:"components/spinner/demo/basic.md"}}}}]);