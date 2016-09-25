import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import angularGrid from 'angularGrid';

export class MainController {
  $http;
  socket;
  paths = [];


  /*@ngInject*/
  constructor($http, $scope, socket) {
    const self = this;
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    $scope.angularGridOptions = {
      gridWidth: 300,
      gutterSize: 10,
      refreshOnImgLoad: false
    };

    $scope.$watch('searchTags', function(val) {
      if (val && self.wholeList && self.wholeList.length) {
        self.paths = self.wholeList.filter(function(item) {
          return item.tags.join(' ').indexOf(val) > -1;
        });
      } else {
        self.paths = self.wholeList;
      }
    });

    $scope.$watch('propertyName', function(sortOn) {
      if (self.wholeList && self.wholeList.length) {
        self.wholeList = self.wholeList.sort(function(a, b) {
          if (a[sortOn] > b[sortOn]) {
            return 1;
          } else if (a[sortOn] < b[sortOn]) {
            return -1;
          }
          return 0;
        });
        if ($scope.searchTags) {
          self.paths = self.wholeList.filter(function(item) {
            return item.tags.join(' ').indexOf($scope.searchTags) > -1;
          });
        } else {
          self.paths = self.wholeList;
        }
      }
    });

    $scope.voteForItem = function(id, action) {
      $http.put(`/api/paths/${id}/${action}`)
        .then(response => {
          const updatedRecord = response.data;
          self.wholeList = self.wholeList.map(item => {
            if (item.id === updatedRecord.id) {
              return updatedRecord;
            } else {
              return item;
            }
          });

          self.paths = self.wholeList;
        });
    };
  }

  $onInit() {
    this.$http.get('/api/paths')
      .then(response => {
        this.wholeList = response.data;
        this.paths = this.wholeList;
        this.socket.syncUpdates('path', this.paths);
      });
  }

}

export default angular.module('hackerEarthSpringboardApp.main', [uiRouter, angularGrid])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
