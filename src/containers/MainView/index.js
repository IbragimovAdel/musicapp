
import React from 'react';
import './style.css';

const ArtistRow = ({name,genre,changePage,id}) => {
    return(
        <div className='result-item' onClick={()=>changePage('artist',id,name,genre)}>
            <p>{name}</p>
            <p>{genre}</p>
        </div>
    )
}

class MainView extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value:'',
            artists:[]
        }
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
                <input type='text' className='search-input' value={this.state.value} onChange={e => {
                    this.setState({
                        value: e.target.value,
                    })
                }} onKeyDown={e => {
                    if(e.keyCode === 'Enter' || e.key === 'Enter'){
                        this.fetchArtists();
                    }
                }} />
            </div>
            <div className='result-bar'>
                {this.state.artists.map(artist => {
                    return <ArtistRow key={artist.id} id={artist.id} name={artist.name} genre={artist.genre} changePage={this.props.changePage} />
                })}
            </div>
        </div>
    }
}

export default MainView;