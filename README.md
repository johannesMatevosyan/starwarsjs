<style>
.markdown-body img {
	border: 2px solid red;
}
</style>
# starwarsjs
StarWarsJS is a lightweight jQuery-plugin to set stars for feedback. 
It allows to have infinite number of rows and stars in it. 
Also, one can set various range of rate numbers if needed.

<section class="features">
            <h3>Features</h3>
            <p>
                StarWarsJS is a lightweight jQuery-plugin to set stars for feedback.
                It is possible to have infinite number of rows and stars in it.
                Also, one can set various range of rate numbers. 
            </p> 
            <div>
                        <p style="text-align: center;">
<img src="https://cloud.githubusercontent.com/assets/2904795/18429852/be8d0efe-78e6-11e6-8aeb-3cc2ac8c9abe.gif" alt="Intro">
</p>
            </div>

            
<h3>Browser support</h3>
<div class="section_content">
<ul class="browser_support_list">
    <li><span>Firefox</span></li>
    <li><span>Chrome</span></li>
    <li><span>Internet Explorer 9+</span></li>
    <li><span>Opera</span></li>
</ul>
</div>
<br/>
<p>
Star icons are based on fonts which gives freedom to change the size and color of a certain icon by re-writing default CSS styles. Enjoy! :)
</p>
<div class="gif">
<img src="https://cloud.githubusercontent.com/assets/2904795/18431942/7591f7d2-78f0-11e6-85ff-dd0082b19777.gif" alt="options"/>
</div>
</section>

<section>
<h3>Installation</h3>

First of all download and unpack zip file from github repository. Then include the CSS at the top of your page in your tag:

```css

    <link href="path/to/starwars.css" rel="stylesheet">   
    
```

 Make sure to include jQuery in your page:

```js

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js">    
    
```
Write your HTML:
``` html
<div class="rate_row"> <!-- Wrap stars in a row -->
	<span class="rate_star" data-value="1"></span> <!-- Single Star -->
	<span class="rate_star" data-value="2"></span>
	<span class="rate_star" data-value="3"></span>
	<span class="rate_star" data-value="4"></span>
	<span class="rate_star" data-value="5"></span>
	<input type="hidden" class="get_star" value="">
</div> 
```
Input element takes rate values from data-value attributes after a certain star was clicked. Therefore you should specify desired rate range there. The code written above will provide rate from 1 to 5, according to values written in data-value attributes.

<h3>Initialize StarWarsJS.js</h3>
The class names of row and single star item should be included in selector in order to initialize the plugin. Note: Do not forget to wrap code inside $( document ).ready(). All you need is to fetch values from input fields written in code.

```js
    $(' .rate_row ').starwarsjs();   
    
```
</section>
