document.getElementById('settingsForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const userAgent = document.getElementById('userAgent').value;
  const screenWidth = document.getElementById('screenWidth').value;
  const screenHeight = document.getElementById('screenHeight').value;

  chrome.storage.sync.set({
    userAgent,
    screenWidth,
    screenHeight
  }, function() {
    alert('Settings saved');
  });
});
