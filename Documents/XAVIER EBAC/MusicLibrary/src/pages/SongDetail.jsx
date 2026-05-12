import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
    
    const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.huge};
    animation: fadeIn 0.3s ease;
    `;
    
    const BackLink = styled(Link)`
    display: inline-block;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    transition: color ${({ theme }) => theme.transitions.base};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
    `;
    
    const AlbumCard = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.huge};
    background: ${({ theme }) => theme.colors.surface};
    border: 1.5px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    padding: ${({ theme }) => theme.spacing.xxxl};
    
    @media (max-width: 600px) {
        flex-direction: column;
    }
    `;
    
    const AlbumCover = styled.img`
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    flex-shrink: 0;
    
    @media (max-width: 600px) {
        width: 100%;
        height: 220px;
    }
    `;
    
    const AlbumInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    `;
    
    const AlbumTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    `;
    
    const AlbumArtist = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-weight: 500;
    `;
    
    const MetaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.md};
    `;
    
    /* prop: type puede ser "year" | "genre" | "country" — cambia el color del badge */
    const MetaBadge = styled.span`
    padding: 0.3rem 0.75rem;
    background: ${({ theme, type }) => {
        if (type === "year") return theme.colors.surfaceHover;
        if (type === "genre") return "#1e3a2f";
        if (type === "country") return "#1a2a3a";
        return theme.colors.border;
    }};
    color: ${({ theme, type }) => {
        if (type === "genre") return "#4ade80";
        if (type === "country") return "#60a5fa";
        return theme.colors.textSecondary;
    }};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    `;
    
    const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    `;
    
    const TracklistSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
    `;
    
    const TracklistTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    `;
    
    const TrackList = styled.ol`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    `;
    
    /* prop: even — alterna color de fondo entre pares e impares */
    const TrackItem = styled.li`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: 0.65rem ${({ theme }) => theme.spacing.xl};
    background: ${({ theme, even }) =>
        even ? theme.colors.surfaceHover : theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    transition: background ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        background: ${({ theme }) => theme.colors.surfaceHover};
    }
    `;
    
    const TrackNumber = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textDim};
    min-width: 20px;
    text-align: right;
    `;
    
    const TrackTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textPrimary};
    `;
    
    const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: 3rem 1rem;
    text-align: center;
    `;
    
    const StatusText = styled.p`
    color: ${({ variant, theme }) =>
        variant === "error" ? theme.colors.error : theme.colors.textSecondary};
    `;
    
    const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-top-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    animation: spin 0.8s linear infinite;
    `;
    
    const RetryButton = styled.button`
    padding: 0.6rem 1.25rem;
    background: transparent;
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryLight};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    transition: background ${({ theme }) => theme.transitions.base};
    
    &:hover {
        background: ${({ theme }) => theme.colors.surfaceHover};
    }
    `;
    
    /* ─────────────────────────────── */
    
    const SongDetail = () => {
    const { id } = useParams();
    const { data, loading, error, refetch } = useFetch(
        `/api/api/v1/json/2/album.php?m=${id}`
    );
    
    if (loading) {
        return (
        <StatusContainer>
            <Spinner />
            <StatusText>Cargando detalles del álbum...</StatusText>
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
            <BackLink to="/">← Volver al inicio</BackLink>
        </StatusContainer>
        );
    }
    
    const album = data?.album?.[0];
    
    if (!album) {
        return (
        <StatusContainer>
            <StatusText>No se encontró información para este álbum.</StatusText>
            <BackLink to="/">← Volver al inicio</BackLink>
        </StatusContainer>
        );
    }
    
    const tracks = [];
    for (let i = 1; i <= 20; i++) {
        const key = `strTrack${String(i).padStart(2, "0")}`;
        if (album[key]) tracks.push({ number: i, title: album[key] });
    }
    
    return (
        <PageWrapper>
        <BackLink to="/">← Volver al inicio</BackLink>
    
        <AlbumCard>
            {album.strAlbumThumb && (
            <AlbumCover src={album.strAlbumThumb} alt={`Portada de ${album.strAlbum}`} />
            )}
            <AlbumInfo>
            <AlbumTitle>{album.strAlbum}</AlbumTitle>
            <AlbumArtist>{album.strArtist}</AlbumArtist>
            <MetaRow>
                {album.intYearReleased && (
                <MetaBadge type="year">📅 {album.intYearReleased}</MetaBadge>
                )}
                {album.strGenre && (
                <MetaBadge type="genre">🎵 {album.strGenre}</MetaBadge>
                )}
                {album.strCountry && (
                <MetaBadge type="country">🌍 {album.strCountry}</MetaBadge>
                )}
            </MetaRow>
            {(album.strDescriptionES || album.strDescriptionEN) && (
                <Description>
                {album.strDescriptionES || album.strDescriptionEN}
                </Description>
            )}
            </AlbumInfo>
        </AlbumCard>
    
        {tracks.length > 0 && (
            <TracklistSection>
            <TracklistTitle>Lista de canciones</TracklistTitle>
            <TrackList>
                {tracks.map((track) => (
                <TrackItem key={track.number} even={track.number % 2 === 0}>
                    <TrackNumber>{track.number}</TrackNumber>
                    <TrackTitle>{track.title}</TrackTitle>
                </TrackItem>
                ))}
            </TrackList>
            </TracklistSection>
        )}
        </PageWrapper>
    );
    };
    
export default SongDetail;