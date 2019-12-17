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

module.exports = "<a class=\"navbar-brand logo\" href=\"https://github.com/robingan7/seeyourschedule.com\">\n  <img src=\"https://seeyourschedule.com/seal.svg\" width=\"40\" height=\"40\"\n    class=\"d-inline-block align-top\" alt=\"\">\n  <p>SYS</p>\n</a>\n<button class=\"btn btn-outline-secondary drr\" aria-expanded=\"false\" (click)=\"switch($event)\">Current</button>\n\n<div id=\"currentTimes\">\n  <h1 id=\"clock\">{{clock}}</h1>\n  <h4 id=\"date\">{{date}}</h4>\n  <h4 style=\"display:none\" id=\"monnum\">{{monnum}}</h4>\n</div>\n\n<div *ngIf=\"isManual\">\n  <div class=\"input-group mb-3 clll\">\n    <input type=\"text\" class=\"form-control cllin\" aria-label=\"Dollar amount (with dot and two decimal places)\">\n    <span class=\"input-group-text cllin\"><b>:</b></span>\n\n    <input type=\"text\" class=\"form-control cllin\" aria-label=\"Dollar amount (with dot and two decimal places)\">\n    <span class=\"input-group-text cllin\"><b>:</b></span>\n    <input type=\"text\" class=\"form-control cllin\" aria-label=\"Dollar amount (with dot and two decimal places)\">\n\n  </div>\n\n  <div *ngIf=\"load\" class=\"spinner-border text-dark appLoaderTop\" role=\"status\" style=\"width:10px; height:10px;\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div *ngIf=\"!load\"class=\"input-group mb-3 ccc\">\n    <select (change)=\"changeData()\" value={{displayNom}} class=\"custom-select de2\" id=\"manual_date\">\n      <option>Dates</option>\n      <option *ngFor=\"let date of datelist\">{{date}}</option>\n    </select>\n  </div>\n</div>\n\n\n<!--\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/frontpage/frontpage.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/frontpage/frontpage.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills mb-3 mmmb\" id=\"pills-tab\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <button class=\"nav-link active btn btn-outline-primary btn-sm see\" id=\"linkToQuickCheck\" data-toggle=\"pill\"\n            [routerLink]=\"['/quick-check']\" role=\"tab\" aria-controls=\"pills-home\">Quick Check</button>\n    </li>\n    <li class=\"nav-item\">\n        <button class=\"nav-link btn btn-outline-primary btn-sm see\" id=\"linkToLogin\" data-toggle=\"pill\"\n            [routerLink]=\"['/login&signup']\" role=\"tab\" aria-controls=\"pills-profile\">Login &\n            Sign up</button>\n    </li>\n</ul>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/frontpage/login-signup/login-signup.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/frontpage/login-signup/login-signup.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade show active\" id=\"loginAndSignUp\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n    <div class=\"credit-container\">\n        <div id=\"logins\" *ngIf=\"loginb\" class=\"credit\">\n            <form (submit)=\"loginUser($event)\">\n                <h1>Login</h1>\n                <div class=\"{{alerttype.login}} errorr logine\" role=\"alert\">\n                    <strong>Hello!</strong> {{error.login}}\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alet\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\"></span>\n                    </button>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">User Name or Email</label>\n                    <input (input)=\"checkLogin()\" type=\"text\" class=\"form-control\" id=\"name-or-email\"\n                        aria-describedby=\"sign-in-username\" placeholder=\"Name or Email\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Password</label>\n                    <input (input)=\"checkLogin()\" type=\"password\" class=\"form-control\" id=\"login-password\"\n                        placeholder=\"Password\">\n                </div>\n\n                <button type=\"submit\" id=\"login-btn\" class=\"btn btn-primary\">Login</button>\n            </form>\n            <div class=\"alert alert-warning warr\" role=\"alert\">\n                We <b>ARE NOT</b> responsible for any wrong information on this website\n                It's to help you understand SM schedule faster. You should <b>NOT</b> rely on this app\n            </div>\n        </div>\n    </div>\n\n    <div class=\"credit-container\">\n        <div id=\"signup\" class=\"credit\">\n            <form (submit)=\"signup($event)\">\n                <h1>Sign Up</h1>\n                <div class=\"{{alerttype.signup}} errorr signupe\" role=\"alert\">\n                    <strong>Hello!</strong> {{error.signup}}\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alet\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\"></span>\n                    </button>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail2\">User Name</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"text\" class=\"form-control\" id=\"sign-username\"\n                        aria-describedby=\"sign-up-username\" placeholder=\"User Name\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Display Name</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"text\" class=\"form-control\" id=\"sign-display\"\n                        placeholder=\"Display Name\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Email</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"text\" class=\"form-control\" id=\"sign-email\"\n                        placeholder=\"prefer sm email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword2\">Password</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"password\" class=\"form-control\" id=\"sign-password\"\n                        placeholder=\"Password\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Password Confirm</label>\n                    <input (input)=\"checkSignUp($event)\" type=\"password\" class=\"form-control\" id=\"sign-passwordcon\"\n                        placeholder=\"Password Again\" />\n                </div>\n                <div class=\"form-group form-check\">\n                    <input (input)=\"checkSignUp($event)\" type=\"checkbox\" class=\"form-check-input\" id=\"sign-check\">\n                    <label class=\"form-check-label agree\" for=\"exampleCheck1\">Agree To <a>Terms and\n                            Condition</a></label>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n\n            </form>\n        </div>\n    </div>\n</div>\n\n<!--//////////////////modal///////////-->\n\n<!--\n<div *ngIf=\"loginb\" class=\"carousel slide ad\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\" data-interval=\"2000\">\n            <img src=\"http://frcscouting.ga/Scope_Ad.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\" data-interval=\"2000\">\n            <img id=\"yoshi\" src=\"http://frcscouting.ga/Scope_Ad.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\" data-interval=\"2000\">\n            <img src=\"http://frcscouting.ga/Scope_Ad.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n    </div>\n</div>-->\n<!--end of ad-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/frontpage/quick-check/quick-check.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/frontpage/quick-check/quick-check.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\" class=\"quick-check-body\">\n    <div class=\"tab-pane fade show active width320\" id=\"Search-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n        <span class=\"badge badge-success\" style=\"font-size: 20px;\">Quick Check</span>\n        <br>\n        <a [routerLink]=\"['/login&signup']\">\n            <span class=\"badge badge-info check\">Click HERE</span> <span class=\"badge badge-info check\">Create a free account for more features :)</span>\n        </a>\n        <div class=\"input-group mb-3\" style=\"margin-bottom:0!important; margin-top:10px;\">\n            <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">Peroid\n                    <div *ngIf=\"isDone\" class=\"spinner-border\" style=\"width: 1rem; height: 1rem;\" role=\"status\">\n                        <span class=\"sr-only\">Loading...</span>\n                    </div>\n                    <b>-{{luncper}}-</b> building</label>\n            </div>\n            <select (change)=\"isFirstLunch($event)\" value={{room}} class=\"custom-select op\" id=\"inputGrojjupSelect01\">\n                <option value=\"\">Options</option>\n                <option value=\"B\">B</option>\n                <option value=\"Talon\">Talon</option>\n                <option value=\"C\">C</option>\n                <option value=\"S\">S</option>\n                <option value=\"G115\">G115</option>\n                <option value=\"G116\">G116</option>\n                <option value=\"G117\">G117</option>\n                <option value=\"A\">A</option>\n                <option value=\"T\">T</option>\n                <option value=\"R\">R</option>\n                <option value=\"G\">G</option>\n                <option value=\"GYM\">GYM</option>\n                <option value=\"Library\">Library</option>\n            </select>\n        </div>\n        <div class=\"toast\" role=\"alert\" aria-live=\"polite\" aria-atomic=\"true\" data-autohide=\"true\">\n            <div class=\"toast-header\">\n                <img src=\"https://seeyourschedule.com/logoo_5805.png\" width=\"40\" height=\"40\" class=\"rounded mr-2\"\n                    alt=\"...\">\n                <strong class=\"mr-auto\">You have <b style=\"color:black;\">{{lunchOfDay}}</b></strong>\n                <small></small>\n                <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">;)</span>\n                </button>\n            </div>\n            <div class=\"toast-body\">\n                Hello, friend! FROM <a style=\"text-decoration: underline;\"\n                    href=\"https://www.smhs.org/academics/departments-and-courses/science/robotics\"><b>SMbly Required\n                        5805</b></a>\n            </div>\n        </div>\n        <div class=\"alert alert-warning warr\" role=\"alert\">\n            We <b>ARE NOT</b> responsible for any wrong information on this website\n            It's to help you understand SM schedule faster. You should <b>NOT</b> rely on this app\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    404PageNotFound\n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userpage/setting/setting.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userpage/setting/setting.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--account section-->\n<div class=\"tab-pane fade show active generalWidth\" id=\"account\" role=\"tabpanel\" aria-labelledby=\"account-tab\">\n    <div *ngIf=\"isLoad\" class=\"spinner-border text-dark loader\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n    <span class=\"badge badge-info\">User Name</span>\n    <div class=\"input-group mb-3\">\n        <input type=\"text\" value={{name}} class=\"form-control upname\" placeholder=\"username\"\n            aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\n        <div class=\"input-group-append\">\n            <button (click)=\"updateUsername()\" placement=\"left\" ngbPopover=\"{{updatemessage.name}}\"\n                class=\"btn btn-outline-success\" type=\"button\" id=\"button-addon2\">Change</button>\n        </div>\n    </div>\n\n    <span class=\"badge badge-info\">Display Name</span>\n    <div class=\"input-group mb-3\">\n        <input type=\"text\" value={{display}} class=\"form-control updisplay\" placeholder=\"display name\"\n            aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\n        <div class=\"input-group-append\">\n            <button (click)=\"updateDisplay()\" class=\"btn btn-outline-success\" placement=\"left\"\n                ngbPopover=\"{{updatemessage.display}}\" type=\"button\" id=\"button-addon2\">Change</button>\n        </div>\n    </div>\n\n    <span class=\"badge badge-info\">Email</span>\n    <div class=\"input-group mb-3\">\n        <input type=\"text\" value={{email}} class=\"form-control upemail\" placeholder=\"email\"\n            aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\n        <div class=\"input-group-append\">\n            <button (click)=\"updateEmail()\" placement=\"left\" ngbPopover=\"{{updatemessage.email}}\"\n                class=\"btn btn-outline-success\" type=\"button\" id=\"button-addon2\">Change</button>\n        </div>\n    </div>\n\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 1 Building</label>\n        </div>\n        <select (change)=\"updatePeriod($event)\" value={{sche.p1}} class=\"custom-select\" id=\"inputGroupSelect01\">\n            <option value=\"\">Options</option>\n            <option value=\"B\">B</option>\n            <option value=\"Talon\">Talon</option>\n            <option value=\"C\">C</option>\n            <option value=\"S\">S</option>\n            <option value=\"G115\">G115</option>\n            <option value=\"G116\">G116</option>\n            <option value=\"G117\">G117</option>\n            <option value=\"A\">A</option>\n            <option value=\"T\">T</option>\n            <option value=\"R\">R</option>\n            <option value=\"G\">G</option>\n            <option value=\"GYM\">GYM</option>\n            <option value=\"Library\">Library</option>\n        </select>\n    </div>\n\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 2 Building</label>\n        </div>\n        <select (change)=\"updatePeriod($event)\" value={{sche.p2}} class=\"custom-select\" id=\"inputGroupSelect02\">\n            <option value=\"\">Options</option>\n            <option value=\"B\">B</option>\n            <option value=\"Talon\">Talon</option>\n            <option value=\"C\">C</option>\n            <option value=\"S\">S</option>\n            <option value=\"G115\">G115</option>\n            <option value=\"G116\">G116</option>\n            <option value=\"G117\">G117</option>\n            <option value=\"A\">A</option>\n            <option value=\"T\">T</option>\n            <option value=\"R\">R</option>\n            <option value=\"G\">G</option>\n            <option value=\"GYM\">GYM</option>\n            <option value=\"Library\">Library</option>\n        </select>\n    </div>\n\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 3 Building</label>\n        </div>\n        <select (change)=\"updatePeriod($event)\" value={{sche.p3}} class=\"custom-select\" id=\"inputGroupSelect03\">\n            <option value=\"\">Options</option>\n            <option value=\"B\">B</option>\n            <option value=\"Talon\">Talon</option>\n            <option value=\"C\">C</option>\n            <option value=\"S\">S</option>\n            <option value=\"G115\">G115</option>\n            <option value=\"G116\">G116</option>\n            <option value=\"G117\">G117</option>\n            <option value=\"A\">A</option>\n            <option value=\"T\">T</option>\n            <option value=\"R\">R</option>\n            <option value=\"G\">G</option>\n            <option value=\"GYM\">GYM</option>\n            <option value=\"Library\">Library</option>\n        </select>\n    </div>\n\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 4 Building</label>\n        </div>\n        <select (change)=\"updatePeriod($event)\" value={{sche.p4}} class=\"custom-select\" id=\"inputGroupSelect04\">\n            <option value=\"\">Options</option>\n            <option value=\"B\">B</option>\n            <option value=\"Talon\">Talon</option>\n            <option value=\"C\">C</option>\n            <option value=\"S\">S</option>\n            <option value=\"G115\">G115</option>\n            <option value=\"G116\">G116</option>\n            <option value=\"G117\">G117</option>\n            <option value=\"A\">A</option>\n            <option value=\"T\">T</option>\n            <option value=\"R\">R</option>\n            <option value=\"G\">G</option>\n            <option value=\"GYM\">GYM</option>\n            <option value=\"Library\">Library</option>\n        </select>\n    </div>\n\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 5 Building</label>\n        </div>\n        <select (change)=\"updatePeriod($event)\" value={{sche.p5}} class=\"custom-select\" id=\"inputGroupSelect05\">\n            <option value=\"\">Options</option>\n            <option value=\"B\">B</option>\n            <option value=\"Talon\">Talon</option>\n            <option value=\"C\">C</option>\n            <option value=\"S\">S</option>\n            <option value=\"G115\">G115</option>\n            <option value=\"G116\">G116</option>\n            <option value=\"G117\">G117</option>\n            <option value=\"A\">A</option>\n            <option value=\"T\">T</option>\n            <option value=\"R\">R</option>\n            <option value=\"G\">G</option>\n            <option value=\"GYM\">GYM</option>\n            <option value=\"Library\">Library</option>\n        </select>\n    </div>\n\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 6 Building</label>\n        </div>\n        <select (change)=\"updatePeriod($event)\" value={{sche.p6}} class=\"custom-select\" id=\"inputGroupSelect06\">\n            <option value=\"\">Options</option>\n            <option value=\"B\">B</option>\n            <option value=\"Talon\">Talon</option>\n            <option value=\"C\">C</option>\n            <option value=\"S\">S</option>\n            <option value=\"G115\">G115</option>\n            <option value=\"G116\">G116</option>\n            <option value=\"G117\">G117</option>\n            <option value=\"A\">A</option>\n            <option value=\"T\">T</option>\n            <option value=\"R\">R</option>\n            <option value=\"G\">G</option>\n            <option value=\"GYM\">GYM</option>\n            <option value=\"Library\">Library</option>\n        </select>\n    </div>\n\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 7 Building</label>\n        </div>\n        <select (change)=\"updatePeriod($event)\" value={{sche.p7}} class=\"custom-select\" id=\"inputGroupSelect07\">\n            <option value=\"\">Options</option>\n            <option value=\"B\">B</option>\n            <option value=\"Talon\">Talon</option>\n            <option value=\"C\">C</option>\n            <option value=\"S\">S</option>\n            <option value=\"G115\">G115</option>\n            <option value=\"G116\">G116</option>\n            <option value=\"G117\">G117</option>\n            <option value=\"A\">A</option>\n            <option value=\"T\">T</option>\n            <option value=\"R\">R</option>\n            <option value=\"G\">G</option>\n            <option value=\"GYM\">GYM</option>\n            <option value=\"Library\">Library</option>\n        </select>\n    </div>\n\n    <div class=\"form-group form-check\">\n        <input *ngIf=\"!isPeriod8\" type=\"checkbox\" class=\"form-check-input\" (change)=\"period8($event)\"\n            id=\"exampleCheck1\">\n        <input *ngIf=\"isPeriod8\" type=\"checkbox\" class=\"form-check-input\" (change)=\"period8($event)\" id=\"exampleCheck1\"\n            checked>\n        <label class=\"form-check-label\" for=\"exampleCheck1\">Check if you have period 8th class</label>\n    </div>\n\n    <div *ngIf=\"isPeriod8\" class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">P 8 Building</label>\n        </div>\n        <select (change)=\"updatePeriod($event)\" value={{sche.p8}} class=\"custom-select\" id=\"inputGroupSelect08\">\n            <option value=\"\">Options(if you have period 8th class)</option>\n            <option value=\"B\">B</option>\n            <option value=\"Talon\">Talon</option>\n            <option value=\"C\">C</option>\n            <option value=\"S\">S</option>\n            <option value=\"G115\">G115</option>\n            <option value=\"G116\">G116</option>\n            <option value=\"G117\">G117</option>\n            <option value=\"A\">A</option>\n            <option value=\"T\">T</option>\n            <option value=\"R\">R</option>\n            <option value=\"G\">G</option>\n            <option value=\"GYM\">GYM</option>\n            <option value=\"Library\">Library</option>\n        </select>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userpage/userpage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userpage/userpage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <!--nav bar-->\n    <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"today-tab\" data-toggle=\"tab\" [routerLink]=\"['./today']\"  role=\"tab\" aria-controls=\"today\" aria-selected=\"true\">Today</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"thisweek-tab\" data-toggle=\"tab\" [routerLink]=\"['./this-week']\"  role=\"tab\" aria-controls=\"direction\" aria-selected=\"false\">This Week</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"setting-tab\" data-toggle=\"tab\" [routerLink]=\"['./setting']\"  role=\"tab\" aria-controls=\"account\" aria-selected=\"false\">Setting</a>\n        </li>\n        <li class=\"nav-item\">\n            <button (click)=\"signOut()\" class=\"btn btn-warning btn-sm signno\"><b>Sign Out</b></button>\n        </li>    \n    </ul>\n\n    <!--nav content-->\n    <div class=\"tab-content\" id=\"myTabContent\">\n        <div *ngIf=\"!isPeriodAll\" class=\"alert alert-danger\" role=\"alert\">\n            Please put your building info in <b ><a style=\"color:black;\" [routerLink]=\"['./setting']\" >Setting</a></b> tab\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userpage/your-schedule/your-schedule.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userpage/your-schedule/your-schedule.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoad && isAllPeriod\" class=\"spinner-border text-dark loader\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n</div>\n<div *ngIf=\"todayB && isAllPeriod\" class=\"tab-pane fade show active\" id=\"today\" role=\"tabpanel\" aria-labelledby=\"today-tab\">\n    <div class=\"alert alert-success\" role=\"alert\">\n        Today's block: <b>{{todayblockD.today}}</b>\n    </div>\n   \n    <div id=\"timeL\">\n        <div *ngFor=\"let obj of timeLines.today.timeline; index as i;\" class=\"btn-group sep b{{i}}\" role=\"group\"\n            aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-primary spbtn {{obj.style}}\">{{obj.title}}</button>\n            <button type=\"button\" class=\"btn btn-warning spbtn {{obj.style}}\">{{obj.where}}</button>\n            <button type=\"button\" class=\"btn btn-dark spbtn {{obj.style}}\">{{obj.time}}</button>\n            <button type=\"button\" class=\"btn btn-success spbtn {{obj.style}}\">{{obj.timeleft}}</button>\n        </div>\n    </div>\n\n    <div class=\"toast\" role=\"alert\" aria-live=\"polite\" aria-atomic=\"true\" data-autohide=\"true\">\n        <div class=\"toast-header\">\n            <img src=\"https://seeyourschedule.com/logoo_5805.png\" width=\"40\" height=\"40\" class=\"rounded mr-2\" alt=\"...\">\n            <strong class=\"mr-auto hjhjh\">You have {{lunchOfDay}}</strong>\n            <small></small>\n            <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">;)</span>\n            </button>\n        </div>\n        <div class=\"toast-body\">\n            Hello, <b>{{display}}</b>! FROM <a style=\"text-decoration: underline;\"\n                href=\"https://www.smhs.org/academics/departments-and-courses/science/robotics\"><b>SMbly Required\n                    5805</b></a>\n        </div>\n    </div>\n\n    <div *ngIf=\"isBreak\" class=\"alert alert-info\" role=\"alert\">\n        You're at break now :)\n    </div>\n</div>\n\n<!--this week section-->\n<div *ngIf=\"!todayB && isAllPeriod\" class=\"tab-pane fade show active\" id=\"thisweek\" role=\"tabpanel\" aria-labelledby=\"direction-tab\">\n    <div class=\"form-group generalWidth\">\n        <span class=\"badge badge-pill badge-info largerFont\">Switch Week</span><span class=\"badge badge-pill badge-success largerFont\">Scroll right for more days -----> </span>\n        \n        <div class=\"input-group\">\n            <select (change)=\"switchWeek($event)\" value=\"{{currentWeek * 7}}\" class=\"form-control\" id=\"switchweekSelect\">\n                <option *ngFor=\"let weekNum of weekList\" value=\"{{7 * (weekNum - 1)}}\">Week\n                    {{weekNum}}----{{weekStartAndEnd[7 * (weekNum - 1)].start}} >>\n                    {{weekStartAndEnd[7 * (weekNum - 1)].end}}</option>\n            </select>\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"resetWeek()\">Reset</button>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"thisweek_container\">\n        <div class=\"timeLL\">\n            <h5><span class=\"badge badge-secondary weekTi\">Mon</span>{{timeLines.monday.date}}<span\n                    class=\"badge badge-secondary weekTi\">{{todayblockD.monday}}</span>\n            </h5>\n            <div *ngFor=\"let obj of timeLines.monday.timeline; index as i;\" class=\"btn-group sep a{{i}} sep_week\"\n                role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary a{{i}}_1 spbtn\">{{obj.title}}</button>\n                <button type=\"button\" class=\"btn btn-warning spbtn a{{i}}_2\">{{obj.where}}</button>\n                <button type=\"button\" class=\"btn btn-dark spbtn a{{i}}_3\">{{obj.time}}</button>\n            </div>\n        </div>\n\n        <div class=\"timeLL\">\n            <h5><span class=\"badge badge-secondary weekTi\">Tues</span>{{timeLines.tuesday.date}}<span\n                    class=\"badge badge-secondary weekTi\">{{todayblockD.tuesday}}</span>\n            </h5>\n            <div *ngFor=\"let obj of timeLines.tuesday.timeline; index as i;\" class=\"btn-group sep a{{i}} sep_week\"\n                role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary a{{i}}_1 spbtn\">{{obj.title}}</button>\n                <button type=\"button\" class=\"btn btn-warning spbtn a{{i}}_2\">{{obj.where}}</button>\n                <button type=\"button\" class=\"btn btn-dark spbtn a{{i}}_3\">{{obj.time}}</button>\n            </div>\n        </div>\n\n        <div class=\"timeLL\">\n            <h5><span class=\"badge badge-secondary weekTi\">Wed</span>{{timeLines.wednesday.date}}<span\n                    class=\"badge badge-secondary weekTi\">{{todayblockD.wednesday}}</span>\n            </h5>\n            <div *ngFor=\"let obj of timeLines.wednesday.timeline; index as i;\" class=\"btn-group sep a{{i}} sep_week\"\n                role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary a{{i}}_1 spbtn\">{{obj.title}}</button>\n                <button type=\"button\" class=\"btn btn-warning spbtn a{{i}}_2\">{{obj.where}}</button>\n                <button type=\"button\" class=\"btn btn-dark spbtn a{{i}}_3\">{{obj.time}}</button>\n            </div>\n        </div>\n\n        <div class=\"timeLL\">\n            <h5><span class=\"badge badge-secondary weekTi\">Thurs</span>{{timeLines.thursday.date}}<span\n                    class=\"badge badge-secondary weekTi\">{{todayblockD.thursday}}</span>\n            </h5>\n            <div *ngFor=\"let obj of timeLines.thursday.timeline; index as i;\" class=\"btn-group sep a{{i}} sep_week\"\n                role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary a{{i}}_1 spbtn\">{{obj.title}}</button>\n                <button type=\"button\" class=\"btn btn-warning spbtn a{{i}}_2\">{{obj.where}}</button>\n                <button type=\"button\" class=\"btn btn-dark spbtn a{{i}}_3\">{{obj.time}}</button>\n            </div>\n        </div>\n\n        <div class=\"timeLL\">\n            <h5><span class=\"badge badge-secondary weekTi\">Fri</span>{{timeLines.friday.date}}<span\n                    class=\"badge badge-secondary weekTi\">{{todayblockD.friday}}</span>\n            </h5>\n            <div *ngFor=\"let obj of timeLines.friday.timeline; index as i;\" class=\"btn-group sep a{{i}} sep_week\"\n                role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary a{{i}}_1 spbtn\">{{obj.title}}</button>\n                <button type=\"button\" class=\"btn btn-warning spbtn a{{i}}_2\">{{obj.where}}</button>\n                <button type=\"button\" class=\"btn btn-dark spbtn a{{i}}_3\">{{obj.time}}</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/yuhan/yuhan.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/yuhan/yuhan.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group mb-3 hh\">\n    <form (submit)=\"submit($event)\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Robin\" aria-label=\"Recipient's username\"\n            aria-describedby=\"button-addon2\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Yuhan\" aria-label=\"Recipient's username\"\n            aria-describedby=\"button-addon2\">\n        <div class=\"input-group-append\">\n            <button type=\"submit\" class=\"btn btn-outline-secondary\" id=\"button-addon2\">Alex</button>\n        </div>\n    </form>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frontpage/frontpage.component */ "./src/app/frontpage/frontpage.component.ts");
/* harmony import */ var _yuhan_yuhan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yuhan/yuhan.component */ "./src/app/yuhan/yuhan.component.ts");
/* harmony import */ var _frontpage_quick_check_quick_check_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./frontpage/quick-check/quick-check.component */ "./src/app/frontpage/quick-check/quick-check.component.ts");
/* harmony import */ var _frontpage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frontpage/login-signup/login-signup.component */ "./src/app/frontpage/login-signup/login-signup.component.ts");
/* harmony import */ var _userpage_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userpage/setting/setting.component */ "./src/app/userpage/setting/setting.component.ts");
/* harmony import */ var _userpage_your_schedule_your_schedule_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userpage/your-schedule/your-schedule.component */ "./src/app/userpage/your-schedule/your-schedule.component.ts");












