import { updateAccounts } from "../actions/accounts"
import Account from "../types/Account"
import AccountInput from "./account-input"
import Modal, { ModalProps } from "./modal"
import "@/app/styles/account-modal.css"

function AccountModal({
  handleClose,
  isOpen,
  accounts,
}: ModalProps & { accounts: Account[] }) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title='Editar cuentas'>
      <div className='body'>
        <form action={updateAccounts} className='form'>
          <div>
            <AccountInput
              img='Brubank.jpeg'
              placeholder='Brubank'
              name='brubank'
              defaultValue={accounts[0].amount.toString()}
            />
          </div>
          <div>
            <AccountInput
              img='Lemon.jpeg'
              placeholder='Lemon'
              name='lemon'
              defaultValue={accounts[1].amount.toString()}
            />
          </div>
          <div>
            <AccountInput
              img='Fiwind.jpeg'
              placeholder='Fiwind'
              name='fiwind'
              defaultValue={accounts[2].amount.toString()}
            />
          </div>
          <div>
            <AccountInput
              img='Uala.jpeg'
              placeholder='Ualá'
              name='uala'
              defaultValue={accounts[3].amount.toString()}
            />
          </div>
          <footer>
            <button className='submit'>Aceptar</button>
          </footer>
        </form>
      </div>
    </Modal>
  )
}

export default AccountModal
