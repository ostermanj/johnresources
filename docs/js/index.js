!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1),n(2);var o,r,a,i,s,l,c,d,h=p(n(3)),u=p(n(4));function p(e){return e&&e.__esModule?e:{default:e}}window.onbeforeunload=function(){window.scrollTo(0,0)},h.default.polyfill(),window.IS_PRERENDERING&&(0,u.default)(n(5)),o=document.querySelector(".header-hero"),r=document.querySelector(".header"),a=document.querySelector(".primary-navigation"),i=document.querySelector(".main-content"),s=document.querySelector(".content-wrapper"),l=document.querySelector(".arrow-down"),c=new IntersectionObserver(function(e){e.forEach(function(e){console.log(e),e.isIntersecting?(r.classList.add("visible"),i.classList.add("visible"),s.classList.add("visible"),l.classList.add("hidden"),o.classList.add("white"),setTimeout(function(){a.classList.add("visible")},200)):(setTimeout(function(){r.classList.remove("visible")},200),o.classList.remove("white"),a.classList.remove("visible"),i.classList.remove("visible"),s.classList.remove("visible"),l.classList.remove("hidden"))})},{root:null,rootMargin:"0px 0px 0px 0px"}),d=document.querySelector(".observer-anchor"),c.observe(d),function(){var e;e=new IntersectionObserver(function(e){e.forEach(function(e){if(console.log(e),e.isIntersecting){var t=document.querySelector("a.tablink.active"),n=document.querySelector('a[href="#'+e.target.id+'"]');t!==n&&t.classList.remove("active"),n.classList.add("active")}})},{root:null,rootMargin:"0px 0px 0px 0px"}),document.querySelectorAll(".anchor").forEach(function(t){requestIdleCallback?requestIdleCallback(function(){e.observe(t)},{timeout:1e3}):e.observe(t)})}(),document.querySelectorAll(".tablink").forEach(function(e){e.addEventListener("click",function(t){var n=window.innerWidth<=911?"auto":"smooth";t.preventDefault(),function(e,t,n){n=n||"smooth",console.log(t),e.preventDefault(),document.querySelector(t).scrollIntoView({behavior:n,block:"start"})}(t,"#section-"+e.href.match(/-(\d{2})/)[1],n),document.querySelector(".primary-navigation").classList.remove("is-open")})}),document.querySelector(".btn--toggle").addEventListener("click",function(){document.querySelector(".primary-navigation").classList.toggle("is-open")})},function(e,t,n){},function(e,t,n){},function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var n,o=e.HTMLElement||e.Element,r=468,a={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,s=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):a.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?a.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=function(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect();n!==t.body?(f.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function d(e,t){return"Y"===t?e.clientHeight+s<e.scrollHeight:"X"===t?e.clientWidth+s<e.scrollWidth:void 0}function h(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function u(e){var t=d(e,"Y")&&h(e,"Y"),n=d(e,"X")&&h(e,"X");return t||n}function p(t){var n,o,a,s,l=(i()-t.startTime)/r;s=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*s)),o=t.startX+(t.x-t.startX)*n,a=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,a),o===t.x&&a===t.y||e.requestAnimationFrame(p.bind(e,t))}function f(n,o,r){var s,c,d,h,u=i();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,h=a.scroll):(s=n,c=n.scrollLeft,d=n.scrollTop,h=l),p({scrollable:s,method:h,startTime:u,startX:c,startY:d,x:o,y:r})}}}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.keys().forEach(function(t,n){console.log(t),function(e,t,n){var o=document.createElement("section"),r=t.match(/\.\/(\d{2})/)[1],a=document.querySelector(".primary-navigation"),i=document.createElement("a"),s=document.createElement("a"),l="#anchor-"+r;i.classList.add("tablink"),0===n&&i.classList.add("active");s.id="anchor-"+r,s.classList.add("anchor"),o.id="section-"+r,o.classList.add("section","tabcontent"),o.appendChild(s),o.insertAdjacentHTML("beforeend",e(t)),document.querySelector("main .container-inner").appendChild(o),o.querySelector("h1")?i.innerHTML=o.querySelector("h1").innerHTML:i.innerHTML=o.querySelector("h2").innerHTML;i.href=l,a.appendChild(i)}(e,t,n)})}},function(e,t,n){var o={"./01/introduction.html":6,"./02/strategic-communications.html":7,"./03/evaluation-learning.html":8,"./04/leadership-development.html":9,"./05/diversity-equity-inclusion.html":10,"./06/staff-retention.html":11,"./07/security.html":12,"./08/board-structure-role.html":13,"./09/About.html":14};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=5},function(e,t){e.exports="\n\n<h1>Introduction</h1>\n                <p>First, thank you for providing feedback on the survey. Your input is valuable as we work to become a better funder. Recognizing that our grantee partners are very diverse and no set of resources could possibly be applicable to all, the resources on this site are aimed at an introductory level; the kinds of things that might be useful to an organization just starting to think about a given topic. Some of you have been thinking about these topics for a long time, are the true experts, and therefore may not find anything new. Wherever you are on a given topic, please dont hesitate to reach out to your program officer if you would like to have a more in depth conversation around how we may be able to provide additional support.</p>\n                <p>The results of the first survey question are below. As each topic received at least a third of respondents rating additional resources as 'very useful,' we have included resources on all topics. Navigate to each of them using the menu on the right.</p>\n                \n                \n             \n \n\n\x3c!-- TODO  these should navigate --\x3e"},function(e,t){e.exports='<h1>Communications to Advance Your Work</h1>\n            <p>We realize strategic communications may look quite different in different contexts. Therefore, the resources provivded here aim to cover basic universal concepts, with more specific applicability noted where that is the case.</p>\n\n             <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope="row">1</th>\n                        <td><a href=\'/assets/resources/KellogComms.pdf\' target="_blank">Elements of a Strategic Communications Plan</td>\n                <td>A guide and worksheet that helps in developing a strategic communications plan, including establishing goals, audience, messages, communications channels, activities, partnerships, etc.</td>\n                <td>WK Kellog Foundation</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\'http://heartwiredforchange.com/\' target="_blank">Heartwired: Human Behavior, Strategic Opinion Research, and the Audacious Pursuit of Social Change</td>\n                  <td>Intended for U.S. progressive activists that have not yet integrated this type of approach into their work, this strategy guide examines how change-makers have leveraged a heartwired understanding of their target audiences to hasten a tipping point on pressing issues of the day.</td>\n                  <td>Goodwin Simon Strategic Research/Wonder for Good</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'https://publicinterest.org.uk/\' target="_blank">Public Interest Research Centre</td>\n                    <td>This website features a variety of framing guides and resources for simple, low-cost methods to develop and test communications strategies.</td>\n                    <td>Public Interest Research Centre</td>\n                  </tr>\n            \n                  </tbody>\n                </table>\n\n          <h2> Additional Support and Resources WPF Can Provide</h2>\n          <p>Wellspring has a working group focused on supporting grantees internationally (especially in East Africa and to some extent in Latin America) to research, test, and/or evaluate communications that target specific audiences and seek to change knowledge, attitudes, and/or behaviours related to particular social justice issues. The working group has created a newsletter of free resources and references that might be of interest (an example of the newsletter can be seen <a href=\'/assets/resources/CommsNewsletter.pdf\' target="_blank">here</a>). Please contact your program officer if you would like to be put in touch with the working group and/or be added to the list that receives the newsletter.</p>\n      '},function(e,t){e.exports='<h1>Evaluation and Learning</h1>\n      \n\n              <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th  scope="row">1</th>\n                        <td><a href=\'/assets/resources/LESelfAssessmentTool.pdf\' target="_blank">Organizational Learning Self-Assessment Tool</td>\n                <td>18 questions to self-assess your organization’s\nlearning culture and identify steps for action. Accompanying resources from the same project can be found <a href=\'/assets/resources/LEAdditionalResourcesTable.pdf\' target="_blank">here</a>.</td>\n                <td>Andrew Taylor and Ben Liadsky</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\'/assets/resources/LEEvaluationDiscussionGuide.pdf\' target="_blank">Five Important Discussion Questions to Make Evaluation Useful</td>\n                  <td>This guide is meant to help you articulate more clearly what you want to get out of an evaluation and what concerns you may have about the process. It is meant as a conversation starter and is a means to open up a dialogue with your stakeholders in a subject area that can be complex and difficult.</td>\n                  <td>Ontario Nonprofit Network and Taylor Newberry Consulting</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'/assets/resources/LEAdvocacyFramework.pdf\' target="_blank">Advocacy Strategy Framework</td>\n                    <td>This brief offers a simple one-page tool for thinking about the theories of change that underlie public policy advocacy strategies.</td>\n                    <td>Julia Coffman and Tanya Beer</td>\n                  </tr>\n                  <tr>\n                  <th scope="row">4</th>\n                  <td><a href=\'/assets/resources/LEIntegratingEvaluativeCapacity.pdf\' target="_blank">Integrating Evaluative Capacity</td>\n                    <td>A guidebook on evaluative capacity—the integrating of evaluation skills and evaluative thinking into everyday organizational practice to ensure not only stronger\nprograms but also stronger, more effective organizations better able to deliver on their missions.</td>\n                    <td>Anita Baker and Beth Bruner</td>\n                  </tr>\n            \n                  </tbody>\n                </table>'},function(e,t){e.exports='<h1>Leadership Development</h1>\n      <p>Organizations can benefit from thoughtful investments in leadership development at all levels. Individuals at any stage in their career can also play a formal or informal leadership role to advance the work and their agenda. The resources below offer selected classics in the leadership development field, as well as some that are more context specific.</p>          \n                 <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope="row">1</th>\n                        <td><a href=\'http://stproject.org/resources/tools-for-transformation/leadership/\' target="_blank">Social Transformation Project</td>\n                <td>Covers an approach for mission-driven life both personally and professionally, including: decision-making, ailments, power, creative conversations, managing emotions, managing performance, delegation, etc.</td>\n                <td>Robert Gass (founder of Rockwood\'s leadership program)</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\'http://www.leadershipchallenge.com/About-section-Our-Approach.aspx\' target="_blank">Five Practices of Leadership</td>\n                  <td>Three decades after its initial publication, The Five Practices of Exemplary Leadership model continues to prove its effectiveness as a clear, evidence-based path to achieving the extraordinary—for individuals, teams, organizations, and communities.</td>\n                  <td>Jim Kouzes and Barry Posner</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'https://www.franklincovey.com/the-7-habits.html\' target="_blank">7 Habits of Highly Effective People</td>\n                    <td>Includes an whole-life approach that includes prioritization and human relationships.</td>\n                    <td>Stephen Covey</td>\n                  </tr>\n            \n                  </tbody>\n                </table>\n                <h2>Specific to East African Organizations</h2>\n\n                <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope="row">1</th>\n                        <td><a href=\'https://www.easuncentre.org/turning-points/Tanzania\' target="_blank">EASUN Foundation Trust</td>\n                <td>Offers classes on knowledge and learning. See resources on change, being unstuck, ethics, etc. </td>\n                <td>EASUN</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\' http://uongozi.or.tz/resources/publications/\' target="_blank">What Enables or Disables Leadership for Transformational Change in Africa</td>\n                  <td>2018 research paper by Uongoze Institute, which supports African leaders to attain sustainable development for nations in Africa.</td>\n                  <td>Uongoze Institute</td>\n                </tr>\n            \n                  </tbody>\n                </table>'},function(e,t){e.exports='<h1>Diversity, Equity, and Inclusion</h1>\n       <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope="row">1</th>\n                        <td><a href=\'http://stproject.org/resources/tools-for-transformation/leadership/\' target="_blank">Social Transformation Project</td>\n                <td>Covers an approach for mission-driven life both personally and professionally, including: decision-making, ailments, power, creative conversations, managing emotions, managing performance, delegation, etc.</td>\n                <td>Robert Gass</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td ><a href=\'http://www.leadershipchallenge.com/About-section-Our-Approach.aspx\' target="_blank">Five Practices of Leadership</td>\n                  <td>Three decades after its initial publication, The Five Practices of Exemplary Leadership model continues to prove its effectiveness as a clear, evidence-based path to achieving the extraordinary—for individuals, teams, organizations, and communities.</td>\n                  <td>Jim Kouzes and Barry Posner</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'https://www.franklincovey.com/the-7-habits.html\' target="_blank">7 Habits of Highly Effective People</td>\n                    <td>Includes an whole-life approach that includes prioritization and human relationships.</td>\n                    <td>Stephen Covey</td>\n                  </tr>\n            \n                  </tbody>\n                </table>'},function(e,t){e.exports='<h1>Staff Development and Retention</h1>\n            <p>There are numerous articles and lists that attempt to diagnose staff development and retention issues in non-profits, including these from <a href=\'https://hbr.org/2015/12/nonprofits-cant-keep-ignoring-talent-development\' target="_blank">HBR</a> and  <a href=\'https://ssir.org/articles/entry/the_nonprofit_leadership_development_deficit\' target="_blank">SSIR</a>. The most commonly cited topics are around compensation and benefits, opportunities for professional growth, preventing burnout, recognition/appreciation, communications and feedback, and work environment/culture. The resources below provide a few starting points for addressing these issues.</p>\n              \n  <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col" class="titleColumn">Resource Title</th>\n                        <th scope="col" class="descriptionColumn">Description</th>\n                        <th scope="col" class="authorColumn">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    \n              <tr>\n                <th scope="row">1</th>\n                <td ><a href=\'https://www.bridgespan.org/insights/library/leadership-development/on-the-job-development-opportunities\' target="_blank">On the Job Development Opportunities</td>\n                  <td>Helping employees develop the skills they need to advance in their careers and their organizations doesn’t have to be costly. In fact, there are plenty of creative on-the-job opportunities for employees to learn new skills without an organization having to spend a dime.</td>\n                  <td>Bridgespan Group</td>\n                </tr>\n                \n                   <tr>\n                  <th scope="row">2</th>\n                  <td><a href=\'fundthepeople.org/toolkit/guides/nonprofit/#wpContent\' target="_blank">Talking Talent for Non-profits</td>\n                    <td>A how-to guide for non-profits on talking to funders around investing in staff development. This guide is intended to help identify strengths and challenges in order to subsequently plan, budget, and secure resources to build on the strengths and address identified talent challenges.</td>\n                    <td>Fund the People</td>\n                  </tr>\n                  <tr>\n                  <th scope="row">3</th>\n                  <td><a href=\'/assets/resources/StaffWellness.pdf\' target="_blank">Wellbeing and Stress</td>\n                    <td>Chapter 4 of the <a href=\'https://www.frontlinedefenders.org/en/resource-publication/workbook-security-practical-steps-human-rights-defenders-risk\' target="_blank">Frontline Defenders Workbook on Security</a> covers wellbeing, stress, and preventing burnout for human rights defenders.</td>\n                    <td>Frontline Defenders</td>\n                  </tr>\n            \n                  </tbody>\n                </table>'},function(e,t){e.exports='<h1>Security: Staff Safety and Cybersecurity</h1>\n        \n<p>Wellspring is committed to supporting organizations to be as secure as they can be (and striving to being as secure as possible ourselves). We take a holistic view of security, encompassing physical, travel, and digital security, as well as overall well-being. The list of resources below contains two short checklists developed by Wellspring staff and a security consultant, plus an online assessment that provides personalized online security recommendations.</p>\n\n            <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col">Resource Title</th>\n                        <th scope="col">Description</th>\n                        <th scope="col">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                  \n                <th scope="row">1</th>\n                <td ><a href=\'/assets/resources/SecurityHolistic.pdf\' target="_blank">Security Checklist - Holistic</td>\n                  <td>A starting point for building strong holistic safety and security management practices</td>\n                  <td>Wellspring Staff and security consultant</td>\n                </tr>\n                <tr>\n                  <th scope="row">2</th>\n                  <td><a href=\'/assets/resources/SecurityDigital.pdf\' target="_blank">Security Checklist - Digital</td>\n                    <td>Building on the holistic security checklist above, this guide goes into more depth on digital security</td>\n                    <td>Wellspring Staff and security consultant</td>\n                  </tr>\n                  <tr>\n                    <th scope="row">3</th>\n                    <td><a href=\'https://www.securityplanner.org/#/\' target="_blank">Security Planner</td>\n                      <td>Answer a few questions to get personalized online safety recommendations.</td>\n                      <td>Citizen Lab</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <h2>Additional Support WPF Can Offer</h2>\n              \n                <p>Wellspring works closely with a security advisor, who is available to provide confidential and no-cost security guidance via phone, email, or Skype. We are happy to send an email introduction. </p>\n                <p>In addition, there are a number of organizations we work with that provide emergency/rapid response grants, support for human rights defenders at risk, grants and training to organizations looking to strengthen their digital security, and support to organizations that believe they may have been hacked. Please contact your program officer if any of these could be useful to your organization.</p>\n\n              '},function(e,t){e.exports="<h1>Board Structure and Role</h1>\n<p>Board Structure and Role is the capital city of England.</p>"},function(e,t){e.exports='<h1>About</h1>\n<p>Some kind of terms of use (same as WPF overall)</p>\n<p>This site was developed by <a href="http://osterman.io" target="_blank">John Osterman</a> in collaboration with Wellspring staff.</p>'}]);
//# sourceMappingURL=index.js.map