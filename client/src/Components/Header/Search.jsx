import { useState, useEffect } from 'react';
import { InputBase, Box, List, ListItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 4px;
  margin-left: 10px;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
`;

const InputSearchBase = styled(InputBase)`
  width: 100%;
  padding-left: 16px;
  font-size: 16px;
`;

const SearchIconWrapper = styled(Box)`
  color: #4CAF50;
  padding: 8px;
  display: flex;
  align-items: center;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #FFFFFF;
  color: #000;
  margin-top: 36px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: 38%;
`;

const ListItemStyled = styled(ListItem)`
  padding: 10px 16px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #F1F8E9;
  }
`;

const Search = () => {
    const [ text, setText ] = useState('');
    const [ open, setOpen ] = useState(true);

    const getText = (text) => {
        setText(text);
        setOpen(false);
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItemStyled>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItemStyled>
                  ))
                }  
              </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;