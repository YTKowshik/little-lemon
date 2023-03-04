import { Form } from "react-bootstrap";
import QRCode from "react-qr-code";

const QRCodeComponent = ({ value }) => {
    return <>
        <QRCode
            size={250}
            style={{ height: "auto", maxWidth: "250", width: "250" }}
            value={value}
            viewBox={`0 0 100 100`}

        />
        <Form.Control className="mt-2" type="text" disabled value={value} />
    </>
}
export default QRCodeComponent;