const routes = [
    { path: '', component: _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_6__["FrontpageComponent"],
        children: [
            { path: '', redirectTo: 'quick-check', pathMatch: 'full' },
            { path: 'quick-check', component: _frontpage_quick_check_quick_check_component__WEBPACK_IMPORTED_MODULE_8__["QuickCheckComponent"] },
            { path: 'login&signup', component: _frontpage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_9__["LoginSignupComponent"] }
        ]
    },
    {
        path: 'app', component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__["UserpageComponent"],
        children: [
            { path: '', redirectTo: 'today', pathMatch: 'full' },
            { path: 'today', component: _userpage_your_schedule_your_schedule_component__WEBPACK_IMPORTED_MODULE_11__["YourScheduleComponent"] },
            { path: 'this-week', component: _userpage_your_schedule_your_schedule_component__WEBPACK_IMPORTED_MODULE_11__["YourScheduleComponent"] },
            { path: 'setting', component: _userpage_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__["SettingComponent"] }
        ]
    },
    { path: 'yuhan', component: _yuhan_yuhan_component__WEBPACK_IMPORTED_MODULE_7__["YuhanComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"], pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingRoads = [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _frontpage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_9__["LoginSignupComponent"],
    _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__["UserpageComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"], _yuhan_yuhan_component__WEBPACK_IMPORTED_MODULE_7__["YuhanComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    float:left;\n}\np{\n    font-size:30px;\n    margin-top:0px;\n}\n.navbar-brand {\n    height:55px;\n    padding-top: 0.315rem;\n    margin-left:5px;\n}\n#clock {\n    position: absolute;\n    top:0px;\n    right:5px;\n    font-size: 1.25rem;\n}\n#date {\n    position: absolute;\n    top:20px;\n    right:5px;\n    font-size: 1.25rem;\n}\n.drr{\n    position: absolute;\n    top:40px;\n    right:5px;\n    width:70px;\n    height:20px;\n    padding: 0;\n    padding-top:0px;\n    font-size: 15px;\n}\n.clll{\n    position: absolute;\n    top:0px;\n    right:5px;\n    width:100px;\n    height:20px;\n    display: none;\n}\n.cllin{\n    height:20px;\n    font-size:0.9375rem;\n    padding:0;\n}\n.ccc{\n    width: 100px;\n    position: absolute;\n    right:5px;\n    top:10px;\n    padding:0px;\n}\n.de2{\n    padding:0;\n    font-size:0.875rem;\n    height: 25px;\n}\n.appLoaderTop{\n    position: absolute;\n    top:5px;\n    right:5px;\n    width: 30px!important;\n    height: 30px!important;\n    font-size:20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICBmbG9hdDpsZWZ0O1xufVxucHtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBtYXJnaW4tdG9wOjBweDtcbn1cbi5uYXZiYXItYnJhbmQge1xuICAgIGhlaWdodDo1NXB4O1xuICAgIHBhZGRpbmctdG9wOiAwLjMxNXJlbTtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG59XG4jY2xvY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MHB4O1xuICAgIHJpZ2h0OjVweDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG4jZGF0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDoyMHB4O1xuICAgIHJpZ2h0OjVweDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG4uZHJye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NDBweDtcbiAgICByaWdodDo1cHg7XG4gICAgd2lkdGg6NzBweDtcbiAgICBoZWlnaHQ6MjBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uY2xsbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjBweDtcbiAgICByaWdodDo1cHg7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OjIwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5jbGxpbntcbiAgICBoZWlnaHQ6MjBweDtcbiAgICBmb250LXNpemU6MC45Mzc1cmVtO1xuICAgIHBhZGRpbmc6MDtcbn1cbi5jY2N7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDo1cHg7XG4gICAgdG9wOjEwcHg7XG4gICAgcGFkZGluZzowcHg7XG59XG4uZGUye1xuICAgIHBhZGRpbmc6MDtcbiAgICBmb250LXNpemU6MC44NzVyZW07XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuLmFwcExvYWRlclRvcHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjVweDtcbiAgICByaWdodDo1cHg7XG4gICAgd2lkdGg6IDMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzBweCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjIwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");




let AppComponent = class AppComponent {
    constructor(auth, dataTransfer) {
        this.auth = auth;
        this.dataTransfer = dataTransfer;
        this.title = 'SM Lunch';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.isManual = false;
        this.load = true;
        this.clock = "11 : 00 : 00";
        this.date = "2019-8-11";
        this.monnum = "2019-8-11";
        this.displayNom = "";
    }
    ngOnInit() {
        this.auth.getSche("non").subscribe(data => {
            this.datelist = data.scheArray;
            this.load = false;
        });
        setInterval(() => {
            this.hexClock();
            if (this.displayNom != this.monnum) {
                this.displayNom = this.monnum;
            }
        }, 1000);
    }
    switch(e) {
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
            this.dataTransfer.setIsAuto(true);
        }
    }
    changeData() {
        this.dataTransfer.setIsAuto(false);
        var b = this.dataTransfer.getisChange;
        this.dataTransfer.setIsChange(!b);
    }
    hexClock() {
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
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-push */ "./node_modules/ng-push/ng-push.umd.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _yuhan_yuhan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./yuhan/yuhan.component */ "./src/app/yuhan/yuhan.component.ts");
/* harmony import */ var _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./frontpage/frontpage.component */ "./src/app/frontpage/frontpage.component.ts");
/* harmony import */ var _frontpage_quick_check_quick_check_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./frontpage/quick-check/quick-check.component */ "./src/app/frontpage/quick-check/quick-check.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _frontpage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./frontpage/login-signup/login-signup.component */ "./src/app/frontpage/login-signup/login-signup.component.ts");
/* harmony import */ var _userpage_setting_setting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userpage/setting/setting.component */ "./src/app/userpage/setting/setting.component.ts");
/* harmony import */ var _userpage_your_schedule_your_schedule_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userpage/your-schedule/your-schedule.component */ "./src/app/userpage/your-schedule/your-schedule.component.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");













 //import the module





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingRoads"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
            _yuhan_yuhan_component__WEBPACK_IMPORTED_MODULE_11__["YuhanComponent"],
            _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_12__["FrontpageComponent"],
            _frontpage_quick_check_quick_check_component__WEBPACK_IMPORTED_MODULE_13__["QuickCheckComponent"],
            _frontpage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_15__["LoginSignupComponent"],
            _userpage_setting_setting_component__WEBPACK_IMPORTED_MODULE_16__["SettingComponent"],
            _userpage_your_schedule_your_schedule_component__WEBPACK_IMPORTED_MODULE_17__["YourScheduleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            ng_push__WEBPACK_IMPORTED_MODULE_10__["PushNotificationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], _services_service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"], _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_18__["DataTransferService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/frontpage/frontpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".see {\n    padding: 0;\n    height: 30px;\n    width: 125px;\n}\n\n.mmmb {\n    margin-bottom: 0;\n    margin-left: 5px;\n    margin-top:8px;\n    padding-bottom: 2px;\n    border-bottom: 2px solid var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL2Zyb250cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL2Zyb250cGFnZS9mcm9udHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMjVweDtcbn1cblxuLm1tbWIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOjhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/frontpage/frontpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.ts ***!
  \**************************************************/
/*! exports provided: FrontpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontpageComponent", function() { return FrontpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");





let FrontpageComponent = class FrontpageComponent {
    constructor(auth, cookie, router) {
        this.auth = auth;
        this.cookie = cookie;
        this.router = router;
        var iss = this.cookie.get('isLog_smlunch');
        if (iss === "true") {
            this.router.navigate(['app']);
        }
        else {
            this.cookie.deleteAll();
        }
    }
    ngOnInit() { }
};
FrontpageComponent.ctorParameters = () => [
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FrontpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frontpage',
        template: __webpack_require__(/*! raw-loader!./frontpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/frontpage/frontpage.component.html"),
        styles: [__webpack_require__(/*! ./frontpage.component.css */ "./src/app/frontpage/frontpage.component.css")]
    })
], FrontpageComponent);



