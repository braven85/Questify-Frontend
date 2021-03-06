import React from "react";
import AvatarIcon from "../Avatar/AvatarIcon";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/api";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Notiflix from "notiflix";

const Navbar = () => {
  Notiflix.Notify.init({ timeout: 3000 });
  const { accessToken } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser(accessToken));
    navigate("/Questify");
    Notiflix.Notify.success("Logged out");
  };

  return (
    <div className={styles.navbar}>
      <div>
        <h2 className={styles.title}>Questify</h2>
      </div>
      <div className={styles.buttons}>
        <div className={styles.avatar}>
          <AvatarIcon />
        </div>

        <svg
          className={styles.icon}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#242a37"
            d="M23.029 9.611h-1.916c0.007-0.212 0.011-0.426 0.011-0.64 0-0.242-0.196-0.438-0.437-0.438h-9.372c-0.242 0-0.437 0.196-0.437 0.438 0 0.215 0.004 0.428 0.011 0.64h-1.916c-0.242 0-0.438 0.196-0.438 0.438 0 1.96 0.512 3.81 1.443 5.208 0.92 1.382 2.144 2.175 3.468 2.252 0.3 0.326 0.617 0.593 0.947 0.796v1.945h-0.734c-0.887 0-1.609 0.722-1.609 1.609v0.734h-0.031c-0.242 0-0.438 0.196-0.438 0.437s0.196 0.438 0.438 0.438h7.966c0.242 0 0.438-0.196 0.438-0.438s-0.196-0.437-0.438-0.437h-0.031v-0.734c0-0.887-0.722-1.609-1.609-1.609h-0.734v-1.945c0.33-0.203 0.647-0.469 0.947-0.796 1.323-0.077 2.548-0.87 3.468-2.252 0.93-1.398 1.443-3.248 1.443-5.208 0-0.242-0.196-0.438-0.438-0.438zM10.704 14.772c-0.767-1.153-1.218-2.661-1.287-4.286h1.518c0.158 1.997 0.627 3.842 1.359 5.308 0.117 0.233 0.239 0.454 0.365 0.661-0.728-0.275-1.401-0.849-1.956-1.683zM21.296 14.772c-0.555 0.834-1.228 1.408-1.956 1.683 0.127-0.208 0.249-0.428 0.365-0.661 0.733-1.465 1.201-3.311 1.359-5.308h1.518c-0.069 1.624-0.519 3.133-1.287 4.286z"
          ></path>
        </svg>

        <button
          type="button"
          className={styles.logout_button}
          onClick={handleClick}
        >
          <svg
            className={styles.logout_icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 41 32"
          >
            <path d="M34.324 14.899h-21.396c-1.020 0-1.847 0.827-1.847 1.847s0.827 1.847 1.847 1.847h21.396l-2.388 2.388c-0.721 0.721-0.721 1.89 0 2.612s1.89 0.721 2.612 0l5.54-5.54c0.043-0.043 0.083-0.087 0.122-0.134 0.009-0.011 0.017-0.024 0.027-0.035 0.028-0.036 0.056-0.072 0.081-0.11 0.007-0.011 0.013-0.023 0.021-0.034 0.025-0.040 0.050-0.080 0.072-0.121 0.004-0.008 0.008-0.017 0.012-0.025 0.023-0.045 0.046-0.091 0.065-0.138 0.002-0.006 0.004-0.012 0.007-0.018 0.020-0.050 0.039-0.1 0.054-0.152 0.002-0.007 0.003-0.013 0.005-0.020 0.015-0.051 0.029-0.102 0.039-0.155 0.003-0.016 0.004-0.032 0.007-0.048 0.008-0.044 0.015-0.087 0.020-0.132 0.006-0.061 0.009-0.122 0.009-0.184s-0.003-0.123-0.009-0.184c-0.004-0.045-0.012-0.089-0.020-0.133-0.003-0.015-0.004-0.031-0.007-0.046-0.011-0.053-0.024-0.105-0.039-0.156-0.002-0.006-0.003-0.012-0.005-0.018-0.016-0.052-0.034-0.103-0.055-0.153-0.002-0.005-0.004-0.011-0.006-0.017-0.020-0.048-0.042-0.094-0.066-0.139-0.004-0.008-0.008-0.016-0.012-0.024-0.023-0.042-0.048-0.082-0.073-0.122-0.007-0.011-0.013-0.022-0.020-0.033-0.025-0.038-0.053-0.074-0.081-0.11-0.009-0.012-0.017-0.024-0.026-0.035-0.039-0.047-0.079-0.091-0.122-0.134l-5.54-5.54c-0.361-0.361-0.833-0.541-1.306-0.541s-0.945 0.18-1.306 0.541c-0.721 0.721-0.721 1.89 0 2.612l2.388 2.388z"></path>
            <path d="M15.107 31.853c5.041 0 9.731-2.501 12.546-6.689 0.569-0.846 0.344-1.994-0.503-2.563s-1.994-0.344-2.563 0.503c-2.127 3.166-5.672 5.056-9.48 5.056-6.293 0-11.413-5.12-11.413-11.413s5.12-11.413 11.413-11.413c3.798 0 7.336 1.882 9.465 5.033 0.571 0.845 1.719 1.067 2.564 0.496s1.067-1.719 0.496-2.564c-2.817-4.17-7.499-6.659-12.526-6.659-8.33 0-15.107 6.777-15.107 15.107s6.777 15.107 15.107 15.107z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
