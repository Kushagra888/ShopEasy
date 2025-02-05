import { useState, useContext } from 'react';
import { Box, Button, Typography, Badge, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../context/ContextProvider';
import Profile from './Profile';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 16,
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            color: '#388E3C',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)`
    color: #FFFFFF;
    background: #4CAF50;
    text-transform: none;
    font-weight: 600;
    border-radius: 4px;
    padding: 5px 40px;
    height: 32px;
    box-shadow: none;
    &:hover {
        background-color: #388E3C;
    }
`;

const CartWrapper = styled(Link)(({ theme }) => ({
    display: 'flex',
    color: '#FFFFFF',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
        color: '#388E3C'
    }
}));

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            
            <CartWrapper to='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </CartWrapper>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;