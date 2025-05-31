import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TransactionForm from '../components/TransactionForm'
import TransactionTable from '../components/TransactionTable'
import { useUser } from '../context/UserContext'
import { useEffect } from 'react'
import { CustomModal } from '../components/CustomModal'

const Transactions = () => {
  const {getTransaction} = useUser();

  useEffect(()=>{
    getTransaction();
  }, [])
  return (
    <div>
      <Container className="p-3">
        <Row className='bg-dark p-5 rounded'>
            <Col >
            <CustomModal>
              <TransactionForm/>
            </CustomModal>
           <hr />
           <TransactionTable/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Transactions;
