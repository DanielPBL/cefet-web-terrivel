document.querySelector('form').addEventListener('submit', (e) => {
  const inputEl = document.querySelector('#pedras_sortidas');
  const hidEl = document.querySelector('input[name="tipo_pedras_sortidas"]');
  const methodEl = document.querySelector('#metodo');

  e.currentTarget.method = methodEl.value;

  if (inputEl.checked)
    hidEl.value = 'sim'
  else
    hidEl.value = 'não';
});