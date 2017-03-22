# react-waterfall-w
react waterfal
Pinterst like Waterfall ( React Component). 
responce to the container change.
**If you find some bugs, or you have some ideas, please let me know(send a issue).**

## demo
http://37.139.22.91:3009/

## looks like: 
![Alt text](/example3.png)
![Alt text](/example2.png)
![Alt text](/example1.png)

## install
`npm install react-waterall-w --save`

## how to use
```javascript
import Waterfall from 'react-waterfall-w'
import WaterfallItem from 'your custom ItemComnent'
class example extends React.Component {
  render() {
    return (
      <Waterfall
      items={[...,the array of items]}
      renderItem={(item, onMeasured) => {return <WaterfallItem item={item} onMeasured={onMeasured}/>}}/>
    )
  }
}
```
## docs
The Waterfall accept 2 props: items and renderItem. 
#### items
items is the data source
#### renderItem
renderItem is a function that you can use to render your own ItemComponent.The argument *item* in renderItem is current item data, and the other argument *onMeasured* is a function you should invoke in your ItemComponent when final width is confirm (most times in componentDidMount, if you get a <img /> in your ItemComponent, you better invoke onMeasured method in img's onLoad), and invoke **onMeasured(itemWidth, itemHeight)**.

## example
1. check this out : https://github.com/weiyisheng/geminis-blog
2. npm install
3. npm run dev
4. enjoy: http://localhost:3009/
