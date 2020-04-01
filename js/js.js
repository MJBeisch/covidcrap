function CopyToClipboard(target) {
  /* Get the text field */
  var TargetedTextarea = document.getElementById(target);

  TargetedTextarea.select();
  TargetedTextarea.setSelectionRange(0, 99999);

  document.execCommand("copy");
}

document.querySelectorAll('.button.copytext').forEach(item => {
	item.addEventListener('click', event => {
  		var SelectTargetTextarea = item.getAttribute('id') + '-text';
  		CopyToClipboard(SelectTargetTextarea);
	})
})