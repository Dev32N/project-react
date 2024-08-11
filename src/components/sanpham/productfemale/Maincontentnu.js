import React from 'react'
import './contentnu.css'
import ProductListNu from './ProductListFemale'

export default function Maincontentnu() {
    return (
        <div className='main-content container'>
            <div className='magazine-content'>
                <h1>Nước Hoa Nữ Giới</h1>
                <div className='nmagazine-content-block_scroll'>
                    <p>
                    Nước hoa từ thời xa xưa đã được sáng tạo để tôn vinh vẻ đẹp của phái nữ, bởi vậy trong thế giới mùi hương, những lựa chọn dành cho các quý cô luôn phong phú và đa dạng hơn. 1989Perfume luôn mong muốn mang đến cho các quý cô những trải nghiệm hương thơm tuyệt vời nhất. Từ sự quyến rũ, sang trọng và quyền lực đến nét nhẹ nhàng, ngây thơ và không thể thiếu chút gợi cảm lả lơi, mỗi mùi hương là một biểu tượng của phong cách và cá tính. Chúng tôi tự hào mang đến những lựa chọn tinh tế, giúp các quý cô luôn tỏa sáng và tự tin trong mọi khoảnh khắc.  
                    </p>
                </div>
            </div>
            <ProductListNu />
        </div>
    )
}
