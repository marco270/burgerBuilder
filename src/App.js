import React, { Component } from 'react';
import Layout from './Layout/Layout';
import BurgerBuilder from './Pages/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder/>
      </Layout>
    );
  }
}

export default App;
