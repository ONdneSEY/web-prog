/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/bindings/sources.js":
/*!*******************************************!*\
  !*** ./assets/src/js/bindings/sources.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies.
 */




/**
 * Get the value of a specific field from the ACF fields.
 *
 * @param {Object} fields The ACF fields object.
 * @param {string} fieldName The name of the field to retrieve.
 * @returns {string} The value of the specified field, or undefined if not found.
 */
const getFieldValue = (fields, fieldName) => fields?.acf?.[fieldName];
const resolveImageAttribute = (imageObj, attribute) => {
  if (!imageObj) return '';
  switch (attribute) {
    case 'url':
    case 'content':
      return imageObj.source_url;
    case 'alt':
      return imageObj.alt_text || '';
    case 'title':
      return imageObj.title?.rendered || '';
    default:
      return '';
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockBindingsSource)({
  name: 'acf/field',
  label: 'SCF Fields',
  getValues({
    context,
    bindings,
    select
  }) {
    const {
      getEditedEntityRecord,
      getMedia
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    let fields = context?.postType && context?.postId ? getEditedEntityRecord('postType', context.postType, context.postId) : undefined;
    const result = {};
    Object.entries(bindings).forEach(([attribute, {
      args
    } = {}]) => {
      const fieldName = args?.key;
      const fieldValue = getFieldValue(fields, fieldName);
      if (typeof fieldValue === 'object' && fieldValue !== null) {
        let value = '';
        if (fieldValue[attribute]) {
          value = fieldValue[attribute];
        } else if (attribute === 'content' && fieldValue.url) {
          value = fieldValue.url;
        }
        result[attribute] = value;
      } else if (typeof fieldValue === 'number') {
        if (attribute === 'content') {
          result[attribute] = fieldValue.toString() || '';
        } else {
          const imageObj = getMedia(fieldValue);
          result[attribute] = resolveImageAttribute(imageObj, attribute);
        }
      } else {
        result[attribute] = fieldValue || '';
      }
    });
    return result;
  },
  canUserEditValue() {
    return false;
  }
});

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./assets/src/js/bindings/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources.js */ "./assets/src/js/bindings/sources.js");

})();

/******/ })()
;
//# sourceMappingURL=scf-bindings.js.map