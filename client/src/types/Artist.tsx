type Artist = {
    spotify_url: string;
    api_ref: string;
    id: string;
    name: string;
    // I've foregone adding the artist image for now, that'll require another call
    // image_url: string;
}

export default Artist;