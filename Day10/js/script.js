fetch('products.json')
  .then(response => response.json())
  .then(data => {
    renderProducts(data.phong_khach, 'list-phong-khach');
    renderProducts(data.phong_bep, 'list-phong-bep');
    renderProducts(data.phong_ngu, 'list-phong-ngu');
  })
  .catch(error => console.error('Lỗi tải dữ liệu:', error));

function renderProducts(products, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.anh}" alt="${p.ten}">
            <h3>${p.ten}</h3>
            <div class="product-star">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p><span class="old-price">${p.gia_cu.toLocaleString()} VND</span></p>
            <p class="price">${p.gia_moi.toLocaleString()} VND</p>
        </div>  
    `).join('');
}