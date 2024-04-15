'use client';

import { useCounterStore } from '@/stores/providers/counter-store-provider';
import { useUserStore } from '@/stores/providers/user-store-provider';

export const HomePage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  );

  const { username, full_name, email, phone } = useUserStore(
    (state) => state.user,
  );
  const updateUser = useUserStore((state) => state.updateUser);

  return (
    <>
      <div>
        Count: {count}
        <hr className="border-black" />
        <button
          className="px-3 py-1 mt-2 mr-1 bg-white rounded "
          type="button"
          onClick={() => void incrementCount()}
        >
          Increment Count
        </button>
        <button
          className="px-3 py-1 mt-2 mr-1 bg-white rounded "
          type="button"
          onClick={() => void decrementCount()}
        >
          Decrement Count
        </button>
      </div>

      <div className="flex flex-col gap-1 pt-2 w-52">
        <p>Username: {username}</p>
        <p>Full name: {full_name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => updateUser({ username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Full name"
          onChange={(e) => updateUser({ full_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => updateUser({ email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => updateUser({ phone: e.target.value })}
        />
      </div>
    </>
  );
};
