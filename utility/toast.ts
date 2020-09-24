import Toastify from 'toastify'

export const toast = (text: string, type?: string): void => {
  let backgroundColor
  switch (type) {
    case 'positive':
      backgroundColor = 'linear-gradient(to right, #00b09b, #96c93d)'
      break
    case 'negative':
      backgroundColor = 'linear-gradient(to right, #94001b, #d40228)'
      break
    case 'info':
      backgroundColor = 'linear-gradient(to right, #004e91, #117ad6)'
      break
    default:
      backgroundColor = 'linear-gradient(to right, #5e5e5e, #8a8a8a)'
  }
  Toastify({
    text,
    duration: 3000,
    backgroundColor,
    close: true,
    stopOnFocus: true,
    gravity: 'top',
    position: 'right',
  }).showToast()
  return
}

export default toast
