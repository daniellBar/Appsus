
const { Link } = ReactRouterDOM

export function EmailPreview({ mail }){




    return (
        <Link to={`/mail/${mail.id}`}>
            <div className="mail-preview">
                <div className="mail-sender">{mail.sentBy}</div>
                <div className="mail-subject">{mail.subject}</div>
                <div className="mail-body">{mail.body}</div>
                <div className="mail-sent-at">{mail.sentAt}</div>
            </div>
        </Link>
    )

}










