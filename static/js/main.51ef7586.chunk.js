(this.webpackJsonpwordcounttoolbox=this.webpackJsonpwordcounttoolbox||[]).push([[0],{110:function(e,t,o){},111:function(e,t,o){},242:function(e,t,o){"use strict";o.r(t);var s=o(0),n=o.n(s),a=o(95),i=o.n(a),r=(o(110),o(105)),c=o(38),h=o(7),d=o(8),l=o(11),u=o(10),b=o(9),j=o.p+"static/media/logo.6ce24c58.svg",p=(o(111),o(112),o(96)),m=o.n(p),g=o(104),f=o(1),w=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(e){var s;if(Object(h.a)(this,o),(s=t.call(this,e)).state={},s.itemLabelChanged=s.itemLabelChanged.bind(Object(l.a)(s)),s.itemWordsChanged=s.itemWordsChanged.bind(Object(l.a)(s)),s.itemColorChanged=s.itemColorChanged.bind(Object(l.a)(s)),s.toggleColorPicker=s.toggleColorPicker.bind(Object(l.a)(s)),console.log(s.props.wordListColor),void 0===s.props.wordListColor){var n=s.props.colorPickerColors.length,a={hex:s.props.colorPickerColors[Math.floor(Math.random()*n)]};s.itemColorChanged(a)}return s}return Object(d.a)(o,[{key:"itemLabelChanged",value:function(e){var t=e.target.value;this.props.itemChanged(this.props.wordListIndex,{label:t})}},{key:"itemWordsChanged",value:function(e){var t=e.target.value;this.props.itemChanged(this.props.wordListIndex,{words:t})}},{key:"itemColorChanged",value:function(e){var t=e.hex;this.props.itemChanged(this.props.wordListIndex,{color:t}),this.setState({showColorPicker:!1})}},{key:"toggleColorPicker",value:function(){var e=!this.state.showColorPicker;this.setState({showColorPicker:e})}},{key:"render",value:function(){return Object(f.jsx)("li",{className:"list-group-item px-2",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-11",children:Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{className:"form-control",onChange:this.itemLabelChanged,value:this.props.wordListLabel,placeholder:"Word List Label"})})}),Object(f.jsx)("span",{className:"color-picker",style:{backgroundColor:this.props.wordListColor},onClick:this.toggleColorPicker}),this.state.showColorPicker&&Object(f.jsx)("div",{className:"col-12 d-flex flex-row-reverse",children:Object(f.jsx)(g.a,{color:this.props.wordListColor,onChangeComplete:this.itemColorChanged,colors:this.props.colorPickerColors,triangle:"top-right"})}),Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("div",{className:"form-group mb-0",children:Object(f.jsx)("textarea",{className:"form-control",onChange:this.itemWordsChanged,value:this.props.wordListWords,placeholder:"Comma-Separated Words"})})}),Object(f.jsx)("div",{className:"col-6",children:Object(f.jsx)("button",{onClick:this.props.deleteClicked,className:"btn btn-primary",children:"Delete"})})]})})}}]),o}(s.Component),v=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(e){var s;return Object(h.a)(this,o),(s=t.call(this,e)).colorPickerColors=m()({luminosity:"bright",count:27}),s}return Object(d.a)(o,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"card mb-2 word-lists",children:[Object(f.jsx)("div",{className:"card-header",children:Object(f.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:["Word Lists",Object(f.jsx)("button",{className:"btn btn-primary",onClick:this.props.loadWordFreqLists,children:"Load Word Freq. Lists"})]})}),Object(f.jsxs)("ul",{className:"list-group list-group-flush",children:[this.props.wordLists.map((function(t,o){return Object(f.jsx)(w,{wordListIndex:o,wordListLabel:t.label,wordListWords:t.words,wordListColor:t.color,itemChanged:e.props.itemChanged,deleteClicked:function(t){e.props.deleteWordList(t,o)},colorPickerColors:e.colorPickerColors},o)})),Object(f.jsx)("li",{className:"list-group-item px-2",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("div",{className:"form-group mb-0 text-right",children:Object(f.jsx)("button",{onClick:this.props.addWordList,className:"btn btn-primary",children:"+ Add Word List"})})})})})]})]})}}]),o}(s.Component),x=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(){return Object(h.a)(this,o),t.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"card-header",children:"Word Count Table"}),Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"List"}),Object(f.jsx)("th",{children:"Count"})]})}),Object(f.jsx)("tbody",{children:this.props.countData.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"undefined"===e[0]?"No List":e[0]}),Object(f.jsx)("td",{children:e[1]})]},"list-".concat(t))}))})]})]})}}]),o}(s.Component),O=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(e){var s;return Object(h.a)(this,o),(s=t.call(this,e)).state={},s}return Object(d.a)(o,[{key:"render",value:function(){for(var e=this,t=[],o=this.props,s=o.text,n=o.textWords,a=0;a<n.length;a++){var i=n[a];a>0&&t.push({text:s.substring(n[a-1].index+n[a-1].length,i.index)}),t.push({text:i.word,color:i.color})}return Object(f.jsx)("div",{style:{height:this.props.height,overflowY:"scroll"},className:this.state.isHovered?"border":"",children:Object(f.jsx)("div",{className:"result-text-wrap",onClick:this.props.switchedToEditor,onMouseEnter:function(){e.setState({isHovered:!0})},onMouseLeave:function(){e.setState({isHovered:!1})},children:t.map((function(e,t){return Object(f.jsx)("span",{style:{backgroundColor:e.color},children:e.text},"span-".concat(t))}))})})}}]),o}(s.Component),y=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(e){var s;return Object(h.a)(this,o),(s=t.call(this,e)).labels=[],s.processWords=s.processWords.bind(Object(l.a)(s)),s.state={editorHeight:"300px",isEditor:!0},s}return Object(d.a)(o,[{key:"processWords",value:function(){var e={},t={undefined:0};this.props.wordLists.forEach((function(o){var s=o.label,n=o.words,a=o.color;t[s]=0,void 0!==n&&n.split(",").forEach((function(t){e[t.trim()]={label:s,color:a}}))}));var o=Object(c.a)(this.props.text.matchAll(/\w+/g)).map((function(t){var o=t[0].toLowerCase(),s=t.index,n=t[0].length,a=void 0,i=void 0;return void 0!==e[o]&&(a=e[o].label,i=e[o].color),{word:o,index:s,length:n,label:a,color:i}}));console.log(JSON.stringify(e)),o.forEach((function(o){var s,n=null===(s=e[o.word])||void 0===s?void 0:s.label;t[n]++}));var s=Object.entries(t);this.setState({countData:s,textWords:o,isEditor:!1})}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"text-left pb-2",children:Object(f.jsx)("button",{onClick:this.processWords,className:"btn btn-primary",children:"Count"})}),this.state.isEditor?Object(f.jsx)("textarea",{style:{height:this.state.editorHeight},className:"w-100",rows:"10",onChange:this.props.textChanged,value:this.props.text}):Object(f.jsx)(O,{switchedToEditor:function(){e.setState({isEditor:!0})},textWords:this.state.textWords,labels:this.props.wordLists.map((function(e){var t=e.label;e.words;return t})),text:this.props.text,height:this.state.editorHeight}),this.state.countData&&Object(f.jsx)(x,{countData:this.state.countData})]})}}]),o}(s.Component),C=o(101),k=o.n(C),L=o(19),N=o(4),W=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(){return Object(h.a)(this,o),t.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"modal-body",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("textarea",{className:"form-control",placeholder:"Copy & Paste The Job Description Here ..."})})})}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("textarea",{className:"form-control",placeholder:"Copy & Paste Your CV Here ..."})})})})]})}}]),o}(s.Component),S=W,P=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(){var e;Object(h.a)(this,o);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={whoOptions:[{text:"Writer"},{text:"Student"},{text:"Job Seeker",slug:"jobseeker"},{text:"Teacher"}]},e}return Object(d.a)(o,[{key:"render",value:function(){console.log(this.props);var e=this.props.match,t=e.url,o=e.path;return Object(f.jsx)("div",{className:"modal fade ".concat(this.props.showModal?"show d-block":""),tabindex:"-1",role:"dialog","aria-hidden":"true",children:Object(f.jsx)("div",{className:"modal-dialog",role:"document",children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsx)("div",{className:"modal-header border-0",children:Object(f.jsx)(L.b,{to:"/wordcounttoolbox",className:"close",children:Object(f.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}),Object(f.jsx)(L.a,{children:Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{path:"".concat(o,"/jobseeker"),component:S}),Object(f.jsxs)(N.a,{path:"".concat(o),children:[Object(f.jsxs)("div",{className:"modal-body",children:[Object(f.jsx)("p",{className:"text-muted text-center",children:"Let us guide you on how WordCountToolbox helps you!"}),Object(f.jsx)("h2",{className:"text-center",children:"Who are you?"}),Object(f.jsx)("div",{className:"row mt-4",children:this.state.whoOptions.map((function(e){return Object(f.jsx)("div",{className:"col-sm-3 col-xs-6",children:Object(f.jsx)(L.b,{to:"".concat(t,"/").concat(e.slug),class:"btn shadow w-100 h-100",style:{backgroundColor:e.isSelected?"gold":"white"},for:"option2",children:e.text})})}))})]}),Object(f.jsxs)("div",{className:"modal-footer border-0",children:[Object(f.jsx)(L.b,{to:"/wordcounttoolbox",className:"btn btn-secondary",children:"Close"}),Object(f.jsx)("button",{type:"button",className:"btn btn-primary",children:"Next"})]})]})]})})]})})})}}]),o}(s.Component),A=Object(N.f)(P),T=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(e){var s;return Object(h.a)(this,o),(s=t.call(this,e)).state={project:{wordLists:[],text:"\nANNA KARENINA \n\n by Leo Tolstoy \n\n Translated by Constance Garnett \n\nPART ONE\n\nChapter 1\n\n\nHappy families are all alike; every unhappy family is unhappy in its\nown way.\n\nEverything was in confusion in the Oblonskys\u2019 house. The wife had\ndiscovered that the husband was carrying on an intrigue with a French\ngirl, who had been a governess in their family, and she had announced\nto her husband that she could not go on living in the same house with\nhim. This position of affairs had now lasted three days, and not only\nthe husband and wife themselves, but all the members of their family\nand household, were painfully conscious of it. Every person in the\nhouse felt that there was no sense in their living together, and that\nthe stray people brought together by chance in any inn had more in\ncommon with one another than they, the members of the family and\nhousehold of the Oblonskys. The wife did not leave her own room, the\nhusband had not been at home for three days. The children ran wild all\nover the house; the English governess quarreled with the housekeeper,\nand wrote to a friend asking her to look out for a new situation for\nher; the man-cook had walked off the day before just at dinner time;\nthe kitchen-maid, and the coachman had given warning.\n\nThree days after the quarrel, Prince Stepan Arkadyevitch\nOblonsky\u2014Stiva, as he was called in the fashionable world\u2014woke up at\nhis usual hour, that is, at eight o\u2019clock in the morning, not in his\nwife\u2019s bedroom, but on the leather-covered sofa in his study. He turned\nover his stout, well-cared-for person on the springy sofa, as though he\nwould sink into a long sleep again; he vigorously embraced the pillow\non the other side and buried his face in it; but all at once he jumped\nup, sat up on the sofa, and opened his eyes.\n\n\u201cYes, yes, how was it now?\u201d he thought, going over his dream. \u201cNow, how\nwas it? To be sure! Alabin was giving a dinner at Darmstadt; no, not\nDarmstadt, but something American. Yes, but then, Darmstadt was in\nAmerica. Yes, Alabin was giving a dinner on glass tables, and the\ntables sang, _Il mio tesoro_\u2014not _Il mio tesoro_ though, but something\nbetter, and there were some sort of little decanters on the table, and\nthey were women, too,\u201d he remembered.\n\nStepan Arkadyevitch\u2019s eyes twinkled gaily, and he pondered with a\nsmile. \u201cYes, it was nice, very nice. There was a great deal more that\nwas delightful, only there\u2019s no putting it into words, or even\nexpressing it in one\u2019s thoughts awake.\u201d And noticing a gleam of light\npeeping in beside one of the serge curtains, he cheerfully dropped his\nfeet over the edge of the sofa, and felt about with them for his\nslippers, a present on his last birthday, worked for him by his wife on\ngold-colored morocco. And, as he had done every day for the last nine\nyears, he stretched out his hand, without getting up, towards the place\nwhere his dressing-gown always hung in his bedroom. And thereupon he\nsuddenly remembered that he was not sleeping in his wife\u2019s room, but in\nhis study, and why: the smile vanished from his face, he knitted his\nbrows.\n\n\u201cAh, ah, ah! Oo!...\u201d he muttered, recalling everything that had\nhappened. And again every detail of his quarrel with his wife was\npresent to his imagination, all the hopelessness of his position, and\nworst of all, his own fault.\n\n\u201cYes, she won\u2019t forgive me, and she can\u2019t forgive me. And the most\nawful thing about it is that it\u2019s all my fault\u2014all my fault, though I\u2019m\nnot to blame. That\u2019s the point of the whole situation,\u201d he reflected.\n\u201cOh, oh, oh!\u201d he kept repeating in despair, as he remembered the\nacutely painful sensations caused him by this quarrel.\n\nMost unpleasant of all was the first minute when, on coming, happy and\ngood-humored, from the theater, with a huge pear in his hand for his\nwife, he had not found his wife in the drawing-room, to his surprise\nhad not found her in the study either, and saw her at last in her\nbedroom with the unlucky letter that revealed everything in her hand.\n\nShe, his Dolly, forever fussing and worrying over household details,\nand limited in her ideas, as he considered, was sitting perfectly still\nwith the letter in her hand, looking at him with an expression of\nhorror, despair, and indignation.\n\n\u201cWhat\u2019s this? this?\u201d she asked, pointing to the letter.\n\nAnd at this recollection, Stepan Arkadyevitch, as is so often the case,\nwas not so much annoyed at the fact itself as at the way in which he\nhad met his wife\u2019s words.\n\nThere happened to him at that instant what does happen to people when\nthey are unexpectedly caught in something very disgraceful. He did not\nsucceed in adapting his face to the position in which he was placed\ntowards his wife by the discovery of his fault. Instead of being hurt,\ndenying, defending himself, begging forgiveness, instead of remaining\nindifferent even\u2014anything would have been better than what he did\ndo\u2014his face utterly involuntarily (reflex spinal action, reflected\nStepan Arkadyevitch, who was fond of physiology)\u2014utterly involuntarily\nassumed its habitual, good-humored, and therefore idiotic smile.\n\nThis idiotic smile he could not forgive himself. Catching sight of that\nsmile, Dolly shuddered as though at physical pain, broke out with her\ncharacteristic heat into a flood of cruel words, and rushed out of the\nroom. Since then she had refused to see her husband.\n\n\u201cIt\u2019s that idiotic smile that\u2019s to blame for it all,\u201d thought Stepan\nArkadyevitch.\n\n\u201cBut what\u2019s to be done? What\u2019s to be done?\u201d he said to himself in\ndespair, and found no answer."},showWizard:!0},console.log(s.state),s.wordListItemChanged=s.wordListItemChanged.bind(Object(l.a)(s)),s.textChanged=s.textChanged.bind(Object(l.a)(s)),s.addWordList=s.addWordList.bind(Object(l.a)(s)),s.loadWordFreqLists=s.loadWordFreqLists.bind(Object(l.a)(s)),s.deleteWordList=s.deleteWordList.bind(Object(l.a)(s)),s}return Object(d.a)(o,[{key:"componentDidMount",value:function(){this.loadProject()}},{key:"deleteWordList",value:function(e,t){this.saveWordLists(this.state.project.wordLists.filter((function(e,o){return o!==t})))}},{key:"wordListItemChanged",value:function(e,t){console.log("wordListItemChanged");var o=Object(c.a)(this.state.project.wordLists);Object.assign(o[e],t),this.saveWordLists(o)}},{key:"addWordList",value:function(){this.saveWordLists(this.state.project.wordLists.concat({}))}},{key:"loadWordFreqLists",value:function(){var e=this;new Promise((function(e,t){k.a.get("https://script.google.com/macros/s/AKfycbwGLoLNyA2xFrt4eRO8WLqikpfLCpn75j53k8blDdHisFpPNf8oQ4mZ/exec").then((function(t){console.log(t.data),t.data.forEach((function(e,t){e.color="rgba(".concat(200-20*t,",").concat(200-20*t,",255,1)")})),e(t.data)})).catch((function(e){t(e)}))})).then((function(t){console.log(t),null!=t&&e.saveProject({wordLists:t})}))}},{key:"textChanged",value:function(e){var t=e.target.value;console.log(t),this.saveProject({text:t})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(L.a,{children:Object(f.jsxs)(N.c,{children:[Object(f.jsxs)(N.a,{path:"/wordcounttoolbox/wizard",children:[Object(f.jsx)(A,{showModal:this.state.showWizard}),Object(f.jsx)("div",{className:"modal-backdrop fade show"})]}),Object(f.jsxs)(N.a,{children:[Object(f.jsx)("p",{children:"Do you want to use the wizard to get started with wordcounttoolbox?"}),Object(f.jsx)(L.b,{to:"/wordcounttoolbox/wizard",children:"Click Here!"})]})]})}),Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("img",{src:j,className:"App-logo",alt:"logo"})," WordCountToolbox"]}),Object(f.jsx)("div",{className:"container-fluid pt-3",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-sm-8",children:Object(f.jsx)(y,{textChanged:this.textChanged,text:this.state.project.text,wordLists:this.state.project.wordLists})}),Object(f.jsx)("div",{className:"col-sm-4",children:Object(f.jsx)(v,{addWordList:this.addWordList,deleteWordList:this.deleteWordList,loadWordFreqLists:this.loadWordFreqLists,itemChanged:this.wordListItemChanged,wordLists:this.state.project.wordLists})})]})})]})}},{key:"localStorageLoader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wct_project",t=new Promise((function(t,o){setTimeout((function(){var s=localStorage.getItem(e);try{t(JSON.parse(s))}catch(n){o("ERROR parsing JSON")}}))}),0);return t}},{key:"localStorageSaver",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wct_project",o=new Promise((function(o,s){setTimeout((function(){try{var n=JSON.stringify(e);localStorage.setItem(t,n),o("success")}catch(a){s("error saving to localStorage")}}),0)}));return o}},{key:"loadProject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.localStorageLoader;t().then((function(t){console.log(t),null!=t&&e.setState({project:t})}))}},{key:"saveProject",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.localStorageSaver,o=Object(r.a)({},this.state.project);Object.assign(o,e),this.setState({project:o}),t(o)}},{key:"saveWordLists",value:function(e){this.saveProject({wordLists:e})}}]),o}(s.Component),I=T,E=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,244)).then((function(t){var o=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;o(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),E()}},[[242,1,2]]]);
//# sourceMappingURL=main.51ef7586.chunk.js.map