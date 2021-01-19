"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDayInRange = exports.clone = exports.convertDateRangeToString = exports.convertDateToString = exports.isLegalDateRangeString = exports.isLegalDateString = exports.areSameDay = exports.areSameMonth = exports.getDefaultMinDate = exports.getDefaultMaxDate = exports.WEEKDAYS_SHORT_EN = exports.WEEKDAYS_LONG_EN = exports.MONTHS_EN = exports.WEEKDAYS_SHORT = exports.WEEKDAYS_LONG = exports.MONTHS = void 0;

var _dayPickerReact = require("day-picker-react");

var MONTHS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
exports.MONTHS = MONTHS;
var WEEKDAYS_LONG = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
exports.WEEKDAYS_LONG = WEEKDAYS_LONG;
var WEEKDAYS_SHORT = ["日", "一", "二", "三", "四", "五", "六"];
exports.WEEKDAYS_SHORT = WEEKDAYS_SHORT;
var MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
exports.MONTHS_EN = MONTHS_EN;
var WEEKDAYS_LONG_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
exports.WEEKDAYS_LONG_EN = WEEKDAYS_LONG_EN;
var WEEKDAYS_SHORT_EN = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
exports.WEEKDAYS_SHORT_EN = WEEKDAYS_SHORT_EN;

var getDefaultMaxDate = function getDefaultMaxDate() {
  var date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  date.setMonth(11, 31);
  return date;
};

exports.getDefaultMaxDate = getDefaultMaxDate;

var getDefaultMinDate = function getDefaultMinDate() {
  var date = new Date();
  date.setFullYear(date.getFullYear() - 4);
  date.setMonth(0, 1);
  return date;
};

exports.getDefaultMinDate = getDefaultMinDate;

var areSameMonth = function areSameMonth(date1, date2) {
  return date1 != null && date2 != null && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
};

exports.areSameMonth = areSameMonth;

var areSameDay = function areSameDay(date1, date2) {
  return areSameMonth(date1, date2) && date1.getDate() === date2.getDate();
};

exports.areSameDay = areSameDay;

var isLegalDateString = function isLegalDateString(date) {
  if (date.trim() === "") {
    return true;
  }

  var strings = date.split("-");

  if (strings.length === 3 && strings[0].length === 4 && strings[1].length === 2 && strings[2].length === 2 && !isNaN(Number(strings[0])) && !isNaN(Number(strings[1])) && !isNaN(Number(strings[2]))) {
    var checkLeapYear = function checkLeapYear(str) {
      return str % 4 === 0 && str % 100 !== 0 || str % 400 === 0;
    };

    var solar = [1, 3, 5, 7, 8, 10, 12];
    var lunar = [4, 6, 9, 11];
    var year = parseInt(strings[0], 10);
    var month = parseInt(strings[1], 10);
    var day = parseInt(strings[2], 10);

    if (month > 0 && month < 13) {
      if (solar.includes(month)) {
        if (day > 0 && day < 32) {
          return true;
        }
      } else if (lunar.includes(month)) {
        if (day > 0 && day < 31) {
          return true;
        }
      } else {
        if (checkLeapYear(year) && day > 0 && day < 30) {
          return true;
        }

        if (!checkLeapYear(year) && day > 0 && day < 29) {
          return true;
        }
      }
    }

    return false;
  }

  return false;
};

exports.isLegalDateString = isLegalDateString;

var isLegalDateRangeString = function isLegalDateRangeString(date) {
  if (date.trim() === "") {
    return true;
  }

  var strings = date.split(" - ");
  return strings.length === 2 && strings[0].length && strings[1].length && isLegalDateString(strings[0]) && isLegalDateString(strings[1]);
};

exports.isLegalDateRangeString = isLegalDateRangeString;

