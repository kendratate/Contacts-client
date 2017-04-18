"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_service_1 = require("../../contact.service");
var ContactsComponent = (function () {
    function ContactsComponent(contactService) {
        this.contactService = contactService;
        this.indexCount = 99;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts()
            .then(function (contacts) { return _this.contacts = contacts; }, function (error) { return _this.errorMessage = error; });
    };
    ContactsComponent.prototype.sortAscending = function () {
        var _this = this;
        this.contactService.sortAsc()
            .then(function (contacts) { return _this.contacts = contacts; }, function (error) { return _this.errorMessage = error; });
    };
    ContactsComponent.prototype.sortDescending = function () {
        var _this = this;
        this.contactService.sortDesc()
            .then(function (contacts) { return _this.contacts = contacts; }, function (error) { return _this.errorMessage = error; });
    };
    ContactsComponent.prototype.createContact = function (firstName, lastName, phoneNum) {
        var _this = this;
        //take out index when connected to a database
        if (!firstName) {
            return;
        }
        this.indexCount++;
        this.contactService.create(String(this.indexCount), firstName, lastName, phoneNum)
            .then(function (contacts) { return _this.contacts = contacts; }, function (error) { return _this.errorMessage = error; });
    };
    ContactsComponent.prototype.editContact = function (index) {
        console.log(index);
        document.getElementById(index).classList.add("show");
    };
    ContactsComponent.prototype.editSendContact = function (indexVal, firstName, lastName, phoneNum) {
        var _this = this;
        this.contactService.editContact(String(indexVal), firstName, lastName, phoneNum)
            .then(function (contacts) { return _this.contacts = contacts; }, function (error) { return _this.errorMessage = error; });
    };
    ContactsComponent.prototype.deleteContact = function (index) {
        var _this = this;
        console.log(index);
        this.contactService.deleteContact(index)
            .then(function (contacts) { return _this.contacts = contacts; }, function (error) { return _this.errorMessage = error; });
    };
    ContactsComponent.prototype.searchContacts = function (searchterm) {
        var _this = this;
        this.contactService.searchContacts(searchterm)
            .then(function (searchresults) { return _this.contacts = searchresults; }, function (error) { return _this.errorMessage = error; });
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        selector: 'app-contacts',
        templateUrl: './contacts.component.html',
        styleUrls: ['./contacts.component.css'],
        providers: [contact_service_1.ContactService]
    })
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map