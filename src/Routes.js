import React from 'react'
import {Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Layout from './layout/Layout';
import Foundation from './pages/Foundation';
import Products from "./pages/Products";
import Notice from "./pages/Notice";
import Qna from "./pages/Qna";
import Process from "./pages/Process";
import Recommend from './pages/Recommend';

const Routes = () => {
    return (
          <Switch>
            <Layout>
              <Route exact path="/" component={Main} />
              <Route path="/foundation" component={Foundation}/>
              <Route path="/productsList" component={Products}/>    
              <Route path="/process" component={Process}/>
              <Route path="/recommend" component={Recommend}/>
              <Route path="/notice" component={Notice}/>
              <Route path="/qna" component={Qna}/>
            </Layout>
          </Switch>
    )
}

export default Routes
