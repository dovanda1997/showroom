footer = document.querySelector('footer')
divF = document.createElement('div')
divF.classList.add('container-footer')
divF.innerHTML=`
<div class="container-footer-item">
<p class="tittle-footer">NỘI THẤT ĐỒNG GIA</p>
<P class="footer-p">Office & Showroom: 59 Nguyễn Quốc Trị, Trung Hòa, Cầu Giấy, Hà Nội.<br>
Thời gian mở cửa: 8h30 – 18h00 kể cả Thứ 7 và Chủ nhật <br>
Có vị trí đỗ xe ô tô rộng rãi </P>
<button><i class="cursor fas fa-map-marked-alt"></i> &nbsp; Vị trí Nội Thất Đồng Gia</button>
</div>
<div class="container-footer-item">
<p class="tittle-footer">THÔNG TIN LIÊN HỆ</p>
<i class=" cursor fab fa-facebook-f icon-footer"></i>
<i class="cursor fab fa-instagram icon-footer"></i>
<i class=" cursor fab fa-youtube icon-footer"></i>
<i class=" cursor fab fa-pinterest-p icon-footer"></i>
</div>
<div class="container-footer-item">
<p class="tittle-footer">HỖ TRỢ KHÁCH HÀNG</p>
<p class="footer-p">Chính sách bảo mật thông tin <br>
Quy định chính sách</p>
</div>
<div class="container-footer-item">
<p class="tittle-footer">ĐẶT LỊCH TƯ VẤN</p>
<p class="footer-p">Đặt lịch hẹn trực tiếp tại showroom để được các KTS Đồng Gia tư vấn. <br>
    <i aria-hidden="true" class="fas fa-user-friends"></i> Đội ngũ kiến trú sư trên 10 năm kinh nghiệm
</p>
</div>

`

footer.appendChild(divF)