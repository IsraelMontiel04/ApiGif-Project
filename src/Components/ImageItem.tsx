interface props{
    title:string
    url:string
}

const ImageItem = ({title, url}:props)=> {
  return (
    <div>
        <p>{title} </p>
      <img src={url} alt={title} />      
    </div>
  )
}

export default ImageItem
