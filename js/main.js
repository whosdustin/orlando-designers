var clipboard = new Clipboard('#copyTheme');

clipboard.on('success', function(e) {
	var b = document.getElementById('copyTheme');
	b.textContent = 'Copied!';
	b.setAttribute("disabled", true);
	e.clearSelection();
});

clipboard.on('error', function(e) {
	var b = document.getElementById('copyTheme');
	b.textContent = 'Press ctrl/cmd + c to copy';
	b.setAttribute("disabled", true);
});
