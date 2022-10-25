import { LoadingContainer } from './styles';
import './loading.css';

export function Loading() {
  return (
    <LoadingContainer>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </LoadingContainer>
  )
}