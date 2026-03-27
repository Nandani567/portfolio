
import Image from '../assets/girl.jpg'

const ImageTemplate = () => {
    return (
       <div className="image">

           <div className="mask mask-hexagon-2 w-80 md:w-96 lg:w-[420px] shadow-2xl">
<img src={Image} alt="girl.jpg"  />
           </div>
       </div>
    )
}

export default ImageTemplate