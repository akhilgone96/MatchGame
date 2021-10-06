import './index.css'

const ImageItem = props => {
  const {imageDetails, updateResults, generateRandomImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImageThumbnail = () => {
    updateResults(id)
    generateRandomImage()
  }

  return (
    <li className="image-item">
      <button
        type="button"
        className="image-button"
        onClick={onClickImageThumbnail}
      >
        <img className="list-image" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImageItem
