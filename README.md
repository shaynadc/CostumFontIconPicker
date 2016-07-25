# CostumFontIconPicker
A font icon picker for custom fonts in Umbraco. This Umbraco plugin serves to optimize your icons with custom icon fonts while still allowing your content editors to choose what icons they want. 

<p>
	<img src="readme/intro-image.png" alt="A font icon picker for custom fonts in Umbraco" />
</p>

## Install
<b>Step 1.</b> Clone into or download plugin <br />
<b>Step 2.</b> Drop folder into your Umbraco "App_Plugins" directory

## Configurations
<b>Step 1.</b> Open the file CustomFontIconPicker/js/iconList.json and add each of your custom icons, replacing the example code.
```
"twitter": {  			//name of icon, for your references
	"name": "Twitter", 	//name the end user will see
	"class": "twitter" 	//class that the font icon uses to call in CSS
}
```
<b>Step 2.</b> Open the file CustomFontIconPicker/views/fontIconPicker.html and replace the stylesheet linked there with your own custom font stylesheets. You must have already compiled your fonts from a vectorized format to a font.
Note: I use <a href="http://fontastic.me/" target="_blank">Fontastic.me</a> to create my fonts. It's awesome. They don't even pay me to say so.
```
<link href="https://file.myfontastic.com/icons.css" rel="stylesheet">
```
<b>Step 3.</b> In this same html file, look for the '<i>' tag and replace the CSS selector prefix with whatever prefix your custom font icon uses. My custom font prefix is <em>"icon"</em>.
```
<i class="icon-{{model.value}}"></i>
``` 

## Using
<b>Step 1.</b> In the Umbraco backoffice, create a new Data Type.<br />
<b>Step 2.</b> Name data type whatever you're comfortable with. I named my <em>"Icon Picker"</em>. Save.<br />
<b>Step 3.</b> Open your document type and add new property to the document.
<b>Step 4.</b> Use in your templates like any other property. The property value output is the class that you gave each icon in the JSON doc. I used the following code to add to my template:
```
var icon = "icon- " + @page.fontIconPicker;
<i class="@icon"></i>
```