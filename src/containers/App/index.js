import React from 'react';

import ArtistView from '../ArtistView';
import MainView from '../MainView';

export default class App extends React.Component {

    /* 
        page: main,artist
    */

    constructor(){
        super();
        this.state = {
            page: 'main',
            artistID: null,
            name: null,
            genre: null,
        }

        this.changePage = this.changePage.bind(this);

    }
    
    changePage(page, id,name,genre){
        this.setState({
            page: page,
            artistID: id,
            name: name,
            genre: genre,
        })
    }

    render(){
        let content;
        switch(this.state.page){
            case 'main':
                content=<MainView changePage={this.changePage}/>
                break;
            case 'artist':
                content=<ArtistView id={this.state.artistID} name={this.state.name} genre={this.state.genre} />;
                break;
            default: 
                content=<MainView changePage={this.changePage}/>;
                break;
        }
        return(
            <React.Fragment>
                {content}
            </React.Fragment>
    )}

}