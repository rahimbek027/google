const form = document.getElementById('searchForm');
const input = document.getElementById('query');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (input.value.trim()) {
    result.style.display = 'block';
  } else {
    result.style.display = 'none';
  }
});
