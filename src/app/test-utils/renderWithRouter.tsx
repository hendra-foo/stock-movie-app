import { render, RenderResult } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const { pathname } = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
};

type RouterProps = {
  children: React.ReactElement;
};

const Router = ({ children }: RouterProps): JSX.Element => {
  return (
    <MemoryRouter>
      <LocationDisplay />
      {children}
    </MemoryRouter>
  );
};

export const renderWithRouter = (ui: JSX.Element): RenderResult => {
  return render(<Router>{ui}</Router>);
};
