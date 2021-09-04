import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import BreadcrumbComponent from './BreadcrumbComponent';
import FullPostComponent from './FullPostComponent';
import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={ store }>
                <HeaderComponent />
                <BreadcrumbComponent />
                <Switch>
                    <Route exact path="/" component={ MainComponent } />
                    <Route exact path="/posts/:postId" component={ FullPostComponent } />
                </Switch>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
