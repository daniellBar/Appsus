


import { mailService } from '../services/mail-service.js '
const { Link } = ReactRouterDOM

export class EmailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail();
    }

    componentDidUpdate(prevProps) {

        if (prevProps.match.params.mailId !== this.props.match.params.mailId) {
            this.loadMail();
        }
    }

    loadMail() {
        const mailId = this.props.match.params.mailId;
        mailService.getById(mailId)
            .then(mail => this.setState({ mail }));
            mailService.markMailAsRead(mailId);
    }


    render() {
        const { mail } = this.state;
        if (!mail) return <div>Loading....</div>
        const { prevMailId, nextMailId } = mailService.getNextPrev(mail.id)
        return (

            <div className="mail-details">
                <div className="mail-details-subject">{mail.subject} </div>
                <div className="mail-sender-info">
                    <div className="mail-sender-name">{mail.sentBy}</div>
                    <div className="mail-sender-address">daniel@gmail.com</div>
                </div>
                <div className="mail-details-body">{mail.body}</div>
                <div className="prev-next-btns">
                    <Link className="btn-prev fa fa-angle-left" to={`/mail/${prevMailId}`}></Link>
                    <Link className="btn-next fa fa-angle-right" to={`/mail/${nextMailId}`}></Link>
                </div>
            </div>
        )
    }

}
