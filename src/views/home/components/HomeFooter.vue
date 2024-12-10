<template>
  <footer class="home-footer">
    <div class="footer-content">
      <div class="footer-info">
        <h3>联系我们</h3>
        <p>如有任何问题，请随时联系我们</p>
        <div class="contact-buttons">
          <el-button type="primary" plain>
            <el-icon><Message /></el-icon>
            联系客服
          </el-button>
          <el-button type="primary" plain>
            <el-icon><Document /></el-icon>
            帮助文档
          </el-button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Message, Document } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.home-footer {
  padding: 60px 0;
  background: var(--color-bg-secondary);

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .footer-info {
    text-align: center;

    h3 {
      font-size: 24px;
      color: var(--color-text-primary);
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      color: var(--color-text-secondary);
      margin-bottom: 24px;
    }

    .contact-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;

      .el-button {
        .el-icon {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>