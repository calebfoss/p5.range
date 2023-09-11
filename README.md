<h1>p5.range</h1>
<p>
  An add-on for <a href="https://p5js.org">p5.js</a> with a range function,
  offering an alternative way to repeat steps from standard
  <a href="https://p5js.org/reference/#/p5/for">for</a> and
  <a href="https://p5js.org/reference/#/p5/while">while</a> loops.
</p>

<p>
  The function's design aims to simplify syntax and prevent infinite loops. It
  works similarly to
  <a href="https://www.w3schools.com/python/ref_func_range.asp"
    >Python's range function</a
  >.
</p>

<h2>Installation</h2>
<h3>p5 Editor Template</h3>
<p>
  You can use
  <a href="https://editor.p5js.org/cfoss/sketches/XGiDO1YgW" target="_blank"
    >this template</a
  >
  by signing in to the editor, opening the template, and clicking File &gt;
  Duplicate.
</p>

<h3>Script Tag</h3>
<p>
  On an existing p5 sketch, you can add the range add-on by editing the
  index.html file and adding the following script tag:
</p>
<code>
  &lt;script
  src="https://cdn.jsdelivr.net/gh/calebfoss/p5.range@latest/p5.range.js"&gt;&lt;/script&gt;
</code>
<h4>Example index.html</h4>

<code>
  <pre>
    &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.min.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;https://cdn.jsdelivr.net/gh/calebfoss/p5.range@latest/p5.range.js&quot;&gt;&lt;/script&gt;
        &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt;
        &lt;meta charset=&quot;utf-8&quot; /&gt;<br/>
    &lt;/head&gt;
    &lt;body&gt;
        &lt;main&gt;
        &lt;/main&gt;
        &lt;script src=&quot;sketch.js&quot;&gt;&lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
</pre>
</code>

## Functions

<dl>
<dt><a href="#range">range(stop)</a> ⇒ <code>object</code></dt>
<dd><p>Creates an <a
href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators">
iterator</a>, which is an object that produces a sequence of values.
This may be used in a <a
href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">
for...of</a> loop.</p>
</dd>
<dt><a href="#range">range(start, stop, [increment])</a> ⇒ <code>object</code></dt>
<dd></dd>
</dl>

<a name="range"></a>

## range(stop) ⇒ <code>object</code>
Creates an <a
href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators">
iterator</a>, which is an object that produces a sequence of values.
This may be used in a <a
href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">
for...of</a> loop.

**Kind**: global function  
**Returns**: <code>object</code> - Iterator that returns values from 0 to stop with
each value 1 apart.  

| Param | Type | Description |
| --- | --- | --- |
| stop | <code>number</code> | when the range reaches or goes past this value, it will stop returning values |

**Example**  
```js
for(let i of range(100)) {
 circle(random(width), random(height), random(100));
}
describe("100 circles with random sizes and positions.")
```
<a name="range"></a>

## range(start, stop, [increment]) ⇒ <code>object</code>
**Kind**: global function  
**Returns**: <code>object</code> - Iterator that returns values from start to stop with
each value increment apart.  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | initial value |
| stop | <code>number</code> | when the range reaches or goes past this value, it will stop returning values |
| [increment] | <code>number</code> | change between each value (default is 1 or -1 depending on whether stop is greater than or less than start) (Optional) |

**Example**  
```js
for(let x of range(25, width, 50)) {
 circle(x, height / 2, 50);
}
describe("A row of circles spanning the width of " +
"the canvas halfway down the canvas.");
```