/***/ }),

/***/ "./src/app/frontpage/login-signup/login-signup.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/frontpage/login-signup/login-signup.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-size: 30px;\n}\n\n#sign-check{\n    cursor: pointer;\n}\n\nbutton {\n    margin-left: 3px;\n    margin-top: 3px;\n}\n\n.ad {\n    width: 50%;\n    -webkit-transform: translate(100%, 0px);\n            transform: translate(100%, 0px);\n}\n\n#sign-email {\n    font-size: 0.9375rem;\n}\n\n.form-group {\n    margin-bottom: 11px;\n}\n\nlabel {\n    margin-bottom: -5px;\n}\n\n.alert {\n    margin-bottom: 5px;\n}\n\n#emailHelp {\n    font-size: 0.9375rem;\n    color: orangered !important;\n}\n\n.agree {\n    font-size: 0.9375rem;\n}\n\n.agree a {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.agree a:hover {\n    color: var(--primary);;\n}\n\n.agree a:visited {\n    color: black;\n}\n\n.errorr {\n    padding: 10px 3px;\n}\n\n.warr {\n    font-size: 0.90625rem;\n}\n\n.op {\n    border: 5px solid var(--primary);\n    height: 45px;\n}\n\n#loginAndSignUp{\n    max-width:700px;\n    margin:0 auto;\n    padding: 0 5px;\n}\n\n#logins {\n    height: 20%;\n    width: 50%;\n    overflow-y: auto;\n    text-align: center;\n    float:left;\n}\n\n#signup {\n    height: 87%;\n    width: 50%;\n    text-align: center;\n    float:right;\n    overflow-y: auto;\n}\n\n.credit{\n    padding:5px 10px;\n    border: 1px solid var(--primary);\n    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.5);\n}\n\n@media(max-width:500px){\n    #logins, #signup{\n        width:100%;\n        float:none;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL2xvZ2luLXNpZ251cC9sb2dpbi1zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRwYWdlL2xvZ2luLXNpZ251cC9sb2dpbi1zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbiNzaWduLWNoZWNre1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5hZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwcHgpO1xufVxuXG4jc2lnbi1lbWFpbCB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuXG5sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cblxuLmFsZXJ0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNlbWFpbEhlbHAge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgIGNvbG9yOiBvcmFuZ2VyZWQgIWltcG9ydGFudDtcbn1cblxuLmFncmVlIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbn1cblxuLmFncmVlIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFncmVlIGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTs7XG59XG5cbi5hZ3JlZSBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmVycm9yciB7XG4gICAgcGFkZGluZzogMTBweCAzcHg7XG59XG5cbi53YXJyIHtcbiAgICBmb250LXNpemU6IDAuOTA2MjVyZW07XG59XG5cbi5vcCB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4jbG9naW5BbmRTaWduVXB7XG4gICAgbWF4LXdpZHRoOjcwMHB4O1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgcGFkZGluZzogMCA1cHg7XG59XG5cbiNsb2dpbnMge1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6bGVmdDtcbn1cblxuI3NpZ251cCB7XG4gICAgaGVpZ2h0OiA4NyU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNyZWRpdHtcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjUpO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjUwMHB4KXtcbiAgICAjbG9naW5zLCAjc2lnbnVwe1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBmbG9hdDpub25lO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/frontpage/login-signup/login-signup.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/frontpage/login-signup/login-signup.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupComponent", function() { return LoginSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");






let LoginSignupComponent = class LoginSignupComponent {
    constructor(auth, cookie, router, dataTransfer) {
        this.auth = auth;
        this.cookie = cookie;
        this.router = router;
        this.dataTransfer = dataTransfer;
        this.loginb = true;
        this.error = {
            login: "No error so far",
            signup: "No error so far"
        };
        this.alerttype = {
            login: "alert alert-success alert-dismissible fade show",
            signup: "alert alert-success alert-dismissible fade show"
        };
    }
    ngOnInit() {
        document.querySelector('#linkToLogin').classList.add('active');
        document.querySelector('#linkToQuickCheck').classList.remove('active');
        document.title = "Login&Signup | See Your Schedule";
    }
    checkLogin() {
        const username = document.querySelector("#name-or-email").value;
        const passw = document.querySelector("#login-password").value;
        if (username.length == 0 || passw.length == 0) {
            this.error.login = "Fill in all spaces";
            this.alerttype.login = "alert alert-danger alert-dismissible fade show";
        }
        else {
            this.error.login = "No error so far";
            this.alerttype.login = "alert alert-success alert-dismissible fade show";
        }
    }
    checkSignUp(e) {
        e.preventDefault();
        const username = document.querySelector("#sign-username").value;
        const display = document.querySelector("#sign-display").value;
        const email = document.querySelector("#sign-email").value;
        const password = document.querySelector("#sign-password").value;
        const passwordc = document.querySelector("#sign-passwordcon").value;
        const tar = e.target;
        const emailSP = email.split('@');
        if (username.length == 0 || display.length == 0 || password.length == 0 || passwordc.length == 0 || email.length == 0) {
            this.error.signup = "Fill in all spaces";
            this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
        }
        else if (password != passwordc) {
            this.error.signup = "Passwords don\'t match";
            this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
        }
        else {
            this.error.signup = "No error so far";
            this.alerttype.signup = "alert alert-success alert-dismissible fade show";
        }
    }
    loginUser(event) {
        document.querySelector("#login-btn").innerText = "Logging in";
        event.preventDefault();
        if (this.error.login == "No error so far") {
            const target = event.target;
            const name = target.querySelector('#name-or-email').value;
            const password = target.querySelector('#login-password').value;
            this.auth.login(name, password).subscribe(data => {
                if (data.success) {
                    this.dataTransfer.setLoggedIn(true);
                    this.error.login = data.message;
                    this.alerttype.login = "alert alert-success alert-dismissible fade show";
                    this.setData(data, true);
                }
                else {
                    document.querySelector("#login-btn").innerText = "Login";
                    this.error.login = data.message;
                    this.alerttype.login = "alert alert-danger alert-dismissible fade show";
                }
            });
        }
        else {
            document.querySelector("#login-btn").innerText = "Login";
        }
    }
    signup(event) {
        event.preventDefault();
        if (this.error.signup == "No error so far") {
            const target = event.target;
            const username = target.querySelector("#sign-username").value;
            const display = target.querySelector('#sign-display').value;
            const email = target.querySelector('#sign-email').value;
            const password = target.querySelector('#sign-password').value;
            const passwordc = target.querySelector('#sign-passwordcon').checked;
            const check = target.querySelector('#sign-check').checked;
            this.auth.signup(username, display, email, password, passwordc, check).subscribe(data => {
                if (data.success) {
                    this.dataTransfer.setLoggedIn(true);
                    this.error.signup = data.message;
                    this.alerttype.signup = "alert alert-success alert-dismissible fade show";
                    setTimeout(() => {
                        this.setData(data, false);
                    }, 700);
                }
                else {
                    this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
                    this.error.signup = data.message;
                }
            });
        }
    }
    setData(data, isFromLogin) {
        this.loginb = false;
        this.cookie.set("isLog_smlunch", "true", 365, '/');
        this.cookie.set("userid_smlunch", String(data.id), 365, '/');
        this.cookie.set("name_smlunch", data.name, 365, '/');
        this.cookie.set("display_smlunch", data.display, 365, '/');
        this.cookie.set("email_smlunch", data.email, 365, '/');
        this.dataTransfer.setUseInfo({
            name: data.name,
            email: data.email,
            userid: String(data.id),
            display: data.display
        });
        if (isFromLogin) {
            this.router.navigate(["app"]);
        }
        else {
            this.router.navigate(["app/setting"]);
        }
    }
};
LoginSignupComponent.ctorParameters = () => [
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"] }
];
LoginSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-signup',
        template: __webpack_require__(/*! raw-loader!./login-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/frontpage/login-signup/login-signup.component.html"),
        styles: [__webpack_require__(/*! ./login-signup.component.css */ "./src/app/frontpage/login-signup/login-signup.component.css")]
    })
], LoginSignupComponent);



