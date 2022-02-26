function closeContent() {
  if (window.parent.closeContentFrame) {
    window.parent.closeContentFrame();
  } else {
    location.href += '../../index.html';
  }
}
