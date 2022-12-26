type DayForecastItemDetailComponentProps = {
  icon: string;
  text: string;
};

export function DayForecastItemDetailComponent(props: DayForecastItemDetailComponentProps) {
  return (
    <>
      <div className="grid place-items-center">
        <i className={`fa-solid ${props.icon}`}></i>
      </div>
      <div>{props.text}</div>
    </>
  );
}
