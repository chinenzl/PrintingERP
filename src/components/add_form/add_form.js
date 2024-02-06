import "./add_form.css"
import Table from 'react-bootstrap/Table';
function AddForm() {
    return (
        <div className="job_form">
            <div className="info_box">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan={2}><input placeholder="Untitled"></input></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Job number</td>
                            <td> <input placeholder="Job-number"></input></td>
                        </tr>
                        <tr>
                            <td>Created by</td>
                            <td> <span>Member</span></td>
                        </tr>
                        <tr>
                            <td>Person in Charge</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Next Person</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Sales Person</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Urgent</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Due Day</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Files Location</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Media Sources</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Pricing</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Job Status</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Invoice Status</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Job Done</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                        <tr>
                            <td>Finish Date</td>
                            <td><select placeholder="Empty">Member</select></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default AddForm;