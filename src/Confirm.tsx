import React, { Component } from 'react';
import "./Confirm.css";
const props = {
  title: "React and TypeScript"
};
interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}
export default class Confirm extends Component<IProps> {
  static defaultProps ={
    cancelCaption: 'Cancel',
    okCaption: 'Okay'
  }
  handleOkClick = () =>{
    this.props.onOkClick();
  }
  handleCancelClick = () => {
    this.props.onCancelClick();
  }
  render() {
    return (
      <div className={this.props.open ? "confirm-wrapper confirm-visible": "confirm-wrapper"}>
        <div className="confirm-container">
          <div className="confirm-title-container">
            <div className="confirm-title-container">
              <span>{this.props.title}</span>
            </div>
          </div>
          <div className="confirm-content-container">
            <p>{this.props.content}</p>
          </div>
          <div className="confirm-buttons-container">
            <button className="confirm-cancel" onClick={this.handleCancelClick}>{this.props.cancelCaption}</button>
            <button className="confirm-ok" onClick={this.handleOkClick}>{this.props.okCaption}</button>
          </div>
        </div>
      </div>
    )
  }
}
