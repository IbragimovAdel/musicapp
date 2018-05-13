import React from 'react';
import { withRouter } from 'react-router';

const ArtistView = withRouter(class ArtistView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            albums: [],
            videos: [],
            name: null,
            genre: null,
        }
    }

    async fetchAlbums(id){
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

    componentDidMount(){
        let artistID = this.props.location.search.slice(10);
    }

    render() {
        let { name, genre, id } = this.props
        return <div className='artist-page'>
            <p>{name}</p>
            <p>{genre}</p>
            <div className='artist-albums'></div>
            <div className='artist-videos'></div>
        </div>
    }
})

export default ArtistView;