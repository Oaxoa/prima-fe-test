import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../test-utils.tsx";
import { Button } from "./button.tsx";

describe("Button", () => {
  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    renderWithTheme(<Button text="Save" onClick={onClick} />);

    await userEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not submit an enclosing form", async () => {
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    renderWithTheme(
      <form onSubmit={onSubmit}>
        <Button text="Save" />
      </form>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("is a toggle button only when `selected` is passed", () => {
    renderWithTheme(
      <>
        <Button text="Plain" />
        <Button text="On" selected />
        <Button text="Off" selected={false} />
      </>,
    );

    expect(screen.getByRole("button", { name: "Plain" })).not.toHaveAttribute("aria-pressed");
    expect(screen.getByRole("button", { name: "On", pressed: true })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Off", pressed: false })).toBeInTheDocument();
  });

  it("includes the badge in its accessible name", () => {
    renderWithTheme(<Button text="Inbox" badgeLabel="3" />);

    expect(screen.getByRole("button", { name: "Inbox 3" })).toBeInTheDocument();
  });

  it("uses the badge a11y label instead of the visible one", () => {
    renderWithTheme(<Button text="Inbox" badgeLabel="3" badgeA11yLabel="3 unread" />);

    expect(screen.getByRole("button", { name: "Inbox 3 unread" })).toBeInTheDocument();
  });
});
