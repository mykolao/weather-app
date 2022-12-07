import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import { customStyles } from 'mui/customStyles';

const containerStyles = customStyles({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 8px',
});

export const Header = () => {
  return (
    <AppBar>
      <Container maxWidth="lg" sx={containerStyles}>
        <Logo />
        <SearchBar />
      </Container>
    </AppBar>
  );
};
