import "./BannerComponent.css";
import banner from "../assets/renovation1.jpg";

export default function BannerComponent() {
    return (
        <div className="banner">
            <img src={banner} alt="" className="banner_image" />
        </div>
    );
}
