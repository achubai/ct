'use strict';

const chai = require('chai');
const sinon = require('sinon');
const http = require('http');
const PassThrough = require('stream').PassThrough;
const expect = chai.expect;
const helper = require('./helper');
const assert = require('assert');


chai.should();

describe('helpers test:', function () {
    it('should be defined', function () {
        expect(helper).to.not.be.undefined;
    });

    describe('buildApiRoute: all routes should start with "/api":', function () {
        it('test route with "/"', function () {
            expect(helper.buildApiRoute('/user')).to.equal('/api/user')
        });

        it('test route without "/"', function () {
            expect(helper.buildApiRoute('user')).to.equal('/api/user')
        });
    });

    describe('httpRequest:', function () {
        beforeEach(function() {
            this.request = sinon.stub(http, 'request');
        });

        it('should send response', function(done) {
            const responseData = 'response';
            const request = new PassThrough();
            const response = new PassThrough();
            response.write(responseData);

            response.end();

            this.request.callsArgWith(1, response)
                .returns(request);

            helper.httpRequest('', '', function (res) {
                expect(res).to.equal(responseData);
                done();
            });

        });
    });

    describe('createAction:', function () {
        it ('should return function', function () {
            expect(helper.createAction('user')).to.be.function
        });
    });

    describe('createRoutes:', function () {
        beforeEach(function () {
            this.routes = helper.createRoutes(['GET'], '/users', 'users');
        });

        it ('should return array', function () {
            expect(this.routes).to.be.array
        });

        it ('should have method, path and handler', function () {
            expect(this.routes[0].method).to.equal('GET');
            expect(this.routes[0].path).to.equal('/api/users');
            expect(this.routes[0].handler).to.be.function
        });
    })
});
