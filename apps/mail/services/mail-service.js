
import { storageService } from '../../../services/storage-service.js'

export const mailService = {
    query,
    getById,
    addMail,
    deleteMail,
    getNextPrev,
    markMailAsRead

}

var mails = [
    {
        subject: 'hi', body: 'how are you?', isRead: true, sentAt: Date.now(), sentBy: 'yosi', id: makeId()
    },

    {
        subject: 'mango', body: 'do you like mango?', isRead: false, sentAt: Date.now(), sentBy: 'kevin', id: makeId()
    },
    {
        subject: 'pineapple', body: 'do you like pineapple', isRead: false, sentAt: Date.now(), sentBy: 'george', id: makeId()
    },
    {
        subject: 'hi', body: 'answer me', isRead: false, sentAt: Date.now(), sentBy: 'me', id: makeId()
    },
    {
        subject: 'nba playoff', body: 'who will win?', isRead: false, sentAt: Date.now(), sentBy: 'me', id: makeId()
    },
    {
        subject: 'lala', body: 'sing lalala', isRead: true, sentAt: Date.now(), sentBy: 'kevin', id: makeId()
    }


];

window.theMails = mails;

function query() {
    queryStorage();
    return Promise.resolve(mails)
}

function deleteMail(mailId) {
    mails = mails.filter(mail => mail.id !== mailId);
    _saveMailsToStorage();

}

function queryStorage() {
    const storageMails=storageService.loadFromStorage('myMails')
    if(storageService){
        mails=storageMails;
    }
}

function countUnreadMails() {

}

function markMailAsRead(mailId) {
    const mailIdx = mails.findIndex(mail => mail.id === mailId)
    mails[mailIdx].isRead = true;
    _saveMailsToStorage();
}

function addMail(mail) {
    const mailToAdd = {
        ...mail,
        id: makeId(),
        mailAdress: createAdress(mail.sentBy),
        sentAt: Date.now()
    }
    mails = [mailToAdd, ...mails]
    window.theMails = mails
    _saveMailsToStorage();
}

function createAdress(name) {
    return `${name}@gmail.com`;
}

function getById(mailId) {
    const mail = mails.find(mail => mail.id === mailId)
    return Promise.resolve(mail)
}

function getNextPrev(mailId) {
    const mailIdx = mails.findIndex(mail => mail.id === mailId)
    const nextMail = mails[mailIdx + 1] || mails[0]
    const prevMail = mails[mailIdx - 1] || mails[mails.length - 1]
    return {
        prevMailId: prevMail.id,
        nextMailId: nextMail.id
    }
}


function _saveMailsToStorage() {
    storageService.saveToStorage('myMails', mails);
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


