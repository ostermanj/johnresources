!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=13)}([function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var o,n=t.HTMLElement||t.Element,i=468,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||c,scrollIntoView:n.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?f.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var t=arguments[0].left,e=arguments[0].top;f.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var o=function(t){for(;t!==e.body&&!1===p(t);)t=t.parentNode||t.host;return t}(this),n=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==e.body?(f.call(this,o,o.scrollLeft+i.left-n.left,o.scrollTop+i.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function l(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function h(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function d(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function p(t){var e=h(t,"Y")&&d(t,"Y"),o=h(t,"X")&&d(t,"X");return e||o}function u(e){var o,n,r,a,c=(s()-e.startTime)/i;a=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*a)),n=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,n,r),n===e.x&&r===e.y||t.requestAnimationFrame(u.bind(t,e))}function f(o,n,i){var a,l,h,d,p=s();o===e.body?(a=t,l=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,d=r.scroll):(a=o,l=o.scrollLeft,h=o.scrollTop,d=c),u({scrollable:a,method:d,startTime:p,startX:l,startY:h,x:n,y:i})}}}}()},function(t,e,o){t.exports=function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";var n=o(1),i=n.isInBrowser,r=o(2),s=new r(i?document.body:null);s.setStateFromDOM(null),s.listenToDOM(),i&&(window.scrollMonitor=s),t.exports=s},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,o){"use strict";function n(t){return a?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function i(t){return a?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return a?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var s=o(1),a=s.isOnServer,c=s.isInBrowser,l=s.eventTypes,h=o(3),d=!1;if(c)try{var p=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("test",null,p)}catch(t){}var u=!!d&&{capture:!1,passive:!0},f=function(){function t(e,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s,a,c,h=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=i(e),this.viewportHeight=n(e),this.DOMListener=function(){t.prototype.DOMListener.apply(h,arguments)},this.eventTypes=l,o&&(this.containerWatcher=o.create(e)),this.update=function(){(function(){if(h.viewportTop=r(e),h.viewportBottom=h.viewportTop+h.viewportHeight,h.documentHeight=i(e),h.documentHeight!==s){for(a=h.watchers.length;a--;)h.watchers[a].recalculateLocation();s=h.documentHeight}})(),function(){for(c=h.watchers.length;c--;)h.watchers[c].update();for(c=h.watchers.length;c--;)h.watchers[c].triggerCallbacks()}()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){c&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener,u):this.item.addEventListener("scroll",this.DOMListener,u),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,u),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,u),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),o=n(this.item),s=i(this.item);this.setState(e,o,s,t)},t.prototype.setState=function(t,e,o,n){var i=e!==this.viewportHeight||o!==this.contentHeight;if(this.latestEvent=n,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=o,i)for(var r=this.watchers.length;r--;)this.watchers[r].recalculateLocation();this.updateAndTriggerWatchers(n)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var o=new t(e,this);return o.setStateFromDOM(),o.listenToDOM(),o},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var o=new h(this,t,e);return this.watchers.push(o),o},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=f},function(t,e,o){"use strict";function n(t,e,o){function n(t,e){if(0!==t.length)for(v=t.length;v--;)(b=t[v]).callback.call(w,e,w),b.isOne&&t.splice(v,1)}var i,f,m,g,v,b,w=this;this.watchItem=e,this.container=t,this.offsets=o?o===+o?{top:o,bottom:o}:{top:o.top||u.top,bottom:o.bottom||u.bottom}:u,this.callbacks={};for(var y=0,k=p.length;y<k;y++)w.callbacks[p[y]]=[];this.locked=!1,this.triggerCallbacks=function(t){switch(this.isInViewport&&!i&&n(this.callbacks[s],t),this.isFullyInViewport&&!f&&n(this.callbacks[a],t),this.isAboveViewport!==m&&this.isBelowViewport!==g&&(n(this.callbacks[r],t),f||this.isFullyInViewport||(n(this.callbacks[a],t),n(this.callbacks[l],t)),i||this.isInViewport||(n(this.callbacks[s],t),n(this.callbacks[c],t))),!this.isFullyInViewport&&f&&n(this.callbacks[l],t),!this.isInViewport&&i&&n(this.callbacks[c],t),this.isInViewport!==i&&n(this.callbacks[r],t),!0){case i!==this.isInViewport:case f!==this.isFullyInViewport:case m!==this.isAboveViewport:case g!==this.isBelowViewport:n(this.callbacks[d],t)}i=this.isInViewport,f=this.isFullyInViewport,m=this.isAboveViewport,g=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var o=this.watchItem.style.display;"none"===o&&(this.watchItem.style.display="");for(var i=0,r=this.container;r.containerWatcher;)i+=r.containerWatcher.top-r.containerWatcher.container.viewportTop,r=r.containerWatcher.container;var s=this.watchItem.getBoundingClientRect();this.top=s.top+this.container.viewportTop-i,this.bottom=s.bottom+this.container.viewportTop-i,"none"===o&&(this.watchItem.style.display=o)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||n(this.callbacks[h],null)}},this.recalculateLocation(),this.update(),i=this.isInViewport,f=this.isFullyInViewport,m=this.isAboveViewport,g=this.isBelowViewport}var i=o(1),r=i.VISIBILITYCHANGE,s=i.ENTERVIEWPORT,a=i.FULLYENTERVIEWPORT,c=i.EXITVIEWPORT,l=i.PARTIALLYEXITVIEWPORT,h=i.LOCATIONCHANGE,d=i.STATECHANGE,p=i.eventTypes,u=i.defaultOffsets;n.prototype={on:function(t,e,o){switch(!0){case t===r&&!this.isInViewport&&this.isAboveViewport:case t===s&&this.isInViewport:case t===a&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===l&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),o)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+p.join(", "));this.callbacks[t].push({callback:e,isOne:o||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+p.join(", "));for(var o,n=0;o=this.callbacks[t][n];n++)if(o.callback===e){this.callbacks[t].splice(n,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this);this.container.watchers.splice(t,1);for(var e=0,o=p.length;e<o;e++)this.callbacks[p[e]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var f=function(t){return function(e,o){this.on.call(this,t,e,o)}},m=0,g=p.length;m<g;m++){var v=p[m];n.prototype[v]=f(v)}t.exports=n}])},function(t,e,o){},function(t,e,o){},function(t,e,o){var n={"./01/introduction.html":5,"./02/strategic-communications.html":6,"./03/evaluation-learning.html":7,"./04/leadership-development.html":8,"./05/diversity-equity-inclusion.html":9,"./06/staff-retention.html":10,"./07/security.html":11,"./08/board-structure-role.html":12};function i(t){var e=r(t);return o(e)}function r(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id=4},function(t,e){t.exports='\n\n<h1>Introduction</h1>\n                <p>Recognizing that our grantee partners are very diverse and no set of resources could possibly be applicable to all, the resources on this site are aimed at an introductory level; the kinds of things that might be useful to an organization just starting to think about a given topic. Some of you have been thinking about these topics for a long time, are the true experts, and therefore may not find anything new. Wherever you are on a given topic, please dont hesitate to reach out to your program officer if you would like to have a more in depth conversation around how we may be able to provide additional support.</p>\n                <p>The results of the first survey question are below. As each topic received at least a third of respondents rating additional resources as \'very useful,\' we have included resources on all topics. Navigate to each of them using the menu on the right.</p>\n                <h4>How useful would access to resources be for each area below?</h4>\n                <img src="/assets/OverallLegend.svg" width="100%" alt="">\n             \n \n\n\x3c!-- TODO  these should navigate --\x3e'},function(t,e){t.exports='<h1>Communications to Advance Your Work</h1>\n            <p>We realize strategic communications may look quite different in different contexts. Therefore, the resources provivded here aim to cover basic universal concepts, with more specific applicability noted where that is the case.</p>\n\n             <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th class=\'fit\' scope="row">1</th>\n                        <td><a href=\'/assets/resources/KellogComms.pdf\' target="_blank">Elements of a Strategic Communications Plan</td>\n                <td>A guide and worksheet that helps in developing a strategic communications plan, including establishing goals, audience, messages, communications channels, activities, partnerships, etc.</td>\n                <td>WK Kellog Foundation</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\'http://heartwiredforchange.com/\' target="_blank">Heartwired: Human Behavior, Strategic Opinion Research, and the Audacious Pursuit of Social Change</td>\n                  <td>Intended for U.S. progressive activists that have not yet integrated this type of approach into their work, this strategy guide examines how change-makers have leveraged a heartwired understanding of their target audiences to hasten a tipping point on pressing issues of the day.</td>\n                  <td>Goodwin Simon Strategic Research/Wonder for Good</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'https://publicinterest.org.uk/\' target="_blank">Public Interest Research Centre</td>\n                    <td>This website features a variety of framing guides and resources for simple, low-cost methods to develop and test communications strategies.</td>\n                    <td>Public Interest Research Centre</td>\n                  </tr>\n            \n                  </tbody>\n                </table>\n\n          <h2> Additional Support and Resources WPF Can Provide</h2>\n          <p>Wellspring has a working group focused on supporting grantees internationally (especially in East Africa and to some extent in Latin America) to research, test, and/or evaluate communications that target specific audiences and seek to change knowledge, attitudes, and/or behaviours related to particular social justice issues. The working group has created a newsletter of free resources and references that might be of interest (an example of the newsletter can be seen <a href=\'/assets/resources/CommsNewsletter.pdf\' target="_blank">here</a>). Please contact your program officer if you would like to be put in touch with the working group and/or be added to the list that receives the newsletter.</p>\n      '},function(t,e){t.exports='<h1>Evaluation and Learning</h1>\n      \n\n              <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th class=\'fit\' scope="row">1</th>\n                        <td><a href=\'/assets/resources/LESelfAssessmentTool.pdf\' target="_blank">Organizational Learning Self-Assessment Tool</td>\n                <td>18 questions to self-assess your organization’s\nlearning culture and identify steps for action. Accompanying resources from the same project can be found <a href=\'/assets/resources/LEAdditionalResourcesTable.pdf\' target="_blank">here</a>.</td>\n                <td>Andrew Taylor and Ben Liadsky</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\'/assets/resources/LEEvaluationDiscussionGuide.pdf\' target="_blank">Five Important Discussion Questions to Make Evaluation Useful</td>\n                  <td>This guide is meant to help you articulate more clearly what you want to get out of an evaluation and what concerns you may have about the process. It is meant as a conversation starter and is a means to open up a dialogue with your stakeholders in a subject area that can be complex and difficult.</td>\n                  <td>Ontario Nonprofit Network and Taylor Newberry Consulting</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'/assets/resources/LEAdvocacyFramework.pdf\' target="_blank">Advocacy Strategy Framework</td>\n                    <td>This brief offers a simple one-page tool for thinking about the theories of change that underlie public policy advocacy strategies.</td>\n                    <td>Julia Coffman and Tanya Beer</td>\n                  </tr>\n                  <tr>\n                  <th scope="row">4</th>\n                  <td><a href=\'/assets/resources/LEIntegratingEvaluativeCapacity.pdf\' target="_blank">Integrating Evaluative Capacity</td>\n                    <td>A guidebook on evaluative capacity—the integrating of evaluation skills and evaluative thinking into everyday organizational practice to ensure not only stronger\nprograms but also stronger, more effective organizations better able to deliver on their missions.</td>\n                    <td>Anita Baker and Beth Bruner</td>\n                  </tr>\n            \n                  </tbody>\n                </table>'},function(t,e){t.exports='<h1>Leadership Development</h1>\n                \n                 <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th class=\'fit\' scope="row">1</th>\n                        <td><a href=\'http://stproject.org/resources/tools-for-transformation/leadership/\' target="_blank">Social Transformation Project</td>\n                <td>Covers an approach for mission-driven life both personally and professionally, including: decision-making, ailments, power, creative conversations, managing emotions, managing performance, delegation, etc.</td>\n                <td>Robert Gass (founder of Rockwood\'s leadership program)</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\'http://www.leadershipchallenge.com/About-section-Our-Approach.aspx\' target="_blank">Five Practices of Leadership</td>\n                  <td>Three decades after its initial publication, The Five Practices of Exemplary Leadership model continues to prove its effectiveness as a clear, evidence-based path to achieving the extraordinary—for individuals, teams, organizations, and communities.</td>\n                  <td>Jim Kouzes and Barry Posner</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'https://www.franklincovey.com/the-7-habits.html\' target="_blank">7 Habits of Highly Effective People</td>\n                    <td>Includes an whole-life approach that includes prioritization and human relationships.</td>\n                    <td>Stephen Covey</td>\n                  </tr>\n            \n                  </tbody>\n                </table>\n                <h2>Specific to East African Organizations</h2>\n\n                <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th class=\'fit\' scope="row">1</th>\n                        <td><a href=\'https://www.easuncentre.org/turning-points/Tanzania\' target="_blank">EASUN Foundation Trust</td>\n                <td>Offers classes on knowledge and learning. See resources on change, being unstuck, ethics, etc. </td>\n                <td>EASUN</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\' http://uongozi.or.tz/resources/publications/\' target="_blank">What Enables or Disables Leadership for Transformational Change in Africa</td>\n                  <td>2018 research paper by Uongoze Institute, which supports African leaders to attain sustainable development for nations in Africa.</td>\n                  <td>Uongoze Institute</td>\n                </tr>\n            \n                  </tbody>\n                </table>'},function(t,e){t.exports='<h1>Diversity, Equity, and Inclusion</h1>\n       <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th class=\'fit\' scope="row">1</th>\n                        <td><a href=\'http://stproject.org/resources/tools-for-transformation/leadership/\' target="_blank">Social Transformation Project</td>\n                <td>Covers an approach for mission-driven life both personally and professionally, including: decision-making, ailments, power, creative conversations, managing emotions, managing performance, delegation, etc.</td>\n                <td>Robert Gass</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\'http://www.leadershipchallenge.com/About-section-Our-Approach.aspx\' target="_blank">Five Practices of Leadership</td>\n                  <td>Three decades after its initial publication, The Five Practices of Exemplary Leadership model continues to prove its effectiveness as a clear, evidence-based path to achieving the extraordinary—for individuals, teams, organizations, and communities.</td>\n                  <td>Jim Kouzes and Barry Posner</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'https://www.franklincovey.com/the-7-habits.html\' target="_blank">7 Habits of Highly Effective People</td>\n                    <td>Includes an whole-life approach that includes prioritization and human relationships.</td>\n                    <td>Stephen Covey</td>\n                  </tr>\n            \n                  </tbody>\n                </table>'},function(t,e){t.exports='<h1>Staff Development and Retention</h1>\n            <p>There are numerous articles and lists that attempt to diagnose staff development and retention issues in non-profits, including these from <a href=\'https://hbr.org/2015/12/nonprofits-cant-keep-ignoring-talent-development\' target="_blank">HBR</a> and  <a href=\'https://ssir.org/articles/entry/the_nonprofit_leadership_development_deficit\' target="_blank">SSIR</a>. The most commonly cited topics are around compensation and benefits, opportunities for professional growth, preventing burnout, recognition/appreciation, communications and feedback, and work environment/culture. The resources below provide a few starting points for addressing these issues.</p>\n              \n  <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    \n              <tr>\n                <th scope="row">1</th>\n                <td ><a href=\'https://www.bridgespan.org/insights/library/leadership-development/on-the-job-development-opportunities\' target="_blank">On the Job Development Opportunities</td>\n                  <td>Helping employees develop the skills they need to advance in their careers and their organizations doesn’t have to be costly. In fact, there are plenty of creative on-the-job opportunities for employees to learn new skills without an organization having to spend a dime.</td>\n                  <td>Bridgespan Group</td>\n                </tr>\n                \n                   <tr>\n                  <th scope="row">2</th>\n                  <td><a href=\'fundthepeople.org/toolkit/guides/nonprofit/#wpContent\' target="_blank">Talking Talent for Non-profits</td>\n                    <td>A how-to guide for non-profits on talking to funders around investing in staff development. This guide is intended to help identify strengths and challenges in order to subsequently plan, budget, and secure resources to build on the strengths and address identified talent challenges.</td>\n                    <td>Fund the People</td>\n                  </tr>\n                  <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'/assets/resources/StaffWellness.pdf\' target="_blank">Wellbeing and Stress</td>\n                    <td>Chapter 4 of the <a href=\'https://www.frontlinedefenders.org/en/resource-publication/workbook-security-practical-steps-human-rights-defenders-risk\' target="_blank">Frontline Defenders Workbook on Security</a> covers wellbeing, stress, and preventing burnout for human rights defenders.</td>\n                    <td>Frontline Defenders</td>\n                  </tr>\n            \n                  </tbody>\n                </table>'},function(t,e){t.exports='<h1>Security: Staff Safety and Cybersecurity</h1>\n        \n<p>Wellspring is committed to supporting organizations to be as secure as they can be (and striving to being as secure as possible ourselves). We take a holistic view of security, encompassing physical, travel, and digital security, as well as overall well-being. The list of resources below contains two short checklists developed by Wellspring staff and a security consultant, plus an online assessment that provides personalized online security recommendations.</p>\n\n            <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col">Resource Title</th>\n                        <th scope="col">Description</th>\n                        <th scope="col">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                  \n                <th scope="row">1</th>\n                <td ><a href=\'/assets/resources/SecurityHolistic.pdf\' target="_blank">Security Checklist - Holistic</td>\n                  <td>A starting point for building strong holistic safety and security management practices</td>\n                  <td>Wellspring Staff and security consultant</td>\n                </tr>\n                <tr>\n                  <th scope="row">2</th>\n                  <td><a href=\'/assets/resources/SecurityDigital.pdf\' target="_blank">Security Checklist - Digital</td>\n                    <td>Building on the holistic security checklist above, this guide goes into more depth on digital security</td>\n                    <td>Wellspring Staff and security consultant</td>\n                  </tr>\n                  <tr>\n                    <th scope="row">3</th>\n                    <td><a href=\'https://www.securityplanner.org/#/\' target="_blank">Security Planner</td>\n                      <td>Answer a few questions to get personalized online safety recommendations.</td>\n                      <td>Citizen Lab</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <h2>Additional Support WPF Can Offer</h2>\n              \n                <p>Wellspring works closely with a security advisor, who is available to provide confidential and no-cost security guidance via phone, email, or Skype. We are happy to send an email introduction. </p>\n                <p>In addition, there are a number of organizations we work with that provide emergency/rapid response grants, support for human rights defenders at risk, grants and training to organizations looking to strengthen their digital security, and support to organizations that believe they may have been hacked. Please contact your program officer if any of these could be useful to your organization.</p>\n\n              '},function(t,e){t.exports="<h1>Board Structure and Role</h1>\n<p>Board Structure and Role is the capital city of England.</p>"},function(t,e,o){"use strict";o.r(e);o(2),o(3);var n=o(0),i=o.n(n);var r,s,a,c,l,h,d,p,u,f,m=o(1),g=o.n(m);window.onbeforeunload=function(){window.scrollTo(0,0)},i.a.polyfill(),window.IS_PRERENDERING&&(r=o(4)).keys().forEach((t,e)=>{console.log(t),function(t,e,o){var n=document.createElement("section"),i=e.match(/\.\/(\d{2})/)[1],r=document.querySelector(".primary-navigation"),s=document.createElement("a"),a=document.createElement("a"),c=`#anchor-${i}`;s.classList.add("tablink"),0===o&&s.classList.add("active"),a.id=`anchor-${i}`,a.classList.add("anchor"),n.id="section-"+i,n.classList.add("section","tabcontent"),n.appendChild(a),n.insertAdjacentHTML("beforeend",t(e)),document.querySelector("main .container-inner").appendChild(n),n.querySelector("h1")?s.innerHTML=n.querySelector("h1").innerHTML:s.innerHTML=n.querySelector("h2").innerHTML,s.href=c,r.appendChild(s)}(r,t,e)}),s=document.querySelector(".header-wrapper"),a=g.a.create(s),c=document.querySelector(".header"),l=document.querySelector(".primary-navigation"),h=document.querySelector(".main-content"),d=document.querySelector(".content-wrapper"),p=document.querySelector(".arrow-down"),a.exitViewport(()=>{c.classList.add("visible"),h.classList.add("visible"),d.classList.add("visible"),p.classList.add("hidden"),setTimeout(()=>{l.classList.add("visible")},200)}),a.enterViewport(()=>{setTimeout(()=>{c.classList.remove("visible")},200),l.classList.remove("visible"),h.classList.remove("visible"),d.classList.remove("visible"),p.classList.remove("hidden")}),f={},u=new IntersectionObserver(function(t){t.forEach(t=>{var e;if(console.log(t),e=null===f[t.target.id]||f[t.target.id]>t.boundingClientRect.y?"up":"down",f[t.target.id]=0===t.boundingClientRect.height?null:t.boundingClientRect.y,console.log(f,t,t.isIntersecting,e),"up"===e&&t.intersectionRatio>=.5||t.isIntersecting&&"down"===e){let e=document.querySelector("a.tablink.active"),o=document.querySelector('a[href="#'+t.target.id+'"');e!==o&&e.classList.remove("active"),o.classList.add("active")}if("down"===e&&t.intersectionRatio<=.5&&t.intersectionRatio>0){let e=document.querySelector("a.tablink.active"),o=document.querySelector('a[href="#'+t.target.id+'"').previousElementSibling;o&&e!==o&&(e.classList.remove("active"),o.classList.add("active"))}})},{root:null,rootMargin:"0px 0px 0px 0px",threshold:[.25,.5,.75,1]}),document.querySelectorAll(".anchor").forEach(t=>{requestIdleCallback?requestIdleCallback(()=>{u.observe(t)},{timeout:1e3}):u.observe(t)}),document.querySelectorAll(".tablink").forEach(t=>{t.addEventListener("click",function(e){var o=window.innerWidth<=911?"auto":"smooth";e.preventDefault(),function(t,e,o){o=o||"smooth",console.log(e),t.preventDefault(),document.querySelector(e).scrollIntoView({behavior:o,block:"start"})}(e,"#section-"+t.href.match(/-(\d{2})/)[1],o),document.querySelector(".primary-navigation").classList.remove("is-open")})}),document.querySelector(".btn--toggle").addEventListener("click",function(){document.querySelector(".primary-navigation").classList.toggle("is-open")})}]);
//# sourceMappingURL=index.js.map