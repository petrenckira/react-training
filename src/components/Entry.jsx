import ImageWithFallback from './ImageWithFallback'

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <ImageWithFallback
                    src={props.img.src}
                    alt={props.img.alt}
                    className="main-image"
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src="/images/marker.svg"
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}