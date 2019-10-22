import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../../services/token-service'

export default function PrivateRoute({ component, makeApiCalls, ...props }) {
    const Component = component

    if (makeApiCalls) {
        return (
          <Route
              {...props}
              render={componentProps => (
                  TokenService.hasAuthToken()
                      ? <Component {...componentProps} makeApiCalls={makeApiCalls} />
                      : <Redirect
                          to={{
                              pathname: '/login',
                              state: { from: componentProps.location }
                          }} />
              )}
          />
        )
      } else {
        return (
            <Route
                {...props}
                render={componentProps => (
                    TokenService.hasAuthToken()
                        ? <Component {...componentProps} />
                        : <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: componentProps.location }
                            }} />
                )}
            />
        )
    }

}