import { createGlobalStyle } from "styled-components";
    
    const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.textPrimary};
        min-height: 100vh;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    button {
        cursor: pointer;
        font-family: inherit;
    }
    
    ol, ul {
        list-style: none;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    `;
    
export default GlobalStyle;
