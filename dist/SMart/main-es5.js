(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"navbar-brand logo\" href=\"https://www.smhs.org\">\n  <img src=\"https://smlunch.000webhostapp.com/seal.svg\" width=\"40\" height=\"40\"\n    class=\"d-inline-block align-top\" alt=\"\">\n  <p>Lunch</p>\n</a>\n<button class=\"btn btn-outline-secondary drr\" aria-expanded=\"false\" (click)=\"switch($event)\">Current</button>\n\n<div id=\"currentTimes\">\n  <h1 id=\"clock\">{{clock}}</h1>\n  <h4 id=\"date\">{{date}}</h4>\n  <h4 style=\"display:none\" id=\"monnum\">{{monnum}}</h4>\n</div>\n\n<div *ngIf=\"isManual\">\n  <div class=\"input-group mb-3 clll\">\n    <input type=\"text\" class=\"form-control cllin\" aria-label=\"Dollar amount (with dot and two decimal places)\">\n    <span class=\"input-group-text cllin\"><b>:</b></span>\n\n    <input type=\"text\" class=\"form-control cllin\" aria-label=\"Dollar amount (with dot and two decimal places)\">\n    <span class=\"input-group-text cllin\"><b>:</b></span>\n    <input type=\"text\" class=\"form-control cllin\" aria-label=\"Dollar amount (with dot and two decimal places)\">\n\n  </div>\n\n  <div *ngIf=\"load\" class=\"spinner-border text-dark\" role=\"status\" style=\"width:10px; height:10px;\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div *ngIf=\"!load\"class=\"input-group mb-3 ccc\">\n    <select (change)=\"changeData()\" class=\"custom-select de2\" id=\"manual_date\">\n      <option selected>Dates</option>\n      <option *ngFor=\"let date of datelist\">{{date}}</option>\n    </select>\n  </div>\n</div>\n\n\n<!--\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"nav nav-pills mb-3 mmmb\" id=\"pills-tab\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <button class=\"nav-link active btn btn-outline-primary btn-sm see\" id=\"pills-home-tab\" data-toggle=\"pill\"\n            href=\"#Search-home\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">Search</button>\n    </li>\n    <li class=\"nav-item\">\n        <button class=\"nav-link btn btn-outline-primary btn-sm see\" id=\"pills-profile-tab\" data-toggle=\"pill\"\n            href=\"#Sign-profile\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">Login & Sign up</button>\n    </li>\n</ul>\n\n<div class=\"tab-content\" id=\"pills-tabContent\">\n    <div class=\"tab-pane fade show active width320\" id=\"Search-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n        <span class=\"badge badge-success\" style=\"font-size: 20px;\">Quick Check</span>\n        <br>\n        <span class=\"badge badge-dark\">You can do a quick check of your lunch here.</span>\n        <span class=\"badge badge-dark\">You can create an account to see more features.</span>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">Peroid\n                    <div *ngIf=\"isDone\" class=\"spinner-border\" style=\"width: 1rem; height: 1rem;\" role=\"status\">\n                        <span class=\"sr-only\">Loading...</span>\n                    </div>\n                    <b>-{{luncper}}-</b> building</label>\n            </div>\n            <select (change)=\"isFirstLunch($event)\" value={{room}} class=\"custom-select op\" id=\"inputGrojjupSelect01\">\n                <option value=\"\">Options</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n        <div class=\"toast\" role=\"alert\" aria-live=\"polite\" aria-atomic=\"true\" data-autohide=\"true\">\n            <div class=\"toast-header\">\n                <img src=\"https://smlunch.000webhostapp.com/logoo_5805.png\" width=\"40\" height=\"40\" class=\"rounded mr-2\" alt=\"...\">\n                <strong class=\"mr-auto\">You have <b style=\"color:black;\">{{lunchOfDay}}</b></strong>\n                <small></small>\n                <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">;)</span>\n                </button>\n            </div>\n            <div class=\"toast-body\">\n                Hello, friend! FROM <a style=\"text-decoration: underline;\"\n                    href=\"https://www.smhs.org/academics/departments-and-courses/science/robotics\"><b>SMbly Required 5805</b></a>\n            </div>\n        </div>\n        <div class=\"alert alert-warning warr\" role=\"alert\">\n            We <b>ARE NOT</b> responsible for any wrong information on this website\n            It's to help you understand SM schedule faster. You should <b>NOT</b> rely on this app\n        </div>\n    </div>\n\n<div class=\"tab-pane fade\" id=\"Sign-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n\n   \n        <div id=\"signup\">\n            <form (submit)=\"signup($event)\">\n                <h1>Sign Up</h1>\n                <div class=\"{{alerttype.signup}} errorr signupe\" role=\"alert\">\n                    <strong>Hello!</strong> {{error.signup}}\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alet\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\"></span>\n                    </button>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail2\">User Name</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"text\" class=\"form-control\" id=\"sign-username\"\n                        aria-describedby=\"emailHelp\" placeholder=\"User Name\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Display Name</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"text\" class=\"form-control\" id=\"sign-display\"\n                        placeholder=\"Display Name\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\"><b>SM</b> Email</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"text\" class=\"form-control\" id=\"sign-email\"\n                        placeholder=\"your sm email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword2\">Password</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"password\" class=\"form-control\" id=\"sign-password\"\n                        placeholder=\"Password\" />\n                    <small id=\"emailHelp\" class=\"form-text text-muted\">DO NOT use your SM password</small>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Password Confirm</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"password\" class=\"form-control\" id=\"sign-passwordcon\"\n                        placeholder=\"Password Again\" />\n                </div>\n                <div class=\"form-group form-check\">\n                    <input (input)=\"checkSignUp($event)\" type=\"checkbox\" class=\"form-check-input\" id=\"sign-check\">\n                    <label class=\"form-check-label agree\" for=\"exampleCheck1\">Agree To <a>Terms and Condition</a></label>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n\n            </form>\n        </div>\n    \n\n        <div id=\"logins\" *ngIf=\"loginb\">\n            <form (submit)=\"loginUser($event)\">\n                <h1>Login</h1>\n                <div class=\"{{alerttype.login}} errorr logine\" role=\"alert\">\n                    <strong>Hello!</strong> {{error.login}}\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alet\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\"></span>\n                    </button>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">User Name or Email</label>\n                    <input (input)=\"checkLogin()\" type=\"text\" class=\"form-control\" id=\"name-or-email\"\n                        aria-describedby=\"emailHelp\" placeholder=\"Name or Email\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Password</label>\n                    <input (input)=\"checkLogin()\" type=\"password\" class=\"form-control\" id=\"login-password\"\n                        placeholder=\"Password\">\n                </div>\n\n                <button type=\"submit\" id=\"login-btn\" class=\"btn btn-primary\">Login</button>\n            </form>\n            <div class=\"alert alert-warning warr\" role=\"alert\">\n                We <b>ARE NOT</b> responsible for any wrong information on this website\n                It's to help you understand SM schedule faster. You should <b>NOT</b> rely on this app\n            </div>\n        </div>\n\n</div>\n\n<!--//////////////////modal///////////-->\n\n<!--\n<div *ngIf=\"loginb\" class=\"carousel slide ad\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\" data-interval=\"2000\">\n            <img src=\"http://frcscouting.ga/Scope_Ad.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\" data-interval=\"2000\">\n            <img id=\"yoshi\" src=\"http://frcscouting.ga/Scope_Ad.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\" data-interval=\"2000\">\n            <img src=\"http://frcscouting.ga/Scope_Ad.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n    </div>\n</div>-->\n<!--end of ad-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    404PageNotFound\n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userpage/userpage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userpage/userpage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"today-tab\" data-toggle=\"tab\" href=\"#today\" role=\"tab\" aria-controls=\"today\" aria-selected=\"true\">Today</a>\n    </li>\n    <li *ngIf=\"false\" class=\"nav-item\">\n        <a class=\"nav-link\" id=\"direction-tab\" data-toggle=\"tab\" href=\"#direction\" role=\"tab\" aria-controls=\"direction\" aria-selected=\"false\">Map</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"account-tab\" data-toggle=\"tab\" href=\"#account\" role=\"tab\" aria-controls=\"account\" aria-selected=\"false\">Account</a>\n    </li>\n    <li class=\"nav-item\">\n        <button (click)=\"signOut()\" class=\"btn btn-warning btn-sm signno\"><b>Sign Out</b></button>\n    </li>    \n</ul>\n<div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"today\" role=\"tabpanel\" aria-labelledby=\"today-tab\">\n        <div *ngIf=\"isPeriodAll\" class=\"alert alert-danger\" role=\"alert\">\n            You haven't finish your building info Click \"Account\" tab.\n        </div>\n\n        <div *ngIf=\"!isPeriodAll\" class=\"alert alert-success\" role=\"alert\">\n            Today's block: <b>{{todayblockD}}</b>\n        </div>\n        <div *ngIf=\"isLoad\" class=\"spinner-border text-dark\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n        <div *ngIf=\"!isPeriodAll\" id=\"timeL\">\n            <div *ngFor=\"let obj of time_line; index as i;\" class=\"btn-group sep a{{i}}\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary a{{i}}_1 spbtn\">{{obj.title}}</button>\n                <button type=\"button\" class=\"btn btn-info spbtn a{{i}}_2\" >{{obj.where}}</button>\n                <button type=\"button\" class=\"btn btn-dark spbtn a{{i}}_3\">{{obj.time}}</button>\n                <button type=\"button\" class=\"btn btn-success spbtn a{{i}}_4\">{{obj.timeleft}}</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"!isPeriodAll\" class=\"toast\" role=\"alert\" aria-live=\"polite\" aria-atomic=\"true\" data-autohide=\"true\">\n            <div class=\"toast-header\">\n                <img src=\"https://smlunch.000webhostapp.com/logoo_5805.png\" \n                width=\"40\" height=\"40\" class=\"rounded mr-2\" alt=\"...\">\n                <strong class=\"mr-auto hjhjh\">You have {{lunchOfDay}}</strong>\n                <small></small>\n                <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">;)</span>\n                </button>\n            </div>\n            <div class=\"toast-body\">\n                Hello, <b>{{display}}</b>! FROM <a style=\"text-decoration: underline;\" href=\"https://www.smhs.org/academics/departments-and-courses/science/robotics\"><b>SMbly Required 5805</b></a>\n            </div>\n        </div>\n\n        <div *ngIf=\"isBreak\" class=\"alert alert-info\" role=\"alert\">\n            You're at break now :)\n        </div>\n\n        \n    </div>\n\n    <div class=\"tab-pane fade\" id=\"direction\" role=\"tabpanel\" aria-labelledby=\"direction-tab\">\n        map\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"account\" role=\"tabpanel\" aria-labelledby=\"account-tab\">\n        <span class=\"badge badge-info\">User Name</span>\n        <div class=\"input-group mb-3\">\n            <input type=\"text\" value={{name}} class=\"form-control upname\" placeholder=\"username\" aria-label=\"Recipient's username\"\n                aria-describedby=\"button-addon2\">\n            <div class=\"input-group-append\">\n                <button (click)=\"updateUsername()\" placement=\"left\" ngbPopover=\"{{updatemessage.name}}\" class=\"btn btn-outline-success\" type=\"button\" id=\"button-addon2\">Change</button>\n            </div>\n        </div>\n\n        <span class=\"badge badge-info\">Display Name</span>\n        <div class=\"input-group mb-3\">\n            <input type=\"text\" value={{display}} class=\"form-control updisplay\" placeholder=\"username\" aria-label=\"Recipient's username\"\n                aria-describedby=\"button-addon2\">\n            <div class=\"input-group-append\">\n                <button (click)=\"updateDisplay()\" class=\"btn btn-outline-success\" \n                placement=\"left\" ngbPopover=\"{{updatemessage.display}}\"\n                type=\"button\" id=\"button-addon2\">Change</button>\n            </div>\n        </div>\n\n        <span class=\"badge badge-info\">Email</span>\n        <div class=\"input-group mb-3\">\n            <input type=\"text\" value={{email}} class=\"form-control upemail\" placeholder=\"username\" aria-label=\"Recipient's username\"\n                aria-describedby=\"button-addon2\">\n            <div class=\"input-group-append\">\n                <button (click)=\"updateEmail()\" placement=\"left\" ngbPopover=\"{{updatemessage.email}}\" class=\"btn btn-outline-success\" type=\"button\" id=\"button-addon2\">Change</button>\n            </div>\n        </div>\n\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 1 Building</label>\n            </div>\n            <select (change)=\"updatePeriod($event)\" value={{sche.p1}} class=\"custom-select\" id=\"inputGroupSelect01\">\n                    <option value=\"\">Options</option>\n                    <option value=\"B\">B</option>\n                    <option value=\"Talon\">Talon</option>\n                    <option value=\"C\">C</option>\n                    <option value=\"S\">S</option>\n                    <option value=\"G115\">G115</option>\n                    <option value=\"G116\">G116</option>\n                    <option value=\"G117\">G117</option>\n                    <option value=\"A\">A</option>\n                    <option value=\"T\">T</option>\n                    <option value=\"R\">R</option>\n                    <option value=\"G\">G</option>\n                    <option value=\"GYM\">GYM</option>\n                    <option value=\"Library\">Library</option>\n            </select>\n        </div>\n\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 2 Building</label>\n            </div>\n            <select (change)=\"updatePeriod($event)\" value={{sche.p2}} class=\"custom-select\" id=\"inputGroupSelect02\">\n                <option value=\"\">Options</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 3 Building</label>\n            </div>\n            <select (change)=\"updatePeriod($event)\" value={{sche.p3}} class=\"custom-select\" id=\"inputGroupSelect03\">\n                <option value=\"\">Options</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 4 Building</label>\n            </div>\n            <select (change)=\"updatePeriod($event)\" value={{sche.p4}} class=\"custom-select\" id=\"inputGroupSelect04\">\n                <option value=\"\">Options</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 5 Building</label>\n            </div>\n            <select (change)=\"updatePeriod($event)\" value={{sche.p5}} class=\"custom-select\" id=\"inputGroupSelect05\">\n                <option value=\"\">Options</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 6 Building</label>\n            </div>\n            <select (change)=\"updatePeriod($event)\" value={{sche.p6}} class=\"custom-select\" id=\"inputGroupSelect06\">\n                <option value=\"\">Options</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 7 Building</label>\n            </div>\n            <select (change)=\"updatePeriod($event)\" value={{sche.p7}} class=\"custom-select\" id=\"inputGroupSelect07\">\n                <option value=\"\">Options</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n\n        <div class=\"form-group form-check\">\n            <input *ngIf=\"!isPeriod8\" type=\"checkbox\" class=\"form-check-input\" (change)=\"period8($event)\" id=\"exampleCheck1\">\n            <input *ngIf=\"isPeriod8\" type=\"checkbox\" class=\"form-check-input\" (change)=\"period8($event)\" id=\"exampleCheck1\" checked>\n            <label class=\"form-check-label\" for=\"exampleCheck1\">Check if you have period 8th class</label>\n        </div>  \n        \n        <div *ngIf=\"isPeriod8\" class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 8 Building</label>\n            </div>\n            <select (change)=\"updatePeriod($event)\" value={{sche.p8}} class=\"custom-select\" id=\"inputGroupSelect08\">\n                <option value=\"\">Options(if you have period 8th class)</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingRoads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingRoads", function() { return routingRoads; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");







var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], pathMatch: 'full' },
    { path: 'userpage', component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__["UserpageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingRoads = [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__["UserpageComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nimg{\n    float:left;\n}\np{\n    font-size:30px;\n    margin-top:0px;\n}\n.navbar-brand {\n    height:55px;\n    padding-top: 0.315rem;\n}\n#clock {\n    position: absolute;\n    top:0px;\n    right:5px;\n    font-size: 20px;\n}\n#date {\n    position: absolute;\n    top:20px;\n    right:5px;\n    font-size: 20px;\n}\n.drr{\n    position: absolute;\n    top:40px;\n    right:5px;\n    width:70px;\n    height:20px;\n    padding: 0;\n}\n.clll{\n    position: absolute;\n    top:0px;\n    right:5px;\n    width:100px;\n    height:20px;\n    display: none;\n}\n.cllin{\n    height:20px;\n    font-size:15px;\n    padding:0;\n}\n.ccc{\n    width: 100px;\n    position: absolute;\n    right:5px;\n    top:10px;\n    padding:0px;\n}\n.de2{\n    padding:0;\n    font-size:14px;\n    height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbWd7XG4gICAgZmxvYXQ6bGVmdDtcbn1cbnB7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgbWFyZ2luLXRvcDowcHg7XG59XG4ubmF2YmFyLWJyYW5kIHtcbiAgICBoZWlnaHQ6NTVweDtcbiAgICBwYWRkaW5nLXRvcDogMC4zMTVyZW07XG59XG4jY2xvY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MHB4O1xuICAgIHJpZ2h0OjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4jZGF0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDoyMHB4O1xuICAgIHJpZ2h0OjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uZHJye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NDBweDtcbiAgICByaWdodDo1cHg7XG4gICAgd2lkdGg6NzBweDtcbiAgICBoZWlnaHQ6MjBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmNsbGx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowcHg7XG4gICAgcmlnaHQ6NXB4O1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGhlaWdodDoyMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uY2xsaW57XG4gICAgaGVpZ2h0OjIwcHg7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgcGFkZGluZzowO1xufVxuLmNjY3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OjVweDtcbiAgICB0b3A6MTBweDtcbiAgICBwYWRkaW5nOjBweDtcbn1cbi5kZTJ7XG4gICAgcGFkZGluZzowO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGhlaWdodDogMjVweDtcbn0iXX0= */"

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
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.service */ "./src/app/service.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, cookie) {
        this.auth = auth;
        this.cookie = cookie;
        this.title = 'SM Lunch';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.isManual = false;
        this.datelist = [];
        this.load = true;
        this.clock = "11 : 00 : 00";
        this.date = "2019-8-11";
        this.monnum = "2019-8-11";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getSche("non").subscribe(function (data) {
            var e_1, _a;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.entries(data.block)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), key = _d[0], value = _d[1];
                    _this.datelist.push(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.load = false;
        });
        setInterval(function () {
            _this.hexClock();
        }, 1000);
    };
    AppComponent.prototype.switch = function (e) {
        var tee = document.getElementById('currentTimes');
        e.preventDefault();
        var inn = e.target.innerText;
        if (inn == "Current") {
            e.target.innerText = "Manual";
            tee.style.display = "none";
            this.isManual = true;
        }
        else {
            e.target.innerText = "Current";
            tee.style.display = "block";
            this.isManual = false;
            this.auth.setIsAuto(true);
        }
    };
    AppComponent.prototype.changeData = function () {
        this.auth.setIsAuto(false);
        var b = this.auth.getisChange;
        this.auth.setIsChange(!b);
    };
    AppComponent.prototype.hexClock = function () {
        var time = new Date();
        var hours = (time.getHours()).toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        if (hours.length < 2) {
            hours = '0' + hours;
        }
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
        var dateStr = time.toDateString();
        this.clock = clockStr;
        //this.clock = "11 : 00 : 00";
        this.date = dateStr;
        //this.date = "2019-8-15";
        this.monnum = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
        //this.monnum = "2019-8-13";
    };
    AppComponent.ctorParameters = function () { return [
        { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service.service */ "./src/app/service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-push */ "./node_modules/ng-push/ng-push.umd.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_11__);











 //import the module
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingRoads"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                ng_push__WEBPACK_IMPORTED_MODULE_11__["PushNotificationsModule"]
                // AgmCoreModule.forRoot({
                //   apiKey: 'AIzaSyBXblJBNX6ul-oPWkDNRJm6oI9IQf_j3Tw'
                // })
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1{\n    font-size:30px;\n}\n#logins{\n    height: 20%;\n    width: 50%;\n    overflow-y: scroll;\n    text-align: center; \n    -webkit-overflow-scrolling: touch;\n    padding-left:10px;  \n    padding-right:10px;\n}\nbutton{\n    margin-left: 3px;\n    margin-top: 3px;\n}\n.ad{\n    width: 50%;\n    -webkit-transform: translate(100%,0px);\n            transform: translate(100%,0px);\n}\n#sign-email{\n    font-size:15px;\n}\n#signup{\n    height: 87%;\n    width: 50%;\n    text-align: center;\n    overflow-y: scroll;\n    padding-right:10px;  \n    padding-left:10px;  \n    float:right;\n}\n.form-group {\n    margin-bottom: 11px;\n}\nlabel {\n    margin-bottom: -5px;\n}\n.alert {\n    margin-bottom: 5px;\n}\n#emailHelp{\n    font-size:15px;\n    color:orangered !important;\n}\n.agree{\n    font-size:15px;\n}\n.agree a{\n    text-decoration: underline;\n}\n.agree a:hover{\n    color:blue;\n}\n.agree a:visited{\n    color:black;\n}\n.errorr{\n    padding:10px 3px;\n}\n.see{\n    padding:0;\n    height:30px;\n    width:125px;\n}\n.mmmb{\n    margin-bottom: 0;\n}\n.warr{\n    font-size:14.5px;\n}\n.width320{\n    width:320px;\n    margin: 0 auto;\n}\n.op{\n    border:5px solid blue;\n    height:45px;\n}\n.toast {\n    opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgxe1xuICAgIGZvbnQtc2l6ZTozMHB4O1xufVxuI2xvZ2luc3tcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDsgIFxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbn1cbmJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbi5hZHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsMHB4KTtcbn1cbiNzaWduLWVtYWlse1xuICAgIGZvbnQtc2l6ZToxNXB4O1xufVxuI3NpZ251cHtcbiAgICBoZWlnaHQ6IDg3JTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4OyAgXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7ICBcbiAgICBmbG9hdDpyaWdodDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxubGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG4uYWxlcnQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiNlbWFpbEhlbHB7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6b3JhbmdlcmVkICFpbXBvcnRhbnQ7XG59XG4uYWdyZWV7XG4gICAgZm9udC1zaXplOjE1cHg7XG59XG5cbi5hZ3JlZSBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYWdyZWUgYTpob3ZlcntcbiAgICBjb2xvcjpibHVlO1xufVxuXG4uYWdyZWUgYTp2aXNpdGVke1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmVycm9ycntcbiAgICBwYWRkaW5nOjEwcHggM3B4O1xufVxuLnNlZXtcbiAgICBwYWRkaW5nOjA7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgd2lkdGg6MTI1cHg7XG59XG4ubW1tYntcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLndhcnJ7XG4gICAgZm9udC1zaXplOjE0LjVweDtcbn1cbi53aWR0aDMyMHtcbiAgICB3aWR0aDozMjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5vcHtcbiAgICBib3JkZXI6NXB4IHNvbGlkIGJsdWU7XG4gICAgaGVpZ2h0OjQ1cHg7XG59XG5cbi50b2FzdCB7XG4gICAgb3BhY2l0eTogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, cookie, router) {
        this.auth = auth;
        this.cookie = cookie;
        this.router = router;
        this.blocktypes = {
            R: "Regular",
            S: "Single Block Mtg",
            D: "Double Block Mtg",
            Mn: "Minimum",
            All: "All Periods",
            Ms: "Mass",
            Rly: "Rally",
            A: "Assembly",
            Sp: "Special",
            RE: "Regular ETV",
            SE: "Single Block Mtg ETV",
            RlyE: "Rally ETV",
            SpE: "Special ETV",
            AP: "Academic Period"
        };
        this.alerttype = {
            login: "alert alert-success alert-dismissible fade show",
            signup: "alert alert-success alert-dismissible fade show"
        };
        this.error = {
            login: "No error so far",
            signup: "No error so far"
        };
        this.loginb = true;
        this.isAAuto = true;
        this.isDateChange = false;
        this.isGotDate = false;
        this.forFormerD = "";
        var iss = this.cookie.get('isLog_smlunch');
        if (iss == "true") {
            this.router.navigate(['userpage']);
        }
        else {
            this.cookie.set("isLog_smlunch", "false");
            this.cookie.set("userid_smlunch", "");
            this.cookie.set("name_smlunch", "");
            this.cookie.set("display_smlunch", "");
            this.cookie.set("email_smlunch", "");
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSche();
        this.room = this.cookie.get("tem_smlunch");
        if (this.room == 'B' || this.room == 'C' || this.room == 'S' || this.room == 'G115' || this.room == 'G116'
            || this.room == 'G117' || this.room == 'Talon') {
            this.lunchOfDay = "First Lunch";
        }
        else {
            this.lunchOfDay = "Second Lunch";
        }
        setInterval(function () {
            if (_this.date == "00 : 00 : 01" || !_this.isGotDate) {
                _this.getSche();
            }
            var b = _this.auth.getisAuto;
            if (b != _this.isAAuto) {
                _this.isAAuto = b;
                _this.getSche();
            }
            var b2 = _this.auth.getisChange;
            if (!_this.isAAuto && b2 != _this.isDateChange) {
                _this.getSche();
                _this.isDateChange = b2;
            }
            var mmmm = document.querySelector("#monnum");
            if (mmmm != undefined && _this.forFormerD != mmmm.innerText && _this.isAAuto) {
                _this.getSche();
                _this.forFormerD = mmmm.innerText;
            }
        }, 1000);
    };
    LoginComponent.prototype.getSche = function () {
        var _this = this;
        this.isDone = true;
        this.auth.getSche("non").subscribe(function (data) {
            if (_this.isAAuto) {
                _this.date = document.querySelector("#monnum").innerText;
            }
            else {
                _this.date = document.querySelector("#manual_date").value;
            }
            //for testing
            //this.date = "2019-9-11"
            _this.todayblock = data.block[_this.date];
            if (_this.todayblock != undefined) {
                _this.isGotDate = true;
                if (_this.isNumeric(_this.todayblock[_this.todayblock.length - 1])) {
                    var schestr = _this.todayblock.substring(0, _this.todayblock.length - 1);
                    var num = _this.todayblock[_this.todayblock.length - 1];
                    _this.todayblockD = _this.blocktypes[schestr] + num;
                    _this.todaytimes = data.sche[_this.todayblock.substring(0, _this.todayblock.length - 1)];
                    if (_this.todaytimes != undefined) {
                        _this.updateBANDP(Number(num), schestr);
                        _this.luncper = " " + _this.blockAndTime[Number(_this.todaytimes['First Lunch'].split('/')[1][6]) - 1][1] + " ";
                    }
                    else {
                        _this.isDone = false;
                        _this.luncper = "No";
                    }
                }
                else {
                    _this.todayblockD = _this.blocktypes[_this.todayblock];
                    _this.todaytimes = data.sche[_this.todayblock];
                    if (_this.todaytimes != undefined) {
                        _this.updateBANDP(-1, "S");
                        _this.luncper = " " + _this.blockAndTime[Number(_this.todaytimes['First Lunch'].split('/')[1][6]) - 1][1] + " ";
                    }
                    else {
                        _this.isDone = false;
                        _this.luncper = "No";
                    }
                }
            }
            else {
                if (_this.date.length == 0) {
                    _this.isGotDate = false;
                }
                else {
                    _this.isGotDate = true;
                    _this.luncper = "No";
                }
            }
            _this.isDone = false;
        });
    };
    LoginComponent.prototype.updateBANDP = function (c, sche) {
        if (c === void 0) { c = -1; }
        this.blockAndTime = [];
        if (c == -1) {
        }
        else {
            if (sche == "All") {
                for (var i = c; i < c + 7; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push("p" + i);
                    }
                    else {
                        this.blockAndTime.push("p" + (i - 7));
                    }
                }
            }
            else if (sche == "Mn" || sche == "Ms") {
                for (var i = c; i < c + 4; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push("p" + i);
                    }
                    else {
                        this.blockAndTime.push("p" + (i - 7));
                    }
                }
            }
            else if (sche == "S") {
                this.blockAndTime.push("meeting");
                for (var i = c; i < c + 5; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push("p" + i);
                    }
                    else {
                        this.blockAndTime.push("p" + (i - 7));
                    }
                }
            }
            else {
                for (var i = c; i < c + 6; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push("p" + i);
                    }
                    else {
                        this.blockAndTime.push("p" + (i - 7));
                    }
                }
            }
            this.blockAndTime.push("p8");
        }
    };
    LoginComponent.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    LoginComponent.prototype.isFirstLunch = function (e) {
        e.preventDefault();
        this.room = e.target.value;
        this.cookie.set("tem_smlunch", this.room);
        if (this.room == 'B' || this.room == 'C' || this.room == 'S' || this.room == 'G115' || this.room == 'G116'
            || this.room == 'G117' || this.room == 'Talon') {
            this.lunchOfDay = "First Lunch";
        }
        else {
            this.lunchOfDay = "Second Lunch";
        }
    };
    LoginComponent.prototype.checkLogin = function () {
        var username = document.querySelector("#name-or-email").value;
        var passw = document.querySelector("#login-password").value;
        if (username.length == 0 || passw.length == 0) {
            this.error.login = "Fill in all spaces";
            this.alerttype.login = "alert alert-danger alert-dismissible fade show";
        }
        else {
            this.error.login = "No error so far";
            this.alerttype.login = "alert alert-success alert-dismissible fade show";
        }
    };
    LoginComponent.prototype.checkSignUp = function (e) {
        e.preventDefault();
        var username = document.querySelector("#sign-username").value;
        var display = document.querySelector("#sign-display").value;
        var email = document.querySelector("#sign-email").value;
        var password = document.querySelector("#sign-password").value;
        var passwordc = document.querySelector("#sign-passwordcon").value;
        var tar = e.target;
        var emailSP = email.split('@');
        if (username.length == 0 || display.length == 0 || password.length == 0 || passwordc.length == 0 || email.length == 0) {
            this.error.signup = "Fill in all spaces";
            this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
        }
        else if (password != passwordc) {
            this.error.signup = "Passwords don\'t match";
            this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
        }
        else if (emailSP[1] != "smhsstudents.org" && emailSP[1] != "smhs.org"
            || emailSP.length > 2) {
            this.error.signup = "It is not a SM email";
            this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
        }
        else {
            this.error.signup = "No error so far";
            this.alerttype.signup = "alert alert-success alert-dismissible fade show";
        }
        if (tar.id == "sign-email") {
            if (tar.value[tar.value.length - 1] == "@") {
                tar.value = tar.value + "smhsstudents.org";
            }
            var emailSP_1 = tar.value.split('@');
            if (emailSP_1[1] != "smhsstudents.org" && emailSP_1[1] != "smhs.org"
                || emailSP_1.length > 2) {
                this.error.signup = "It is not a SM email";
                this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
            }
        }
    };
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        document.querySelector("#login-btn").innerText = "Logging in";
        event.preventDefault();
        if (this.error.login == "No error so far") {
            var target = event.target;
            var name_1 = target.querySelector('#name-or-email').value;
            var password = target.querySelector('#login-password').value;
            this.auth.login(name_1, password).subscribe(function (data) {
                if (data.success) {
                    _this.auth.setLoggedIn(true);
                    _this.error.login = data.message;
                    _this.alerttype.login = "alert alert-success alert-dismissible fade show";
                    _this.loginb = false;
                    _this.cookie.set("isLog_smlunch", "true");
                    _this.cookie.set("userid_smlunch", String(data.id));
                    _this.cookie.set("name_smlunch", data.name);
                    _this.cookie.set("display_smlunch", data.display);
                    _this.cookie.set("email_smlunch", data.email);
                    _this.router.navigate(['userpage']);
                }
                else {
                    document.querySelector("#login-btn").innerText = "Login";
                    _this.error.login = data.message;
                    _this.alerttype.login = "alert alert-danger alert-dismissible fade show";
                }
            });
        }
        else {
            document.querySelector("#login-btn").innerText = "Login";
        }
    };
    LoginComponent.prototype.signup = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.error.signup == "No error so far") {
            var target = event.target;
            var username = target.querySelector("#sign-username").value;
            var display = target.querySelector('#sign-display').value;
            var email = target.querySelector('#sign-email').value;
            var password = target.querySelector('#sign-password').value;
            var passwordc = target.querySelector('#sign-passwordcon').checked;
            var check = target.querySelector('#sign-check').checked;
            this.auth.signup(username, display, email, password, passwordc, check).subscribe(function (data) {
                if (data.success) {
                    //this.router.navigate(['signup'])
                    _this.auth.setLoggedIn(true);
                    _this.error.signup = data.message;
                    _this.alerttype.signup = "alert alert-success alert-dismissible fade show";
                    setTimeout(function () {
                        _this.loginb = false;
                        _this.cookie.set("isLog_smlunch", "true");
                        _this.cookie.set("userid_smlunch", String(data.id));
                        _this.cookie.set("name_smlunch", data.name);
                        _this.cookie.set("display_smlunch", data.display);
                        _this.cookie.set("email_smlunch", data.email);
                        _this.router.navigate(['userpage']);
                    }, 700);
                }
                else {
                    _this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
                    _this.error.signup = data.message;
                }
            });
            //console.log(role,name, team,password,passwordc,check)
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service.service.ts":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "X-TBA-Auth-Key": ""
    })
};
var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.isAuto = true;
        this.isChange = false;
        //private path ="https://smlunch.000webhostapp.com/"
        this.path = "";
    }
    ServiceService.prototype.setIsChange = function (b) {
        this.isChange = b;
    };
    Object.defineProperty(ServiceService.prototype, "getisChange", {
        get: function () {
            return this.isChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceService.prototype, "getisAuto", {
        get: function () {
            return this.isAuto;
        },
        enumerable: true,
        configurable: true
    });
    ServiceService.prototype.setIsAuto = function (b) {
        this.isAuto = b;
    };
    ServiceService.prototype.setLoggedIn = function (b) {
        this.isloggin = b;
    };
    ServiceService.prototype.getSche = function (non) {
        return this.http.post(this.path + 'scheduleYuhan(1).php', {
            non: non
        });
    };
    ServiceService.prototype.updatePeriod = function (id, val, idin) {
        return this.http.post(this.path + 'updatePeriod.php', {
            id: id,
            val: val,
            idin: idin
        });
    };
    ServiceService.prototype.updateUsername = function (id, val) {
        return this.http.post(this.path + 'updateUsername.php', {
            id: id,
            val: val
        });
    };
    ServiceService.prototype.updateDisplay = function (id, val) {
        return this.http.post(this.path + 'updateDisplay.php', {
            id: id,
            val: val
        });
    };
    ServiceService.prototype.updateEmail = function (id, val) {
        return this.http.post(this.path + 'updateEmail.php', {
            id: id,
            val: val
        });
    };
    Object.defineProperty(ServiceService.prototype, "getLogin", {
        get: function () {
            return this.isloggin;
        },
        enumerable: true,
        configurable: true
    });
    ServiceService.prototype.getPeriods = function (id) {
        return this.http.post(this.path + 'getPeriods.php', {
            id: id
        });
    };
    ServiceService.prototype.login = function (name, password) {
        return this.http.post(this.path + 'login.php', {
            name: name,
            password: password
        });
    };
    ServiceService.prototype.signup = function (username, display, email, password, passwordc, check) {
        return this.http.post(this.path + 'signup.php', {
            username: username,
            display: display,
            email: email,
            password: password,
            passwordc: passwordc,
            check: check
        });
    };
    ServiceService.prototype.changeUseInfo = function (data) {
        this.userInfo = data;
    };
    ServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpage/userpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#account{\n    height:100%;\n    overflow-y: scroll;\n    padding: 0 250px;\n}\n.mb-3, .my-3 {\n    margin-bottom: 5px !important;\n}\n.signno{\n    margin-top:3px;\n    margin-left:5px;\n}\n.form-group {\n    margin-bottom: 0px;\n}\n.sep{\n    margin-top:5px;\n    margin-left:5px;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n}\n.spbtn{\n    width:80px;\n    font-size: 14px;\n    padding:0;\n}\n#timeL{\n    width:320px;\n    margin: 0 auto;\n}\n.gray{\n    background-color:#aaa;\n}\n.toast {\n    opacity: 1;\n}\n@media (max-width:940px){\n    #account{\n        height: 600px;\n        padding: 0 50px;\n    }\n}\n@media (max-height:568px){\n    #account{\n        height: 450px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBhZ2UvdXNlcnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwYWdlL3VzZXJwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWNjb3VudHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMCAyNTBweDtcbn1cbi5tYi0zLCAubXktMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG4uc2lnbm5ve1xuICAgIG1hcmdpbi10b3A6M3B4O1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uc2Vwe1xuICAgIG1hcmdpbi10b3A6NXB4O1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xufVxuLnNwYnRue1xuICAgIHdpZHRoOjgwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6MDtcbn1cbiN0aW1lTHtcbiAgICB3aWR0aDozMjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5ncmF5e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2FhYTtcbn1cbi50b2FzdCB7XG4gICAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcbiAgICAjYWNjb3VudHtcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OjU2OHB4KXtcbiAgICAjYWNjb3VudHtcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/userpage/userpage.component.ts ***!
  \************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-push */ "./node_modules/ng-push/ng-push.umd.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_5__);






var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(cookie, router, auth, push) {
        this.cookie = cookie;
        this.router = router;
        this.auth = auth;
        this.push = push;
        this.blocktypes = {
            R: "Regular",
            S: "Single Block Mtg",
            Db: "Double Block Mtg",
            Mn: "Minimum",
            All: "All Periods",
            Ms: "Mass",
            Rly: "Rally",
            A: "Assembly",
            Sp: "Special",
            RE: "Regular ETV",
            SE: "Single Block Mtg ETV",
            RlyE: "Rally ETV",
            SpE: "Special ETV",
            AP: "Academic Period",
            MsE: 'Mass Special',
            OHM: "Office hour meeting",
            TA: "Modified schedule Trial run All periods",
            TR: "Modified schedule Trial run Regular day",
            TM: "Modified schedule Trial run Meeting",
            Ex: 'Exam',
            ExO: "Exam"
        };
        this.time_line = [];
        this.date = "";
        this.isAAuto = true;
        this.isDateChange = false;
        this.isSpecial = false;
        this.isGotDate = false;
        this.formerDate = "";
        this.count_updatetime = 0;
        this.runTwice = 0;
        this.formerTime = 0;
        this.updatemessage = {
            name: "Data Uploaded",
            email: "Data Uploaded",
            display: "Data Uploaded",
            periods: "Data Uploaded"
        };
        this.sche = {
            p1: "",
            p2: "",
            p3: "",
            p4: "",
            p5: "",
            p6: "",
            p7: "",
            p8: ""
        };
        this.isLoad = true;
        var islo = this.cookie.get('isLog_smlunch');
        if (islo == "true") {
            this.name = this.cookie.get('name_smlunch');
            this.email = this.cookie.get('email_smlunch');
            this.userid = this.cookie.get('userid_smlunch');
            this.display = this.cookie.get('display_smlunch');
            this.push.requestPermission();
        }
        else {
            this.cookie.set("isLog_smlunch", "false");
            this.cookie.set("userid_smlunch", "");
            this.cookie.set("name_smlunch", "");
            this.cookie.set("display_smlunch", "");
            this.cookie.set("email_smlunch", "");
            this.router.navigate(['']);
        }
    }
    UserpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPeriods();
        setInterval(function () {
            _this.time = document.querySelector("#clock").innerText;
            var cTime = Number(_this.time.split(":")[1]);
            if (_this.time == "00 : 00 : 01" || !_this.isGotDate) {
                _this.getSche();
            }
            var b = _this.auth.getisAuto;
            if (b != _this.isAAuto) {
                _this.isAAuto = b;
                _this.getSche();
                _this.runTwice = 0;
            }
            var b2 = _this.auth.getisChange;
            if (!_this.isAAuto && b2 != _this.isDateChange) {
                _this.isDateChange = b2;
                _this.getSche();
            }
            var cuurentD = document.querySelector("#monnum").innerText;
            if (_this.isAAuto && cuurentD != _this.formerDate) {
                _this.formerDate = cuurentD;
                _this.getSche();
            }
            /*
            if (!this.isSpecial && this.count_updatetime == 0) {
              this.updateTimeLeft()
              this.count_updatetime++
            }else{
              this.count_updatetime++
              if (this.count_updatetime == 41) {
                this.count_updatetime = 0
              }
            }*/
            if (cTime != _this.formerTime) {
                _this.updateTimeLeft();
                _this.formerTime = cTime;
            }
            if (_this.runTwice <= 1) {
                _this.updateTimeLeft();
                _this.runTwice++;
            }
            var hjhjh = document.querySelector(".hjhjh");
            if (hjhjh != undefined && hjhjh.innerText == "You have ") {
                hjhjh.innerText = "You have " + _this.lunchOfDay;
            }
        }, 1000);
    };
    UserpageComponent.prototype.updateTimeLeft = function () {
        var count = 0;
        if (this.time != undefined) {
            var numnow = Number(this.time.split(' : ')[0] + this.time.split(' : ')[1]);
            for (var ele in this.time_line) {
                var diff = this.isInRange(this.time_line[ele].time, numnow);
                var eleclas = document.querySelector(".a" + ele);
                if (diff != "" || !this.isAAuto) {
                    count++;
                    if (this.isAAuto) {
                        if (this.todayblockD == "Off") {
                            this.time_line[ele].timeleft = "today";
                        }
                        else {
                            this.time_line[ele].timeleft = diff;
                        }
                    }
                    else {
                        this.time_line[ele].timeleft = "";
                    }
                    if (eleclas != undefined) {
                        eleclas.children[0].style.backgroundColor = "#007bff";
                        eleclas.children[1].style.backgroundColor = "#17a2b8";
                        eleclas.children[2].style.backgroundColor = "#343a40";
                        eleclas.children[3].style.backgroundColor = "#28a745";
                    }
                }
                else {
                    this.time_line[ele].timeleft = "";
                    if (eleclas != undefined) {
                        eleclas.children[0].style.backgroundColor = "#aaa";
                        eleclas.children[1].style.backgroundColor = "#aaa";
                        eleclas.children[2].style.backgroundColor = "#aaa";
                        eleclas.children[3].style.backgroundColor = "#aaa";
                    }
                }
            }
            if (count == 0 || this.todayblockD == "Off") {
                this.isBreak = true;
            }
            else {
                this.isBreak = false;
            }
        }
    };
    UserpageComponent.prototype.isInRange = function (str, numm) {
        if (str.split('-')[1] != undefined) {
            var big = Number(str.split('-')[1].split(':').join(''));
            var small = Number(str.split('-')[0].split(':').join(''));
            if (numm > small && numm <= big) {
                var result = 0;
                var big_0 = Number(str.split('-')[1].split(':')[0]);
                var big_1 = Number(str.split('-')[1].split(':')[1]);
                var sm_0 = Number(String(numm).substring(0, String(numm).length - 2));
                var sm_1 = Number(String(numm).substring(String(numm).length - 2, 4));
                result += (big_0 - sm_0) * 60;
                if (big_1 < sm_1) {
                    result -= 60;
                    result += big_1 + (60 - sm_1);
                }
                else {
                    result += big_1 - sm_1;
                }
                return result + " mins left";
            }
            else {
                return "";
            }
        }
    };
    UserpageComponent.prototype.updateBANDP = function (c, sche) {
        if (c === void 0) { c = -1; }
        this.blockAndTime = [];
        if (c == -1) {
        }
        else {
            if (sche == "All" || sche == "0812Sp" || sche == "Rec" || sche == "TA") {
                for (var i = c; i < c + 7; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push("p" + i);
                    }
                    else {
                        this.blockAndTime.push("p" + (i - 7));
                    }
                }
            }
            else if (sche == "Mn" || sche == "Ms") {
                for (var i = c; i < c + 4; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push("p" + i);
                    }
                    else {
                        this.blockAndTime.push("p" + (i - 7));
                    }
                }
            }
            else if (sche == "S") {
                this.blockAndTime.push("meeting");
                for (var i = c; i < c + 5; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push("p" + i);
                    }
                    else {
                        this.blockAndTime.push("p" + (i - 7));
                    }
                }
            }
            else {
                for (var i = c; i < c + 6; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push("p" + i);
                    }
                    else {
                        this.blockAndTime.push("p" + (i - 7));
                    }
                }
            }
            this.blockAndTime.push("p8");
        }
    };
    UserpageComponent.prototype.updateTimelineS = function () {
        var e_1, _a;
        this.time_line = [];
        var luncper = this.todaytimes['First Lunch'].split('/')[1];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.entries(this.todaytimes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), key = _d[0], value = _d[1];
                if (key.substring(0, 7).includes("Block")) {
                    if (key == luncper) {
                        var nnum = Number(luncper[6]) - 1;
                        actual = this.blockAndTime[nnum];
                        var sppstr = this.todaytimes['First Lunch'].split("/");
                        this.time_line.push({
                            title: actual,
                            where: this.sche[actual],
                            time: sppstr[2],
                            timeleft: ""
                        }, {
                            title: 'Second Lunch',
                            where: " ",
                            time: this.todaytimes[luncper].split("/")[2],
                            timeleft: ""
                        });
                        var options = {
                            body: "Go after block" + (nnum + 1) + "(Period " + (actual[1]) + ")",
                            icon: "https://smlunch.000webhostapp.com/seal.svg"
                        };
                        this.push.create('Second Lunch', options).subscribe(//creates a notification
                        function (//creates a notification
                        res) { return console.log(res); }, function (err) { return console.log(err); });
                    }
                    else {
                        nnum = Number(key[6]) - 1;
                        var actual = this.blockAndTime[nnum];
                        this.time_line.push({
                            title: actual,
                            where: this.sche[actual],
                            time: value,
                            timeleft: ""
                        });
                    }
                }
                else if (key.includes("Period") && !key.includes("Academic")) {
                    this.time_line.push({
                        title: "p8",
                        where: this.sche["p8"],
                        time: value,
                        timeleft: ""
                    });
                }
                else if (key == "First Lunch") {
                }
                else {
                    this.time_line.push({
                        title: key,
                        where: " ",
                        time: value,
                        timeleft: ""
                    });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.updateTimeLeft();
    };
    UserpageComponent.prototype.updateTimelineF = function () {
        var e_2, _a;
        this.time_line = [];
        var luncper = this.todaytimes['First Lunch'].split('/')[1];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.entries(this.todaytimes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), key = _d[0], value = _d[1];
                if (key == 'First Lunch') {
                    var sppstr = String(value).split('/');
                    var nnum = Number(luncper[6]) - 1;
                    var actual = this.blockAndTime[nnum];
                    this.time_line.push({
                        title: key,
                        where: " ",
                        time: sppstr[0],
                        timeleft: ""
                    }, {
                        title: actual,
                        where: this.sche[actual],
                        time: this.todaytimes[luncper].split("/")[0],
                        timeleft: ""
                    });
                    var options = {
                        body: "Go after block" + (nnum) + "(Period " + (this.blockAndTime[nnum - 1][1]) + ")",
                        icon: "https://smlunch.000webhostapp.com/seal.svg"
                    };
                    this.push.create('First Lunch', options).subscribe(//creates a notification
                    function (//creates a notification
                    res) { return console.log(res); }, function (err) { return console.log(err); });
                }
                else if (key.substring(0, 7).includes("Block")) {
                    if (key == luncper) {
                    }
                    else {
                        nnum = Number(key[6]) - 1;
                        actual = this.blockAndTime[nnum];
                        this.time_line.push({
                            title: actual,
                            where: this.sche[actual],
                            time: value,
                            timeleft: ""
                        });
                    }
                }
                else if (key.includes("Period") && !key.includes("Academic")) {
                    this.time_line.push({
                        title: "p8",
                        where: this.sche["p8"],
                        time: value,
                        timeleft: ""
                    });
                }
                else {
                    this.time_line.push({
                        title: key,
                        where: " ",
                        time: value,
                        timeleft: ""
                    });
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.updateTimeLeft();
    };
    UserpageComponent.prototype.updateTimelineNo = function () {
        var e_3, _a;
        this.time_line = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.entries(this.todaytimes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), key = _d[0], value = _d[1];
                if (key.substring(0, 7).includes("Block")) {
                    var nnum = Number(key[6]) - 1;
                    var actual = this.blockAndTime[nnum];
                    this.time_line.push({
                        title: actual,
                        where: this.sche[actual],
                        time: value,
                        timeleft: ""
                    });
                }
                else if (key.includes("Period") && !key.includes("Academic")) {
                    this.time_line.push({
                        title: "p8",
                        where: this.sche["p8"],
                        time: value,
                        timeleft: ""
                    });
                }
                else {
                    this.time_line.push({
                        title: key,
                        where: " ",
                        time: value,
                        timeleft: ""
                    });
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.updateTimeLeft();
    };
    UserpageComponent.prototype.isFirstLunch = function () {
        if (this.todaytimes != undefined) {
            this.isSpecial = false;
            if (this.todaytimes['First Lunch'] != undefined) {
                var luncper = this.todaytimes['First Lunch'].split('/')[1];
                var room = this.sche[this.blockAndTime[Number(luncper[6] - 1)]];
                if (room == 'B' || room == 'C' || room == 'S' || room == 'G115' || room == 'G116'
                    || room == 'G117' || room == 'Talon') {
                    this.updateTimelineF();
                    this.lunchOfDay = "First Lunch";
                    return true;
                }
                else {
                    this.lunchOfDay = "Second Lunch";
                    this.updateTimelineS();
                    return false;
                }
            }
            else {
                this.updateTimelineNo();
            }
        }
        else {
            this.isLoad = false;
            this.isSpecial = true;
            this.time_line = [{
                    title: "You",
                    where: "have",
                    time: "day off",
                    timeleft: "today"
                }];
            this.lunchOfDay = "";
        }
    };
    UserpageComponent.prototype.getSche = function () {
        var _this = this;
        this.isLoad = true;
        this.auth.getSche("non").subscribe(function (data) {
            if (_this.isAAuto) {
                _this.date = document.querySelector("#monnum").innerText;
            }
            else {
                _this.date = document.querySelector("#manual_date").value;
            }
            _this.todayblock = data.block[_this.date];
            if (_this.todayblock != undefined) {
                _this.isGotDate = true;
                if (_this.isNumeric(_this.todayblock[_this.todayblock.length - 1])) {
                    var schestr = _this.todayblock.substring(0, _this.todayblock.length - 1);
                    var num = _this.todayblock[_this.todayblock.length - 1];
                    _this.todayblockD = _this.blocktypes[schestr] + num;
                    if (_this.blocktypes[schestr] == undefined) {
                        _this.todayblockD = "Special" + num;
                        if (schestr.includes("SpE")) {
                            _this.todayblockD = "Special ETV" + num;
                        }
                    }
                    _this.todaytimes = data.sche[_this.todayblock.substring(0, _this.todayblock.length - 1)];
                    _this.updateBANDP(Number(num), schestr);
                }
                else {
                    _this.todayblockD = _this.blocktypes[_this.todayblock];
                    if (_this.todayblockD == undefined) {
                        if (_this.todayblock != "Off") {
                            _this.todayblockD = "Special";
                        }
                        else {
                            _this.todayblockD = "Off";
                        }
                    }
                    _this.todaytimes = data.sche[_this.todayblock];
                    _this.updateBANDP(-1, "S");
                }
            }
            else {
                if (_this.date.length == 0) {
                    _this.isGotDate = false;
                }
                else {
                    _this.isGotDate = true;
                    _this.todayblockD = "Off";
                    _this.todaytimes = undefined;
                }
            }
            _this.isFirstLunch();
            _this.isLoad = false;
        });
    };
    UserpageComponent.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    UserpageComponent.prototype.isFullPeriods = function () {
        if (this.sche.p1.length == 0 || this.sche.p2.length == 0 || this.sche.p3.length == 0 || this.sche.p4.length == 0 ||
            this.sche.p5.length == 0 || this.sche.p6.length == 0 || this.sche.p7.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    UserpageComponent.prototype.updatePeriod = function (e) {
        var _this = this;
        e.preventDefault();
        var target = e.target;
        var val = target.value;
        var idd = target.id;
        var idin = "p" + idd[idd.length - 1];
        if (val.length != 0) {
            this.auth.updatePeriod(this.userid, val, idin).subscribe(function (data) {
                document.querySelector("#" + idd).style.border = "1px solid #aaa";
                _this.sche[idin] = val;
                if (_this.isFullPeriods()) {
                    _this.isPeriodAll = false;
                    _this.getPeriods();
                }
                else {
                    _this.isPeriodAll = true;
                }
            });
        }
        else {
            this.updatemessage.periods = "Can't be empty";
        }
    };
    UserpageComponent.prototype.updateUsername = function () {
        var _this = this;
        var val = document.querySelector(".upname").value;
        if (val.length != 0) {
            this.auth.updateUsername(this.userid, val).subscribe(function (data) {
                if (data.meesage != "hhh") {
                    _this.updatemessage.name = data.meesage;
                }
                else {
                    _this.cookie.set("name_smlunch", val);
                }
            });
        }
        else {
            this.updatemessage.name = "Can't be empty";
        }
    };
    UserpageComponent.prototype.updateDisplay = function () {
        var _this = this;
        var val = document.querySelector(".updisplay").value;
        if (val.length != 0) {
            this.auth.updateDisplay(this.userid, val).subscribe(function (data) {
                _this.cookie.set("display_smlunch", val);
                _this.display = val;
            });
        }
        else {
            this.updatemessage.display = "Can't be empty";
        }
    };
    UserpageComponent.prototype.updateEmail = function () {
        var _this = this;
        var val = document.querySelector(".upemail").value;
        var valSP = val.split('@');
        if (val.length != 0) {
            if (valSP[1] != "smhsstudents.org" && valSP[1] != "smhs.org"
                || valSP.length > 2) {
                this.updatemessage.email = "Not a SM Email";
            }
            else {
                this.auth.updateEmail(this.userid, val).subscribe(function (data) {
                    if (data.meesage != "hhh") {
                        _this.updatemessage.email = data.meesage;
                    }
                    else {
                        _this.cookie.set("email_smlunch", val);
                    }
                });
            }
        }
        else {
            this.updatemessage.email = "Can't be empty";
        }
    };
    UserpageComponent.prototype.period8 = function (e) {
        e.preventDefault();
        this.isPeriod8 = e.target.checked;
    };
    UserpageComponent.prototype.guide = function () {
    };
    UserpageComponent.prototype.getPeriods = function () {
        var _this = this;
        this.auth.getPeriods(this.userid).subscribe(function (data) {
            _this.sche.p1 = data.p1;
            _this.sche.p2 = data.p2;
            _this.sche.p3 = data.p3;
            _this.sche.p4 = data.p4;
            _this.sche.p5 = data.p5;
            _this.sche.p6 = data.p6;
            _this.sche.p7 = data.p7;
            _this.sche.p8 = data.p8;
            if (_this.isFullPeriods()) {
                _this.isPeriodAll = false;
                _this.getSche();
            }
            else {
                _this.isPeriodAll = true;
            }
            if (data.p8.length != 0) {
                _this.isPeriod8 = true;
            }
            else {
                _this.isPeriod8 = false;
            }
            for (var i = 1; i < 9; i++) {
                if (data["p" + i].length == 0) {
                    if (document.querySelector("#inputGroupSelect0" + i) != null) {
                        document.querySelector("#inputGroupSelect0" + i).style.border = "2px solid red";
                    }
                }
            }
        });
    };
    UserpageComponent.prototype.signOut = function () {
        this.cookie.set("isLog_smlunch", "false");
        this.cookie.set("userid_smlunch", "");
        this.cookie.set("name_smlunch", "");
        this.cookie.set("display_smlunch", "");
        this.cookie.set("email_smlunch", "");
        this.router.navigate(['']);
    };
    UserpageComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
        { type: ng_push__WEBPACK_IMPORTED_MODULE_5__["PushNotificationsService"] }
    ]; };
    UserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userpage',
            template: __webpack_require__(/*! raw-loader!./userpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__(/*! ./userpage.component.css */ "./src/app/userpage/userpage.component.css")]
        })
    ], UserpageComponent);
    return UserpageComponent;
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

module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/SMart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map