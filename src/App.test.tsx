import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("monta la aplicación y muestra el contenido principal", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
