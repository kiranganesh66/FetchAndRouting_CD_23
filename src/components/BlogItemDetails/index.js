import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'

// import {async} from 'fast-glob'

class BlogItemDetails extends Component {
  state = {updatedDat: [], isLode: true}

  componentDidMount() {
    this.detailsBlog()
  }

  detailsBlog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({updatedDat: updatedData, isLode: false})
  }

  listDetailsView = () => {
    const {updatedDat} = this.state
    const {title, imageUrl, content, avatarUrl, author} = updatedDat

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLode} = this.state
    return (
      <div className="blog-container">
        {isLode ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.listDetailsView()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
