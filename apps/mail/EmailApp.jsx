
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { mailService } from './services/mail-service.js'
import { EmailDetails } from './pages/EmailDetails.jsx'
import { EmailNavBar } from './cmps/EmailNavBar.jsx'
import { EmailInBox } from './cmps/EmailInBox.jsx'
import { EmailCompose } from './cmps/EmailCompose.jsx'


export class EmailApp extends React.Component {

    state = {
        mails:[],
        selectedMail: null

    }

    componentDidMount() {
       this.loadMails();
    }

    componentDidUpdate(prevProps){
        console.log(prevProps.match);
        console.log(this.props.match);

    }

   
    loadMails = () => {
        mailService.query().then(mails => {
            this.setState({ mails })
        })
    }

    getMailsForDispplay = () => {
        return this.state.mails;
    }

    onSelectMail=()=>{
        const selectedMail = this.state.mails.find(mail => mail.id === id);
        this.setState({ selectedMail });
    }

    onSetFilter = (filterBy) => {
        this.props.history.push(`/mail?filterBy=${filterBy}`)
        this.setState({ filterBy })
    }

    onDeleteMail=(mailId)=>{
        mailService.deleteMail(mailId);
        this.loadMails();
    }
    


    render() {
        const mails = this.getMailsForDispplay();
        const {selectedMail}=this.state;
        return (
            <Router>
            <div className="mail-app-container">
                <EmailNavBar />
                <main className="inbox">
                    <Switch>
                    <Route exact path="/mail/" render={(props) => <EmailInBox {...props} onSetFilter={ this.setFilter } mails={mails} onDeleteMail={this.onDeleteMail} />} /> 
                    <Route path="/mail/compose" render={(props) => <EmailCompose {...props} loadMails={ this.loadMails } />} />
                    <Route component={EmailDetails} path="/mail/:mailId"/>      
                    </Switch>
                </main>

            </div>
            </Router>
        )
    }
}
