/***
|Name |mathjsEvaluator-Plugin.js |
|Version |0.0.7 |
|Version library | |
|Description |Evaluate mathematical functions in [[TiddlyWikiClassic]] |
|Source |mathjsEvaluator-Source |
|Documentation | |
|Author |Okido |
|Original author | |
|License |See below under license |
|Core version | |
|Plugin type |systemConfig |
|Status |EXPERIMENTAL - SUBJECT TO CHANGE |
|Build date - time |01-08-2023 - 11:04, build with [[pluginBuilder-Plugin.js]] |

!!!Documentation
<<<
This plugin uses the [[mathjs-Plugin.js]] to evaluate mathematical expressions and return the result.
<<<
!!!Usage
<<<
A macro with following content returns a value. The true at the end returns the expression too, false just returns the value.
{{{
  <<mathjsevaluator "sin(90 deg) * 5" true>>
}}}
  <<mathjsevaluator "sin(90 deg) * 5" true>>
{{{
  <<mathjsevaluator "sin(45 deg)^2 * 16" false>>
}}}
  <<mathjsevaluator "sin(45 deg)^2 * 16" false>>
  
The separator between expression and value is by default " gives ".
If you prefer to have " = " as a separator or anything else create a systemConfig tiddler with following code in it and the separator between " ":
{{{
  config.macros.mathjsevaluator.separator = " = "
}}}
<<<
!!!Configuration
<<<
This plugin depends on the [[mathjs-Plugin.js]].
<<<
!!!Revisions
<<<

<<<
!!!License
<<<
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
/* Minified with Terser.js - 01-08-2023 */
"object"!=typeof config.macros.mathjsevaluator?config.macros.mathjsevaluator={}:config.macros.mathjsevaluator,config.macros.mathjsevaluator.separator=" gives ",config.macros.mathjsevaluator.handler=function(a,o,t,r,e,s){const c=()=>"true"===t[1],m=a=>math.evaluate(a),i=t[0];let n=c()?`${i}${config.macros.mathjsevaluator.separator}${m(i)}`:`${m(i)}`;wikify(n,a)};
/* JavaScript CODE ENDS HERE */
//}}}