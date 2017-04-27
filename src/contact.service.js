"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");

var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        // this.contactsUrl = 'http://localhost:8080/'; // URL to web API
        this.contactsUrl = 'https://contact-server-mongo.herokuapp.com/'; // URL to web API
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ContactService.prototype.extractData = function (res) {
        var body = res.json();
        return body.contacts || {};
    };
    ContactService.prototype.sortAsc = function () {
        return this.http.get(this.contactsUrl + "sorta")
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ContactService.prototype.sortDesc = function () {
        return this.http.get(this.contactsUrl + "sortd")
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ContactService.prototype.create = function (indexVal, firstName, lastName, phoneNum) {
        return this.http.post(this.contactsUrl, JSON.stringify({ id: indexVal, firstname: firstName, lastname: lastName, phone: phoneNum }), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ContactService.prototype.deleteContact = function (indexVal) {
        return this.http.delete(this.contactsUrl + indexVal)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ContactService.prototype.editContact = function (indexVal, firstName, lastName, phoneNum) {
        return this.http.post(this.contactsUrl + indexVal, JSON.stringify({ id: indexVal, firstname: firstName, lastname: lastName, phone: phoneNum }), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ContactService.prototype.searchContacts = function (searchterm) {
        return this.http.get(this.contactsUrl + "search/" + searchterm)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable()
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map
