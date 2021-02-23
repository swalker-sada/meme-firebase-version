import React, { Component } from "react";
import Gallery from "./Gallery";
import TempGen from "./TempGen";
import MemeLikesService from './services/tutorial.service';

export default class App extends Component {
  state = {
    images: [],
    selected: null,
    selectedImg: [],
    memesLikes: [],
    moreLikedImages: [],
  };

  handleImgClick = (e) => {
    this.setState({
      selectedImg: this.state.images.find(i => i.id === e.target.id),
    });
    this.toggleSelected()
  };

  chooseRandom = () => {
    this.setState({ selected: true, selectedImg: this.state.images[Math.floor(Math.random() * this.state.images.length)] })
  }

  toggleComponent = () => {
    const memeLikesInfo = this.state.memesLikes?.find(meme => meme?.memeId === this.state.selectedImg?.id)
    if (this.state.selected) {
      return <TempGen meme={this.state.selectedImg} memeInfo={memeLikesInfo} toggleSelected={this.toggleSelected} />;
    }
    else {
      return (
        <Gallery
          handleMoreLikes={this.chooseMoreLikeMemes}
          handleRandom={this.chooseRandom}
          images={this.state.images}
          memeLikesList={this.state.memesLikes}
          handleclick={this.handleImgClick}
        />
      );
    }
  };

  render() {
    return <div>
      {this.toggleComponent()}
    </div>;
  }

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected })
  }

  componentDidMount() {
    MemeLikesService.getAll().on("value", memes => {
      let memesLikes = [];

      memes.forEach(meme => {
        let key = meme.key;
        let { memeId, likes } = meme.val();
        memesLikes.push({ key, memeId, likes });
        this.setState({ memesLikes })
      });
    });
    fetch("https://api.imgflip.com/get_memes")
      .then((r) => r.json())
      .then((images) => {
        this.setState({ images: images.data.memes.filter((i) => i.box_count === 2) });
      });
  }
}
