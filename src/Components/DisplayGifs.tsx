import { useApi } from "../hooks/useApi"
import ImageItem from "./imageItem"

interface props{
    category:string
}

const DisplayGifs=({category}:props) =>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=d8VfR5HF9ty2AjAI7w8Db4Dze1Ut5qM6&q=${category}&limit=10`
    const {loading, data} = useApi(url)


  return (
    <div className="container-gifs">
      {loading && 'Loading '}
      {!loading && data && data.map((img) =>(
        <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
        ))
      } 
      {category}
    </div>
  )
}

export default DisplayGifs
