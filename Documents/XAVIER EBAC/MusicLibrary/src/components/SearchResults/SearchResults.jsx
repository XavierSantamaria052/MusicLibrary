import {
    Section, ResultsCount, List, Card, SongLink,
    SongInfo, SongTitle, SongArtist, SongAlbum, Arrow,
    StatusContainer, StatusText, Spinner, RetryButton,
    } from "./SearchResults.styles";
    
    const SearchResults = ({ songs, loading, error, refetch }) => {
    if (loading) {
        return (
        <StatusContainer>
            <Spinner aria-label="Cargando" />
            <StatusText>Cargando...</StatusText>
        </StatusContainer>
        );
    }
    
    if (error) {
        return (
        <StatusContainer>
            <StatusText variant="error">
            ⚠️ Hubo un problema al cargar los datos. Intenta nuevamente.
            </StatusText>
            <RetryButton onClick={refetch}>Reintentar</RetryButton>
        </StatusContainer>
        );
    }
    
    if (!songs || songs.length === 0) {
        return (
        <StatusContainer>
            <StatusText>No se encontraron resultados. Intenta con otro artista.</StatusText>
        </StatusContainer>
        );
    }
    
    return (
        <Section aria-label="Resultados de búsqueda">
        <ResultsCount>{songs.length} canciones encontradas</ResultsCount>
        <List>
            {songs.map((song) => (
            <Card key={song.id}>
                <SongLink to={`/song/${song.albumId}`}>
                <SongInfo>
                    <SongTitle>{song.title}</SongTitle>
                    <SongArtist>{song.artist}</SongArtist>
                    <SongAlbum>Álbum: {song.album}</SongAlbum>
                </SongInfo>
                <Arrow>→</Arrow>
                </SongLink>
            </Card>
            ))}
        </List>
        </Section>
    );
    };
    
export default SearchResults;