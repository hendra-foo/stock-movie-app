import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../components/icons/CloseIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import { megaSearchActions } from "../../redux/slice/megaSearchSlice";
import MegaSearch from "../MegaSearch/MegaSearch";
import classes from "./header.module.scss";
import LoadingIcon from "../../components/icons/LoadingIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

const Header = (): JSX.Element => {
  const { open, isSearching, isLoadmore } = useAppSelector((state) => state.megaSearch);
  const dispatch = useAppDispatch();

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
              {isSearching || isLoadmore ? <LoadingIcon /> : open ? <CloseIcon /> : <SearchIcon />}
            </button>
          </div>
        </div>
      </nav>
      {open && <MegaSearch />}
    </header>
  );
};

export default Header;
