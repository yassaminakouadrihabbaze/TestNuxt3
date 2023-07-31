<!-- OnTopOfList -->
<template>
<div class="top__nav">
    <div class="frame-422">
        <div class="checkbox">
          <input
            type="checkbox"
            :id="selectAllId"
            class="top-of-list-item__checkbox"
            v-model="selectAllChecked"
            @click="toggleSelectAll"
            />
            Emails selected ({{ selected}})
        </div>
        <div class="actions-container">
         <div class="TopOfListButtons" 
         @click="markAsRead" 
         ref="markAsReadButton">Mark as read (r)
        </div>
         <div class="TopOfListButtons" 
         @click="archive" 
         ref="archiveButton">Archive (a)</div>
        </div>
      </div>
</div>
</template>

  <script setup>
  const { selected } = defineProps(['selected']);
  const selectAllId = 'select-all-checkbox';
  const selectAllChecked = ref(false);
  const emit = defineEmits(['select-all', 'mark-as-read', 'archive']);
  const archiveButton = ref(null); // Reference to the archive button element
  const markAsReadButton = ref(null);

  const toggleSelectAll = () => {
    selectAllChecked.value = !selectAllChecked.value;
    emit('select-all', selectAllChecked.value);
  };
  
  const markAsRead = () => {
    emit('mark-as-read');
  };
  
  const archive = () => {
    emit('archive');
  };


  // Add event listener on component mount
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
    if (archiveButton.value) {
        markAsReadButton.value.click();
    }
  }
}
</script>

<style lang="scss" scoped>
.top__nav {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  margin-bottom: 24px;
  padding: 0px;
}
.frame-422 {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px ;
  gap: auto;
  width: 1021px;
  height: 20px;
  flex: none;
  order: 0;
  flex-grow: 1;
}

.checkbox {
  /* Auto layout */
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  height: 20px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.top-of-list-item__checkbox {
    margin-right: 10px; 
    width: 15px;
    height: 15px;
  }

.actions-container{
  margin: 0 auto;
  margin-right: 0px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction:row;
  gap: 40px;
}

.TopOfListButtons{
  width: 125px;
  cursor: pointer;
}

</style>