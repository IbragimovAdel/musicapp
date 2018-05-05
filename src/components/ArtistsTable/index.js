import React from 'react'
import {inject, observer} from 'mobx-react'
import './style.css'

const ArtistsTable = inject('store')(observer(class ArtistsTable extends React.Component {

    constructor() {
        super()
        this.state = {
            value: '',
        }

        this.handChange = this.handChange.bind(this);
    }

    handChange(e){
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return(
            <div className='table-container'>
                <input type='text' value={this.state.value} onChange={this.handChange} className='searchField' />
                <table className='artists-table'>
                    <thead>
                    <tr className='headerRow'>
                        <th>Artist</th>
                        <th>Rating</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.store.getArtistsByName(this.state.value).map(artist => {
                            return <tr key={artist.id}>
                                <td>{artist.name}</td>
                                <td>{artist.rating}</td>
                                <td>{artist.description}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}))

export default ArtistsTable;