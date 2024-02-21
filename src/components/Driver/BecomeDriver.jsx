import react, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import '../../styles/Cart.css';
import { UserContext } from '../../context'

const BecomeDriver = () => {
 
    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const [popUp, setPopUp] = useState(false);

    const user_id = user ? user.id : null;

    const togglePopup = () => {
        setPopUp(!popUp);
        setTimeout(() => {
            setPopUp(false);
            navigate('/login')
        }, 3000);
    };

    const handleClick = async () => {

        try {
            const res = await axios.post('/driver/becomeDriver', { userId: user_id });

            const resMessage = res.data.message
            console.log(resMessage)
            if (resMessage === 'becameDriver') {
                togglePopup();
                console.log("becameDriver");
            } else {
                console.log(resMessage)
            }

        } catch (error) {
            console.error('Error during becomeDriver:', error);
        }
    }
return (

        <div className="cart-container">



            <div className="shop-button">
                <button onClick={handleClick}>Become a Driver</button>
            </div>

            {popUp && (
                <div className='popUp'>
                    <div className="menuPopUpDiv">

                    </div>
                </div>
            )}

        </div>
    )


}

export default BecomeDriver;