/***/ }),

/***/ "./src/app/frontpage/quick-check/quick-check.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/frontpage/quick-check/quick-check.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width320 {\n    width: 320px;\n    margin: 0 auto;\n}\n\n.check{\n    font-size:14px;\n    margin-bottom: 0px;\n    box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.5);\n    cursor: pointer;\n    text-decoration: underline;\n    -webkit-animation: jump 2s 0s ease-in-out infinite;\n            animation: jump 2s 0s ease-in-out infinite;\n}\n\n.toast {\n    opacity: 1;\n}\n\n.check:hover{\n    text-decoration: none;\n}\n\n@-webkit-keyframes jump{\n\t0%{\n\t\t-webkit-transform: translateY(-1px);\n\t\t        transform: translateY(-1px);\n\t}\n\t50%{\n\t\t-webkit-transform: translateY(1.5px);\n\t\t        transform: translateY(1.5px);\n\t}\n\t100%{\n\t\t-webkit-transform: translateY(-1px);\n\t\t        transform: translateY(-1px);\n\t}\n}\n\n@keyframes jump{\n\t0%{\n\t\t-webkit-transform: translateY(-1px);\n\t\t        transform: translateY(-1px);\n\t}\n\t50%{\n\t\t-webkit-transform: translateY(1.5px);\n\t\t        transform: translateY(1.5px);\n\t}\n\t100%{\n\t\t-webkit-transform: translateY(-1px);\n\t\t        transform: translateY(-1px);\n\t}\n}\n\n@media(max-width:340px){\n    .width320{\n        width: calc(100% - 10px);\n        margin: 0 5px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL3F1aWNrLWNoZWNrL3F1aWNrLWNoZWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsa0RBQTBDO1lBQTFDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtDQUNDO0VBQ0MsbUNBQTJCO1VBQTNCLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0Msb0NBQTRCO1VBQTVCLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsbUNBQTJCO1VBQTNCLDJCQUEyQjtDQUM1QjtBQUNEOztBQVZBO0NBQ0M7RUFDQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQyxvQ0FBNEI7VUFBNUIsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0NBQzVCO0FBQ0Q7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mcm9udHBhZ2UvcXVpY2stY2hlY2svcXVpY2stY2hlY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWR0aDMyMCB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2hlY2t7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigwLCAwLCAwLCAwLjUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBhbmltYXRpb246IGp1bXAgMnMgMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi50b2FzdCB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmNoZWNrOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBqdW1we1xuXHQwJXtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG5cdH1cblx0NTAle1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjVweCk7XG5cdH1cblx0MTAwJXtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG5cdH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDozNDBweCl7XG4gICAgLndpZHRoMzIwe1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/frontpage/quick-check/quick-check.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/frontpage/quick-check/quick-check.component.ts ***!
  \****************************************************************/
