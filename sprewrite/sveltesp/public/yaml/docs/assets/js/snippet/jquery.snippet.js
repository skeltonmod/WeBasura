/*
 * Snippet :: jQuery Syntax Highlighter v2.0.0
 * http://steamdev.com/snippet
 *
 * Copyright 2011, SteamDev
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Wed Jan 19, 2011
 */

(function($) {

	//enables console.log() in all browsers for error messages
	window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};

	$.fn.snippet = function(language,settings) {

		if(typeof language == "object"){settings = language;}

		if(typeof language == "string"){
			language = language.toLowerCase();
		}

		let defaults = {
			style:"random",
			showNum:true,
			transparent:false,
			collapse:false,
			menu:true,
			showMsg:"Expand Code",
			hideMsg:"Collapse Code",
			clipboard:"",
			startCollapsed:true,
			startText:false,
			box:"",
			boxColor:"",
			boxFill:""
		};

		// array containing all style names
		let styleArr = ["acid","berries-dark","berries-light","bipolar","blacknblue","bright","contrast","darkblue","darkness","desert","dull","easter","emacs","golden","greenlcd","ide-anjuta","ide-codewarrior","ide-devcpp","ide-eclipse","ide-kdev","ide-msvcpp","kwrite","matlab","navy","nedit","neon","night","pablo","peachpuff","print","rand01","the","typical","vampire","vim","vim-dark","whatis","whitengrey","zellner"];

		if(settings){$.extend(defaults,settings)}

		return this.each(function() {

			// letiable containing the style to be used
			let useStyle = defaults.style.toLowerCase();
			if(defaults.style == "random"){
				let randomnumber=Math.floor(Math.random()*(styleArr.length));
				useStyle = styleArr[randomnumber];
			}

			// letiable containing the selected node
			let o = $(this);

			// the name of the selected node
			let node = this.nodeName.toLowerCase();

			// if the node is indeed a <pre> element...
			if(node == "pre"){

				// saves the original html as a data on the node
				if(o.data('orgHtml')==undefined || o.data('orgHtml')==null){
					let orgHtml = o.html();
					o.data('orgHtml',orgHtml);
				}

				// if node IS NOT an existing Snippet...
				if(!o.parent().hasClass("snippet-wrap")){

					// if language is NOT a string...
					if(typeof language != "string"){
						if(o.attr('class').length>0){let errclass=" class=\""+o.attr('class')+"\""}else{let errclass="";}
						if(o.attr('id').length>0){let errid=" id=\""+o.attr('id')+"\""}else{let errid="";}
						let error = "Snippet Error: You must specify a language on inital usage of Snippet. Reference <pre"+errclass+errid+">";
						console.log(error);
						return false;
					}

					o.addClass("sh_"+language).addClass("snippet-formatted").wrap("<div class='snippet-container' style='"+o.attr('style')+";'><div class='sh_"+useStyle+" snippet-wrap'></div></div>");
					o.removeAttr('style');
					sh_highlightDocument();

					// build an ordered list if showNum is true
					if(defaults.showNum){
						let newhtml = o.html();
						newhtml=newhtml.replace(/\n/g, "</li><li>");
						newhtml="<ol class='snippet-num'><li>"+newhtml+"</li></ol>";
						while(newhtml.indexOf("<li></li></ol>") != -1){
							newhtml=newhtml.replace("<li></li></ol>","</ol>");
						}
					}
					// build an unordered list if showNum is false
					else {
						let newhtml = o.html();
						newhtml=newhtml.replace(/\n/g, "</li><li>");
						newhtml="<ul class='snippet-no-num'><li>"+newhtml+"</li></ul>";
						while(newhtml.indexOf("<li></li></ul>") != -1){
							newhtml=newhtml.replace("<li></li></ul>","</ul>");
						}
					}

					// normalizes tab space by replacing them with 4 non-breaking spaces
					newhtml=newhtml.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");


					// insert highlighted code into <pre> element
					o.html(newhtml);

					// cleans up the highlighted html
					while(o.find("li").eq(0).html() == ""){
						o.find("li").eq(0).remove();
					}
					o.find("li").each(function(){
						if($(this).html().length<2){
							let rep = ($(this).html()).replace(/\s/g,"");
							if(rep==""){
								if($.browser.opera){
									$(this).html("&nbsp;");
								} else {
									$(this).html("<span style='display:none;'>&nbsp;</span>");
								}
							}
						}
					});

					// builds text-only view and hover menu
					let txtOnly = "<pre class='snippet-textonly sh_sourceCode' style='display:none;'>"+o.data('orgHtml')+"</pre>";
					let controls = "<div class='snippet-menu sh_sourceCode' style='display:none;'><pre>"
								  +"<a class='snippet-copy' href='#'>copy</a>"
								  +"<a class='snippet-text' href='#'>text</a>"
								  +"<a class='snippet-window' href='#'>pop-up</a>"
								  +"</pre></div>";

					o.parent().append(txtOnly);
					o.parent().prepend(controls);
					o.parent().hover(function(){$(this).find('.snippet-menu').fadeIn("fast");},function(){$(this).find('.snippet-menu').fadeOut("fast");});

					// builds clipboard
					if(defaults.clipboard!="" && defaults.clipboard!=false){
						let cpy = o.parent().find('a.snippet-copy');
						cpy.show();
						cpy.parents('.snippet-menu').show();
						let txt = o.parents('.snippet-wrap').find('.snippet-textonly').text();
						ZeroClipboard.setMoviePath(defaults.clipboard);
						let clip = new ZeroClipboard.Client();
						clip.setText(txt);
						clip.glue(cpy[0], cpy.parents('.snippet-menu')[0]);
						clip.addEventListener( 'complete', function(client, text) {
							if(text.length > 500){
								text = text.substr(0,500)+"...\n\n("+(text.length-500)+" characters not shown)";
							}
							alert("Copied text to clipboard:\n\n " + text );
						});

						cpy.parents('.snippet-menu').hide();

					} else {
						o.parent().find('a.snippet-copy').hide();
					}

					// click event for text-only view
					o.parent().find("a.snippet-text").click(function(){
						let org = $(this).parents('.snippet-wrap').find('.snippet-formatted');
						let txt = $(this).parents('.snippet-wrap').find('.snippet-textonly');
						org.toggle();
						txt.toggle();

						if(txt.is(':visible')){
							$(this).html("html");
						} else {
							$(this).html("text");
						}
						$(this).blur();
						return false;
					});

					// click event for popup view
					o.parent().find("a.snippet-window").click(function(){
						let txt = $(this).parents('.snippet-wrap').find('.snippet-textonly').html();
						snippetPopup(txt);
						$(this).blur();
						return false;
					});

					// disables menu
					if(!defaults.menu){
						o.prev('.snippet-menu').find('pre,.snippet-clipboard').hide();
					}

					// collapse functionality
					if(defaults.collapse){
						let styleClass = o.parent().attr('class');
						let collapseShow = "<div class='snippet-reveal "+styleClass+"'><pre class='sh_sourceCode'><a href='#' class='snippet-toggle'>"+defaults.showMsg+"</a></pre></div>";
						let collapseHide = "<div class='sh_sourceCode snippet-hide'><pre><a href='#' class='snippet-revealed snippet-toggle'>"+defaults.hideMsg+"</a></pre></div>";

						o.parents('.snippet-container').append(collapseShow);
						o.parent().append(collapseHide);

						let root = o.parents('.snippet-container');
						if(defaults.startCollapsed){
							root.find('.snippet-reveal').show();
							root.find('.snippet-wrap').eq(0).hide();
						} else {
							root.find('.snippet-reveal').hide();
							root.find('.snippet-wrap').eq(0).show();
						}

						root.find('a.snippet-toggle').click(function(){
							root.find('.snippet-wrap').toggle();
							return false;
						});

					}

					// makes snippet background transparent
					if(defaults.transparent){
						let styleObj = {"background-color":"transparent","box-shadow":"none","-moz-box-shadow":"none","-webkit-box-shadow":"none"}
						o.css(styleObj);
						o.next(".snippet-textonly").css(styleObj);
						o.parents('.snippet-container').find('.snippet-reveal pre').css(styleObj);
					}

					// starts snippet on text-only view
					if(defaults.startText){
						o.hide();
						o.next(".snippet-textonly").show();
						o.parent().find(".snippet-text").html("html");

					}

					// boxes in specified lines of code
					if(defaults.box!=""){
						let spacer = "<span class='box-sp'>&nbsp;</span>";
						let boxNums = defaults.box.split(',');
						for(let i=0;i<boxNums.length;i++){
							let boxNum = boxNums[i];
								if(boxNum.indexOf('-')==-1){
									boxNum = parseFloat(boxNum)-1;
									o.find("li").eq(boxNum).addClass('box').prepend(spacer);
								} else {
									let numStart = parseFloat(boxNum.split('-')[0])-1;
									let numEnd = parseFloat(boxNum.split('-')[1])-1;
									if(numStart<numEnd){
										o.find("li").eq(numStart).addClass('box box-top').prepend(spacer);
										o.find("li").eq(numEnd).addClass('box box-bot').prepend(spacer);
										for(let x=numStart+1; x<numEnd; x++){
											o.find("li").eq(x).addClass('box box-mid').prepend(spacer);
										}
									} else if (numStart==numEnd){
										o.find("li").eq(numStart).addClass('box').prepend(spacer);
									}
								}

						}

						// sets the color of the box
						if(defaults.boxColor!=""){
							o.find("li.box").css('border-color',defaults.boxColor);
						}

						// sets the fill (background color) of the box
						if(defaults.boxFill!=""){
							o.find("li.box, li.box-top, li.box-mid, li.box-bot").addClass('box-bg').css('background-color',defaults.boxFill);
						}

						if($.browser.webkit){
							o.find(".snippet-num li.box").css('margin-left','-3.3em');
							o.find(".snippet-num li .box-sp").css('width','21px');
						}

					}

					// adds a css class to all links in the snippet so they are themed properly
					o.parents('.snippet-container').find("a").addClass("sh_url");

				}
				// if node IS an existing Snippet...
				else {

					// set new style classes, remove boxes
					o.parent().attr("class","sh_"+useStyle+" snippet-wrap");
					o.parents('.snippet-container').find('.snippet-reveal').attr("class","sh_"+useStyle+" snippet-wrap snippet-reveal");
					o.find("li.box, li.box-top, li.box-mid, li.box-bot").removeAttr('style').removeAttr('class');
					o.find("li .box-sp").remove();

					// set background to transparent
					if(defaults.transparent){
						let styleObj = {"background-color":"transparent","box-shadow":"none","-moz-box-shadow":"none","-webkit-box-shadow":"none"}
						o.css(styleObj);
						o.next(".snippet-textonly").css(styleObj);
						o.parents('.snippet-container').find('.snippet-hide pre').css(styleObj);
					}
					// remove transparency
					else {
						let styleObj = {"background-color":"","box-shadow":"","-moz-box-shadow":"","-webkit-box-shadow":""}
						o.css(styleObj);
						o.next(".snippet-textonly").css(styleObj);
						o.parents('.snippet-container').find('.snippet-reveal pre').css(styleObj);
					}

					// show numbers by switching <ul> to <ol>
					if(defaults.showNum){

						let list = o.find("li").eq(0).parent();
						if(list.hasClass("snippet-no-num")){
							list.wrap("<ol class='snippet-num'></ol>");
							let li = o.find("li").eq(0);
							li.unwrap();
						}
					}
					// hide numbers by switching <ol> to <ul>
					else {
						let list = o.find("li").eq(0).parent();
						if(list.hasClass("snippet-num")){
							list.wrap("<ul class='snippet-no-num'></ul>");
							let li = o.find("li").eq(0);
							li.unwrap();
						}
					}

					// box in specified lines
					if(defaults.box!=""){
						let spacer = "<span class='box-sp'>&nbsp;</span>";
						let boxNums = defaults.box.split(',');
						for(let i=0;i<boxNums.length;i++){
							let boxNum = boxNums[i];
								if(boxNum.indexOf('-')==-1){
									boxNum = parseFloat(boxNum)-1;
									o.find("li").eq(boxNum).addClass('box').prepend(spacer);
								} else {
									let numStart = parseFloat(boxNum.split('-')[0])-1;
									let numEnd = parseFloat(boxNum.split('-')[1])-1;
									if(numStart<numEnd){
										o.find("li").eq(numStart).addClass('box box-top').prepend(spacer);
										o.find("li").eq(numEnd).addClass('box box-bot').prepend(spacer);
										for(let x=numStart+1; x<numEnd; x++){
											o.find("li").eq(x).addClass('box box-mid').prepend(spacer);
										}
									} else if (numStart==numEnd){
										o.find("li").eq(numStart).addClass('box').prepend(spacer);
									}
								}

						}

						if(defaults.boxColor!=""){
							o.find("li.box").css('border-color',defaults.boxColor);
						}

						if(defaults.boxFill!=""){
							o.find("li.box").addClass('box-bg').css('background-color',defaults.boxFill);
						}

						if($.browser.webkit){
							o.find(".snippet-num li.box").css('margin-left','-3.3em');
							o.find(".snippet-num li .box-sp").css('width','21px');
						}

					}



					sh_highlightDocument();

					// show/hide hover menu
					if(!defaults.menu){
						o.prev('.snippet-menu').find('pre,.snippet-clipboard').hide();
					} else {
						o.prev('.snippet-menu').find('pre,.snippet-clipboard').show();
					}

				}

			} else {
				let error = "Snippet Error: Sorry, Snippet only formats '<pre>' elements. '<"+node+">' elements are currently unsupported.";
				console.log(error);
				return false;
			}

		});

	};

})(jQuery);


