import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import AddCategory from './components/Category/AddCategory';
import AllCategories from './components/Category/AllCategories';
import EditCategory from './components/Category/EditCategory';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/layout/NotFound';
import Home from './components/Home';
import Auth from './components/Auth';
import Protected from './components/Protected';

function App() {
  return (
    <div className="app">
      
        {/* https://cloud.netapp.com/blog/migrating-mysql-database-ec2-hosted-amazon-rds */}

      <Router>
        <Switch>
        <Route path="/allcategories" component={AllCategories} >
          <Protected cmp={AllCategories} />
        </Route>
        <Route path="/addcategory" component={AddCategory}>
          <Protected cmp={AddCategory} />
        </Route>
        <Route path="/editcategory/:id" >
          <Protected cmp={EditCategory} />
        </Route>
        <Route path="/home">
          <Protected cmp={Home} />
        </Route>
        <Route path="/" component={Auth} />
        <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
    );
}

export default App;
