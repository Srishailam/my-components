import React, { FC, Suspense, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ContactUsPage from './ContactUsPage';
// import AdminPage from './AdminPage';
import Header from './Header';
import LoginPage from './LoginPage';
import NotFound from './NotFound';
import ProductPage from './ProductPage';
import ProductsPage from './ProductsPage';

const AdminPage = React.lazy(() => import("./AdminPage"));

const Routes: FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="Routes">
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Redirect exact={true} from="/" to="/products" />
          <Route exact={true} path="/products" component={ProductsPage} />
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/admin">
            {
              loggedIn ? (
                <Suspense fallback={<div className="page-container">Loading...</div>}>
                  <AdminPage />
                </Suspense>
              ) : (<Redirect to="/login" />)
            }
          </Route>
          <Route path="/contactus" component={ContactUsPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;