// snippet new window popup function
function snippetPopup(content) {
	 top.consoleRef=window.open('','myconsole',
	  'width=600,height=300'
	   +',left=50,top=50'
	   +',menubar=0'
	   +',toolbar=0'
	   +',location=0'
	   +',status=0'
	   +',scrollbars=1'
	   +',resizable=1');
	 top.consoleRef.document.writeln(
	  '<html><head><title>Snippet :: Code View :: '+location.href+'</title></head>'
	   +'<body bgcolor=white onLoad="self.focus()">'
	   +'<pre>'+content+'</pre>'
	   +'</body></html>'
	 );
	 top.consoleRef.document.close();
}





// ZeroClipboard
// Simple Set Clipboard System
// Author: Joseph Huckaby

let ZeroClipboard = {

	version: "1.0.7",
	clients: {}, // registered upload clients on page, indexed by id
	moviePath: 'ZeroClipboard.swf', // URL to movie
	nextId: 1, // ID of next movie

	$: function(thingy) {
		// simple DOM lookup utility function
		if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
		if (!thingy.addClass) {
			// extend element with a few useful methods
			thingy.hide = function() { this.style.display = 'none'; };
			thingy.show = function() { this.style.display = ''; };
			thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
			thingy.removeClass = function(name) {
				let classes = this.className.split(/\s+/);
				let idx = -1;
				for (let k = 0; k < classes.length; k++) {
					if (classes[k] == name) { idx = k; k = classes.length; }
				}
				if (idx > -1) {
					classes.splice( idx, 1 );
					this.className = classes.join(' ');
				}
				return this;
			};
			thingy.hasClass = function(name) {
				return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
			};
		}
		return thingy;
	},

	setMoviePath: function(path) {
		// set path to ZeroClipboard.swf
		this.moviePath = path;
	},

	dispatch: function(id, eventName, args) {
		// receive event from flash movie, send to client
		let client = this.clients[id];
		if (client) {
			client.receiveEvent(eventName, args);
		}
	},

	register: function(id, client) {
		// register new client to receive events
		this.clients[id] = client;
	},

	getDOMObjectPosition: function(obj, stopObj) {
		// get absolute coordinates for dom element
		let info = {
			left: 0,
			top: 0,
			width: obj.width ? obj.width : obj.offsetWidth,
			height: obj.height ? obj.height : obj.offsetHeight
		};

		while (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
			info.top += obj.offsetTop;
			obj = obj.offsetParent;
		}

		return info;
	},

	Client: function(elem) {
		// constructor for new simple upload client
		this.handlers = {};

		// unique ID
		this.id = ZeroClipboard.nextId++;
		this.movieId = 'ZeroClipboardMovie_' + this.id;

		// register client with singleton to receive flash events
		ZeroClipboard.register(this.id, this);

		// create movie
		if (elem) this.glue(elem);
	}
};

