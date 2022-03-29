import React from 'react';
import { Icon } from 'semantic-ui-react';

import "./Curriculums_review2.css"

class Hidden_content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showElementMeaning: false };
    
        this.onShowElementClick = this.onShowElementClick.bind(this);
    }

    onShowElementClick = (prevState) => {
        this.setState(prevState => ({
            showElementMeaning: !prevState.showElementMeaning
        }))
    }
   

    render(){
        const { content, name } = this.props;
        let showElement = this.state.showElementMeaning ? content : null;

        return (
            <div>
                <div className="curriculum-review_hidden-content2">
                    <button className="curriculum-review_hidden-content_btn2" onClick={this.onShowElementClick}>
                        {this.state.showElementMeaning 
                            ? <Icon name='caret up' />
                            : <Icon name='caret down' />}
                        {this.state.showElementMeaning ? 'Свернуть' : 'Развернуть'}
                    </button>
                    <p>{name}</p>
                </div>
                <hr />
                {showElement}
            </div> 
        )
    }
}

export default Hidden_content;