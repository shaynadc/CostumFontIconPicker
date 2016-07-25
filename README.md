# CostumFontIconPicker
A font icon picker for custom fonts in Umbraco. This Umbraco plugin serves to optimize your icons with custom icon fonts while still allowing your content editors to choose what icons they want. 

<p>
	<img src="readme/intro-image.png" alt="A font icon picker for custom fonts in Umbraco" />
</p>

## Install
1. Clone into or download plugin
2. Drop folder into your Umbraco "App_Plugins" directory

## Configurations
1. Open the file CustomFontIconPicker/js/iconList.json and add your custom font info, replacing the example code.
```
"twitter": {  //name of icon, for your references
	"name": "Twitter", //name the end user will see
	"class": "twitter" //class that the font icon uses to call in CSS
}
```