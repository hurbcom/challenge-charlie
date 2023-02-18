import { Modal } from '@/components'
import { useState } from 'react'

export const TipsModal = () => {
  const [active, setActive] = useState(false)

  return (
    <div>
      <button
        aria-label='open'
        onClick={() => setActive(true)}
        className='tips-btn'
      >
        <img src='/icons/question-mark.svg' alt='' width={16} />
      </button>

      <Modal
        title='Tips'
        subtitle='Here are some tips to help you get the most out of this app.'
        onClose={() => setActive(false)}
        active={active}
      >
        <ul>
          <li>
            <strong>Click on the temperature</strong> to toggle between Celsius
            and Fahrenheit.
          </li>
        </ul>
      </Modal>
    </div>
  )
}