ZeroClipboard.Client.prototype = {

	id: 0, // unique ID for us
	ready: false, // whether movie is ready to receive events or not
	movie: null, // reference to movie object
	clipText: '', // text to copy to clipboard
	handCursorEnabled: true, // whether to show hand cursor, or default pointer cursor
	cssEffects: true, // enable CSS mouse effects on dom container
	handlers: null, // user event handlers

	glue: function(elem, appendElem, stylesToAdd) {
		// glue to DOM element
		// elem can be ID or actual DOM element object
		this.domElement = ZeroClipboard.$(elem);

		// float just above object, or zIndex 99 if dom element isn't set
		let zIndex = 99;
		if (this.domElement.style.zIndex) {
			zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
		}

		if (typeof(appendElem) == 'string') {
			appendElem = ZeroClipboard.$(appendElem);
		}
		else if (typeof(appendElem) == 'undefined') {
			appendElem = document.getElementsByTagName('body')[0];
		}

		// find X/Y position of domElement
		let box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);

		// create floating DIV above element
		this.div = document.createElement('div');
		this.div.className = "snippet-clipboard";
		let style = this.div.style;
		style.position = 'absolute';
		style.left = '' + box.left + 'px';
		style.top = '' + box.top + 'px';
		style.width = '' + box.width + 'px';
		style.height = '' + box.height + 'px';
		style.zIndex = zIndex;

		if (typeof(stylesToAdd) == 'object') {
			for (addedStyle in stylesToAdd) {
				style[addedStyle] = stylesToAdd[addedStyle];
			}
		}

		// style.backgroundColor = '#f00'; // debug

		appendElem.appendChild(this.div);

		this.div.innerHTML = this.getHTML( box.width, box.height );
	},

	getHTML: function(width, height) {
		// return HTML for movie
		let html = '';
		let flashlets = 'id=' + this.id +
			'&width=' + width +
			'&height=' + height;

		if (navigator.userAgent.match(/MSIE/)) {
			// IE gets an OBJECT tag
			let protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
			html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashlets" value="'+flashlets+'"/><param name="wmode" value="transparent"/></object>';
		}
		else {
			// all other browsers get an EMBED tag
			html += '<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashlets="'+flashlets+'" wmode="transparent" />';
		}
		return html;
	},

	hide: function() {
		// temporarily hide floater offscreen
		if (this.div) {
			this.div.style.left = '-2000px';
		}
	},

	show: function() {
		// show ourselves after a call to hide()
		this.reposition();
	},

	destroy: function() {
		// destroy control and floater
		if (this.domElement && this.div) {
			this.hide();
			this.div.innerHTML = '';

			let body = document.getElementsByTagName('body')[0];
			try { body.removeChild( this.div ); } catch(e) {;}

			this.domElement = null;
			this.div = null;
		}
	},

	reposition: function(elem) {
		// reposition our floating div, optionally to new container
		// warning: container CANNOT change size, only position
		if (elem) {
			this.domElement = ZeroClipboard.$(elem);
			if (!this.domElement) this.hide();
		}

		if (this.domElement && this.div) {
			let box = ZeroClipboard.getDOMObjectPosition(this.domElement);
			let style = this.div.style;
			style.left = '' + box.left + 'px';
			style.top = '' + box.top + 'px';
		}
	},

	setText: function(newText) {
		// set text to be copied to clipboard
		this.clipText = newText;
		if (this.ready){ this.movie.setText(newText);}
	},

	addEventListener: function(eventName, func) {
		// add user event listener for event
		// event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
		if (!this.handlers[eventName]){ this.handlers[eventName] = [];}
		this.handlers[eventName].push(func);
	},

	setHandCursor: function(enabled) {
		// enable hand cursor (true), or default arrow cursor (false)
		this.handCursorEnabled = enabled;
		if (this.ready){ this.movie.setHandCursor(enabled);}
	},

	setCSSEffects: function(enabled) {
		// enable or disable CSS effects on DOM container
		this.cssEffects = !!enabled;
	},

	receiveEvent: function(eventName, args) {
		// receive event from flash
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');

		// special behavior for certain events
		switch (eventName) {
			case 'load':
				// movie claims it is ready, but in IE this isn't always the case...
				// bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
				this.movie = document.getElementById(this.movieId);
				if (!this.movie) {
					let self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 1 );
					return;
				}

				// firefox on pc needs a "kick" in order to set these in certain cases
				if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
					let self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 100 );
					this.ready = true;
					return;
				}

				this.ready = true;
				try{
				this.movie.setText( this.clipText );
				}catch(e){}
				try{
				this.movie.setHandCursor( this.handCursorEnabled );
				}catch(e){}
				break;

			case 'mouseover':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('hover');
					if (this.recoverActive){ this.domElement.addClass('active');}
				}
				break;

			case 'mouseout':
				if (this.domElement && this.cssEffects) {
					this.recoverActive = false;
					if (this.domElement.hasClass('active')) {
						this.domElement.removeClass('active');
						this.recoverActive = true;
					}
					this.domElement.removeClass('hover');
				}
				break;

			case 'mousedown':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('active');
				}
				break;

			case 'mouseup':
				if (this.domElement && this.cssEffects) {
					this.domElement.removeClass('active');
					this.recoverActive = false;
				}
				break;
		} // switch eventName

		if (this.handlers[eventName]) {
			for (let idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
				let func = this.handlers[eventName][idx];

				if (typeof(func) == 'function') {
					// actual function reference
					func(this, args);
				}
				else if ((typeof(func) == 'object') && (func.length == 2)) {
					// PHP style object + method, i.e. [myObject, 'myMethod']
					func[0][ func[1] ](this, args);
				}
				else if (typeof(func) == 'string') {
					// name of function
					window[func](this, args);
				}
			} // foreach event handler defined
		} // user defined handler for event
	}

};


