import "./BannerComponent.css";
import banner from "../assets/renovation1.jpg";

export default function BannerComponent() {
    return (
        <section className="banner">
            <img
                src={banner}
                alt="Dean Projekt Gradnja"
                className="banner_image"
            />
        </section>
    );
}