/*! exports provided: QuickCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickCheckComponent", function() { return QuickCheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");





let QuickCheckComponent = class QuickCheckComponent {
    constructor(auth, cookie, dataTransfer) {
        this.auth = auth;
        this.cookie = cookie;
        this.dataTransfer = dataTransfer;
        this.blocktypes = {
            R: `Regular`,
            S: `Single Block Mtg`,
            D: `Double Block Mtg`,
            Mn: `Minimum`,
            All: `All Periods`,
            Ms: `Mass`,
            Rly: `Rally`,
            A: `Assembly`,
            Sp: `Special`,
            RE: `Regular ETV`,
            SE: `Single Block Mtg ETV`,
            RlyE: `Rally ETV`,
            SpE: `Special ETV`,
            AP: `Academic Period`
        };
        this.isAAuto = true;
        this.isDateChange = false;
        this.isGotDate = false;
        this.forFormerD = "";
    }
    ngOnInit() {
        this.getSche();
        this.room = this.cookie.get("tem_smlunch");
        document.querySelector('#linkToLogin').classList.remove('active');
        document.querySelector('#linkToQuickCheck').classList.add('active');
        document.title = "Home | See Your Schedule";
        if (this.room == 'B' || this.room == 'C' || this.room == 'S' || this.room == 'G115' || this.room == 'G116'
            || this.room == 'G117' || this.room == 'Talon') {
            this.lunchOfDay = "First Lunch";
        }
        else if (this.room == '') {
            this.lunchOfDay = "1st or 2nd lunch";
        }
        else {
            this.lunchOfDay = "Second Lunch";
        }
        setInterval(() => {
            if (this.date == "00 : 00 : 01" || !this.isGotDate) {
                this.getSche();
            }
            var b = this.dataTransfer.getisAuto;
            if (b != this.isAAuto) {
                this.isAAuto = b;
                this.getSche();
            }
            var b2 = this.dataTransfer.getisChange;
            if (!this.isAAuto && b2 != this.isDateChange) {
                this.getSche();
                this.isDateChange = b2;
            }
            var mmmm = document.querySelector("#monnum");
            if (mmmm != undefined && this.forFormerD != mmmm.innerText && this.isAAuto) {
                this.getSche();
                this.forFormerD = mmmm.innerText;
            }
        }, 1000);
    }
    getSche() {
        this.isDone = true;
        this.auth.getSche("non").subscribe(data => {
            if (this.isAAuto) {
                this.date = document.querySelector("#monnum").innerText;
            }
            else {
                this.date = document.querySelector("#manual_date").value;
            }
            //for testing
            //this.date = "2019-9-11"
            this.todayblock = data.block[this.date];
            if (this.todayblock != undefined) {
                this.isGotDate = true;
                if (this.isNumeric(this.todayblock[this.todayblock.length - 1])) {
                    var schestr = this.todayblock.substring(0, this.todayblock.length - 1);
                    var num = this.todayblock[this.todayblock.length - 1];
                    this.todayblockD = this.blocktypes[schestr] + num;
                    this.todaytimes = data.sche[this.todayblock.substring(0, this.todayblock.length - 1)];
                    if (this.todaytimes != undefined) {
                        this.updateBANDP(Number(num), schestr);
                        this.luncper = " " + this.blockAndTime[Number(this.todaytimes['First Lunch'].split('/')[1][6]) - 1][1] + " ";
                    }
                    else {
                        this.isDone = false;
                        this.luncper = "No";
                    }
                }
                else {
                    this.todayblockD = this.blocktypes[this.todayblock];
                    this.todaytimes = data.sche[this.todayblock];
                    if (this.todaytimes != undefined) {
                        this.updateBANDP(-1, "S");
                        this.luncper = " " + this.blockAndTime[Number(this.todaytimes['First Lunch'].split('/')[1][6]) - 1][1] + " ";
                    }
                    else {
                        this.isDone = false;
                        this.luncper = "No";
                    }
                }
            }
            else {
                if (this.date.length == 0) {
                    this.isGotDate = false;
                }
                else {
                    this.isGotDate = true;
                    this.luncper = "No";
                }
            }
            this.isDone = false;
        });
    }
    updateBANDP(c = -1, sche) {
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
    }
    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    isModifiedSchedule(todayBlock) {
        return todayBlock.includes("TM") || todayBlock.includes("TA") || todayBlock.includes("TR") || todayBlock.includes("1115SpE6") || todayBlock.includes("1122SpE5");
    }
    isFirstLunch(e) {
        e.preventDefault();
        this.room = e.target.value;
        this.cookie.set("tem_smlunch", this.room);
        if (this.room == 'B' || this.room == 'C' || this.room == 'S' || this.room == 'G115' || this.room == 'G116'
            || this.room == 'G117' || this.room == 'Talon' || this.isModifiedSchedule(this.todayblock)) {
            this.lunchOfDay = "First Lunch";
        }
        else if (this.room == '') {
            this.lunchOfDay = "1st or 2nd lunch";
        }
        else {
            this.lunchOfDay = "Second Lunch";
        }
    }
};
QuickCheckComponent.ctorParameters = () => [
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] }
];
QuickCheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quick-check',
        template: __webpack_require__(/*! raw-loader!./quick-check.component.html */ "./node_modules/raw-loader/index.js!./src/app/frontpage/quick-check/quick-check.component.html"),
        styles: [__webpack_require__(/*! ./quick-check.component.css */ "./src/app/frontpage/quick-check/quick-check.component.css")]
    })
], QuickCheckComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/services/data-transfer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/data-transfer.service.ts ***!
  \***************************************************/
/*! exports provided: DataTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferService", function() { return DataTransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataTransferService = class DataTransferService {
    constructor() {
        this.userInfo = {};
        this.isAuto = true;
        this.isloggin = false;
        this.isChange = false;
        this.currentSche = {
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: '',
            p7: '',
            p8: ''
        };
        this.isAllPeriod = true;
        this.isUpdate = false;
        this.isPeriod8 = true;
    }
    setIsChange(b) {
        this.isChange = b;
    }
    get getisChange() {
        return this.isChange;
    }
    get getisAuto() {
        return this.isAuto;
    }
    setIsAuto(b) {
        this.isAuto = b;
    }
    setLoggedIn(b) {
        this.isloggin = b;
    }
    setUseInfo(data) {
        this.userInfo = data;
    }
    get getLogin() {
        return this.isloggin;
    }
    get getUserInfo() {
        return this.userInfo;
    }
    setSche(data) {
        this.currentSche = data;
    }
    get getSche() {
        return this.currentSche;
    }
    setIsAllPeriod(data) {
        this.isAllPeriod = data;
    }
    get getIsAllPeriod() {
        return this.isAllPeriod;
    }
    setIsUpdate(data) {
        this.isUpdate = data;
    }
    get getIsUpdate() {
        return this.isUpdate;
    }
    setIsPeriod8(data) {
        this.isPeriod8 = data;
    }
    get getIsPeriod8() {
        return this.isPeriod8;
    }
    signout() {
        this.userInfo = {};
        this.isAuto = true;
        this.isloggin = false;
        this.isChange = false;
        this.currentSche = {
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: '',
            p7: '',
            p8: ''
        };
        this.isAllPeriod = true;
        this.isUpdate = false;
        this.isPeriod8 = true;
    }
};
DataTransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataTransferService);



/***/ }),

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "X-TBA-Auth-Key": ""
    })
};
let ServiceService = class ServiceService {
    constructor(http) {
        this.http = http;
        //private path = "http://localhost/seeyourschedule.com/";
        this.path = "/php/";
    }
    sendEmail(non) {
        return this.http.post(this.path + 'sendEmail.php', {
            non
        });
    }
    getScheVersion(non) {
        return this.http.post(this.path + 'getScheVersion.php', {
            non
        });
    }
    getSche(non) {
        return this.http.post(this.path + 'scheduleYuhan(1).php', {
            non
        });
    }
    updatePeriod(id, val, idin) {
        return this.http.post(this.path + 'updatePeriod.php', {
            id,
            val,
            idin
        });
    }
    updateUsername(id, val) {
        return this.http.post(this.path + 'updateUsername.php', {
            id,
            val
        });
    }
    updateDisplay(id, val) {
        return this.http.post(this.path + 'updateDisplay.php', {
            id,
            val
        });
    }
    updateEmail(id, val) {
        return this.http.post(this.path + 'updateEmail.php', {
            id,
            val
        });
    }
    getPeriods(id) {
        return this.http.post(this.path + 'getPeriods.php', {
            id
        });
    }
    login(name, password) {
        return this.http.post(this.path + 'login.php', {
            name,
            password
        });
    }
    signup(username, display, email, password, passwordc, check) {
        return this.http.post(this.path + 'signup.php', {
            username,
            display,
            email,
            password,
            passwordc,
            check
        });
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServiceService);



/***/ }),

/***/ "./src/app/userpage/setting/setting.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/userpage/setting/setting.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");





