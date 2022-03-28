import PlaylistItem from './PlaylistItem';

import { SPOTIFY_DATA } from '../data';

function PlaylistContainer() {

  function renderPlaylistItems() {
    return SPOTIFY_DATA.map((item) => {
      const { id, album, name: songName, artists } = item;
      return (
        <PlaylistItem
          key={id}
          image={album.images[0]?.url}
          songName={songName}
          albumName={album.name}
          artists={artists}
        />
      );
    });
  }

  return <div className="playlist-container">{renderPlaylistItems()}</div>;
}

export default PlaylistContainer;