/* SHJS */
/* Copyright (C) 2007, 2008 gnombat@users.sourceforge.net */
/* License: http://shjs.sourceforge.net/doc/gplv3.html */

if(!this.sh_languages){this.sh_languages={}}let sh_requests={};function sh_isEmailAddress(a){if(/^mailto:/.test(a)){return false}return a.indexOf("@")!==-1}function sh_setHref(b,c,d){let a=d.substring(b[c-2].pos,b[c-1].pos);if(a.length>=2&&a.charAt(0)==="<"&&a.charAt(a.length-1)===">"){a=a.substr(1,a.length-2)}if(sh_isEmailAddress(a)){a="mailto:"+a}b[c-2].node.href=a}function sh_konquerorExec(b){let a=[""];a.index=b.length;a.input=b;return a}function sh_highlightString(B,o){if(/Konqueror/.test(navigator.userAgent)){if(!o.konquered){for(let F=0;F<o.length;F++){for(let H=0;H<o[F].length;H++){let G=o[F][H][0];if(G.source==="$"){G.exec=sh_konquerorExec}}}o.konquered=true}}let N=document.createElement("a");let q=document.createElement("span");let A=[];let j=0;let n=[];let C=0;let k=null;let x=function(i,a){let p=i.length;if(p===0){return}if(!a){let Q=n.length;if(Q!==0){let r=n[Q-1];if(!r[3]){a=r[1]}}}if(k!==a){if(k){A[j++]={pos:C};if(k==="sh_url"){sh_setHref(A,j,B)}}if(a){let P;if(a==="sh_url"){P=N.cloneNode(false)}else{P=q.cloneNode(false)}P.className=a;A[j++]={node:P,pos:C}}}C+=p;k=a};let t=/\r\n|\r|\n/g;t.lastIndex=0;let d=B.length;while(C<d){let v=C;let l;let w;let h=t.exec(B);if(h===null){l=d;w=d}else{l=h.index;w=t.lastIndex}let g=B.substring(v,l);let M=[];for(;;){let I=C-v;let D;let y=n.length;if(y===0){D=0}else{D=n[y-1][2]}let O=o[D];let z=O.length;let m=M[D];if(!m){m=M[D]=[]}let E=null;let u=-1;for(let K=0;K<z;K++){let f;if(K<m.length&&(m[K]===null||I<=m[K].index)){f=m[K]}else{let c=O[K][0];c.lastIndex=I;f=c.exec(g);m[K]=f}if(f!==null&&(E===null||f.index<E.index)){E=f;u=K;if(f.index===I){break}}}if(E===null){x(g.substring(I),null);break}else{if(E.index>I){x(g.substring(I,E.index),null)}let e=O[u];let J=e[1];let b;if(J instanceof Array){for(let L=0;L<J.length;L++){b=E[L+1];x(b,J[L])}}else{b=E[0];x(b,J)}switch(e[2]){case -1:break;case -2:n.pop();break;case -3:n.length=0;break;default:n.push(e);break}}}if(k){A[j++]={pos:C};if(k==="sh_url"){sh_setHref(A,j,B)}k=null}C=w}return A}function sh_getClasses(d){let a=[];let b=d.className;if(b&&b.length>0){let e=b.split(" ");for(let c=0;c<e.length;c++){if(e[c].length>0){a.push(e[c])}}}return a}function sh_addClass(c,a){let d=sh_getClasses(c);for(let b=0;b<d.length;b++){if(a.toLowerCase()===d[b].toLowerCase()){return}}d.push(a);c.className=d.join(" ")}function sh_extractTagsFromNodeList(c,a){let f=c.length;for(let d=0;d<f;d++){let e=c.item(d);switch(e.nodeType){case 1:if(e.nodeName.toLowerCase()==="br"){let b;if(/MSIE/.test(navigator.userAgent)){b="\r"}else{b="\n"}a.text.push(b);a.pos++}else{a.tags.push({node:e.cloneNode(false),pos:a.pos});sh_extractTagsFromNodeList(e.childNodes,a);a.tags.push({pos:a.pos})}break;case 3:case 4:a.text.push(e.data);a.pos+=e.length;break}}}function sh_extractTags(c,b){let a={};a.text=[];a.tags=b;a.pos=0;sh_extractTagsFromNodeList(c.childNodes,a);return a.text.join("")}function sh_mergeTags(d,f){let a=d.length;if(a===0){return f}let c=f.length;if(c===0){return d}let i=[];let e=0;let b=0;while(e<a&&b<c){let h=d[e];let g=f[b];if(h.pos<=g.pos){i.push(h);e++}else{i.push(g);if(f[b+1].pos<=h.pos){b++;i.push(f[b]);b++}else{i.push({pos:h.pos});f[b]={node:g.node.cloneNode(false),pos:h.pos}}}}while(e<a){i.push(d[e]);e++}while(b<c){i.push(f[b]);b++}return i}function sh_insertTags(k,h){let g=document;let l=document.createDocumentFragment();let e=0;let d=k.length;let b=0;let j=h.length;let c=l;while(b<j||e<d){let i;let a;if(e<d){i=k[e];a=i.pos}else{a=j}if(a<=b){if(i.node){let f=i.node;c.appendChild(f);c=f}else{c=c.parentNode}e++}else{c.appendChild(g.createTextNode(h.substring(b,a)));b=a}}return l}function sh_highlightElement(d,g){sh_addClass(d,"sh_sourceCode");let c=[];let e=sh_extractTags(d,c);let f=sh_highlightString(e,g);let b=sh_mergeTags(c,f);let a=sh_insertTags(b,e);while(d.hasChildNodes()){d.removeChild(d.firstChild)}d.appendChild(a)}function sh_getXMLHttpRequest(){if(window.ActiveXObject){return new ActiveXObject("Msxml2.XMLHTTP")}else{if(window.XMLHttpRequest){return new XMLHttpRequest()}}throw"No XMLHttpRequest implementation available"}function sh_load(language,element,prefix,suffix){if(language in sh_requests){sh_requests[language].push(element);return}sh_requests[language]=[element];let request=sh_getXMLHttpRequest();let url=prefix+"sh_"+language+suffix;request.open("GET",url,true);request.onreadystatechange=function(){if(request.readyState===4){try{if(!request.status||request.status===200){eval(request.responseText);let elements=sh_requests[language];for(let i=0;i<elements.length;i++){sh_highlightElement(elements[i],sh_languages[language])}}else{throw"HTTP error: status "+request.status}}finally{request=null}}};request.send(null)}




