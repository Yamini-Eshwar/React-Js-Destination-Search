import './index.css'

const DestinationSearch = props =>{
   const {PlaceDetails} = props;
   const {id,name,imgUrl}= PlaceDetails

   return(
    <div className='card'>
        <img src={imgUrl} alt="" className='place-images'/>
        <p>{name}</p>
    </div>
   )
}

export default DestinationSearch