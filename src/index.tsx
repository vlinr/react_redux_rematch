import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.less';
import App from '@/App';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from '@/models/store';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

console.log(`                                              
     $$$$$$     $$$$$$    $$$$$$      $$$$$$   $$     $$  
        $$          $$   $$    $$         $$    $$   $$   
        $$          $$   $$               $$     $$  $$    
        $$          $$   $$  $$$$         $$      $$$$     
  $$$$  $$    $$$$  $$   $$    $$   $$$$  $$       $$      
  $$    $$    $$    $$   $$    $$   $$    $$       $$      
   $$$$$$      $$$$$$     $$$$$$     $$$$$$        $$      
`)