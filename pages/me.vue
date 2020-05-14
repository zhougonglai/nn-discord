<template lang="pug">
SideSlider
  .scroller(key="community")
    .list.padding.my-1
      n-link(:to="{name: 'me'}" v-slot="{ href, isActive }")
        a.list-item(:href="href" :class="[isActive && 'active']")
          .list-item-pre
            i.bx.bxs-home-circle
          .list-item-content 个人首页
    .list.group.padding.my-1(v-if="communityGroup.length" key="community")
      .list-group(
        v-for="group in communityGroup"
        :key="group.id"
        :class="{expand: activeCommunityGroup.includes(group.id)}")
        .list-header(@click="expandCommunityGroup(group)")
          .list-header-pre
            i.bx.bxs-chevron-down
          | {{group.label}}
        template(v-if="activeCommunityGroup.includes(group.id)")
          n-link.list-item(
            v-for="item in group.children"
            :to="`/channels/me/${item.id}`"
            :key="item.id")
            .list-item-pre
              template(v-if="item.avatar.type === 'img'")
                .avatar(:style="{'background-image':`url(${item.avatar.source})`}")
              template(v-else-if="item.avatar.type === 'icon'")
                i.bx(:class="[item.avatar.source]")
              template(v-else) {{item.avatar.source}}
              template(v-if="item.status")
                span.HOLD(v-if="item.status === 'HOLD'")
                  span
                  span
                  span
                span.DND(v-else-if="item.status === 'DND'")
                  i.bx.bxs-moon
                span.AFK(v-else-if="item.status === 'AFK'")
                  i.bx.bxs-no-entry
            .list-item-content {{item.label}}
            .list-item-brief(v-if="item.brief")
              span(:class="[item.brief.type, item.brief.class ? item.brief.class : '']") {{item.brief.payload > 99 ? 99 : item.brief.payload}}
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import SideSlider from '~/components/channel/SideSlider'

export default {
  name: 'Me',
  components: {
    [SideSlider.name]: SideSlider,
  },
  computed: {
    ...mapState(['communityGroup', 'activeCommunityGroup']),
  },
  methods: {
    ...mapMutations(['expandFriendsGroup']),
  },
}
</script>
<style lang="scss" scoped>
@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

.footer {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 32px;
  height: 32px;
}

.HOLD {
  display: inline-flex;
  align-items: center;
  height: 14px;
  background-color: var(--theme-success);
  position: absolute;
  right: 7px;
  bottom: 0;
  border-radius: 7px;
  padding: 0 3px;
  span {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: var(--interactive-active);
    margin: 0 1px;
    animation: blink 1.4s infinite both;
    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.4s;
    }
  }
}

.DND {
  position: absolute;
  bottom: 0;
  right: 7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--background-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  i.bx {
    color: var(--theme-warn);
    font-size: 14px;
  }
}

.AFK {
  position: absolute;
  bottom: 0;
  right: 7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--background-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  i.bx {
    font-size: 14px;
    color: var(--theme-error);
  }
}

.bage {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: var(--interactive-active);
  &.error {
    background-color: var(--theme-error);
  }
}

.question::v-deep {
  .nn-input {
    flex: 1;

    & + .nn-input {
      margin-left: 10px;
    }
  }
}

.action {
  font-size: 14px;
}

.divier {
  width: 1px;
  height: 20px;
  margin: 0 8px;
  background: darkgray;
}
</style>
