import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';
import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import ScrollReveal from '../../components/ui/ScrollReveal';

const posts = [
  { slug: 'biteo-la-gi', title: 'Biteo là gì? 5 điểm khác biệt của hệ sinh thái số dành cho người Việt', category: 'Giới thiệu', date: '12/06/2026', readTime: '5 phút đọc' },
  { slug: 'dat-lich-nha-hang', title: 'Đặt lịch nhà hàng trong 3 bước trên Biteo', category: 'Ẩm thực', date: '08/06/2026', readTime: '4 phút đọc' },
  { slug: 'dang-ky-doi-tac', title: 'Hướng dẫn đăng ký đối tác Biteo nhanh chóng', category: 'Đối tác', date: '01/06/2026', readTime: '6 phút đọc' },
  { slug: 'uu-dai-dac-san', title: 'Mua đặc sản vùng miền với ưu đãi độc quyền', category: 'Mua sắm', date: '25/05/2026', readTime: '4 phút đọc' },
  { slug: 'tro-thanh-ctv', title: 'Trở thành Cộng tác viên Biteo: điều cần biết trước khi đăng ký', category: 'CTV', date: '18/05/2026', readTime: '7 phút đọc' },
  { slug: 'kinh-nghiem-du-lich', title: 'Kinh nghiệm du lịch tiết kiệm bằng Biteo', category: 'Du lịch', date: '10/05/2026', readTime: '5 phút đọc' },
];

const categories = ['Tất cả', 'Giới thiệu', 'Ẩm thực', 'Đối tác', 'Mua sắm', 'CTV', 'Du lịch'];

function BlogPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredPosts = posts.filter((post) => {
    const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === 'Tất cả' || post.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-section-padding-mobile md:py-section-padding">
          <ScrollReveal>
            <SectionTitle
              label="Blog"
              title="Tin tức, hướng dẫn và câu chuyện từ Biteo"
              subtitle="Cập nhật tính năng mới, mẹo sử dụng ứng dụng và thông tin hữu ích cho người dùng, đối tác và Cộng tác viên."
            />
          </ScrollReveal>

          <div className="mt-6 lg:mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition-colors ${
                    activeCategory === category ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-white text-subtext hover:text-text hover:border-primary/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-border bg-white px-3 lg:px-4 py-2 w-full md:w-auto max-w-xs">
              <Search className="h-4 w-4 text-subtext shrink-0" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm kiếm..."
                className="w-full bg-transparent text-sm outline-none text-subtext"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 80}>
                <NavLink to={`/blog/${post.slug}`} className="block">
                  <div className="card-base h-full overflow-hidden">
                    <div className="aspect-[16/9] w-full bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary">{post.category}</span>
                      <h3 className="mt-2 line-clamp-2 text-base font-semibold text-text">{post.title}</h3>
                      <p className="mt-2 text-xs text-subtext">{post.date} · {post.readTime}</p>
                    </div>
                  </div>
                </NavLink>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
