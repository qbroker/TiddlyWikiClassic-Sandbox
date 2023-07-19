/***
|Name |MathJaxProcessor-Plugin.js |
|Version |0.0.7 |
|Version library | |
|Description |Use nice looking svg mathematical functions in TiddlyWikiClassic |
|Source |MathJaxProcessor-Source |
|Documentation | |
|Author |Okido |
|Original author | |
|License |See below under license |
|Core version | |
|Plugin type |systemConfig |
|Status |EXPERIMENTAL - SUBJECT TO CHANGE |
|Build date - time |19-07-2023 - 10:40, build with [[pluginBuilder-Plugin.js]] |

!!!Documentation
<<<
This plugin uses [[MathJax|MathJax-Plugin.js]] to process Latex text to nice looking expressions or equations in svg.
<<<
!!!Usage
<<<
A macro with following Latex text returns a nice looking equation in svg.
{{{
  We are now explaining this equation: <<mathjaxprocessor "\large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}">>
}}}
  We are now explaining this equation: <<mathjaxprocessor "\large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}">>
<<<
!!!Configuration
<<<
This plugin depends on the [[MathJax-Plugin.js]].
<<<
!!!Revisions
<<<

<<<
!!!License
<<<
!!License for the third party library code
null

!!License for the TiddlyWikiClassic plugin code
MIT License

Copyright (c) 2023 Okido

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
<<<
!!!Code
***/
//{{{
/* JavaScript CODE STARTS HERE */
/* Minified with Terser.js - 19-07-2023 */
"object"!=typeof config.macros.mathjaxprocessor?config.macros.mathjaxprocessor={}:config.macros.mathjaxprocessor,config.macros.mathjaxprocessor.separator=" gives ",config.macros.mathjaxprocessor.handler=function(o,a,r,e,s,c){const t=r[0];try{MathJax.typesetClear();let a=(i=t,MathJax.tex2svg(i,{em:46,ex:16,display:!1})),r=(new XMLSerializer).serializeToString(a);wikify("<html>"+r+"</html>",o)}catch(o){console.log(o)}var i};
/* JavaScript CODE ENDS HERE */
//}}}