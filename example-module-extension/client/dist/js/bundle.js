/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Injector = __webpack_require__(0);

var _Injector2 = _interopRequireDefault(_Injector);

var _transformNotesListItem = __webpack_require__("./client/src/transforms/transformNotesListItem.js");

var _transformNotesListItem2 = _interopRequireDefault(_transformNotesListItem);

var _transformReadNotes = __webpack_require__("./client/src/transforms/transformReadNotes.js");

var _transformReadNotes2 = _interopRequireDefault(_transformReadNotes);

var _transformAddForm = __webpack_require__("./client/src/transforms/transformAddForm.js");

var _transformAddForm2 = _interopRequireDefault(_transformAddForm);

var _transformCreateNote = __webpack_require__("./client/src/transforms/transformCreateNote.js");

var _transformCreateNote2 = _interopRequireDefault(_transformCreateNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Injector2.default.transform('noteslist-query-extension', function (updater) {
  updater.component('NotesListItem', _transformNotesListItem2.default);
  updater.query('ReadNotes', _transformReadNotes2.default);
  updater.component('NoteAddForm', _transformAddForm2.default);
  updater.query('CreateNote', _transformCreateNote2.default);
}, { after: ['noteslist-graphql', 'notesaddform-graphql'] });

/***/ }),

/***/ "./client/src/transforms/transformAddForm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transformAddForm = function transformAddForm() {
  return function (_ref) {
    var onAdd = _ref.onAdd;

    var content = void 0,
        priority = void 0;
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "label",
        null,
        "Note content"
      ),
      _react2.default.createElement("input", { type: "text", ref: function ref(node) {
          return content = node;
        } }),
      _react2.default.createElement(
        "label",
        null,
        "Priority"
      ),
      _react2.default.createElement(
        "select",
        { ref: function ref(node) {
            return priority = node;
          } },
        _react2.default.createElement(
          "option",
          { value: "low" },
          "Low"
        ),
        _react2.default.createElement(
          "option",
          { value: "medium" },
          "Medium"
        ),
        _react2.default.createElement(
          "option",
          { value: "high" },
          "High"
        )
      ),
      _react2.default.createElement(
        "button",
        { onClick: function onClick(e) {
            e.preventDefault();
            if (content && priority) {
              onAdd(content.value, priority.value);
            }
          } },
        "Add"
      )
    );
  };
};

exports.default = transformAddForm;

/***/ }),

/***/ "./client/src/transforms/transformCreateNote.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var transformCreateNote = function transformCreateNote(manager) {
  manager.addField('Priority');
  manager.transformApolloConfig('props', function (_ref) {
    var mutate = _ref.mutate;
    return function (prevProps) {
      var onAdd = function onAdd(content, priority) {
        mutate({
          variables: {
            Input: {
              Content: content,
              Priority: priority
            }
          }
        });
      };

      return _extends({}, prevProps, {
        onAdd: onAdd
      });
    };
  });
};

exports.default = transformCreateNote;

/***/ }),

/***/ "./client/src/transforms/transformNotesListItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transformNotesListItem = function transformNotesListItem() {
  return function (_ref) {
    var _ref$note = _ref.note,
        Content = _ref$note.Content,
        Priority = _ref$note.Priority;
    return _react2.default.createElement(
      'li',
      { className: 'priority-' + Priority },
      Content,
      ' [PRIORITY: ',
      Priority,
      ']'
    );
  };
};

exports.default = transformNotesListItem;

/***/ }),

/***/ "./client/src/transforms/transformReadNotes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var transformReadNotes = function transformReadNotes(manager) {
  manager.addField('Priority');
};

exports.default = transformReadNotes;

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map