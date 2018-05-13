
import React from 'react';
import './style.css';

import { withRouter } from 'react-router';

const ArtistRow = ({name,genre,id,history}) => {
    return(
        <div className='result-item' onClick={()=>{history.push(`/albums?artistID=${id}`)}}>
            <p>{name}</p>
            <p>{genre}</p>
        </div>
    )
}

const MainView = withRouter(class MainView extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value:'',
            artists:[]
        }
    }

    componentDidMount(){
        let artist = decodeURIComponent(this.props.location.search.slice(8));
        this.setState({
            value: artist,
        },this.fetchArtists)
    }

    async fetchArtists(){
        let response = await fetch(`https://itunes.apple.com/search?term=${this.state.value}&media=music&entity=musicArtist`);
        if(response.status === 200) {
            let data = await response.json()
            console.log(data);
            let artists = []
            data.results.map(item => {
                artists.push({
                    name: item.artistName,
                    genre: item.primaryGenreName,
                    id: item.artistId,
                })
            })
            this.setState({
                artists
            })
        }
    }

    render(){
        return <div className='main-container'>
            <div className='search-bar'>
                <input type='text' className='search-input' value={this.state.value} placeholder='Search for artists...' onChange={e => {
                    this.setState({
                        value: e.target.value,
                    })
                }} onKeyDown={e => {
                    if((e.keyCode === 'Enter' || e.key === 'Enter')&&(this.state.value!=='')){
                        this.props.history.push(`/search?artist=${encodeURIComponent(this.state.value)}`)
                        this.fetchArtists();
                    }
                }} />
            </div>
            <div className='result-bar'>
                {this.state.artists.map(artist => {
                    return <ArtistRow key={artist.id} id={artist.id} name={artist.name} genre={artist.genre} history={this.props.history} />
                })}
            </div>
        </div>
    }
})

export default MainView;