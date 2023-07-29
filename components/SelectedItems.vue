<!-- selectedListItem -->
<template>
    <div class="email-list-item" @click="toggleSelection">
      <input type="checkbox" :id="emailId" class="email-list-item__checkbox" :checked="checked" @change="updateChecked" />
      <label :for="emailId" class="email-list-item__title">{{ emailTitle }}</label>
      <label :for="emailArchive" >{{ emailArchive }}</label>

    </div>
</template>
  
<script setup>
  const { emailId, emailTitle,emailArchive, checked } = defineProps(['emailId','emailTitle','emailArchive', 'checked']);
  
</script>