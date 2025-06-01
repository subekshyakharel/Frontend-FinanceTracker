import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdBalance } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { useUser } from "../context/UserContext";

const DashboardBalance = () => {
  const { balance, income, expense } = useUser();
  return (
    <>
      <Row className="g-3">
        <Col>
          <div className="bg-warning rounded text-dark p-3 d-flex justify-content-around align-items-center">
            <div>
              <MdBalance style={{ fontSize: "7rem" }} />
            </div>

            <div className="text-start">
              <h5>Balance</h5>
              <hr />
              <h2>${balance}</h2>
            </div>
          </div>
        </Col>

        <Col>
          <div className="bg-success rounded text-dark p-3 d-flex justify-content-around align-items-center">
            <div>
              <FaMoneyBillTrendUp
                className="text-"
                style={{ fontSize: "7rem" }}
              />
            </div>

            <div className="text-start">
              <h5>Income</h5>
              <hr />
              <h2>${income}</h2>
            </div>
          </div>
        </Col>

        <Col>
          <div className="bg-danger rounded text-dark p-3 d-flex justify-content-around align-items-center">
            <div>
              <GiExpense style={{ fontSize: "7rem" }} />
            </div>

            <div className="text-start">
              <h5>Expenses</h5>
              <hr />
              <h2>${expense}</h2>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DashboardBalance;
