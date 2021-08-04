<template>
  <div
    style="position: relative"
    @mouseleave="filterModal = false"
  >
    <div
      class="filter"
      @click="filterModal = !filterModal"
    >
      <AppText
        class="filter__text-hover"
        filter-text
      >
        {{ activeFilter }}
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
          v-for="(filter, index) in filtersArray"
          :key="filter.byWhat"
          class="hover"
          :class="{'mt-6': index !== 0, 'active': filter.byWhat === activeFilter}"
          filter-text

          style="display: flex; align-items: center; white-space: nowrap"
          @click.native="onClick(filter, products)"
        >
          {{ filter.byWhat }}

          <AppIcon
            v-show="!filter.min && filter.byWhat === activeFilter"
            class="ml-4"
            height="8px"
            width="8px"
            up-icon
            :color="filter.byWhat === activeFilter ? '' : '#B4B4B4'"
          />
          <AppIcon
            v-show="filter.min && filter.byWhat === activeFilter"
            class="ml-4"
            height="8px"
            width="8px"
            down-icon
            :color="filter.byWhat === activeFilter ? '' : '#B4B4B4'"
          />
        </AppText>
      </div>
    </transition>
  </div>
</template>

<script>
import AppText from '@/components/atoms/AppText'
import AppIcon from '@/components/atoms/AppIcon'

export default {
  components: {
    AppText,
    AppIcon
  },
  props: {
    filtersArray: {
      type: Array,
      default () {
        return [{
          byWhat: 'По умолчанию',
          min: false
        }]
      }
    },
    filterFunction: {
      type: Function,
      default: () => {}
    },
    activeFilter: {
      type: String,
      default: 'По умолчанию'
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    products: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
      filterModal: false
    }
  },
  methods: {
    onClick (filter, products) {
      this.filterFunction({ filter, products })
      console.log(this.isMobile)
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
