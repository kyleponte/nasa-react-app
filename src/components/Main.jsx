export default function Main(props) {

  const {data} = props;
  
  return (
    <div className='image-container'>
      <img src={data.hdurl} alt={data.title || 'bg-img'} className='bgImage'/>
    </div>
  )
}