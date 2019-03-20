/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppContainer from "./src/router";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
