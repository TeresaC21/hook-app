import React from 'react';
import ReactDOM from 'react-dom';

//import HookApp from '../src/HookApp.js';
//import CounterApp from './components/useState/CounterApp';
//import CounterWithCustomHook from './components/useState/CounterWithCustomHook';
//import SimpleForm from './components/useEffect/SimpleForm';
//import FormWithCustomHook from './components/useEffect/FormWithCustomHook';
//import MultipleCustomHook from './components/some/MultipleCustomHook';
//import FocusScreen from './components/useRef/FocusScreen';
//import SecondRef from './components/useRef/SecondRef';
//import Layout from './components/useLayoutEffect/Layout';
//import Memorize from './components/memos/Memorize';
//import MemoHook from './components/memos/MemoHook';
//import { Padre } from './components/homework-memo/Padre';
import CallbackHook from './components/memos/CallbackHook';

ReactDOM.render(
  <React.StrictMode>
    <CallbackHook />
  </React.StrictMode>,
  document.getElementById('root')
);
