
import React from 'react';



// receive imageUrl
const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute ma3'>
                <img alt='' src={imageUrl} width='500px' height='auto' />
            </div>



        </div>
    );
}

export default FaceRecognition

// use imageUrl in the src