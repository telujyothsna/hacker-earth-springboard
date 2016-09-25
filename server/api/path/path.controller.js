/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/paths              ->  index
 * POST    /api/paths              ->  create
 * GET     /api/paths/:id          ->  show
 * PUT     /api/paths/:id          ->  upsert
 * PATCH   /api/paths/:id          ->  patch
 * DELETE  /api/paths/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Path from '../../models/path.model';
import axios from 'axios';
import async from 'async';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch (err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Paths
export function index(req, res) {

  axios.get('https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths')
    .then(function(response) {
      const paths = response.data.paths;
      
      // const modelsToSend = [];
      
      async.map(paths, 
        function(path, callback){
          let tags; 
          tags = path.tags.split(', ');
          path.tags = tags;

          Path.findOneAndUpdate({
            id: path.id
          },
          path,
          {
            upsert: true
          }, function(err, doc){                
            callback(null, doc);  
          })
          
        }, 
        function(err, results){
          res.send(results);
        });
    });
}

// Gets a single Path from the DB
export function show(req, res) {
  return Path.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Path in the DB
export function create(req, res) {
  return Path.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Path in the DB at the specified ID
export function upsert(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Path.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    upsert: true,
    setDefaultsOnInsert: true,
    runValidators: true
  }).exec()

  .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Path in the DB
export function patch(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Path.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Path from the DB
export function destroy(req, res) {
  return Path.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}