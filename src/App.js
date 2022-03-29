import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid, Menu } from 'semantic-ui-react';

import './App.css';

import PageLink from './components/PageLink/PageLink';

import curriculums from './data/curriculums';
import disciplines from './data/disciplines';
import estimates from './data/estimates';
import skills from './data/skills';
import dataForVisualization from './data/dataForVisualization';
import groupSkills from './data/groupSkills';
import skillsLinkGroupSkills from './data/skillsLinkGroupSkills';


class App extends Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    // console.log(dataForVisualization)
    return (
      <BrowserRouter>
        <div className='app_components'>
          <div className='app_menu'>
            <Menu fluid vertical tabula>
              <Menu.Item
                name='О МЕТОДЕ UGVA'
                active={activeItem === 'О МЕТОДЕ UGVA'}
                onClick={this.handleItemClick}
                href="/aboutugva"
              />
              <Menu.Item
                name='УЧЕБНЫЕ ПЛАНЫ'
                active={activeItem === 'УЧЕБНЫЕ ПЛАНЫ'}
                onClick={this.handleItemClick}
                href="/curriculums"
              />
              <Menu.Item
                name='СВОБОДНАЯ ВИЗУАЛИЗАЦИЯ'
                active={activeItem === 'СВОБОДНАЯ ВИЗУАЛИЗАЦИЯ'}
                onClick={this.handleItemClick}
                href="/freevisualization"
              />
            </Menu>
          </div>
          
          <div className='app_content'>
            <PageLink disciplines={disciplines} curriculums={curriculums} skills={skills}
                      estimates={estimates} dataForVisualization={dataForVisualization}
                      groupSkills={groupSkills} skillsLinkGroupSkills={skillsLinkGroupSkills} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
