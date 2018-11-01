<template>
<!-- @click="clickHandle('test click', $event)" -->
  <div  >
    <!-- <i-button type="primary" @click="bindViewTap">这是一个按钮</i-button> -->
    
    
    <van-button round type="danger" @click="toPage('D1')" >中国公民新办证预约（含换补发）</van-button>
    <van-button round type="danger" @click="toPage('D2')" >有港澳证办签注（现场办理）</van-button>
    <van-button round type="danger" @click="toPage('D3')" >进度查询</van-button>
    <van-button round type="danger" @click="toPage('D4')" >大厅实况</van-button>
    
    

    <!-- <i-card title="其他服务" extra="桂林">
        <view slot="content">
          <i-button bind:click="toPage()" type="primary">外国人办证服务</i-button>
          <i-button bind:click="toPage()" type="primary">外国人在桂指南</i-button>
          <i-button bind:click="toPage()" type="primary">72小时过境免签</i-button>
        </view>
        <view slot="footer"></view>
    </i-card> -->
    
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form> -->
    <!-- <a href="/pages/tydic/cert/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import card from '@/components/card'
import { log } from 'util';

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      toPageUrl:{
        'D1':'../tydic/cert/main',
        'D2':'../tydic/cert/main',
        'D3':'../tydic/cert/main',
        'D4':'../tydic/cert/main'
      }
    }
  },

  components: {
    card
  },

  methods: {
    toPage(type){
      const url=this.toPageUrl[type]
      console.log(url);
      
      wx.navigateTo({ url })
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
