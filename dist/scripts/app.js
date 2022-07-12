function copyAssetsLink() {
    var copyText = document.getElementById("bundlesLink");
    navigator.clipboard.writeText(copyText.textContent).then(() => {
        alert("🪄 Link is copied!");
    });
}