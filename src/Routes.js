import React from 'react'
import {Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Layout from './layout/Layout';



const Routes = () => {
    return (
          <Switch>
            <Layout>
              <Route exact path="/" component={Main} />
            </Layout>
          </Switch>
    )
}

export default Routes
