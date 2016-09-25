'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pathCtrlStub = {
  index: 'pathCtrl.index',
  show: 'pathCtrl.show',
  create: 'pathCtrl.create',
  upsert: 'pathCtrl.upsert',
  patch: 'pathCtrl.patch',
  destroy: 'pathCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pathIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './path.controller': pathCtrlStub
});

describe('Path API Router:', function() {
  it('should return an express router instance', function() {
    pathIndex.should.equal(routerStub);
  });

  describe('GET /api/paths', function() {
    it('should route to path.controller.index', function() {
      routerStub.get
        .withArgs('/', 'pathCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/paths/:id', function() {
    it('should route to path.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'pathCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/paths', function() {
    it('should route to path.controller.create', function() {
      routerStub.post
        .withArgs('/', 'pathCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/paths/:id', function() {
    it('should route to path.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'pathCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/paths/:id', function() {
    it('should route to path.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'pathCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/paths/:id', function() {
    it('should route to path.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'pathCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
