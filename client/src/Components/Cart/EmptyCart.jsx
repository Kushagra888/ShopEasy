
import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width: 80%;
    height: 65vh;
    background: #fff;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '15%'
});

const ShopNowButton = styled(Button)`
    background: #4CAF50;
    color: #fff;
    border-radius: 4px;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    &:hover {
        background-color: #388E3C;
    }
`;

const EmptyCart = () => {
    const navigate = useNavigate();
    
    const addItem = () => {
        navigate('/');
    }

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <Component>
            <Container>
                <Image src={imgurl} />
                <Typography variant="h5" style={{ fontWeight: 600, marginTop: 20 }}>Your cart is empty!</Typography>
                <Typography style={{ marginTop: 10, color: '#757575' }}>Add items to your cart to start shopping.</Typography>
                <ShopNowButton variant="contained" onClick={() => addItem()}>Shop Now</ShopNowButton>
            </Container>
        </Component>
    )
}

export default EmptyCart;