import { useParams, NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';
import ScrollReveal from '../../components/ui/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle';

const posts = {
  'biteo-la-gi': {
    title: 'Biteo là gì? 5 điểm khác biệt của hệ sinh thái số dành cho người Việt',
    author: 'Biteo Editorial',
    date: '12/06/2026',
    readTime: '5 phút đọc',
    content: [
      'Biteo là nền tảng công nghệ tích hợp nhiều dịch vụ số phổ biến trong một ứng dụng duy nhất.',
      'Khác với các ứng dụng đơn chức năng, Biteo tập trung vào trải nghiệm liền mạch: bạn có thể xem video ngắn, đặt món ăn, đặt đi chợ hộ, đặt tour du lịch và mua đặc sản mà không cần chuyển đổi liên tục giữa các app.',
      'Điểm mạnh tiếp theo là hệ sinh thái đối tác rộng, giúp người dùng tiếp cận nhiều lựa chọn tin cậy trong cùng một nền tảng.',
      'Biteo cũng đầu tư vào tốc độ giao hàng, thanh toán linh hoạt và trải nghiệm người dùng được tối ưu cho điều kiện Việt Nam.',
    ],
    related: ['dat-lich-nha-hang', 'dang-ky-doi-tac'],
  },
  'dat-lich-nha-hang': {
    title: 'Đặt lịch nhà hàng trong 3 bước trên Biteo',
    author: 'Biteo Editorial',
    date: '08/06/2026',
    readTime: '4 phút đọc',
    content: [
      'Mở ứng dụng Biteo và chọn dịch vụ Ẩm thực.',
      'Tìm nhà hàng theo khu vực, đánh giá và chọn món.',
      'Xác nhận thời gian, thanh toán và theo dõi đặt bàn.',
    ],
    related: ['biteo-la-gi', 'kinh-nghiem-du-lich'],
  },
  'dang-ky-doi-tac': {
    title: 'Hướng dẫn đăng ký đối tác Biteo nhanh chóng',
    author: 'Biteo Editorial',
    date: '01/06/2026',
    readTime: '6 phút đọc',
    content: [
      'Truy cập trang Đối tác và chọn loại hình kinh doanh.',
      'Điền thông tin cửa hàng, giấy phép và thông tin liên hệ.',
      'Đội ngũ Biteo xác minh và hướng dẫn tích hợp.',
    ],
    related: ['tro-thanh-ctv', 'biteo-la-gi'],
  },
  'uu-dai-dac-san': {
    title: 'Mua đặc sản vùng miền với ưu đãi độc quyền',
    author: 'Biteo Editorial',
    date: '25/05/2026',
    readTime: '4 phút đọc',
    content: [
      'Biteo hợp tác với nhà cung cấp đặc sản chính hãng.',
      'Người dùng có thể mua trực tuyến và nhận ưu đãi theo kỳ.',
      'Kiểm tra nguồn gốc, đóng gói và giao hàng minh bạch.',
    ],
    related: ['kinh-nghiem-du-lich', 'dat-lich-nha-hang'],
  },
  'tro-thanh-ctv': {
    title: 'Trở thành Cộng tác viên Biteo: điều cần biết trước khi đăng ký',
    author: 'Biteo Editorial',
    date: '18/05/2026',
    readTime: '7 phút đọc',
    content: [
      'Cộng tác viên Biteo có thể thực hiện nhiều nhiệm vụ theo khả năng.',
      'Biteo cung cấp tài liệu, quy trình rõ ràng và hệ thống theo dõi.',
      'Thu nhập phụ thuộc vào kết quả thực tế và không cố định.',
    ],
    related: ['dang-ky-doi-tac', 'biteo-la-gi'],
  },
  'kinh-nghiem-du-lich': {
    title: 'Kinh nghiệm du lịch tiết kiệm bằng Biteo',
    author: 'Biteo Editorial',
    date: '10/05/2026',
    readTime: '5 phút đọc',
    content: [
      'So sánh lựa chọn phòng và tour trực tiếp trên Biteo.',
      'Kết hợp đặt ăn uống, mua đặc sản và di chuyển trong một ứng dụng.',
      'Tiết kiệm thời gian lập kế hoạch và giảm chi phí không mong muốn.',
    ],
    related: ['uu-dai-dac-san', 'dat-lich-nha-hang'],
  },
};

function BlogDetail() {
  const { slug } = useParams();
  const post = posts[slug] || posts['biteo-la-gi'];

  return (
    <div>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <ScrollReveal>
            <NavLink to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              <ArrowLeft className="h-4 w-4" />
              Quay lại Blog
            </NavLink>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-subtext">{post.author} · {post.date} · {post.readTime}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-14">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80"
              alt="Blog cover"
              className="aspect-[16/9] w-full rounded-3xl object-cover"
            />
          </ScrollReveal>

          <ScrollReveal delay={100} className="mt-10 space-y-6 text-subtext">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-text">Chia sẻ:</span>
            {['Facebook', 'Instagram', 'Copy link'].map((item) => (
              <Button key={item} variant="outline" size="sm">{item}</Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionTitle title="Bài viết liên quan" />
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {post.related.map((relatedSlug, index) => {
              const related = posts[relatedSlug];
              if (!related) return null;
              return (
                <ScrollReveal key={relatedSlug} delay={index * 80}>
                  <NavLink to={`/blog/${relatedSlug}`} className="block">
                    <div className="card-base p-6">
                      <span className="text-xs font-semibold text-primary">{related.category}</span>
                      <p className="mt-2 text-base font-semibold text-text">{related.title}</p>
                      <p className="mt-2 text-xs text-subtext">{related.date}</p>
                    </div>
                  </NavLink>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;
