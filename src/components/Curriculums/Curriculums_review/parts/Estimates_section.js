import React from 'react';
import { Icon } from 'semantic-ui-react';

import '../Curriculums_review.css';
import Estimates_table from '../../common/Estimates_table';

class Estimates_section extends React.Component {
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
        const { skills, estimates, disciplinesOurCurriculum } = this.props;

        return (
            <div>
                <div className="curriculum-review_hidden-content">
                    <button className="curriculum-review_hidden-content_btn" onClick={this.onShowElementClick}>
                        {this.state.showElementMeaning 
                            ? <Icon name='caret up' />
                            : <Icon name='caret down' />}
                        {this.state.showElementMeaning ? 'Свернуть' : 'Развернуть'}
                    </button>
                    <p className="curriculum-review_hidden-content_p">Перечень оценок выделенных умений</p>
                </div>
                <hr className='curriculum-review_hr' />

                <div className={this.state.showElementMeaning ? "" : "curriculum-review_hidden"}>
                    <Estimates_table    disciplinesOurCurriculum={disciplinesOurCurriculum}
                                        estimates={estimates} skills={skills} />
                </div>
            </div>
        )
    }
}

export default Estimates_section;