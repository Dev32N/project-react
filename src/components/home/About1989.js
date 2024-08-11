import React, { useState } from 'react';
import './tabmenu.css';

const About1989 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  const tabs = [
    {
      title: 'Tư vấn online',
      title2: 'Chuyên viên tư vấn 24h/7',
      src: './images/icon-chat.svg',
      content: 'Các chuyên viên tư vấn nước hoa của namperfume luôn sẵn sàng hỗ trợ khách hàng từ hotline, tin nhắn website và email một cách nhanh nhất',
    },
    {
      title: 'Freeship',
      title2: 'Giao hàng nhanh chóng trên toàn quốc',
      src: './images/icon-truck.svg',
      content: 'Đơn hàng sẽ được đóng gói cẩn thận bằng nhiều lớp chống sốc kèm hộp đựng được dán tem niêm phong, đảm bảo sự an toàn cho sản phẩm trong quá trình vận chuyển từ 1-3 ngày khi đến tay khách hàng.',
    },
    {
      title: 'Đổi trả',
      title2: 'Bạn đổi ý ? Không sao cả',
      src: './images/icon-return.svg',
      content: 'Với những sản phẩm chưa bung seal và sử dụng, bạn có thể dễ dàng đổi trả miễn phí trong vòng 7 ngày. Tìm hiểu thêm về quy trình đổi trả hàng hoá tại phần câu hỏi thường gặp.',
    },
    {
      title: 'Dịch vụ quà tặng',
      title2: 'Gửi Gắm Sự Tận Tâm',
      src: './images/icon-gift.svg',
      content: '1989Perfume cung cấp thêm cho khách hàng dịch vụ gói quà, viết thiệp và trang trí để món quà của bạn trở nên thật ý nghĩa.',
    },
  ];

  const tab2 = [
    {
      title: 'Ưu đãi độc quyền',
      title2: 'Sản phẩm 100% chính hãng',
      src: './images/icon-shield.svg',
      content: 'Nhiều hoạt động hợp tác cùng các thương hiệu danh tiếng và chương trình khuyến mại hấp dẫn chỉ dành riêng cho khách hàng của namperfume',
    },
    {
      title: 'Ưu đãi độc quyền',
      title2: 'Hãy là người đầu tiên được biết',
      src: './images/icon-gift.svg',
      content: 'Nhiều hoạt động hợp tác cùng các thương hiệu danh tiếng và chương trình khuyến mại hấp dẫn chỉ dành riêng cho khách hàng của namperfume',
    },
    {
      title: 'Thanh toán an toàn',
      title2: 'Phương thức thanh toán linh hoạt',
      src: './images/icon-credit.svg',
      content: 'Giao dịch mua sắm tại 1989perfume luôn được đảm bảo an toàn về bảo mật thông tin, thuận tiện và uy tín về phương thức thanh toán. Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản, các loại thẻ ATM, VISA, Master Card',
    },
  ];

  return (
    <>
      <section className="tabbar1">
        <div className='tab1bg'>
          <div className="container-tab">
            <h1>Về 1989Perfume</h1>
            <div className="list_logo">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`box ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                >
                  <img src={tab.src} alt={`logo${index + 1}`} />
                  <h3>{tab.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="contain-text">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
            >
              <div className="content">
                <h5>{tab.title2}</h5>
                <p>{tab.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="tabbar2">
        <div className='tab2bg'>
          <div className="container-tab">
            <div className="list_logo">
              {tab2.map((tab, index) => (
                <div
                  key={index}
                  className={`box ${activeTab2 === index ? 'active' : ''}`}
                  onClick={() => setActiveTab2(index)}
                  onMouseEnter={() => setActiveTab2(index)}
                >
                  <img src={tab.src} alt={`logo${index + 1}`} />
                  <h3>{tab.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="contain-text">
          {tab2.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab2 === index ? 'active' : ''}`}
            >
              <div className="content">
                <h5>{tab.title2}</h5>
                <p>{tab.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About1989;
