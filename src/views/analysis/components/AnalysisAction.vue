<template>
  <div class="analysis-action">
    <h2 class="action-title">操作</h2>

    <div class="action-list">
      <!-- 保存报告 -->
      <el-button
        type="primary"
        :loading="saving"
        class="action-button"
        @click="handleSave"
      >
        <template #icon>
          <el-icon><Download /></el-icon>
        </template>
        保存报告
      </el-button>

      <!-- 分享报告 -->
      <el-button
        type="success"
        :loading="sharing"
        class="action-button"
        @click="handleShare"
      >
        <template #icon>
          <el-icon><Share /></el-icon>
        </template>
        分享报告
      </el-button>
    </div>

    <!-- 分享弹窗 -->
    <el-dialog
      v-model="showShareDialog"
      title="分享报告"
      width="360px"
      center
      align-center
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      destroy-on-close
    >
      <div class="share-content">
        <div class="qrcode-wrapper">
          <img
            v-if="qrCodeUrl"
            :src="qrCodeUrl"
            alt="分享二维码"
            class="qrcode-img"
          >
          <div v-else class="qrcode-loading">
            <el-icon class="is-loading"><Loading /></el-icon>
          </div>
        </div>
        <p class="share-tip">使用手机扫描二维码查看报告</p>
        <p class="share-expire" v-if="expireTime">
          有效期至: {{ formatExpireTime(expireTime) }}
        </p>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleCloseShare">关闭</el-button>
          <el-button type="primary" @click="handleCopyLink">
            复制链接
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Download, Share, Loading } from '@element-plus/icons-vue'
import { useAnalysisStore } from '@/stores/analysis'
import QRCode from 'qrcode'
import dayjs from 'dayjs'

// 状态
const saving = ref(false)
const sharing = ref(false)
const showShareDialog = ref(false)
const qrCodeUrl = ref('')
const shareUrl = ref('')
const expireTime = ref<number>(0)

const analysisStore = useAnalysisStore()

// 保存报告
const handleSave = async () => {
  if (saving.value) return
  saving.value = true

  try {
    await analysisStore.saveReport()
    ElMessage.success({
      message: '报告已保存',
      duration: 2000
    })
  } catch (error) {
    ElMessage.error({
      message: '保存失败，请重试',
      duration: 3000
    })
  } finally {
    saving.value = false
  }
}

// 分享报告
const handleShare = async () => {
  if (sharing.value) return
  sharing.value = true
  qrCodeUrl.value = ''
  shareUrl.value = ''
  expireTime.value = 0
  showShareDialog.value = true

  try {
    const result = await analysisStore.shareReport()
    shareUrl.value = result.url
    expireTime.value = result.expireTime

    // 生成二维码
    qrCodeUrl.value = await QRCode.toDataURL(result.url, {
      width: 200,
      margin: 1,
      color: {
        dark: '#333333',
        light: '#FFFFFF'
      }
    })
  } catch (error) {
    ElMessage.error({
      message: '生成分享链接失败，请重试',
      duration: 3000
    })
    showShareDialog.value = false
  } finally {
    sharing.value = false
  }
}

// 复制链接
const handleCopyLink = async () => {
  if (!shareUrl.value) return

  try {
    await navigator.clipboard.writeText(shareUrl.value)
    ElMessage.success({
      message: '链接已复制',
      duration: 2000
    })
  } catch (error) {
    ElMessage.error({
      message: '复制失败，请手动复制',
      duration: 3000
    })
  }
}

// 关闭分享弹窗
const handleCloseShare = () => {
  showShareDialog.value = false
  qrCodeUrl.value = ''
  shareUrl.value = ''
  expireTime.value = 0
}

// 格式化过期时间
const formatExpireTime = (timestamp: number) => {
  return dayjs(timestamp).format('YYYY-MM-DD HH:mm')
}

// 为了解决 TypeScript 的默认导出问题
defineOptions({
  name: 'AnalysisAction'
})
</script>

<style scoped lang="scss">
.analysis-action {
  .action-title {
    font-size: 20px;
    color: var(--color-text-primary);
    margin-bottom: 24px;
  }

  .action-list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .action-button {
      width: 100%;
      height: 40px;

      .el-icon {
        margin-right: 8px;
      }
    }
  }
}

.share-content {
  padding: 20px 0;
  text-align: center;

  .qrcode-wrapper {
    width: 200px;
    height: 200px;
    margin: 0 auto 16px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;

    .qrcode-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .qrcode-loading {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-bg-secondary);

      .el-icon {
        font-size: 32px;
        color: var(--color-primary);
      }
    }
  }

  .share-tip {
    font-size: 14px;
    color: var(--color-text-secondary);
    margin: 0 0 8px;
  }

  .share-expire {
    font-size: 12px;
    color: var(--color-text-secondary);
    margin: 0;
  }
}

.dialog-footer {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 20px;
}
</style>