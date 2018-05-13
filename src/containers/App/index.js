import React from 'react';

import ArtistView from '../../components/ArtistView';
import MainView from '../../components/MainView';
import { Route, Redirect } from 'react-router';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            artistID: null,
            name: null,
            genre: null,
        }

    }
    render() {
        return (
            <React.Fragment>
                <Route path='/' exact render={() => <Redirect to={'/search'} />} />
                <Route path='/search' component={MainView} />
                <Route path='/albums' component={ArtistView} />
            </React.Fragment>
        )
    }

}