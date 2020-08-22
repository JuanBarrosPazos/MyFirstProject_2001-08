library JS [crossbrowser resource] :
// =================================================================
//               ===== images_loading_bar ====
// script written by Gerard Ferrandez - February 2005/January 2007
// http://www.dhteumeuleu.com
// =================================================================
var ILB_timeout = 0;
document.write('<span id="ILB"><span id="ILB_loading">Loading...</span><span id="ILB_background"><span id="ILB_bar"></span></span></span>');
function ILB_loop(){
	ILB_timeout++;
	var m = 0;
	for(var i = 0, n = document.images.length; i < n; i++) m += (document.images[i].complete)?1:0;
	document.getElementById('ILB_bar').style.width = Math.round(m / n * 100) + 'px';
	if (m == n || ILB_timeout > 156) setTimeout("document.getElementById('ILB').style.display='none';", 128);
	else setTimeout(ILB_loop, 64);
}
ILB_loop();
