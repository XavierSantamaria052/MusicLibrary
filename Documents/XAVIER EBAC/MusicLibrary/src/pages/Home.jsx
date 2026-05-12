import { useState, useMemo } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";
import useFetch from "../hooks/useFetch";
    
    const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.huge};
    `;
    
    const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: 700;
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.gradientStart},
        ${({ theme }) => theme.colors.gradientEnd}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
    `;
    
    const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-top: -${({ theme }) => theme.spacing.xxxl};
    `;
    
    const EmptyState = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.textDim};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: 4rem 1rem;
    `;
    
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
            const key = `strTrack${String(i).padStart(2, "0")}`;
            if (album[key]) {
            tracks.push({
                id: `${album.idAlbum}-${i}`,
                albumId: album.idAlbum,
                title: album[key],
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
    
    return (
        <PageWrapper>
        <Title>🎵 Biblioteca Musical</Title>
        <Subtitle>Busca canciones por nombre de artista</Subtitle>
        <SearchBar onSearch={setSearchTerm} />
        {searchTerm ? (
            <SearchResults songs={songs} loading={loading} error={error} refetch={refetch} />
        ) : (
            <EmptyState>Ingresa el nombre de un artista para comenzar 🎸</EmptyState>
        )}
        </PageWrapper>
    );
    };
    
export default Home;