import { Rocket, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ui/ScrollReveal";

const milestones = [
  {
    year: "2022",
    title: "Khởi nguyên",
    description:
      "Thành lập đội ngũ nòng cốt và phát triển ý tưởng về một siêu ứng dụng phục vụ đời sống.",
  },
  {
    year: "2023",
    title: "Ra mắt MVPs",
    description:
      "Chính thức giới thiệu các phân hệ dịch vụ đầu tiên và đạt mốc 100,000 người dùng.",
  },
  {
    year: "2024",
    title: "Tăng tốc",
    description:
      "Mở rộng hệ sinh thái đối tác và tích hợp AI vào quy trình phục vụ khách hàng.",
  },
  {
    year: "2025+",
    title: "Vươn tầm",
    description:
      "Hoàn thiện mô hình Siêu ứng dụng và hướng tới thị trường khu vực Đông Nam Á.",
    isFuture: true,
  },
];

const teamMembers = [
  {
    name: "Trần Minh Quân",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Lê Thu Thảo",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "Nguyễn Hoàng Nam",
    role: "Product Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
  {
    name: "Phạm Mỹ Linh",
    role: "Head of Marketing",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/10 via-secondary/5 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-section-padding-mobile md:py-section-padding">
          <div className="text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 mt-8 lg:mt-0 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-label-lg font-semibold text-primary">
                  Về chúng tôi
                </span>
              </span>
              <h1 className="text-display-xs sm:text-display-sm md:text-display-md lg:text-display-lg xl:text-display-xl font-bold text-text mb-8 leading-[1.1] tracking-tight">
                Kiến tạo tương lai số Việt Nam
              </h1>
              <p className="text-body-lg text-subtext max-w-2xl mx-auto mb-12 leading-relaxed">
                Chúng tôi không chỉ xây dựng một ứng dụng; chúng tôi kiến tạo
                một hệ sinh thái số hiện đại, nơi công nghệ phục vụ con người và
                kết nối cộng đồng một cách thông minh nhất.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/download"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-body-lg font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Bắt đầu ngay
                </Link>
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur-sm px-8 py-4 text-body-lg font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-lg"
                >
                  Khám phá thêm
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Câu chuyện Section */}
      <section className="py-section-padding-mobile md:py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <ScrollReveal className="md:col-span-5 mb-12 md:mb-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full aspect-[4/5] object-cover"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="md:col-span-7 md:pl-12">
              <h2 className="text-headline-lg font-bold text-text mb-8">
                Hành trình của chúng tôi
              </h2>
              <p className="text-body-lg text-subtext mb-6 leading-relaxed">
                Khởi nguồn từ khao khát thu hẹp khoảng cách công nghệ tại Việt
                Nam, Biteo ra đời với một niềm tin mãnh liệt: Mỗi người dân Việt
                Nam đều xứng đáng được tiếp cận với những dịch vụ số tiện lợi,
                an toàn và minh bạch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="p-6 rounded-3xl bg-white border border-border shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Rocket className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-title-md font-bold text-text mb-2">
                    Sứ mệnh
                  </h3>
                  <p className="text-body-sm text-subtext leading-relaxed">
                    Mang công nghệ đến gần hơn với mọi người, giải quyết những
                    thách thức thực tế của cuộc sống hàng ngày bằng giải pháp số
                    sáng tạo.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-border shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-title-md font-bold text-text mb-2">
                    Tầm nhìn
                  </h3>
                  <p className="text-body-sm text-subtext leading-relaxed">
                    Trở thành Siêu ứng dụng hàng đầu khu vực, đồng hành cùng sự
                    phát triển bền vững của cộng đồng số Việt Nam.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Giá trị cốt lõi Section - Bento Grid */}
      <section className="py-section-padding-mobile md:py-section-padding bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-headline-lg font-bold text-text mb-4">
                Giá trị làm nên Biteo
              </h2>
              <p className="text-subtext max-w-xl mx-auto text-body-lg">
                Những nguyên tắc cốt lõi dẫn dắt mọi quyết định và hành động của
                chúng tôi trong hành trình kiến tạo tương lai.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sáng tạo - Full width on large screens */}
            <ScrollReveal
              delay={100}
              className="md:col-span-2 glass-card rounded-3xl p-8 hover:scale-[1.02] transition-transform flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    lightbulb
                  </span>
                </div>
                <h3 className="text-title-md font-bold text-text mb-3">
                  Sáng tạo không ngừng
                </h3>
                <p className="text-body-lg text-subtext leading-relaxed">
                  Chúng tôi luôn tìm kiếm những cách tiếp cận mới, phá vỡ các
                  giới hạn để mang lại giải pháp đột phá.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="text-primary opacity-20 text-7xl font-bold">
                  01
                </span>
              </div>
            </ScrollReveal>

            {/* Tin cậy */}
            <ScrollReveal
              delay={150}
              className="glass-card rounded-3xl p-8 hover:scale-[1.02] transition-transform flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    verified_user
                  </span>
                </div>
                <h3 className="text-title-md font-bold text-text mb-3">
                  Tin cậy & Bảo mật
                </h3>
                <p className="text-body-sm text-subtext leading-relaxed">
                  Sự an tâm của người dùng là ưu tiên hàng đầu trong mọi dòng mã
                  chúng tôi viết ra.
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="text-primary opacity-20 text-6xl font-bold">
                  02
                </span>
              </div>
            </ScrollReveal>

            {/* Cộng đồng */}
            <ScrollReveal
              delay={200}
              className="glass-card rounded-3xl p-8 hover:scale-[1.02] transition-transform flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    groups
                  </span>
                </div>
                <h3 className="text-title-md font-bold text-text mb-3">
                  Vì Cộng đồng
                </h3>
                <p className="text-body-sm text-subtext leading-relaxed">
                  Mọi sự phát triển của Biteo đều hướng tới lợi ích chung và sự
                  thịnh vượng của xã hội.
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="text-primary opacity-20 text-6xl font-bold">
                  03
                </span>
              </div>
            </ScrollReveal>

            {/* Tốc độ - Full width */}
            <ScrollReveal
              delay={250}
              className="md:col-span-4 glass-card rounded-3xl p-8 hover:scale-[1.01] transition-transform flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-3xl">
                    speed
                  </span>
                </div>
                <h3 className="text-title-md font-bold text-text mb-3">
                  Tốc độ & Hiệu quả
                </h3>
                <p className="text-body-lg text-subtext max-w-2xl leading-relaxed">
                  Trong thế giới số, tốc độ là chìa khóa. Chúng tôi phản ứng
                  nhanh, hành động quyết liệt để dẫn đầu xu hướng và phục vụ
                  người dùng kịp thời nhất.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Speed visualization"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lộ trình phát triển Section */}
      <section className="py-section-padding-mobile md:py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <h2 className="text-headline-lg font-bold text-text mb-16 text-center">
              Lộ trình phát triển
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 100}>
                {/* Timeline Item */}
                <div className="flex flex-col h-full">
                  {/* Year Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`
                      w-12 h-12 rounded-full flex items-center justify-center shrink-0
                      ${milestone.isFuture ? "bg-border" : "bg-primary"}
                    `}
                    >
                      <span
                        className={`font-bold ${milestone.isFuture ? "text-subtext" : "text-white"}`}
                      >
                        {milestone.year.slice(2)}
                      </span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-primary to-border" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`
                    flex-1 p-6 rounded-3xl transition-all
                    ${
                      milestone.isFuture
                        ? "bg-white/70 border border-dashed border-border"
                        : "bg-white border-2 border-primary shadow-lg shadow-primary/5"
                    }
                  `}
                  >
                    <h4 className="text-title-md font-bold text-text mb-3">
                      {milestone.title}
                    </h4>
                    <p className="text-body-sm text-subtext leading-relaxed">
                      {milestone.description}
                    </p>

                    {milestone.isFuture && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-xs font-semibold text-secondary">
                          Sắp tới
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Đội ngũ Section */}
      <section className="py-section-padding-mobile md:py-section-padding bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-headline-sm md:text-headline-md lg:text-headline-lg font-bold text-text mb-6">
                  Đội ngũ chuyên gia
                </h2>
                <p className="text-subtext text-body-lg leading-relaxed">
                  Hội tụ những con người đầy nhiệt huyết, giỏi chuyên môn và
                  luôn khao khát mang lại giá trị tốt nhất cho khách hàng.
                </p>
              </div>
              <Link
                to="/careers"
                className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all whitespace-nowrap"
              >
                Xem tất cả thành viên
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 80}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-surface-container">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-title-md font-bold text-text">
                    {member.name}
                  </h4>
                  <p className="text-primary font-bold text-body-sm">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-section-padding-mobile md:py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="bg-primary rounded-3xl p-12 md:p-20 relative overflow-hidden text-center">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-headline-md md:text-headline-lg font-bold text-white mb-8">
                  Sẵn sàng trải nghiệm dịch vụ số thế hệ mới?
                </h2>
                <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Tham gia cùng hàng triệu người dùng đã tin tưởng Biteo để nâng
                  tầm chất lượng cuộc sống của bạn ngay hôm nay.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/download"
                    className="inline-flex items-center justify-center
             bg-white text-primary
             px-6 py-3 sm:px-10 sm:py-5
             rounded-full
             font-bold
             text-sm sm:text-lg
             hover:bg-white/90
             hover:-translate-y-0.5
             transition-all
             shadow-xl"
                  >
                    Tải App trên App Store
                  </Link>

                  <Link
                    to="/download"
                    className="inline-flex items-center justify-center
             bg-transparent text-white
             border-2 border-white/30
             px-6 py-3 sm:px-10 sm:py-5
             rounded-full
             font-bold
             text-sm sm:text-lg
             hover:bg-white/10
             hover:-translate-y-0.5
             transition-all"
                  >
                    Tải App trên Play Store
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
