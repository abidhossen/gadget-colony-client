import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const Products = (props) => {
    const { name, image, price, description, _id } = props.product
    const history = useHistory();
    const handleProduct = () => {
        history.push('/home')
    }
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className="product-logo">
                        <img src={image} alt="" />
                    </div>
                    <CardContent >
                        <Typography gutterBottom variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className="purchase-area">
                    <h3>${price}</h3><Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary" onClick={handleProduct}>
                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
                    </Link>
                    </div>
            </Card>
        </div>
    );
};

export default Products;