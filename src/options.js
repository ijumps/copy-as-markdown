var DEFAULT_OPTIONS = {
  escape: false
};

var Options = {
  save: function (params) {
    chrome.storage.sync.set(params);
  },

  load: function (callback) {
    chrome.storage.sync.get(DEFAULT_OPTIONS, callback);
  },

  onChange: function(callback) {
    chrome.storage.onChanged.addListener(function(changes, _) {
      var callbackChanges = {};

      for (key in DEFAULT_OPTIONS) {
        callbackChanges[key] = changes[key].newValue;
      }

      callback(callbackChanges);
    })

  }
};
