/**
 * Copyright (c) 2013 CyberJack.
 * Use of this source code is governed by a MIT license
 * that can be found in the LICENSE.txt file.
 */
 
/**
 * Generate a string from the current date time
 * 
 */
var generateDateTime = function()
{
    var date = new Date(),
        year = date.getFullYear(),
        month = (date.getMonth() + 1),
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes();
        second = date.getSeconds();

    return year +'-'+ ( '0'+ month ).substr(-2) +'-'+ ( '0'+ day ).substr(-2) +' '+ ( '0'+ hour ).substr(-2) +':'+ ( '0'+ minute ).substr(-2) +':'+ ( '0'+ second ).substr(-2);
};


/**
 * Generate a v4 uuid/guid
 *
 * xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 * 
 * where x is any hexadecimal digit and y is one of 8, 9, a, or b
 */
var generateGuid = function()
{
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
    return uuid;
}


/**
 * Add the chrome listener
 * 
 */
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    var activeElement = document.activeElement;
    if( activeElement === document.body )
    {
        for( var i = 0; i < window.frames.length; ++i )
        {
            activeElement = frames[i].document.activeElement;
            if( activeElement !== frames[i].document.body )
                break;
        }
    }

    // Handle the request
    if ( activeElement.type == "text" || activeElement.type == "textarea" )
    {
        if( request == "insertRandomUuid" )
        {
            activeElement.value = generateGuid();
        }
        else if( request == "insertNullUuid" )
        {
            activeElement.value = '00000000-0000-0000-0000-000000000000';
        }
        else if( request === "insertCurrentDateTime" )
        {
            activeElement.value = generateDateTime();
        }
        else if( request === "insertFakeDateTime" )
        {
            activeElement.value = '2000-01-01 00:00:00';
        }
    }
});