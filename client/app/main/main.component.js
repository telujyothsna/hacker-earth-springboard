import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import angularGrid from 'angularGrid';

export class MainController {
  $http;
  socket;
  paths = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    const self = this;
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    $scope.angularGridOptions = {
      gridWidth : 300,
      gutterSize : 10,
      refreshOnImgLoad : false
    };

    $scope.$watch('searchTags', function(val){
      if(val && self.wholeList && self.wholeList.length){
        self.paths = self.wholeList.filter(function(item){
          return item.tags.join(' ').indexOf(val) > -1 ;
        });
      }
      
    });
  }

  $onInit() {
    this.$http.get('/api/paths')
      .then(response => {
        this.wholeList = response.data;
        this.paths = response.data;
        this.socket.syncUpdates('path', this.paths);
      });
      
  }

  // addThing() {
  //   if(this.newThing) {
  //     this.$http.post('/api/things', {
  //       name: this.newThing
  //     });
  //     this.newThing = '';
  //   }
  // }

  // deleteThing(thing) {
  //   this.$http.delete(`/api/things/${thing._id}`);
  // }
}

export default angular.module('hackerEarthSpringboardApp.main', [uiRouter, angularGrid])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
