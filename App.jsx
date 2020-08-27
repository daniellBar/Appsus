const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import {Home} from './pages/Home.jsx'
import {EmailApp} from './apps/mail/EmailApp.jsx'
import {About} from './pages/About.jsx'
import {AppHeader} from './cmps/AppHeader.jsx'
export class App extends React.Component {
 


    render() {
        
        return (
            <Router>
            <div className="main-app-container">
              <AppHeader/>
                <main>
                    <Switch>
                    <Route component={EmailApp} path="/mail" />
                    <Route component={About} path="/about" />
                    <Route component={Home} path="/" />
                    
                     
                    
                    </Switch>
                </main>

             <div className="app-footer"></div>
            </div>
            </Router>
        )
    }
}

