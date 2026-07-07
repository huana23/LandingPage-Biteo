import { useState } from 'react';
import Button from './Button';

function Newsletter({ cta = 'Đăng ký' }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
  };

  return (
    <div className="card-base p-6 md:p-8">
      <h3 className="text-xl font-semibold text-text">Nhận tin từ Biteo</h3>
      <p className="mt-2 text-subtext">
        Cập nhật tính năng mới, ưu đãi đối tác và cơ hội cộng tác viên.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email@example.com"
          required
          className="flex-1 rounded-full border border-border bg-white px-5 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
        <Button type="submit">{cta}</Button>
      </form>
    </div>
  );
}

export default Newsletter;
