import React, { Component } from 'React';

export class MainContent extends Component {

  renderSideBar = sidebarContent => {

  }

  renderMainContent = mainContent => {

  }

  renderFooter = footerContent => {

  }

  render() {
    const { sidebard, mainContent, footerContent } = this.props;
    return (
      <React.Fragment>
        <div className='sidebar-content'>
          {this.renderSideBar(sidebard)}
        </div>
        <div className='main-content'>
          {this.renderMainContent(mainContent)}
        </div>
        <div>
          {this.renderFooter(footerContent)}
        </div>
      </React.Fragment>
      
    )
  }

}