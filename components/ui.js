export const UI = {
  renderForm(onAdd) {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = `
      <div class='card p-3 shadow-sm'>
        <div class='row g-2'>
          <div class='col-md-4'><input type='text' id='desc' class='form-control' placeholder='Açıklama'></div>
          <div class='col-md-4'><input type='number' id='amount' class='form-control' placeholder='Tutar'></div>
          <div class='col-md-4'><button id='addBtn' class='btn btn-primary w-100'>Ekle</button></div>
        </div>
      </div>`;
    document.getElementById('addBtn').addEventListener('click', () => {
      const desc = document.getElementById('desc').value;
      const amount = parseFloat(document.getElementById('amount').value);
      if (!desc || isNaN(amount)) return alert('Lütfen geçerli bir bilgi girin');
      onAdd({ desc, amount });
      document.getElementById('desc').value = '';
      document.getElementById('amount').value = '';
    });
  },

  renderList(expenses, onDelete) {
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    if (expenses.length === 0) {
      listContainer.innerHTML = '<p class="text-muted">Henüz harcama eklenmedi.</p>';
      return;
    }
    const table = document.createElement('table');
    table.className = 'table table-striped';
    table.innerHTML = `<thead><tr><th>Açıklama</th><th>Tutar (₺)</th><th></th></tr></thead>`;
    const tbody = document.createElement('tbody');
    expenses.forEach((exp, i) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${exp.desc}</td><td>${exp.amount.toFixed(2)}</td><td><button class='btn btn-danger btn-sm'>Sil</button></td>`;
      row.querySelector('button').addEventListener('click', () => onDelete(i));
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    listContainer.appendChild(table);
  },

  renderChart(expenses) {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    if (window.expenseChart) window.expenseChart.destroy();
    window.expenseChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: expenses.map(e => e.desc),
        datasets: [{
          data: expenses.map(e => e.amount),
          backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8']
        }]
      }
    });
  }
};
