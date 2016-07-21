/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Body } from './components/body.component';
import { CONFIG } from './constants/config';
import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';


bootstrap( Body, [CONFIG, FORM_PROVIDERS, HTTP_PROVIDERS] );