let SettingComponent = class SettingComponent {
    constructor(cookie, auth, dataTransfer) {
        this.cookie = cookie;
        this.auth = auth;
        this.dataTransfer = dataTransfer;
        this.updatemessage = {
            name: 'Data Uploaded',
            email: 'Data Uploaded',
            display: 'Data Uploaded',
            periods: 'Data Uploaded'
        };
        this.sche = {
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: '',
            p7: '',
            p8: ''
        };
        this.isLoad = true;
        document.title = "Setting | See Your Schedule";
    }
    ngOnInit() {
        setTimeout(() => {
            this.handleWindow();
            this.getPeriods();
            let currentUser = this.dataTransfer.getUserInfo;
            this.display = currentUser.display;
            this.name = currentUser.name;
            this.email = currentUser.email;
            this.userid = currentUser.userid;
            this.isPeriod8 = this.dataTransfer.getIsPeriod8;
            this.sche = this.dataTransfer.getSche;
            this.isLoad = false;
        }, 400);
        this.setIntervalWithoutDelay(() => {
            this.isPeriod8 = this.dataTransfer.getIsPeriod8;
            this.sche = this.dataTransfer.getSche;
        }, 1000);
    }
    setIntervalWithoutDelay(loopFunc, interval) {
        loopFunc();
        return setInterval(loopFunc, interval);
    }
    handleWindow() {
        document.querySelector('#today-tab').classList.remove('active');
        document.querySelector('#thisweek-tab').classList.remove('active');
        document.querySelector('#setting-tab').classList.add('active');
    }
    updatePeriod(e) {
        e.preventDefault();
        const target = e.target;
        var val = target.value;
        var idd = target.id;
        var idin = 'p' + idd[idd.length - 1];
        if (val.length !== 0) {
            this.auth.updatePeriod(this.userid, val, idin).subscribe(data => {
                document.querySelector('#' + idd).style.border = '1px solid #aaa';
                this.sche[idin] = val;
                if (this.isFullPeriods()) {
                    this.dataTransfer.setIsAllPeriod(true);
                    this.getPeriods();
                }
                else {
                    this.dataTransfer.setIsAllPeriod(false);
                }
            });
        }
        else {
            this.updatemessage.periods = 'Can\'t be empty';
        }
    }
    updateUsername() {
        var val = document.querySelector('.upname').value;
        if (val === this.name) {
            return;
        }
        if (val.length !== 0) {
            this.auth.updateUsername(this.userid, val).subscribe(data => {
                if (data.meesage !== 'hhh') {
                    this.updatemessage.name = data.meesage;
                }
                else {
                    this.cookie.set('name_smlunch', val, 365, '/');
                    this.updateToService('name', val);
                }
            });
        }
        else {
            this.updatemessage.name = 'Can\'t be empty';
        }
    }
    isFullPeriods() {
        if (this.sche.p1.length == 0 || this.sche.p2.length == 0 || this.sche.p3.length == 0 || this.sche.p4.length == 0 ||
            this.sche.p5.length == 0 || this.sche.p6.length == 0 || this.sche.p7.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    updateDisplay() {
        var val = document.querySelector('.updisplay').value;
        if (val.length !== 0) {
            this.auth.updateDisplay(this.userid, val).subscribe(data => {
                this.cookie.set('display_smlunch', val, 365, '/');
                this.display = val;
                this.updateToService('display', val);
            });
        }
        else {
            this.updatemessage.display = 'Can\'t be empty';
        }
    }
    updateEmail() {
        var val = document.querySelector('.upemail').value;
        const valSP = val.split('@');
        if (valSP.length !== 0) {
            this.auth.updateEmail(this.userid, val).subscribe(data => {
                if (data.meesage !== 'hhh') {
                    this.updatemessage.email = data.meesage;
                }
                else {
                    this.cookie.set('email_smlunch', val, 365, '/');
                    this.updateToService('email', val);
                }
            });
        }
        else {
            this.updatemessage.email = 'Can\'t be empty';
        }
    }
    period8(e) {
        e.preventDefault();
        this.isPeriod8 = e.target.checked;
        this.dataTransfer.setIsPeriod8(e.target.checked);
    }
    updateToService(input, val) {
        let current = this.dataTransfer.getUserInfo;
        current[input] = val;
        this.dataTransfer.setUseInfo(current);
        this.updatemessage[input] = 'Data uploaded';
    }
    getPeriods() {
        this.sche = this.dataTransfer.getSche;
        if (this.isFullPeriods()) {
            this.dataTransfer.setIsAllPeriod(true);
        }
        else {
            this.dataTransfer.setIsAllPeriod(false);
        }
        if (this.sche.p8.length !== 0) {
            this.isPeriod8 = true;
        }
        else {
            this.isPeriod8 = false;
        }
        for (var i = 1; i < 9; i++) {
            if (this.sche['p' + i].length == 0) {
                if (document.querySelector('#inputGroupSelect0' + i) !== null) {
                    document.querySelector('#inputGroupSelect0' + i).style.border = '2px solid red';
                }
            }
        }
    }
};
SettingComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] }
];
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/userpage/setting/setting.component.html"),
        styles: [__webpack_require__(/*! ../userpage.component.css */ "./src/app/userpage/userpage.component.css")]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpage/userpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\n    margin-top:5px;\n}\n\n.generalWidth{\n    padding: 0 10px;\n    width:400px;\n    margin-left: calc(50% - 205px);\n}\n\n.nav-link{\n    cursor: pointer!important;\n}\n\n#account {\n    height: 100%;\n    overflow-y: auto;\n}\n\n.largerFont{\n    font-size:0.9rem;\n    margin-top:5px;\n    margin-bottom:2px;\n}\n\n#thisweek_container {\n    width: 100%;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    overflow-x: scroll;\n}\n\nh5 {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px);\n    font-size: 1.05rem;\n}\n\n.mb-3,\n.my-3 {\n    margin-bottom: 5px !important;\n}\n\n.signno {\n    margin-top: 3px;\n    margin-left: 5px;\n}\n\n.form-group {\n    margin-bottom: 0px;\n}\n\n.sep {\n    margin-top: 5px;\n    margin-left: 5px;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n}\n\n.spbtn {\n    width: 80px;\n    font-size: 0.875rem;\n    padding: 0;\n}\n\n#timeL {\n    width: 320px;\n    margin: 0 auto;\n}\n\n.timeLL {\n    width: 270px;\n    margin: 0 0;\n    margin-top: 20px;\n}\n\n.gray {\n    background-color: #aaa;\n}\n\n.toast {\n    opacity: 1;\n}\n\n.loader{\n    margin:0 calc(50% - 1rem);\n    margin-top:10px;\n}\n\n.beGray{\n    background-color: #aaa;\n}\n\n@media (max-width:940px) {\n    #account {\n        height: 600px;\n    }\n}\n\n@media (max-width:450px) {\n    #account {\n        width:100%;\n        margin-left: 0;\n    }\n}\n\n@media (max-height:568px) {\n    #account {\n        height: 450px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBhZ2UvdXNlcnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VycGFnZS91c2VycGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcbiAgICBtYXJnaW4tdG9wOjVweDtcbn1cblxuLmdlbmVyYWxXaWR0aHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgd2lkdGg6NDAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMjA1cHgpO1xufVxuXG4ubmF2LWxpbmt7XG4gICAgY3Vyc29yOiBwb2ludGVyIWltcG9ydGFudDtcbn1cblxuI2FjY291bnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubGFyZ2VyRm9udHtcbiAgICBmb250LXNpemU6MC45cmVtO1xuICAgIG1hcmdpbi10b3A6NXB4O1xuICAgIG1hcmdpbi1ib3R0b206MnB4O1xufVxuXG4jdGhpc3dlZWtfY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG5cbmg1IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG59XG5cbi5tYi0zLFxuLm15LTMge1xuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc2lnbm5vIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnNlcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbn1cblxuLnNwYnRuIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiN0aW1lTCB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGltZUxMIHtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgbWFyZ2luOiAwIDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmdyYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG59XG5cbi50b2FzdCB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxvYWRlcntcbiAgICBtYXJnaW46MCBjYWxjKDUwJSAtIDFyZW0pO1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuLmJlR3JheXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpIHtcbiAgICAjYWNjb3VudCB7XG4gICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo0NTBweCkge1xuICAgICNhY2NvdW50IHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6NTY4cHgpIHtcbiAgICAjYWNjb3VudCB7XG4gICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-push */ "./node_modules/ng-push/ng-push.umd.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_6__);







let UserpageComponent = class UserpageComponent {
    constructor(cookie, router, auth, push, dataTransfer) {
        //used in getSche check if the user has the lastest verison
        this.cookie = cookie;
        this.router = router;
        this.auth = auth;
        this.push = push;
        this.dataTransfer = dataTransfer;
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
        this.auth.getScheVersion("non").subscribe(data2 => {
            if (localStorage.getItem("smlunch.ga_scheVersion") != data2.version) {
                localStorage.setItem("smlunch.ga_scheVersion", data2.version);
                this.auth.getSche("non").subscribe(data => {
                    localStorage.setItem("smlunch.ga_sche", JSON.stringify(data));
                });
            }
        });
        if (this.dataTransfer.getLogin || this.canCookieLogin()) {
            if (!this.dataTransfer.getLogin) {
                let id = this.cookie.get('userid_smlunch');
                this.dataTransfer.setUseInfo({
                    name: this.cookie.get('name_smlunch'),
                    email: this.cookie.get('email_smlunch'),
                    userid: id,
                    display: this.cookie.get('display_smlunch')
                });
                this.auth.getPeriods(id).subscribe(data => {
                    this.dataTransfer.setSche(data);
                    this.getPeriods();
                });
            }
            else {
                this.auth.getPeriods(this.dataTransfer.getUserInfo.userid).subscribe(data => {
                    this.dataTransfer.setSche(data);
                    this.getPeriods();
                });
            }
            //this.push.requestPermission();
        }
        else {
            this.signOut();
        }
    }
    ngOnInit() {
        this.isPeriodAll = this.dataTransfer.getIsAllPeriod;
        setInterval(() => {
            this.isPeriodAll = this.dataTransfer.getIsAllPeriod;
        }, 1000);
    }
    canCookieLogin() {
        const islo = this.cookie.get('isLog_smlunch');
        return islo === 'true' && this.cookie.get('name_smlunch') != undefined
            && this.cookie.get('email_smlunch') != undefined
            && this.cookie.get('display_smlunch') != undefined;
    }
    signOut() {
        this.cookie.deleteAll('/');
        this.dataTransfer.signout();
        this.router.navigate(['']);
    }
    isFullPeriods() {
        if (this.sche.p1.length == 0 || this.sche.p2.length == 0 || this.sche.p3.length == 0 || this.sche.p4.length == 0 ||
            this.sche.p5.length == 0 || this.sche.p6.length == 0 || this.sche.p7.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    getPeriods() {
        this.sche = this.dataTransfer.getSche;
        if (!this.isFullPeriods()) {
            this.isPeriodAll = false;
            this.dataTransfer.setIsAllPeriod(false);
        }
        else {
            this.dataTransfer.setIsAllPeriod(true);
            this.isPeriodAll = true;
        }
        if (this.sche.p8.length != 0) {
            this.dataTransfer.setIsPeriod8(true);
        }
        else {
            this.dataTransfer.setIsPeriod8(false);
        }
        for (var i = 1; i < 9; i++) {
            if (this.sche["p" + i].length == 0) {
                if (document.querySelector("#inputGroupSelect0" + i) != null) {
                    document.querySelector("#inputGroupSelect0" + i).style.border = "2px solid red";
                }
            }
        }
    }
};
UserpageComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"] },
    { type: ng_push__WEBPACK_IMPORTED_MODULE_6__["PushNotificationsService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] }
];
UserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userpage',
        template: __webpack_require__(/*! raw-loader!./userpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/userpage/userpage.component.html"),
        styles: [__webpack_require__(/*! ./userpage.component.css */ "./src/app/userpage/userpage.component.css")]
    })
], UserpageComponent);

//unknown code was in setInterval
/*
      if (!this.isSpecial && this.count_updatetime == 0) {
        this.updateTimeLeft()
        this.count_updatetime++
      }else{
        this.count_updatetime++
        if (this.count_updatetime == 41) {
          this.count_updatetime = 0
        }
      }

      if (valSP[1] != "smhsstudents.org" && valSP[1] != "smhs.org"
        || valSP.length > 2) {
        this.updatemessage.email = "Not a SM Email"
      } else
*/


/***/ }),

/***/ "./src/app/userpage/your-schedule/your-schedule.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/userpage/your-schedule/your-schedule.component.ts ***!
  \*******************************************************************/
