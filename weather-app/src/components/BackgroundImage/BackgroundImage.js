import "./BackgroundImage.css";

export default function BackgroundImage({ url, alt, loading, error }) {
   

    if (loading) {
        return <div className="loading">LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!url) {
        return <div>Loading image...</div>;
    }

    return (
        <div className="background-container">
            <img src={url} alt={alt} loading="lazy" />
        </div>
    );
}