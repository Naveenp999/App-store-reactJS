import './index.css'

const TabItem = props => {
  const {content, changes, isActive} = props

  const makechanges = () => changes(content.tabId)

  return (
    <li className="list-container">
      <button
        className={`button ${isActive ? 'active-btn' : 'p'}`}
        type="button"
        onClick={makechanges}
      >
        {content.displayText}
      </button>
    </li>
  )
}

export default TabItem
