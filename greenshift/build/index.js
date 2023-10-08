!function(){var e={184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var r=o.apply(null,n);r&&e.push(r)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.apply(this,arguments)}var t=window.wp.element,a=n(184),o=n.n(a);wp.hooks.addFilter("blocks.registerBlockType","greenshift/extraglobal",(function(e,t){return void 0!==e.attributes&&("core/cover"!=t&&"core/column"!=t&&"core/columns"!=t&&"core/group"!=t&&"core/image"!=t&&"core/button"!=t||(e.attributes=Object.assign(e.attributes,{gshideOnMobile:{type:"boolean"},gshideOnTablet:{type:"boolean"},gshideOnDesktop:{type:"boolean"}})),"core/group"==t&&(e.attributes=Object.assign(e.attributes,{gsStickyHeader:{type:"boolean"},gsStickyLogoHeight:{type:"number"},gsStickyHeaderUp:{type:"boolean"},gsStickyHeaderShadow:{type:"boolean"},gsStickyBg:{type:"string"},gsStickyColor:{type:"string"}})),"core/template-part"==t&&(e.attributes=Object.assign(e.attributes,{gsHeaderAlpha:{type:"boolean"}})),"core/navigation-submenu"==t&&(e.attributes=Object.assign(e.attributes,{gsSubWidth:{type:"number"},gsSubPadding:{type:"number"},gsPaddingB:{type:"number"},gsId:{type:"string"},gsReusableMenuId:{type:"number"},gsMenuType:{type:"string"},gsMenuImageGap:{type:"number"},gsInheritBg:{type:"boolean"}})),"core/navigation-link"==t&&(e.attributes=Object.assign(e.attributes,{gsReusableMenuId:{type:"number"},gsReusableAjax:{type:"boolean"},gsMenuImageGap:{type:"number"},gsPaddingB:{type:"number"},gsId:{type:"string"}})),"core/navigation"==t&&(e.attributes=Object.assign(e.attributes,{gsReusableMobileTopId:{type:"number"},gsReusableMobileBottomId:{type:"number"},gsPaddingV:{type:"number"},gsPaddingH:{type:"number"},gsMenuHoverColor:{type:"string"},gsMenuHoverBg:{type:"string"},gsSubMenuHoverColor:{type:"string"},gsSubMenuHoverBg:{type:"string"},gsMenuHoverDisableLine:{type:"boolean"},gsId:{type:"string"},gsMenuMobileBg:{type:"string"},gsMenuMobileColor:{type:"string"},gsMenuMobileArrowBg:{type:"string"},gsMenuMobileArrowColor:{type:"string"}}))),e}));const l=wp.compose.createHigherOrderComponent((e=>n=>{const{__:__}=wp.i18n,{ToggleControl:a,ColorPalette:o,BaseControl:l,PanelBody:r,RangeControl:i,SelectControl:s,Button:g}=wp.components,{InspectorAdvancedControls:c,InspectorControls:u}=wp.blockEditor,{attributes:m,setAttributes:d,isSelected:b,clientId:p}=n;if("core/cover"!=n.name&&"core/column"!=n.name&&"core/columns"!=n.name&&"core/group"!=n.name&&"core/image"!=n.name&&"core/button"!=n.name){if("core/template-part"==n.name&&"header"==n.attributes.tagName)return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),b&&(0,t.createElement)(c,null,(0,t.createElement)(a,{label:__("Transparent Header?","greenshift"),checked:!!m.gsHeaderAlpha,onChange:e=>d({gsHeaderAlpha:!m.gsHeaderAlpha})})));if("core/navigation-submenu"==n.name){let o=wp.data.select("core").getEntityRecords("postType","wp_block",{per_page:-1}),c=Array.isArray(o)?o.map((e=>({label:e.title.raw,value:e.id}))):o;return c&&(c=[{label:__("Select Reusable template","greenshift-animation-and-page-builder-blocks"),value:""}].concat(c)),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),b&&(0,t.createElement)(u,null,(0,t.createElement)(r,{title:__("GreenShift Extra Settings","greenshift")},(0,t.createElement)(s,{label:__("Use Megamenu for sub items","greenshift"),value:m.gsMenuType,onChange:e=>d({gsMenuType:e}),options:[{label:__("Select menu type","greenshift"),value:""},{label:__("Columned menu","greenshift"),value:"megamenu"},{label:__("Columned menu from right","greenshift"),value:"megamenuright"},{label:__("Full width menu","greenshift"),value:"megamenufull"}]}),(0,t.createElement)(i,{label:__("Submenu Width","greenshift"),value:m.gsSubWidth,onChange:e=>d({gsSubWidth:e,gsId:p}),min:0,max:1e3,step:1,allowReset:!0}),(0,t.createElement)(i,{label:__("Submenu Padding","greenshift"),value:m.gsSubPadding,onChange:e=>d({gsSubPadding:e,gsId:p}),min:0,max:1e3,step:1,allowReset:!0}),(0,t.createElement)(i,{label:__("Bottom Margin","greenshift"),value:m.gsPaddingB,onChange:e=>d({gsPaddingB:e,gsId:p}),min:0,max:1e3,step:1,allowReset:!0}),(0,t.createElement)(i,{help:__("You can add image into menu label by clicking on arrow in toolbar, then select Inline Image","greenshift"),label:__("Menu image gap","greenshift"),value:m.gsMenuImageGap,onChange:e=>d({gsMenuImageGap:e,gsId:p}),min:0,max:30,step:.1,allowReset:!0}),(0,t.createElement)(l,{help:__("Make sure that you added inner Menu link in sub item with the same Reusable template","greenshift")},(0,t.createElement)(s,{label:__("Ajax loading trigger","greenshift"),value:m.gsReusableMenuId,onChange:e=>d({gsReusableMenuId:parseInt(e)}),options:c}),m.gsReusableMenuId&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(g,{isSecondary:!0,onClick:()=>{let e=[];e.push(wp.blocks.createBlock("core/navigation-link",{label:"MEGAMENU",description:"",url:"MEGAMENU",kind:"custom",isTopLevelLink:!1,gsReusableMenuId:m.gsReusableMenuId,gsReusableAjax:!0})),wp.data.dispatch("core/block-editor").replaceInnerBlocks(p,e,!1)}},__("Create sub item for template","greenshift")),(0,t.createElement)("div",{style:{marginTop:10}}),(0,t.createElement)(a,{label:__("Inherit background from template?","greenshift"),checked:!!m.gsInheritBg,onChange:e=>d({gsInheritBg:!m.gsInheritBg,gsId:p})}))))))}if("core/navigation"==n.name){let g=wp.data.select("core").getEntityRecords("postType","wp_block",{per_page:-1}),c=Array.isArray(g)?g.map((e=>({label:e.title.raw,value:e.id}))):g;return c&&(c=[{label:__("Select Reusable template","greenshift-animation-and-page-builder-blocks"),value:""}].concat(c)),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),b&&(0,t.createElement)(u,null,(0,t.createElement)(r,{title:__("GreenShift Extra Settings","greenshift")},(0,t.createElement)("div",{style:{marginTop:10}}),(0,t.createElement)(a,{label:__("Disable Hover Inline?","greenshift"),checked:!!m.gsMenuHoverDisableLine,onChange:e=>d({gsMenuHoverDisableLine:!m.gsMenuHoverDisableLine,gsId:p})}),(0,t.createElement)("div",{style:{marginBottom:6}},__("Hover color","greenshift")),(0,t.createElement)(o,{label:__("Hover color","greenshift"),value:m.gsMenuHoverColor,onChange:e=>d({gsMenuHoverColor:e,gsId:p}),enableAlpha:!0}),(0,t.createElement)("div",{style:{marginBottom:6}},__("Hover Background color","greenshift")),(0,t.createElement)(o,{label:__("Hover Background color","greenshift"),value:m.gsMenuHoverBg,onChange:e=>d({gsMenuHoverBg:e,gsId:p}),enableAlpha:!0}),(0,t.createElement)("div",{style:{marginBottom:6}},__("Sub menu Hover color","greenshift")),(0,t.createElement)(o,{label:__("Sub menu Hover color","greenshift"),value:m.gsSubMenuHoverColor,onChange:e=>d({gsSubMenuHoverColor:e,gsId:p}),enableAlpha:!0}),(0,t.createElement)("div",{style:{marginBottom:6}},__("Sub menu Hover Background color","greenshift")),(0,t.createElement)(o,{label:__("Sub menu Hover Background color","greenshift"),value:m.gsSubMenuHoverBg,onChange:e=>d({gsSubMenuHoverBg:e,gsId:p}),enableAlpha:!0}),(0,t.createElement)("div",{style:{marginBottom:6}},__("Mobile Menu Background color","greenshift")),(0,t.createElement)(o,{label:__("Mobile Menu Background color","greenshift"),value:m.gsMenuMobileBg,onChange:e=>d({gsMenuMobileBg:e,gsId:p}),enableAlpha:!0}),(0,t.createElement)("div",{style:{marginBottom:6}},__("Mobile Menu text color","greenshift")),(0,t.createElement)(o,{label:__("Mobile Menu text color","greenshift"),value:m.gsMenuMobileColor,onChange:e=>d({gsMenuMobileColor:e,gsId:p}),enableAlpha:!0}),(0,t.createElement)("div",{style:{marginBottom:6}},__("Mobile Menu Arrow Background","greenshift")),(0,t.createElement)(o,{label:__("Mobile Menu Arrow Background","greenshift"),value:m.gsMenuMobileArrowBg,onChange:e=>d({gsMenuMobileArrowBg:e,gsId:p}),enableAlpha:!0}),(0,t.createElement)("div",{style:{marginBottom:6}},__("Mobile Menu Arrow color","greenshift")),(0,t.createElement)(o,{label:__("Mobile Menu Arrow color","greenshift"),value:m.gsMenuMobileArrowColor,onChange:e=>d({gsMenuMobileArrowColor:e,gsId:p}),enableAlpha:!0}),(0,t.createElement)(i,{label:__("Menu Item Padding Vertical","greenshift"),value:m.gsPaddingV,onChange:e=>d({gsPaddingV:e,gsId:p}),min:0,max:50,step:1,allowReset:!0}),(0,t.createElement)(i,{label:__("Menu Item Padding Horizontal","greenshift"),value:m.gsPaddingH,onChange:e=>d({gsPaddingH:e,gsId:p}),min:0,max:50,step:1,allowReset:!0}),(0,t.createElement)("div",{style:{marginTop:10}}),(0,t.createElement)(l,{help:__("This works only on frontend side","greenshift")},(0,t.createElement)(s,{label:__("Mobile Menu top area template","greenshift"),value:m.gsReusableMobileTopId,onChange:e=>d({gsReusableMobileTopId:parseInt(e)}),options:c}),(0,t.createElement)(s,{label:__("Mobile Menu bottom area template","greenshift"),value:m.gsReusableMobileBottomId,onChange:e=>d({gsReusableMobileBottomId:parseInt(e)}),options:c})))))}if("core/navigation-link"==n.name){let o=wp.data.select("core").getEntityRecords("postType","wp_block",{per_page:-1}),l=Array.isArray(o)?o.map((e=>({label:e.title.raw,value:e.id}))):o;return l&&(l=[{label:__("Select Reusable template","greenshift-animation-and-page-builder-blocks"),value:""}].concat(l)),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),b&&(0,t.createElement)(u,null,(0,t.createElement)(r,{title:__("GreenShift Menu Settings","greenshift")},(0,t.createElement)(i,{help:__("You can add image into menu label by clicking on arrow in toolbar, then select Inline Image","greenshift"),label:__("Menu image gap","greenshift"),value:m.gsMenuImageGap,onChange:e=>d({gsMenuImageGap:e,gsId:p}),min:0,max:30,step:.1,allowReset:!0}),(0,t.createElement)(i,{label:__("Bottom Margin","greenshift"),value:m.gsPaddingB,onChange:e=>d({gsPaddingB:e,gsId:p}),min:0,max:1e3,step:1,allowReset:!0}),(0,t.createElement)(s,{label:__("Show Reusable template as Menu item","greenshift"),value:m.gsReusableMenuId,onChange:e=>d({gsReusableMenuId:parseInt(e)}),options:l}),(0,t.createElement)(a,{label:__("Ajax loading?","greenshift"),checked:!!m.gsReusableAjax,onChange:e=>d({gsReusableAjax:!m.gsReusableAjax})}))))}return(0,t.createElement)(e,n)}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),b&&(0,t.createElement)(c,null,"core/group"==n.name&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a,{label:__("Sticky to Head on scroll?","greenshift"),checked:!!m.gsStickyHeader,onChange:e=>d({gsStickyHeader:!m.gsStickyHeader})}),m.gsStickyHeader&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a,{label:__("Sticky only on scroll Up?","greenshift"),checked:!!m.gsStickyHeaderUp,onChange:e=>d({gsStickyHeaderUp:!m.gsStickyHeaderUp})}),(0,t.createElement)(a,{label:__("Disable shadow?","greenshift"),checked:!!m.gsStickyHeaderShadow,onChange:e=>d({gsStickyHeaderShadow:!m.gsStickyHeaderShadow})}),(0,t.createElement)(l,{help:__("Replace Background when header is sticked?","greenshift")},(0,t.createElement)(o,{value:m.gsStickyBg,onChange:e=>d({gsStickyBg:e}),enableAlpha:!0})),(0,t.createElement)(l,{help:__("Replace Text color when header is sticked?","greenshift")},(0,t.createElement)(o,{value:m.gsStickyColor,onChange:e=>d({gsStickyColor:e}),enableAlpha:!0})),(0,t.createElement)(i,{label:__("Logo height for sticky header","greenshift"),value:m.gsStickyLogoHeight,onChange:e=>d({gsStickyLogoHeight:e}),min:10,max:150,step:1,allowReset:!0}))),(0,t.createElement)(a,{label:__("Hide on desktop","greenshift"),checked:!!m.gshideOnDesktop,onChange:e=>d({gshideOnDesktop:!m.gshideOnDesktop})}),(0,t.createElement)(a,{label:__("Hide on tablet","greenshift"),checked:!!m.gshideOnTablet,onChange:e=>d({gshideOnTablet:!m.gshideOnTablet})}),(0,t.createElement)(a,{label:__("Hide on mobile","greenshift"),checked:!!m.gshideOnMobile,onChange:e=>d({gshideOnMobile:!m.gshideOnMobile})})))}),"addFRhideControls");wp.hooks.addFilter("editor.BlockEdit","greenshift/extraglobal-control",l);const r=wp.compose.createHigherOrderComponent((n=>a=>{const{attributes:{gshideOnDesktop:l,gshideOnTablet:r,gshideOnMobile:i,gsStickyHeader:s,gsStickyHeaderUp:g,gsHeaderAlpha:c,gsSubWidth:u,gsReusableMenuId:m,gsMenuType:d,gsMenuImageGap:b,gsSubPadding:p,gsPaddingB:h,gsInheritBg:v,gsMenuHoverDisableLine:k,gsMenuHoverBg:y,gsMenuHoverColor:M,gsSubMenuHoverBg:f,gsSubMenuHoverColor:E,gsPaddingV:w,gsPaddingH:_,gsMenuMobileArrowBg:S,gsMenuMobileArrowColor:H,gsMenuMobileBg:I,gsMenuMobileColor:C},className:B,name:A,clientId:x}=a;if((0,t.useEffect)((()=>{if("megamenufull"==d){const e=document.querySelectorAll('[name="editor-canvas"]');let t=document;for(let n=0;n<e.length;n++)if(null!==e[n].contentDocument.getElementById("block-"+a.clientId)){t=e[n].contentDocument;break}let n=t.querySelectorAll(".wp-block-navigation-item.is-style-gs-megamenufull");for(let e=0;e<n.length;e++){let t=n[e],a=t.getBoundingClientRect(),o=a.y+a.height-.1;t.querySelector(".wp-block-navigation__submenu-container").style.top=o+"px"}}}),[d]),"core/navigation-submenu"==A)return(0,t.createElement)(t.Fragment,null,u&&u>0&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] > .wp-block-navigation__submenu-container, [data-block="${x}"].has-child.is-selected > .wp-block-navigation__submenu-container, [data-block="${x}"].has-child.has-child-selected > .wp-block-navigation__submenu-container { min-width: ${a.attributes.gsSubWidth}px !important; }`}}),p&&p>0&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] > .wp-block-navigation__submenu-container, [data-block="${x}"].has-child.is-selected > .wp-block-navigation__submenu-container, [data-block="${x}"].has-child.has-child-selected > .wp-block-navigation__submenu-container { padding: ${a.attributes.gsSubPadding}px !important; }`}}),v&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] > .wp-block-navigation__submenu-container {background:none !important; box-shadow:none !important; }`}}),h&&h>0&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] { padding-bottom: ${a.attributes.gsPaddingB}px !important; }`}}),b&&b>0&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] > .wp-block-navigation-item__content > .wp-block-navigation-item__label {gap: ${a.attributes.gsMenuImageGap}px !important; }`}}),(0,t.createElement)(n,e({className:o()(B,d&&"megamenu"==d?"is-style-mega-menu-right":"",d&&"megamenuright"==d?"is-style-mega-menu-left":"",d&&"megamenufull"==d?"is-style-gs-megamenufull":"",m?`gs-el-onhover load-block-${m}`:"")},a)));if("core/navigation"==A)return(0,t.createElement)(t.Fragment,null,M&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`@media(min-width:600px){[data-block="${x}"] .wp-block-navigation__container > .wp-block-navigation-item:hover{color: ${a.attributes.gsMenuHoverColor} !important; }}`}}),y&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`@media(min-width:600px){[data-block="${x}"] .wp-block-navigation__container > .wp-block-navigation-item:hover{background-color: ${a.attributes.gsMenuHoverBg} !important; }}`}}),I&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] .wp-block-navigation__responsive-container.is-menu-open{background-color: ${a.attributes.gsMenuMobileBg} !important; }`}}),C&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content.wp-block-navigation-item__content{color: ${a.attributes.gsMenuMobileColor} !important; }[data-block="${x}"] .wp-block-navigation__responsive-container-close svg{fill: ${a.attributes.gsMenuMobileColor} !important;}`}}),S&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__submenu-icon{background-color: ${a.attributes.gsMenuMobileArrowBg} !important; }`}}),H&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-submenu .wp-block-navigation__submenu-icon svg{stroke: ${a.attributes.gsMenuMobileArrowColor} !important; }`}}),w&&w>0&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`@media(min-width:600px){[data-block="${x}"] .wp-block-navigation__container > .wp-block-navigation-item{padding-top: ${a.attributes.gsPaddingV}px; padding-bottom: ${a.attributes.gsPaddingV}px;}}`}}),_&&_>0&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`@media(min-width:600px){[data-block="${x}"] .wp-block-navigation__container > .wp-block-navigation-item{padding-left: ${a.attributes.gsPaddingH}px; padding-right: ${a.attributes.gsPaddingH}px;}}`}}),E&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] .wp-block-navigation__submenu-container > .wp-block-navigation-item:hover{color: ${a.attributes.gsSubMenuHoverColor} !important; }`}}),f&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] .wp-block-navigation__submenu-container > .wp-block-navigation-item:hover{background-color: ${a.attributes.gsSubMenuHoverBg} !important; }`}}),(0,t.createElement)(n,e({className:o()(B,k?"is-style-gs-disablemenuline":"")},a)));if("core/navigation-link"==A){const{BlockPreview:l}=wp.blockEditor,{createBlock:r}=wp.blocks;return(0,t.createElement)(t.Fragment,null,b&&b>0&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] > .wp-block-navigation-item__content > .wp-block-navigation-item__label {gap: ${a.attributes.gsMenuImageGap}px !important; }`}}),h&&h>0&&(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${x}"] { padding-bottom: ${a.attributes.gsPaddingB}px !important; }`}}),m&&m>0?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n,e({},a,{className:o()(B,"gs-preview-block-link")})),(0,t.createElement)(l,{viewportWidth:0,blocks:r("core/block",{ref:m})})):(0,t.createElement)(n,a))}return"core/cover"!=A&&"core/column"!=A&&"core/columns"!=A&&"core/group"!=A&&"core/template-part"!=A&&"core/image"!=A&&"core/button"!=A?(0,t.createElement)(n,a):(0,t.createElement)(n,e({},a,{className:o()(B,s?"gs-sticky-header":"",g?"gs-sticky-header-up":"",l?"gs-desktop-hide":"",r?"gs-tablet-hide":"",i?"gs-mobile-hide":"",c?"gs-header-alpha":"")}))}),"withClientIdClassName");wp.hooks.addFilter("editor.BlockListBlock","greenshift/extraglobal-editor-class",r),wp.hooks.addFilter("blocks.getSaveContent.extraProps","greenshift/extraglobal-apply-class",(function(e,t,n){if("core/cover"==t.name||"core/column"==t.name||"core/columns"==t.name||"core/group"==t.name||"core/image"==t.name||"core/button"==t.name){const{gshideOnMobile:t,gshideOnTablet:a,gshideOnDesktop:o}=n;void 0!==t&&t&&(e.className=e.className+" gs-mobile-hide"),void 0!==o&&o&&(e.className=e.className+" gs-desktop-hide"),void 0!==a&&a&&(e.className=e.className+" gs-tablet-hide")}if("core/group"==t.name){const{gsStickyHeader:t,gsStickyHeaderUp:a}=n;void 0!==t&&t&&(e.className=e.className+" gs-sticky-header",void 0!==a&&a&&(e.className=e.className+" gs-sticky-header-up"))}else if("core/template-part"==t.name){const{gsHeaderAlpha:t}=n;void 0!==t&&t&&(e.className=e.className+" gs-header-alpha")}return e}))}()}();