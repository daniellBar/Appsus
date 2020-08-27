
import { EmailInboxNav } from './EmailInboxNav.jsx'
import { EmailList } from './EmailList.jsx'

export function EmailInBox({ onSetFilter, mails, onDeleteMail }) {

    return (
        <div>
            <EmailInboxNav onSetFilter={onSetFilter} />
            <EmailList mails={mails} onDeleteMail={onDeleteMail} />
        </div>

    )
}