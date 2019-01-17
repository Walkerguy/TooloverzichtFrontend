(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./services/message.service.ts":
/*!*************************************!*\
  !*** ./services/message.service.ts ***!
  \*************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./services/product.service.ts":
/*!*************************************!*\
  !*** ./services/product.service.ts ***!
  \*************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./services/message.service.ts");






var ProductService = /** @class */ (function () {
    function ProductService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.url = 'https://spatoolbackend.herokuapp.com/api/products';
    }
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (products) { return _this.log('fetched products'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getproducts', [])));
    };
    ProductService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ProductService.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n    background-color: black;\r\n    top:0;\r\n    padding:0;\r\n    margin-top:0;\r\n    margin-bottom:0;\r\n    height:100%;\r\n    min-height:100vh;\r\n}\r\n\r\n#spacer{\r\n  width:5px;\r\n}\r\n\r\n#header-img{\r\n  height:20vh;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n#photos {\r\n  /* Prevent vertical gaps */\r\n  line-height: 0;\r\n  -webkit-column-count: 5;\r\n  -webkit-column-gap:   0px;\r\n  -moz-column-count:    5;\r\n  -moz-column-gap:      0px;\r\n  column-count:         5;\r\n  column-gap:           0px;\r\n}\r\n\r\n#photos img {\r\n  /* Just in case there are inline attributes */\r\n  width: 100% !important;\r\n  height: auto !important;\r\n}\r\n\r\n#photos img:hover {\r\n  /* Just in case there are inline attributes */\r\n  width: 100% !important;\r\n  height: auto !important;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  #photos {\r\n  -webkit-column-count: 4;\r\n  column-count:         4;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  #photos {\r\n  -webkit-column-count: 3;\r\n  column-count:         3;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  #photos {\r\n  -webkit-column-count: 2;\r\n  column-count:         2;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  #photos {\r\n  -webkit-column-count: 1;\r\n  column-count:         1;\r\n  }\r\n}\r\n\r\n.image {\r\n  transition: border .1s; /* Animation */\r\n\r\n}\r\n\r\n.image:hover {\r\n  cursor: pointer;\r\n  border:1px solid white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixNQUFNO0lBQ04sVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFHRDtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QiwwQkFBMEI7Q0FDM0I7O0FBSUQ7RUFDRSw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtDQUN6Qjs7QUFDRDtFQUNFLDhDQUE4QztFQUM5Qyx1QkFBdUI7RUFDdkIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0U7RUFFQSx3QkFBd0I7RUFDeEIsd0JBQXdCO0dBQ3ZCO0NBQ0Y7O0FBQ0Q7RUFDRTtFQUVBLHdCQUF3QjtFQUN4Qix3QkFBd0I7R0FDdkI7Q0FDRjs7QUFDRDtFQUNFO0VBRUEsd0JBQXdCO0VBQ3hCLHdCQUF3QjtHQUN2QjtDQUNGOztBQUNEO0VBQ0U7RUFFQSx3QkFBd0I7RUFDeEIsd0JBQXdCO0dBQ3ZCO0NBQ0Y7O0FBRUQ7RUFDRSx1QkFBdUIsQ0FBQyxlQUFlOztDQUV4Qzs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdG9wOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbn1cclxuXHJcbiNzcGFjZXJ7XHJcbiAgd2lkdGg6NXB4O1xyXG59XHJcblxyXG4jaGVhZGVyLWltZ3tcclxuICBoZWlnaHQ6MjB2aDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4jcGhvdG9zIHtcclxuICAvKiBQcmV2ZW50IHZlcnRpY2FsIGdhcHMgKi9cclxuICBsaW5lLWhlaWdodDogMDtcclxuICAtd2Via2l0LWNvbHVtbi1jb3VudDogNTtcclxuICAtd2Via2l0LWNvbHVtbi1nYXA6ICAgMHB4O1xyXG4gIC1tb3otY29sdW1uLWNvdW50OiAgICA1O1xyXG4gIC1tb3otY29sdW1uLWdhcDogICAgICAwcHg7XHJcbiAgY29sdW1uLWNvdW50OiAgICAgICAgIDU7XHJcbiAgY29sdW1uLWdhcDogICAgICAgICAgIDBweDtcclxufVxyXG5cclxuXHJcblxyXG4jcGhvdG9zIGltZyB7XHJcbiAgLyogSnVzdCBpbiBjYXNlIHRoZXJlIGFyZSBpbmxpbmUgYXR0cmlidXRlcyAqL1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuI3Bob3RvcyBpbWc6aG92ZXIge1xyXG4gIC8qIEp1c3QgaW4gY2FzZSB0aGVyZSBhcmUgaW5saW5lIGF0dHJpYnV0ZXMgKi9cclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgI3Bob3RvcyB7XHJcbiAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDQ7XHJcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XHJcbiAgY29sdW1uLWNvdW50OiAgICAgICAgIDQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAjcGhvdG9zIHtcclxuICAtbW96LWNvbHVtbi1jb3VudDogICAgMztcclxuICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcclxuICBjb2x1bW4tY291bnQ6ICAgICAgICAgMztcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgI3Bob3RvcyB7XHJcbiAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDI7XHJcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XHJcbiAgY29sdW1uLWNvdW50OiAgICAgICAgIDI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICNwaG90b3Mge1xyXG4gIC1tb3otY29sdW1uLWNvdW50OiAgICAxO1xyXG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiAxO1xyXG4gIGNvbHVtbi1jb3VudDogICAgICAgICAxO1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlIHtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgLjFzOyAvKiBBbmltYXRpb24gKi9cclxuXHJcbn1cclxuXHJcbi5pbWFnZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal  -->\r\n\r\n<div class=\"modal fade\" id=\"demoModal\">\r\n  <div class=\"modal-dialog modal-dialog-centered\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"modal-title\">{{productje?.name}}</h2>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <img style=\"max-width:99%;\" [src]=\"productje?.imageurl\"/>\r\n        <p>Beschrijving: <b>{{productje?.description}}</b></p>\r\n        <p>Categorie: <b>{{productje?.categorie}}</b></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- website content -->\r\n\r\n<div id=\"content\">\r\n <div id=\"spacer\"></div>\r\n <img id=\"header-img\" src=\"../assets/images/bosch-logo.png\" alt=\"Bosch\" />\r\n <!-- <app-card></app-card> -->\r\n <section id=\"photos\" style=\"color:white\">\r\n   <img  *ngFor=\"let product of products\"\r\n   class=\"image\"\r\n   title=\"{{product.name}}\"\r\n   [src]=\"product.imageurl\"\r\n   onerror=\"this.style.display='none'\"\r\n   data-toggle=\"modal\"\r\n   data-target=\"#demoModal\"\r\n   (click)=\"photoclicked(product)\"\r\n    />\r\n</section>\r\n</div>\r\n\r\n\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"></script>\r\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./services/product.service.ts");



var AppComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function AppComponent(_productService) {
        var _this = this;
        this._productService = _productService;
        this.title = 'toolFrontend';
        // Access the Data Service's getproducts() method we defined
        this._productService.getProducts()
            .subscribe(function (res) { return _this.products = res; });
    }
    AppComponent.prototype.photoclicked = function (a) {
        console.log(a);
        this.productje = a;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "./services/product.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bram\Documents\Tool Verhuur Service\TooloverzichtFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map