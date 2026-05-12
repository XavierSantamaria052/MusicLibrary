import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import SongDetail from "./pages/SongDetail";
    
    const AppWrapper = styled.div`
    max-width: 860px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.huge} ${({ theme }) => theme.spacing.xxxl};
    `;
    
    function App() {
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
            <AppWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/song/:id" element={<SongDetail />} />
            </Routes>
            </AppWrapper>
        </BrowserRouter>
        </ThemeProvider>
    );
    }
    
export default App;