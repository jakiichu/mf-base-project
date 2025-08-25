import { ReactNode } from 'react';
import { useNavigate } from '@tanstack/react-router';

const Main = (): ReactNode => {
  const navigate = useNavigate();

  const handleOnRedirect = (to: string): void => {
    void navigate({ to });
  };

  return (
    <div>
      Обычное: Пользователи
      <button onClick={() => handleOnRedirect('/admin/auth')}>
        Кнопка: Auth
      </button>
      <button onClick={() => handleOnRedirect('/admin/user')}>
        Кнопка: User
      </button>
    </div>
  );
};

export default Main;
