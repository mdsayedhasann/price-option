import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/Ai';


const Feature = ({feature}) => {
    return (
        <div className='flex gap-1 items-center py-1 pl-20'>
            <p className='text-left text-green-400'><AiFillCheckCircle></AiFillCheckCircle></p>
            <p className='text-center'>  {feature}</p>
        </div>
    );
}

Feature.PropTypes ={
    feature: PropTypes.string, 
}
export default Feature;