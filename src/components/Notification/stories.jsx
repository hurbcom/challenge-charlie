import { Notification } from ".";

export default {
  title: "Notification",
  component: Notification,
};

export const Default = (args) => (
  <div id="notification">
    <Notification {...args} />
  </div>
);

Default.args = {
  onCloseNotification: () => {},
  notification: "this is a notification"
};
