import React from 'react';

const Message = (props)=> (
    <div className="col s12 m8 offset-m2 offset-l3">
        <div className="card-panel grey col lighten-5 z-depth-1">
            <div className="row valign-wrapper">
                <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">{props.speaks}</i></a>
                {props.speaks==='bot' &&
                <div className="col s2">
                    <a className="btn-floating btn large waves-effect waves-purple">
                        {props.speaks}
                    </a>
                </div>
                }
                <div className="col s10">
                    <span className="black-text">
                        {props.text}
                    </span>
                </div>

                {props.speaks==='me' &&
                <div className="col s2">
                    <a className="btn-floating btn large waves-effect waves-purple">
                        {props.speaks}
                    </a>
                </div>
                }
            </div>
        </div>
    </div>
);
export default Message;
