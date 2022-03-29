import React from 'react';
import { Icon } from 'semantic-ui-react';

import '../Curriculums_review.css';
import Disciplines_table from '../../common/Disciplines_table';

class Disciplines_section extends React.Component {
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
        const { disciplinesOurCurriculum } = this.props;

        return (
            <div>
                <div className="curriculum-review_hidden-content">
                    <button className="curriculum-review_hidden-content_btn" onClick={this.onShowElementClick}>
                        {this.state.showElementMeaning 
                            ? <Icon name='caret up' />
                            : <Icon name='caret down' />}
                        {this.state.showElementMeaning ? 'Свернуть' : 'Развернуть'}
                    </button>
                    <p className="curriculum-review_hidden-content_p">Перечень дисциплин УП</p>
                </div>
                <hr className='curriculum-review_hr' />

                <div className={this.state.showElementMeaning ? "" : "curriculum-review_hidden"}>
                    <Disciplines_table disciplinesOurCurriculum={disciplinesOurCurriculum} />
                </div> 
            </div>
        )
    }
}

export default Disciplines_section;