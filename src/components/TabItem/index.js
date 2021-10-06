import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, setActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const tabClassName = isActive ? 'active-button button' : 'button'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
