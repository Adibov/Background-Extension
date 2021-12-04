let defaultColor = '#b2ebf2';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ 'color': defaultColor });
    console.log('Default background color set to %cgreen', `color: ${defaultColor}`);
});
