/**
 * Copyright (c) 2013 CyberJack.
 * Use of this source code is governed by a MIT license
 * that can be found in the LICENSE.txt file.
 */


/**
 * Generic onClick function
 * 
 */
var genericOnClick = function(info, tab)
{
    chrome.tabs.sendMessage(tab.id, "insert"+ info.menuItemId);
}

// Build the context menu
var parent = chrome.contextMenus.create({
    "title": "Insert random Guid/Uuid",
    "contexts": ["editable"]
});

var child1 = chrome.contextMenus.create({
    "id": "RandomUuid",
    "title": "Insert random Guid/Uuid (v4)",
    "parentId": parent,
    "onclick": genericOnClick,
    "contexts": ["editable"]
});

var child2 = chrome.contextMenus.create({
    "id": "NullUuid",
    "title": "Insert null Guid/Uuid",
    "parentId": parent,
    "onclick": genericOnClick,
    "contexts": ["editable"]
});

var child3 = chrome.contextMenus.create({
    "title": "spacer", "parentId": parent,
    "type": "separator",
    "contexts": ["editable"]
});
    
var child4 = chrome.contextMenus.create({
    "id": "CurrentDateTime",
    "title": "Insert current date and time",
    "parentId": parent,
    "onclick": genericOnClick,
    "contexts": ["editable"]
});
    
var child5 = chrome.contextMenus.create({
    "id": "FakeDateTime",
    "title": "Insert fake date and time",
    "parentId": parent,
    "onclick": genericOnClick,
    "contexts": ["editable"]
});