var convertDateToString = function convertDateToString(date) {
  if (!date) {
    return "";
  }

  var dateString = date.toLocaleDateString("zh-Hans-CN");
  var strings = dateString.split("/");

  var addZero = function addZero(s) {
    if (parseInt(s, 10) < 10) {
      return "0".concat(s);
    }

    return s;
  };

  return "".concat(strings[0], "-").concat(addZero(strings[1]), "-").concat(addZero(strings[2]));
};

exports.convertDateToString = convertDateToString;

var convertDateRangeToString = function convertDateRangeToString(range) {
  if (!range) {
    return "";
  }

  var from = range[0];
  var to = range[1];

  if (!(from && to)) {
    return "";
  }

  if (_dayPickerReact.DateUtils.isDayAfter(to, from)) {
    return "".concat(convertDateToString(from), " - ").concat(convertDateToString(to));
  }

  return "".concat(convertDateToString(to), " - ").concat(convertDateToString(from));
};

exports.convertDateRangeToString = convertDateRangeToString;

var clone = function clone(d) {
  return d ? new Date(d.getTime()) : null;
};

exports.clone = clone;

var isDayInRange = function isDayInRange(date, dateRange) {
  var exclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (date === null || dateRange[0] === null || dateRange[1] === null) {
    return false;
  }

  var day = clone(date);
  var start = clone(dateRange[0]);
  var end = clone(dateRange[1]);

  if (day) {
    day.setHours(0, 0, 0, 0);
  }

  if (start) {
    start.setHours(0, 0, 0, 0);
  }

  if (end) {
    end.setHours(0, 0, 0, 0);
  }

  return start && day && end ? start <= day && day <= end && (!exclusive || !areSameDay(start, day) && !areSameDay(day, end)) : null;
};

