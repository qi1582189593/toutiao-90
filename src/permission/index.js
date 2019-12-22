
// 处理路由拦截器 导航守卫
import router from '../router'
router.beforeEach(function (to, from, next) {
  console.log(to.fullPath)
  if (to.fullPath.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    (
      next()
    )
  }
})
