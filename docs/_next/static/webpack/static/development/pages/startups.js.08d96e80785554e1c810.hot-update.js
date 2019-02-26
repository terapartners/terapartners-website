webpackHotUpdate("static/development/pages/startups.js",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_anime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-anime */ "./node_modules/react-anime/dist/react-anime.js");
/* harmony import */ var react_anime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flexbox-grid */ "./node_modules/react-flexbox-grid/lib/index.js");
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/projects/terapartners/terapartners-website/components/Menu.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import ImageParallax from '../Home/ImageParallax';






var Background = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__Background",
  componentId: "sc-2lbcth-0"
})(["height:100px;width:100%;"]);
var BackgroundFixed = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Menu__BackgroundFixed",
  componentId: "sc-2lbcth-1"
})(["position:fixed;top:0;left:0;z-index:100;background-color:#fff;height:100px;width:100%;"]); // const LogoWrapper = styled.div`
//   width: 100px;
// `;
// const Span = styled.span`
//   position: absolute;
//   border-bottom: 4px solid transparent;
//   z-index: -1;
//   transform: translateX(-60px);
//   transition: all .35s ease-in-out;
// `;

var Li = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Menu__Li",
  componentId: "sc-2lbcth-2"
})(["display:inline-block;text-align:center;&:hover ~ hr{margin-left:", "px;width:", "px;}&:hover > a{color:#005f9e;cursor:pointer;}"], function (props) {
  return props.map[props.number].begin;
}, function (props) {
  return function () {
    return props.map[props.number].width;
  };
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Menu__Button",
  componentId: "sc-2lbcth-3"
})(["background-color:none;font-size:14px;text-transform:uppercase;margin-left:15px;margin-right:15px;font-family:Rajdhani;display:block;&:hover ~ hr{color:#005f9e;}"]);
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].hr.withConfig({
  displayName: "Menu__Hr",
  componentId: "sc-2lbcth-4"
})(["height:.10rem;margin-left:", "px;width:", "px;background:#005f9e;border:none;transition:.3s ease-in-out;margin-top:0;"], function (props) {
  return props.location ? props.location.begin : '';
}, function (props) {
  return props.location ? props.location.width : '';
}); // const Wrapper = styled.div`
//   margin-left: 156px;
//   margin-right: 156px;
//   height: 100%;
// `;

var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Menu__Img",
  componentId: "sc-2lbcth-5"
})(["width:100px;"]);

var Menu =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Menu, _React$PureComponent);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this));
    _this.state = {
      location: props.router.pathname
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var router = this.props.router;

      if (router.pathname !== prevProps.router.pathname) {
        this.setState({
          // eslint-disable-line react/no-did-update-set-state
          location: router.pathname
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var map = [{
        url: '/',
        begin: 0,
        width: 103.8
      }, {
        url: '/mea',
        begin: 103.8,
        width: 55.6
      }, {
        url: '/restructuring',
        begin: 159.4,
        width: 120.7
      }, {
        url: '/startups',
        begin: 280.1,
        width: 87.5
      }, {
        url: '/contact',
        begin: 367.6,
        width: 80.2
      }];
      var location = this.state.location;
      var currLocation = map.filter(function (m) {
        return m.url === location;
      })[0];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackgroundFixed, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        style: {
          height: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        middle: "xs",
        between: "xs",
        style: {
          height: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        middle: "xs",
        xs: 2,
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_anime__WEBPACK_IMPORTED_MODULE_2___default.a, {
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 4000,
        delay: function delay(el, i) {
          return 1000 + 100 * i;
        },
        key: 2222,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
        src: "/static/logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        xs: 6,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        end: "xs",
        middle: "xs",
        style: {
          height: '100%',
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_anime__WEBPACK_IMPORTED_MODULE_2___default.a, {
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: function delay(el, i) {
          return 1000 + 100 * i;
        },
        key: 1111,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Li, {
        map: map,
        number: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Who we are"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Li, {
        map: map,
        number: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/mea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "M&A"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Li, {
        map: map,
        number: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/restructuring",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Restructuring"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Li, {
        map: map,
        number: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/startups",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Startups"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hr, {
        location: currLocation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }))))))))));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Menu));

/***/ })

})
//# sourceMappingURL=startups.js.08d96e80785554e1c810.hot-update.js.map