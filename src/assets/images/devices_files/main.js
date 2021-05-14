webpackHotUpdate("main",{

/***/ "./src/pages/device/views/Cards.js":
/*!*****************************************!*\
  !*** ./src/pages/device/views/Cards.js ***!
  \*****************************************/
/*! exports provided: default, LastUpdate, ConnectedBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastUpdate", function() { return LastUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedBadge", function() { return ConnectedBadge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_NoDataCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/NoDataCard */ "./src/components/NoDataCard.js");
/* harmony import */ var _CopyField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CopyField */ "./src/pages/device/CopyField.js");
/* harmony import */ var _context_DeviceState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/DeviceState */ "./src/context/DeviceState.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components */ "./src/components/index.js");
/* harmony import */ var _Devices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Devices */ "./src/pages/device/Devices.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table */ "./src/pages/device/views/Table.js");
var _jsxFileName = "/home/lucasr/git/kora/app.kora.com.br/src/pages/device/views/Cards.js";











function Cards({
  devices,
  loading
}) {
  const [redirect, setRedirect] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  if (redirect) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: redirect,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 24
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container pt-0 px-1 h-100",
    style: {
      overflow: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardLoading, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }) : devices && devices[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, devices.map(device => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    key: device._id,
    device: device,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NoDataCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "DEVICE_NO_DATA_FILTER_TEXT",
    small: "DEVICE_NO_DATA_TEXT",
    icon: "processor",
    action: () => setRedirect('device/new'),
    btnTitle: "BTN_DEVICE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }));
}

function CardLoading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, [1, 2, 3, 4].map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4",
    xl: "3",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      transition: 'all .2s',
      height: '146px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["SkeletonBox"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })))));
}

function Card({
  device
}) {
  const [hover, setHover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    openDevice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_DeviceState__WEBPACK_IMPORTED_MODULE_6__["DeviceContext"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4",
    xl: "3",
    className: "p-2",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => openDevice(device),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `bg-white p-2 rounded ${hover ? 'shadow' : 'shadow-sm'} h-100`,
    style: {
      transition: 'all .2s'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center text-truncate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, device.flg_blocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_9__["BlockedBadge"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }) : null, device.shared ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    icon: "share",
    size: "1",
    className: "mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 32
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    text: device.device_name,
    className: "text-truncate",
    size: "1.25",
    semiBold: true,
    isName: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Devices__WEBPACK_IMPORTED_MODULE_8__["ProtocolBadge"], {
    device: device,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedBadge, {
    device: device,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-2 pb-4 d-flex",
    style: {
      height: '60px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, device.devEUI ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CopyField__WEBPACK_IMPORTED_MODULE_5__["CopyField"], {
    text: device.devEUI || '-',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 30
    }
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LastUpdate, {
    updatedAt: device.last_activity,
    lastActivity: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })))));
}

const LastUpdate = ({
  className,
  loading,
  updatedAt,
  lastActivity
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 3
  }
}, !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Label"], {
  text: lastActivity ? 'LASTACTIVITY_AT' : 'UPDATED_AT',
  values: {
    value: updatedAt ? moment__WEBPACK_IMPORTED_MODULE_1___default()(updatedAt).format('DD/MMM/YY - HH:MM') : '-'
  },
  size: ".75",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 7
  }
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "w-50 ml-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["SkeletonLine"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 9
  }
})));
const ConnectedBadge = ({
  device
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "d-flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
  className: `${device.isConnectedUplink() ? 'bg-success' : 'bg-light'} rounded px-1 mr-1`,
  icon: "up_left_arrow_filled",
  size: "1",
  style: {
    transform: 'rotateY(180deg)'
  },
  theme: device.isConnectedUplink() ? 'light' : 'lightGrey',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
  className: `${device.isConnectedDownlink() ? 'bg-success' : 'bg-light'} rounded px-1 mr-1`,
  icon: "up_left_arrow_filled",
  style: {
    transform: 'rotateX(180deg)'
  },
  size: "1",
  theme: device.isConnectedDownlink() ? 'light' : 'lightGrey',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 5
  }
}));

/***/ })

})
//# sourceMappingURL=main.2d5422a57fdbd091b3c2.hot-update.js.map