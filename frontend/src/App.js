import React from 'react'
import 'antd/dist/antd.css'
import BaseRoute from './Route'
import { BrowserRouter as Router } from 'react-router-dom'
// import compoents and containers elements
import CustomLayout from './containers/Layout'
function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout>
        <BaseRoute />
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
 