# react-waterfall-w
react waterfal
Pinterst like Waterfall ( React Component). 

## install
`npm install react-waterall-w --save`

## how to use
```javascript
import Waterfall from 'react-waterfall-w' <br />
class example extends React.Component {
  render() {
    return (
      <Waterfall
      items={[...,the array of items]}
      renderItem={(item, onMeasured) => {return the Element of item}}/>
    )
  }
}
```
## docs
The Waterfall accept 2 props: items and renderItem. 
### items
items is the data source
### renderItem
renderItem is a function that you can use to render your own ItemComponent.The argument *item* in renderItem is current item data, and the other argument *onMeasured* is a function you should invoke in your ItemComponent when final width is confirm (most times in componentDidMount, if you get a <img /> in your ItemComponent, you better invoke onMeasured method in img's onLoad), and invoke **onMeasured(itemWidth, itemHeight)**.
