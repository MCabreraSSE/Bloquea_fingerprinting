chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (let i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'User-Agent') {
        details.requestHeaders[i].value = 'Custom User-Agent'; // Cambia el User-Agent
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);
