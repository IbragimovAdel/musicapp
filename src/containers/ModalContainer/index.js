import React from 'react'
import ReactDOM from 'react-dom'

export default class Modal extends React.Component {
    render() {
        return ReactDOM.createPort(<div>
            {this.props.children}
        </div>,documnet.getElementById('modal-root'))
    }
}