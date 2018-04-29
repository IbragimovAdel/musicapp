import {types} from 'mobx-state-tree';

const Album = types.model('Album', {
    id: types.optional(types.identifier(types.number), () => {return Math.random()}),
    name: types.string,
    cover: types.string,
    year: types.number,
})

const Artist = types.model({
    id: types.optional(types.identifier(types.number), () => {return Math.random()}),
    name: types.string,
    rating: types.optional(types.number,3),
    description: types.optional(types.string, ''),
    albums: types.optional(types.array(Album), []),
    genre: types.optional(types.string, ''),
}).actions(self => {
    return{
        setRating(rating) {
            self.rating = rating
        },
    }
})

const StoreModel = types.model({
    artists: types.array(Artist)
}).views(self => {
    return {
        getArtistsByRating(rating){
            self.artists.filter(artist => {return artist.rating >= rating})
        },
        getArtistsByName(name){
            return self.artists.filter(artist => {
                return artist.name.indexOf(name) !== -1
            })
        }
    }
}).actions(self => {
    return{
        afterCreate() {
                self.addArtist('Sample artist')
        },
        addArtist(name) {
            self.artists.push(Artist.create({
                name: name,
            }))
        }
    }
})

const store  = StoreModel.create({
    artists: []
})

export default store;