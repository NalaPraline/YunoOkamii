document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message !');
    form.reset();
  });
});
