import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachOne} = props

  const {id, imageUrl, topic, title, avatarUrl, author} = eachOne
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="item-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />

        <div className="item-info">
          <p className="item-topic">{topic}</p>

          <p className="item-title">{title}</p>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
