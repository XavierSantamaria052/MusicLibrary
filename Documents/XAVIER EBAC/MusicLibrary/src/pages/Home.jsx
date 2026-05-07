import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import useFetch from "../hooks/useFetch";
    
    const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const apiUrl = searchTerm
    ? `/api/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
    : null;
    
    const { data, loading, error, refetch } = useFetch(apiUrl);
    
    const songs = useMemo(() => {
        if (!data?.album) return [];
    
        return data.album.flatMap((album) => {
        const tracks = [];
        for (let i = 1; i <= 20; i++) {
            const trackKey = `strTrack${String(i).padStart(2, "0")}`;
            if (album[trackKey]) {
            tracks.push({
                id: `${album.idAlbum}-${i}`,
                albumId: album.idAlbum,
                title: album[trackKey],
                artist: album.strArtist,
                album: album.strAlbum,
            });
            }
        }
        if (tracks.length === 0) {
            tracks.push({
            id: `${album.idAlbum}-main`,
            albumId: album.idAlbum,
            title: album.strAlbum,
            artist: album.strArtist,
            album: album.strAlbum,
            });
        }
        return tracks;
        });
    }, [data]);
    
    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    
    return (
        <main className="home-page">
        <h1 className="page-title">🎵 Biblioteca Musical</h1>
        <p className="page-subtitle">Busca canciones por nombre de artista</p>
        <SearchBar onSearch={handleSearch} />
        {searchTerm && (
            <SearchResults
            songs={songs}
            loading={loading}
            error={error}
            refetch={refetch}
            />
        )}
        {!searchTerm && (
            <div className="empty-state">
            <p>Ingresa el nombre de un artista para comenzar 🎸</p>
            </div>
        )}
        </main>
    );
    };
    
export default Home;