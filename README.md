# starwarsjs
StarWarsJS is a jQuery based plugin for settings stars for feedback. 

<section class="features">
            <h3>Features</h3>
            <p>
                StarWarsJS is a lightweight jQuery-plugin to set feedback stars.
                It allows to have infinite number of rows and stars in it.
                Also, one can set various range of rate numbers if needed. 
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
<div class="rate_row"></div>
```
Input element takes rate values from data-value attributes after a certain star was clicked. Therefore you should specify desired rate range there. The code written above will provide rate from 1 to 5, according to values written in data-value attributes.

<h3>Initialize StarWarsJS.js</h3>
The class names of row and single star item should be included in selector in order to initialize the plugin. Note: Do not forget to wrap code inside $( document ).ready(). All you need is to fetch values from input fields written in code.

```js
    $(' .rate_row ').starwarsjs();   
    
```
StarWarJS will generate following html code after initialization.
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
The values inside data-value attributes are defined according to the number of stars provided in options. Input element takes rate values from data-value attributes after a certain star was clicked.
                    
<h3>Options</h3>
```js
	$(' .rate_row ').centipedejs({
		stars :  5,
		range :  [2, 6],
		count :  2,
		disable :  4,
		on_select : function(data){ console.log("write something..."); }
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
        <td>stars:</td>
        <td>5</td>
        <td>Set the number of stars per row. </td>
    </tr>
    <tr>
        <td>range:</td>
        <td>[]</td>
        <td class="value">By default the values of per star are starting from one and ending with the number of stars. By activating "range" option it is possible to define different start and end values for rate's range. The first element of array stands for the start value and the last element of array stands for the end value of range. </td>
    </tr>
    <tr>
        <td>count:</td>
        <td>1</td>
        <td>Initially the values of rate are incrementing by one. In case you want to increment rate values by another number then the choice is yours. </td>
    </tr>
    <tr>
        <td>disable:</td>
        <td>0</td>
        <td>"disable" option allows to have inactive star icons which are not clickable. When a number bigger than zero is set for this option then all next values till the end of defined range are becoming disabled. 
<b>Note*:</b> the number of disabled star icons should not exceed the stars or the value of the last element of a range array. </td>
    </tr>
    <tr>
        <td>default_stars:</td>
        <td>0</td>
        <td>In case user wants to have active items by default then "default_stars" option is ready. 
        Just set the desired number of stars here. This option will display active stars on load and add "default-stars" attribute to the sibling input which will show the number of stars loaded by default.
        <b><i>Note:</i></b> the number of default stars should not overlap with the number of disabled stars.
        In other words the number of default stars should be less than the number of disabled stars
        as both options are changing items located to the next </td>
    </tr>
    <tr>
    		<td>on_select:</td>
        	<td>null</td>
	    <td>
	    	Due to "on_select" option one can retrieve selected star's value or pass needed data to the plugin.
	    	<i>For more info check presentations below:</i>
	    </td>
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

<h3>Set Default Stars</h3>
<p>Set desired number of default stars to have them on load.</p>
<img src="https://cloud.githubusercontent.com/assets/2904795/18434022/b93e2568-78fb-11e6-9c54-ff42bdb6f36e.gif" alt="Set Default Stars">

<h3>Benefits Of On_Select Option</h3>
<p>Fetch selected element's value or pass data to plugin if needed.</p>
<img src="https://cloud.githubusercontent.com/assets/2904795/18435454/5e1ef528-7904-11e6-9541-906b11b345bd.gif" alt="Benefits Of On_Select Option">
</section>

