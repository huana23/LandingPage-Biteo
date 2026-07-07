import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, Edit, Trash2, Star } from "lucide-react";

function ManageShop() {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState(null);

  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchSalons() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shops`);
        if (!response.ok) throw new Error('Failed to fetch salons');
        const data = await response.json();

        const mappedData = data.map((shop) => ({
          id: shop._id,
          name: shop.name,
          location: `${shop.city} • ${shop.state}`,
          rating:
            shop.reviews && shop.reviews.length > 0
              ? (
                  shop.reviews.reduce((sum, r) => sum + r.rating, 0) /
                  shop.reviews.length
                ).toFixed(1)
              : 0,
          reviews: shop.reviews ? shop.reviews.length : 0,
          status: shop.status || "active",
          date: new Date(shop.createdAt).toLocaleDateString("en-GB"),
          img: shop.imgStore
            ? shop.imgStore.startsWith("http")
              ? shop.imgStore
              : `${import.meta.env.VITE_API_URL}${shop.imgStore}`
            : "https://placekitten.com/400/300",
        }));

        setSalons(mappedData);
      } catch (error) {
        // Error handled silently with loading state
      } finally {
        setLoading(false);
      }
    }

    fetchSalons();
  }, []);

  if (loading) return <p className="p-8">Đang tải dữ liệu...</p>;

  // --- Pagination ---
  const totalPages = Math.ceil(salons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSalons = salons.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // --- Modal xóa ---
  const openDeleteModal = (salon) => {
    setSelectedSalon(salon);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedSalon(null);
    setShowDeleteModal(false);
  };

  const confirmDelete = async () => {
    if (!selectedSalon) return;

    try {
      const response = await fetch(
        `/api/shops/${selectedSalon.id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setSalons((prev) => prev.filter((salon) => salon.id !== selectedSalon.id));
        closeDeleteModal();
        alert("Xóa salon thành công!");
      } else {
        alert("Xóa salon thất bại!");
      }
    } catch (error) {
      // Error handled silently
      alert("Có lỗi xảy ra khi xóa salon.");
    }
  };

  return (
    <section className="p-4 md:p-8 space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
        <div className="space-y-2">
          <span className="font-label uppercase tracking-widest text-xs text-secondary font-semibold">
            Dashboard • Salon Management
          </span>
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-on-surface tracking-tight">
            Quản lý danh sách Salon
          </h2>
        </div>
        <Link
          to="/admin/manage-shop/add"
          className="bg-primary text-on-primary px-6 md:px-8 py-3 rounded-full font-body font-semibold text-sm flex items-center gap-2 editorial-shadow hover:bg-primary-container hover:text-on-primary-container transition-all duration-300"
        >
          <PlusCircle className="w-5 h-5" />
          Thêm Salon mới
        </Link>
      </div>

      {/* Table for md+ */}
      <div className="hidden md:block bg-surface-container-lowest rounded-2xl editorial-shadow overflow-hidden">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-6 py-4 font-label uppercase tracking-wider text-[10px] text-on-surface-variant font-bold border-b border-stone-100">
                Tên Salon
              </th>
              <th className="px-6 py-4 font-label uppercase tracking-wider text-[10px] text-on-surface-variant font-bold border-b border-stone-100">
                Vị trí
              </th>
              <th className="px-6 py-4 font-label uppercase tracking-wider text-[10px] text-on-surface-variant font-bold border-b border-stone-100">
                Đánh giá
              </th>
              <th className="px-6 py-4 font-label uppercase tracking-wider text-[10px] text-on-surface-variant font-bold border-b border-stone-100">
                Ngày tham gia
              </th>
              <th className="px-6 py-4 font-label uppercase tracking-wider text-[10px] text-on-surface-variant font-bold border-b border-stone-100">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {currentSalons.map((salon) => (
              <tr
                key={salon.id}
                className="group hover:bg-surface-container-low transition-colors duration-150"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-stone-100">
                      <img
                        alt={salon.name}
                        className="w-full h-full object-cover"
                        src={salon.img}
                      />
                    </div>
                    <div>
                      <p className="font-headline font-bold text-on-surface">
                        {salon.name}
                      </p>
                      <p className="text-[11px] text-stone-400 font-body">
                        ID: {salon.id}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant font-body">
                  {salon.location}
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-bold">{salon.rating}</span>
                    <span className="text-[10px] text-stone-400 font-body ml-1">
                      ({salon.reviews})
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant font-body">
                  {salon.date}
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      to={`/admin/manage-shop/edit/${salon.id}`}
                      className="p-2 text-stone-400 hover:text-primary transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => openDeleteModal(salon)}
                      className="p-2 text-stone-400 hover:text-error transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low/30">
          <p className="text-xs text-stone-500 font-body">
            Hiển thị{" "}
            <span className="font-bold">
              {startIndex + 1} - {Math.min(startIndex + itemsPerPage, salons.length)}
            </span>{" "}
            của <span className="font-bold">{salons.length}</span> salon
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:bg-white hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ${
                  currentPage === i + 1
                    ? "bg-primary text-on-primary"
                    : "text-on-surface hover:bg-stone-200/50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:bg-white hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {currentSalons.map((salon) => (
          <div
            key={salon.id}
            className="bg-surface-container-lowest rounded-xl shadow editorial-shadow p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-stone-100 shrink-0">
                <img
                  alt={salon.name}
                  className="w-full h-full object-cover"
                  src={salon.img}
                />
              </div>
              <div className="flex-1">
                <p className="font-headline font-bold text-on-surface">{salon.name}</p>
                <p className="text-[11px] text-stone-400 font-body">ID: {salon.id}</p>
                <p className="text-sm text-on-surface-variant font-body mt-1">{salon.location}</p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 mt-1 rounded-full text-[10px] font-bold font-label uppercase tracking-wider ${
                    salon.status === "active"
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {salon.status === "active" ? "Hoạt động" : "Tạm dừng"}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-2">
              <Link
                to={`/admin/manage-shop/edit/${salon.id}`}
                className="p-2 text-stone-400 hover:text-primary transition-colors"
              >
                <Edit className="w-5 h-5" />
              </Link>
              <button
                onClick={() => openDeleteModal(salon)}
                className="p-2 text-stone-400 hover:text-error transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && selectedSalon && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-[0_32px_64px_-12px_rgba(28,28,25,0.06)] overflow-hidden border border-outline-variant/5">
            <div className="h-2 w-full bg-error"></div>
            <div className="p-8">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-full bg-error-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-error text-2xl">warning</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-on-surface font-bold mb-2">
                    Xác nhận Xóa Salon
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Bạn có chắc chắn muốn xóa salon này không? Hành động này{" "}
                    <span className="text-error font-semibold">không thể hoàn tác</span>{" "}
                    và tất cả dữ liệu liên quan sẽ bị xóa vĩnh viễn.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-5 mb-8 border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 p-1">
                    <img
                      alt={selectedSalon.name}
                      className="w-full h-full object-cover rounded-md"
                      src={selectedSalon.img}
                    />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary mb-1">
                      ĐANG CHỌN XÓA
                    </p>
                    <h4 className="font-headline text-lg text-on-surface font-bold">
                      {selectedSalon.name}
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      {selectedSalon.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">
                  Nhập "XÓA" để xác nhận
                </label>
                <input
                  type="text"
                  placeholder="XÓA"
                  value={selectedSalon.confirmText || ""}
                  onChange={(e) =>
                    setSelectedSalon({ ...selectedSalon, confirmText: e.target.value })
                  }
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary/30 focus:bg-surface-container-highest transition-all text-on-surface"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={closeDeleteModal}
                  className="flex-1 px-8 py-3.5 rounded-full border border-outline-variant/30 text-on-surface font-bold hover:bg-surface-container-high transition-colors active:scale-95 duration-200"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={() => {
                    if ((selectedSalon.confirmText || "").toUpperCase() === "XÓA") {
                      confirmDelete();
                    } else {
                      alert('Vui lòng nhập "XÓA" để xác nhận!');
                    }
                  }}
                  className="flex-1 px-8 py-3.5 rounded-full bg-error text-on-error font-bold shadow-lg shadow-error/20 hover:opacity-90 active:scale-95 transition-all duration-200"
                >
                  Xác nhận Xóa
                </button>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-error/5 blur-3xl"></div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ManageShop;