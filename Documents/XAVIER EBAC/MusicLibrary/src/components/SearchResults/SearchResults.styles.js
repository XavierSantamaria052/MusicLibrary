import styled from "styled-components";
import { Link } from "react-router-dom";
    
    export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
    animation: fadeIn 0.3s ease;
    `;
    
    export const ResultsCount = styled.p`
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    `;
    
    export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    `;
    
    export const Card = styled.li`
    background: ${({ theme }) => theme.colors.surface};
    border: 1.5px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    transition: border-color ${({ theme }) => theme.transitions.base},
                transform ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        transform: translateX(4px);
    }
    `;
    
    export const SongLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
    gap: ${({ theme }) => theme.spacing.xl};
    `;
    
    export const SongInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
    `;
    
    export const SongTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
    `;
    
    export const SongArtist = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.primaryLight};
    `;
    
    export const SongAlbum = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textMuted};
    `;
    
    export const Arrow = styled.span`
    color: ${({ theme }) => theme.colors.textDim};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    flex-shrink: 0;
    `;
    
    /* ── Status (loading / error / empty) ── */
    export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: 3rem 1rem;
    text-align: center;
    `;
    
    export const StatusText = styled.p`
    color: ${({ theme }) => (theme.colors[theme.variant] ?? theme.colors.textSecondary)};
    font-size: ${({ theme }) => theme.fontSizes.base};
    
    /* prop: variant="error" pone el texto en rojo */
    color: ${({ variant, theme }) =>
        variant === "error" ? theme.colors.error : theme.colors.textSecondary};
    `;
    
    export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-top-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    animation: spin 0.8s linear infinite;
    `;
    
    export const RetryButton = styled.button`
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