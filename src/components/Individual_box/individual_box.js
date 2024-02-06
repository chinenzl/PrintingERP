import './individual_box.css'
import Card from '../card'
function IndividualBox() {


    return (
        <div className="individual_box">
            <div className="box_header">
                <div className="left">
                    <span className="staff_name">Liam</span>
                    <span className="job-count">18</span>
                </div>
                <a href="#" className="add_new">+</a>
            </div>
            <Card />
            <Card />
        </div>

    );
}
export default IndividualBox;