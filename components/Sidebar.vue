<template>
  <div class="nav-menu">
    <div class="nav-menu__top">
      <div class="nav-menu__frame-164">
          <img src='~/assets/img/nuxt.png' class="nav-menu__logo"/>
          <!-- <Icon name="simple-icons:nuxtdotjs" /> -->
      </div>
      <div class="nav-menu__frame-419">
        <div class="nav-menu__frame-158">
          <div class="nav-menu__frame-420">
            <div class="nav-menu__icon nav-menu__icon--inbox">
              <Icon name="charm:inbox" />
            </div>
            <div class="nav-menu__text">
              <NuxtLink class="link-without-underline" to="/" >Inbox </NuxtLink>
            </div>
          </div>
          <div class="nav-menu__inbox-number">
            {{ Inbox }}
          </div>
        </div>
        <div class="nav-menu__frame-170">
          <div class="nav-menu__frame-420-archive">
            <div class="nav-menu__icon nav-menu__icon--archive">
              <Icon name="uil:archive-alt" />
            </div>
            <div class="nav-menu__text">
              <NuxtLink class="link-without-underline" to="/newIndex" >Archive </NuxtLink>
            </div>
          </div>
          <div class="nav-menu__archive-number">
            {{ Archive }}
          </div>
        </div>
      </div>
    </div>
    <div class="nav-menu__frame-170-last">
      <div class="nav-menu__frame-420-logout">
        <div class="nav-menu__icon nav-menu__icon--logout">
          <Icon name="ion:md-log-out" />
        </div>
        <div class="nav-menu__text">
          <NuxtLink class="link-without-underline" to="/logout" >Logout </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  const Inbox = useNumberOfInboxEmails();
  const Archive = useNumberOfArchivedEmails();  
</script>
  
<style lang="scss" scoped>
 /* SCSS for Nav Menu */

/* Nav Menu */
.nav-menu {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  gap: 173px;

   width: 260px;
   height: 100vh;

  background: #F8FAFC;
  border: 1px solid #E5E7EB;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
}

/* Top */
.nav-menu__top {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;

  margin: 0 auto;
  width: 260px;
  height: 160px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

/* Frame 164 */
.nav-menu__frame-164 {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
  gap: 40px;

  width: 260px;
  height: 20px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

/* Logo */
.nav-menu__logo {
  width: 60px;
  height: 40px;
  background: #F8FAFC;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

/* Frame 419 */
.nav-menu__frame-419 {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
  gap: 12px;

  width: 260px;
  height: 108px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

/* Frame 158 */
.nav-menu__frame-158 {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  width: 240px;
  height: 48px;

  background: #D6E2FB;
  border-radius: 54px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

/* Frame 420 */
.nav-menu__frame-420 {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  margin-left: 20px;
  width: 79px;
  height: 24px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

/* inbox-01 */
.nav-menu__icon {
  width: 24px;
  height: 24px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  
  &--inbox {
    &__icon {
      position: absolute;
      left: 8.33%;
      right: 8.33%;
      top: 16.67%;
      bottom: 16.67%;
      border: 2px solid #121829;
    }
  }

  &--archive {
    &__icon {
      position: absolute;
      left: 8.33%;
      right: 8.33%;
      top: 12.5%;
      bottom: 12.5%;
      border: 2px solid #4B5563;
    }
  }

  &--logout {
    &__icon {
      position: absolute;
      left: 8.33%;
      right: 8.33%;
      top: 12.5%;
      bottom: 12.5%;
      border: 2px solid #4B5563;
    }
  }
}

/* Inbox text */
.nav-menu__text {
  width: 43px;
  height: 21px;
  font-family: 'Inter';
  font-style: bold;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #121829;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

/* Number '12' */
.nav-menu__inbox-number,
.nav-menu__archive-number {
  width: 17px;
  height: 21px;
  font-family: 'Preevio';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  margin-right: 20px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

/* Frame 170 */
.nav-menu__frame-170 {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  gap: 12px;

  width: 240px;
  height: 24px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

/* Frame 420 for Archive */
.nav-menu__frame-420-archive {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  margin-left: 20px;
  width: 94px;
  height: 24px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

}

/* Archive text */
.nav-menu__archive {
  width: 58px;
  height: 21px;
  font-family: 'Preevio';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #4B5563;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  
}

/* Frame 170 (Last section) */
.nav-menu__frame-170-last {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  gap: 12px;

  margin: 0 auto;
  width: 260px;
  height: 48px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

/* Frame 420 for Logout */
.nav-menu__frame-420-logout {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 212px;
  height: 24px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;
}

/* Logout text */
.nav-menu__logout {
  width: 55px;
  height: 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #4B5563;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.link-without-underline {
  text-decoration: none;
  color: inherit; /* Optionally, preserve the link's original color */
  /* Add any other styling as needed */
}
</style>
