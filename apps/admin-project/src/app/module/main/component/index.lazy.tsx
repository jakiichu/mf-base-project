import { useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";

const Main = (): ReactNode => {
    const navigate = useNavigate();

    const handleOnRedirect = (to: string) => () => {
        void navigate({ to });
    };

    return (
        <div>
            <p>Админка: Пользователи</p>
            <button onClick={handleOnRedirect("/admin/auth")}>
                Кнопка: Auth
            </button>
            <button onClick={handleOnRedirect("/admin/user")}>
                Кнопка: User
            </button>
        </div>
    );
};

export default Main;
