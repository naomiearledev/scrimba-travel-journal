import PropTypes from "prop-types"
import locationIcon from "../assets/images/location-icon.png"

export default function Entry({ data }) {
  const imgSrc = "../../" + data.image
  
  return (
    <div className="entry">
      <div className="entry_image">
        <img src={imgSrc} alt={data.title} />
      </div>
      <div className="entry_main">
        <div className="entry_location-info">
          <div className="entry_location">
            <img src={locationIcon} aria-hidden="true" />
            <span>{data.location}</span>
          </div>
          <div className="entry_mapsLink">
            <a href={data.mapsLink}>View on Google Maps</a>
          </div>
        </div>
        <div className="entry_title">
          <h2>{data.title}</h2>
        </div>
        <div className="entry_duration">
          <span>{data.duration.start} - {data.duration.end}</span>
        </div>
        <div className="entry_description">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

Entry.PropTypes = {
  data: PropTypes.object
}