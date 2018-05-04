import React, { Component } from 'react';
import shuffle from 'lodash/shuffle';
import FlipMove from 'react-flip-move';
import './List.css';

class ListItem extends Component {
  render() {
    return (
      <li>
        <div class="card">

          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src={this.props.avatar} alt="Placeholder"/>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{this.props.name}</p>
                <p class="subtitle is-6">@{this.props.owner}</p>
              </div>
            </div>

            <div class="content">
              {this.props.description ||  `no description `}
              <br/>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
    };

    this.shuffleItems = this.shuffleItems.bind(this);
  }

  // We are going to have more usefull functions, like sort by date, name, and other fields. 
  // This is just a poc
  shuffleItems() {
    this.setState({
      items: shuffle(this.state.items)
    });
  }

  componentDidMount(){

    // Change this to correct end point
    fetch(`https://api.github.com/users/ViniciusLovato/repos`)
      .then( response => response.json())
      .then( data => {
        const items = data.map((elem) => { 
          return { 
            id: elem.id,
            name: elem.name, 
            description: elem.description,
            owner: elem.owner.login,
            avatar: elem.owner.avatar_url 
          }
        })

        this.setState({ items });
      });
  }

  renderListItems() {
    return this.state.items.map( (item, index) => {
      return (
        <ListItem key={item.id} {...item}/>
      )
    })
  }

  render() {
    return (   
      <div className="list">
        <button className="button is-primary is-outlined"onClick={this.shuffleItems}>
          Shuffle!
        </button>
        <FlipMove
            staggerDurationBy="30"
            duration={500}
            typeName="ul"
          >
          { this.renderListItems() }
        </FlipMove>
      </div>  
    );
  }
}

export default List;

