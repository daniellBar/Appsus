import { mailService } from '../services/mail-service.js '


// form includes: subject,body,name

export class EmailCompose extends React.Component {

    state = {
        mail: {}
    }

    onSendMail = (ev) => {
        ev.preventDefault();
        console.log(this.state.mail);
        mailService.addMail(this.state.mail)
        this.props.history.push('/mail');
        this.props.loadMails();
    }

    onInputChange = (ev) => {
        this.setState({ mail: { ...this.state.mail, [ev.target.name]: ev.target.value } })
    }

    render() {

        return (
            <div className='compose-mail'>
                <div className="compose-mail-header">New Message</div>
                <form onSubmit={this.onSendMail}>

                    <div className="compose-mail-to-box">
                        <label htmlFor="compose-mail-to">to:</label>
                        <input id="compose-mail-to"
                            placeholder="" type="text"
                        // onChange={this.onInputChange}
                        />
                    </div>

                    <div className="compose-mail-from-box">
                        <label htmlFor="compose-mail-from">your name:</label>
                        <input name="sentBy" id="compose-mail-from"
                            placeholder="" type="text"
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="compose-mail-subject-box">
                        <label htmlFor="compose-mail-subject">subject:</label>
                        <input name="subject" id="compose-mail-subject"
                            placeholder=""
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="compose-mail-body-box">
                        < textarea name="body" className="compose-mail-body"
                            placeholder="type your message"
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="compose-mail-footer">
                        <button type="submit">send</button>
                        <button className="delete-new-message fas fa-trash"></button>
                    </div>
                </form>
            </div>

        )
    }
}



