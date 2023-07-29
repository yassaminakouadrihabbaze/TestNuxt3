export const useAvailbleEmails = () => useState("availble-Emails",() => [
  { id: 1, title: 'You have received a message from jhon J', checked: false, read: false, archived: false, marked: true,
content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.'},
  { id: 2, title: 'Have a look at the latest LinkedIn job offers', checked: false, read: false, archived: false, marked: false,
  content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.'},
  { id: 3, title: 'Your account needs to be secured!', checked: false, read: false, archived: false, marked: true, 
  content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.'},
  { id: 4, title: 'You have received a message from sadok abdelbasset', checked: false, read: false, archived: false, marked: true,
  content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.' },
  { id: 5, title: 'Have a look at the latest LinkedIn job offers', checked: false, read: false, archived: false, marked: true,
  content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.' },
  { id: 6, title: 'Your account needs to be secured!', checked: false, read: false, archived: false, marked: false,
  content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.' },
  { id: 7, title: 'You have received a message from sadok abdelbasset', checked: false, read: false, archived: false, marked: false,
  content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.' },
  { id: 8, title: 'Have a look at the latest LinkedIn job offers', checked: false, read: false, archived: false, marked: true,
  content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.' },
  { id: 9, title: 'Your account needs to be secured!', checked: false, read: false, archived: false, marked: false,
  content: 'Dear Team I hope this email finds you well. I wanted to inform you all about our upcoming team meeting scheduled for July 31st, 2023, at 10:00 AM in the conference room.' },
  // Add more emails here...
]) ;
export const useArchivedEmails = () => useState("archived-Emails",() => []);
export const useMarkedEmails = () => useState("markedarchived-Emails",() => []);
export const useNumberOfArchivedEmails = () => useState("number-of-archived-emails",() => 0)
export const useNumberOfInboxEmails = () => useState("number-of-archived-emails",() => 0)


// nzid hna archive emails w inbox emails 