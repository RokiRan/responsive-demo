// 获取所有具有 "lazy-load" 类名的图片元素
// const lazyImages = document.querySelectorAll('.lazy-load');

// // 监听窗口滚动事件
// window.addEventListener('scroll', lazyLoad);

// function lazyLoad() {
//   // 遍历每个图片元素
//   lazyImages.forEach(image => {
//     // 检查图片是否在可视区域内
//     if (isElementInViewport(image)) {
//       // 加载图片
//       image.src = image.dataset.src;
//       // 图片加载完后，移除 "lazy-load" 类名，以防重复加载
//       setTimeout(() => {
//         image.classList.remove('lazy-load');
//       }, 300);
//     }
//   });
// }

// // 检查元素是否在可视区域内
// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 50 &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth) + 50
//   );
// }
// setTimeout(() => {
//     lazyLoad()
// }, 200);

// 检测设备类型并设置缩放级别
// function setInitialScale() {
//     var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//     if (isMobileDevice) {
//       var viewportMetaTag = document.querySelector('meta[name="viewport"]');
//       viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=0.1');
//     }
//   }

//   // 在页面加载完成后调用设置函数
//   window.addEventListener('load', setInitialScale);