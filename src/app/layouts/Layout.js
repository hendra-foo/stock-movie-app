import Header from "./Header/Header";
import classes from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={classes.root}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
