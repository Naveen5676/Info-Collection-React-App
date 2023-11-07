import './InfoItem.css'

const InfoItem=(props)=>{
    return (
        <li className='info-item'>
            {props.children}
        </li>
    );

};

export default InfoItem