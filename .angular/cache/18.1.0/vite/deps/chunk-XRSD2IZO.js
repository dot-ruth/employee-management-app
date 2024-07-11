import {
  EventEmitter
} from "./chunk-PPFKGMOX.js";

// node_modules/@syncfusion/ej2-base/src/util.js
var instances = "ej2_instances";
var uid = 0;
var isBlazorPlatform = false;
function createInstance(classFunction, params) {
  var arrayParam = params;
  arrayParam.unshift(void 0);
  return new (Function.prototype.bind.apply(classFunction, arrayParam))();
}
function setImmediate(handler) {
  var unbind;
  var num = new Uint16Array(5);
  var intCrypto = window.msCrypto || window.crypto;
  intCrypto.getRandomValues(num);
  var secret = "ej2" + combineArray(num);
  var messageHandler = function(event) {
    if (event.source === window && typeof event.data === "string" && event.data.length <= 32 && event.data === secret) {
      handler();
      unbind();
    }
  };
  window.addEventListener("message", messageHandler, false);
  window.postMessage(secret, "*");
  return unbind = function() {
    window.removeEventListener("message", messageHandler);
    handler = messageHandler = secret = void 0;
  };
}
function getValue(nameSpace, obj) {
  var value = obj;
  var splits = nameSpace.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  for (var i = 0; i < splits.length && !isUndefined(value); i++) {
    value = value[splits[parseInt(i.toString(), 10)]];
  }
  return value;
}
function setValue(nameSpace, value, obj) {
  var keys2 = nameSpace.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  var start = obj || {};
  var fromObj = start;
  var i;
  var length = keys2.length;
  var key;
  for (i = 0; i < length; i++) {
    key = keys2[parseInt(i.toString(), 10)];
    if (i + 1 === length) {
      fromObj["" + key] = value === void 0 ? {} : value;
    } else if (isNullOrUndefined(fromObj["" + key])) {
      fromObj["" + key] = {};
    }
    fromObj = fromObj["" + key];
  }
  return start;
}
function deleteObject(obj, key) {
  delete obj["" + key];
}
var containerObject = typeof window !== "undefined" ? window : {};
function isObject(obj) {
  var objCon = {};
  return !isNullOrUndefined(obj) && obj.constructor === objCon.constructor;
}
function getEnumValue(enumObject, enumValue) {
  return enumObject["" + enumValue];
}
function merge(source, destination) {
  if (!isNullOrUndefined(destination)) {
    var temrObj = source;
    var tempProp = destination;
    var keys2 = Object.keys(destination);
    var deepmerge = "deepMerge";
    for (var _i = 0, keys_1 = keys2; _i < keys_1.length; _i++) {
      var key = keys_1[_i];
      if (!isNullOrUndefined(temrObj["" + deepmerge]) && temrObj["" + deepmerge].indexOf(key) !== -1 && (isObject(tempProp["" + key]) || Array.isArray(tempProp["" + key]))) {
        extend(temrObj["" + key], temrObj["" + key], tempProp["" + key], true);
      } else {
        temrObj["" + key] = tempProp["" + key];
      }
    }
  }
}
function extend(copied, first, second, deep) {
  var result = copied && typeof copied === "object" ? copied : {};
  var length = arguments.length;
  var args = [copied, first, second, deep];
  if (deep) {
    length = length - 1;
  }
  var _loop_1 = function(i2) {
    if (!args[parseInt(i2.toString(), 10)]) {
      return "continue";
    }
    var obj1 = args[parseInt(i2.toString(), 10)];
    Object.keys(obj1).forEach(function(key) {
      var src = result["" + key];
      var copy = obj1["" + key];
      var clone;
      var isArrayChanged = Array.isArray(copy) && Array.isArray(src) && copy.length !== src.length;
      var blazorEventExtend = isBlazor() ? !(src instanceof Event) && !isArrayChanged : true;
      if (deep && blazorEventExtend && (isObject(copy) || Array.isArray(copy))) {
        if (isObject(copy)) {
          clone = src ? src : {};
          if (Array.isArray(clone) && Object.prototype.hasOwnProperty.call(clone, "isComplexArray")) {
            extend(clone, {}, copy, deep);
          } else {
            result["" + key] = extend(clone, {}, copy, deep);
          }
        } else {
          clone = isBlazor() ? src && Object.keys(copy).length : src ? src : [];
          result["" + key] = extend([], clone, copy, clone && clone.length || copy && copy.length);
        }
      } else {
        result["" + key] = copy;
      }
    });
  };
  for (var i = 1; i < length; i++) {
    _loop_1(i);
  }
  return result;
}
function isNullOrUndefined(value) {
  return value === void 0 || value === null;
}
function isUndefined(value) {
  return "undefined" === typeof value;
}
function getUniqueID(definedName) {
  return definedName + "_" + uid++;
}
function debounce(eventFunction, delay) {
  var out;
  return function() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var later = function() {
      out = null;
      return eventFunction.apply(_this, args);
    };
    clearTimeout(out);
    out = setTimeout(later, delay);
  };
}
function compareElementParent(child, parent) {
  var node = child;
  if (node === parent) {
    return true;
  } else if (node === document || !node) {
    return false;
  } else {
    return compareElementParent(node.parentNode, parent);
  }
}
function throwError(message) {
  try {
    throw new Error(message);
  } catch (e) {
    throw new Error(e.message + "\n" + e.stack);
  }
}
function print(element2, printWindow) {
  var div = document.createElement("div");
  var links = [].slice.call(document.getElementsByTagName("head")[0].querySelectorAll("base, link, style"));
  var blinks = [].slice.call(document.getElementsByTagName("body")[0].querySelectorAll("link, style"));
  if (blinks.length) {
    for (var l = 0, len = blinks.length; l < len; l++) {
      links.push(blinks[parseInt(l.toString(), 10)]);
    }
  }
  var reference = "";
  if (isNullOrUndefined(printWindow)) {
    printWindow = window.open("", "print", "height=452,width=1024,tabbar=no");
  }
  div.appendChild(element2.cloneNode(true));
  for (var i = 0, len = links.length; i < len; i++) {
    reference += links[parseInt(i.toString(), 10)].outerHTML;
  }
  printWindow.document.write("<!DOCTYPE html> <html><head>" + reference + "</head><body>" + div.innerHTML + "<script> (function() { window.ready = true; })(); <\/script></body></html>");
  printWindow.document.close();
  printWindow.focus();
  var interval = setInterval(function() {
    if (printWindow.ready) {
      printWindow.print();
      printWindow.close();
      clearInterval(interval);
    }
  }, 500);
  return printWindow;
}
function formatUnit(value) {
  var result = value + "";
  if (result.match(/auto|cm|mm|in|px|pt|pc|%|em|ex|ch|rem|vw|vh|vmin|vmax/)) {
    return result;
  }
  return result + "px";
}
function isBlazor() {
  return isBlazorPlatform;
}
function getElement(element2) {
  var xPath = "xPath";
  if (!(element2 instanceof Node) && isBlazor() && !isNullOrUndefined(element2["" + xPath])) {
    return document.evaluate(element2["" + xPath], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
  return element2;
}
function getInstance(element2, component) {
  var elem = typeof element2 === "string" ? document.querySelector(element2) : element2;
  if (elem["" + instances]) {
    for (var _i = 0, _a = elem["" + instances]; _i < _a.length; _i++) {
      var inst = _a[_i];
      if (inst instanceof component) {
        return inst;
      }
    }
  }
  return null;
}
function uniqueID() {
  if (typeof window === "undefined") {
    return;
  }
  var num = new Uint16Array(5);
  var intCrypto = window.msCrypto || window.crypto;
  return intCrypto.getRandomValues(num);
}
function combineArray(num) {
  var ret = "";
  for (var i = 0; i < 5; i++) {
    ret += (i ? "," : "") + num[parseInt(i.toString(), 10)];
  }
  return ret;
}

// node_modules/@syncfusion/ej2-base/src/intl/parser-base.js
var defaultNumberingSystem = {
  "latn": {
    "_digits": "0123456789",
    "_type": "numeric"
  }
};
var defaultNumberSymbols = {
  "decimal": ".",
  "group": ",",
  "percentSign": "%",
  "plusSign": "+",
  "minusSign": "-",
  "infinity": "∞",
  "nan": "NaN",
  "exponential": "E"
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var ParserBase = (
  /** @class */
  function() {
    function ParserBase2() {
    }
    ParserBase2.getMainObject = function(obj, cName) {
      var value = isBlazor() ? cName : "main." + cName;
      return getValue(value, obj);
    };
    ParserBase2.getNumberingSystem = function(obj) {
      return getValue("supplemental.numberingSystems", obj) || this.numberingSystems;
    };
    ParserBase2.reverseObject = function(prop, keys2) {
      var propKeys = keys2 || Object.keys(prop);
      var res = {};
      for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
        var key = propKeys_1[_i];
        if (!Object.prototype.hasOwnProperty.call(res, prop["" + key])) {
          res[prop["" + key]] = key;
        }
      }
      return res;
    };
    ParserBase2.getSymbolRegex = function(props) {
      var regexStr = props.map(function(str) {
        return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
      }).join("|");
      var regExp3 = RegExp;
      return new regExp3(regexStr, "g");
    };
    ParserBase2.getSymbolMatch = function(prop) {
      var matchKeys = Object.keys(defaultNumberSymbols);
      var ret = {};
      for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
        var key = matchKeys_1[_i];
        ret[prop["" + key]] = defaultNumberSymbols["" + key];
      }
      return ret;
    };
    ParserBase2.constructRegex = function(val) {
      var len = val.length;
      var ret = "";
      for (var i = 0; i < len; i++) {
        if (i !== len - 1) {
          ret += val[parseInt(i.toString(), 10)] + "|";
        } else {
          ret += val[parseInt(i.toString(), 10)];
        }
      }
      return ret;
    };
    ParserBase2.convertValueParts = function(value, regex, obj) {
      return value.replace(regex, function(str) {
        return obj["" + str];
      });
    };
    ParserBase2.getDefaultNumberingSystem = function(obj) {
      var ret = {};
      ret.obj = getValue("numbers", obj);
      ret.nSystem = getValue("defaultNumberingSystem", ret.obj);
      return ret;
    };
    ParserBase2.getCurrentNumericOptions = function(curObj, numberSystem, needSymbols, blazorMode) {
      var ret = {};
      var cur = this.getDefaultNumberingSystem(curObj);
      if (!isUndefined(cur.nSystem) || blazorMode) {
        var digits = blazorMode ? getValue("obj.mapperDigits", cur) : getValue(cur.nSystem + "._digits", numberSystem);
        if (!isUndefined(digits)) {
          ret.numericPair = this.reverseObject(digits, latnNumberSystem);
          var regExp3 = RegExp;
          ret.numberParseRegex = new regExp3(this.constructRegex(digits), "g");
          ret.numericRegex = "[" + digits[0] + "-" + digits[9] + "]";
          if (needSymbols) {
            ret.numericRegex = digits[0] + "-" + digits[9];
            ret.symbolNumberSystem = getValue(blazorMode ? "numberSymbols" : "symbols-numberSystem-" + cur.nSystem, cur.obj);
            ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
            ret.numberSystem = cur.nSystem;
          }
        }
      }
      return ret;
    };
    ParserBase2.getNumberMapper = function(curObj, numberSystem, isNumber) {
      var ret = {
        mapper: {}
      };
      var cur = this.getDefaultNumberingSystem(curObj);
      if (!isUndefined(cur.nSystem)) {
        ret.numberSystem = cur.nSystem;
        ret.numberSymbols = getValue("symbols-numberSystem-" + cur.nSystem, cur.obj);
        ret.timeSeparator = getValue("timeSeparator", ret.numberSymbols);
        var digits = getValue(cur.nSystem + "._digits", numberSystem);
        if (!isUndefined(digits)) {
          for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
            var i = latnNumberSystem_1[_i];
            ret.mapper[parseInt(i.toString(), 10)] = digits[parseInt(i.toString(), 10)];
          }
        }
      }
      return ret;
    };
    ParserBase2.nPair = "numericPair";
    ParserBase2.nRegex = "numericRegex";
    ParserBase2.numberingSystems = defaultNumberingSystem;
    return ParserBase2;
  }()
);
var blazorCurrencyData = {
  "DJF": "Fdj",
  "ERN": "Nfk",
  "ETB": "Br",
  "NAD": "$",
  "ZAR": "R",
  "XAF": "FCFA",
  "GHS": "GH₵",
  "XDR": "XDR",
  "AED": "د.إ.",
  "BHD": "د.ب.",
  "DZD": "د.ج.",
  "EGP": "ج.م.",
  "ILS": "₪",
  "IQD": "د.ع.",
  "JOD": "د.ا.",
  "KMF": "CF",
  "KWD": "د.ك.",
  "LBP": "ل.ل.",
  "LYD": "د.ل.",
  "MAD": "د.م.",
  "MRU": "أ.م.",
  "OMR": "ر.ع.",
  "QAR": "ر.ق.",
  "SAR": "ر.س.",
  "SDG": "ج.س.",
  "SOS": "S",
  "SSP": "£",
  "SYP": "ل.س.",
  "TND": "د.ت.",
  "YER": "ر.ي.",
  "CLP": "$",
  "INR": "₹",
  "TZS": "TSh",
  "EUR": "€",
  "AZN": "₼",
  "RUB": "₽",
  "BYN": "Br",
  "ZMW": "K",
  "BGN": "лв.",
  "NGN": "₦",
  "XOF": "CFA",
  "BDT": "৳",
  "CNY": "¥",
  "BAM": "КМ",
  "UGX": "USh",
  "USD": "$",
  "CZK": "Kč",
  "GBP": "£",
  "DKK": "kr.",
  "KES": "Ksh",
  "CHF": "CHF",
  "MVR": "ރ.",
  "BTN": "Nu.",
  "XCD": "EC$",
  "AUD": "$",
  "BBD": "$",
  "BIF": "FBu",
  "BMD": "$",
  "BSD": "$",
  "BWP": "P",
  "BZD": "$",
  "CAD": "$",
  "NZD": "$",
  "FJD": "$",
  "FKP": "£",
  "GIP": "£",
  "GMD": "D",
  "GYD": "$",
  "HKD": "$",
  "IDR": "Rp",
  "JMD": "$",
  "KYD": "$",
  "LRD": "$",
  "MGA": "Ar",
  "MOP": "MOP$",
  "MUR": "Rs",
  "MWK": "MK",
  "MYR": "RM",
  "PGK": "K",
  "PHP": "₱",
  "PKR": "Rs",
  "RWF": "RF",
  "SBD": "$",
  "SCR": "SR",
  "SEK": "kr",
  "SGD": "$",
  "SHP": "£",
  "SLL": "Le",
  "ANG": "NAf.",
  "SZL": "E",
  "TOP": "T$",
  "TTD": "$",
  "VUV": "VT",
  "WST": "WS$",
  "ARS": "$",
  "BOB": "Bs",
  "BRL": "R$",
  "COP": "$",
  "CRC": "₡",
  "CUP": "$",
  "DOP": "$",
  "GTQ": "Q",
  "HNL": "L",
  "MXN": "$",
  "NIO": "C$",
  "PAB": "B/.",
  "PEN": "S/",
  "PYG": "₲",
  "UYU": "$",
  "VES": "Bs.S",
  "IRR": "ريال",
  "GNF": "FG",
  "CDF": "FC",
  "HTG": "G",
  "XPF": "FCFP",
  "HRK": "kn",
  "HUF": "Ft",
  "AMD": "֏",
  "ISK": "kr",
  "JPY": "¥",
  "GEL": "₾",
  "CVE": "​",
  "KZT": "₸",
  "KHR": "៛",
  "KPW": "₩",
  "KRW": "₩",
  "KGS": "сом",
  "AOA": "Kz",
  "LAK": "₭",
  "MZN": "MTn",
  "MKD": "ден",
  "MNT": "₮",
  "BND": "$",
  "MMK": "K",
  "NOK": "kr",
  "NPR": "रु",
  "AWG": "Afl.",
  "SRD": "$",
  "PLN": "zł",
  "AFN": "؋",
  "STN": "Db",
  "MDL": "L",
  "RON": "lei",
  "UAH": "₴",
  "LKR": "රු.",
  "ALL": "Lekë",
  "RSD": "дин.",
  "TJS": "смн",
  "THB": "฿",
  "TMT": "m.",
  "TRY": "₺",
  "UZS": "сўм",
  "VND": "₫",
  "TWD": "NT$"
};
function getBlazorCurrencySymbol(currencyCode) {
  return getValue(currencyCode || "", blazorCurrencyData);
}

// node_modules/@syncfusion/ej2-base/src/hijri-parser.js
var HijriParser;
(function(HijriParser2) {
  var dateCorrection = [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167, 29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759, 29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348, 30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585, 30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939, 30968, 30998, 31027, 31057, 31086, 31116, 31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530, 31559, 31589, 31618, 31648, 31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120, 32150, 32180, 32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711, 32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243, 33272, 33302, 33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775, 33804, 33834, 33863, 33893, 33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306, 34336, 34365, 34395, 34424, 34454, 34483, 34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837, 34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074, 35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370, 35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665, 35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901, 35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254, 36284, 36314, 36343, 36373, 36403, 36433, 36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845, 36875, 36904, 36934, 36963, 36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436, 37465, 37495, 37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027, 38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558, 38587, 38617, 38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089, 39118, 39148, 39178, 39208, 39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621, 39650, 39680, 39709, 39739, 39768, 39798, 39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153, 40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389, 40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685, 40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980, 41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216, 41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570, 41599, 41629, 41658, 41688, 41718, 41748, 41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161, 42190, 42220, 42249, 42279, 42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751, 42780, 42810, 42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342, 43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873, 43903, 43932, 43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405, 44434, 44464, 44493, 44523, 44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936, 44966, 44996, 45025, 45055, 45084, 45114, 45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468, 45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704, 45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999, 46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295, 46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531, 46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885, 46915, 46944, 46974, 47003, 47033, 47063, 47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476, 47506, 47535, 47565, 47594, 47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066, 48096, 48125, 48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657, 48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189, 49218, 49248, 49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720, 49749, 49779, 49809, 49838, 49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252, 50281, 50311, 50340, 50370, 50400, 50429, 50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784, 50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019, 51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315, 51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611, 51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846, 51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200, 52230, 52260, 52290, 52319, 52349, 52379, 52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792, 52822, 52851, 52881, 52910, 52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383, 53412, 53441, 53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973, 54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505, 54535, 54564, 54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036, 55066, 55095, 55125, 55154, 55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567, 55597, 55627, 55657, 55686, 55716, 55745, 55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100, 56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335, 56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631, 56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926, 56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162, 57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517, 57546, 57576, 57605, 57634, 57664, 57694, 57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107, 58137, 58167, 58196, 58226, 58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698, 58727, 58757, 58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288, 59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820, 59850, 59879, 59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352, 60381, 60411, 60440, 60469, 60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883, 60912, 60942, 60972, 61002, 61031, 61061, 61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415, 61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651, 61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947, 61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242, 62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478, 62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832, 62862, 62891, 62921, 62950, 62980, 63009, 63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423, 63453, 63482, 63512, 63541, 63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014, 64043, 64073, 64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603, 64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136, 65166, 65195, 65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667, 65697, 65726, 65755, 65785, 65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199, 66228, 66258, 66287, 66317, 66346, 66376, 66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730, 66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967, 66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262, 67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557, 67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793, 67823, 67852, 67882, 67911, 67941, 67971, 68e3, 68030, 68060, 68089, 68119, 68148, 68177, 68207, 68236, 68266, 68295, 68325, 68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738, 68768, 68797, 68827, 68857, 68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330, 69359, 69388, 69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919, 69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451, 70481, 70510, 70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983, 71013, 71042, 71071, 71101, 71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514, 71543, 71573, 71602, 71632, 71662, 71691, 71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046, 72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282, 72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577, 72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872, 72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109, 73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464, 73493, 73523, 73552, 73581, 73611, 73640, 73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053, 74083, 74113, 74142, 74172, 74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645, 74675, 74704, 74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235, 75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766, 75796, 75826, 75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299, 76328, 76358, 76387, 76416, 76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830, 76859, 76889, 76918, 76948, 76977, 77007, 77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361, 77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598, 77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893, 77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188, 78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425, 78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779, 78808, 78838, 78867, 78897, 78926, 78956, 78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369, 79399, 79428, 79458, 79487, 79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960, 79990];
  function getHijriDate(gDate) {
    var day = gDate.getDate();
    var month2 = gDate.getMonth();
    var year = gDate.getFullYear();
    var tMonth = month2 + 1;
    var tYear = year;
    if (tMonth < 3) {
      tYear -= 1;
      tMonth += 12;
    }
    var yPrefix = Math.floor(tYear / 100);
    var julilanOffset = yPrefix - Math.floor(yPrefix / 4) - 2;
    var julianNumber = Math.floor(365.25 * (tYear + 4716)) + Math.floor(30.6001 * (tMonth + 1)) + day - julilanOffset - 1524;
    yPrefix = Math.floor((julianNumber - 186721625e-2) / 36524.25);
    julilanOffset = yPrefix - Math.floor(yPrefix / 4) + 1;
    var b = julianNumber + julilanOffset + 1524;
    var c = Math.floor((b - 122.1) / 365.25);
    var d = Math.floor(365.25 * c);
    var tempMonth = Math.floor((b - d) / 30.6001);
    day = b - d - Math.floor(30.6001 * tempMonth);
    month2 = Math.floor((b - d) / 20.6001);
    if (month2 > 13) {
      c += 1;
      month2 -= 12;
    }
    month2 -= 1;
    year = c - 4716;
    var modifiedJulianDate = julianNumber - 24e5;
    var iyear = 10631 / 30;
    var z = julianNumber - 1948084;
    var cyc = Math.floor(z / 10631);
    z = z - 10631 * cyc;
    var j = Math.floor((z - 0.1335) / iyear);
    var iy = 30 * cyc + j;
    z = z - Math.floor(j * iyear + 0.1335);
    var im = Math.floor((z + 28.5001) / 29.5);
    if (im === 13) {
      im = 12;
    }
    var tempDay = z - Math.floor(29.5001 * im - 29);
    var i = 0;
    for (; i < dateCorrection.length; i++) {
      if (dateCorrection[parseInt(i.toString(), 10)] > modifiedJulianDate) {
        break;
      }
    }
    var iln = i + 16260;
    var ii = Math.floor((iln - 1) / 12);
    var hYear = ii + 1;
    var hmonth = iln - 12 * ii;
    var hDate = modifiedJulianDate - dateCorrection[i - 1] + 1;
    if ((hDate + "").length > 2) {
      hDate = tempDay;
      hmonth = im;
      hYear = iy;
    }
    return {
      year: hYear,
      month: hmonth,
      date: hDate
    };
  }
  HijriParser2.getHijriDate = getHijriDate;
  function toGregorian(year, month2, day) {
    var iy = year;
    var im = month2;
    var id = day;
    var ii = iy - 1;
    var iln = ii * 12 + 1 + (im - 1);
    var i = iln - 16260;
    var mcjdn = id + dateCorrection[i - 1] - 1;
    var julianDate = mcjdn + 24e5;
    var z = Math.floor(julianDate + 0.5);
    var a = Math.floor((z - 186721625e-2) / 36524.25);
    a = z + 1 + a - Math.floor(a / 4);
    var b = a + 1524;
    var c = Math.floor((b - 122.1) / 365.25);
    var d = Math.floor(365.25 * c);
    var e = Math.floor((b - d) / 30.6001);
    var gDay = b - d - Math.floor(e * 30.6001);
    var gMonth = e - (e > 13.5 ? 13 : 1);
    var gYear = c - (gMonth > 2.5 ? 4716 : 4715);
    if (gYear <= 0) {
      gMonth--;
    }
    return /* @__PURE__ */ new Date(gYear + "/" + gMonth + "/" + gDay);
  }
  HijriParser2.toGregorian = toGregorian;
})(HijriParser || (HijriParser = {}));

// node_modules/@syncfusion/ej2-base/src/intl/date-formatter.js
var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLLL|LLL|EEEEE|EEEE|E|K|cccc|ccc|WW|W|G+|z+/gi;
var standalone = "stand-alone";
var weekdayKey = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var timeSetter = {
  m: "getMinutes",
  h: "getHours",
  H: "getHours",
  s: "getSeconds",
  d: "getDate",
  f: "getMilliseconds"
};
var datePartMatcher = {
  "M": "month",
  "d": "day",
  "E": "weekday",
  "c": "weekday",
  "y": "year",
  "m": "minute",
  "h": "hour",
  "H": "hour",
  "s": "second",
  "L": "month",
  "a": "designator",
  "z": "timeZone",
  "Z": "timeZone",
  "G": "era",
  "f": "milliseconds"
};
var timeSeparator = "timeSeparator";
var DateFormat = (
  /** @class */
  function() {
    function DateFormat2() {
    }
    DateFormat2.dateFormat = function(culture, option, cldr) {
      var _this = this;
      var dependable = IntlBase.getDependables(cldr, culture, option.calendar);
      var numObject = getValue("parserObject.numbers", dependable);
      var dateObject = dependable.dateObject;
      var formatOptions = {
        isIslamic: IntlBase.islamicRegex.test(option.calendar)
      };
      if (isBlazor() && option.isServerRendered) {
        option = IntlBase.compareBlazorDateFormats(option, culture);
      }
      var resPattern = option.format || IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type, false, isBlazor() ? culture : "");
      formatOptions.dateSeperator = isBlazor() ? getValue("dateSeperator", dateObject) : IntlBase.getDateSeparator(dependable.dateObject);
      if (isUndefined(resPattern)) {
        throwError("Format options or type given must be invalid");
      } else {
        resPattern = IntlBase.ConvertDateToWeekFormat(resPattern);
        if (isBlazor()) {
          resPattern = resPattern.replace(/tt/, "a");
        }
        formatOptions.pattern = resPattern;
        formatOptions.numMapper = isBlazor() ? extend({}, numObject) : ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
        var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
        for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
          var str = patternMatch_1[_i];
          var len = str.length;
          var char = str[0];
          if (char === "K") {
            char = "h";
          }
          switch (char) {
            case "E":
            case "c":
              if (isBlazor()) {
                formatOptions.weekday = getValue("days." + IntlBase.monthIndex["" + len], dateObject);
              } else {
                formatOptions.weekday = dependable.dateObject["" + IntlBase.days]["" + standalone][IntlBase.monthIndex["" + len]];
              }
              break;
            case "M":
            case "L":
              if (isBlazor()) {
                formatOptions.month = getValue("months." + IntlBase.monthIndex["" + len], dateObject);
              } else {
                formatOptions.month = dependable.dateObject["" + IntlBase.month]["" + standalone][IntlBase.monthIndex["" + len]];
              }
              break;
            case "a":
              formatOptions.designator = isBlazor() ? getValue("dayPeriods", dateObject) : getValue("dayPeriods.format.wide", dateObject);
              break;
            case "G": {
              var eText = len <= 3 ? "eraAbbr" : len === 4 ? "eraNames" : "eraNarrow";
              formatOptions.era = isBlazor() ? getValue("eras", dateObject) : getValue("eras." + eText, dependable.dateObject);
              break;
            }
            case "z":
              formatOptions.timeZone = getValue("dates.timeZoneNames", dependable.parserObject);
              break;
          }
        }
      }
      return function(value) {
        if (isNaN(value.getDate())) {
          return null;
        }
        return _this.intDateFormatter(value, formatOptions);
      };
    };
    DateFormat2.intDateFormatter = function(value, options) {
      var pattern = options.pattern;
      var ret = "";
      var matches2 = pattern.match(IntlBase.dateParseRegex);
      var dObject = this.getCurrentDateValue(value, options.isIslamic);
      for (var _i = 0, matches_1 = matches2; _i < matches_1.length; _i++) {
        var match = matches_1[_i];
        var length_1 = match.length;
        var char = match[0];
        if (char === "K") {
          char = "h";
        }
        var curval = void 0;
        var curvalstr = "";
        var isNumber = void 0;
        var processNumber = void 0;
        var curstr = "";
        switch (char) {
          case "M":
          case "L":
            curval = dObject.month;
            if (length_1 > 2) {
              ret += options.month["" + curval];
            } else {
              isNumber = true;
            }
            break;
          case "E":
          case "c":
            ret += options.weekday["" + weekdayKey[value.getDay()]];
            break;
          case "H":
          case "h":
          case "m":
          case "s":
          case "d":
          case "f":
            isNumber = true;
            if (char === "d") {
              curval = dObject.date;
            } else if (char === "f") {
              isNumber = false;
              processNumber = true;
              curvalstr = value["" + timeSetter["" + char]]().toString();
              curvalstr = curvalstr.substring(0, length_1);
              var curlength = curvalstr.length;
              if (length_1 !== curlength) {
                if (length_1 > 3) {
                  continue;
                }
                for (var i = 0; i < length_1 - curlength; i++) {
                  curvalstr = "0" + curvalstr.toString();
                }
              }
              curstr += curvalstr;
            } else {
              curval = value["" + timeSetter["" + char]]();
            }
            if (char === "h") {
              curval = curval % 12 || 12;
            }
            break;
          case "y":
            processNumber = true;
            curstr += dObject.year;
            if (length_1 === 2) {
              curstr = curstr.substr(curstr.length - 2);
            }
            break;
          case "a": {
            var desig = value.getHours() < 12 ? "am" : "pm";
            ret += options.designator["" + desig];
            break;
          }
          case "G": {
            var dec = value.getFullYear() < 0 ? 0 : 1;
            var retu = options.era["" + dec];
            if (isNullOrUndefined(retu)) {
              retu = options.era[dec ? 0 : 1];
            }
            ret += retu || "";
            break;
          }
          case "'":
            ret += match === "''" ? "'" : match.replace(/'/g, "");
            break;
          case "z": {
            var timezone = value.getTimezoneOffset();
            var pattern_1 = length_1 < 4 ? "+H;-H" : options.timeZone.hourFormat;
            pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
            if (timezone === 0) {
              ret += options.timeZone.gmtZeroFormat;
            } else {
              processNumber = true;
              curstr = this.getTimeZoneValue(timezone, pattern_1);
            }
            curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
            break;
          }
          case ":":
            ret += options.numMapper.numberSymbols["" + timeSeparator];
            break;
          case "/":
            ret += options.dateSeperator;
            break;
          case "W":
            isNumber = true;
            curval = IntlBase.getWeekOfYear(value);
            break;
          default:
            ret += match;
        }
        if (isNumber) {
          processNumber = true;
          curstr = this.checkTwodigitNumber(curval, length_1);
        }
        if (processNumber) {
          ret += ParserBase.convertValueParts(curstr, IntlBase.latnParseRegex, options.numMapper.mapper);
        }
      }
      return ret;
    };
    DateFormat2.getCurrentDateValue = function(value, isIslamic) {
      if (isIslamic) {
        return HijriParser.getHijriDate(value);
      }
      return {
        year: value.getFullYear(),
        month: value.getMonth() + 1,
        date: value.getDate()
      };
    };
    DateFormat2.checkTwodigitNumber = function(val, len) {
      var ret = val + "";
      if (len === 2 && ret.length !== 2) {
        return "0" + ret;
      }
      return ret;
    };
    DateFormat2.getTimeZoneValue = function(tVal, pattern) {
      var _this = this;
      var splt = pattern.split(";");
      var curPattern = splt[tVal > 0 ? 1 : 0];
      var no = Math.abs(tVal);
      return curPattern = curPattern.replace(/HH?|mm/g, function(str) {
        var len = str.length;
        var ishour = str.indexOf("H") !== -1;
        return _this.checkTwodigitNumber(Math.floor(ishour ? no / 60 : no % 60), len);
      });
    };
    return DateFormat2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/intl/number-formatter.js
var errorText = {
  "ms": "minimumSignificantDigits",
  "ls": "maximumSignificantDigits",
  "mf": "minimumFractionDigits",
  "lf": "maximumFractionDigits"
};
var percentSign = "percentSign";
var minusSign = "minusSign";
var mapper = ["infinity", "nan", "group", "decimal", "exponential"];
var NumberFormat = (
  /** @class */
  function() {
    function NumberFormat2() {
    }
    NumberFormat2.numberFormatter = function(culture, option, cldr) {
      var _this = this;
      var fOptions = extend({}, option);
      var cOptions = {};
      var dOptions = {};
      var symbolPattern;
      var dependable = IntlBase.getDependables(cldr, culture, "", true);
      var numObject = dependable.numericObject;
      dOptions.numberMapper = isBlazor() ? extend({}, numObject) : ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
      dOptions.currencySymbol = isBlazor() ? getValue("currencySymbol", numObject) : IntlBase.getCurrencySymbol(dependable.numericObject, fOptions.currency || defaultCurrencyCode, option.altSymbol);
      dOptions.percentSymbol = isBlazor() ? getValue("numberSymbols.percentSign", numObject) : dOptions.numberMapper.numberSymbols["" + percentSign];
      dOptions.minusSymbol = isBlazor() ? getValue("numberSymbols.minusSign", numObject) : dOptions.numberMapper.numberSymbols["" + minusSign];
      var symbols = dOptions.numberMapper.numberSymbols;
      if (option.format && !IntlBase.formatRegex.test(option.format)) {
        cOptions = IntlBase.customFormat(option.format, dOptions, dependable.numericObject);
        if (!isUndefined(fOptions.useGrouping) && fOptions.useGrouping) {
          fOptions.useGrouping = cOptions.pData.useGrouping;
        }
      } else {
        extend(fOptions, IntlBase.getProperNumericSkeleton(option.format || "N"));
        fOptions.isCurrency = fOptions.type === "currency";
        fOptions.isPercent = fOptions.type === "percent";
        if (!isBlazor()) {
          symbolPattern = IntlBase.getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
        }
        fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
        this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
        if (!isUndefined(fOptions.fractionDigits)) {
          fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
        }
        if (isUndefined(fOptions.useGrouping)) {
          fOptions.useGrouping = true;
        }
        if (fOptions.isCurrency && !isBlazor()) {
          symbolPattern = symbolPattern.replace(/\u00A4/g, IntlBase.defaultCurrency);
        }
        if (!isBlazor()) {
          var split = symbolPattern.split(";");
          cOptions.nData = IntlBase.getFormatData(split[1] || "-" + split[0], true, dOptions.currencySymbol);
          cOptions.pData = IntlBase.getFormatData(split[0], false, dOptions.currencySymbol);
          if (fOptions.useGrouping) {
            fOptions.groupSeparator = symbols[mapper[2]];
            fOptions.groupData = this.getGroupingDetails(split[0]);
          }
        } else {
          cOptions.nData = extend({}, {}, getValue(fOptions.type + "nData", numObject));
          cOptions.pData = extend({}, {}, getValue(fOptions.type + "pData", numObject));
          if (fOptions.type === "currency" && option.currency) {
            IntlBase.replaceBlazorCurrency([cOptions.pData, cOptions.nData], dOptions.currencySymbol, option.currency);
          }
        }
        var minFrac = isUndefined(fOptions.minimumFractionDigits);
        if (minFrac) {
          fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
        }
        if (isUndefined(fOptions.maximumFractionDigits)) {
          var mval = cOptions.nData.maximumFraction;
          fOptions.maximumFractionDigits = isUndefined(mval) && fOptions.isPercent ? 0 : mval;
        }
        var mfrac = fOptions.minimumFractionDigits;
        var lfrac = fOptions.maximumFractionDigits;
        if (!isUndefined(mfrac) && !isUndefined(lfrac)) {
          if (mfrac > lfrac) {
            fOptions.maximumFractionDigits = mfrac;
          }
        }
      }
      extend(cOptions.nData, fOptions);
      extend(cOptions.pData, fOptions);
      return function(value) {
        if (isNaN(value)) {
          return symbols[mapper[1]];
        } else if (!isFinite(value)) {
          return symbols[mapper[0]];
        }
        return _this.intNumberFormatter(value, cOptions, dOptions, option);
      };
    };
    NumberFormat2.getGroupingDetails = function(pattern) {
      var ret = {};
      var match = pattern.match(IntlBase.negativeDataRegex);
      if (match && match[4]) {
        var pattern_1 = match[4];
        var p = pattern_1.lastIndexOf(",");
        if (p !== -1) {
          var temp = pattern_1.split(".")[0];
          ret.primary = temp.length - p - 1;
          var s = pattern_1.lastIndexOf(",", p - 1);
          if (s !== -1) {
            ret.secondary = p - 1 - s;
          }
        }
      }
      return ret;
    };
    NumberFormat2.checkValueRange = function(val1, val2, checkbothExist, isFraction) {
      var decide = isFraction ? "f" : "s";
      var dint = 0;
      var str1 = errorText["l" + decide];
      var str2 = errorText["m" + decide];
      if (!isUndefined(val1)) {
        this.checkRange(val1, str1, isFraction);
        dint++;
      }
      if (!isUndefined(val2)) {
        this.checkRange(val2, str2, isFraction);
        dint++;
      }
      if (dint === 2) {
        if (val1 < val2) {
          throwError(str2 + "specified must be less than the" + str1);
        } else {
          return true;
        }
      } else if (checkbothExist && dint === 1) {
        throwError("Both" + str2 + "and" + str2 + "must be present");
      }
      return false;
    };
    NumberFormat2.checkRange = function(val, text, isFraction) {
      var range = isFraction ? [0, 20] : [1, 21];
      if (val < range[0] || val > range[1]) {
        throwError(text + "value must be within the range" + range[0] + "to" + range[1]);
      }
    };
    NumberFormat2.intNumberFormatter = function(value, fOptions, dOptions, option) {
      var curData;
      if (isUndefined(fOptions.nData.type)) {
        return void 0;
      } else {
        if (value < 0) {
          value = value * -1;
          curData = fOptions.nData;
        } else if (value === 0) {
          curData = fOptions.zeroData || fOptions.pData;
        } else {
          curData = fOptions.pData;
        }
        var fValue = "";
        if (curData.isPercent) {
          value = value * 100;
        }
        if (curData.groupOne) {
          fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
        } else {
          fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits, option);
          if (curData.minimumIntegerDigits) {
            fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
          }
          if (dOptions.isCustomFormat && curData.minimumFractionDigits < curData.maximumFractionDigits && /\d+\.\d+/.test(fValue)) {
            var temp = fValue.split(".");
            var decimalPart = temp[1];
            var len = decimalPart.length;
            for (var i = len - 1; i >= 0; i--) {
              if (decimalPart[parseInt(i.toString(), 10)] === "0" && i >= curData.minimumFractionDigits) {
                decimalPart = decimalPart.slice(0, i);
              } else {
                break;
              }
            }
            fValue = temp[0] + "." + decimalPart;
          }
        }
        if (curData.type === "scientific") {
          fValue = value.toExponential(curData.maximumFractionDigits);
          fValue = fValue.replace("e", dOptions.numberMapper.numberSymbols[mapper[4]]);
        }
        fValue = fValue.replace(".", dOptions.numberMapper.numberSymbols[mapper[3]]);
        fValue = curData.format === "#,###,,;(#,###,,)" ? this.customPivotFormat(parseInt(fValue, 10)) : fValue;
        if (curData.useGrouping) {
          fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ",", dOptions.numberMapper.numberSymbols[mapper[3]] || ".", curData.groupData.secondary);
        }
        fValue = ParserBase.convertValueParts(fValue, IntlBase.latnParseRegex, dOptions.numberMapper.mapper);
        if (curData.nlead === "N/A") {
          return curData.nlead;
        } else {
          if (fValue === "0" && option && option.format === "0") {
            return fValue + curData.nend;
          }
          return curData.nlead + fValue + curData.nend;
        }
      }
    };
    NumberFormat2.processSignificantDigits = function(value, min, max) {
      var temp = value + "";
      var tn;
      var length = temp.length;
      if (length < min) {
        return value.toPrecision(min);
      } else {
        temp = value.toPrecision(max);
        tn = +temp;
        return tn + "";
      }
    };
    NumberFormat2.groupNumbers = function(val, level1, sep, decimalSymbol, level2) {
      var flag = !isNullOrUndefined(level2) && level2 !== 0;
      var split = val.split(decimalSymbol);
      var prefix = split[0];
      var length = prefix.length;
      var str = "";
      while (length > level1) {
        str = prefix.slice(length - level1, length) + (str.length ? sep + str : "");
        length -= level1;
        if (flag) {
          level1 = level2;
          flag = false;
        }
      }
      split[0] = prefix.slice(0, length) + (str.length ? sep : "") + str;
      return split.join(decimalSymbol);
    };
    NumberFormat2.processFraction = function(value, min, max, option) {
      var temp = (value + "").split(".")[1];
      var length = temp ? temp.length : 0;
      if (min && length < min) {
        var ret = "";
        if (length === 0) {
          ret = value.toFixed(min);
        } else {
          ret += value;
          for (var j = 0; j < min - length; j++) {
            ret += "0";
          }
          return ret;
        }
        return value.toFixed(min);
      } else if (!isNullOrUndefined(max) && (length > max || max === 0)) {
        return value.toFixed(max);
      }
      var str = value + "";
      if (str[0] === "0" && option && option.format === "###.00") {
        str = str.slice(1);
      }
      return str;
    };
    NumberFormat2.processMinimumIntegers = function(value, min) {
      var temp = value.split(".");
      var lead = temp[0];
      var len = lead.length;
      if (len < min) {
        for (var i = 0; i < min - len; i++) {
          lead = "0" + lead;
        }
        temp[0] = lead;
      }
      return temp.join(".");
    };
    NumberFormat2.customPivotFormat = function(value) {
      if (value >= 5e5) {
        value /= 1e6;
        var _a = value.toString().split("."), integer = _a[0], decimal = _a[1];
        return decimal && +decimal.substring(0, 1) >= 5 ? Math.ceil(value).toString() : Math.floor(value).toString();
      }
      return "";
    };
    return NumberFormat2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/intl/date-parser.js
var standalone2 = "stand-alone";
var latnRegex = /^[0-9]*$/;
var timeSetter2 = {
  minute: "setMinutes",
  hour: "setHours",
  second: "setSeconds",
  day: "setDate",
  month: "setMonth",
  milliseconds: "setMilliseconds"
};
var month = "months";
var DateParser = (
  /** @class */
  function() {
    function DateParser2() {
    }
    DateParser2.dateParser = function(culture, option, cldr) {
      var _this = this;
      var dependable = IntlBase.getDependables(cldr, culture, option.calendar);
      var numOptions = ParserBase.getCurrentNumericOptions(dependable.parserObject, ParserBase.getNumberingSystem(cldr), false, isBlazor());
      var parseOptions = {};
      if (isBlazor() && option.isServerRendered) {
        option = IntlBase.compareBlazorDateFormats(option, culture);
      }
      var resPattern = option.format || IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type, false, isBlazor() ? culture : "");
      var regexString = "";
      var hourOnly;
      if (isUndefined(resPattern)) {
        throwError("Format options or type given must be invalid");
      } else {
        resPattern = IntlBase.ConvertDateToWeekFormat(resPattern);
        parseOptions = {
          isIslamic: IntlBase.islamicRegex.test(option.calendar),
          pattern: resPattern,
          evalposition: {},
          culture
        };
        var patternMatch = resPattern.match(IntlBase.dateParseRegex) || [];
        var length_1 = patternMatch.length;
        var gmtCorrection = 0;
        var zCorrectTemp = 0;
        var isgmtTraversed = false;
        var nRegx = numOptions.numericRegex;
        var numMapper = isBlazor() ? dependable.parserObject.numbers : ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
        for (var i = 0; i < length_1; i++) {
          var str = patternMatch[parseInt(i.toString(), 10)];
          var len = str.length;
          var char = str[0] === "K" ? "h" : str[0];
          var isNumber = void 0;
          var canUpdate = void 0;
          var charKey = datePartMatcher["" + char];
          var optional = len === 2 ? "" : "?";
          if (isgmtTraversed) {
            gmtCorrection = zCorrectTemp;
            isgmtTraversed = false;
          }
          switch (char) {
            case "E":
            case "c": {
              var weekData = void 0;
              if (isBlazor()) {
                weekData = getValue("days." + IntlBase.monthIndex["" + len], dependable.dateObject);
              } else {
                weekData = dependable.dateObject["" + IntlBase.days]["" + standalone2][IntlBase.monthIndex["" + len]];
              }
              var weekObject = ParserBase.reverseObject(weekData);
              regexString += "(" + Object.keys(weekObject).join("|") + ")";
              break;
            }
            case "M":
            case "L":
            case "d":
            case "m":
            case "s":
            case "h":
            case "H":
            case "f":
              canUpdate = true;
              if ((char === "M" || char === "L") && len > 2) {
                var monthData = void 0;
                if (isBlazor()) {
                  monthData = getValue("months." + IntlBase.monthIndex["" + len], dependable.dateObject);
                } else {
                  monthData = dependable.dateObject["" + month]["" + standalone2][IntlBase.monthIndex["" + len]];
                }
                parseOptions["" + charKey] = ParserBase.reverseObject(monthData);
                regexString += "(" + Object.keys(parseOptions["" + charKey]).join("|") + ")";
              } else if (char === "f") {
                if (len > 3) {
                  continue;
                }
                isNumber = true;
                regexString += "(" + nRegx + nRegx + "?" + nRegx + "?)";
              } else {
                isNumber = true;
                regexString += "(" + nRegx + nRegx + optional + ")";
              }
              if (char === "h") {
                parseOptions.hour12 = true;
              }
              break;
            case "W": {
              var opt = len === 1 ? "?" : "";
              regexString += "(" + nRegx + opt + nRegx + ")";
              break;
            }
            case "y":
              canUpdate = isNumber = true;
              if (len === 2) {
                regexString += "(" + nRegx + nRegx + ")";
              } else {
                regexString += "(" + nRegx + "{" + len + ",})";
              }
              break;
            case "a": {
              canUpdate = true;
              var periodValur = isBlazor() ? getValue("dayPeriods", dependable.dateObject) : getValue("dayPeriods.format.wide", dependable.dateObject);
              parseOptions["" + charKey] = ParserBase.reverseObject(periodValur);
              regexString += "(" + Object.keys(parseOptions["" + charKey]).join("|") + ")";
              break;
            }
            case "G": {
              canUpdate = true;
              var eText = len <= 3 ? "eraAbbr" : len === 4 ? "eraNames" : "eraNarrow";
              parseOptions["" + charKey] = ParserBase.reverseObject(isBlazor() ? getValue("eras", dependable.dateObject) : getValue("eras." + eText, dependable.dateObject));
              regexString += "(" + Object.keys(parseOptions["" + charKey]).join("|") + "?)";
              break;
            }
            case "z": {
              var tval = (/* @__PURE__ */ new Date()).getTimezoneOffset();
              canUpdate = tval !== 0;
              parseOptions["" + charKey] = getValue("dates.timeZoneNames", dependable.parserObject);
              var tzone = parseOptions["" + charKey];
              hourOnly = len < 4;
              var hpattern = hourOnly ? "+H;-H" : tzone.hourFormat;
              hpattern = hpattern.replace(/:/g, numMapper.timeSeparator);
              regexString += "(" + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ")?";
              isgmtTraversed = true;
              zCorrectTemp = hourOnly ? 6 : 12;
              break;
            }
            case "'": {
              var iString = str.replace(/'/g, "");
              regexString += "(" + iString + ")?";
              break;
            }
            default:
              regexString += "([\\D])";
              break;
          }
          if (canUpdate) {
            parseOptions.evalposition["" + charKey] = {
              isNumber,
              pos: i + 1 + gmtCorrection,
              hourOnly
            };
          }
          if (i === length_1 - 1 && !isNullOrUndefined(regexString)) {
            var regExp3 = RegExp;
            parseOptions.parserRegex = new regExp3("^" + regexString + "$", "i");
          }
        }
      }
      return function(value) {
        var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
        if (isNullOrUndefined(parsedDateParts) || !Object.keys(parsedDateParts).length) {
          return null;
        }
        if (parseOptions.isIslamic) {
          var dobj = {};
          var tYear = parsedDateParts.year;
          var tDate = parsedDateParts.day;
          var tMonth = parsedDateParts.month;
          var ystrig = tYear ? tYear + "" : "";
          var is2DigitYear = ystrig.length === 2;
          if (!tYear || !tMonth || !tDate || is2DigitYear) {
            dobj = HijriParser.getHijriDate(/* @__PURE__ */ new Date());
          }
          if (is2DigitYear) {
            tYear = parseInt((dobj.year + "").slice(0, 2) + ystrig, 10);
          }
          var dateObject = HijriParser.toGregorian(tYear || dobj.year, tMonth || dobj.month, tDate || dobj.date);
          parsedDateParts.year = dateObject.getFullYear();
          parsedDateParts.month = dateObject.getMonth() + 1;
          parsedDateParts.day = dateObject.getDate();
        }
        return _this.getDateObject(parsedDateParts);
      };
    };
    DateParser2.getDateObject = function(options, value) {
      var res = value || /* @__PURE__ */ new Date();
      res.setMilliseconds(0);
      var tKeys = ["hour", "minute", "second", "milliseconds", "month", "day"];
      var y = options.year;
      var desig = options.designator;
      var tzone = options.timeZone;
      if (!isUndefined(y)) {
        var len = (y + "").length;
        if (len <= 2) {
          var century = Math.floor(res.getFullYear() / 100) * 100;
          y += century;
        }
        res.setFullYear(y);
      }
      for (var _i = 0, tKeys_1 = tKeys; _i < tKeys_1.length; _i++) {
        var key = tKeys_1[_i];
        var tValue = options["" + key];
        if (isUndefined(tValue) && key === "day") {
          res.setDate(1);
        }
        if (!isUndefined(tValue)) {
          if (key === "month") {
            tValue -= 1;
            if (tValue < 0 || tValue > 11) {
              return /* @__PURE__ */ new Date("invalid");
            }
            var pDate = res.getDate();
            res.setDate(1);
            res[timeSetter2["" + key]](tValue);
            var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
            res.setDate(pDate < lDate ? pDate : lDate);
          } else {
            if (key === "day") {
              var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
              if (tValue < 1 || tValue > lastDay) {
                return null;
              }
            }
            res["" + timeSetter2["" + key]](tValue);
          }
        }
      }
      if (!isUndefined(desig)) {
        var hour = res.getHours();
        if (desig === "pm") {
          res.setHours(hour + (hour === 12 ? 0 : 12));
        } else if (hour === 12) {
          res.setHours(0);
        }
      }
      if (!isUndefined(tzone)) {
        var tzValue = tzone - res.getTimezoneOffset();
        if (tzValue !== 0) {
          res.setMinutes(res.getMinutes() + tzValue);
        }
      }
      return res;
    };
    DateParser2.internalDateParse = function(value, parseOptions, num) {
      var matches2 = value.match(parseOptions.parserRegex);
      var retOptions = {
        "hour": 0,
        "minute": 0,
        "second": 0
      };
      if (isNullOrUndefined(matches2)) {
        return null;
      } else {
        var props = Object.keys(parseOptions.evalposition);
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
          var prop = props_1[_i];
          var curObject = parseOptions.evalposition["" + prop];
          var matchString = matches2[curObject.pos];
          if (curObject.isNumber) {
            retOptions["" + prop] = this.internalNumberParser(matchString, num);
          } else {
            if (prop === "timeZone" && !isUndefined(matchString)) {
              var pos = curObject.pos;
              var val = void 0;
              var tmatch = matches2[pos + 1];
              var flag = !isUndefined(tmatch);
              if (curObject.hourOnly) {
                val = this.getZoneValue(flag, tmatch, matches2[pos + 4], num) * 60;
              } else {
                val = this.getZoneValue(flag, tmatch, matches2[pos + 7], num) * 60;
                val += this.getZoneValue(flag, matches2[pos + 4], matches2[pos + 10], num);
              }
              if (!isNullOrUndefined(val)) {
                retOptions["" + prop] = val;
              }
            } else {
              var cultureOptions = ["en-US", "en-MH", "en-MP"];
              matchString = prop === "month" && !parseOptions.isIslamic && (parseOptions.culture === "en" || parseOptions.culture === "en-GB" || parseOptions.culture === "en-US") ? matchString[0].toUpperCase() + matchString.substring(1).toLowerCase() : matchString;
              matchString = prop !== "month" && prop === "designator" && parseOptions.culture && parseOptions.culture.indexOf("en-") !== -1 && cultureOptions.indexOf(parseOptions.culture) === -1 ? matchString.toLowerCase() : matchString;
              retOptions["" + prop] = parseOptions["" + prop]["" + matchString];
            }
          }
        }
        if (parseOptions.hour12) {
          retOptions.hour12 = true;
        }
      }
      return retOptions;
    };
    DateParser2.internalNumberParser = function(value, option) {
      value = ParserBase.convertValueParts(value, option.numberParseRegex, option.numericPair);
      if (latnRegex.test(value)) {
        return +value;
      }
      return null;
    };
    DateParser2.parseTimeZoneRegx = function(hourFormat, tZone, nRegex) {
      var pattern = tZone.gmtFormat;
      var ret;
      var cRegex = "(" + nRegex + ")(" + nRegex + ")";
      ret = hourFormat.replace("+", "\\+");
      if (hourFormat.indexOf("HH") !== -1) {
        ret = ret.replace(/HH|mm/g, "(" + cRegex + ")");
      } else {
        ret = ret.replace(/H|m/g, "(" + cRegex + "?)");
      }
      var splitStr = ret.split(";").map(function(str) {
        return pattern.replace("{0}", str);
      });
      ret = splitStr.join("|") + "|" + tZone.gmtZeroFormat;
      return ret;
    };
    DateParser2.getZoneValue = function(flag, val1, val2, num) {
      var ival = flag ? val1 : val2;
      if (!ival) {
        return 0;
      }
      var value = this.internalNumberParser(ival, num);
      if (flag) {
        return -value;
      }
      return value;
    };
    return DateParser2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/intl/number-parser.js
var regExp = RegExp;
var parseRegex = new regExp("^([^0-9]*)(([0-9,]*[0-9]+)(.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$");
var groupRegex = /,/g;
var keys = ["minusSign", "infinity"];
var NumberParser = (
  /** @class */
  function() {
    function NumberParser2() {
    }
    NumberParser2.numberParser = function(culture, option, cldr) {
      var _this = this;
      var dependable = IntlBase.getDependables(cldr, culture, "", true);
      var parseOptions = {
        custom: true
      };
      if (IntlBase.formatRegex.test(option.format) || !option.format) {
        extend(parseOptions, IntlBase.getProperNumericSkeleton(option.format || "N"));
        parseOptions.custom = false;
        if (!parseOptions.fractionDigits) {
          if (option.maximumFractionDigits) {
            parseOptions.maximumFractionDigits = option.maximumFractionDigits;
          }
        }
      } else {
        extend(parseOptions, IntlBase.customFormat(option.format, null, null));
      }
      var numbers = getValue("numbers", dependable.parserObject);
      var numOptions = ParserBase.getCurrentNumericOptions(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true, isBlazor());
      parseOptions.symbolRegex = ParserBase.getSymbolRegex(Object.keys(numOptions.symbolMatch));
      parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
      var symbolpattern;
      if (!isBlazor()) {
        symbolpattern = IntlBase.getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
        if (symbolpattern) {
          symbolpattern = symbolpattern.replace(/\u00A4/g, IntlBase.defaultCurrency);
          var split = symbolpattern.split(";");
          parseOptions.nData = IntlBase.getFormatData(split[1] || "-" + split[0], true, "");
          parseOptions.pData = IntlBase.getFormatData(split[0], true, "");
        }
      } else {
        parseOptions.nData = extend({}, {}, getValue(parseOptions.type + "nData", numbers));
        parseOptions.pData = extend({}, {}, getValue(parseOptions.type + "pData", numbers));
        if (parseOptions.type === "currency" && option.currency) {
          IntlBase.replaceBlazorCurrency([parseOptions.pData, parseOptions.nData], getValue("currencySymbol", numbers), option.currency);
        }
      }
      return function(value) {
        return _this.getParsedNumber(value, parseOptions, numOptions);
      };
    };
    NumberParser2.getParsedNumber = function(value, options, numOptions) {
      var isNegative;
      var isPercent;
      var tempValue;
      var lead;
      var end;
      var ret;
      if (value.indexOf(options.infinity) !== -1) {
        return Infinity;
      } else {
        value = ParserBase.convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
        value = ParserBase.convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
        value = value.indexOf("-") !== -1 ? value.replace("-.", "-0.") : value;
        if (value.indexOf(".") === 0) {
          value = "0" + value;
        }
        var matches2 = value.match(parseRegex);
        if (isNullOrUndefined(matches2)) {
          return NaN;
        }
        lead = matches2[1];
        tempValue = matches2[2];
        var exponent = matches2[5];
        end = matches2[6];
        isNegative = options.custom ? lead === options.nData.nlead && end === options.nData.nend : lead.indexOf(options.nData.nlead) !== -1 && end.indexOf(options.nData.nend) !== -1;
        isPercent = isNegative ? options.nData.isPercent : options.pData.isPercent;
        tempValue = tempValue.replace(groupRegex, "");
        if (exponent) {
          tempValue += exponent;
        }
        ret = +tempValue;
        if (options.type === "percent" || isPercent) {
          ret = ret / 100;
        }
        if (options.custom || options.fractionDigits) {
          ret = parseFloat(ret.toFixed(options.custom ? isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits : options.fractionDigits));
        }
        if (options.maximumFractionDigits) {
          ret = this.convertMaxFracDigits(tempValue, options, ret, isNegative);
        }
        if (isNegative) {
          ret *= -1;
        }
        return ret;
      }
    };
    NumberParser2.convertMaxFracDigits = function(value, options, ret, isNegative) {
      var decimalSplitValue = value.split(".");
      if (decimalSplitValue[1] && decimalSplitValue[1].length > options.maximumFractionDigits) {
        ret = +ret.toFixed(options.custom ? isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits : options.maximumFractionDigits);
      }
      return ret;
    };
    return NumberParser2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/observer.js
var Observer = (
  /** @class */
  function() {
    function Observer2(context) {
      this.ranArray = [];
      this.boundedEvents = {};
      if (isNullOrUndefined(context)) {
        return;
      }
      this.context = context;
    }
    Observer2.prototype.on = function(property, handler, context, id) {
      if (isNullOrUndefined(handler)) {
        return;
      }
      var cntxt = context || this.context;
      if (this.notExist(property)) {
        this.boundedEvents["" + property] = [{
          handler,
          context: cntxt,
          id
        }];
        return;
      }
      if (!isNullOrUndefined(id)) {
        if (this.ranArray.indexOf(id) === -1) {
          this.ranArray.push(id);
          this.boundedEvents["" + property].push({
            handler,
            context: cntxt,
            id
          });
        }
      } else if (!this.isHandlerPresent(this.boundedEvents["" + property], handler)) {
        this.boundedEvents["" + property].push({
          handler,
          context: cntxt
        });
      }
    };
    Observer2.prototype.off = function(property, handler, id) {
      if (this.notExist(property)) {
        return;
      }
      var curObject = getValue(property, this.boundedEvents);
      if (handler) {
        for (var i = 0; i < curObject.length; i++) {
          if (id) {
            if (curObject[parseInt(i.toString(), 10)].id === id) {
              curObject.splice(i, 1);
              var indexLocation = this.ranArray.indexOf(id);
              if (indexLocation !== -1) {
                this.ranArray.splice(indexLocation, 1);
              }
              break;
            }
          } else if (handler === curObject[parseInt(i.toString(), 10)].handler) {
            curObject.splice(i, 1);
            break;
          }
        }
      } else {
        delete this.boundedEvents["" + property];
      }
    };
    Observer2.prototype.notify = function(property, argument, successHandler, errorHandler) {
      if (this.notExist(property)) {
        if (successHandler) {
          successHandler.call(this, argument);
        }
        return;
      }
      if (argument) {
        argument.name = property;
      }
      var blazor = "Blazor";
      var curObject = getValue(property, this.boundedEvents).slice(0);
      if (window["" + blazor]) {
        return this.blazorCallback(curObject, argument, successHandler, errorHandler, 0);
      } else {
        for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
          var cur = curObject_1[_i];
          cur.handler.call(cur.context, argument);
        }
        if (successHandler) {
          successHandler.call(this, argument);
        }
      }
    };
    Observer2.prototype.blazorCallback = function(objs, argument, successHandler, errorHandler, index) {
      var _this = this;
      var isTrigger = index === objs.length - 1;
      if (index < objs.length) {
        var obj_1 = objs[parseInt(index.toString(), 10)];
        var promise = obj_1.handler.call(obj_1.context, argument);
        if (promise && typeof promise.then === "function") {
          if (!successHandler) {
            return promise;
          }
          promise.then(function(data) {
            data = typeof data === "string" && _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data;
            extend(argument, argument, data, true);
            if (successHandler && isTrigger) {
              successHandler.call(obj_1.context, argument);
            } else {
              return _this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
            }
          }).catch(function(data) {
            if (errorHandler) {
              errorHandler.call(obj_1.context, typeof data === "string" && _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data);
            }
          });
        } else if (successHandler && isTrigger) {
          successHandler.call(obj_1.context, argument);
        } else {
          return this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
        }
      }
    };
    Observer2.prototype.dateReviver = function(key, value) {
      var dPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
      if (isBlazor && typeof value === "string" && value.match(dPattern) !== null) {
        return new Date(value);
      }
      return value;
    };
    Observer2.prototype.isJson = function(value) {
      try {
        JSON.parse(value);
      } catch (e) {
        return false;
      }
      return true;
    };
    Observer2.prototype.destroy = function() {
      this.boundedEvents = this.context = void 0;
    };
    Observer2.prototype.offIntlEvents = function() {
      var eventsArr = this.boundedEvents["notifyExternalChange"];
      if (eventsArr) {
        for (var i = 0; i < eventsArr.length; i++) {
          var curContext = eventsArr[parseInt(i.toString(), 10)].context;
          if (curContext && curContext.detectFunction && curContext.randomId && !curContext.isRendered) {
            this.off("notifyExternalChange", curContext.detectFunction, curContext.randomId);
            i--;
          }
        }
        if (!this.boundedEvents["notifyExternalChange"].length) {
          delete this.boundedEvents["notifyExternalChange"];
        }
      }
    };
    Observer2.prototype.notExist = function(prop) {
      return Object.prototype.hasOwnProperty.call(this.boundedEvents, prop) === false || this.boundedEvents["" + prop].length <= 0;
    };
    Observer2.prototype.isHandlerPresent = function(boundedEvents, handler) {
      for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
        var cur = boundedEvents_1[_i];
        if (cur.handler === handler) {
          return true;
        }
      }
      return false;
    };
    return Observer2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/internationalization.js
var onIntlChange = new Observer();
var rightToLeft = false;
var cldrData = {};
var defaultCulture = "en-US";
var defaultCurrencyCode = "USD";
var mapper2 = ["numericObject", "dateObject"];
var Internationalization = (
  /** @class */
  function() {
    function Internationalization2(cultureName) {
      if (cultureName) {
        this.culture = cultureName;
      }
    }
    Internationalization2.prototype.getDateFormat = function(options) {
      return DateFormat.dateFormat(this.getCulture(), options || {
        type: "date",
        skeleton: "short"
      }, cldrData);
    };
    Internationalization2.prototype.getNumberFormat = function(options) {
      if (options && !options.currency) {
        options.currency = defaultCurrencyCode;
      }
      if (isBlazor() && options && !options.format) {
        options.minimumFractionDigits = 0;
      }
      return NumberFormat.numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    Internationalization2.prototype.getDateParser = function(options) {
      return DateParser.dateParser(this.getCulture(), options || {
        skeleton: "short",
        type: "date"
      }, cldrData);
    };
    Internationalization2.prototype.getNumberParser = function(options) {
      if (isBlazor() && options && !options.format) {
        options.minimumFractionDigits = 0;
      }
      return NumberParser.numberParser(this.getCulture(), options || {
        format: "N"
      }, cldrData);
    };
    Internationalization2.prototype.formatNumber = function(value, option) {
      return this.getNumberFormat(option)(value);
    };
    Internationalization2.prototype.formatDate = function(value, option) {
      return this.getDateFormat(option)(value);
    };
    Internationalization2.prototype.parseDate = function(value, option) {
      return this.getDateParser(option)(value);
    };
    Internationalization2.prototype.parseNumber = function(value, option) {
      return this.getNumberParser(option)(value);
    };
    Internationalization2.prototype.getDatePattern = function(option, isExcelFormat) {
      return IntlBase.getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    Internationalization2.prototype.getNumberPattern = function(option, isExcel) {
      return IntlBase.getActualNumberFormat(this.getCulture(), option, cldrData, isExcel);
    };
    Internationalization2.prototype.getFirstDayOfWeek = function() {
      return IntlBase.getWeekData(this.getCulture(), cldrData);
    };
    Internationalization2.prototype.getCulture = function() {
      return this.culture || defaultCulture;
    };
    return Internationalization2;
  }()
);
function setCulture(cultureName) {
  defaultCulture = cultureName;
  onIntlChange.notify("notifyExternalChange", {
    "locale": defaultCulture
  });
}
function getNumericObject(locale, type) {
  var numObject = IntlBase.getDependables(cldrData, locale, "", true)[mapper2[0]];
  var dateObject = IntlBase.getDependables(cldrData, locale, "")[mapper2[1]];
  var numSystem = getValue("defaultNumberingSystem", numObject);
  var symbPattern = isBlazor() ? getValue("numberSymbols", numObject) : getValue("symbols-numberSystem-" + numSystem, numObject);
  var pattern = IntlBase.getSymbolPattern(type || "decimal", numSystem, numObject, false);
  return extend(symbPattern, IntlBase.getFormatData(pattern, true, "", true), {
    "dateSeparator": IntlBase.getDateSeparator(dateObject)
  });
}
function getDefaultDateObject(mode) {
  return IntlBase.getDependables(cldrData, "", mode, false)[mapper2[1]];
}

// node_modules/@syncfusion/ej2-base/src/intl/intl-base.js
var regExp2 = RegExp;
var blazorCultureFormats = {
  "en-US": {
    "d": "M/d/y",
    "D": "EEEE, MMMM d, y",
    "f": "EEEE, MMMM d, y h:mm a",
    "F": "EEEE, MMMM d, y h:mm:s a",
    "g": "M/d/y h:mm a",
    "G": "M/d/yyyy h:mm:ss tt",
    "m": "MMMM d",
    "M": "MMMM d",
    "r": "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
    "R": "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
    "s": "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
    "t": "h:mm tt",
    "T": "h:m:s tt",
    "u": "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
    "U": "dddd, MMMM d, yyyy h:mm:ss tt",
    "y": "MMMM yyyy",
    "Y": "MMMM yyyy"
  }
};
var IntlBase;
(function(IntlBase2) {
  IntlBase2.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
  IntlBase2.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*[0# ]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
  IntlBase2.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
  var fractionRegex = /[0-9]/g;
  IntlBase2.defaultCurrency = "$";
  var mapper3 = ["infinity", "nan", "group", "decimal"];
  var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
  var patternMatch = {
    "G": "",
    "M": "m",
    "L": "m",
    "H": "h",
    "c": "d",
    "'": '"',
    " a": " AM/PM",
    "yy": "yy",
    "y": "yyyy",
    "EEEE": "dddd",
    "E": "ddd"
  };
  IntlBase2.dateConverterMapper = /dddd|ddd/ig;
  var defaultFirstDay = "sun";
  IntlBase2.islamicRegex = /^islamic/;
  var firstDayMapper = {
    "sun": 0,
    "mon": 1,
    "tue": 2,
    "wed": 3,
    "thu": 4,
    "fri": 5,
    "sat": 6
  };
  IntlBase2.formatRegex = new regExp2("(^[ncpae]{1})([0-1]?[0-9]|20)?$", "i");
  IntlBase2.currencyFormatRegex = new regExp2("(^[ca]{1})([0-1]?[0-9]|20)?$", "i");
  IntlBase2.curWithoutNumberRegex = /(c|a)$/ig;
  var typeMapper = {
    "$": "isCurrency",
    "%": "isPercent",
    "-": "isNegative",
    0: "nlead",
    1: "nend"
  };
  IntlBase2.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
  IntlBase2.basicPatterns = ["short", "medium", "long", "full"];
  IntlBase2.defaultObject = {
    "dates": {
      "calendars": {
        "gregorian": {
          "months": {
            "stand-alone": {
              "abbreviated": {
                "1": "Jan",
                "2": "Feb",
                "3": "Mar",
                "4": "Apr",
                "5": "May",
                "6": "Jun",
                "7": "Jul",
                "8": "Aug",
                "9": "Sep",
                "10": "Oct",
                "11": "Nov",
                "12": "Dec"
              },
              "narrow": {
                "1": "J",
                "2": "F",
                "3": "M",
                "4": "A",
                "5": "M",
                "6": "J",
                "7": "J",
                "8": "A",
                "9": "S",
                "10": "O",
                "11": "N",
                "12": "D"
              },
              "wide": {
                "1": "January",
                "2": "February",
                "3": "March",
                "4": "April",
                "5": "May",
                "6": "June",
                "7": "July",
                "8": "August",
                "9": "September",
                "10": "October",
                "11": "November",
                "12": "December"
              }
            }
          },
          "days": {
            "stand-alone": {
              "abbreviated": {
                "sun": "Sun",
                "mon": "Mon",
                "tue": "Tue",
                "wed": "Wed",
                "thu": "Thu",
                "fri": "Fri",
                "sat": "Sat"
              },
              "narrow": {
                "sun": "S",
                "mon": "M",
                "tue": "T",
                "wed": "W",
                "thu": "T",
                "fri": "F",
                "sat": "S"
              },
              "short": {
                "sun": "Su",
                "mon": "Mo",
                "tue": "Tu",
                "wed": "We",
                "thu": "Th",
                "fri": "Fr",
                "sat": "Sa"
              },
              "wide": {
                "sun": "Sunday",
                "mon": "Monday",
                "tue": "Tuesday",
                "wed": "Wednesday",
                "thu": "Thursday",
                "fri": "Friday",
                "sat": "Saturday"
              }
            }
          },
          "dayPeriods": {
            "format": {
              "wide": {
                "am": "AM",
                "pm": "PM"
              }
            }
          },
          "eras": {
            "eraNames": {
              "0": "Before Christ",
              "0-alt-variant": "Before Common Era",
              "1": "Anno Domini",
              "1-alt-variant": "Common Era"
            },
            "eraAbbr": {
              "0": "BC",
              "0-alt-variant": "BCE",
              "1": "AD",
              "1-alt-variant": "CE"
            },
            "eraNarrow": {
              "0": "B",
              "0-alt-variant": "BCE",
              "1": "A",
              "1-alt-variant": "CE"
            }
          },
          "dateFormats": {
            "full": "EEEE, MMMM d, y",
            "long": "MMMM d, y",
            "medium": "MMM d, y",
            "short": "M/d/yy"
          },
          "timeFormats": {
            "full": "h:mm:ss a zzzz",
            "long": "h:mm:ss a z",
            "medium": "h:mm:ss a",
            "short": "h:mm a"
          },
          "dateTimeFormats": {
            "full": "{1} 'at' {0}",
            "long": "{1} 'at' {0}",
            "medium": "{1}, {0}",
            "short": "{1}, {0}",
            "availableFormats": {
              "d": "d",
              "E": "ccc",
              "Ed": "d E",
              "Ehm": "E h:mm a",
              "EHm": "E HH:mm",
              "Ehms": "E h:mm:ss a",
              "EHms": "E HH:mm:ss",
              "Gy": "y G",
              "GyMMM": "MMM y G",
              "GyMMMd": "MMM d, y G",
              "GyMMMEd": "E, MMM d, y G",
              "h": "h a",
              "H": "HH",
              "hm": "h:mm a",
              "Hm": "HH:mm",
              "hms": "h:mm:ss a",
              "Hms": "HH:mm:ss",
              "hmsv": "h:mm:ss a v",
              "Hmsv": "HH:mm:ss v",
              "hmv": "h:mm a v",
              "Hmv": "HH:mm v",
              "M": "L",
              "Md": "M/d",
              "MEd": "E, M/d",
              "MMM": "LLL",
              "MMMd": "MMM d",
              "MMMEd": "E, MMM d",
              "MMMMd": "MMMM d",
              "ms": "mm:ss",
              "y": "y",
              "yM": "M/y",
              "yMd": "M/d/y",
              "yMEd": "E, M/d/y",
              "yMMM": "MMM y",
              "yMMMd": "MMM d, y",
              "yMMMEd": "E, MMM d, y",
              "yMMMM": "MMMM y"
            }
          }
        },
        "islamic": {
          "months": {
            "stand-alone": {
              "abbreviated": {
                "1": "Muh.",
                "2": "Saf.",
                "3": "Rab. I",
                "4": "Rab. II",
                "5": "Jum. I",
                "6": "Jum. II",
                "7": "Raj.",
                "8": "Sha.",
                "9": "Ram.",
                "10": "Shaw.",
                "11": "Dhuʻl-Q.",
                "12": "Dhuʻl-H."
              },
              "narrow": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "10": "10",
                "11": "11",
                "12": "12"
              },
              "wide": {
                "1": "Muharram",
                "2": "Safar",
                "3": "Rabiʻ I",
                "4": "Rabiʻ II",
                "5": "Jumada I",
                "6": "Jumada II",
                "7": "Rajab",
                "8": "Shaʻban",
                "9": "Ramadan",
                "10": "Shawwal",
                "11": "Dhuʻl-Qiʻdah",
                "12": "Dhuʻl-Hijjah"
              }
            }
          },
          "days": {
            "stand-alone": {
              "abbreviated": {
                "sun": "Sun",
                "mon": "Mon",
                "tue": "Tue",
                "wed": "Wed",
                "thu": "Thu",
                "fri": "Fri",
                "sat": "Sat"
              },
              "narrow": {
                "sun": "S",
                "mon": "M",
                "tue": "T",
                "wed": "W",
                "thu": "T",
                "fri": "F",
                "sat": "S"
              },
              "short": {
                "sun": "Su",
                "mon": "Mo",
                "tue": "Tu",
                "wed": "We",
                "thu": "Th",
                "fri": "Fr",
                "sat": "Sa"
              },
              "wide": {
                "sun": "Sunday",
                "mon": "Monday",
                "tue": "Tuesday",
                "wed": "Wednesday",
                "thu": "Thursday",
                "fri": "Friday",
                "sat": "Saturday"
              }
            }
          },
          "dayPeriods": {
            "format": {
              "wide": {
                "am": "AM",
                "pm": "PM"
              }
            }
          },
          "eras": {
            "eraNames": {
              "0": "AH"
            },
            "eraAbbr": {
              "0": "AH"
            },
            "eraNarrow": {
              "0": "AH"
            }
          },
          "dateFormats": {
            "full": "EEEE, MMMM d, y G",
            "long": "MMMM d, y G",
            "medium": "MMM d, y G",
            "short": "M/d/y GGGGG"
          },
          "timeFormats": {
            "full": "h:mm:ss a zzzz",
            "long": "h:mm:ss a z",
            "medium": "h:mm:ss a",
            "short": "h:mm a"
          },
          "dateTimeFormats": {
            "full": "{1} 'at' {0}",
            "long": "{1} 'at' {0}",
            "medium": "{1}, {0}",
            "short": "{1}, {0}",
            "availableFormats": {
              "d": "d",
              "E": "ccc",
              "Ed": "d E",
              "Ehm": "E h:mm a",
              "EHm": "E HH:mm",
              "Ehms": "E h:mm:ss a",
              "EHms": "E HH:mm:ss",
              "Gy": "y G",
              "GyMMM": "MMM y G",
              "GyMMMd": "MMM d, y G",
              "GyMMMEd": "E, MMM d, y G",
              "h": "h a",
              "H": "HH",
              "hm": "h:mm a",
              "Hm": "HH:mm",
              "hms": "h:mm:ss a",
              "Hms": "HH:mm:ss",
              "M": "L",
              "Md": "M/d",
              "MEd": "E, M/d",
              "MMM": "LLL",
              "MMMd": "MMM d",
              "MMMEd": "E, MMM d",
              "MMMMd": "MMMM d",
              "ms": "mm:ss",
              "y": "y G",
              "yyyy": "y G",
              "yyyyM": "M/y GGGGG",
              "yyyyMd": "M/d/y GGGGG",
              "yyyyMEd": "E, M/d/y GGGGG",
              "yyyyMMM": "MMM y G",
              "yyyyMMMd": "MMM d, y G",
              "yyyyMMMEd": "E, MMM d, y G",
              "yyyyMMMM": "MMMM y G",
              "yyyyQQQ": "QQQ y G",
              "yyyyQQQQ": "QQQQ y G"
            }
          }
        }
      },
      "timeZoneNames": {
        "hourFormat": "+HH:mm;-HH:mm",
        "gmtFormat": "GMT{0}",
        "gmtZeroFormat": "GMT"
      }
    },
    "numbers": {
      "currencies": {
        "USD": {
          "displayName": "US Dollar",
          "symbol": "$",
          "symbol-alt-narrow": "$"
        },
        "EUR": {
          "displayName": "Euro",
          "symbol": "€",
          "symbol-alt-narrow": "€"
        },
        "GBP": {
          "displayName": "British Pound",
          "symbol-alt-narrow": "£"
        }
      },
      "defaultNumberingSystem": "latn",
      "minimumGroupingDigits": "1",
      "symbols-numberSystem-latn": {
        "decimal": ".",
        "group": ",",
        "list": ";",
        "percentSign": "%",
        "plusSign": "+",
        "minusSign": "-",
        "exponential": "E",
        "superscriptingExponent": "×",
        "perMille": "‰",
        "infinity": "∞",
        "nan": "NaN",
        "timeSeparator": ":"
      },
      "decimalFormats-numberSystem-latn": {
        "standard": "#,##0.###"
      },
      "percentFormats-numberSystem-latn": {
        "standard": "#,##0%"
      },
      "currencyFormats-numberSystem-latn": {
        "standard": "¤#,##0.00",
        "accounting": "¤#,##0.00;(¤#,##0.00)"
      },
      "scientificFormats-numberSystem-latn": {
        "standard": "#E0"
      }
    }
  };
  IntlBase2.blazorDefaultObject = {
    "numbers": {
      "mapper": {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9"
      },
      "mapperDigits": "0123456789",
      "numberSymbols": {
        "decimal": ".",
        "group": ",",
        "plusSign": "+",
        "minusSign": "-",
        "percentSign": "%",
        "nan": "NaN",
        "timeSeparator": ":",
        "infinity": "∞"
      },
      "timeSeparator": ":",
      "currencySymbol": "$",
      "currencypData": {
        "nlead": "$",
        "nend": "",
        "groupSeparator": ",",
        "groupData": {
          "primary": 3
        },
        "maximumFraction": 2,
        "minimumFraction": 2
      },
      "percentpData": {
        "nlead": "",
        "nend": "%",
        "groupSeparator": ",",
        "groupData": {
          "primary": 3
        },
        "maximumFraction": 2,
        "minimumFraction": 2
      },
      "percentnData": {
        "nlead": "-",
        "nend": "%",
        "groupSeparator": ",",
        "groupData": {
          "primary": 3
        },
        "maximumFraction": 2,
        "minimumFraction": 2
      },
      "currencynData": {
        "nlead": "($",
        "nend": ")",
        "groupSeparator": ",",
        "groupData": {
          "primary": 3
        },
        "maximumFraction": 2,
        "minimumFraction": 2
      },
      "decimalnData": {
        "nlead": "-",
        "nend": "",
        "groupData": {
          "primary": 3
        },
        "maximumFraction": 2,
        "minimumFraction": 2
      },
      "decimalpData": {
        "nlead": "",
        "nend": "",
        "groupData": {
          "primary": 3
        },
        "maximumFraction": 2,
        "minimumFraction": 2
      }
    },
    "dates": {
      "dayPeriods": {
        "am": "AM",
        "pm": "PM"
      },
      "dateSeperator": "/",
      "days": {
        "abbreviated": {
          "sun": "Sun",
          "mon": "Mon",
          "tue": "Tue",
          "wed": "Wed",
          "thu": "Thu",
          "fri": "Fri",
          "sat": "Sat"
        },
        "short": {
          "sun": "Su",
          "mon": "Mo",
          "tue": "Tu",
          "wed": "We",
          "thu": "Th",
          "fri": "Fr",
          "sat": "Sa"
        },
        "wide": {
          "sun": "Sunday",
          "mon": "Monday",
          "tue": "Tuesday",
          "wed": "Wednesday",
          "thu": "Thursday",
          "fri": "Friday",
          "sat": "Saturday"
        }
      },
      "months": {
        "abbreviated": {
          "1": "Jan",
          "2": "Feb",
          "3": "Mar",
          "4": "Apr",
          "5": "May",
          "6": "Jun",
          "7": "Jul",
          "8": "Aug",
          "9": "Sep",
          "10": "Oct",
          "11": "Nov",
          "12": "Dec"
        },
        "wide": {
          "1": "January",
          "2": "February",
          "3": "March",
          "4": "April",
          "5": "May",
          "6": "June",
          "7": "July",
          "8": "August",
          "9": "September",
          "10": "October",
          "11": "November",
          "12": "December"
        }
      },
      "eras": {
        "1": "AD"
      }
    }
  };
  IntlBase2.monthIndex = {
    3: "abbreviated",
    4: "wide",
    5: "narrow",
    1: "abbreviated"
  };
  IntlBase2.month = "months";
  IntlBase2.days = "days";
  IntlBase2.patternMatcher = {
    C: "currency",
    P: "percent",
    N: "decimal",
    A: "currency",
    E: "scientific"
  };
  function getResultantPattern(skeleton, dateObject, type, isIslamic, blazorCulture) {
    var resPattern;
    var iType = type || "date";
    if (blazorCulture) {
      resPattern = compareBlazorDateFormats({
        skeleton
      }, blazorCulture).format || compareBlazorDateFormats({
        skeleton: "d"
      }, "en-US").format;
    } else {
      if (IntlBase2.basicPatterns.indexOf(skeleton) !== -1) {
        resPattern = getValue(iType + "Formats." + skeleton, dateObject);
        if (iType === "dateTime") {
          var dPattern = getValue("dateFormats." + skeleton, dateObject);
          var tPattern = getValue("timeFormats." + skeleton, dateObject);
          resPattern = resPattern.replace("{1}", dPattern).replace("{0}", tPattern);
        }
      } else {
        resPattern = getValue("dateTimeFormats.availableFormats." + skeleton, dateObject);
      }
      if (isUndefined(resPattern) && skeleton === "yMd") {
        resPattern = "M/d/y";
      }
    }
    return resPattern;
  }
  IntlBase2.getResultantPattern = getResultantPattern;
  function getDependables(cldr, culture, mode, isNumber) {
    var ret = {};
    var calendartype = mode || "gregorian";
    ret.parserObject = ParserBase.getMainObject(cldr, culture) || (isBlazor() ? IntlBase2.blazorDefaultObject : IntlBase2.defaultObject);
    if (isNumber) {
      ret.numericObject = getValue("numbers", ret.parserObject);
    } else {
      var dateString = isBlazor() ? "dates" : "dates.calendars." + calendartype;
      ret.dateObject = getValue(dateString, ret.parserObject);
    }
    return ret;
  }
  IntlBase2.getDependables = getDependables;
  function getSymbolPattern(type, numSystem, obj, isAccount) {
    return getValue(type + "Formats-numberSystem-" + numSystem + (isAccount ? ".accounting" : ".standard"), obj) || (isAccount ? getValue(type + "Formats-numberSystem-" + numSystem + ".standard", obj) : "");
  }
  IntlBase2.getSymbolPattern = getSymbolPattern;
  function ConvertDateToWeekFormat(format) {
    var convertMapper = format.match(IntlBase2.dateConverterMapper);
    if (convertMapper && isBlazor()) {
      var tempString = convertMapper[0].length === 3 ? "EEE" : "EEEE";
      return format.replace(IntlBase2.dateConverterMapper, tempString);
    }
    return format;
  }
  IntlBase2.ConvertDateToWeekFormat = ConvertDateToWeekFormat;
  function compareBlazorDateFormats(formatOptions, culture) {
    var format = formatOptions.format || formatOptions.skeleton;
    var curFormatMapper = getValue((culture || "en-US") + "." + format, blazorCultureFormats);
    if (!curFormatMapper) {
      curFormatMapper = getValue("en-US." + format, blazorCultureFormats);
    }
    if (curFormatMapper) {
      curFormatMapper = ConvertDateToWeekFormat(curFormatMapper);
      formatOptions.format = curFormatMapper.replace(/tt/, "a");
    }
    return formatOptions;
  }
  IntlBase2.compareBlazorDateFormats = compareBlazorDateFormats;
  function getProperNumericSkeleton(skeleton) {
    var matches2 = skeleton.match(IntlBase2.formatRegex);
    var ret = {};
    var pattern = matches2[1].toUpperCase();
    ret.isAccount = pattern === "A";
    ret.type = IntlBase2.patternMatcher["" + pattern];
    if (skeleton.length > 1) {
      ret.fractionDigits = parseInt(matches2[2], 10);
    }
    return ret;
  }
  IntlBase2.getProperNumericSkeleton = getProperNumericSkeleton;
  function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
    var nData = fractionOnly ? {} : {
      nlead: "",
      nend: ""
    };
    var match = pattern.match(IntlBase2.customRegex);
    if (match) {
      if (!fractionOnly) {
        nData.nlead = changeCurrencySymbol(match[1], cSymbol);
        nData.nend = changeCurrencySymbol(match[10], cSymbol);
        nData.groupPattern = match[4];
      }
      var fraction = match[7];
      if (fraction && needFraction) {
        var fmatch = fraction.match(fractionRegex);
        if (!isNullOrUndefined(fmatch)) {
          nData.minimumFraction = fmatch.length;
        } else {
          nData.minimumFraction = 0;
        }
        nData.maximumFraction = fraction.length - 1;
      }
    }
    return nData;
  }
  IntlBase2.getFormatData = getFormatData;
  function changeCurrencySymbol(val, sym) {
    if (val) {
      val = val.replace(IntlBase2.defaultCurrency, sym);
      return sym === "" ? val.trim() : val;
    }
    return "";
  }
  IntlBase2.changeCurrencySymbol = changeCurrencySymbol;
  function getCurrencySymbol(numericObject, currencyCode, altSymbol) {
    var symbol = altSymbol ? "." + altSymbol : ".symbol";
    var getCurrency = getValue("currencies." + currencyCode + symbol, numericObject) || getValue("currencies." + currencyCode + ".symbol-alt-narrow", numericObject) || "$";
    return getCurrency;
  }
  IntlBase2.getCurrencySymbol = getCurrencySymbol;
  function customFormat(format, dOptions, obj) {
    var options = {};
    var formatSplit = format.split(";");
    var data = ["pData", "nData", "zeroData"];
    for (var i = 0; i < formatSplit.length; i++) {
      options["" + data[parseInt(i.toString(), 10)]] = customNumberFormat(formatSplit[parseInt(i.toString(), 10)], dOptions, obj);
    }
    if (isNullOrUndefined(options.nData)) {
      options.nData = extend({}, options.pData);
      options.nData.nlead = isNullOrUndefined(dOptions) ? "-" + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
    }
    return options;
  }
  IntlBase2.customFormat = customFormat;
  function customNumberFormat(format, dOptions, numObject) {
    var cOptions = {
      type: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    };
    var pattern = format.match(IntlBase2.customRegex);
    if (isNullOrUndefined(pattern) || pattern[5] === "" && format !== "N/A") {
      cOptions.type = void 0;
      return cOptions;
    }
    cOptions.nlead = pattern[1];
    cOptions.nend = pattern[10];
    var integerPart = pattern[6];
    var spaceCapture = integerPart.match(/ $/g) ? true : false;
    var spaceGrouping = integerPart.replace(/ $/g, "").indexOf(" ") !== -1;
    cOptions.useGrouping = integerPart.indexOf(",") !== -1 || spaceGrouping;
    integerPart = integerPart.replace(/,/g, "");
    var fractionPart = pattern[7];
    if (integerPart.indexOf("0") !== -1) {
      cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf("0");
    }
    if (!isNullOrUndefined(fractionPart)) {
      cOptions.minimumFractionDigits = fractionPart.lastIndexOf("0");
      cOptions.maximumFractionDigits = fractionPart.lastIndexOf("#");
      if (cOptions.minimumFractionDigits === -1) {
        cOptions.minimumFractionDigits = 0;
      }
      if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
        cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
      }
    }
    if (!isNullOrUndefined(dOptions)) {
      dOptions.isCustomFormat = true;
      extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], "$", dOptions.currencySymbol));
      if (!cOptions.isCurrency) {
        extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], "%", dOptions.percentSymbol));
      }
    } else {
      extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], "%", "%"));
    }
    if (!isNullOrUndefined(numObject)) {
      var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
      if (cOptions.useGrouping) {
        cOptions.groupSeparator = spaceGrouping ? " " : dOptions.numberMapper.numberSymbols[mapper3[2]];
        cOptions.groupData = NumberFormat.getGroupingDetails(symbolPattern.split(";")[0]);
      }
      cOptions.nlead = cOptions.nlead.replace(/'/g, "");
      cOptions.nend = spaceCapture ? " " + cOptions.nend.replace(/'/g, "") : cOptions.nend.replace(/'/g, "");
    }
    return cOptions;
  }
  IntlBase2.customNumberFormat = customNumberFormat;
  function isCurrencyPercent(parts, actual, symbol) {
    var options = {
      nlead: parts[0],
      nend: parts[1]
    };
    for (var i = 0; i < 2; i++) {
      var part = parts[parseInt(i.toString(), 10)];
      var loc = part.indexOf(actual);
      if (loc !== -1 && (loc < part.indexOf("'") || loc > part.lastIndexOf("'"))) {
        options["" + typeMapper[parseInt(i.toString(), 10)]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
        options["" + typeMapper["" + actual]] = true;
        options.type = options.isCurrency ? "currency" : "percent";
        break;
      }
    }
    return options;
  }
  IntlBase2.isCurrencyPercent = isCurrencyPercent;
  function getDateSeparator(dateObj) {
    var value = (getValue("dateFormats.short", dateObj) || "").match(/[dM]([^dM])[dM]/i);
    return value ? value[1] : "/";
  }
  IntlBase2.getDateSeparator = getDateSeparator;
  function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
    var dependable = getDependables(cldr, culture, options.calendar);
    if (isBlazor()) {
      options = compareBlazorDateFormats(options, culture);
    }
    var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
    if (isExcelFormat) {
      actualPattern = actualPattern.replace(patternRegex, function(pattern2) {
        return patternMatch["" + pattern2];
      });
      if (actualPattern.indexOf("z") !== -1) {
        var tLength = actualPattern.match(/z/g).length;
        var timeZonePattern = void 0;
        var options_1 = {
          "timeZone": {}
        };
        options_1.numMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
        options_1.timeZone = getValue("dates.timeZoneNames", dependable.parserObject);
        var value = /* @__PURE__ */ new Date();
        var timezone = value.getTimezoneOffset();
        var pattern = tLength < 4 ? "+H;-H" : options_1.timeZone.hourFormat;
        pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
        if (timezone === 0) {
          timeZonePattern = options_1.timeZone.gmtZeroFormat;
        } else {
          timeZonePattern = DateFormat.getTimeZoneValue(timezone, pattern);
          timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
        }
        actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
      }
      actualPattern = actualPattern.replace(/ $/, "");
    }
    return actualPattern;
  }
  IntlBase2.getActualDateTimeFormat = getActualDateTimeFormat;
  function processSymbol(actual, option) {
    if (actual.indexOf(",") !== -1) {
      var split = actual.split(",");
      actual = split[0] + getValue("numberMapper.numberSymbols.group", option) + split[1].replace(".", getValue("numberMapper.numberSymbols.decimal", option));
    } else {
      actual = actual.replace(".", getValue("numberMapper.numberSymbols.decimal", option));
    }
    return actual;
  }
  IntlBase2.processSymbol = processSymbol;
  function getActualNumberFormat(culture, options, cldr, isExcel) {
    var dependable = getDependables(cldr, culture, "", true);
    var parseOptions = {
      custom: true
    };
    var numrericObject = dependable.numericObject;
    var minFrac;
    var curObj = {};
    var curMatch = (options.format || "").match(IntlBase2.currencyFormatRegex);
    var type = IntlBase2.formatRegex.test(options.format) ? getProperNumericSkeleton(options.format || "N") : {};
    var dOptions = {};
    if (curMatch) {
      dOptions.numberMapper = isBlazor() ? extend({}, dependable.numericObject) : ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
      var curCode = isBlazor() ? getValue("currencySymbol", dependable.numericObject) : getCurrencySymbol(dependable.numericObject, options.currency || defaultCurrencyCode, options.altSymbol);
      var symbolPattern = getSymbolPattern("currency", dOptions.numberMapper.numberSystem, dependable.numericObject, /a/i.test(options.format));
      symbolPattern = symbolPattern.replace(/\u00A4/g, curCode);
      var split = symbolPattern.split(";");
      curObj.hasNegativePattern = isBlazor() ? true : split.length > 1;
      curObj.nData = isBlazor() ? getValue(type.type + "nData", numrericObject) : getFormatData(split[1] || "-" + split[0], true, curCode);
      curObj.pData = isBlazor() ? getValue(type.type + "pData", numrericObject) : getFormatData(split[0], false, curCode);
      if (!curMatch[2] && !options.minimumFractionDigits && !options.maximumFractionDigits) {
        minFrac = getFormatData(symbolPattern.split(";")[0], true, "", true).minimumFraction;
      }
    }
    var actualPattern;
    if (IntlBase2.formatRegex.test(options.format) || !options.format) {
      extend(parseOptions, getProperNumericSkeleton(options.format || "N"));
      parseOptions.custom = false;
      actualPattern = "###0";
      if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
        var defaultMinimum = 0;
        if (parseOptions.fractionDigits) {
          options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
        }
        actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits || options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
      }
      if (options.minimumIntegerDigits) {
        actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
      }
      if (options.useGrouping) {
        actualPattern = groupingPattern(actualPattern);
      }
      if (parseOptions.type === "currency" || parseOptions.type && isBlazor()) {
        if (isBlazor() && parseOptions.type !== "currency") {
          curObj.pData = getValue(parseOptions.type + "pData", numrericObject);
          curObj.nData = getValue(parseOptions.type + "nData", numrericObject);
        }
        var cPattern = actualPattern;
        actualPattern = curObj.pData.nlead + cPattern + curObj.pData.nend;
        if (curObj.hasNegativePattern || isBlazor()) {
          actualPattern += ";" + curObj.nData.nlead + cPattern + curObj.nData.nend;
        }
      }
      if (parseOptions.type === "percent" && !isBlazor()) {
        actualPattern += " %";
      }
    } else {
      actualPattern = options.format.replace(/'/g, '"');
    }
    if (Object.keys(dOptions).length > 0) {
      actualPattern = !isExcel ? processSymbol(actualPattern, dOptions) : actualPattern;
    }
    return actualPattern;
  }
  IntlBase2.getActualNumberFormat = getActualNumberFormat;
  function fractionDigitsPattern(pattern, minDigits, maxDigits) {
    pattern += ".";
    for (var a = 0; a < minDigits; a++) {
      pattern += "0";
    }
    if (minDigits < maxDigits) {
      var diff = maxDigits - minDigits;
      for (var b = 0; b < diff; b++) {
        pattern += "#";
      }
    }
    return pattern;
  }
  IntlBase2.fractionDigitsPattern = fractionDigitsPattern;
  function minimumIntegerPattern(pattern, digits) {
    var temp = pattern.split(".");
    var integer = "";
    for (var x = 0; x < digits; x++) {
      integer += "0";
    }
    return temp[1] ? integer + "." + temp[1] : integer;
  }
  IntlBase2.minimumIntegerPattern = minimumIntegerPattern;
  function groupingPattern(pattern) {
    var temp = pattern.split(".");
    var integer = temp[0];
    var no = 3 - integer.length % 3;
    var hash = no && no === 1 ? "#" : no === 2 ? "##" : "";
    integer = hash + integer;
    pattern = "";
    for (var x = integer.length - 1; x > 0; x = x - 3) {
      pattern = "," + integer[x - 2] + integer[x - 1] + integer[parseInt(x.toString(), 10)] + pattern;
    }
    pattern = pattern.slice(1);
    return temp[1] ? pattern + "." + temp[1] : pattern;
  }
  IntlBase2.groupingPattern = groupingPattern;
  function getWeekData(culture, cldr) {
    var firstDay = defaultFirstDay;
    var mapper4 = getValue("supplemental.weekData.firstDay", cldr);
    var iCulture = culture;
    if (/en-/.test(iCulture)) {
      iCulture = iCulture.slice(3);
    }
    iCulture = iCulture.slice(0, 2).toUpperCase() + iCulture.substr(2);
    if (mapper4) {
      firstDay = mapper4["" + iCulture] || mapper4[iCulture.slice(0, 2)] || defaultFirstDay;
    }
    return firstDayMapper["" + firstDay];
  }
  IntlBase2.getWeekData = getWeekData;
  function replaceBlazorCurrency(pData, aCurrency, rCurrency) {
    var iCurrency = getBlazorCurrencySymbol(rCurrency);
    if (aCurrency !== iCurrency) {
      for (var _i = 0, pData_1 = pData; _i < pData_1.length; _i++) {
        var data = pData_1[_i];
        data.nend = data.nend.replace(aCurrency, iCurrency);
        data.nlead = data.nlead.replace(aCurrency, iCurrency);
      }
    }
  }
  IntlBase2.replaceBlazorCurrency = replaceBlazorCurrency;
  function getWeekOfYear(date) {
    var newYear = new Date(date.getFullYear(), 0, 1);
    var day = newYear.getDay();
    var weeknum;
    day = day >= 0 ? day : day + 7;
    var daynum = Math.floor((date.getTime() - newYear.getTime() - (date.getTimezoneOffset() - newYear.getTimezoneOffset()) * 6e4) / 864e5) + 1;
    if (day < 4) {
      weeknum = Math.floor((daynum + day - 1) / 7) + 1;
      if (weeknum > 52) {
        var nYear = new Date(date.getFullYear() + 1, 0, 1);
        var nday = nYear.getDay();
        nday = nday >= 0 ? nday : nday + 7;
        weeknum = nday < 4 ? 1 : 53;
      }
    } else {
      weeknum = Math.floor((daynum + day - 1) / 7);
    }
    return weeknum;
  }
  IntlBase2.getWeekOfYear = getWeekOfYear;
})(IntlBase || (IntlBase = {}));

// node_modules/@syncfusion/ej2-base/src/ajax.js
var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = "GET";
var Ajax = (
  /** @class */
  function() {
    function Ajax2(options, type, async, contentType) {
      this.mode = true;
      this.emitError = true;
      this.options = {};
      if (typeof options === "string") {
        this.url = options;
        this.type = type ? type.toUpperCase() : defaultType;
        this.mode = !isNullOrUndefined(async) ? async : true;
      } else if (typeof options === "object") {
        this.options = options;
        merge(this, this.options);
      }
      this.type = this.type ? this.type.toUpperCase() : defaultType;
      this.contentType = this.contentType !== void 0 ? this.contentType : contentType;
    }
    Ajax2.prototype.send = function(data) {
      var _this = this;
      this.data = isNullOrUndefined(data) ? this.data : data;
      var eventArgs = {
        cancel: false,
        httpRequest: null
      };
      var promise = new Promise(function(resolve, reject) {
        _this.httpRequest = new XMLHttpRequest();
        _this.httpRequest.onreadystatechange = function() {
          _this.stateChange(resolve, reject);
        };
        if (!isNullOrUndefined(_this.onLoad)) {
          _this.httpRequest.onload = _this.onLoad;
        }
        if (!isNullOrUndefined(_this.onProgress)) {
          _this.httpRequest.onprogress = _this.onProgress;
        }
        if (!isNullOrUndefined(_this.onAbort)) {
          _this.httpRequest.onabort = _this.onAbort;
        }
        if (!isNullOrUndefined(_this.onError)) {
          _this.httpRequest.onerror = _this.onError;
        }
        if (!isNullOrUndefined(_this.onUploadProgress)) {
          _this.httpRequest.upload.onprogress = _this.onUploadProgress;
        }
        _this.httpRequest.open(_this.type, _this.url, _this.mode);
        if (!isNullOrUndefined(_this.data) && _this.contentType !== null) {
          _this.httpRequest.setRequestHeader("Content-Type", _this.contentType || "application/json; charset=utf-8");
        }
        if (_this.beforeSend) {
          eventArgs.httpRequest = _this.httpRequest;
          _this.beforeSend(eventArgs);
        }
        if (!eventArgs.cancel) {
          _this.httpRequest.send(!isNullOrUndefined(_this.data) ? _this.data : null);
        }
      });
      return promise;
    };
    Ajax2.prototype.successHandler = function(data) {
      if (this.onSuccess) {
        this.onSuccess(data, this);
      }
      return data;
    };
    Ajax2.prototype.failureHandler = function(reason) {
      if (this.onFailure) {
        this.onFailure(this.httpRequest);
      }
      return reason;
    };
    Ajax2.prototype.stateChange = function(resolve, reject) {
      var data = this.httpRequest.responseText;
      if (this.dataType && this.dataType.toLowerCase() === "json") {
        if (data === "") {
          data = void 0;
        } else {
          try {
            data = JSON.parse(data);
          } catch (error) {
          }
        }
      }
      if (this.httpRequest.readyState === 4) {
        if (this.httpRequest.status >= 200 && this.httpRequest.status <= 299 || this.httpRequest.status === 304) {
          resolve(this.successHandler(data));
        } else {
          if (this.emitError) {
            reject(new Error(this.failureHandler(this.httpRequest.statusText)));
          } else {
            resolve();
          }
        }
      }
    };
    Ajax2.prototype.getResponseHeader = function(key) {
      var responseHeaders = {};
      var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
      while (headers) {
        responseHeaders[headers[1].toLowerCase()] = headers[2];
        headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
      }
      var header = responseHeaders[key.toLowerCase()];
      return isNullOrUndefined(header) ? null : header;
    };
    return Ajax2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/fetch.js
var Fetch = (
  /** @class */
  function() {
    function Fetch2(options, type, contentType) {
      this.type = "GET";
      this.emitError = true;
      if (typeof options === "string") {
        this.url = options;
        this.type = !isNullOrUndefined(type) ? type.toUpperCase() : this.type;
        this.contentType = contentType;
      } else if (isObject(options) && Object.keys(options).length > 0) {
        merge(this, options);
      }
      this.contentType = !isNullOrUndefined(this.contentType) ? this.contentType : "application/json; charset=utf-8";
    }
    Fetch2.prototype.send = function(data) {
      var _this = this;
      var contentTypes = {
        "application/json": "json",
        "multipart/form-data": "formData",
        "application/octet-stream": "blob",
        "application/x-www-form-urlencoded": "formData"
      };
      try {
        if (isNullOrUndefined(this.fetchRequest) && this.type === "GET") {
          this.fetchRequest = new Request(this.url, {
            method: this.type
          });
        } else if (isNullOrUndefined(this.fetchRequest)) {
          this.data = !isNullOrUndefined(data) ? data : this.data;
          this.fetchRequest = new Request(this.url, {
            method: this.type,
            headers: {
              "Content-Type": this.contentType
            },
            body: this.data
          });
        }
        var eventArgs = {
          cancel: false,
          fetchRequest: this.fetchRequest
        };
        this.triggerEvent(this["beforeSend"], eventArgs);
        if (eventArgs.cancel) {
          return null;
        }
        this.fetchResponse = fetch(this.fetchRequest);
        return this.fetchResponse.then(function(response) {
          _this.triggerEvent(_this["onLoad"], response);
          if (!response.ok) {
            throw response;
          }
          var responseType = "text";
          for (var _i = 0, _a = Object.keys(contentTypes); _i < _a.length; _i++) {
            var key = _a[_i];
            if (response.headers.get("Content-Type") && response.headers.get("Content-Type").indexOf(key) !== -1) {
              responseType = contentTypes[key];
            }
          }
          return response[responseType]();
        }).then(function(data2) {
          _this.triggerEvent(_this["onSuccess"], data2, _this);
          return data2;
        }).catch(function(error) {
          var returnVal = {};
          if (_this.emitError) {
            _this.triggerEvent(_this["onFailure"], error);
            returnVal = Promise.reject(error);
          }
          return returnVal;
        });
      } catch (error) {
        return error;
      }
    };
    Fetch2.prototype.triggerEvent = function(callback, data, instance) {
      if (!isNullOrUndefined(callback) && typeof callback === "function") {
        callback(data, instance);
      }
    };
    return Fetch2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/browser.js
var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ /]([\w.]+)/i;
var REGX_BROWSER = {
  OPERA: /(opera|opr)(?:.*version|)[ /]([\w.]+)/i,
  EDGE: /(edge)(?:.*version|)[ /]([\w.]+)/i,
  CHROME: /(chrome|crios)[ /]([\w.]+)/i,
  PANTHOMEJS: /(phantomjs)[ /]([\w.]+)/i,
  SAFARI: /(safari)[ /]([\w.]+)/i,
  WEBKIT: /(webkit)[ /]([\w.]+)/i,
  MSIE: /(msie|trident) ([\w.]+)/i,
  MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
if (typeof window !== "undefined") {
  window.browserDetails = window.browserDetails || {};
}
var Browser = (
  /** @class */
  function() {
    function Browser2() {
    }
    Browser2.extractBrowserDetail = function() {
      var browserInfo = {
        culture: {}
      };
      var keys2 = Object.keys(REGX_BROWSER);
      var clientInfo = [];
      for (var _i = 0, keys_1 = keys2; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        clientInfo = Browser2.userAgent.match(REGX_BROWSER["" + key]);
        if (clientInfo) {
          browserInfo.name = clientInfo[1].toLowerCase() === "opr" ? "opera" : clientInfo[1].toLowerCase();
          browserInfo.name = clientInfo[1].toLowerCase() === "crios" ? "chrome" : browserInfo.name;
          browserInfo.version = clientInfo[2];
          browserInfo.culture.name = browserInfo.culture.language = navigator.language;
          if (Browser2.userAgent.match(REGX_IE11)) {
            browserInfo.name = "msie";
            break;
          }
          var version = Browser2.userAgent.match(REGX_VERSION);
          if (browserInfo.name === "safari" && version) {
            browserInfo.version = version[2];
          }
          break;
        }
      }
      return browserInfo;
    };
    Browser2.getEvent = function(event) {
      var events = {
        start: {
          isPointer: "pointerdown",
          isTouch: "touchstart",
          isDevice: "mousedown"
        },
        move: {
          isPointer: "pointermove",
          isTouch: "touchmove",
          isDevice: "mousemove"
        },
        end: {
          isPointer: "pointerup",
          isTouch: "touchend",
          isDevice: "mouseup"
        },
        cancel: {
          isPointer: "pointercancel",
          isTouch: "touchcancel",
          isDevice: "mouseleave"
        }
      };
      return Browser2.isPointer ? events["" + event].isPointer : Browser2.isTouch ? events["" + event].isTouch + (!Browser2.isDevice ? " " + events["" + event].isDevice : "") : events["" + event].isDevice;
    };
    Browser2.getTouchStartEvent = function() {
      return Browser2.getEvent("start");
    };
    Browser2.getTouchEndEvent = function() {
      return Browser2.getEvent("end");
    };
    Browser2.getTouchMoveEvent = function() {
      return Browser2.getEvent("move");
    };
    Browser2.getTouchCancelEvent = function() {
      return Browser2.getEvent("cancel");
    };
    Browser2.isSafari = function() {
      return Browser2.isDevice && Browser2.isIos && Browser2.isTouch && typeof window !== "undefined" && window.navigator.userAgent.toLowerCase().indexOf("iphone") === -1 && window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;
    };
    Browser2.getValue = function(key, regX) {
      var browserDetails = typeof window !== "undefined" ? window.browserDetails : {};
      if (typeof navigator !== "undefined" && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 && Browser2.isTouch === true && !REGX_BROWSER.CHROME.test(navigator.userAgent)) {
        browserDetails["isIos"] = true;
        browserDetails["isDevice"] = true;
        browserDetails["isTouch"] = true;
        browserDetails["isPointer"] = true;
      }
      if ("undefined" === typeof browserDetails["" + key]) {
        return browserDetails["" + key] = regX.test(Browser2.userAgent);
      }
      return browserDetails["" + key];
    };
    Object.defineProperty(Browser2, "userAgent", {
      get: function() {
        return Browser2.uA;
      },
      //Properties
      /**
       * Property specifies the userAgent of the browser. Default userAgent value is based on the browser.
       * Also we can set our own userAgent.
       *
       * @param {string} uA ?
       */
      set: function(uA) {
        Browser2.uA = uA;
        window.browserDetails = {};
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "info", {
      //Read Only Properties
      /**
       * Property is to get the browser information like Name, Version and Language
       *
       * @returns {BrowserInfo} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.info)) {
          return window.browserDetails.info = Browser2.extractBrowserDetail();
        }
        return window.browserDetails.info;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isIE", {
      /**
       * Property is to get whether the userAgent is based IE.
       *
       * @returns {boolean} ?
       */
      get: function() {
        return Browser2.getValue("isIE", REGX_IE);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isTouch", {
      /**
       * Property is to get whether the browser has touch support.
       *
       * @returns {boolean} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.isTouch)) {
          return window.browserDetails.isTouch = "ontouchstart" in window.navigator || window && window.navigator && window.navigator.maxTouchPoints > 0 || "ontouchstart" in window;
        }
        return window.browserDetails.isTouch;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isPointer", {
      /**
       * Property is to get whether the browser has Pointer support.
       *
       * @returns {boolean} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.isPointer)) {
          return window.browserDetails.isPointer = "pointerEnabled" in window.navigator;
        }
        return window.browserDetails.isPointer;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isMSPointer", {
      /**
       * Property is to get whether the browser has MSPointer support.
       *
       * @returns {boolean} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.isMSPointer)) {
          return window.browserDetails.isMSPointer = "msPointerEnabled" in window.navigator;
        }
        return window.browserDetails.isMSPointer;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isDevice", {
      /**
       * Property is to get whether the userAgent is device based.
       *
       * @returns {boolean} ?
       */
      get: function() {
        return Browser2.getValue("isDevice", REGX_MOBILE);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isIos", {
      /**
       * Property is to get whether the userAgent is IOS.
       *
       * @returns {boolean} ?
       */
      get: function() {
        return Browser2.getValue("isIos", REGX_IOS);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isIos7", {
      /**
       * Property is to get whether the userAgent is Ios7.
       *
       * @returns {boolean} ?
       */
      get: function() {
        return Browser2.getValue("isIos7", REGX_IOS7);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isAndroid", {
      /**
       * Property is to get whether the userAgent is Android.
       *
       * @returns {boolean} ?
       */
      get: function() {
        return Browser2.getValue("isAndroid", REGX_ANDROID);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isWebView", {
      /**
       * Property is to identify whether application ran in web view.
       *
       * @returns {boolean} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.isWebView)) {
          window.browserDetails.isWebView = !(isUndefined(window.cordova) && isUndefined(window.PhoneGap) && isUndefined(window.phonegap) && window.forge !== "object");
          return window.browserDetails.isWebView;
        }
        return window.browserDetails.isWebView;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "isWindows", {
      /**
       * Property is to get whether the userAgent is Windows.
       *
       * @returns {boolean} ?
       */
      get: function() {
        return Browser2.getValue("isWindows", REGX_WINDOWS);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "touchStartEvent", {
      /**
       * Property is to get the touch start event. It returns event name based on browser.
       *
       * @returns {string} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.touchStartEvent)) {
          return window.browserDetails.touchStartEvent = Browser2.getTouchStartEvent();
        }
        return window.browserDetails.touchStartEvent;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "touchMoveEvent", {
      /**
       * Property is to get the touch move event. It returns event name based on browser.
       *
       * @returns {string} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.touchMoveEvent)) {
          return window.browserDetails.touchMoveEvent = Browser2.getTouchMoveEvent();
        }
        return window.browserDetails.touchMoveEvent;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "touchEndEvent", {
      /**
       * Property is to get the touch end event. It returns event name based on browser.
       *
       * @returns {string} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.touchEndEvent)) {
          return window.browserDetails.touchEndEvent = Browser2.getTouchEndEvent();
        }
        return window.browserDetails.touchEndEvent;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Browser2, "touchCancelEvent", {
      /**
       * Property is to cancel the touch end event.
       *
       * @returns {string} ?
       */
      get: function() {
        if (isUndefined(window.browserDetails.touchCancelEvent)) {
          return window.browserDetails.touchCancelEvent = Browser2.getTouchCancelEvent();
        }
        return window.browserDetails.touchCancelEvent;
      },
      enumerable: true,
      configurable: true
    });
    Browser2.uA = typeof navigator !== "undefined" ? navigator.userAgent : "";
    return Browser2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/event-handler.js
var EventHandler = (
  /** @class */
  function() {
    function EventHandler2() {
    }
    EventHandler2.addOrGetEventData = function(element2) {
      if ("__eventList" in element2) {
        return element2.__eventList.events;
      } else {
        element2.__eventList = {};
        return element2.__eventList.events = [];
      }
    };
    EventHandler2.add = function(element2, eventName, listener, bindTo, intDebounce) {
      var eventData = EventHandler2.addOrGetEventData(element2);
      var debounceListener;
      if (intDebounce) {
        debounceListener = debounce(listener, intDebounce);
      } else {
        debounceListener = listener;
      }
      if (bindTo) {
        debounceListener = debounceListener.bind(bindTo);
      }
      var event = eventName.split(" ");
      for (var i = 0; i < event.length; i++) {
        eventData.push({
          name: event[parseInt(i.toString(), 10)],
          listener,
          debounce: debounceListener
        });
        if (Browser.isIE) {
          element2.addEventListener(event[parseInt(i.toString(), 10)], debounceListener);
        } else {
          element2.addEventListener(event[parseInt(i.toString(), 10)], debounceListener, {
            passive: false
          });
        }
      }
      return debounceListener;
    };
    EventHandler2.remove = function(element2, eventName, listener) {
      var eventData = EventHandler2.addOrGetEventData(element2);
      var event = eventName.split(" ");
      var _loop_1 = function(j2) {
        var index = -1;
        var debounceListener;
        if (eventData && eventData.length !== 0) {
          eventData.some(function(x, i) {
            return x.name === event[parseInt(j2.toString(), 10)] && x.listener === listener ? (index = i, debounceListener = x.debounce, true) : false;
          });
        }
        if (index !== -1) {
          eventData.splice(index, 1);
        }
        if (debounceListener) {
          element2.removeEventListener(event[parseInt(j2.toString(), 10)], debounceListener);
        }
      };
      for (var j = 0; j < event.length; j++) {
        _loop_1(j);
      }
    };
    EventHandler2.clearEvents = function(element2) {
      var eventData = EventHandler2.addOrGetEventData(element2);
      var copyData = extend([], void 0, eventData);
      for (var i = 0; i < copyData.length; i++) {
        var parseValue = copyData[parseInt(i.toString(), 10)];
        element2.removeEventListener(parseValue.name, parseValue.debounce);
        eventData.shift();
      }
    };
    EventHandler2.trigger = function(element2, eventName, eventProp) {
      var eventData = EventHandler2.addOrGetEventData(element2);
      for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
        var event_1 = eventData_1[_i];
        if (event_1.name === eventName) {
          event_1.debounce.call(this, eventProp);
        }
      }
    };
    return EventHandler2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/dom.js
var SVG_REG = /^svg|^path|^g/;
function createElement(tagName, properties) {
  var element2 = SVG_REG.test(tagName) ? document.createElementNS("http://www.w3.org/2000/svg", tagName) : document.createElement(tagName);
  if (typeof properties === "undefined") {
    return element2;
  }
  element2.innerHTML = properties.innerHTML ? properties.innerHTML : "";
  if (properties.className !== void 0) {
    element2.className = properties.className;
  }
  if (properties.id !== void 0) {
    element2.id = properties.id;
  }
  if (properties.styles !== void 0) {
    element2.setAttribute("style", properties.styles);
  }
  if (properties.attrs !== void 0) {
    attributes(element2, properties.attrs);
  }
  return element2;
}
function addClass(elements, classes) {
  var classList2 = getClassList(classes);
  var regExp3 = RegExp;
  for (var _i = 0, _a = elements; _i < _a.length; _i++) {
    var ele = _a[_i];
    for (var _b = 0, classList_1 = classList2; _b < classList_1.length; _b++) {
      var className = classList_1[_b];
      if (isObject(ele)) {
        var curClass = getValue("attributes.className", ele);
        if (isNullOrUndefined(curClass)) {
          setValue("attributes.className", className, ele);
        } else if (!new regExp3("\\b" + className + "\\b", "i").test(curClass)) {
          setValue("attributes.className", curClass + " " + className, ele);
        }
      } else {
        if (!ele.classList.contains(className)) {
          ele.classList.add(className);
        }
      }
    }
  }
  return elements;
}
function removeClass(elements, classes) {
  var classList2 = getClassList(classes);
  for (var _i = 0, _a = elements; _i < _a.length; _i++) {
    var ele = _a[_i];
    var flag = isObject(ele);
    var canRemove = flag ? getValue("attributes.className", ele) : ele.className !== "";
    if (canRemove) {
      for (var _b = 0, classList_2 = classList2; _b < classList_2.length; _b++) {
        var className = classList_2[_b];
        if (flag) {
          var classes_1 = getValue("attributes.className", ele);
          var classArr = classes_1.split(" ");
          var index = classArr.indexOf(className);
          if (index !== -1) {
            classArr.splice(index, 1);
          }
          setValue("attributes.className", classArr.join(" "), ele);
        } else {
          ele.classList.remove(className);
        }
      }
    }
  }
  return elements;
}
function getClassList(classes) {
  var classList2 = [];
  if (typeof classes === "string") {
    classList2.push(classes);
  } else {
    classList2 = classes;
  }
  return classList2;
}
function isVisible(element2) {
  var ele = element2;
  return ele.style.visibility === "" && ele.offsetWidth > 0;
}
function prepend(fromElements, toElement, isEval) {
  var docFrag = document.createDocumentFragment();
  for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
    var ele = _a[_i];
    docFrag.appendChild(ele);
  }
  toElement.insertBefore(docFrag, toElement.firstElementChild);
  if (isEval) {
    executeScript(toElement);
  }
  return fromElements;
}
function append(fromElements, toElement, isEval) {
  var docFrag = document.createDocumentFragment();
  if (fromElements instanceof NodeList) {
    while (fromElements.length > 0) {
      docFrag.appendChild(fromElements[0]);
    }
  } else {
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
      var ele = _a[_i];
      docFrag.appendChild(ele);
    }
  }
  toElement.appendChild(docFrag);
  if (isEval) {
    executeScript(toElement);
  }
  return fromElements;
}
function executeScript(ele) {
  var eleArray = ele.querySelectorAll("script");
  eleArray.forEach(function(element2) {
    var script = document.createElement("script");
    script.text = element2.innerHTML;
    document.head.appendChild(script);
    detach(script);
  });
}
function detach(element2) {
  var parentNode = element2.parentNode;
  if (parentNode) {
    return parentNode.removeChild(element2);
  }
}
function remove(element2) {
  var parentNode = element2.parentNode;
  EventHandler.clearEvents(element2);
  parentNode.removeChild(element2);
}
function attributes(element2, attributes2) {
  var keys2 = Object.keys(attributes2);
  var ele = element2;
  for (var _i = 0, keys_1 = keys2; _i < keys_1.length; _i++) {
    var key = keys_1[_i];
    if (isObject(ele)) {
      var iKey = key;
      if (key === "tabindex") {
        iKey = "tabIndex";
      }
      ele.attributes["" + iKey] = attributes2["" + key];
    } else {
      ele.setAttribute(key, attributes2["" + key]);
    }
  }
  return ele;
}
function select(selector, context, needsVDOM) {
  if (context === void 0) {
    context = document;
  }
  selector = querySelectId(selector);
  return context.querySelector(selector);
}
function selectAll(selector, context, needsVDOM) {
  if (context === void 0) {
    context = document;
  }
  selector = querySelectId(selector);
  var nodeList = context.querySelectorAll(selector);
  return nodeList;
}
function querySelectId(selector) {
  var charRegex = /(!|"|\$|%|&|'|\(|\)|\*|\/|:|;|<|=|\?|@|\]|\^|`|{|}|\||\+|~)/g;
  if (selector.match(/#[0-9]/g) || selector.match(charRegex)) {
    var idList = selector.split(",");
    for (var i = 0; i < idList.length; i++) {
      var list = idList[parseInt(i.toString(), 10)].split(" ");
      for (var j = 0; j < list.length; j++) {
        if (list[parseInt(j.toString(), 10)].indexOf("#") > -1) {
          if (!list[parseInt(j.toString(), 10)].match(/\[.*\]/)) {
            var splitId = list[parseInt(j.toString(), 10)].split("#");
            if (splitId[1].match(/^\d/) || splitId[1].match(charRegex)) {
              var setId = list[parseInt(j.toString(), 10)].split(".");
              setId[0] = setId[0].replace(/#/, "[id='") + "']";
              list[parseInt(j.toString(), 10)] = setId.join(".");
            }
          }
        }
      }
      idList[parseInt(i.toString(), 10)] = list.join(" ");
    }
    return idList.join(",");
  }
  return selector;
}
function closest(element2, selector) {
  var el = element2;
  if (typeof el.closest === "function") {
    return el.closest(selector);
  }
  while (el && el.nodeType === 1) {
    if (matches(el, selector)) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}
function setStyleAttribute(element2, attrs) {
  if (attrs !== void 0) {
    Object.keys(attrs).forEach(function(key) {
      element2.style["" + key] = attrs["" + key];
    });
  }
}
function classList(element2, addClasses, removeClasses) {
  addClass([element2], addClasses);
  removeClass([element2], removeClasses);
}
function matches(element2, selector) {
  var matches2 = element2.matches || element2.msMatchesSelector || element2.webkitMatchesSelector;
  if (matches2) {
    return matches2.call(element2, selector);
  } else {
    return [].indexOf.call(document.querySelectorAll(selector), element2) !== -1;
  }
}

// node_modules/@syncfusion/ej2-base/src/base.js
var isColEName = new RegExp("]");
var Base = (
  /** @class */
  function() {
    function Base2(options, element2) {
      this.isRendered = false;
      this.isComplexArraySetter = false;
      this.isServerRendered = false;
      this.allowServerDataBinding = true;
      this.isProtectedOnChange = true;
      this.properties = {};
      this.changedProperties = {};
      this.oldProperties = {};
      this.bulkChanges = {};
      this.refreshing = false;
      this.ignoreCollectionWatch = false;
      this.finalUpdate = function() {
      };
      this.childChangedProperties = {};
      this.modelObserver = new Observer(this);
      if (!isUndefined(element2)) {
        if ("string" === typeof element2) {
          this.element = document.querySelector(element2);
        } else {
          this.element = element2;
        }
        if (!isNullOrUndefined(this.element)) {
          this.isProtectedOnChange = false;
          this.addInstance();
        }
      }
      if (!isUndefined(options)) {
        this.setProperties(options, true);
      }
      this.isDestroyed = false;
    }
    Base2.prototype.setProperties = function(prop, muteOnChange) {
      var prevDetection = this.isProtectedOnChange;
      this.isProtectedOnChange = !!muteOnChange;
      merge(this, prop);
      if (muteOnChange !== true) {
        merge(this.changedProperties, prop);
        this.dataBind();
      } else if (isBlazor() && this.isRendered) {
        this.serverDataBind(prop);
      }
      this.finalUpdate();
      this.changedProperties = {};
      this.oldProperties = {};
      this.isProtectedOnChange = prevDetection;
    };
    Base2.callChildDataBind = function(obj, parent) {
      var keys2 = Object.keys(obj);
      for (var _i = 0, keys_1 = keys2; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (parent["" + key] instanceof Array) {
          for (var _a = 0, _b = parent["" + key]; _a < _b.length; _a++) {
            var obj_1 = _b[_a];
            if (obj_1.dataBind !== void 0) {
              obj_1.dataBind();
            }
          }
        } else {
          parent["" + key].dataBind();
        }
      }
    };
    Base2.prototype.clearChanges = function() {
      this.finalUpdate();
      this.changedProperties = {};
      this.oldProperties = {};
      this.childChangedProperties = {};
    };
    Base2.prototype.dataBind = function() {
      Base2.callChildDataBind(this.childChangedProperties, this);
      if (Object.getOwnPropertyNames(this.changedProperties).length) {
        var prevDetection = this.isProtectedOnChange;
        var newChanges = this.changedProperties;
        var oldChanges = this.oldProperties;
        this.clearChanges();
        this.isProtectedOnChange = true;
        this.onPropertyChanged(newChanges, oldChanges);
        this.isProtectedOnChange = prevDetection;
      }
    };
    Base2.prototype.serverDataBind = function(newChanges) {
      if (!isBlazor()) {
        return;
      }
      newChanges = newChanges ? newChanges : {};
      extend(this.bulkChanges, {}, newChanges, true);
      var sfBlazor = "sfBlazor";
      if (this.allowServerDataBinding && window["" + sfBlazor].updateModel) {
        window["" + sfBlazor].updateModel(this);
        this.bulkChanges = {};
      }
    };
    Base2.prototype.saveChanges = function(key, newValue, oldValue) {
      if (isBlazor()) {
        var newChanges = {};
        newChanges["" + key] = newValue;
        this.serverDataBind(newChanges);
      }
      if (this.isProtectedOnChange) {
        return;
      }
      this.oldProperties["" + key] = oldValue;
      this.changedProperties["" + key] = newValue;
      this.finalUpdate();
      this.finalUpdate = setImmediate(this.dataBind.bind(this));
    };
    Base2.prototype.addEventListener = function(eventName, handler) {
      this.modelObserver.on(eventName, handler);
    };
    Base2.prototype.removeEventListener = function(eventName, handler) {
      this.modelObserver.off(eventName, handler);
    };
    Base2.prototype.trigger = function(eventName, eventProp, successHandler, errorHandler) {
      var _this = this;
      if (this.isDestroyed !== true) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = false;
        var data = this.modelObserver.notify(eventName, eventProp, successHandler, errorHandler);
        if (isColEName.test(eventName)) {
          var handler = getValue(eventName, this);
          if (handler) {
            var blazor = "Blazor";
            if (window["" + blazor]) {
              var promise = handler.call(this, eventProp);
              if (promise && typeof promise.then === "function") {
                if (!successHandler) {
                  data = promise;
                } else {
                  promise.then(function(data2) {
                    if (successHandler) {
                      data2 = typeof data2 === "string" && _this.modelObserver.isJson(data2) ? JSON.parse(data2) : data2;
                      successHandler.call(_this, data2);
                    }
                  }).catch(function(data2) {
                    if (errorHandler) {
                      data2 = typeof data2 === "string" && _this.modelObserver.isJson(data2) ? JSON.parse(data2) : data2;
                      errorHandler.call(_this, data2);
                    }
                  });
                }
              } else if (successHandler) {
                successHandler.call(this, eventProp);
              }
            } else {
              handler.call(this, eventProp);
              if (successHandler) {
                successHandler.call(this, eventProp);
              }
            }
          } else if (successHandler) {
            successHandler.call(this, eventProp);
          }
        }
        this.isProtectedOnChange = prevDetection;
        return data;
      }
    };
    Base2.prototype.addInstance = function() {
      var moduleClass = "e-" + this.getModuleName().toLowerCase();
      addClass([this.element], ["e-lib", moduleClass]);
      if (!isNullOrUndefined(this.element.ej2_instances)) {
        this.element.ej2_instances.push(this);
      } else {
        setValue("ej2_instances", [this], this.element);
      }
    };
    Base2.prototype.destroy = function() {
      var _this = this;
      this.element.ej2_instances = this.element.ej2_instances ? this.element.ej2_instances.filter(function(i) {
        if (proxyToRaw) {
          return proxyToRaw(i) !== proxyToRaw(_this);
        }
        return i !== _this;
      }) : [];
      removeClass([this.element], ["e-" + this.getModuleName()]);
      if (this.element.ej2_instances.length === 0) {
        removeClass([this.element], ["e-lib"]);
      }
      this.clearChanges();
      this.modelObserver.destroy();
      this.isDestroyed = true;
    };
    return Base2;
  }()
);
function getComponent(elem, comp) {
  var instance;
  var i;
  var ele = typeof elem === "string" ? document.getElementById(elem) : elem;
  for (i = 0; i < ele.ej2_instances.length; i++) {
    instance = ele.ej2_instances[parseInt(i.toString(), 10)];
    if (typeof comp === "string") {
      var compName = instance.getModuleName();
      if (comp === compName) {
        return instance;
      }
    } else {
      if (instance instanceof comp) {
        return instance;
      }
    }
  }
  return void 0;
}
var proxyToRaw;

// node_modules/@syncfusion/ej2-base/src/notify-property-change.js
function getObject(instance, curKey, defaultValue, type) {
  if (!Object.prototype.hasOwnProperty.call(instance.properties, curKey) || !(instance.properties["" + curKey] instanceof type)) {
    instance.properties["" + curKey] = createInstance(type, [instance, curKey, defaultValue]);
  }
  return instance.properties["" + curKey];
}
function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
  var result = [];
  var len = defaultValue ? defaultValue.length : 0;
  for (var i = 0; i < len; i++) {
    var curType = type;
    if (isFactory) {
      curType = type(defaultValue[parseInt(i.toString(), 10)], instance);
    }
    if (isSetter) {
      var inst = createInstance(curType, [instance, curKey, {}, true]);
      inst.setProperties(defaultValue[parseInt(i.toString(), 10)], true);
      result.push(inst);
    } else {
      result.push(createInstance(curType, [instance, curKey, defaultValue[parseInt(i.toString(), 10)], false]));
    }
  }
  return result;
}
function propertyGetter(defaultValue, curKey) {
  return function() {
    if (!Object.prototype.hasOwnProperty.call(this.properties, curKey)) {
      this.properties["" + curKey] = defaultValue;
    }
    return this.properties["" + curKey];
  };
}
function propertySetter(defaultValue, curKey) {
  return function(newValue) {
    if (this.properties["" + curKey] !== newValue) {
      var oldVal = Object.prototype.hasOwnProperty.call(this.properties, curKey) ? this.properties["" + curKey] : defaultValue;
      this.saveChanges(curKey, newValue, oldVal);
      this.properties["" + curKey] = newValue;
    }
  };
}
function complexGetter(defaultValue, curKey, type) {
  return function() {
    return getObject(this, curKey, defaultValue, type);
  };
}
function complexSetter(defaultValue, curKey, type) {
  return function(newValue) {
    getObject(this, curKey, defaultValue, type).setProperties(newValue);
  };
}
function complexArrayGetter(defaultValue, curKey, type) {
  return function() {
    var _this = this;
    if (!Object.prototype.hasOwnProperty.call(this.properties, curKey)) {
      var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
      this.properties["" + curKey] = defCollection;
    }
    var ignore = this.controlParent !== void 0 && this.controlParent.ignoreCollectionWatch || this.ignoreCollectionWatch;
    if (!Object.prototype.hasOwnProperty.call(this.properties["" + curKey], "push") && !ignore) {
      ["push", "pop"].forEach(function(extendFunc) {
        var descriptor = {
          value: complexArrayDefinedCallback(extendFunc, curKey, type, _this.properties["" + curKey]).bind(_this),
          configurable: true
        };
        Object.defineProperty(_this.properties["" + curKey], extendFunc, descriptor);
      });
    }
    if (!Object.prototype.hasOwnProperty.call(this.properties["" + curKey], "isComplexArray")) {
      Object.defineProperty(this.properties["" + curKey], "isComplexArray", {
        value: true
      });
    }
    return this.properties["" + curKey];
  };
}
function complexArraySetter(defaultValue, curKey, type) {
  return function(newValue) {
    this.isComplexArraySetter = true;
    var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
    var newValCollection = getObjectArray(this, curKey, newValue, type, true);
    this.isComplexArraySetter = false;
    this.saveChanges(curKey, newValCollection, oldValueCollection);
    this.properties["" + curKey] = newValCollection;
  };
}
function complexArrayDefinedCallback(dFunc, curKey, type, prop) {
  return function() {
    var newValue = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newValue[_i] = arguments[_i];
    }
    var keyString = this.propName ? this.getParentKey() + "." + curKey + "-" : curKey + "-";
    switch (dFunc) {
      case "push":
        for (var i = 0; i < newValue.length; i++) {
          var newValueParse = newValue[parseInt(i.toString(), 10)];
          Array.prototype["" + dFunc].apply(prop, [newValueParse]);
          var model = getArrayModel(keyString + (prop.length - 1), newValueParse, !this.controlParent, dFunc);
          this.serverDataBind(model, newValue[parseInt(i.toString(), 10)], false, dFunc);
        }
        break;
      case "pop": {
        Array.prototype["" + dFunc].apply(prop);
        var model = getArrayModel(keyString + prop.length, null, !this.controlParent, dFunc);
        this.serverDataBind(model, {
          ejsAction: "pop"
        }, false, dFunc);
        break;
      }
    }
    return prop;
  };
}
function getArrayModel(keyString, value, isControlParent, arrayFunction) {
  var modelObject = keyString;
  if (isControlParent) {
    modelObject = {};
    modelObject["" + keyString] = value;
    if (value && typeof value === "object") {
      var action = "ejsAction";
      modelObject["" + keyString]["" + action] = arrayFunction;
    }
  }
  return modelObject;
}
function Property(defaultValue) {
  return function(target, key) {
    var propertyDescriptor = {
      set: propertySetter(defaultValue, key),
      get: propertyGetter(defaultValue, key),
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(target, key, propertyDescriptor);
    addPropertyCollection(target, key, "prop", defaultValue);
  };
}
function Complex(defaultValue, type) {
  return function(target, key) {
    var propertyDescriptor = {
      set: complexSetter(defaultValue, key, type),
      get: complexGetter(defaultValue, key, type),
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(target, key, propertyDescriptor);
    addPropertyCollection(target, key, "complexProp", defaultValue, type);
  };
}
function Collection(defaultValue, type) {
  return function(target, key) {
    var propertyDescriptor = {
      set: complexArraySetter(defaultValue, key, type),
      get: complexArrayGetter(defaultValue, key, type),
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(target, key, propertyDescriptor);
    addPropertyCollection(target, key, "colProp", defaultValue, type);
  };
}
function Event2() {
  return function(target, key) {
    var eventDescriptor = {
      set: function(newValue) {
        var oldValue = this.properties["" + key];
        if (oldValue !== newValue) {
          var finalContext = getParentContext(this, key);
          if (isUndefined(oldValue) === false) {
            finalContext.context.removeEventListener(finalContext.prefix, oldValue);
          }
          finalContext.context.addEventListener(finalContext.prefix, newValue);
          this.properties["" + key] = newValue;
        }
      },
      get: propertyGetter(void 0, key),
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(target, key, eventDescriptor);
    addPropertyCollection(target, key, "event");
  };
}
function NotifyPropertyChanges(classConstructor) {
}
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
  if (isUndefined(target.propList)) {
    target.propList = {
      props: [],
      complexProps: [],
      colProps: [],
      events: [],
      propNames: [],
      complexPropNames: [],
      colPropNames: [],
      eventNames: []
    };
  }
  target.propList[propertyType + "s"].push({
    propertyName: key,
    defaultValue,
    type
  });
  target.propList[propertyType + "Names"].push(key);
}
function getParentContext(context, prefix) {
  if (Object.prototype.hasOwnProperty.call(context, "parentObj") === false) {
    return {
      context,
      prefix
    };
  } else {
    var curText = getValue("propName", context);
    if (curText) {
      prefix = curText + "-" + prefix;
    }
    return getParentContext(getValue("parentObj", context), prefix);
  }
}

// node_modules/@syncfusion/ej2-base/src/animation.js
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Animation = (
  /** @class */
  function(_super) {
    __extends(Animation3, _super);
    function Animation3(options) {
      var _this = _super.call(this, options, void 0) || this;
      _this.easing = {
        ease: "cubic-bezier(0.250, 0.100, 0.250, 1.000)",
        linear: "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
        easeIn: "cubic-bezier(0.420, 0.000, 1.000, 1.000)",
        easeOut: "cubic-bezier(0.000, 0.000, 0.580, 1.000)",
        easeInOut: "cubic-bezier(0.420, 0.000, 0.580, 1.000)",
        elasticInOut: "cubic-bezier(0.5,-0.58,0.38,1.81)",
        elasticIn: "cubic-bezier(0.17,0.67,0.59,1.81)",
        elasticOut: "cubic-bezier(0.7,-0.75,0.99,1.01)"
      };
      return _this;
    }
    Animation_1 = Animation3;
    Animation3.prototype.animate = function(element2, options) {
      options = !options ? {} : options;
      var model = this.getModel(options);
      if (typeof element2 === "string") {
        var elements = Array.prototype.slice.call(selectAll(element2, document));
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
          var element_1 = elements_1[_i];
          model.element = element_1;
          Animation_1.delayAnimation(model);
        }
      } else {
        model.element = element2;
        Animation_1.delayAnimation(model);
      }
    };
    Animation3.stop = function(element2, model) {
      element2.style.animation = "";
      element2.removeAttribute("e-animate");
      var animationId = element2.getAttribute("e-animation-id");
      if (animationId) {
        var frameId = parseInt(animationId, 10);
        cancelAnimationFrame(frameId);
        element2.removeAttribute("e-animation-id");
      }
      if (model && model.end) {
        model.end.call(this, model);
      }
    };
    Animation3.delayAnimation = function(model) {
      if (animationMode === "Disable" || animationMode === GlobalAnimationMode.Disable) {
        if (model.begin) {
          model.begin.call(this, model);
        }
        if (model.end) {
          model.end.call(this, model);
        }
      } else {
        if (model.delay) {
          setTimeout(function() {
            Animation_1.applyAnimation(model);
          }, model.delay);
        } else {
          Animation_1.applyAnimation(model);
        }
      }
    };
    Animation3.applyAnimation = function(model) {
      var _this = this;
      model.timeStamp = 0;
      var step = 0;
      var timerId = 0;
      var prevTimeStamp = 0;
      var duration = model.duration;
      model.element.setAttribute("e-animate", "true");
      var startAnimation = function(timeStamp) {
        try {
          if (timeStamp) {
            prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
            model.timeStamp = timeStamp + model.timeStamp - prevTimeStamp;
            prevTimeStamp = timeStamp;
            if (!step && model.begin) {
              model.begin.call(_this, model);
            }
            step = step + 1;
            var avg = model.timeStamp / step;
            if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute("e-animate")) {
              model.element.style.animation = model.name + " " + model.duration + "ms " + model.timingFunction;
              if (model.progress) {
                model.progress.call(_this, model);
              }
              requestAnimationFrame(startAnimation);
            } else {
              cancelAnimationFrame(timerId);
              model.element.removeAttribute("e-animation-id");
              model.element.removeAttribute("e-animate");
              model.element.style.animation = "";
              if (model.end) {
                model.end.call(_this, model);
              }
            }
          } else {
            timerId = requestAnimationFrame(startAnimation);
            model.element.setAttribute("e-animation-id", timerId.toString());
          }
        } catch (e) {
          cancelAnimationFrame(timerId);
          model.element.removeAttribute("e-animation-id");
          if (model.fail) {
            model.fail.call(_this, e);
          }
        }
      };
      startAnimation();
    };
    Animation3.prototype.getModel = function(options) {
      return {
        name: options.name || this.name,
        delay: options.delay || this.delay,
        duration: options.duration !== void 0 ? options.duration : this.duration,
        begin: options.begin || this.begin,
        end: options.end || this.end,
        fail: options.fail || this.fail,
        progress: options.progress || this.progress,
        timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] : options.timingFunction || this.easing[this.timingFunction]
      };
    };
    Animation3.prototype.onPropertyChanged = function(newProp, oldProp) {
    };
    Animation3.prototype.getModuleName = function() {
      return "animation";
    };
    Animation3.prototype.destroy = function() {
    };
    var Animation_1;
    __decorate([Property("FadeIn")], Animation3.prototype, "name", void 0);
    __decorate([Property(400)], Animation3.prototype, "duration", void 0);
    __decorate([Property("ease")], Animation3.prototype, "timingFunction", void 0);
    __decorate([Property(0)], Animation3.prototype, "delay", void 0);
    __decorate([Event2()], Animation3.prototype, "progress", void 0);
    __decorate([Event2()], Animation3.prototype, "begin", void 0);
    __decorate([Event2()], Animation3.prototype, "end", void 0);
    __decorate([Event2()], Animation3.prototype, "fail", void 0);
    Animation3 = Animation_1 = __decorate([NotifyPropertyChanges], Animation3);
    return Animation3;
  }(Base)
);
function rippleEffect(element2, rippleOptions, done) {
  var rippleModel = getRippleModel(rippleOptions);
  if (rippleModel.rippleFlag === false || rippleModel.rippleFlag === void 0 && !isRippleEnabled) {
    return function() {
    };
  }
  element2.setAttribute("data-ripple", "true");
  EventHandler.add(element2, "mousedown", rippleHandler, {
    parent: element2,
    rippleOptions: rippleModel
  });
  EventHandler.add(element2, "mouseup", rippleUpHandler, {
    parent: element2,
    rippleOptions: rippleModel,
    done
  });
  EventHandler.add(element2, "mouseleave", rippleLeaveHandler, {
    parent: element2,
    rippleOptions: rippleModel
  });
  if (Browser.isPointer) {
    EventHandler.add(element2, "transitionend", rippleLeaveHandler, {
      parent: element2,
      rippleOptions: rippleModel
    });
  }
  return function() {
    element2.removeAttribute("data-ripple");
    EventHandler.remove(element2, "mousedown", rippleHandler);
    EventHandler.remove(element2, "mouseup", rippleUpHandler);
    EventHandler.remove(element2, "mouseleave", rippleLeaveHandler);
    EventHandler.remove(element2, "transitionend", rippleLeaveHandler);
  };
}
function getRippleModel(rippleOptions) {
  var rippleModel = {
    selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
    ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
    rippleFlag: rippleOptions && rippleOptions.rippleFlag,
    isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
    duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
  };
  return rippleModel;
}
function rippleHandler(e) {
  var target = e.target;
  var selector = this.rippleOptions.selector;
  var element2 = selector ? closest(target, selector) : target;
  if (!element2 || this.rippleOptions && closest(target, this.rippleOptions.ignore)) {
    return;
  }
  var offset = element2.getBoundingClientRect();
  var offsetX = e.pageX - document.body.scrollLeft;
  var offsetY = e.pageY - (!document.body.scrollTop && document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop);
  var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
  var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
  var radius = Math.sqrt(pageX * pageX + pageY * pageY);
  var diameter = radius * 2 + "px";
  var x = offsetX - offset.left - radius;
  var y = offsetY - offset.top - radius;
  if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
    x = 0;
    y = 0;
    diameter = "100%";
  }
  element2.classList.add("e-ripple");
  var duration = this.rippleOptions.duration.toString();
  var styles = "width: " + diameter + ";height: " + diameter + ";left: " + x + "px;top: " + y + "px;transition-duration: " + duration + "ms;";
  var rippleElement = createElement("div", {
    className: "e-ripple-element",
    styles
  });
  element2.appendChild(rippleElement);
  window.getComputedStyle(rippleElement).getPropertyValue("opacity");
  rippleElement.style.transform = "scale(1)";
  if (element2 !== this.parent) {
    EventHandler.add(element2, "mouseleave", rippleLeaveHandler, {
      parent: this.parent,
      rippleOptions: this.rippleOptions
    });
  }
}
function rippleUpHandler(e) {
  removeRipple(e, this);
}
function rippleLeaveHandler(e) {
  removeRipple(e, this);
}
function removeRipple(e, eventArgs) {
  var duration = eventArgs.rippleOptions.duration;
  var target = e.target;
  var selector = eventArgs.rippleOptions.selector;
  var element2 = selector ? closest(target, selector) : target;
  if (!element2 || element2 && element2.className.indexOf("e-ripple") === -1) {
    return;
  }
  var rippleElements = selectAll(".e-ripple-element", element2);
  var rippleElement = rippleElements[rippleElements.length - 1];
  if (rippleElement) {
    rippleElement.style.opacity = "0.5";
  }
  if (eventArgs.parent !== element2) {
    EventHandler.remove(element2, "mouseleave", rippleLeaveHandler);
  }
  setTimeout(function() {
    if (rippleElement && rippleElement.parentNode) {
      rippleElement.parentNode.removeChild(rippleElement);
    }
    if (!element2.getElementsByClassName("e-ripple-element").length) {
      element2.classList.remove("e-ripple");
    }
    if (eventArgs.done) {
      eventArgs.done(e);
    }
  }, duration);
}
var isRippleEnabled = false;
var animationMode;
var GlobalAnimationMode;
(function(GlobalAnimationMode2) {
  GlobalAnimationMode2["Default"] = "Default";
  GlobalAnimationMode2["Enable"] = "Enable";
  GlobalAnimationMode2["Disable"] = "Disable";
})(GlobalAnimationMode || (GlobalAnimationMode = {}));

// node_modules/@syncfusion/ej2-base/src/module-loader.js
var MODULE_SUFFIX = "Module";
var ModuleLoader = (
  /** @class */
  function() {
    function ModuleLoader2(parent) {
      this.loadedModules = [];
      this.parent = parent;
    }
    ModuleLoader2.prototype.inject = function(requiredModules, moduleList) {
      var reqLength = requiredModules.length;
      if (reqLength === 0) {
        this.clean();
        return;
      }
      if (this.loadedModules.length) {
        this.clearUnusedModule(requiredModules);
      }
      for (var i = 0; i < reqLength; i++) {
        var modl = requiredModules[parseInt(i.toString(), 10)];
        for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
          var module = moduleList_1[_i];
          var modName = modl.member;
          if (module && module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
            var moduleObject = createInstance(module, modl.args);
            var memberName = this.getMemberName(modName);
            if (modl.isProperty) {
              setValue(memberName, module, this.parent);
            } else {
              setValue(memberName, moduleObject, this.parent);
            }
            var loadedModule = modl;
            loadedModule.member = memberName;
            this.loadedModules.push(loadedModule);
          }
        }
      }
    };
    ModuleLoader2.prototype.clean = function() {
      for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
        var modules = _a[_i];
        if (!modules.isProperty) {
          getValue(modules.member, this.parent).destroy();
        }
      }
      this.loadedModules = [];
    };
    ModuleLoader2.prototype.getNonInjectedModules = function(requiredModules) {
      var _this = this;
      return requiredModules.filter(function(module) {
        return !_this.isModuleLoaded(module.member);
      });
    };
    ModuleLoader2.prototype.clearUnusedModule = function(moduleList) {
      var _this = this;
      var usedModules = moduleList.map(function(arg) {
        return _this.getMemberName(arg.member);
      });
      var removableModule = this.loadedModules.filter(function(module) {
        return usedModules.indexOf(module.member) === -1;
      });
      for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
        var mod = removableModule_1[_i];
        if (!mod.isProperty) {
          getValue(mod.member, this.parent).destroy();
        }
        this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
        deleteObject(this.parent, mod.member);
      }
    };
    ModuleLoader2.prototype.getMemberName = function(name) {
      return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    ModuleLoader2.prototype.isModuleLoaded = function(modName) {
      for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
        var mod = _a[_i];
        if (mod.member === this.getMemberName(modName)) {
          return true;
        }
      }
      return false;
    };
    return ModuleLoader2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/child-property.js
var ChildProperty = (
  /** @class */
  function() {
    function ChildProperty2(parent, propName, defaultValue, isArray) {
      this.isComplexArraySetter = false;
      this.properties = {};
      this.changedProperties = {};
      this.childChangedProperties = {};
      this.oldProperties = {};
      this.finalUpdate = function() {
      };
      this.callChildDataBind = getValue("callChildDataBind", Base);
      this.parentObj = parent;
      this.controlParent = this.parentObj.controlParent || this.parentObj;
      this.propName = propName;
      this.isParentArray = isArray;
      this.setProperties(defaultValue, true);
    }
    ChildProperty2.prototype.updateChange = function(val, propName) {
      if (val === true) {
        this.parentObj.childChangedProperties["" + propName] = val;
      } else {
        delete this.parentObj.childChangedProperties["" + propName];
      }
      if (this.parentObj.updateChange) {
        this.parentObj.updateChange(val, this.parentObj.propName);
      }
    };
    ChildProperty2.prototype.updateTimeOut = function() {
      if (this.parentObj.updateTimeOut) {
        this.parentObj.finalUpdate();
        this.parentObj.updateTimeOut();
      } else {
        var changeTime_1 = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
        var clearUpdate = function() {
          clearTimeout(changeTime_1);
        };
        this.finalUpdate = clearUpdate;
      }
    };
    ChildProperty2.prototype.clearChanges = function() {
      this.finalUpdate();
      this.updateChange(false, this.propName);
      this.oldProperties = {};
      this.changedProperties = {};
    };
    ChildProperty2.prototype.setProperties = function(prop, muteOnChange) {
      if (muteOnChange === true) {
        merge(this, prop);
        this.updateChange(false, this.propName);
        this.clearChanges();
      } else {
        merge(this, prop);
      }
    };
    ChildProperty2.prototype.dataBind = function() {
      this.callChildDataBind(this.childChangedProperties, this);
      if (this.isParentArray) {
        var curIndex = this.parentObj[this.propName].indexOf(this);
        if (Object.keys(this.changedProperties).length) {
          setValue(this.propName + "." + curIndex, this.changedProperties, this.parentObj.changedProperties);
          setValue(this.propName + "." + curIndex, this.oldProperties, this.parentObj.oldProperties);
        }
      } else {
        this.parentObj.changedProperties[this.propName] = this.changedProperties;
        this.parentObj.oldProperties[this.propName] = this.oldProperties;
      }
      this.clearChanges();
    };
    ChildProperty2.prototype.saveChanges = function(key, newValue, oldValue, restrictServerDataBind) {
      if (this.controlParent.isProtectedOnChange) {
        return;
      }
      if (!restrictServerDataBind) {
        this.serverDataBind(key, newValue, true);
      }
      this.oldProperties["" + key] = oldValue;
      this.changedProperties["" + key] = newValue;
      this.updateChange(true, this.propName);
      this.finalUpdate();
      this.updateTimeOut();
    };
    ChildProperty2.prototype.serverDataBind = function(key, value, isSaveChanges, action) {
      if (isBlazor() && !this.parentObj.isComplexArraySetter) {
        var parent_1;
        var newChanges = {};
        var parentKey = isSaveChanges ? this.getParentKey(true) + "." + key : key;
        if (parentKey.indexOf(".") !== -1) {
          var complexKeys = parentKey.split(".");
          parent_1 = newChanges;
          for (var i = 0; i < complexKeys.length; i++) {
            var isFinal = i === complexKeys.length - 1;
            parent_1[complexKeys[parseInt(i.toString(), 10)]] = isFinal ? value : {};
            parent_1 = isFinal ? parent_1 : parent_1[complexKeys[parseInt(i.toString(), 10)]];
          }
        } else {
          newChanges["" + parentKey] = {};
          parent_1 = newChanges["" + parentKey];
          newChanges["" + parentKey]["" + key] = value;
        }
        if (this.isParentArray) {
          var actionProperty = "ejsAction";
          parent_1["" + actionProperty] = action ? action : "none";
        }
        this.controlParent.serverDataBind(newChanges);
      }
    };
    ChildProperty2.prototype.getParentKey = function(isSaveChanges) {
      var index = "";
      var propName = this.propName;
      if (this.isParentArray) {
        index = this.parentObj[this.propName].indexOf(this);
        var valueLength = this.parentObj[this.propName].length;
        valueLength = isSaveChanges ? valueLength : valueLength > 0 ? valueLength - 1 : 0;
        index = index !== -1 ? "-" + index : "-" + valueLength;
        propName = propName + index;
      }
      if (this.controlParent !== this.parentObj) {
        propName = this.parentObj.getParentKey() + "." + this.propName + index;
      }
      return propName;
    };
    return ChildProperty2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/validate-lic.js
var componentList = ["grid", "pivotview", "treegrid", "spreadsheet", "rangeNavigator", "DocumentEditor", "listbox", "inplaceeditor", "PdfViewer", "richtexteditor", "DashboardLayout", "chart", "stockChart", "circulargauge", "diagram", "heatmap", "lineargauge", "maps", "slider", "smithchart", "barcode", "sparkline", "treemap", "bulletChart", "kanban", "daterangepicker", "schedule", "gantt", "signature", "query-builder", "drop-down-tree", "carousel", "filemanager", "uploader", "accordion", "tab", "treeview"];
var bypassKey = [115, 121, 110, 99, 102, 117, 115, 105, 111, 110, 46, 105, 115, 76, 105, 99, 86, 97, 108, 105, 100, 97, 116, 101, 100];
var accountURL;
var LicenseValidator = (
  /** @class */
  function() {
    function LicenseValidator2(key) {
      this.isValidated = false;
      this.isLicensed = true;
      this.version = "26";
      this.platform = /JavaScript|ASPNET|ASPNETCORE|ASPNETMVC|FileFormats|essentialstudio/i;
      this.errors = {
        noLicense: "<span>This application was built using a trial version of Syncfusion Essential Studio. To remove the license validation message permanently, a valid license key must be included.</span>",
        trailExpired: "<span>This application was built using a trial version of Syncfusion Essential Studio. To remove the license validation message permanently, a valid license key must be included.</span>",
        versionMismatched: "<span>The included Syncfusion license key is invalid.</span>",
        platformMismatched: "<span>The included Syncfusion license key is invalid.</span>",
        invalidKey: "<span>The included Syncfusion license key is invalid.</span>"
      };
      this.manager = /* @__PURE__ */ function() {
        var licKey = null;
        function set(key2) {
          licKey = key2;
        }
        function get() {
          return licKey;
        }
        return {
          setKey: set,
          getKey: get
        };
      }();
      this.npxManager = /* @__PURE__ */ function() {
        var npxLicKey = "npxKeyReplace";
        function get() {
          return npxLicKey;
        }
        return {
          getKey: get
        };
      }();
      this.manager.setKey(key);
    }
    LicenseValidator2.prototype.validate = function() {
      var contentKey = [115, 121, 110, 99, 102, 117, 115, 105, 111, 110, 46, 108, 105, 99, 101, 110, 115, 101, 67, 111, 110, 116, 101, 110, 116];
      var URLKey = [115, 121, 110, 99, 102, 117, 115, 105, 111, 110, 46, 99, 108, 97, 105, 109, 65, 99, 99, 111, 117, 110, 116, 85, 82, 76];
      if (!this.isValidated && containerObject && !getValue(convertToChar(bypassKey), containerObject) && !getValue("Blazor", containerObject)) {
        var validateMsg = void 0;
        var validateURL = void 0;
        if (this.manager && this.manager.getKey() || this.npxManager && this.npxManager.getKey() !== "npxKeyReplace") {
          var result = this.getInfoFromKey();
          if (result && result.length) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
              var res = result_1[_i];
              if (!this.platform.test(res.platform) || res.invalidPlatform) {
                validateMsg = this.errors.platformMismatched;
              } else if (res.version.indexOf(this.version) === -1) {
                validateMsg = this.errors.versionMismatched;
                validateMsg = validateMsg.replace("##LicenseVersion", res.version);
                validateMsg = validateMsg.replace("##Requireversion", this.version + ".x");
              } else if (res.expiryDate) {
                var expDate = new Date(res.expiryDate);
                var currDate = /* @__PURE__ */ new Date();
                if (expDate !== currDate && expDate < currDate) {
                  validateMsg = this.errors.trailExpired;
                } else {
                  break;
                }
              }
            }
          } else {
            validateMsg = this.errors.invalidKey;
          }
        } else {
          var licenseContent = getValue(convertToChar(contentKey), containerObject);
          validateURL = getValue(convertToChar(URLKey), containerObject);
          if (licenseContent && licenseContent !== "") {
            validateMsg = licenseContent;
          } else {
            validateMsg = this.errors.noLicense;
          }
        }
        if (validateMsg && typeof document !== "undefined" && !isNullOrUndefined(document)) {
          accountURL = validateURL && validateURL !== "" ? validateURL : "https://www.syncfusion.com/account/claim-license-key?pl=SmF2YVNjcmlwdA==&vs=MjY=&utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information";
          var errorDiv = createElement("div", {
            innerHTML: `<img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5OV80KSI+CjxwYXRoIGQ9Ik0xMiAyMUMxNi45NzA2IDIxIDIxIDE2Ljk3MDYgMjEgMTJDMjEgNy4wMjk0NCAxNi45NzA2IDMgMTIgM0M3LjAyOTQ0IDMgMyA3LjAyOTQ0IDMgMTJDMyAxNi45NzA2IDcuMDI5NDQgMjEgMTIgMjFaIiBzdHJva2U9IiM3MzczNzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS4yNSAxMS4yNUgxMlYxNi41SDEyLjc1IiBmaWxsPSIjNjE2MDYzIi8+CjxwYXRoIGQ9Ik0xMS4yNSAxMS4yNUgxMlYxNi41SDEyLjc1IiBzdHJva2U9IiM3MzczNzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS44MTI1IDlDMTIuNDMzOCA5IDEyLjkzNzUgOC40OTYzMiAxMi45Mzc1IDcuODc1QzEyLjkzNzUgNy4yNTM2OCAxMi40MzM4IDYuNzUgMTEuODEyNSA2Ljc1QzExLjE5MTIgNi43NSAxMC42ODc1IDcuMjUzNjggMTAuNjg3NSA3Ljg3NUMxMC42ODc1IDguNDk2MzIgMTEuMTkxMiA5IDExLjgxMjUgOVoiIGZpbGw9IiM3MzczNzMiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xOTlfNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K' style="top: 6px;
                    position: absolute;
                    left: 16px;
                    width: 24px;
                    height: 24px;"/>` + validateMsg + ' <a style="text-decoration: none;color: #0D6EFD;font-weight: 500;" href=' + accountURL + ">Claim your free account</a>"
          });
          errorDiv.setAttribute("style", "position: fixed;\n                top: 10px;\n                left: 10px;\n                right: 10px;\n                font-size: 14px;\n                background: #EEF2FF;\n                color: #222222;\n                z-index: 999999999;\n                text-align: left;\n                border: 1px solid #EEEEEE;\n                padding: 10px 11px 10px 50px;\n                border-radius: 8px;\n                font-family: Helvetica Neue, Helvetica, Arial;");
          document.body.appendChild(errorDiv);
          this.isLicensed = false;
        }
        this.isValidated = true;
        setValue(convertToChar(bypassKey), this.isValidated, containerObject);
      }
      return this.isLicensed;
    };
    LicenseValidator2.prototype.getDecryptedData = function(key) {
      try {
        return atob(key);
      } catch (error) {
        return "";
      }
    };
    LicenseValidator2.prototype.getInfoFromKey = function() {
      try {
        var licKey = "";
        var pkey = [5439488, 7929856, 5111808, 6488064, 4587520, 7667712, 5439488, 6881280, 5177344, 7208960, 4194304, 4456448, 6619136, 7733248, 5242880, 7077888, 6356992, 7602176, 4587520, 7274496, 7471104, 7143424];
        var decryptedStr = [];
        var resultArray = [];
        var invalidPlatform = false;
        var isNpxKey = false;
        if (this.manager.getKey()) {
          licKey = this.manager.getKey();
        } else {
          isNpxKey = true;
          licKey = this.npxManager.getKey().split("npxKeyReplace")[1];
        }
        var licKeySplit = licKey.split(";");
        for (var _i = 0, licKeySplit_1 = licKeySplit; _i < licKeySplit_1.length; _i++) {
          var lKey = licKeySplit_1[_i];
          var decodeStr = this.getDecryptedData(lKey);
          if (!decodeStr) {
            continue;
          }
          var k = 0;
          var buffr = "";
          if (!isNpxKey) {
            for (var i = 0; i < decodeStr.length; i++, k++) {
              if (k === pkey.length) {
                k = 0;
              }
              var c = decodeStr.charCodeAt(i);
              buffr += String.fromCharCode(c ^ pkey[parseInt(k.toString(), 10)] >> 16);
            }
          } else {
            var charKey = decodeStr[decodeStr.length - 1];
            var decryptedKey = [];
            for (var i = 0; i < decodeStr.length; i++) {
              decryptedKey[parseInt(i.toString(), 10)] = decodeStr[parseInt(i.toString(), 10)].charCodeAt(0) - charKey.charCodeAt(0);
            }
            for (var i = 0; i < decryptedKey.length; i++) {
              buffr += String.fromCharCode(decryptedKey[parseInt(i.toString(), 10)]);
            }
          }
          if (this.platform.test(buffr)) {
            decryptedStr = buffr.split(";");
            invalidPlatform = false;
            if (decryptedStr.length > 3) {
              resultArray.push({
                platform: decryptedStr[0],
                version: decryptedStr[1],
                expiryDate: decryptedStr[2]
              });
            }
          } else if (buffr && buffr.split(";").length > 3) {
            invalidPlatform = true;
          }
        }
        if (invalidPlatform && !resultArray.length) {
          return [{
            invalidPlatform
          }];
        } else {
          return resultArray.length ? resultArray : null;
        }
      } catch (error) {
        return null;
      }
    };
    return LicenseValidator2;
  }()
);
var licenseValidator = new LicenseValidator();
function convertToChar(cArr) {
  var ret = "";
  for (var _i = 0, cArr_1 = cArr; _i < cArr_1.length; _i++) {
    var arr = cArr_1[_i];
    ret += String.fromCharCode(arr);
  }
  return ret;
}
function registerLicense(key) {
  licenseValidator = new LicenseValidator(key);
}
var validateLicense = function(key) {
  if (key) {
    registerLicense(key);
  }
  return licenseValidator.validate();
};
var createLicenseOverlay = function() {
  var bannerTemplate = '\n    <div style="\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 99999;\n    ">\n        <div style="\n    background: #FFFFFF;\n    height: 455px;\n    width: 840px;\n    font-family: Helvetica Neue, Helvetica, Arial;\n    color: #000000;\n    box-shadow: 0px 4.8px 14.4px rgb(0 0 0 / 18%), 0px 25.6px 57.6px rgb(0 0 0 / 22%);\n    display: block;\n    margin: 8% auto;\n    border-radius: 20px;\n    ">\n            <div style="\n    position: absolute;\nwidth: 838px;\nheight: 62px;\nbackground-color: #F9F9F9;\nborder: 1px solid #EEEEEE;\nborder-top-left-radius: 20px;\nborder-top-right-radius: 20px;\n">\n                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTQ2IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDAuNTk2NSAxNS4wMDc4SDMyLjQyNUMzMS41NTU3IDE1LjAwNzggMzAuOTAzNyAxNS4xODEyIDMwLjUxMjUgMTUuNDg0NkMzMC4xMjEzIDE1LjgzMTQgMjkuOTA0IDE2LjMwODIgMjkuOTA0IDE3LjA0NTFDMjkuOTA0IDE3LjYwODYgMzAuMDc3OCAxOC4wNDIxIDMwLjQyNTYgMTguMzAyMkMzMC43NzMzIDE4LjYwNTYgMzEuMjk0OSAxOC43MzU2IDMxLjk5MDMgMTguNzM1NkgzNi4zMzY5QzM4LjExODkgMTguNzM1NiAzOS40MjI5IDE5LjA4MjQgNDAuMTYxOCAxOS43MzI2QzQwLjk0NDIgMjAuNDI2MiA0MS4yOTE5IDIxLjU1MzIgNDEuMjkxOSAyMy4xMTM3QzQxLjI5MTkgMjQuNzE3NiA0MC44NTcyIDI1Ljg4OCAzOS45ODc5IDI2LjY2ODJDMzkuMTE4NiAyNy40MDUxIDM3LjcyNzcgMjcuNzk1MyAzNS44NTg3IDI3Ljc5NTNIMjcuMDc4N1YyNS4wMjFIMzUuMzM3MkMzNi4yOTM0IDI1LjAyMSAzNi45NDU0IDI0Ljg5MSAzNy4zMzY2IDI0LjYzMDlDMzcuNzI3NyAyNC4zNzA4IDM3LjkwMTYgMjMuODk0IDM3LjkwMTYgMjMuMjg3MUMzNy45MDE2IDIyLjYzNjkgMzcuNzI3NyAyMi4xNjAxIDM3LjM4IDIxLjlDMzcuMDMyMyAyMS42Mzk5IDM2LjQyMzggMjEuNDY2NSAzNS41NTQ1IDIxLjQ2NjVIMzEuNjQyNkMyOS44NjA1IDIxLjQ2NjUgMjguNTEzMSAyMS4xMTk4IDI3LjY4NzMgMjAuMzgyOEMyNi44NjE0IDE5LjY0NTkgMjYuNDI2OCAxOC41MTg5IDI2LjQyNjggMTcuMDAxN0MyNi40MjY4IDE1LjM1NDUgMjYuODYxNCAxNC4xNDA4IDI3LjczMDcgMTMuMzYwNkMyOC42IDEyLjU4MDMgMjkuOTkwOSAxMi4yMzM1IDMxLjkwMzQgMTIuMjMzNUg0MC41OTY1VjE1LjAwNzhaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik00OC4wNzI3IDI1LjI4MTFINTAuNTA2OFYxNi4zOTQ5SDUzLjU0OTNWMjcuNTM1MkM1My41NDkzIDI5LjA1MjQgNTMuMjAxNiAzMC4xNzk0IDUyLjUwNjIgMzAuOTE2M0M1MS44MTA3IDMxLjY1MzIgNTAuNzI0MSAzMiA0OS4yNDYzIDMySDQzLjMzNVYyOS42NTkySDQ4LjcyNDdDNDkuMjg5NyAyOS42NTkyIDQ5Ljc2NzkgMjkuNTI5MiA1MC4wNzIxIDI5LjIyNThDNTAuMzc2NCAyOC45NjU3IDUwLjU1MDIgMjguNTMyMiA1MC41NTAyIDI4LjAxMlYyNy44Mzg2SDQ3Ljg5ODlDNDYuMjAzNyAyNy44Mzg2IDQ0Ljk0MzIgMjcuNDkxOSA0NC4yNDc4IDI2Ljg0MTZDNDMuNTA4OSAyNi4xNDgxIDQzLjE2MTEgMjUuMDY0NCA0My4xNjExIDIzLjQ2MDVWMTYuMzk0OUg0Ni4xNjAyVjIzLjIwMDVDNDYuMTYwMiAyNC4wNjc0IDQ2LjI5MDYgMjQuNjMwOSA0Ni41NTE0IDI0Ljg5MUM0Ni43MjUzIDI1LjE1MTEgNDcuMjQ2OSAyNS4yODExIDQ4LjA3MjcgMjUuMjgxMVoiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTU1Ljg5NjUgMTYuMzk0OUg2MS41OTA0QzYzLjMyOTEgMTYuMzk0OSA2NC41NDYxIDE2LjY5ODMgNjUuMjg1IDE3LjM0ODVDNjYuMDIzOSAxNy45OTg4IDY2LjM3MTYgMTkuMDgyNCA2Ni4zNzE2IDIwLjU1NjNWMjcuNzk1M0g2My4zMjkxVjIwLjk0NjRDNjMuMzI5MSAyMC4wNzk0IDYzLjE5ODcgMTkuNTE1OSA2Mi45Mzc5IDE5LjI5OTJDNjIuNjc3MSAxOS4wMzkxIDYyLjE1NTUgMTguOTA5MSA2MS4zMjk3IDE4LjkwOTFINTguODk1NlYyNy44Mzg2SDU1Ljg1M1YxNi4zOTQ5SDU1Ljg5NjVaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik03NC45MzQyIDI1LjM2NzhINzguMTUwNlYyNy43OTUySDc0LjAyMTRDNzIuOTc4MiAyNy43OTUyIDcyLjEwODkgMjcuNjY1MiA3MS40NTcgMjcuNDkxOEM3MC44MDUgMjcuMjc1IDcwLjE5NjUgMjYuOTI4MyA2OS43MTgzIDI2LjQ1MTRDNjkuMTk2OCAyNS45MzEzIDY4Ljc2MjEgMjUuMjgxMSA2OC40NTc4IDI0LjU0NDJDNjguMTUzNiAyMy44MDcyIDY4LjAyMzIgMjIuOTgzNiA2OC4wMjMyIDIyLjE2QzY4LjAyMzIgMjEuMjkzMSA2OC4xNTM2IDIwLjQ2OTUgNjguNDU3OCAxOS42ODkyQzY4Ljc2MjEgMTguOTA5IDY5LjE1MzMgMTguMzAyMSA2OS43MTgzIDE3Ljc4MTlDNzAuMjM5OSAxNy4zMDUxIDcwLjgwNSAxNi45NTgzIDcxLjUwMDQgMTYuNzQxNkM3Mi4xOTU5IDE2LjUyNDkgNzMuMDIxNyAxNi40MzgyIDc0LjA2NDkgMTYuNDM4Mkg3OC4xOTQxVjE4LjkwOUg3NC45MzQyQzczLjQ5OTggMTguOTA5IDcyLjU0MzYgMTkuMTY5MSA3MS45Nzg1IDE5LjY0NTlDNzEuNDU2OSAyMC4xMjI3IDcxLjE1MjcgMjAuOTg5NyA3MS4xNTI3IDIyLjIwMzRDNzEuMTUyNyAyMi44OTY5IDcxLjI4MzEgMjMuNDYwNSA3MS41MDA0IDIzLjkzNzNDNzEuNzE3NyAyNC40MTQxIDcyLjA2NTUgMjQuNzYwOSA3Mi41MDAxIDI1LjA2NDNDNzIuNzE3NCAyNS4xOTQ0IDcyLjk3ODIgMjUuMjgxMSA3My4yODI1IDI1LjM2NzhDNzMuNjMwMiAyNS4zMjQ0IDc0LjE1MTggMjUuMzY3OCA3NC45MzQyIDI1LjM2NzhaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik04MC44NDU2IDE4LjY0ODlINzguNjcyNFYxNi4zNTE1SDgwLjg0NTZWMTUuMTgxMUM4MC44NDU2IDE0LjAxMDggODEuMDYzIDEzLjIzMDUgODEuNDk3NiAxMi44NDA0QzgxLjkzMjMgMTIuNDUwMyA4Mi43NTgxIDEyLjIzMzUgODMuOTc1MSAxMi4yMzM1SDg2Ljg0MzhWMTQuNDAwOUg4NS40MDk1Qzg0Ljg4NzkgMTQuNDAwOSA4NC41NDAyIDE0LjQ4NzYgODQuMzIyOSAxNC42NjFDODQuMTA1NSAxNC44MzQ0IDgzLjk3NTEgMTUuMDk0NSA4My45NzUxIDE1LjQ0MTJWMTYuMzUxNUg4Ni44NDM4VjE4LjY0ODlIODMuOTc1MVYyNy43OTUzSDgwLjg0NTZWMTguNjQ4OVoiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTk4LjQwNTYgMjcuNzk1M0g5Mi43MTE2QzkxLjAxNjUgMjcuNzk1MyA4OS44NDI5IDI3LjQ0ODUgODkuMDYwNSAyNi43OTgzQzg4LjMyMTYgMjYuMTQ4MSA4Ny45MzA0IDI1LjA2NDQgODcuOTMwNCAyMy41OTA2VjE2LjM5NDlIOTAuOTI5NVYyMy40MTcyQzkwLjkyOTUgMjQuMTk3NCA5MS4wNTk5IDI0LjY3NDMgOTEuMzIwNyAyNC45MzQ0QzkxLjU4MTUgMjUuMTk0NCA5Mi4xMDMxIDI1LjMyNDUgOTIuOTI4OSAyNS4zMjQ1SDk1LjM2M1YxNi4zOTQ5SDk4LjQwNTZWMjcuNzk1M1oiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTEwMC42MjIgMjUuNDExMkgxMDcuMDExQzEwNy41NzcgMjUuNDExMiAxMDguMDExIDI1LjMyNDUgMTA4LjI3MiAyNS4xNTExQzEwOC41MzMgMjQuOTc3NyAxMDguNjYzIDI0LjY3NDMgMTA4LjY2MyAyNC4zMjc1QzEwOC42NjMgMjMuOTM3NCAxMDguNTMzIDIzLjY3NzMgMTA4LjI3MiAyMy40NjA1QzEwOC4wMTEgMjMuMjg3MSAxMDcuNTc3IDIzLjIwMDUgMTA3LjA1NSAyMy4yMDA1SDEwNC40NDdDMTAyLjg4MiAyMy4yMDA1IDEwMS44MzkgMjIuOTgzNyAxMDEuMzE4IDIyLjUwNjlDMTAwLjc1MiAyMi4wMzAxIDEwMC40OTIgMjEuMjA2NSAxMDAuNDkyIDE5Ljk5MjdDMTAwLjQ5MiAxOC43NzkgMTAwLjgzOSAxNy44Njg3IDEwMS40OTEgMTcuMjYxOEMxMDIuMTQzIDE2LjY5ODMgMTAzLjE4NyAxNi4zOTQ5IDEwNC41MzQgMTYuMzk0OUgxMTEuMDU0VjE4Ljc3OUgxMDUuNzA4QzEwNC44MzggMTguNzc5IDEwNC4yNzMgMTguODY1NyAxMDQuMDEyIDE4Ljk5NTdDMTAzLjc1MiAxOS4xNjkxIDEwMy42MjEgMTkuNDI5MiAxMDMuNjIxIDE5LjgxOTRDMTAzLjYyMSAyMC4xNjYxIDEwMy43NTIgMjAuNDI2MiAxMDMuOTY5IDIwLjU5OTZDMTA0LjE4NiAyMC43NzMgMTA0LjU3NyAyMC44NTk3IDEwNS4wNTYgMjAuODU5N0gxMDcuNzk0QzEwOS4wNTQgMjAuODU5NyAxMTAuMDExIDIxLjE2MzEgMTEwLjY2MyAyMS43MjY2QzExMS4zMTUgMjIuMjkwMiAxMTEuNjYyIDIzLjE1NzEgMTExLjY2MiAyNC4yNDA4QzExMS42NjIgMjUuMjgxMSAxMTEuMzU4IDI2LjE0ODEgMTEwLjc5MyAyNi43OTgzQzExMC4yMjggMjcuNDQ4NSAxMDkuNDQ2IDI3Ljc5NTMgMTA4LjUzMyAyNy43OTUzSDEwMC43MDlWMjUuNDExMkgxMDAuNjIyWiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMTE2LjU3NCAxNS4wOTQ0SDExMy40MDFWMTIuMjc2OUgxMTYuNTc0VjE1LjA5NDRaTTExNi41NzQgMjcuNzk1M0gxMTMuNDAxVjE2LjM5NDlIMTE2LjU3NFYyNy43OTUzWiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMTMwLjMwOSAyMi4xMTY3QzEzMC4zMDkgMjMuODkzOSAxMjkuNzQ0IDI1LjMyNDQgMTI4LjY1NyAyNi40MDgxQzEyNy41NzEgMjcuNDkxOCAxMjYuMDkzIDI4LjAxMiAxMjQuMjI0IDI4LjAxMkMxMjIuMzU1IDI4LjAxMiAxMjAuODc3IDI3LjQ5MTggMTE5Ljc5IDI2LjQwODFDMTE4LjcwNCAyNS4zMjQ0IDExOC4xMzkgMjMuODkzOSAxMTguMTM5IDIyLjExNjdDMTE4LjEzOSAyMC4zMzk0IDExOC43MDQgMTguOTA5IDExOS43OSAxNy44MjUzQzEyMC44NzcgMTYuNzQxNiAxMjIuMzk4IDE2LjIyMTQgMTI0LjIyNCAxNi4yMjE0QzEyNi4wNDkgMTYuMjIxNCAxMjcuNTI3IDE2Ljc0MTYgMTI4LjY1NyAxNy44MjUzQzEyOS43NDQgMTguODY1NiAxMzAuMzA5IDIwLjI5NjEgMTMwLjMwOSAyMi4xMTY3Wk0xMjEuMjY4IDIyLjExNjdDMTIxLjI2OCAyMy4yMDA0IDEyMS41MjkgMjQuMDY3MyAxMjIuMDUxIDI0LjY3NDJDMTIyLjU3MiAyNS4yODExIDEyMy4yNjggMjUuNTg0NSAxMjQuMTggMjUuNTg0NUMxMjUuMDkzIDI1LjU4NDUgMTI1Ljc4OSAyNS4yODExIDEyNi4zMSAyNC42NzQyQzEyNi44MzIgMjQuMDY3MyAxMjcuMDkzIDIzLjIwMDQgMTI3LjA5MyAyMi4xMTY3QzEyNy4wOTMgMjEuMDMzIDEyNi44MzIgMjAuMTY2MSAxMjYuMzEgMTkuNjAyNUMxMjUuNzg5IDE4Ljk5NTcgMTI1LjA5MyAxOC42OTIyIDEyNC4xMzcgMTguNjkyMkMxMjMuMjI0IDE4LjY5MjIgMTIyLjUyOSAxOC45OTU3IDEyMi4wMDcgMTkuNjAyNUMxMjEuNTI5IDIwLjE2NjEgMTIxLjI2OCAyMS4wMzMgMTIxLjI2OCAyMi4xMTY3WiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMTMxLjc4NyAxNi4zOTQ5SDEzNy40ODFDMTM5LjIxOSAxNi4zOTQ5IDE0MC40MzYgMTYuNjk4MyAxNDEuMTc1IDE3LjM0ODVDMTQxLjkxNCAxNy45OTg4IDE0Mi4yNjIgMTkuMDgyNCAxNDIuMjYyIDIwLjU1NjNWMjcuNzk1M0gxMzkuMjE5VjIwLjk0NjRDMTM5LjIxOSAyMC4wNzk0IDEzOS4wODkgMTkuNTE1OSAxMzguODI4IDE5LjI5OTJDMTM4LjU2NyAxOS4wMzkxIDEzOC4wNDYgMTguOTA5MSAxMzcuMjIgMTguOTA5MUgxMzQuNzg2VjI3LjgzODZIMTMxLjc0M1YxNi4zOTQ5SDEzMS43ODdaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik03LjEyODMxIDMuNzM3NDNIMFYxMC44NDY0SDcuMTI4MzFWMy43Mzc0M1oiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTIzLjI1MTMgLTIuMTU3MjVlLTA1TDE4LjU1MTMgNS41MTY4NUwyNC4wODMxIDEwLjIwNDFMMjguNzgzMSA0LjY4NzI1TDIzLjI1MTMgLTIuMTU3MjVlLTA1WiIgZmlsbD0iI0ZGODYwMCIvPgo8cGF0aCBkPSJNMTUuNjA0MSAzLjczNzQzSDguNDc1ODNWMTAuODQ2NEgxNS42MDQxVjMuNzM3NDNaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik03LjEyODMxIDEyLjE5MDJIMFYxOS4yOTkySDcuMTI4MzFWMTIuMTkwMloiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTE1LjYwNDEgMTIuMTkwMkg4LjQ3NTgzVjE5LjI5OTJIMTUuNjA0MVYxMi4xOTAyWiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMjQuMDc5NyAxMi4xOTAySDE2Ljk1MTRWMTkuMjk5MkgyNC4wNzk3VjEyLjE5MDJaIiBmaWxsPSIjRkY4NjAwIi8+CjxwYXRoIGQ9Ik03LjEyODMxIDIwLjY4NjNIMFYyNy43OTUzSDcuMTI4MzFWMjAuNjg2M1oiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTE1LjYwNDEgMjAuNjg2M0g4LjQ3NTgzVjI3Ljc5NTNIMTUuNjA0MVYyMC42ODYzWiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMjQuMTIzMiAyMC42ODYzSDE2Ljk5NDlWMjcuNzk1M0gyNC4xMjMyVjIwLjY4NjNaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik0xNDYgMTUuODMxM0MxNDYgMTYuODcxNyAxNDUuMTc0IDE3LjY5NTMgMTQ0LjEzMSAxNy42OTUzQzE0My4wODggMTcuNjk1MyAxNDIuMjYyIDE2Ljg3MTcgMTQyLjI2MiAxNS44MzEzQzE0Mi4yNjIgMTQuNzkxIDE0My4wODggMTQuMDEwNyAxNDQuMTMxIDE0LjAxMDdDMTQ1LjEzMSAxMy45Njc0IDE0NiAxNC43OTEgMTQ2IDE1LjgzMTNaTTE0Mi45NTcgMTQuNzkxQzE0Mi42OTcgMTUuMDUxMSAxNDIuNTY2IDE1LjQ0MTIgMTQyLjU2NiAxNS44MzEzQzE0Mi41NjYgMTYuNjk4MyAxNDMuMjYyIDE3LjM5MTggMTQ0LjEzMSAxNy4zOTE4QzE0NSAxNy4zOTE4IDE0NS42OTYgMTYuNjk4MyAxNDUuNjk2IDE1LjgzMTNDMTQ1LjY5NiAxNS4wMDc3IDE0NSAxNC4yNzA4IDE0NC4xNzQgMTQuMjcwOEMxNDMuNjUzIDE0LjI3MDggMTQzLjI2MiAxNC40NDQyIDE0Mi45NTcgMTQuNzkxWk0xNDQuODcgMTYuOTE1SDE0NC40NzlMMTQzLjkxNCAxNi4wOTE0VjE2LjkxNUgxNDMuNjA5VjE0Ljc0NzZIMTQzLjk1N0MxNDQuNDM1IDE0Ljc0NzYgMTQ0LjY1MyAxNC45NjQ0IDE0NC42NTMgMTUuMzU0NUMxNDQuNjUzIDE1LjY1NzkgMTQ0LjQ3OSAxNS44NzQ3IDE0NC4xNzQgMTUuOTYxNEwxNDQuODcgMTYuOTE1Wk0xNDQuMDQ0IDE1LjY1NzlDMTQ0LjI2MSAxNS42NTc5IDE0NC4zOTIgMTUuNTI3OSAxNDQuMzkyIDE1LjM1NDVDMTQ0LjM5MiAxNS4xMzc4IDE0NC4yNjEgMTUuMDUxMSAxNDQuMDAxIDE1LjA1MTFIMTQzLjkxNFYxNS42NTc5SDE0NC4wNDRaIiBmaWxsPSIjMzU0M0E4Ii8+Cjwvc3ZnPgo=" style="\n    text-align: left;\n    width: 146px;\n    position: absolute;\n    top: 14px;\n    left: 31px;\n">\n            </div>\n            <div style="\n    position: relative;\n    top: 80px;\n    left: 32px;\n    font-size: 20px;\n    text-align: left;\n    font-weight: 700;\n    letter-spacing: 0.02em;\n    font-style: normal;\n    line-height: 125%;\n    ">Claim your FREE account and get a key in less than a minute</div>\n            <ul style="\n        font-size: 15px;\n        font-weight: 400;\n        color: #333333;\n        letter-spacing: 0.01em;\n        position: relative;\n        left: 32px;\n        top: 88px;\n        line-height: 180%;\n        ">\n                <li><span>Access to a 30-day free trial of any of our products.</span></li>\n                <li><span>Access to 24x5 support by developers via the <a href="https://support.syncfusion.com/create?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information" style="text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;">support tickets</a>, <a href="https://www.syncfusion.com/forums?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information" style="text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;">forum</a>, <a href="https://www.syncfusion.com/feedback?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\n                " style="text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;">feature &amp; feedback page</a> and chat.</span></li>\n                <li><span>200+ <a href="https://www.syncfusion.com/succinctly-free-ebooks?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information" style="text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;">ebooks </a>on the latest technologies, industry trends, and research topics.</span>\n                </li>\n                <li><span>Largest collection of over 7,000 flat and wireframe icons for free with Syncfusion <a href="https://www.syncfusion.com/downloads/metrostudio?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\n                " style="text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;">Metro Studio.</a></span></li>\n                <li><span>Free and unlimited access to Syncfusion technical <a href="https://www.syncfusion.com/blogs/?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\n                " style="text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;">blogs</a> and <a href="https://www.syncfusion.com/resources/techportal/whitepapers?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information" style="text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;">whitepapers.</a></span></li>\n            </ul>\n            <div style="\n            font-size: 18px;\n            font-weight: 700;\n            position: relative;\n            line-height: 125%;\n            letter-spacing: 0.02em;\n            top: 90px;\n            left: 32px;\n    ">Syncfusion is trusted by 29,000+ businesses worldwide</div>\n            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIwIiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgODIwIDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MjcuNjE3IDIyLjU2NTlWMjQuNzIyNkM0MjYuNTU4IDI0LjM2MzggNDI1LjM5OCAyNC4xNTQ0IDQyNC40NzQgMjQuMTU0NEM0MjMuMzMzIDI0LjE1NDQgNDIyLjY5OCAyNC40OTEyIDQyMi42OTggMjUuMDk2M0M0MjIuNjk4IDI1LjQ4MjQgNDIyLjk3NiAyNS43MzgzIDQyMy43NzMgMjYuMDg1NEw0MjUuOTE3IDI3LjAxNzRDNDI3LjYzMyAyNy43NjM5IDQyOC40OTcgMjguODUzIDQyOC40OTcgMzAuMjY4MUM0MjguNDk3IDMyLjQ1MjIgNDI2LjU0NiAzMy44MyA0MjMuNDUyIDMzLjgzQzQyMi4zMjQgMzMuODMgNDIxLjAxOCAzMy42NzM2IDQxOS42MzYgMzMuMzcwOVYzMS4xNDE2QzQyMS4wMDYgMzEuNTAyOCA0MjIuMjYyIDMxLjY5NTcgNDIzLjIzOSAzMS42OTU3QzQyNC41MTggMzEuNjk1NyA0MjUuMjAzIDMxLjM1MDYgNDI1LjIwMyAzMC43MDc0QzQyNS4yMDMgMzAuMzIwOCA0MjQuOTM1IDMwLjAzNjcgNDI0LjMyMiAyOS43NzE3TDQyMS45NzUgMjguNzU5M0M0MjAuMjM2IDI4LjAwNzggNDE5LjQzMyAyNi45OTU0IDQxOS40MzMgMjUuNTUyMUM0MTkuNDMzIDIzLjQ4MzcgNDIxLjMxNCAyMi4xNjQ5IDQyNC4yNjUgMjIuMTY0OUM0MjUuMjk4IDIyLjE2NDkgNDI2LjU3IDIyLjMxNzEgNDI3LjYxNyAyMi41NjU5VjIyLjU2NTlaTTQzMC4xNjcgMjIuMzkwOUg0MzMuNjM1VjMzLjYwMzlINDMwLjE2N1YyMi4zOTA5Wk00NDQuOTExIDIyLjM5MDlWMjQuNDQ1MUg0MzkuNjc1VjI2Ljk3NDJINDQ0LjI0OVYyOC44MzIzSDQzOS42NzVWMzEuNDU0M0g0NDQuOTc4VjMzLjYwMzlINDM2LjMwNVYyMi4zOTA5SDQ0NC45MTFaTTQ2MS4yOTQgMjIuMzkwOVYzMy42MDM5SDQ1Ny45MzlWMjYuMjIzNkw0NTQuNjUyIDMzLjY5MTVINDUyLjUzMUw0NDkuMjY2IDI2LjIyMzZWMzMuNjAzOUg0NDYuOTQ5VjIyLjM5MDlINDUxLjE4NEw0NTQuMTc4IDI5LjIxMTRMNDU3LjE1NiAyMi4zOTA5SDQ2MS4yOTRWMjIuMzkwOVpNNDcyLjU3OSAyMi4zOTA5VjI0LjQ0NTFINDY3LjMzNVYyNi45NzQySDQ3MS45MDhWMjguODMyM0g0NjcuMzM1VjMxLjQ1NDNINDcyLjYzOFYzMy42MDM5SDQ2My45NTdWMjIuMzkwOUg0NzIuNTc5Wk00ODQuNzk0IDIyLjM5MDlWMzMuNjAzOUg0ODEuMDkzTDQ3Ni45MjYgMjYuNDEyM1YzMy42MDM5SDQ3NC42MDhWMjIuMzkwOUg0NzguNDA3TDQ4Mi40ODQgMjkuNDg3NlYyMi4zOTA5SDQ4NC43OTRaTTQ5NC44NTggMjIuNTY1OVYyNC43MjI2QzQ5My44MDcgMjQuMzY2MyA0OTIuNjQgMjQuMTU0NCA0OTEuNzMyIDI0LjE1NDRDNDkwLjU3MyAyNC4xNTQ0IDQ4OS45MzkgMjQuNDg1OCA0ODkuOTM5IDI1LjA5M0M0ODkuOTM5IDI1LjQ4ODYgNDkwLjE5OCAyNS43MjUgNDkxLjAyMyAyNi4wODU5TDQ5My4xNTcgMjcuMDE3OEM0OTQuODg1IDI3Ljc3MjIgNDk1LjczOSAyOC44NTE4IDQ5NS43MzkgMzAuMjgzNUM0OTUuNzM5IDMyLjQ1NTkgNDkzLjc4NiAzMy44MzA4IDQ5MC42OTkgMzMuODMwOEM0ODkuNTY5IDMzLjgzMDggNDg4LjI1OSAzMy42NzM2IDQ4Ni44NzggMzMuMzcxN1YzMS4xNDI0QzQ4OC4yNDcgMzEuNTAyOCA0ODkuNDk5IDMxLjY5NjUgNDkwLjQ3IDMxLjY5NjVDNDkxLjc0IDMxLjY5NjUgNDkyLjQ0NCAzMS4zNTE1IDQ5Mi40NDQgMzAuNzI4NUM0OTIuNDQ0IDMwLjMxNjMgNDkyLjE5NyAzMC4wNTA0IDQ5MS41NTUgMjkuNzcyNUw0ODkuMjE4IDI4Ljc2MDFDNDg3LjQ2NyAyOC4wMDI4IDQ4Ni42NzQgMjcuMDAyIDQ4Ni42NzQgMjUuNTUzM0M0ODYuNjc0IDIzLjQ4NjIgNDg4LjU1NiAyMi4xNjY1IDQ5MS41IDIyLjE2NjVDNDkyLjUzNiAyMi4xNjUzIDQ5My44MTMgMjIuMzE3MSA0OTQuODU4IDIyLjU2NTlWMjIuNTY1OVoiIGZpbGw9IiMwMEEwQjAiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzUyLjQxMyAyNi44MTlDMzUwLjk5MiAyNS4yNzU5IDM0OS42MzggMjMuODMxNSAzNDguMzQ5IDIyLjE1NzRMMzQ3LjkyIDIxLjU5OTVDMzQ5LjQwNiAyMS4zNjkzIDM1MC42OTUgMjAuMzg0OCAzNTAuNjk1IDE4Ljc0MzNDMzUwLjY5NSAxNy4yMzMxIDM0OS41MzkgMTYuMjQ4MiAzNDcuODIxIDE2LjI0ODJDMzQ2LjU5OCAxNi4yNDgyIDM0NS43MDYgMTYuMzEzNyAzNDUuMjQzIDE2LjMxMzdDMzQ0LjcxNSAxNi4zMTM3IDM0NC4yODUgMTYuMzEzNyAzNDMuNzkgMTYuMjgwOEMzNDMuODU2IDE4LjE1MjEgMzQzLjg4OSAxOC4yODM0IDM0My44ODkgMTkuNDMyMlYyMy42MzQzQzM0My44ODkgMjQuNDU1MyAzNDMuODU2IDI1LjI3NTkgMzQzLjc5IDI2LjgxODZDMzQ0LjE1MyAyNi43MjAyIDM0NC41MTcgMjYuNzIwMiAzNDQuNzgxIDI2LjcyMDJDMzQ1LjA0NSAyNi43MjAyIDM0NS40MDkgMjYuNzUzMSAzNDUuNzA2IDI2LjgxODZDMzQ1LjY0IDI1Ljc2NzkgMzQ1LjYwNyAyNC4wMjgzIDM0NS42MDcgMjMuNjM0M1YyMS4yMDUxQzM0Ny4xNiAyMy4yMDc3IDM0OS4yMDkgMjUuNjY5NSAzNTAuMDAxIDI2LjgxODZDMzUwLjM5OCAyNi43MjAyIDM1MC43MjggMjYuNzIwMiAzNTEuMTI0IDI2LjcyMDJDMzUxLjQ1NSAyNi43MjA2IDM1MS45MTggMjYuNzIwNiAzNTIuNDEzIDI2LjgxOVYyNi44MTlaTTM0OC44NzggMTkuMDA2QzM0OC44NzggMjAuMDIzNCAzNDguMzE3IDIxLjIwNTQgMzQ2Ljc5NyAyMS4yMDU0QzM0Ni40IDIxLjIwNTQgMzQ2LjAwMyAyMS4yMDU0IDM0NS42MDcgMjEuMTcyNVYxNy4wNjg4QzM0Ni4wMDMgMTYuOTcwNCAzNDYuNDk5IDE2LjkwNDYgMzQ2Ljc2MyAxNi45MDQ2QzM0OC4wODUgMTYuOTA0OSAzNDguODc4IDE3LjY2IDM0OC44NzggMTkuMDA2VjE5LjAwNlpNMzgyLjM4IDI2Ljg4NDVDMzgxLjgxOSAyNi4yOTM2IDM4MC45NiAyNS4zNDE3IDM4MC4xMzQgMjQuNDIyM0MzODAuODI4IDIzLjY2NzIgMzgxLjU1NSAyMi41NTEgMzgxLjk4NCAyMS41OTkxQzM4MS43MTkgMjEuNDY3OCAzODEuMzU2IDIxLjIwNTEgMzgxLjA5MiAyMC45NzUzQzM4MC45OTMgMjEuNzk1OSAzODAuNDMyIDIyLjg3OTIgMzc5LjYzOSAyMy44MzE1QzM3OC41MTUgMjIuNTE4NSAzNzguMjE4IDIyLjE1NzQgMzc3LjE5MyAyMC43Nzg1QzM3OC41ODEgMTkuODkyMSAzNzkuMjQyIDE4Ljg3NDMgMzc5LjI0MiAxOC4wNTM3QzM3OS4yNDIgMTcuMTAxNyAzNzguNTgxIDE2LjExNjkgMzc2Ljk2MiAxNi4xMTY5QzM3NS4yMTEgMTYuMTE2OSAzNzQuMzUyIDE3LjIwMDIgMzc0LjM1MiAxOC40ODAzQzM3NC4zNTIgMTkuMjM1NCAzNzQuNTUgMTkuODkxNyAzNzUuMzc2IDIwLjk3NTNDMzc0LjA1NCAyMS42OTc1IDM3Mi43NjYgMjIuNzQ3OSAzNzIuNzY2IDI0LjQyMjNDMzcyLjc2NiAyNi4wNjM5IDM3NC4wODcgMjYuOTE3NCAzNzUuNzA3IDI2LjkxNzRDMzc3LjE5MyAyNi45MTc0IDM3OC4xNTEgMjYuMzI2NiAzNzguOTEyIDI1LjYzNjlMMzc5LjkwMiAyNi44MTlDMzgwLjIgMjYuNzg2MSAzODAuNTMxIDI2LjcyMDYgMzgwLjg2MSAyNi43MjA2QzM4MS4zMjQgMjYuNzIwNiAzODEuODUyIDI2Ljc4NjEgMzgyLjM4IDI2Ljg4NDVWMjYuODg0NVpNMzgzLjM3MiA0MC4wMTU4QzM4MS45MTggMzguNDczIDM4MC41OTcgMzcuMDYxMiAzNzkuMzA4IDM1LjM4NzFMMzc4Ljg3OCAzNC44Mjg4QzM4MC4zMzIgMzQuNTk5MSAzODEuNjU0IDMzLjYxNSAzODEuNjU0IDMxLjk0MDFDMzgxLjY1NCAzMC40NjMyIDM4MC40OTggMjkuNDQ1NCAzNzguNzc5IDI5LjQ0NTRDMzc3LjU1NyAyOS40NDU0IDM3Ni42MzIgMjkuNTQzNSAzNzYuMTY5IDI5LjU0MzVDMzc1LjY3MyAyOS41NDM1IDM3NS4yNDQgMjkuNTQzNSAzNzQuNzQ4IDI5LjQ3NzZDMzc0LjgxNCAzMS4zODIyIDM3NC44NDggMzEuNDgwMiAzNzQuODQ4IDMyLjYyOTRWMzYuODMxMUMzNzQuODQ4IDM3LjY1MjQgMzc0LjgxNCAzOC41MDUyIDM3NC43NDggNDAuMDE1NEMzNzUuMTEyIDM5Ljk0OTYgMzc1LjQ3NSAzOS45NDk2IDM3NS43MDcgMzkuOTQ5NkMzNzYuMDA0IDM5Ljk0OTYgMzc2LjM2OCAzOS45NDk2IDM3Ni42MzIgNDAuMDE1NEMzNzYuNTY1IDM4Ljk5OCAzNzYuNTMzIDM3LjI1ODEgMzc2LjUzMyAzNi44MzExVjM0LjQzNDhDMzc4LjExOSAzNi40MDQyIDM4MC4xNjcgMzguODk5NiAzODAuOTYgNDAuMDE1NEMzODEuMzU2IDM5Ljk0OTYgMzgxLjY4NyAzOS45NDk2IDM4Mi4wODMgMzkuOTQ5NkMzODIuMzggMzkuOTUgMzgyLjg3NiAzOS45NSAzODMuMzcyIDQwLjAxNThaTTM2Mi4xNiAyNi44MTlDMzYwLjk3MSAyNS41NzE1IDM1OC44ODkgMjIuOTc4IDM1OC4wNjMgMjEuOTkzNUwzNTcuMjM3IDIwLjk3NTdDMzU4LjA5NiAxOS45NTgzIDM1OC42OSAxOS4zMzQxIDM1OS4zMTkgMTguNTc5QzM2MC4wNDUgMTcuNzkxIDM2MC43MDYgMTYuOTcwNCAzNjEuNDk5IDE2LjI0ODJDMzYxLjEzNiAxNi4zMTM3IDM2MC45MzcgMTYuMzEzNyAzNjAuNzM5IDE2LjMxMzdDMzYwLjU0MSAxNi4zMTM3IDM2MC4zNDMgMTYuMzEzNyAzNjAuMTQ0IDE2LjI0ODJDMzU5LjkxMyAxNi42MDkzIDM1OS41NSAxNy4wNjg4IDM1OS4xNTMgMTcuNTI4N0MzNTguNzU2IDE3Ljk1NTYgMzU4LjM2IDE4LjM4MjIgMzU4LjA2MyAxOC43NDMzQzM1Ny4yMzYgMTkuNjk1MiAzNTYuNzc0IDIwLjE1NDcgMzU1LjU4NSAyMS4yNzA5VjE5LjQ2NTVDMzU1LjU4NSAxOC40MTUxIDM1NS41ODUgMTcuNzI1NSAzNTUuNjUxIDE2LjI0ODJDMzU1LjMyMSAxNi4zMTM3IDM1NC45NTcgMTYuMzEzNyAzNTQuNzI2IDE2LjMxMzdDMzU0LjQ2MSAxNi4zMTM3IDM1NC4wMzIgMTYuMzEzNyAzNTMuNzY4IDE2LjI0ODJDMzUzLjgzMyAxNy44MjM5IDM1My44NjcgMTguMjgzNCAzNTMuODY3IDE5LjQzMjVWMjMuNjM0N0MzNTMuODY3IDI0LjY4NSAzNTMuODMzIDI1LjMwODggMzUzLjc2OCAyNi44MTlDMzU0LjE2NCAyNi43MjA2IDM1NC40OTUgMjYuNzIwNiAzNTQuNzI2IDI2LjcyMDZDMzU0Ljk1NyAyNi43MjA2IDM1NS4zNTMgMjYuNzUzNSAzNTUuNjUxIDI2LjgxOUMzNTUuNTg1IDI1LjE0NDkgMzU1LjU4NSAyNC4xNTk3IDM1NS41ODUgMjMuNjM0N1YyMS40MzUyQzM1Ni44MDcgMjIuODc5NiAzNTguNjkgMjUuMjQzMyAzNTkuNzQ4IDI2LjgxOUMzNjAuMTMgMjYuNzU2MyAzNjAuNTE3IDI2LjcyMzQgMzYwLjkwNSAyNi43MjA2QzM2MS4yMDIgMjYuNzIwNiAzNjEuNjY1IDI2LjcyMDYgMzYyLjE2IDI2LjgxOVYyNi44MTlaTTM3Mi42MDEgNDAuMDE1OEMzNzIuNTY4IDM5Ljg1MTkgMzcyLjUzNSAzOS43MjA2IDM3Mi41MzUgMzkuNTIzNEMzNzIuNTM1IDM5LjM5MjggMzcyLjU2OCAzOS4yMjgxIDM3Mi42MDEgMzkuMDk2NEMzNzEuMjggMzkuMTI5NyAzNjguOTAxIDM5LjE5NTIgMzY4LjM3MiAzOS4xOTUyVjM0LjY2NDlDMzY5LjY5NCAzNC42NjQ5IDM3MC45ODIgMzQuNjY0OSAzNzIuMjcgMzQuNzk2M0MzNzIuMjM4IDM0LjYzMjQgMzcyLjIwNCAzNC40Njc3IDM3Mi4yMDQgMzQuMzM2NEMzNzIuMjA0IDM0LjIwNTggMzcyLjIwNCAzNC4wNDE5IDM3Mi4yNyAzMy44NDQ3QzM3MS4zNDYgMzMuOTQyOCAzNjkuMTk4IDMzLjk3NiAzNjguMzcyIDMzLjk3NlYzMC4yNjZDMzY5LjgyNiAzMC4yNjYgMzcwLjY4NSAzMC4yNjYgMzcxLjE4IDMwLjI5OTNMMzcyLjUwMiAzMC4zNjUxQzM3Mi40MzYgMzAuMTY3OSAzNzIuNDM2IDMwLjA2OTIgMzcyLjQzNiAyOS45MDUzQzM3Mi40MzYgMjkuNzQxNCAzNzIuNDM2IDI5LjcwODEgMzcyLjUwMiAyOS40NDU4QzM3MS40MTEgMjkuNDc4MyAzNjkuOTI1IDI5LjU0MzggMzY5LjI2NCAyOS41NDM4QzM2OC44MDIgMjkuNTQzOCAzNjcuMzQ4IDI5LjUxMTMgMzY2LjU4NyAyOS40NDU4QzM2Ni42NTQgMzAuMjY2NCAzNjYuNjg2IDMxLjYxMjMgMzY2LjY4NiAzMi41NjQyVjM2Ljg2NTFDMzY2LjY4NiAzNy40ODg1IDM2Ni42MiAzOC43MzU3IDM2Ni41ODcgNDAuMDE2MkMzNjcuNTEzIDM5Ljk1MDMgMzY4LjgwMiAzOS45NTAzIDM2OS4yNjQgMzkuOTUwM0MzNzAuMDI0IDM5Ljk1IDM3MS42NDMgMzkuOTUgMzcyLjYwMSA0MC4wMTU4Wk0zNjQuNjA1IDM5LjEyOTRDMzY0LjQ0IDM4LjgwMDggMzY0LjM0MSAzOC4zMDg4IDM2NC4yNzUgMzguMDQ2MUMzNjIuOTIgMzkuMTYxOSAzNjEuOTk1IDM5LjM5MjQgMzYwLjkzOCAzOS4zOTI0QzM1OC41OTIgMzkuMzkyNCAzNTcuMzM3IDM3LjI5MTMgMzU3LjMzNyAzNC42NjQ5QzM1Ny4zMzcgMzEuNzQzNiAzNTguNzU3IDMwLjAzNjIgMzYxLjE2OSAzMC4wMzYyQzM2Mi40MjUgMzAuMDM2MiAzNjMuNjE0IDMwLjU5NDUgMzY0LjE3NiAzMS4xNTI4QzM2NC4yMDggMzAuODg5OCAzNjQuMzA4IDMwLjM2NDggMzY0LjQ3MyAzMC4wNjg4QzM2My4zMTYgMjkuNTExMyAzNjIuMjU5IDI5LjM0NjYgMzYxLjEwMiAyOS4zNDY2QzM1Ny4yMzcgMjkuMzQ2NiAzNTUuNDUzIDMxLjc0MzYgMzU1LjQ1MyAzNC44Mjg4QzM1NS40NTMgMzguMzA5MSAzNTcuNzk4IDQwLjE0NzEgMzYwLjczOSA0MC4xNDcxQzM2Mi40MjUgNDAuMTQ3MSAzNjMuODEyIDM5LjYyMjIgMzY0LjYwNSAzOS4xMjk0VjM5LjEyOTRaTTM0Mi4zMDMgMjYuODE5QzM0MC41MTkgMjMuNDA0OSAzMzguOCAxOS4xMzczIDMzNy41NzggMTYuMTE2OUgzMzcuMzhDMzM2LjU4NyAxOC4wMjA3IDMzNS4xMzMgMjEuMjcwOSAzMzQuNzM3IDIyLjE4OTlDMzM0LjI3NCAyMy4zMDYxIDMzMy4yNSAyNS41MDU2IDMzMi41ODkgMjYuODE4NkMzMzIuODAzIDI2Ljc1MzggMzMzLjAyNiAyNi43MjA2IDMzMy4yNSAyNi43MjAyQzMzMy40NDggMjYuNzIwMiAzMzMuNjEzIDI2Ljc1MzEgMzMzLjg0NSAyNi44MTg2QzMzNC4xNzUgMjUuOTMyMiAzMzQuNjM4IDI0LjgxNiAzMzUuMTMzIDIzLjYzNDNDMzM1Ljc5NCAyMy42MDE0IDMzNi4zODkgMjMuNTY4OCAzMzYuOTg0IDIzLjU2ODhDMzM3LjYxMiAyMy41Njg4IDMzOC4yNzIgMjMuNjAxNCAzMzguOTMzIDIzLjYzNDNMMzM5LjU5NCAyNS4yMUwzNDAuMjU1IDI2LjgxODZDMzQwLjcxNyAyNi43MjAyIDM0MS4wOCAyNi43MjAyIDM0MS4zMTIgMjYuNzIwMkMzNDEuNjA5IDI2LjcyMDYgMzQxLjg3MyAyNi43MjA2IDM0Mi4zMDMgMjYuODE5VjI2LjgxOVpNMzUzLjYzNiAyOS40NDU0QzM1My40MzggMjkuNTExMyAzNTMuMjczIDI5LjU0MzUgMzUzLjEwNyAyOS41NDM1QzM1Mi45MDkgMjkuNTQzNSAzNTIuNzQ0IDI5LjUxMDkgMzUyLjU0NiAyOS40NDU0QzM1Mi42NDQgMzAuNzU4NCAzNTIuNjc4IDMyLjA3MTQgMzUyLjY3OCAzMy4zNTE5VjM2LjczMzRDMzUyLjE0OSAzNi4yNzM2IDM1MC44NiAzNS4wOTE5IDM0OS4zNzQgMzMuNzEzQzM0Ny44NiAzMi4zMDc0IDM0Ni4zOTQgMzAuODUxMSAzNDQuOTc5IDI5LjM0NjZIMzQ0Ljc0OEMzNDQuNzgxIDMwLjgyNDMgMzQ0LjgxNCAzMi40IDM0NC44MTQgMzMuODExNFYzNS44Nzk5QzM0NC44MTQgMzcuNjUyOCAzNDQuODE0IDM4LjYwNDcgMzQ0LjcxNSA0MC4wMTYyQzM0NC45OCAzOS45NTAzIDM0NS4xMTIgMzkuOTUwMyAzNDUuMzEgMzkuOTUwM0MzNDUuNDQyIDM5Ljk1MDMgMzQ1LjU3NSAzOS45NTAzIDM0NS44MDYgNDAuMDE2MkMzNDUuNzQgMzguNjcwNiAzNDUuNzA3IDM2LjQ3MDggMzQ1LjcwNyAzNS44Nzk5VjMyLjU5NjhDMzQ4LjE4NSAzNC44NjI1IDM1MS4yMjQgMzcuODgyNiAzNTMuNDcxIDQwLjE0NzVIMzUzLjYwM0MzNTMuNjAzIDM4LjkzMjkgMzUzLjUzNyAzNy43MTc5IDM1My41MzcgMzYuNTA0VjM0LjYzMjdDMzUzLjUzNiAzMi40MzI1IDM1My41MzYgMzEuMzQ5MyAzNTMuNjM2IDI5LjQ0NTRaTTM0Mi41NjcgNDAuMDE1OEMzNDIuNTM0IDM5Ljg1MTkgMzQyLjUwMSAzOS43MjA2IDM0Mi41MDEgMzkuNTIzNEMzNDIuNTAxIDM5LjM5MjggMzQyLjUzNCAzOS4yMjgxIDM0Mi41NjcgMzkuMDk2NEMzNDEuMjQ2IDM5LjEyOTcgMzM4Ljg2NyAzOS4xOTUyIDMzOC4zNzEgMzkuMTk1MlYzNC42NjQ5QzMzOS42NiAzNC42NjQ5IDM0MC45NDggMzQuNjY0OSAzNDIuMjM3IDM0Ljc5NjNDMzQyLjIwNCAzNC42MzI0IDM0Mi4xNzEgMzQuNDY3NyAzNDIuMTcxIDM0LjMzNjRDMzQyLjE3MSAzNC4yMDU4IDM0Mi4xNzEgMzQuMDQxOSAzNDIuMjM3IDMzLjg0NDdDMzQxLjMxMiAzMy45NDI4IDMzOS4xOTcgMzMuOTc2IDMzOC4zNzEgMzMuOTc2VjMwLjI2NkMzMzkuNzkyIDMwLjI2NiAzNDAuNjUxIDMwLjI2NiAzNDEuMTc5IDMwLjI5OTNMMzQyLjQ2OCAzMC4zNjUxQzM0Mi40MzUgMzAuMTY3OSAzNDIuNDM1IDMwLjA2OTIgMzQyLjQzNSAyOS45MDUzQzM0Mi40MzUgMjkuNzQxNCAzNDIuNDM1IDI5LjY3NTUgMzQyLjQ2OCAyOS40NDU4QzM0MS4zNzggMjkuNDc4MyAzMzkuODkxIDI5LjU0MzggMzM5LjIzIDI5LjU0MzhDMzM4Ljc2NyAyOS41NDM4IDMzNy4zMTQgMjkuNTExMyAzMzYuNTU0IDI5LjQ0NThDMzM2LjYyIDMwLjI2NjQgMzM2LjY1MyAzMS42MTIzIDMzNi42NTMgMzIuNTY0MlYzNi44NjUxQzMzNi42NTMgMzcuNDg4NSAzMzYuNTg3IDM4LjczNTcgMzM2LjU1NCA0MC4wMTYyQzMzNy41MTIgMzkuOTUwMyAzMzguNzY3IDM5Ljk1MDMgMzM5LjIzIDM5Ljk1MDNDMzM5Ljk5IDM5Ljk1IDM0MS42NDIgMzkuOTUgMzQyLjU2NyA0MC4wMTU4VjQwLjAxNThaTTMzMS4yMDEgMjYuODE5QzMzMC42NzMgMjMuMjQwNiAzMzAuMjEgMTkuNDk4NCAzMjkuODQ3IDE2LjExNjlDMzI5Ljc0OCAxNi4xNDk4IDMyOS43MTQgMTYuMTQ5OCAzMjkuNjQ5IDE2LjExNjlDMzI4Ljk1NSAxNy4zMzE1IDMyOC4xNjIgMTguNjQ0NSAzMjcuNTY3IDE5LjU2MzlDMzI3LjAwNiAyMC40NTAzIDMyNi4zNDUgMjEuNTAwNyAzMjUuNTg1IDIyLjYxNjlDMzIzLjk5OSAyMC41ODE3IDMyMi4zNDcgMTguMDIxMSAzMjEuMjU2IDE2LjExNjlDMzIxLjE5IDE2LjE0OTggMzIxLjE1NyAxNi4xMTY5IDMyMS4wOTEgMTYuMTE2OUMzMjAuNzI4IDE5LjQ5OCAzMjAuMjMyIDIzLjI3MzIgMzE5LjczNiAyNi44MTlDMzIwLjAwMSAyNi43MjA2IDMyMC4xNjYgMjYuNzIwNiAzMjAuMjk4IDI2LjcyMDZDMzIwLjQ5NiAyNi43MjA2IDMyMC42MjggMjYuNzUzNSAzMjAuODU5IDI2LjgxOUMzMjAuOTkyIDI0LjQ1NTMgMzIxLjI1NiAyMi4xMjQ0IDMyMS41NTMgMTkuNjYyM0MzMjIuODQyIDIxLjUzMzYgMzIzLjk2NSAyMy4xNDIyIDMyNS4yMjEgMjQuODQ5M0MzMjYuMjc4IDIzLjIwNzcgMzI3LjM2OCAyMS40MzQ4IDMyOC41NTggMTkuNjI5NEMzMjguODg4IDIyLjE1NyAzMjkuMTg2IDI0LjQ1NTMgMzI5LjM1MSAyNi44MTlDMzI5Ljc4IDI2LjcyMDYgMzMwLjA3OCAyNi43MjA2IDMzMC4yNzYgMjYuNzIwNkMzMzAuNTQgMjYuNzIwNiAzMzAuODA1IDI2LjcyMDYgMzMxLjIwMSAyNi44MTlWMjYuODE5Wk0zMzQuOTY4IDMyLjIwMjhDMzM0Ljk2OCAzMC4yOTg5IDMzMy40NDggMjkuNDQ1NCAzMzEuNTk4IDI5LjQ0NTRDMzMwLjc3MiAyOS40NDU0IDMyOS44OCAyOS41NDM1IDMyOS4yNTIgMjkuNTQzNUMzMjkuMDIxIDI5LjU0MzUgMzI4LjUyNSAyOS41NDM1IDMyNy45OTcgMjkuNDc3NkMzMjguMDMgMzAuNTI4MyAzMjguMDk2IDMxLjQxNDggMzI4LjA5NiAzMi40MzIyVjM2LjkyOTVDMzI4LjA5NiAzNy45MTQ4IDMyOC4wMyAzOC45OTggMzI3Ljk5NyA0MC4wMTU0QzMyOC40MjYgMzkuOTQ5NiAzMjguNzI0IDM5Ljk0OTYgMzI4LjkyMiAzOS45NDk2QzMyOS4xNTMgMzkuOTQ5NiAzMjkuNDg0IDM5Ljk0OTYgMzI5Ljg4IDQwLjAxNTRDMzI5LjgxNSAzOS4wMzE5IDMyOS43ODIgMzguMDQ2NSAzMjkuNzgxIDM3LjA2MDlWMzUuNDJDMzMwLjE0NSAzNS40NTI2IDMzMC41MDggMzUuNDUyNiAzMzAuOTA1IDM1LjQ1MjZDMzMyLjgyIDM1LjQ1MjYgMzM0Ljk2OCAzNC43MzA0IDMzNC45NjggMzIuMjAyOFYzMi4yMDI4Wk0zMjYuMDE0IDM2Ljg5NzNDMzI2LjAxNCAzNS4yNTU4IDMyNC45MjQgMzQuNTMzNiAzMjMuMDQgMzMuNzQ1NkMzMjEuNjg2IDMzLjE4OCAzMjAuOTkyIDMyLjY5NTYgMzIwLjk5MiAzMS42NDQ1QzMyMC45OTIgMzAuNjYgMzIxLjc1MiAzMC4wMzYyIDMyMy4wMDggMzAuMDM2MkMzMjMuODM0IDMwLjAzNjIgMzI0LjU2MSAzMC4zMzE1IDMyNS4yMjIgMzAuODU2OEMzMjUuMjg3IDMwLjQ5NTcgMzI1LjQ1MyAzMC4xMzQ3IDMyNS42NTEgMjkuODM5NEMzMjQuODU4IDI5LjQ3ODMgMzIzLjk5OSAyOS4zNDcgMzIzLjA3NCAyOS4zNDdDMzIwLjM2NSAyOS4zNDcgMzE5LjUwNSAzMC44OTA1IDMxOS41MDUgMzIuMjAzNUMzMTkuNTA1IDMzLjgxMTggMzIwLjI5OSAzNC41NjcyIDMyMi4zNDcgMzUuMzU1M0MzMjMuNjM2IDM1Ljg0NyAzMjQuMjk2IDM2LjQ3MTEgMzI0LjI5NiAzNy41NTQ0QzMyNC4yOTYgMzguNzAzNSAzMjMuNDM3IDM5LjQyNTcgMzIyLjI0OCAzOS40MjU3QzMyMS41NTQgMzkuNDI1NyAzMjAuMzY1IDM5LjA2NDYgMzE5LjUzOSAzOC4zMDk5QzMxOS41MDUgMzguNzM2MSAzMTkuNTA1IDM5LjEzMDQgMzE5LjM3MyAzOS40OTE1QzMxOS45MDIgMzkuNzU0NiAzMjEuMTI1IDQwLjE0NzkgMzIyLjIxNSA0MC4xNDc5QzMyNC45OSA0MC4xNDcxIDMyNi4wMTQgMzguNDM5NyAzMjYuMDE0IDM2Ljg5NzNWMzYuODk3M1pNMzc4LjE1MiAxNy45ODgyQzM3OC4xNTIgMTguOTczIDM3Ny40NTggMTkuNjYyMyAzNzYuNzY0IDIwLjIyMDJDMzc2LjMwMSAxOS41NjM5IDM3NS43NCAxOC42NzcxIDM3NS43NCAxNy45ODgyQzM3NS43NCAxNy4yMzMxIDM3Ni4yNjggMTYuODA2MSAzNzYuOTk1IDE2LjgwNjFDMzc3Ljk4NyAxNi44MDY1IDM3OC4xNTIgMTcuNjkyNiAzNzguMTUyIDE3Ljk4ODJWMTcuOTg4MlpNMzc4LjQ4MiAyNS4wMTMyQzM3OC4xMTkgMjUuMzQxNyAzNzcuMjYgMjUuOTY1NSAzNzYuNTMzIDI1Ljk2NTVDMzc1LjU3NCAyNS45NjU1IDM3NC40MTggMjUuMjc1OSAzNzQuNDE4IDIzLjc5ODZDMzc0LjQxOCAyMi40ODU1IDM3NS4yNzcgMjEuODk0NyAzNzUuODA2IDIxLjU2NjVDMzc3LjAyOCAyMy4yNDA2IDM3Ny4wOTUgMjMuMzM5MSAzNzguNDgyIDI1LjAxMzJaTTM3OS44MDQgMzIuMjAyOEMzNzkuODA0IDMzLjI1MzUgMzc5LjI3NSAzNC40MDI2IDM3Ny43NTUgMzQuNDAyNkMzNzcuMzI2IDM0LjQwMjYgMzc2LjkyOSAzNC40MDI2IDM3Ni41MzMgMzQuMzY5M1YzMC4yNjU2QzM3Ni45MjkgMzAuMTY3NiAzNzcuNDI1IDMwLjEzNDMgMzc3LjcyMiAzMC4xMzQzQzM3OS4wMTEgMzAuMTM0MyAzNzkuODA0IDMwLjg4OTggMzc5LjgwNCAzMi4yMDI4Wk0zMzguNjAyIDIyLjgxNDFDMzM3LjkwOSAyMi44NDY2IDMzNy41NDUgMjIuODQ2NiAzMzcuMDgyIDIyLjg0NjZDMzM2LjUyMSAyMi44NDY2IDMzNi4xOSAyMi44NDY2IDMzNS40NjMgMjIuODE0MUwzMzcuMDgyIDE5LjAwNkwzMzguNjAyIDIyLjgxNDFaTTMzMy4xNTEgMzIuMzAwOEMzMzMuMTUxIDMzLjgxMTEgMzMyLjI1OCAzNC43OTU5IDMzMC44MDUgMzQuNzk1OUMzMzAuNTA3IDM0Ljc5NTkgMzMwLjE3NyAzNC43OTU5IDMyOS43OCAzNC43MzAxVjMwLjIzMjdDMzMwLjI0MyAzMC4xNjY5IDMzMC42MzkgMzAuMTMzOSAzMzEuMDM2IDMwLjEzMzlDMzMyLjQyNCAzMC4xMzQzIDMzMy4xNTEgMzEuMDIxMSAzMzMuMTUxIDMyLjMwMDhaTTM2OS41MjggMjMuNjY3NkMzNjkuNTI4IDIyLjAyNiAzNjguNDM4IDIxLjMwMzkgMzY2LjU1NSAyMC41MTYyQzM2NS4yIDE5Ljk1ODMgMzY0LjUwNiAxOS40OTg4IDM2NC41MDYgMTguNDE1MUMzNjQuNTA2IDE3LjQ2MzIgMzY1LjI2NiAxNi44MDY1IDM2Ni41MjEgMTYuODA2NUMzNjcuMzQ4IDE2LjgwNjUgMzY4LjA3NSAxNy4xMDE3IDM2OC43MzUgMTcuNjI3NUMzNjguODAyIDE3LjI2NjQgMzY4Ljk2NyAxNi45MDQ5IDM2OS4xMzEgMTYuNjQyMkMzNjguMzcyIDE2LjI4MTEgMzY3LjQ3OSAxNi4xMTcyIDM2Ni41ODcgMTYuMTE3MkMzNjMuOTQ0IDE2LjExNzIgMzYyLjk4NiAxNy42NiAzNjIuOTg2IDE5LjAwNkMzNjIuOTg2IDIwLjU4MTcgMzYzLjgxMiAyMS4zMzY4IDM2NS44NjEgMjIuMTI0NEMzNjcuMTQ5IDIyLjYxNjkgMzY3LjgxIDIzLjI0MDYgMzY3LjgxIDI0LjM1NjhDMzY3LjgxIDI1LjQ3MyAzNjYuOTUxIDI2LjE5NTIgMzY1Ljc2MiAyNi4xOTUyQzM2NS4wMzUgMjYuMTk1MiAzNjMuODc5IDI1LjgzNDEgMzYzLjA1MiAyNS4xMTE5QzM2My4wMiAyNS41Mzg5IDM2Mi45ODYgMjUuOSAzNjIuODg3IDI2LjI2MTFDMzYzLjM4MyAyNi41MjM4IDM2NC42MDYgMjYuOTE3NCAzNjUuNzI5IDI2LjkxNzRDMzY4LjUwNCAyNi45MTc0IDM2OS41MjggMjUuMjQzMyAzNjkuNTI4IDIzLjY2NzZWMjMuNjY3NloiIGZpbGw9IiMwMzY1NTUiLz4NCjxwYXRoIGQ9Ik02NDAuNDE2IDIwLjU1NzNDNjM4LjY3MSAxOS44MzU0IDYzNy42MzEgMTkuNTU1MSA2MzYuNTk4IDE5LjU1NTFDNjM1LjUxNCAxOS41NTUxIDYzNC44MTkgMTkuOTE3IDYzNC44MTkgMjAuNDc2NUM2MzQuODE5IDIyLjE2NDUgNjQwLjk2MiAyMS42ODkzIDY0MC45NjIgMjUuNTkzNkM2NDAuOTYyIDI3Ljc0NjQgNjM5LjAyNCAyOC45OTc0IDYzNi4zMzIgMjguOTk3NEM2MzQuMjIgMjguOTk3NCA2MzMuMTggMjguNDg4IDYzMS45ODMgMjcuOTExNlYyNS40OTYyQzYzMy43MSAyNi41NjM1IDYzNC43NjggMjYuOTQwMSA2MzYuMTAxIDI2Ljk0MDFDNjM3LjI1NiAyNi45NDAxIDYzNy44NzkgMjYuNTYzNSA2MzcuODc5IDI1LjkwNjNDNjM3Ljg3OSAyNC4wNjg1IDYzMS43MzcgMjQuNzQxNSA2MzEuNzM3IDIwLjcyMTNDNjMxLjczNyAxOC43ODI3IDYzMy41MzQgMTcuNDk5IDYzNi4zMzIgMTcuNDk5QzYzNy42ODIgMTcuNDk5IDYzOC45MDEgMTcuNzYzNSA2NDAuNDE2IDE4LjM3MDdWMjAuNTU3M1pNNjQ5LjAxNiAyOC40ODQxQzY0Ny45OTIgMjguODMwNiA2NDcuMTI2IDI4Ljk5NTQgNjQ2LjI2MiAyOC45OTU0QzY0My40MDIgMjguOTk1NCA2NDEuNTUyIDI3LjQ0MjIgNjQxLjU1MiAyNS4wNzkyQzY0MS41NTIgMjIuNzU5NCA2NDMuNDczIDIxLjEyMDIgNjQ2LjE1NiAyMS4xMjAyQzY0Ni45ODUgMjEuMTIwMiA2NDguMDQ0IDIxLjMxODIgNjQ4Ljg5MSAyMS42MTIzVjIzLjM4ODFDNjQ4LjIyMSAyMy4wNTYyIDY0Ny40NDQgMjIuODc0MSA2NDYuODA5IDIyLjg3NDFDNjQ1LjI3MyAyMi44NzQxIDY0NC4yODYgMjMuNzM0MyA2NDQuMjg2IDI1LjA2MTlDNjQ0LjI4NiAyNi40MDggNjQ1LjI1NiAyNy4yOTQgNjQ2LjcyIDI3LjI5NEM2NDcuMzM3IDI3LjI5NCA2NDcuODg2IDI3LjE2MjMgNjQ5LjAxNiAyNi43NjhMNjQ5LjAxNiAyOC40ODQxWk02NzEuMzIgMjQuMjA5QzY3MS40MjUgMjMuMTU0OCA2NzIuMDgxIDIyLjU0NTcgNjczLjA4NyAyMi41NDU3QzY3NC4wNzYgMjIuNTQ1NyA2NzQuNzQ2IDIzLjE3MjEgNjc0Ljg1MiAyNC4yMDlINjcxLjMyWk02NzIuOTEgMjEuMTIyOUM2NzAuNCAyMS4xMjI5IDY2OC42MTQgMjIuNzc1NSA2NjguNjE0IDI1LjEwMTJDNjY4LjYxNCAyNy40NDQxIDY3MC40NzEgMjguOTk1NCA2NzMuMzM1IDI4Ljk5NTRDNjczLjk3IDI4Ljk5NTQgNjc1LjUwNCAyOC45OTU0IDY3Ni45NjYgMjcuOTg3VjI2LjUwNDJDNjc1Ljc2OSAyNy4yOTkzIDY3NC45NzcgMjcuNTczMSA2NzMuOTU1IDI3LjU3MzFDNjcyLjM0MSAyNy41NzMxIDY3MS4zNTQgMjYuNzk0OSA2NzEuMjY1IDI1LjQ2NjZINjc3LjExQzY3Ny4yMzIgMjIuNjkzOSA2NzUuMjc5IDIxLjEyMjkgNjcyLjkxIDIxLjEyMjlWMjEuMTIyOVpNNjc4LjA5OSAyOC44NTcySDY4MC42NTRWMjEuMjYyN0g2NzguMDk5VjI4Ljg1NzJaTTY4Ny43NjcgMjYuNzgxNUM2ODcuMjM0IDI3LjIyODEgNjg2Ljc5MiAyNy40MDcyIDY4Ni4yNDYgMjcuNDA3MkM2ODUuMDQzIDI3LjQwNzIgNjg0LjI4MSAyNi40ODM4IDY4NC4yODEgMjUuMTAwNEM2ODQuMjgxIDIzLjU4NDEgNjg1LjA0MyAyMi43MTAxIDY4Ni4zMzEgMjIuNzEwMUM2ODYuNzkyIDIyLjcxMDEgNjg3LjM5NCAyMi45MDggNjg3Ljc2NyAyMy4xNTU5VjI2Ljc4MTVaTTY4Ny43NjcgMTcuNjM5MVYyMS41OTU4QzY4Ny4wNzYgMjEuMjg0NyA2ODYuMzg4IDIxLjEyMDIgNjg1LjY0NCAyMS4xMjAyQzY4My4zMTMgMjEuMTIwMiA2ODEuNyAyMi43MjY2IDY4MS43IDI1LjA1MDdDNjgxLjcgMjcuMzI0OCA2ODMuMzEzIDI4Ljk5NzQgNjg1LjUgMjguOTk3NEM2ODYuMzY3IDI4Ljk5NzQgNjg3LjAzNyAyOC43ODU2IDY4Ny43NjcgMjguMjQzNVYyOC44NTQ5SDY5MC4zMjJWMTcuNjM5MUg2ODcuNzY3Wk02OTQuMTA1IDI0LjIwOUM2OTQuMjExIDIzLjE1NDggNjk0Ljg2NCAyMi41NDU3IDY5NS44NjggMjIuNTQ1N0M2OTYuODU4IDIyLjU0NTcgNjk3LjUzNSAyMy4xNzIxIDY5Ny42NDEgMjQuMjA5SDY5NC4xMDVaTTY5NS42OTQgMjEuMTIyOUM2OTMuMTg0IDIxLjEyMjkgNjkxLjQgMjIuNzc1NSA2OTEuNCAyNS4xMDEyQzY5MS40IDI3LjQ0NDEgNjkzLjI1OSAyOC45OTU0IDY5Ni4xMTkgMjguOTk1NEM2OTYuNzUzIDI4Ljk5NTQgNjk4LjI5IDI4Ljk5NTQgNjk5Ljc1NSAyNy45ODdWMjYuNTA0MkM2OTguNTU3IDI3LjI5OTMgNjk3Ljc2MyAyNy41NzMxIDY5Ni43MzYgMjcuNTczMUM2OTUuMTMxIDI3LjU3MzEgNjk0LjE0IDI2Ljc5NDkgNjk0LjA1MSAyNS40NjY2SDY5OS44OTRDNzAwLjAxNSAyMi42OTM5IDY5OC4wNjEgMjEuMTIyOSA2OTUuNjk0IDIxLjEyMjkiIGZpbGw9IiMwMDlFNEQiLz4NCjxwYXRoIGQ9Ik03MDMuNzIxIDIzLjQzNjhINzAzLjc1OEM3MDQuNTE3IDIxLjg1NjIgNzA1LjM2NiAyMS4xMTUgNzA2LjM1MiAyMS4xMTVDNzA2Ljg2MiAyMS4xMTUgNzA3LjMwMyAyMS4yOTY0IDcwOC4wNDQgMjEuODA3Nkw3MDcuMzQxIDIzLjkxMzNDNzA2LjY3IDIzLjUxODYgNzA2LjIyOSAyMy4zNTM1IDcwNS44MjMgMjMuMzUzNUM3MDQuODg2IDIzLjM1MzUgNzA0LjI4NiAyNC4xNzc1IDcwMy43MjEgMjUuNTcwNFYyOC44NDY2SDcwMS4xNjJWMjEuMjU0MUg3MDMuNzIxVjIzLjQzNjhaTTY4MC43NzUgMTguMDY3NEM2ODEuMDE1IDE4LjY1NzUgNjgwLjU4MyAxOS40ODA1IDY3OS44MTQgMTkuOTA0QzY3OS4wNDEgMjAuMzI3MSA2NzguMjI0IDIwLjE5MjggNjc3Ljk4NiAxOS42MDI3QzY3Ny43NDMgMTkuMDExNyA2NzguMTczIDE4LjE4NzcgNjc4Ljk0NSAxNy43NjY2QzY3OS43MTYgMTcuMzQxMSA2ODAuNTMzIDE3LjQ3NTkgNjgwLjc3NSAxOC4wNjc0WiIgZmlsbD0iIzAwOUU0RCIvPg0KPHBhdGggZD0iTTY1OC4yMiAyNC4wMjMxQzY1OC4yMiAyMS45NjUxIDY1Ni43MTkgMjEuMTIyNiA2NTUuMjM5IDIxLjEyMjZDNjU0LjIzMiAyMS4xMjI2IDY1My40MDQgMjEuNTE4NCA2NTIuNjY0IDIyLjM5MjFINjUyLjYyOVYxNy42MzkySDY1MC4wNzFWMjguODM1M0g2NTIuNjI5VjI0LjAyMzFDNjUzLjIyOCAyMy4yMTYxIDY1My43MzggMjIuODcxMSA2NTQuMzM4IDIyLjg3MTFDNjU1LjEzNCAyMi44NzExIDY1NS42NjIgMjMuMzk4NiA2NTUuNjYyIDI0LjUzMjlWMjcuMjAwOEM2NTYuNTIgMjYuNzg5NiA2NTcuMzkzIDI2LjUzNzQgNjU4LjIyIDI2LjQ0MzhWMjQuMDIzMVpNNjY0LjYzNiAyMS4xMTk5QzY2My41OTQgMjEuMTE5OSA2NjIuNzk5IDIxLjQ4MTEgNjYxLjk4NCAyMi4zNDkzVjIxLjI2MjRINjU5LjQyOFYyNi40MjM0QzY2MC4zMTMgMjYuNTA1OCA2NjEuNDQzIDI2Ljg4NDcgNjYxLjk4NCAyNy41MTA0VjIzLjk2MzRDNjYyLjY1NyAyMy4wMjMyIDY2My4xMzQgMjIuNzA5NyA2NjMuNzcgMjIuNzA5N0M2NjQuNDk0IDIyLjcwOTcgNjY1LjA0NSAyMy4xNTU2IDY2NS4wNDUgMjQuMjI2NFYyOC44MzcySDY2Ny42MDJWMjQuMDI4OUM2NjcuNjAyIDIxLjc5MjYgNjY1LjkwOCAyMS4xMTk5IDY2NC42MzYgMjEuMTE5OVYyMS4xMTk5Wk02NjkuMDE1IDMxLjAxODFINjY2LjA0M1YzMi45ODY0SDY2OC45MDlWMzMuODMxMkg2NjYuMDQzVjM1Ljg2MTlINjY5LjEwM1YzNi43MDU1SDY2NS4wNDZWMzAuMTc1Mkg2NjkuMDE1TDY2OS4wMTUgMzEuMDE4MVpNNjcxLjQ0MiAzNi43MDkzSDY3Mi4zNTJWMzAuMTczM0g2NzEuNDQyVjM2LjcwOTNaTTY3Ni44NTkgMzMuMDQ4NEM2NzcuNTA0IDMzLjA0ODQgNjc3LjkwNCAzMy40NjMxIDY3Ny45MzUgMzQuMTE0Mkg2NzUuNjE2QzY3NS43NDIgMzMuNDM0MiA2NzYuMTYxIDMzLjA0ODQgNjc2Ljg1OSAzMy4wNDg0Wk02NzUuNiAzNC42ODFINjc4Ljg0MkM2NzguODQyIDMzLjA4NjkgNjc4LjA2MiAzMi4zMTggNjc2LjgzOCAzMi4zMThDNjc1LjU2OSAzMi4zMTggNjc0LjY4OCAzMy4xOTI0IDY3NC42ODggMzQuNDk2OUM2NzQuNjg4IDM1LjY4OSA2NzUuNDg0IDM2Ljc4OTggNjc2LjkxNyAzNi43ODk4QzY3Ny42OTggMzYuNzg5OCA2NzguMjAzIDM2LjYyODEgNjc4Ljc2MyAzNi4yODJWMzUuNDU2QzY3OC4yMjIgMzUuNzg1NiA2NzcuNjk4IDM1Ljk3NTggNjc3LjE0NyAzNS45NzU4QzY3Ni4yNjUgMzUuOTc1OCA2NzUuNzQyIDM1LjUzNSA2NzUuNiAzNC42ODA2VjM0LjY4MVpNNjg0Ljc4NiAzMy41MzA5QzY4NC4yNjMgMzMuMTk2NiA2ODMuOTE0IDMzLjA5ODUgNjgzLjUxNSAzMy4wOTg1QzY4Mi42ODIgMzMuMDk4NSA2ODIuMTA1IDMzLjY5NDUgNjgyLjEwNSAzNC41NjdDNjgyLjEwNSAzNS40NTYgNjgyLjcxOSAzNS45OTE2IDY4My42NjggMzUuOTkxNkM2ODQuMDU4IDM1Ljk5MTYgNjg0LjQzIDM1Ljg5NzMgNjg0Ljg4OCAzNS43MDU5VjM2LjU0MjZDNjg0LjU4MiAzNi42Nzc0IDY4My45OTcgMzYuNzg5OCA2ODMuNTE1IDM2Ljc4OThDNjgyLjEzNiAzNi43ODk4IDY4MS4xOCAzNS45MDYyIDY4MS4xOCAzNC42NDMyQzY4MS4xOCAzMy4yMTc4IDY4Mi4wNTQgMzIuMzE4IDY4My40NTMgMzIuMzE4QzY4My45ODcgMzIuMzE4IDY4NC4zNDYgMzIuNDMzOSA2ODQuNzg3IDMyLjYxNDVMNjg0Ljc4NiAzMy41MzA5Wk02ODguOTM0IDMyLjQwMDRINjkwLjM5NVYzMy4xNjUxSDY4OC45MzRWMzUuMzc1MkM2ODguOTM0IDM1Ljg4MTEgNjg5LjMyNyAzNi4wMjc0IDY4OS41OTMgMzYuMDI3NEM2ODkuOTIyIDM2LjAyNzQgNjkwLjI2MiAzNS45MiA2OTAuNjMgMzUuNzA3OVYzNi41MDM3QzY5MC4zMSAzNi42Njc4IDY4OS44MiAzNi43ODk4IDY4OS41MTkgMzYuNzg5OEM2ODguNTI4IDM2Ljc4OTggNjg4LjAyNyAzNi4yMTYxIDY4OC4wMjcgMzUuNDM5MVYzMy4xNjUxSDY4Ny4yMjRWMzMuMDcwM0w2ODguOTM0IDMxLjUxMDJWMzIuNDAwNFpNNjkzLjg3NiAzMi40MDA0VjMzLjM5NjlINjkzLjg5NUM2OTQuMzU5IDMyLjYzNDUgNjk0LjggMzIuMzE4IDY5NS4yMyAzMi4zMThDNjk1LjYwMSAzMi4zMTggNjk1Ljk0NyAzMi40ODAxIDY5Ni4zMjkgMzIuODE2Nkw2OTUuODQ3IDMzLjU2NDRDNjk1LjU3IDMzLjMwOTEgNjk1LjIxMSAzMy4xMzMxIDY5NC45OTUgMzMuMTMzMUM2OTQuMzY4IDMzLjEzMzEgNjkzLjg3NiAzMy43MjY4IDY5My44NzYgMzQuNDYyNlYzNi43MDkzSDY5Mi45NjdWMzIuNDAwNEg2OTMuODc2Wk03MDUuNjU3IDMzLjUzMDlDNzA1LjEzMSAzMy4xOTY2IDcwNC43ODIgMzMuMDk4NSA3MDQuMzgxIDMzLjA5ODVDNzAzLjU0OSAzMy4wOTg1IDcwMi45NzcgMzMuNjk0NSA3MDIuOTc3IDM0LjU2N0M3MDIuOTc3IDM1LjQ1NiA3MDMuNTkyIDM1Ljk5MTYgNzA0LjUzNSAzNS45OTE2QzcwNC45MjUgMzUuOTkxNiA3MDUuMjk1IDM1Ljg5NzMgNzA1Ljc2IDM1LjcwNTlWMzYuNTQyNkM3MDUuNDQ3IDM2LjY3NzQgNzA0Ljg2MiAzNi43ODk4IDcwNC4zOCAzNi43ODk4QzcwMy4wMDQgMzYuNzg5OCA3MDIuMDQ0IDM1LjkwNjIgNzAyLjA0NCAzNC42NDMyQzcwMi4wNDQgMzMuMjE3OCA3MDIuOTIyIDMyLjMxOCA3MDQuMzIgMzIuMzE4QzcwNC44NTUgMzIuMzE4IDcwNS4yMTIgMzIuNDMzOSA3MDUuNjU3IDMyLjYxNDVMNzA1LjY1NyAzMy41MzA5Wk02OTguNzQyIDM2LjcwOTNINjk5LjY1MlYzMi40MDA4SDY5OC43NDJWMzYuNzA5M1oiIGZpbGw9IiMwMDlFNEQiLz4NCjxwYXRoIGQ9Ik02OTkuNjg0IDMwLjg1MjVDNjk5Ljc3MyAzMS4wNjA0IDY5OS42MTggMzEuMzU0NCA2OTkuMzQ0IDMxLjUwNDFDNjk5LjA2OCAzMS42NTQzIDY5OC43NzYgMzEuNjA2MiA2OTguNjkzIDMxLjM5NzhDNjk4LjYxIDMxLjE4NzQgNjk4Ljc2MSAzMC44OTU4IDY5OS4wMzggMzAuNzQ1NkM2OTkuMzExIDMwLjU5MzUgNjk5LjYwMSAzMC42NDIxIDY5OS42ODQgMzAuODUyNVYzMC44NTI1Wk02NTguOTQgMzEuMjAwOUM2NTguNzc5IDMxLjIwMDkgNjU4LjcxMSAzMS4yMjU1IDY1OC42NDYgMzEuMjkzOEM2NTguNjIgMzEuMzIwMyA2NTguNjEgMzEuMzQ3MiA2NTguNiAzMS40MDExTDY1Ny43ODQgMzQuMjg3QzY1Ny41OTMgMzUuMjk5MiA2NTYuMjU5IDM2LjMwOTkgNjU0LjUyMSAzNi4zMDk5SDY1Mi4xMDRMNjUyLjUyMyAzNC44MjdINjU0LjA3NkM2NTQuMjM0IDM0LjgyNyA2NTQuMzU4IDM0Ljc3MjEgNjU0LjQ2MiAzNC42NjQzQzY1NC41IDM0LjYyMjUgNjU0LjU1IDM0LjU1NyA2NTQuNTU2IDM0LjQ4OTZMNjU1LjIwMSAzMS45NjgxQzY1NS4zOTEgMzAuOTU1NSA2NTYuNTM4IDI5LjgzNjkgNjU4LjI3NiAyOS44MzY5SDY2MC43NTFMNjYwLjQzNSAzMS4yMDA5SDY1OC45NFpNNjU5LjQ5NyAzMi45NTk2TDY1OS43NzMgMzIuMDI1OUg2NjIuMjg4QzY2Mi41OTggMzAuNjcyIDY2Mi4zNTQgMjkuNDE3NyA2NjEuNDczIDI4LjU5NjFDNjU5LjY4OSAyNi45MzMyIDY1NS45NTcgMjcuNDk4MyA2NTMuMTc3IDI5Ljk3NzlDNjUyLjc0MyAzMC4zNjMgNjUyLjM3NiAzMC43NzkzIDY1Mi4wNDIgMzEuMjA0OEg2NTMuNTU2TDY1My4yMDQgMzIuMTQwNEg2NTEuMzk1QzY1MS4yMjIgMzIuNDM1NCA2NTEuMDYgMzIuNzI4MSA2NTAuOTM2IDMzLjAyNUg2NTMuMDgxTDY1Mi43MzcgMzMuOTYwN0g2NTAuNjNDNjUwLjI2OSAzNS4zOTAxIDY1MC40OTkgMzYuNzIzMyA2NTEuNDA2IDM3LjU2OTlDNjUzLjE2NyAzOS4yMTE2IDY1Ni44ODggMzguNjM0NiA2NTkuNjY3IDM2LjE1NTRDNjYwLjE1MyAzNS43MjQyIDY2MC41NTUgMzUuMjU4NyA2NjAuOTE4IDM0Ljc4MDhINjU4Ljk3M0w2NTkuMjY5IDMzLjg0NzFINjYxLjU0M0M2NjEuNzEgMzMuNTUwMSA2NjEuODYzIDMzLjI1NjUgNjYxLjk4MyAzMi45NTk2SDY1OS40OTdaIiBmaWxsPSIjMDA5RTREIi8+DQo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNThfMTExKSI+DQo8cGF0aCBkPSJNNzc1LjA2OCA0MS4yMjc0Qzc2Ni4yODUgNDIuMDQ2MyA3NTcuMTMxIDQwLjc1NjQgNzU1Ljg0OCAzMy44MTlDNzU1LjIyMSAzMC4zOTkgNzU2Ljc2NSAyNi43NzI1IDc1OC44MSAyNC41MTg0VjIzLjMxNDhDNzU1LjEyNiAyNi41OCA3NTMuMTMgMzAuNzExNSA3NTQuMjggMzUuNTkyQzc1NS43NDggNDEuODUxOCA3NjMuNjAzIDQ1LjM5NjcgNzc1LjU5NSA0NC4yMTk1Qzc4MC4zNDIgNDMuNzU0NSA3ODYuNTUgNDIuMjEyIDc5MC44NjkgMzkuODE0NFYzNi40MTA5Qzc4Ni45NDkgMzguNzcxMyA3ODAuNDY4IDQwLjcyMTEgNzc1LjA2OCA0MS4yMjc0VjQxLjIyNzRaTTc5OC4yMDUgMjMuMjMzNUM3OTYuMTIyIDEyLjk1MzMgNzc2LjM3MyAxMi4zMDE2IDc2My42NDMgMjAuMTMzOFYyMC45OTg5Qzc3Ni4zNTkgMTQuMzkxNSA3OTQuMzk1IDE0LjQzMTcgNzk2LjAzNyAyMy45MDE2Qzc5Ni41ODkgMjcuMDM0MiA3OTQuODQzIDMwLjI5NzggNzkxLjcyMyAzMi4xNzdWMzQuNjM0MkM3OTUuNDc2IDMzLjI0MzIgNzk5LjMyNCAyOC43NDQyIDc5OC4yMDUgMjMuMjMzNVYyMy4yMzM1WiIgZmlsbD0iIzBFN0RDMiIvPg0KPHBhdGggZD0iTTc5MC4xNTkgMjEuNzM2OEg3ODcuODU2VjMyLjEwM0M3ODcuODU2IDMzLjMxNzkgNzg4LjQzNyAzNC4zNzQ0IDc5MC4xNTkgMzQuNTQzMlYyMS43MzY4Wk03NjIuNzM5IDI1LjUyMTdINzYwLjQzMkw3NjAuNDMxIDMyLjI5NDNDNzYwLjQzMSAzMy41MTM0IDc2MS4wMTMgMzQuNTY4OCA3NjIuNzM5IDM0LjczNDRWMjUuNTIxN1YyNS41MjE3Wk03NjAuNDMyIDIyLjA1MjFINzYyLjczMlYyNC4yNTg0SDc2MC40MzJWMjIuMDUyMVpNNzc2LjUzIDM0LjYyNzJDNzc0LjY2NiAzNC42MjcyIDc3My44NzcgMzMuMzE3NyA3NzMuODc3IDMyLjAyOFYyMy4wMzU1SDc3Ni4xNlYyNS41MjE3SDc3Ny44NzlWMjcuMzg1M0g3NzYuMTZWMzEuODg1NEM3NzYuMTYgMzIuNDExMyA3NzYuNDA3IDMyLjcwNDQgNzc2Ljk1IDMyLjcwNDRINzc3Ljg3OVYzNC42MjcyTDc3Ni41MyAzNC42MjcyVjM0LjYyNzJaTTc4MC43MzEgMzAuNzk2MUM3ODAuNzMxIDMxLjk3NjggNzgxLjQ2MSAzMi44NDQ2IDc4Mi43NTQgMzIuODQ0NkM3ODMuNzY2IDMyLjg0NDYgNzg0LjI2NiAzMi41NjA1IDc4NC44NSAzMS45NzY4TDc4Ni4yNjEgMzMuMzM0OUM3ODUuMzU3IDM0LjIzNzkgNzg0LjQwOSAzNC43ODcgNzgyLjczNyAzNC43ODdDNzgwLjU1MiAzNC43ODcgNzc4LjQ1OSAzMy41ODE5IDc3OC40NTkgMzAuMDY4NkM3NzguNDU5IDI3LjA2NTEgNzgwLjI4OCAyNS4zNjczIDc4Mi42ODYgMjUuMzY3M0M3ODUuMTI0IDI1LjM2NzMgNzg2LjUyNSAyNy4zNTQ5IDc4Ni41MjUgMjkuOTYzOVYzMC43OTYzSDc4MC43MzFWMzAuNzk2MVpNNzgyLjU4NiAyNy4yNzU2Qzc4MS44MDUgMjcuMjc1NiA3ODEuMjA0IDI3LjY4MjMgNzgwLjk1IDI4LjIzMDlDNzgwLjgwMiAyOC41NjA3IDc4MC43NDcgMjguODE3NyA3ODAuNzMxIDI5LjIyMjlINzg0LjI0OUM3ODQuMjA0IDI4LjIzMDkgNzgzLjc1OSAyNy4yNzU2IDc4Mi41ODYgMjcuMjc1NlpNNzY4LjkzOSAyNy4zODUzQzc2OS42MDggMjcuMzg1MyA3NjkuODg3IDI3LjcxOTggNzY5Ljg4NyAyOC4yNjI2VjM0LjY0MDZINzcyLjE3VjI4LjI0OTJDNzcyLjE3IDI2Ljk1NDIgNzcxLjQ4NyAyNS41MjQxIDc2OS40ODIgMjUuNTI0MUw3NjQuNzY2IDI1LjUyMTdWMzQuNjQwNkg3NjcuMDVWMjcuMzg1M0g3NjguOTM5VjI3LjM4NTNaTTc5Mi42MzcgMjMuNTg5MUM3OTIuMTI5IDIzLjU4OTEgNzkxLjcyNCAyMy4xNzU0IDc5MS43MjQgMjIuNjYyOUM3OTEuNzI0IDIyLjE1MjkgNzkyLjEyOSAyMS43MzY4IDc5Mi42MzcgMjEuNzM2OEM3OTMuMTQyIDIxLjczNjggNzkzLjU1NiAyMi4xNTI5IDc5My41NTYgMjIuNjYyOUM3OTMuNTU2IDIzLjE3NTQgNzkzLjE0MiAyMy41ODkxIDc5Mi42MzcgMjMuNTg5MVpNNzkyLjYzNyAyMS44OTEyQzc5Mi4yMTggMjEuODkxMiA3OTEuODgyIDIyLjI0MDcgNzkxLjg4MiAyMi42NjI5Qzc5MS44ODIgMjMuMDg3NiA3OTIuMjE4IDIzLjQzMDkgNzkyLjYzNyAyMy40MzA5Qzc5My4wNTUgMjMuNDMwOSA3OTMuNDAyIDIzLjA4NzYgNzkzLjQwMiAyMi42NjI5Qzc5My40MDIgMjIuMjQwNyA3OTMuMDU1IDIxLjg5MTIgNzkyLjYzNyAyMS44OTEyWk03OTMuMDQzIDIzLjIxOEg3OTIuODcyQzc5Mi44NjQgMjMuMjE3OSA3OTIuODU3IDIzLjIxNTcgNzkyLjg1MSAyMy4yMTE2Qzc5Mi44NDUgMjMuMjA3NSA3OTIuODQgMjMuMjAxNyA3OTIuODM3IDIzLjE5NDlMNzkyLjYwNSAyMi43OTdDNzkyLjU5OCAyMi43ODg1IDc5Mi41NzkgMjIuNzc4OCA3OTIuNTczIDIyLjc3ODhINzkyLjQ2N1YyMy4xNzU0Qzc5Mi40NjcgMjMuMTk1IDc5Mi40NTMgMjMuMjE4MSA3OTIuNDI4IDIzLjIxODFINzkyLjI3NEM3OTIuMjUxIDIzLjIxODEgNzkyLjIzNSAyMy4xOTUgNzkyLjIzNSAyMy4xNzU0VjIyLjE3NDlDNzkyLjIzNSAyMi4xMTY0IDc5Mi4yNTQgMjIuMDkyNCA3OTIuMzA1IDIyLjA4NUM3OTIuMzYxIDIyLjA3OSA3OTIuNTA1IDIyLjA3MTYgNzkyLjU4NiAyMi4wNzE2Qzc5Mi44NzIgMjIuMDcxNiA3OTMuMDM5IDIyLjE1NjYgNzkzLjAzOSAyMi40MjQ0VjIyLjQ0NEM3OTMuMDM5IDIyLjYwOTQgNzkyLjk1OSAyMi42OTk1IDc5Mi44MzMgMjIuNzM5N0w3OTMuMDc0IDIzLjE1NDdDNzkzLjA3OCAyMy4xNjQgNzkzLjA4IDIzLjE3MzkgNzkzLjA4IDIzLjE4NEM3OTMuMDggMjMuMTk5NyA3OTMuMDcyIDIzLjIxOCA3OTMuMDQzIDIzLjIxOFYyMy4yMThaTTc5Mi44MjEgMjIuNDI0NEM3OTIuODIxIDIyLjMxMjcgNzkyLjc1MiAyMi4yNzczIDc5Mi42MDUgMjIuMjc3M0g3OTIuNDU5VjIyLjU5NDdDNzkyLjQ4MiAyMi41OTQ3IDc5Mi41ODYgMjIuNTk5NiA3OTIuNjA1IDIyLjU5OTZDNzkyLjc1MiAyMi41OTk2IDc5Mi44MjEgMjIuNTUgNzkyLjgyMSAyMi40NDRWMjIuNDI0NFoiIGZpbGw9IiMwRTdEQzIiLz4NCjwvZz4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV81OF8xMTEpIj4NCjxwYXRoIGQ9Ik01MzMuNzczIDIwLjk5MTFDNTI5LjI2MyAyMC45OTExIDUyNS41OTkgMjQuNjU0NyA1MjUuNTk5IDI5LjE2NDRDNTI1LjU5OSAzMy42NzQxIDUyOS4yNjMgMzcuMzM3NyA1MzMuNzczIDM3LjMzNzdDNTM4LjI4MiAzNy4zMzc3IDU0MS45NDYgMzMuNjc0MSA1NDEuOTQ2IDI5LjE2NDRDNTQxLjk0NiAyNC42NTQ3IDUzOC4yODIgMjAuOTkxMSA1MzMuNzczIDIwLjk5MTFaTTUzMy43NzMgMzYuNTE4NkM1MjkuNzEzIDM2LjUxODYgNTI2LjQxOSAzMy4yMTUgNTI2LjQxOSAyOS4xNjQ0QzUyNi40MTkgMjUuMTEzNyA1MjkuNzEzIDIxLjgxMDIgNTMzLjc3MyAyMS44MTAyQzUzNy44MzIgMjEuODEwMiA1NDEuMTI3IDI1LjExMzcgNTQxLjEyNyAyOS4xNjQ0QzU0MS4xMjcgMzMuMjE1IDUzNy44MzIgMzYuNTE4NiA1MzMuNzczIDM2LjUxODZaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTUzNi42OSAyMy45MjUyQzUzNi42NjMgMjMuOTA3MiA1MzYuNjI3IDIzLjg5ODIgNTM2LjU5MSAyMy44OTgyQzUzNi40ODMgMjMuODk4MiA1MzYuNDAyIDIzLjk3OTIgNTM2LjQwMiAyNC4wODczVjI2LjY0MzdDNTM2LjQwMiAyNi43MzM3IDUzNi4zMyAyNi44MDU3IDUzNi4yNCAyNi44MDU3SDUzMS4yOUM1MzEuMiAyNi44MDU3IDUzMS4xMzcgMjYuNzMzNyA1MzEuMTI4IDI2LjY0MzdWMjQuMDg3M0M1MzEuMTI4IDI0LjA1MTMgNTMxLjExOSAyNC4wMjQyIDUzMS4xMDEgMjMuOTg4MkM1MzEuMDQ3IDIzLjg5ODIgNTMwLjkzIDIzLjg3MTIgNTMwLjgzOSAyMy45MjUyQzUyOS4wMTIgMjUuMDUwNCA1MjcuOTA1IDI3LjAwMzcgNTI3LjkwNSAyOS4xNjQxQzUyNy45MDUgMzEuMzI0NCA1MjkuMDEyIDMzLjI3NzcgNTMwLjg1NyAzNC40MDI5QzUzMC44ODUgMzQuNDIwOSA1MzAuOTIxIDM0LjQyOTkgNTMwLjk1NyAzNC40Mjk5QzUzMS4wNjUgMzQuNDI5OSA1MzEuMTQ2IDM0LjM0ODkgNTMxLjE0NiAzNC4yNDA5VjMxLjY4NDVDNTMxLjE0NiAzMS41OTQ0IDUzMS4yMTggMzEuNTMxNCA1MzEuMzA4IDMxLjUyMjRINTM2LjI1OEM1MzYuMzQ4IDMxLjUyMjQgNTM2LjQyIDMxLjU5NDQgNTM2LjQyIDMxLjY4NDVWMzQuMjQwOUM1MzYuNDIgMzQuMjc2OSA1MzYuNDI5IDM0LjMwMzkgNTM2LjQ0NyAzNC4zMzk5QzUzNi41MDEgMzQuNDI5OSA1MzYuNjE4IDM0LjQ1NjkgNTM2LjcwOCAzNC40MDI5QzUzOC41NTQgMzMuMjc3NyA1MzkuNjYxIDMxLjMyNDQgNTM5LjY2MSAyOS4xNjQxQzUzOS42NjEgMjcuMDAzNyA1MzguNTM2IDI1LjA1MDQgNTM2LjY5IDIzLjkyNTJWMjMuOTI1MlpNNTMwLjE5MSAzMi4zNjg2TDUzMC4yMTggMzIuNjc0Nkw1MzAuMDIgMzIuNDMxNkM1MjguNDk5IDMwLjUxNDMgNTI4LjQ5OSAyNy44MDQ4IDUzMC4wMiAyNS44ODc1TDUzMC4xOTEgMjUuNjcxNUw1MzAuMjE4IDI1LjY0NDVMNTMwLjE5MSAyNS45NTk2QzUzMC4xNjQgMjYuMjExNiA1MzAuMTU1IDI2LjQ3MjYgNTMwLjE1NSAyNi43MzM3VjMxLjU4NTRDNTMwLjE1NSAzMS44NDY1IDUzMC4xNzMgMzIuMTA3NSA1MzAuMTkxIDMyLjM2ODZaTTUzNi40MDIgMzAuMzg4M0M1MzYuNDAyIDMwLjQ3ODMgNTM2LjMzIDMwLjU1MDMgNTM2LjI0IDMwLjU1MDNINTMxLjI5QzUzMS4yIDMwLjU1MDMgNTMxLjEzNyAzMC40NzgzIDUzMS4xMjggMzAuMzg4M1YyNy45Mzk5QzUzMS4xMjggMjcuODQ5OSA1MzEuMiAyNy43Nzc4IDUzMS4yOSAyNy43Nzc4SDUzNi4yNEM1MzYuMzMgMjcuNzc3OCA1MzYuNDAyIDI3Ljg0OTkgNTM2LjQwMiAyNy45Mzk5VjMwLjM4ODNaTTUzNy41MTkgMzIuNDMxNkw1MzcuMzIxIDMyLjY3NDZMNTM3LjM0OCAzMi4zNjg2QzUzNy4zNzUgMzIuMTE2NSA1MzcuMzg0IDMxLjg1NTUgNTM3LjM4NCAzMS41OTQ0VjI2LjczMzdDNTM3LjM4NCAyNi40NzI2IDUzNy4zNzUgMjYuMjExNiA1MzcuMzQ4IDI1Ljk1OTZMNTM3LjMzOSAyNS44MjQ1TDUzNy4zMyAyNS42ODA1VjI1LjY0NDVMNTM3LjUxOSAyNS44ODc1QzUzOC4yNTcgMjYuODA1NyA1MzguNjYyIDI3Ljk3NTkgNTM4LjY2MiAyOS4xNTUxQzUzOC42NjIgMzAuMzM0MiA1MzguMjU3IDMxLjUxMzQgNTM3LjUxOSAzMi40MzE2VjMyLjQzMTZaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTU1NC4yNzYgMjkuMDIwMkM1NTQuMjMxIDI5LjAwMjIgNTU0LjE3NyAyOC45ODQyIDU1NC4xNzcgMjguOTMwMkM1NTQuMTc3IDI4Ljg5NDIgNTU0LjE5NSAyOC44NjcyIDU1NC4yMzEgMjguODQ5MkM1NTQuMjk0IDI4LjgyMjIgNTU1Ljg1MSAyOC4yNjQxIDU1NS44NTEgMjYuNDI3OEM1NTUuODUxIDI0LjM4NDUgNTU0LjQ3NCAyMy4xNjkzIDU1Mi4xNTIgMjMuMTY5M0g1NDYuNTI2VjM1LjE3NzJINTUyLjY2NUM1NTQuNDU2IDM1LjE3NzIgNTU2LjM4MiAzMy45MDggNTU2LjM4MiAzMS44NjQ2QzU1Ni4zODIgMjkuOTExMyA1NTQuOTA2IDI5LjIyNzIgNTU0LjI3NiAyOS4wMjAyVjI5LjAyMDJaTTU0OS4zNjEgMjUuNjI2N0M1NDkuMzYxIDI1LjU4MTcgNTQ5LjM5NyAyNS41NDU2IDU0OS40NDIgMjUuNTQ1Nkg1NTEuNjc1QzU1Mi40MTMgMjUuNTQ1NiA1NTIuOTE3IDI2LjA0MDcgNTUyLjkxNyAyNi43Nzg4QzU1Mi45MTcgMjcuMzU0OSA1NTIuNDY3IDI3Ljk3NiA1NTEuNjIxIDI3Ljk3Nkg1NDkuNDQyQzU0OS4zOTcgMjcuOTc2IDU0OS4zNjEgMjcuOTQgNTQ5LjM2MSAyNy44OTVWMjUuNjI2N1pNNTUxLjY3NSAzMi44MDk4SDU0OS40NDJDNTQ5LjM5NyAzMi44MDk4IDU0OS4zNjEgMzIuNzczOCA1NDkuMzYxIDMyLjcyODhWMzAuMzM0NEM1NDkuMzYxIDMwLjI4OTQgNTQ5LjM5NyAzMC4yNTM0IDU0OS40NDIgMzAuMjUzNEg1NTEuNjIxQzU1Mi42OTIgMzAuMjUzNCA1NTMuMzA0IDMwLjcxMjUgNTUzLjMwNCAzMS41MjI2QzU1My4zMDQgMzIuMzU5NyA1NTIuNzM3IDMyLjgwOTggNTUxLjY3NSAzMi44MDk4VjMyLjgwOThaTTU3NS4zODQgMjcuOTQ5TDU3NC45NTIgMjcuODU5QzU3My45OCAyNy42NTIgNTczLjAzNSAyNy4zOTA5IDU3My4wMzUgMjYuNTUzOEM1NzMuMDM1IDI1LjcxNjcgNTczLjgxOCAyNS4zMzg2IDU3NC41OTIgMjUuMzM4NkM1NzUuNTAxIDI1LjMzODYgNTc2LjQwMSAyNS43NDM3IDU3Ny4wODYgMjYuNDQ1OEw1NzguODY4IDI0LjY4MTVDNTc4LjEwMyAyMy44MzU0IDU3Ni43NDQgMjIuODYzMiA1NzQuNTQ3IDIyLjg2MzJDNTcxLjkwMSAyMi44NjMyIDU3MC4xMTggMjQuMzY2NSA1NzAuMTE4IDI2LjYwNzhDNTcwLjExOCAyOC45NzUyIDU3MS45ODIgMjkuODY2MyA1NzMuNTQ4IDMwLjE5OTRMNTczLjk3MSAzMC4yODk0QzU3NS40OTIgMzAuNjEzNSA1NzYuMjEyIDMwLjg1NjUgNTc2LjIxMiAzMS43MjA2QzU3Ni4yMTIgMzIuNDk0NyA1NzUuNTE5IDMzLjAwNzggNTc0LjQ5MyAzMy4wMDc4QzU3My4yODcgMzMuMDA3OCA1NzIuMjE2IDMyLjQ3NjcgNTcxLjQwNiAzMS40Nzc2TDU2OS41NzggMzMuMjY4OUM1NzAuNTUxIDM0LjQyMTEgNTcxLjgzOCAzNS40NjUyIDU3NC41MjkgMzUuNDY1MkM1NzYuODI1IDM1LjQ2NTIgNTc5LjE1NiAzNC4xMzMgNTc5LjE1NiAzMS41NzY2QzU3OS4xNDcgMjguOTU3MiA1NzcuMzY1IDI4LjM2MzEgNTc1LjM4NCAyNy45NDlWMjcuOTQ5Wk01OTkuMTAzIDIzLjE2OTNWMjcuNTYyQzU5OS4xMDMgMjcuNjA3IDU5OS4wNjcgMjcuNjQzIDU5OS4wMjIgMjcuNjQzSDU5NS4zMzFDNTk1LjI4NiAyNy42NDMgNTk1LjI1IDI3LjYwNyA1OTUuMjUgMjcuNTYyVjIzLjE2OTNINTkyLjIyNlYzNS4xNzcySDU5NS4yNVYzMC40NjA0QzU5NS4yNSAzMC40MTU0IDU5NS4yODYgMzAuMzc5NCA1OTUuMzMxIDMwLjM3OTRINTk5LjAyMkM1OTkuMDY3IDMwLjM3OTQgNTk5LjEwMyAzMC40MTU0IDU5OS4xMDMgMzAuNDYwNFYzNS4xNzcySDYwMi4xNDZWMjMuMTY5M0g1OTkuMTAzWk01ODYuMTQxIDMyLjcxOThDNTg0Ljc4MiAzMi43MTk4IDU4My4zMTUgMzEuNTg1NiA1ODMuMzE1IDI5LjA5MjJDNTgzLjMxNSAyNi44MTQ4IDU4NC42OTIgMjUuNjI2NyA1ODYuMDUxIDI1LjYyNjdDNTg3LjA0MSAyNS42MjY3IDU4Ny43MzQgMjYuMDQwNyA1ODguMjgzIDI2Ljk1ODlMNTkwLjYwNiAyNS40MTk2QzU4OS40MTggMjMuNjczMyA1ODguMDA0IDIyLjg4MTIgNTg2LjAzMyAyMi44ODEyQzU4Mi4xNzEgMjIuODgxMiA1ODAuNDQzIDI2LjAwNDcgNTgwLjQ0MyAyOS4wOTIyQzU4MC40NDMgMzIuODQ1OCA1ODIuNzI5IDM1LjQ2NTIgNTg1Ljk5NyAzNS40NjUyQzU4OC40MjcgMzUuNDY1MiA1ODkuNTM1IDM0LjU3NDEgNTkwLjY5NiAzMi45MjY4TDU4OC4zNTUgMzEuMzUxNkM1ODcuODMzIDMyLjE5NzcgNTg3LjI2NiAzMi43MTk4IDU4Ni4xNDEgMzIuNzE5OFpNNTYzLjE3OCAyMi44NjMyQzU1OS44NzUgMjIuODYzMiA1NTcuNjYxIDI1LjM5MjYgNTU3LjY2MSAyOS4xNjQyQzU1Ny42NjEgMzIuOTM1OCA1NTkuODc1IDM1LjQ2NTIgNTYzLjE3OCAzNS40NjUyQzU2Ni40ODIgMzUuNDY1MiA1NjguNjk2IDMyLjkzNTggNTY4LjY5NiAyOS4xNjQyQzU2OC42OTYgMjUuMzkyNiA1NjYuNDgyIDIyLjg2MzIgNTYzLjE3OCAyMi44NjMyVjIyLjg2MzJaTTU2My4xNzggMzIuNzE5OEM1NjEuNTU4IDMyLjcxOTggNTYwLjUxNCAzMS4zMjQ2IDU2MC41MTQgMjkuMTY0MkM1NjAuNTE0IDI3LjAxMjkgNTYxLjU1OCAyNS42MjY3IDU2My4xNzggMjUuNjI2N0M1NjQuODA4IDI1LjYyNjcgNTY1Ljg2MSAyNy4wMTI5IDU2NS44NjEgMjkuMTY0MkM1NjUuODYxIDMxLjMyNDYgNTY0LjgwOCAzMi43MTk4IDU2My4xNzggMzIuNzE5OFoiIGZpbGw9IiNGODAwMDAiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQ2LjM0NCAyMi4xODExQzE0Ny41OTUgMjIuMjg1NCAxNDguODQ1IDIxLjU1NTMgMTQ5LjYyNyAyMC42Mjk4QzE1MC4zOTUgMTkuNjc4MSAxNTAuOTAzIDE4LjQwMDUgMTUwLjc3MyAxNy4wOTY5QzE0OS42NjYgMTcuMTQ5MSAxNDguMjk4IDE3LjgyNjkgMTQ3LjUxNyAxOC43Nzg2QzE0Ni44IDE5LjU5OTkgMTQ2LjE4OCAyMC45Mjk2IDE0Ni4zNDQgMjIuMTgxMVpNMTQ3Ljg0MSAyMy4wNzk3QzE0OC42NTMgMjIuNzYwNiAxNDkuNjU4IDIyLjM2NTYgMTUwLjc2IDIyLjQyOTFDMTUxLjQ2MyAyMi40ODEyIDE1My40OTUgMjIuNjg5OCAxNTQuNzk4IDI0LjYxOTJDMTU0Ljc5MiAyNC42MjM3IDE1NC43NzggMjQuNjMyMyAxNTQuNzU5IDI0LjY0NUMxNTQuNDM2IDI0Ljg1NDggMTUyLjM5IDI2LjE4NzEgMTUyLjQxNCAyOC44MTY5QzE1Mi40MzkgMzEuOTQ5OSAxNTQuOTg4IDMzLjExODMgMTU1LjMyMiAzMy4yNzExQzE1NS4zNDQgMzMuMjgxMSAxNTUuMzU2IDMzLjI4NjcgMTU1LjM1OCAzMy4yODgzQzE1NS4zNTYgMzMuMjkyNiAxNTUuMzU0IDMzLjMwMSAxNTUuMzUgMzMuMzEzM0MxNTUuMjgzIDMzLjUyODggMTU0Ljg0NSAzNC45NDg5IDE1My44NDcgMzYuNDA0QzE1Mi45MjIgMzcuNzU5OCAxNTEuOTcxIDM5LjA4OTUgMTUwLjQ2IDM5LjExNTZDMTQ5Ljc0OSAzOS4xMjgzIDE0OS4yNyAzOC45MjExIDE0OC43NzIgMzguNzA1NEMxNDguMjQ3IDM4LjQ3ODUgMTQ3LjcwMSAzOC4yNDIyIDE0Ni44NCAzOC4yNDIyQzE0NS45NDcgMzguMjQyMiAxNDUuMzc2IDM4LjQ4NDggMTQ0LjgyNiAzOC43MTg0QzE0NC4zNDggMzguOTIxNCAxNDMuODg3IDM5LjExNzQgMTQzLjI0NSAzOS4xNDE3QzE0MS43ODYgMzkuMTkzOCAxNDAuNjc5IDM3LjcwNzcgMTM5Ljc1NCAzNi4zNTE5QzEzNy44NjYgMzMuNjE0MyAxMzYuNDIgMjguNjM0NCAxMzguMzc0IDI1LjI3MUMxMzkuMzI1IDIzLjU4OTMgMTQxLjA1NyAyMi41MzM0IDE0Mi45MTkgMjIuNTA3M0MxNDMuNzMyIDIyLjQ5MjUgMTQ0LjUwNyAyMi44MDA2IDE0NS4xODQgMjMuMDcwMUMxNDUuNzAyIDIzLjI3NTggMTQ2LjE2MiAyMy40NTg5IDE0Ni41NCAyMy40NTg5QzE0Ni44NzcgMjMuNDU4OSAxNDcuMzE5IDIzLjI4NTEgMTQ3Ljg0MSAyMy4wNzk3WiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik0zNi44NTg3IDM3LjUyNDFIMzEuOTg3NEwzNS4wMzQyIDE5LjY2NjhIMzkuOTA1MkwzNi44NTg3IDM3LjUyNDFaIiBmaWxsPSIjMDA1NzlGIi8+DQo8cGF0aCBkPSJNNTQuNTE1NyAyMC4xMDQxQzUzLjU1NDkgMTkuNzQyOCA1Mi4wMzA5IDE5LjM0MzggNTAuMTQ2NiAxOS4zNDM4QzQ1LjMzNjEgMTkuMzQzOCA0MS45NDg2IDIxLjc3NTMgNDEuOTI3OCAyNS4yNTE2QzQxLjg4NzggMjcuODE2NSA0NC4zNTMxIDI5LjI0MSA0Ni4xOTcgMzAuMDk2MkM0OC4wODE2IDMwLjk3MDEgNDguNzIyMyAzMS41NDA1IDQ4LjcyMjMgMzIuMzE5NEM0OC43MDMxIDMzLjUxNTcgNDcuMTk5NCAzNC4wNjcyIDQ1Ljc5NjkgMzQuMDY3MkM0My44NTIxIDM0LjA2NzIgNDIuODEgMzMuNzgyOSA0MS4yMjY0IDMzLjExNzNMNDAuNTg1IDMyLjgzMkwzOS45MDMzIDM2Ljg0MDZDNDEuMDQ1OCAzNy4zMzM5IDQzLjE1MDcgMzcuNzcxNyA0NS4zMzYxIDM3Ljc5MDlDNTAuNDQ3MyAzNy43OTA5IDUzLjc3NDkgMzUuMzk3MSA1My44MTQzIDMxLjY5MjVDNTMuODMzOCAyOS42NTk3IDUyLjUzMiAyOC4xMDIgNDkuNzI1NCAyNi44MjkyQzQ4LjAyMTcgMjYuMDEyMSA0Ni45NzgzIDI1LjQ2MTIgNDYuOTc4MyAyNC42MjUyQzQ2Ljk5ODMgMjMuODY1MiA0Ny44NjA4IDIzLjA4NjggNDkuNzg0IDIzLjA4NjhDNTEuMzY3NyAyMy4wNDg2IDUyLjUzMTIgMjMuNDA5NCA1My40MTI2IDIzLjc3MDVMNTMuODUzMiAyMy45NjAxTDU0LjUxNTcgMjAuMTA0MVoiIGZpbGw9IiMwMDU3OUYiLz4NCjxwYXRoIGQ9Ik02MC45OTI0IDMxLjE5NzlDNjEuMzkzNiAzMC4xNzIgNjIuOTM3MiAyNi4yMDE2IDYyLjkzNzIgMjYuMjAxNkM2Mi45MTcgMjYuMjM5NyA2My4zMzc2IDI1LjE1NjggNjMuNTc4MSAyNC40OTE5TDYzLjkxODYgMjYuMDMwNkM2My45MTg2IDI2LjAzMDYgNjQuODQxIDMwLjMwNTEgNjUuMDQxNCAzMS4xOTc5QzY0LjI4IDMxLjE5NzkgNjEuOTU0NiAzMS4xOTc5IDYwLjk5MjQgMzEuMTk3OVpNNjcuMDA1NCAxOS42NjY4SDYzLjIzNzRDNjIuMDc1NSAxOS42NjY4IDYxLjE5MjcgMTkuOTg5NSA2MC42OTE0IDIxLjE0ODRMNTMuNDU1OCAzNy41MjM5SDU4LjU2NzFDNTguNTY3MSAzNy41MjM5IDU5LjQwODUgMzUuMzE5OSA1OS41ODk0IDM0Ljg0NTJDNjAuMTUwMSAzNC44NDUyIDY1LjEyMjMgMzQuODQ1MiA2NS44NDM3IDM0Ljg0NTJDNjUuOTgzNSAzNS40NzIxIDY2LjQyNDkgMzcuNTIzOSA2Ni40MjQ5IDM3LjUyMzlINzAuOTM1Mkw2Ny4wMDU0IDE5LjY2NjhWMTkuNjY2OFoiIGZpbGw9IiMwMDU3OUYiLz4NCjxwYXRoIGQ9Ik0yNy45MTggMTkuNjY2OEwyMy4xNDc1IDMxLjg0MzhMMjIuNjI2MiAyOS4zNzQxQzIxLjc0NDIgMjYuNTI0NSAxOC45NzgxIDIzLjQyODQgMTUuODkxNCAyMS44ODlMMjAuMjYxIDM3LjUwNTJIMjUuNDEyMkwzMy4wNjkgMTkuNjY2OEgyNy45MThWMTkuNjY2OFoiIGZpbGw9IiMwMDU3OUYiLz4NCjxwYXRoIGQ9Ik0xOC43MTg0IDE5LjY2NjhIMTAuODgxMUwxMC44MDA5IDIwLjAyNzZDMTYuOTE0NSAyMS41MDk1IDIwLjk2MzUgMjUuMDgxNSAyMi42MjcgMjkuMzc0OUwyMC45MjMyIDIxLjE2NzlDMjAuNjQyNyAyMC4wMjc0IDE5Ljc4MDcgMTkuNzA0NCAxOC43MTg0IDE5LjY2NjhaIiBmaWxsPSIjRkFBNjFBIi8+DQo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDJfNThfMTExKSI+DQo8cGF0aCBkPSJNMjIxLjE1OCAxNy40OTlWMTguOTM1NkgyMzEuMzA2VjE3LjQ5OUgyMjEuMTU4Wk0yMzIuNzQ0IDE3LjQ5OVYxOC45MzU2SDI0Ny4yMDZDMjQ3LjIwNiAxOC45MzU2IDI0NS43MjkgMTcuNDk5IDI0My43NzMgMTcuNDk5SDIzMi43NDRaTTI1MC4wNDMgMTcuNDk5VjE4LjkzNTZIMjU4Ljc5M0wyNTguMjczIDE3LjQ5OUgyNTAuMDQzWk0yNjUuMDY1IDE3LjQ5OUwyNjQuNTQ2IDE4LjkzNTZIMjczLjIxNlYxNy40OTlIMjY1LjA2NVpNMjIxLjE1OCAyMC4yOTI5VjIxLjcyOTZIMjMxLjMwNlYyMC4yOTI5SDIyMS4xNThaTTIzMi43NDQgMjAuMjk1VjIxLjcyOTdIMjQ4Ljg4NEMyNDguODg0IDIxLjcyOTcgMjQ4LjY5NiAyMC42MjM5IDI0OC4zNjcgMjAuMjk1SDIzMi43NDRaTTI1MC4wNDMgMjAuMjk1VjIxLjcyOTdIMjU5Ljc1MkwyNTkuMjcxIDIwLjI5NUgyNTAuMDQzWk0yNjQuMDI3IDIwLjI5NUwyNjMuNTQ2IDIxLjcyOTdIMjczLjIxNlYyMC4yOTVIMjY0LjAyN1YyMC4yOTVaTTIyNC4wNzQgMjMuMDg2OVYyNC41MjU3SDIyOC40NjlWMjMuMDg2OUgyMjQuMDc0VjIzLjA4NjlaTTIzNS42NjEgMjMuMDg2OVYyNC41MjU3SDI0MC4wNTZWMjMuMDg2OUgyMzUuNjYxVjIzLjA4NjlaTTI0NC4zMzEgMjMuMDg2OVYyNC41MjU3SDI0OC43MjZDMjQ4LjcyNiAyNC41MjU3IDI0OS4wMDUgMjMuNzY1OSAyNDkuMDA1IDIzLjA4NjlIMjQ0LjMzMVYyMy4wODY5Wk0yNTIuOTYgMjMuMDg2OVYyNC41MjU3SDI2MC43NTJMMjYwLjIzMiAyMy4wODY5SDI1Mi45NlYyMy4wODY5Wk0yNjMuMDY5IDIzLjA4NjlMMjYyLjU0OCAyNC41MjU3SDI3MC4zNzlWMjMuMDg2OUgyNjMuMDY5VjIzLjA4NjlaTTIyNC4wNzQgMjUuODgzVjI3LjMxOTdIMjI4LjQ2OVYyNS44ODNIMjI0LjA3NFYyNS44ODNaTTIzNS42NjEgMjUuODgzVjI3LjMxOTdIMjQ2Ljg4N0MyNDYuODg3IDI3LjMxOTcgMjQ3LjgyNiAyNi41ODI1IDI0OC4xMjUgMjUuODgzSDIzNS42NjFaTTI1Mi45NiAyNS44ODNWMjcuMzE5N0gyNTcuMzU1VjI2LjUyTDI1Ny42MzQgMjcuMzE5N0gyNjUuNjg0TDI2NS45ODQgMjYuNTJWMjcuMzE5N0gyNzAuMzc5VjI1Ljg4M0gyNjIuMTI5TDI2MS42OTEgMjcuMDk5OUwyNjEuMjUxIDI1Ljg4M0gyNTIuOTZaTTIyNC4wNzQgMjguNjc3VjMwLjExMzdIMjI4LjQ2OVYyOC42NzdIMjI0LjA3NFpNMjM1LjY2MSAyOC42NzdWMzAuMTEzN0gyNDguMTI1QzI0Ny44MjYgMjkuNDE2NSAyNDYuODg3IDI4LjY3NyAyNDYuODg3IDI4LjY3N0gyMzUuNjYxWk0yNTIuOTYgMjguNjc3VjMwLjExMzdIMjU3LjM1NVYyOC42NzdIMjUyLjk2Wk0yNTguMTUzIDI4LjY3N0wyNTguNjg1IDMwLjExMzdIMjY0LjcyMUwyNjUuMjI2IDI4LjY3N0gyNTguMTUzWk0yNjUuOTg0IDI4LjY3N1YzMC4xMTM3SDI3MC4zNzlWMjguNjc3SDI2NS45ODRaTTIyNC4wNzQgMzEuNDcxVjMyLjkwNzZIMjI4LjQ2OVYzMS40NzFIMjI0LjA3NFpNMjM1LjY2MSAzMS40NzFWMzIuOTA3NkgyNDAuMDU2VjMxLjQ3MUgyMzUuNjYxWk0yNDQuMzMxIDMxLjQ3MVYzMi45MDc2SDI0OS4wMDVDMjQ5LjAwNSAzMi4yMjk2IDI0OC43MjYgMzEuNDcxIDI0OC43MjYgMzEuNDcxSDI0NC4zMzFWMzEuNDcxWk0yNTIuOTYgMzEuNDcxVjMyLjkwNzZIMjU3LjM1NVYzMS40NzFIMjUyLjk2Wk0yNTkuMTUxIDMxLjQ3MUwyNTkuNjY2IDMyLjkwNzZIMjYzLjcxM0wyNjQuMjMyIDMxLjQ3MUgyNTkuMTUxWk0yNjUuOTg0IDMxLjQ3MVYzMi45MDc2SDI3MC4zNzlWMzEuNDcxSDI2NS45ODRaTTIyMS4yMzcgMzQuMjY1VjM1LjcwMzdIMjMxLjM4NlYzNC4yNjVIMjIxLjIzN1pNMjMyLjc0NCAzNC4yNjVWMzUuNzAzN0gyNDguMzY3QzI0OC42OTYgMzUuMzc0MyAyNDguODg0IDM0LjI2NSAyNDguODg0IDM0LjI2NUgyMzIuNzQ0VjM0LjI2NVpNMjUwLjEyMyAzNC4yNjVWMzUuNzAzN0gyNTcuMzU1VjM0LjI2NUgyNTAuMTIzWk0yNjAuMTUxIDM0LjI2NUwyNjAuNjggMzUuNzAzN0gyNjIuNzM5TDI2My4yMzYgMzQuMjY1SDI2MC4xNTFaTTI2NS45ODQgMzQuMjY1VjM1LjcwMzdIMjczLjI5NVYzNC4yNjVIMjY1Ljk4NFpNMjIxLjIzNyAzNy4wNjFWMzguNDk3N0gyMzEuMzg2VjM3LjA2MUgyMjEuMjM3Wk0yMzIuNzQ0IDM3LjA2MVYzOC40OTU2SDI0My43NzNDMjQ1LjcyOSAzOC40OTU2IDI0Ny4yMDYgMzcuMDYxIDI0Ny4yMDYgMzcuMDYxSDIzMi43NDRaTTI1MC4xMjMgMzcuMDYxVjM4LjQ5NzdIMjU3LjM1NVYzNy4wNjFIMjUwLjEyM1pNMjYxLjE1NSAzNy4wNjFMMjYxLjY2NCAzOC40OTM2TDI2MS43NTIgMzguNDk1NkwyNjIuMjY5IDM3LjA2MUgyNjEuMTU1VjM3LjA2MVpNMjY1Ljk4NCAzNy4wNjFWMzguNDk3N0gyNzMuMjk1VjM3LjA2MUgyNjUuOTg0WiIgZmlsbD0iIzFGNzBDMSIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzU4XzExMSI+DQo8cmVjdCB3aWR0aD0iNDQuNDQ3MyIgaGVpZ2h0PSIyOS42MzE1IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzUzLjk1NSAxNC44MTU1KSIvPg0KPC9jbGlwUGF0aD4NCjxjbGlwUGF0aCBpZD0iY2xpcDFfNThfMTExIj4NCjxyZWN0IHdpZHRoPSI3Ni41NDgxIiBoZWlnaHQ9IjE2LjM1MDciIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MjUuNTk5IDIwLjk4ODkpIi8+DQo8L2NsaXBQYXRoPg0KPGNsaXBQYXRoIGlkPSJjbGlwMl81OF8xMTEiPg0KPHJlY3Qgd2lkdGg9IjUyLjEzNzIiIGhlaWdodD0iMjAuOTk4NyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyMS4xNTggMTcuNDk5KSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K" style="\n            width: 742.5px;\n            position: relative;\n            top: 107px;\n            left: 32px;\n            ">\n            <a href=' + accountURL + ' style="\n        float: left;\n        border-radius: 56px;\n        background: #0D6EFD;\n        padding-top: 8px;\n        width: 280px;\n        height: 38px;\n        text-align: center;\n        position: relative;\n        top: 127px;\n        left: 274px;\n        font-size: 16px;\n        color: white;\n        text-decoration: none;\n        letter-spacing: 0.02em;\n    ">Claim your FREE account</a>\n            <div style="\n    font-size: 14px;\n    position: relative;\n    top: 180px;\n    left: 19px;\n    letter-spacing: 0.02em;\n    font-weight: 500;\n    line-height: 125%;\n">have a Syncfusion account? <a href="https://www.syncfusion.com/account/login?ReturnUrl=/account/login" style="text-decoration: none;\ncolor: #0D6EFD;\nfont-weight: 500;">Sign In</a></div>\n        </div>\n    </div>';
  if (typeof document !== "undefined" && !isNullOrUndefined(document)) {
    var errorBackground = createElement("div", {
      innerHTML: bannerTemplate
    });
    document.body.appendChild(errorBackground);
  }
};

// node_modules/@syncfusion/ej2-base/src/component.js
var __extends2 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var componentCount = 0;
var lastPageID;
var lastHistoryLen = 0;
var instancecount = 0;
var isvalid = true;
var isBannerAdded = false;
var versionBasedStatePersistence = false;
var Component = (
  /** @class */
  function(_super) {
    __extends2(Component2, _super);
    function Component2(options, selector) {
      var _this = _super.call(this, options, selector) || this;
      _this.randomId = uniqueID();
      _this.isStringTemplate = false;
      _this.needsID = false;
      _this.isReactHybrid = false;
      _this.isAngular = false;
      _this.isReact = false;
      _this.isVue = false;
      if (isNullOrUndefined(_this.enableRtl)) {
        _this.setProperties({
          "enableRtl": rightToLeft
        }, true);
      }
      if (isNullOrUndefined(_this.locale)) {
        _this.setProperties({
          "locale": defaultCulture
        }, true);
      }
      _this.moduleLoader = new ModuleLoader(_this);
      _this.localObserver = new Observer(_this);
      onIntlChange.on("notifyExternalChange", _this.detectFunction, _this, _this.randomId);
      if (typeof window !== "undefined" && typeof document !== "undefined" && !validateLicense()) {
        if (componentList.indexOf(_this.getModuleName()) !== -1) {
          instancecount = instancecount + 1;
          if (instancecount > 5) {
            isvalid = false;
          }
        }
      }
      if (!isUndefined(selector)) {
        _this.appendTo();
      }
      return _this;
    }
    Component2.prototype.requiredModules = function() {
      return [];
    };
    Component2.prototype.destroy = function() {
      if (this.isDestroyed) {
        return;
      }
      if (this.enablePersistence) {
        this.setPersistData();
        this.detachUnloadEvent();
      }
      this.localObserver.destroy();
      if (this.refreshing) {
        return;
      }
      removeClass([this.element], ["e-control"]);
      this.trigger("destroyed", {
        cancel: false
      });
      _super.prototype.destroy.call(this);
      this.moduleLoader.clean();
      onIntlChange.off("notifyExternalChange", this.detectFunction, this.randomId);
    };
    Component2.prototype.refresh = function() {
      this.refreshing = true;
      this.moduleLoader.clean();
      this.destroy();
      this.clearChanges();
      this.localObserver = new Observer(this);
      this.preRender();
      this.injectModules();
      this.render();
      this.refreshing = false;
    };
    Component2.prototype.accessMount = function() {
      if (this.mount && !this.isReactHybrid) {
        this.mount();
      }
    };
    Component2.prototype.getRootElement = function() {
      if (this.isReactHybrid) {
        return this.actualElement;
      } else {
        return this.element;
      }
    };
    Component2.prototype.getLocalData = function() {
      var eleId = this.getModuleName() + this.element.id;
      if (versionBasedStatePersistence) {
        return window.localStorage.getItem(eleId + this.ej2StatePersistenceVersion);
      } else {
        return window.localStorage.getItem(eleId);
      }
    };
    Component2.prototype.attachUnloadEvent = function() {
      this.handleUnload = this.handleUnload.bind(this);
      window.addEventListener("pagehide", this.handleUnload);
    };
    Component2.prototype.handleUnload = function() {
      this.setPersistData();
    };
    Component2.prototype.detachUnloadEvent = function() {
      window.removeEventListener("pagehide", this.handleUnload);
    };
    Component2.prototype.appendTo = function(selector) {
      if (!isNullOrUndefined(selector) && typeof selector === "string") {
        this.element = select(selector, document);
      } else if (!isNullOrUndefined(selector)) {
        this.element = selector;
      }
      if (!isNullOrUndefined(this.element)) {
        var moduleClass = "e-" + this.getModuleName().toLowerCase();
        addClass([this.element], ["e-control", moduleClass]);
        this.isProtectedOnChange = false;
        if (this.needsID && !this.element.id) {
          this.element.id = this.getUniqueID(this.getModuleName());
        }
        if (this.enablePersistence) {
          this.mergePersistData();
          this.attachUnloadEvent();
        }
        var inst = getValue("ej2_instances", this.element);
        if (!inst || inst.indexOf(this) === -1) {
          _super.prototype.addInstance.call(this);
        }
        this.preRender();
        this.injectModules();
        var ignoredComponents = {
          schedule: "all",
          diagram: "all",
          PdfViewer: "all",
          grid: ["logger"],
          richtexteditor: ["link", "table", "image", "audio", "video", "formatPainter", "emojiPicker", "pasteCleanup", "htmlEditor", "toolbar"],
          treegrid: ["filter"],
          gantt: ["tooltip"],
          chart: ["Export", "Zoom"],
          accumulationchart: ["Export"],
          "query-builder": "all"
        };
        var component = this.getModuleName();
        if (this.requiredModules && (!ignoredComponents["" + component] || ignoredComponents["" + component] !== "all")) {
          var modulesRequired = this.requiredModules();
          for (var _i = 0, _a = this.moduleLoader.getNonInjectedModules(modulesRequired); _i < _a.length; _i++) {
            var module = _a[_i];
            var moduleName = module.name ? module.name : module.member;
            if (ignoredComponents["" + component] && ignoredComponents["" + component].indexOf(module.member) !== -1) {
              continue;
            }
            var componentName = component.charAt(0).toUpperCase() + component.slice(1);
            console.warn('[WARNING] :: Module "' + moduleName + '" is not available in ' + componentName + " component! You either misspelled the module name or forgot to load it.");
          }
        }
        if (!isvalid && !isBannerAdded) {
          createLicenseOverlay();
          isBannerAdded = true;
        }
        this.render();
        if (!this.mount) {
          this.trigger("created");
        } else {
          this.accessMount();
        }
      }
    };
    Component2.prototype.renderComplete = function(wrapperElement) {
      if (isBlazor()) {
        var sfBlazor = "sfBlazor";
        window["" + sfBlazor].renderComplete(this.element, wrapperElement);
      }
      this.isRendered = true;
    };
    Component2.prototype.dataBind = function() {
      this.injectModules();
      _super.prototype.dataBind.call(this);
    };
    Component2.prototype.on = function(event, handler, context) {
      if (typeof event === "string") {
        this.localObserver.on(event, handler, context);
      } else {
        for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
          var arg = event_1[_i];
          this.localObserver.on(arg.event, arg.handler, arg.context);
        }
      }
    };
    Component2.prototype.off = function(event, handler) {
      if (typeof event === "string") {
        this.localObserver.off(event, handler);
      } else {
        for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
          var arg = event_2[_i];
          this.localObserver.off(arg.event, arg.handler);
        }
      }
    };
    Component2.prototype.notify = function(property, argument) {
      if (this.isDestroyed !== true) {
        this.localObserver.notify(property, argument);
      }
    };
    Component2.prototype.getInjectedModules = function() {
      return this.injectedModules;
    };
    Component2.Inject = function() {
      var moduleList = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        moduleList[_i] = arguments[_i];
      }
      if (!this.prototype.injectedModules) {
        this.prototype.injectedModules = [];
      }
      for (var i = 0; i < moduleList.length; i++) {
        if (this.prototype.injectedModules.indexOf(moduleList[parseInt(i.toString(), 10)]) === -1) {
          this.prototype.injectedModules.push(moduleList[parseInt(i.toString(), 10)]);
        }
      }
    };
    Component2.prototype.createElement = function(tagName, prop, isVDOM) {
      return createElement(tagName, prop);
    };
    Component2.prototype.triggerStateChange = function(handler, argument) {
      if (this.isReactHybrid) {
        this.setState();
        this.currentContext = {
          calls: handler,
          args: argument
        };
      }
    };
    Component2.prototype.injectModules = function() {
      if (this.injectedModules && this.injectedModules.length) {
        this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
      }
    };
    Component2.prototype.detectFunction = function(args) {
      var prop = Object.keys(args);
      if (prop.length) {
        this[prop[0]] = args[prop[0]];
      }
    };
    Component2.prototype.mergePersistData = function() {
      var data;
      if (versionBasedStatePersistence) {
        data = window.localStorage.getItem(this.getModuleName() + this.element.id + this.ej2StatePersistenceVersion);
      } else {
        data = window.localStorage.getItem(this.getModuleName() + this.element.id);
      }
      if (!(isNullOrUndefined(data) || data === "")) {
        this.setProperties(JSON.parse(data), true);
      }
    };
    Component2.prototype.setPersistData = function() {
      if (!this.isDestroyed) {
        if (versionBasedStatePersistence) {
          window.localStorage.setItem(this.getModuleName() + this.element.id + this.ej2StatePersistenceVersion, this.getPersistData());
        } else {
          window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
        }
      }
    };
    Component2.prototype.renderReactTemplates = function(callback) {
      if (!isNullOrUndefined(callback)) {
        callback();
      }
    };
    Component2.prototype.clearTemplate = function(templateName, index) {
    };
    Component2.prototype.getUniqueID = function(definedName) {
      if (this.isHistoryChanged()) {
        componentCount = 0;
      }
      lastPageID = this.pageID(location.href);
      lastHistoryLen = history.length;
      return definedName + "_" + lastPageID + "_" + componentCount++;
    };
    Component2.prototype.pageID = function(url) {
      var hash = 0;
      if (url.length === 0) {
        return hash;
      }
      for (var i = 0; i < url.length; i++) {
        var char = url.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      return Math.abs(hash);
    };
    Component2.prototype.isHistoryChanged = function() {
      return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
    };
    Component2.prototype.addOnPersist = function(options) {
      var _this = this;
      var persistObj = {};
      for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
        var key = options_1[_i];
        var objValue = getValue(key, this);
        if (!isUndefined(objValue)) {
          setValue(key, this.getActualProperties(objValue), persistObj);
        }
      }
      return JSON.stringify(persistObj, function(key2, value) {
        return _this.getActualProperties(value);
      });
    };
    Component2.prototype.getActualProperties = function(obj) {
      if (obj instanceof ChildProperty) {
        return getValue("properties", obj);
      } else {
        return obj;
      }
    };
    Component2.prototype.ignoreOnPersist = function(options) {
      return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component2.prototype.iterateJsonProperties = function(obj, ignoreList) {
      var newObj = {};
      var _loop_1 = function(key2) {
        if (ignoreList.indexOf(key2) === -1) {
          var value = obj["" + key2];
          if (typeof value === "object" && !(value instanceof Array)) {
            var newList = ignoreList.filter(function(str) {
              var regExp3 = RegExp;
              return new regExp3(key2 + ".").test(str);
            }).map(function(str) {
              return str.replace(key2 + ".", "");
            });
            newObj["" + key2] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
          } else {
            newObj["" + key2] = value;
          }
        }
      };
      var this_1 = this;
      for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        _loop_1(key);
      }
      return newObj;
    };
    __decorate2([Property(false)], Component2.prototype, "enablePersistence", void 0);
    __decorate2([Property()], Component2.prototype, "enableRtl", void 0);
    __decorate2([Property()], Component2.prototype, "locale", void 0);
    Component2 = __decorate2([NotifyPropertyChanges], Component2);
    return Component2;
  }(Base)
);
(function() {
  if (typeof window !== "undefined") {
    window.addEventListener(
      "popstate",
      /* istanbul ignore next */
      function() {
        componentCount = 0;
      }
    );
  }
})();

// node_modules/@syncfusion/ej2-base/src/draggable.js
var __extends3 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var defaultPosition = {
  left: 0,
  top: 0,
  bottom: 0,
  right: 0
};
var isDraggedObject = {
  isDragged: false
};
var Position = (
  /** @class */
  function(_super) {
    __extends3(Position2, _super);
    function Position2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate3([Property(0)], Position2.prototype, "left", void 0);
    __decorate3([Property(0)], Position2.prototype, "top", void 0);
    return Position2;
  }(ChildProperty)
);
var Draggable = (
  /** @class */
  function(_super) {
    __extends3(Draggable2, _super);
    function Draggable2(element2, options) {
      var _this = _super.call(this, options, element2) || this;
      _this.dragLimit = Draggable_1.getDefaultPosition();
      _this.borderWidth = Draggable_1.getDefaultPosition();
      _this.padding = Draggable_1.getDefaultPosition();
      _this.diffX = 0;
      _this.prevLeft = 0;
      _this.prevTop = 0;
      _this.dragProcessStarted = false;
      _this.eleTop = 0;
      _this.tapHoldTimer = 0;
      _this.externalInitialize = false;
      _this.diffY = 0;
      _this.parentScrollX = 0;
      _this.parentScrollY = 0;
      _this.droppables = {};
      _this.bind();
      return _this;
    }
    Draggable_1 = Draggable2;
    Draggable2.prototype.bind = function() {
      this.toggleEvents();
      if (Browser.isIE) {
        addClass([this.element], "e-block-touch");
      }
      this.droppables[this.scope] = {};
    };
    Draggable2.getDefaultPosition = function() {
      return extend({}, defaultPosition);
    };
    Draggable2.prototype.toggleEvents = function(isUnWire) {
      var ele;
      if (!isUndefined(this.handle)) {
        ele = select(this.handle, this.element);
      }
      var handler = this.enableTapHold && Browser.isDevice && Browser.isTouch ? this.mobileInitialize : this.initialize;
      if (isUnWire) {
        EventHandler.remove(ele || this.element, Browser.isSafari() ? "touchstart" : Browser.touchStartEvent, handler);
      } else {
        EventHandler.add(ele || this.element, Browser.isSafari() ? "touchstart" : Browser.touchStartEvent, handler, this);
      }
    };
    Draggable2.prototype.mobileInitialize = function(evt) {
      var _this = this;
      var target = evt.currentTarget;
      this.tapHoldTimer = setTimeout(function() {
        _this.externalInitialize = true;
        _this.removeTapholdTimer();
        _this.initialize(evt, target);
      }, this.tapHoldThreshold);
      EventHandler.add(document, Browser.isSafari() ? "touchmove" : Browser.touchMoveEvent, this.removeTapholdTimer, this);
      EventHandler.add(document, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.removeTapholdTimer, this);
    };
    Draggable2.prototype.removeTapholdTimer = function() {
      clearTimeout(this.tapHoldTimer);
      EventHandler.remove(document, Browser.isSafari() ? "touchmove" : Browser.touchMoveEvent, this.removeTapholdTimer);
      EventHandler.remove(document, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.removeTapholdTimer);
    };
    Draggable2.prototype.getScrollableParent = function(element2, axis) {
      var scroll = {
        "vertical": "scrollHeight",
        "horizontal": "scrollWidth"
      };
      var client = {
        "vertical": "clientHeight",
        "horizontal": "clientWidth"
      };
      if (isNullOrUndefined(element2)) {
        return null;
      }
      if (element2[scroll["" + axis]] > element2[client["" + axis]]) {
        if (axis === "vertical" ? element2.scrollTop > 0 : element2.scrollLeft > 0) {
          if (axis === "vertical") {
            this.parentScrollY = this.parentScrollY + (this.parentScrollY === 0 ? element2.scrollTop : element2.scrollTop - this.parentScrollY);
            this.tempScrollHeight = element2.scrollHeight;
          } else {
            this.parentScrollX = this.parentScrollX + (this.parentScrollX === 0 ? element2.scrollLeft : element2.scrollLeft - this.parentScrollX);
            this.tempScrollWidth = element2.scrollWidth;
          }
          if (!isNullOrUndefined(element2)) {
            return this.getScrollableParent(element2.parentNode, axis);
          } else {
            return element2;
          }
        } else {
          return this.getScrollableParent(element2.parentNode, axis);
        }
      } else {
        return this.getScrollableParent(element2.parentNode, axis);
      }
    };
    Draggable2.prototype.getScrollableValues = function() {
      this.parentScrollX = 0;
      this.parentScrollY = 0;
      var isModalDialog = this.element.classList.contains("e-dialog") && this.element.classList.contains("e-dlg-modal");
      var verticalScrollParent = this.getScrollableParent(this.element.parentNode, "vertical");
      var horizontalScrollParent = this.getScrollableParent(this.element.parentNode, "horizontal");
    };
    Draggable2.prototype.initialize = function(evt, curTarget) {
      this.currentStateTarget = evt.target;
      if (this.isDragStarted()) {
        return;
      } else {
        this.isDragStarted(true);
        this.externalInitialize = false;
      }
      this.target = evt.currentTarget || curTarget;
      this.dragProcessStarted = false;
      if (this.abort) {
        var abortSelectors = this.abort;
        if (typeof abortSelectors === "string") {
          abortSelectors = [abortSelectors];
        }
        for (var i = 0; i < abortSelectors.length; i++) {
          if (!isNullOrUndefined(closest(evt.target, abortSelectors[parseInt(i.toString(), 10)]))) {
            if (this.isDragStarted()) {
              this.isDragStarted(true);
            }
            return;
          }
        }
      }
      if (this.preventDefault && !isUndefined(evt.changedTouches) && evt.type !== "touchstart") {
        evt.preventDefault();
      }
      this.element.setAttribute("aria-grabbed", "true");
      var intCoord = this.getCoordinates(evt);
      this.initialPosition = {
        x: intCoord.pageX,
        y: intCoord.pageY
      };
      if (!this.clone) {
        var pos = this.element.getBoundingClientRect();
        this.getScrollableValues();
        if (evt.clientX === evt.pageX) {
          this.parentScrollX = 0;
        }
        if (evt.clientY === evt.pageY) {
          this.parentScrollY = 0;
        }
        this.relativeXPosition = intCoord.pageX - (pos.left + this.parentScrollX);
        this.relativeYPosition = intCoord.pageY - (pos.top + this.parentScrollY);
      }
      if (this.externalInitialize) {
        this.intDragStart(evt);
      } else {
        EventHandler.add(document, Browser.isSafari() ? "touchmove" : Browser.touchMoveEvent, this.intDragStart, this);
        EventHandler.add(document, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.intDestroy, this);
      }
      this.toggleEvents(true);
      if (evt.type !== "touchstart" && this.isPreventSelect) {
        document.body.classList.add("e-prevent-select");
      }
      this.externalInitialize = false;
      EventHandler.trigger(document.documentElement, Browser.isSafari() ? "touchstart" : Browser.touchStartEvent, evt);
    };
    Draggable2.prototype.intDragStart = function(evt) {
      this.removeTapholdTimer();
      var isChangeTouch = !isUndefined(evt.changedTouches);
      if (isChangeTouch && evt.changedTouches.length !== 1) {
        return;
      }
      var intCordinate = this.getCoordinates(evt);
      var pos;
      var styleProp = getComputedStyle(this.element);
      this.margin = {
        left: parseInt(styleProp.marginLeft, 10),
        top: parseInt(styleProp.marginTop, 10),
        right: parseInt(styleProp.marginRight, 10),
        bottom: parseInt(styleProp.marginBottom, 10)
      };
      var element2 = this.element;
      if (this.clone && this.dragTarget) {
        var intClosest = closest(evt.target, this.dragTarget);
        if (!isNullOrUndefined(intClosest)) {
          element2 = intClosest;
        }
      }
      if (this.isReplaceDragEle) {
        element2 = this.currentStateCheck(evt.target, element2);
      }
      this.offset = this.calculateParentPosition(element2);
      this.position = this.getMousePosition(evt, this.isDragScroll);
      var x = this.initialPosition.x - intCordinate.pageX;
      var y = this.initialPosition.y - intCordinate.pageY;
      var distance = Math.sqrt(x * x + y * y);
      if (distance >= this.distance || this.externalInitialize) {
        var ele = this.getHelperElement(evt);
        if (!ele || isNullOrUndefined(ele)) {
          return;
        }
        if (isChangeTouch) {
          evt.preventDefault();
        }
        var dragTargetElement = this.helperElement = ele;
        this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
        if (this.dragStart) {
          var curTarget = this.getProperTargetElement(evt);
          var args = {
            event: evt,
            element: element2,
            target: curTarget,
            bindEvents: isBlazor() ? this.bindDragEvents.bind(this) : null,
            dragElement: dragTargetElement
          };
          this.trigger("dragStart", args);
        }
        if (this.dragArea) {
          this.setDragArea();
        } else {
          this.dragLimit = {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          };
          this.borderWidth = {
            top: 0,
            left: 0
          };
        }
        pos = {
          left: this.position.left - this.parentClientRect.left,
          top: this.position.top - this.parentClientRect.top
        };
        if (this.clone && !this.enableTailMode) {
          this.diffX = this.position.left - this.offset.left;
          this.diffY = this.position.top - this.offset.top;
        }
        this.getScrollableValues();
        var styles = getComputedStyle(element2);
        var marginTop = parseFloat(styles.marginTop);
        if (this.clone && marginTop !== 0) {
          pos.top += marginTop;
        }
        this.eleTop = !isNaN(parseFloat(styles.top)) ? parseFloat(styles.top) - this.offset.top : 0;
        if (this.enableScrollHandler && !this.clone) {
          pos.top -= this.parentScrollY;
          pos.left -= this.parentScrollX;
        }
        var posValue = this.getProcessedPositionValue({
          top: pos.top - this.diffY + "px",
          left: pos.left - this.diffX + "px"
        });
        if (this.dragArea && typeof this.dragArea !== "string" && this.dragArea.classList.contains("e-kanban-content") && this.dragArea.style.position === "relative") {
          pos.top += this.dragArea.scrollTop;
        }
        this.dragElePosition = {
          top: pos.top,
          left: pos.left
        };
        setStyleAttribute(dragTargetElement, this.getDragPosition({
          position: "absolute",
          left: posValue.left,
          top: posValue.top
        }));
        EventHandler.remove(document, Browser.isSafari() ? "touchmove" : Browser.touchMoveEvent, this.intDragStart);
        EventHandler.remove(document, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.intDestroy);
        if (!isBlazor()) {
          this.bindDragEvents(dragTargetElement);
        }
      }
    };
    Draggable2.prototype.bindDragEvents = function(dragTargetElement) {
      if (isVisible(dragTargetElement)) {
        EventHandler.add(document, Browser.isSafari() ? "touchmove" : Browser.touchMoveEvent, this.intDrag, this);
        EventHandler.add(document, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.intDragStop, this);
        this.setGlobalDroppables(false, this.element, dragTargetElement);
      } else {
        this.toggleEvents();
        document.body.classList.remove("e-prevent-select");
      }
    };
    Draggable2.prototype.elementInViewport = function(el) {
      this.top = el.offsetTop;
      this.left = el.offsetLeft;
      this.width = el.offsetWidth;
      this.height = el.offsetHeight;
      while (el.offsetParent) {
        el = el.offsetParent;
        this.top += el.offsetTop;
        this.left += el.offsetLeft;
      }
      return this.top >= window.pageYOffset && this.left >= window.pageXOffset && this.top + this.height <= window.pageYOffset + window.innerHeight && this.left + this.width <= window.pageXOffset + window.innerWidth;
    };
    Draggable2.prototype.getProcessedPositionValue = function(value) {
      if (this.queryPositionInfo) {
        return this.queryPositionInfo(value);
      }
      return value;
    };
    Draggable2.prototype.calculateParentPosition = function(ele) {
      if (isNullOrUndefined(ele)) {
        return {
          left: 0,
          top: 0
        };
      }
      var rect = ele.getBoundingClientRect();
      var style = getComputedStyle(ele);
      return {
        left: rect.left + window.pageXOffset - parseInt(style.marginLeft, 10),
        top: rect.top + window.pageYOffset - parseInt(style.marginTop, 10)
      };
    };
    Draggable2.prototype.intDrag = function(evt) {
      if (!isUndefined(evt.changedTouches) && evt.changedTouches.length !== 1) {
        return;
      }
      if (this.clone && evt.changedTouches && Browser.isDevice && Browser.isTouch) {
        evt.preventDefault();
      }
      var left;
      var top;
      this.position = this.getMousePosition(evt, this.isDragScroll);
      var docHeight = this.getDocumentWidthHeight("Height");
      if (docHeight < this.position.top) {
        this.position.top = docHeight;
      }
      var docWidth = this.getDocumentWidthHeight("Width");
      if (docWidth < this.position.left) {
        this.position.left = docWidth;
      }
      if (this.drag) {
        var curTarget = this.getProperTargetElement(evt);
        this.trigger("drag", {
          event: evt,
          element: this.element,
          target: curTarget
        });
      }
      var eleObj = this.checkTargetElement(evt);
      if (eleObj.target && eleObj.instance) {
        var flag = true;
        if (this.hoverObject) {
          if (this.hoverObject.instance !== eleObj.instance) {
            this.triggerOutFunction(evt, eleObj);
          } else {
            flag = false;
          }
        }
        if (flag) {
          eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
          eleObj.instance.intOver(evt, eleObj.target);
          this.hoverObject = eleObj;
        }
      } else if (this.hoverObject) {
        this.triggerOutFunction(evt, eleObj);
      }
      var helperElement = this.droppables[this.scope].helper;
      this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
      var tLeft = this.parentClientRect.left;
      var tTop = this.parentClientRect.top;
      var intCoord = this.getCoordinates(evt);
      var pagex = intCoord.pageX;
      var pagey = intCoord.pageY;
      var dLeft = this.position.left - this.diffX;
      var dTop = this.position.top - this.diffY;
      var styles = getComputedStyle(helperElement);
      if (this.dragArea) {
        if (this.enableAutoScroll) {
          this.setDragArea();
        }
        if (this.pageX !== pagex || this.skipDistanceCheck) {
          var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft) + parseFloat(styles.marginRight));
          if (this.dragLimit.left > dLeft && dLeft > 0) {
            left = this.dragLimit.left;
          } else if (this.dragLimit.right + window.pageXOffset < dLeft + helperWidth && dLeft > 0) {
            left = dLeft - (dLeft - this.dragLimit.right) + window.pageXOffset - helperWidth;
          } else {
            left = dLeft < 0 ? this.dragLimit.left : dLeft;
          }
        }
        if (this.pageY !== pagey || this.skipDistanceCheck) {
          var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop) + parseFloat(styles.marginBottom));
          if (this.dragLimit.top > dTop && dTop > 0) {
            top = this.dragLimit.top;
          } else if (this.dragLimit.bottom + window.pageYOffset < dTop + helperHeight && dTop > 0) {
            top = dTop - (dTop - this.dragLimit.bottom) + window.pageYOffset - helperHeight;
          } else {
            top = dTop < 0 ? this.dragLimit.top : dTop;
          }
        }
      } else {
        left = dLeft;
        top = dTop;
      }
      var iTop = tTop + this.borderWidth.top;
      var iLeft = tLeft + this.borderWidth.left;
      if (this.dragProcessStarted) {
        if (isNullOrUndefined(top)) {
          top = this.prevTop;
        }
        if (isNullOrUndefined(left)) {
          left = this.prevLeft;
        }
      }
      var draEleTop;
      var draEleLeft;
      if (this.helperElement.classList.contains("e-treeview")) {
        if (this.dragArea) {
          this.dragLimit.top = this.clone ? this.dragLimit.top : 0;
          draEleTop = top - iTop < 0 ? this.dragLimit.top : top - this.borderWidth.top;
          draEleLeft = left - iLeft < 0 ? this.dragLimit.left : left - this.borderWidth.left;
        } else {
          draEleTop = top - this.borderWidth.top;
          draEleLeft = left - this.borderWidth.left;
        }
      } else {
        if (this.dragArea) {
          var isDialogEle = this.helperElement.classList.contains("e-dialog");
          this.dragLimit.top = this.clone ? this.dragLimit.top : 0;
          draEleTop = top - iTop < 0 ? this.dragLimit.top : top - iTop;
          draEleLeft = left - iLeft < 0 ? isDialogEle ? left - (iLeft - this.borderWidth.left) : this.dragElePosition.left : left - iLeft;
        } else {
          draEleTop = top - iTop;
          draEleLeft = left - iLeft;
        }
      }
      var marginTop = parseFloat(getComputedStyle(this.element).marginTop);
      if (marginTop > 0) {
        if (this.clone) {
          draEleTop += marginTop;
          if (dTop < 0) {
            if (marginTop + dTop >= 0) {
              draEleTop = marginTop + dTop;
            } else {
              draEleTop -= marginTop;
            }
          }
          if (this.dragArea) {
            draEleTop = this.dragLimit.bottom < draEleTop ? this.dragLimit.bottom : draEleTop;
          }
        }
        if (top - iTop < 0) {
          if (dTop + marginTop + (helperElement.offsetHeight - iTop) >= 0) {
            var tempDraEleTop = this.dragLimit.top + dTop - iTop;
            if (tempDraEleTop + marginTop + iTop < 0) {
              draEleTop -= marginTop + iTop;
            } else {
              draEleTop = tempDraEleTop;
            }
          } else {
            draEleTop -= marginTop + iTop;
          }
        }
      }
      if (this.dragArea && this.helperElement.classList.contains("e-treeview")) {
        var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop) + parseFloat(styles.marginBottom));
        draEleTop = draEleTop + helperHeight > this.dragLimit.bottom ? this.dragLimit.bottom - helperHeight : draEleTop;
      }
      if (this.enableScrollHandler && !this.clone) {
        draEleTop -= this.parentScrollY;
        draEleLeft -= this.parentScrollX;
      }
      if (this.dragArea && typeof this.dragArea !== "string" && this.dragArea.classList.contains("e-kanban-content") && this.dragArea.style.position === "relative") {
        draEleTop += this.dragArea.scrollTop;
      }
      var dragValue = this.getProcessedPositionValue({
        top: draEleTop + "px",
        left: draEleLeft + "px"
      });
      setStyleAttribute(helperElement, this.getDragPosition(dragValue));
      if (!this.elementInViewport(helperElement) && this.enableAutoScroll && !this.helperElement.classList.contains("e-treeview")) {
        this.helperElement.scrollIntoView();
      }
      var elements = document.querySelectorAll(":hover");
      if (this.enableAutoScroll && this.helperElement.classList.contains("e-treeview")) {
        if (elements.length === 0) {
          elements = this.getPathElements(evt);
        }
        var scrollParent = this.getScrollParent(elements, false);
        if (this.elementInViewport(this.helperElement)) {
          this.getScrollPosition(scrollParent, draEleTop);
        } else if (!this.elementInViewport(this.helperElement)) {
          elements = [].slice.call(document.querySelectorAll(":hover"));
          if (elements.length === 0) {
            elements = this.getPathElements(evt);
          }
          scrollParent = this.getScrollParent(elements, true);
          this.getScrollPosition(scrollParent, draEleTop);
        }
      }
      this.dragProcessStarted = true;
      this.prevLeft = left;
      this.prevTop = top;
      this.position.left = left;
      this.position.top = top;
      this.pageX = pagex;
      this.pageY = pagey;
    };
    Draggable2.prototype.getScrollParent = function(node, reverse) {
      var nodeEl = reverse ? node.reverse() : node;
      var hasScroll;
      for (var i = nodeEl.length - 1; i >= 0; i--) {
        hasScroll = window.getComputedStyle(nodeEl[parseInt(i.toString(), 10)])["overflow-y"];
        if ((hasScroll === "auto" || hasScroll === "scroll") && nodeEl[parseInt(i.toString(), 10)].scrollHeight > nodeEl[parseInt(i.toString(), 10)].clientHeight) {
          return nodeEl[parseInt(i.toString(), 10)];
        }
      }
      hasScroll = window.getComputedStyle(document.scrollingElement)["overflow-y"];
      if (hasScroll === "visible") {
        document.scrollingElement.style.overflow = "auto";
        return document.scrollingElement;
      }
    };
    Draggable2.prototype.getScrollPosition = function(nodeEle, draEleTop) {
      if (nodeEle && nodeEle === document.scrollingElement) {
        if (nodeEle.clientHeight + document.scrollingElement.scrollTop - this.helperElement.clientHeight < draEleTop && nodeEle.getBoundingClientRect().height + this.parentClientRect.top > draEleTop) {
          nodeEle.scrollTop += this.helperElement.clientHeight;
        } else if (nodeEle.scrollTop > draEleTop - this.helperElement.clientHeight) {
          nodeEle.scrollTop -= this.helperElement.clientHeight;
        }
      } else if (nodeEle && nodeEle !== document.scrollingElement) {
        var docScrollTop = document.scrollingElement.scrollTop;
        var helperClientHeight = this.helperElement.clientHeight;
        if (nodeEle.clientHeight + nodeEle.getBoundingClientRect().top - helperClientHeight + docScrollTop < draEleTop) {
          nodeEle.scrollTop += this.helperElement.clientHeight;
        } else if (nodeEle.getBoundingClientRect().top > draEleTop - helperClientHeight - docScrollTop) {
          nodeEle.scrollTop -= this.helperElement.clientHeight;
        }
      }
    };
    Draggable2.prototype.getPathElements = function(evt) {
      var elementTop = evt.clientX > 0 ? evt.clientX : 0;
      var elementLeft = evt.clientY > 0 ? evt.clientY : 0;
      return document.elementsFromPoint(elementTop, elementLeft);
    };
    Draggable2.prototype.triggerOutFunction = function(evt, eleObj) {
      this.hoverObject.instance.intOut(evt, eleObj.target);
      this.hoverObject.instance.dragData[this.scope] = null;
      this.hoverObject = null;
    };
    Draggable2.prototype.getDragPosition = function(dragValue) {
      var temp = extend({}, dragValue);
      if (this.axis) {
        if (this.axis === "x") {
          delete temp.top;
        } else if (this.axis === "y") {
          delete temp.left;
        }
      }
      return temp;
    };
    Draggable2.prototype.getDocumentWidthHeight = function(str) {
      var docBody = document.body;
      var docEle = document.documentElement;
      var returnValue = Math.max(docBody["scroll" + str], docEle["scroll" + str], docBody["offset" + str], docEle["offset" + str], docEle["client" + str]);
      return returnValue;
    };
    Draggable2.prototype.intDragStop = function(evt) {
      this.dragProcessStarted = false;
      if (!isUndefined(evt.changedTouches) && evt.changedTouches.length !== 1) {
        return;
      }
      var type = ["touchend", "pointerup", "mouseup"];
      if (type.indexOf(evt.type) !== -1) {
        if (this.dragStop) {
          var curTarget = this.getProperTargetElement(evt);
          this.trigger("dragStop", {
            event: evt,
            element: this.element,
            target: curTarget,
            helper: this.helperElement
          });
        }
        this.intDestroy(evt);
      } else {
        this.element.setAttribute("aria-grabbed", "false");
      }
      var eleObj = this.checkTargetElement(evt);
      if (eleObj.target && eleObj.instance) {
        eleObj.instance.dragStopCalled = true;
        eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
        eleObj.instance.intDrop(evt, eleObj.target);
      }
      this.setGlobalDroppables(true);
      document.body.classList.remove("e-prevent-select");
    };
    Draggable2.prototype.intDestroy = function(evt) {
      this.dragProcessStarted = false;
      this.toggleEvents();
      document.body.classList.remove("e-prevent-select");
      this.element.setAttribute("aria-grabbed", "false");
      EventHandler.remove(document, Browser.isSafari() ? "touchmove" : Browser.touchMoveEvent, this.intDragStart);
      EventHandler.remove(document, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.intDragStop);
      EventHandler.remove(document, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.intDestroy);
      EventHandler.remove(document, Browser.isSafari() ? "touchmove" : Browser.touchMoveEvent, this.intDrag);
      if (this.isDragStarted()) {
        this.isDragStarted(true);
      }
    };
    Draggable2.prototype.onPropertyChanged = function(newProp, oldProp) {
    };
    Draggable2.prototype.getModuleName = function() {
      return "draggable";
    };
    Draggable2.prototype.isDragStarted = function(change) {
      if (change) {
        isDraggedObject.isDragged = !isDraggedObject.isDragged;
      }
      return isDraggedObject.isDragged;
    };
    Draggable2.prototype.setDragArea = function() {
      var eleWidthBound;
      var eleHeightBound;
      var top = 0;
      var left = 0;
      var ele;
      var type = typeof this.dragArea;
      if (type === "string") {
        ele = select(this.dragArea);
      } else {
        ele = this.dragArea;
      }
      if (ele) {
        var elementArea = ele.getBoundingClientRect();
        eleWidthBound = ele.scrollWidth ? ele.scrollWidth : elementArea.right - elementArea.left;
        eleHeightBound = ele.scrollHeight ? this.dragArea && !isNullOrUndefined(this.helperElement) && this.helperElement.classList.contains("e-treeview") ? ele.clientHeight : ele.scrollHeight : elementArea.bottom - elementArea.top;
        var keys2 = ["Top", "Left", "Bottom", "Right"];
        var styles = getComputedStyle(ele);
        for (var i = 0; i < keys2.length; i++) {
          var key = keys2[parseInt(i.toString(), 10)];
          var tborder = styles["border" + key + "Width"];
          var tpadding = styles["padding" + key];
          var lowerKey = key.toLowerCase();
          this.borderWidth["" + lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
          this.padding["" + lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
        }
        if (this.dragArea && !isNullOrUndefined(this.helperElement) && this.helperElement.classList.contains("e-treeview")) {
          top = elementArea.top + document.scrollingElement.scrollTop;
        } else {
          top = elementArea.top;
        }
        left = elementArea.left;
        this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
        this.dragLimit.top = ele.offsetTop + this.borderWidth.top + this.padding.top;
        this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
        this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
      }
    };
    Draggable2.prototype.getProperTargetElement = function(evt) {
      var intCoord = this.getCoordinates(evt);
      var ele;
      var prevStyle = this.helperElement.style.pointerEvents || "";
      var isPointer = evt.type.indexOf("pointer") !== -1 && Browser.info.name === "safari" && parseInt(Browser.info.version, 10) > 12;
      if (compareElementParent(evt.target, this.helperElement) || evt.type.indexOf("touch") !== -1 || isPointer) {
        this.helperElement.style.pointerEvents = "none";
        ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
        this.helperElement.style.pointerEvents = prevStyle;
      } else {
        ele = evt.target;
      }
      return ele;
    };
    Draggable2.prototype.currentStateCheck = function(ele, oldEle) {
      var elem;
      if (!isNullOrUndefined(this.currentStateTarget) && this.currentStateTarget !== ele) {
        elem = this.currentStateTarget;
      } else {
        elem = !isNullOrUndefined(oldEle) ? oldEle : ele;
      }
      return elem;
    };
    Draggable2.prototype.getMousePosition = function(evt, isdragscroll) {
      var dragEle = evt.srcElement !== void 0 ? evt.srcElement : evt.target;
      var intCoord = this.getCoordinates(evt);
      var pageX;
      var pageY;
      var isOffsetParent = isNullOrUndefined(dragEle.offsetParent);
      if (isdragscroll) {
        pageX = this.clone ? intCoord.pageX : intCoord.pageX + (isOffsetParent ? 0 : dragEle.offsetParent.scrollLeft) - this.relativeXPosition;
        pageY = this.clone ? intCoord.pageY : intCoord.pageY + (isOffsetParent ? 0 : dragEle.offsetParent.scrollTop) - this.relativeYPosition;
      } else {
        pageX = this.clone ? intCoord.pageX : intCoord.pageX + window.pageXOffset - this.relativeXPosition;
        pageY = this.clone ? intCoord.pageY : intCoord.pageY + window.pageYOffset - this.relativeYPosition;
      }
      if (document.scrollingElement && !isdragscroll && !this.clone) {
        var ele = document.scrollingElement;
        var isVerticalScroll = ele.scrollHeight > 0 && ele.scrollHeight > ele.clientHeight && ele.scrollTop > 0;
        var isHorrizontalScroll = ele.scrollWidth > 0 && ele.scrollWidth > ele.clientWidth && ele.scrollLeft > 0;
        pageX = isHorrizontalScroll ? pageX - ele.scrollLeft : pageX;
        pageY = isVerticalScroll ? pageY - ele.scrollTop : pageY;
      }
      return {
        left: pageX - (this.margin.left + this.cursorAt.left),
        top: pageY - (this.margin.top + this.cursorAt.top)
      };
    };
    Draggable2.prototype.getCoordinates = function(evt) {
      if (evt.type.indexOf("touch") > -1) {
        return evt.changedTouches[0];
      }
      return evt;
    };
    Draggable2.prototype.getHelperElement = function(evt) {
      var element2;
      if (this.clone) {
        if (this.helper) {
          element2 = this.helper({
            sender: evt,
            element: this.target
          });
        } else {
          element2 = createElement("div", {
            className: "e-drag-helper e-block-touch",
            innerHTML: "Draggable"
          });
          document.body.appendChild(element2);
        }
      } else {
        element2 = this.element;
      }
      return element2;
    };
    Draggable2.prototype.setGlobalDroppables = function(reset, drag, helper) {
      this.droppables[this.scope] = reset ? null : {
        draggable: drag,
        helper,
        draggedElement: this.element
      };
    };
    Draggable2.prototype.checkTargetElement = function(evt) {
      var target = this.getProperTargetElement(evt);
      var dropIns = this.getDropInstance(target);
      if (!dropIns && target && !isNullOrUndefined(target.parentNode)) {
        var parent_1 = closest(target.parentNode, ".e-droppable") || target.parentElement;
        if (parent_1) {
          dropIns = this.getDropInstance(parent_1);
        }
      }
      return {
        target,
        instance: dropIns
      };
    };
    Draggable2.prototype.getDropInstance = function(ele) {
      var name = "getModuleName";
      var drop;
      var eleInst = ele && ele.ej2_instances;
      if (eleInst) {
        for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
          var inst = eleInst_1[_i];
          if (inst["" + name]() === "droppable") {
            drop = inst;
            break;
          }
        }
      }
      return drop;
    };
    Draggable2.prototype.destroy = function() {
      this.toggleEvents(true);
      _super.prototype.destroy.call(this);
    };
    var Draggable_1;
    __decorate3([Complex({}, Position)], Draggable2.prototype, "cursorAt", void 0);
    __decorate3([Property(true)], Draggable2.prototype, "clone", void 0);
    __decorate3([Property()], Draggable2.prototype, "dragArea", void 0);
    __decorate3([Property()], Draggable2.prototype, "isDragScroll", void 0);
    __decorate3([Property()], Draggable2.prototype, "isReplaceDragEle", void 0);
    __decorate3([Property(true)], Draggable2.prototype, "isPreventSelect", void 0);
    __decorate3([Event2()], Draggable2.prototype, "drag", void 0);
    __decorate3([Event2()], Draggable2.prototype, "dragStart", void 0);
    __decorate3([Event2()], Draggable2.prototype, "dragStop", void 0);
    __decorate3([Property(1)], Draggable2.prototype, "distance", void 0);
    __decorate3([Property()], Draggable2.prototype, "handle", void 0);
    __decorate3([Property()], Draggable2.prototype, "abort", void 0);
    __decorate3([Property()], Draggable2.prototype, "helper", void 0);
    __decorate3([Property("default")], Draggable2.prototype, "scope", void 0);
    __decorate3([Property("")], Draggable2.prototype, "dragTarget", void 0);
    __decorate3([Property()], Draggable2.prototype, "axis", void 0);
    __decorate3([Property()], Draggable2.prototype, "queryPositionInfo", void 0);
    __decorate3([Property(false)], Draggable2.prototype, "enableTailMode", void 0);
    __decorate3([Property(false)], Draggable2.prototype, "skipDistanceCheck", void 0);
    __decorate3([Property(true)], Draggable2.prototype, "preventDefault", void 0);
    __decorate3([Property(false)], Draggable2.prototype, "enableAutoScroll", void 0);
    __decorate3([Property(false)], Draggable2.prototype, "enableTapHold", void 0);
    __decorate3([Property(750)], Draggable2.prototype, "tapHoldThreshold", void 0);
    __decorate3([Property(false)], Draggable2.prototype, "enableScrollHandler", void 0);
    Draggable2 = Draggable_1 = __decorate3([NotifyPropertyChanges], Draggable2);
    return Draggable2;
  }(Base)
);

// node_modules/@syncfusion/ej2-base/src/droppable.js
var __extends4 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Droppable = (
  /** @class */
  function(_super) {
    __extends4(Droppable2, _super);
    function Droppable2(element2, options) {
      var _this = _super.call(this, options, element2) || this;
      _this.mouseOver = false;
      _this.dragData = {};
      _this.dragStopCalled = false;
      _this.bind();
      return _this;
    }
    Droppable2.prototype.bind = function() {
      this.wireEvents();
    };
    Droppable2.prototype.wireEvents = function() {
      EventHandler.add(this.element, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.intDrop, this);
    };
    Droppable2.prototype.onPropertyChanged = function(newProp, oldProp) {
    };
    Droppable2.prototype.getModuleName = function() {
      return "droppable";
    };
    Droppable2.prototype.intOver = function(event, element2) {
      if (!this.mouseOver) {
        var drag = this.dragData[this.scope];
        this.trigger("over", {
          event,
          target: element2,
          dragData: drag
        });
        this.mouseOver = true;
      }
    };
    Droppable2.prototype.intOut = function(event, element2) {
      if (this.mouseOver) {
        this.trigger("out", {
          evt: event,
          target: element2
        });
        this.mouseOver = false;
      }
    };
    Droppable2.prototype.intDrop = function(evt, element2) {
      if (!this.dragStopCalled) {
        return;
      } else {
        this.dragStopCalled = false;
      }
      var accept = true;
      var drag = this.dragData[this.scope];
      var isDrag = drag ? drag.helper && isVisible(drag.helper) : false;
      var area;
      if (isDrag) {
        area = this.isDropArea(evt, drag.helper, element2);
        if (this.accept) {
          accept = matches(drag.helper, this.accept);
        }
      }
      if (isDrag && this.drop && area.canDrop && accept) {
        this.trigger("drop", {
          event: evt,
          target: area.target,
          droppedElement: drag.helper,
          dragData: drag
        });
      }
      this.mouseOver = false;
    };
    Droppable2.prototype.isDropArea = function(evt, helper, element2) {
      var area = {
        canDrop: true,
        target: element2 || evt.target
      };
      var isTouch = evt.type === "touchend";
      if (isTouch || area.target === helper) {
        helper.style.display = "none";
        var coord = isTouch ? evt.changedTouches[0] : evt;
        var ele = document.elementFromPoint(coord.clientX, coord.clientY);
        area.canDrop = false;
        area.canDrop = compareElementParent(ele, this.element);
        if (area.canDrop) {
          area.target = ele;
        }
        helper.style.display = "";
      }
      return area;
    };
    Droppable2.prototype.destroy = function() {
      EventHandler.remove(this.element, Browser.isSafari() ? "touchend" : Browser.touchEndEvent, this.intDrop);
      _super.prototype.destroy.call(this);
    };
    __decorate4([Property()], Droppable2.prototype, "accept", void 0);
    __decorate4([Property("default")], Droppable2.prototype, "scope", void 0);
    __decorate4([Event2()], Droppable2.prototype, "drop", void 0);
    __decorate4([Event2()], Droppable2.prototype, "over", void 0);
    __decorate4([Event2()], Droppable2.prototype, "out", void 0);
    Droppable2 = __decorate4([NotifyPropertyChanges], Droppable2);
    return Droppable2;
  }(Base)
);

// node_modules/@syncfusion/ej2-base/src/keyboard.js
var __extends5 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var keyCode = {
  "backspace": 8,
  "tab": 9,
  "enter": 13,
  "shift": 16,
  "control": 17,
  "alt": 18,
  "pause": 19,
  "capslock": 20,
  "space": 32,
  "escape": 27,
  "pageup": 33,
  "pagedown": 34,
  "end": 35,
  "home": 36,
  "leftarrow": 37,
  "uparrow": 38,
  "rightarrow": 39,
  "downarrow": 40,
  "insert": 45,
  "delete": 46,
  "f1": 112,
  "f2": 113,
  "f3": 114,
  "f4": 115,
  "f5": 116,
  "f6": 117,
  "f7": 118,
  "f8": 119,
  "f9": 120,
  "f10": 121,
  "f11": 122,
  "f12": 123,
  "semicolon": 186,
  "plus": 187,
  "comma": 188,
  "minus": 189,
  "dot": 190,
  "forwardslash": 191,
  "graveaccent": 192,
  "openbracket": 219,
  "backslash": 220,
  "closebracket": 221,
  "singlequote": 222
};
var KeyboardEvents = (
  /** @class */
  function(_super) {
    __extends5(KeyboardEvents2, _super);
    function KeyboardEvents2(element2, options) {
      var _this = _super.call(this, options, element2) || this;
      _this.keyPressHandler = function(e) {
        var isAltKey = e.altKey;
        var isCtrlKey = e.ctrlKey;
        var isShiftKey = e.shiftKey;
        var curkeyCode = e.which;
        var keys2 = Object.keys(_this.keyConfigs);
        for (var _i = 0, keys_1 = keys2; _i < keys_1.length; _i++) {
          var key = keys_1[_i];
          var configCollection = _this.keyConfigs["" + key].split(",");
          for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
            var rconfig = configCollection_1[_a];
            var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
            if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey && isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
              e.action = key;
              if (_this.keyAction) {
                _this.keyAction(e);
              }
            }
          }
        }
      };
      _this.bind();
      return _this;
    }
    KeyboardEvents_1 = KeyboardEvents2;
    KeyboardEvents2.prototype.destroy = function() {
      this.unwireEvents();
      _super.prototype.destroy.call(this);
    };
    KeyboardEvents2.prototype.onPropertyChanged = function(newProp, oldProp) {
    };
    KeyboardEvents2.prototype.bind = function() {
      this.wireEvents();
    };
    KeyboardEvents2.prototype.getModuleName = function() {
      return "keyboard";
    };
    KeyboardEvents2.prototype.wireEvents = function() {
      this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    KeyboardEvents2.prototype.unwireEvents = function() {
      this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    KeyboardEvents2.getKeyConfigData = function(config) {
      if (config in this.configCache) {
        return this.configCache["" + config];
      }
      var keys2 = config.toLowerCase().split("+");
      var keyData = {
        altKey: keys2.indexOf("alt") !== -1 ? true : false,
        ctrlKey: keys2.indexOf("ctrl") !== -1 ? true : false,
        shiftKey: keys2.indexOf("shift") !== -1 ? true : false,
        keyCode: null
      };
      if (keys2[keys2.length - 1].length > 1 && !!Number(keys2[keys2.length - 1])) {
        keyData.keyCode = Number(keys2[keys2.length - 1]);
      } else {
        keyData.keyCode = KeyboardEvents_1.getKeyCode(keys2[keys2.length - 1]);
      }
      KeyboardEvents_1.configCache["" + config] = keyData;
      return keyData;
    };
    KeyboardEvents2.getKeyCode = function(keyVal) {
      return keyCode["" + keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    var KeyboardEvents_1;
    KeyboardEvents2.configCache = {};
    __decorate5([Property({})], KeyboardEvents2.prototype, "keyConfigs", void 0);
    __decorate5([Property("keyup")], KeyboardEvents2.prototype, "eventName", void 0);
    __decorate5([Event2()], KeyboardEvents2.prototype, "keyAction", void 0);
    KeyboardEvents2 = KeyboardEvents_1 = __decorate5([NotifyPropertyChanges], KeyboardEvents2);
    return KeyboardEvents2;
  }(Base)
);

// node_modules/@syncfusion/ej2-base/src/l10n.js
var L10n = (
  /** @class */
  function() {
    function L10n2(controlName, localeStrings, locale) {
      this.controlName = controlName;
      this.localeStrings = localeStrings;
      this.setLocale(locale || defaultCulture);
    }
    L10n2.prototype.setLocale = function(locale) {
      var intLocale = this.intGetControlConstant(L10n2.locale, locale);
      this.currentLocale = intLocale || this.localeStrings;
    };
    L10n2.load = function(localeObject) {
      this.locale = extend(this.locale, localeObject, {}, true);
    };
    L10n2.prototype.getConstant = function(prop) {
      if (!isNullOrUndefined(this.currentLocale["" + prop])) {
        return this.currentLocale["" + prop];
      } else {
        return this.localeStrings["" + prop] || "";
      }
    };
    L10n2.prototype.intGetControlConstant = function(curObject, locale) {
      if (curObject["" + locale]) {
        return curObject["" + locale][this.controlName];
      }
      return null;
    };
    L10n2.locale = {};
    return L10n2;
  }()
);

// node_modules/@syncfusion/ej2-base/src/touch.js
var __extends6 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SwipeSettings = (
  /** @class */
  function(_super) {
    __extends6(SwipeSettings2, _super);
    function SwipeSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate6([Property(50)], SwipeSettings2.prototype, "swipeThresholdDistance", void 0);
    return SwipeSettings2;
  }(ChildProperty)
);
var swipeRegex = /(Up|Down)/;
var Touch = (
  /** @class */
  function(_super) {
    __extends6(Touch2, _super);
    function Touch2(element2, options) {
      var _this = _super.call(this, options, element2) || this;
      _this.touchAction = true;
      _this.tapCount = 0;
      _this.startEvent = function(evt) {
        if (_this.touchAction === true) {
          var point = _this.updateChangeTouches(evt);
          if (evt.changedTouches !== void 0) {
            _this.touchAction = false;
          }
          _this.isTouchMoved = false;
          _this.movedDirection = "";
          _this.startPoint = _this.lastMovedPoint = {
            clientX: point.clientX,
            clientY: point.clientY
          };
          _this.startEventData = point;
          _this.hScrollLocked = _this.vScrollLocked = false;
          _this.tStampStart = Date.now();
          _this.timeOutTapHold = setTimeout(function() {
            _this.tapHoldEvent(evt);
          }, _this.tapHoldThreshold);
          EventHandler.add(_this.element, Browser.touchMoveEvent, _this.moveEvent, _this);
          EventHandler.add(_this.element, Browser.touchEndEvent, _this.endEvent, _this);
          EventHandler.add(_this.element, Browser.touchCancelEvent, _this.cancelEvent, _this);
        }
      };
      _this.moveEvent = function(evt) {
        var point = _this.updateChangeTouches(evt);
        _this.movedPoint = point;
        _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
        var eScrollArgs = {};
        if (_this.isTouchMoved) {
          clearTimeout(_this.timeOutTapHold);
          _this.calcScrollPoints(evt);
          var scrollArg = {
            startEvents: _this.startEventData,
            originalEvent: evt,
            startX: _this.startPoint.clientX,
            startY: _this.startPoint.clientY,
            distanceX: _this.distanceX,
            distanceY: _this.distanceY,
            scrollDirection: _this.scrollDirection,
            velocity: _this.getVelocity(point)
          };
          eScrollArgs = extend(eScrollArgs, {}, scrollArg);
          _this.trigger("scroll", eScrollArgs);
          _this.lastMovedPoint = {
            clientX: point.clientX,
            clientY: point.clientY
          };
        }
      };
      _this.cancelEvent = function(evt) {
        clearTimeout(_this.timeOutTapHold);
        clearTimeout(_this.timeOutTap);
        _this.tapCount = 0;
        _this.swipeFn(evt);
        EventHandler.remove(_this.element, Browser.touchCancelEvent, _this.cancelEvent);
      };
      _this.endEvent = function(evt) {
        _this.swipeFn(evt);
        if (!_this.isTouchMoved) {
          if (typeof _this.tap === "function") {
            _this.trigger("tap", {
              originalEvent: evt,
              tapCount: ++_this.tapCount
            });
            _this.timeOutTap = setTimeout(function() {
              _this.tapCount = 0;
            }, _this.tapThreshold);
          }
        }
        _this.modeclear();
      };
      _this.swipeFn = function(evt) {
        clearTimeout(_this.timeOutTapHold);
        clearTimeout(_this.timeOutTap);
        var point = _this.updateChangeTouches(evt);
        var diffX = point.clientX - _this.startPoint.clientX;
        var diffY = point.clientY - _this.startPoint.clientY;
        diffX = Math.floor(diffX < 0 ? -1 * diffX : diffX);
        diffY = Math.floor(diffY < 0 ? -1 * diffY : diffX);
        _this.isTouchMoved = diffX > 1 || diffY > 1;
        var isFirefox = /Firefox/.test(Browser.userAgent);
        if (isFirefox && point.clientX === 0 && point.clientY === 0 && evt.type === "mouseup") {
          _this.isTouchMoved = false;
        }
        _this.endPoint = point;
        _this.calcPoints(evt);
        var swipeArgs = {
          originalEvent: evt,
          startEvents: _this.startEventData,
          startX: _this.startPoint.clientX,
          startY: _this.startPoint.clientY,
          distanceX: _this.distanceX,
          distanceY: _this.distanceY,
          swipeDirection: _this.movedDirection,
          velocity: _this.getVelocity(point)
        };
        if (_this.isTouchMoved) {
          var tDistance = _this.swipeSettings.swipeThresholdDistance;
          var eSwipeArgs = extend(void 0, _this.defaultArgs, swipeArgs);
          var canTrigger = false;
          var ele = _this.element;
          var scrollBool = _this.isScrollable(ele);
          var moved = swipeRegex.test(_this.movedDirection);
          if (tDistance < _this.distanceX && !moved || tDistance < _this.distanceY && moved) {
            if (!scrollBool) {
              canTrigger = true;
            } else {
              canTrigger = _this.checkSwipe(ele, moved);
            }
          }
          if (canTrigger) {
            _this.trigger("swipe", eSwipeArgs);
          }
        }
        _this.modeclear();
      };
      _this.modeclear = function() {
        _this.modeClear = setTimeout(function() {
          _this.touchAction = true;
        }, typeof _this.tap !== "function" ? 0 : 20);
        _this.lastTapTime = (/* @__PURE__ */ new Date()).getTime();
        EventHandler.remove(_this.element, Browser.touchMoveEvent, _this.moveEvent);
        EventHandler.remove(_this.element, Browser.touchEndEvent, _this.endEvent);
        EventHandler.remove(_this.element, Browser.touchCancelEvent, _this.cancelEvent);
      };
      _this.bind();
      return _this;
    }
    Touch2.prototype.onPropertyChanged = function(newProp, oldProp) {
    };
    Touch2.prototype.bind = function() {
      this.wireEvents();
      if (Browser.isIE) {
        this.element.classList.add("e-block-touch");
      }
    };
    Touch2.prototype.destroy = function() {
      this.unwireEvents();
      _super.prototype.destroy.call(this);
    };
    Touch2.prototype.wireEvents = function() {
      EventHandler.add(this.element, Browser.touchStartEvent, this.startEvent, this);
    };
    Touch2.prototype.unwireEvents = function() {
      EventHandler.remove(this.element, Browser.touchStartEvent, this.startEvent);
    };
    Touch2.prototype.getModuleName = function() {
      return "touch";
    };
    Touch2.prototype.isScrollable = function(element2) {
      var eleStyle = getComputedStyle(element2);
      var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
      if (/(auto|scroll)/.test(style)) {
        return true;
      }
      return false;
    };
    Touch2.prototype.tapHoldEvent = function(evt) {
      this.tapCount = 0;
      this.touchAction = true;
      EventHandler.remove(this.element, Browser.touchMoveEvent, this.moveEvent);
      EventHandler.remove(this.element, Browser.touchEndEvent, this.endEvent);
      var eTapArgs = {
        originalEvent: evt
      };
      this.trigger("tapHold", eTapArgs);
      EventHandler.remove(this.element, Browser.touchCancelEvent, this.cancelEvent);
    };
    Touch2.prototype.calcPoints = function(evt) {
      var point = this.updateChangeTouches(evt);
      this.defaultArgs = {
        originalEvent: evt
      };
      this.distanceX = Math.abs(Math.abs(point.clientX) - Math.abs(this.startPoint.clientX));
      this.distanceY = Math.abs(Math.abs(point.clientY) - Math.abs(this.startPoint.clientY));
      if (this.distanceX > this.distanceY) {
        this.movedDirection = point.clientX > this.startPoint.clientX ? "Right" : "Left";
      } else {
        this.movedDirection = point.clientY < this.startPoint.clientY ? "Up" : "Down";
      }
    };
    Touch2.prototype.calcScrollPoints = function(evt) {
      var point = this.updateChangeTouches(evt);
      this.defaultArgs = {
        originalEvent: evt
      };
      this.distanceX = Math.abs(Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX));
      this.distanceY = Math.abs(Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY));
      if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
        this.scrollDirection = point.clientX > this.lastMovedPoint.clientX ? "Right" : "Left";
        this.hScrollLocked = true;
      } else {
        this.scrollDirection = point.clientY < this.lastMovedPoint.clientY ? "Up" : "Down";
        this.vScrollLocked = true;
      }
    };
    Touch2.prototype.getVelocity = function(pnt) {
      var newX = pnt.clientX;
      var newY = pnt.clientY;
      var newT = Date.now();
      var xDist = newX - this.startPoint.clientX;
      var yDist = newY - this.startPoint.clientX;
      var interval = newT - this.tStampStart;
      return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    Touch2.prototype.checkSwipe = function(ele, flag) {
      var keys2 = ["scroll", "offset"];
      var temp = flag ? ["Height", "Top"] : ["Width", "Left"];
      if (ele[keys2[0] + temp[0]] <= ele[keys2[1] + temp[0]]) {
        return true;
      }
      return ele[keys2[0] + temp[1]] === 0 || ele[keys2[1] + temp[0]] + ele[keys2[0] + temp[1]] >= ele[keys2[0] + temp[0]];
    };
    Touch2.prototype.updateChangeTouches = function(evt) {
      var point = evt.changedTouches && evt.changedTouches.length !== 0 ? evt.changedTouches[0] : evt;
      return point;
    };
    __decorate6([Event2()], Touch2.prototype, "tap", void 0);
    __decorate6([Event2()], Touch2.prototype, "tapHold", void 0);
    __decorate6([Event2()], Touch2.prototype, "swipe", void 0);
    __decorate6([Event2()], Touch2.prototype, "scroll", void 0);
    __decorate6([Property(350)], Touch2.prototype, "tapThreshold", void 0);
    __decorate6([Property(750)], Touch2.prototype, "tapHoldThreshold", void 0);
    __decorate6([Complex({}, SwipeSettings)], Touch2.prototype, "swipeSettings", void 0);
    Touch2 = __decorate6([NotifyPropertyChanges], Touch2);
    return Touch2;
  }(Base)
);

// node_modules/@syncfusion/ej2-base/src/template.js
var LINES = new RegExp("\\n|\\r|\\s\\s+", "g");
var QUOTES = new RegExp(/'|"/g);
var IF_STMT = new RegExp("if ?\\(");
var ELSEIF_STMT = new RegExp("else if ?\\(");
var ELSE_STMT = new RegExp("else");
var FOR_STMT = new RegExp("for ?\\(");
var IF_OR_FOR = new RegExp("(/if|/for)");
var CALL_FUNCTION = new RegExp("\\((.*)\\)", "");
var NOT_NUMBER = new RegExp("^[0-9]+$", "g");
var WORD = new RegExp(`[\\w"'.\\s+]+`, "g");
var DBL_QUOTED_STR = new RegExp('"(.*?)"', "g");
var WORDIF = new RegExp(`[\\w"'@#$.\\s-+]+`, "g");
var exp = new RegExp("\\${([^}]*)}", "g");
var ARR_OBJ = /^\..*/gm;
var SINGLE_SLASH = /\\/gi;
var DOUBLE_SLASH = /\\\\/gi;
var WORDFUNC = new RegExp(`[\\w"'@#$.\\s+]+`, "g");
var WINDOWFUNC = /\window\./gm;
function compile(template, helper, ignorePrefix) {
  if (typeof template === "function") {
    return template;
  } else {
    var argName = "data";
    var evalExpResult = evalExp(template, argName, helper, ignorePrefix);
    var condtion = `var valueRegEx = (/value=\\'([A-Za-z0-9 _]*)((.)([\\w)(!-;?-■\\s]+)['])/g);
        var hrefRegex = (/(?:href)([\\s='"./]+)([\\w-./?=&\\\\#"]+)((.)([\\w)(!-;/?-■\\s]+)['])/g);
        if(str.match(valueRegEx)){
            var check = str.match(valueRegEx);
            var str1 = str;
            for (var i=0; i < check.length; i++) {
                var check1 = str.match(valueRegEx)[i].split('value=')[1];
                var change = check1.match(/^'/) !== null ? check1.replace(/^'/, '"') : check1;
                change =change.match(/.$/)[0] === '\\'' ? change.replace(/.$/,'"') : change;
                str1 = str1.replace(check1, change);
            }
            str = str.replace(str, str1);
        }
        else if (str.match(/(?:href='')/) === null) {
            if(str.match(hrefRegex)) {
                var check = str.match(hrefRegex);
                var str1 = str;
                for (var i=0; i < check.length; i++) {
                    var check1 = str.match(hrefRegex)[i].split('href=')[1];
                    if (check1) {
                        var change = check1.match(/^'/) !== null ? check1.replace(/^'/, '"') : check1;
                        change =change.match(/.$/)[0] === '\\'' ? change.replace(/.$/,'"') : change;
                        str1 = str1.replace(check1, change);
                    }
                }
                str = str.replace(str, str1);
            }
        }
        `;
    var fnCode = 'var str="' + evalExpResult + '";' + condtion + " return str;";
    var fn = new Function(argName, fnCode);
    return fn.bind(helper);
  }
}
function evalExp(str, nameSpace, helper, ignorePrefix) {
  var varCOunt = 0;
  var localKeys = [];
  var isClass = str.match(/class="([^"]+|)\s{2}/g);
  var singleSpace = "";
  if (isClass) {
    isClass.forEach(function(value) {
      singleSpace = value.replace(/\s\s+/g, " ");
      str = str.replace(value, singleSpace);
    });
  }
  if (exp.test(str)) {
    var insideBraces = false;
    var outputString = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i + ""] === "$" && str[i + 1] === "{") {
        insideBraces = true;
      } else if (str[i + ""] === "}") {
        insideBraces = false;
      }
      outputString += str[i + ""] === '"' && !insideBraces ? '\\"' : str[i + ""];
    }
    str = outputString;
  } else {
    str = str.replace(/\\?"/g, '\\"');
  }
  return str.replace(LINES, "").replace(DBL_QUOTED_STR, "'$1'").replace(exp, function(match, cnt, offset, matchStr) {
    var SPECIAL_CHAR = /@|#|\$/gm;
    var matches2 = cnt.match(CALL_FUNCTION);
    if (matches2) {
      var rlStr = matches2[1];
      if (ELSEIF_STMT.test(cnt)) {
        cnt = '";} ' + cnt.replace(matches2[1], rlStr.replace(WORD, function(str2) {
          str2 = str2.trim();
          return addNameSpace(str2, !QUOTES.test(str2) && localKeys.indexOf(str2) === -1, nameSpace, localKeys, ignorePrefix);
        })) + '{ \n str = str + "';
      } else if (IF_STMT.test(cnt)) {
        cnt = '"; ' + cnt.replace(matches2[1], rlStr.replace(WORDIF, function(strs) {
          return HandleSpecialCharArrObj(strs, nameSpace, localKeys, ignorePrefix);
        })) + '{ \n str = str + "';
      } else if (FOR_STMT.test(cnt)) {
        var rlStr_1 = matches2[1].split(" of ");
        cnt = '"; ' + cnt.replace(matches2[1], function(mtc) {
          localKeys.push(rlStr_1[0]);
          localKeys.push(rlStr_1[0] + "Index");
          varCOunt = varCOunt + 1;
          return "var i" + varCOunt + "=0; i" + varCOunt + " < " + addNameSpace(rlStr_1[1], true, nameSpace, localKeys, ignorePrefix) + ".length; i" + varCOunt + "++";
        }) + "{ \n " + rlStr_1[0] + "= " + addNameSpace(rlStr_1[1], true, nameSpace, localKeys, ignorePrefix) + "[i" + varCOunt + "]; \n var " + rlStr_1[0] + "Index=i" + varCOunt + '; \n str = str + "';
      } else {
        var fnStr = cnt.split("(");
        var fNameSpace = helper && Object.prototype.hasOwnProperty.call(helper, fnStr[0]) ? "this." : "global";
        fNameSpace = /\./.test(fnStr[0]) ? "" : fNameSpace;
        var ftArray = matches2[1].split(",");
        if (matches2[1].length !== 0 && !/data/.test(ftArray[0]) && !/window./.test(ftArray[0])) {
          matches2[1] = fNameSpace === "global" ? nameSpace + "." + matches2[1] : matches2[1];
        }
        var splRegexp = /@|\$|#/gm;
        var arrObj = /\]\./gm;
        if (WINDOWFUNC.test(cnt) && arrObj.test(cnt) || splRegexp.test(cnt)) {
          var splArrRegexp = /@|\$|#|\]\./gm;
          if (splArrRegexp.test(cnt)) {
            cnt = '"+ ' + (fNameSpace === "global" ? "" : fNameSpace) + cnt.replace(matches2[1], rlStr.replace(WORDFUNC, function(strs) {
              return HandleSpecialCharArrObj(strs, nameSpace, localKeys, ignorePrefix);
            })) + '+ "';
          }
        } else {
          cnt = '" + ' + (fNameSpace === "global" ? "" : fNameSpace) + cnt.replace(rlStr, addNameSpace(matches2[1].replace(/,( |)data.|,/gi, "," + nameSpace + ".").replace(/,( |)data.window/gi, ",window"), fNameSpace === "global" ? false : true, nameSpace, localKeys, ignorePrefix)) + '+"';
        }
      }
    } else if (ELSE_STMT.test(cnt)) {
      cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
    } else if (cnt.match(IF_OR_FOR)) {
      cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
    } else if (SPECIAL_CHAR.test(cnt)) {
      if (cnt.match(SINGLE_SLASH)) {
        cnt = SlashReplace(cnt);
      }
      cnt = '"+' + NameSpaceForspecialChar(cnt, localKeys.indexOf(cnt) === -1, nameSpace, localKeys) + '"]+"';
    } else {
      if (cnt.match(SINGLE_SLASH)) {
        cnt = SlashReplace(cnt);
        cnt = '"+' + NameSpaceForspecialChar(cnt, localKeys.indexOf(cnt) === -1, nameSpace, localKeys) + '"]+"';
      } else {
        cnt = cnt !== "" ? '"+' + addNameSpace(cnt.replace(/,/gi, "+" + nameSpace + "."), localKeys.indexOf(cnt) === -1, nameSpace, localKeys, ignorePrefix) + '+"' : "${}";
      }
    }
    return cnt;
  });
}
function addNameSpace(str, addNS, nameSpace, ignoreList, ignorePrefix) {
  return addNS && !NOT_NUMBER.test(str) && ignoreList.indexOf(str.split(".")[0]) === -1 && !ignorePrefix && str !== "true" && str !== "false" ? nameSpace + "." + str : str;
}
function NameSpaceArrObj(str, addNS, nameSpace, ignoreList) {
  var arrObjReg = /^\..*/gm;
  return addNS && !NOT_NUMBER.test(str) && ignoreList.indexOf(str.split(".")[0]) === -1 && !arrObjReg.test(str) ? nameSpace + "." + str : str;
}
function NameSpaceForspecialChar(str, addNS, nameSpace, ignoreList) {
  return addNS && !NOT_NUMBER.test(str) && ignoreList.indexOf(str.split(".")[0]) === -1 ? nameSpace + '["' + str : str;
}
function SlashReplace(tempStr) {
  var double = "\\\\";
  if (tempStr.match(DOUBLE_SLASH)) {
    return tempStr;
  } else {
    return tempStr.replace(SINGLE_SLASH, double);
  }
}
function HandleSpecialCharArrObj(str, nameSpaceNew, keys2, ignorePrefix) {
  str = str.trim();
  var windowFunc = /\window\./gm;
  if (!windowFunc.test(str)) {
    var quotes = /'|"/gm;
    var splRegexp = /@|\$|#/gm;
    if (splRegexp.test(str)) {
      str = NameSpaceForspecialChar(str, keys2.indexOf(str) === -1, nameSpaceNew, keys2) + '"]';
    }
    if (ARR_OBJ.test(str)) {
      return NameSpaceArrObj(str, !quotes.test(str) && keys2.indexOf(str) === -1, nameSpaceNew, keys2);
    } else {
      return addNameSpace(str, !quotes.test(str) && keys2.indexOf(str) === -1, nameSpaceNew, keys2, ignorePrefix);
    }
  } else {
    return str;
  }
}

// node_modules/@syncfusion/ej2-base/src/template-engine.js
var HAS_ROW = /^[\n\r.]+<tr|^<tr/;
var HAS_SVG = /^[\n\r.]+<svg|^<path|^<g/;
var blazorTemplates = {};
function getRandomId() {
  return "-" + Math.random().toString(36).substr(2, 5);
}
function compile2(templateString, helper, ignorePrefix) {
  var compiler = engineObj.compile(templateString, helper, ignorePrefix);
  return function(data, component, propName, templateId, isStringTemplate, index, element2, root) {
    var result = compiler(data, component, propName, element2, root);
    var blazorTemplateId = "BlazorTemplateId";
    if (isBlazor() && !isStringTemplate) {
      var randomId = getRandomId();
      var blazorId = templateId + randomId;
      if (!blazorTemplates["" + templateId]) {
        blazorTemplates["" + templateId] = [];
      }
      if (!isNullOrUndefined(index)) {
        var keys2 = Object.keys(blazorTemplates["" + templateId][parseInt(index.toString(), 10)]);
        for (var _i = 0, keys_1 = keys2; _i < keys_1.length; _i++) {
          var key = keys_1[_i];
          if (key !== blazorTemplateId && data["" + key]) {
            blazorTemplates["" + templateId][parseInt(index.toString(), 10)]["" + key] = data["" + key];
          }
          if (key === blazorTemplateId) {
            blazorId = blazorTemplates["" + templateId][parseInt(index.toString(), 10)]["" + key];
          }
        }
      } else {
        data["" + blazorTemplateId] = blazorId;
        blazorTemplates["" + templateId].push(data);
      }
      return propName === "rowTemplate" ? [createElement("tr", {
        id: blazorId,
        className: "e-blazor-template"
      })] : [createElement("div", {
        id: blazorId,
        className: "e-blazor-template"
      })];
    }
    if (typeof result === "string") {
      if (HAS_SVG.test(result)) {
        var ele = createElement("svg", {
          innerHTML: result
        });
        return ele.childNodes;
      } else {
        var ele = createElement(HAS_ROW.test(result) ? "table" : "div", {
          innerHTML: result
        });
        return ele.childNodes;
      }
    } else {
      return result;
    }
  };
}
function updateBlazorTemplate(templateId, templateName, comp, isEmpty, callBack) {
  if (isBlazor()) {
    var ejsIntrop = "sfBlazor";
    window["" + ejsIntrop].updateTemplate(templateName, blazorTemplates["" + templateId], templateId, comp, callBack);
    if (isEmpty !== false) {
      blazorTemplates["" + templateId] = [];
    }
  }
}
function resetBlazorTemplate(templateId, templateName, index) {
  var templateDiv = document.getElementById(templateId);
  if (templateDiv) {
    var innerTemplates = templateDiv.getElementsByClassName("blazor-inner-template");
    for (var i = 0; i < innerTemplates.length; i++) {
      var tempId = " ";
      if (!isNullOrUndefined(index)) {
        tempId = innerTemplates[parseInt(index.toString(), 10)].getAttribute("data-templateId");
      } else {
        tempId = innerTemplates[parseInt(i.toString(), 10)].getAttribute("data-templateId");
      }
      var tempElement = document.getElementById(tempId);
      if (tempElement) {
        var length_1 = tempElement.childNodes.length;
        for (var j = 0; j < length_1; j++) {
          if (!isNullOrUndefined(index)) {
            innerTemplates[parseInt(index.toString(), 10)].appendChild(tempElement.childNodes[0]);
            i = innerTemplates.length;
          } else {
            innerTemplates[parseInt(i.toString(), 10)].appendChild(tempElement.childNodes[0]);
          }
        }
      }
    }
  }
}
function setTemplateEngine(classObj) {
  engineObj.compile = classObj.compile;
}
function getTemplateEngine() {
  return engineObj.compile;
}
function initializeCSPTemplate(template, helper) {
  var boundFunc;
  template.prototype.CSPTemplate = true;
  if (!isNullOrUndefined(helper)) {
    boundFunc = template.bind(helper);
    boundFunc.prototype = Object.create(template.prototype);
  } else {
    boundFunc = template;
  }
  return boundFunc;
}
var Engine = (
  /** @class */
  function() {
    function Engine2() {
    }
    Engine2.prototype.compile = function(templateString, helper, ignorePrefix) {
      if (helper === void 0) {
        helper = {};
      }
      return compile(templateString, helper);
    };
    return Engine2;
  }()
);
var engineObj = {
  compile: new Engine().compile
};

// node_modules/@syncfusion/ej2-base/src/sanitize-helper.js
var removeTags = ["script", "style", "iframe[src]", 'link[href*="javascript:"]', 'object[type="text/x-scriptlet"]', 'object[data^="data:text/html;base64"]', 'img[src^="data:text/html;base64"]', '[src^="javascript:"]', '[dynsrc^="javascript:"]', '[lowsrc^="javascript:"]', '[type^="application/x-shockwave-flash"]'];
var removeAttrs = [{
  attribute: "href",
  selector: '[href*="javascript:"]'
}, {
  attribute: "background",
  selector: '[background^="javascript:"]'
}, {
  attribute: "style",
  selector: '[style*="javascript:"]'
}, {
  attribute: "style",
  selector: '[style*="expression("]'
}, {
  attribute: "href",
  selector: 'a[href^="data:text/html;base64"]'
}];
var jsEvents = ["onchange", "onclick", "onmouseover", "onmouseout", "onkeydown", "onload", "onerror", "onblur", "onfocus", "onbeforeload", "onbeforeunload", "onkeyup", "onsubmit", "onafterprint", "onbeforeonload", "onbeforeprint", "oncanplay", "oncanplaythrough", "oncontextmenu", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onformchange", "onforminput", "onhaschange", "oninput", "oninvalid", "onkeypress", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmousedown", "onmousemove", "onmouseup", "onmousewheel", "onoffline", "onoine", "ononline", "onpagehide", "onpageshow", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onreadystatechange", "onredo", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onstalled", "onstorage", "onsuspend", "ontimeupdate", "onundo", "onunload", "onvolumechange", "onwaiting", "onmouseenter", "onmouseleave", "onstart", "onpropertychange", "oncopy", "ontoggle", "onpointerout", "onpointermove", "onpointerleave", "onpointerenter", "onpointerrawupdate", "onpointerover", "onbeforecopy", "onbeforecut", "onbeforeinput"];
var SanitizeHtmlHelper = (
  /** @class */
  function() {
    function SanitizeHtmlHelper2() {
    }
    SanitizeHtmlHelper2.beforeSanitize = function() {
      return {
        selectors: {
          tags: removeTags,
          attributes: removeAttrs
        }
      };
    };
    SanitizeHtmlHelper2.sanitize = function(value) {
      if (isNullOrUndefined(value)) {
        return value;
      }
      var item = this.beforeSanitize();
      var output = this.serializeValue(item, value);
      return output;
    };
    SanitizeHtmlHelper2.serializeValue = function(item, value) {
      this.removeAttrs = item.selectors.attributes;
      this.removeTags = item.selectors.tags;
      this.wrapElement = document.createElement("div");
      this.wrapElement.innerHTML = value;
      this.removeXssTags();
      this.removeJsEvents();
      this.removeXssAttrs();
      var tempEleValue = this.wrapElement.innerHTML;
      this.removeElement();
      this.wrapElement = null;
      return tempEleValue.replace(/&amp;/g, "&");
    };
    SanitizeHtmlHelper2.removeElement = function() {
      var nodes = this.wrapElement.children;
      for (var j = 0; j < nodes.length; j++) {
        var attribute = nodes[parseInt(j.toString(), 10)].attributes;
        for (var i = 0; i < attribute.length; i++) {
          this.wrapElement.children[parseInt(j.toString(), 10)].removeAttribute(attribute[parseInt(i.toString(), 10)].localName);
        }
      }
    };
    SanitizeHtmlHelper2.removeXssTags = function() {
      var elements = this.wrapElement.querySelectorAll(this.removeTags.join(","));
      if (elements.length > 0) {
        elements.forEach(function(element2) {
          detach(element2);
        });
      } else {
        return;
      }
    };
    SanitizeHtmlHelper2.removeJsEvents = function() {
      var elements = this.wrapElement.querySelectorAll("[" + jsEvents.join("],[") + "]");
      if (elements.length > 0) {
        elements.forEach(function(element2) {
          jsEvents.forEach(function(attr) {
            if (element2.hasAttribute(attr)) {
              element2.removeAttribute(attr);
            }
          });
        });
      } else {
        return;
      }
    };
    SanitizeHtmlHelper2.removeXssAttrs = function() {
      var _this = this;
      this.removeAttrs.forEach(function(item, index) {
        var elements = _this.wrapElement.querySelectorAll(item.selector);
        if (elements.length > 0) {
          elements.forEach(function(element2) {
            element2.removeAttribute(item.attribute);
          });
        }
      });
    };
    return SanitizeHtmlHelper2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/util.js
function applyMixins(derivedClass, baseClass) {
  baseClass.forEach(function(baseClass2) {
    Object.getOwnPropertyNames(baseClass2.prototype).forEach(function(name) {
      if (!Object.prototype.hasOwnProperty.call(derivedClass.prototype, name) || baseClass2.isFormBase && name !== "constructor") {
        derivedClass.prototype["".concat(name)] = baseClass2.prototype["".concat(name)];
      }
    });
  });
}
function ComponentMixins(baseClass) {
  return function(derivedClass) {
    applyMixins(derivedClass, baseClass);
  };
}
function registerEvents(eventList, obj, direct) {
  var ngEventsEmitter = {};
  if (eventList && eventList.length) {
    for (var _i = 0, eventList_1 = eventList; _i < eventList_1.length; _i++) {
      var event_1 = eventList_1[_i];
      if (direct === true) {
        obj.propCollection["".concat(event_1)] = new EventEmitter(false);
        obj["".concat(event_1)] = obj.propCollection["".concat(event_1)];
      } else {
        ngEventsEmitter["".concat(event_1)] = new EventEmitter(false);
      }
    }
    if (direct !== true) {
      obj.setProperties(ngEventsEmitter, true);
    }
  }
}
function clearTemplate(_this, templateNames, index) {
  var regTemplates = Object.keys(_this.registeredTemplate);
  if (regTemplates.length) {
    var regProperties = templateNames && templateNames.filter(function(val) {
      return /\./g.test(val) ? false : true;
    });
    var tabaccordionTemp = /tab|accordion|toolbar/.test(_this.getModuleName());
    for (var _i = 0, _a = regProperties && regProperties || regTemplates; _i < _a.length; _i++) {
      var registeredTemplate = _a[_i];
      if (index && index.length) {
        for (var e = 0; e < index.length; e++) {
          if (tabaccordionTemp) {
            for (var m = 0; m < _this.registeredTemplate["".concat(registeredTemplate)].length; m++) {
              var value = _this.registeredTemplate["".concat(registeredTemplate)][parseInt(m.toString(), 10)];
              if (value && value === index["".concat(e)]) {
                value.destroy();
                _this.registeredTemplate["".concat(registeredTemplate)].splice(m, 1);
              }
            }
          } else {
            for (var m = 0; m < _this.registeredTemplate.template.length; m++) {
              var value = _this.registeredTemplate.template[parseInt(m.toString(), 10)].rootNodes[0];
              if (value === index["".concat(e)]) {
                var rt = _this.registeredTemplate["".concat(registeredTemplate)];
                rt[parseInt(m.toString(), 10)].destroy();
              }
            }
          }
        }
      } else {
        if (_this.registeredTemplate["".concat(registeredTemplate)]) {
          for (var _b = 0, _c = _this.registeredTemplate["".concat(registeredTemplate)]; _b < _c.length; _b++) {
            var rt = _c[_b];
            if (!rt.destroyed) {
              if (rt._view) {
                var pNode = rt._view.renderer.parentNode(rt.rootNodes[0]);
                if (!isNullOrUndefined(pNode)) {
                  for (var m = 0; m < rt.rootNodes.length; m++) {
                    pNode.appendChild(rt.rootNodes[parseInt(m.toString(), 10)]);
                  }
                }
              }
              rt.destroy();
            }
          }
        }
      }
      if (!tabaccordionTemp || !index) {
        delete _this.registeredTemplate["".concat(registeredTemplate)];
      }
    }
  }
  var _loop_1 = function(tagObject2) {
    if (tagObject2.instance) {
      tagObject2.instance.clearTemplate(templateNames && templateNames.filter(function(val) {
        var regExp3 = RegExp;
        return new regExp3(tagObject2.name).test(val) ? true : false;
      }));
    }
  };
  for (var _d = 0, _e = _this.tagObjects; _d < _e.length; _d++) {
    var tagObject = _e[_d];
    _loop_1(tagObject);
  }
}
function setValue2(nameSpace, value, object) {
  var keys2 = nameSpace.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  var fromObj = object || {};
  for (var i = 0; i < keys2.length; i++) {
    var key = keys2[parseInt(i.toString(), 10)];
    if (i + 1 === keys2.length) {
      fromObj["".concat(key)] = value === void 0 ? {} : value;
    } else if (fromObj["".concat(key)] === void 0) {
      fromObj["".concat(key)] = {};
    }
    fromObj = fromObj["".concat(key)];
  }
  return fromObj;
}

// node_modules/@syncfusion/ej2-angular-base/src/complex-array-base.js
var refRegex = /Ref$/;
var ComplexBase = (
  /** @class */
  function() {
    function ComplexBase2() {
      this.hasChanges = false;
      this.propCollection = {};
      this.dataSource = {};
      this.tags = [];
      this.tagObjects = [];
    }
    ComplexBase2.prototype.ngOnInit = function() {
      this.registeredTemplate = {};
      for (var _i = 0, _a = this.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        var objInstance = getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), this);
        if (objInstance) {
          this.tagObjects.push({
            instance: objInstance,
            name: tag
          });
        }
      }
      var templateProperties = Object.keys(this);
      for (var i = 0; i < templateProperties.length; i++) {
        var tempProp = getValue(templateProperties[parseInt(i.toString(), 10)], this);
        if (typeof tempProp === "object" && tempProp && tempProp.elementRef) {
          if (!getValue(templateProperties[parseInt(i.toString(), 10)].indexOf("Ref") !== -1 ? templateProperties[parseInt(i.toString(), 10)] : templateProperties[parseInt(i.toString(), 10)] + "Ref", this)) {
            setValue(templateProperties[parseInt(i.toString(), 10)].indexOf("Ref") !== -1 ? templateProperties[parseInt(i.toString(), 10)] : templateProperties[parseInt(i.toString(), 10)] + "Ref", tempProp, this);
          }
          if (getValue("viewContainerRef", this) && !getValue("_viewContainerRef", tempProp.elementRef.nativeElement) && !getValue("propName", tempProp.elementRef.nativeElement)) {
            setValue("_viewContainerRef", getValue("viewContainerRef", this), tempProp.elementRef.nativeElement);
            setValue("propName", templateProperties[parseInt(i.toString(), 10)].replace("Ref", ""), tempProp.elementRef.nativeElement);
          }
        }
      }
      templateProperties = Object.keys(this);
      templateProperties = templateProperties.filter(function(val) {
        return /Ref$/i.test(val);
      });
      for (var _b = 0, templateProperties_1 = templateProperties; _b < templateProperties_1.length; _b++) {
        var tempName = templateProperties_1[_b];
        var propName = tempName.replace("Ref", "");
        setValue(propName.replace("_", "."), getValue(propName, this), this.propCollection);
      }
      var propList = Object.keys(this);
      if (this.directivePropList) {
        for (var k = 0; k < this.directivePropList.length; k++) {
          var dirPropName = this.directivePropList[parseInt(k.toString(), 10)];
          if (propList.indexOf(dirPropName) !== -1 && (getValue(dirPropName, this) === false || getValue(dirPropName, this))) {
            setValue(dirPropName, getValue(dirPropName, this), this.propCollection);
          }
        }
        this.hasChanges = true;
      }
      this.isInitChanges = true;
    };
    ComplexBase2.prototype.registerEvents = function(eventList) {
      registerEvents(eventList, this, true);
    };
    ComplexBase2.prototype.ngOnChanges = function(changes) {
      for (var _i = 0, _a = Object.keys(changes); _i < _a.length; _i++) {
        var propName = _a[_i];
        var changedVal = changes["".concat(propName)];
        this.propCollection["".concat(propName)] = changedVal.currentValue;
      }
      this.isUpdated = false;
      this.hasChanges = true;
    };
    ComplexBase2.prototype.clearTemplate = function(templateNames) {
      clearTemplate(this, templateNames);
    };
    ComplexBase2.prototype.getProperties = function() {
      for (var _i = 0, _a = this.tagObjects; _i < _a.length; _i++) {
        var tagObject = _a[_i];
        this.propCollection[tagObject.name] = tagObject.instance.getProperties();
      }
      return this.propCollection;
    };
    ComplexBase2.prototype.isChanged = function() {
      var result = this.hasChanges;
      if (!isNullOrUndefined(this.propCollection[this.property])) {
        var tempProps = this.propCollection[this.property];
        var props = Object.keys(tempProps[0]);
        for (var d = 0; d < props.length; d++) {
          if (!isNullOrUndefined(this.propCollection[props[parseInt(d.toString(), 10)]])) {
            var val = getValue(props[parseInt(d.toString(), 10)], this);
            var propVal = this.propCollection[this.property][0][props[parseInt(d.toString(), 10)]];
            if (!isNullOrUndefined(val) && this.propCollection[props[parseInt(d.toString(), 10)]] !== val && propVal !== val) {
              setValue(props[parseInt(d.toString(), 10)], val, this.propCollection[this.property][0]);
              setValue(props[parseInt(d.toString(), 10)], val, this.propCollection);
              this.hasChanges = true;
              this.isUpdated = false;
            }
          }
        }
      }
      for (var _i = 0, _a = this.tagObjects; _i < _a.length; _i++) {
        var item = _a[_i];
        result = result || item.instance.hasChanges;
      }
      return result || this.hasChanges;
    };
    ComplexBase2.prototype.ngAfterContentChecked = function() {
      this.hasChanges = this.isChanged();
      if (this.isInitChanges || this.hasChanges) {
        var templateProperties = Object.keys(this);
        templateProperties = templateProperties.filter(function(val) {
          return refRegex.test(val);
        });
        for (var _i = 0, templateProperties_2 = templateProperties; _i < templateProperties_2.length; _i++) {
          var tempName = templateProperties_2[_i];
          var propName = tempName.replace("Ref", "");
          setValue(propName.replace("_", "."), getValue(propName, this), this.propCollection);
        }
      }
    };
    ComplexBase2.prototype.ngAfterViewChecked = function() {
      if (this.isUpdated) {
        this.hasChanges = false;
      }
    };
    ComplexBase2.prototype.ngAfterViewInit = function() {
      this.isInitChanges = false;
    };
    ComplexBase2.prototype.ngOnDestroy = function() {
      this.directivePropList = [];
    };
    return ComplexBase2;
  }()
);
var ArrayBase = (
  /** @class */
  function() {
    function ArrayBase2(propertyName) {
      this.list = [];
      this.hasChanges = false;
      this.propertyName = propertyName;
    }
    ArrayBase2.prototype.ngOnInit = function() {
      this.isInitChanges = true;
    };
    ArrayBase2.prototype.ngAfterContentInit = function() {
      var _this = this;
      var index = 0;
      this.list = this.children.map(function(child) {
        child.dirIndex = index++;
        child.property = _this.propertyName;
        return child;
      });
      this.hasChanges = true;
    };
    ArrayBase2.prototype.getProperties = function() {
      var onlyProp = [];
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        onlyProp.push(item.getProperties());
      }
      return onlyProp;
    };
    ArrayBase2.prototype.isChanged = function() {
      var _this = this;
      var result = false;
      var index = 0;
      var isSourceChanged = false;
      var childrenDataSource = this.children.map(function(child) {
        return child;
      });
      if (this.list.length === this.children.length) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[parseInt(i.toString(), 10)].propCollection.dataSource) {
            if (this.list[parseInt(i.toString(), 10)].dataSource && this.list[parseInt(i.toString(), 10)].propCollection.dataSource !== this.list[parseInt(i.toString(), 10)].dataSource) {
              this.list[parseInt(i.toString(), 10)].propCollection.dataSource = this.list[parseInt(i.toString(), 10)].dataSource;
              this.list[parseInt(i.toString(), 10)].hasChanges = true;
            }
            if (this.list[parseInt(i.toString(), 10)].property !== "series") {
              isSourceChanged = JSON.stringify(this.list[parseInt(i.toString(), 10)].propCollection.dataSource) !== JSON.stringify(childrenDataSource[parseInt(i.toString(), 10)].propCollection.dataSource);
            }
          }
          isSourceChanged = this.list[parseInt(i.toString(), 10)].hasChanges !== childrenDataSource[parseInt(i.toString(), 10)].hasChanges;
        }
      }
      this.hasNewChildren = this.list.length !== this.children.length || isSourceChanged ? true : null;
      if (this.hasNewChildren) {
        this.list = this.children.map(function(child) {
          child.dirIndex = index++;
          child.property = _this.propertyName;
          return child;
        });
      }
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        result = result || item.hasChanges;
      }
      return !!this.list.length && result;
    };
    ArrayBase2.prototype.clearTemplate = function(templateNames) {
      var _this = this;
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        item.clearTemplate(templateNames && templateNames.map(function(val) {
          var regExp3 = RegExp;
          return new regExp3(_this.propertyName).test(val) ? val.replace(_this.propertyName + ".", "") : val;
        }));
      }
    };
    ArrayBase2.prototype.ngAfterContentChecked = function() {
      this.hasChanges = this.isChanged();
      for (var i = 0; i < this.list.length; i++) {
        if (getValue("childColumns", this.list[parseInt(i.toString(), 10)]) && getValue("property", this.list[parseInt(i.toString(), 10)]) === "columns") {
          setValue("columns", getValue("childColumns", this.list[parseInt(i.toString(), 10)]).getProperties(), this.list[parseInt(i.toString(), 10)].propCollection);
        }
        this.list[parseInt(i.toString(), 10)].isUpdated = true;
      }
    };
    ArrayBase2.prototype.ngAfterViewInit = function() {
      this.isInitChanges = false;
    };
    ArrayBase2.prototype.ngOnDestroy = function() {
      this.list = [];
    };
    return ArrayBase2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/component-base.js
var ComponentBase = (
  /** @class */
  function() {
    function ComponentBase2() {
      this.isProtectedOnChange = true;
      this.isFormInit = true;
    }
    ComponentBase2.prototype.saveChanges = function(key, newValue, oldValue) {
      if (this.isProtectedOnChange) {
        return;
      }
      this.oldProperties["".concat(key)] = oldValue;
      this.changedProperties["".concat(key)] = newValue;
      this.finalUpdate();
      var changeTime = setTimeout(this.dataBind.bind(this));
      var clearUpdate = function() {
        clearTimeout(changeTime);
      };
      this.finalUpdate = clearUpdate;
    };
    ComponentBase2.prototype.ngOnInit = function(isTempRef) {
      var tempOnThis = isTempRef || this;
      tempOnThis.registeredTemplate = {};
      tempOnThis.ngBoundedEvents = {};
      tempOnThis.isAngular = true;
      tempOnThis.isFormInit = true;
      if (isTempRef) {
        this.tags = isTempRef.tags;
      }
      tempOnThis.tags = this.tags || [];
      tempOnThis.complexTemplate = this.complexTemplate || [];
      tempOnThis.tagObjects = [];
      tempOnThis.ngAttr = this.getAngularAttr(tempOnThis.element);
      tempOnThis.createElement = function(tagName, prop) {
        var ele = tempOnThis.srenderer ? tempOnThis.srenderer.createElement(tagName) : createElement(tagName);
        if (typeof prop === "undefined") {
          return ele;
        }
        ele.innerHTML = prop.innerHTML ? prop.innerHTML : "";
        if (prop.className !== void 0) {
          ele.className = prop.className;
        }
        if (prop.id !== void 0) {
          ele.id = prop.id;
        }
        if (prop.styles !== void 0) {
          ele.setAttribute("style", prop.styles);
        }
        if (tempOnThis.ngAttr !== void 0) {
          ele.setAttribute(tempOnThis.ngAttr, "");
        }
        if (prop.attrs !== void 0) {
          attributes(ele, prop.attrs);
        }
        return ele;
      };
      for (var _i = 0, _a = tempOnThis.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        var tagObject = {
          instance: getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), tempOnThis),
          name: tag
        };
        tempOnThis.tagObjects.push(tagObject);
      }
      var complexTemplates = Object.keys(tempOnThis);
      for (var i = 0; i < complexTemplates.length; i++) {
        var compProp = getValue(complexTemplates[parseInt(i.toString(), 10)], tempOnThis);
        if (typeof compProp === "object" && compProp && compProp.elementRef) {
          if (typeof compProp === "object" && compProp && compProp.elementRef && complexTemplates[parseInt(i.toString(), 10)].indexOf("_") !== -1 && complexTemplates[parseInt(i.toString(), 10)].indexOf("Ref") === -1) {
            setValue(complexTemplates[parseInt(i.toString(), 10)] + "Ref", compProp, tempOnThis);
          }
          if (tempOnThis.viewContainerRef && !getValue("_viewContainerRef", compProp.elementRef.nativeElement) && !getValue("propName", compProp.elementRef.nativeElement)) {
            setValue("_viewContainerRef", tempOnThis.viewContainerRef, compProp.elementRef.nativeElement);
            setValue("propName", complexTemplates[parseInt(i.toString(), 10)].replace("Ref", ""), compProp.elementRef.nativeElement);
          }
        }
      }
      complexTemplates = Object.keys(tempOnThis);
      complexTemplates = complexTemplates.filter(function(val2) {
        return /Ref$/i.test(val2) && /_/i.test(val2);
      });
      for (var _b = 0, complexTemplates_1 = complexTemplates; _b < complexTemplates_1.length; _b++) {
        var tempName = complexTemplates_1[_b];
        var propName = tempName.replace("Ref", "");
        var val = {};
        setValue(propName.replace("_", "."), getValue(propName, tempOnThis), val);
        tempOnThis.setProperties(val, true);
      }
    };
    ComponentBase2.prototype.getAngularAttr = function(ele) {
      var attributes2 = ele.attributes;
      var length = attributes2.length;
      var ngAr;
      for (var i = 0; i < length; i++) {
        if (/_ngcontent/g.test(attributes2[parseInt(i.toString(), 10)].name)) {
          ngAr = attributes2[parseInt(i.toString(), 10)].name;
        }
      }
      return ngAr;
    };
    ComponentBase2.prototype.ngAfterViewInit = function(isTempRef) {
      var tempAfterViewThis = isTempRef || this;
      var regExp3 = /ejs-tab|ejs-accordion/g;
      if (regExp3.test(tempAfterViewThis.ngEle.nativeElement.outerHTML)) {
        tempAfterViewThis.ngEle.nativeElement.style.visibility = "hidden";
      }
      var templateProperties = Object.keys(tempAfterViewThis);
      templateProperties = templateProperties.filter(function(val) {
        return /Ref$/i.test(val);
      });
      var ngtempRef = tempAfterViewThis.getModuleName() === "DocumentEditor";
      for (var _i = 0, templateProperties_1 = templateProperties; _i < templateProperties_1.length; _i++) {
        var tempName = templateProperties_1[_i];
        var propName = tempName.replace("Ref", "");
        setValue(propName.replace("_", "."), getValue(propName + "Ref", tempAfterViewThis), tempAfterViewThis);
      }
      var appendToComponent = function(tempAfterViewThis2) {
        if (typeof window !== "undefined" && tempAfterViewThis2.element || tempAfterViewThis2.getModuleName().includes("btn")) {
          tempAfterViewThis2.appendTo(tempAfterViewThis2.element);
          tempAfterViewThis2.ngEle.nativeElement.style.visibility = "";
        }
      };
      if (!ngtempRef) {
        setTimeout(function() {
          appendToComponent(tempAfterViewThis);
        });
      } else {
        appendToComponent(tempAfterViewThis);
      }
    };
    ComponentBase2.prototype.ngOnDestroy = function(isTempRef) {
      var tempOnDestroyThis = isTempRef || this;
      setTimeout(function() {
        if (typeof window !== "undefined" && tempOnDestroyThis.element.classList.contains("e-control")) {
          if (tempOnDestroyThis.ngOnFocus !== void 0 && tempOnDestroyThis.ngOnBlur !== void 0) {
            var ele = tempOnDestroyThis.inputElement || tempOnDestroyThis.element;
            ele.removeEventListener("focus", tempOnDestroyThis.ngOnFocusBound);
            ele.removeEventListener("blur", tempOnDestroyThis.ngOnBlurBound);
            tempOnDestroyThis.ngOnFocusBound = null;
            tempOnDestroyThis.ngOnBlurBound = null;
          }
          tempOnDestroyThis.destroy();
          tempOnDestroyThis.clearTemplate(null);
          setTimeout(function() {
            for (var _i = 0, _a = Object.keys(tempOnDestroyThis); _i < _a.length; _i++) {
              var key = _a[_i];
              var value = tempOnDestroyThis["".concat(key)];
              if (value && /object/.test(typeof value) && Object.keys(value).length !== 0) {
                if (/properties|changedProperties|childChangedProperties|oldProperties|moduleLoader/.test(key)) {
                  for (var _b = 0, _c = Object.keys(tempOnDestroyThis["".concat(key)]); _b < _c.length; _b++) {
                    var propKey = _c[_b];
                    var propValue = value["".concat(propKey)];
                    if (propValue && /object/.test(typeof propValue) && Object.keys(propValue).length !== 0 && (propValue.parent || propValue.parentObj)) {
                      tempOnDestroyThis["".concat(key)]["".concat(propKey)] = null;
                    }
                  }
                } else {
                  if (value.parent || value.parentObj) {
                    tempOnDestroyThis["".concat(key)] = null;
                  }
                }
              }
            }
          });
        }
      });
    };
    ComponentBase2.prototype.clearTemplate = function(templateNames, index) {
      clearTemplate(this, templateNames, index);
    };
    ComponentBase2.prototype.ngAfterContentChecked = function(isTempRef) {
      var tempAfterContentThis = isTempRef || this;
      for (var _i = 0, _a = tempAfterContentThis.tagObjects; _i < _a.length; _i++) {
        var tagObject = _a[_i];
        if (!isUndefined(tagObject.instance) && (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
          var propObj = {};
          if (tagObject.instance.isInitChanges) {
            var complexDirProps = void 0;
            var list = getValue("instance.list", tagObject);
            if (list && list.length) {
              complexDirProps = list[0].directivePropList;
            }
            var skip = true;
            if (tempAfterContentThis.getModuleName && tempAfterContentThis.getModuleName() === "gantt") {
              skip = false;
            }
            if (complexDirProps && skip && complexDirProps.indexOf(tagObject.instance.propertyName) === -1) {
              var compDirPropList = Object.keys(tagObject.instance.list[0].propCollection);
              for (var h = 0; h < tagObject.instance.list.length; h++) {
                tagObject.instance.list["".concat(h)].propCollection[tagObject.instance.propertyName] = [];
                var obj = {};
                for (var k = 0; k < compDirPropList.length; k++) {
                  var complexPropName = compDirPropList[parseInt(k.toString(), 10)];
                  obj["".concat(complexPropName)] = tagObject.instance.list["".concat(h)].propCollection["".concat(complexPropName)];
                }
                var _loop_1 = function(i2) {
                  var tag = tagObject.instance.list["".concat(h)].tags[parseInt(i2.toString(), 10)];
                  var childObj = getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), tagObject.instance.list["".concat(h)]);
                  if (childObj) {
                    var innerchildObj = tagObject.instance.list["".concat(h)]["child" + tag.substring(0, 1).toUpperCase() + tag.substring(1)];
                    var updateChildTag_1 = function(innerchild) {
                      var innerLevelTag = [];
                      if (innerchild) {
                        for (var j = 0; j < innerchild.list.length; j++) {
                          var innerTag = innerchild.list[0].tags[0];
                          if (innerTag) {
                            var innerchildTag = getValue("child" + innerTag.substring(0, 1).toUpperCase() + innerTag.substring(1), innerchild.list[parseInt(j.toString(), 10)]);
                            if (innerchildTag) {
                              innerchild.list[parseInt(j.toString(), 10)].tagObjects.push({
                                instance: innerchildTag,
                                name: innerTag
                              });
                              innerLevelTag.push(innerchildTag);
                            }
                          }
                        }
                      }
                      if (innerLevelTag.length !== 0) {
                        for (var l = 0; l < innerLevelTag.length; l++) {
                          updateChildTag_1(innerLevelTag[parseInt(l.toString(), 10)]);
                        }
                      }
                    };
                    updateChildTag_1(innerchildObj);
                    tagObject.instance.list["".concat(h)].tagObjects.push({
                      instance: childObj,
                      name: tag
                    });
                  }
                };
                for (var i = 0; i < tagObject.instance.list["".concat(h)].tags.length; i++) {
                  _loop_1(i);
                }
                tagObject.instance.list["".concat(h)].propCollection[tagObject.instance.propertyName].push(obj);
              }
            }
            propObj[tagObject.name] = tagObject.instance.getProperties();
            tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
          } else {
            var hasDiffLength = false;
            if (tempAfterContentThis[tagObject.name].length !== tagObject.instance.list.length || /diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
              tempAfterContentThis[tagObject.name] = tagObject.instance.list;
              hasDiffLength = true;
            }
            for (var _b = 0, _c = tagObject.instance.list; _b < _c.length; _b++) {
              var list = _c[_b];
              var curIndex = tagObject.instance.list.indexOf(list);
              var curChild = getValue(tagObject.name, tempAfterContentThis)["".concat(curIndex)];
              var complexTemplates = Object.keys(curChild);
              complexTemplates = complexTemplates.filter(function(val) {
                return /Ref$/i.test(val);
              });
              if (curChild.properties && Object.keys(curChild.properties).length !== 0) {
                for (var _d = 0, complexTemplates_2 = complexTemplates; _d < complexTemplates_2.length; _d++) {
                  var complexPropName = complexTemplates_2[_d];
                  complexPropName = complexPropName.replace(/Ref/, "");
                  curChild.properties["".concat(complexPropName)] = !curChild.properties["".concat(complexPropName)] ? curChild.propCollection["".concat(complexPropName)] : curChild.properties["".concat(complexPropName)];
                }
              }
              if (!isUndefined(curChild) && !isUndefined(curChild.setProperties)) {
                if (/diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
                  curChild.setProperties(list.getProperties(), true);
                } else {
                  curChild.setProperties(list.getProperties());
                }
              }
              list.isUpdated = true;
            }
            if (/grid/.test(tempAfterContentThis.getModuleName()) && hasDiffLength || tempAfterContentThis.getModuleName() === "chart") {
              propObj[tagObject.name] = tagObject.instance.getProperties();
              tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
            }
          }
        }
      }
    };
    ComponentBase2.prototype.registerEvents = function(eventList) {
      registerEvents(eventList, this);
    };
    ComponentBase2.prototype.twoWaySetter = function(newVal, prop) {
      var oldVal = getValue(prop, this.properties);
      if (oldVal === newVal) {
        return;
      }
      this.saveChanges(prop, newVal, oldVal);
      setValue(prop, isNullOrUndefined(newVal) ? null : newVal, this.properties);
      getValue(prop + "Change", this).emit(newVal);
    };
    ComponentBase2.prototype.addTwoWay = function(propList) {
      var _this = this;
      var _loop_2 = function(prop2) {
        getValue(prop2, this_1);
        Object.defineProperty(this_1, prop2, {
          get: function() {
            return getValue(prop2, _this.properties);
          },
          set: function(newVal) {
            return _this.twoWaySetter(newVal, prop2);
          }
        });
        setValue(prop2 + "Change", new EventEmitter(), this_1);
      };
      var this_1 = this;
      for (var _i = 0, propList_1 = propList; _i < propList_1.length; _i++) {
        var prop = propList_1[_i];
        _loop_2(prop);
      }
    };
    ComponentBase2.prototype.addEventListener = function(eventName, handler) {
      var eventObj = getValue(eventName, this);
      if (!isUndefined(eventObj)) {
        if (!this.ngBoundedEvents["".concat(eventName)]) {
          this.ngBoundedEvents["".concat(eventName)] = /* @__PURE__ */ new Map();
        }
        this.ngBoundedEvents["".concat(eventName)].set(handler, eventObj.subscribe(handler));
      }
    };
    ComponentBase2.prototype.removeEventListener = function(eventName, handler) {
      var eventObj = getValue(eventName, this);
      if (!isUndefined(eventObj)) {
        this.ngBoundedEvents["".concat(eventName)].get(handler).unsubscribe();
      }
    };
    ComponentBase2.prototype.trigger = function(eventName, eventArgs, success) {
      var eventObj = getValue(eventName, this);
      var prevDetection = this.isProtectedOnChange;
      this.isProtectedOnChange = false;
      if (eventArgs) {
        eventArgs.name = eventName;
      }
      if (!isUndefined(eventObj)) {
        eventObj.next(eventArgs);
      }
      var localEventObj = getValue("local" + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
      if (!isUndefined(localEventObj)) {
        localEventObj.call(this, eventArgs);
      }
      this.isProtectedOnChange = prevDetection;
      if (success) {
        this.preventChange = this.isPreventChange;
        success.call(this, eventArgs);
      }
      this.isPreventChange = false;
    };
    return ComponentBase2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/form-base.js
var FormBase = (
  /** @class */
  function() {
    function FormBase2() {
    }
    FormBase2.prototype.propagateChange = function(_) {
      return;
    };
    FormBase2.prototype.propagateTouch = function() {
      return;
    };
    FormBase2.prototype.localChange = function(e) {
      var value = e.checked === void 0 ? e.value : e.checked;
      this.objCheck = isObject(value);
      if (this.isUpdated === true) {
        this.angularValue = this.oldValue;
      }
      if (this.objCheck === true) {
        this.duplicateValue = JSON.stringify(value);
        this.duplicateAngularValue = JSON.stringify(this.angularValue);
        if (this.duplicateValue !== this.duplicateAngularValue && this.propagateChange !== void 0 && value !== void 0) {
          this.propagateChange(value);
          this.angularValue = value;
        }
      } else {
        if (value !== this.angularValue && this.propagateChange !== void 0 && value !== void 0) {
          if (value !== "" && value !== null) {
            this.propagateChange(value);
            this.angularValue = value;
          } else {
            var optionalValue = value;
            this.propagateChange(optionalValue);
            this.angularValue = value;
          }
        }
      }
      this.cdr.markForCheck();
    };
    FormBase2.prototype.registerOnChange = function(registerFunction) {
      this.propagateChange = registerFunction;
    };
    FormBase2.prototype.registerOnTouched = function(registerFunction) {
      this.propagateTouch = registerFunction;
    };
    FormBase2.prototype.twoWaySetter = function(newVal, prop) {
      var oldVal = this.oldValue || getValue(prop, this.properties);
      var ele = this.inputElement || this.element;
      if (ele && oldVal === newVal && this.value === newVal && (ele.value === void 0 || ele.value === "")) {
        return;
      }
      this.saveChanges(prop, newVal, oldVal);
      setValue(prop, isNullOrUndefined(newVal) ? null : newVal, this.properties);
      getValue(prop + "Change", this).emit(newVal);
    };
    FormBase2.prototype.ngAfterViewInit = function(isTempRef) {
      var tempFormAfterViewThis = isTempRef || this;
      tempFormAfterViewThis.ngOnBlurBound = this.ngOnBlur.bind(this);
      tempFormAfterViewThis.ngOnFocusBound = this.ngOnFocus.bind(this);
      if (typeof window !== "undefined") {
        if (tempFormAfterViewThis.getModuleName().includes("dropdowntree")) {
          setTimeout(function() {
            tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
          });
        } else {
          tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
        }
        var ele = tempFormAfterViewThis.inputElement || tempFormAfterViewThis.element;
        ele.addEventListener("focus", tempFormAfterViewThis.ngOnFocusBound);
        ele.addEventListener("blur", tempFormAfterViewThis.ngOnBlurBound);
      }
      this.isFormInit = false;
    };
    FormBase2.prototype.setDisabledState = function(disabled) {
      this.enabled = !disabled;
      this.disabled = disabled;
    };
    FormBase2.prototype.writeValue = function(value) {
      var regExp3 = /ejs-radiobutton/g;
      if (this.checked === void 0) {
        this.value = value;
      } else {
        if (this.ngEle) {
          if (typeof value === "boolean") {
            if (regExp3.test(this.ngEle.nativeElement.outerHTML)) {
              this.checked = value === this.value;
            } else {
              this.checked = value;
            }
          } else {
            this.checked = value === this.value;
          }
        }
      }
      this.angularValue = value;
      this.isUpdated = true;
      this.preventChange = this.isFormInit ? false : true;
      this.cdr.markForCheck();
      if (value === null) {
        return;
      }
    };
    FormBase2.prototype.ngOnFocus = function(e) {
      if (this.skipFromEvent !== true) {
        this.focus.emit(e);
      }
      this.cdr.markForCheck();
    };
    FormBase2.prototype.ngOnBlur = function(e) {
      this.propagateTouch();
      if (this.skipFromEvent !== true) {
        this.blur.emit(e);
      }
      this.cdr.markForCheck();
    };
    FormBase2.isFormBase = true;
    return FormBase2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/template.js
var stringCompiler = getTemplateEngine();
function compile3(templateEle, helper) {
  if (typeof templateEle === "string" || typeof templateEle === "function" && templateEle.prototype && templateEle.prototype.CSPTemplate) {
    return stringCompiler(templateEle, helper);
  } else {
    var contRef_1 = templateEle.elementRef.nativeElement._viewContainerRef;
    var pName_1 = templateEle.elementRef.nativeElement.propName;
    return function(data, component, propName) {
      var context = {
        $implicit: data
      };
      var conRef = contRef_1 ? contRef_1 : component.viewContainerRef;
      var viewRef = conRef.createEmbeddedView(templateEle, context);
      if (/EJS-MENTION|EJS-DROPDOWNLIST/.test(getValue("currentInstance.element.nodeName", conRef)) || /E-TABITEM/.test(getValue("element.nativeElement.nodeName", conRef))) {
        viewRef.detectChanges();
      } else {
        viewRef.markForCheck();
      }
      var viewCollection = component && component.registeredTemplate ? component.registeredTemplate : getValue("currentInstance.registeredTemplate", conRef);
      propName = propName && component.registeredTemplate ? propName : pName_1;
      if (typeof viewCollection["".concat(propName)] === "undefined") {
        viewCollection["".concat(propName)] = [];
      }
      viewCollection["".concat(propName)].push(viewRef);
      return viewRef.rootNodes;
    };
  }
}
function Template(defaultValue) {
  return function(target, key) {
    var propertyDescriptor = {
      set: setter(key),
      get: getter(key, defaultValue),
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(target, key, propertyDescriptor);
  };
}
function setter(key) {
  return function(val) {
    if (val === void 0) {
      return;
    }
    setValue(key + "Ref", val, this);
    if (typeof val !== "string") {
      val.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
      val.elementRef.nativeElement.propName = key;
    } else {
      if (this.saveChanges) {
        this.saveChanges(key, val, void 0);
        this.dataBind();
      }
    }
  };
}
function getter(key, defaultValue) {
  return function() {
    return getValue(key + "Ref", this) || defaultValue;
  };
}
setTemplateEngine({
  compile: compile3
});

// node_modules/@syncfusion/ej2-popups/src/common/position.js
var elementRect;
var popupRect;
var element;
var parentDocument;
var fixedParent = false;
function calculateRelativeBasedPosition(anchor, element2) {
  var fixedElement = false;
  var anchorPos = {
    left: 0,
    top: 0
  };
  var tempAnchor = anchor;
  if (!anchor || !element2) {
    return anchorPos;
  }
  if (isNullOrUndefined(element2.offsetParent) && element2.style.position === "fixed") {
    fixedElement = true;
  }
  while ((element2.offsetParent || fixedElement) && anchor && element2.offsetParent !== anchor) {
    anchorPos.left += anchor.offsetLeft;
    anchorPos.top += anchor.offsetTop;
    anchor = anchor.offsetParent;
  }
  anchor = tempAnchor;
  while ((element2.offsetParent || fixedElement) && anchor && element2.offsetParent !== anchor) {
    anchorPos.left -= anchor.scrollLeft;
    anchorPos.top -= anchor.scrollTop;
    anchor = anchor.parentElement;
  }
  return anchorPos;
}
function calculatePosition(currentElement, positionX, positionY, parentElement, targetValues) {
  popupRect = void 0;
  popupRect = targetValues;
  fixedParent = parentElement ? true : false;
  if (!currentElement) {
    return {
      left: 0,
      top: 0
    };
  }
  if (!positionX) {
    positionX = "left";
  }
  if (!positionY) {
    positionY = "top";
  }
  parentDocument = currentElement.ownerDocument;
  element = currentElement;
  var pos = {
    left: 0,
    top: 0
  };
  return updatePosition(positionX.toLowerCase(), positionY.toLowerCase(), pos);
}
function setPosx(value, pos) {
  pos.left = value;
}
function setPosy(value, pos) {
  pos.top = value;
}
function updatePosition(posX, posY, pos) {
  elementRect = element.getBoundingClientRect();
  switch (posY + posX) {
    case "topcenter":
      setPosx(getElementHCenter(), pos);
      setPosy(getElementTop(), pos);
      break;
    case "topright":
      setPosx(getElementRight(), pos);
      setPosy(getElementTop(), pos);
      break;
    case "centercenter":
      setPosx(getElementHCenter(), pos);
      setPosy(getElementVCenter(), pos);
      break;
    case "centerright":
      setPosx(getElementRight(), pos);
      setPosy(getElementVCenter(), pos);
      break;
    case "centerleft":
      setPosx(getElementLeft(), pos);
      setPosy(getElementVCenter(), pos);
      break;
    case "bottomcenter":
      setPosx(getElementHCenter(), pos);
      setPosy(getElementBottom(), pos);
      break;
    case "bottomright":
      setPosx(getElementRight(), pos);
      setPosy(getElementBottom(), pos);
      break;
    case "bottomleft":
      setPosx(getElementLeft(), pos);
      setPosy(getElementBottom(), pos);
      break;
    default:
    case "topleft":
      setPosx(getElementLeft(), pos);
      setPosy(getElementTop(), pos);
      break;
  }
  element = null;
  return pos;
}
function getBodyScrollTop() {
  return parentDocument.documentElement.scrollTop || parentDocument.body.scrollTop;
}
function getBodyScrollLeft() {
  return parentDocument.documentElement.scrollLeft || parentDocument.body.scrollLeft;
}
function getElementBottom() {
  return fixedParent ? elementRect.bottom : elementRect.bottom + getBodyScrollTop();
}
function getElementVCenter() {
  return getElementTop() + elementRect.height / 2;
}
function getElementTop() {
  return fixedParent ? elementRect.top : elementRect.top + getBodyScrollTop();
}
function getElementLeft() {
  return elementRect.left + getBodyScrollLeft();
}
function getElementRight() {
  var popupWidth = element && (element.classList.contains("e-date-wrapper") || element.classList.contains("e-datetime-wrapper") || element.classList.contains("e-ddl") && element.classList.contains("e-rtl") || element.classList.contains("e-date-range-wrapper")) ? popupRect ? popupRect.width : 0 : popupRect && elementRect.width >= popupRect.width ? popupRect.width : 0;
  return elementRect.right + getBodyScrollLeft() - popupWidth;
}
function getElementHCenter() {
  return getElementLeft() + elementRect.width / 2;
}

// node_modules/@syncfusion/ej2-popups/src/common/collision.js
var parentDocument2;
var targetContainer;
function fit(element2, viewPortElement, axis, position) {
  if (viewPortElement === void 0) {
    viewPortElement = null;
  }
  if (axis === void 0) {
    axis = {
      X: false,
      Y: false
    };
  }
  if (!axis.Y && !axis.X) {
    return {
      left: 0,
      top: 0
    };
  }
  var elemData = element2.getBoundingClientRect();
  targetContainer = viewPortElement;
  parentDocument2 = element2.ownerDocument;
  if (!position) {
    position = calculatePosition(element2, "left", "top");
  }
  if (axis.X) {
    var containerWidth = targetContainer ? getTargetContainerWidth() : getViewPortWidth();
    var containerLeft = ContainerLeft();
    var containerRight = ContainerRight();
    var overLeft = containerLeft - position.left;
    var overRight = position.left + elemData.width - containerRight;
    if (elemData.width > containerWidth) {
      if (overLeft > 0 && overRight <= 0) {
        position.left = containerRight - elemData.width;
      } else if (overRight > 0 && overLeft <= 0) {
        position.left = containerLeft;
      } else {
        position.left = overLeft > overRight ? containerRight - elemData.width : containerLeft;
      }
    } else if (overLeft > 0) {
      position.left += overLeft;
    } else if (overRight > 0) {
      position.left -= overRight;
    }
  }
  if (axis.Y) {
    var containerHeight = targetContainer ? getTargetContainerHeight() : getViewPortHeight();
    var containerTop = ContainerTop();
    var containerBottom = ContainerBottom();
    var overTop = containerTop - position.top;
    var overBottom = position.top + elemData.height - containerBottom;
    if (elemData.height > containerHeight) {
      if (overTop > 0 && overBottom <= 0) {
        position.top = containerBottom - elemData.height;
      } else if (overBottom > 0 && overTop <= 0) {
        position.top = containerTop;
      } else {
        position.top = overTop > overBottom ? containerBottom - elemData.height : containerTop;
      }
    } else if (overTop > 0) {
      position.top += overTop;
    } else if (overBottom > 0) {
      position.top -= overBottom;
    }
  }
  return position;
}
function isCollide(element2, viewPortElement, x, y) {
  if (viewPortElement === void 0) {
    viewPortElement = null;
  }
  var elemOffset = calculatePosition(element2, "left", "top");
  if (x) {
    elemOffset.left = x;
  }
  if (y) {
    elemOffset.top = y;
  }
  var data = [];
  targetContainer = viewPortElement;
  parentDocument2 = element2.ownerDocument;
  var elementRect2 = element2.getBoundingClientRect();
  var top = elemOffset.top;
  var left = elemOffset.left;
  var right = elemOffset.left + elementRect2.width;
  var bottom = elemOffset.top + elementRect2.height;
  var yAxis = topCollideCheck(top, bottom);
  var xAxis = leftCollideCheck(left, right);
  if (yAxis.topSide) {
    data.push("top");
  }
  if (xAxis.rightSide) {
    data.push("right");
  }
  if (xAxis.leftSide) {
    data.push("left");
  }
  if (yAxis.bottomSide) {
    data.push("bottom");
  }
  return data;
}
function flip(element2, target, offsetX, offsetY, positionX, positionY, viewPortElement, axis, fixedParent2) {
  if (viewPortElement === void 0) {
    viewPortElement = null;
  }
  if (axis === void 0) {
    axis = {
      X: true,
      Y: true
    };
  }
  if (!target || !element2 || !positionX || !positionY || !axis.X && !axis.Y) {
    return;
  }
  var tEdge = {
    TL: null,
    TR: null,
    BL: null,
    BR: null
  }, eEdge = {
    TL: null,
    TR: null,
    BL: null,
    BR: null
    /* eslint-enable */
  };
  var elementRect2;
  if (window.getComputedStyle(element2).display === "none") {
    var oldVisibility = element2.style.visibility;
    element2.style.visibility = "hidden";
    element2.style.display = "block";
    elementRect2 = element2.getBoundingClientRect();
    element2.style.removeProperty("display");
    element2.style.visibility = oldVisibility;
  } else {
    elementRect2 = element2.getBoundingClientRect();
  }
  var pos = {
    posX: positionX,
    posY: positionY,
    offsetX,
    offsetY,
    position: {
      left: 0,
      top: 0
    }
  };
  targetContainer = viewPortElement;
  parentDocument2 = target.ownerDocument;
  updateElementData(target, tEdge, pos, fixedParent2, elementRect2);
  setPosition(eEdge, pos, elementRect2);
  if (axis.X) {
    leftFlip(target, eEdge, tEdge, pos, elementRect2, true);
  }
  if (axis.Y && tEdge.TL.top > -1) {
    topFlip(target, eEdge, tEdge, pos, elementRect2, true);
  }
  setPopup(element2, pos, elementRect2);
}
function setPopup(element2, pos, elementRect2) {
  var left = 0;
  var top = 0;
  if (element2.offsetParent != null && (getComputedStyle(element2.offsetParent).position === "absolute" || getComputedStyle(element2.offsetParent).position === "relative")) {
    var data = calculatePosition(element2.offsetParent, "left", "top", false, elementRect2);
    left = data.left;
    top = data.top;
  }
  var scaleX = 1;
  var scaleY = 1;
  if (element2.offsetParent) {
    var transformStyle = getComputedStyle(element2.offsetParent).transform;
    if (transformStyle !== "none") {
      var matrix = new DOMMatrix(transformStyle);
      scaleX = matrix.a;
      scaleY = matrix.d;
    }
  }
  element2.style.top = pos.position.top / scaleY + pos.offsetY - top + "px";
  element2.style.left = pos.position.left / scaleX + pos.offsetX - left + "px";
}
function updateElementData(target, edge, pos, fixedParent2, elementRect2) {
  pos.position = calculatePosition(target, pos.posX, pos.posY, fixedParent2, elementRect2);
  edge.TL = calculatePosition(target, "left", "top", fixedParent2, elementRect2);
  edge.TR = calculatePosition(target, "right", "top", fixedParent2, elementRect2);
  edge.BR = calculatePosition(target, "left", "bottom", fixedParent2, elementRect2);
  edge.BL = calculatePosition(target, "right", "bottom", fixedParent2, elementRect2);
}
function setPosition(eStatus, pos, elementRect2) {
  eStatus.TL = {
    top: pos.position.top + pos.offsetY,
    left: pos.position.left + pos.offsetX
  };
  eStatus.TR = {
    top: eStatus.TL.top,
    left: eStatus.TL.left + elementRect2.width
  };
  eStatus.BL = {
    top: eStatus.TL.top + elementRect2.height,
    left: eStatus.TL.left
  };
  eStatus.BR = {
    top: eStatus.TL.top + elementRect2.height,
    left: eStatus.TL.left + elementRect2.width
  };
}
function leftCollideCheck(left, right) {
  var leftSide = false, rightSide = false;
  if (left - getBodyScrollLeft2() < ContainerLeft()) {
    leftSide = true;
  }
  if (right > ContainerRight()) {
    rightSide = true;
  }
  return {
    leftSide,
    rightSide
  };
}
function leftFlip(target, edge, tEdge, pos, elementRect2, deepCheck) {
  var collideSide = leftCollideCheck(edge.TL.left, edge.TR.left);
  if (tEdge.TL.left - getBodyScrollLeft2() <= ContainerLeft()) {
    collideSide.leftSide = false;
  }
  if (tEdge.TR.left > ContainerRight()) {
    collideSide.rightSide = false;
  }
  if (collideSide.leftSide && !collideSide.rightSide || !collideSide.leftSide && collideSide.rightSide) {
    if (pos.posX === "right") {
      pos.posX = "left";
    } else {
      pos.posX = "right";
    }
    pos.offsetX = pos.offsetX + elementRect2.width;
    pos.offsetX = -1 * pos.offsetX;
    pos.position = calculatePosition(target, pos.posX, pos.posY, false);
    setPosition(edge, pos, elementRect2);
    if (deepCheck) {
      leftFlip(target, edge, tEdge, pos, elementRect2, false);
    }
  }
}
function topFlip(target, edge, tEdge, pos, elementRect2, deepCheck) {
  var collideSide = topCollideCheck(edge.TL.top, edge.BL.top);
  if (tEdge.TL.top - getBodyScrollTop2() <= ContainerTop()) {
    collideSide.topSide = false;
  }
  if (tEdge.BL.top >= ContainerBottom() && target.getBoundingClientRect().bottom < window.innerHeight) {
    collideSide.bottomSide = false;
  }
  if (collideSide.topSide && !collideSide.bottomSide || !collideSide.topSide && collideSide.bottomSide) {
    if (pos.posY === "top") {
      pos.posY = "bottom";
    } else {
      pos.posY = "top";
    }
    pos.offsetY = pos.offsetY + elementRect2.height;
    pos.offsetY = -1 * pos.offsetY;
    pos.position = calculatePosition(target, pos.posX, pos.posY, false, elementRect2);
    setPosition(edge, pos, elementRect2);
    if (deepCheck) {
      topFlip(target, edge, tEdge, pos, elementRect2, false);
    }
  }
}
function topCollideCheck(top, bottom) {
  var topSide = false, bottomSide = false;
  if (top - getBodyScrollTop2() < ContainerTop()) {
    topSide = true;
  }
  if (bottom > ContainerBottom()) {
    bottomSide = true;
  }
  return {
    topSide,
    bottomSide
  };
}
function getTargetContainerWidth() {
  return targetContainer.getBoundingClientRect().width;
}
function getTargetContainerHeight() {
  return targetContainer.getBoundingClientRect().height;
}
function getTargetContainerLeft() {
  return targetContainer.getBoundingClientRect().left;
}
function getTargetContainerTop() {
  return targetContainer.getBoundingClientRect().top;
}
function ContainerTop() {
  if (targetContainer) {
    return getTargetContainerTop();
  }
  return 0;
}
function ContainerLeft() {
  if (targetContainer) {
    return getTargetContainerLeft();
  }
  return 0;
}
function ContainerRight() {
  if (targetContainer) {
    return getBodyScrollLeft2() + getTargetContainerLeft() + getTargetContainerWidth();
  }
  return getBodyScrollLeft2() + getViewPortWidth();
}
function ContainerBottom() {
  if (targetContainer) {
    return getBodyScrollTop2() + getTargetContainerTop() + getTargetContainerHeight();
  }
  return getBodyScrollTop2() + getViewPortHeight();
}
function getBodyScrollTop2() {
  return parentDocument2.documentElement.scrollTop || parentDocument2.body.scrollTop;
}
function getBodyScrollLeft2() {
  return parentDocument2.documentElement.scrollLeft || parentDocument2.body.scrollLeft;
}
function getViewPortHeight() {
  return window.innerHeight;
}
function getViewPortWidth() {
  var windowWidth = window.innerWidth;
  var documentReact = document.documentElement.getBoundingClientRect();
  var offsetWidth = isNullOrUndefined(document.documentElement) ? 0 : documentReact.width;
  return windowWidth - (windowWidth - offsetWidth);
}
function destroy() {
  targetContainer = null;
  parentDocument2 = null;
}

// node_modules/@syncfusion/ej2-popups/src/popup/popup.js
var __extends7 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PositionData = (
  /** @class */
  function(_super) {
    __extends7(PositionData2, _super);
    function PositionData2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate7([Property("left")], PositionData2.prototype, "X", void 0);
    __decorate7([Property("top")], PositionData2.prototype, "Y", void 0);
    return PositionData2;
  }(ChildProperty)
);
var CLASSNAMES = {
  ROOT: "e-popup",
  RTL: "e-rtl",
  OPEN: "e-popup-open",
  CLOSE: "e-popup-close"
};
var Popup = (
  /** @class */
  function(_super) {
    __extends7(Popup2, _super);
    function Popup2(element2, options) {
      return _super.call(this, options, element2) || this;
    }
    Popup2.prototype.onPropertyChanged = function(newProp, oldProp) {
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "width":
            setStyleAttribute(this.element, {
              "width": formatUnit(newProp.width)
            });
            break;
          case "height":
            setStyleAttribute(this.element, {
              "height": formatUnit(newProp.height)
            });
            break;
          case "zIndex":
            setStyleAttribute(this.element, {
              "zIndex": newProp.zIndex
            });
            break;
          case "enableRtl":
            this.setEnableRtl();
            break;
          case "position":
          case "relateTo":
            this.refreshPosition();
            break;
          case "offsetX": {
            var x = newProp.offsetX - oldProp.offsetX;
            this.element.style.left = (parseInt(this.element.style.left, 10) + x).toString() + "px";
            break;
          }
          case "offsetY": {
            var y = newProp.offsetY - oldProp.offsetY;
            this.element.style.top = (parseInt(this.element.style.top, 10) + y).toString() + "px";
            break;
          }
          case "content":
            this.setContent();
            break;
          case "actionOnScroll":
            if (newProp.actionOnScroll !== "none") {
              this.wireScrollEvents();
            } else {
              this.unwireScrollEvents();
            }
            break;
        }
      }
    };
    Popup2.prototype.getModuleName = function() {
      return "popup";
    };
    Popup2.prototype.resolveCollision = function() {
      this.checkCollision();
    };
    Popup2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    Popup2.prototype.destroy = function() {
      if (this.element.classList.contains("e-popup-open")) {
        this.unwireEvents();
      }
      this.element.classList.remove(CLASSNAMES.ROOT, CLASSNAMES.RTL, CLASSNAMES.OPEN, CLASSNAMES.CLOSE);
      this.content = null;
      this.relateTo = null;
      destroy();
      _super.prototype.destroy.call(this);
    };
    Popup2.prototype.render = function() {
      this.element.classList.add(CLASSNAMES.ROOT);
      var styles = {};
      if (this.zIndex !== 1e3) {
        styles.zIndex = this.zIndex;
      }
      if (this.width !== "auto") {
        styles.width = formatUnit(this.width);
      }
      if (this.height !== "auto") {
        styles.height = formatUnit(this.height);
      }
      setStyleAttribute(this.element, styles);
      this.fixedParent = false;
      this.setEnableRtl();
      this.setContent();
    };
    Popup2.prototype.wireEvents = function() {
      if (Browser.isDevice) {
        EventHandler.add(window, "orientationchange", this.orientationOnChange, this);
      }
      if (this.actionOnScroll !== "none") {
        this.wireScrollEvents();
      }
    };
    Popup2.prototype.wireScrollEvents = function() {
      if (this.getRelateToElement()) {
        for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
          var parent_1 = _a[_i];
          EventHandler.add(parent_1, "scroll", this.scrollRefresh, this);
        }
      }
    };
    Popup2.prototype.unwireEvents = function() {
      if (Browser.isDevice) {
        EventHandler.remove(window, "orientationchange", this.orientationOnChange);
      }
      if (this.actionOnScroll !== "none") {
        this.unwireScrollEvents();
      }
    };
    Popup2.prototype.unwireScrollEvents = function() {
      if (this.getRelateToElement()) {
        for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
          var parent_2 = _a[_i];
          EventHandler.remove(parent_2, "scroll", this.scrollRefresh);
        }
      }
    };
    Popup2.prototype.getRelateToElement = function() {
      var relateToElement = this.relateTo === "" || isNullOrUndefined(this.relateTo) ? document.body : this.relateTo;
      this.setProperties({
        relateTo: relateToElement
      }, true);
      return typeof this.relateTo === "string" ? document.querySelector(this.relateTo) : this.relateTo;
    };
    Popup2.prototype.scrollRefresh = function(e) {
      if (this.actionOnScroll === "reposition") {
        if (!isNullOrUndefined(this.element) && !(this.element.offsetParent === e.target || this.element.offsetParent && this.element.offsetParent.tagName === "BODY" && e.target.parentElement == null)) {
          this.refreshPosition();
        }
      } else if (this.actionOnScroll === "hide") {
        this.hide();
      }
      if (this.actionOnScroll !== "none") {
        if (this.getRelateToElement()) {
          var targetVisible = this.isElementOnViewport(this.getRelateToElement(), e.target);
          if (!targetVisible && !this.targetInvisibleStatus) {
            this.trigger("targetExitViewport");
            this.targetInvisibleStatus = true;
          } else if (targetVisible) {
            this.targetInvisibleStatus = false;
          }
        }
      }
    };
    Popup2.prototype.isElementOnViewport = function(relateToElement, scrollElement) {
      var scrollParents = this.getScrollableParent(relateToElement);
      for (var parent_3 = 0; parent_3 < scrollParents.length; parent_3++) {
        if (this.isElementVisible(relateToElement, scrollParents[parent_3])) {
          continue;
        } else {
          return false;
        }
      }
      return true;
    };
    Popup2.prototype.isElementVisible = function(relateToElement, scrollElement) {
      var rect = this.checkGetBoundingClientRect(relateToElement);
      if (!rect.height || !rect.width) {
        return false;
      }
      if (!isNullOrUndefined(this.checkGetBoundingClientRect(scrollElement))) {
        var parent_4 = scrollElement.getBoundingClientRect();
        return !(rect.bottom < parent_4.top) && !(rect.bottom > parent_4.bottom) && !(rect.right > parent_4.right) && !(rect.left < parent_4.left);
      } else {
        var win = window;
        var windowView = {
          top: win.scrollY,
          left: win.scrollX,
          right: win.scrollX + win.outerWidth,
          bottom: win.scrollY + win.outerHeight
        };
        var off = calculatePosition(relateToElement);
        var ele = {
          top: off.top,
          left: off.left,
          right: off.left + rect.width,
          bottom: off.top + rect.height
        };
        var elementView = {
          top: windowView.bottom - ele.top,
          left: windowView.right - ele.left,
          bottom: ele.bottom - windowView.top,
          right: ele.right - windowView.left
        };
        return elementView.top > 0 && elementView.left > 0 && elementView.right > 0 && elementView.bottom > 0;
      }
    };
    Popup2.prototype.preRender = function() {
    };
    Popup2.prototype.setEnableRtl = function() {
      this.reposition();
      if (this.enableRtl) {
        this.element.classList.add(CLASSNAMES.RTL);
      } else {
        this.element.classList.remove(CLASSNAMES.RTL);
      }
    };
    Popup2.prototype.setContent = function() {
      if (!isNullOrUndefined(this.content)) {
        this.element.innerHTML = "";
        if (typeof this.content === "string") {
          this.element.textContent = this.content;
        } else {
          var relateToElem = this.getRelateToElement();
          var props = this.content.props;
          if (!relateToElem.classList.contains("e-dropdown-btn") || isNullOrUndefined(props)) {
            this.element.appendChild(this.content);
          }
        }
      }
    };
    Popup2.prototype.orientationOnChange = function() {
      var _this = this;
      setTimeout(function() {
        _this.refreshPosition();
      }, 200);
    };
    Popup2.prototype.refreshPosition = function(target, collision) {
      if (!isNullOrUndefined(target)) {
        this.checkFixedParent(target);
      }
      this.reposition();
      if (!collision) {
        this.checkCollision();
      }
    };
    Popup2.prototype.reposition = function() {
      var pos;
      var position;
      var relateToElement = this.getRelateToElement();
      if (typeof this.position.X === "number" && typeof this.position.Y === "number") {
        pos = {
          left: this.position.X,
          top: this.position.Y
        };
      } else if (typeof this.position.X === "string" && typeof this.position.Y === "number" || typeof this.position.X === "number" && typeof this.position.Y === "string") {
        var parentDisplay = void 0;
        var display = this.element.style.display;
        this.element.style.display = "block";
        if (this.element.classList.contains("e-dlg-modal")) {
          parentDisplay = this.element.parentElement.style.display;
          this.element.parentElement.style.display = "block";
        }
        position = this.getAnchorPosition(relateToElement, this.element, this.position, this.offsetX, this.offsetY);
        if (typeof this.position.X === "string") {
          pos = {
            left: position.left,
            top: this.position.Y
          };
        } else {
          pos = {
            left: this.position.X,
            top: position.top
          };
        }
        this.element.style.display = display;
        if (this.element.classList.contains("e-dlg-modal")) {
          this.element.parentElement.style.display = parentDisplay;
        }
      } else if (relateToElement) {
        var height = this.element.clientHeight;
        var display = this.element.style.display;
        this.element.style.display = "block";
        pos = this.getAnchorPosition(relateToElement, this.element, this.position, this.offsetX, this.offsetY, height);
        this.element.style.display = display;
      } else {
        pos = {
          left: 0,
          top: 0
        };
      }
      if (!isNullOrUndefined(pos)) {
        this.element.style.left = pos.left + "px";
        this.element.style.top = pos.top + "px";
      }
    };
    Popup2.prototype.checkGetBoundingClientRect = function(ele) {
      var eleRect;
      try {
        eleRect = ele.getBoundingClientRect();
        return eleRect;
      } catch (error) {
        return null;
      }
    };
    Popup2.prototype.getAnchorPosition = function(anchorEle, ele, position, offsetX, offsetY, height) {
      if (height === void 0) {
        height = 0;
      }
      var eleRect = this.checkGetBoundingClientRect(ele);
      var anchorRect = this.checkGetBoundingClientRect(anchorEle);
      if (isNullOrUndefined(eleRect) || isNullOrUndefined(anchorRect)) {
        return null;
      }
      var anchor = anchorEle;
      var anchorPos = {
        left: 0,
        top: 0
      };
      if (ele.offsetParent && ele.offsetParent.tagName === "BODY" && anchorEle.tagName === "BODY") {
        anchorPos = calculatePosition(anchorEle);
      } else {
        if (ele.classList.contains("e-dlg-modal") && anchor.tagName !== "BODY") {
          ele = ele.parentElement;
        }
        anchorPos = calculateRelativeBasedPosition(anchor, ele);
      }
      switch (position.X) {
        default:
        case "left":
          break;
        case "center":
          if (ele.classList.contains("e-dlg-modal") && anchor.tagName === "BODY" && this.targetType === "container") {
            anchorPos.left += window.innerWidth / 2 - eleRect.width / 2;
          } else if (this.targetType === "container") {
            anchorPos.left += anchorRect.width / 2 - eleRect.width / 2;
          } else {
            anchorPos.left += anchorRect.width / 2;
          }
          break;
        case "right":
          if (ele.classList.contains("e-dlg-modal") && anchor.tagName === "BODY" && this.targetType === "container") {
            anchorPos.left += window.innerWidth - eleRect.width;
          } else if (this.targetType === "container") {
            anchorPos.left += anchorRect.width - eleRect.width;
          } else {
            anchorPos.left += anchorRect.width;
          }
          break;
      }
      switch (position.Y) {
        default:
        case "top":
          break;
        case "center":
          if (ele.classList.contains("e-dlg-modal") && anchor.tagName === "BODY" && this.targetType === "container") {
            anchorPos.top += window.innerHeight / 2 - eleRect.height / 2;
          } else if (this.targetType === "container") {
            anchorPos.top += anchorRect.height / 2 - eleRect.height / 2;
          } else {
            anchorPos.top += anchorRect.height / 2;
          }
          break;
        case "bottom":
          if (ele.classList.contains("e-dlg-modal") && anchor.tagName === "BODY" && this.targetType === "container") {
            anchorPos.top += window.innerHeight - eleRect.height;
          } else if (this.targetType === "container" && !ele.classList.contains("e-dialog")) {
            anchorPos.top += anchorRect.height - eleRect.height;
          } else if (this.targetType === "container" && ele.classList.contains("e-dialog")) {
            anchorPos.top += anchorRect.height - height;
          } else {
            anchorPos.top += anchorRect.height;
          }
          break;
      }
      anchorPos.left += offsetX;
      anchorPos.top += offsetY;
      return anchorPos;
    };
    Popup2.prototype.callFlip = function(param) {
      var relateToElement = this.getRelateToElement();
      flip(this.element, relateToElement, this.offsetX, this.offsetY, this.position.X, this.position.Y, this.viewPortElement, param, this.fixedParent);
    };
    Popup2.prototype.callFit = function(param) {
      if (isCollide(this.element, this.viewPortElement).length !== 0) {
        if (isNullOrUndefined(this.viewPortElement)) {
          var data = fit(this.element, this.viewPortElement, param);
          if (param.X) {
            this.element.style.left = data.left + "px";
          }
          if (param.Y) {
            this.element.style.top = data.top + "px";
          }
        } else {
          var elementRect2 = this.checkGetBoundingClientRect(this.element);
          var viewPortRect = this.checkGetBoundingClientRect(this.viewPortElement);
          if (isNullOrUndefined(elementRect2) || isNullOrUndefined(viewPortRect)) {
            return null;
          }
          if (param && param.Y === true) {
            if (viewPortRect.top > elementRect2.top) {
              this.element.style.top = "0px";
            } else if (viewPortRect.bottom < elementRect2.bottom) {
              this.element.style.top = parseInt(this.element.style.top, 10) - (elementRect2.bottom - viewPortRect.bottom) + "px";
            }
          }
          if (param && param.X === true) {
            if (viewPortRect.right < elementRect2.right) {
              this.element.style.left = parseInt(this.element.style.left, 10) - (elementRect2.right - viewPortRect.right) + "px";
            } else if (viewPortRect.left > elementRect2.left) {
              this.element.style.left = parseInt(this.element.style.left, 10) + (viewPortRect.left - elementRect2.left) + "px";
            }
          }
        }
      }
    };
    Popup2.prototype.checkCollision = function() {
      var horz = this.collision.X;
      var vert = this.collision.Y;
      if (horz === "none" && vert === "none") {
        return;
      }
      if (horz === "flip" && vert === "flip") {
        this.callFlip({
          X: true,
          Y: true
        });
      } else if (horz === "fit" && vert === "fit") {
        this.callFit({
          X: true,
          Y: true
        });
      } else {
        if (horz === "flip") {
          this.callFlip({
            X: true,
            Y: false
          });
        } else if (vert === "flip") {
          this.callFlip({
            Y: true,
            X: false
          });
        }
        if (horz === "fit") {
          this.callFit({
            X: true,
            Y: false
          });
        } else if (vert === "fit") {
          this.callFit({
            X: false,
            Y: true
          });
        }
      }
    };
    Popup2.prototype.show = function(animationOptions, relativeElement) {
      var _this = this;
      var relateToElement = this.getRelateToElement();
      if (relateToElement.classList.contains("e-filemanager")) {
        this.fmDialogContainer = this.element.getElementsByClassName("e-file-select-wrap")[0];
      }
      this.wireEvents();
      if (!isNullOrUndefined(this.fmDialogContainer) && Browser.isIos) {
        this.fmDialogContainer.style.display = "block";
      }
      if (this.zIndex === 1e3 || !isNullOrUndefined(relativeElement)) {
        var zIndexElement = isNullOrUndefined(relativeElement) ? this.element : relativeElement;
        this.zIndex = getZindexPartial(zIndexElement);
        setStyleAttribute(this.element, {
          "zIndex": this.zIndex
        });
      }
      animationOptions = !isNullOrUndefined(animationOptions) && typeof animationOptions === "object" ? animationOptions : this.showAnimation;
      if (this.collision.X !== "none" || this.collision.Y !== "none") {
        removeClass([this.element], CLASSNAMES.CLOSE);
        addClass([this.element], CLASSNAMES.OPEN);
        this.checkCollision();
        removeClass([this.element], CLASSNAMES.OPEN);
        addClass([this.element], CLASSNAMES.CLOSE);
      }
      if (!isNullOrUndefined(animationOptions)) {
        animationOptions.begin = function() {
          if (!_this.isDestroyed) {
            removeClass([_this.element], CLASSNAMES.CLOSE);
            addClass([_this.element], CLASSNAMES.OPEN);
          }
        };
        animationOptions.end = function() {
          if (!_this.isDestroyed) {
            _this.trigger("open");
          }
        };
        new Animation(animationOptions).animate(this.element);
      } else {
        removeClass([this.element], CLASSNAMES.CLOSE);
        addClass([this.element], CLASSNAMES.OPEN);
        this.trigger("open");
      }
    };
    Popup2.prototype.hide = function(animationOptions) {
      var _this = this;
      animationOptions = !isNullOrUndefined(animationOptions) && typeof animationOptions === "object" ? animationOptions : this.hideAnimation;
      if (!isNullOrUndefined(animationOptions)) {
        animationOptions.end = function() {
          if (!_this.isDestroyed) {
            removeClass([_this.element], CLASSNAMES.OPEN);
            addClass([_this.element], CLASSNAMES.CLOSE);
            _this.trigger("close");
          }
        };
        new Animation(animationOptions).animate(this.element);
      } else {
        removeClass([this.element], CLASSNAMES.OPEN);
        addClass([this.element], CLASSNAMES.CLOSE);
        this.trigger("close");
      }
      this.unwireEvents();
    };
    Popup2.prototype.getScrollableParent = function(element2) {
      this.checkFixedParent(element2);
      return getScrollableParent(element2, this.fixedParent);
    };
    Popup2.prototype.checkFixedParent = function(element2) {
      var parent = element2.parentElement;
      while (parent && parent.tagName !== "HTML") {
        var parentStyle = getComputedStyle(parent);
        if ((parentStyle.position === "fixed" || parentStyle.position === "sticky") && !isNullOrUndefined(this.element) && this.element.offsetParent && this.element.offsetParent.tagName === "BODY" && getComputedStyle(this.element.offsetParent).overflow !== "hidden") {
          this.element.style.top = window.scrollY > parseInt(this.element.style.top, 10) ? formatUnit(window.scrollY - parseInt(this.element.style.top, 10)) : formatUnit(parseInt(this.element.style.top, 10) - window.scrollY);
          this.element.style.position = "fixed";
          this.fixedParent = true;
        }
        parent = parent.parentElement;
        if (!isNullOrUndefined(this.element) && isNullOrUndefined(this.element.offsetParent) && parentStyle.position === "fixed" && this.element.style.position === "fixed") {
          this.fixedParent = true;
        }
      }
    };
    __decorate7([Property("auto")], Popup2.prototype, "height", void 0);
    __decorate7([Property("auto")], Popup2.prototype, "width", void 0);
    __decorate7([Property(null)], Popup2.prototype, "content", void 0);
    __decorate7([Property("container")], Popup2.prototype, "targetType", void 0);
    __decorate7([Property(null)], Popup2.prototype, "viewPortElement", void 0);
    __decorate7([Property({
      X: "none",
      Y: "none"
    })], Popup2.prototype, "collision", void 0);
    __decorate7([Property("")], Popup2.prototype, "relateTo", void 0);
    __decorate7([Complex({}, PositionData)], Popup2.prototype, "position", void 0);
    __decorate7([Property(0)], Popup2.prototype, "offsetX", void 0);
    __decorate7([Property(0)], Popup2.prototype, "offsetY", void 0);
    __decorate7([Property(1e3)], Popup2.prototype, "zIndex", void 0);
    __decorate7([Property(false)], Popup2.prototype, "enableRtl", void 0);
    __decorate7([Property("reposition")], Popup2.prototype, "actionOnScroll", void 0);
    __decorate7([Property(null)], Popup2.prototype, "showAnimation", void 0);
    __decorate7([Property(null)], Popup2.prototype, "hideAnimation", void 0);
    __decorate7([Event2()], Popup2.prototype, "open", void 0);
    __decorate7([Event2()], Popup2.prototype, "close", void 0);
    __decorate7([Event2()], Popup2.prototype, "targetExitViewport", void 0);
    Popup2 = __decorate7([NotifyPropertyChanges], Popup2);
    return Popup2;
  }(Component)
);
function getScrollableParent(element2, fixedParent2) {
  var eleStyle = getComputedStyle(element2);
  var scrollParents = [];
  var overflowRegex = /(auto|scroll)/;
  var parent = element2.parentElement;
  while (parent && parent.tagName !== "HTML") {
    var parentStyle = getComputedStyle(parent);
    if (!(eleStyle.position === "absolute" && parentStyle.position === "static") && overflowRegex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX)) {
      scrollParents.push(parent);
    }
    parent = parent.parentElement;
  }
  if (!fixedParent2) {
    scrollParents.push(document);
  }
  return scrollParents;
}
function getZindexPartial(element2) {
  var parent = element2.parentElement;
  var parentZindex = [];
  while (parent) {
    if (parent.tagName !== "BODY") {
      var index = document.defaultView.getComputedStyle(parent, null).getPropertyValue("z-index");
      var position = document.defaultView.getComputedStyle(parent, null).getPropertyValue("position");
      if (index !== "auto" && position !== "static") {
        parentZindex.push(index);
      }
      parent = parent.parentElement;
    } else {
      break;
    }
  }
  var childrenZindex = [];
  for (var i = 0; i < document.body.children.length; i++) {
    if (!element2.isEqualNode(document.body.children[i])) {
      var index = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue("z-index");
      var position = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue("position");
      if (index !== "auto" && position !== "static") {
        childrenZindex.push(index);
      }
    }
  }
  childrenZindex.push("999");
  var siblingsZindex = [];
  if (!isNullOrUndefined(element2.parentElement) && element2.parentElement.tagName !== "BODY") {
    var childNodes = [].slice.call(element2.parentElement.children);
    for (var i = 0; i < childNodes.length; i++) {
      if (!element2.isEqualNode(childNodes[i])) {
        var index = document.defaultView.getComputedStyle(childNodes[i], null).getPropertyValue("z-index");
        var position = document.defaultView.getComputedStyle(childNodes[i], null).getPropertyValue("position");
        if (index !== "auto" && position !== "static") {
          siblingsZindex.push(index);
        }
      }
    }
  }
  var finalValue = parentZindex.concat(childrenZindex, siblingsZindex);
  var currentZindexValue = Math.max.apply(Math, finalValue) + 1;
  return currentZindexValue > 2147483647 ? 2147483647 : currentZindexValue;
}
function getMaxZindex(tagName) {
  if (tagName === void 0) {
    tagName = ["*"];
  }
  var maxZindex = [];
  for (var i = 0; i < tagName.length; i++) {
    var elements = document.getElementsByTagName(tagName[i]);
    for (var i_1 = 0; i_1 < elements.length; i_1++) {
      var index = document.defaultView.getComputedStyle(elements[i_1], null).getPropertyValue("z-index");
      var position = document.defaultView.getComputedStyle(elements[i_1], null).getPropertyValue("position");
      if (index !== "auto" && position !== "static") {
        maxZindex.push(index);
      }
    }
  }
  var currentZindexValue = Math.max.apply(Math, maxZindex) + 1;
  return currentZindexValue > 2147483647 ? 2147483647 : currentZindexValue;
}

// node_modules/@syncfusion/ej2-buttons/src/common/common.js
function wrapperInitialize(createElement2, tag, type, element2, WRAPPER4, role) {
  var input = element2;
  if (element2.tagName === tag) {
    var ejInstance = getValue("ej2_instances", element2);
    input = createElement2("input", {
      attrs: {
        "type": type
      }
    });
    var props = ["change", "cssClass", "label", "labelPosition", "id"];
    for (var index = 0, len = element2.attributes.length; index < len; index++) {
      if (props.indexOf(element2.attributes[index].nodeName) === -1) {
        input.setAttribute(element2.attributes[index].nodeName, element2.attributes[index].nodeValue);
      }
    }
    attributes(element2, {
      "class": WRAPPER4
    });
    element2.appendChild(input);
    element2.classList.add(role);
    element2.classList.remove(role);
    setValue("ej2_instances", ejInstance, input);
    deleteObject(element2, "ej2_instances");
  }
  return input;
}
function getTextNode(element2) {
  var node;
  var childnode = element2.childNodes;
  for (var i = 0; i < childnode.length; i++) {
    node = childnode[i];
    if (node.nodeType === 3) {
      return node;
    }
  }
  return null;
}
function destroy2(ejInst, wrapper, tagName) {
  if (tagName === "INPUT") {
    wrapper.parentNode.insertBefore(ejInst.element, wrapper);
    detach(wrapper);
    ejInst.element.checked = false;
    ["name", "value", "disabled"].forEach(function(key) {
      ejInst.element.removeAttribute(key);
    });
  } else {
    ["role", "aria-checked", "class"].forEach(function(key) {
      wrapper.removeAttribute(key);
    });
    wrapper.innerHTML = "";
    ejInst.element = wrapper;
  }
}
function preRender(proxy, control, wrapper, element2, moduleName) {
  element2 = wrapperInitialize(proxy.createElement, control, "checkbox", element2, wrapper, moduleName);
  proxy.element = element2;
  if (proxy.element.getAttribute("type") !== "checkbox") {
    proxy.element.setAttribute("type", "checkbox");
  }
  if (!proxy.element.id) {
    proxy.element.id = getUniqueID("e-" + moduleName);
  }
}
function createCheckBox(createElement2, enableRipple, options) {
  if (enableRipple === void 0) {
    enableRipple = false;
  }
  if (options === void 0) {
    options = {};
  }
  var wrapper = createElement2("div", {
    className: "e-checkbox-wrapper e-css"
  });
  if (options.cssClass) {
    addClass([wrapper], options.cssClass.split(" "));
  }
  if (options.enableRtl) {
    wrapper.classList.add("e-rtl");
  }
  if (enableRipple) {
    var rippleSpan = createElement2("span", {
      className: "e-ripple-container"
    });
    rippleEffect(rippleSpan, {
      isCenterRipple: true,
      duration: 400
    });
    wrapper.appendChild(rippleSpan);
  }
  var frameSpan = createElement2("span", {
    className: "e-frame e-icons"
  });
  if (options.checked) {
    frameSpan.classList.add("e-check");
  }
  wrapper.appendChild(frameSpan);
  if (options.label) {
    var labelSpan = createElement2("span", {
      className: "e-label"
    });
    if (options.disableHtmlEncode) {
      labelSpan.textContent = options.label;
    } else {
      labelSpan.innerHTML = options.label;
    }
    wrapper.appendChild(labelSpan);
  }
  return wrapper;
}
function rippleMouseHandler(e, rippleSpan) {
  if (rippleSpan) {
    var event_1 = document.createEvent("MouseEvents");
    event_1.initEvent(e.type, false, true);
    rippleSpan.dispatchEvent(event_1);
  }
}
function setHiddenInput(proxy, wrap) {
  if (proxy.element.getAttribute("ejs-for")) {
    wrap.appendChild(proxy.createElement("input", {
      attrs: {
        "name": proxy.name || proxy.element.name,
        "value": "false",
        "type": "hidden"
      }
    }));
  }
}

// node_modules/@syncfusion/ej2-buttons/src/button/button.js
var __extends8 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IconPosition;
(function(IconPosition2) {
  IconPosition2["Left"] = "Left";
  IconPosition2["Right"] = "Right";
  IconPosition2["Top"] = "Top";
  IconPosition2["Bottom"] = "Bottom";
})(IconPosition || (IconPosition = {}));
var buttonObserver = new Observer();
var cssClassName = {
  RTL: "e-rtl",
  BUTTON: "e-btn",
  PRIMARY: "e-primary",
  ICONBTN: "e-icon-btn"
};
var Button = (
  /** @class */
  function(_super) {
    __extends8(Button2, _super);
    function Button2(options, element2) {
      return _super.call(this, options, element2) || this;
    }
    Button2.prototype.preRender = function() {
    };
    Button2.prototype.render = function() {
      this.initialize();
      this.removeRippleEffect = rippleEffect(this.element, {
        selector: "." + cssClassName.BUTTON
      });
      this.renderComplete();
    };
    Button2.prototype.initialize = function() {
      if (this.cssClass) {
        addClass([this.element], this.cssClass.replace(/\s+/g, " ").trim().split(" "));
      }
      if (this.isPrimary) {
        this.element.classList.add(cssClassName.PRIMARY);
      }
      if (!isBlazor() || isBlazor() && this.getModuleName() !== "progress-btn") {
        if (this.content) {
          var tempContent = this.enableHtmlSanitizer ? SanitizeHtmlHelper.sanitize(this.content) : this.content;
          this.element.innerHTML = tempContent;
        }
        this.setIconCss();
      }
      if (this.enableRtl) {
        this.element.classList.add(cssClassName.RTL);
      }
      if (this.disabled) {
        this.controlStatus(this.disabled);
      } else {
        this.wireEvents();
      }
    };
    Button2.prototype.controlStatus = function(disabled) {
      this.element.disabled = disabled;
    };
    Button2.prototype.setIconCss = function() {
      if (this.iconCss) {
        var span = this.createElement("span", {
          className: "e-btn-icon " + this.iconCss
        });
        if (!this.element.textContent.trim()) {
          this.element.classList.add(cssClassName.ICONBTN);
        } else {
          span.classList.add("e-icon-" + this.iconPosition.toLowerCase());
          if (this.iconPosition === "Top" || this.iconPosition === "Bottom") {
            this.element.classList.add("e-" + this.iconPosition.toLowerCase() + "-icon-btn");
          }
        }
        var node = this.element.childNodes[0];
        if (node && (this.iconPosition === "Left" || this.iconPosition === "Top")) {
          this.element.insertBefore(span, node);
        } else {
          this.element.appendChild(span);
        }
      }
    };
    Button2.prototype.wireEvents = function() {
      if (this.isToggle) {
        EventHandler.add(this.element, "click", this.btnClickHandler, this);
      }
    };
    Button2.prototype.unWireEvents = function() {
      if (this.isToggle) {
        EventHandler.remove(this.element, "click", this.btnClickHandler);
      }
    };
    Button2.prototype.btnClickHandler = function() {
      if (this.element.classList.contains("e-active")) {
        this.element.classList.remove("e-active");
      } else {
        this.element.classList.add("e-active");
      }
    };
    Button2.prototype.destroy = function() {
      var classList2 = [cssClassName.PRIMARY, cssClassName.RTL, cssClassName.ICONBTN, "e-success", "e-info", "e-danger", "e-warning", "e-flat", "e-outline", "e-small", "e-bigger", "e-active", "e-round", "e-top-icon-btn", "e-bottom-icon-btn"];
      if (this.cssClass) {
        classList2 = classList2.concat(this.cssClass.split(" "));
      }
      _super.prototype.destroy.call(this);
      removeClass([this.element], classList2);
      if (!this.element.getAttribute("class")) {
        this.element.removeAttribute("class");
      }
      if (this.disabled) {
        this.element.removeAttribute("disabled");
      }
      if (this.content) {
        this.element.innerHTML = this.element.innerHTML.replace(this.content, "");
      }
      var span = this.element.querySelector("span.e-btn-icon");
      if (span) {
        detach(span);
      }
      this.unWireEvents();
      if (isRippleEnabled) {
        this.removeRippleEffect();
      }
    };
    Button2.prototype.getModuleName = function() {
      return "btn";
    };
    Button2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    Button2.Inject = function() {
    };
    Button2.prototype.onPropertyChanged = function(newProp, oldProp) {
      var span = this.element.querySelector("span.e-btn-icon");
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "isPrimary":
            if (newProp.isPrimary) {
              this.element.classList.add(cssClassName.PRIMARY);
            } else {
              this.element.classList.remove(cssClassName.PRIMARY);
            }
            break;
          case "disabled":
            this.controlStatus(newProp.disabled);
            break;
          case "iconCss": {
            span = this.element.querySelector("span.e-btn-icon");
            if (span) {
              if (newProp.iconCss) {
                span.className = "e-btn-icon " + newProp.iconCss;
                if (this.element.textContent.trim()) {
                  if (this.iconPosition === "Left") {
                    span.classList.add("e-icon-left");
                  } else {
                    span.classList.add("e-icon-right");
                  }
                }
              } else {
                detach(span);
              }
            } else {
              this.setIconCss();
            }
            break;
          }
          case "iconPosition":
            removeClass([this.element], ["e-top-icon-btn", "e-bottom-icon-btn"]);
            span = this.element.querySelector("span.e-btn-icon");
            if (span) {
              detach(span);
            }
            this.setIconCss();
            break;
          case "cssClass":
            if (oldProp.cssClass) {
              removeClass([this.element], oldProp.cssClass.split(" "));
            }
            if (newProp.cssClass) {
              addClass([this.element], newProp.cssClass.replace(/\s+/g, " ").trim().split(" "));
            }
            break;
          case "enableRtl":
            if (newProp.enableRtl) {
              this.element.classList.add(cssClassName.RTL);
            } else {
              this.element.classList.remove(cssClassName.RTL);
            }
            break;
          case "content": {
            var node = getTextNode(this.element);
            if (!node) {
              this.element.classList.remove(cssClassName.ICONBTN);
            }
            if (!isBlazor() || isBlazor() && !this.isServerRendered && this.getModuleName() !== "progress-btn") {
              if (this.enableHtmlSanitizer) {
                newProp.content = SanitizeHtmlHelper.sanitize(newProp.content);
              }
              this.element.innerHTML = newProp.content;
              this.setIconCss();
            }
            break;
          }
          case "isToggle":
            if (newProp.isToggle) {
              EventHandler.add(this.element, "click", this.btnClickHandler, this);
            } else {
              EventHandler.remove(this.element, "click", this.btnClickHandler);
              removeClass([this.element], ["e-active"]);
            }
            break;
        }
      }
    };
    Button2.prototype.click = function() {
      this.element.click();
    };
    Button2.prototype.focusIn = function() {
      this.element.focus();
    };
    __decorate8([Property("Left")], Button2.prototype, "iconPosition", void 0);
    __decorate8([Property("")], Button2.prototype, "iconCss", void 0);
    __decorate8([Property(false)], Button2.prototype, "disabled", void 0);
    __decorate8([Property(false)], Button2.prototype, "isPrimary", void 0);
    __decorate8([Property("")], Button2.prototype, "cssClass", void 0);
    __decorate8([Property("")], Button2.prototype, "content", void 0);
    __decorate8([Property(false)], Button2.prototype, "isToggle", void 0);
    __decorate8([Property()], Button2.prototype, "locale", void 0);
    __decorate8([Property(true)], Button2.prototype, "enableHtmlSanitizer", void 0);
    __decorate8([Event2()], Button2.prototype, "created", void 0);
    Button2 = __decorate8([NotifyPropertyChanges], Button2);
    return Button2;
  }(Component)
);

// node_modules/@syncfusion/ej2-buttons/src/check-box/check-box.js
var __extends9 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CHECK = "e-check";
var DISABLED = "e-checkbox-disabled";
var FRAME = "e-frame";
var INDETERMINATE = "e-stop";
var LABEL = "e-label";
var RIPPLE = "e-ripple-container";
var RIPPLECHECK = "e-ripple-check";
var RIPPLEINDETERMINATE = "e-ripple-stop";
var RTL = "e-rtl";
var WRAPPER = "e-checkbox-wrapper";
var containerAttr = ["title", "class", "style", "disabled", "readonly", "name", "value", "id", "tabindex"];
var CheckBox = (
  /** @class */
  function(_super) {
    __extends9(CheckBox2, _super);
    function CheckBox2(options, element2) {
      var _this = _super.call(this, options, element2) || this;
      _this.isFocused = false;
      _this.isMouseClick = false;
      _this.clickTriggered = false;
      _this.validCheck = true;
      return _this;
    }
    CheckBox2.prototype.changeState = function(state, isInitialize) {
      var wrapper = this.getWrapper();
      var rippleSpan = null;
      var frameSpan = null;
      if (wrapper) {
        frameSpan = wrapper.getElementsByClassName(FRAME)[0];
        if (isRippleEnabled) {
          rippleSpan = wrapper.getElementsByClassName(RIPPLE)[0];
        }
      }
      if (state === "check") {
        if (frameSpan) {
          frameSpan.classList.remove(INDETERMINATE);
          frameSpan.classList.add(CHECK);
        }
        if (rippleSpan) {
          rippleSpan.classList.remove(RIPPLEINDETERMINATE);
          rippleSpan.classList.add(RIPPLECHECK);
        }
        this.element.checked = true;
        if ((this.element.required || closest(this.element, "form") && closest(this.element, "form").classList.contains("e-formvalidator")) && this.validCheck && !isInitialize) {
          this.element.checked = false;
          this.validCheck = false;
        } else if (this.element.required || closest(this.element, "form") && closest(this.element, "form").classList.contains("e-formvalidator")) {
          this.validCheck = true;
        }
      } else if (state === "uncheck") {
        if (frameSpan) {
          removeClass([frameSpan], [CHECK, INDETERMINATE]);
        }
        if (rippleSpan) {
          removeClass([rippleSpan], [RIPPLECHECK, RIPPLEINDETERMINATE]);
        }
        this.element.checked = false;
        if ((this.element.required || closest(this.element, "form") && closest(this.element, "form").classList.contains("e-formvalidator")) && this.validCheck && !isInitialize) {
          this.element.checked = true;
          this.validCheck = false;
        } else if (this.element.required || closest(this.element, "form") && closest(this.element, "form").classList.contains("e-formvalidator")) {
          this.validCheck = true;
        }
      } else {
        if (frameSpan) {
          frameSpan.classList.remove(CHECK);
          frameSpan.classList.add(INDETERMINATE);
        }
        if (rippleSpan) {
          rippleSpan.classList.remove(RIPPLECHECK);
          rippleSpan.classList.add(RIPPLEINDETERMINATE);
        }
        this.element.indeterminate = true;
        this.indeterminate = true;
      }
    };
    CheckBox2.prototype.clickHandler = function(event) {
      if (event.target.tagName === "INPUT" && this.clickTriggered) {
        if (this.isVue) {
          this.changeState(this.checked ? "check" : "uncheck");
        }
        this.clickTriggered = false;
        return;
      }
      if (event.target.tagName === "SPAN" || event.target.tagName === "LABEL" || closest(event.target, ".e-label")) {
        this.clickTriggered = true;
      }
      if (this.isMouseClick) {
        this.focusOutHandler();
        this.isMouseClick = false;
      }
      if (this.indeterminate) {
        this.changeState(this.checked ? "check" : "uncheck");
        this.indeterminate = false;
        this.element.indeterminate = false;
      } else if (this.checked) {
        this.changeState("uncheck");
        this.checked = false;
      } else {
        this.changeState("check");
        this.checked = true;
      }
      var changeEventArgs = {
        checked: this.updateVueArrayModel(false),
        event
      };
      this.trigger("change", changeEventArgs);
      event.stopPropagation();
    };
    CheckBox2.prototype.destroy = function() {
      var _this = this;
      var wrapper = this.getWrapper();
      _super.prototype.destroy.call(this);
      if (this.wrapper) {
        wrapper = this.wrapper;
        if (!this.disabled) {
          this.unWireEvents();
        }
        if (this.tagName === "INPUT") {
          if (this.getWrapper() && wrapper.parentNode) {
            wrapper.parentNode.insertBefore(this.element, wrapper);
          }
          detach(wrapper);
          this.element.checked = false;
          if (this.indeterminate) {
            this.element.indeterminate = false;
          }
          ["name", "value", "disabled"].forEach(function(key) {
            _this.element.removeAttribute(key);
          });
        } else {
          ["class"].forEach(function(key) {
            wrapper.removeAttribute(key);
          });
          wrapper.innerHTML = "";
          this.element = wrapper;
          if (this.refreshing) {
            ["e-control", "e-checkbox", "e-lib"].forEach(function(key) {
              _this.element.classList.add(key);
            });
            setValue("ej2_instances", [this], this.element);
          }
        }
      }
    };
    CheckBox2.prototype.focusHandler = function() {
      this.isFocused = true;
    };
    CheckBox2.prototype.focusOutHandler = function() {
      var wrapper = this.getWrapper();
      if (wrapper) {
        wrapper.classList.remove("e-focus");
      }
      this.isFocused = false;
    };
    CheckBox2.prototype.getModuleName = function() {
      return "checkbox";
    };
    CheckBox2.prototype.getPersistData = function() {
      return this.addOnPersist(["checked", "indeterminate"]);
    };
    CheckBox2.prototype.getWrapper = function() {
      if (this.element && this.element.parentElement) {
        return this.element.parentElement.parentElement;
      } else {
        return null;
      }
    };
    CheckBox2.prototype.getLabel = function() {
      if (this.element) {
        return this.element.parentElement;
      } else {
        return null;
      }
    };
    CheckBox2.prototype.initialize = function() {
      if (isNullOrUndefined(this.initialCheckedValue)) {
        this.initialCheckedValue = this.checked;
      }
      if (this.name) {
        this.element.setAttribute("name", this.name);
      }
      if (this.value) {
        this.element.setAttribute("value", this.value);
        if (this.isVue && typeof this.value === "boolean" && this.value === true) {
          this.setProperties({
            "checked": true
          }, true);
        }
      }
      if (this.checked) {
        this.changeState("check", true);
      }
      if (this.indeterminate) {
        this.changeState();
      }
      if (this.disabled) {
        this.setDisabled();
      }
    };
    CheckBox2.prototype.initWrapper = function() {
      var wrapper = this.element.parentElement;
      if (!wrapper.classList.contains(WRAPPER)) {
        wrapper = this.createElement("div", {
          className: WRAPPER
        });
        if (this.element.parentNode) {
          this.element.parentNode.insertBefore(wrapper, this.element);
        }
      }
      var label = this.createElement("label", {
        attrs: {
          for: this.element.id
        }
      });
      var frameSpan = this.createElement("span", {
        className: "e-icons " + FRAME
      });
      wrapper.classList.add("e-wrapper");
      if (this.enableRtl) {
        wrapper.classList.add(RTL);
      }
      if (this.cssClass) {
        addClass([wrapper], this.cssClass.replace(/\s+/g, " ").trim().split(" "));
      }
      wrapper.appendChild(label);
      label.appendChild(this.element);
      setHiddenInput(this, label);
      label.appendChild(frameSpan);
      if (isRippleEnabled) {
        var rippleSpan = this.createElement("span", {
          className: RIPPLE
        });
        if (this.labelPosition === "Before") {
          label.appendChild(rippleSpan);
        } else {
          label.insertBefore(rippleSpan, frameSpan);
        }
        rippleEffect(rippleSpan, {
          duration: 400,
          isCenterRipple: true
        });
      }
      if (this.label) {
        this.setText(this.label);
      }
    };
    CheckBox2.prototype.keyUpHandler = function() {
      if (this.isFocused) {
        this.getWrapper().classList.add("e-focus");
      }
    };
    CheckBox2.prototype.labelMouseDownHandler = function(e) {
      this.isMouseClick = true;
      var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
      rippleMouseHandler(e, rippleSpan);
    };
    CheckBox2.prototype.labelMouseLeaveHandler = function(e) {
      var rippleSpan = this.getLabel().getElementsByClassName(RIPPLE)[0];
      if (rippleSpan) {
        var rippleElem = rippleSpan.querySelectorAll(".e-ripple-element");
        for (var i = rippleElem.length - 1; i > 0; i--) {
          rippleSpan.removeChild(rippleSpan.childNodes[i]);
        }
        rippleMouseHandler(e, rippleSpan);
      }
    };
    CheckBox2.prototype.labelMouseUpHandler = function(e) {
      this.isMouseClick = true;
      var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
      if (rippleSpan) {
        var rippleElem = rippleSpan.querySelectorAll(".e-ripple-element");
        for (var i = 0; i < rippleElem.length - 1; i++) {
          rippleSpan.removeChild(rippleSpan.childNodes[i]);
        }
        rippleMouseHandler(e, rippleSpan);
      }
    };
    CheckBox2.prototype.onPropertyChanged = function(newProp, oldProp) {
      var wrapper = this.getWrapper();
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "checked":
            this.indeterminate = false;
            this.element.indeterminate = false;
            this.changeState(newProp.checked ? "check" : "uncheck");
            break;
          case "indeterminate":
            if (newProp.indeterminate) {
              this.changeState();
            } else {
              this.element.indeterminate = false;
              this.changeState(this.checked ? "check" : "uncheck");
            }
            break;
          case "disabled":
            if (newProp.disabled) {
              this.setDisabled();
              this.wrapper = this.getWrapper();
              this.unWireEvents();
            } else {
              this.element.disabled = false;
              wrapper.classList.remove(DISABLED);
              wrapper.setAttribute("aria-disabled", "false");
              this.wireEvents();
            }
            break;
          case "cssClass":
            if (oldProp.cssClass) {
              removeClass([wrapper], oldProp.cssClass.split(" "));
            }
            if (newProp.cssClass) {
              addClass([wrapper], newProp.cssClass.replace(/\s+/g, " ").trim().split(" "));
            }
            break;
          case "enableRtl":
            if (newProp.enableRtl) {
              wrapper.classList.add(RTL);
            } else {
              wrapper.classList.remove(RTL);
            }
            break;
          case "label":
            this.setText(newProp.label);
            break;
          case "labelPosition": {
            var label = wrapper.getElementsByClassName(LABEL)[0];
            var labelWrap = wrapper.getElementsByTagName("label")[0];
            detach(label);
            if (newProp.labelPosition === "After") {
              labelWrap.appendChild(label);
            } else {
              labelWrap.insertBefore(label, wrapper.getElementsByClassName(FRAME)[0]);
            }
            break;
          }
          case "name":
            this.element.setAttribute("name", newProp.name);
            break;
          case "value":
            if (this.isVue && typeof newProp.value === "object") {
              break;
            }
            this.element.setAttribute("value", newProp.value);
            break;
          case "htmlAttributes":
            this.updateHtmlAttributeToWrapper();
            break;
        }
      }
    };
    CheckBox2.prototype.preRender = function() {
      var element2 = this.element;
      this.tagName = this.element.tagName;
      element2 = wrapperInitialize(this.createElement, "EJS-CHECKBOX", "checkbox", element2, WRAPPER, "checkbox");
      this.element = element2;
      if (this.element.getAttribute("type") !== "checkbox") {
        this.element.setAttribute("type", "checkbox");
      }
      if (!this.element.id) {
        this.element.id = getUniqueID("e-" + this.getModuleName());
      }
    };
    CheckBox2.prototype.render = function() {
      this.initWrapper();
      this.initialize();
      if (!this.disabled) {
        this.wireEvents();
      }
      this.updateHtmlAttributeToWrapper();
      this.updateVueArrayModel(true);
      this.renderComplete();
      this.wrapper = this.getWrapper();
    };
    CheckBox2.prototype.setDisabled = function() {
      var wrapper = this.getWrapper();
      this.element.disabled = true;
      wrapper.classList.add(DISABLED);
      wrapper.setAttribute("aria-disabled", "true");
    };
    CheckBox2.prototype.setText = function(text) {
      var wrapper = this.getWrapper();
      if (!wrapper) {
        return;
      }
      var label = wrapper.getElementsByClassName(LABEL)[0];
      if (label) {
        label.innerHTML = this.enableHtmlSanitizer ? SanitizeHtmlHelper.sanitize(text) : text;
      } else {
        text = this.enableHtmlSanitizer ? SanitizeHtmlHelper.sanitize(text) : text;
        label = this.createElement("span", {
          className: LABEL,
          innerHTML: text
        });
        var labelWrap = wrapper.getElementsByTagName("label")[0];
        if (this.labelPosition === "Before") {
          labelWrap.insertBefore(label, wrapper.getElementsByClassName(FRAME)[0]);
        } else {
          labelWrap.appendChild(label);
        }
      }
    };
    CheckBox2.prototype.changeHandler = function(e) {
      e.stopPropagation();
    };
    CheckBox2.prototype.formResetHandler = function() {
      this.checked = this.initialCheckedValue;
      this.element.checked = this.initialCheckedValue;
    };
    CheckBox2.prototype.unWireEvents = function() {
      var wrapper = this.wrapper;
      EventHandler.remove(wrapper, "click", this.clickHandler);
      EventHandler.remove(this.element, "keyup", this.keyUpHandler);
      EventHandler.remove(this.element, "focus", this.focusHandler);
      EventHandler.remove(this.element, "focusout", this.focusOutHandler);
      var label = wrapper.getElementsByTagName("label")[0];
      if (label) {
        EventHandler.remove(label, "mousedown", this.labelMouseDownHandler);
        EventHandler.remove(label, "mouseup", this.labelMouseUpHandler);
        EventHandler.remove(label, "mouseleave", this.labelMouseLeaveHandler);
      }
      var formElem = closest(this.element, "form");
      if (formElem) {
        EventHandler.remove(formElem, "reset", this.formResetHandler);
      }
      if (this.tagName === "EJS-CHECKBOX") {
        EventHandler.remove(this.element, "change", this.changeHandler);
      }
    };
    CheckBox2.prototype.wireEvents = function() {
      var wrapper = this.getWrapper();
      EventHandler.add(wrapper, "click", this.clickHandler, this);
      EventHandler.add(this.element, "keyup", this.keyUpHandler, this);
      EventHandler.add(this.element, "focus", this.focusHandler, this);
      EventHandler.add(this.element, "focusout", this.focusOutHandler, this);
      var label = wrapper.getElementsByTagName("label")[0];
      EventHandler.add(label, "mousedown", this.labelMouseDownHandler, this);
      EventHandler.add(label, "mouseup", this.labelMouseUpHandler, this);
      EventHandler.add(label, "mouseleave", this.labelMouseLeaveHandler, this);
      var formElem = closest(this.element, "form");
      if (formElem) {
        EventHandler.add(formElem, "reset", this.formResetHandler, this);
      }
      if (this.tagName === "EJS-CHECKBOX") {
        EventHandler.add(this.element, "change", this.changeHandler, this);
      }
    };
    CheckBox2.prototype.updateVueArrayModel = function(init) {
      if (this.isVue && typeof this.value === "object") {
        var value = this.element.value;
        if (value && this.value) {
          if (init) {
            for (var i = 0; i < this.value.length; i++) {
              if (value === this.value[i]) {
                this.changeState("check");
                this.setProperties({
                  "checked": true
                }, true);
              }
            }
          } else {
            var index = this.value.indexOf(value);
            if (this.checked) {
              if (index < 0) {
                this.value.push(value);
              }
            } else {
              if (index > -1) {
                this.value.splice(index, 1);
              }
            }
            return this.value;
          }
        }
      }
      return this.validCheck ? this.element.checked : !this.element.checked;
    };
    CheckBox2.prototype.updateHtmlAttributeToWrapper = function() {
      if (!isNullOrUndefined(this.htmlAttributes)) {
        for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
          var key = _a[_i];
          var wrapper = this.getWrapper();
          if (containerAttr.indexOf(key) > -1) {
            if (key === "class") {
              addClass([wrapper], this.htmlAttributes["" + key].split(" "));
            } else if (key === "title") {
              wrapper.setAttribute(key, this.htmlAttributes["" + key]);
            } else if (key === "style") {
              var frameSpan = this.getWrapper().getElementsByClassName(FRAME)[0];
              frameSpan.setAttribute(key, this.htmlAttributes["" + key]);
            } else if (key === "disabled") {
              if (this.htmlAttributes["" + key] === "true") {
                this.setDisabled();
              }
              this.element.setAttribute(key, this.htmlAttributes["" + key]);
            } else {
              this.element.setAttribute(key, this.htmlAttributes["" + key]);
            }
          } else {
            wrapper.setAttribute(key, this.htmlAttributes["" + key]);
          }
        }
      }
    };
    CheckBox2.prototype.click = function() {
      this.element.click();
    };
    CheckBox2.prototype.focusIn = function() {
      this.element.focus();
    };
    __decorate9([Event2()], CheckBox2.prototype, "change", void 0);
    __decorate9([Event2()], CheckBox2.prototype, "created", void 0);
    __decorate9([Property(false)], CheckBox2.prototype, "checked", void 0);
    __decorate9([Property("")], CheckBox2.prototype, "cssClass", void 0);
    __decorate9([Property(false)], CheckBox2.prototype, "disabled", void 0);
    __decorate9([Property(false)], CheckBox2.prototype, "indeterminate", void 0);
    __decorate9([Property("")], CheckBox2.prototype, "label", void 0);
    __decorate9([Property("After")], CheckBox2.prototype, "labelPosition", void 0);
    __decorate9([Property("")], CheckBox2.prototype, "name", void 0);
    __decorate9([Property("")], CheckBox2.prototype, "value", void 0);
    __decorate9([Property(true)], CheckBox2.prototype, "enableHtmlSanitizer", void 0);
    __decorate9([Property({})], CheckBox2.prototype, "htmlAttributes", void 0);
    CheckBox2 = __decorate9([NotifyPropertyChanges], CheckBox2);
    return CheckBox2;
  }(Component)
);

// node_modules/@syncfusion/ej2-buttons/src/radio-button/radio-button.js
var __extends10 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LABEL2 = "e-label";
var RIPPLE2 = "e-ripple-container";
var RTL2 = "e-rtl";
var WRAPPER2 = "e-radio-wrapper";
var ATTRIBUTES = ["title", "class", "style", "disabled", "readonly", "name", "value", "id"];
var RadioButton = (
  /** @class */
  function(_super) {
    __extends10(RadioButton2, _super);
    function RadioButton2(options, element2) {
      var _this = _super.call(this, options, element2) || this;
      _this.isFocused = false;
      return _this;
    }
    RadioButton_1 = RadioButton2;
    RadioButton2.prototype.changeHandler = function(event) {
      this.checked = true;
      this.dataBind();
      var value = this.element.getAttribute("value");
      value = this.isVue && value ? this.element.value : this.value;
      var type = typeof this.value;
      if (this.isVue && type === "boolean") {
        value = value === "true" ? true : false;
      }
      this.trigger("change", {
        value,
        event
      });
      if (this.isAngular) {
        event.stopPropagation();
      }
    };
    RadioButton2.prototype.updateChange = function() {
      var input;
      var instance;
      var radioGrp = this.getRadioGroup();
      for (var i = 0; i < radioGrp.length; i++) {
        input = radioGrp[i];
        if (input !== this.element) {
          instance = getInstance(input, RadioButton_1);
          instance.checked = false;
          if (this.tagName === "EJS-RADIOBUTTON") {
            instance.angularValue = this.value;
          }
        }
      }
    };
    RadioButton2.prototype.destroy = function() {
      var _this = this;
      var radioWrap = this.wrapper;
      _super.prototype.destroy.call(this);
      if (radioWrap) {
        if (!this.disabled) {
          this.unWireEvents();
        }
        if (this.tagName === "INPUT") {
          if (radioWrap.parentNode) {
            radioWrap.parentNode.insertBefore(this.element, radioWrap);
          }
          detach(radioWrap);
          this.element.checked = false;
          ["name", "value", "disabled"].forEach(function(key) {
            _this.element.removeAttribute(key);
          });
        } else {
          ["role", "aria-checked", "class"].forEach(function(key) {
            radioWrap.removeAttribute(key);
          });
          radioWrap.innerHTML = "";
          this.element = this.wrapper;
          if (this.refreshing) {
            ["e-control", "e-radio", "e-lib"].forEach(function(key) {
              _this.element.classList.add(key);
            });
            setValue("ej2_instances", [this], this.element);
          }
        }
      }
    };
    RadioButton2.prototype.focusHandler = function() {
      this.isFocused = true;
    };
    RadioButton2.prototype.focusOutHandler = function() {
      var label = this.getLabel();
      if (label) {
        label.classList.remove("e-focus");
      }
    };
    RadioButton2.prototype.getModuleName = function() {
      return "radio";
    };
    RadioButton2.prototype.getSelectedValue = function() {
      var input;
      var radioGrp = this.getRadioGroup();
      for (var i = 0, len = radioGrp.length; i < len; i++) {
        input = radioGrp[i];
        if (input.checked) {
          return input.value;
        }
      }
      return "";
    };
    RadioButton2.prototype.getRadioGroup = function() {
      return document.querySelectorAll('input.e-radio[name="' + this.element.getAttribute("name") + '"]');
    };
    RadioButton2.prototype.getPersistData = function() {
      return this.addOnPersist(["checked"]);
    };
    RadioButton2.prototype.getWrapper = function() {
      if (this.element.parentElement) {
        return this.element.parentElement;
      } else {
        return null;
      }
    };
    RadioButton2.prototype.getLabel = function() {
      if (this.element.nextElementSibling) {
        return this.element.nextElementSibling;
      } else {
        return null;
      }
    };
    RadioButton2.prototype.initialize = function() {
      if (isNullOrUndefined(this.initialCheckedValue)) {
        this.initialCheckedValue = this.checked;
      }
      this.initWrapper();
      this.updateHtmlAttribute();
      if (this.name) {
        this.element.setAttribute("name", this.name);
      }
      var value = this.element.getAttribute("value");
      var type = typeof this.value;
      if (this.isVue && type === "boolean") {
        value = value === "true" ? true : false;
      }
      if (this.isVue ? this.value && type !== "boolean" && !value : this.value) {
        this.element.setAttribute("value", this.value);
      }
      if (this.checked) {
        this.element.checked = true;
      }
      if (this.disabled) {
        this.setDisabled();
      }
    };
    RadioButton2.prototype.initWrapper = function() {
      var rippleSpan;
      var wrapper = this.element.parentElement;
      if (!wrapper.classList.contains(WRAPPER2)) {
        wrapper = this.createElement("div", {
          className: WRAPPER2
        });
        if (this.element.parentNode) {
          this.element.parentNode.insertBefore(wrapper, this.element);
        }
      }
      var label = this.createElement("label", {
        attrs: {
          for: this.element.id
        }
      });
      wrapper.appendChild(this.element);
      wrapper.appendChild(label);
      if (isRippleEnabled) {
        rippleSpan = this.createElement("span", {
          className: RIPPLE2
        });
        label.appendChild(rippleSpan);
        rippleEffect(rippleSpan, {
          duration: 400,
          isCenterRipple: true
        });
      }
      wrapper.classList.add("e-wrapper");
      if (this.enableRtl) {
        label.classList.add(RTL2);
      }
      if (this.cssClass) {
        addClass([wrapper], this.cssClass.replace(/\s+/g, " ").trim().split(" "));
      }
      if (this.label) {
        this.setText(this.label);
      }
    };
    RadioButton2.prototype.keyUpHandler = function() {
      if (this.isFocused) {
        this.getLabel().classList.add("e-focus");
      }
    };
    RadioButton2.prototype.labelMouseDownHandler = function(e) {
      var rippleSpan = this.getLabel().getElementsByClassName(RIPPLE2)[0];
      rippleMouseHandler(e, rippleSpan);
    };
    RadioButton2.prototype.labelMouseLeaveHandler = function(e) {
      var rippleSpan = this.getLabel().getElementsByClassName(RIPPLE2)[0];
      if (rippleSpan) {
        var rippleElem = rippleSpan.querySelectorAll(".e-ripple-element");
        for (var i = rippleElem.length - 1; i > 0; i--) {
          rippleSpan.removeChild(rippleSpan.childNodes[i]);
        }
        rippleMouseHandler(e, rippleSpan);
      }
    };
    RadioButton2.prototype.labelMouseUpHandler = function(e) {
      var rippleSpan = this.getLabel().getElementsByClassName(RIPPLE2)[0];
      if (rippleSpan) {
        var rippleElem = rippleSpan.querySelectorAll(".e-ripple-element");
        for (var i = rippleElem.length - 1; i > 0; i--) {
          rippleSpan.removeChild(rippleSpan.childNodes[i]);
        }
        rippleMouseHandler(e, rippleSpan);
      }
    };
    RadioButton2.prototype.formResetHandler = function() {
      this.checked = this.initialCheckedValue;
      if (this.initialCheckedValue) {
        attributes(this.element, {
          "checked": "true"
        });
      }
    };
    RadioButton2.prototype.onPropertyChanged = function(newProp, oldProp) {
      var wrap = this.getWrapper();
      var label = this.getLabel();
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "checked":
            if (newProp.checked) {
              this.updateChange();
            }
            this.element.checked = newProp.checked;
            break;
          case "disabled":
            if (newProp.disabled) {
              this.setDisabled();
              this.unWireEvents();
            } else {
              this.element.disabled = false;
              this.wireEvents();
            }
            break;
          case "cssClass":
            if (oldProp.cssClass) {
              removeClass([wrap], oldProp.cssClass.split(" "));
            }
            if (newProp.cssClass) {
              addClass([wrap], newProp.cssClass.replace(/\s+/g, " ").trim().split(" "));
            }
            break;
          case "enableRtl":
            if (newProp.enableRtl) {
              label.classList.add(RTL2);
            } else {
              label.classList.remove(RTL2);
            }
            break;
          case "label":
            this.setText(newProp.label);
            break;
          case "labelPosition":
            if (newProp.labelPosition === "Before") {
              label.classList.add("e-right");
            } else {
              label.classList.remove("e-right");
            }
            break;
          case "name":
            this.element.setAttribute("name", newProp.name);
            break;
          case "value":
            var type = typeof this.htmlAttributes.value;
            if (!isNullOrUndefined(this.htmlAttributes) && (this.htmlAttributes.value || type === "boolean" && !this.htmlAttributes.value)) {
              break;
            }
            this.element.setAttribute("value", newProp.value);
            break;
          case "htmlAttributes":
            this.updateHtmlAttribute();
            break;
        }
      }
    };
    RadioButton2.prototype.preRender = function() {
      var element2 = this.element;
      this.formElement = closest(this.element, "form");
      this.tagName = this.element.tagName;
      element2 = wrapperInitialize(this.createElement, "EJS-RADIOBUTTON", "radio", element2, WRAPPER2, "radio");
      this.element = element2;
      if (this.element.getAttribute("type") !== "radio") {
        this.element.setAttribute("type", "radio");
      }
      if (!this.element.id) {
        this.element.id = getUniqueID("e-" + this.getModuleName());
      }
      if (this.tagName === "EJS-RADIOBUTTON") {
        var formControlName = this.element.getAttribute("formcontrolname");
        if (formControlName) {
          this.setProperties({
            "name": formControlName
          }, true);
          this.element.setAttribute("name", formControlName);
        }
      }
    };
    RadioButton2.prototype.render = function() {
      this.initialize();
      if (!this.disabled) {
        this.wireEvents();
      }
      this.renderComplete();
      this.wrapper = this.getWrapper();
    };
    RadioButton2.prototype.setDisabled = function() {
      this.element.disabled = true;
    };
    RadioButton2.prototype.setText = function(text) {
      var label = this.getLabel();
      var textLabel = label.getElementsByClassName(LABEL2)[0];
      if (textLabel) {
        textLabel.textContent = text;
      } else {
        text = this.enableHtmlSanitizer ? SanitizeHtmlHelper.sanitize(text) : text;
        textLabel = this.createElement("span", {
          className: LABEL2,
          innerHTML: text
        });
        label.appendChild(textLabel);
      }
      if (this.labelPosition === "Before") {
        this.getLabel().classList.add("e-right");
      } else {
        this.getLabel().classList.remove("e-right");
      }
    };
    RadioButton2.prototype.updateHtmlAttribute = function() {
      if (!isNullOrUndefined(this.htmlAttributes)) {
        for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
          var key = _a[_i];
          var wrapper = this.element.parentElement;
          if (ATTRIBUTES.indexOf(key) > -1) {
            if (key === "class") {
              addClass([wrapper], this.htmlAttributes["" + key].replace(/\s+/g, " ").trim().split(" "));
            } else if (key === "title" || key === "style") {
              wrapper.setAttribute(key, this.htmlAttributes["" + key]);
            } else {
              this.element.setAttribute(key, this.htmlAttributes["" + key]);
            }
          } else {
            wrapper.setAttribute(key, this.htmlAttributes["" + key]);
          }
        }
      }
    };
    RadioButton2.prototype.unWireEvents = function() {
      var label = this.wrapper;
      EventHandler.remove(this.element, "change", this.changeHandler);
      EventHandler.remove(this.element, "focus", this.focusHandler);
      EventHandler.remove(this.element, "focusout", this.focusOutHandler);
      EventHandler.remove(this.element, "keyup", this.keyUpHandler);
      var rippleLabel = label.getElementsByTagName("label")[0];
      if (rippleLabel) {
        EventHandler.remove(rippleLabel, "mousedown", this.labelMouseDownHandler);
        EventHandler.remove(rippleLabel, "mouseup", this.labelMouseUpHandler);
        EventHandler.remove(rippleLabel, "mouseleave", this.labelMouseLeaveHandler);
      }
      if (this.formElement) {
        EventHandler.remove(this.formElement, "reset", this.formResetHandler);
      }
    };
    RadioButton2.prototype.wireEvents = function() {
      var label = this.getLabel();
      EventHandler.add(this.element, "change", this.changeHandler, this);
      EventHandler.add(this.element, "keyup", this.keyUpHandler, this);
      EventHandler.add(this.element, "focus", this.focusHandler, this);
      EventHandler.add(this.element, "focusout", this.focusOutHandler, this);
      var rippleLabel = label.getElementsByClassName(LABEL2)[0];
      if (rippleLabel) {
        EventHandler.add(rippleLabel, "mousedown", this.labelMouseDownHandler, this);
        EventHandler.add(rippleLabel, "mouseup", this.labelMouseUpHandler, this);
        EventHandler.add(rippleLabel, "mouseleave", this.labelMouseLeaveHandler, this);
      }
      if (this.formElement) {
        EventHandler.add(this.formElement, "reset", this.formResetHandler, this);
      }
    };
    RadioButton2.prototype.click = function() {
      this.element.click();
    };
    RadioButton2.prototype.focusIn = function() {
      this.element.focus();
    };
    var RadioButton_1;
    __decorate10([Event2()], RadioButton2.prototype, "change", void 0);
    __decorate10([Event2()], RadioButton2.prototype, "created", void 0);
    __decorate10([Property(false)], RadioButton2.prototype, "checked", void 0);
    __decorate10([Property("")], RadioButton2.prototype, "cssClass", void 0);
    __decorate10([Property(false)], RadioButton2.prototype, "disabled", void 0);
    __decorate10([Property("")], RadioButton2.prototype, "label", void 0);
    __decorate10([Property("After")], RadioButton2.prototype, "labelPosition", void 0);
    __decorate10([Property("")], RadioButton2.prototype, "name", void 0);
    __decorate10([Property("")], RadioButton2.prototype, "value", void 0);
    __decorate10([Property(true)], RadioButton2.prototype, "enableHtmlSanitizer", void 0);
    __decorate10([Property({})], RadioButton2.prototype, "htmlAttributes", void 0);
    RadioButton2 = RadioButton_1 = __decorate10([NotifyPropertyChanges], RadioButton2);
    return RadioButton2;
  }(Component)
);

// node_modules/@syncfusion/ej2-buttons/src/switch/switch.js
var __extends11 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DISABLED2 = "e-switch-disabled";
var RIPPLE3 = "e-ripple-container";
var RIPPLE_CHECK = "e-ripple-check";
var RTL3 = "e-rtl";
var WRAPPER3 = "e-switch-wrapper";
var ACTIVE = "e-switch-active";
var ATTRIBUTES2 = ["title", "class", "style", "disabled", "readonly", "name", "value", "aria-label", "id", "role", "tabindex"];
var Switch = (
  /** @class */
  function(_super) {
    __extends11(Switch2, _super);
    function Switch2(options, element2) {
      var _this = _super.call(this, options, element2) || this;
      _this.isFocused = false;
      _this.isDrag = false;
      _this.isWireEvents = false;
      return _this;
    }
    Switch2.prototype.changeState = function(state) {
      var rippleSpan = null;
      var wrapper = this.getWrapper();
      var bar = wrapper.querySelector(".e-switch-inner");
      var handle = wrapper.querySelector(".e-switch-handle");
      if (isRippleEnabled) {
        rippleSpan = wrapper.getElementsByClassName(RIPPLE3)[0];
      }
      if (state) {
        addClass([bar, handle], ACTIVE);
        this.element.checked = true;
        this.checked = true;
        if (rippleSpan) {
          addClass([rippleSpan], [RIPPLE_CHECK]);
        }
      } else {
        removeClass([bar, handle], ACTIVE);
        this.element.checked = false;
        this.checked = false;
        if (rippleSpan) {
          removeClass([rippleSpan], [RIPPLE_CHECK]);
        }
      }
    };
    Switch2.prototype.clickHandler = function(evt) {
      this.isDrag = false;
      this.focusOutHandler();
      this.changeState(!this.checked);
      this.element.focus();
      var changeEventArgs = {
        checked: this.element.checked,
        event: evt
      };
      this.trigger("change", changeEventArgs);
      if (this.isAngular && evt) {
        evt.stopPropagation();
        evt.preventDefault();
      }
    };
    Switch2.prototype.destroy = function() {
      var _this = this;
      _super.prototype.destroy.call(this);
      if (!this.disabled) {
        this.unWireEvents();
      }
      destroy2(this, this.getWrapper(), this.tagName);
      if (this.refreshing) {
        ["e-control", "e-switch", "e-lib"].forEach(function(key) {
          _this.element.classList.add(key);
        });
        setValue("ej2_instances", [this], this.element);
      }
    };
    Switch2.prototype.focusHandler = function() {
      this.isFocused = true;
    };
    Switch2.prototype.focusOutHandler = function() {
      this.getWrapper().classList.remove("e-focus");
    };
    Switch2.prototype.getModuleName = function() {
      return "switch";
    };
    Switch2.prototype.getPersistData = function() {
      return this.addOnPersist(["checked"]);
    };
    Switch2.prototype.getWrapper = function() {
      if (this.element.parentElement) {
        return this.element.parentElement;
      } else {
        return null;
      }
    };
    Switch2.prototype.initialize = function() {
      this.element.setAttribute("role", "switch");
      if (isNullOrUndefined(this.initialSwitchCheckedValue)) {
        this.initialSwitchCheckedValue = this.checked;
      }
      if (this.name) {
        this.element.setAttribute("name", this.name);
      }
      if (this.value) {
        this.element.setAttribute("value", this.value);
      }
      if (this.checked) {
        this.changeState(true);
      }
      if (this.disabled) {
        this.setDisabled();
      }
      if (this.onLabel || this.offLabel) {
        this.setLabel(this.onLabel, this.offLabel);
      }
    };
    Switch2.prototype.initWrapper = function() {
      var wrapper = this.element.parentElement;
      if (!wrapper.classList.contains(WRAPPER3)) {
        wrapper = this.createElement("div", {
          className: WRAPPER3
        });
        this.element.parentNode.insertBefore(wrapper, this.element);
      }
      var switchInner = this.createElement("span", {
        className: "e-switch-inner"
      });
      var onLabel = this.createElement("span", {
        className: "e-switch-on"
      });
      var offLabel = this.createElement("span", {
        className: "e-switch-off"
      });
      var handle = this.createElement("span", {
        className: "e-switch-handle"
      });
      wrapper.appendChild(this.element);
      setHiddenInput(this, wrapper);
      switchInner.appendChild(onLabel);
      switchInner.appendChild(offLabel);
      wrapper.appendChild(switchInner);
      wrapper.appendChild(handle);
      if (isRippleEnabled) {
        var rippleSpan = this.createElement("span", {
          className: RIPPLE3
        });
        handle.appendChild(rippleSpan);
        rippleEffect(rippleSpan, {
          duration: 400,
          isCenterRipple: true
        });
      }
      wrapper.classList.add("e-wrapper");
      if (this.enableRtl) {
        wrapper.classList.add(RTL3);
      }
      if (this.cssClass) {
        addClass([wrapper], this.cssClass.replace(/\s+/g, " ").trim().split(" "));
      }
    };
    Switch2.prototype.onPropertyChanged = function(newProp, oldProp) {
      var wrapper = this.getWrapper();
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "checked":
            this.changeState(newProp.checked);
            break;
          case "disabled":
            if (newProp.disabled) {
              this.setDisabled();
              this.unWireEvents();
              this.isWireEvents = false;
            } else {
              this.element.disabled = false;
              wrapper.classList.remove(DISABLED2);
              wrapper.setAttribute("aria-disabled", "false");
              if (!this.isWireEvents) {
                this.wireEvents();
                this.isWireEvents = true;
              }
            }
            break;
          case "value":
            this.element.setAttribute("value", newProp.value);
            break;
          case "name":
            this.element.setAttribute("name", newProp.name);
            break;
          case "onLabel":
          case "offLabel":
            this.setLabel(newProp.onLabel, newProp.offLabel);
            break;
          case "enableRtl":
            if (newProp.enableRtl) {
              wrapper.classList.add(RTL3);
            } else {
              wrapper.classList.remove(RTL3);
            }
            break;
          case "cssClass":
            if (oldProp.cssClass) {
              removeClass([wrapper], oldProp.cssClass.split(" "));
            }
            if (newProp.cssClass) {
              addClass([wrapper], newProp.cssClass.replace(/\s+/g, " ").trim().split(" "));
            }
            break;
          case "htmlAttributes":
            this.updateHtmlAttribute();
            break;
        }
      }
    };
    Switch2.prototype.preRender = function() {
      var element2 = this.element;
      this.formElement = closest(this.element, "form");
      this.tagName = this.element.tagName;
      preRender(this, "EJS-SWITCH", WRAPPER3, element2, this.getModuleName());
    };
    Switch2.prototype.render = function() {
      this.initWrapper();
      this.initialize();
      if (!this.disabled) {
        this.wireEvents();
      }
      this.renderComplete();
      this.updateHtmlAttribute();
    };
    Switch2.prototype.rippleHandler = function(e) {
      var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE3)[0];
      rippleMouseHandler(e, rippleSpan);
      if (e.type === "mousedown" && e.currentTarget.classList.contains("e-switch-wrapper") && e.which === 1) {
        this.isDrag = true;
        this.isFocused = false;
      }
    };
    Switch2.prototype.mouseLeaveHandler = function(e) {
      var rippleSpan = this.element.parentElement.getElementsByClassName(RIPPLE3)[0];
      if (rippleSpan) {
        var rippleElem = rippleSpan.querySelectorAll(".e-ripple-element");
        for (var i = rippleElem.length - 1; i > 0; i--) {
          rippleSpan.removeChild(rippleSpan.childNodes[i]);
        }
        rippleMouseHandler(e, rippleSpan);
      }
    };
    Switch2.prototype.rippleTouchHandler = function(eventType) {
      var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE3)[0];
      if (rippleSpan) {
        var event_1 = document.createEvent("MouseEvents");
        event_1.initEvent(eventType, false, true);
        rippleSpan.dispatchEvent(event_1);
      }
    };
    Switch2.prototype.setDisabled = function() {
      var wrapper = this.getWrapper();
      this.element.disabled = true;
      wrapper.classList.add(DISABLED2);
      wrapper.setAttribute("aria-disabled", "true");
    };
    Switch2.prototype.setLabel = function(onText, offText) {
      var wrapper = this.getWrapper();
      if (onText) {
        wrapper.querySelector(".e-switch-on").textContent = onText;
      }
      if (offText) {
        wrapper.querySelector(".e-switch-off").textContent = offText;
      }
    };
    Switch2.prototype.updateHtmlAttribute = function() {
      if (!isNullOrUndefined(this.htmlAttributes)) {
        for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
          var key = _a[_i];
          var wrapper = this.getWrapper();
          if (ATTRIBUTES2.indexOf(key) > -1) {
            if (key === "class") {
              addClass([wrapper], this.htmlAttributes["" + key].split(" "));
            } else if (key === "title") {
              wrapper.setAttribute(key, this.htmlAttributes["" + key]);
            } else if (key === "style") {
              wrapper.setAttribute(key, this.htmlAttributes["" + key]);
            } else if (key === "disabled") {
              if (this.htmlAttributes["" + key] === "true") {
                this.setDisabled();
              }
              this.element.setAttribute(key, this.htmlAttributes["" + key]);
            } else {
              this.element.setAttribute(key, this.htmlAttributes["" + key]);
            }
          } else {
            wrapper.setAttribute(key, this.htmlAttributes["" + key]);
          }
        }
      }
    };
    Switch2.prototype.switchFocusHandler = function() {
      if (this.isFocused) {
        this.getWrapper().classList.add("e-focus");
      }
    };
    Switch2.prototype.switchMouseUp = function(e) {
      var aTouchY = 0;
      var yDiff = 0;
      var aTouchX = 0;
      var xDiff = 0;
      var target = e.target;
      if (e.type === "touchmove") {
        e.preventDefault();
        aTouchX = e.changedTouches[0].clientX;
        aTouchY = e.changedTouches[0].clientY;
        xDiff = this.bTouchX - aTouchX;
        yDiff = this.bTouchY - aTouchY;
        if (Math.abs(xDiff) < Math.abs(yDiff)) {
          this.isDrag = false;
          this.rippleTouchHandler("mouseup");
        } else {
          this.isDrag = true;
        }
      }
      if (e.type === "touchstart") {
        this.bTouchX = e.changedTouches[0].clientX;
        this.bTouchY = e.changedTouches[0].clientY;
        this.isDrag = true;
        this.rippleTouchHandler("mousedown");
      }
      if (this.isDrag) {
        if (e.type === "mouseup" && target.className.indexOf("e-switch") < 0 || e.type === "touchend") {
          xDiff = this.bTouchX - e.changedTouches[0].clientX;
          yDiff = this.bTouchY - e.changedTouches[0].clientY;
          if (Math.abs(xDiff) >= Math.abs(yDiff)) {
            this.clickHandler(e);
            this.rippleTouchHandler("mouseup");
            e.preventDefault();
          }
        }
      }
    };
    Switch2.prototype.formResetHandler = function() {
      this.checked = this.initialSwitchCheckedValue;
      this.element.checked = this.initialSwitchCheckedValue;
    };
    Switch2.prototype.toggle = function() {
      this.clickHandler();
    };
    Switch2.prototype.wireEvents = function() {
      var wrapper = this.getWrapper();
      this.delegateMouseUpHandler = this.switchMouseUp.bind(this);
      this.delegateKeyUpHandler = this.switchFocusHandler.bind(this);
      EventHandler.add(wrapper, "click", this.clickHandler, this);
      EventHandler.add(this.element, "focus", this.focusHandler, this);
      EventHandler.add(this.element, "focusout", this.focusOutHandler, this);
      EventHandler.add(this.element, "mouseup", this.delegateMouseUpHandler, this);
      EventHandler.add(this.element, "keyup", this.delegateKeyUpHandler, this);
      EventHandler.add(wrapper, "mousedown mouseup", this.rippleHandler, this);
      EventHandler.add(wrapper, "mouseleave", this.mouseLeaveHandler, this);
      EventHandler.add(wrapper, "touchstart touchmove touchend", this.switchMouseUp, this);
      if (this.formElement) {
        EventHandler.add(this.formElement, "reset", this.formResetHandler, this);
      }
    };
    Switch2.prototype.unWireEvents = function() {
      var wrapper = this.getWrapper();
      EventHandler.remove(wrapper, "click", this.clickHandler);
      EventHandler.remove(this.element, "focus", this.focusHandler);
      EventHandler.remove(this.element, "focusout", this.focusOutHandler);
      EventHandler.remove(this.element, "mouseup", this.delegateMouseUpHandler);
      EventHandler.remove(this.element, "keyup", this.delegateKeyUpHandler);
      EventHandler.remove(wrapper, "mousedown mouseup", this.rippleHandler);
      EventHandler.remove(wrapper, "mouseleave", this.mouseLeaveHandler);
      EventHandler.remove(wrapper, "touchstart touchmove touchend", this.switchMouseUp);
      if (this.formElement) {
        EventHandler.remove(this.formElement, "reset", this.formResetHandler);
      }
    };
    Switch2.prototype.click = function() {
      this.element.click();
    };
    Switch2.prototype.focusIn = function() {
      this.element.focus();
    };
    __decorate11([Event2()], Switch2.prototype, "change", void 0);
    __decorate11([Event2()], Switch2.prototype, "created", void 0);
    __decorate11([Property(false)], Switch2.prototype, "checked", void 0);
    __decorate11([Property("")], Switch2.prototype, "cssClass", void 0);
    __decorate11([Property(false)], Switch2.prototype, "disabled", void 0);
    __decorate11([Property("")], Switch2.prototype, "name", void 0);
    __decorate11([Property("")], Switch2.prototype, "onLabel", void 0);
    __decorate11([Property("")], Switch2.prototype, "offLabel", void 0);
    __decorate11([Property("")], Switch2.prototype, "value", void 0);
    __decorate11([Property({})], Switch2.prototype, "htmlAttributes", void 0);
    Switch2 = __decorate11([NotifyPropertyChanges], Switch2);
    return Switch2;
  }(Component)
);

// node_modules/@syncfusion/ej2-buttons/src/chips/chip-list.js
var __extends12 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = {
  chipSet: "e-chip-set",
  chip: "e-chip",
  avatar: "e-chip-avatar",
  text: "e-chip-text",
  icon: "e-chip-icon",
  delete: "e-chip-delete",
  deleteIcon: "e-dlt-btn",
  multiSelection: "e-multi-selection",
  singleSelection: "e-selection",
  active: "e-active",
  chipWrapper: "e-chip-avatar-wrap",
  iconWrapper: "e-chip-icon-wrap",
  focused: "e-focused",
  disabled: "e-disabled",
  rtl: "e-rtl"
};
var ChipList = (
  /** @class */
  function(_super) {
    __extends12(ChipList2, _super);
    function ChipList2(options, element2) {
      var _this = _super.call(this, options, element2) || this;
      _this.multiSelectedChip = [];
      return _this;
    }
    ChipList2.prototype.preRender = function() {
    };
    ChipList2.prototype.chipType = function() {
      return this.chips && this.chips.length && this.chips.length > 0;
    };
    ChipList2.prototype.render = function() {
      this.type = !isNullOrUndefined(this.chips) && this.chips.length ? "chipset" : this.text || this.element.innerText ? "chip" : "chipset";
      this.setAttributes();
      this.createChip();
      this.setRtl();
      this.select(this.selectedChips);
      this.wireEvent(false);
      this.rippleFunction = rippleEffect(this.element, {
        selector: ".e-chip"
      });
      this.renderComplete();
    };
    ChipList2.prototype.createChip = function() {
      this.innerText = this.element.innerText && this.element.innerText.length !== 0 ? this.element.innerText.trim() : this.element.innerText;
      this.element.innerHTML = "";
      this.chipCreation(this.type === "chip" ? [this.innerText ? this.innerText : this.text] : this.chips);
    };
    ChipList2.prototype.setAttributes = function() {
      if (this.type === "chip") {
        if (this.enabled) {
          this.element.tabIndex = 0;
        }
        this.element.setAttribute("role", "button");
      } else {
        this.element.classList.add(classNames.chipSet);
        this.element.setAttribute("role", "listbox");
        if (this.selection === "Multiple") {
          this.element.classList.add(classNames.multiSelection);
          this.element.setAttribute("aria-multiselectable", "true");
        } else if (this.selection === "Single") {
          this.element.classList.add(classNames.singleSelection);
          this.element.setAttribute("aria-multiselectable", "false");
        } else {
          this.element.setAttribute("aria-multiselectable", "false");
        }
      }
    };
    ChipList2.prototype.setRtl = function() {
      this.element.classList[this.enableRtl ? "add" : "remove"](classNames.rtl);
    };
    ChipList2.prototype.chipCreation = function(data) {
      if (isNullOrUndefined(data)) {
        return;
      }
      var chipListArray = [];
      var attributeArray = [];
      for (var i = 0; i < data.length; i++) {
        var fieldsData = this.getFieldValues(data[i]);
        var attributesValue = fieldsData.htmlAttributes;
        attributeArray.push(attributesValue);
        var chipArray = this.elementCreation(fieldsData);
        var className = (classNames.chip + " " + (fieldsData.enabled ? " " : classNames.disabled) + " " + (fieldsData.avatarIconCss || fieldsData.avatarText ? classNames.chipWrapper : fieldsData.leadingIconCss ? classNames.iconWrapper : " ") + " " + fieldsData.cssClass).split(" ").filter(function(css) {
          return css;
        });
        if (!this.chipType() || this.type === "chip") {
          chipListArray = chipArray;
          addClass([this.element], className);
          this.element.setAttribute("aria-label", fieldsData.text);
          if (fieldsData.value) {
            this.element.setAttribute("data-value", fieldsData.value.toString());
          }
        } else {
          var wrapper = this.createElement("DIV", {
            className: className.join(" "),
            attrs: {
              tabIndex: "0",
              role: "option",
              "aria-label": fieldsData.text,
              "aria-selected": "false"
            }
          });
          if (this.enableDelete) {
            wrapper.setAttribute("aria-keyshortcuts", "Enter to delete");
          }
          if (fieldsData.value) {
            wrapper.setAttribute("data-value", fieldsData.value.toString());
          }
          if (fieldsData.enabled) {
            wrapper.setAttribute("aria-disabled", "false");
          } else {
            wrapper.removeAttribute("tabindex");
            wrapper.setAttribute("aria-disabled", "true");
          }
          if (!isNullOrUndefined(attributeArray[i])) {
            if (attributeArray.length > i && Object.keys(attributeArray[i]).length) {
              var htmlAttr = [];
              htmlAttr = Object.keys(attributeArray[i]);
              for (var j = 0; j < htmlAttr.length; j++) {
                wrapper.setAttribute(htmlAttr[j], attributeArray[i][htmlAttr[j]]);
              }
            }
          }
          append(chipArray, wrapper);
          chipListArray.push(wrapper);
        }
      }
      append(chipListArray, this.element);
    };
    ChipList2.prototype.getFieldValues = function(data) {
      var chipEnabled = !(this.enabled.toString() === "false");
      var fields = {
        text: typeof data === "object" ? data.text ? data.text.toString() : this.text.toString() : !this.chipType() ? this.innerText ? this.innerText : this.text.toString() : data.toString(),
        cssClass: typeof data === "object" ? data.cssClass ? data.cssClass.toString() : this.cssClass.toString() : this.cssClass.toString(),
        leadingIconCss: typeof data === "object" ? data.leadingIconCss ? data.leadingIconCss.toString() : this.leadingIconCss.toString() : this.leadingIconCss.toString(),
        avatarIconCss: typeof data === "object" ? data.avatarIconCss ? data.avatarIconCss.toString() : this.avatarIconCss.toString() : this.avatarIconCss.toString(),
        avatarText: typeof data === "object" ? data.avatarText ? data.avatarText.toString() : this.avatarText.toString() : this.avatarText.toString(),
        trailingIconCss: typeof data === "object" ? data.trailingIconCss ? data.trailingIconCss.toString() : this.trailingIconCss.toString() : this.trailingIconCss.toString(),
        enabled: typeof data === "object" ? data.enabled !== void 0 ? data.enabled.toString() === "false" ? false : true : chipEnabled : chipEnabled,
        value: typeof data === "object" ? data.value ? data.value.toString() : null : null,
        leadingIconUrl: typeof data === "object" ? data.leadingIconUrl ? data.leadingIconUrl.toString() : this.leadingIconUrl : this.leadingIconUrl,
        trailingIconUrl: typeof data === "object" ? data.trailingIconUrl ? data.trailingIconUrl.toString() : this.trailingIconUrl : this.trailingIconUrl,
        htmlAttributes: typeof data === "object" ? data.htmlAttributes ? data.htmlAttributes : this.htmlAttributes : this.htmlAttributes
      };
      return fields;
    };
    ChipList2.prototype.elementCreation = function(fields) {
      var chipArray = [];
      if (fields.avatarText || fields.avatarIconCss) {
        var className = (classNames.avatar + " " + fields.avatarIconCss).trim();
        var chipAvatarElement = this.createElement("span", {
          className
        });
        chipAvatarElement.innerText = fields.avatarText;
        chipArray.push(chipAvatarElement);
      } else if (fields.leadingIconCss) {
        var className = (classNames.icon + " " + fields.leadingIconCss).trim();
        var chipIconElement = this.createElement("span", {
          className
        });
        chipArray.push(chipIconElement);
      } else if (fields.leadingIconUrl) {
        var className = (classNames.avatar + " image-url").trim();
        var chipIconElement = this.createElement("span", {
          className
        });
        chipIconElement.style.backgroundImage = "url(" + fields.leadingIconUrl + ")";
        chipArray.push(chipIconElement);
      }
      var chipTextElement = this.createElement("span", {
        className: classNames.text
      });
      chipTextElement.innerText = fields.text;
      chipArray.push(chipTextElement);
      if (fields.trailingIconCss || this.chipType() && this.enableDelete) {
        var className = (classNames.delete + " " + (fields.trailingIconCss ? fields.trailingIconCss : classNames.deleteIcon)).trim();
        var chipdeleteElement = this.createElement("span", {
          className
        });
        chipArray.push(chipdeleteElement);
      } else if (fields.trailingIconUrl) {
        var className = "trailing-icon-url".trim();
        var chipIconsElement = this.createElement("span", {
          className
        });
        chipIconsElement.style.backgroundImage = "url(" + fields.trailingIconUrl + ")";
        chipArray.push(chipIconsElement);
      }
      return chipArray;
    };
    ChipList2.prototype.find = function(fields) {
      var chipData = {
        text: "",
        index: -1,
        element: this.element,
        data: ""
      };
      var chipElement = fields instanceof HTMLElement ? fields : this.element.querySelectorAll("." + classNames.chip)[fields];
      if (chipElement && this.chipType()) {
        chipData.index = Array.prototype.slice.call(this.element.querySelectorAll("." + classNames.chip)).indexOf(chipElement);
        var chip = this.chips[chipData.index];
        if (typeof chip === "object" && chip !== null) {
          var chipModel = chip;
          if (chipModel.text !== void 0) {
            chipData.text = chipModel.text.toString();
          }
        } else if (chip !== void 0) {
          chipData.text = chip.toString();
        }
        chipData.data = chip;
        chipData.element = chipElement;
      }
      return chipData;
    };
    ChipList2.prototype.add = function(chipsData) {
      var _a;
      if (this.type !== "chip") {
        var fieldData = chipsData instanceof Array ? chipsData : [chipsData];
        this.chips = (_a = [].slice.call(this.chips)).concat.apply(_a, fieldData);
        this.chipCreation(fieldData);
      }
    };
    ChipList2.prototype.select = function(fields, selectionType) {
      this.onSelect(fields, false, selectionType);
    };
    ChipList2.prototype.multiSelection = function(newProp) {
      var items = this.element.querySelectorAll(".e-chip");
      for (var j = 0; j < newProp.length; j++) {
        if (typeof newProp[j] === "string") {
          for (var k = 0; k < items.length; k++) {
            if (newProp[j] !== k) {
              if (newProp[j] === items[k].attributes[5].value) {
                this.multiSelectedChip.push(k);
                break;
              }
            }
          }
        } else {
          this.multiSelectedChip.push(newProp[j]);
        }
      }
    };
    ChipList2.prototype.onSelect = function(fields, callFromProperty, selectionType) {
      var index;
      var chipNodes;
      var chipValue = null;
      if (this.chipType() && this.selection !== "None") {
        if (callFromProperty) {
          var chipElements = this.element.querySelectorAll("." + classNames.chip);
          for (var i = 0; i < chipElements.length; i++) {
            chipElements[i].setAttribute("aria-selected", "false");
            chipElements[i].classList.remove(classNames.active);
          }
        }
        var fieldData = fields instanceof Array ? fields : [fields];
        for (var i = 0; i < fieldData.length; i++) {
          var chipElement = fieldData[i] instanceof HTMLElement ? fieldData[i] : this.element.querySelectorAll("." + classNames.chip)[fieldData[i]];
          if (selectionType !== "index") {
            for (var j = 0; j < this.chips.length; j++) {
              chipNodes = this.element.querySelectorAll("." + classNames.chip)[j];
              var fieldsData = this.getFieldValues(this.chips[j]);
              if (selectionType === "value") {
                if (fieldsData.value !== null) {
                  chipValue = chipNodes.dataset.value;
                }
              } else if (selectionType === "text") {
                chipValue = chipNodes.innerText;
              }
              if (chipValue === fieldData[i].toString()) {
                index = j;
                chipElement = this.element.querySelectorAll("." + classNames.chip)[index];
              }
            }
          }
          if (chipElement instanceof HTMLElement) {
            this.selectionHandler(chipElement);
          }
        }
      }
    };
    ChipList2.prototype.remove = function(fields) {
      var _this = this;
      if (this.chipType()) {
        var fieldData = fields instanceof Array ? fields : [fields];
        var chipElements_1 = [];
        var chipCollection_1 = this.element.querySelectorAll("." + classNames.chip);
        fieldData.forEach(function(data) {
          var chipElement = data instanceof HTMLElement ? data : chipCollection_1[data];
          if (chipElement instanceof HTMLElement) {
            chipElements_1.push(chipElement);
          }
        });
        chipElements_1.forEach(function(element2) {
          var chips = _this.element.querySelectorAll("." + classNames.chip);
          var index = Array.prototype.slice.call(chips).indexOf(element2);
          _this.deleteHandler(element2, index);
        });
      }
    };
    ChipList2.prototype.getSelectedChips = function() {
      var selectedChips;
      if (this.chipType() && this.selection !== "None") {
        var selectedItems = {
          texts: [],
          Indexes: [],
          data: [],
          elements: []
        };
        var items = this.element.querySelectorAll("." + classNames.active);
        for (var i = 0; i < items.length; i++) {
          var chip = items[i];
          selectedItems.elements.push(chip);
          var index = Array.prototype.slice.call(this.element.querySelectorAll("." + classNames.chip)).indexOf(chip);
          selectedItems.Indexes.push(index);
          selectedItems.data.push(this.chips[index]);
          var text = typeof this.chips[index] === "object" ? this.chips[index].text ? this.chips[index].text : null : this.chips[index].toString();
          selectedItems.texts.push(text);
        }
        var selectedItem = {
          text: selectedItems.texts[0],
          index: selectedItems.Indexes[0],
          data: selectedItems.data[0],
          element: selectedItems.elements[0]
        };
        selectedChips = !isNullOrUndefined(selectedItem.index) ? this.selection === "Multiple" ? selectedItems : selectedItem : void 0;
      }
      return selectedChips;
    };
    ChipList2.prototype.wireEvent = function(unWireEvent) {
      if (!unWireEvent) {
        EventHandler.add(this.element, "click", this.clickHandler, this);
        EventHandler.add(this.element, "focusout", this.focusOutHandler, this);
        EventHandler.add(this.element, "keydown", this.keyHandler, this);
        EventHandler.add(this.element, "keyup", this.keyHandler, this);
      } else {
        EventHandler.remove(this.element, "click", this.clickHandler);
        EventHandler.remove(this.element, "focusout", this.focusOutHandler);
        EventHandler.remove(this.element, "keydown", this.keyHandler);
        EventHandler.remove(this.element, "keyup", this.keyHandler);
      }
    };
    ChipList2.prototype.keyHandler = function(e) {
      if (e.target.classList.contains(classNames.chip)) {
        if (e.type === "keydown") {
          if (e.keyCode === 13 || e.keyCode === 32) {
            this.clickHandler(e);
          } else if ((e.keyCode === 46 || e.keyCode === 8) && this.enableDelete) {
            this.clickHandler(e, true);
          }
        } else if (e.keyCode === 9) {
          this.focusInHandler(e.target);
        }
      }
    };
    ChipList2.prototype.focusInHandler = function(chipWrapper) {
      if (!chipWrapper.classList.contains(classNames.focused)) {
        chipWrapper.classList.add(classNames.focused);
      }
    };
    ChipList2.prototype.focusOutHandler = function(e) {
      var chipWrapper = closest(e.target, "." + classNames.chip);
      var focusedElement = !this.chipType() ? this.element.classList.contains(classNames.focused) ? this.element : null : this.element.querySelector("." + classNames.focused);
      if (chipWrapper && focusedElement) {
        focusedElement.classList.remove(classNames.focused);
      }
    };
    ChipList2.prototype.clickHandler = function(e, del) {
      var _this = this;
      if (del === void 0) {
        del = false;
      }
      var chipWrapper = closest(e.target, "." + classNames.chip);
      if (chipWrapper) {
        var chipDataArgs = void 0;
        if (this.chipType()) {
          chipDataArgs = this.find(chipWrapper);
        } else {
          var index = Array.prototype.slice.call(this.element.querySelectorAll("." + classNames.chip)).indexOf(chipWrapper);
          chipDataArgs = {
            text: this.innerText ? this.innerText : this.text,
            element: chipWrapper,
            data: this.text,
            index
          };
        }
        chipDataArgs.event = e;
        chipDataArgs.cancel = false;
        this.trigger("beforeClick", chipDataArgs, function(observedArgs) {
          if (!observedArgs.cancel) {
            _this.clickEventHandler(observedArgs.element, e, del);
          }
        });
      }
    };
    ChipList2.prototype.clickEventHandler = function(chipWrapper, e, del) {
      var _this = this;
      if (this.chipType()) {
        var chipData_1 = this.find(chipWrapper);
        chipData_1.event = e;
        var deleteElement = e.target.classList.contains(classNames.deleteIcon) ? e.target : del ? chipWrapper.querySelector("." + classNames.deleteIcon) : void 0;
        if (deleteElement && this.enableDelete) {
          chipData_1.cancel = false;
          var deletedItemArgs = chipData_1;
          this.trigger("delete", deletedItemArgs, function(observedArgs) {
            if (!observedArgs.cancel) {
              _this.deleteHandler(observedArgs.element, observedArgs.index);
              _this.selectionHandler(chipWrapper);
              chipData_1.selected = observedArgs.element.classList.contains(classNames.active);
              var selectedItemArgs2 = chipData_1;
              _this.trigger("click", selectedItemArgs2);
              var chipElement = _this.element.querySelectorAll("." + classNames.chip)[observedArgs.index];
              if (chipElement) {
                chipElement.focus();
                _this.focusInHandler(chipElement);
              }
            }
          });
        } else if (this.selection !== "None") {
          this.selectionHandler(chipWrapper);
          chipData_1.selected = chipWrapper.classList.contains(classNames.active);
          var selectedItemArgs = chipData_1;
          this.trigger("click", selectedItemArgs);
        } else {
          this.focusInHandler(chipWrapper);
          var clickedItemArgs = chipData_1;
          this.trigger("click", clickedItemArgs);
        }
      } else {
        this.focusInHandler(chipWrapper);
        var clickedItemArgs = {
          text: this.innerText ? this.innerText : this.text,
          element: chipWrapper,
          data: this.text,
          event: e
        };
        this.trigger("click", clickedItemArgs);
      }
    };
    ChipList2.prototype.selectionHandler = function(chipWrapper) {
      if (this.selection === "Single") {
        var activeElement = this.element.querySelector("." + classNames.active);
        if (activeElement && activeElement !== chipWrapper) {
          activeElement.classList.remove(classNames.active);
          activeElement.setAttribute("aria-selected", "false");
        }
        this.setProperties({
          selectedChips: null
        }, true);
      } else {
        this.setProperties({
          selectedChips: []
        }, true);
      }
      if (chipWrapper.classList.contains(classNames.active)) {
        chipWrapper.classList.remove(classNames.active);
        chipWrapper.setAttribute("aria-selected", "false");
      } else {
        chipWrapper.classList.add(classNames.active);
        chipWrapper.setAttribute("aria-selected", "true");
      }
      this.updateSelectedChips();
    };
    ChipList2.prototype.updateSelectedChips = function() {
      var chipListEle = this.element.querySelectorAll(".e-chip");
      var chipCollIndex = [];
      var chipCollValue = [];
      var chip = null;
      var value = null;
      for (var i = 0; i < chipListEle.length; i++) {
        var selectedEle = this.element.querySelectorAll(".e-chip")[i];
        if (selectedEle.getAttribute("aria-selected") === "true") {
          value = selectedEle.getAttribute("data-value");
          if (this.selection === "Single" && selectedEle.classList.contains("e-active")) {
            chip = value ? value : i;
            break;
          } else {
            chip = value ? chipCollValue.push(value) : chipCollIndex.push(i);
          }
        }
      }
      this.setProperties({
        selectedChips: this.selection === "Single" ? chip : value ? chipCollValue : chipCollIndex
      }, true);
    };
    ChipList2.prototype.deleteHandler = function(chipWrapper, index) {
      var deletedChipData = this.find(chipWrapper);
      this.chips.splice(index, 1);
      this.setProperties({
        chips: this.chips
      }, true);
      detach(chipWrapper);
      this.trigger("deleted", deletedChipData);
    };
    ChipList2.prototype.destroy = function() {
      removeClass([this.element], [classNames.chipSet, classNames.chip, classNames.rtl, classNames.multiSelection, classNames.singleSelection, classNames.disabled, classNames.chipWrapper, classNames.iconWrapper, classNames.active, classNames.focused].concat(this.cssClass ? this.cssClass.toString().split(" ").filter(function(css) {
        return css;
      }) : []));
      this.removeMultipleAttributes(["tabindex", "role", "aria-label", "aria-multiselectable"], this.element);
      this.wireEvent(true);
      this.rippleFunction();
      _super.prototype.destroy.call(this);
      this.element.innerHTML = "";
      this.element.innerText = this.innerText;
    };
    ChipList2.prototype.removeMultipleAttributes = function(attributes2, element2) {
      attributes2.forEach(function(attr) {
        element2.removeAttribute(attr);
      });
    };
    ChipList2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    ChipList2.prototype.getModuleName = function() {
      return "chip-list";
    };
    ChipList2.prototype.onPropertyChanged = function(newProp, oldProp) {
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "chips":
          case "text":
          case "avatarText":
          case "avatarIconCss":
          case "leadingIconCss":
          case "trailingIconCss":
          case "selection":
          case "enableDelete":
          case "enabled":
            this.refresh();
            break;
          case "cssClass":
            if (!this.chipType()) {
              removeClass([this.element], oldProp.cssClass.toString().split(" ").filter(function(css) {
                return css;
              }));
              addClass([this.element], newProp.cssClass.toString().split(" ").filter(function(css) {
                return css;
              }));
            } else {
              this.refresh();
            }
            break;
          case "selectedChips":
            removeClass(this.element.querySelectorAll(".e-active"), "e-active");
            if (this.selection === "Multiple") {
              this.multiSelectedChip = [];
              this.multiSelection(newProp.selectedChips);
              this.onSelect(this.multiSelectedChip, true);
              this.updateSelectedChips();
            } else {
              this.onSelect(newProp.selectedChips, true);
            }
            break;
          case "enableRtl":
            this.setRtl();
            break;
        }
      }
    };
    __decorate12([Property([])], ChipList2.prototype, "chips", void 0);
    __decorate12([Property("")], ChipList2.prototype, "text", void 0);
    __decorate12([Property("")], ChipList2.prototype, "avatarText", void 0);
    __decorate12([Property("")], ChipList2.prototype, "avatarIconCss", void 0);
    __decorate12([Property("")], ChipList2.prototype, "htmlAttributes", void 0);
    __decorate12([Property("")], ChipList2.prototype, "leadingIconCss", void 0);
    __decorate12([Property("")], ChipList2.prototype, "trailingIconCss", void 0);
    __decorate12([Property("")], ChipList2.prototype, "leadingIconUrl", void 0);
    __decorate12([Property("")], ChipList2.prototype, "trailingIconUrl", void 0);
    __decorate12([Property("")], ChipList2.prototype, "cssClass", void 0);
    __decorate12([Property(true)], ChipList2.prototype, "enabled", void 0);
    __decorate12([Property([])], ChipList2.prototype, "selectedChips", void 0);
    __decorate12([Property("None")], ChipList2.prototype, "selection", void 0);
    __decorate12([Property(false)], ChipList2.prototype, "enableDelete", void 0);
    __decorate12([Event2()], ChipList2.prototype, "created", void 0);
    __decorate12([Event2()], ChipList2.prototype, "click", void 0);
    __decorate12([Event2()], ChipList2.prototype, "beforeClick", void 0);
    __decorate12([Event2()], ChipList2.prototype, "delete", void 0);
    __decorate12([Event2()], ChipList2.prototype, "deleted", void 0);
    ChipList2 = __decorate12([NotifyPropertyChanges], ChipList2);
    return ChipList2;
  }(Component)
);

// node_modules/@syncfusion/ej2-buttons/src/floating-action-button/floating-action-button.js
var __extends13 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FABHIDDEN = "e-fab-hidden";
var FIXEDFAB = "e-fab-fixed";
var FABTOP = "e-fab-top";
var FABBOTTOM = "e-fab-bottom";
var FABRIGHT = "e-fab-right";
var FABLEFT = "e-fab-left";
var FABMIDDLE = "e-fab-middle";
var FABCENTER = "e-fab-center";
var FabPosition;
(function(FabPosition2) {
  FabPosition2["TopLeft"] = "TopLeft";
  FabPosition2["TopCenter"] = "TopCenter";
  FabPosition2["TopRight"] = "TopRight";
  FabPosition2["MiddleLeft"] = "MiddleLeft";
  FabPosition2["MiddleCenter"] = "MiddleCenter";
  FabPosition2["MiddleRight"] = "MiddleRight";
  FabPosition2["BottomLeft"] = "BottomLeft";
  FabPosition2["BottomCenter"] = "BottomCenter";
  FabPosition2["BottomRight"] = "BottomRight";
})(FabPosition || (FabPosition = {}));
var Fab = (
  /** @class */
  function(_super) {
    __extends13(Fab2, _super);
    function Fab2(options, element2) {
      return _super.call(this, options, element2) || this;
    }
    Fab2.prototype.render = function() {
      _super.prototype.render.call(this);
      this.initializeFab();
    };
    Fab2.prototype.preRender = function() {
      _super.prototype.preRender.call(this);
      if (!this.element.id) {
        this.element.id = getUniqueID("e-" + this.getModuleName());
      }
    };
    Fab2.prototype.getPersistData = function() {
      _super.prototype.getPersistData.call(this);
      return this.addOnPersist([]);
    };
    Fab2.prototype.getModuleName = function() {
      return "fab";
    };
    Fab2.prototype.initializeFab = function() {
      this.element.classList.add("e-" + _super.prototype.getModuleName.call(this));
      this.checkTarget();
      this.setPosition();
      this.setVisibility();
    };
    Fab2.prototype.checkTarget = function() {
      this.isFixed = true;
      if (this.target) {
        this.targetEle = typeof this.target === "string" ? select(this.target) : this.target;
        if (this.targetEle) {
          this.isFixed = false;
          this.targetEle.appendChild(this.element);
        }
      }
      this.element.classList[this.isFixed ? "add" : "remove"](FIXEDFAB);
    };
    Fab2.prototype.setVisibility = function() {
      this.element.classList[this.visible ? "remove" : "add"](FABHIDDEN);
    };
    Fab2.prototype.setPosition = function() {
      this.element.classList.add(["BottomLeft", "BottomCenter", "BottomRight"].indexOf(this.position) !== -1 ? FABBOTTOM : FABTOP);
      var isRight = ["TopRight", "MiddleRight", "BottomRight"].indexOf(this.position) !== -1;
      this.element.classList.add(!(this.enableRtl || isRight) || this.enableRtl && isRight ? FABLEFT : FABRIGHT);
      if (["MiddleLeft", "MiddleRight", "MiddleCenter"].indexOf(this.position) !== -1) {
        this.element.classList.add(FABMIDDLE);
      }
      if (["TopCenter", "BottomCenter", "MiddleCenter"].indexOf(this.position) !== -1) {
        this.element.classList.add(FABCENTER);
      }
    };
    Fab2.prototype.clearPosition = function() {
      this.element.classList.remove(FABTOP, FABBOTTOM, FABMIDDLE);
      this.element.classList.remove(FABRIGHT, FABLEFT, FABCENTER);
    };
    Fab2.prototype.refreshPosition = function() {
    };
    Fab2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      this.element.classList.remove("e-" + _super.prototype.getModuleName.call(this), FIXEDFAB);
      this.clearPosition();
    };
    Fab2.prototype.onPropertyChanged = function(newProp, oldProp) {
      _super.prototype.onPropertyChanged.call(this, newProp, oldProp);
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "enableRtl":
          case "position":
            this.clearPosition();
            this.setPosition();
            break;
          case "visible":
            this.setVisibility();
            break;
          case "target":
            this.checkTarget();
            this.setPosition();
            break;
          case "currencyCode":
            this.refresh();
            break;
        }
      }
    };
    __decorate13([Property("BottomRight")], Fab2.prototype, "position", void 0);
    __decorate13([Property("")], Fab2.prototype, "target", void 0);
    __decorate13([Property(true)], Fab2.prototype, "visible", void 0);
    __decorate13([Property(true)], Fab2.prototype, "isPrimary", void 0);
    Fab2 = __decorate13([NotifyPropertyChanges], Fab2);
    return Fab2;
  }(Button)
);

// node_modules/@syncfusion/ej2-buttons/src/speed-dial/speed-dial.js
var __extends14 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var topPosition = ["TopLeft", "TopCenter", "TopRight"];
var bottomPosition = ["BottomLeft", "BottomCenter", "BottomRight"];
var leftPosition = ["TopLeft", "MiddleLeft", "BottomLeft"];
var rightPosition = ["TopRight", "MiddleRight", "BottomRight"];
var SDHIDDEN = "e-speeddial-hidden";
var FIXEDSD = "e-speeddial-fixed";
var SPEEDDIAL = "e-speeddial";
var RTLCLASS = "e-rtl";
var HOVERSD = "e-speeddial-hover-open";
var RADIALSD = "e-speeddial-radial";
var LINEARSD = "e-speeddial-linear";
var TEMPLATESD = "e-speeddial-template";
var SDTEMPLATECONTAINER = "e-speeddial-template-container";
var SDOVERLAY = "e-speeddial-overlay";
var SDPOPUP = "e-speeddial-popup";
var SDUL = "e-speeddial-ul";
var SDLI = "e-speeddial-li";
var SDACTIVELI = "e-speeddial-li-active";
var SDLIICON = "e-speeddial-li-icon";
var SDLITEXT = "e-speeddial-li-text";
var SDLITEXTONLY = "e-speeddial-text-li";
var DISABLED3 = "e-disabled";
var SDVERTICALBOTTOM = "e-speeddial-vert-bottom";
var SDVERTICALRIGHT = "e-speeddial-vert-right";
var SDHORIZONTALTOP = "e-speeddial-horz-top";
var SDHORIZONTALLEFT = "e-speeddial-horz-left";
var SDHORIZONTALRIGHT = "e-speeddial-horz-right";
var SDOVERFLOW = "e-speeddial-overflow";
var SDVERTOVERFLOW = "e-speeddial-vert-overflow";
var SDHORZOVERFLOW = "e-speeddial-horz-overflow";
var SDTOP = "e-speeddial-top";
var SDBOTTOM = "e-speeddial-bottom";
var SDRIGHT = "e-speeddial-right";
var SDLEFT = "e-speeddial-left";
var SDMIDDLE = "e-speeddial-middle";
var SDCENTER = "e-speeddial-center";
var SDTOPLEFT = "e-speeddial-top-left";
var SDBOTTOMRIGHT = "e-speeddial-bottom-right";
var SDTOPRIGHT = "e-speeddial-top-right";
var SDBOTTOMLEFT = "e-speeddial-bottom-left";
var SDVERTDIST = "--speeddialVertDist";
var SDHORZDIST = "--speeddialHorzDist";
var SDRADICALANGLE = "--speeddialRadialAngle";
var SDRADICALOFFSET = "--speeddialRadialOffset";
var SDRADICALMINHEIGHT = "--speeddialRadialMinHeight";
var SDRADICALMINWIDTH = "--speeddialRadialMinWidth";
var SDOVERFLOWLIMIT = "--speeddialOverflowLimit";
var SDRADICALHORZDIST = "--speeddialRadialHorzDist";
var SpeedDialMode;
(function(SpeedDialMode2) {
  SpeedDialMode2["Linear"] = "Linear";
  SpeedDialMode2["Radial"] = "Radial";
})(SpeedDialMode || (SpeedDialMode = {}));
var LinearDirection;
(function(LinearDirection2) {
  LinearDirection2["Up"] = "Up";
  LinearDirection2["Down"] = "Down";
  LinearDirection2["Right"] = "Right";
  LinearDirection2["Left"] = "Left";
  LinearDirection2["Auto"] = "Auto";
})(LinearDirection || (LinearDirection = {}));
var RadialDirection;
(function(RadialDirection2) {
  RadialDirection2["Clockwise"] = "Clockwise";
  RadialDirection2["AntiClockwise"] = "AntiClockwise";
  RadialDirection2["Auto"] = "Auto";
})(RadialDirection || (RadialDirection = {}));
var SpeedDialAnimationEffect;
(function(SpeedDialAnimationEffect2) {
  SpeedDialAnimationEffect2["Fade"] = "Fade";
  SpeedDialAnimationEffect2["FadeZoom"] = "FadeZoom";
  SpeedDialAnimationEffect2["FlipLeftDown"] = "FlipLeftDown";
  SpeedDialAnimationEffect2["FlipLeftUp"] = "FlipLeftUp";
  SpeedDialAnimationEffect2["FlipRightDown"] = "FlipRightDown";
  SpeedDialAnimationEffect2["FlipRightUp"] = "FlipRightUp";
  SpeedDialAnimationEffect2["FlipXDown"] = "FlipXDown";
  SpeedDialAnimationEffect2["FlipXUp"] = "FlipXUp";
  SpeedDialAnimationEffect2["FlipYLeft"] = "FlipYLeft";
  SpeedDialAnimationEffect2["FlipYRight"] = "FlipYRight";
  SpeedDialAnimationEffect2["SlideBottom"] = "SlideBottom";
  SpeedDialAnimationEffect2["SlideLeft"] = "SlideLeft";
  SpeedDialAnimationEffect2["SlideRight"] = "SlideRight";
  SpeedDialAnimationEffect2["SlideTop"] = "SlideTop";
  SpeedDialAnimationEffect2["Zoom"] = "Zoom";
  SpeedDialAnimationEffect2["None"] = "None";
})(SpeedDialAnimationEffect || (SpeedDialAnimationEffect = {}));
var SpeedDialAnimationSettings = (
  /** @class */
  function(_super) {
    __extends14(SpeedDialAnimationSettings2, _super);
    function SpeedDialAnimationSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate14([Property("Fade")], SpeedDialAnimationSettings2.prototype, "effect", void 0);
    __decorate14([Property(400)], SpeedDialAnimationSettings2.prototype, "duration", void 0);
    __decorate14([Property(0)], SpeedDialAnimationSettings2.prototype, "delay", void 0);
    return SpeedDialAnimationSettings2;
  }(ChildProperty)
);
var RadialSettings = (
  /** @class */
  function(_super) {
    __extends14(RadialSettings2, _super);
    function RadialSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate14([Property("Auto")], RadialSettings2.prototype, "direction", void 0);
    __decorate14([Property(-1)], RadialSettings2.prototype, "endAngle", void 0);
    __decorate14([Property("100px")], RadialSettings2.prototype, "offset", void 0);
    __decorate14([Property(-1)], RadialSettings2.prototype, "startAngle", void 0);
    return RadialSettings2;
  }(ChildProperty)
);
var SpeedDialItem = (
  /** @class */
  function(_super) {
    __extends14(SpeedDialItem2, _super);
    function SpeedDialItem2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate14([Property("")], SpeedDialItem2.prototype, "iconCss", void 0);
    __decorate14([Property("")], SpeedDialItem2.prototype, "id", void 0);
    __decorate14([Property("")], SpeedDialItem2.prototype, "text", void 0);
    __decorate14([Property("")], SpeedDialItem2.prototype, "title", void 0);
    __decorate14([Property(false)], SpeedDialItem2.prototype, "disabled", void 0);
    return SpeedDialItem2;
  }(ChildProperty)
);
var SpeedDial = (
  /** @class */
  function(_super) {
    __extends14(SpeedDial2, _super);
    function SpeedDial2(options, element2) {
      var _this = _super.call(this, options, element2) || this;
      _this.isMenuOpen = false;
      _this.isClock = true;
      _this.isVertical = true;
      _this.isControl = false;
      _this.focusedIndex = -1;
      return _this;
    }
    SpeedDial2.prototype.render = function() {
      this.initialize();
    };
    SpeedDial2.prototype.preRender = function() {
      this.keyConfigs = {
        space: "space",
        enter: "enter",
        end: "end",
        home: "home",
        moveDown: "downarrow",
        moveLeft: "leftarrow",
        moveRight: "rightarrow",
        moveUp: "uparrow",
        esc: "escape"
      };
      this.validateDirection();
    };
    SpeedDial2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    SpeedDial2.prototype.getModuleName = function() {
      return "speed-dial";
    };
    SpeedDial2.prototype.initialize = function() {
      if (!this.element.id) {
        this.element.id = getUniqueID("e-" + this.getModuleName());
      }
      this.fab = new Fab({
        content: this.content,
        cssClass: this.cssClass ? SPEEDDIAL + " " + this.cssClass : SPEEDDIAL,
        disabled: this.disabled,
        enablePersistence: this.enablePersistence,
        enableRtl: this.enableRtl,
        iconCss: this.openIconCss,
        iconPosition: this.iconPosition,
        position: this.position,
        target: this.target,
        visible: this.visible,
        isPrimary: this.isPrimary
      });
      this.fab.appendTo(this.element);
      if (this.items.length > 0 || this.popupTemplate) {
        this.createPopup();
      }
      this.wireEvents();
    };
    SpeedDial2.prototype.wireEvents = function() {
      EventHandler.add(window, "resize", this.resizeHandler, this);
      EventHandler.add(document.body, "click", this.bodyClickHandler, this);
      if (this.opensOnHover) {
        this.wireFabHover();
      } else {
        this.wireFabClick();
      }
    };
    SpeedDial2.prototype.wirePopupEvents = function() {
      this.removeRippleEffect = rippleEffect(this.popupEle, {
        selector: "." + SDLIICON
      });
      this.keyboardModule = new KeyboardEvents(this.element, {
        keyAction: this.keyActionHandler.bind(this),
        keyConfigs: this.keyConfigs,
        eventName: "keydown"
      });
      this.popupKeyboardModule = new KeyboardEvents(this.popupEle, {
        keyAction: this.popupKeyActionHandler.bind(this),
        keyConfigs: {
          esc: "escape"
        },
        eventName: "keydown"
      });
      this.documentKeyboardModule = new KeyboardEvents(document.body, {
        keyAction: this.popupKeyActionHandler.bind(this),
        keyConfigs: {
          enter: "enter",
          space: "space"
        },
        eventName: "keydown"
      });
      EventHandler.add(this.popupEle, "click", this.popupClick, this);
      EventHandler.add(this.popupEle, "mouseleave", this.popupMouseLeaveHandle, this);
    };
    SpeedDial2.prototype.wireFabClick = function() {
      EventHandler.add(this.fab.element, "click", this.fabClick, this);
    };
    SpeedDial2.prototype.wireFabHover = function() {
      this.popupEle.classList.add(HOVERSD);
      EventHandler.add(this.fab.element, "mouseover", this.mouseOverHandle, this);
      EventHandler.add(this.element, "mouseleave", this.mouseLeaveHandle, this);
    };
    SpeedDial2.prototype.createPopup = function() {
      var className = SDPOPUP + " " + SDHIDDEN;
      className = this.enableRtl ? className + " " + RTLCLASS : className;
      className = this.cssClass ? className + " " + this.cssClass : className;
      this.popupEle = this.createElement("div", {
        className,
        id: this.element.id + "_popup"
      });
      this.element.insertAdjacentElement("afterend", this.popupEle);
      attributes(this.element, {
        "aria-expanded": "false",
        "aria-haspopup": "true",
        "aria-controls": this.popupEle.id
      });
      this.setPopupContent();
      if (this.modal) {
        this.createOverlay();
      }
      this.checkTarget();
      this.setPositionProps();
      this.wirePopupEvents();
    };
    SpeedDial2.prototype.createOverlay = function() {
      this.overlayEle = this.createElement("div", {
        id: this.element.id + "_overlay",
        className: (SDOVERLAY + (this.isMenuOpen ? "" : " " + SDHIDDEN) + " " + this.cssClass).trim()
      });
      this.element.insertAdjacentElement("beforebegin", this.overlayEle);
    };
    SpeedDial2.prototype.popupClick = function() {
      this.isControl = true;
    };
    SpeedDial2.prototype.bodyClickHandler = function(e) {
      if (this.isControl) {
        this.isControl = false;
        return;
      }
      if (this.isMenuOpen) {
        this.hidePopupEle(e);
      }
    };
    SpeedDial2.prototype.fabClick = function(e) {
      this.isControl = true;
      if (this.isMenuOpen) {
        this.hidePopupEle(e);
      } else {
        this.showPopupEle(e);
      }
    };
    SpeedDial2.prototype.setPopupContent = function() {
      this.popupEle.classList.remove(RADIALSD, LINEARSD, TEMPLATESD);
      if (!this.popupTemplate) {
        this.popupEle.classList.add(this.mode === "Radial" ? RADIALSD : LINEARSD);
        this.createUl();
        this.createItems();
      } else {
        this.popupEle.classList.add(TEMPLATESD);
        this.appendTemplate();
      }
      this.renderReactTemplates();
    };
    SpeedDial2.prototype.appendTemplate = function() {
      var templateContainer = this.createElement("div", {
        className: SDTEMPLATECONTAINER
      });
      append([templateContainer], this.popupEle);
      var templateFunction = this.getTemplateString(this.popupTemplate);
      append(templateFunction({}, this, "fabPopupTemplate", this.element.id + "popupTemplate", this.isStringTemplate), templateContainer);
    };
    SpeedDial2.prototype.getTemplateString = function(template) {
      var stringContent = "";
      try {
        var tempEle = select(template);
        if (typeof template !== "function" && tempEle) {
          stringContent = tempEle.tagName === "SCRIPT" ? tempEle.innerHTML : tempEle.outerHTML;
        } else {
          stringContent = template;
        }
      } catch (e) {
        stringContent = template;
      }
      return compile2(stringContent);
    };
    SpeedDial2.prototype.updatePopupTemplate = function() {
      if (this.popupEle) {
        if (this.popupEle.querySelector("." + SDLI)) {
          this.clearItems();
          this.popupEle.classList.remove(RADIALSD, LINEARSD);
          this.popupEle.classList.add(TEMPLATESD);
        }
        while (this.popupEle.firstElementChild) {
          remove(this.popupEle.firstElementChild);
        }
        this.setPopupContent();
        this.updatePositionProperties();
      } else {
        this.createPopup();
      }
    };
    SpeedDial2.prototype.createUl = function() {
      var popupUlEle = this.createElement("ul", {
        className: SDUL,
        id: this.element.id + "_ul",
        attrs: {
          "role": "menu"
        }
      });
      this.popupEle.appendChild(popupUlEle);
    };
    SpeedDial2.prototype.createItems = function() {
      var _this = this;
      this.focusedIndex = -1;
      var ul = this.popupEle.querySelector("." + SDUL);
      var _loop_1 = function(index2) {
        var item = this_1.items[parseInt(index2.toString(), 10)];
        var li = this_1.createElement("li", {
          className: SDLI + " " + SDHIDDEN,
          id: item.id ? item.id : this_1.element.id + "_li_" + index2,
          attrs: {
            "role": "menuitem"
          }
        });
        if (item.text) {
          li.setAttribute("aria-label", item.text);
        }
        if (this_1.itemTemplate) {
          var templateFunction = this_1.getTemplateString(this_1.itemTemplate);
          append(templateFunction(item, this_1, "fabItemTemplate", this_1.element.id + "itemTemplate", this_1.isStringTemplate), li);
        } else {
          if (item.iconCss) {
            var iconSpan = this_1.createElement("span", {
              className: SDLIICON + " " + item.iconCss
            });
            li.appendChild(iconSpan);
          }
          if (item.text) {
            var textSpan = this_1.createElement("span", {
              className: SDLITEXT
            });
            textSpan.innerText = item.text;
            li.appendChild(textSpan);
            if (!item.iconCss) {
              li.classList.add(SDLITEXTONLY);
            }
          }
        }
        if (item.disabled) {
          li.classList.add(DISABLED3);
          li.setAttribute("aria-disabled", "true");
        } else {
          EventHandler.add(li, "click", function(e) {
            return _this.triggerItemClick(e, item);
          }, this_1);
        }
        if (item.title) {
          li.setAttribute("title", item.title);
        }
        var eventArgs = {
          element: li,
          item
        };
        this_1.trigger("beforeItemRender", eventArgs, function(args) {
          ul.appendChild(args.element);
        });
      };
      var this_1 = this;
      for (var index = 0; index < this.items.length; index++) {
        _loop_1(index);
      }
    };
    SpeedDial2.prototype.setRTL = function() {
      this.popupEle.classList[this.enableRtl ? "add" : "remove"](RTLCLASS);
      this.clearHorizontalPosition();
      if (!(this.popupTemplate || this.mode === "Radial")) {
        this.setLinearHorizontalPosition();
      } else {
        if (!this.popupTemplate && this.mode === "Radial") {
          this.setRadialPosition();
        }
        this.setHorizontalPosition();
      }
    };
    SpeedDial2.prototype.checkTarget = function() {
      this.isFixed = true;
      if (this.target) {
        this.targetEle = typeof this.target === "string" ? select(this.target) : this.target;
        if (this.targetEle) {
          this.targetEle.appendChild(this.element);
          this.isFixed = false;
        }
      }
      if (this.isFixed) {
        if (this.popupEle) {
          this.popupEle.classList.add(FIXEDSD);
        }
        if (this.overlayEle) {
          this.overlayEle.classList.add(FIXEDSD);
        }
      } else {
        if (this.popupEle) {
          this.popupEle.classList.remove(FIXEDSD);
        }
        if (this.overlayEle) {
          this.overlayEle.classList.remove(FIXEDSD);
        }
      }
    };
    SpeedDial2.prototype.setVisibility = function(val) {
      this.setProperties({
        visible: val
      }, true);
      this.fab.setProperties({
        visible: val
      });
    };
    SpeedDial2.prototype.popupMouseLeaveHandle = function(e) {
      var target = e.relatedTarget;
      if (this.opensOnHover && !(target.classList.contains(SPEEDDIAL) || closest(target, "." + SPEEDDIAL))) {
        this.hidePopupEle(e);
      }
    };
    SpeedDial2.prototype.mouseOverHandle = function(e) {
      this.showPopupEle(e);
    };
    SpeedDial2.prototype.mouseLeaveHandle = function(e) {
      var target = e.relatedTarget;
      if (!(target.classList.contains(SDPOPUP) || closest(target, "." + SDPOPUP))) {
        this.hidePopupEle(e);
      }
    };
    SpeedDial2.prototype.popupKeyActionHandler = function(e) {
      switch (e.action) {
        case "esc":
          this.hidePopupEle(e);
          break;
        case "enter":
        case "space":
          if (this.isMenuOpen && e.target !== this.element) {
            this.hidePopupEle(e);
          }
          break;
      }
    };
    SpeedDial2.prototype.keyActionHandler = function(e) {
      e.preventDefault();
      switch (e.action) {
        case "enter":
        case "space":
          if (this.isMenuOpen) {
            if (this.focusedIndex !== -1) {
              this.triggerItemClick(e, this.items[this.focusedIndex]);
            } else {
              this.hidePopupEle(e);
            }
          } else {
            this.showPopupEle(e);
          }
          break;
        case "esc":
          this.hidePopupEle(e);
          break;
        default:
          if (this.popupTemplate || !this.isMenuOpen) {
            break;
          }
          switch (e.action) {
            case "end":
              this.focusLastElement();
              break;
            case "home":
              this.focusFirstElement();
              break;
            case "moveRight":
              if (this.mode === "Radial") {
                this.focusLeftRightElement(false);
              } else {
                this.focusLinearElement(false);
              }
              break;
            case "moveDown":
              if (this.mode === "Radial") {
                this.focusUpDownElement(false);
              } else {
                this.focusLinearElement(false);
              }
              break;
            case "moveLeft":
              if (this.mode === "Radial") {
                this.focusLeftRightElement(true);
              } else {
                this.focusLinearElement(true);
              }
              break;
            case "moveUp":
              if (this.mode === "Radial") {
                this.focusUpDownElement(true);
              } else {
                this.focusLinearElement(true);
              }
              break;
          }
          break;
      }
    };
    SpeedDial2.prototype.focusFirstElement = function() {
      var ele = selectAll("." + SDLI, this.popupEle);
      var index = 0;
      while (ele[parseInt(index.toString(), 10)].classList.contains(DISABLED3)) {
        index++;
        if (index > ele.length - 1) {
          return;
        }
      }
      this.setFocus(index, ele[parseInt(index.toString(), 10)]);
    };
    SpeedDial2.prototype.focusLastElement = function() {
      var ele = selectAll("." + SDLI, this.popupEle);
      var index = ele.length - 1;
      while (ele[parseInt(index.toString(), 10)].classList.contains(DISABLED3)) {
        index--;
        if (index < 0) {
          return;
        }
      }
      this.setFocus(index, ele[parseInt(index.toString(), 10)]);
    };
    SpeedDial2.prototype.focusLinearElement = function(isLeftUp) {
      var isReversed = this.popupEle.classList.contains(SDVERTICALBOTTOM) || this.popupEle.classList.contains(SDHORIZONTALRIGHT);
      if (isReversed !== isLeftUp) {
        this.focusPrevElement();
      } else {
        this.focusNextElement();
      }
    };
    SpeedDial2.prototype.focusLeftRightElement = function(isLeft) {
      var isradialTop = ["TopLeft", "TopCenter", "TopRight", "MiddleLeft"].indexOf(this.position) !== -1;
      if (isradialTop && isLeft !== this.isClock || !isradialTop && isLeft === this.isClock) {
        this.focusPrevElement();
      } else {
        this.focusNextElement();
      }
    };
    SpeedDial2.prototype.focusUpDownElement = function(isUp) {
      var isradialRight = ["TopRight", "MiddleRight", "BottomRight", "BottomCenter"].indexOf(this.position) !== -1;
      if (isradialRight && isUp !== this.isClock || !isradialRight && isUp === this.isClock) {
        this.focusPrevElement();
      } else {
        this.focusNextElement();
      }
    };
    SpeedDial2.prototype.focusPrevElement = function() {
      var ele = selectAll("." + SDLI, this.popupEle);
      var index = this.focusedIndex;
      do {
        index--;
        if (index < 0) {
          this.setFocus(-1);
          return;
        }
      } while (ele[parseInt(index.toString(), 10)].classList.contains(DISABLED3));
      this.setFocus(index, ele[parseInt(index.toString(), 10)]);
    };
    SpeedDial2.prototype.focusNextElement = function() {
      var ele = selectAll("." + SDLI, this.popupEle);
      var index = this.focusedIndex;
      do {
        index++;
        if (index > ele.length - 1) {
          return;
        }
      } while (ele[parseInt(index.toString(), 10)].classList.contains(DISABLED3));
      this.setFocus(index, ele[parseInt(index.toString(), 10)]);
    };
    SpeedDial2.prototype.setFocus = function(index, ele) {
      this.removeFocus();
      if (ele) {
        ele.classList.add(SDACTIVELI);
      }
      this.focusedIndex = index;
    };
    SpeedDial2.prototype.removeFocus = function() {
      var preEle = select("." + SDACTIVELI, this.popupEle);
      if (preEle) {
        preEle.classList.remove(SDACTIVELI);
      }
    };
    SpeedDial2.prototype.updatePositionProperties = function() {
      this.hidePopupEle();
      this.clearPosition();
      this.validateDirection();
      this.setPositionProps();
    };
    SpeedDial2.prototype.setPositionProps = function() {
      if (this.popupTemplate) {
        this.setPosition();
      } else if (this.mode === "Radial") {
        this.setRadialPosition();
        this.setPosition();
      } else {
        this.setLinearPosition();
        this.setMaxSize();
      }
    };
    SpeedDial2.prototype.validateDirection = function() {
      switch (this.direction) {
        case "Up":
          this.actualLinDirection = topPosition.indexOf(this.position) !== -1 ? "Auto" : "Up";
          break;
        case "Down":
          this.actualLinDirection = bottomPosition.indexOf(this.position) !== -1 ? "Auto" : "Down";
          break;
        case "Right":
          this.actualLinDirection = rightPosition.indexOf(this.position) !== -1 ? "Auto" : "Right";
          break;
        case "Left":
          this.actualLinDirection = leftPosition.indexOf(this.position) !== -1 ? "Auto" : "Left";
          break;
        case "Auto":
        default:
          this.actualLinDirection = "Auto";
          break;
      }
      this.isVertical = !(this.actualLinDirection === "Left" || this.actualLinDirection === "Right");
    };
    SpeedDial2.prototype.setMaxSize = function() {
      var top = this.element.offsetTop;
      var left = this.element.offsetLeft;
      var bottom = (this.isFixed ? window.innerHeight : this.targetEle.clientHeight) - this.element.offsetTop - this.element.offsetHeight;
      var right = (this.isFixed ? window.innerWidth : this.targetEle.clientWidth) - this.element.offsetLeft - this.element.offsetWidth;
      var limit = 0;
      var popupUlEle = this.popupEle.querySelector("." + SDUL);
      if (this.isVertical) {
        limit = this.actualLinDirection === "Up" || this.actualLinDirection === "Auto" && topPosition.indexOf(this.position) === -1 ? top : bottom;
        if (limit < popupUlEle.offsetHeight) {
          this.popupEle.classList.add(SDOVERFLOW, SDVERTOVERFLOW);
          popupUlEle.style.setProperty(SDOVERFLOWLIMIT, limit + "px");
        }
      } else {
        limit = this.enableRtl ? this.direction === "Right" ? left : right : this.direction === "Right" ? right : left;
        if (limit < popupUlEle.offsetWidth) {
          this.popupEle.classList.add(SDOVERFLOW, SDHORZOVERFLOW);
          popupUlEle.style.setProperty(SDOVERFLOWLIMIT, limit + "px");
        }
      }
    };
    SpeedDial2.prototype.setLinearPosition = function() {
      var vertDist = 0;
      var isTop = this.actualLinDirection === "Down" || this.actualLinDirection === "Auto" && topPosition.indexOf(this.position) !== -1 || !this.isVertical && bottomPosition.indexOf(this.position) === -1;
      var elementOffSetHeight = this.element.offsetHeight / 2;
      var isMiddle = ["MiddleRight", "MiddleCenter", "MiddleLeft"].indexOf(this.position) !== -1;
      if (isTop) {
        vertDist = this.element.offsetTop + (this.isVertical ? this.element.offsetHeight : 0);
        if (isMiddle) {
          if (this.actualLinDirection === "Right" || this.actualLinDirection === "Left") {
            vertDist = this.element.offsetTop - elementOffSetHeight;
          }
          if (this.actualLinDirection === "Down") {
            vertDist = vertDist - elementOffSetHeight;
          }
        }
        if (!this.isVertical) {
          this.popupEle.classList.add(SDHORIZONTALTOP);
        }
      } else {
        vertDist = this.isFixed ? window.document.documentElement.clientHeight : this.targetEle.clientHeight;
        vertDist = vertDist - this.element.offsetTop - (this.isVertical ? 0 : this.element.offsetHeight);
        if (isMiddle) {
          if (this.actualLinDirection === "Auto" || this.actualLinDirection === "Up") {
            vertDist = vertDist + elementOffSetHeight;
          }
        }
        if (this.isVertical) {
          this.popupEle.classList.add(SDVERTICALBOTTOM);
        }
      }
      this.popupEle.classList.add(isTop ? SDTOP : SDBOTTOM);
      this.popupEle.style.setProperty(SDVERTDIST, vertDist + "px");
      this.setLinearHorizontalPosition();
    };
    SpeedDial2.prototype.setLinearHorizontalPosition = function() {
      if (this.actualLinDirection === "Right" || this.isVertical && rightPosition.indexOf(this.position) === -1) {
        if (this.enableRtl) {
          this.setRight();
        } else {
          this.setLeft();
        }
        if (!this.isVertical) {
          this.popupEle.classList.add(SDHORIZONTALLEFT);
        }
      } else {
        if (this.enableRtl) {
          this.setLeft();
        } else {
          this.setRight();
        }
        this.popupEle.classList.add(this.isVertical ? SDVERTICALRIGHT : SDHORIZONTALRIGHT);
      }
    };
    SpeedDial2.prototype.setLeft = function() {
      var elementOffSetWidth = this.element.offsetWidth / 2;
      var isCenter = ["TopCenter", "MiddleCenter", "BottomCenter"].indexOf(this.position) !== -1;
      var horzDist = this.element.offsetLeft + (this.isVertical ? 0 : this.element.offsetWidth);
      if (isCenter) {
        if (this.actualLinDirection === "Auto" || this.actualLinDirection === "Down" || this.actualLinDirection === "Up") {
          horzDist = this.element.offsetLeft - elementOffSetWidth;
        } else {
          horzDist = this.actualLinDirection === "Right" ? this.element.offsetLeft + elementOffSetWidth : horzDist + elementOffSetWidth;
        }
      }
      this.popupEle.style.setProperty(SDHORZDIST, horzDist + "px");
      this.popupEle.classList.add(SDLEFT);
    };
    SpeedDial2.prototype.setRight = function() {
      var elementOffSetWidth = this.element.offsetWidth / 2;
      var isCenter = ["TopCenter", "MiddleCenter", "BottomCenter"].indexOf(this.position) !== -1;
      var horzDist = this.isFixed ? window.document.documentElement.clientWidth : this.targetEle.clientWidth;
      horzDist = horzDist - this.element.offsetLeft - (this.isVertical ? this.element.offsetWidth : 0);
      if (isCenter && this.actualLinDirection === "Left") {
        horzDist = horzDist + elementOffSetWidth;
      }
      if (this.popupEle.classList.contains("e-rtl") && isCenter) {
        horzDist = horzDist - elementOffSetWidth;
      }
      this.popupEle.style.setProperty(SDHORZDIST, horzDist + "px");
      this.popupEle.classList.add(SDRIGHT);
    };
    SpeedDial2.prototype.setPosition = function() {
      if (["MiddleLeft", "MiddleRight", "MiddleCenter"].indexOf(this.position) !== -1) {
        this.popupEle.classList.add(SDMIDDLE);
        var yoffset = ((this.isFixed ? window.innerHeight : this.targetEle.clientHeight) - this.popupEle.offsetHeight) / 2;
        this.popupEle.style.setProperty(SDVERTDIST, yoffset + "px");
      }
      this.popupEle.classList.add(bottomPosition.indexOf(this.position) === -1 ? SDTOP : SDBOTTOM);
      this.setHorizontalPosition();
    };
    SpeedDial2.prototype.setHorizontalPosition = function() {
      if (["TopCenter", "BottomCenter", "MiddleCenter"].indexOf(this.position) !== -1) {
        this.popupEle.classList.add(SDCENTER);
        var xoffset = ((this.isFixed ? window.innerWidth : this.targetEle.clientWidth) - this.popupEle.offsetWidth) / 2;
        this.popupEle.style.setProperty(SDHORZDIST, xoffset + "px");
      }
      var isRight = rightPosition.indexOf(this.position) !== -1;
      this.popupEle.classList.add(!(this.enableRtl || isRight) || this.enableRtl && isRight ? SDLEFT : SDRIGHT);
    };
    SpeedDial2.prototype.setCustomRadialPosition = function() {
      var viewportWidth = document.documentElement.clientWidth;
      var viewportHeight = document.documentElement.clientHeight;
      if (["TopLeft", "BottomLeft", "MiddleLeft"].indexOf(this.position) !== -1) {
        var horzDist = void 0;
        if (this.enableRtl) {
          if (this.isFixed) {
            horzDist = viewportWidth - (this.element.offsetLeft + this.element.offsetWidth);
          } else {
            horzDist = this.targetEle.clientWidth - (this.element.offsetLeft + this.element.offsetWidth);
          }
        } else {
          horzDist = this.element.offsetLeft;
        }
        this.popupEle.style.setProperty(SDRADICALHORZDIST, horzDist + "px");
      }
      if (["TopLeft", "TopCenter", "TopRight"].indexOf(this.position) !== -1) {
        this.popupEle.style.top = this.element.offsetTop + "px";
      }
      if (["TopRight", "BottomRight", "MiddleRight"].indexOf(this.position) !== -1) {
        var horzDist = void 0;
        if (this.enableRtl) {
          horzDist = this.element.offsetLeft;
        } else {
          if (this.isFixed) {
            horzDist = viewportWidth - (this.element.offsetLeft + this.element.offsetWidth);
          } else {
            horzDist = this.targetEle.clientWidth - (this.element.offsetLeft + this.element.offsetWidth);
          }
        }
        this.popupEle.style.setProperty(SDRADICALHORZDIST, horzDist + "px");
      }
      if (["BottomLeft", "BottomCenter", "BottomRight"].indexOf(this.position) !== -1) {
        if (this.isFixed) {
          this.popupEle.style.bottom = viewportHeight - (this.element.offsetTop + this.element.offsetHeight) + "px";
        } else {
          this.popupEle.style.bottom = this.targetEle.clientHeight - (this.element.offsetTop + this.element.offsetHeight) + "px";
        }
      }
      if (["TopCenter", "MiddleCenter", "BottomCenter"].indexOf(this.position) !== -1) {
        var horzDist = void 0;
        if (this.enableRtl) {
          if (this.isFixed) {
            horzDist = viewportWidth - (this.element.offsetLeft + this.element.offsetWidth) - this.popupEle.offsetWidth / 2;
          } else {
            var targetEleWidth = this.targetEle.clientWidth;
            var popupEleWidth = this.popupEle.offsetWidth;
            horzDist = targetEleWidth - (this.element.offsetLeft + this.element.offsetWidth) - popupEleWidth / 2;
          }
        } else {
          horzDist = this.element.offsetLeft - this.popupEle.offsetWidth / 2;
        }
        this.popupEle.style.setProperty(SDRADICALHORZDIST, horzDist + "px");
      }
      if (["MiddleLeft", "MiddleCenter", "MiddleRight"].indexOf(this.position) !== -1) {
        this.popupEle.style.top = this.element.offsetTop - this.popupEle.offsetHeight / 2 + "px";
      }
    };
    SpeedDial2.prototype.setRadialPosition = function() {
      this.setRadialCorner();
      var range = this.getActualRange();
      this.isClock = range.direction === "Clockwise";
      var offset = formatUnit(range.offset);
      var li = selectAll("." + SDLI, this.popupEle);
      this.popupEle.style.setProperty(SDRADICALOFFSET, offset);
      this.popupEle.style.setProperty(SDRADICALMINHEIGHT, li[0].offsetHeight + "px");
      this.popupEle.style.setProperty(SDRADICALMINWIDTH, li[0].offsetWidth + "px");
      var availableAngle = Math.abs(range.endAngle - range.startAngle);
      var gaps = availableAngle === 360 || availableAngle === 0 ? li.length : li.length - 1;
      var perAngle = availableAngle / gaps;
      for (var i = 0; i < li.length; i++) {
        var ele = li[parseInt(i.toString(), 10)];
        var startAngle = range.startAngle;
        var angle = this.isClock ? startAngle + perAngle * i : startAngle - perAngle * i;
        angle = angle % 360;
        ele.style.setProperty(SDRADICALANGLE, angle + "deg");
      }
    };
    SpeedDial2.prototype.setRadialCorner = function() {
      if (["TopLeft", "TopCenter", "MiddleLeft", "MiddleCenter"].indexOf(this.position) !== -1) {
        this.popupEle.classList.add(this.enableRtl ? SDTOPRIGHT : SDTOPLEFT);
      }
      if (["TopRight", "TopCenter", "MiddleRight", "MiddleCenter"].indexOf(this.position) !== -1) {
        this.popupEle.classList.add(this.enableRtl ? SDTOPLEFT : SDTOPRIGHT);
      }
      if (["BottomLeft", "BottomCenter", "MiddleLeft", "MiddleCenter"].indexOf(this.position) !== -1) {
        this.popupEle.classList.add(this.enableRtl ? SDBOTTOMRIGHT : SDBOTTOMLEFT);
      }
      if (["BottomRight", "BottomCenter", "MiddleRight", "MiddleCenter"].indexOf(this.position) !== -1) {
        this.popupEle.classList.add(this.enableRtl ? SDBOTTOMLEFT : SDBOTTOMRIGHT);
      }
    };
    SpeedDial2.prototype.getActualRange = function() {
      var range = {
        offset: this.radialSettings.offset
      };
      var start = this.radialSettings.startAngle;
      var end = this.radialSettings.endAngle;
      var isClockwise = false;
      switch (this.position) {
        case "TopLeft":
        case "TopRight":
          if ("TopLeft" === this.position !== this.enableRtl) {
            isClockwise = this.radialSettings.direction === "Clockwise";
            this.checkAngleRange(start, end, range, isClockwise, 0, 90, false);
          } else {
            isClockwise = this.radialSettings.direction !== "AntiClockwise";
            this.checkAngleRange(start, end, range, isClockwise, 90, 180, false);
          }
          break;
        case "TopCenter":
          isClockwise = this.radialSettings.direction === "Clockwise";
          this.checkAngleRange(start, end, range, isClockwise, 0, 180, false);
          break;
        case "MiddleLeft":
        case "MiddleRight":
          if ("MiddleLeft" === this.position !== this.enableRtl) {
            isClockwise = this.radialSettings.direction === "Clockwise";
            start = isNullOrUndefined(start) || start < 0 || start > 360 || start > 90 && start < 270 ? isClockwise ? 270 : 90 : start;
            end = isNullOrUndefined(end) || end < 0 || end > 360 || end > 90 && end < 270 ? isClockwise ? 90 : 270 : end;
            start = start < 91 ? start + 360 : start;
            end = end < 91 ? end + 360 : end;
            var switchVal = isClockwise && end < start || !isClockwise && end > start;
            range.startAngle = switchVal ? end : start;
            range.endAngle = switchVal ? start : end;
          } else {
            isClockwise = this.radialSettings.direction !== "AntiClockwise";
            this.checkAngleRange(start, end, range, isClockwise, 90, 270, false);
          }
          break;
        case "MiddleCenter":
          isClockwise = this.radialSettings.direction !== "AntiClockwise";
          start = isNullOrUndefined(start) || start < 0 || start > 360 ? isClockwise ? 0 : 360 : start;
          end = isNullOrUndefined(end) || end < 0 || end > 360 ? isClockwise ? 360 : 0 : end;
          range.startAngle = !isClockwise && start <= end ? start + 360 : start;
          range.endAngle = isClockwise && end <= start ? end + 360 : end;
          break;
        case "BottomLeft":
        case "BottomRight":
          if ("BottomLeft" === this.position !== this.enableRtl) {
            isClockwise = this.radialSettings.direction === "Clockwise";
            this.checkAngleRange(start, end, range, isClockwise, 270, 360, true);
          } else {
            isClockwise = this.radialSettings.direction !== "AntiClockwise";
            this.checkAngleRange(start, end, range, isClockwise, 180, 270, true);
          }
          break;
        case "BottomCenter":
          isClockwise = this.radialSettings.direction !== "AntiClockwise";
          this.checkAngleRange(start, end, range, isClockwise, 180, 360, true);
          break;
      }
      range.direction = isClockwise ? "Clockwise" : "AntiClockwise";
      return range;
    };
    SpeedDial2.prototype.checkAngleRange = function(start, end, range, isClockwise, min, max, check0) {
      start = this.checkAngle(start, isClockwise, min, max, check0);
      end = this.checkAngle(end, !isClockwise, min, max, check0);
      var switchVal = isClockwise && end < start || !isClockwise && end > start;
      range.startAngle = switchVal ? end : start;
      range.endAngle = switchVal ? start : end;
    };
    SpeedDial2.prototype.checkAngle = function(val, isStart, min, max, check0) {
      if (isNullOrUndefined(val) || val < 0 || val > 360) {
        return isStart ? min : max;
      } else {
        val = check0 ? val === 0 ? 360 : val : val === 360 ? 0 : val;
        return val >= min && val <= max ? val : isStart ? min : max;
      }
    };
    SpeedDial2.prototype.clearPosition = function() {
      this.popupEle.style.removeProperty(SDRADICALOFFSET);
      this.popupEle.style.removeProperty(SDRADICALMINHEIGHT);
      this.popupEle.style.removeProperty(SDRADICALMINWIDTH);
      this.popupEle.classList.remove(SDTOPLEFT, SDTOPRIGHT, SDBOTTOMLEFT, SDBOTTOMRIGHT);
      this.popupEle.classList.remove(SDTOP, SDBOTTOM, SDMIDDLE);
      this.popupEle.classList.remove(SDHORIZONTALTOP, SDVERTICALBOTTOM);
      this.popupEle.style.removeProperty(SDVERTDIST);
      this.clearHorizontalPosition();
      this.clearOverflow();
    };
    SpeedDial2.prototype.clearHorizontalPosition = function() {
      this.popupEle.style.removeProperty(SDHORZDIST);
      this.popupEle.style.removeProperty(SDRADICALHORZDIST);
      this.popupEle.style.removeProperty("top");
      this.popupEle.style.removeProperty("bottom");
      this.popupEle.classList.remove(SDRIGHT, SDLEFT, SDCENTER);
      this.popupEle.classList.remove(SDVERTICALRIGHT, SDHORIZONTALLEFT, SDHORIZONTALRIGHT);
    };
    SpeedDial2.prototype.clearOverflow = function() {
      this.popupEle.classList.remove(SDOVERFLOW, SDVERTOVERFLOW, SDHORZOVERFLOW);
      this.popupEle.style.removeProperty(SDOVERFLOWLIMIT);
    };
    SpeedDial2.prototype.hidePopupEle = function(e) {
      var _this = this;
      if (!this.popupEle || !this.isMenuOpen) {
        return;
      }
      var eventArgs = {
        element: this.popupEle,
        event: e,
        cancel: false
      };
      this.trigger("beforeClose", eventArgs, function(args) {
        if (args.cancel) {
          return;
        }
        if (_this.animation.effect !== "None") {
          var closeAnimation_1 = {
            name: _this.animation.effect + "Out",
            timingFunction: "easeOut"
          };
          var eleArray_1 = _this.popupTemplate ? [_this.popupEle.firstElementChild] : selectAll("." + SDLI, _this.popupEle);
          var timeOutInterval_1 = _this.animation.duration / (eleArray_1.length + 1);
          closeAnimation_1.duration = 2 * timeOutInterval_1;
          var animateElement_1 = function(curIndex) {
            var ele2 = eleArray_1[parseInt(curIndex.toString(), 10)];
            closeAnimation_1.delay = curIndex === eleArray_1.length - 1 ? _this.animation.delay : 0;
            closeAnimation_1.begin = function() {
              if (curIndex === eleArray_1.length - 1) {
                _this.startHide();
              }
            };
            closeAnimation_1.end = function() {
              ele2.classList.add(SDHIDDEN);
              if (curIndex === 0) {
                _this.endHide();
              }
            };
            new Animation(closeAnimation_1).animate(ele2);
            if (curIndex !== 0) {
              var index_1 = curIndex - 1;
              setTimeout(function() {
                animateElement_1(index_1);
              }, timeOutInterval_1);
            }
          };
          animateElement_1(eleArray_1.length - 1);
        } else {
          _this.startHide();
          if (!_this.popupTemplate) {
            var ele = selectAll("." + SDLI, _this.popupEle);
            ele.forEach(function(element2) {
              element2.classList.add(SDHIDDEN);
            });
          }
          _this.endHide();
        }
      });
    };
    SpeedDial2.prototype.startHide = function() {
      this.element.setAttribute("aria-expanded", "false");
      this.removeFocus();
      this.isMenuOpen = false;
    };
    SpeedDial2.prototype.endHide = function() {
      this.fab.setProperties({
        iconCss: this.openIconCss
      });
      this.popupEle.classList.add(SDHIDDEN);
      if (this.popupTemplate) {
        this.setVisibility(true);
      }
      this.toggleOverlay();
      if (this.popupTemplate) {
        this.popupEle.removeAttribute("tabindex");
      }
      this.trigger("onClose", {
        element: this.popupEle
      });
    };
    SpeedDial2.prototype.showPopupEle = function(e) {
      var _this = this;
      if (!this.popupEle || this.isMenuOpen) {
        return;
      }
      if (this.popupTemplate || this.mode === "Radial") {
        this.setCustomRadialPosition();
      } else {
        this.setLinearPosition();
      }
      var eventArgs = {
        element: this.popupEle,
        event: e,
        cancel: false
      };
      this.trigger("beforeOpen", eventArgs, function(args) {
        if (args.cancel) {
          return;
        }
        if (_this.animation.effect !== "None" || animationMode === "Enable" && _this.animation.effect === "None") {
          if (animationMode === "Enable" && _this.animation.effect === "None") {
            _this.animation.effect = "Fade";
          }
          if (animationMode === "Enable" && _this.animation.duration === 0) {
            _this.animation.duration = 400;
          }
          var openAnimation_1 = {
            name: _this.animation.effect + "In",
            timingFunction: "easeIn"
          };
          var eleArray_2 = _this.popupTemplate ? [_this.popupEle.firstElementChild] : selectAll("." + SDLI, _this.popupEle);
          var timeOutInterval_2 = _this.animation.duration / (eleArray_2.length + 1);
          openAnimation_1.duration = 2 * timeOutInterval_2;
          var animateElement_2 = function(curIndex) {
            var ele2 = eleArray_2[parseInt(curIndex.toString(), 10)];
            openAnimation_1.delay = curIndex === 0 ? _this.animation.delay : 0;
            openAnimation_1.begin = function() {
              if (curIndex === 0) {
                _this.startShow();
              }
              ele2.classList.remove(SDHIDDEN);
            };
            openAnimation_1.end = function() {
              if (curIndex === eleArray_2.length - 1) {
                _this.endShow();
              }
            };
            new Animation(openAnimation_1).animate(ele2);
            if (curIndex !== eleArray_2.length - 1) {
              var index_2 = curIndex + 1;
              setTimeout(function() {
                animateElement_2(index_2);
              }, timeOutInterval_2);
            }
          };
          animateElement_2(0);
        } else {
          _this.startShow();
          if (!_this.popupTemplate) {
            var ele = selectAll("." + SDLI, _this.popupEle);
            ele.forEach(function(element2) {
              element2.classList.remove(SDHIDDEN);
            });
          }
          _this.endShow();
        }
      });
    };
    SpeedDial2.prototype.startShow = function() {
      this.element.setAttribute("aria-expanded", "true");
      this.isMenuOpen = true;
      this.toggleOverlay();
      this.popupEle.classList.remove(SDHIDDEN);
      if (this.popupTemplate) {
        this.setVisibility(false);
      }
    };
    SpeedDial2.prototype.endShow = function() {
      if (this.closeIconCss) {
        this.fab.setProperties({
          iconCss: this.closeIconCss
        });
      }
      if (this.popupTemplate) {
        this.popupEle.setAttribute("tabindex", "1");
        this.popupEle.focus();
      }
      this.trigger("onOpen", {
        element: this.popupEle
      });
    };
    SpeedDial2.prototype.toggleOverlay = function() {
      if (!this.overlayEle) {
        return;
      }
      this.overlayEle.classList[this.isMenuOpen ? "remove" : "add"](SDHIDDEN);
    };
    SpeedDial2.prototype.removeOverlayEle = function() {
      if (!this.overlayEle) {
        return;
      }
      remove(this.overlayEle);
      this.overlayEle = void 0;
    };
    SpeedDial2.prototype.updatePopupItems = function() {
      if (this.popupEle) {
        this.hidePopupEle();
        this.clearItems();
        this.createItems();
        this.updatePositionProperties();
      } else {
        this.createPopup();
      }
    };
    SpeedDial2.prototype.handleResize = function(e) {
      if (!this.popupEle) {
        return;
      }
      this.hidePopupEle(e);
      this.clearOverflow();
      this.setPositionProps();
    };
    SpeedDial2.prototype.triggerItemClick = function(e, item) {
      var target = e.target;
      target = target.classList.contains(SDLI) ? target : closest(target, "." + SDLI);
      var eventArgs = {
        element: target,
        item,
        event: e
      };
      this.trigger("clicked", eventArgs);
      this.hidePopupEle(e);
    };
    SpeedDial2.prototype.show = function() {
      this.showPopupEle();
    };
    SpeedDial2.prototype.hide = function() {
      this.hidePopupEle();
    };
    SpeedDial2.prototype.refreshPosition = function() {
      this.resizeHandler();
    };
    SpeedDial2.prototype.resizeHandler = function(e) {
      this.handleResize(e);
    };
    SpeedDial2.prototype.clearItems = function() {
      var liList = selectAll("." + SDLI, this.popupEle);
      liList.forEach(function(element2) {
        remove(element2);
      });
    };
    SpeedDial2.prototype.unwireEvents = function() {
      EventHandler.remove(window, "resize", this.resizeHandler);
      EventHandler.remove(document.body, "click", this.bodyClickHandler);
      if (this.opensOnHover) {
        this.unwireFabHover();
      } else {
        this.unwireFabClick();
      }
    };
    SpeedDial2.prototype.unwireFabClick = function() {
      EventHandler.remove(this.fab.element, "click", this.fabClick);
    };
    SpeedDial2.prototype.unwireFabHover = function() {
      this.popupEle.classList.remove(HOVERSD);
      EventHandler.remove(this.fab.element, "mouseover", this.mouseOverHandle);
      EventHandler.remove(this.element, "mouseleave", this.mouseLeaveHandle);
    };
    SpeedDial2.prototype.unwirePopupEvents = function() {
      if (isRippleEnabled) {
        this.removeRippleEffect();
      }
      this.removeRippleEffect = null;
      this.keyboardModule.destroy();
      this.popupKeyboardModule.destroy();
      this.documentKeyboardModule.destroy();
      this.keyboardModule = null;
      this.popupKeyboardModule = null;
      this.documentKeyboardModule = null;
      EventHandler.remove(this.popupEle, "click", this.popupClick);
      EventHandler.remove(this.popupEle, "mouseleave", this.popupMouseLeaveHandle);
    };
    SpeedDial2.prototype.destroy = function() {
      var _this = this;
      _super.prototype.destroy.call(this);
      this.unwireEvents();
      ["aria-expanded", "aria-haspopup", "aria-controls"].forEach(function(attr) {
        _this.element.removeAttribute(attr);
      });
      if (this.popupEle) {
        this.unwirePopupEvents();
        remove(this.popupEle);
        this.popupEle = void 0;
      }
      this.removeOverlayEle();
      this.fab.destroy();
      this.fab = void 0;
    };
    SpeedDial2.prototype.onPropertyChanged = function(newProp, oldProp) {
      var fabProplist = ["content", "cssClass", "disabled", "enablePersistence", "enableRtl", "iconPosition", "position", "target", "template", "title", "visible", "isPrimary"];
      var fabModel = extend({}, newProp);
      for (var _i = 0, _a = Object.keys(fabModel); _i < _a.length; _i++) {
        var prop = _a[_i];
        if (fabProplist.indexOf(prop) < 0) {
          deleteObject(fabModel, prop);
        }
      }
      this.fab.setProperties(fabModel);
      for (var _b = 0, _c = Object.keys(newProp); _b < _c.length; _b++) {
        var prop = _c[_b];
        switch (prop) {
          case "cssClass":
            if (!this.popupEle) {
              break;
            }
            if (oldProp.cssClass) {
              removeClass(this.overlayEle ? [this.popupEle, this.overlayEle] : [this.popupEle], oldProp.cssClass.split(" "));
            }
            if (newProp.cssClass) {
              addClass(this.overlayEle ? [this.popupEle, this.overlayEle] : [this.popupEle], newProp.cssClass.split(" "));
            }
            break;
          case "visible":
          case "disabled":
            this.hide();
            break;
          case "enableRtl":
            if (!this.popupEle) {
              break;
            }
            this.setRTL();
            break;
          case "openIconCss":
            if (!this.isMenuOpen) {
              this.fab.setProperties({
                iconCss: this.openIconCss
              });
            }
            break;
          case "closeIconCss":
            if (this.isMenuOpen) {
              this.fab.setProperties({
                iconCss: this.closeIconCss
              });
            }
            break;
          case "position":
            if (!this.popupEle) {
              break;
            }
            this.updatePositionProperties();
            break;
          case "direction":
            if (!this.popupEle || this.popupTemplate) {
              break;
            }
            this.updatePositionProperties();
            break;
          case "popupTemplate":
            this.updatePopupTemplate();
            break;
          case "target":
            this.hidePopupEle();
            this.checkTarget();
            if (this.overlayEle) {
              this.element.insertAdjacentElement("beforebegin", this.overlayEle);
            }
            if (!this.popupEle) {
              break;
            }
            this.element.insertAdjacentElement("afterend", this.popupEle);
            this.updatePositionProperties();
            break;
          case "items":
          case "itemTemplate":
            if (this.popupTemplate) {
              break;
            }
            this.updatePopupItems();
            break;
          case "modal":
            if (newProp.modal) {
              this.createOverlay();
            } else {
              this.removeOverlayEle();
            }
            break;
          case "mode":
            if (!this.popupEle || this.popupTemplate) {
              break;
            }
            this.popupEle.classList.remove(RADIALSD, LINEARSD);
            this.popupEle.classList.add(this.mode === "Radial" ? RADIALSD : LINEARSD);
            this.updatePositionProperties();
            break;
          case "radialSettings":
            if (this.popupEle && this.mode === "Radial" && !this.popupTemplate) {
              this.setRadialPosition();
            }
            break;
          case "opensOnHover":
            if (this.opensOnHover) {
              this.unwireFabClick();
              this.wireFabHover();
            } else {
              this.unwireFabHover();
              this.wireFabClick();
            }
            break;
        }
      }
    };
    __decorate14([Complex({}, SpeedDialAnimationSettings)], SpeedDial2.prototype, "animation", void 0);
    __decorate14([Property("")], SpeedDial2.prototype, "content", void 0);
    __decorate14([Property("")], SpeedDial2.prototype, "closeIconCss", void 0);
    __decorate14([Property("")], SpeedDial2.prototype, "cssClass", void 0);
    __decorate14([Property("Auto")], SpeedDial2.prototype, "direction", void 0);
    __decorate14([Property(false)], SpeedDial2.prototype, "disabled", void 0);
    __decorate14([Property("Left")], SpeedDial2.prototype, "iconPosition", void 0);
    __decorate14([Collection([], SpeedDialItem)], SpeedDial2.prototype, "items", void 0);
    __decorate14([Property("")], SpeedDial2.prototype, "itemTemplate", void 0);
    __decorate14([Property("Linear")], SpeedDial2.prototype, "mode", void 0);
    __decorate14([Property("")], SpeedDial2.prototype, "openIconCss", void 0);
    __decorate14([Property(false)], SpeedDial2.prototype, "opensOnHover", void 0);
    __decorate14([Property("BottomRight")], SpeedDial2.prototype, "position", void 0);
    __decorate14([Property(false)], SpeedDial2.prototype, "modal", void 0);
    __decorate14([Property("")], SpeedDial2.prototype, "popupTemplate", void 0);
    __decorate14([Complex({}, RadialSettings)], SpeedDial2.prototype, "radialSettings", void 0);
    __decorate14([Property("")], SpeedDial2.prototype, "target", void 0);
    __decorate14([Property(true)], SpeedDial2.prototype, "visible", void 0);
    __decorate14([Property(true)], SpeedDial2.prototype, "isPrimary", void 0);
    __decorate14([Event2()], SpeedDial2.prototype, "beforeClose", void 0);
    __decorate14([Event2()], SpeedDial2.prototype, "beforeItemRender", void 0);
    __decorate14([Event2()], SpeedDial2.prototype, "beforeOpen", void 0);
    __decorate14([Event2()], SpeedDial2.prototype, "created", void 0);
    __decorate14([Event2()], SpeedDial2.prototype, "clicked", void 0);
    __decorate14([Event2()], SpeedDial2.prototype, "onClose", void 0);
    __decorate14([Event2()], SpeedDial2.prototype, "onOpen", void 0);
    SpeedDial2 = __decorate14([NotifyPropertyChanges], SpeedDial2);
    return SpeedDial2;
  }(Component)
);

// node_modules/@syncfusion/ej2-popups/src/common/resize.js
var elementClass = ["north-west", "north", "north-east", "west", "east", "south-west", "south", "south-east"];
var RESIZE_HANDLER = "e-resize-handle";
var FOCUSED_HANDLER = "e-focused-handle";
var DIALOG_RESIZABLE = "e-dlg-resizable";
var RESTRICT_LEFT = ["e-restrict-left"];
var RESIZE_WITHIN_VIEWPORT = "e-resize-viewport";
var dialogBorderResize = ["north", "west", "east", "south"];
var targetElement;
var selectedHandler;
var originalWidth = 0;
var originalHeight = 0;
var originalX = 0;
var originalY = 0;
var originalMouseX = 0;
var originalMouseY = 0;
var minHeight;
var maxHeight;
var minWidth;
var maxWidth;
var containerElement;
var resizeStart = null;
var resize = null;
var resizeEnd = null;
var resizeWestWidth;
var setLeft = true;
var previousWidth = 0;
var setWidth = true;
function createResize(args) {
  resizeStart = args.resizeBegin;
  resize = args.resizing;
  resizeEnd = args.resizeComplete;
  targetElement = getDOMElement(args.element);
  containerElement = getDOMElement(args.boundary);
  var directions = args.direction.split(" ");
  for (var i = 0; i < directions.length; i++) {
    if (dialogBorderResize.indexOf(directions[i]) >= 0 && directions[i]) {
      setBorderResizeElm(directions[i]);
    } else if (directions[i].trim() !== "") {
      var resizeHandler = createElement("div", {
        className: "e-icons " + RESIZE_HANDLER + " e-" + directions[i]
      });
      targetElement.appendChild(resizeHandler);
    }
  }
  minHeight = args.minHeight;
  minWidth = args.minWidth;
  maxWidth = args.maxWidth;
  maxHeight = args.maxHeight;
  if (args.proxy && args.proxy.element && args.proxy.element.classList.contains("e-dialog")) {
    wireEvents(args.proxy);
  } else {
    wireEvents();
  }
}
function setBorderResizeElm(direction) {
  calculateValues();
  var borderBottom = createElement("span", {
    attrs: {
      "unselectable": "on",
      "contenteditable": "false"
    }
  });
  borderBottom.setAttribute("class", "e-dialog-border-resize e-" + direction);
  if (direction === "south") {
    borderBottom.style.height = "2px";
    borderBottom.style.width = "100%";
    borderBottom.style.bottom = "0px";
    borderBottom.style.left = "0px";
  }
  if (direction === "north") {
    borderBottom.style.height = "2px";
    borderBottom.style.width = "100%";
    borderBottom.style.top = "0px";
    borderBottom.style.left = "0px";
  }
  if (direction === "east") {
    borderBottom.style.height = "100%";
    borderBottom.style.width = "2px";
    borderBottom.style.right = "0px";
    borderBottom.style.top = "0px";
  }
  if (direction === "west") {
    borderBottom.style.height = "100%";
    borderBottom.style.width = "2px";
    borderBottom.style.left = "0px";
    borderBottom.style.top = "0px";
  }
  targetElement.appendChild(borderBottom);
}
function getDOMElement(element2) {
  var domElement;
  if (!isNullOrUndefined(element2)) {
    if (typeof element2 === "string") {
      domElement = document.querySelector(element2);
    } else {
      domElement = element2;
    }
  }
  return domElement;
}
function wireEvents(args) {
  var context = args || this;
  var resizers = targetElement.querySelectorAll("." + RESIZE_HANDLER);
  for (var i = 0; i < resizers.length; i++) {
    selectedHandler = resizers[i];
    EventHandler.add(selectedHandler, "mousedown", onMouseDown, context);
    var eventName = Browser.info.name === "msie" ? "pointerdown" : "touchstart";
    EventHandler.add(selectedHandler, eventName, onTouchStart, context);
  }
  var borderResizers = targetElement.querySelectorAll(".e-dialog-border-resize");
  if (!isNullOrUndefined(borderResizers)) {
    for (var i = 0; i < borderResizers.length; i++) {
      selectedHandler = borderResizers[i];
      EventHandler.add(selectedHandler, "mousedown", onMouseDown, context);
      var eventName = Browser.info.name === "msie" ? "pointerdown" : "touchstart";
      EventHandler.add(selectedHandler, eventName, onTouchStart, context);
    }
  }
}
function getEventType(e) {
  return e.indexOf("mouse") > -1 ? "mouse" : "touch";
}
function onMouseDown(e) {
  e.preventDefault();
  targetElement = e.target.parentElement;
  calculateValues();
  originalMouseX = e.pageX;
  originalMouseY = e.pageY;
  e.target.classList.add(FOCUSED_HANDLER);
  if (!isNullOrUndefined(resizeStart)) {
    var proxy_1 = this;
    if (resizeStart(e, proxy_1) === true) {
      return;
    }
  }
  if (this.targetEle && targetElement && targetElement.querySelector("." + DIALOG_RESIZABLE)) {
    containerElement = this.target === "body" ? null : this.targetEle;
    maxWidth = this.targetEle.clientWidth;
    maxHeight = this.targetEle.clientHeight;
  }
  var target = isNullOrUndefined(containerElement) ? document : containerElement;
  EventHandler.add(target, "mousemove", onMouseMove, this);
  EventHandler.add(document, "mouseup", onMouseUp, this);
  for (var i = 0; i < RESTRICT_LEFT.length; i++) {
    if (targetElement.classList.contains(RESTRICT_LEFT[i])) {
      setLeft = false;
    } else {
      setLeft = true;
    }
  }
}
function onMouseUp(e) {
  var touchMoveEvent = Browser.info.name === "msie" ? "pointermove" : "touchmove";
  var touchEndEvent = Browser.info.name === "msie" ? "pointerup" : "touchend";
  var target = isNullOrUndefined(containerElement) ? document : containerElement;
  var eventName = Browser.info.name === "msie" ? "pointerdown" : "touchstart";
  EventHandler.remove(target, "mousemove", onMouseMove);
  EventHandler.remove(target, touchMoveEvent, onMouseMove);
  EventHandler.remove(target, eventName, onMouseMove);
  if (!isNullOrUndefined(document.body.querySelector("." + FOCUSED_HANDLER))) {
    document.body.querySelector("." + FOCUSED_HANDLER).classList.remove(FOCUSED_HANDLER);
  }
  if (!isNullOrUndefined(resizeEnd)) {
    var proxy_2 = this;
    resizeEnd(e, proxy_2);
  }
  EventHandler.remove(document, "mouseup", onMouseUp);
  EventHandler.remove(document, touchEndEvent, onMouseUp);
}
function calculateValues() {
  originalWidth = parseFloat(getComputedStyle(targetElement, null).getPropertyValue("width").replace("px", ""));
  originalHeight = parseFloat(getComputedStyle(targetElement, null).getPropertyValue("height").replace("px", ""));
  originalX = targetElement.getBoundingClientRect().left;
  originalY = targetElement.getBoundingClientRect().top;
}
function onTouchStart(e) {
  targetElement = e.target.parentElement;
  calculateValues();
  var dialogResizeElement = targetElement.classList.contains("e-dialog");
  if ((e.target.classList.contains(RESIZE_HANDLER) || e.target.classList.contains("e-dialog-border-resize")) && dialogResizeElement) {
    e.target.classList.add(FOCUSED_HANDLER);
  }
  var coordinates = e.touches ? e.changedTouches[0] : e;
  originalMouseX = coordinates.pageX;
  originalMouseY = coordinates.pageY;
  if (!isNullOrUndefined(resizeStart)) {
    var proxy_3 = this;
    if (resizeStart(e, proxy_3) === true) {
      return;
    }
  }
  var touchMoveEvent = Browser.info.name === "msie" ? "pointermove" : "touchmove";
  var touchEndEvent = Browser.info.name === "msie" ? "pointerup" : "touchend";
  var target = isNullOrUndefined(containerElement) ? document : containerElement;
  EventHandler.add(target, touchMoveEvent, onMouseMove, this);
  EventHandler.add(document, touchEndEvent, onMouseUp, this);
}
function onMouseMove(e) {
  if (e.target.classList.contains(RESIZE_HANDLER) && e.target.classList.contains(FOCUSED_HANDLER)) {
    selectedHandler = e.target;
  } else if (!isNullOrUndefined(document.body.querySelector("." + FOCUSED_HANDLER))) {
    selectedHandler = document.body.querySelector("." + FOCUSED_HANDLER);
  }
  if (!isNullOrUndefined(selectedHandler)) {
    var resizeTowards = "";
    for (var i = 0; i < elementClass.length; i++) {
      if (selectedHandler.classList.contains("e-" + elementClass[i])) {
        resizeTowards = elementClass[i];
      }
    }
    if (!isNullOrUndefined(resize)) {
      var proxy_4 = this;
      resize(e, proxy_4);
    }
    switch (resizeTowards) {
      case "south":
        resizeSouth(e);
        break;
      case "north":
        resizeNorth(e);
        break;
      case "west":
        resizeWest(e);
        break;
      case "east":
        resizeEast(e);
        break;
      case "south-east":
        resizeSouth(e);
        resizeEast(e);
        break;
      case "south-west":
        resizeSouth(e);
        resizeWest(e);
        break;
      case "north-east":
        resizeNorth(e);
        resizeEast(e);
        break;
      case "north-west":
        resizeNorth(e);
        resizeWest(e);
        break;
      default:
        break;
    }
  }
}
function getClientRectValues(element2) {
  return element2.getBoundingClientRect();
}
function resizeSouth(e) {
  var documentHeight = document.documentElement.clientHeight;
  var calculateValue = false;
  var coordinates = e.touches ? e.changedTouches[0] : e;
  var currentpageY = coordinates.pageY;
  var targetRectValues = getClientRectValues(targetElement);
  var containerRectValues;
  if (!isNullOrUndefined(containerElement)) {
    containerRectValues = getClientRectValues(containerElement);
  }
  if (!isNullOrUndefined(containerElement)) {
    calculateValue = true;
  } else if (isNullOrUndefined(containerElement) && (documentHeight - currentpageY >= 0 || targetRectValues.top < 0)) {
    calculateValue = true;
  }
  var calculatedHeight = originalHeight + (currentpageY - originalMouseY);
  calculatedHeight = calculatedHeight > minHeight ? calculatedHeight : minHeight;
  var containerTop = 0;
  if (!isNullOrUndefined(containerElement)) {
    containerTop = containerRectValues.top;
  }
  var borderValue = isNullOrUndefined(containerElement) ? 0 : containerElement.offsetHeight - containerElement.clientHeight;
  var topWithoutborder = targetRectValues.top - containerTop - borderValue / 2;
  topWithoutborder = topWithoutborder < 0 ? 0 : topWithoutborder;
  if (targetRectValues.top > 0 && topWithoutborder + calculatedHeight > maxHeight) {
    calculateValue = false;
    if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) {
      return;
    }
    targetElement.style.height = maxHeight - parseInt(topWithoutborder.toString(), 10) + "px";
    return;
  }
  var targetTop = 0;
  if (calculateValue) {
    if (targetRectValues.top < 0 && documentHeight + (targetRectValues.height + targetRectValues.top) > 0) {
      targetTop = targetRectValues.top;
      if (calculatedHeight + targetTop <= 30) {
        calculatedHeight = targetRectValues.height - (targetRectValues.height + targetRectValues.top) + 30;
      }
    }
    if (calculatedHeight + targetRectValues.top >= maxHeight) {
      targetElement.style.height = targetRectValues.height + (documentHeight - (targetRectValues.height + targetRectValues.top)) + "px";
    }
    var calculatedTop = isNullOrUndefined(containerElement) ? targetTop : topWithoutborder;
    if (calculatedHeight >= minHeight && calculatedHeight + calculatedTop <= maxHeight) {
      targetElement.style.height = calculatedHeight + "px";
    }
  }
}
function resizeNorth(e) {
  var calculateValue = false;
  var boundaryRectValues;
  var pageY = getEventType(e.type) === "mouse" ? e.pageY : e.touches[0].pageY;
  var targetRectValues = getClientRectValues(targetElement);
  if (!isNullOrUndefined(containerElement)) {
    boundaryRectValues = getClientRectValues(containerElement);
  }
  if (!isNullOrUndefined(containerElement) && targetRectValues.top - boundaryRectValues.top > 0) {
    calculateValue = true;
  } else if (isNullOrUndefined(containerElement) && pageY > 0) {
    calculateValue = true;
  }
  var currentHeight = originalHeight - (pageY - originalMouseY);
  if (calculateValue) {
    if (currentHeight >= minHeight && currentHeight <= maxHeight) {
      var containerTop = 0;
      if (!isNullOrUndefined(containerElement)) {
        containerTop = boundaryRectValues.top;
      }
      var top_1 = originalY - containerTop + (pageY - originalMouseY);
      top_1 = top_1 > 0 ? top_1 : 1;
      targetElement.style.height = currentHeight + "px";
      targetElement.style.top = top_1 + "px";
    }
  }
}
function resizeWest(e) {
  var documentWidth = document.documentElement.clientWidth;
  var calculateValue = false;
  var rectValues;
  if (!isNullOrUndefined(containerElement)) {
    rectValues = getClientRectValues(containerElement);
  }
  var pageX = getEventType(e.type) === "mouse" ? e.pageX : e.touches[0].pageX;
  var targetRectValues = getClientRectValues(targetElement);
  var borderValue = isNullOrUndefined(containerElement) ? 0 : containerElement.offsetWidth - containerElement.clientWidth;
  var left = isNullOrUndefined(containerElement) ? 0 : rectValues.left;
  var containerWidth = isNullOrUndefined(containerElement) ? 0 : rectValues.width;
  if (isNullOrUndefined(resizeWestWidth)) {
    if (!isNullOrUndefined(containerElement)) {
      resizeWestWidth = targetRectValues.left - left - borderValue / 2 + targetRectValues.width;
      resizeWestWidth = resizeWestWidth + (containerWidth - borderValue - resizeWestWidth);
    } else {
      resizeWestWidth = documentWidth;
    }
  }
  if (!isNullOrUndefined(containerElement) && Math.floor(targetRectValues.left - rectValues.left + targetRectValues.width + (rectValues.right - targetRectValues.right)) - borderValue <= maxWidth) {
    calculateValue = true;
  } else if (isNullOrUndefined(containerElement) && pageX >= 0) {
    calculateValue = true;
  }
  var calculatedWidth = originalWidth - (pageX - originalMouseX);
  if (setLeft) {
    calculatedWidth = calculatedWidth > resizeWestWidth ? resizeWestWidth : calculatedWidth;
  }
  if (calculateValue) {
    if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
      var containerLeft = 0;
      if (!isNullOrUndefined(containerElement)) {
        containerLeft = rectValues.left;
      }
      var left_1 = originalX - containerLeft + (pageX - originalMouseX);
      left_1 = left_1 > 0 ? left_1 : 1;
      if (calculatedWidth !== previousWidth && setWidth) {
        targetElement.style.width = calculatedWidth + "px";
      }
      if (setLeft) {
        targetElement.style.left = left_1 + "px";
        if (left_1 === 1) {
          setWidth = false;
        } else {
          setWidth = true;
        }
      }
    }
  }
  previousWidth = calculatedWidth;
}
function resizeEast(e) {
  var documentWidth = document.documentElement.clientWidth;
  var calculateValue = false;
  var containerRectValues;
  if (!isNullOrUndefined(containerElement)) {
    containerRectValues = getClientRectValues(containerElement);
  }
  var coordinates = e.touches ? e.changedTouches[0] : e;
  var pageX = coordinates.pageX;
  var targetRectValues = getClientRectValues(targetElement);
  if (!isNullOrUndefined(containerElement) && (targetRectValues.left - containerRectValues.left + targetRectValues.width <= maxWidth || targetRectValues.right - containerRectValues.left >= targetRectValues.width)) {
    calculateValue = true;
  } else if (isNullOrUndefined(containerElement) && documentWidth - pageX > 0) {
    calculateValue = true;
  }
  var calculatedWidth = originalWidth + (pageX - originalMouseX);
  var containerLeft = 0;
  if (!isNullOrUndefined(containerElement)) {
    containerLeft = containerRectValues.left;
  }
  if (targetRectValues.left - containerLeft + calculatedWidth > maxWidth) {
    calculateValue = false;
    if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) {
      return;
    }
    targetElement.style.width = maxWidth - (targetRectValues.left - containerLeft) + "px";
  }
  if (calculateValue) {
    if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
      targetElement.style.width = calculatedWidth + "px";
    }
  }
}
function setMinHeight(minimumHeight) {
  minHeight = minimumHeight;
}
function setMaxWidth(value) {
  maxWidth = value;
}
function setMaxHeight(value) {
  maxHeight = value;
}
function removeResize() {
  var handlers = targetElement.querySelectorAll("." + RESIZE_HANDLER);
  for (var i = 0; i < handlers.length; i++) {
    detach(handlers[i]);
  }
  var borderResizers = targetElement.querySelectorAll(".e-dialog-border-resize");
  if (!isNullOrUndefined(borderResizers)) {
    for (var i = 0; i < borderResizers.length; i++) {
      detach(borderResizers[i]);
    }
  }
}

// node_modules/@syncfusion/ej2-popups/src/dialog/dialog.js
var __extends15 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ButtonProps = (
  /** @class */
  function(_super) {
    __extends15(ButtonProps2, _super);
    function ButtonProps2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate15([Property(true)], ButtonProps2.prototype, "isFlat", void 0);
    __decorate15([Property()], ButtonProps2.prototype, "buttonModel", void 0);
    __decorate15([Property("Button")], ButtonProps2.prototype, "type", void 0);
    __decorate15([Event2()], ButtonProps2.prototype, "click", void 0);
    return ButtonProps2;
  }(ChildProperty)
);
var AnimationSettings = (
  /** @class */
  function(_super) {
    __extends15(AnimationSettings2, _super);
    function AnimationSettings2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate15([Property("Fade")], AnimationSettings2.prototype, "effect", void 0);
    __decorate15([Property(400)], AnimationSettings2.prototype, "duration", void 0);
    __decorate15([Property(0)], AnimationSettings2.prototype, "delay", void 0);
    return AnimationSettings2;
  }(ChildProperty)
);
var ROOT = "e-dialog";
var RTL4 = "e-rtl";
var DLG_HEADER_CONTENT = "e-dlg-header-content";
var DLG_HEADER = "e-dlg-header";
var DLG_FOOTER_CONTENT = "e-footer-content";
var MODAL_DLG = "e-dlg-modal";
var DLG_CONTENT = "e-dlg-content";
var DLG_CLOSE_ICON = "e-icon-dlg-close";
var DLG_OVERLAY = "e-dlg-overlay";
var DLG_TARGET = "e-dlg-target";
var DLG_CONTAINER = "e-dlg-container";
var SCROLL_DISABLED = "e-scroll-disabled";
var DLG_PRIMARY_BUTTON = "e-primary";
var ICON = "e-icons";
var POPUP_ROOT = "e-popup";
var DEVICE = "e-device";
var FULLSCREEN = "e-dlg-fullscreen";
var DLG_CLOSE_ICON_BTN = "e-dlg-closeicon-btn";
var DLG_HIDE = "e-popup-close";
var DLG_SHOW = "e-popup-open";
var DLG_UTIL_DEFAULT_TITLE = "Information";
var DLG_UTIL_ROOT = "e-scroll-disabled";
var DLG_UTIL_ALERT = "e-alert-dialog";
var DLG_UTIL_CONFIRM = "e-confirm-dialog";
var DLG_RESIZABLE = "e-dlg-resizable";
var DLG_RESTRICT_LEFT_VALUE = "e-restrict-left";
var DLG_RESTRICT_WIDTH_VALUE = "e-resize-viewport";
var DLG_REF_ELEMENT = "e-dlg-ref-element";
var DLG_USER_ACTION_CLOSED = "user action";
var DLG_CLOSE_ICON_CLOSED = "close icon";
var DLG_ESCAPE_CLOSED = "escape";
var DLG_OVERLAYCLICK_CLOSED = "overlayClick";
var DLG_DRAG = "e-draggable";
var Dialog = (
  /** @class */
  function(_super) {
    __extends15(Dialog2, _super);
    function Dialog2(options, element2) {
      var _this = _super.call(this, options, element2) || this;
      _this.needsID = true;
      return _this;
    }
    Dialog2.prototype.render = function() {
      this.initialize();
      this.initRender();
      this.wireEvents();
      if (this.width === "100%") {
        this.element.style.width = "";
      }
      if (this.minHeight !== "") {
        this.element.style.minHeight = formatUnit(this.minHeight);
      }
      if (this.enableResize) {
        this.setResize();
        if (this.animationSettings.effect === "None") {
          this.getMinHeight();
        }
      }
      this.renderComplete();
    };
    Dialog2.prototype.initializeValue = function() {
      this.dlgClosedBy = DLG_USER_ACTION_CLOSED;
    };
    Dialog2.prototype.preRender = function() {
      var _this = this;
      this.initializeValue();
      this.headerContent = null;
      this.allowMaxHeight = true;
      this.preventVisibility = true;
      this.clonedEle = this.element.cloneNode(true);
      this.closeIconClickEventHandler = function(event) {
        _this.dlgClosedBy = DLG_CLOSE_ICON_CLOSED;
        _this.hide(event);
      };
      this.dlgOverlayClickEventHandler = function(event) {
        _this.dlgClosedBy = DLG_OVERLAYCLICK_CLOSED;
        event.preventFocus = false;
        _this.trigger("overlayClick", event, function(overlayClickEventArgs) {
          if (!overlayClickEventArgs.preventFocus) {
            _this.focusContent();
          }
          _this.dlgClosedBy = DLG_USER_ACTION_CLOSED;
        });
      };
      var localeText = {
        close: "Close"
      };
      this.l10n = new L10n("dialog", localeText, this.locale);
      this.checkPositionData();
      if (isNullOrUndefined(this.target)) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.target = document.body;
        this.isProtectedOnChange = prevOnChange;
      }
    };
    Dialog2.prototype.updatePersistData = function() {
      if (this.enablePersistence) {
        this.setProperties({
          width: parseFloat(this.element.style.width),
          height: parseFloat(this.element.style.height),
          position: {
            X: parseFloat(this.dragObj.element.style.left),
            Y: parseFloat(this.dragObj.element.style.top)
          }
        }, true);
      }
    };
    Dialog2.prototype.isNumberValue = function(value) {
      var isNumber = /^[-+]?\d*\.?\d+$/.test(value);
      return isNumber;
    };
    Dialog2.prototype.checkPositionData = function() {
      if (!isNullOrUndefined(this.position)) {
        if (!isNullOrUndefined(this.position.X) && typeof this.position.X !== "number") {
          var isNumber = this.isNumberValue(this.position.X);
          if (isNumber) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.position.X = parseFloat(this.position.X);
            this.isProtectedOnChange = prevOnChange;
          }
        }
        if (!isNullOrUndefined(this.position.Y) && typeof this.position.Y !== "number") {
          var isNumber = this.isNumberValue(this.position.Y);
          if (isNumber) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.position.Y = parseFloat(this.position.Y);
            this.isProtectedOnChange = prevOnChange;
          }
        }
      }
    };
    Dialog2.prototype.getEle = function(list, selector) {
      var element2 = void 0;
      for (var i = 0; i < list.length; i++) {
        if (list[i].classList.contains(selector)) {
          element2 = list[i];
          break;
        }
      }
      return element2;
    };
    Dialog2.prototype.getMinHeight = function() {
      var computedHeaderHeight = "0px";
      var computedFooterHeight = "0px";
      if (!isNullOrUndefined(this.element.querySelector("." + DLG_HEADER_CONTENT))) {
        computedHeaderHeight = getComputedStyle(this.headerContent).height;
      }
      var footerEle = this.getEle(this.element.children, DLG_FOOTER_CONTENT);
      if (!isNullOrUndefined(footerEle)) {
        computedFooterHeight = getComputedStyle(footerEle).height;
      }
      var headerHeight = parseInt(computedHeaderHeight.slice(0, computedHeaderHeight.indexOf("p")), 10);
      var footerHeight = parseInt(computedFooterHeight.slice(0, computedFooterHeight.indexOf("p")), 10);
      setMinHeight(headerHeight + 30 + (isNaN(footerHeight) ? 0 : footerHeight));
      return headerHeight + 30 + footerHeight;
    };
    Dialog2.prototype.onResizeStart = function(args, dialogObj) {
      dialogObj.trigger("resizeStart", args);
      return args.cancel;
    };
    Dialog2.prototype.onResizing = function(args, dialogObj) {
      dialogObj.trigger("resizing", args);
    };
    Dialog2.prototype.onResizeComplete = function(args, dialogObj) {
      dialogObj.trigger("resizeStop", args);
      this.updatePersistData();
    };
    Dialog2.prototype.setResize = function() {
      if (this.enableResize) {
        if (this.isBlazorServerRender() && !isNullOrUndefined(this.element.querySelector(".e-icons.e-resize-handle"))) {
          return;
        }
        this.element.classList.add(DLG_RESIZABLE);
        var computedHeight = getComputedStyle(this.element).minHeight;
        var computedWidth = getComputedStyle(this.element).minWidth;
        var direction = "";
        for (var i = 0; i < this.resizeHandles.length; i++) {
          if (this.resizeHandles[i] === "All") {
            direction = "south north east west north-east north-west south-east south-west";
            break;
          } else {
            var directionValue = "";
            switch (this.resizeHandles[i].toString()) {
              case "SouthEast":
                directionValue = "south-east";
                break;
              case "SouthWest":
                directionValue = "south-west";
                break;
              case "NorthEast":
                directionValue = "north-east";
                break;
              case "NorthWest":
                directionValue = "north-west";
                break;
              default:
                directionValue = this.resizeHandles[i].toString();
                break;
            }
            direction += directionValue.toLocaleLowerCase() + " ";
          }
        }
        if (this.enableRtl && direction.trim() === "south-east") {
          direction = "south-west";
        } else if (this.enableRtl && direction.trim() === "south-west") {
          direction = "south-east";
        }
        if (this.isModal && this.enableRtl) {
          this.element.classList.add(DLG_RESTRICT_LEFT_VALUE);
        } else if (this.isModal && this.target === document.body) {
          this.element.classList.add(DLG_RESTRICT_WIDTH_VALUE);
        }
        createResize({
          element: this.element,
          direction,
          minHeight: parseInt(computedHeight.slice(0, computedWidth.indexOf("p")), 10),
          maxHeight: this.targetEle.clientHeight,
          minWidth: parseInt(computedWidth.slice(0, computedWidth.indexOf("p")), 10),
          maxWidth: this.targetEle.clientWidth,
          boundary: this.target === document.body ? null : this.targetEle,
          resizeBegin: this.onResizeStart.bind(this),
          resizeComplete: this.onResizeComplete.bind(this),
          resizing: this.onResizing.bind(this),
          proxy: this
        });
        this.wireWindowResizeEvent();
      } else {
        removeResize();
        this.unWireWindowResizeEvent();
        if (this.isModal) {
          this.element.classList.remove(DLG_RESTRICT_LEFT_VALUE);
        } else {
          this.element.classList.remove(DLG_RESTRICT_WIDTH_VALUE);
        }
        this.element.classList.remove(DLG_RESIZABLE);
      }
    };
    Dialog2.prototype.getFocusElement = function(target) {
      var value = 'input,select,textarea,button:enabled,a,[contenteditable="true"],[tabindex]';
      var items = target.querySelectorAll(value);
      return {
        element: items[items.length - 1]
      };
    };
    Dialog2.prototype.keyDown = function(event) {
      var _this = this;
      if (event.keyCode === 9) {
        if (this.isModal) {
          var buttonObj = void 0;
          if (!isNullOrUndefined(this.btnObj)) {
            buttonObj = this.btnObj[this.btnObj.length - 1];
          }
          if (isNullOrUndefined(this.btnObj) && !isNullOrUndefined(this.ftrTemplateContent)) {
            buttonObj = this.getFocusElement(this.ftrTemplateContent);
          }
          if (isNullOrUndefined(this.btnObj) && isNullOrUndefined(this.ftrTemplateContent) && !isNullOrUndefined(this.contentEle)) {
            buttonObj = this.getFocusElement(this.contentEle);
          }
          if (!isNullOrUndefined(buttonObj) && document.activeElement === buttonObj.element && !event.shiftKey) {
            event.preventDefault();
            this.focusableElements(this.element).focus();
          }
          if (document.activeElement === this.focusableElements(this.element) && event.shiftKey) {
            event.preventDefault();
            if (!isNullOrUndefined(buttonObj)) {
              buttonObj.element.focus();
            }
          }
        }
      }
      var element2 = document.activeElement;
      var isTagName = ["input", "textarea"].indexOf(element2.tagName.toLowerCase()) > -1;
      var isContentEdit = false;
      if (!isTagName) {
        isContentEdit = element2.hasAttribute("contenteditable") && element2.getAttribute("contenteditable") === "true";
      }
      if (event.keyCode === 27 && this.closeOnEscape) {
        this.dlgClosedBy = DLG_ESCAPE_CLOSED;
        var query = document.querySelector(".e-popup-open:not(.e-dialog)");
        if (!(!isNullOrUndefined(query) && !query.classList.contains("e-toolbar-pop"))) {
          this.hide(event);
        }
      }
      if (event.keyCode === 13 && !event.ctrlKey && element2.tagName.toLowerCase() !== "textarea" && isTagName && !isNullOrUndefined(this.primaryButtonEle) || event.keyCode === 13 && event.ctrlKey && (element2.tagName.toLowerCase() === "textarea" || isContentEdit) && !isNullOrUndefined(this.primaryButtonEle)) {
        var buttonIndex_1;
        var firstPrimary = this.buttons.some(function(data, index) {
          buttonIndex_1 = index;
          var buttonModel = data.buttonModel;
          return !isNullOrUndefined(buttonModel) && buttonModel.isPrimary === true;
        });
        if (firstPrimary && typeof this.buttons[buttonIndex_1].click === "function") {
          setTimeout(function() {
            _this.buttons[buttonIndex_1].click.call(_this, event);
          });
        }
      }
    };
    Dialog2.prototype.initialize = function() {
      if (!isNullOrUndefined(this.target)) {
        this.targetEle = typeof this.target === "string" ? document.querySelector(this.target) : this.target;
      }
      if (!this.isBlazorServerRender()) {
        addClass([this.element], ROOT);
      }
      if (Browser.isDevice) {
        addClass([this.element], DEVICE);
      }
      if (!this.isBlazorServerRender()) {
        this.setCSSClass();
      }
      this.setMaxHeight();
    };
    Dialog2.prototype.initRender = function() {
      var _this = this;
      this.initialRender = true;
      if (!this.isBlazorServerRender()) {
        attributes(this.element, {
          role: "dialog"
        });
      }
      if (this.zIndex === 1e3) {
        this.setzIndex(this.element, false);
        this.calculatezIndex = true;
      } else {
        this.calculatezIndex = false;
      }
      if (this.isBlazorServerRender() && isNullOrUndefined(this.headerContent)) {
        this.headerContent = this.element.getElementsByClassName("e-dlg-header-content")[0];
      }
      if (this.isBlazorServerRender() && isNullOrUndefined(this.contentEle)) {
        this.contentEle = this.element.querySelector("#" + this.element.id + "_dialog-content");
      }
      if (!this.isBlazorServerRender()) {
        this.setTargetContent();
        if (this.header !== "" && !isNullOrUndefined(this.header)) {
          this.setHeader();
        }
        this.renderCloseIcon();
        this.setContent();
        if (this.footerTemplate !== "" && !isNullOrUndefined(this.footerTemplate)) {
          this.setFooterTemplate();
        } else if (!isNullOrUndefined(this.buttons[0].buttonModel)) {
          this.setButton();
        }
      }
      if (this.isBlazorServerRender()) {
        if (!isNullOrUndefined(this.buttons[0].buttonModel) && this.footerTemplate === "") {
          this.setButton();
        }
      }
      if (this.allowDragging && !isNullOrUndefined(this.headerContent)) {
        this.setAllowDragging();
      }
      if (!this.isBlazorServerRender()) {
        attributes(this.element, {
          "aria-modal": this.isModal ? "true" : "false"
        });
        if (this.isModal) {
          this.setIsModal();
        }
      }
      if (this.isBlazorServerRender() && isNullOrUndefined(this.dlgContainer)) {
        this.dlgContainer = this.element.parentElement;
        for (var i = 0, childNodes = this.dlgContainer.children; i < childNodes.length; i++) {
          if (childNodes[i].classList.contains("e-dlg-overlay")) {
            this.dlgOverlay = childNodes[i];
          }
        }
      }
      if (this.element.classList.contains(DLG_UTIL_ALERT) !== true && this.element.classList.contains(DLG_UTIL_CONFIRM) !== true && !isNullOrUndefined(this.element.parentElement)) {
        var parentEle = this.isModal ? this.dlgContainer.parentElement : this.element.parentElement;
        this.refElement = this.createElement("div", {
          className: DLG_REF_ELEMENT
        });
        parentEle.insertBefore(this.refElement, this.isModal ? this.dlgContainer : this.element);
      }
      if (!isNullOrUndefined(this.targetEle)) {
        if (this.isModal) {
          this.targetEle.appendChild(this.dlgContainer);
        } else {
          this.targetEle.appendChild(this.element);
        }
      }
      this.popupObj = new Popup(this.element, {
        height: this.height,
        width: this.width,
        zIndex: this.zIndex,
        relateTo: this.target,
        actionOnScroll: "none",
        enableRtl: this.enableRtl,
        // eslint-disable-next-line
        open: function(event) {
          var eventArgs = {
            container: _this.isModal ? _this.dlgContainer : _this.element,
            element: _this.element,
            target: _this.target,
            preventFocus: false
          };
          if (_this.enableResize) {
            _this.resetResizeIcon();
          }
          _this.trigger("open", eventArgs, function(openEventArgs) {
            if (!openEventArgs.preventFocus) {
              _this.focusContent();
            }
          });
        },
        // eslint-disable-next-line
        close: function(event) {
          if (_this.isModal) {
            addClass([_this.dlgOverlay], "e-fade");
          }
          _this.unBindEvent(_this.element);
          if (_this.isModal) {
            _this.dlgContainer.style.display = "none";
          }
          _this.trigger("close", _this.closeArgs);
          var activeEle = document.activeElement;
          if (!isNullOrUndefined(activeEle) && !isNullOrUndefined(activeEle.blur)) {
            activeEle.blur();
          }
          if (!isNullOrUndefined(_this.storeActiveElement) && !isNullOrUndefined(_this.storeActiveElement.focus)) {
            _this.storeActiveElement.focus();
          }
        }
      });
      this.positionChange();
      this.setEnableRTL();
      if (!this.isBlazorServerRender()) {
        addClass([this.element], DLG_HIDE);
        if (this.isModal) {
          this.setOverlayZindex();
        }
      }
      if (this.visible) {
        this.show();
        if (this.isModal) {
          var targetType = this.getTargetContainer(this.target);
          if (targetType instanceof Element) {
            var computedStyle = window.getComputedStyle(targetType);
            if (computedStyle.getPropertyValue("direction") === "rtl") {
              this.setPopupPosition();
            }
          }
        }
      } else {
        if (this.isModal) {
          this.dlgOverlay.style.display = "none";
        }
      }
      this.initialRender = false;
    };
    Dialog2.prototype.getTargetContainer = function(targetValue) {
      var targetElement2 = null;
      if (typeof targetValue === "string") {
        if (targetValue.startsWith("#")) {
          targetElement2 = document.getElementById(targetValue.substring(1));
        } else if (targetValue.startsWith(".")) {
          var elements = document.getElementsByClassName(targetValue.substring(1));
          targetElement2 = elements.length > 0 ? elements[0] : null;
        } else {
          if (!(targetValue instanceof HTMLElement) && targetValue !== document.body) {
            targetElement2 = document.querySelector(targetValue);
          }
        }
      } else if (targetValue instanceof HTMLElement) {
        targetElement2 = targetValue;
      }
      return targetElement2;
    };
    Dialog2.prototype.resetResizeIcon = function() {
      var dialogConHeight = this.getMinHeight();
      if (this.targetEle.offsetHeight < dialogConHeight) {
        var className = this.enableRtl ? "e-south-west" : "e-south-east";
        var resizeIcon = this.element.querySelector("." + className);
        if (!isNullOrUndefined(resizeIcon)) {
          resizeIcon.style.bottom = "-" + dialogConHeight.toString() + "px";
        }
      }
    };
    Dialog2.prototype.setOverlayZindex = function(zIndexValue) {
      var zIndex;
      if (isNullOrUndefined(zIndexValue)) {
        zIndex = parseInt(this.element.style.zIndex, 10) ? parseInt(this.element.style.zIndex, 10) : this.zIndex;
      } else {
        zIndex = zIndexValue;
      }
      this.dlgOverlay.style.zIndex = (zIndex - 1).toString();
      this.dlgContainer.style.zIndex = zIndex.toString();
    };
    Dialog2.prototype.positionChange = function() {
      if (this.isModal) {
        if (!isNaN(parseFloat(this.position.X)) && !isNaN(parseFloat(this.position.Y))) {
          this.setPopupPosition();
        } else if (!isNaN(parseFloat(this.position.X)) && isNaN(parseFloat(this.position.Y)) || isNaN(parseFloat(this.position.X)) && !isNaN(parseFloat(this.position.Y))) {
          this.setPopupPosition();
        } else {
          this.element.style.top = "0px";
          this.element.style.left = "0px";
          this.dlgContainer.classList.add("e-dlg-" + this.position.X + "-" + this.position.Y);
        }
      } else {
        this.setPopupPosition();
      }
    };
    Dialog2.prototype.setPopupPosition = function() {
      this.popupObj.setProperties({
        position: {
          X: this.position.X,
          Y: this.position.Y
        }
      });
    };
    Dialog2.prototype.setAllowDragging = function() {
      var _this = this;
      var handleContent = "." + DLG_HEADER_CONTENT;
      if (!this.element.classList.contains(DLG_DRAG)) {
        this.dragObj = new Draggable(this.element, {
          clone: false,
          isDragScroll: true,
          abort: ".e-dlg-closeicon-btn",
          handle: handleContent,
          dragStart: function(event) {
            _this.trigger("dragStart", event, function(dragEventArgs) {
              if (isBlazor()) {
                dragEventArgs.bindEvents(event.dragElement);
              }
            });
          },
          dragStop: function(event) {
            if (_this.isModal) {
              _this.IsDragStop = true;
              if (!isNullOrUndefined(_this.position)) {
                _this.dlgContainer.classList.remove("e-dlg-" + _this.position.X + "-" + _this.position.Y);
              }
              var targetType = _this.getTargetContainer(_this.target);
              if (targetType instanceof Element) {
                var computedStyle = window.getComputedStyle(targetType);
                if (computedStyle.getPropertyValue("direction") === "rtl") {
                  _this.element.style.position = "absolute";
                } else {
                  _this.element.style.position = "relative";
                }
              } else {
                _this.element.style.position = "relative";
              }
            }
            _this.trigger("dragStop", event);
            _this.element.classList.remove(DLG_RESTRICT_LEFT_VALUE);
            _this.updatePersistData();
          },
          drag: function(event) {
            _this.trigger("drag", event);
          }
        });
        if (!isNullOrUndefined(this.targetEle)) {
          this.dragObj.dragArea = this.targetEle;
        }
      }
    };
    Dialog2.prototype.setButton = function() {
      if (!this.isBlazorServerRender()) {
        this.buttonContent = [];
        this.btnObj = [];
        for (var i = 0; i < this.buttons.length; i++) {
          var buttonType = !isNullOrUndefined(this.buttons[i].type) ? this.buttons[i].type.toLowerCase() : "button";
          var btn = this.createElement("button", {
            className: this.cssClass,
            attrs: {
              type: buttonType
            }
          });
          this.buttonContent.push(btn.outerHTML);
        }
        this.setFooterTemplate();
      }
      var footerBtn;
      for (var i = 0, childNodes = this.element.children; i < childNodes.length; i++) {
        if (childNodes[i].classList.contains(DLG_FOOTER_CONTENT)) {
          footerBtn = childNodes[i].querySelectorAll("button");
        }
      }
      for (var i = 0; i < this.buttons.length; i++) {
        if (!this.isBlazorServerRender()) {
          this.btnObj[i] = new Button(this.buttons[i].buttonModel);
        }
        if (this.isBlazorServerRender()) {
          this.ftrTemplateContent = this.element.querySelector("." + DLG_FOOTER_CONTENT);
        }
        if (!isNullOrUndefined(this.ftrTemplateContent) && footerBtn.length > 0) {
          if (typeof this.buttons[i].click === "function") {
            EventHandler.add(footerBtn[i], "click", this.buttons[i].click, this);
          }
          if (typeof this.buttons[i].click === "object") {
            EventHandler.add(footerBtn[i], "click", this.buttonClickHandler.bind(this, i), this);
          }
        }
        if (!this.isBlazorServerRender() && !isNullOrUndefined(this.ftrTemplateContent)) {
          this.btnObj[i].appendTo(this.ftrTemplateContent.children[i]);
          if (this.buttons[i].isFlat) {
            this.btnObj[i].element.classList.add("e-flat");
          }
          this.primaryButtonEle = this.element.getElementsByClassName("e-primary")[0];
        }
      }
    };
    Dialog2.prototype.buttonClickHandler = function(index) {
      this.trigger("buttons[" + index + "].click", {});
    };
    Dialog2.prototype.setContent = function() {
      this.contentEle = this.createElement("div", {
        className: DLG_CONTENT,
        id: this.element.id + "_dialog-content"
      });
      if (this.headerEle) {
        attributes(this.element, {
          "aria-describedby": this.element.id + "_title " + this.element.id + "_dialog-content"
        });
      } else {
        attributes(this.element, {
          "aria-describedby": this.element.id + "_dialog-content"
        });
      }
      if (this.innerContentElement) {
        this.contentEle.appendChild(this.innerContentElement);
      } else if (!isNullOrUndefined(this.content) && this.content !== "" || !this.initialRender) {
        if (typeof this.content === "string" && !isBlazor()) {
          this.setTemplate(this.content, this.contentEle, "content");
        } else if (this.content instanceof HTMLElement) {
          this.contentEle.appendChild(this.content);
        } else {
          this.setTemplate(this.content, this.contentEle, "content");
        }
      }
      if (!isNullOrUndefined(this.headerContent)) {
        this.element.insertBefore(this.contentEle, this.element.children[1]);
      } else {
        this.element.insertBefore(this.contentEle, this.element.children[0]);
      }
      if (this.height === "auto") {
        if (!this.isBlazorServerRender() && Browser.isIE && this.element.style.width === "" && !isNullOrUndefined(this.width)) {
          this.element.style.width = formatUnit(this.width);
        }
        this.setMaxHeight();
      }
    };
    Dialog2.prototype.setTemplate = function(template, toElement, prop) {
      var templateFn;
      var templateProps;
      if (toElement.classList.contains(DLG_HEADER)) {
        templateProps = this.element.id + "header";
      } else if (toElement.classList.contains(DLG_FOOTER_CONTENT)) {
        templateProps = this.element.id + "footerTemplate";
      } else {
        templateProps = this.element.id + "content";
      }
      var templateValue;
      if (!isNullOrUndefined(template.outerHTML)) {
        toElement.appendChild(template);
      } else if (typeof template === "string" || typeof template !== "string" || isBlazor() && !this.isStringTemplate) {
        if (typeof template === "string") {
          template = this.sanitizeHelper(template);
        }
        if (this.isVue || typeof template !== "string") {
          templateFn = compile2(template);
          templateValue = template;
        } else {
          toElement.innerHTML = template;
        }
      }
      var fromElements = [];
      if (!isNullOrUndefined(templateFn)) {
        var isString = isBlazor() && !this.isStringTemplate && templateValue.indexOf("<div>Blazor") === 0 ? this.isStringTemplate : true;
        for (var _i = 0, _a = templateFn({}, this, prop, templateProps, isString); _i < _a.length; _i++) {
          var item = _a[_i];
          fromElements.push(item);
        }
        append([].slice.call(fromElements), toElement);
      }
    };
    Dialog2.prototype.sanitizeHelper = function(value) {
      if (this.enableHtmlSanitizer) {
        var dialogItem = SanitizeHtmlHelper.beforeSanitize();
        var beforeEvent = {
          cancel: false,
          helper: null
        };
        extend(dialogItem, dialogItem, beforeEvent);
        this.trigger("beforeSanitizeHtml", dialogItem);
        if (dialogItem.cancel && !isNullOrUndefined(dialogItem.helper)) {
          value = dialogItem.helper(value);
        } else if (!dialogItem.cancel) {
          value = SanitizeHtmlHelper.serializeValue(dialogItem, value);
        }
      }
      return value;
    };
    Dialog2.prototype.setMaxHeight = function() {
      if (!this.allowMaxHeight) {
        return;
      }
      var display = this.element.style.display;
      this.element.style.display = "none";
      this.element.style.maxHeight = !isNullOrUndefined(this.target) && this.targetEle.offsetHeight < window.innerHeight ? this.targetEle.offsetHeight - 20 + "px" : window.innerHeight - 20 + "px";
      this.element.style.display = display;
      if (Browser.isIE && this.height === "auto" && !isNullOrUndefined(this.contentEle) && this.element.offsetHeight < this.contentEle.offsetHeight) {
        this.element.style.height = "inherit";
      }
    };
    Dialog2.prototype.setEnableRTL = function() {
      if (!this.isBlazorServerRender()) {
        if (this.enableRtl) {
          addClass([this.element], RTL4);
        } else {
          removeClass([this.element], RTL4);
        }
      }
      if (!isNullOrUndefined(this.element.querySelector(".e-resize-handle"))) {
        removeResize();
        this.setResize();
      }
    };
    Dialog2.prototype.setTargetContent = function() {
      var _this = this;
      if (isNullOrUndefined(this.content) || this.content === "") {
        var isContent = this.element.innerHTML.replace(/\s|<(\/?|\/?)(!--!--)>/g, "") !== "";
        if (this.element.children.length > 0 || isContent) {
          this.innerContentElement = document.createDocumentFragment();
          [].slice.call(this.element.childNodes).forEach(function(el) {
            if (el.nodeType !== 8) {
              _this.innerContentElement.appendChild(el);
            }
          });
        }
      }
    };
    Dialog2.prototype.setHeader = function() {
      if (this.headerEle) {
        this.headerEle.innerHTML = "";
      } else {
        this.headerEle = this.createElement("div", {
          id: this.element.id + "_title",
          className: DLG_HEADER
        });
      }
      this.createHeaderContent();
      this.headerContent.appendChild(this.headerEle);
      this.setTemplate(this.header, this.headerEle, "header");
      attributes(this.element, {
        "aria-describedby": this.element.id + "_title"
      });
      attributes(this.element, {
        "aria-label": "dialog"
      });
      this.element.insertBefore(this.headerContent, this.element.children[0]);
      if (this.allowDragging && !isNullOrUndefined(this.headerContent)) {
        this.setAllowDragging();
      }
    };
    Dialog2.prototype.setFooterTemplate = function() {
      if (this.ftrTemplateContent) {
        this.ftrTemplateContent.innerHTML = "";
      } else {
        this.ftrTemplateContent = this.createElement("div", {
          className: DLG_FOOTER_CONTENT
        });
      }
      if (this.footerTemplate !== "" && !isNullOrUndefined(this.footerTemplate)) {
        this.setTemplate(this.footerTemplate, this.ftrTemplateContent, "footerTemplate");
      } else {
        this.ftrTemplateContent.innerHTML = this.buttonContent.join("");
      }
      this.element.appendChild(this.ftrTemplateContent);
    };
    Dialog2.prototype.createHeaderContent = function() {
      if (isNullOrUndefined(this.headerContent)) {
        this.headerContent = this.createElement("div", {
          id: this.element.id + "_dialog-header",
          className: DLG_HEADER_CONTENT
        });
      }
    };
    Dialog2.prototype.renderCloseIcon = function() {
      if (this.showCloseIcon) {
        this.closeIcon = this.createElement("button", {
          className: DLG_CLOSE_ICON_BTN,
          attrs: {
            type: "button"
          }
        });
        this.closeIconBtnObj = new Button({
          cssClass: "e-flat",
          iconCss: DLG_CLOSE_ICON + " " + ICON
        });
        this.closeIconTitle();
        if (!isNullOrUndefined(this.headerContent)) {
          prepend([this.closeIcon], this.headerContent);
        } else {
          this.createHeaderContent();
          prepend([this.closeIcon], this.headerContent);
          this.element.insertBefore(this.headerContent, this.element.children[0]);
        }
        this.closeIconBtnObj.appendTo(this.closeIcon);
      }
    };
    Dialog2.prototype.closeIconTitle = function() {
      this.l10n.setLocale(this.locale);
      var closeIconTitle = this.l10n.getConstant("close");
      this.closeIcon.setAttribute("title", closeIconTitle);
      this.closeIcon.setAttribute("aria-label", closeIconTitle);
    };
    Dialog2.prototype.setCSSClass = function(oldCSSClass) {
      if (oldCSSClass) {
        removeClass([this.element], oldCSSClass.split(" "));
        if (this.isModal && !isNullOrUndefined(this.dlgContainer)) {
          removeClass([this.dlgContainer], oldCSSClass.split(" "));
        }
      }
      if (this.cssClass) {
        addClass([this.element], this.cssClass.split(" "));
        if (this.isModal && !isNullOrUndefined(this.dlgContainer)) {
          addClass([this.dlgContainer], this.cssClass.split(" "));
        }
      }
    };
    Dialog2.prototype.setIsModal = function() {
      this.dlgContainer = this.createElement("div", {
        className: DLG_CONTAINER
      });
      this.setCSSClass();
      this.element.classList.remove(DLG_SHOW);
      this.element.parentNode.insertBefore(this.dlgContainer, this.element);
      this.dlgContainer.appendChild(this.element);
      addClass([this.element], MODAL_DLG);
      this.dlgOverlay = this.createElement("div", {
        className: DLG_OVERLAY
      });
      this.dlgOverlay.style.zIndex = (this.zIndex - 1).toString();
      this.dlgContainer.appendChild(this.dlgOverlay);
    };
    Dialog2.prototype.getValidFocusNode = function(items) {
      var node;
      for (var u = 0; u < items.length; u++) {
        node = items[u];
        if ((node.clientHeight > 0 || node.tagName.toLowerCase() === "a" && node.hasAttribute("href")) && node.tabIndex > -1 && !node.disabled && !this.disableElement(node, '[disabled],[aria-disabled="true"],[type="hidden"]')) {
          return node;
        } else {
          node = null;
        }
      }
      return node;
    };
    Dialog2.prototype.focusableElements = function(content) {
      if (!isNullOrUndefined(content)) {
        var value = 'input,select,textarea,button,a,[contenteditable="true"],[tabindex]';
        var items = content.querySelectorAll(value);
        return this.getValidFocusNode(items);
      }
      return null;
    };
    Dialog2.prototype.getAutoFocusNode = function(container) {
      var node = container.querySelector("." + DLG_CLOSE_ICON_BTN);
      var value = "[autofocus]";
      var items = container.querySelectorAll(value);
      var validNode = this.getValidFocusNode(items);
      if (isBlazor()) {
        this.primaryButtonEle = this.element.getElementsByClassName("e-primary")[0];
      }
      if (!isNullOrUndefined(validNode)) {
        node = validNode;
      } else {
        validNode = this.focusableElements(this.contentEle);
        if (!isNullOrUndefined(validNode)) {
          return node = validNode;
        } else if (!isNullOrUndefined(this.primaryButtonEle)) {
          return this.element.querySelector("." + DLG_PRIMARY_BUTTON);
        }
      }
      return node;
    };
    Dialog2.prototype.disableElement = function(element2, t) {
      var elementMatch = element2 ? element2.matches || element2.webkitMatchesSelector || element2.msGetRegionContent : null;
      if (elementMatch) {
        for (; element2; element2 = element2.parentNode) {
          if (element2 instanceof Element && elementMatch.call(element2, t)) {
            return element2;
          }
        }
      }
      return null;
    };
    Dialog2.prototype.focusContent = function() {
      var element2 = this.getAutoFocusNode(this.element);
      var node = !isNullOrUndefined(element2) ? element2 : this.element;
      var userAgent = Browser.userAgent;
      if (userAgent.indexOf("MSIE ") > 0 || userAgent.indexOf("Trident/") > 0) {
        this.element.focus();
      }
      node.focus();
      this.unBindEvent(this.element);
      this.bindEvent(this.element);
    };
    Dialog2.prototype.bindEvent = function(element2) {
      EventHandler.add(element2, "keydown", this.keyDown, this);
    };
    Dialog2.prototype.unBindEvent = function(element2) {
      EventHandler.remove(element2, "keydown", this.keyDown);
    };
    Dialog2.prototype.updateSanitizeContent = function() {
      if (!this.isBlazorServerRender()) {
        this.contentEle.innerHTML = this.sanitizeHelper(this.content);
      }
    };
    Dialog2.prototype.isBlazorServerRender = function() {
      return isBlazor() && this.isServerRendered;
    };
    Dialog2.prototype.getModuleName = function() {
      return "dialog";
    };
    Dialog2.prototype.onPropertyChanged = function(newProp, oldProp) {
      if (!this.element.classList.contains(ROOT)) {
        return;
      }
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "content":
            if (!isNullOrUndefined(this.content) && this.content !== "") {
              if (this.isBlazorServerRender()) {
                this.contentEle = this.element.querySelector(".e-dlg-content");
              }
              if (!isNullOrUndefined(this.contentEle) && this.contentEle.getAttribute("role") !== "dialog") {
                if (!this.isBlazorServerRender()) {
                  this.contentEle.innerHTML = "";
                }
                if (typeof this.content === "function") {
                  this.clearTemplate(["content"]);
                  detach(this.contentEle);
                  this.contentEle = null;
                  this.setContent();
                } else {
                  if (typeof this.content === "string") {
                    if (this.isBlazorServerRender() && this.contentEle.innerText === "") {
                      this.contentEle.insertAdjacentHTML("beforeend", this.sanitizeHelper(this.content));
                    } else {
                      this.updateSanitizeContent();
                    }
                  } else {
                    this.contentEle.appendChild(this.content);
                  }
                }
                this.setMaxHeight();
              } else {
                if (!this.isBlazorServerRender() || isNullOrUndefined(this.element.querySelector(".e-dlg-content"))) {
                  this.setContent();
                }
              }
            } else if (!isNullOrUndefined(this.contentEle)) {
              detach(this.contentEle);
              this.contentEle = null;
            }
            break;
          case "header":
            if (this.header === "" || isNullOrUndefined(this.header)) {
              if (this.headerEle) {
                detach(this.headerEle);
                this.headerEle = null;
              }
            } else {
              if (!this.isBlazorServerRender() || isNullOrUndefined(this.element.querySelector(".e-dlg-header-content"))) {
                this.setHeader();
              }
            }
            break;
          case "footerTemplate":
            if (this.footerTemplate === "" || isNullOrUndefined(this.footerTemplate)) {
              if (!this.ftrTemplateContent) {
                return;
              }
              detach(this.ftrTemplateContent);
              this.ftrTemplateContent = null;
              this.buttons = [{}];
            } else {
              if (!this.isBlazorServerRender() || isNullOrUndefined(this.element.querySelector(".e-footer-content"))) {
                this.setFooterTemplate();
              }
              this.buttons = [{}];
            }
            break;
          case "showCloseIcon":
            if (this.element.getElementsByClassName(DLG_CLOSE_ICON).length > 0) {
              if (!this.showCloseIcon && (this.header === "" || isNullOrUndefined(this.header))) {
                detach(this.headerContent);
                this.headerContent = null;
              } else if (!this.showCloseIcon) {
                detach(this.closeIcon);
              } else {
                if (this.isBlazorServerRender()) {
                  this.wireEvents();
                }
              }
            } else {
              if (!this.isBlazorServerRender()) {
                this.renderCloseIcon();
              }
              this.wireEvents();
            }
            break;
          case "locale":
            if (this.showCloseIcon) {
              this.closeIconTitle();
            }
            break;
          case "visible":
            if (this.visible) {
              this.show();
            } else {
              this.hide();
            }
            break;
          case "isModal":
            this.updateIsModal();
            break;
          case "height":
            setStyleAttribute(this.element, {
              "height": formatUnit(newProp.height)
            });
            this.updatePersistData();
            break;
          case "width":
            setStyleAttribute(this.element, {
              "width": formatUnit(newProp.width)
            });
            this.updatePersistData();
            break;
          case "zIndex":
            this.popupObj.zIndex = this.zIndex;
            if (this.isModal) {
              this.setOverlayZindex(this.zIndex);
            }
            if (this.element.style.zIndex !== this.zIndex.toString()) {
              this.calculatezIndex = false;
            }
            break;
          case "cssClass":
            this.setCSSClass(oldProp.cssClass);
            break;
          case "buttons": {
            var buttonCount = this.buttons.length;
            if (!isNullOrUndefined(this.ftrTemplateContent) && !this.isBlazorServerRender()) {
              detach(this.ftrTemplateContent);
              this.ftrTemplateContent = null;
            }
            for (var i = 0; i < buttonCount; i++) {
              if (!isNullOrUndefined(this.buttons[i].buttonModel)) {
                this.footerTemplate = "";
                this.setButton();
              }
            }
            break;
          }
          case "allowDragging":
            if (this.allowDragging && !isNullOrUndefined(this.headerContent)) {
              this.setAllowDragging();
            } else {
              this.dragObj.destroy();
            }
            break;
          case "target":
            this.setTarget(newProp.target);
            break;
          case "position":
            this.checkPositionData();
            if (this.isModal) {
              var positionX = this.position.X;
              var positionY = this.position.Y;
              if (!isNullOrUndefined(oldProp.position)) {
                if (!isNullOrUndefined(oldProp.position.X)) {
                  positionX = oldProp.position.X;
                }
                if (!isNullOrUndefined(oldProp.position.Y)) {
                  positionY = oldProp.position.Y;
                }
              }
              if (this.dlgContainer.classList.contains("e-dlg-" + positionX + "-" + positionY)) {
                this.dlgContainer.classList.remove("e-dlg-" + positionX + "-" + positionY);
              }
            }
            this.positionChange();
            this.updatePersistData();
            break;
          case "enableRtl":
            this.setEnableRTL();
            break;
          case "enableResize":
            this.setResize();
            break;
          case "minHeight":
            if (this.minHeight !== "") {
              this.element.style.minHeight = formatUnit(this.minHeight);
            }
            break;
        }
      }
    };
    Dialog2.prototype.setTarget = function(target) {
      this.popupObj.relateTo = target;
      this.target = target;
      this.targetEle = typeof this.target === "string" ? document.querySelector(this.target) : this.target;
      if (this.dragObj) {
        this.dragObj.dragArea = this.targetEle;
      }
      this.setMaxHeight();
      if (this.isModal) {
        this.updateIsModal();
      }
      if (this.enableResize) {
        this.setResize();
      }
    };
    Dialog2.prototype.updateIsModal = function() {
      this.element.setAttribute("aria-modal", this.isModal ? "true" : "false");
      if (this.isModal) {
        if (isNullOrUndefined(this.dlgOverlay)) {
          this.setIsModal();
          this.element.style.top = "0px";
          this.element.style.left = "0px";
          if (!isNullOrUndefined(this.targetEle)) {
            this.targetEle.appendChild(this.dlgContainer);
          }
        }
      } else {
        removeClass([this.element], MODAL_DLG);
        removeClass([document.body], [DLG_TARGET, SCROLL_DISABLED]);
        detach(this.dlgOverlay);
        while (this.dlgContainer.firstChild) {
          this.dlgContainer.parentElement.insertBefore(this.dlgContainer.firstChild, this.dlgContainer);
        }
        this.dlgContainer.parentElement.removeChild(this.dlgContainer);
      }
      if (this.visible) {
        this.show();
      }
      this.positionChange();
      if (this.isModal && this.dlgOverlay) {
        EventHandler.add(this.dlgOverlay, "click", this.dlgOverlayClickEventHandler, this);
      }
    };
    Dialog2.prototype.setzIndex = function(zIndexElement, setPopupZindex) {
      var prevOnChange = this.isProtectedOnChange;
      this.isProtectedOnChange = true;
      var currentzIndex = getZindexPartial(zIndexElement);
      this.zIndex = currentzIndex > this.zIndex ? currentzIndex : this.zIndex;
      this.isProtectedOnChange = prevOnChange;
      if (setPopupZindex) {
        this.popupObj.zIndex = this.zIndex;
      }
    };
    Dialog2.prototype.windowResizeHandler = function() {
      setMaxWidth(this.targetEle.clientWidth);
      setMaxHeight(this.targetEle.clientHeight);
      this.setMaxHeight();
    };
    Dialog2.prototype.getPersistData = function() {
      return this.addOnPersist(["width", "height", "position"]);
    };
    Dialog2.prototype.removeAllChildren = function(element2) {
      while (element2.children[0]) {
        this.removeAllChildren(element2.children[0]);
        element2.removeChild(element2.children[0]);
      }
    };
    Dialog2.prototype.destroy = function() {
      if (this.isDestroyed) {
        return;
      }
      var classArray = [RTL4, MODAL_DLG, DLG_RESIZABLE, DLG_RESTRICT_LEFT_VALUE, FULLSCREEN, DEVICE];
      var attrs = ["role", "aria-modal", "aria-labelledby", "aria-describedby", "aria-grabbed", "tabindex", "style"];
      removeClass([this.targetEle], [DLG_TARGET, SCROLL_DISABLED]);
      if (!isNullOrUndefined(this.element) && this.element.classList.contains(FULLSCREEN)) {
        removeClass([document.body], [DLG_TARGET, SCROLL_DISABLED]);
      }
      if (this.isModal) {
        removeClass([!isNullOrUndefined(this.targetEle) ? this.targetEle : document.body], SCROLL_DISABLED);
      }
      this.unWireEvents();
      if (!isNullOrUndefined(this.btnObj)) {
        for (var i = 0; i < this.btnObj.length; i++) {
          this.btnObj[i].destroy();
        }
      }
      if (!isNullOrUndefined(this.closeIconBtnObj)) {
        this.closeIconBtnObj.destroy();
      }
      if (!isNullOrUndefined(this.dragObj)) {
        this.dragObj.destroy();
      }
      if (!isNullOrUndefined(this.popupObj.element) && this.popupObj.element.classList.contains(POPUP_ROOT)) {
        this.popupObj.destroy();
      }
      removeClass([this.element], classArray);
      if (!isNullOrUndefined(this.cssClass) && this.cssClass !== "") {
        removeClass([this.element], this.cssClass.split(" "));
      }
      if (!isNullOrUndefined(this.refElement) && !isNullOrUndefined(this.refElement.parentElement)) {
        this.refElement.parentElement.insertBefore(this.isModal ? this.dlgContainer : this.element, this.refElement);
        detach(this.refElement);
        this.refElement = void 0;
      }
      if (this.isModal && !this.isBlazorServerRender()) {
        detach(this.dlgOverlay);
        this.dlgContainer.parentNode.insertBefore(this.element, this.dlgContainer);
        detach(this.dlgContainer);
      }
      if (!this.isBlazorServerRender()) {
        this.element.innerHTML = this.clonedEle.innerHTML;
      }
      if (this.isBlazorServerRender()) {
        if (!isNullOrUndefined(this.element.children)) {
          for (var i = 0; i <= this.element.children.length; i++) {
            i = i - i;
            detach(this.element.children[i]);
          }
        }
      }
      for (var i = 0; i < attrs.length; i++) {
        this.element.removeAttribute(attrs[i]);
      }
      this.ftrTemplateContent = null;
      this.headerContent = null;
      if (!this.isReact && !this.isVue && !isNullOrUndefined(this.contentEle)) {
        this.removeAllChildren(this.contentEle);
      }
      this.contentEle = null;
      if (!this.isBlazorServerRender()) {
        _super.prototype.destroy.call(this);
      } else {
        this.isDestroyed = true;
      }
      if (this.isReact) {
        this.clearTemplate();
      }
    };
    Dialog2.prototype.wireWindowResizeEvent = function() {
      this.boundWindowResizeHandler = this.windowResizeHandler.bind(this);
      window.addEventListener("resize", this.boundWindowResizeHandler);
    };
    Dialog2.prototype.unWireWindowResizeEvent = function() {
      window.removeEventListener("resize", this.boundWindowResizeHandler);
      this.boundWindowResizeHandler = null;
    };
    Dialog2.prototype.wireEvents = function() {
      if (this.isBlazorServerRender() && this.showCloseIcon) {
        this.closeIcon = this.element.getElementsByClassName("e-dlg-closeicon-btn")[0];
      }
      if (this.showCloseIcon) {
        EventHandler.add(this.closeIcon, "click", this.closeIconClickEventHandler, this);
      }
      if (this.isModal && this.dlgOverlay) {
        EventHandler.add(this.dlgOverlay, "click", this.dlgOverlayClickEventHandler, this);
      }
    };
    Dialog2.prototype.unWireEvents = function() {
      if (this.showCloseIcon) {
        EventHandler.remove(this.closeIcon, "click", this.closeIconClickEventHandler);
      }
      if (this.isModal) {
        EventHandler.remove(this.dlgOverlay, "click", this.dlgOverlayClickEventHandler);
      }
      if (this.buttons.length > 0 && !isNullOrUndefined(this.buttons[0].buttonModel) && this.footerTemplate === "") {
        for (var i = 0; i < this.buttons.length; i++) {
          if (typeof this.buttons[i].click === "function") {
            EventHandler.remove(this.ftrTemplateContent.children[i], "click", this.buttons[i].click);
          }
        }
      }
    };
    Dialog2.prototype.refreshPosition = function() {
      this.popupObj.refreshPosition();
      if (this.element.classList.contains(MODAL_DLG)) {
        this.positionChange();
      }
    };
    Dialog2.prototype.getDimension = function() {
      var dialogWidth = this.element.offsetWidth;
      var dialogHeight = this.element.offsetHeight;
      return {
        width: dialogWidth,
        height: dialogHeight
      };
    };
    Dialog2.prototype.show = function(isFullScreen) {
      var _this = this;
      if (!this.element.classList.contains(ROOT)) {
        return;
      }
      if (!this.element.classList.contains(DLG_SHOW) || !isNullOrUndefined(isFullScreen)) {
        if (!isNullOrUndefined(isFullScreen)) {
          this.fullScreen(isFullScreen);
        }
        var eventArgs_1 = isBlazor() ? {
          cancel: false,
          element: this.element,
          container: this.isModal ? this.dlgContainer : this.element,
          maxHeight: this.element.style.maxHeight
        } : {
          cancel: false,
          element: this.element,
          container: this.isModal ? this.dlgContainer : this.element,
          target: this.target,
          maxHeight: this.element.style.maxHeight
        };
        this.trigger("beforeOpen", eventArgs_1, function(beforeOpenArgs) {
          if (!beforeOpenArgs.cancel) {
            if (_this.element.style.maxHeight !== eventArgs_1.maxHeight) {
              _this.allowMaxHeight = false;
              _this.element.style.maxHeight = eventArgs_1.maxHeight;
            }
            if (_this.enableResize && _this.boundWindowResizeHandler == null && !_this.initialRender) {
              _this.wireWindowResizeEvent();
            }
            _this.storeActiveElement = document.activeElement;
            _this.element.tabIndex = -1;
            if (_this.isModal && !isNullOrUndefined(_this.dlgOverlay)) {
              _this.dlgOverlay.style.display = "block";
              _this.dlgContainer.style.display = "flex";
              removeClass([_this.dlgOverlay], "e-fade");
              if (!isNullOrUndefined(_this.targetEle)) {
                if (_this.targetEle === document.body) {
                  _this.dlgContainer.style.position = "fixed";
                } else {
                  _this.dlgContainer.style.position = "absolute";
                }
                _this.dlgOverlay.style.position = "absolute";
                var targetType = _this.getTargetContainer(_this.target);
                if (targetType instanceof Element) {
                  var computedStyle = window.getComputedStyle(targetType);
                  if (computedStyle.getPropertyValue("direction") === "rtl") {
                    _this.element.style.position = "absolute";
                  } else {
                    _this.element.style.position = "relative";
                  }
                } else {
                  _this.element.style.position = "relative";
                }
                addClass([_this.targetEle], [DLG_TARGET, SCROLL_DISABLED]);
              } else {
                addClass([document.body], [DLG_TARGET, SCROLL_DISABLED]);
              }
            }
            var openAnimation = {
              name: _this.animationSettings.effect === "None" && animationMode === "Enable" ? "ZoomIn" : _this.animationSettings.effect + "In",
              duration: _this.animationSettings.duration,
              delay: _this.animationSettings.delay
            };
            var zIndexElement = _this.isModal ? _this.element.parentElement : _this.element;
            if (_this.calculatezIndex) {
              _this.setzIndex(zIndexElement, true);
              setStyleAttribute(_this.element, {
                "zIndex": _this.zIndex
              });
              if (_this.isModal) {
                _this.setOverlayZindex(_this.zIndex);
              }
            }
            _this.animationSettings.effect === "None" && animationMode === "Enable" ? _this.popupObj.show(openAnimation) : _this.animationSettings.effect === "None" ? _this.popupObj.show() : _this.popupObj.show(openAnimation);
            if (_this.isModal) {
              var targetType = _this.getTargetContainer(_this.target);
              if (targetType instanceof Element) {
                var computedStyle = window.getComputedStyle(targetType);
                if (computedStyle.getPropertyValue("direction") === "rtl" && !_this.IsDragStop) {
                  _this.setPopupPosition();
                }
              }
            }
            _this.dialogOpen = true;
            var prevOnChange = _this.isProtectedOnChange;
            _this.isProtectedOnChange = true;
            _this.visible = true;
            _this.preventVisibility = true;
            _this.isProtectedOnChange = prevOnChange;
          }
        });
      }
      if (this.isReact) {
        this.renderReactTemplates();
      }
    };
    Dialog2.prototype.hide = function(event) {
      var _this = this;
      if (!this.element.classList.contains(ROOT)) {
        return;
      }
      if (this.preventVisibility) {
        var eventArgs = isBlazor() ? {
          cancel: false,
          isInteracted: event ? true : false,
          element: this.element,
          container: this.isModal ? this.dlgContainer : this.element,
          event
        } : {
          cancel: false,
          isInteracted: event ? true : false,
          element: this.element,
          target: this.target,
          container: this.isModal ? this.dlgContainer : this.element,
          event,
          closedBy: this.dlgClosedBy
        };
        this.closeArgs = eventArgs;
        this.trigger("beforeClose", eventArgs, function(beforeCloseArgs) {
          if (!beforeCloseArgs.cancel) {
            if (_this.isModal) {
              if (!isNullOrUndefined(_this.targetEle)) {
                removeClass([_this.targetEle], [DLG_TARGET, SCROLL_DISABLED]);
              }
            }
            if (_this.enableResize) {
              _this.unWireWindowResizeEvent();
            }
            if (document.body.classList.contains(DLG_TARGET) && document.body.classList.contains(SCROLL_DISABLED)) {
              removeClass([document.body], [DLG_TARGET, SCROLL_DISABLED]);
            }
            var closeAnimation = {
              name: _this.animationSettings.effect === "None" && animationMode === "Enable" ? "ZoomOut" : _this.animationSettings.effect + "Out",
              duration: _this.animationSettings.duration,
              delay: _this.animationSettings.delay
            };
            if (_this.animationSettings.effect === "None" && animationMode === "Enable") {
              _this.popupObj.hide(closeAnimation);
            } else if (_this.animationSettings.effect === "None") {
              _this.popupObj.hide();
            } else {
              _this.popupObj.hide(closeAnimation);
            }
            _this.dialogOpen = false;
            var prevOnChange = _this.isProtectedOnChange;
            _this.isProtectedOnChange = true;
            _this.visible = false;
            _this.preventVisibility = false;
            _this.isProtectedOnChange = prevOnChange;
          }
          _this.dlgClosedBy = DLG_USER_ACTION_CLOSED;
        });
      }
    };
    Dialog2.prototype.fullScreen = function(args) {
      var top = this.element.offsetTop;
      var left = this.element.offsetLeft;
      if (args) {
        if (!this.isModal) {
          this.element.style.top = document.scrollingElement.scrollTop + "px";
        }
        addClass([this.element], FULLSCREEN);
        var display = this.element.style.display;
        this.element.style.display = "none";
        this.element.style.maxHeight = !isNullOrUndefined(this.target) ? this.targetEle.offsetHeight + "px" : window.innerHeight + "px";
        this.element.style.display = display;
        addClass([document.body], [DLG_TARGET, SCROLL_DISABLED]);
        if (this.allowDragging && !isNullOrUndefined(this.dragObj)) {
          this.dragObj.destroy();
        }
      } else {
        removeClass([this.element], FULLSCREEN);
        removeClass([document.body], [DLG_TARGET, SCROLL_DISABLED]);
        if (this.allowDragging && !isNullOrUndefined(this.headerContent)) {
          this.setAllowDragging();
        }
      }
      return args;
    };
    Dialog2.prototype.getButtons = function(index) {
      if (!isNullOrUndefined(index)) {
        return this.btnObj[index];
      }
      return this.btnObj;
    };
    __decorate15([Property("")], Dialog2.prototype, "content", void 0);
    __decorate15([Property(true)], Dialog2.prototype, "enableHtmlSanitizer", void 0);
    __decorate15([Property(false)], Dialog2.prototype, "enablePersistence", void 0);
    __decorate15([Property(false)], Dialog2.prototype, "showCloseIcon", void 0);
    __decorate15([Property(false)], Dialog2.prototype, "isModal", void 0);
    __decorate15([Property("")], Dialog2.prototype, "header", void 0);
    __decorate15([Property(true)], Dialog2.prototype, "visible", void 0);
    __decorate15([Property(false)], Dialog2.prototype, "enableResize", void 0);
    __decorate15([Property(["South-East"])], Dialog2.prototype, "resizeHandles", void 0);
    __decorate15([Property("auto")], Dialog2.prototype, "height", void 0);
    __decorate15([Property("")], Dialog2.prototype, "minHeight", void 0);
    __decorate15([Property("100%")], Dialog2.prototype, "width", void 0);
    __decorate15([Property("")], Dialog2.prototype, "cssClass", void 0);
    __decorate15([Property(1e3)], Dialog2.prototype, "zIndex", void 0);
    __decorate15([Property(null)], Dialog2.prototype, "target", void 0);
    __decorate15([Property("")], Dialog2.prototype, "footerTemplate", void 0);
    __decorate15([Property(false)], Dialog2.prototype, "allowDragging", void 0);
    __decorate15([Collection([{}], ButtonProps)], Dialog2.prototype, "buttons", void 0);
    __decorate15([Property(true)], Dialog2.prototype, "closeOnEscape", void 0);
    __decorate15([Complex({}, AnimationSettings)], Dialog2.prototype, "animationSettings", void 0);
    __decorate15([Complex({
      X: "center",
      Y: "center"
    }, PositionData)], Dialog2.prototype, "position", void 0);
    __decorate15([Event2()], Dialog2.prototype, "created", void 0);
    __decorate15([Event2()], Dialog2.prototype, "open", void 0);
    __decorate15([Event2()], Dialog2.prototype, "beforeSanitizeHtml", void 0);
    __decorate15([Event2()], Dialog2.prototype, "beforeOpen", void 0);
    __decorate15([Event2()], Dialog2.prototype, "close", void 0);
    __decorate15([Event2()], Dialog2.prototype, "beforeClose", void 0);
    __decorate15([Event2()], Dialog2.prototype, "dragStart", void 0);
    __decorate15([Event2()], Dialog2.prototype, "dragStop", void 0);
    __decorate15([Event2()], Dialog2.prototype, "drag", void 0);
    __decorate15([Event2()], Dialog2.prototype, "overlayClick", void 0);
    __decorate15([Event2()], Dialog2.prototype, "resizeStart", void 0);
    __decorate15([Event2()], Dialog2.prototype, "resizing", void 0);
    __decorate15([Event2()], Dialog2.prototype, "resizeStop", void 0);
    __decorate15([Event2()], Dialog2.prototype, "destroyed", void 0);
    Dialog2 = __decorate15([NotifyPropertyChanges], Dialog2);
    return Dialog2;
  }(Component)
);
var DialogUtility;
(function(DialogUtility2) {
  function alert(args) {
    var dialogElement = createElement("div", {
      "className": DLG_UTIL_ALERT
    });
    document.body.appendChild(dialogElement);
    var alertDialogObj;
    var okButtonModel = [{
      buttonModel: {
        isPrimary: true,
        content: "OK"
      },
      click: function() {
        this.hide();
      }
    }];
    if (typeof args === "string") {
      alertDialogObj = createDialog({
        content: args,
        position: {
          X: "center",
          Y: "top"
        },
        isModal: true,
        header: DLG_UTIL_DEFAULT_TITLE,
        buttons: okButtonModel
      }, dialogElement);
    } else {
      alertDialogObj = createDialog(alertOptions(args), dialogElement);
    }
    alertDialogObj.close = function() {
      if (args && args.close) {
        args.close.apply(alertDialogObj);
      }
      alertDialogObj.destroy();
      if (alertDialogObj.element.classList.contains("e-dlg-modal")) {
        alertDialogObj.element.parentElement.remove();
        alertDialogObj.target.classList.remove(DLG_UTIL_ROOT);
      } else {
        alertDialogObj.element.remove();
      }
    };
    return alertDialogObj;
  }
  DialogUtility2.alert = alert;
  function confirm(args) {
    var dialogElement = createElement("div", {
      "className": DLG_UTIL_CONFIRM
    });
    document.body.appendChild(dialogElement);
    var confirmDialogObj;
    var okCancelButtonModel = [{
      buttonModel: {
        isPrimary: true,
        content: "OK"
      },
      click: function() {
        this.hide();
      }
    }, {
      buttonModel: {
        content: "Cancel"
      },
      click: function() {
        this.hide();
      }
    }];
    if (typeof args === "string") {
      confirmDialogObj = createDialog({
        position: {
          X: "center",
          Y: "top"
        },
        content: args,
        isModal: true,
        header: DLG_UTIL_DEFAULT_TITLE,
        buttons: okCancelButtonModel
      }, dialogElement);
    } else {
      confirmDialogObj = createDialog(confirmOptions(args), dialogElement);
    }
    confirmDialogObj.close = function() {
      if (args && args.close) {
        args.close.apply(confirmDialogObj);
      }
      confirmDialogObj.destroy();
      if (confirmDialogObj.element.classList.contains("e-dlg-modal")) {
        confirmDialogObj.element.parentElement.remove();
        confirmDialogObj.target.classList.remove(DLG_UTIL_ROOT);
      } else {
        confirmDialogObj.element.remove();
      }
    };
    return confirmDialogObj;
  }
  DialogUtility2.confirm = confirm;
  function createDialog(options, element2) {
    var dialogObject = new Dialog(options);
    dialogObject.appendTo(element2);
    return dialogObject;
  }
  function alertOptions(option) {
    var options = {};
    options.buttons = [];
    options = formOptions(options, option);
    options = setAlertButtonModel(options, option);
    return options;
  }
  function confirmOptions(option) {
    var options = {};
    options.buttons = [];
    options = formOptions(options, option);
    options = setConfirmButtonModel(options, option);
    return options;
  }
  function formOptions(options, option) {
    options.header = !isNullOrUndefined(option.title) ? option.title : null;
    options.content = !isNullOrUndefined(option.content) ? option.content : "";
    options.isModal = !isNullOrUndefined(option.isModal) ? option.isModal : true;
    options.showCloseIcon = !isNullOrUndefined(option.showCloseIcon) ? option.showCloseIcon : false;
    options.allowDragging = !isNullOrUndefined(option.isDraggable) ? option.isDraggable : false;
    options.closeOnEscape = !isNullOrUndefined(option.closeOnEscape) ? option.closeOnEscape : false;
    options.position = !isNullOrUndefined(option.position) ? option.position : {
      X: "center",
      Y: "top"
    };
    options.animationSettings = !isNullOrUndefined(option.animationSettings) ? option.animationSettings : {
      effect: "Fade",
      duration: 400,
      delay: 0
    };
    options.cssClass = !isNullOrUndefined(option.cssClass) ? option.cssClass : "";
    options.zIndex = !isNullOrUndefined(option.zIndex) ? option.zIndex : 1e3;
    options.open = !isNullOrUndefined(option.open) ? option.open : null;
    options.width = !isNullOrUndefined(option.width) ? option.width : "auto";
    options.height = !isNullOrUndefined(option.height) ? option.height : "auto";
    return options;
  }
  function setAlertButtonModel(options, option) {
    var alertButtonModel = [{
      buttonModel: {
        isPrimary: true,
        content: "OK"
      },
      click: function() {
        this.hide();
      }
    }];
    if (!isNullOrUndefined(option.okButton)) {
      options.buttons[0] = formButtonModel(options.buttons[0], option.okButton, alertButtonModel[0]);
    } else {
      options.buttons = alertButtonModel;
    }
    return options;
  }
  function setConfirmButtonModel(options, option) {
    var okButtonModel = {
      buttonModel: {
        isPrimary: true,
        content: "OK"
      },
      click: function() {
        this.hide();
      }
    };
    var cancelButtonModel = {
      buttonModel: {
        content: "Cancel"
      },
      click: function() {
        this.hide();
      }
    };
    if (!isNullOrUndefined(option.okButton)) {
      options.buttons[0] = formButtonModel(options.buttons[0], option.okButton, okButtonModel);
    } else {
      options.buttons[0] = okButtonModel;
    }
    if (!isNullOrUndefined(option.cancelButton)) {
      options.buttons[1] = formButtonModel(options.buttons[1], option.cancelButton, cancelButtonModel);
    } else {
      options.buttons[1] = cancelButtonModel;
    }
    return options;
  }
  function formButtonModel(buttonModel, option, buttonPropModel) {
    var buttonProps = buttonPropModel;
    if (!isNullOrUndefined(option.text)) {
      buttonProps.buttonModel.content = option.text;
    }
    if (!isNullOrUndefined(option.icon)) {
      buttonProps.buttonModel.iconCss = option.icon;
    }
    if (!isNullOrUndefined(option.cssClass)) {
      buttonProps.buttonModel.cssClass = option.cssClass;
    }
    if (!isNullOrUndefined(option.click)) {
      buttonProps.click = option.click;
    }
    if (!isNullOrUndefined(option.isFlat)) {
      buttonProps.isFlat = option.isFlat;
    }
    return buttonProps;
  }
})(DialogUtility || (DialogUtility = {}));

// node_modules/@syncfusion/ej2-popups/src/tooltip/tooltip.js
var __extends16 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate16 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TOUCHEND_HIDE_DELAY = 1500;
var TAPHOLD_THRESHOLD = 500;
var SHOW_POINTER_TIP_GAP = 0;
var HIDE_POINTER_TIP_GAP = 8;
var MOUSE_TRAIL_GAP = 2;
var POINTER_ADJUST = 2;
var ROOT2 = "e-tooltip";
var RTL5 = "e-rtl";
var DEVICE2 = "e-bigger";
var ICON2 = "e-icons";
var CLOSE = "e-tooltip-close";
var TOOLTIP_WRAP = "e-tooltip-wrap";
var CONTENT = "e-tip-content";
var ARROW_TIP = "e-arrow-tip";
var ARROW_TIP_OUTER = "e-arrow-tip-outer";
var ARROW_TIP_INNER = "e-arrow-tip-inner";
var TIP_BOTTOM = "e-tip-bottom";
var TIP_TOP = "e-tip-top";
var TIP_LEFT = "e-tip-left";
var TIP_RIGHT = "e-tip-right";
var POPUP_ROOT2 = "e-popup";
var POPUP_OPEN = "e-popup-open";
var POPUP_CLOSE = "e-popup-close";
var POPUP_LIB = "e-lib";
var HIDE_POPUP = "e-hidden";
var POPUP_CONTAINER = "e-tooltip-popup-container";
var Animation2 = (
  /** @class */
  function(_super) {
    __extends16(Animation3, _super);
    function Animation3() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate16([Property({
      effect: "FadeIn",
      duration: 150,
      delay: 0
    })], Animation3.prototype, "open", void 0);
    __decorate16([Property({
      effect: "FadeOut",
      duration: 150,
      delay: 0
    })], Animation3.prototype, "close", void 0);
    return Animation3;
  }(ChildProperty)
);
var Tooltip = (
  /** @class */
  function(_super) {
    __extends16(Tooltip2, _super);
    function Tooltip2(options, element2) {
      var _this = _super.call(this, options, element2) || this;
      _this.mouseMoveEvent = null;
      _this.mouseMoveTarget = null;
      _this.containerElement = null;
      _this.isBodyContainer = true;
      return _this;
    }
    Tooltip2.prototype.initialize = function() {
      this.formatPosition();
      addClass([this.element], ROOT2);
    };
    Tooltip2.prototype.formatPosition = function() {
      var _a, _b;
      if (!this.position) return;
      if (this.position.indexOf("Top") === 0 || this.position.indexOf("Bottom") === 0) {
        _a = this.position.split(/(?=[A-Z])/), this.tooltipPositionY = _a[0], this.tooltipPositionX = _a[1];
      } else {
        _b = this.position.split(/(?=[A-Z])/), this.tooltipPositionX = _b[0], this.tooltipPositionY = _b[1];
      }
    };
    Tooltip2.prototype.renderArrow = function() {
      this.setTipClass(this.position);
      var tip = this.createElement("div", {
        className: ARROW_TIP + " " + this.tipClass
      });
      tip.appendChild(this.createElement("div", {
        className: ARROW_TIP_OUTER + " " + this.tipClass
      }));
      tip.appendChild(this.createElement("div", {
        className: ARROW_TIP_INNER + " " + this.tipClass
      }));
      this.tooltipEle.appendChild(tip);
    };
    Tooltip2.prototype.setTipClass = function(position) {
      if (position.indexOf("Right") === 0) {
        this.tipClass = TIP_LEFT;
      } else if (position.indexOf("Bottom") === 0) {
        this.tipClass = TIP_TOP;
      } else if (position.indexOf("Left") === 0) {
        this.tipClass = TIP_RIGHT;
      } else {
        this.tipClass = TIP_BOTTOM;
      }
    };
    Tooltip2.prototype.renderPopup = function(target) {
      var elePos = this.mouseTrail ? {
        top: 0,
        left: 0
      } : this.getTooltipPosition(target);
      this.tooltipEle.classList.remove(POPUP_LIB);
      this.popupObj = new Popup(this.tooltipEle, {
        height: this.height,
        width: this.width,
        position: {
          X: elePos.left,
          Y: elePos.top
        },
        enableRtl: this.enableRtl,
        open: this.openPopupHandler.bind(this),
        close: this.closePopupHandler.bind(this)
      });
    };
    Tooltip2.prototype.getScalingFactor = function(target) {
      if (!target) {
        return {
          x: 1,
          y: 1
        };
      }
      var scalingFactors = {
        x: 1,
        y: 1
      };
      var elementsWithTransform = target.closest('[style*="transform: scale"]');
      if (elementsWithTransform && elementsWithTransform !== this.tooltipEle && elementsWithTransform.contains(this.tooltipEle)) {
        var computedStyle = window.getComputedStyle(elementsWithTransform);
        var transformValue = computedStyle.getPropertyValue("transform");
        var matrixValues = transformValue.match(/matrix\(([^)]+)\)/)[1].split(",").map(parseFloat);
        scalingFactors.x = matrixValues[0];
        scalingFactors.y = matrixValues[3];
      }
      return scalingFactors;
    };
    Tooltip2.prototype.getTooltipPosition = function(target) {
      this.tooltipEle.style.display = "block";
      var parentWithZoomStyle = this.element.closest('[style*="zoom"]');
      if (parentWithZoomStyle) {
        if (!parentWithZoomStyle.contains(this.tooltipEle)) {
          this.tooltipEle.style.zoom = getComputedStyle(parentWithZoomStyle).zoom;
        }
      }
      var pos = calculatePosition(target, this.tooltipPositionX, this.tooltipPositionY, !this.isBodyContainer, this.isBodyContainer ? null : this.containerElement.getBoundingClientRect());
      var scalingFactors = this.getScalingFactor(target);
      var offsetPos = this.calculateTooltipOffset(this.position, scalingFactors.x, scalingFactors.y);
      var collisionPosition = this.calculateElementPosition(pos, offsetPos);
      var collisionLeft = collisionPosition[0];
      var collisionTop = collisionPosition[1];
      var elePos = this.collisionFlipFit(target, collisionLeft, collisionTop);
      elePos.left = elePos.left / scalingFactors.x;
      elePos.top = elePos.top / scalingFactors.y;
      this.tooltipEle.style.display = "";
      return elePos;
    };
    Tooltip2.prototype.windowResize = function() {
      this.reposition(this.findTarget());
    };
    Tooltip2.prototype.reposition = function(target) {
      if (this.popupObj && target) {
        var elePos = this.getTooltipPosition(target);
        this.popupObj.position = {
          X: elePos.left,
          Y: elePos.top
        };
        this.popupObj.dataBind();
      }
    };
    Tooltip2.prototype.openPopupHandler = function() {
      if (!this.mouseTrail && this.needTemplateReposition()) {
        this.reposition(this.findTarget());
      }
      this.trigger("afterOpen", this.tooltipEventArgs);
      this.tooltipEventArgs = null;
    };
    Tooltip2.prototype.closePopupHandler = function() {
      if (this.isReact && !(this.opensOn === "Click" && typeof this.content === "function")) {
        this.clearTemplate(["content"]);
      }
      this.clear();
      var tooltipAfterCloseEventArgs = {
        type: this.tooltipEventArgs.event ? this.tooltipEventArgs.event.type : null,
        cancel: false,
        target: this.tooltipEventArgs.target,
        event: this.tooltipEventArgs.event ? this.tooltipEventArgs.event : null,
        element: this.tooltipEle,
        isInteracted: !isNullOrUndefined(this.tooltipEventArgs.event)
      };
      this.trigger("afterClose", tooltipAfterCloseEventArgs);
      tooltipAfterCloseEventArgs = null;
    };
    Tooltip2.prototype.calculateTooltipOffset = function(position, xScalingFactor, yScalingFactor) {
      if (xScalingFactor === void 0) {
        xScalingFactor = 1;
      }
      if (yScalingFactor === void 0) {
        yScalingFactor = 1;
      }
      var pos = {
        top: 0,
        left: 0
      };
      var tipWidth;
      var tipHeight;
      var tooltipEleWidth;
      var tooltipEleHeight;
      var arrowEle;
      var tipAdjust;
      var tipHeightAdjust;
      var tipWidthAdjust;
      if (xScalingFactor !== 1 || yScalingFactor !== 1) {
        var tooltipEleRect = this.tooltipEle.getBoundingClientRect();
        var arrowEleRect = void 0;
        tooltipEleWidth = Math.round(tooltipEleRect.width);
        tooltipEleHeight = Math.round(tooltipEleRect.height);
        arrowEle = select("." + ARROW_TIP, this.tooltipEle);
        if (arrowEle) {
          arrowEleRect = arrowEle.getBoundingClientRect();
        }
        tipWidth = arrowEle ? Math.round(arrowEleRect.width) : 0;
        tipHeight = arrowEle ? Math.round(arrowEleRect.height) : 0;
        tipAdjust = this.showTipPointer ? SHOW_POINTER_TIP_GAP : HIDE_POINTER_TIP_GAP;
        tipHeightAdjust = tipHeight / 2 + POINTER_ADJUST + (tooltipEleHeight - this.tooltipEle.clientHeight * yScalingFactor);
        tipWidthAdjust = tipWidth / 2 + POINTER_ADJUST + (tooltipEleWidth - this.tooltipEle.clientWidth * xScalingFactor);
      } else {
        tooltipEleWidth = this.tooltipEle.offsetWidth;
        tooltipEleHeight = this.tooltipEle.offsetHeight;
        arrowEle = select("." + ARROW_TIP, this.tooltipEle);
        tipWidth = arrowEle ? arrowEle.offsetWidth : 0;
        tipHeight = arrowEle ? arrowEle.offsetHeight : 0;
        tipAdjust = this.showTipPointer ? SHOW_POINTER_TIP_GAP : HIDE_POINTER_TIP_GAP;
        tipHeightAdjust = tipHeight / 2 + POINTER_ADJUST + (this.tooltipEle.offsetHeight - this.tooltipEle.clientHeight);
        tipWidthAdjust = tipWidth / 2 + POINTER_ADJUST + (this.tooltipEle.offsetWidth - this.tooltipEle.clientWidth);
      }
      if (this.mouseTrail) {
        tipAdjust += MOUSE_TRAIL_GAP;
      }
      switch (position) {
        case "RightTop":
          pos.left += tipWidth + tipAdjust;
          pos.top -= tooltipEleHeight - tipHeightAdjust;
          break;
        case "RightCenter":
          pos.left += tipWidth + tipAdjust;
          pos.top -= tooltipEleHeight / 2;
          break;
        case "RightBottom":
          pos.left += tipWidth + tipAdjust;
          pos.top -= tipHeightAdjust;
          break;
        case "BottomRight":
          pos.top += tipHeight + tipAdjust;
          pos.left -= tipWidthAdjust;
          break;
        case "BottomCenter":
          pos.top += tipHeight + tipAdjust;
          pos.left -= tooltipEleWidth / 2;
          break;
        case "BottomLeft":
          pos.top += tipHeight + tipAdjust;
          pos.left -= tooltipEleWidth - tipWidthAdjust;
          break;
        case "LeftBottom":
          pos.left -= tipWidth + tooltipEleWidth + tipAdjust;
          pos.top -= tipHeightAdjust;
          break;
        case "LeftCenter":
          pos.left -= tipWidth + tooltipEleWidth + tipAdjust;
          pos.top -= tooltipEleHeight / 2;
          break;
        case "LeftTop":
          pos.left -= tipWidth + tooltipEleWidth + tipAdjust;
          pos.top -= tooltipEleHeight - tipHeightAdjust;
          break;
        case "TopLeft":
          pos.top -= tooltipEleHeight + tipHeight + tipAdjust;
          pos.left -= tooltipEleWidth - tipWidthAdjust;
          break;
        case "TopRight":
          pos.top -= tooltipEleHeight + tipHeight + tipAdjust;
          pos.left -= tipWidthAdjust;
          break;
        default:
          pos.top -= tooltipEleHeight + tipHeight + tipAdjust;
          pos.left -= tooltipEleWidth / 2;
          break;
      }
      pos.left += this.offsetX;
      pos.top += this.offsetY;
      return pos;
    };
    Tooltip2.prototype.updateTipPosition = function(position) {
      var selEle = selectAll("." + ARROW_TIP + ",." + ARROW_TIP_OUTER + ",." + ARROW_TIP_INNER, this.tooltipEle);
      var removeList = [TIP_BOTTOM, TIP_TOP, TIP_LEFT, TIP_RIGHT];
      removeClass(selEle, removeList);
      this.setTipClass(position);
      addClass(selEle, this.tipClass);
    };
    Tooltip2.prototype.adjustArrow = function(target, position, tooltipPositionX, tooltipPositionY) {
      var arrowEle = select("." + ARROW_TIP, this.tooltipEle);
      if (this.showTipPointer === false || arrowEle === null) {
        return;
      }
      this.updateTipPosition(position);
      var leftValue;
      var topValue;
      this.tooltipEle.style.display = "block";
      var tooltipWidth = this.tooltipEle.clientWidth;
      var tooltipHeight = this.tooltipEle.clientHeight;
      var arrowInnerELe = select("." + ARROW_TIP_INNER, this.tooltipEle);
      var tipWidth = arrowEle.offsetWidth;
      var tipHeight = arrowEle.offsetHeight;
      this.tooltipEle.style.display = "";
      if (this.tipClass === TIP_BOTTOM || this.tipClass === TIP_TOP) {
        if (this.tipClass === TIP_BOTTOM) {
          topValue = "99.9%";
          arrowInnerELe.style.top = "-" + (tipHeight - 2) + "px";
        } else {
          topValue = -(tipHeight - 1) + "px";
          arrowInnerELe.style.top = "-" + (tipHeight - 6) + "px";
        }
        if (target) {
          var tipPosExclude = tooltipPositionX !== "Center" || tooltipWidth > target.offsetWidth || this.mouseTrail;
          if (tipPosExclude && tooltipPositionX === "Left" || !tipPosExclude && this.tipPointerPosition === "End") {
            leftValue = tooltipWidth - tipWidth - POINTER_ADJUST + "px";
          } else if (tipPosExclude && tooltipPositionX === "Right" || !tipPosExclude && this.tipPointerPosition === "Start") {
            leftValue = POINTER_ADJUST + "px";
          } else if (tipPosExclude && (this.tipPointerPosition === "End" || this.tipPointerPosition === "Start")) {
            leftValue = this.tipPointerPosition === "End" ? target.offsetWidth + (this.tooltipEle.offsetWidth - target.offsetWidth) / 2 - tipWidth / 2 - POINTER_ADJUST + "px" : (this.tooltipEle.offsetWidth - target.offsetWidth) / 2 - tipWidth / 2 + POINTER_ADJUST + "px";
          } else {
            leftValue = tooltipWidth / 2 - tipWidth / 2 + "px";
          }
        }
      } else {
        if (this.tipClass === TIP_RIGHT) {
          leftValue = "99.9%";
          arrowInnerELe.style.left = "-" + (tipWidth - 2) + "px";
        } else {
          leftValue = -(tipWidth - 1) + "px";
          arrowInnerELe.style.left = -tipWidth + (tipWidth - 2) + "px";
        }
        var tipPosExclude = tooltipPositionY !== "Center" || tooltipHeight > target.offsetHeight || this.mouseTrail;
        if (tipPosExclude && tooltipPositionY === "Top" || !tipPosExclude && this.tipPointerPosition === "End") {
          topValue = tooltipHeight - tipHeight - POINTER_ADJUST + "px";
        } else if (tipPosExclude && tooltipPositionY === "Bottom" || !tipPosExclude && this.tipPointerPosition === "Start") {
          topValue = POINTER_ADJUST + "px";
        } else {
          topValue = tooltipHeight / 2 - tipHeight / 2 + "px";
        }
      }
      arrowEle.style.top = topValue;
      arrowEle.style.left = leftValue;
    };
    Tooltip2.prototype.renderContent = function(target) {
      var tooltipContent = select("." + CONTENT, this.tooltipEle);
      if (this.cssClass) {
        addClass([this.tooltipEle], this.cssClass.split(" "));
      }
      if (target && !isNullOrUndefined(target.getAttribute("title"))) {
        target.setAttribute("data-content", target.getAttribute("title"));
        target.removeAttribute("title");
      }
      if (!isNullOrUndefined(this.content)) {
        tooltipContent.innerHTML = "";
        if (this.content instanceof HTMLElement) {
          tooltipContent.appendChild(this.content);
        } else if (typeof this.content === "string") {
          if (this.isAngular) {
            this.setProperties({
              content: SanitizeHtmlHelper.sanitize(this.content)
            }, true);
          } else {
            this.content = this.enableHtmlSanitizer ? SanitizeHtmlHelper.sanitize(this.content) : this.content;
          }
          if (this.enableHtmlParse) {
            var tempFunction = compile2(this.content);
            var tempArr = tempFunction({}, this, "content", this.element.id + "content", void 0, void 0, tooltipContent, this.root);
            if (tempArr) {
              append(tempArr, tooltipContent);
            }
          } else {
            tooltipContent["textContent"] = this.content;
          }
        } else {
          var templateFunction = compile2(this.content);
          var tempArr = templateFunction({}, this, "content", this.element.id + "content", void 0, void 0, tooltipContent);
          if (tempArr) {
            append(tempArr, tooltipContent);
          }
          this.renderReactTemplates();
        }
      } else {
        if (target && !isNullOrUndefined(target.getAttribute("data-content"))) {
          tooltipContent.innerHTML = target.getAttribute("data-content");
        }
      }
    };
    Tooltip2.prototype.renderCloseIcon = function() {
      if (!this.isSticky) {
        var existingCloseIcon = this.tooltipEle.querySelector("." + ICON2 + "." + CLOSE);
        if (existingCloseIcon) {
          remove(existingCloseIcon);
        }
        return;
      }
      var tipClose = this.createElement("div", {
        className: ICON2 + " " + CLOSE
      });
      this.tooltipEle.appendChild(tipClose);
      EventHandler.add(tipClose, Browser.touchStartEvent, this.onStickyClose, this);
    };
    Tooltip2.prototype.addDescribedBy = function(target, id) {
      var describedby = (target.getAttribute("aria-describedby") || "").split(/\s+/);
      if (describedby.indexOf(id) < 0) {
        describedby.push(id);
      }
      attributes(target, {
        "aria-describedby": describedby.join(" ").trim(),
        "data-tooltip-id": id
      });
    };
    Tooltip2.prototype.removeDescribedBy = function(target) {
      var id = target.getAttribute("data-tooltip-id");
      var describedby = (target.getAttribute("aria-describedby") || "").split(/\s+/);
      var index = describedby.indexOf(id);
      if (index !== -1) {
        describedby.splice(index, 1);
      }
      target.removeAttribute("data-tooltip-id");
      var orgdescribedby = describedby.join(" ").trim();
      if (orgdescribedby) {
        target.setAttribute("aria-describedby", orgdescribedby);
      } else {
        target.removeAttribute("aria-describedby");
      }
    };
    Tooltip2.prototype.tapHoldHandler = function(evt) {
      clearTimeout(this.autoCloseTimer);
      this.targetHover(evt.originalEvent);
    };
    Tooltip2.prototype.touchEndHandler = function() {
      var _this = this;
      if (this.isSticky) {
        return;
      }
      var close = function() {
        _this.close();
      };
      this.autoCloseTimer = setTimeout(close, TOUCHEND_HIDE_DELAY);
    };
    Tooltip2.prototype.targetClick = function(e) {
      var target;
      if (this.target) {
        target = closest(e.target, this.target);
      } else {
        target = this.element;
      }
      if (isNullOrUndefined(target)) {
        return;
      }
      if (target.getAttribute("data-tooltip-id") === null) {
        this.targetHover(e);
      } else if (!this.isSticky) {
        this.hideTooltip(this.animation.close, e, target);
      }
    };
    Tooltip2.prototype.targetHover = function(e) {
      var target;
      if (this.target) {
        target = closest(e.target, this.target);
      } else {
        target = this.element;
      }
      if (isNullOrUndefined(target) || target.getAttribute("data-tooltip-id") !== null && this.closeDelay === 0) {
        return;
      }
      var targetList = [].slice.call(selectAll('[data-tooltip-id= "' + this.ctrlId + '_content"]', document));
      for (var _i = 0, targetList_1 = targetList; _i < targetList_1.length; _i++) {
        var target_1 = targetList_1[_i];
        this.restoreElement(target_1);
      }
      this.showTooltip(target, this.animation.open, e);
    };
    Tooltip2.prototype.mouseMoveBeforeOpen = function(e) {
      this.mouseMoveEvent = e;
    };
    Tooltip2.prototype.mouseMoveBeforeRemove = function() {
      if (this.mouseMoveTarget) {
        EventHandler.remove(this.mouseMoveTarget, "mousemove touchstart", this.mouseMoveBeforeOpen);
      }
    };
    Tooltip2.prototype.showTooltip = function(target, showAnimation, e) {
      var _this = this;
      clearTimeout(this.showTimer);
      clearTimeout(this.hideTimer);
      if (this.openDelay && this.mouseTrail) {
        this.mouseMoveBeforeRemove();
        this.mouseMoveTarget = target;
        EventHandler.add(this.mouseMoveTarget, "mousemove touchstart", this.mouseMoveBeforeOpen, this);
      }
      this.tooltipEventArgs = {
        type: e ? e.type : null,
        cancel: false,
        target,
        event: e ? e : null,
        element: this.tooltipEle,
        isInteracted: !isNullOrUndefined(e)
      };
      var observeCallback = function(beforeRenderArgs) {
        _this.beforeRenderCallback(beforeRenderArgs, target, e, showAnimation);
      };
      this.trigger("beforeRender", this.tooltipEventArgs, observeCallback.bind(this));
    };
    Tooltip2.prototype.beforeRenderCallback = function(beforeRenderArgs, target, e, showAnimation) {
      if (beforeRenderArgs.cancel) {
        this.isHidden = true;
        this.clear();
        this.mouseMoveBeforeRemove();
      } else {
        this.isHidden = false;
        if (isNullOrUndefined(this.tooltipEle)) {
          this.ctrlId = this.element.getAttribute("id") ? getUniqueID(this.element.getAttribute("id")) : getUniqueID("tooltip");
          this.tooltipEle = this.createElement("div", {
            className: TOOLTIP_WRAP + " " + POPUP_ROOT2 + " " + POPUP_LIB,
            attrs: {
              role: "tooltip",
              "aria-hidden": "false",
              "id": this.ctrlId + "_content"
            },
            styles: "width:" + formatUnit(this.width) + ";height:" + formatUnit(this.height) + ";position:absolute;"
          });
          this.tooltipBeforeRender(target, this);
          this.tooltipAfterRender(target, e, showAnimation, this);
        } else {
          if (target) {
            this.adjustArrow(target, this.position, this.tooltipPositionX, this.tooltipPositionY);
            this.addDescribedBy(target, this.ctrlId + "_content");
            this.renderContent(target);
            Animation.stop(this.tooltipEle);
            this.reposition(target);
            this.tooltipAfterRender(target, e, showAnimation, this);
          }
        }
      }
    };
    Tooltip2.prototype.appendContainer = function(ctrlObj) {
      if (typeof this.container == "string") {
        if (this.container === "body") {
          this.containerElement = document.body;
        } else {
          this.isBodyContainer = false;
          this.containerElement = select(this.container, document);
        }
      } else if (this.container instanceof HTMLElement) {
        this.containerElement = this.container;
        this.isBodyContainer = this.containerElement.tagName === "BODY";
      }
      if (!this.isBodyContainer) {
        addClass([this.containerElement], POPUP_CONTAINER);
      }
      this.containerElement.appendChild(ctrlObj.tooltipEle);
    };
    Tooltip2.prototype.tooltipBeforeRender = function(target, ctrlObj) {
      if (target) {
        if (Browser.isDevice) {
          addClass([ctrlObj.tooltipEle], DEVICE2);
        }
        if (ctrlObj.width !== "auto") {
          ctrlObj.tooltipEle.style.maxWidth = formatUnit(ctrlObj.width);
        }
        ctrlObj.tooltipEle.appendChild(ctrlObj.createElement("div", {
          className: CONTENT
        }));
        this.appendContainer(ctrlObj);
        removeClass([ctrlObj.tooltipEle], HIDE_POPUP);
        ctrlObj.addDescribedBy(target, ctrlObj.ctrlId + "_content");
        ctrlObj.renderContent(target);
        addClass([ctrlObj.tooltipEle], POPUP_OPEN);
        if (ctrlObj.showTipPointer) {
          ctrlObj.renderArrow();
        }
        ctrlObj.renderCloseIcon();
        ctrlObj.renderPopup(target);
        ctrlObj.adjustArrow(target, ctrlObj.position, ctrlObj.tooltipPositionX, ctrlObj.tooltipPositionY);
        Animation.stop(ctrlObj.tooltipEle);
        ctrlObj.reposition(target);
      }
    };
    Tooltip2.prototype.tooltipAfterRender = function(target, e, showAnimation, ctrlObj) {
      if (target) {
        removeClass([ctrlObj.tooltipEle], POPUP_OPEN);
        addClass([ctrlObj.tooltipEle], POPUP_CLOSE);
        ctrlObj.tooltipEventArgs = {
          type: e ? e.type : null,
          cancel: false,
          target,
          event: e ? e : null,
          element: ctrlObj.tooltipEle,
          isInteracted: !isNullOrUndefined(e)
        };
        if (ctrlObj.needTemplateReposition() && !ctrlObj.mouseTrail && (showAnimation.effect === "None" || showAnimation.effect == "FadeIn" || // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.isReact && typeof ctrlObj.content != "string")) {
          ctrlObj.tooltipEle.style.display = "none";
        }
        var observeCallback = function(observedArgs) {
          ctrlObj.beforeOpenCallback(observedArgs, target, showAnimation, e);
        };
        ctrlObj.trigger("beforeOpen", ctrlObj.tooltipEventArgs, observeCallback.bind(ctrlObj));
      }
    };
    Tooltip2.prototype.beforeOpenCallback = function(observedArgs, target, showAnimation, e) {
      var _this = this;
      if (observedArgs.cancel) {
        this.isHidden = true;
        this.clear();
        this.mouseMoveBeforeRemove();
        this.restoreElement(target);
      } else {
        var openAnimation_1 = {
          name: showAnimation.effect === "None" && animationMode === "Enable" ? "FadeIn" : this.animation.open.effect,
          duration: showAnimation.duration,
          delay: showAnimation.delay,
          timingFunction: "easeOut"
        };
        if (showAnimation.effect === "None") {
          openAnimation_1 = void 0;
        }
        if (this.openDelay > 0) {
          var show = function() {
            if (_this.mouseTrail) {
              EventHandler.add(target, "mousemove touchstart mouseenter", _this.onMouseMove, _this);
            }
            if (_this.popupObj) {
              _this.popupObj.show(openAnimation_1, target);
              if (_this.mouseMoveEvent && _this.mouseTrail) {
                _this.onMouseMove(_this.mouseMoveEvent);
              }
            }
          };
          this.showTimer = setTimeout(show, this.openDelay);
        } else {
          if (this.popupObj) {
            this.popupObj.show(openAnimation_1, target);
          }
        }
      }
      if (e) {
        this.wireMouseEvents(e, target);
      }
    };
    Tooltip2.prototype.needTemplateReposition = function() {
      var tooltip = this;
      return !isNullOrUndefined(tooltip.viewContainerRef) && typeof tooltip.viewContainerRef !== "string" || this.isReact;
    };
    Tooltip2.prototype.checkCollision = function(target, x, y) {
      var elePos = {
        left: x,
        top: y,
        position: this.position,
        horizontal: this.tooltipPositionX,
        vertical: this.tooltipPositionY
      };
      var affectedPos = isCollide(this.tooltipEle, this.checkCollideTarget(), x, y);
      if (affectedPos.length > 0) {
        elePos.horizontal = affectedPos.indexOf("left") >= 0 ? "Right" : affectedPos.indexOf("right") >= 0 ? "Left" : this.tooltipPositionX;
        elePos.vertical = affectedPos.indexOf("top") >= 0 ? "Bottom" : affectedPos.indexOf("bottom") >= 0 ? "Top" : this.tooltipPositionY;
      }
      return elePos;
    };
    Tooltip2.prototype.calculateElementPosition = function(pos, offsetPos) {
      return [this.isBodyContainer ? pos.left + offsetPos.left : pos.left - this.containerElement.getBoundingClientRect().left + offsetPos.left + window.pageXOffset + this.containerElement.scrollLeft, this.isBodyContainer ? pos.top + offsetPos.top : pos.top - this.containerElement.getBoundingClientRect().top + offsetPos.top + window.pageYOffset + this.containerElement.scrollTop];
    };
    Tooltip2.prototype.collisionFlipFit = function(target, x, y) {
      var elePos = this.checkCollision(target, x, y);
      var newpos = elePos.position;
      if (this.tooltipPositionY !== elePos.vertical) {
        newpos = this.position.indexOf("Bottom") === 0 || this.position.indexOf("Top") === 0 ? elePos.vertical + this.tooltipPositionX : this.tooltipPositionX + elePos.vertical;
      }
      if (this.tooltipPositionX !== elePos.horizontal) {
        if (newpos.indexOf("Left") === 0) {
          elePos.vertical = newpos === "LeftTop" || newpos === "LeftCenter" ? "Top" : "Bottom";
          newpos = elePos.vertical + "Left";
        }
        if (newpos.indexOf("Right") === 0) {
          elePos.vertical = newpos === "RightTop" || newpos === "RightCenter" ? "Top" : "Bottom";
          newpos = elePos.vertical + "Right";
        }
        elePos.horizontal = this.tooltipPositionX;
      }
      this.tooltipEventArgs = {
        type: null,
        cancel: false,
        target,
        event: null,
        element: this.tooltipEle,
        collidedPosition: newpos
      };
      this.trigger("beforeCollision", this.tooltipEventArgs);
      if (this.tooltipEventArgs.cancel) {
        newpos = this.position;
      } else {
        var elePosVertical = elePos.vertical;
        var elePosHorizontal = elePos.horizontal;
        if (elePos.position !== newpos) {
          var pos = calculatePosition(target, elePosHorizontal, elePosVertical, !this.isBodyContainer, this.isBodyContainer ? null : this.containerElement.getBoundingClientRect());
          this.adjustArrow(target, newpos, elePosHorizontal, elePosVertical);
          var scalingFactors = this.getScalingFactor(target);
          var offsetPos = this.calculateTooltipOffset(newpos, scalingFactors.x, scalingFactors.y);
          offsetPos.top -= this.getOffSetPosition("TopBottom", newpos, this.offsetY);
          offsetPos.left -= this.getOffSetPosition("RightLeft", newpos, this.offsetX);
          elePos.position = newpos;
          var elePosition = this.calculateElementPosition(pos, offsetPos);
          elePos.left = elePosition[0];
          elePos.top = elePosition[1];
        } else {
          this.adjustArrow(target, newpos, elePosHorizontal, elePosVertical);
        }
      }
      var eleOffset = {
        left: elePos.left,
        top: elePos.top
      };
      var position = this.isBodyContainer ? fit(this.tooltipEle, this.checkCollideTarget(), {
        X: true,
        Y: this.windowCollision
      }, eleOffset) : eleOffset;
      this.tooltipEle.style.display = "block";
      var arrowEle = select("." + ARROW_TIP, this.tooltipEle);
      if (this.showTipPointer && arrowEle != null && (newpos.indexOf("Bottom") === 0 || newpos.indexOf("Top") === 0)) {
        var arrowleft = parseInt(arrowEle.style.left, 10) - (position.left - elePos.left);
        if (arrowleft < 0) {
          arrowleft = 0;
        } else if (arrowleft + arrowEle.offsetWidth > this.tooltipEle.clientWidth) {
          arrowleft = this.tooltipEle.clientWidth - arrowEle.offsetWidth;
        }
        arrowEle.style.left = arrowleft.toString() + "px";
      }
      this.tooltipEle.style.display = "";
      eleOffset.left = position.left;
      eleOffset.top = position.top;
      return eleOffset;
    };
    Tooltip2.prototype.getOffSetPosition = function(positionString, newPos, offsetType) {
      return positionString.indexOf(this.position.split(/(?=[A-Z])/)[0]) !== -1 && positionString.indexOf(newPos.split(/(?=[A-Z])/)[0]) !== -1 ? 2 * offsetType : 0;
    };
    Tooltip2.prototype.checkCollideTarget = function() {
      return !this.windowCollision && this.target ? this.element : null;
    };
    Tooltip2.prototype.hideTooltip = function(hideAnimation, e, targetElement2) {
      var _this = this;
      if (this.closeDelay > 0) {
        clearTimeout(this.hideTimer);
        clearTimeout(this.showTimer);
        var hide = function() {
          if (_this.closeDelay && _this.tooltipEle && _this.isTooltipOpen) {
            return;
          }
          _this.tooltipHide(hideAnimation, e, targetElement2);
        };
        this.hideTimer = setTimeout(hide, this.closeDelay);
      } else {
        this.tooltipHide(hideAnimation, e, targetElement2);
      }
    };
    Tooltip2.prototype.tooltipHide = function(hideAnimation, e, targetElement2) {
      var _this = this;
      var target;
      if (e) {
        target = this.target ? targetElement2 || e.target : this.element;
      } else {
        target = select('[data-tooltip-id= "' + this.ctrlId + '_content"]', document);
      }
      this.tooltipEventArgs = {
        type: e ? e.type : null,
        cancel: false,
        target,
        event: e ? e : null,
        element: this.tooltipEle,
        isInteracted: !isNullOrUndefined(e)
      };
      this.trigger("beforeClose", this.tooltipEventArgs, function(observedArgs) {
        if (!observedArgs.cancel) {
          _this.mouseMoveBeforeRemove();
          _this.popupHide(hideAnimation, target, e);
        } else {
          _this.isHidden = false;
        }
      });
    };
    Tooltip2.prototype.popupHide = function(hideAnimation, target, e) {
      if (target && e) {
        this.restoreElement(target);
      }
      this.isHidden = true;
      var closeAnimation = {
        name: hideAnimation.effect === "None" && animationMode === "Enable" ? "FadeOut" : this.animation.close.effect,
        duration: hideAnimation.duration,
        delay: hideAnimation.delay,
        timingFunction: "easeIn"
      };
      if (hideAnimation.effect === "None") {
        closeAnimation = void 0;
      }
      if (this.popupObj) {
        this.popupObj.hide(closeAnimation);
      }
    };
    Tooltip2.prototype.restoreElement = function(target) {
      this.unwireMouseEvents(target);
      if (!isNullOrUndefined(target.getAttribute("data-content"))) {
        target.setAttribute("title", target.getAttribute("data-content"));
        target.removeAttribute("data-content");
      }
      this.removeDescribedBy(target);
    };
    Tooltip2.prototype.clear = function() {
      var target = this.findTarget();
      if (target) {
        this.restoreElement(target);
      }
      if (this.tooltipEle) {
        removeClass([this.tooltipEle], POPUP_CLOSE);
        addClass([this.tooltipEle], POPUP_OPEN);
      }
      if (this.isHidden) {
        if (this.popupObj) {
          this.popupObj.destroy();
        }
        if (this.tooltipEle) {
          remove(this.tooltipEle);
        }
        this.tooltipEle = null;
        this.popupObj = null;
      }
    };
    Tooltip2.prototype.tooltipHover = function() {
      if (this.tooltipEle) {
        this.isTooltipOpen = true;
      }
    };
    Tooltip2.prototype.tooltipMouseOut = function(e) {
      this.isTooltipOpen = false;
      this.hideTooltip(this.animation.close, e, this.findTarget());
    };
    Tooltip2.prototype.onMouseOut = function(e) {
      var enteredElement = e.relatedTarget;
      if (enteredElement && !this.mouseTrail) {
        var checkForTooltipElement = closest(enteredElement, "." + TOOLTIP_WRAP + "." + POPUP_LIB + "." + POPUP_ROOT2);
        if (checkForTooltipElement) {
          EventHandler.add(checkForTooltipElement, "mouseleave", this.tooltipElementMouseOut, this);
        } else {
          this.hideTooltip(this.animation.close, e, this.findTarget());
          if (this.closeDelay === 0 && (this.animation.close.effect === "None" || this.isReact && typeof this.content != "string")) {
            this.clear();
          }
        }
      } else {
        this.hideTooltip(this.animation.close, e, this.findTarget());
        this.clear();
      }
    };
    Tooltip2.prototype.tooltipElementMouseOut = function(e) {
      this.hideTooltip(this.animation.close, e, this.findTarget());
      EventHandler.remove(this.element, "mouseleave", this.tooltipElementMouseOut);
      this.clear();
    };
    Tooltip2.prototype.onStickyClose = function() {
      this.close();
    };
    Tooltip2.prototype.onMouseMove = function(event) {
      var eventPageX = 0;
      var eventPageY = 0;
      if (event.type.indexOf("touch") > -1) {
        event.preventDefault();
        eventPageX = event.touches[0].pageX;
        eventPageY = event.touches[0].pageY;
      } else {
        eventPageX = event.pageX;
        eventPageY = event.pageY;
      }
      Animation.stop(this.tooltipEle);
      removeClass([this.tooltipEle], POPUP_CLOSE);
      addClass([this.tooltipEle], POPUP_OPEN);
      this.adjustArrow(event.target, this.position, this.tooltipPositionX, this.tooltipPositionY);
      var scalingFactors = this.getScalingFactor(event.target);
      var pos = this.calculateTooltipOffset(this.position, scalingFactors.x, scalingFactors.y);
      var x = eventPageX + pos.left + this.offsetX;
      var y = eventPageY + pos.top + this.offsetY;
      var elePos = this.checkCollision(event.target, x, y);
      if (this.tooltipPositionX !== elePos.horizontal || this.tooltipPositionY !== elePos.vertical) {
        var newpos = this.position.indexOf("Bottom") === 0 || this.position.indexOf("Top") === 0 ? elePos.vertical + elePos.horizontal : elePos.horizontal + elePos.vertical;
        elePos.position = newpos;
        this.adjustArrow(event.target, elePos.position, elePos.horizontal, elePos.vertical);
        var colpos = this.calculateTooltipOffset(elePos.position, scalingFactors.x, scalingFactors.y);
        elePos.left = eventPageX + colpos.left - this.offsetX;
        elePos.top = eventPageY + colpos.top - this.offsetY;
      }
      this.tooltipEle.style.left = elePos.left + "px";
      this.tooltipEle.style.top = elePos.top + "px";
    };
    Tooltip2.prototype.keyDown = function(event) {
      if (this.tooltipEle && event.keyCode === 27) {
        this.close();
      }
    };
    Tooltip2.prototype.touchEnd = function(e) {
      if (this.tooltipEle && closest(e.target, "." + ROOT2) === null && !this.isSticky) {
        this.close();
      }
    };
    Tooltip2.prototype.scrollHandler = function(e) {
      if (this.tooltipEle && !this.isSticky) {
        if (!closest(e.target, "." + TOOLTIP_WRAP + "." + POPUP_LIB + "." + POPUP_ROOT2) && !this.isSticky) {
          this.close();
        }
      }
    };
    Tooltip2.prototype.render = function() {
      this.initialize();
      this.wireEvents(this.opensOn);
      this.renderComplete();
    };
    Tooltip2.prototype.preRender = function() {
      this.tipClass = TIP_BOTTOM;
      this.tooltipPositionX = "Center";
      this.tooltipPositionY = "Top";
      this.isHidden = true;
    };
    Tooltip2.prototype.wireEvents = function(trigger) {
      var triggerList = this.getTriggerList(trigger);
      for (var _i = 0, triggerList_1 = triggerList; _i < triggerList_1.length; _i++) {
        var opensOn = triggerList_1[_i];
        if (opensOn === "Custom") {
          return;
        }
        if (opensOn === "Focus") {
          this.wireFocusEvents();
        }
        if (opensOn === "Click") {
          EventHandler.add(this.element, Browser.touchStartEvent, this.targetClick, this);
        }
        if (opensOn === "Hover") {
          if (Browser.isDevice) {
            this.touchModule = new Touch(this.element, {
              tapHoldThreshold: TAPHOLD_THRESHOLD,
              tapHold: this.tapHoldHandler.bind(this)
            });
            EventHandler.add(this.element, Browser.touchEndEvent, this.touchEndHandler, this);
          } else {
            EventHandler.add(this.element, "mouseover", this.targetHover, this);
          }
        }
      }
      EventHandler.add(document, "touchend", this.touchEnd, this);
      EventHandler.add(document, "scroll wheel", this.scrollHandler, this);
      EventHandler.add(window, "resize", this.windowResize, this);
      EventHandler.add(document, "keydown", this.keyDown, this);
    };
    Tooltip2.prototype.getTriggerList = function(trigger) {
      if (!trigger) return [];
      if (trigger === "Auto") {
        trigger = Browser.isDevice ? "Hover" : "Hover Focus";
      }
      return trigger.split(" ");
    };
    Tooltip2.prototype.wireFocusEvents = function() {
      if (!isNullOrUndefined(this.target)) {
        var targetList = [].slice.call(selectAll(this.target, this.element));
        this.targetsList = targetList;
        if (!isNullOrUndefined(this.targetsList) && this.targetsList.length > 0) {
          for (var _i = 0, targetList_2 = targetList; _i < targetList_2.length; _i++) {
            var target = targetList_2[_i];
            EventHandler.add(target, "focus", this.targetHover, this);
          }
        } else {
          EventHandler.add(this.element, "focusin", this.targetHover, this);
        }
      } else {
        EventHandler.add(this.element, "focusin", this.targetHover, this);
      }
    };
    Tooltip2.prototype.wireMouseEvents = function(e, target) {
      if (this.tooltipEle) {
        if (!this.isSticky) {
          if (e.type === "focus") {
            EventHandler.add(target, "blur", this.onMouseOut, this);
          }
          if (e.type === "focusin") {
            EventHandler.add(target, "focusout", this.onMouseOut, this);
          }
          if (e.type === "mouseover") {
            EventHandler.add(target, "mouseleave", this.onMouseOut, this);
          }
          if (this.closeDelay) {
            EventHandler.add(this.tooltipEle, "mouseenter", this.tooltipHover, this);
            EventHandler.add(this.tooltipEle, "mouseleave", this.tooltipMouseOut, this);
          }
        }
        if (this.mouseTrail && this.openDelay === 0) {
          EventHandler.add(target, "mousemove touchstart mouseenter", this.onMouseMove, this);
        }
      }
    };
    Tooltip2.prototype.unwireEvents = function(trigger) {
      var triggerList = this.getTriggerList(trigger);
      for (var _i = 0, triggerList_2 = triggerList; _i < triggerList_2.length; _i++) {
        var opensOn = triggerList_2[_i];
        if (opensOn === "Custom") {
          return;
        }
        if (opensOn === "Focus") {
          this.unwireFocusEvents();
        }
        if (opensOn === "Click") {
          EventHandler.remove(this.element, Browser.touchStartEvent, this.targetClick);
        }
        if (opensOn === "Hover") {
          if (Browser.isDevice) {
            if (this.touchModule) {
              this.touchModule.destroy();
            }
            EventHandler.remove(this.element, Browser.touchEndEvent, this.touchEndHandler);
          } else {
            EventHandler.remove(this.element, "mouseover", this.targetHover);
          }
        }
      }
      EventHandler.remove(document, "touchend", this.touchEnd);
      EventHandler.remove(document, "scroll wheel", this.scrollHandler);
      EventHandler.remove(window, "resize", this.windowResize);
      EventHandler.remove(document, "keydown", this.keyDown);
    };
    Tooltip2.prototype.unwireFocusEvents = function() {
      if (!isNullOrUndefined(this.target)) {
        var targetList = [].slice.call(selectAll(this.target, this.element));
        if (!isNullOrUndefined(this.targetsList) && this.targetsList.length > 0) {
          for (var _i = 0, targetList_3 = targetList; _i < targetList_3.length; _i++) {
            var target = targetList_3[_i];
            EventHandler.remove(target, "focus", this.targetHover);
          }
        } else {
          EventHandler.remove(this.element, "focusin", this.targetHover);
        }
      } else {
        EventHandler.remove(this.element, "focusin", this.targetHover);
      }
    };
    Tooltip2.prototype.unwireMouseEvents = function(target) {
      if (!this.isSticky) {
        var triggerList = this.getTriggerList(this.opensOn);
        for (var _i = 0, triggerList_3 = triggerList; _i < triggerList_3.length; _i++) {
          var opensOn = triggerList_3[_i];
          if (opensOn === "Focus") {
            EventHandler.remove(target, "blur", this.onMouseOut);
            EventHandler.remove(target, "focusout", this.onMouseOut);
          }
          if (opensOn === "Hover" && !Browser.isDevice) {
            EventHandler.remove(target, "mouseleave", this.onMouseOut);
          }
        }
        if (this.closeDelay) {
          EventHandler.remove(target, "mouseenter", this.tooltipHover);
          EventHandler.remove(target, "mouseleave", this.tooltipMouseOut);
        }
      }
      if (this.mouseTrail) {
        EventHandler.remove(target, "mousemove touchstart mouseenter", this.onMouseMove);
      }
    };
    Tooltip2.prototype.findTarget = function() {
      var target = select('[data-tooltip-id= "' + this.ctrlId + '_content"]', document);
      return target;
    };
    Tooltip2.prototype.getModuleName = function() {
      return "tooltip";
    };
    Tooltip2.prototype.getPersistData = function() {
      return this.addOnPersist([]);
    };
    Tooltip2.prototype.onPropertyChanged = function(newProp, oldProp) {
      var targetElement2 = this.findTarget();
      for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
        var prop = _a[_i];
        switch (prop) {
          case "width":
            if (this.tooltipEle && targetElement2) {
              this.tooltipEle.style.width = this.tooltipEle.style.maxWidth = formatUnit(newProp.width);
              this.reposition(targetElement2);
            }
            break;
          case "height":
            if (this.tooltipEle && targetElement2) {
              this.tooltipEle.style.height = formatUnit(newProp.height);
              this.reposition(targetElement2);
            }
            break;
          case "content":
            if (this.tooltipEle) {
              this.renderContent();
            }
            break;
          case "opensOn":
            this.unwireEvents(oldProp.opensOn);
            this.wireEvents(newProp.opensOn);
            break;
          case "position":
            this.formatPosition();
            if (this.tooltipEle && targetElement2) {
              var arrowInnerELe = select("." + ARROW_TIP_INNER, this.tooltipEle);
              if (arrowInnerELe) {
                arrowInnerELe.style.top = arrowInnerELe.style.left = null;
              }
              this.reposition(targetElement2);
            }
            break;
          case "tipPointerPosition":
            if (this.tooltipEle && targetElement2) {
              this.reposition(targetElement2);
            }
            break;
          case "offsetX":
            if (this.tooltipEle) {
              var x = newProp.offsetX - oldProp.offsetX;
              this.tooltipEle.style.left = (parseInt(this.tooltipEle.style.left, 10) + x).toString() + "px";
            }
            break;
          case "offsetY":
            if (this.tooltipEle) {
              var y = newProp.offsetY - oldProp.offsetY;
              this.tooltipEle.style.top = (parseInt(this.tooltipEle.style.top, 10) + y).toString() + "px";
            }
            break;
          case "cssClass":
            if (this.tooltipEle) {
              if (oldProp.cssClass) {
                removeClass([this.tooltipEle], oldProp.cssClass.split(" "));
              }
              if (newProp.cssClass) {
                addClass([this.tooltipEle], newProp.cssClass.split(" "));
              }
            }
            break;
          case "enableRtl":
            if (this.tooltipEle) {
              if (this.enableRtl) {
                addClass([this.tooltipEle], RTL5);
              } else {
                removeClass([this.tooltipEle], RTL5);
              }
            }
            break;
          case "isSticky":
            if (this.tooltipEle && targetElement2) {
              this.renderCloseIcon();
              this.reposition(targetElement2);
            }
            break;
          case "container":
            if (!isNullOrUndefined(this.containerElement)) {
              removeClass([this.containerElement], POPUP_CONTAINER);
            }
            this.container = newProp.container;
            if (this.tooltipEle && targetElement2) {
              this.appendContainer(this);
              this.reposition(targetElement2);
            }
        }
      }
    };
    Tooltip2.prototype.open = function(element2, animation) {
      if (isNullOrUndefined(animation)) {
        animation = this.animation.open;
      }
      if (isNullOrUndefined(element2)) {
        element2 = this.element;
      }
      if (element2.style.display === "none") {
        return;
      }
      this.showTooltip(element2, animation);
    };
    Tooltip2.prototype.close = function(animation) {
      if (!animation) {
        animation = this.animation.close;
      }
      this.hideTooltip(animation);
    };
    Tooltip2.prototype.refresh = function(target) {
      if (this.tooltipEle) {
        this.renderContent(target);
      }
      if (this.popupObj && target) {
        this.reposition(target);
      }
      if (!isNullOrUndefined(this.targetsList) && !isNullOrUndefined(this.target)) {
        var target_2 = selectAll(this.target, this.element);
        if (target_2.length !== this.targetsList.length) {
          this.unwireEvents(this.opensOn);
          this.wireEvents(this.opensOn);
        }
      }
    };
    Tooltip2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      if (this.tooltipEle) {
        remove(this.tooltipEle);
      }
      if (this.popupObj) {
        this.popupObj.destroy();
      }
      destroy();
      removeClass([this.element], ROOT2);
      this.unwireEvents(this.opensOn);
      this.unwireMouseEvents(this.element);
      this.tooltipEle = null;
      this.popupObj = null;
      var currentTarget = selectAll('[data-tooltip-id= "' + this.ctrlId + '_content"]', this.element);
      for (var _i = 0, currentTarget_1 = currentTarget; _i < currentTarget_1.length; _i++) {
        var target = currentTarget_1[_i];
        this.restoreElement(target);
      }
      this.containerElement = null;
      this.tipClass = null;
      this.tooltipPositionX = null;
      this.tooltipPositionY = null;
      this.ctrlId = null;
      this.tooltipEventArgs = null;
      this.touchModule = null;
      this.mouseMoveEvent = null;
      this.mouseMoveTarget = null;
      this.containerElement = null;
      this.targetsList = null;
    };
    __decorate16([Property("auto")], Tooltip2.prototype, "width", void 0);
    __decorate16([Property("auto")], Tooltip2.prototype, "height", void 0);
    __decorate16([Property()], Tooltip2.prototype, "content", void 0);
    __decorate16([Property("body")], Tooltip2.prototype, "container", void 0);
    __decorate16([Property()], Tooltip2.prototype, "target", void 0);
    __decorate16([Property("TopCenter")], Tooltip2.prototype, "position", void 0);
    __decorate16([Property(0)], Tooltip2.prototype, "offsetX", void 0);
    __decorate16([Property(0)], Tooltip2.prototype, "offsetY", void 0);
    __decorate16([Property(true)], Tooltip2.prototype, "showTipPointer", void 0);
    __decorate16([Property(true)], Tooltip2.prototype, "enableHtmlParse", void 0);
    __decorate16([Property(false)], Tooltip2.prototype, "windowCollision", void 0);
    __decorate16([Property("Auto")], Tooltip2.prototype, "tipPointerPosition", void 0);
    __decorate16([Property("Auto")], Tooltip2.prototype, "opensOn", void 0);
    __decorate16([Property(false)], Tooltip2.prototype, "mouseTrail", void 0);
    __decorate16([Property(false)], Tooltip2.prototype, "isSticky", void 0);
    __decorate16([Complex({}, Animation2)], Tooltip2.prototype, "animation", void 0);
    __decorate16([Property(0)], Tooltip2.prototype, "openDelay", void 0);
    __decorate16([Property(0)], Tooltip2.prototype, "closeDelay", void 0);
    __decorate16([Property()], Tooltip2.prototype, "cssClass", void 0);
    __decorate16([Property(true)], Tooltip2.prototype, "enableHtmlSanitizer", void 0);
    __decorate16([Property("")], Tooltip2.prototype, "htmlAttributes", void 0);
    __decorate16([Event2()], Tooltip2.prototype, "beforeRender", void 0);
    __decorate16([Event2()], Tooltip2.prototype, "beforeOpen", void 0);
    __decorate16([Event2()], Tooltip2.prototype, "afterOpen", void 0);
    __decorate16([Event2()], Tooltip2.prototype, "beforeClose", void 0);
    __decorate16([Event2()], Tooltip2.prototype, "afterClose", void 0);
    __decorate16([Event2()], Tooltip2.prototype, "beforeCollision", void 0);
    __decorate16([Event2()], Tooltip2.prototype, "created", void 0);
    __decorate16([Event2()], Tooltip2.prototype, "destroyed", void 0);
    Tooltip2 = __decorate16([NotifyPropertyChanges], Tooltip2);
    return Tooltip2;
  }(Component)
);

// node_modules/@syncfusion/ej2-popups/src/spinner/spinner.js
var globalTimeOut = {};
var DEFT_MAT_WIDTH = 30;
var DEFT_MAT3_WIDTH = 30;
var DEFT_FAB_WIDTH = 30;
var DEFT_FLUENT_WIDTH = 30;
var DEFT_FLUENT2_WIDTH = 30;
var DEFT_BOOT_WIDTH = 30;
var DEFT_BOOT4_WIDTH = 36;
var DEFT_BOOT5_WIDTH = 36;
var CLS_SHOWSPIN = "e-spin-show";
var CLS_HIDESPIN = "e-spin-hide";
var CLS_MATERIALSPIN = "e-spin-material";
var CLS_MATERIAL3SPIN = "e-spin-material3";
var CLS_FABRICSPIN = "e-spin-fabric";
var CLS_FLUENTSPIN = "e-spin-fluent";
var CLS_FLUENT2SPIN = "e-spin-fluent2";
var CLS_TAILWINDSPIN = "e-spin-tailwind";
var CLS_BOOTSPIN = "e-spin-bootstrap";
var CLS_BOOT4SPIN = "e-spin-bootstrap4";
var CLS_BOOT5SPIN = "e-spin-bootstrap5";
var CLS_HIGHCONTRASTSPIN = "e-spin-high-contrast";
var CLS_SPINWRAP = "e-spinner-pane";
var CLS_SPININWRAP = "e-spinner-inner";
var CLS_SPINCIRCLE = "e-path-circle";
var CLS_SPINARC = "e-path-arc";
var CLS_SPINLABEL = "e-spin-label";
var CLS_SPINTEMPLATE = "e-spin-template";
var spinTemplate = null;
var spinCSSClass = null;
function Spinner(action, options, target, type) {
  switch (action) {
    case "Create":
      var element2 = document.querySelector(options.target);
      var args = {
        type,
        target: element2,
        cssClass: options.cssClass,
        label: options.label,
        width: options.width
      };
      createSpinner(args);
      break;
    case "Show":
      showSpinner(document.querySelector(target));
      break;
    case "Hide":
      hideSpinner(document.querySelector(target));
      break;
    case "Set": {
      var setArgs = {
        cssClass: options.cssClass,
        type
      };
      setSpinner(setArgs);
      break;
    }
  }
}
function createSpinner(args, internalCreateElement) {
  var _a;
  if (!args.target) {
    return;
  }
  var radius;
  var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
  var container = create_spinner_container(args.target, makeElement);
  if (!isNullOrUndefined(args.cssClass)) {
    var classNames2 = args.cssClass.split(" ").filter(function(className) {
      return className.trim() !== "";
    });
    (_a = container.wrap.classList).add.apply(_a, classNames2);
  }
  if (!isNullOrUndefined(args.template) || !isNullOrUndefined(spinTemplate)) {
    var template = !isNullOrUndefined(args.template) ? args.template : spinTemplate;
    container.wrap.classList.add(CLS_SPINTEMPLATE);
    replaceContent(container.wrap, template, spinCSSClass);
  } else {
    var theme = !isNullOrUndefined(args.type) ? args.type : getTheme(container.wrap);
    var width = !isNullOrUndefined(args.width) ? args.width : void 0;
    radius = calculateRadius(width, theme);
    setTheme(theme, container.wrap, radius, makeElement);
    if (!isNullOrUndefined(args.label)) {
      createLabel(container.inner_wrap, args.label, makeElement);
    }
  }
  container.wrap.classList.add(CLS_HIDESPIN);
  container = null;
}
function createLabel(container, label, makeElement) {
  var labelEle = makeElement("div", {});
  labelEle.classList.add(CLS_SPINLABEL);
  labelEle.innerHTML = label;
  container.appendChild(labelEle);
  return labelEle;
}
function createMaterialSpinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Material",
    radius
  };
  create_material_element(container, uniqueID2, makeElement, CLS_MATERIALSPIN);
  mat_calculate_attributes(radius, container, "Material", CLS_MATERIALSPIN);
}
function createMaterial3Spinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Material3",
    radius
  };
  create_material_element(container, uniqueID2, makeElement, CLS_MATERIAL3SPIN);
  mat_calculate_attributes(radius, container, "Material3", CLS_MATERIAL3SPIN);
}
function createBootstrap4Spinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Bootstrap4",
    radius
  };
  create_material_element(container, uniqueID2, makeElement, CLS_BOOT4SPIN);
  mat_calculate_attributes(radius, container, "Bootstrap4", CLS_BOOT4SPIN);
}
function createBootstrap5Spinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Bootstrap5",
    radius
  };
  create_material_element(container, uniqueID2, makeElement, CLS_BOOT5SPIN);
  mat_calculate_attributes(radius, container, "Bootstrap5", CLS_BOOT5SPIN);
}
function startMatAnimate(container, uniqueID2, radius) {
  var globalObject = {};
  var timeOutVar = 0;
  globalTimeOut["" + uniqueID2].timeOut = 0;
  globalObject["" + uniqueID2] = globalVariables(uniqueID2, radius, 0, 0);
  var spinnerInfo = {
    uniqueID: uniqueID2,
    container,
    globalInfo: globalObject,
    timeOutVar
  };
  animateMaterial(spinnerInfo);
}
function createFabricSpinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Fabric",
    radius
  };
  create_fabric_element(container, uniqueID2, CLS_FABRICSPIN, makeElement);
  fb_calculate_attributes(radius, container, CLS_FABRICSPIN);
}
function createFluentSpinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Fluent",
    radius
  };
  create_fabric_element(container, uniqueID2, CLS_FLUENTSPIN, makeElement);
  fb_calculate_attributes(radius, container, CLS_FLUENTSPIN);
}
function createFluent2Spinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Fluent2",
    radius
  };
  create_fabric_element(container, uniqueID2, CLS_FLUENT2SPIN, makeElement);
  fb_calculate_attributes(radius, container, CLS_FLUENT2SPIN);
}
function createTailwindSpinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Tailwind",
    radius
  };
  create_fabric_element(container, uniqueID2, CLS_TAILWINDSPIN, makeElement);
  fb_calculate_attributes(radius, container, CLS_TAILWINDSPIN);
}
function createHighContrastSpinner(container, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "HighContrast",
    radius
  };
  create_fabric_element(container, uniqueID2, CLS_HIGHCONTRASTSPIN, makeElement);
  fb_calculate_attributes(radius, container, CLS_HIGHCONTRASTSPIN);
}
function getTheme(container) {
  var theme = window.getComputedStyle(container, ":after").getPropertyValue("content");
  return theme.replace(/['"]+/g, "");
}
function setTheme(theme, container, radius, makeElement) {
  var innerContainer = container.querySelector("." + CLS_SPININWRAP);
  var svg = innerContainer.querySelector("svg");
  if (!isNullOrUndefined(svg)) {
    innerContainer.removeChild(svg);
  }
  switch (theme) {
    case "Material":
      createMaterialSpinner(innerContainer, radius, makeElement);
      break;
    case "Material3":
      createMaterial3Spinner(innerContainer, radius, makeElement);
      break;
    case "Fabric":
      createFabricSpinner(innerContainer, radius, makeElement);
      break;
    case "Fluent":
      createFluentSpinner(innerContainer, radius, makeElement);
      break;
    case "Fluent2":
      createFluent2Spinner(innerContainer, radius, makeElement);
      break;
    case "Bootstrap":
      createBootstrapSpinner(innerContainer, radius, makeElement);
      break;
    case "HighContrast":
      createHighContrastSpinner(innerContainer, radius, makeElement);
      break;
    case "Bootstrap4":
      createBootstrap4Spinner(innerContainer, radius, makeElement);
      break;
    case "Bootstrap5":
      createBootstrap5Spinner(innerContainer, radius, makeElement);
      break;
    case "Tailwind":
    case "Tailwind-dark":
      createTailwindSpinner(innerContainer, radius, makeElement);
      break;
  }
}
function createBootstrapSpinner(innerContainer, radius, makeElement) {
  var uniqueID2 = random_generator();
  globalTimeOut["" + uniqueID2] = {
    timeOut: 0,
    type: "Bootstrap",
    radius
  };
  create_bootstrap_element(innerContainer, uniqueID2, makeElement);
  boot_calculate_attributes(innerContainer, radius);
}
function create_bootstrap_element(innerContainer, uniqueID2, makeElement) {
  var svgBoot = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var viewBoxValue = 64;
  var trans = 32;
  var defaultRadius = 2;
  svgBoot.setAttribute("id", uniqueID2);
  svgBoot.setAttribute("class", CLS_BOOTSPIN);
  svgBoot.setAttribute("viewBox", "0 0 " + viewBoxValue + " " + viewBoxValue);
  innerContainer.insertBefore(svgBoot, innerContainer.firstChild);
  for (var item = 0; item <= 7; item++) {
    var bootCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bootCircle.setAttribute("class", CLS_SPINCIRCLE + "_" + item);
    bootCircle.setAttribute("r", defaultRadius + "");
    bootCircle.setAttribute("transform", "translate(" + trans + "," + trans + ")");
    svgBoot.appendChild(bootCircle);
  }
}
function boot_calculate_attributes(innerContainer, radius) {
  var svg = innerContainer.querySelector("svg.e-spin-bootstrap");
  var x = 0;
  var y = 0;
  var rad = 24;
  svg.style.width = svg.style.height = radius + "px";
  var startArc = 90;
  for (var item = 0; item <= 7; item++) {
    var start = defineArcPoints(x, y, rad, startArc);
    var circleEle = svg.querySelector("." + CLS_SPINCIRCLE + "_" + item);
    circleEle.setAttribute("cx", start.x + "");
    circleEle.setAttribute("cy", start.y + "");
    startArc = startArc >= 360 ? 0 : startArc;
    startArc = startArc + 45;
  }
}
function generateSeries(begin, stop) {
  var series = [];
  var start = begin;
  var end = stop;
  var increment = false;
  var count = 1;
  formSeries(start);
  function formSeries(i) {
    series.push(i);
    if (i !== end || count === 1) {
      if (i <= start && i > 1 && !increment) {
        i = parseFloat((i - 0.2).toFixed(2));
      } else if (i === 1) {
        i = 7;
        i = parseFloat((i + 0.2).toFixed(2));
        increment = true;
      } else if (i < 8 && increment) {
        i = parseFloat((i + 0.2).toFixed(2));
        if (i === 8) {
          increment = false;
        }
      } else if (i <= 8 && !increment) {
        i = parseFloat((i - 0.2).toFixed(2));
      }
      ++count;
      formSeries(i);
    }
  }
  return series;
}
function animateBootstrap(innerContainer) {
  var svg = innerContainer.querySelector("svg.e-spin-bootstrap");
  var id = svg.getAttribute("id");
  for (var i = 1; i <= 8; i++) {
    var circleEle = innerContainer.getElementsByClassName("e-path-circle_" + (i === 8 ? 0 : i))[0];
    rotation(circleEle, i, i, generateSeries(i, i), id);
  }
  function rotation(circle, start, end, series, id2) {
    var count = 0;
    boot_animate(start);
    function boot_animate(radius) {
      if (globalTimeOut["" + id2].isAnimate) {
        ++count;
        circle.setAttribute("r", radius + "");
        if (count >= series.length) {
          count = 0;
        }
        globalTimeOut[id2].timeOut = setTimeout(boot_animate.bind(null, series[count]), 18);
      }
    }
  }
}
function replaceContent(container, template, cssClass) {
  if (!isNullOrUndefined(cssClass)) {
    container.classList.add(cssClass);
  }
  var inner = container.querySelector(".e-spinner-inner");
  inner.innerHTML = template;
}
function calculateRadius(width, theme) {
  var defaultSize;
  switch (theme) {
    case "Material":
      defaultSize = DEFT_MAT_WIDTH;
      break;
    case "Material3":
      defaultSize = DEFT_MAT3_WIDTH;
      break;
    case "Fabric":
      defaultSize = DEFT_FAB_WIDTH;
      break;
    case "Tailwind":
    case "Tailwind-dark":
      defaultSize = DEFT_FAB_WIDTH;
      break;
    case "Fluent":
      defaultSize = DEFT_FLUENT_WIDTH;
      break;
    case "Fluent2":
      defaultSize = DEFT_FLUENT2_WIDTH;
      break;
    case "Bootstrap4":
      defaultSize = DEFT_BOOT4_WIDTH;
      break;
    case "Bootstrap5":
      defaultSize = DEFT_BOOT5_WIDTH;
      break;
    default:
      defaultSize = DEFT_BOOT_WIDTH;
  }
  width = width ? parseFloat(width + "") : defaultSize;
  return theme === "Bootstrap" ? width : width / 2;
}
function globalVariables(id, radius, count, previousId) {
  return {
    radius,
    count,
    previousId
  };
}
function random_generator() {
  var random = "";
  var combine = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++) {
    random += combine.charAt(Math.floor(Math.random() * combine.length));
  }
  return random;
}
function create_fabric_element(innerCon, uniqueID2, themeClass, makeElement) {
  var svgFabric = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgFabric.setAttribute("id", uniqueID2);
  svgFabric.setAttribute("class", themeClass);
  var fabricCirclePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  fabricCirclePath.setAttribute("class", CLS_SPINCIRCLE);
  var fabricCircleArc = document.createElementNS("http://www.w3.org/2000/svg", "path");
  fabricCircleArc.setAttribute("class", CLS_SPINARC);
  innerCon.insertBefore(svgFabric, innerCon.firstChild);
  svgFabric.appendChild(fabricCirclePath);
  svgFabric.appendChild(fabricCircleArc);
}
function create_material_element(innerContainer, uniqueID2, makeElement, cls) {
  var svgMaterial = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var matCirclePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svgMaterial.setAttribute("class", cls);
  svgMaterial.setAttribute("id", uniqueID2);
  matCirclePath.setAttribute("class", CLS_SPINCIRCLE);
  innerContainer.insertBefore(svgMaterial, innerContainer.firstChild);
  svgMaterial.appendChild(matCirclePath);
}
function create_spinner_container(target, makeElement) {
  var spinnerContainer = makeElement("div", {});
  var spinnerInnerContainer = makeElement("div", {});
  spinnerContainer.classList.add(CLS_SPINWRAP);
  spinnerInnerContainer.classList.add(CLS_SPININWRAP);
  spinnerInnerContainer.setAttribute("aria-disabled", "true");
  target.appendChild(spinnerContainer);
  spinnerContainer.appendChild(spinnerInnerContainer);
  return {
    wrap: spinnerContainer,
    inner_wrap: spinnerInnerContainer
  };
}
function animateMaterial(spinnerInfo) {
  var start = 1;
  var end = 149;
  var duration = 1333;
  var max = 75;
  createCircle(start, end, easeAnimation, duration, spinnerInfo.globalInfo[spinnerInfo.uniqueID].count, max, spinnerInfo);
  spinnerInfo.globalInfo[spinnerInfo.uniqueID].count = ++spinnerInfo.globalInfo[spinnerInfo.uniqueID].count % 4;
}
function createCircle(start, end, easing, duration, count, max, spinnerInfo) {
  var id = ++spinnerInfo.globalInfo[spinnerInfo.uniqueID].previousId;
  var startTime = (/* @__PURE__ */ new Date()).getTime();
  var change = end - start;
  var diameter = getSize(spinnerInfo.globalInfo[spinnerInfo.uniqueID].radius * 2 + "");
  var strokeSize = getStrokeSize(diameter);
  var rotate = -90 * (spinnerInfo.globalInfo[spinnerInfo.uniqueID].count || 0);
  mat_animation(spinnerInfo);
  function mat_animation(spinnerInfo2) {
    var currentTime = Math.max(0, Math.min((/* @__PURE__ */ new Date()).getTime() - startTime, duration));
    updatePath(easing(currentTime, start, change, duration), spinnerInfo2.container);
    if (id === spinnerInfo2.globalInfo[spinnerInfo2.uniqueID].previousId && currentTime < duration) {
      globalTimeOut[spinnerInfo2.uniqueID].timeOut = setTimeout(mat_animation.bind(null, spinnerInfo2), 1);
    } else {
      animateMaterial(spinnerInfo2);
    }
  }
  function updatePath(value, container) {
    if (!isNullOrUndefined(container.querySelector("svg.e-spin-material")) || !isNullOrUndefined(container.querySelector("svg.e-spin-material3"))) {
      var svg = void 0;
      if (!isNullOrUndefined(container.querySelector("svg.e-spin-material")) && !isNullOrUndefined(container.querySelector("svg.e-spin-material").querySelector("path.e-path-circle"))) {
        svg = container.querySelector("svg.e-spin-material");
      } else if (!isNullOrUndefined(container.querySelector("svg.e-spin-material3")) && !isNullOrUndefined(container.querySelector("svg.e-spin-material3").querySelector("path.e-path-circle"))) {
        svg = container.querySelector("svg.e-spin-material3");
      }
      if (!isNullOrUndefined(svg)) {
        var path = svg.querySelector("path.e-path-circle");
        path.setAttribute("stroke-dashoffset", getDashOffset(diameter, strokeSize, value, max) + "");
        path.setAttribute("transform", "rotate(" + rotate + " " + diameter / 2 + " " + diameter / 2 + ")");
      }
    }
  }
}
function mat_calculate_attributes(radius, container, type, cls) {
  var diameter = radius * 2;
  var svg = container.querySelector("svg." + cls);
  var path = svg.querySelector("path.e-path-circle");
  var strokeSize = getStrokeSize(diameter);
  var transformOrigin = diameter / 2 + "px";
  svg.setAttribute("viewBox", "0 0 " + diameter + " " + diameter);
  svg.style.width = svg.style.height = diameter + "px";
  svg.style.transformOrigin = transformOrigin + " " + transformOrigin + " " + transformOrigin;
  path.setAttribute("d", drawArc(diameter, strokeSize));
  if (type === "Material" || type === "Material3" || type === "Fluent2") {
    path.setAttribute("stroke-width", strokeSize + "");
    path.setAttribute("stroke-dasharray", (diameter - strokeSize) * Math.PI * 0.75 + "");
    path.setAttribute("stroke-dashoffset", getDashOffset(diameter, strokeSize, 1, 75) + "");
  }
}
function getSize(value) {
  var parsed = parseFloat(value);
  return parsed;
}
function drawArc(diameter, strokeSize) {
  var radius = diameter / 2;
  var offset = strokeSize / 2;
  return "M" + radius + "," + offset + "A" + (radius - offset) + "," + (radius - offset) + " 0 1 1 " + offset + "," + radius;
}
function getStrokeSize(diameter) {
  return 10 / 100 * diameter;
}
function getDashOffset(diameter, strokeSize, value, max) {
  return (diameter - strokeSize) * Math.PI * (3 * max / 100 - value / 100);
}
function easeAnimation(current, start, change, duration) {
  var timestamp = (current /= duration) * current;
  var timecount = timestamp * current;
  return start + change * (6 * timecount * timestamp + -15 * timestamp * timestamp + 10 * timecount);
}
function fb_calculate_attributes(radius, innerConainer, trgClass) {
  var centerX = radius;
  var centerY = radius;
  var diameter = radius * 2;
  var startArc = 315;
  var endArc = 45;
  var svg = innerConainer.querySelector("." + trgClass);
  var circle = svg.querySelector(".e-path-circle");
  var path = svg.querySelector(".e-path-arc");
  var transformOrigin = diameter / 2 + "px";
  circle.setAttribute("d", defineCircle(centerX, centerY, radius));
  path.setAttribute("d", defineArc(centerX, centerY, radius, startArc, endArc));
  svg.setAttribute("viewBox", "0 0 " + diameter + " " + diameter);
  svg.style.transformOrigin = transformOrigin + " " + transformOrigin + " " + transformOrigin;
  svg.style.width = svg.style.height = diameter + "px";
}
function defineArcPoints(centerX, centerY, radius, angle) {
  var radians = (angle - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(radians),
    y: centerY + radius * Math.sin(radians)
  };
}
function defineArc(x, y, radius, startArc, endArc) {
  var start = defineArcPoints(x, y, radius, endArc);
  var end = defineArcPoints(x, y, radius, startArc);
  var d = ["M", start.x, start.y, "A", radius, radius, 0, 0, 0, end.x, end.y].join(" ");
  return d;
}
function defineCircle(x, y, radius) {
  var d = ["M", x, y, "m", -radius, 0, "a", radius, radius, 0, 1, 0, radius * 2, 0, "a", radius, radius, 0, 1, 0, -radius * 2, 0].join(" ");
  return d;
}
function showSpinner(container) {
  showHideSpinner(container, false);
  container = null;
}
function showHideSpinner(container, isHide) {
  var spinnerWrap;
  if (container) {
    if (container.classList.contains(CLS_SPINWRAP)) {
      spinnerWrap = container;
    } else {
      var spinWrapCollection = container.querySelectorAll("." + CLS_SPINWRAP);
      if (Browser.isIE) {
        for (var i = 0; i < spinWrapCollection.length; i++) {
          if (spinWrapCollection[i].parentElement && spinWrapCollection[i].parentElement === container) {
            spinnerWrap = spinWrapCollection[i];
            break;
          }
        }
      } else {
        spinnerWrap = Array.from(spinWrapCollection).find(function(wrap) {
          return wrap.parentElement === container;
        }) || null;
      }
    }
  }
  if (container && spinnerWrap) {
    var inner = spinnerWrap.querySelector("." + CLS_SPININWRAP);
    var spinCheck = isHide ? !spinnerWrap.classList.contains(CLS_SPINTEMPLATE) && !spinnerWrap.classList.contains(CLS_HIDESPIN) : !spinnerWrap.classList.contains(CLS_SPINTEMPLATE) && !spinnerWrap.classList.contains(CLS_SHOWSPIN);
    if (spinCheck) {
      var svgEle = spinnerWrap.querySelector("svg");
      if (isNullOrUndefined(svgEle)) {
        return;
      }
      var id = svgEle.getAttribute("id");
      globalTimeOut["" + id].isAnimate = !isHide;
      switch (globalTimeOut["" + id].type) {
        case "Material":
        case "Material3":
          if (isHide) {
            clearTimeout(globalTimeOut[id].timeOut);
          } else {
            startMatAnimate(inner, id, globalTimeOut[id].radius);
          }
          break;
        case "Bootstrap":
          if (isHide) {
            clearTimeout(globalTimeOut[id].timeOut);
          } else {
            animateBootstrap(inner);
          }
          break;
      }
    }
    if (isHide) {
      classList(spinnerWrap, [CLS_HIDESPIN], [CLS_SHOWSPIN]);
    } else {
      classList(spinnerWrap, [CLS_SHOWSPIN], [CLS_HIDESPIN]);
    }
    container = null;
  }
}
function hideSpinner(container) {
  showHideSpinner(container, true);
  container = null;
}
function setSpinner(args, internalCreateElement) {
  var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
  if (args.template !== void 0) {
    spinTemplate = args.template;
    if (args.template !== void 0) {
      spinCSSClass = args.cssClass;
    }
  }
  var container = document.querySelectorAll("." + CLS_SPINWRAP);
  for (var index = 0; index < container.length; index++) {
    ensureTemplate(args.template, container[index], args.type, args.cssClass, makeElement);
  }
}
function ensureTemplate(template, container, theme, cssClass, makeEle) {
  if (isNullOrUndefined(template) && !container.classList.contains(CLS_SPINTEMPLATE)) {
    replaceTheme(container, theme, cssClass, makeEle);
    if (container.classList.contains(CLS_SHOWSPIN)) {
      container.classList.remove(CLS_SHOWSPIN);
      showSpinner(container);
    } else {
      container.classList.remove(CLS_HIDESPIN);
      hideSpinner(container);
    }
  } else {
    spinTemplate = template;
    if (!isNullOrUndefined(cssClass)) {
      spinCSSClass = cssClass;
    }
    if (!isNullOrUndefined(spinTemplate)) {
      replaceContent(container, spinTemplate, spinCSSClass);
    }
  }
}
function replaceTheme(container, theme, cssClass, makeEle) {
  if (!isNullOrUndefined(cssClass)) {
    container.classList.add(cssClass);
  }
  var svgElement = container.querySelector("svg");
  if (!isNullOrUndefined(svgElement)) {
    var radius = theme === "Bootstrap" ? parseFloat(svgElement.style.height) : parseFloat(svgElement.style.height) / 2;
    var classNames2 = svgElement.getAttribute("class");
    var svgClassList = classNames2.split(/\s/);
    if (svgClassList.indexOf("e-spin-material") >= 0) {
      var id = svgElement.getAttribute("id");
      clearTimeout(globalTimeOut["" + id].timeOut);
    }
    setTheme(theme, container, radius, makeEle);
  }
}

export {
  getValue,
  setValue,
  deleteObject,
  isObject,
  getEnumValue,
  merge,
  extend,
  isNullOrUndefined,
  isUndefined,
  getUniqueID,
  debounce,
  compareElementParent,
  throwError,
  print,
  formatUnit,
  isBlazor,
  getElement,
  getInstance,
  HijriParser,
  onIntlChange,
  cldrData,
  defaultCurrencyCode,
  Internationalization,
  setCulture,
  getNumericObject,
  getDefaultDateObject,
  Ajax,
  Fetch,
  Browser,
  EventHandler,
  createElement,
  addClass,
  removeClass,
  isVisible,
  prepend,
  append,
  detach,
  remove,
  attributes,
  select,
  selectAll,
  closest,
  setStyleAttribute,
  classList,
  matches,
  Base,
  getComponent,
  Property,
  Complex,
  Collection,
  Event2 as Event,
  NotifyPropertyChanges,
  Animation,
  rippleEffect,
  isRippleEnabled,
  animationMode,
  ChildProperty,
  Component,
  Draggable,
  Droppable,
  KeyboardEvents,
  L10n,
  Touch,
  blazorTemplates,
  getRandomId,
  compile2 as compile,
  updateBlazorTemplate,
  resetBlazorTemplate,
  initializeCSPTemplate,
  SanitizeHtmlHelper,
  ComponentMixins,
  setValue2,
  ComplexBase,
  ArrayBase,
  ComponentBase,
  FormBase,
  Template,
  createCheckBox,
  rippleMouseHandler,
  Button,
  CheckBox,
  RadioButton,
  Switch,
  calculateRelativeBasedPosition,
  calculatePosition,
  fit,
  isCollide,
  flip,
  destroy,
  PositionData,
  Popup,
  getScrollableParent,
  getZindexPartial,
  getMaxZindex,
  ButtonProps,
  AnimationSettings,
  Dialog,
  DialogUtility,
  Animation2,
  Tooltip,
  Spinner,
  createSpinner,
  showSpinner,
  hideSpinner,
  setSpinner
};
//# sourceMappingURL=chunk-XRSD2IZO.js.map
