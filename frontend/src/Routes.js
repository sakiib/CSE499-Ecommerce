import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import './user/Routes.css';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Dashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path='/' exact component={Home} />
                <Route path='/shop' exact component={Shop} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
                <PrivateRoute path='/user/dashboard' exact component={Dashboard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <AdminRoute path='/create/category' exact component={AddCategory} />
                <AdminRoute path='/create/product' exact component={AddProduct} />
                <Route path='/product/:productId' exact component={Product} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
