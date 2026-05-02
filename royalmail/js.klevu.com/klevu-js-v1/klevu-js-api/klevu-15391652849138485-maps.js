var klevu_keywordUrlMap = [{
        keywords: ['re directions', 'redirection', 'change of address', 'moving', 'moving house', 'redirect my mail', 'mail redirection', 'redirect your personal mail', 'redirect business   mail'],
        url: 'https://www.royalmail.com/personal/receiving-mail/redirection'
    }],
    klevu_autoCorrectMap = [];

function klevu_sortAutocorrectMap() {
    var maxLength = 0,
        i = 0,
        len1 = 0,
        len2 = 0,
        temp, currLength = 0,
        j = 0;
    for (i = 0, len1 = klevu_autoCorrectMap.length; i < len1; i++) {
        maxLength = klevu_autoCorrectMap[i].keyword.length;
        for (j = i + 1, len2 = klevu_autoCorrectMap.length; j < len2; j++) {
            currLength = klevu_autoCorrectMap[j].keyword.length;
            if (maxLength < currLength) {
                maxLength = currLength;
                temp = klevu_autoCorrectMap[i];
                klevu_autoCorrectMap[i] = klevu_autoCorrectMap[j];
                klevu_autoCorrectMap[j] = temp;
            }
        }
    }
}
klevu_sortAutocorrectMap();