/**
 * tiktok-regex <https://github.com/barnardos/tiktok-regex>
 * 
 */

'use strict';

module.exports = function tiktokRegex() {
  var regex = /^.*https:\/\/(?:m|www|vm)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/g;

  return regex;
};