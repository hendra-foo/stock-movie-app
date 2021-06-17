import { render } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const { pathname } = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
};

const Router = ({ children }) => {
  return (
    <MemoryRouter>
      <LocationDisplay />
      {children}
    </MemoryRouter>
  );
};

export const renderWithRouter = (ui) => {
  return render(ui, { wrapper: Router });
};
