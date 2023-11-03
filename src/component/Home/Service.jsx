import { useEffect, useState } from "react";
import './Service.css';
const Service = () => {
    const [services ,setServices] = useState([])
    useEffect(()=>{
        fetch('../../../public/products.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    console.log(services)
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                services.map((service,inx) => <div key={inx}>
                
                <div className='product'>
            <img src={service.img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{service.name}</h6>
                <p>Price: ${service.price}</p>
                <p>Manufacturer: {service.seller}</p>
                <p>Rating: {service.ratings} Stars</p>
            </div>
            {/* onClick={() => handleAddToCart(props.product)} */}
            <button  className='btn-cart'>
                Add to Cart
                {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                </button>
        </div>
                
                </div>)
            }
        </div>
    );
};

export default Service;