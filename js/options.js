window.onload = function() {
	var fpa_input = $("#fpa");

	chrome.storage.local.get("fpa", function(data) {
		if(data.fpa) fpa_input.prop("checked", true);
	});

	$("#save").on("click", function() {
		chrome.storage.local.set({"fpa": fpa_input.prop("checked")}, function() {
			alert("Your options has been updated !");
		});
	});
}
