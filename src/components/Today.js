export function Today() {
  return (
    <div className="today">
      <div style={{ overflow: "hidden" }}>
        <span className="icon" data-icon="B" />
      </div>
      <div className="info">
        <div style={{ fontWeight: "bold" }}>HOJE</div>
        <div style={{ fontWeight: "bold" }}>32ºC</div>
        <div style={{ height: "50px" }} />
        <div>Ensolarado</div>
        <div>Vento: NO 6.4km/h</div>
        <div>Humidade: 78%</div>
        <div>Pressão: 1003hPA</div>
      </div>
    </div>
  );
}
