import React from 'react';

export default class ArtistView extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            albums: [],
            videos: [],
        }
    }

    render(){
        let {name,genre,id} = this.props
        return <div className='artist-page'>
            <p>{name}</p>
            <p>{genre}</p>
            <div className='artist-albums'></div>
            <div className='artist-videos'></div>
        </div>
    }
}