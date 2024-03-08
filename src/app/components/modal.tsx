import "@/app/styles/modal.css"
import Close from "../assets/Close"

interface Props {
  isOpen?: boolean
  handleClose?: () => void
  children?: React.ReactNode
  title?: string
}

function Modal({
  children,
  handleClose,
  isOpen = true,
  title = "tituloo",
}: Props) {
  return (
    isOpen && (
      <div className='provider'>
        <div className='modal'>
          <header className='header'>
            <span className='title'>{title}</span>
            <button onClick={handleClose} type='button'>
              <Close />
            </button>
          </header>
          {children}
        </div>
      </div>
    )
  )
}

export default Modal
