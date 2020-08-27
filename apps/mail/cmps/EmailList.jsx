

// export class EmailList extends React.Component{
// render()
// }
// export function PetList({ Modal, pets, removePet })

import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ mails, onDeleteMail, onSelectMail }) {

    return (
        <ul className="mail-list">
            {
                mails.map(mail =>
                    <li className={`mail-row ${mail.isRead ? 'read' : ''}`} onClick={() => onSelectMail} key={mail.id}>
                        <EmailPreview mail={mail} />
                        <button className="delete-btn" onClick={() => onDeleteMail(mail.id)}>x</button>
                    </li>)
            }
        </ul>
    )
}