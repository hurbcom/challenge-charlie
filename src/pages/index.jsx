import HeroImage from "@/components/hero-image";
import Weather from "@/components/weather";
import useBingImage from "@/hooks/use-bing-image";

const Main = () => {
    const { imageAlt, imageUrl } = useBingImage();
    return (
        <div className="w-full h-screen">
            {imageUrl && <HeroImage src={imageUrl} alt={imageAlt}></HeroImage>}
            <main className="w-full h-full bg-gray-900/60">
                <Weather />
            </main>
        </div>
    );
};

export default Main;
