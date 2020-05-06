<template lang="pug">
#user-center
  h4.title 每日任务
  .steps
    .step(v-for="task in dalyTasks" :key="task.id" :class="[task.status >= 0 ? 'done' : '']")
      .step-cover
        i.bx.bxs-trophy
      .step-label {{ task.status < 0 ? task.status === 0 ? '领取' : '未获得' : '已领取'}}
</template>
<script>
export default {
  name: 'UserCenter',
  data() {
    return {
      dalyTasks: [
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          task: 100,
          status: 1
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          task: 200,
          status: 1
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          task: 300,
          status: -1
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          task: 400,
          status: -1
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          task: 500,
          status: -1
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          task: 600,
          status: -1
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#user-center {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 10px 16px;
}

.steps {
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--vs-theme-layout2);
  padding: 10px 16px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 10%;
    width: 80%;
    bottom: 50%;
    height: 1px;
    background-color: white;
  }
  &::before {
    content: '';
    position: absolute;
    left: 10%;
    width: 30%;
    bottom: 50%;
    height: 1px;
    background-color: yellow;
    z-index: 1;
  }

  .step {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: var(--vs-theme-layout2);
    z-index: 9;
    & + .step {
      margin-left: 15px;
    }

    &.done {
      color: yellow;
    }

    &-cover {
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      i.bx {
        font-size: 45px;
      }
    }

    &-label {
      text-align: center;
    }
  }
}
</style>
