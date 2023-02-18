/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './styles.scss'

interface Props {
  title: string
  subtitle?: string
  children: React.ReactNode
  onClose: () => void
  active: boolean
}

export const Modal = ({
  title,
  subtitle,
  children,
  onClose,
  active,
}: Props) => {
  const handleModalClose = () => {
    onClose()
  }

  if (!active) return null

  return (
    <div className='modal'>
      <div className='modal-background' onClick={handleModalClose} />

      <div className='modal-content'>
        <div className='modal-header'>
          <div className='column'>
            <span className='modal-title'>{title}</span>

            {subtitle && <span className='subtitle'>{subtitle}</span>}
          </div>

          <button
            className='modal-close'
            aria-label='close'
            onClick={handleModalClose}
          >
            Close
          </button>
        </div>

        <hr />

        {children}
      </div>
    </div>
  )
}
