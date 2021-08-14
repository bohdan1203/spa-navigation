import Gallery from "./components/gallery";

import Image1 from "./images/image-1.jpg";
import Image2 from "./images/image-2.jpg";
import Image3 from "./images/image-3.jpg";
import Image4 from "./images/image-4.jpg";
import Image5 from "./images/image-5.jpg";
import Image6 from "./images/image-6.jpg";
import Image7 from "./images/image-7.jpg";
import Image8 from "./images/image-8.jpg";

const images = [
    {image: Image1},
    {image: Image2},
    {image: Image3},
    {image: Image4},
    {image: Image5},
    {image: Image6},
    {image: Image7},
    {image: Image8},
]


const PhotosComponent = () => {
    return (
      <div className="grid">
        {images.map(image => <Gallery {...image}/>)}
      </div>
    );
}

export default PhotosComponent;