webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    // public url = 'http://127.0.0.1:8000/api/'; // Testing url
    function AuthenticationService(http) {
        this.http = http;
        this.token = '';
        this.url = 'https://52.50.230.227/api/'; // live url
        this.token = '';
    }
    AuthenticationService.prototype.getToken = function () {
        if (this.token) {
            return this.token;
        }
        else if (localStorage.getItem('token')) {
            localStorage.getItem('token');
        }
        else {
            return;
        }
    };
    AuthenticationService.prototype.getUrl = function () {
        return this.url;
    };
    AuthenticationService.prototype.login = function (email, password) {
        console.log(email + ' ' + password);
        return this.http.post(this.url + "user/authenticate", { email: email, password: password });
        // .map((response: HttpResponse<any>) => {
        //   console.log(response)
        //   let token = response.token;
        //   let id = response.user._id;
        //   let username = response.user.firstName + ' ' + response.user.lastName;
        //   if(token){
        //     this.token = token;
        //     //store email and jwt token in local storage to keep
        //     localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
        //     localStorage.setItem('userId', id);
        //     localStorage.setItem('userFristName', username);
        //     //return true to indicate succeslful login
        //     return true;
        //   } else {
        //     //return false to indicate failed login
        //     return false;
        //   }
        // });
    };
    AuthenticationService.prototype.signup = function (email, password, firstName, lastName) {
        return this.http.post(this.url + "user/signup", { email: email, password: password, firstName: firstName, lastName: lastName });
        // .map((response: HttpResponse<any>) => {
        //   console.log(response)
        //   if(response.success){
        //     localStorage.setItem('currentUser', JSON.stringify({email: email, token: response.token}));
        //     return true;
        //   } else {
        //     return false;
        //   }
        // });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        if (this.token !== null && this.token.length > 2) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.setToken = function (token) {
        this.token = token;
        localStorage.setItem('token', token);
    };
    AuthenticationService.prototype.setId = function (_id) {
        this._id = _id;
        localStorage.setItem('_id', _id);
    };
    AuthenticationService.prototype.logout = function () {
        // clear all user info from sesion
        this.token = null;
        localStorage.clear();
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(auth) {
        this.auth = auth;
        this.url = '';
        this.url = auth.getUrl().split('/api')[0];
    }
    ChatService.prototype.sendMessage = function (message, username, room) {
        this.socket.emit('add-message', message, username, room);
    };
    ChatService.prototype.getMessages = function (room) {
        var _this = this;
        console.log('Messages running');
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(_this.url + '/rooms');
            console.log('message' + room);
            _this.socket.emit('room', room);
            _this.socket.on('message' + room, function (data) {
                console.log('new message');
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.setRoom = function (room) {
        this.room = room;
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = /** @class */ (function () {
    function ImageService(auth, http, user) {
        this.auth = auth;
        this.http = http;
        this.user = user;
    }
    ImageService.prototype.getImages = function () {
        return 'Still in dev';
    };
    ImageService.prototype.uploadImage = function (image) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.auth.getToken(),
            'groupid': this.user.getGroup(),
            '_id': this.user.getCurrentUserId()
        });
        var timeStamp = JSON.stringify(Date.now());
        console.log(timeStamp);
        var fd = new FormData();
        fd.append('image', image, timeStamp);
        fd.append('id', this.user.getCurrentUserId());
        fd.append('groupid', this.user.getGroup());
        console.log(fd.getAll('image'));
        return this.http.post(this.auth.getUrl() + "uploadimage", fd, { headers: headers });
    };
    ImageService.prototype.getGroupImages = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.auth.getToken(),
            'groupid': this.user.getGroup(),
            '_id': this.user.getCurrentUserId()
        });
        console.log(headers);
        return this.http.get(this.auth.getUrl() + "getimages", { headers: headers });
    };
    ImageService.prototype.deleteImage = function (imageFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.auth.getToken(),
            '_id': this.user.getCurrentUserId(),
            'groupid': this.user.getGroup(),
            'filename': imageFile
        });
        return this.http.delete(this.auth.getUrl() + "removeimage", { headers: headers });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapService = /** @class */ (function () {
    function MapService(httpService, authenticationService) {
        this.httpService = httpService;
        this.authenticationService = authenticationService;
        this.url = this.authenticationService.getUrl();
    }
    MapService.prototype.getMarkers = function (groupId, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.authenticationService.getToken(),
            'groupid': groupId,
            '_id': userId
        });
        // Hit endpoint to get the group marker
        return this.httpService.get(this.url + 'getmeetingpoint', { headers: headers });
    };
    MapService.prototype.setMarkers = function (marker, groupId, userId) {
        return this.httpService.post(this.url + 'setmeetingpoint', { token: this.authenticationService.getToken(), _id: userId, groupid: groupId, marker: marker });
        // localStorage.setItem('marker', JSON.stringify(marker));
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(http, authencationService) {
        this.http = http;
        this.authencationService = authencationService;
        this.url = authencationService.getUrl();
    }
    TaskService.prototype.getTasks = function (groupId, _id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.authencationService.getToken(),
            'groupid': groupId,
            '_id': _id
        });
        return this.http.get(this.url + "gettasks", { headers: headers });
    };
    TaskService.prototype.addTask = function (groupId, _id, task) {
        return this.http.post(this.url + "addtask", { token: this.authencationService.getToken(), _id: _id, groupid: groupId, task: task });
    };
    TaskService.prototype.markComplete = function (groupId, _id, taskTitle) {
        return this.http.post(this.url + "marktaskcomplete", { token: this.authencationService.getToken(), _id: _id, groupid: groupId, taskTitle: taskTitle });
    };
    TaskService.prototype.deleteTask = function (groupId, _id, taskTitle) {
        console.log(taskTitle);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.authencationService.getToken(),
            'groupid': groupId,
            '_id': _id,
            'tasktitle': taskTitle
        });
        return this.http.delete(this.url + "deletetask", { headers: headers });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
        this.url = authentication.getUrl();
    }
    UserService.prototype.getUser = function (id) {
        // add authroization header with jwt token
        // get users from Api
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.authentication.getToken(),
            '_id': id
        });
        return this.http.get(this.url + 'getuser', { headers: headers });
    };
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
        localStorage.setItem('_id', user._id);
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UserService.prototype.getCurrentUserId = function () {
        if (this.getCurrentUserId) {
            return this.currentUser._id;
        }
        else if (localStorage.getItem('_id')) {
            return localStorage.getItem('_id');
        }
        else {
            return;
        }
    };
    UserService.prototype.getUserByEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.authentication.getToken(),
            'email': email
        });
        return this.http.get(this.url + 'getuser', { headers: headers });
    };
    UserService.prototype.getGroups = function (id) {
        console.log(this.authentication.token);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.authentication.getToken(),
            '_id': id
        });
        return this.http.get(this.url + 'getusergroups', { headers: headers });
    };
    UserService.prototype.setGroup = function (group) {
        this.group = group;
    };
    UserService.prototype.getGroup = function () {
        return this.group;
    };
    UserService.prototype.logOut = function () {
        this.group = '';
        this.currentUser = null;
    };
    UserService.prototype.createGroup = function (id, email, groupname) {
        console.log(groupname);
        console.log(this.authentication.token);
        console.log('running service');
        console.log(id + ' ' + email);
        return this.http.post(this.url + 'creategroup', { _id: id, email: email, groupname: groupname, token: this.authentication.token });
        // .map((response) => {
        //   console.log('IT REUTNED')
        //   return true;
        // });
    };
    UserService.prototype.setCurrentGroupName = function (groupname) {
        this.currentGroupName = groupname;
    };
    UserService.prototype.getCurrentGroupName = function () {
        return this.currentGroupName.slice();
    };
    UserService.prototype.getMessages = function (group) {
        console.log('fetching messages with' + this.getCurrentUserId() + ' ' + group);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'token': this.authentication.getToken(),
            '_id': this.getCurrentUserId(),
            'groupid': group
        });
        return this.http.get(this.url + 'getmessages', { headers: headers });
    };
    UserService.prototype.addUserToGroup = function (email) {
        return this.http.post(this.url + 'addusertogroup', { _id: this.getCurrentUserId(),
            email: email,
            groupid: this.group,
            token: this.authentication.token
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12\">\n  <div class=\"row\">\n    <app-nav></app-nav>\n  </div>\n  <div class=\"row\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_image_service__ = __webpack_require__("../../../../../src/app/_services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_images_module__ = __webpack_require__("../../../../../src/app/images/images.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_tasks_module__ = __webpack_require__("../../../../../src/app/tasks/tasks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_task_service__ = __webpack_require__("../../../../../src/app/_services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map_module__ = __webpack_require__("../../../../../src/app/map/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_map_service__ = __webpack_require__("../../../../../src/app/_services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_chat_service__ = __webpack_require__("../../../../../src/app/_services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_module__ = __webpack_require__("../../../../../src/app/profile/profile.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_17__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_18__profile_profile_module__["a" /* ProfileModule */],
                __WEBPACK_IMPORTED_MODULE_7__chat_chat_module__["a" /* ChatModule */],
                __WEBPACK_IMPORTED_MODULE_5__map_map_module__["a" /* MapModule */],
                __WEBPACK_IMPORTED_MODULE_2__tasks_tasks_module__["a" /* TasksModule */],
                __WEBPACK_IMPORTED_MODULE_1__images_images_module__["a" /* ImagesModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyC5eQniYJCql71bD7mffKxVBCNr1hIV7JU'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_6__services_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_3__services_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_0__services_image_service__["a" /* ImageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__auth_routing_module__["a" /* AuthRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__auth_routing_module__["a" /* AuthRoutingModule */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <div class=\"alert alert-info\">\n    Email: example@email.com <br />\n    Password: Password\n  </div>\n  <h2>Login</h2>\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"text\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\">SIGN IN</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.loading = true;
        this.authenticationService.login(email, password)
            .subscribe(function (response) {
            console.log(response);
            _this.authenticationService.setToken(response);
            _this.userService.getUserByEmail(email)
                .subscribe(function (result) {
                console.log(result);
                _this.userService.setCurrentUser(result);
                _this.router.navigate(['profile']);
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <h2>Sign up</h2>\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"text\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" id=\"firstName\" name=\"firstName\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" id=\"lastName\" name=\"lastName\" ngModel class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\">SIGN UP</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, authenticationService, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.loading = false;
        this.error = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        var firstName = form.value.firstName;
        var lastName = form.value.lastName;
        this.authenticationService.signup(email, password, firstName, lastName)
            .subscribe(function (returnedid) {
            _this.authenticationService.login(email, password)
                .subscribe(function (response) {
                console.log(response);
                _this.authenticationService.setToken(response);
                _this.userService.getUserByEmail(email)
                    .subscribe(function (result) {
                    console.log(result);
                    _this.userService.setCurrentUser(result);
                    _this.router.navigate(['profile']);
                });
            });
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var chatRoutes = [
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_0__chat_component__["a" /* ChatComponent */] }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(chatRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n#messageArea {\n  padding: 5px;\n  height: 400px;\n  overflow: scroll;\n}\n\n.h3 {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"username\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12\">\n    <h3> Chat for {{currentGroup}}</h3>\n  </div>\n  <br>\n  <div class =\"row\">\n    <div class=\"col-xs-1 col-sm-1 col-md-1\"></div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8\" id=\"messageArea\">\n      <div *ngFor=\"let message of messages\" id=\"messagesText\">\n        <label>{{message.username}}</label><p> {{message.text}}</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"col-xs-1 col-sm-1 col-md-1\"></div>\n  </div>\n\n  <hr>\n  <div class=\"row\">\n    <footer>\n      <div class=\"col-xs-1 col-sm-1 col-md-1\"></div>\n\n      <div class=\"col-xs-7 col-sm-7 col-md-7\">\n        <textarea class=\"form-control\" rows=\"2\" placeholder=\"EnterMessage\" [(ngModel)]=\"message\" name=\"message\" (keyup.enter)=\"onSendMessage()\"></textarea>\n        <!-- <input type=\"text\" class=\"form-control\" placeholder=\"EnterMessage\" [(ngModel)]=\"message\" name=\"message\" (keyup.enter)=\"onSendMessage()\" /> -->\n      </div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4\">\n        <button class=\"btn btn-primary\" (click)=\"onSendMessage()\">\n          <span class=\"glyphicon glyphicon-send\"> Send</span>\n        </button>\n      </div>\n    </footer>\n  </div>\n</div>\n\n<div *ngIf=\"!username\">\n  Please log in to chat\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/_services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = /** @class */ (function () {
    function ChatComponent(userService, chatService, router) {
        this.userService = userService;
        this.chatService = chatService;
        this.router = router;
        this.reverseMessages = false;
        this.messages = [];
        this.namespace = 'jpchats';
    }
    // On connection the chatservice will recive new messages and
    // they will then be pushed into message array to be displayed to user.
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.getCurrentUserId()) {
            this.router.navigate(['login']);
        }
        this.room = this.userService.getGroup();
        if (!this.room) {
            this.router.navigate(['profile']);
        }
        this.currentGroup = this.userService.getCurrentGroupName();
        this.userService.getMessages(this.room)
            .subscribe(function (result) {
            var oldMssages = result;
            for (var _i = 0, oldMssages_1 = oldMssages; _i < oldMssages_1.length; _i++) {
                var i = oldMssages_1[_i];
                _this.messages.push(i);
            }
            _this.messages = _this.messages.reverse();
        });
        this.chatService.setRoom(this.room);
        this.username = this.userService.getCurrentUser().firstName;
        this.connection = this.chatService.getMessages(this.room).subscribe(function (message) {
            if (_this.messages.lenght < 1) {
                _this.messages.push(_this.message);
            }
            else {
                _this.messages = _this.messages.reverse();
                _this.messages.push(message);
                _this.messages = _this.messages.reverse();
            }
        });
    };
    // We want the user to dissconect from chat and unscribe to stop memory leaks
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.connection) {
            this.connection.unsubscribe();
        }
    };
    ChatComponent.prototype.onSendMessage = function () {
        this.chatService.sendMessage(this.message, this.username, this.room);
        // this.messages.push({text: this.message, username: this.username});
        this.message = '';
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_routing_module__ = __webpack_require__("../../../../../src/app/chat/chat-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__chat_routing_module__["a" /* ChatRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__chat_component__["a" /* ChatComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_0__chat_routing_module__["a" /* ChatRoutingModule */]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/colapse.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColapseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColapseDirective = /** @class */ (function () {
    function ColapseDirective() {
        this.show = false;
    }
    ColapseDirective.prototype.toggleOpen = function () {
        this.show = !this.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.toggle'),
        __metadata("design:type", Object)
    ], ColapseDirective.prototype, "show", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ColapseDirective.prototype, "toggleOpen", null);
    ColapseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appColapse]'
        }),
        __metadata("design:paramtypes", [])
    ], ColapseDirective);
    return ColapseDirective;
}());



/***/ }),

/***/ "../../../../../src/app/core/core-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var coreRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(coreRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__("../../../../../src/app/core/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_routing_module__ = __webpack_require__("../../../../../src/app/core/core-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_directive__ = __webpack_require__("../../../../../src/app/core/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colapse_directive__ = __webpack_require__("../../../../../src/app/core/colapse.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_routing_module__["a" /* CoreRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_6__colapse_directive__["a" /* ColapseDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__core_routing_module__["a" /* CoreRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dropdown_directive__["a" /* DropdownDirective */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/core/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h1>Home</h1>\n    <h2>We're still doing alot of development</h2>\n    <p>You can login in or sign up if you look in the top right</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('New updates running');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/core/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-item{\n  padding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\" appDropdown>\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" (click)=\"onToggleMenu()\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\" appDropdown>Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">JourneyBuddies <span class=\"glyphicon glyphicon-plane\"></span></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{'navbar-collapse collapse in' : toggleMenu === true, 'navbar-collapse collapse' : toggleMenu === false}\">\n      <ul class=\"nav navbar-nav\">\n        <li *ngIf=\"authservice.isAuthenticated()\" routerLinkActive=\"active\" (click)=\"onToggleMenu()\">\n          <a routerLink=\"/profile\"><span class=\"glyphicon glyphicon-user\"> Profile</span></a>\n        </li>\n        <li *ngIf=\"authservice.isAuthenticated()\" routerLinkActive=\"active\" (click)=\"onToggleMenu()\">\n          <a routerLink=\"/images\"><span class=\"glyphicon glyphicon-camera\"> Images</span></a>\n        </li>\n        <li *ngIf=\"authservice.isAuthenticated()\" routerLinkActive=\"active\" (click)=\"onToggleMenu()\">\n          <a routerLink=\"/tasks\"><span class=\"glyphicon glyphicon-th-list\"> Tasks</span></a>\n        </li>\n        <li *ngIf=\"authservice.isAuthenticated()\" routerLinkActive=\"active\" (click)=\"onToggleMenu()\">\n          <a routerLink=\"/maps\"><span class=\"glyphicon glyphicon-map-marker\"> Maps</span></a>\n        </li>\n        <li *ngIf=\"authservice.isAuthenticated()\" routerLinkActive=\"active\" (click)=\"onToggleMenu()\">\n          <a routerLink=\"/chat\"><span class=\"glyphicon glyphicon-envelope\"> Chat</span></a>\n        </li>\n        <!-- <li class=\"dropdown\" appDropdown>\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li routerLinkActive=\"active\" (click)=\"onToggleMenu()\"><a routerLink=\"/profile\">Profile</a></li>\n            <li routerLinkActive=\"active\" (click)=\"onToggleMenu()\"><a routerLink=\"/images\">Images</a></li>\n            <li routerLinkActive=\"active\" (click)=\"onToggleMenu()\"><a routerLink=\"/tasks\">Tasks</a></li>\n            <li routerLinkActive=\"active\" (click)=\"onToggleMenu()\"><a routerLink=\"/maps\">Maps</a></li>\n            <li routerLinkActive=\"active\" (click)=\"onToggleMenu()\"><a routerLink=\"/chat\">Chat</a></li>\n          </ul>\n        </li> -->\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authservice.isAuthenticated()\" (click)=\"onToggleMenu()\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-sunglasses\"></span>Login</a></li>\n        <li *ngIf=\"!authservice.isAuthenticated()\" (click)=\"onToggleMenu()\"><a routerLink=\"/signup\"><span class=\"glyphicon glyphicon-check\"></span>Signup</a></li>\n        <li *ngIf=\"authservice.isAuthenticated()\" (click)=\"authservice.logout()\" (click)=\"onToggleMenu()\">\n          <a routerLink=\"/\"><span class=\"glyphicon glyphicon-alert\"></span> Logout</a>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(authservice) {
        this.authservice = authservice;
        this.toggleMenu = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.toggleMenu = false;
    };
    NavComponent.prototype.onToggleMenu = function () {
        if (this.toggleMenu) {
            this.toggleMenu = false;
        }
        else {
            this.toggleMenu = true;
        }
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/images/images-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imageupload_imageupload_component__ = __webpack_require__("../../../../../src/app/images/imageupload/imageupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var imageRoutes = [
    { path: 'images', component: __WEBPACK_IMPORTED_MODULE_0__imageupload_imageupload_component__["a" /* ImageuploadComponent */] }
];
var ImageRoutingModule = /** @class */ (function () {
    function ImageRoutingModule() {
    }
    ImageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(imageRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ImageRoutingModule);
    return ImageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/images/images.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageupload_imageupload_component__ = __webpack_require__("../../../../../src/app/images/imageupload/imageupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_routing_module__ = __webpack_require__("../../../../../src/app/images/images-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImagesModule = /** @class */ (function () {
    function ImagesModule() {
    }
    ImagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__images_routing_module__["a" /* ImageRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__imageupload_imageupload_component__["a" /* ImageuploadComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__imageupload_imageupload_component__["a" /* ImageuploadComponent */],
                __WEBPACK_IMPORTED_MODULE_3__images_routing_module__["a" /* ImageRoutingModule */]
            ]
        })
    ], ImagesModule);
    return ImagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/images/imageupload/imageupload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#imagebox {\n  height: 500px;\n  overflow: scroll;\n}\n\n#image {\n  padding: 25px;\n}\n\n.button {\n  padding: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/images/imageupload/imageupload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12\">\n  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n    <div class=\"row\">\n      <h1>Image Upload</h1>\n      <input class=\"btn btn-primary\" type=\"file\" (change)=\"onFileSelected($event)\">\n      <hr>\n      <button (click)=\"onUpload()\" class=\"btn btn-success\"> Upload</button>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n    <hr>\n    <div class=\"row\">\n      <button (click)=\"onGetImages()\" class=\"btn btn-default\">Reload Images</button>\n    </div>\n    <div class=\"row\" id=\"imagebox\">\n      <div *ngFor=\"let image of imageUrl; let i = index\" id=\"image\">\n        <img src={{image}} alt=\"\" width=\"60%\" height=\"60%\" />\n        <hr>\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\n          <div class=\"col-xs-5 col-sm-5 col-md-5\">\n          <a href=\"{{image}}\"><button type=\"button\" class=\"btn btn-success\">Download</button></a>\n          </div>\n          <div class=\"col-xs-1 col-sm-1 col-md-1\"></div>\n          <div class=\"col-xs-5 col-sm-5 col-md-5\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteImage(image, i)\">Delete</button>\n          </div>\n        </div>\n        <hr>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/images/imageupload/imageupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageuploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_image_service__ = __webpack_require__("../../../../../src/app/_services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageuploadComponent = /** @class */ (function () {
    function ImageuploadComponent(http, imageService, userService, router) {
        this.http = http;
        this.imageService = imageService;
        this.userService = userService;
        this.router = router;
        this.selectedFile = null;
    }
    ImageuploadComponent.prototype.ngOnInit = function () {
        if (!this.userService.getCurrentUserId()) {
            this.router.navigate(['login']);
        }
        this.onGetImages();
    };
    ImageuploadComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    ImageuploadComponent.prototype.onUpload = function () {
        var _this = this;
        if (this.selectedFile) {
            this.imageService.uploadImage(this.selectedFile).subscribe(function (res) {
                console.log('done');
                setTimeout(_this.onGetImages(), 3000);
            });
        }
    };
    ImageuploadComponent.prototype.onGetImages = function () {
        var _this = this;
        this.imageService.getGroupImages().subscribe(function (res) {
            _this.imageUrl = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var val = res_1[_i];
                _this.imageUrl.push(val);
            }
            console.log(_this.imageUrl);
        });
    };
    ImageuploadComponent.prototype.onDeleteImage = function (image, i) {
        var _this = this;
        // Creates a path to image file on backend.
        var sections = image.split('/');
        var path = sections[3] + '/' + sections[4] + '/' + sections[5];
        console.log(path);
        this.imageService.deleteImage(path).subscribe(function (res) {
            _this.imageUrl.splice(i, 1);
        });
    };
    ImageuploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-imageupload',
            template: __webpack_require__("../../../../../src/app/images/imageupload/imageupload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/images/imageupload/imageupload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__services_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ImageuploadComponent);
    return ImageuploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var mapRoutes = [
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_0__map_component__["a" /* MapComponent */] }
];
var MapRoutingModule = /** @class */ (function () {
    function MapRoutingModule() {
    }
    MapRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(mapRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], MapRoutingModule);
    return MapRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px;\n  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <h1>Meeting Point For {{ title }}</h1>\n</div>\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=row>\n  <!-- this creates a google map on the page with the given lat/lng form -->\n  <!-- the component as the initial center of the map: -->\n    <div class=\"row\" *ngIf=\"markerLat\">\n      <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1\"></div>\n      <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n        <agm-map [latitude]=\"markerLat\" [longitude]=\"markerLng\" (mapClick)=\"mapClicked($event)\">\n          <agm-marker *ngIf=\"marker\" [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" (markerClick)=\"markerClicked(marker)\">\n            <agm-info-window>\n              <strong>{{marker.name}}</strong>\n            </agm-info-window>\n          </agm-marker>\n        </agm-map>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <!-- <form>\n      <label>Latitude</label>\n      <input type=\"text\" [(ngModel)]=\"markerLat\" name=\"markerLat\">\n      <label>Longitude</label>\n      <input type=\"text\" [(ngModel)]=\"markerLng\" name=\"markerLng\">\n    </form> -->\n    <div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11\">\n      <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n        <button (click)=\"meetUpChange()\" class=\"btn btn-danger\">Change meetingpoint</button>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <p>Paste below into Google Maps for Directions</p>\n        <p>{{markerLat}},{{markerLng}}</p>\n        <hr>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("../../../../../src/app/_services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(mapService, userService, authenticationService, router) {
        this.mapService = mapService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.title = '';
        this.changeMeetingPoint = false;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.getCurrentUserId()) {
            this.router.navigate(['login']);
        }
        this.groupId = this.userService.getGroup();
        this.token = this.authenticationService.getToken();
        this.userId = this.userService.getCurrentUserId();
        this.title = this.userService.getCurrentGroupName();
        this.mapService.getMarkers(this.groupId, this.userId).subscribe(function (response) {
            console.log(response);
            _this.marker = response;
        });
        if (this.marker) {
            this.markerLat = this.marker.lat;
            this.markerLng = this.marker.lng;
        }
        else {
            if (navigator.geolocation) {
                this.findMe();
            }
        }
    };
    MapComponent.prototype.mapClicked = function ($event) {
        if (this.changeMeetingPoint) {
            console.log($event);
            this.markerLat = $event.coords.lat;
            this.markerLng = $event.coords.lng;
            var newMarker = {
                name: 'Meeting Point',
                lat: $event.coords.lat,
                lng: $event.coords.lng
            };
            this.marker = newMarker;
            this.mapService.setMarkers(newMarker, this.groupId, this.userId).subscribe();
        }
    };
    MapComponent.prototype.markerClicked = function (marker) {
        console.log('Clicked marker ' + marker.name);
        this.markerLat = marker.lat;
        this.markerLng = marker.lng;
        this.title = marker.name;
    };
    MapComponent.prototype.meetUpChange = function () {
        this.changeMeetingPoint = !this.changeMeetingPoint;
    };
    MapComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.showPosition(position);
            });
        }
        else {
            alert('Geolocation is not supported by this browser.');
        }
    };
    MapComponent.prototype.showPosition = function (position) {
        this.markerLat = position.coords.latitude;
        this.markerLng = position.coords.longitude;
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-maps',
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_routing_module__ = __webpack_require__("../../../../../src/app/map/map-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__map_routing_module__["a" /* MapRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* MapComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_3__map_routing_module__["a" /* MapRoutingModule */]
            ]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var profileRoutes = [
    { path: 'profile', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__["a" /* UserProfileComponent */] }
        ] }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(profileRoutes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <h1>Please login in to view profile</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var id = this.userService.getCurrentUserId();
        if (id) {
            this.router.navigate([id], { relativeTo: this.route });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_routing_module__ = __webpack_require__("../../../../../src/app/profile/profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__profile_routing_module__["a" /* ProfileRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_4__profile_routing_module__["a" /* ProfileRoutingModule */]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#usergroupbox {\n  padding: 5px;\n  height: 200px;\n  overflow: scroll;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2>Welcome {{user.firstName}} {{user.lastName}}</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <h4>Create A Group</h4>\n          <form (ngSubmit)=\"onAddGroup(f)\" #f=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"groupName\">Group Name</label>\n              <input type=\"text\" id=\"groupName\" name=\"groupName\" ngModel class=\"form-control\" required>\n            </div>\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Add Group</button>\n          </form>\n        </div>\n    \n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <h4>Add A User To {{currentGroup}}</h4>\n          <form (ngSubmit)=\"onAddUserToGroup(u)\" #u=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"groupName\">User Email</label>\n              <input type=\"text\" id=\"useremail\" name=\"useremail\" ngModel class=\"form-control\" required>\n            </div>\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!u.valid\">Add User</button>\n          </form>\n        </div>\n\n      </div>\n\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <h4>Select A Group</h4>\n          <hr>\n          <div id=\"usergroupbox\">\n            <p [ngClass]=\"{'bg-success': checkActiveGroup(group.name, group._id) }\" *ngFor=\"let group of user.groups\" (click)=\"onSetGroup(group)\">\n              Group For {{group.name}}\n            </p>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  \n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.user = {
            _id: '',
            email: '',
            firstName: '',
            lastName: '',
            admin: false,
            groups: []
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.getCurrentUserId()) {
            this.router.navigate(['login']);
        }
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.userService.getUser(_this.id).subscribe((function (response) {
                _this.user = response;
                if (!_this.userService.getGroup() && _this.user.groups.length > 0) {
                    _this.userService.setGroup(_this.user.groups[0].id);
                    _this.userService.setCurrentGroupName(_this.user.groups[0].name);
                    _this.currentGroup = _this.user.groups[0].name;
                }
            }));
        });
    };
    UserProfileComponent.prototype.onAddGroup = function (form) {
        var _this = this;
        var groupName = form.value.groupName;
        this.userService.createGroup(this.user._id, this.user.email, groupName)
            .subscribe(function (response) {
            console.log(response);
            var newGroupId = response;
            newGroupId = newGroupId.toString();
            _this.user.groups.push({
                id: newGroupId,
                name: groupName,
                admin: _this.userService.getCurrentUserId(),
                users: []
            });
        });
    };
    UserProfileComponent.prototype.onSetGroup = function (group) {
        console.log('changed to ' + group._id);
        this.currentGroup = group.name;
        this.userService.setGroup(group._id);
        this.userService.setCurrentGroupName(group.name);
    };
    UserProfileComponent.prototype.onAddUserToGroup = function (form) {
        var email = form.value.useremail;
        this.userService.addUserToGroup(email).subscribe();
    };
    UserProfileComponent.prototype.checkActiveGroup = function (name, id) {
        if ((name === this.currentGroup) && (id === this.userService.getGroup())) {
            return true;
        }
        return false;
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12\">\n  <h2 align=\"center\">Your Tasks</h2>\n  <button class=\"btn btn-success btn-xs\" (click)=\"showAddTaskBox()\">\n    <span class=\"glyphicon glyphicon-plus\"></span>\n  </button>\n  <div align=\"center\" class=\"AddTaskBox\" [hidden]=\"showTaskBox\">\n    <h4>Add New Task</h4>\n    <form #taskForm=\"ngForm\" (ngSubmit)=\"onSubmit(taskForm); taskForm.reset()\">\n      <div class=\"form-group\">\n        <label for=\"fullName\">Task:</label>\n        <input type=\"text\" [(ngModel)]=\"task.taskTitle\" #fullName=\"ngModel\" class=\"form-control\" name=\"taskTitle\" id=\"taskTitle\" required\n        />\n        <div [hidden]=\"fullName.valid || fullName.pristine\" class=\"alert alert-danger\">\n          can't be empty\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"todoText\">Description:</label>\n        <textarea #todoText=\"ngModel\" [(ngModel)]=\"task.taskDescription\" class=\"form-control\" name=\"taskDescription\" id=\"taskDescription\" required></textarea>\n        <div [hidden]=\"todoText.valid || todoText.pristine\" class=\"alert alert-danger\">\n          can't be empty\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"fullName\">For:</label>\n        <input type=\"text\" [(ngModel)]=\"task.taskfor\" #fullName=\"ngModel\" class=\"form-control\" name=\"taskfor\" id=\"taskfor\"\n          required />\n        <div [hidden]=\"fullName.valid || fullName.pristine\" class=\"alert alert-danger\">\n          can't be empty\n        </div>\n      </div>\n      <button [disabled]=\"!taskForm.form.valid\" type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\n    </form>\n  </div>\n\n  <div *ngIf=\"tasks.length > 0\" class=\"taskListBox\">\n    <table id=\"tasktable\" class=\"table table-bordred table-striped\">\n      <thead>\n        <th>Task</th>\n        <th>Description</th>\n        <th>For</th>\n        <th>Completed</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let task of tasks\">\n          <td>{{task.taskTitle}}</td>\n          <td>{{task.taskDescription}}</td>\n          <td>{{task.taskfor}}</td>\n          <td>\n            <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\">\n              <button class=\"btn btn-success btn-xs\" (click)=\"onDeleteTask(task)\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" id=\"tickybox\">\n                <span class=\"glyphicon glyphicon-ok\"></span>\n              </button>\n            </p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("../../../../../src/app/_services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(taskService, userService, router) {
        this.taskService = taskService;
        this.userService = userService;
        this.router = router;
        this.showTaskBox = true;
        this.tasks = [];
        this.task = {
            taskTitle: '',
            taskDescription: '',
            taskfor: '',
            completed: false
        };
    }
    TaskListComponent.prototype.showAddTaskBox = function () {
        this.showTaskBox = !this.showTaskBox;
    };
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.getCurrentUserId()) {
            this.router.navigate(['login']);
        }
        this.userId = this.userService.getCurrentUserId();
        this.group = this.userService.getGroup();
        this.taskService.getTasks(this.group, this.userId)
            .subscribe(function (response) { return _this.tasks = response; });
    };
    TaskListComponent.prototype.onAddTask = function (task) {
        if (!task) {
            return;
        }
        this.tasks.push(task);
        this.showAddTaskBox();
        this.taskService.addTask(this.group, this.userId, task)
            .subscribe();
    };
    TaskListComponent.prototype.onMarkComplete = function (task) {
        var index = 0;
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.taskTitle === task.taskTitle) {
                task.completed = true;
                this.taskService.markComplete(this.group, this.userId, value.taskTitle).subscribe();
            }
            index++;
        }
    };
    TaskListComponent.prototype.onDeleteTask = function (task) {
        console.log(this.tasks);
        console.log(this.tasks.length);
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].taskTitle === task.taskTitle) {
                this.taskService.deleteTask(this.group, this.userId, task.taskTitle).subscribe();
                this.tasks.splice(i, 1);
            }
        }
    };
    TaskListComponent.prototype.onSubmit = function (taskForm) {
        var task = {
            taskTitle: taskForm.value.taskTitle,
            taskDescription: taskForm.value.taskDescription,
            taskfor: taskForm.value.taskfor,
            completed: false
        };
        console.log(task);
        console.log(taskForm.value);
        this.onAddTask(task);
    };
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-task-list',
            template: __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/tasks-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var taskRoutes = [
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_1__task_list_task_list_component__["a" /* TaskListComponent */] }
];
var TasksRoutingModule = /** @class */ (function () {
    function TasksRoutingModule() {
    }
    TasksRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(taskRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
            ]
        })
    ], TasksRoutingModule);
    return TasksRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/tasks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tasks_routing_module__ = __webpack_require__("../../../../../src/app/tasks/tasks-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__tasks_routing_module__["a" /* TasksRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__task_list_task_list_component__["a" /* TaskListComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_0__tasks_routing_module__["a" /* TasksRoutingModule */]
            ]
        })
    ], TasksModule);
    return TasksModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map