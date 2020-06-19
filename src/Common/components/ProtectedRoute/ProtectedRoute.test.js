import {Provider} from 'mobx-react';
import React from 'react';
import { withRouter, Router ,Route} from "react-router-dom";
import {render,fireEvent,waitFor} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { setAccessToken, setRole } from '../../utils/StorageUtils'
import {SMART_FOOD_MANAGEMENT_PATH} from '../../../FoodManagement/constants/RouteConstants'
import {SIGN_IN_PATH} from '../../../Authentication/constants/RouteConstants'
import {ADMIN_PATH} from '../../../Admin/constants/RouteConstants'

import {AuthAPI} from '../../../Authentication/services/AuthService/AuthAPI.fixture';
import {AuthStore} from '../../../Authentication/stores/AuthStore'

import {ProtectedRoute} from './ProtectedRoute';
import {SigninRoute} from '../../../Authentication/routes/SigninRoute';

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
  ));
const LocationDisplay1 = withRouter(({ location }) => (
    <div data-testid="location-display1">{location.pathname}</div>
  ));

describe('ProtectedRoute tests',()=>{
    let authAPI;
    let authStore;
    beforeEach(() => {
        authAPI=new AuthAPI()
        authStore=new AuthStore(authAPI)
    })
    it('it should test redirect to signin',async()=>{
        const history = createMemoryHistory();
        const route = SMART_FOOD_MANAGEMENT_PATH;
        history.push(route);

        const {
            getByRole,
            getByTestId
          } = render(
            <Provider authStore={authStore}>
              <Router history={history}>
                <ProtectedRoute path={SMART_FOOD_MANAGEMENT_PATH} component={LocationDisplay}/>
                <Route path={SIGN_IN_PATH}>
                  <SigninRoute />
                </Route>
              </Router>
            </Provider>
          );
        const signInButton = getByRole("button", { name: "LOGIN" });
        fireEvent.click(signInButton);
        const pageNavigation = await waitFor(() => getByRole("button", { name: "LOGIN" }));
        expect(pageNavigation).toHaveTextContent('LOGIN');
    })
    it('it should test navigate to userPage',async()=>{
        const history = createMemoryHistory();
        const route = SMART_FOOD_MANAGEMENT_PATH;
        history.push(route);
        setAccessToken('Token')
        setRole('User')
        const {
            getByRole,
            getByTestId
          } = render(
            <Provider authStore={authStore}>
              <Router history={history}>
                <ProtectedRoute path={SMART_FOOD_MANAGEMENT_PATH} component={LocationDisplay} adminPage={LocationDisplay1}/>
                <Route path={SIGN_IN_PATH}>
                  <SigninRoute />
                </Route>
                <Route path={ADMIN_PATH}>
                  <LocationDisplay1 />
                </Route>
              </Router>
            </Provider>
          );
          const pageNavigation = await waitFor(() => getByTestId("location-display"));
          expect(pageNavigation).toHaveTextContent(SMART_FOOD_MANAGEMENT_PATH);
       
    })
    it('it should test navigate to adminPage',async()=>{
        const history = createMemoryHistory();
        const route = SMART_FOOD_MANAGEMENT_PATH;
        history.push(route);
        setAccessToken('Token')
        setRole('Admin')
        const {
            getByRole,
            getByTestId
          } = render(
            <Provider authStore={authStore}>
              <Router history={history}>
                <ProtectedRoute path={SMART_FOOD_MANAGEMENT_PATH} component={LocationDisplay} adminPage={LocationDisplay1}/>
                <Route path={SIGN_IN_PATH}>
                  <SigninRoute />
                </Route>
                <Route path={ADMIN_PATH}>
                  <LocationDisplay1 />
                </Route>
              </Router>
            </Provider>
          );
          const pageNavigation = await waitFor(() => getByTestId("location-display1"));
          expect(pageNavigation).toHaveTextContent(ADMIN_PATH);
       
    })
})