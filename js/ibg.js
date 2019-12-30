"use strict";

$(document).ready(function(){

	let ibg = document.getElementsByClassName("ibg");
	for (let i = 0; i < ibg.length; i++) {
  	let item = $(ibg[i]);
  	let child = item.children();
		let link = child.attr("src");
		item.css("background", `url('${link}') 50% 50% no-repeat`);
		item.css("background-size", "cover");
		child.remove();
	}
});