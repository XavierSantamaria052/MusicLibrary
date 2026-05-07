import { Link } from "react-router-dom";
    
    const SearchResults = ({ songs, loading, error, refetch }) => {
    if (loading) {
        return (
        <div className="status-container">
            <div className="spinner" aria-label="Cargando"></div>
            <p className="status-text">Cargando...</p>
        </div>
        );
    }
    
    if (error) {
        return (
        <div className="status-container error-container">
            <p className="status-text error-text">
            ⚠️ Hubo un problema al cargar los datos. Intenta nuevamente.
            </p>
            <button className="retry-button" onClick={refetch}>
            Reintentar
            </button>
        </div>
        );
    }
    
    if (!songs || songs.length === 0) {
        return (
        <div className="status-container">
            <p className="status-text">
            No se encontraron resultados. Intenta con otro artista.
            </p>
        </div>
        );
    }
    
    return (
        <section className="results-section" aria-label="Resultados de búsqueda">
        <p className="results-count">{songs.length} canciones encontradas</p>
        <ul className="song-list">
            {songs.map((song) => (
            <li key={song.id} className="song-card">
                <Link to={`/song/${song.albumId}`} className="song-link">
                <div className="song-info">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                    <span className="song-album">Álbum: {song.album}</span>
                </div>
                <span className="song-arrow">→</span>
                </Link>
            </li>
            ))}
        </ul>
        </section>
    );
    };
    
export default SearchResults;