import angular from 'angular';
import { ContactController } from './controllers/contact.controller';
import { serverConstant } from './server.constant';


angular
  .module('app', [])
  .constant('SERVER', serverConstant)
  .controller('ContactController', ContactController)
;