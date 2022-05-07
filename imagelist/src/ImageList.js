import React from "react";

const ImageList=(props)=>
{
    const images = props.images.map((image)=>{
        return <img key={image.id} src={image.webformatURL} alt="" style={{float:'left',height:'200px',width:'300px',paddingRight:'10px',paddingLeft:'10px',display:'grid',paddingTop:'10px',paddingBottom:'10px',marginLeft:'8px',objectFit:'cover'}}/>
    })
    return(
        <div>
            {images}
        </div>
    )
}
export default ImageList;