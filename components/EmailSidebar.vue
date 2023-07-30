<!-- EmailSidebar -->
<template>
  <div class = "email-sidebar-overlay"  @click="closeSidebar" >
  <div class="email-sidebar" :class="{ isOpen: emailId }" @click.stop>

    <div class="button-container">
          <div class="left-button"  @click="closeSidebar">
            <div class="icon">
              <Icon name="material-symbols:close" />
            </div>
            <div class="Sidebar__button--title" >
            <button class="sidebar__button" @click="closeSidebar" ref="escapeButton">Close (esc)</button>
          </div>
          </div>
  
          <div class="right-buttons">
            <div class="right-button">
              <div class="icon">
                <Icon name="ic:baseline-mark-email-read" />
              </div>
              <div class="Sidebar__button--title--markAsRead">
              <button class="sidebar__button" @click="markAsRead" ref="markAsReadButton">Mark as read (r)</button>
            </div>
            </div>
  
            <div class="right-button">
              <div class="icon">
                <Icon name="charm:inbox" />
              </div>
              <div class="Sidebar__button--title">
              <button class="sidebar__button" @click="archive" ref="archiveButton">archive (a)</button>
            </div>
            </div>
          </div>
        </div>


    <div class="email-details" v-if="emailId">
      <h2>{{ emailTitle }}</h2>
      <!-- Display other email details here -->
      <div>{{ emailContent }}</div>
    </div>
    
  </div>
</div>
</template>

<script setup>

const { emailId, emailTitle,emailContent,emailArchive, checked } = defineProps(['emailId','emailTitle','emailContent','emailArchive', 'checked']);
 const emit = defineEmits(['close-sidebar', 'archive', 'mark-as-read']);
 const archiveButton = ref(null); // Reference to the archive button element
 const markAsReadButton = ref(null); // Reference to the mark as read button element
 const escapeButton = ref(null); // Reference to the mark as read button element

 const route = useRoute();

const activePage = computed(() => {
  const path = route.path;
  return path === '/' ? 'inbox' : 'archive';
});

 const closeSidebar = () => {
   emit('close-sidebar');
};

 const archive = () => {
   emit('archive');
 };

const markAsRead = () => {
   emit('mark-as-read');
 };

 onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

// Event listener callback
const handleKeyDown = (event) => {
  // Check if the pressed key is "a" (case-insensitive)
  if (event.key.toLowerCase() === 'a') {
    // Check if the archiveButton ref is available and click it
    if (archiveButton.value) {
      archiveButton.value.click();
    }
  }

  if (event.key.toLowerCase() === 'r') {
    // Check if the archiveButton ref is available and click it
    if (markAsReadButton.value) {
        markAsReadButton.value.click();
    }
  }

  if (event.key.toLowerCase() === 'Escape') {
    // Check if the archiveButton ref is available and click it
    if (escapeButton.value) {
      escapeButton.value.click();
    }
  }
}
</script>

<style lang="scss" scoped>
.email-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 752px;
  background-color: white;
  padding: 32px;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* Add any additional styles for the container */
  }
  
  .left-button,
  .right-buttons {
    display: flex;
    align-items: center;
    gap:40px;
  }
  
  .left-button {
    margin-right: auto;
    gap: 12px;
  }
  
  .right-button {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;
    cursor: pointer;
  }

.actions-bar {
  width: 688px;
  height: 19px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}

.action-close_div {
  width: 105px;
  height: 19px;
  margin-left: 0px;
  padding-right: 0px;
}

.action-div {
  /* Remove the width property to allow the div to take its natural width */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  margin-right: 0px;
  padding: 0px;
}

/* Adjust the margin to push buttons to the left and right sides */
.action-archive {
  margin-left: 0;
  margin-right: auto;
}

.action-mark-as-read {
  margin-left: auto;
  margin-right: 0;
}

.action-archive{
 width: 102px;
 height: 19px ;
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: 20px;
 padding: 0px;
}

.content-container{
  width: 688px;
  height: 100px ;
  display:flex;
  flex-direction:column;
  gap: 20px;
}

.emailtitle{
  width: 688px;
  height: 26px ;
}

.email-title-text{
  font-family: 'Preevio',sans-serif;
}

.email-details {
  margin-bottom: 20px;
}

.sidebar-actions {
  display: flex;
  justify-content: space-between;
}

.isOpen {
  transform: translateX(0);
}


.email-sidebar-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(168, 162, 243, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Set a high z-index to ensure the overlay is above other content */
}

.sidebar__button {
    color:  black; 
    background-color:  white;/* Set the text color to black */
     border: none;
    cursor: pointer;
  }

  .Sidebar__button--title {
    width: 79px;
    height: 24px;
    margin-right: 12px;
  }
  .Sidebar__button--title--markAsRead {
    width: 110px;
    height: 24px;
    margin-right: 12px;
  }
</style>
