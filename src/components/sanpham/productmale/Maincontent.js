import React from 'react'
import './maincontent.css'
import ProductListMale from './ProductListMale'

export default function Maincontent() {
    return (
        <div className='main-content container'>
            <div className='magazine-content'>
                <h1>Nước Hoa Nam Giới</h1>
                <div className='nmagazine-content-block_scroll'>
                    <p>
                        Các quý ông thường tìm đến nước hoa không chỉ để tỏa hương thơm mát, mà còn để thể hiện sự nam tính và phong cách lịch lãm của mình, đúng không? 1989Perfume hiểu rõ nhu cầu của các quý ông, mang đến những mùi hương thanh thoát, gọn gàng và quyến rũ, đôi khi là sự mạnh mẽ lôi cuốn không thể lẫn vào đâu được. Với 1989Perfume, bạn sẽ không bao giờ quên được vẻ bụi bặm và sự phóng khoáng đặc trưng của phái mạnh.
                    </p>
                </div>
            </div>
            <ProductListMale />
        </div>
    )
}
