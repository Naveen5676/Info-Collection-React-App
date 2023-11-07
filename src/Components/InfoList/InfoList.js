import './InfoList.css'
import InfoItem from '../InfoItem/InfoItem';


const InfoList=(props)=>{
    return (
      <ul className="info-list">
        
        {props.items.map((info) => (
          <InfoItem key={info.id}>
            {info.name} ({info.age} years old)
          </InfoItem>
        ))}
      </ul>
    );
}

export default InfoList