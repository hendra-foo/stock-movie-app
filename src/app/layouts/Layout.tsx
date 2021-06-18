import Header from "./Header/Header";
import classes from "./layout.module.scss";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={classes.root}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
