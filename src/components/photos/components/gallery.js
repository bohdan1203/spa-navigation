function Gallery(props) {
    return (
        <div className="cell">
            <img className="gallery-item" src={props.image} alt="picture" />
        </div>
    )
}

export default Gallery;