import React, { Component } from 'react'
import ContactUs from './ContactUs'
import { ISubmitResult, IValues } from './Form';
interface IState {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

export default class ContactUsPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      name: "",
      notes: "",
      reason: ""
    };
  }
  handleNameChange = (name: string) => {
    this.setState({ name });
  };
  handleEmailChange = (email: string) => {
    this.setState({ email });
  };
  handleReasonChange = (reason: string) => {
    this.setState({ reason });
  };
  handleNotesChange = (notes: string) => {
    this.setState({ notes });
  };
  handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    await this.wait(1000); // simulate asynchronous web API call
    // return {
    //   errors: {
    //     email: ["Some is wrong with this"]
    //   },
    //   success: false
    // };
    return {
      success: true
      };
  };
  wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
   };
  render() {
    return (
      <div className="ContactUsPage">
        <div className="page-container">
          <h1>Contact Us</h1>
          <p>
            If you enter your details we'll get back to you as soon as
            we can.
        </p>
        <ContactUs onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}
