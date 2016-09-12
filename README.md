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
<img src="https://cloud.githubusercontent.com/assets/2904795/18431942/7591f7d2-78f0-11e6-85ff-dd0082b19777.gif" alt="options"/>
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

<h3>Options</h3>
```js
	$(' .rate_row ').centipedejs({
		stars :  5,
		range :  [2, 6],
		count :  2,
		disable :  4,
	});
```

<h3>Options</h3>
<table class="options_list">
    <tr>
        <td><h4>Option</h4></td>
        <td><h4>Default</h4></td>
        <td><h4>Description</h4></td>
    </tr>
    <tr>
        <td class="key">stars:</td>
        <td class="default">5</td>
        <td class="value">Set the number of stars per row. </td>
    </tr>
    <tr>
        <td class="key">range:</td>
        <td class="default">[]</td>
        <td class="value">By default the values of per star are starting from one and ending with the number of stars. By activating "range" option it is possible to define different start and end values for rate's range. The first element of array stands for the start value and the last element of array stands for the end value of range. </td>
    </tr>
    <tr>
        <td class="key">count:</td>
        <td class="default">1</td>
        <td class="value">Initially the values of rate are incrementing by one. In case you want to increment rate values by another number then the choice is yours. </td>
    </tr>
    <tr>
        <td class="key">disable:</td>
        <td class="default">0</td>
        <td class="value">"disable" option allows to have inactive star icons which are not clickable. When a number bigger than zero is set for this option then all next values till the end of defined range are becoming disabled. 
<b>Note*:</b> the number of disabled star icons should not exceed the stars or the value of the last element of a range array. </td>
    </tr>
    
    <tr>
        <td class="key">default_stars:</td>
        <td class="default">0</td>
        <td class="value">In case user wants to have active items by default then "default_stars" option is ready. Just set the desired number of stars here. This option will add "default-stars" attribute to the sibling inputs.
<b>Note*:</b> the number of default stars should not overlap with the number disabled stars. In other words the number of default stars should be less than the number disabled stars. For more info check presentations below: </td>
    </tr>
</table>

<h3>Set stars</h3>
<p>Write random number of stars for a certain row.</p>
<img src="https://cloud.githubusercontent.com/assets/2904795/18433768/6829554a-78fa-11e6-937d-80d9d5b19b0c.gif" alt="Set stars">

<h3>Define Range</h3>
<p>Write random number of stars for a certain row.</p>
<img src="https://cloud.githubusercontent.com/assets/2904795/18433837/c6366ea2-78fa-11e6-8858-4fdfdd29638c.gif" alt="Define Range">

<h3>Change The Increment Value</h3>
<p>Change the increment steps value from one (default) to a random.</p>
<img src="https://cloud.githubusercontent.com/assets/2904795/18433880/ffd3d03c-78fa-11e6-889e-a0b6455a2891.gif" alt="Change The Increment Value">

<h3>Disable Icons</h3>
<p>Disable needed amount of icons.</p>
<img src="https://cloud.githubusercontent.com/assets/2904795/18433953/6e0c1dc0-78fb-11e6-850e-ee80e26c6a9f.gif" alt="Disable Icons">
</section>

