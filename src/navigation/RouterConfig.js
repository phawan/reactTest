import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import {Page1} from '../pages/Page1';

const ROOT = '/home';
const HOME = '';
const DASHBOARD = '/dashboard';
const PAGE1 = '';

export const RouterConfig = () => {
    return (
        <Switch>

            <Route exact path={ROOT} component={HOME} />
            <Route exact path={DASHBOARD} component={DASHBOARD} />

             {/* <PrivateRoute path={PAGE1}>
                <Page1 />
            </PrivateRoute> */}
            {/*
            <Route path="*">
                <NotFound />
            </Route> */}
        </Switch>
    );
};

export default RouterConfig