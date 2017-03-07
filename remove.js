function removeIntrusion() {
  document.getElementById('expanding_cta_close_button').click();
	try {
  	document.getElementById('u_0_6b').remove();
	} catch(e) {
		try {
			document.getElementById('u_0_b').remove()
		} catch(f) {
			console.log('failed to remove it');
		}
	}
}

(function waitForLoad() {
	let el = document.getElementById('u_0_a');
  if (el.offsetParent !== null) {
		removeIntrusion();
  } else  {
    setTimeout(waitForLoad, 15);
  }
})();
