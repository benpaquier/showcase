import { useState, useEffect } from "react"

const Image = props => {
  const [src, setSrc] = useState(props.src)
  
  useEffect(() => {
    fetch(src, { mode: "no-cors"})
      .then(response => {
        if (response.status === 404) {
          setSrc("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=1200&h=-1&s=1")
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <img src={src} />
  )
}

export default Image