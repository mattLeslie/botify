import Album from "./Album";
import Artist from "./Artist";

type Track = {
    album: Album;
    artists: Artist[];
    spotify_url: string;
    api_ref: string;
    id: string;
    name: string;
    added_at: string;
    added_by: string;
    // needed for deletion, etc.
    uri: string;
    // allows listening to 30 second playback in browser
    preview_url: string;
}




export default Track;