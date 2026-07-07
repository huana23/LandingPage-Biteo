import { Link } from 'react-router-dom';
import ScrollReveal from '../../ui/ScrollReveal';
import SectionTitle from '../../ui/SectionTitle';

const partners = [
  {
    name: 'VinCommerce',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHrA5KnwxszcKNYlqIMVuv8-pO7SmRYFsYBgAPbZc1I5FqS4AwWsMlKrva4ijrZC-JCazEv1CCI1KbJwbZ1_C-T6IxFvBBEdKXD9jndzG4FLa5gTt4aWPCyrCIIZkstocXoyzPxQsuENezOz8B868tpjzniORPOjD8Cd6DWO1qMhomokqXbh8IzNvQFFlX-SE0mXXokt27irfn7lemxJf5UtV1k_i7-1vo53tf-DxPWaa5HLTWLq8TlkJiSHftSrJvU2_vOR38m8Y',
    alt: 'VinCommerce - Đối tác bán lẻ lớn nhất Việt Nam',
  },
  {
    name: 'Viettel',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMcAR0zQBLrry-8T_PDadnjU-4Rt1eC8i9Feo6HhVMwhs3r-XBX77H9l-yJtkNfP6LrkS0EEpEsxmd7SlU11fqzYU6XeoLlWrUuCXFf732AzK6xRo13jgUpkA96smbKTuho1lxlMBKuelnXTAJy-Br26lPc9NyToy6nE8NJ0PCwj-NSTebG8WuRKSvo_7AQuXggI3e9xbbPM_vAvF79jufCucIXYy69DZaizmQahPszv2t6YF2kUiF5gzxs-fFaRdosu40PNhjxmo',
    alt: 'Viettel - Đối tác viễn thông chiến lược',
  },
  {
    name: 'VietinBank',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQQpql_wFH7S5rgJQtR9BYKPibWMSss02Av_P7OpfYSOamyThMs5mtz23otLZp1D-AaA2J6_Eqsj3AjjKKMiY-uPY8SgPchSO4LIKeOXhTtyNFfNkko9kPbQInyP7Mjhc-kCskbITmsifg4R-x3P7oUQ0EKUkMDc67xFtTgl3GAxqShDf5LS1zx3Ih1G4dN5J5R3CjcIZtrk99emPE_M73EQDRMUOLuowixhDI0OaN9v_zoaVGW-JX1YJJdJt9wDQwNY3C_skV-RI',
    alt: 'VietinBank - Đối tác tài chính uy tín',
  },
  {
    name: 'Masan',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRdn8oaidtv7eCPzqP_w2Zb9FshDSi3ZYMnciHskcSK5fl5mxQWHCPsw7_AzeuUR6eadi0Jdv0pYoZrGVvo0fzPZf-qO0SxaH6Fblm6yKehuwK-q4i5uVouslHS4nwsklzXsl9UoVQWGqD76nA2_Q_kXTZUVqDrNcdFYF3BP9NCT85xm2vfRdsk2CarGXkC5zu2hsKfYTBnoKV2PnwofJ3d6TjZ9jyIpRUm22z4H66NHlxf4JSQd-j4dc2_sMQSKVCQpz0Nc5c2ec',
    alt: 'Masan - Đối tác thực phẩm hàng đầu',
  },
  {
    name: 'Grab',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXa81GTakJOphRQlC4zxXpvr39yT_fSKdAHT54o2WxWJLYrcp8oH7MbQMXw5jFs1hgRIfueit2sKOUruNrjC18iE139E0428bAhTfJD8FE-qgUJoNH0W_w3nqnQU0IxAURsXggsHTO3kvClErVisTcKuPtE74EyrxSclaxgR0ftOqz8Ocu1P2vWRv3sKcXDGyeHbPiAkQcbmB_E5nPWboBVnNsj-EB8slhCM9DjqvuX4_PPyqRd3C03699fxdq93UHiTGz4oNPwSY',
    alt: 'Grab - Đối tác giao hàng nhanh chóng',
  },
];

function PartnersSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <ScrollReveal>
          <SectionTitle
            label="Đối tác"
            title="Đối tác đồng hành tin cậy"
            subtitle="Hệ sinh thái Biteo tự hào được tin tưởng bởi các thương hiệu lớn"
          />
        </ScrollReveal>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 100} className="w-full">
              <div className="group relative flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-2xl border border-border/50 bg-white transition-all duration-500 hover:shadow-xl hover:border-primary/20 hover:bg-primary/5 min-h-[80px] sm:min-h-[100px]">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-8 w-auto sm:h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-text text-white text-label-sm px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {partner.name}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={600}>
          <div className="mt-20 text-center">
            <p className="text-subtext mb-4">Bạn muốn trở thành đối tác của Biteo?</p>
            <Link 
              to="/partners"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Trở thành đối tác
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default PartnersSection;
