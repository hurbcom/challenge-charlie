import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordeon from ".";
import { ConfigObject } from "./Accordeon";

const renderTab = jest
    .fn()
    .mockImplementation((data, obj: ConfigObject) => (
        <div>{`data: ${obj.isOpen ? data.foo : "closed"}`}</div>
    ));

describe("Testing the Accordeon component", () => {
    it("should call the renderTab function", () => {
        render(
            <Accordeon renderTab={renderTab} tabDataArray={[{ foo: "bar" }]} />
        );
        expect(renderTab).toHaveBeenCalled();
    });
    it("should render the result of renderTab function", () => {
        render(
            <Accordeon renderTab={renderTab} tabDataArray={[{ foo: "bar" }]} />
        );
        expect(screen.getByText(/data: bar/)).toBeDefined();
    });

    it("should not render closed tabs", () => {
        render(
            <Accordeon
                renderTab={renderTab}
                tabDataArray={[{ foo: "bar" }, { foo: "baz" }]}
            />
        );
        expect(screen.queryByText(/data: baz/)).toBe(null);
    });

    it("should not render closed tabs", () => {
        render(
            <Accordeon
                renderTab={renderTab}
                tabDataArray={[{ foo: "bar" }, { foo: "baz" }]}
            />
        );
        expect(screen.queryByText(/data: baz/)).toBe(null);
    });
});
