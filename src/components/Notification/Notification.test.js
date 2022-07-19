import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Notification } from ".";
import { customRender } from "../../utils/test/test-utils";

const root = document.createElement("div");
root.setAttribute("id", "notification");

describe("<Notification />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render notification component", () => {
    customRender(<Notification notification="foo" />, {
      container: document.body.appendChild(root),
    });

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });
  it("should call function to close modal", () => {
    const onClose = jest.fn();
    customRender(
      <Notification notification="foo" onCloseNotification={onClose} />,
      {
        container: document.body.appendChild(root),
      }
    );

    userEvent.click(screen.getByText(/foo/i));
    expect(onClose).toBeCalled();
  });
  it("should call function to close modal after 1s", async () => {
    const onClose = jest.fn();
    customRender(
      <Notification
        notification="foo"
        onCloseNotification={onClose}
        timer={1000}
      />,
      {
        container: document.body.appendChild(root),
      }
    );
    act(() => jest.advanceTimersByTime(1000));

    expect(onClose).toBeCalled();
  });
});
