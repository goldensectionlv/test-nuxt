<template>
  <div
    style="position: relative"
    @mouseleave="filterModal = false"
  >
    <div
      class="filter zoom"
      @click="filterModal = !filterModal"
    >
      <AppText
        class="filter__text-hover"
        filter-text
      >
        {{ activeFilter.byWhat }}
      </AppText>

      <AppIcon
        style="margin: 0 0 2px 5px"
        expand-icon
        width="8px"
        height="8px"
        color="#B4B4B4"
      />
    </div>

    <transition
      :key="filterModal"
      name="slide"
      mode="out-in"
    >
      <div
        v-if="filterModal"
        class="filter__modal"
      >
        <AppText
          v-for="(filter, index) in filters"
          :key="filter.byWhat"
          class="hover zoom"
          :class="{'mt-6': index !== 0, 'active': filter.byWhat === activeFilter.byWhat}"
          filter-text

          style="display: flex; align-items: center; white-space: nowrap"
          @click.native="onClick(filter, products)"
        >
          {{ filter.byWhat }}

          <AppIcon
            v-show="!filter.min && filter.byWhat === activeFilter.byWhat"
            class="ml-4"
            height="8px"
            width="8px"
            up-icon
            :color="filter.byWhat === activeFilter.byWhat ? '' : '#B4B4B4'"
          />
          <AppIcon
            v-show="filter.min && filter.byWhat === activeFilter.byWhat"
            class="ml-4"
            height="8px"
            width="8px"
            down-icon
            :color="filter.byWhat === activeFilter.byWhat ? '' : '#B4B4B4'"
          />
        </AppText>
      </div>
    </transition>
  </div>
</template>

<script>
import AppText from '@/components/atoms/AppText'
import AppIcon from '@/components/atoms/AppIcon'
import { mapActions } from 'vuex'

export default {
  components: {
    AppText,
    AppIcon
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    products: {
      type: Array,
      default () { return [] }
    },
    activeFilter: {
      type: Object,
      default () { return { byWhat: 'По умолчанию' } }
    }
  },
  data () {
    return {
      filterModal: false,
      filters: [
        { byWhat: 'По умолчанию', key: 'id', min: false },
        { byWhat: 'По цене', key: 'price', min: false },
        { byWhat: 'По названию', key: 'name', min: false }
      ]
    }
  },
  methods: {
    ...mapActions('filters', ['filterBy']),

    onClick (filter, products) {
      this.filterBy({ filter, filteredArray: products, switchDirection: true })
      if (this.isMobile) {
        this.filterModal = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 130px;
  height: 36px;
  padding: 11px 16px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;

  &:hover {
    .filter__text-hover {
      color: #3F3F3F !important;
    }
  }

  &__modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: 1;
    bottom: 0;
    min-width: 130px;
    padding: 11px 16px;
    border-radius: 4px;
    background-color: white;
    transform: translateY(100%);
    user-select: none;
    cursor: pointer;
  }
}

.hover:hover {
  color: black !important;
}

.active {
  color: black !important;
}

.slide-enter-active {
  transition: 100ms;
}

.slide-enter {
  transform: translate(0, 140%);
  opacity: 1;
}
</style>
