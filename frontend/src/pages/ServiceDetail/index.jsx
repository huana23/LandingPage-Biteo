import { useParams, NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Accordion from '../../components/ui/Accordion';

const serviceMap = {
  grocery: {
    title: 'Đi chợ hộ',
    description: 'Dịch vụ đi chợ hộ giúp bạn đặt hàng thực phẩm tươi sạch, rau củ, thịt cá, đồ khô và các mặt hàng gia dụng từ siêu thị, cửa hàng tin cậy được giao tận nhà.',
    benefits: [
      'Giao trong ngày, nhiều khung giờ linh hoạt',
      'Kiểm tra và đóng gói kỹ trước khi giao',
      'Minh bạch giá cả và đơn hàng',
      'Hỗ trợ đổi trả nếu sản phẩm không đạt chất lượng',
    ],
    steps: [
      'Chọn siêu thị hoặc cửa hàng trong ứng dụng Biteo.',
      'Thêm sản phẩm vào giỏ và chọn khung giờ giao.',
      'Xác nhận đơn hàng và theo dõi trạng thái giao.',
      'Nhận hàng, kiểm tra và đánh giá trải nghiệm.',
    ],
    faqs: [
      { question: 'Phí dịch vụ đi chợ hộ là bao nhiêu?', answer: 'Phí dịch vụ phụ thuộc vào giá trị đơn hàng và khu vực giao. Chi tiết phí sẽ hiển thị rõ khi bạn đặt hàng.' },
      { question: 'Làm sao để đổi trả sản phẩm?', answer: 'Bạn có thể yêu cầu đổi trả trong vòng 24 giờ sau khi nhận hàng thông qua mục Hỗ trợ trong ứng dụng.' },
      { question: 'Tôi có thể đặt hàng định kỳ không?', answer: 'Hiện tại bạn có thể đặt lại đơn hàng trước đó hoặc đặt theo lịch tái tạo nếu tính năng đã được bật tại khu vực của bạn.' },
    ],
  },
  'short-video': {
    title: 'Video ngắn',
    description: 'Khám phá nội dung video ngắn sáng tạo, từ ẩm thực, du lịch, mẹo vặt đến nội dung giải trí bổ ích trong một nền tảng duy nhất.',
    benefits: [
      'Đề xuất nội dung cá nhân hóa',
      'Tạo và chia sẻ video dễ dàng',
      'Kết nối với nhà sáng tạo nội dung',
      'Tiết kiệm dữ liệu với tối ưu phát lại',
    ],
    steps: [
      'Mở tính năng Video ngắn trong ứng dụng Biteo.',
      'Khám phá nội dung theo sở thích.',
      'Tạo video mới với công cụ dễ dùng.',
      'Chia sẻ và tương tác với cộng đồng.',
    ],
    faqs: [
      { question: 'Tôi có thể tải video lên không?', answer: 'Có, bạn có thể tạo và đăng tải video ngắn trực tiếp trong ứng dụng Biteo.' },
      { question: 'Nội dung nào được phép đăng?', answer: 'Vui lòng tuân thủ quy tắc cộng đồng Biteo; nội dung phải phù hợp, không vi phạm bản quyền và không chứa thông tin sai lệch.' },
    ],
  },
  food: {
    title: 'Ẩm thực',
    description: 'Khám phá quán ăn, đặt món trước và nhận nhiều ưu đãi hấp dẫn từ nhà hàng, quán cà phê đối tác trên toàn quốc.',
    benefits: [
      'Đặt bàn và đặt món nhanh chóng',
      'Ưu đãi độc quyền từ đối tác',
      'Đánh giá minh bạch',
      'Tích hợp thanh toán an toàn',
    ],
    steps: [
      'Tìm quán ăn hoặc món yêu thích.',
      'Chọn thực đơn, đặt món hoặc đặt bàn.',
      'Xác nhận đơn và theo dõi trạng thái.',
      'Nhận món hoặc dùng bữa tại nhà hàng.',
    ],
    faqs: [
      { question: 'Tôi có thể hủy đơn không?', answer: 'Bạn có thể hủy theo chính sách của từng nhà hàng. Thời gian cho phép hủy sẽ được hiển thị rõ khi xác nhận đơn.' },
    ],
  },
  'local-shopping': {
    title: 'Mua sắm địa phương',
    description: 'Mua sắm tại các cửa hàng địa phương với trải nghiệm trực tuyến tiện lợi, được giao tận nơi.',
    benefits: [
      'Khám phá cửa hàng địa phương',
      'Nhận ưu đãi theo khu vực',
      'Giao hàng nhanh',
      'Hỗ trợ hoàn trả linh hoạt',
    ],
    steps: [
      'Khám phá danh mục cửa hàng gần bạn.',
      'Chọn sản phẩm và kiểm tra thông tin.',
      'Đặt hàng và thanh toán trực tiếp.',
      'Nhận hàng và đánh giá cửa hàng.',
    ],
    faqs: [
      { question: 'Làm sao để biết cửa hàng có giao tới khu vực của tôi?', answer: 'Bạn có thể kiểm tra tình trạng giao hàng ngay trên trang chi tiết cửa hàng.' },
    ],
  },
  travel: {
    title: 'Du lịch',
    description: 'Đặt phòng, tour, vé và trải nghiệm du lịch với nhiều lựa chọn linh hoạt.',
    benefits: [
      'So sánh giá dễ dàng',
      'Đặt phòng và tour nhanh chóng',
      'Hỗ trợ thay đổi lịch trình',
      'Trải nghiệm được xác thực',
    ],
    steps: [
      'Tìm điểm đến hoặc địa điểm cần đặt.',
      'Chọn loại hình phù hợp: phòng, tour, vé.',
      'Đặt và thanh toán an toàn.',
      'Nhận thông tin xác nhận và tận hưởng chuyến đi.',
    ],
    faqs: [
      { question: 'Tôi có thể hủy hoặc thay đổi đơn du lịch không?', answer: 'Chính sách hủy/thay đổi tuân theo từng nhà cung cấp và sẽ hiển thị rõ trước khi bạn xác nhận đơn.' },
    ],
  },
  specialty: {
    title: 'Đặc sản',
    description: 'Mua đặc sản vùng miền chính hãng, nguồn gốc rõ ràng và được giao tận nơi.',
    benefits: [
      'Đặc sản chính hãng',
      'Nguồn gốc minh bạch',
      'Đóng gói cẩn thận',
      'Giao hàng an toàn',
    ],
    steps: [
      'Chọn nhóm đặc sản theo vùng miền.',
      'Xem thông tin nguồn gốc và đánh giá.',
      'Đặt hàng và chọn phương thức giao.',
      'Nhận hàng và kiểm tra chất lượng.',
    ],
    faqs: [
      { question: 'Sản phẩm có đảm bảo chất lượng không?', answer: 'Biteo kiểm tra thông tin nhà cung cấp và khuyến khích bạn đọc đánh giá trước khi mua.' },
    ],
  },
  payment: {
    title: 'Thanh toán',
    description: 'Hệ thống thanh toán an toàn, linh hoạt và minh bạch cho mọi giao dịch trên Biteo.',
    benefits: [
      'Nhiều phương thức thanh toán',
      'Mã hóa bảo vệ giao dịch',
      'Hóa đơn và lịch sử rõ ràng',
      'Hỗ trợ khiếu nại nhanh',
    ],
    steps: [
      'Chọn phương thức thanh toán phù hợp.',
      'Xác nhận thanh toán tại bước cuối đơn hàng.',
      'Nhận thông báo xác nhận.',
      'Xem lịch sử giao dịch trong ứng dụng.',
    ],
    faqs: [
      { question: 'Tôi có thể dùng thanh toán khi nhận hàng không?', answer: 'Điều này phụ thuộc vào dịch vụ và khu vực. Bạn có thể kiểm tra lại phương thức khả dụng khi đặt hàng.' },
    ],
  },
  utilities: {
    title: 'Tiện ích khác',
    description: 'Các tiện ích bổ sung giúp cuộc sống hàng ngày thuận tiện hơn trên nền tảng Biteo.',
    benefits: [
      'Tích hợp nhiều tiện ích',
      'Trải nghiệm đồng nhất',
      'Cập nhật thường xuyên',
      'Hỗ trợ nhanh chóng',
    ],
    steps: [
      'Khám phá danh mục tiện ích trong ứng dụng.',
      'Chọn tiện ích phù hợp nhu cầu.',
      'Sử dụng theo hướng dẫn.',
      'Đánh giá trải nghiệm để chúng tôi cải thiện.',
    ],
    faqs: [
      { question: 'Tiện ích mới sẽ được thêm khi nào?', answer: 'Chúng tôi cập nhật liên tục; bạn có thể theo dõi thông báo trong ứng dụng hoặc blog của Biteo.' },
    ],
  },
};

function ServiceDetail() {
  const { slug } = useParams();
  const data = serviceMap[slug] || serviceMap['grocery'];

  return (
    <div>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <ScrollReveal>
            <NavLink to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Quay lại Dịch vụ
            </NavLink>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">{data.title}</h1>
            <p className="mt-6 max-w-3xl text-subtext">{data.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/download">Tải ứng dụng</Button>
              <Button variant="outline" href="/faq">Câu hỏi thường gặp</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionTitle
              title="Lợi ích"
              subtitle="Những giá trị trực tiếp mà dịch vụ mang lại cho người dùng Biteo."
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.benefits.map((item, index) => (
              <ScrollReveal key={item} delay={index * 80}>
                <div className="glass-card p-6 lg:p-8 rounded-[24px]">
                  <CheckCircle2 className="mb-3 h-6 w-6 text-primary" />
                  <p className="text-subtext">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionTitle
              title="Quy trình sử dụng"
              subtitle="Thực hiện nhanh trong 4 bước để bắt đầu trải nghiệm dịch vụ."
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.steps.map((item, index) => (
              <ScrollReveal key={item} delay={index * 100}>
                <div className="glass-card p-6 lg:p-8 rounded-[24px]">
                  <span className="text-sm font-semibold text-primary">Bước {index + 1}</span>
                  <p className="mt-2 text-subtext">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionTitle
              title="Câu hỏi thường gặp"
              subtitle="Những thắc mắc thường gặp về dịch vụ này."
            />
          </ScrollReveal>

          <div className="mt-8">
            <Accordion items={data.faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