exports.isDayInRange = isDayInRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvY29yZS50cyJdLCJuYW1lcyI6WyJNT05USFMiLCJXRUVLREFZU19MT05HIiwiV0VFS0RBWVNfU0hPUlQiLCJNT05USFNfRU4iLCJXRUVLREFZU19MT05HX0VOIiwiV0VFS0RBWVNfU0hPUlRfRU4iLCJnZXREZWZhdWx0TWF4RGF0ZSIsImRhdGUiLCJEYXRlIiwic2V0RnVsbFllYXIiLCJnZXRGdWxsWWVhciIsInNldE1vbnRoIiwiZ2V0RGVmYXVsdE1pbkRhdGUiLCJhcmVTYW1lTW9udGgiLCJkYXRlMSIsImRhdGUyIiwiZ2V0TW9udGgiLCJhcmVTYW1lRGF5IiwiZ2V0RGF0ZSIsImlzTGVnYWxEYXRlU3RyaW5nIiwidHJpbSIsInN0cmluZ3MiLCJzcGxpdCIsImxlbmd0aCIsImlzTmFOIiwiTnVtYmVyIiwiY2hlY2tMZWFwWWVhciIsInN0ciIsInNvbGFyIiwibHVuYXIiLCJ5ZWFyIiwicGFyc2VJbnQiLCJtb250aCIsImRheSIsImluY2x1ZGVzIiwiaXNMZWdhbERhdGVSYW5nZVN0cmluZyIsImNvbnZlcnREYXRlVG9TdHJpbmciLCJkYXRlU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiYWRkWmVybyIsInMiLCJjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmciLCJyYW5nZSIsImZyb20iLCJ0byIsIkRhdGVVdGlscyIsImlzRGF5QWZ0ZXIiLCJjbG9uZSIsImQiLCJnZXRUaW1lIiwiaXNEYXlJblJhbmdlIiwiZGF0ZVJhbmdlIiwiZXhjbHVzaXZlIiwic3RhcnQiLCJlbmQiLCJzZXRIb3VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVPLElBQU1BLE1BQU0sR0FBRyxDQUNwQixJQURvQixFQUVwQixJQUZvQixFQUdwQixJQUhvQixFQUlwQixJQUpvQixFQUtwQixJQUxvQixFQU1wQixJQU5vQixFQU9wQixJQVBvQixFQVFwQixJQVJvQixFQVNwQixJQVRvQixFQVVwQixLQVZvQixFQVdw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T0YsS0FBSyxJQUFJcEIsR0FBVCxJQUFnQnFCLEdBQWhCLEdBQ0hELEtBQUssSUFBSXBCLEdBQVQsSUFDRUEsR0FBRyxJQUFJcUIsR0FEVCxLQUVHLENBQUNGLFNBQUQsSUFBZSxDQUFDbkMsVUFBVSxDQUFDb0MsS0FBRCxFQUFRcEIsR0FBUixDQUFYLElBQTJCLENBQUNoQixVQUFVLENBQUNnQixHQUFELEVBQU1xQixHQUFOLENBRnhELENBREcsR0FJSCxJQUpKO0FBS0QsQ0E1Qk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlVXRpbHMgfSBmcm9tIFwiZGF5LXBpY2tlci1yZWFjdFwiXG5cbmV4cG9ydCBjb25zdCBNT05USFMgPSBbXG4gIFwiMeaciFwiLFxuICBcIjLmnIhcIixcbiAgXCIz5pyIXCIsXG4gIFwiNOaciFwiLFxuICBcIjXmnIhcIixcbiAgXCI25pyIXCIsXG4gIFwiN+aciFwiLFxuICBcIjjmnIhcIixcbiAgXCI55pyIXCIsXG4gIFwiMTDmnIhcIixcbiAgXCIxMeaciFwiLFxuICBcIjEy5pyIXCIsXG5dXG5leHBvcnQgY29uc3QgV0VFS0RBWVNfTE9ORyA9IFtcbiAgXCLlkajml6VcIixcbiAgXCLlkajkuIBcIixcbiAgXCLlkajkuoxcIixcbiAgXCLlkajkuIlcIixcbiAgXCLlkajlm5tcIixcbiAgXCLlkajkupRcIixcbiAgXCLlkajlha1cIixcbl1cbmV4cG9ydCBjb25zdCBXRUVLREFZU19TSE9SVCA9IFtcIuaXpVwiLCBcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiXVxuXG5leHBvcnQgY29uc3QgTU9OVEhTX0VOID0gW1xuICBcIkphbnVhcnlcIixcbiAgXCJGZWJydWFyeVwiLFxuICBcIk1hcmNoXCIsXG4gIFwiQXByaWxcIixcbiAgXCJNYXlcIixcbiAgXCJKdW5lXCIsXG4gIFwiSnVseVwiLFxuICBcIkF1Z3VzdFwiLFxuICBcIlNlcHRlbWJlclwiLFxuICBcIk9jdG9iZXJcIixcbiAgXCJOb3ZlbWJlclwiLFxuICBcIkRlY2VtYmVyXCIsXG5dXG5leHBvcnQgY29uc3QgV0VFS0RBWVNfTE9OR19FTiA9IFtcbiAgXCJTdW5kYXlcIixcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiLFxuXVxuZXhwb3J0IGNvbnN0IFdFRUtEQVlTX1NIT1JUX0VOID0gW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRNYXhEYXRlID0gKCkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIDEpXG4gIGRhdGUuc2V0TW9udGgoMTEsIDMxKVxuICByZXR1cm4gZGF0ZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdE1pbkRhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpIC0gNClcbiAgZGF0ZS5zZXRNb250aCgwLCAxKVxuICByZXR1cm4gZGF0ZVxufVxuXG5leHBvcnQgY29uc3QgYXJlU2FtZU1vbnRoID0gKGRhdGUxPzogRGF0ZSB8IG51bGwsIGRhdGUyPzogRGF0ZSB8IG51bGwpID0+XG4gIGRhdGUxICE9IG51bGwgJiZcbiAgZGF0ZTIgIT0gbnVsbCAmJlxuICBkYXRlMS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXG4gIGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKClcblxuZXhwb3J0IGNvbnN0IGFyZVNhbWVEYXkgPSAoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSA9PlxuICBhcmVTYW1lTW9udGgoZGF0ZTEsIGRhdGUyKSAmJiBkYXRlMS5nZXREYXRlKCkgPT09IGRhdGUyLmdldERhdGUoKVxuXG5leHBvcnQgY29uc3QgaXNMZWdhbERhdGVTdHJpbmcgPSAoZGF0ZTogc3RyaW5nKSA9PiB7XG4gIGlmIChkYXRlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3Qgc3RyaW5ncyA9IGRhdGUuc3BsaXQoXCItXCIpXG4gIGlmIChcbiAgICBzdHJpbmdzLmxlbmd0aCA9PT0gMyAmJlxuICAgIHN0cmluZ3NbMF0ubGVuZ3RoID09PSA0ICYmXG4gICAgc3RyaW5nc1sxXS5sZW5ndGggPT09IDIgJiZcbiAgICBzdHJpbmdzWzJdLmxlbmd0aCA9PT0gMiAmJlxuICAgICFpc05hTihOdW1iZXIoc3RyaW5nc1swXSkpICYmXG4gICAgIWlzTmFOKE51bWJlcihzdHJpbmdzWzFdKSkgJiZcbiAgICAhaXNOYU4oTnVtYmVyKHN0cmluZ3NbMl0pKVxuICApIHtcbiAgICBjb25zdCBjaGVja0xlYXBZZWFyID0gKHN0cjogbnVtYmVyKSA9PlxuICAgICAgKHN0ciAlIDQgPT09IDAgJiYgc3RyICUgMTAwICE9PSAwKSB8fCBzdHIgJSA0MDAgPT09IDBcbiAgICBjb25zdCBzb2xhciA9IFsxLCAzLCA1LCA3LCA4LCAxMCwgMTJdXG4gICAgY29uc3QgbHVuYXIgPSBbNCwgNiwgOSwgMTFdXG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHN0cmluZ3NbMF0sIDEwKVxuICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoc3RyaW5nc1sxXSwgMTApXG4gICAgY29uc3QgZGF5ID0gcGFyc2VJbnQoc3RyaW5nc1syXSwgMTApXG4gICAgaWYgKG1vbnRoID4gMCAmJiBtb250aCA8IDEzKSB7XG4gICAgICBpZiAoc29sYXIuaW5jbHVkZXMobW9udGgpKSB7XG4gICAgICAgIGlmIChkYXkgPiAwICYmIGRheSA8IDMyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsdW5hci5pbmNsdWRlcyhtb250aCkpIHtcbiAgICAgICAgaWYgKGRheSA+IDAgJiYgZGF5IDwgMzEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tMZWFwWWVhcih5ZWFyKSAmJiBkYXkgPiAwICYmIGRheSA8IDMwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoZWNrTGVhcFllYXIoeWVhcikgJiYgZGF5ID4gMCAmJiBkYXkgPCAyOSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBpc0xlZ2FsRGF0ZVJhbmdlU3RyaW5nID0gKGRhdGU6IHN0cmluZykgPT4ge1xuICBpZiAoZGF0ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IHN0cmluZ3MgPSBkYXRlLnNwbGl0KFwiIC0gXCIpXG4gIHJldHVybiAoXG4gICAgc3RyaW5ncy5sZW5ndGggPT09IDIgJiZcbiAgICBzdHJpbmdzWzBdLmxlbmd0aCAmJlxuICAgIHN0cmluZ3NbMV0ubGVuZ3RoICYmXG4gICAgaXNMZWdhbERhdGVTdHJpbmcoc3RyaW5nc1swXSkgJiZcbiAgICBpc0xlZ2FsRGF0ZVN0cmluZyhzdHJpbmdzWzFdKVxuICApXG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0RGF0ZVRvU3RyaW5nID0gKGRhdGU/OiBEYXRlIHwgXCJcIiB8IG51bGwpID0+IHtcbiAgaWYgKCFkYXRlKSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfVxuICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJ6aC1IYW5zLUNOXCIpXG4gIGNvbnN0IHN0cmluZ3MgPSBkYXRlU3RyaW5nLnNwbGl0KFwiL1wiKVxuICBjb25zdCBhZGRaZXJvID0gKHM6IHN0cmluZykgPT4ge1xuICAgIGlmIChwYXJzZUludChzLCAxMCkgPCAxMCkge1xuICAgICAgcmV0dXJuIGAwJHtzfWBcbiAgICB9XG4gICAgcmV0dXJuIHNcbiAgfVxuICByZXR1cm4gYCR7c3RyaW5nc1swXX0tJHthZGRaZXJvKHN0cmluZ3NbMV0pfS0ke2FkZFplcm8oc3RyaW5nc1syXSl9YFxufVxuXG5leHBvcnQgY29uc3QgY29udmVydERhdGVSYW5nZVRvU3RyaW5nID0gKFxuICByYW5nZT86IFtEYXRlIHwgdW5kZWZpbmVkIHwgbnVsbCwgRGF0ZSB8IHVuZGVmaW5lZCB8IG51bGxdXG4pID0+IHtcbiAgaWYgKCFyYW5nZSkge1xuICAgIHJldHVybiBcIlwiXG4gIH1cbiAgY29uc3QgZnJvbSA9IHJhbmdlWzBdXG4gIGNvbnN0IHRvID0gcmFuZ2VbMV1cbiAgaWYgKCEoZnJvbSAmJiB0bykpIHtcbiAgICByZXR1cm4gXCJcIlxuICB9XG4gIGlmIChEYXRlVXRpbHMuaXNEYXlBZnRlcih0bywgZnJvbSkpIHtcbiAgICByZXR1cm4gYCR7Y29udmVydERhdGVUb1N0cmluZyhmcm9tKX0gLSAke2NvbnZlcnREYXRlVG9TdHJpbmcodG8pfWBcbiAgfVxuICByZXR1cm4gYCR7Y29udmVydERhdGVUb1N0cmluZyh0byl9IC0gJHtjb252ZXJ0RGF0ZVRvU3RyaW5nKGZyb20pfWBcbn1cblxuZXhwb3J0IGNvbnN0IGNsb25lID0gKGQ6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkKSA9PlxuICBkID8gbmV3IERhdGUoZC5nZXRUaW1lKCkpIDogbnVsbFxuXG5leHBvcnQgY29uc3QgaXNEYXlJblJhbmdlID0gKFxuICBkYXRlOiBEYXRlLFxuICBkYXRlUmFuZ2U6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdLFxuICBleGNsdXNpdmU6IGJvb2xlYW4gPSBmYWxzZVxuKSA9PiB7XG4gIGlmIChkYXRlID09PSBudWxsIHx8IGRhdGVSYW5nZVswXSA9PT0gbnVsbCB8fCBkYXRlUmFuZ2VbMV0gPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGRheSA9IGNsb25lKGRhdGUpXG4gIGNvbnN0IHN0YXJ0ID0gY2xvbmUoZGF0ZVJhbmdlWzBdKVxuICBjb25zdCBlbmQgPSBjbG9uZShkYXRlUmFuZ2VbMV0pXG5cbiAgaWYgKGRheSkge1xuICAgIGRheS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICB9XG4gIGlmIChzdGFydCkge1xuICAgIHN0YXJ0LnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIH1cbiAgaWYgKGVuZCkge1xuICAgIGVuZC5zZXRIb3VycygwLCAwLCAwLCAwKVxuICB9XG5cbiAgcmV0dXJuIHN0YXJ0ICYmIGRheSAmJiBlbmRcbiAgICA/IHN0YXJ0IDw9IGRheSAmJlxuICAgICAgICBkYXkgPD0gZW5kICYmXG4gICAgICAgICghZXhjbHVzaXZlIHx8ICghYXJlU2FtZURheShzdGFydCwgZGF5KSAmJiAhYXJlU2FtZURheShkYXksIGVuZCkpKVxuICAgIDogbnVsbFxufVxuIl19