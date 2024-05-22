import Loader from "../Loader"
import "./index.css"
const BannerSection = (props) => {

    const { vibeDetails } = props
    const { imageUrl } = vibeDetails

    return (
        <>
        {
            imageUrl !== undefined ?
            <div>
                <div className="image-container" >
                    <img src={imageUrl} className="banner-image" alt="banner-image" />
                </div>
            </div> : <Loader />
        }
        </>
    )
}

export default BannerSection
