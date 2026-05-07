import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
    
    const SongDetail = () => {
    const { id } = useParams();
    
    const { data, loading, error, refetch } = useFetch(
    `/api/api/v1/json/2/album.php?m=${id}`
    );
    
    if (loading) {
        return (
        <div className="status-container">
            <div className="spinner" aria-label="Cargando"></div>
            <p className="status-text">Cargando detalles del álbum...</p>
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
            <Link to="/" className="back-link">
            ← Volver al inicio
            </Link>
        </div>
        );
    }
    
    const album = data?.album?.[0];
    
    if (!album) {
        return (
        <div className="status-container">
            <p className="status-text">No se encontró información para este álbum.</p>
            <Link to="/" className="back-link">
            ← Volver al inicio
            </Link>
        </div>
        );
    }
    
    const tracks = [];
    for (let i = 1; i <= 20; i++) {
        const trackKey = `strTrack${String(i).padStart(2, "0")}`;
        if (album[trackKey]) {
        tracks.push({ number: i, title: album[trackKey] });
        }
    }
    
    return (
        <main className="detail-page">
        <Link to="/" className="back-link">
            ← Volver al inicio
        </Link>
    
        <div className="album-detail-card">
            {album.strAlbumThumb && (
            <img
                src={album.strAlbumThumb}
                alt={`Portada de ${album.strAlbum}`}
                className="album-cover"
            />
            )}
    
            <div className="album-info">
            <h1 className="album-title">{album.strAlbum}</h1>
            <p className="album-artist">{album.strArtist}</p>
    
            <div className="album-meta">
                {album.intYearReleased && (
                <span className="meta-badge">📅 {album.intYearReleased}</span>
                )}
                {album.strGenre && (
                <span className="meta-badge">🎵 {album.strGenre}</span>
                )}
                {album.strCountry && (
                <span className="meta-badge">🌍 {album.strCountry}</span>
                )}
            </div>
    
            {album.strDescriptionES || album.strDescriptionEN ? (
                <p className="album-description">
                {album.strDescriptionES || album.strDescriptionEN}
                </p>
            ) : null}
            </div>
        </div>
    
        {tracks.length > 0 && (
            <section className="tracklist-section">
            <h2 className="tracklist-title">Lista de canciones</h2>
            <ol className="tracklist">
                {tracks.map((track) => (
                <li key={track.number} className="track-item">
                    <span className="track-number">{track.number}</span>
                    <span className="track-title">{track.title}</span>
                </li>
                ))}
            </ol>
            </section>
        )}
        </main>
    );
    };
    
export default SongDetail;