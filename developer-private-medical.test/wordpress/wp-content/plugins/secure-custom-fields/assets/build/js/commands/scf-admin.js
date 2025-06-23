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
/*!**************************************************!*\
  !*** ./assets/src/js/commands/admin-commands.js ***!
  \**************************************************/
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
 * Admin Commands
 *
 * Core WordPress commands for Secure Custom Fields administration.
 * This file registers navigation commands for all primary SCF admin screens,
 * enabling quick access through the WordPress commands interface (Cmd+K / Ctrl+K).
 *
 * @since SCF 6.5.0
 */

/**
 * WordPress dependencies
 */






/**
 * Register admin commands for SCF
 */
const registerAdminCommands = () => {
  if (!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/commands') || !window.acf?.data) {
    return;
  }
  const commandStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/commands');
  const adminUrl = window.acf?.data?.admin_url || '';
  const commands = [{
    name: 'field-groups',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Field Groups', 'secure-custom-fields'),
    url: 'edit.php',
    urlArgs: {
      post_type: 'acf-field-group'
    },
    icon: 'layout',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: View and manage custom field groups', 'secure-custom-fields'),
    keywords: ['acf', 'custom fields', 'field editor', 'manage fields']
  }, {
    name: 'new-field-group',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Create New Field Group', 'secure-custom-fields'),
    url: 'post-new.php',
    urlArgs: {
      post_type: 'acf-field-group'
    },
    icon: 'plus',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Create a new field group to organize custom fields', 'secure-custom-fields'),
    keywords: ['add', 'new', 'create', 'field group', 'custom fields']
  }, {
    name: 'post-types',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Types', 'secure-custom-fields'),
    url: 'edit.php',
    urlArgs: {
      post_type: 'acf-post-type'
    },
    icon: 'admin-post',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Manage custom post types', 'secure-custom-fields'),
    keywords: ['cpt', 'content types', 'manage post types']
  }, {
    name: 'new-post-type',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Create New Post Type', 'secure-custom-fields'),
    url: 'post-new.php',
    urlArgs: {
      post_type: 'acf-post-type'
    },
    icon: 'plus',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Create a new custom post type', 'secure-custom-fields'),
    keywords: ['add', 'new', 'create', 'cpt', 'content type']
  }, {
    name: 'taxonomies',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Taxonomies', 'secure-custom-fields'),
    url: 'edit.php',
    urlArgs: {
      post_type: 'acf-taxonomy'
    },
    icon: 'category',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Manage custom taxonomies for organizing content', 'secure-custom-fields'),
    keywords: ['categories', 'tags', 'terms', 'custom taxonomies']
  }, {
    name: 'new-taxonomy',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Create New Taxonomy', 'secure-custom-fields'),
    url: 'post-new.php',
    urlArgs: {
      post_type: 'acf-taxonomy'
    },
    icon: 'plus',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Create a new custom taxonomy', 'secure-custom-fields'),
    keywords: ['add', 'new', 'create', 'taxonomy', 'categories', 'tags']
  }, {
    name: 'options-pages',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Options Pages', 'secure-custom-fields'),
    url: 'edit.php',
    urlArgs: {
      post_type: 'acf-ui-options-page'
    },
    icon: 'admin-settings',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Manage custom options pages for global settings', 'secure-custom-fields'),
    keywords: ['settings', 'global options', 'site options']
  }, {
    name: 'new-options-page',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Create New Options Page', 'secure-custom-fields'),
    url: 'post-new.php',
    urlArgs: {
      post_type: 'acf-ui-options-page'
    },
    icon: 'plus',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Create a new custom options page', 'secure-custom-fields'),
    keywords: ['add', 'new', 'create', 'options', 'settings page']
  }, {
    name: 'tools',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF Tools', 'secure-custom-fields'),
    url: 'admin.php',
    urlArgs: {
      page: 'acf-tools'
    },
    icon: 'admin-tools',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Access SCF utility tools', 'secure-custom-fields'),
    keywords: ['utilities', 'import export', 'json']
  }, {
    name: 'import',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Import SCF Data', 'secure-custom-fields'),
    url: 'admin.php',
    urlArgs: {
      page: 'acf-tools',
      tool: 'import'
    },
    icon: 'upload',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Import field groups, post types, taxonomies, and options pages', 'secure-custom-fields'),
    keywords: ['upload', 'json', 'migration', 'transfer']
  }, {
    name: 'export',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Export SCF Data', 'secure-custom-fields'),
    url: 'admin.php',
    urlArgs: {
      page: 'acf-tools',
      tool: 'export'
    },
    icon: 'download',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SCF: Export field groups, post types, taxonomies, and options pages', 'secure-custom-fields'),
    keywords: ['download', 'json', 'backup', 'migration']
  }];
  commands.forEach(command => {
    commandStore.registerCommand({
      name: 'scf/' + command.name,
      label: command.label,
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        icon: command.icon
      }),
      context: 'admin',
      description: command.description,
      keywords: command.keywords,
      callback: ({
        close
      }) => {
        document.location = command.urlArgs ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)(adminUrl + command.url, command.urlArgs) : adminUrl + command.url;
        close();
      }
    });
  });
};
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(registerAdminCommands, {
    timeout: 500
  });
} else {
  setTimeout(registerAdminCommands, 500);
}
})();

/******/ })()
;
//# sourceMappingURL=scf-admin.js.map