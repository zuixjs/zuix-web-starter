zuix.$.find('main div').eq(0).on('animationend', () => {
  location.href = '{{ 'pages/home' | url }}';
});
