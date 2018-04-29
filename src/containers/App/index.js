import React from 'react';

import GridView from '../GridView';
import TableView from '../TableView';
import InfoView from '../InfoView';
import SearchView from '../SearchView';
import Menu from '../../components/Menu';

export default class App extends React.Component {

    /* 
        page: grid,table,info,search
    */

    constructor(){
        super();
        this.state = {
            page: 'table'
        }
    }
    
    render(){

        let content;
        switch(this.state.page){
            case 'grid':
                content=<GridView />;
                break;
            case 'table':
                content=<TableView />;
                break;
            case 'search':
                content=<SearchView />;
                break;
            case 'info':
                content=<InfoView />;
                break;
            default: 
                content=<GridView />;
                break;
        }

        console.log(content);
        return(
            <React.Fragment>
                <Menu />
                {content}
            </React.Fragment>
    )}

}