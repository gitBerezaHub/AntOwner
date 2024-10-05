<script setup lang="ts">
import { useAppState } from '@/store/AppState'

const store = useAppState()
const openSection = (sectionName: string) => {
  store.openedSection = sectionName
}
</script>

<template>
  <div class="wrapper">
    <div class="main">
      <ul class="nav-list">
        <li class="nav-list__item" @click="openSection('your-profile')">Your
          Profile
        </li>
        <li class="nav-list__item" @click="openSection('news-feed')">News Feed
        </li>
        <li class="nav-list__item" @click="openSection('companies')">Companies
        </li>
        <li class="nav-list__item" @click="openSection('friends')">Friends</li>
      </ul>
      <ul class="nav-list">
        <li class="nav-list__item leave">Leave</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  background-color: #D9D9D9;
  width: 16vw;
  height: 90vh;
  border-radius: 16px;
  margin-left: 28px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90%;
    width: 100%;

    .nav-list {

      .nav-list__item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 18px;
        width: 150%;
        height: 20%;
        border-radius: 16px;

        &:hover {
          background-color: #C1C1C1;
        }
      }
    }
  }
}
</style>
