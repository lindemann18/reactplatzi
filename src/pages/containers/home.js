import React,{Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errors/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component{
  state = {modalVisible:false, handleError:false, media: null}

  handleCloseModal = (e)=>{

    this.setState({
      modalVisible:false
    });
  }

  handleOpenModal = (media)=>{
    console.log(media);
      this.setState({
        ...this.state,
        modalVisible: true,
        media
      })
  }

  componentWillReceiveProps(e){
    console.log(e);
  }

  componentDidMount()
  {
    document.addEventListener("keydown",this.handleKeyPress);
  }

  componentWillUnmount()
  {
    document.removeEventListener("keydown",this.handleKeyPress);
  }

  handleKeyPress = (e)=>
  {
    if(e.keyCode==27 && this.state.modalVisible){
      this.handleCloseModal();
    }
  }

  render()
  {

    return(
        <div className="Home">
          <HandleError>
              <HomeLayout>
                  <Related />
                  <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal}/>
                  {
                    this.state.modalVisible &&
                    <ModalContainer>
                      <Modal handleClick={this.handleCloseModal} >
                        <VideoPlayer autoplay src={this.state.media.src} title={this.state.media.title} />
                      </Modal>
                    </ModalContainer>
                  }

              </HomeLayout>
          </HandleError>
        </div>
    );
  }
}

export default Home;
