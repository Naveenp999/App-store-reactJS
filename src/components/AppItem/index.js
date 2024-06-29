import './index.css'

const AppItem = props => {
  const {content} = props
  return (
    <li className="Applist-container">
      <img src={content.imageUrl} alt={content.appName} className="app-icon" />
      <p className="description">{content.appName}</p>
    </li>
  )
}

export default AppItem
