'use strict';

angular.module('app.poc.version', [
  'app.poc.version.interpolate-filter',
  'app.poc.version.version-directive'
])

.value('version', '0.1');
