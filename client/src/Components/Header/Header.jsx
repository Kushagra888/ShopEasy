import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu, ShoppingCart } from '@mui/icons-material';
import { useState } from 'react';

//components
import CustomButtons from './CustomButtons';
import Search from './Search';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #4CAF50;
    height: 55px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    margin-top: 4px;
`;

const Logo = styled(Typography)`
    font-weight: 600;
    font-size: 25px;
    font-family: 'Poppins', sans-serif;
`;

const ShopIcon = styled(ShoppingCart)`
    margin-right: 10px;
    font-size: 30px;
`;

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <CustomButtons />
            </List>
        </Box>
    );

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <ShopIcon />
                    <Box>
                        <Logo>ShopEasy</Logo>
                        <SubHeading>Shop Smart, Shop Easy</SubHeading>
                    </Box>
                </Component>

                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;