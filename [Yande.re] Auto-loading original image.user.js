// ==UserScript==
// @name         [Yande.re] Auto-loading original image
// @icon         https://yande.re/favicon.ico
// @namespace    https://github.com/JumpJets/Yande-re-Auto-load-original-image
// @version      1.0
// @description  Replace sample image to original.
// @author       XCanG
// @match        https://yande.re/post/show/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	let link = document.getElementById("highres-show");
	if (typeof link !== 'undefined') {
		let page_img = document.getElementById("image");
		page_img.src = link.href;
		document.getElementById("resized_notice").remove();
	}
})();