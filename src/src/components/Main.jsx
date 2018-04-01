import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Department from './usermanage/Department'
import Role from './usermanage/Role'
import Users from './usermanage/Users'

class Main extends React.Component {
  render() {
      return (
        <Switch>
            <Route path='/department' component={Department}/>
            <Route path='/role' component={Role}/>
            <Route path='/users' component={Users}/>
        </Switch>
      )
  }
}

export default Main;