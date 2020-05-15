<template lang="pug">
.me
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
              :to="`/me/chat/${item.id}`"
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
    ...mapMutations(['expandCommunityGroup']),
  },
}
</script>