/*! exports provided: YourScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourScheduleComponent", function() { return YourScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");



let YourScheduleComponent = class YourScheduleComponent {
    constructor(dataTransfer) {
        this.dataTransfer = dataTransfer;
        //display block type
        this.blocktypes = {
            R: `Regular`,
            S: `Single Block Mtg`,
            Db: `Double Block Mtg`,
            Mn: `Minimum`,
            All: `All Periods`,
            Ms: `Mass`,
            Rly: `Rally`,
            A: `Assembly`,
            Sp: `Special`,
            RE: `Regular ETV`,
            SE: `Single Block Mtg ETV`,
            RlyE: `Rally ETV`,
            SpE: `Special ETV`,
            AP: `Academic Period`,
            MsE: 'Mass Special',
            OHM: 'Office hour meeting',
            TA: 'Modified schedule Trial run All periods',
            TR: 'Modified schedule Trial run Regular day',
            TM: 'Modified schedule Trial run Meeting',
            Ex: 'Exam',
            ExO: 'Exam'
        };
        this.isAllPeriod = true;
        this.time_line = []; //the time line of the day(used in HTML as ngFor) NOT_USED
        this.todayblockD = {
            today: '',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: ''
        };
        this.date = ''; //date from getElementbyId
        this.isAAuto = true;
        this.isDateChange = false;
        this.isSpecial = false;
        this.isGotDate = false;
        this.formerDate = '';
        this.count_updatetime = 0; //not used anywhere
        this.runTwice = 0; //set it to 0 if we need to run updateTimeLeft() twice
        this.formerTime = 0; //former minute value
        this.timeLines = {
            today: {
                date: '',
                timeline: []
            },
            monday: {
                date: '',
                timeline: []
            },
            tuesday: {
                date: '',
                timeline: []
            },
            wednesday: {
                date: '',
                timeline: []
            },
            thursday: {
                date: '',
                timeline: []
            },
            friday: {
                date: '',
                timeline: []
            }
        };
        this.sche = {
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: '',
            p7: '',
            p8: ''
        };
        this.isLoad = true;
        this.canSendNotification = true; // if the system can send notification
        this.notificationOffPeriof = 0; //system can send notification if this value is zero
        this.datePairWithNumber = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
        this.weekList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];
        this.weekStartAndEnd = { '0': { 'start': '2019-8-12', 'end': '2019-8-16' }, '7': { 'start': '2019-8-19', 'end': '2019-8-23' }, '14': { 'start': '2019-8-26', 'end': '2019-8-30' }, '21': { 'start': '2019-9-2', 'end': '2019-9-6' }, '28': { 'start': '2019-9-9', 'end': '2019-9-13' }, '35': { 'start': '2019-9-16', 'end': '2019-9-20' }, '42': { 'start': '2019-9-23', 'end': '2019-9-27' }, '49': { 'start': '2019-9-30', 'end': '2019-10-4' }, '56': { 'start': '2019-10-7', 'end': '2019-10-11' }, '63': { 'start': '2019-10-14', 'end': '2019-10-18' }, '70': { 'start': '2019-10-21', 'end': '2019-10-25' }, '77': { 'start': '2019-10-28', 'end': '2019-11-1' }, '84': { 'start': '2019-11-4', 'end': '2019-11-8' }, '91': { 'start': '2019-11-11', 'end': '2019-11-15' }, '98': { 'start': '2019-11-18', 'end': '2019-11-22' }, '105': { 'start': '2019-11-25', 'end': '2019-11-29' }, '112': { 'start': '2019-12-2', 'end': '2019-12-6' }, '119': { 'start': '2019-12-9', 'end': '2019-12-13' }, '126': { 'start': '2019-12-16', 'end': '2019-12-20' }, '133': { 'start': '2019-12-23', 'end': '2019-12-27' }, '140': { 'start': '2019-12-30', 'end': '2020-1-3' }, '147': { 'start': '2020-1-6', 'end': '2020-1-10' }, '154': { 'start': '2020-1-13', 'end': '2020-1-17' }, '161': { 'start': '2020-1-20', 'end': '2020-1-24' }, '168': { 'start': '2020-1-27', 'end': '2020-1-31' }, '175': { 'start': '2020-2-3', 'end': '2020-2-7' }, '182': { 'start': '2020-2-10', 'end': '2020-2-14' }, '189': { 'start': '2020-2-17', 'end': '2020-2-21' }, '196': { 'start': '2020-2-24', 'end': '2020-2-28' }, '203': { 'start': '2020-3-2', 'end': '2020-3-6' }, '210': { 'start': '2020-3-9', 'end': '2020-3-13' }, '217': { 'start': '2020-3-16', 'end': '2020-3-20' }, '224': { 'start': '2020-3-23', 'end': '2020-3-27' }, '231': { 'start': '2020-3-30', 'end': '2020-4-3' }, '238': { 'start': '2020-4-6', 'end': '2020-4-10' }, '245': { 'start': '2020-4-13', 'end': '2020-4-17' }, '252': { 'start': '2020-4-20', 'end': '2020-4-24' }, '259': { 'start': '2020-4-27', 'end': '2020-5-1' }, '266': { 'start': '2020-5-4', 'end': '2020-5-8' }, '273': { 'start': '2020-5-11', 'end': '2020-5-15' }, '280': { 'start': '2020-5-18', 'end': '2020-5-22' }, '287': { 'start': '2020-5-25', 'end': '2020-5-28' }, '294': { 'start': '2019-8-12', 'end': '2019-8-16' } };
        this.todayB = true;
        this.handleWindow();
    }
    ngOnInit() {
        setTimeout(() => {
            this.display = this.dataTransfer.getUserInfo.display;
            this.sche = this.dataTransfer.getSche;
            this.getSche();
        }, 400);
        this.setIntervalWithoutDelay(() => {
            //this.getSche();
            if (this.isFullPeriods()) {
                this.isAllPeriod = this.dataTransfer.getIsAllPeriod;
                this.sche = this.dataTransfer.getSche;
                //get the current time from getElementbyId
                this.time = document.querySelector('#clock').innerText;
                //get minute from used to check if the minute has change
                var cTime = Number(this.time.split(':')[1]);
                //if the there is new day, or we didn;t have the schedule, we get the scedule
                if (this.time === '00 : 00 : 01' || !this.isGotDate) {
                    this.getSche();
                }
                //check if the MODE is changed
                var b = this.dataTransfer.getisAuto;
                if (b !== this.isAAuto) {
                    this.isAAuto = b;
                    this.getSche();
                    this.runTwice = 0; //make updateTimeLeft() run twice so that we get result(it was a bug)
                }
                //check if the DATE has changed
                var b2 = this.dataTransfer.getisChange;
                if (!this.isAAuto && b2 !== this.isDateChange) {
                    this.isDateChange = b2;
                    this.getSche();
                }
                //get the formatted month like 2019-9-9
                var cuurentD = document.querySelector('#monnum').innerText;
                if (this.isAAuto && cuurentD !== this.formerDate) {
                    this.formerDate = cuurentD;
                    this.getSche();
                }
                //check if the minute value has change, 
                //CTime-current minute value
                if (cTime !== this.formerTime) {
                    this.updateTimeLeft();
                    this.formerTime = cTime;
                }
                if (this.runTwice <= 1) {
                    this.updateTimeLeft();
                    this.runTwice++;
                }
                try {
                    let hjhjh = document.querySelector('.hjhjh');
                    //fix the lunch-empty bug
                    //hjhjh.innerText = 'You have ' + this.lunchOfDay;
                }
                catch (_a) { }
                if (this.notificationOffPeriof > 0) {
                    this.canSendNotification = false;
                    this.notificationOffPeriof--;
                }
                else {
                    this.canSendNotification = true;
                }
            }
            else {
                this.sche = this.dataTransfer.getSche;
                this.isLoad = false;
            }
        }, 1000);
    }
    setIntervalWithoutDelay(loopFunc, interval) {
        loopFunc();
        return setInterval(loopFunc, interval);
    }
    isFullPeriods() {
        if (this.sche.p1.length == 0 || this.sche.p2.length == 0 || this.sche.p3.length == 0 || this.sche.p4.length == 0 ||
            this.sche.p5.length == 0 || this.sche.p6.length == 0 || this.sche.p7.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    handleWindow() {
        try {
            document.querySelector('#today-tab').classList.remove('active');
            document.querySelector('#thisweek-tab').classList.remove('active');
            document.querySelector('#setting-tab').classList.remove('active');
            if (location.pathname === '/app/today') {
                document.querySelector('#today-tab').classList.add('active');
                this.todayB = true;
                document.title = "Today | See Your Schedule";
            }
            else if (location.pathname === '/app/this-week') {
                document.querySelector('#thisweek-tab').classList.add('active');
                this.todayB = false;
                document.title = "This Week | See Your Schedule";
            }
        }
        catch (_a) { }
    }
    //use to generate weekStartAndEnd in php file
    getWeekStartAndEnd() {
        let out = '{';
        this.weekList.forEach((ele) => {
            let list = this.getDateList(this.rawDateList[(ele - 1) * 7]);
            let num = (ele - 1) * 7;
            out += '"' + num + '":{ "start": "' + list[0] + '", "end" : "' + list[list.length - 1] + '"},';
        });
        out += '}';
    }
    //get date for the week
    getDateList(todayDate) {
        let indexToday = this.rawDateList.indexOf(todayDate);
        var result = [];
        //iterate through the day after this day
        for (let i = 1; i < 7 - indexToday % 7; i++) {
            if (indexToday + i < this.rawDateList.length && this.rawDateList[indexToday + i] !== undefined) {
                result.push(this.rawDateList[indexToday + i]);
            }
        }
        //iterate through the day before this day
        for (let i = 0; i < indexToday % 7 + 1; i++) {
            if (this.rawDateList[indexToday - i] !== undefined) {
                result.push(this.rawDateList[indexToday - i]);
            }
        }
        result.sort((date1, date2) => {
            let sp1 = date1.split('-').map(ele => Number(ele));
            let sp2 = date2.split('-').map(ele => Number(ele));
            for (let i = 0; i < sp1.length; i++) {
                if (sp1[i] < sp2[i]) {
                    return -1;
                }
                else if (sp1[i] > sp2[i]) {
                    return 1;
                }
                if (i === sp1.length - 1) {
                    return 0;
                }
            }
        });
        if (result.length === 7) {
            result.splice(result.length - 1, 1);
            result.splice(result.length - 1, 1);
        }
        return result;
    }
    //update the time left for the current period
    updateTimeLeft() {
        if (!this.todayB) {
            return;
        }
        let count = 0;
        if (this.time !== undefined) {
            let numnow = Number(this.time.split(' : ')[0] + this.time.split(' : ')[1]);
            try {
                for (let ele in this.timeLines.today.timeline) {
                    let diff = this.isInRange(this.timeLines.today.timeline[ele].time, numnow);
                    if (diff !== '' || !this.isAAuto) {
                        count++;
                        if (this.isAAuto) {
                            if (this.todayblockD.today === 'Off') {
                                this.timeLines.today.timeline[ele].timeleft = 'today';
                                this.timeLines.today.timeline[ele].style = '';
                            }
                            else {
                                this.timeLines.today.timeline[ele].style = '';
                                this.timeLines.today.timeline[ele].timeleft = diff;
                            }
                        }
                        else {
                            this.timeLines.today.timeline[ele].style = 'beGray';
                            this.timeLines.today.timeline[ele].timeleft = '';
                        }
                    }
                    else {
                        this.timeLines.today.timeline[ele].style = 'beGray';
                        this.timeLines.today.timeline[ele].timeleft = '';
                    }
                }
                if (count === 0 || this.todayblockD.today === 'Off') {
                    this.isBreak = true;
                }
                else {
                    this.isBreak = false;
                }
            }
            catch (err) {
                //console.log(err);
                this.isBreak = true;
            }
        }
    }
    //check if the time is in range
    isInRange(str, numm) {
        if (str.split('-')[1] !== undefined) {
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
                return result + ' mins left';
            }
            else {
                return '';
            }
        }
    }
    //find the period that correspond to the block including wrapping around algrithm
    updateBANDP(sche, c = -1) {
        this.blockAndTime = [];
        if (c !== -1) {
            if (sche === 'All' || sche === '0812Sp' || sche === 'Rec' || sche === 'TA') {
                for (var i = c; i < c + 7; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push('p' + i);
                    }
                    else {
                        this.blockAndTime.push('p' + (i - 7));
                    }
                }
            }
            else if (sche === 'Mn' || sche === 'Ms') {
                for (var i = c; i < c + 4; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push('p' + i);
                    }
                    else {
                        this.blockAndTime.push('p' + (i - 7));
                    }
                }
            }
            else if (sche === 'S') {
                this.blockAndTime.push('meeting');
                for (var i = c; i < c + 5; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push('p' + i);
                    }
                    else {
                        this.blockAndTime.push('p' + (i - 7));
                    }
                }
            }
            else {
                for (var i = c; i < c + 6; i++) {
                    if (i <= 7) {
                        this.blockAndTime.push('p' + i);
                    }
                    else {
                        this.blockAndTime.push('p' + (i - 7));
                    }
                }
            }
            this.blockAndTime.push('p8');
        }
    }
    //genrate the time line if the person has second lunch
    updateTimelineS(todayBlock, periodSquence, result_timeLineDay) {
        this.timeLines[result_timeLineDay].timeline = [];
        var luncper = todayBlock['First Lunch'].split('/')[1];
        for (let [key, value] of Object.entries(todayBlock)) {
            if (key.substring(0, 7).includes('Block')) {
                if (key === luncper) {
                    var nnum = Number(luncper[6]) - 1;
                    actual = periodSquence[nnum];
                    var sppstr = todayBlock['First Lunch'].split('/');
                    this.timeLines[result_timeLineDay].timeline.push({
                        title: actual,
                        where: this.sche[actual],
                        time: sppstr[2],
                        timeleft: ''
                    }, {
                        title: 'Second Lunch',
                        where: ' ',
                        time: todayBlock[luncper].split('/')[2],
                        timeleft: ''
                    });
                    if (this.isAAuto && this.canSendNotification && result_timeLineDay === 'today') {
                        let options = {
                            body: 'Go after block' + (nnum + 1) + '(Period ' + (actual[1]) + ')',
                            icon: 'https://seeyourschedule.com/seal.svg'
                        };
                        /*
                        this.push.create('Second Lunch', options).subscribe(
                          res => console.log(res),
                          err => console.log(err)
                        )*/
                        this.notificationOffPeriof = 13;
                    }
                }
                else {
                    nnum = Number(key[6]) - 1;
                    var actual = periodSquence[nnum];
                    this.timeLines[result_timeLineDay].timeline.push({
                        title: actual,
                        where: this.sche[actual],
                        time: value,
                        timeleft: ''
                    });
                }
            }
            else if (key.includes('Period') && !key.includes('Academic')) {
                this.timeLines[result_timeLineDay].timeline.push({
                    title: 'p8',
                    where: this.sche['p8'],
                    time: value,
                    timeleft: ''
                });
            }
            else if (key !== 'First Lunch') {
                this.timeLines[result_timeLineDay].timeline.push({
                    title: key,
                    where: ' ',
                    time: value,
                    timeleft: ''
                });
            }
        }
        if (result_timeLineDay === 'today') {
            this.updateTimeLeft();
        }
    }
    //genrate the time line if the person has first lunch
    updateTimelineF(todayBlock, periodSquence, result_timeLineDay) {
        this.timeLines[result_timeLineDay].timeline = [];
        var luncper = todayBlock['First Lunch'].split('/')[1];
        for (let [key, value] of Object.entries(todayBlock)) {
            if (key === 'First Lunch') {
                var sppstr = String(value).split('/');
                var nnum = Number(luncper[6]) - 1;
                var actual = periodSquence[nnum];
                this.timeLines[result_timeLineDay].timeline.push({
                    title: key,
                    where: ' ',
                    time: sppstr[0],
                    timeleft: ''
                }, {
                    title: actual,
                    where: this.sche[actual],
                    time: todayBlock[luncper].split('/')[0],
                    timeleft: ''
                });
                if (this.isAAuto && this.canSendNotification && result_timeLineDay === 'today') {
                    let options = {
                        body: 'Go after block' + (nnum) + '(Period ' + (periodSquence[nnum - 1][1]) + ')',
                        icon: 'https://seeyourschedule.com/seal.svg'
                    };
                    /*
                    this.push.create('First Lunch', options).subscribe(
                      res => console.log(res),
                      err => console.log(err)
                    )*/
                    this.notificationOffPeriof = 13;
                }
            }
            else if (key.substring(0, 7).includes('Block')) {
                if (key === luncper) {
                }
                else {
                    nnum = Number(key[6]) - 1;
                    actual = periodSquence[nnum];
                    this.timeLines[result_timeLineDay].timeline.push({
                        title: actual,
                        where: this.sche[actual],
                        time: value,
                        timeleft: ''
                    });
                }
            }
            else if (key.includes('Period') && !key.includes('Academic')) {
                this.timeLines[result_timeLineDay].timeline.push({
                    title: 'p8',
                    where: this.sche['p8'],
                    time: value,
                    timeleft: ''
                });
            }
            else {
                this.timeLines[result_timeLineDay].timeline.push({
                    title: key,
                    where: ' ',
                    time: value,
                    timeleft: ''
                });
            }
        }
        if (result_timeLineDay === 'today') {
            this.updateTimeLeft();
        }
    }
    //update the time line if there is no lunch
    updateTimelineNo(todayBlock, periodSquence, result_timeLineDay) {
        this.timeLines[result_timeLineDay].timeline = [];
        for (let [key, value] of Object.entries(this.todaytimes)) {
            if (key.substring(0, 7).includes('Block')) {
                var nnum = Number(key[6]) - 1;
                var actual = periodSquence[nnum];
                this.timeLines[result_timeLineDay].timeline.push({
                    title: actual,
                    where: this.sche[actual],
                    time: value,
                    timeleft: ''
                });
            }
            else if (key.includes('Period') && !key.includes('Academic')) {
                this.timeLines[result_timeLineDay].timeline.push({
                    title: 'p8',
                    where: this.sche['p8'],
                    time: value,
                    timeleft: ''
                });
            }
            else {
                this.timeLines[result_timeLineDay].timeline.push({
                    title: key,
                    where: ' ',
                    time: value,
                    timeleft: ''
                });
            }
        }
        if (result_timeLineDay === 'today') {
            this.updateTimeLeft();
        }
    }
    //decide which lunch the person has
    isFirstLunch(rawBlock, day) {
        if (rawBlock !== undefined) {
            this.isSpecial = false;
            if (rawBlock['First Lunch'] !== undefined) {
                var luncper = rawBlock['First Lunch'].split('/')[1];
                var room = this.sche[this.blockAndTime[Number(luncper[6] - 1)]];
                if (room === 'B' || room === 'C' || room === 'S' || room === 'G115' || room === 'G116'
                    || room === 'G117' || room === 'Talon' || this.isModifiedSchedule(this.todayblock)) {
                    this.updateTimelineF(rawBlock, this.blockAndTime, day);
                    this.lunchOfDay = 'First Lunch';
                    return true;
                }
                else {
                    this.lunchOfDay = 'Second Lunch';
                    this.updateTimelineS(rawBlock, this.blockAndTime, day);
                    return false;
                }
            }
            else {
                this.updateTimelineNo(rawBlock, this.blockAndTime, day);
            }
        }
        else {
            this.isSpecial = true;
            this.timeLines[day].timeline = [{
                    title: 'You',
                    where: 'have',
                    time: 'day off',
                    timeleft: 'today'
                }];
            this.lunchOfDay = 'a nice day!';
        }
    }
    //get schedule from server
    getSche() {
        try {
            if (this.dataTransfer.getIsAllPeriod) {
                let data = JSON.parse(localStorage.getItem('smlunch.ga_sche'));
                let day = document.querySelector('#date').innerText;
                this.rawDateList = data.scheArray;
                //check if we are on the auto mode
                if (this.isAAuto) {
                    this.date = document.querySelector('#monnum').innerText;
                }
                else {
                    this.date = document.querySelector('#manual_date').value;
                }
                //get current week
                this.currentWeek = this.rawDateList.indexOf(this.date) / 7 | 0;
                let spiltToCheckSunday = day.split(' ')[0];
                if (spiltToCheckSunday === 'Sun') {
                    this.currentWeek = this.currentWeek + 1;
                    this.date = this.rawDateList[this.rawDateList.indexOf(this.date) + 1]; //set the current front more
                }
                //get current day and calculate the current week days
                this.datelist = this.getDateList(this.date);
                if (spiltToCheckSunday === 'Sun' && this.isAAuto) {
                    this.date = this.rawDateList[this.rawDateList.indexOf(this.date) - 1]; //reset the current back
                }
                this.datelist.push(this.date);
                for (let i = 0; i < this.datelist.length; i++) {
                    this.todayblock = data.block[this.datelist[i]];
                    //today's algrithm
                    if (i === this.datelist.length - 1) {
                        this.setDisplayBlockType('today', data);
                        this.isFirstLunch(this.todaytimes, 'today'); //decide which lunch and generate time chart
                    }
                    else {
                        this.timeLines[this.datePairWithNumber[i]].date = this.datelist[i];
                        this.setDisplayBlockType(this.datePairWithNumber[i], data);
                        this.isFirstLunch(this.todaytimes, this.datePairWithNumber[i]); //decide which lunch and generate time chart
                    }
                    this.isLoad = false;
                }
            }
        }
        catch (_a) {
        }
    }
    resetWeek() {
        let dataPassIn = JSON.parse(localStorage.getItem('smlunch.ga_sche'));
        let todayDate = this.weekStartAndEnd[String(this.currentWeek * 7)].start;
        this.switchWeekHelp(todayDate, dataPassIn);
        document.querySelector('#switchweekSelect').value = String(this.currentWeek * 7);
    }
    //use to switch week
    switchWeek(e) {
        this.isLoad = true;
        let dataPassIn = JSON.parse(localStorage.getItem('smlunch.ga_sche'));
        e.preventDefault();
        let val = e.target.value;
        let todayDate;
        if (val <= this.rawDateList.length) {
            todayDate = this.rawDateList[val];
        }
        else {
            todayDate = this.rawDateList[val - 4];
        }
        this.switchWeekHelp(todayDate, dataPassIn);
    }
    switchWeekHelp(todayDate, dataPassIn) {
        this.datelist = this.getDateList(todayDate);
        for (let i = 0; i < this.datelist.length; i++) {
            this.todayblock = dataPassIn.block[this.datelist[i]];
            //today's algrithm
            this.timeLines[this.datePairWithNumber[i]].date = this.datelist[i];
            this.setDisplayBlockType(this.datePairWithNumber[i], dataPassIn);
            this.isFirstLunch(this.todaytimes, this.datePairWithNumber[i]); //decide which lunch and generate time chart
            this.isLoad = false;
        }
    }
    //set the display block type that is bind to HTML
    setDisplayBlockType(dayOfWeek, parseInData) {
        if (this.todayblock !== undefined) {
            this.isGotDate = true;
            //deciding the title of today page
            if (this.isNumeric(this.todayblock[this.todayblock.length - 1])) {
                var schestr = this.todayblock.substring(0, this.todayblock.length - 1);
                var num = this.todayblock[this.todayblock.length - 1];
                this.todayblockD[dayOfWeek] = this.blocktypes[schestr] + num;
                if (this.blocktypes[schestr] === undefined) {
                    this.todayblockD[dayOfWeek] = 'Special' + num;
                    if (schestr.includes('SpE')) {
                        this.todayblockD[dayOfWeek] = 'Special ETV' + num;
                    }
                }
                this.todaytimes = parseInData.sche[this.todayblock.substring(0, this.todayblock.length - 1)];
                this.updateBANDP(schestr, Number(num));
            }
            else {
                this.todayblockD[dayOfWeek] = this.blocktypes[this.todayblock];
                if (this.todayblockD[dayOfWeek] === undefined) {
                    if (this.todayblock !== 'Off') {
                        this.todayblockD[dayOfWeek] = 'Special';
                    }
                    else {
                        this.todayblockD[dayOfWeek] = 'Off';
                    }
                }
                this.todaytimes = parseInData.sche[this.todayblock];
                this.updateBANDP('S');
            }
        }
        else {
            //if the date is undefined which mean day off
            if (this.date.length === 0) {
                this.isGotDate = false;
            }
            else {
                this.isGotDate = true;
                this.todayblockD[dayOfWeek] = 'Off';
                this.todaytimes = undefined;
            }
        }
        //deciding the title of today page---END MARK
    }
    //check if the string is a valid number
    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    isModifiedSchedule(todayBlock) {
        return todayBlock.includes('TM') || todayBlock.includes('TA') || todayBlock.includes('TR') || todayBlock.includes('1115SpE6') || todayBlock.includes('1122SpE5');
    }
};
YourScheduleComponent.ctorParameters = () => [
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTransferService"] }
];
YourScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-your-schedule',
        template: __webpack_require__(/*! raw-loader!./your-schedule.component.html */ "./node_modules/raw-loader/index.js!./src/app/userpage/your-schedule/your-schedule.component.html"),
        styles: [__webpack_require__(/*! ../userpage.component.css */ "./src/app/userpage/userpage.component.css")]
    })
], YourScheduleComponent);



/***/ }),

/***/ "./src/app/yuhan/yuhan.component.css":
/*!*******************************************!*\
  !*** ./src/app/yuhan/yuhan.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hh{\n    margin-top:20px;\n    width:300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveXVoYW4veXVoYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC95dWhhbi95dWhhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhoe1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB3aWR0aDozMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/yuhan/yuhan.component.ts":
/*!******************************************!*\
  !*** ./src/app/yuhan/yuhan.component.ts ***!
  \******************************************/
/*! exports provided: YuhanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YuhanComponent", function() { return YuhanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");



let YuhanComponent = class YuhanComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    submit(event) {
        event.preventDefault();
        console.log(event);
        this.auth.sendEmail("in").subscribe(data => {
            console.log(data);
        });
    }
};
YuhanComponent.ctorParameters = () => [
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] }
];
YuhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-yuhan',
        template: __webpack_require__(/*! raw-loader!./yuhan.component.html */ "./node_modules/raw-loader/index.js!./src/app/yuhan/yuhan.component.html"),
        styles: [__webpack_require__(/*! ./yuhan.component.css */ "./src/app/yuhan/yuhan.component.css")]
    })
], YuhanComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robingan7/Desktop/Programming/Website Project/seeyourschedule.com/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map