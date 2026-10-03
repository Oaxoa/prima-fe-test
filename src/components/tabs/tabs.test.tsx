import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../test-utils.tsx";
import { Tabs } from "./tabs.tsx";
import type { ITabsProps } from "./types.ts";

const renderTabs = (props: Omit<ITabsProps, "children"> = {}) =>
  renderWithTheme(
    <Tabs {...props}>
      <Tabs.List aria-label="Sections">
        <Tabs.Tab value="emails">Emails</Tabs.Tab>
        <Tabs.Tab value="files">Files</Tabs.Tab>
        <Tabs.Tab value="edits">Edits</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="emails">Emails content</Tabs.Panel>
      <Tabs.Panel value="files">Files content</Tabs.Panel>
      <Tabs.Panel value="edits">Edits content</Tabs.Panel>
    </Tabs>,
  );

const tab = (name: string) => screen.getByRole("tab", { name });

describe("Tabs", () => {
  it("selects the first tab when no defaultValue is given", () => {
    renderTabs();

    expect(screen.getByRole("tab", { selected: true })).toBe(tab("Emails"));
    expect(screen.getByRole("tabpanel")).toHaveAccessibleName("Emails");
  });

  it("selects the defaultValue tab", () => {
    renderTabs({ defaultValue: "files" });

    expect(screen.getByRole("tab", { selected: true })).toBe(tab("Files"));
    expect(screen.getByRole("tabpanel")).toHaveAccessibleName("Files");
  });

  it("shows only the panel of the clicked tab", async () => {
    renderTabs();

    await userEvent.click(tab("Edits"));

    expect(screen.getByRole("tab", { selected: true })).toBe(tab("Edits"));
    expect(screen.getAllByRole("tabpanel")).toHaveLength(1);
    expect(screen.getByRole("tabpanel")).toHaveAccessibleName("Edits");
  });

  it("calls onChange and follows `value` when controlled", async () => {
    const onChange = vi.fn();
    renderTabs({ value: "emails", onChange });

    await userEvent.click(tab("Files"));

    expect(onChange).toHaveBeenCalledWith("files");
    // the parent didn't update `value`, so the selection stays put
    expect(screen.getByRole("tab", { selected: true })).toBe(tab("Emails"));
  });

  it("keeps only the selected tab in the Tab order, then the panel", async () => {
    renderTabs({ defaultValue: "files" });

    await userEvent.tab();
    expect(tab("Files")).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole("tabpanel")).toHaveFocus();
  });

  it("moves focus with arrow, Home and End keys, and selects with Enter", async () => {
    renderTabs();
    await userEvent.tab();

    await userEvent.keyboard("{ArrowRight}");
    expect(tab("Files")).toHaveFocus();

    await userEvent.keyboard("{End}");
    expect(tab("Edits")).toHaveFocus();

    await userEvent.keyboard("{ArrowRight}");
    expect(tab("Emails")).toHaveFocus();

    await userEvent.keyboard("{ArrowLeft}");
    expect(tab("Edits")).toHaveFocus();

    await userEvent.keyboard("{Home}");
    expect(tab("Emails")).toHaveFocus();

    // focus alone doesn't select (manual activation)
    await userEvent.keyboard("{ArrowRight}");
    expect(tab("Emails")).toHaveAttribute("aria-selected", "true");

    await userEvent.keyboard("{Enter}");
    expect(screen.getByRole("tab", { selected: true })).toBe(tab("Files"));
  });
});