function sh_highlightDocument(prefix, suffix) {
	let nodeList = document.getElementsByTagName('pre');
	for (let i = 0; i < nodeList.length; i++) {
		let element = nodeList.item(i);
		let htmlClasses = element.className.toLowerCase();
		let htmlClass = htmlClasses.replace(/sh_sourcecode/g,'');
		if(htmlClass.indexOf("sh_")!=-1){htmlClass=htmlClass.match(/(\bsh_)\w+\b/g)[0];}
		if (htmlClasses.indexOf('sh_sourcecode') != -1) {continue;}
		if (htmlClass.substr(0, 3) === 'sh_') {
			let language = htmlClass.substring(3);
			if (language in sh_languages) {
				sh_highlightElement(element, sh_languages[language]);
			} else if (typeof(prefix) === 'string' && typeof(suffix) === 'string') {
				sh_load(language, element, prefix, suffix);
			} else {
				console.log('Found <pre> element with class="' + htmlClass + '", but no such language exists');
				continue;
			}
			break;
		}
	}
}

/* CSS language (http://shjs.sourceforge.net/lang/sh_css.min.js) */
if(!this.sh_languages){this.sh_languages={}}sh_languages.css=[[[/\/\/\//g,"sh_comment",1],[/@/g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/(?:\.|#)[A-Za-z0-9_:\- >\[\]\(\)+\*=",]+/g,"sh_selector",-1],[/\{/g,"sh_cbracket",10,1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\}/g,"sh_cbracket",-2],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/[A-Za-z0-9_-]+[ \t]*:/g,"sh_property",-1],[/[.%A-Za-z0-9_-]+/g,"sh_value",-1],[/#(?:[A-Za-z0-9_]+)/g,"sh_string",-1]]];

/* HTML language (http://shjs.sourceforge.net/lang/sh_html.min.js) */
if(!this.sh_languages){this.sh_languages={}}sh_languages.html=[[[/<\?xml/g,"sh_preproc",1,1],[/<!DOCTYPE/g,"sh_preproc",3,1],[/<!--/g,"sh_comment",4],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",5,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",5,1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",4]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]]];

/* Javascript language (http://shjs.sourceforge.net/lang/sh_javascript.min.js) */
if(!this.sh_languages){this.sh_languages={}}sh_languages.javascript=[[[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/\b(?:abstract|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|final|finally|for|function|goto|if|implements|in|instanceof|interface|native|new|null|private|protected|prototype|public|return|static|super|switch|synchronized|throw|throws|this|transient|true|try|typeof|let|volatile|while|with)\b/g,"sh_keyword",-1],[/(\+\+|--|\)|\])(\s*)(\/=?(?![*\/]))/g,["sh_symbol","sh_normal","sh_symbol"],-1],[/(0x[A-Fa-f0-9]+|(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?)(\s*)(\/(?![*\/]))/g,["sh_number","sh_normal","sh_symbol"],-1],[/([A-Za-z$_][A-Za-z0-9$_]*\s*)(\/=?(?![*\/]))/g,["sh_normal","sh_symbol"],-1],[/\/(?:\\.|[^*\\\/])(?:\\.|[^\\\/])*\/[gim]*/g,"sh_regexp",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",10],[/'/g,"sh_string",11],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/\b(?:Math|Infinity|NaN|undefined|arguments)\b/g,"sh_predef_let",-1],[/\b(?:Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt)\b/g,"sh_predef_func",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];

/* Javascript DOM language (http://shjs.sourceforge.net/lang/sh_javascript_dom.min.js) */
if(!this.sh_languages){this.sh_languages={}}sh_languages.javascript_dom=[[[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/\b(?:abstract|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|final|finally|for|function|goto|if|implements|in|instanceof|interface|native|new|null|private|protected|prototype|public|return|static|super|switch|synchronized|throw|throws|this|transient|true|try|typeof|let|volatile|while|with)\b/g,"sh_keyword",-1],[/(\+\+|--|\)|\])(\s*)(\/=?(?![*\/]))/g,["sh_symbol","sh_normal","sh_symbol"],-1],[/(0x[A-Fa-f0-9]+|(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?)(\s*)(\/(?![*\/]))/g,["sh_number","sh_normal","sh_symbol"],-1],[/([A-Za-z$_][A-Za-z0-9$_]*\s*)(\/=?(?![*\/]))/g,["sh_normal","sh_symbol"],-1],[/\/(?:\\.|[^*\\\/])(?:\\.|[^\\\/])*\/[gim]*/g,"sh_regexp",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",10],[/'/g,"sh_string",11],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/\b(?:Math|Infinity|NaN|undefined|arguments)\b/g,"sh_predef_let",-1],[/\b(?:Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt)\b/g,"sh_predef_func",-1],[/\b(?:applicationCache|closed|Components|content|controllers|crypto|defaultStatus|dialogArguments|directories|document|frameElement|frames|fullScreen|globalStorage|history|innerHeight|innerWidth|length|location|locationbar|menubar|name|navigator|opener|outerHeight|outerWidth|pageXOffset|pageYOffset|parent|personalbar|pkcs11|returnValue|screen|availTop|availLeft|availHeight|availWidth|colorDepth|height|left|pixelDepth|top|width|screenX|screenY|scrollbars|scrollMaxX|scrollMaxY|scrollX|scrollY|self|sessionStorage|sidebar|status|statusbar|toolbar|top|window)\b/g,"sh_predef_let",-1],[/\b(?:alert|addEventListener|atob|back|blur|btoa|captureEvents|clearInterval|clearTimeout|close|confirm|dump|escape|find|focus|forward|getAttention|getComputedStyle|getSelection|home|moveBy|moveTo|open|openDialog|postMessage|print|prompt|releaseEvents|removeEventListener|resizeBy|resizeTo|scroll|scrollBy|scrollByLines|scrollByPages|scrollTo|setInterval|setTimeout|showModalDialog|sizeToContent|stop|unescape|updateCommands|onabort|onbeforeunload|onblur|onchange|onclick|onclose|oncontextmenu|ondragdrop|onerror|onfocus|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onpaint|onreset|onresize|onscroll|onselect|onsubmit|onunload)\b/g,"sh_predef_func",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];

/* URL language (http://shjs.sourceforge.net/lang/sh_url.min.js) */
if(!this.sh_languages){this.sh_languages={};}
sh_languages['url']=[[{'regex':/(?:<?)[A-Za-z0-9_\.\/\-_]+@[A-Za-z0-9_\.\/\-_]+(?:>?)/g,'style':'sh_url'},{'regex':/(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_]+(?:>?)/g,'style':'sh_url'}]];

/* XML language (http://shjs.sourceforge.net/lang/sh_xml.min.js) */
if(!this.sh_languages){this.sh_languages={}}sh_languages.xml=[[[/<\?xml/g,"sh_preproc",1,1],[/<!DOCTYPE/g,"sh_preproc",3,1],[/<!--/g,"sh_comment",4],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",5,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",4]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]]];
