/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

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
/*!*************************************************************!*\
  !*** ./assets/src/js/commands/custom-post-type-commands.js ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Custom Post Type Commands
 *
 * Dynamic commands for user-created custom post types in Secure Custom Fields.
 * This file generates navigation commands for each registered post type that
 * the current user has access to, creating "View All", "Add New", and "Edit" commands.
 *
 * Post type data is provided via acf.data.customPostTypes, which is populated
 * by the PHP side after capability checks ensure the user has appropriate access.
 *
 * @since SCF 6.5.0
 */

/**
 * WordPress dependencies
 */






/**
 * Register custom post type commands
 */
const registerPostTypeCommands = () => {
  // Only proceed when WordPress commands API and there are custom post types accessible
  if (!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/commands') || !window.acf?.data?.customPostTypes?.length) {
    return;
  }
  const commandStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/commands');
  const adminUrl = window.acf.data.admin_url || '';
  const postTypes = window.acf.data.customPostTypes;
  postTypes.forEach(postType => {
    // Skip invalid post types or those missing required labels
    if (!postType?.name || !postType?.all_items || !postType?.add_new_item) {
      return;
    }

    // Register "View All" command for this post type
    commandStore.registerCommand({
      name: `scf/cpt-${postType.name}`,
      label: postType.all_items,
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        icon: 'admin-page'
      }),
      context: 'admin',
      description: postType.all_items,
      keywords: ['post type', 'content', 'cpt', postType.name, postType.label].filter(Boolean),
      callback: ({
        close
      }) => {
        document.location = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)(adminUrl + 'edit.php', {
          post_type: postType.name
        });
        close();
      }
    });

    // Register "Add New" command for this post type
    commandStore.registerCommand({
      name: `scf/new-${postType.name}`,
      label: postType.add_new_item,
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        icon: 'plus'
      }),
      context: 'admin',
      description: postType.add_new_item,
      keywords: ['add', 'new', 'create', 'content', postType.name, postType.label],
      callback: ({
        close
      }) => {
        document.location = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)(adminUrl + 'post-new.php', {
          post_type: postType.name
        });
        close();
      }
    });

    // Register "Edit Post Type" command for registered CPTs
    commandStore.registerCommand({
      name: `scf/edit-${postType.name}`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit post type: %s', 'secure-custom-fields'), postType.label),
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        icon: 'edit'
      }),
      context: 'admin',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit the %s post type settings', 'secure-custom-fields'), postType.label),
      keywords: ['edit', 'modify', 'post type', 'cpt', 'settings', postType.name, postType.label],
      callback: ({
        close
      }) => {
        document.location = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)(adminUrl + 'post.php', {
          post: postType.id,
          action: 'edit'
        });
        close();
      }
    });
  });
};
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(registerPostTypeCommands, {
    timeout: 500
  });
} else {
  setTimeout(registerPostTypeCommands, 500);
}
})();

/******/ })()
;
//# sourceMappingURL=scf-custom-post-types.js.map