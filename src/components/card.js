export default function Card(props) {
    return (
        <section className="card-section">
            <div className="hero-container">
                <img src={props.image} className="hero" />
            </div>
            <div className="text-container">
                <div className="upper-section">
                    <div className="location-flex-container">
                        <div className="location-logo-container">
                            <i className="fa-solid fa-location-dot location-logo"></i>
                        </div>
                        <div className="country-container">
                            <h3 className="country">{props.country}</h3>
                        </div>
                    </div>
                    <div className="google-maps-container">
                        <a href={props.googleMaps} className="google-maps">View on Google Maps</a>
                    </div>
                </div>
                <div className="lower-section">
                    <div className="location-name-container">
                        <h1 className="location-name">{props.locationName}</h1>
                    </div>
                    <div className="duration-container">
                        <h3 className="duration">{props.duration}</h3>
                    </div>
                    <div className="journal-container">
                        <p className="journal">{props.journal}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}