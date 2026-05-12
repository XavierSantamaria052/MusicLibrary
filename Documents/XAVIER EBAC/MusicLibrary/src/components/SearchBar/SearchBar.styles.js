import styled from "styled-components";
    
    export const Form = styled.form`
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
    
    @media (max-width: 600px) {
        flex-direction: column;
    }
    `;
    
    export const Input = styled.input`
    flex: 1;
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 1.5px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    outline: none;
    transition: border-color ${({ theme }) => theme.transitions.base};
    
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }
    `;
    
    export const Button = styled.button`
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxxl};
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 600;
    transition: background ${({ theme }) => theme.transitions.base},
                transform 0.1s ease;
    
    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
    }
    
    &:active {
        transform: scale(0.97);
    }
    
    @media (max-width: 600px) {
        width: 100%;
    }
`;
