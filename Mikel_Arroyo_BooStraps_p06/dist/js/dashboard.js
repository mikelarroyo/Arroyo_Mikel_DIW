document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
                tension: 0,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            plugins: { legend: { display: false }, tooltip: { boxPadding: 3 } }
        }
    });
});