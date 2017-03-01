import React from 'react'

class ItemBox extends React.Component {

  render() {
    const { maxNumberOfCols, index, layout } = this.props
    const style = layout ? {visibility: "visible", position: "absolute", top: layout.top, left: layout.left}
      : maxNumberOfCols> -1 && index < maxNumberOfCols ? {visibility: "visible", float: "left", position: "relative"}
      : {}

    return React.createElement(
      'div',
      {
        ref: e => this.itemBox = e,
        className: "waterfall-item-box",
        style
      },
      this.props.children
    )
  }
}

export default ItemBox
