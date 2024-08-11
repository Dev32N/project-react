import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactCo.css'; // Import your custom CSS file

const ContactCo = () => {
    const [selectedKey, setSelectedKey] = useState('0');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderContent = (key) => {
        switch (key) {
            case '0':
                return (
                    <Container className='p-2'>
                        <h4 className='title text-center p-3'>Chúng tôi là 1989Perfume</h4>
                        <p>Thương hiệu nước hoa uy tín từ 2024</p>
                        <p>Ra đời từ năm 2022 với mô hình kinh doanh nước hoa online, hoạt động trên nền tảng mạng xã hội. 1989Perfume đã được đông đảo các bạn trẻ đón nhận và ủng hộ, dành nhiều tình cảm và sự tin tưởng cho thương hiệu. 1989Perfume vinh dự được phục vụ hơn 300.000 khách hàng tính đến năm 2024, mang lại cho quý khách hàng sự hài lòng và yên tâm khi sử dụng. Hàng hóa của chúng tôi cam kết chính hãng 100% được nhập khẩu trực tiếp từ các thương hiệu và các nhà phân phối lớn, uy tín trong và ngoài nước. Chúng tôi lấy sự thành công của khách hàng là phương châm để phát triển kinh doanh, xây dựng với mục tiêu trở thành thương hiệu nước hoa lớn mạnh nhất tại Việt Nam.</p>
                        <p>1989Perfume phát triển với tham vọng trở thành công ty khởi nghiệp về nước hoa hàng đầu Việt Nam, được thúc đẩy bởi cam kết Cộng đồng - Dịch vụ - Chất lượng. Mục tiêu của chúng tôi là nuôi dưỡng một cộng đồng nước hoa sôi động, tạo ra một không gian quý giá để chia sẻ kiến ​​thức với những người đam mê nước hoa và giúp họ khám phá những mùi hương hoàn hảo. Tại 1989Perfume, chúng tôi mong muốn xây dựng một "Diễn đàn chuyên gia về nước hoa", nơi mọi người có thể trở thành chuyên gia trong việc lựa chọn loại nước hoa phù hợp cho bản thân và người thân.</p>
                        <p>Dịch vụ là cốt lõi trong chiến lược phát triển của 1989Perfume. Chúng tôi nỗ lực đơn giản hóa trải nghiệm mua sắm và đa dạng hóa các lựa chọn mua hàng thông qua trang web, Facebook, Instagram và phòng trưng bày của chúng tôi. Mỗi nền tảng được tối ưu hóa để thân thiện với người dùng và chuyên nghiệp hơn, đảm bảo trải nghiệm mua sắm đặc biệt cho khách hàng của chúng tôi.</p>
                        <p>Chất lượng và độ tin cậy là những yếu tố then chốt giúp 1989Perfume phát triển và không ngừng lớn mạnh trong sáu năm qua. Tất cả các sản phẩm do 1989Perfume cung cấp đều là chính hãng và chúng tôi đảm bảo hoàn tiền 200% nếu phát hiện sản phẩm giả. Chúng tôi tin rằng thành công của khách hàng chính là thành công của chúng tôi. Chúng tôi hoan nghênh phản hồi, đề xuất và khuyến khích từ các khách hàng quý giá của chúng tôi khi chúng tôi cố gắng cải thiện và nâng cao dịch vụ của mình. 1989Perfume tự hào là thương hiệu có nhiều phản hồi tốt nhất tại Việt Nam.</p>
                        <p>Cảm ơn sự hỗ trợ của bạn.</p>
                    </Container>
                );
            case '1':
                return (
                    <Container className='p-1'>
                        <h4 className='title text-center p-1'>Liên Hệ</h4>
                        <Row className='p-2'>
                            <Col md={4} className='contact-info p-2'>
                                <h5 className='text-center'>Hotline</h5>
                                <p className='text-center'>Gọi ngay tới tổng đài chăm sóc khách hàng của chúng tôi 1900 0129 (9h – 21h) 7 ngày trong tuần nếu bạn cần bất cứ thông tin hay sự hỗ trợ nào từ namperfume.</p>
                            </Col>
                            <Col md={4} className='contact-info p-2'>
                                <h5 className='text-center'>Fanpage</h5>
                                <p className='text-center'>Quý khách có thể like facebook để tham gia cộng đồng nước hoa với chúng tôi để theo dõi tốt nhất, nhanh nhất những chương trình khuyến mãi hấp dẫn cùng những sản phẩm mới, hot nhất nhé.</p>
                            </Col>
                            <Col md={4} className='contact-info p-2'>
                                <h5 className='text-center'>Email</h5>
                                <p className='text-center'>Gửi email tới địa chỉ hotro@1989Perfume.mail để nhận được sự hỗ trợ (email trả lời trong 24h)</p>
                            </Col>
                        </Row>
                        <ListGroup>
                            <ListGroup.Item>
                                <strong>Địa chỉ:</strong> 123 Main Street, Hometown, Vietnam
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Điện thoại:</strong> 0123-456-789
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Email:</strong> contact@1989perfume.vn
                            </ListGroup.Item>
                        </ListGroup>
                    </Container>
                );
            case '2':
                return (
                    <Container>
                        <h4 className='title p-3 text-center'>Câu hỏi thường gặp</h4>
                        <Accordion defaultActiveKey="0">
                            <Card className='m-2'>
                                <Accordion.Header eventKey="0">
                                    Nước hoa Tester là gì?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Nước hoa Tester là hàng mới và chưa từng được sử dụng, là nước hoa chính hãng, authentic 100%, được các hãng sản xuất với số lượng ít nhưng đảm bảo chất lượng tốt nhất, với mục đích hỗ trợ những cửa hàng bán lẻ làm mẫu thử cho khách. Vì là hàng Tester (hàng thử) nên hãng sẽ luôn đảm bảo về chất lượng cho khách hàng của mình.<br />
                                    Nước hoa Tester được đựng trong những hộp giấy đơn giản (thường là hộp giấy trắng hoặc giấy carton). Chai sản phẩm Tester có thể có nắp đi kèm hoặc không có nắp. Nước hoa Tester được đựng trong box đơn giản là để giảm giá thành sản phẩm.<br />
                                    Bạn có thể sẽ tìm thấy dòng chữ Tester hay Testeur (tiếng Pháp) in trên vỏ hộp hoặc thậm chí in trên chai nước hoa đó. Một số chai còn ghi rõ dòng chữ Not for Sale (không phải sản phẩm để bán) in trên hộp hoặc chính chai nước hoa đó.
                                </Accordion.Body>
                            </Card>
                            <Card className='m-2'>
                                <Accordion.Header eventKey="1">
                                    Nước hoa Unbox là gì?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Nước hoa Unbox (không hộp) là nước hoa chính hãng, authentic và mới 100%. Đôi khi hộp bên ngoài bị hỏng hoặc bị rách seal ni-lon do quá trình vận chuyển nên được tháo bỏ. Có cùng mùi hương và kiểu dáng giống chai mới full seal.<br />
                                    Mua nước hoa unbox cũng là một cách để tiết kiệm.
                                </Accordion.Body>
                            </Card>
                            <Card className='m-2'>
                                <Accordion.Header eventKey="2">
                                    Làm thế nào để kéo dài độ lưu hương của nước hoa khi dùng?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Bí quyết để có một mùi hương nước hoa bám lâu hơn trên da đó là "Layering", bằng cách sử dụng các dạng khác nhau của cùng một loại hương thơm như xà bông, dầu tắm, gel, sữa dưỡng thể, kem dưỡng thể hoặc là nước hoa cho tóc cùng với loại nước hoa bạn đang dùng. Ngày nay, nắm bắt được tâm lý của khách hàng, rất nhiều hãng nước hoa cho ra đời các line sản phẩm đa dạng, có thể bán rời hoặc bán kèm, bán theo set, để khách hàng có thể sử dụng được các sản phẩm theo cùng mùi hương mà mình yêu thích, từ đó có thể tăng cường độ bám mùi hương trên cơ thể.<br />
                                    Một cách phổ biến và dễ sử dụng nhất đó là dùng kem dưỡng thể mùi nước hoa (Body Lotion), kem dưỡng thể giữ được độ ẩm trên da, xịt nước hoa lên phần thoa kem dưỡng thể sẽ khiến nước hoa bám được tốt hơn nhiều lần. Một số cách khác như xịt nước hoa lên quần áo, lên tóc cũng có thể cải thiện phần nào độ lưu hương của nước hoa, tuy nhiên nó không đảm báo được sự chính xác, bởi quần áo có thể chịu nhiều tác động từ bên ngoài, và xịt nước hoa lên tóc có thể khiến tóc bị khô và hư tổn nếu không chăm sóc kỹ.
                                </Accordion.Body>
                            </Card>
                            <Card className='m-2'>
                                <Accordion.Header eventKey="3">
                                    Bảo quản nước hoa như thế nào là đúng cách?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Hãy luôn giữ nước hoa của bạn ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và các nguồn tỏa nhiệt. Nhiệt độ quá cao hoặc quá lạnh sẽ làm đảo lộn sự cân bằng tinh tế của các nhóm hương dẫn đến việc thay đổi mùi hương của chúng. Khi nước hoa được mở ra và sử dụng, việc bay hơi của nước hoa tuy không nhiều nhưng cũng sẽ xuất hiện, do đó, nơi tốt nhất để lưu giữ nước hoa là trong các tủ kệ nơi mát mẻ, ngăn kéo.
                                </Accordion.Body>
                            </Card>
                            <Card className='m-2'>
                                <Accordion.Header eventKey="4">
                                    Tôi nên xịt nước hoa ở chỗ nào trên cơ thể?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Theo một số nghiên cứu, nơi nào da có thân nhiệt ấm áp và nơi có lưu thông các mạch máu tốt là nơi nên dùng nước hoa, bởi nhiệt độ sẽ giúp khuếch tán và phóng đại mùi hương của nước hoa. Bên cạnh đó, các mạch máu tạo ra các xung nhịp trên cơ thể, giúp kích hoạt hoàn hảo cho nước hoa.<br />
                                    Một số điểm thích hợp để sử dụng nước hoa bao gồm:
                                    <ul>
                                        <li>Cổ tay</li>
                                        <li>Khuỷu tay</li>
                                        <li>Khuỷu chân</li>
                                        <li>Sau tai</li>
                                        <li>Dưới cổ họng</li>
                                        <li>Phần sau gáy ngay trên chân tóc</li>
                                    </ul>
                                    Các vị trí trên cơ thể thường tiếp xúc với môi trường cũng như xung quanh đều được khuyến khích xịt nước hoa, bạn cũng có thể xịt lên cả quần áo, tóc, hay phụ kiện khác của bạn để tăng cường hiệu quả của mùi hương.
                                </Accordion.Body>
                            </Card>
                        </Accordion>
                    </Container>
                );
            case '3':
                return (
                    <Container className='p-2'>
                        <h4 className='title text-center p-3'>Chính sách đổi trả</h4>
                        <p> Hàng hóa 1989Perfume bán ra đảm bảo là hàng chính hãng 100%, chúng tôi cam kết không bán hàng giả, hàng nhái, hàng không đảm bảo chất lượng. </p>
                        <p> Với những sản phẩm bị lỗi do kết cấu trong quá trình sản xuất của hãng, hoặc lỗi do vận chuyển dẫn đến việc sản phẩm bị méo mó, thay đổi hình dạng, hư hỏng bộ phận vòi xịt, ống xịt, bị nứt, vỡ, vui lòng liên hệ hotline 1900 0129 hoặc fanpage Facebook, Instagram của chúng tôi để được hỗ trợ đổi trả.</p>
                        <p> Đối với những sản phẩm đổi vì lý do cá nhân (tặng, được tặng), sản phẩm đổi chỉ được áp dụng trong thời gian 10 ngày kể từ khi sản phẩm được bán ra. Sản phẩm đổi phải đảm bảo chưa được sử dụng, đối với hàng Full seal thì phải còn nguyên seal. Sản phẩm sẽ được chúng tôi kiểm tra lại để đảm bảo là hàng hóa do chúng tôi phân phối. Khách hàng vui lòng liên hệ hotline 1900 0129, fanpage Facebook, Instagram hoặc đến địa chỉ cửa hàng của chúng tôi để được hỗ trợ.</p>
                        <p>Chúng tôi không chấp nhận đổi trả lại những sản phẩm đã sử dụng, bị thay đổi kết cấu, rơi vỡ, hư hỏng do các yếu tố từ phía người sử dụng.</p>
                    </Container >
                );
            case '4':
                return (
                    <Container>
                        <h4 className='text-center p-2'>Hướng dẫn đặt hàng</h4>
                        <p>Dễ dàng thôi, chúng tôi sẽ chỉ cho bạn:</p>
                        <ul>
                            <li>Chọn một thương hiệu hoặc danh mục (nước hoa nam, nước hoa nữ…) từ menu của Website hoặc sử dụng khung tìm kiếm để khám phá một chai nước hoa cụ thể mà bạn đang tìm.</li>
                            <li>Sau khi vào được trang sản phẩm bạn đang tìm kiếm, bạn chỉ việc chọn dung tích (size) mà bạn muốn mua và bấm vào MUA NGAY để thanh toán hoặc bấm vào THÊM VÀO GIỎ HÀNG để tiếp tục xem thêm những sản phẩm khác.</li>
                            <li>Bạn có thể đăng nhập bằng tài khoản (nếu có) hoặc có thể tiến hành mua hàng trực tiếp bằng cách nhập đầy đủ thông tin (tên, địa chỉ, số điện thoại, email) trong mục thanh toán. Chúng tôi sẽ gửi email xác nhận và bộ phận CSKH của **1989Perfume** sẽ gọi điện để xác nhận đơn hàng của bạn sớm nhất (trong khung giờ 9h-21h) trước khi đơn hàng được vận chuyển.</li>
                        </ul>
                    </Container>
                )
            case '5':
                return (
                    <Container>
                        <h4>Tại sao giá chúng tôi luôn tốt</h4>
                        <p>Đó là do mô hình kinh doanh độc đáo của chúng tôi. <strong>1989Perfume</strong> hoạt động theo mô hình thương mại điện tử kết hợp mạng xã hội và chuỗi cửa hàng bán lẻ hiện đại, giúp giảm thiểu chi phí vận hành. Nhờ đó, chúng tôi xây dựng được một thương hiệu nước hoa lớn mạnh tại Việt Nam, mang đến cho khách hàng những sản phẩm chính hãng với giá cả tốt nhất. <strong>1989Perfume</strong> luôn mong muốn khách hàng có cơ hội tiếp cận với các mặt hàng chất lượng với giá phù hợp, góp phần phát triển cộng đồng nước hoa ngày càng lớn mạnh tại Việt Nam. Với các sản phẩm đa dạng được nhập chính hãng, <strong>1989Perfume</strong> cam kết các sản phẩm bán ra đều là hàng chính hãng 100%. Chúng tôi cam kết hoàn tiền 200% nếu khách hàng phát hiện hàng giả, hàng nhái.</p>

                        <h6>Phương thức thanh toán được chấp nhận</h6>
                        <ul>
                            <li><strong>Tại cửa hàng</strong>: Chúng tôi chấp nhận thanh toán bằng Tiền Mặt, Internet Banking, các loại thẻ ATM, Visa, MasterCard…</li>
                            <li><strong>Với đơn hàng Ship tại TP Hồ Chí Minh</strong>: Chấp nhận thanh toán bằng Internet Banking hoặc Tiền Mặt.</li>
                            <li><strong>Với đơn hàng Ship Tỉnh</strong>: Chấp nhận thanh toán bằng Internet Banking hoặc COD.</li>
                        </ul>
                        <p><strong>Lưu ý</strong>: Chúng tôi không áp dụng hình thức thanh toán trả góp.</p>

                    </Container>
                )
            case '6':
                return (
                    <Container>
                        <h4 className='text-center p-2'>Chính sách vận chuyển</h4>
                        <h5>TP Hồ Chí Minh</h5>
                        <p>Các đơn hàng tại Thành phố Hồ Chí Minh có thể chọn phương thức thanh toán COD hoặc chuyển khoản. <strong>1989Perfume</strong> cam kết các quận trung tâm sẽ nhận được hàng chậm nhất trong 2 giờ kể từ khi chốt đơn đối với những đơn hàng trong ngày từ khung giờ 9:00 AM đến 15:00 PM. Nếu bạn muốn ship hẹn giờ, vui lòng liên hệ tổng đài CSKH 1900 0129 hoặc fanpage Facebook, Instagram của chúng tôi để được hỗ trợ.</p>

                        <h5>Các Tỉnh Khác</h5>
                        <p><strong>1989Perfume</strong> thực hiện lên đơn hàng và thanh toán bằng cách thức chuyển khoản trước. Sau khi chúng tôi xác nhận được sao kê số tiền, đơn hàng của bạn sẽ được đóng gói và vận chuyển trong vòng 2-4 ngày (không tính cuối tuần và ngày lễ).</p>

                        <h5>Cách Thức Đóng Hàng</h5>
                        <p>Với các đơn hàng ship tỉnh, các sản phẩm của bạn sẽ được đóng gói cẩn thận, kỹ lưỡng, bao gồm nhiều lớp chống sốc, đóng hộp carton và dán keo dính cẩn thận kèm hóa đơn, đảm bảo các sản phẩm đến tay khách hàng một cách tốt nhất.</p>

                        <h5>Hỗ trợ từ 1989Perfume</h5>
                        <p>Trong trường hợp bạn mua hàng tại Thành phố Hồ Chí Minh cần hỗ trợ đóng hàng, hãy liên hệ hotline 1900 0129 hoặc fanpage Facebook, Instagram của chúng tôi để được hỗ trợ.</p>

                        <h4>Chính sách đổi trả</h4>
                        <p>Chúng tôi, <strong>1989Perfume</strong>, cam kết luôn cung cấp hàng hóa chất lượng 100% chính hãng và dịch vụ chăm sóc khách hàng tốt nhất. Trong trường hợp có nhu cầu đổi trả, Quý khách vui lòng tham khảo chính sách đổi trả của <strong>1989Perfume</strong> như bên dưới và liên hệ tổng đài hotline 1900 0129 (9h-21h) để được hỗ trợ nhanh chóng nhất.</p>

                        <h5>I. Chính sách đổi hàng hóa:</h5>
                        <h6>1. Các trường hợp được đổi hàng:</h6>
                        <ul>
                            <li><strong>Sản phẩm đổi do lỗi kết cấu</strong> sản phẩm trong quá trình sản xuất của hãng hoặc trong quá trình vận chuyển (thay đổi hình dạng, hư hỏng vòi xịt, ống xịt).</li>
                            <li><strong>Sản phẩm không có lỗi do sản xuất</strong> hoặc vận chuyển, tuy nhiên khách hàng thay đổi quyết định mua hàng.</li>
                        </ul>

                        <h6>2. Quy định đổi hàng:</h6>
                        <ul>
                            <li><strong>Thời gian:</strong> Trong vòng 07 ngày làm việc kể từ ngày xuất hóa đơn (áp dụng cho đơn hàng mua tại cửa hàng) hoặc trong vòng 07 ngày làm việc kể từ ngày đơn hàng được giao thành công (áp dụng cho đơn hàng mua online).</li>
                            <li><strong>Quy trình đổi hàng:</strong>
                                <ul>
                                    <li><strong>Áp dụng trường hợp hàng đổi được nêu ở mục 1a:</strong>
                                        <ul>
                                            <li><strong>Đơn hàng đặt online:</strong> Quý khách vui lòng cung cấp video và hình ảnh kiện hàng nhận được, và video quá trình mở bao bì seal của sản phẩm cần đổi. Chi phí vận chuyển hoặc phát sinh (nếu có) trong quá trình đổi hàng sẽ do <strong>1989Perfume</strong> thanh toán.</li>
                                            <li><strong>Đơn hàng mua tại cửa hàng:</strong> Quý khách vui lòng mang hóa đơn và sản phẩm đến cửa hàng đã mua để thực hiện yêu cầu đổi hàng. Sản phẩm mang trả phải còn đầy đủ vỏ hộp và các phụ kiện liên quan đến sản phẩm.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Áp dụng trường hợp hàng đổi được nêu ở mục 1b:</strong>
                                        <ul>
                                            <li><strong>Đơn hàng đặt online:</strong> Quý khách vui lòng cung cấp hóa đơn và sản phẩm còn nguyên seal cho nhân viên chúng tôi để thực hiện yêu cầu đổi hàng. Chi phí vận chuyển hoặc các chi phí khác phát sinh (nếu có) trong quá trình đổi hàng sẽ do khách hàng thanh toán.</li>
                                            <li><strong>Đơn hàng mua tại cửa hàng:</strong> Quý khách vui lòng mang hóa đơn và sản phẩm còn nguyên seal đến cửa hàng đã mua để thực hiện yêu cầu đổi hàng. Chi phí vận chuyển hoặc các chi phí khác phát sinh (nếu có) trong quá trình đổi hàng sẽ do khách hàng thanh toán.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><strong>Sản phẩm được đổi mới</strong> phải có giá trị bằng hoặc cao hơn giá trị sản phẩm đã mua. Trong trường hợp Quý khách đổi sản phẩm mới có giá trị cao hơn, Quý khách vui lòng thanh toán phần chênh lệch giá trị phát sinh nếu có. Trong trường hợp khách hàng đổi sản phẩm mới với giá trị sản phẩm thấp hơn, phần tiền chênh lệch sẽ không được hoàn trả.</li>
                            <li>Mỗi đơn hàng chỉ được đổi một lần duy nhất.</li>
                        </ul>

                        <h6>3. Các trường hợp không được đổi hàng:</h6>
                        <ul>
                            <li>Sản phẩm tester, mini, gift set không được đổi hàng.</li>
                            <li>Những sản phẩm không có seal bóng bên ngoài.</li>
                            <li>Sản phẩm không đáp ứng đủ điều kiện trong Quy định đổi hàng được nêu trong Chính sách đổi hàng của <strong>1989Perfume</strong>.</li>
                        </ul>

                        <h5>II. Chính sách trả hàng hóa</h5>
                        <h6>1. Các trường hợp được trả lại hàng hóa:</h6>
                        <p>Chỉ áp dụng trả hàng cho các sản phẩm được chứng minh lỗi kết cấu trong quá trình sản xuất của hãng hoặc trong quá trình vận chuyển (thay đổi hình dạng, hư hỏng vòi xịt, ống xịt).</p>

                        <h6>2. Quy định trả hàng:</h6>
                        <ul>
                            <li><strong>Thời gian:</strong> Trong vòng 07 ngày làm việc kể từ ngày xuất hóa đơn (áp dụng cho đơn hàng mua tại cửa hàng) hoặc trong vòng 07 ngày làm việc kể từ ngày đơn hàng đã được giao thành công (áp dụng cho đơn hàng mua online).</li>
                            <li><strong>Quy trình trả hàng:</strong>
                                <ul>
                                    <li><strong>Đơn hàng đặt online:</strong> Quý khách vui lòng cung cấp video và hình ảnh kiện hàng nhận được, và video quá trình mở bao bì seal của sản phẩm cần đổi. Chi phí vận chuyển hoặc phát sinh nếu có trong quá trình trả hàng sẽ do <strong>1989Perfume</strong> thanh toán.</li>
                                    <li><strong>Đơn hàng mua tại cửa hàng:</strong> Quý khách vui lòng mang hóa đơn và sản phẩm đến cửa hàng đã mua để thực hiện yêu cầu trả hàng.</li>
                                </ul>
                            </li>
                            <li><strong>Sản phẩm mang trả</strong> phải còn đầy đủ vỏ hộp và các phụ kiện liên quan đến sản phẩm.</li>
                            <li>Trong trường hợp khách hàng thanh toán qua thẻ (Visa, MasterCard: Credit, Debit), chỉ áp dụng chính sách đổi hàng.</li>
                        </ul>

                    </Container>
                )
            case '7':
                return (
                    <Container>
                        <h2 className='text-center p-2'>Chính sách bảo mật thông tin</h2>
                        <p>
                            Hiện nay, vấn đề bảo mật thông tin đã trở thành vấn đề nóng trên tất cả các diễn đàn, điều này không chỉ gây khó khăn cho các tổ chức, cá nhân tham gia truy cập và giao dịch mà còn gây nên những phiền toái vượt ra ngoài tầm kiểm soát của hệ thống.
                        </p>

                        <p>
                            Chính sách bảo mật và chia sẻ thông tin khách hàng của 1989Perfume như một lời cam kết với mong muốn nâng cao chất lượng dịch vụ, bảo đảm an toàn thông tin của các cá nhân, tổ chức khi tham gia truy cập hoặc giao dịch trực tiếp trên website 1989Perfume.net. Chúng tôi hiểu bảo vệ và sử dụng hợp lý thông tin của bạn cũng chính là bảo vệ lòng tin và sự yêu mến của bạn dành cho chúng tôi.
                        </p>

                        <h4>1. Mục đích thu thập thông tin cá nhân</h4>
                        <p>
                            Việc thu thập dữ liệu tại website 1989Perfume được xác định khi bạn muốn sử dụng dịch vụ tại website. (liên hệ, mua sắm, khiếu nại, hỏi đáp…)
                        </p>
                        <p>
                            Chúng tôi thu thập, lưu trữ và xử lý thông tin của bạn cho quá trình thực hiện giao dịch, cho những thông báo sau này, hoặc để cung cấp dịch vụ. Chúng tôi không giới hạn các loại thông tin cá nhân thu thập: danh hiệu, tên, giới tính, ngày sinh, email, địa chỉ, số điện thoại, fax, chi tiết thanh toán, chi tiết thanh toán bằng thẻ hoặc chi tiết tài khoản ngân hàng.
                        </p>

                        <p>
                            Chúng tôi sẽ dùng thông tin quý khách đã cung cấp để xử lý đơn đặt hàng, cung cấp các dịch vụ và thông tin yêu cầu thông qua website và theo yêu cầu của bạn. Hơn nữa, chúng tôi sẽ sử dụng các thông tin đó để quản lý tài khoản của bạn; xác minh và thực hiện giao dịch trực tuyến, kiểm toán việc tải dữ liệu từ web; cải thiện bố cục và nội dung trang web và điều chỉnh cho phù hợp với người dùng. Nếu quý khách không muốn nhận bất cứ thông tin tiếp thị của chúng tôi thì có thể từ chối bất cứ lúc nào.
                        </p>

                        <h4>2. Phạm vi sử dụng thông tin</h4>
                        <p>
                            1989Perfume có quyền sử dụng hợp pháp các thông tin cá nhân của khách hàng trong các trường hợp để đảm bảo quyền lợi của quý khách như:
                        </p>
                        <ul>
                            <li>Thông báo các thông tin về dịch vụ quảng cáo, các chương trình khuyến mãi… đến khách hàng theo nhu cầu và thói quen của quý khách khi truy cập.</li>
                            <li>Liên lạc và hỗ trợ khách hàng trong những trường hợp đặc biệt.</li>
                            <li>Phát hiện và ngăn chặn ngay lập tức các hành vi can thiệp hoặc phá hoại tài khoản của khách hàng.</li>
                        </ul>

                        <h4>3. Thời gian lưu trữ thông tin</h4>
                        <p>
                            Công ty có hệ thống máy chủ có khả năng lưu trữ thông tin khách hàng tối thiểu là 03 năm và tối đa là 10 năm. Trong quá trình hoạt động, công ty có thể nâng cao khả năng lưu trữ thông tin nếu cần thiết.
                        </p>

                        <h4>4. Các đối tượng hoặc tổ chức có thể được tiếp cận với thông tin khách hàng</h4>
                        <p>
                            Chỉ duy nhất 1989Perfume được quyền tiếp cận thông tin khách hàng và chúng tôi cam kết không tiết lộ thông tin khách hàng cho bên thứ ba ngoại trừ các trường hợp sau:
                        </p>
                        <ul>
                            <li>Thực hiện theo yêu cầu của các cá nhân, tổ chức có thẩm quyền theo quy định của pháp luật.</li>
                            <li>Cần thiết phải sử dụng các thông tin để phục vụ cho việc cung cấp các dịch vụ/tiện ích cho khách hàng.</li>
                            <li>Nghiên cứu thị trường và đánh giá phân tích.</li>
                            <li>Trao đổi thông tin khách hàng với đối tác hoặc đại lý phân phối để phân tích nâng cao chất lượng dịch vụ.</li>
                        </ul>
                        <p>
                            Ngoài các trường hợp trên, khi cần phải trao đổi thông tin khách hàng cho bên thứ ba, 1989Perfume sẽ thông báo trực tiếp với khách hàng và sẽ chỉ thực hiện việc trao đổi thông tin khi có sự đồng thuận từ phía khách hàng.
                        </p>

                        <h4>5. Địa chỉ của đơn vị thu thập và quản lý thông tin</h4>
                        <p>
                            1989Perfume là đơn vị duy nhất được thu thập và quản lý thông tin khách hàng tại địa chỉ 1989Perfume. Mọi thắc mắc và cần sự hỗ trợ xin vui lòng liên hệ qua số hotline 1900 0129 hoặc email hotro@1989Perfume.com để chúng tôi được phục vụ bạn.
                        </p>

                        <h4>6. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</h4>
                        <p>
                            Người dùng có thể tiếp cận và chỉnh sửa trực tiếp dữ liệu cá nhân của mình thông qua website 1989Perfume bằng cách đăng nhập vào tài khoản mà mình đã đăng ký và sửa lại các thông tin, dữ liệu cá nhân của mình hoặc liên hệ hotline 1900 0129 để được hỗ trợ.
                        </p>

                        <h4>7. Cam kết bảo mật thông tin cá nhân khách hàng</h4>
                        <p>
                            Tất cả các thông tin khách hàng cung cấp và nội dung giao dịch đều được 1989Perfume lưu giữ bảo mật tuyệt đối trên hệ thống. 1989Perfume cam đoan sẽ không bán hoặc chia sẻ dẫn đến làm lộ thông tin cá nhân của bạn, không vì những mục đích thương mại mà vi phạm cam kết của chúng tôi ghi trong chính sách bảo mật này.
                        </p>
                        <p>
                            1989Perfume luôn sẵn sàng về đội ngũ kỹ thuật và an ninh để có những biện pháp đối phó với những trường hợp cố tình xâm nhập và sử dụng trái phép thông tin của khách hàng. Khi thu thập dữ liệu, 1989Perfume thực hiện lưu giữ và bảo mật thông tin khách hàng tại hệ thống máy chủ và các thông tin khách hàng này được bảo đảm an toàn bằng các hệ thống bảo vệ tốt nhất hiện nay, cùng các biện pháp kiểm soát truy cập và mã hóa dữ liệu.
                        </p>
                        <p>
                            Khách hàng không được phép sử dụng bất kỳ chương trình hay công cụ nào nhằm mục đích khai thác, thay đổi dữ liệu bất hợp pháp trên hệ thống 1989Perfume. Mọi hành vi cố tình xâm phạm, tùy theo tính chất sự việc, chúng tôi có quyền khởi tố với các cơ quan có thẩm quyền theo quy định pháp luật hiện hành.
                        </p>
                        <p>
                            Khách hàng nên tự bảo vệ thông tin bảo mật của mình bằng cách không chia sẻ các thông tin cá nhân cũng như các thông tin giao dịch với bên thứ ba, cẩn thận trong việc đăng nhập/đăng xuất tài khoản để loại trừ những sự cố rò rỉ thông tin không đáng có.
                        </p>

                    </Container>
                )
            default:
                return null;
        }
    };

    return (
        <Container>
            <Row className='p-5'>
                <Col lg={4} className='p-4'>
                    <ListGroup>
                        <ListGroup.Item action onClick={() => setSelectedKey('0')} id='intro'>
                            Giới thiệu về 1989Perfume
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedKey('1')} id='contact'>
                            Liên hệ
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedKey('2')} id='faq'>
                            Câu hỏi thường gặp
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedKey('3')} id='refund'>
                            Chính sách đổi trả
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedKey('4')} id='order'>
                            Hướng dẫn đặt hàng
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedKey('5')} id='pay'>
                            Phương thức thanh toán
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedKey('6')} id='ship'>
                            Phương thức vận chuyển
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedKey('7')} id='security'>
                            Chính sách bảo mật
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col lg={8} className='p-1'>
                    {renderContent(selectedKey)}
                </Col>
            </Row>
        </Container>
    );
};

export default ContactCo;
