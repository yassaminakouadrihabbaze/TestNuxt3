<template>
  <div :class="['email-list-item', { 'greyed-out': !emailArchive }]" @click="handleEmailClick">
    <div class="email-list-item__checkbox-container">
      <input type="checkbox" :id="emailId" class="email-list-item__checkbox-container__checkbox" :checked="checked" @change="updateChecked" @click.stop />
    </div>
    <label :for="emailId" class="email-list-item__text" :class="{ 'marked-item': emailArchive }" :style="!emailArchive ? { 'font-weight': 'bold' } : null">
      {{ emailTitle }}
    </label>
    <!-- <label :for="emailArchive">{{ emailArchive }}</label> -->
  </div>
</template>

<script setup>
const { emailId, emailTitle, emailArchive, checked } = defineProps(['emailId', 'emailTitle', 'emailArchive', 'checked']);
const emit = defineEmits(['update:checked', 'email-selected', 'show-sidebar']);

const handleEmailClick = () => {
  emit('show-sidebar', emailId);
  emit('update:checked', emailId);
  emit('email-selected', emailId);

};

const toggleSelection = () => {
  emit('update:checked', !checked.value);
  emit('email-selected', emailId);
};

const updateChecked = (event) => {
  emit('update:checked', event.target.checked);
  emit('email-selected', emailId);
};
</script>

<style lang="scss" scoped>
/* Block: Email List Item */
.email-list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 0px;
  background-color: #ffffff;
  border-top: 1px solid #ccc;
  height: 40px;
  gap: 20px;

  /* Element: Checkbox Container */
  &__checkbox-container {
    margin-left: 24px;

    /* Element: Checkbox */
    &__checkbox {
      font-size: 24px;
      color: #333;
      width: 15px;
      height: 15px;
    }
  }

  /* Element: Text */
  &__text {
    font-size: 16px;
    color: #121829;
  }

  /* Modifier: Top of List Item Checkbox */
  &--top-of-list-item {
    .email-list-item__checkbox-container__checkbox {
      margin-left: 24px;
      width: 15px;
      height: 15px;
    }
  }

  /* Hover effect */
  &:hover {
    background-color: #D1E2FF;
    cursor: pointer;
  }
}
.greyed-out {
  background-color: #E5E7EB;
  /* Add your desired styles for a greyed-out appearance */
  // opacity: 0.5; /* Example: Reduce opacity */
  /* You can also apply a gray background, change text color, etc. */
}
</style>
