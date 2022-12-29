import styled from "@emotion/styled/macro";

const Container = styled.div`
  background: #f0ebe8dd;
  height: 550px;
  display: grid;
  place-items: center;
  color: #8a8683;
`;

export function Loading() {
  return (
    <Container>
      <span
        className="icon rotating"
        style={{ display: "flex", fontSize: "410px" }}
        data-icon="("
      />
    </Container>
  );
}
