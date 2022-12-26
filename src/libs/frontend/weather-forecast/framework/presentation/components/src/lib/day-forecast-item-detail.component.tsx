import classNames from "classnames";

type DayForecastItemDetailComponentProps = {
  icon: string;
  text: string;

  action?: () => void
};

export function DayForecastItemDetailComponent(props: DayForecastItemDetailComponentProps) {
  return (
    <div className={`grid grid-cols-[20px_auto] ${classNames({
      'cursor-pointer': !!props.action
    })}`} onClick={props.action}>
      <div className="grid place-items-center">
        <i className={`fa-solid ${props.icon}`}></i>
      </div>
      <div>{props.text}</div>
    </div>
  );
}
