import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from "../components/icons/CloseIcon";
import SearchIcon from "../components/icons/SearchIcon";
import { megaSearchActions } from "../redux/slice/megaSearchSlice";
import MegaSearch from "./MegaSearch";
import classes from "./layout.module.scss";
import LoadingIcon from "../components/icons/LoadingIcon";

const Header = () => {
  const { open, isSearching, isLoadMore } = useSelector((state) => state.megaSearch);
  const dispatch = useDispatch();

  const toggleSearchView = useCallback(() => {
    dispatch(megaSearchActions.toggle());
  }, [dispatch]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <header className={classes.header}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-xl">
          <Link className="navbar-brand" to="/">
            StockMovie
          </Link>
          <div className="d-flex">
            <button className={classes.btnSearchToggler} onClick={toggleSearchView}>
              <span className="me-2">SEARCH</span>
              {isSearching || isLoadMore ? <LoadingIcon /> : open ? <CloseIcon /> : <SearchIcon />}
            </button>
          </div>
        </div>
      </nav>
      {open && <MegaSearch />}
    </header>
  );
};

export default Header;
