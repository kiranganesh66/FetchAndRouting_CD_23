import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

// import {async} from 'fast-glob'

class BlogList extends Component {
  state = {blogList: [], isLoad: true}

  componentDidMount() {
    this.blogList()
  }

  blogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachOne => ({
      id: eachOne.id,
      title: eachOne.title,
      imageUrl: eachOne.image_url,
      avatarUrl: eachOne.avatar_url,
      author: eachOne.author,
      topic: eachOne.topic,
    }))
    this.setState({blogList: updatedData, isLoad: false})
  }

  render() {
    const {blogList, isLoad} = this.state

    return (
      <div>
        {isLoad ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogList.map(eachOne => (
            <BlogItem key={eachOne.id} eachOne={eachOne} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
