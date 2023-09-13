import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import styles from "./Search.module.css";
const Search = () => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input
          type="text"
          className={styles.search}
          placeholder="Search a album of your choice"
        />
        <div>
          <button className={styles.searchBtn} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
