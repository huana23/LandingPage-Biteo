import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditShop() {
  const { shopId } = useParams(); // Lấy shopId từ URL
  const navigate = useNavigate();
  const [shopInfo, setShopInfo] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    booking: "",
    address: "",
    city: "",
    state: "",
    weekdayStart: "09:00",
    weekdayEnd: "20:00",
    weekendStart: "10:00",
    weekendEnd: "18:00",
    image: null, // preview ảnh
  });
  const [loading, setLoading] = useState(true);

  // --- Fetch dữ liệu salon hiện tại ---
  useEffect(() => {
    async function fetchShop() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/shops/${shopId}`);
        if (!res.ok) throw new Error("Không lấy được dữ liệu salon");
        const data = await res.json();
        setShopInfo({
          name: data.name || "",
          phone: data.phone || "",
          email: data.email || "",
          website: data.website || "",
          booking: data.btnBooking || "",
          address: data.address || "",
          city: data.city || "",
          state: data.state || "",
          weekdayStart: data.weekdayStart || "09:00",
          weekdayEnd: data.weekdayEnd || "20:00",
          weekendStart: data.weekendStart || "10:00",
          weekendEnd: data.weekendEnd || "18:00",
          image: data.imgStore || null,
        });
      } catch (err) {
        alert("Lỗi khi lấy dữ liệu salon: " + err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchShop();
  }, [shopId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Chỉ chấp nhận ảnh .jpg hoặc .png");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("Ảnh không được vượt quá 2MB");
      return;
    }

    // Preview tạm thời
    setShopInfo((prev) => ({ ...prev, image: URL.createObjectURL(file) }));

    // Upload lên server
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/shops/upload`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setShopInfo((prev) => ({ ...prev, image: data.url })); // URL thật
    } catch (err) {
      alert("Upload ảnh thất bại!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email } = shopInfo;
    if (!name || !phone || !email) {
      alert("Vui lòng điền đầy đủ các trường bắt buộc: Tên, Số điện thoại, Email!");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Email không hợp lệ!");
      return;
    }

    const dataToSend = {
      name: shopInfo.name,
      phone: shopInfo.phone,
      email: shopInfo.email,
      website: shopInfo.website,
      btnBooking: shopInfo.booking,
      address: shopInfo.address,
      city: shopInfo.city,
      state: shopInfo.state,
      imgStore: shopInfo.image,
      weekdayStart: shopInfo.weekdayStart,
      weekdayEnd: shopInfo.weekdayEnd,
      weekendStart: shopInfo.weekendStart,
      weekendEnd: shopInfo.weekendEnd,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shops/${shopId}`, {
        method: "PUT", // Thay đổi từ POST -> PUT
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Lỗi khi cập nhật salon");
      }

      alert("Đã cập nhật thông tin salon thành công!");

      // Quay lại trang quản lý salon
      navigate("/admin/manage-shop");
    } catch (err) {
      alert("Lỗi khi cập nhật salon: " + err.message);
    }
  };

  if (loading) return <p className="p-8">Đang tải dữ liệu salon...</p>;

  return (
    <div className="flex-1 overflow-y-auto bg-surface p-8">
      <section className="sp-8 space-y-8 mb-10">
  <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold">
    Cập nhật không gian
  </span>
  <h2 className="text-5xl font-headline font-bold text-on-surface tracking-tight">
    Sửa Salon
  </h2>
  <p className="text-on-surface-variant font-body max-w-xl italic border-l-2 border-primary-container pl-4">
    "Cập nhật thông tin salon để khách hàng luôn tiếp cận đúng và trải nghiệm tốt nhất."
  </p>
</section>

      <form className="space-y-16 pb-20" onSubmit={handleSubmit}>
        {/* Thông tin cơ bản */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-2">
            <h3 className="font-headline text-2xl font-semibold">Thông tin cơ bản</h3>
            <p className="text-sm text-on-surface-variant">
              Chi tiết định danh và liên hệ chính thức của salon.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-6 bg-surface-container-low p-8 rounded-xl tonal-layering">
            {/* Ảnh đại diện */}
            <div className="col-span-2 flex items-center gap-6 pb-4 border-b border-stone-200/50 mb-2">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-surface-container-highest border-2 border-dashed border-stone-300 flex items-center justify-center overflow-hidden group hover:border-primary/50 transition-all cursor-pointer">
                  {shopInfo.image ? (
                    <img
                      src={shopInfo.image}
                      alt="Salon"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">
                      add_a_photo
                    </span>
                  )}
                </div>
                <label
                  htmlFor="imageUpload"
                  className="absolute -bottom-1 -right-1 h-7 w-7 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">edit</span>
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold block">
                  Ảnh đại diện Salon
                </label>
                <p className="text-[10px] text-on-surface-variant">
                  Tải lên logo hoặc ảnh thương hiệu tiêu biểu (định dạng .jpg, .png, tối đa 2MB).
                </p>
              </div>
            </div>

            {/* Inputs cơ bản */}
            <div className="col-span-2 space-y-1">
              <label htmlFor="name" className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold">
                Tên Salon *
              </label>
              <input
                id="name"
                name="name"
                value={shopInfo.name}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="VD: Velvet & Bloom Beauty"
                type="text"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold">
                Số điện thoại *
              </label>
              <input
                id="phone"
                name="phone"
                value={shopInfo.phone}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="+84 90 000 0000"
                type="tel"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold">
                Email liên hệ *
              </label>
              <input
                id="email"
                name="email"
                value={shopInfo.email}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="contact@velvetbloom.vn"
                type="email"
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label htmlFor="website" className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold">
                Website
              </label>
              <input
                id="website"
                name="website"
                value={shopInfo.website}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="https://www.velvetbloom.vn"
                type="url"
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label htmlFor="booking" className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold">
                Link Đặt Lịch (Booking)
              </label>
              <input
                id="booking"
                name="booking"
                value={shopInfo.booking}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="https://booking.velvetbloom.vn"
                type="url"
              />
            </div>
          </div>
        </div>

        {/* Vị trí */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-2">
            <h3 className="font-headline text-2xl font-semibold">Vị trí</h3>
            <p className="text-sm text-on-surface-variant">
              Xác định địa chỉ để khách hàng dễ dàng tìm đến.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="bg-surface-container-low p-8 rounded-xl tonal-layering grid grid-cols-2 gap-6">
              <div className="col-span-2 space-y-1">
                <label htmlFor="address" className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold">
                  Địa chỉ
                </label>
                <input
                  id="address"
                  name="address"
                  value={shopInfo.address}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="Số 123 Đường Lê Lợi"
                  type="text"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="city" className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold">
                  Thành phố (City)
                </label>
                <input
                  id="city"
                  name="city"
                  value={shopInfo.city}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="Quận 1"
                  type="text"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="state" className="text-[10px] font-label uppercase tracking-widest text-stone-500 font-bold">
                  Tỉnh/Thành (State)
                </label>
                <input
                  id="state"
                  name="state"
                  value={shopInfo.state}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="TP. Hồ Chí Minh"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Giờ hoạt động */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-2">
            <h3 className="font-headline text-2xl font-semibold">Giờ hoạt động</h3>
            <p className="text-sm text-on-surface-variant">
              Thời gian mở cửa giúp khách hàng đặt lịch chính xác.
            </p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="bg-surface-container-low p-8 rounded-xl tonal-layering grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4">
                <span className="font-label text-xs text-on-surface-variant w-36">Thứ 2 - Thứ 6</span>
                <input
                  type="time"
                  name="weekdayStart"
                  value={shopInfo.weekdayStart}
                  onChange={handleChange}
                  className="bg-surface-container-lowest border-none text-right text-sm p-2 rounded-lg focus:ring-1 focus:ring-primary/30 text-primary font-bold w-32"
                />
                <span className="font-label text-xs text-on-surface-variant">-</span>
                <input
                  type="time"
                  name="weekdayEnd"
                  value={shopInfo.weekdayEnd}
                  onChange={handleChange}
                  className="bg-surface-container-lowest border-none text-right text-sm p-2 rounded-lg focus:ring-1 focus:ring-primary/30 text-primary font-bold w-32"
                />
              </div>

              <div className="flex items-center gap-4">
                <span className="font-label text-xs text-on-surface-variant w-36">Thứ 7 - Chủ nhật</span>
                <input
                  type="time"
                  name="weekendStart"
                  value={shopInfo.weekendStart}
                  onChange={handleChange}
                  className="bg-surface-container-lowest border-none text-right text-sm p-2 rounded-lg focus:ring-1 focus:ring-primary/30 text-primary font-bold w-32"
                />
                <span className="font-label text-xs text-on-surface-variant">-</span>
                <input
                  type="time"
                  name="weekendEnd"
                  value={shopInfo.weekendEnd}
                  onChange={handleChange}
                  className="bg-surface-container-lowest border-none text-right text-sm p-2 rounded-lg focus:ring-1 focus:ring-primary/30 text-primary font-bold w-32"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-on-primary font-bold rounded-lg hover:bg-primary-dark transition-all"
          >
            Cập nhật Salon
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditShop;