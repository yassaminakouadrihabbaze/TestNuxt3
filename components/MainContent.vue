<!-- MainContent -->
<template>
  <div class="main-content">
    <div class="main-content__frame">
      <div class="main-content__frame__inbox">Inbox</div>
    </div>
    <OnTopOfList :selected="numOfSelectedEmails" @select-all="selectAllEmails" @mark-as-read="markAsRead" @archive="archive" />
    <EmailListItem
      v-for="email in emails"
      :key="email.id"
      :emailId="email.id"
      :emailTitle="email.title"
      :emailArchive="email.marked"
      :checked="email.checked"
      @show-sidebar="showSidebar"
      @update:checked="email.checked = $event; updateNumOfSelectedEmails()"
    />
    <EmailSidebar
      v-if="selectedEmail"
      :emailId="selectedEmail.id"
      :emailTitle="selectedEmail.title"
      :emailContent="selectedEmail.content"
      :emailArchive="selectedEmail.marked"
      :checked="selectedEmail.checked"
      @close-sidebar="hideSidebar"
      @mark-as-read="markAsRead"
      @archive="archive"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pageTitle = ref('Inbox');
const numOfSelectedEmails = ref(0);
const emails = useAvailbleEmails();
const archivedEmails = useArchivedEmails();
const markedEmails = useMarkedEmails();
const selectedEmails = ref([]);
const numberOfArchived = useNumberOfArchivedEmails();
const numberOInBoxEmails = useNumberOfInboxEmails();

const updateNumOfSelectedEmails = () => {
  numOfSelectedEmails.value = emails.value.filter((email) => email.checked).length;
  selectedEmails.value = emails.value.filter((email) => email.checked);
  console.log('selected', numOfSelectedEmails);
  console.log('selected value', selectedEmails.value);
};

const selectedEmail = ref(null);

function showSidebar(clickedEmail) {
  selectedEmail.value = emails.value.find((email) => email.id === clickedEmail);
  console.log('emails', emails.value);
  console.log('selected email', emails.value.find((email) => email.id === clickedEmail));
}

function hideSidebar(clickedEmail) {
  selectedEmail.value = null;
  const selectedE = emails.value.find((email) => email.id === clickedEmail);
  selectedE.checked = false;
  // console.log('emails', emails.value);
  // console.log('selected email', emails.value.find((email) => email.id === clickedEmail));
  selectedEmails.value = [];
  numOfSelectedEmails.value = 0;
}

const selectAllEmails = (selectAll) => {
  console.log('selectAll', selectAll);
  emails.value.forEach((email) => {
    email.checked = selectAll;
  });
  updateNumOfSelectedEmails();
};

const handleEmailSelected = (emailId) => {
  const email = emails.value.find((email) => email.id === emailId);
  if (email) {
    email.checked = !email.checked;
  }
};


const markAsRead = () => {
  const newlyMarkedEmails = [];
  emails.value.forEach((email) => {
    if (email.checked && !email.marked) {
      email.marked = true;
      newlyMarkedEmails.push(email);
    }
     email.checked = false;
  });

  // Add newly archived emails to the archivedEmails array
  markedEmails.value.push(...newlyMarkedEmails);

  // Remove the newly archived emails from the main emails array
  console.log('rest emails', emails.value.length);
  console.log('marked emails', markedEmails.value.length);
  // Update the number of archived emails
  // Clear the selected emails
  selectedEmails.value = [];
  selectedEmail.value = 0;
  numOfSelectedEmails.value = 0;
};

const archive = () => {
  const newlyArchivedEmails = [];
  emails.value.forEach((email) => {
    if (email.checked && !email.archived) {
      email.archived = true;
      newlyArchivedEmails.push(email);
    }
  });

  // Add newly archived emails to the archivedEmails array
  archivedEmails.value.push(...newlyArchivedEmails);

  // Remove the newly archived emails from the main emails array
  emails.value = emails.value.filter((email) => !email.archived);
  console.log('rest emails', emails.value.length);
  console.log('archived emails', archivedEmails.value.length);
  // Update the number of archived emails
  numberOfArchived.value = archivedEmails.value.length;
  numberOInBoxEmails.value = emails.value.length;
  // Clear the selected emails
  selectedEmails.value = [];
  numOfSelectedEmails.value = 0;
};
</script>

<style lang="scss" scoped>
.main-content {
  flex: 1;
  background-color: #ffffff;
  margin: 0;
  width: 100vh;
  padding-top: 0;
  // padding: 20px;
  // padding-left: 60px;
  // padding-right: 60px;
}

.main-content__frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 24px;
  margin-top: 14px;
  margin-bottom: 32px;
  height: 41px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  &__inbox {
    height: 41px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 41px;
    color: #121829;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
}

.email-sidebar::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  display: none;
}

.email-sidebar.isOpen::before {
  display: block;
}

.email-list-item {
  /* Auto layout */
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 12px;
  height: 60px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
