export class CommonServices {
  isMobile() {
    if (document.documentElement.clientWidth > 992) {
      return false
    }
    return true
  }
  isIE() {
    let ua = false || !!document.documentMode
    return ua
  }
}