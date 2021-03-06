  import React     from 'react';
import {PureComponent} from 'react';
import PropTypes   from 'prop-types';
import './media.css';

class Media extends PureComponent{
  constructor(props)
  {
    super(props);
    this.state = {
      author:props.author
    }
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () =>{
    this.props.openModal(this.props);
  }

  render(){
    const styles = {
      container:{
        fontSize:14,
        color:'#44546b',
        cursor:'pointer',
        width:260,
        border: '2px solid red'
      }
    }
    return(
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
              src={this.props.cover}
              alt=""
              width={260}
              height={160}
              className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  author:PropTypes.string,
  type: PropTypes.oneOf(['video','audio'])
}

export default Media;
