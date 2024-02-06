import IndividualBox from "../../components/Individual_box/individual_box"
import AddForm from "../../components/add_form/add_form";
import "./Job_List.css"
function JobList() {
    return (
        <div className="list_page mt-12">
            <div className="column">
                <IndividualBox></IndividualBox>
            </div>
            <div className="column">
                <IndividualBox></IndividualBox>
            </div>
            <div className="column">
                <IndividualBox></IndividualBox>
            </div>
            <div className="column">
                <IndividualBox></IndividualBox>
            </div><div className="column">
                <IndividualBox></IndividualBox>
            </div>
            <div className="column">
                <IndividualBox></IndividualBox>
            </div>
            <div className="add_form">
                <AddForm />
            </div>

        </div>
    );
}
export default JobList;